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
    // Simple approach: update each field individually if it exists
    if (patch.status) {
      await sql`update compose_sessions set status = ${patch.status}, updated_at = now() where compose_id = ${id}`;
    }
    if (patch.proposed_examples) {
      await sql`update compose_sessions set proposed_examples = ${sql.json(patch.proposed_examples)}, updated_at = now() where compose_id = ${id}`;
    }
    if (patch.approved_examples) {
      await sql`update compose_sessions set approved_examples = ${sql.json(patch.approved_examples)}, updated_at = now() where compose_id = ${id}`;
    }
    if (patch.proposed_template_spec) {
      await sql`update compose_sessions set proposed_template_spec = ${sql.json(patch.proposed_template_spec)}, updated_at = now() where compose_id = ${id}`;
    }
    if (patch.approved_template_spec) {
      await sql`update compose_sessions set approved_template_spec = ${sql.json(patch.approved_template_spec)}, updated_at = now() where compose_id = ${id}`;
    }
    if (patch.last_run_audit) {
      await sql`update compose_sessions set last_run_audit = ${sql.json(patch.last_run_audit)}, updated_at = now() where compose_id = ${id}`;
    }
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
      where agency = ${agency || ''} and contract_type = ${contract_type || ''} and project_domain = ${project_domain || ''}
      order by year desc
      limit 20
    `;
    if (rows.length < 3 && allowExpand) {
      rows = await sql/*sql*/`
        select doc_id, title, abstract, agency, contract_type, project_domain, year, recency_score
        from documents
        where project_domain = ${project_domain || ''}
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
    
    // Simple approach: use different queries based on conditions
    if (approvedDocIds && approvedDocIds.length > 0 && keywords && keywords.trim().length > 0) {
      // Both filters
      const rows = await sql`
        select c.doc_id, c.section_ref, c.text
        from chunks c
        where c.doc_id = any(${approvedDocIds})
          and ts_rank_cd(c.tsv, plainto_tsquery('english', ${keywords})) > 0
        order by ts_rank_cd(c.tsv, plainto_tsquery('english', ${keywords})) desc, c.id desc
        limit ${limit}
      `;
      return rows;
    } else if (approvedDocIds && approvedDocIds.length > 0) {
      // Only doc filter
      const rows = await sql`
        select c.doc_id, c.section_ref, c.text
        from chunks c
        where c.doc_id = any(${approvedDocIds})
        order by c.id desc
        limit ${limit}
      `;
      return rows;
    } else if (keywords && keywords.trim().length > 0) {
      // Only keyword filter
      const rows = await sql`
        select c.doc_id, c.section_ref, c.text
        from chunks c
        where ts_rank_cd(c.tsv, plainto_tsquery('english', ${keywords})) > 0
        order by ts_rank_cd(c.tsv, plainto_tsquery('english', ${keywords})) desc, c.id desc
        limit ${limit}
      `;
      return rows;
    } else {
      // No filters
      const rows = await sql`
        select c.doc_id, c.section_ref, c.text
        from chunks c
        order by c.id desc
        limit ${limit}
      `;
      return rows;
    }
  }
};