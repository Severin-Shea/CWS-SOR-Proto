# SOR Composer Prototype (Backend First)

Implements the approvals-driven SOR generation flow:
1) Create compose session and propose examples
2) Approve examples → propose template
3) Approve template
4) Compose draft (JSON + citations) and render a placeholder DOCX

Stack
- Node 20+, TypeScript, Fastify
- Postgres 16 (Docker) with pgvector installed (embeddings optional in this MVP)
- OpenAI-compatible LLM (OpenAI, Azure, or local router) — optional. Offline mock works with no API key.

Quick start
1) Prereqs
   - Node 20+
   - Docker

2) Start Postgres
   - docker compose up -d db
   - DB URL: postgres://postgres:postgres@localhost:5432/sor

3) Configure env
   - cd backend
   - cp .env.example .env
   - Optional: set LLM_API_KEY and LLM_BASE_URL

4) Install and run
   - npm install
   - psql -f src/db/schema.sql postgres://postgres:postgres@localhost:5432/sor
   - psql -f src/db/seed.sql postgres://postgres:postgres@localhost:5432/sor
   - npm run dev
   - Docs at http://localhost:4000/docs

Endpoints (happy path)
- POST /compose/init
- POST /compose/:id/approve-examples
- POST /compose/:id/approve-template
- POST /compose/:id/run
- GET  /compose/:id

Notes
- Retrieval is FTS-only in this MVP (no embeddings required). We can enable hybrid retrieval after ingestion is added.
- If no LLM key is provided, the service returns a deterministic mock SOR JSON so you can demo end-to-end.
- DOCX output is a placeholder file; swap in docxtemplater later.

Next
- Add ingestion (DOCX/PDF → text chunks) and turn on vector search.
- Add validator + "missing evidence" question pass.
- Add RBAC and audit actor IDs.