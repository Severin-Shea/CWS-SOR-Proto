import { hybridRetrieveSections, proposeExamples as proposeExamplesImpl } from './retrieval.js';
import { chatJson } from './llm.js';
import { renderDocx } from './docx.js';

const TEMPLATE_PROPOSAL_SYS = `You are an expert SOR template designer. Propose a minimal, validated template schema and template_spec based on:
- user inputs (agency, contract_type, project_domain, constraints)
- approved examples (by doc_id; do not include raw example text)
- mandatory sections: cover, scope, deliverables, milestones, pricing, security, terms
Return STRICT JSON with:
{
  "schema": { "sections": [ { "id": "string" } ... ] },
  "template_spec": {
    "order": ["cover","scope","deliverables","milestones","pricing","security","terms"],
    "rendering": { "deliverables":"bulleted_list", "milestones":"table" }
  }
}
If user feedback is present, incorporate it deterministically (e.g., add a "compliance" section).`;

const COMPOSE_JSON_SYS = `You are an SOR composer. Produce a STRICT JSON object adhering to the user's approved template, with citations.
Rules:
- Follow template_spec.order exactly; do not invent sections.
- Each section object MUST include "text" and "source_refs" (array of "DOCID#SECTION" strings from provided evidence).
- If evidence is insufficient for a section, return an empty "text" and add a "questions" array at root describing missing items; do not hallucinate.
Output shape:
{
  "sections": {
    "<section_id>": { "text": "final prose", "source_refs": ["USDA_2023_A#4.2", "..."] },
    ...
  }
}
Style: concise, formal, and compliant (e.g., FedRAMP Moderate when specified).`;

export async function pickExamplesForInit(params: any) {
  return proposeExamplesImpl(params);
}

export async function proposeTemplate({ inputs, approvedDocIds, feedback }:
  { inputs: any, approvedDocIds: string[], feedback?: string }) {
  const user = JSON.stringify({ inputs, approved_doc_ids: approvedDocIds, feedback: feedback ?? '' });
  const { ok, data } = await chatJson<any>(TEMPLATE_PROPOSAL_SYS, user, true);
  if (!ok || !data) {
    return {
      schema: { sections: [{ id: 'cover' }, { id: 'scope' }, { id: 'deliverables' }, { id: 'milestones' }, { id: 'pricing' }, { id: 'security' }, { id: 'terms' }] },
      template_spec: {
        order: ['cover', 'scope', 'deliverables', 'milestones', 'pricing', 'security', 'terms'],
        rendering: { deliverables: 'bulleted_list', milestones: 'table' }
      }
    };
  }
  return data;
}

export async function composeDraft({ composeId, inputs, templateSpec, approvedDocIds, allowExpand }:
  { composeId: string, inputs: any, templateSpec: any, approvedDocIds: string[], allowExpand: boolean }) {

  const sections: string[] = templateSpec?.template_spec?.order ?? ['cover','scope','deliverables','milestones','pricing','security','terms'];
  const evidence: Record<string, any[]> = {};
  for (const s of sections) {
    const hits = await hybridRetrieveSections({
      query: `${inputs?.project_name ?? ''} ${s} ${JSON.stringify(inputs ?? {})}`,
      approvedDocIds: allowExpand ? null : approvedDocIds,
      limit: 6
    });
    evidence[s] = hits;
  }

  const user = JSON.stringify({
    inputs,
    template_spec: templateSpec,
    evidence,
    guidance: { require_citations: true, adhere_to_template: true }
  });
  const { ok, data, raw } = await chatJson<any>(COMPOSE_JSON_SYS, user, true);
  const sor_json = ok && data ? data : { error: 'LLM JSON parse failed', raw };

  const docxPath = await renderDocx(composeId, sor_json);

  const attribution = Object.entries(sor_json?.sections ?? {}).flatMap(([section, val]: any) => {
    const refs = val?.source_refs ?? [];
    return refs.map((r: string) => ({ section, source: r }));
  });

  const audit = {
    retrieval_counts: Object.fromEntries(sections.map((s) => [s, evidence[s]?.length ?? 0])),
    model: configModelLabel()
  };

  return {
    status: 'completed',
    sor_json,
    artifacts: [{ type: 'docx', path: docxPath }],
    attribution,
    questions: (sor_json as any)?.questions ?? [],
    audit
  };
}

function configModelLabel() {
  try {
    const url = new URL(process.env.LLM_BASE_URL || 'https://api.openai.com/v1');
    return `${url.hostname}:${process.env.LLM_MODEL_CHAT || 'model'}`;
  } catch {
    return 'offline:mock';
  }
}