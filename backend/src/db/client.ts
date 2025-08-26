import postgres from 'postgres';
import { FastifyInstance } from 'fastify';
import { config } from '../config.js';

let sql: ReturnType<typeof postgres>;

export function registerDb(_app: FastifyInstance) {
  sql = postgres(config.databaseUrl, { prepare: true });
}

export const db = {
  async insertComposeSession(rec: any) {
    await sql/*sql*/`
      insert into compose_sessions (compose_id, status, request_payload, archetype_key)
      values (${rec.compose_id}, ${rec.status}, ${sql.json(rec.request_payload)}, ${rec.archetype_key})
    `;
  },
  async updateComposeSession(id: string, patch: any) {
    await sql/*sql*/`
      update compose_sessions
      set
        status = coalesce(${patch.status}, status),
        proposed_examples = coalesce(${patch.proposed_examples ? sql.json(patch.proposed_examples) : null}, proposed_examples),
        approved_examples = coalesce(${patch.approved_examples ? sql.json(patch.approved_examples) : null}, approved_examples),
        proposed_template_spec = coalesce(${patch.proposed_template_spec ? sql.json(patch.proposed_template_spec) : null}, proposed_template_spec),
        approved_template_spec = coalesce(${patch.approved_template_spec ? sql.json(patch.approved_template_spec) : null}, approved_template_spec),
        last_run_audit = coalesce(${patch.last_run_audit ? sql.json(patch.last_run_audit) : null}, last_run_audit),
        updated_at = now()
      where compose_id = ${id}
    `;
  },
  async getComposeSession(id: string) {
    const rows = await sql/*sql*/`select * from compose_sessions where compose_id = ${id} limit 1`;
    return rows[0];
  },

  async findCandidateExamples(params: {
    agency?: string, contract_type?: string, project_domain?: string, allowExpand?: boolean
  }) {
    const { agency, contract_type, project_domain, allowExpand } = params;
    let rows = await sql/*sql*/`
      select doc_id, title, abstract, agency, contract_type, project_domain, year, recency_score
      from documents
      where agency = ${agency} and contract_type = ${contract_type} and project_domain = ${project_domain}
      order by year desc
      limit 20
    `;
    if (rows.length < 3 && allowExpand) {
      rows = await sql/*sql*/`
        select doc_id, title, abstract, agency, contract_type, project_domain, year, recency_score
        from documents
        where project_domain = ${project_domain}
        order by recency_score desc
        limit 20
      `;
    }
    return rows;
  },

  async hybridSearchChunks(params: {
    keywords: string | null,
    approvedDocIds: string[] | null,
    limit: number
  }) {
    const { keywords, approvedDocIds, limit } = params;
    const whereDoc = approvedDocIds?.length ? sql`c.doc_id = any(${approvedDocIds})` : sql``;
    const whereTs = keywords and keywords.trim().length
      ? sql`ts_rank_cd(c.tsv, plainto_tsquery('english', ${keywords})) > 0`
      : sql``;

    const rows = await sql/*sql*/`
      select c.doc_id, c.section_ref, c.text
      from chunks c
      where 1=1
      ${whereDoc ? sql`and ${whereDoc}` : sql``}
      ${whereTs ? sql`and ${whereTs}` : sql``}
      order by case when ${whereTs ? 1 : 0} = 1 then ts_rank_cd(c.tsv, plainto_tsquery('english', ${keywords ?? ''})) end desc nulls last,
               c.id desc
      limit ${limit}
    `;
    return rows;
  }
};