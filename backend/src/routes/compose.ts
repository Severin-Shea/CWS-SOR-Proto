import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { randomUUID } from 'node:crypto';
import { db } from '../db/client.js';
import { pickExamplesForInit, proposeTemplate, composeDraft } from '../services/flow.js';

export const composeRoutes: FastifyPluginCallback = (app: FastifyInstance, _opts, done) => {
  app.post('/init', async (req, reply) => {
    const body = req.body as any;
    const composeId = randomUUID();
    const { agency, contract_type, project_domain, inputs, allow_expand_beyond_examples } = body;
    await db.insertComposeSession({
      compose_id: composeId,
      status: 'examples_pending',
      request_payload: body,
      archetype_key: `${agency}|${contract_type}|${project_domain}`
    });
    const examples = await pickExamplesForInit({ agency, contract_type, project_domain, inputs, allowExpand: allow_expand_beyond_examples });
    await db.updateComposeSession(composeId, { proposed_examples: examples });
    return reply.send({
      compose_id: composeId,
      examples_proposal: examples.map(e => ({ doc_id: e.doc_id, title: e.title, abstract: e.abstract, score: e.score })),
      next_action: 'approve_examples'
    });
  });

  app.post('/:composeId/approve-examples', async (req, reply) => {
    const { composeId } = req.params as any;
    const { approved_doc_ids } = req.body as any;
    await db.updateComposeSession(composeId, { approved_examples: approved_doc_ids, status: 'template_pending' });
    const session = await db.getComposeSession(composeId);
    const proposal = await proposeTemplate({
      inputs: session.request_payload.inputs,
      approvedDocIds: approved_doc_ids
    });
    await db.updateComposeSession(composeId, { proposed_template_spec: proposal });
    return reply.send({
      template_proposal: proposal,
      next_action: 'approve_template'
    });
  });

  app.post('/:composeId/approve-template', async (req, reply) => {
    const { composeId } = req.params as any;
    const { accept, feedback } = req.body as any;
    const session = await db.getComposeSession(composeId);
    if (!accept) {
      const reproposal = await proposeTemplate({
        inputs: session.request_payload.inputs,
        approvedDocIds: session.approved_examples,
        feedback
      });
      await db.updateComposeSession(composeId, { proposed_template_spec: reproposal });
      return reply.send({ status: 'reproposed', next_action: 'approve_template' });
    }
    await db.updateComposeSession(composeId, {
      approved_template_spec: session.proposed_template_spec,
      status: 'drafting'
    });
    return reply.send({ status: 'accepted', next_action: 'compose_draft' });
  });

  app.post('/:composeId/run', async (req, reply) => {
    const { composeId } = req.params as any;
    const session = await db.getComposeSession(composeId);
    const result = await composeDraft({
      composeId,
      inputs: session.request_payload.inputs,
      templateSpec: session.approved_template_spec,
      approvedDocIds: session.approved_examples,
      allowExpand: session.request_payload.allow_expand_beyond_examples
    });
    await db.updateComposeSession(composeId, { status: 'completed', last_run_audit: result.audit });
    return reply.send(result);
  });

  app.get('/:composeId', async (req, reply) => {
    const { composeId } = req.params as any;
    const session = await db.getComposeSession(composeId);
    return reply.send(session);
  });

  done();
};