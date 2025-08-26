import OpenAI from 'openai';
import { config } from '../config.js';

const offline = !config.llm.apiKey;

const client = offline ? null : new OpenAI({
  apiKey: config.llm.apiKey,
  baseURL: config.llm.baseUrl
});

export async function chatJson<T>(system: string, user: string, forceJson = true): Promise<{ ok: boolean, data?: T, raw?: string, error?: any }> {
  if (offline) {
    // Deterministic offline mock that adheres to expected shapes.
    try {
      const u = JSON.parse(user);
      const order: string[] = u?.template_spec?.template_spec?.order
        ?? ['cover','scope','deliverables','milestones','pricing','security','terms'];
      const sections = Object.fromEntries(order.map((s: string) => [
        s,
        {
          text: `[MOCK] ${s} for ${u?.inputs?.project_name ?? 'Project'} — fill with house style.`,
          source_refs: []
        }
      ]));
      const mock: any = u?.approved_doc_ids
        ? {
            schema: { sections: order.map((id: string) => ({ id })) },
            template_spec: { order, rendering: { deliverables: 'bulleted_list', milestones: 'table' } }
          }
        : { sections };
      return { ok: true, data: mock as T, raw: JSON.stringify(mock) };
    } catch (e) {
      return { ok: false, raw: '{}', error: e };
    }
  }

  const res = await client!.chat.completions.create({
    model: config.llm.modelChat,
    temperature: 0.1,
    response_format: forceJson ? { type: 'json_object' } : undefined,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ]
  } as any);
  const raw = res.choices[0]?.message?.content ?? '{}';
  try {
    const data = JSON.parse(raw);
    return { ok: true, data, raw };
  } catch (e) {
    return { ok: false, raw, error: e };
  }
}