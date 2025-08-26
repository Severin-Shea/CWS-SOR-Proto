import { db } from '../db/client.js';

export async function proposeExamples({ agency, contract_type, project_domain, inputs, allowExpand }:
  { agency: string, contract_type: string, project_domain: string, inputs: any, allowExpand: boolean }) {

  const candidates = await db.findCandidateExamples({ agency, contract_type, project_domain, allowExpand });
  return (candidates ?? []).slice(0, 6).map((c: any, i: number) => ({
    doc_id: c.doc_id, title: c.title, abstract: c.abstract, score: 0.9 - i * 0.03
  }));
}

export async function hybridRetrieveSections(params: {
  query: string,
  approvedDocIds: string[] | null,
  limit: number
}) {
  const rows = await db.hybridSearchChunks({
    keywords: params.query,
    approvedDocIds: params.approvedDocIds,
    limit: params.limit
  });
  return rows.map((r: any) => ({
    doc_id: r.doc_id,
    section_ref: r.section_ref,
    text: r.text
  }));
}