# CWS-SOR-Proto

This prototype uses existing SOR documents and curated metadata to generate new SORs with accurate structure, terminology, and constraints.

## Quick start

1. Install dependencies
   ```
   pip install -r requirements.txt
   ```

2. Normalize metadata (converts Drafted-SOR-Metadatav2.json into a standardized schema)
   ```
   python scripts/normalize_sor_metadata.py
   ```

3. Validate metadata against schema
   ```
   python scripts/validate_metadata.py
   ```

4. Extract DOCX exemplars to Markdown with frontmatter
   ```
   python scripts/extract_docx_text.py
   ```

5. Build section-aware chunks for retrieval
   ```
   python src/chunk_markdown.py
   ```
   Chunks are written to `context/chunks.jsonl`.

## How generation uses this data

- Pre-filter exemplars by `sorType`, `sector`, and `jurisdiction.state`.
- Retrieve top-k chunks from `context/chunks.jsonl` weighted by overlapping `securityCompliance`, `deliveryModel`, and `pricingModel`.
- Assemble the response via `prompts/sor-generation-system-prompt.md`, citing exemplar sections like `[cite: docId §Section]`.

## Conventions

- Normalized metadata: `existingSORDocs/metadataSORDocs/sor-metadata.normalized.json` (validated by `metadata/sor-metadata.schema.json`).
- Extracted Markdown: `processedDocs/{id}.md` with YAML frontmatter.
- CI validates metadata on every push/PR.

## Notes

- Avoid including sensitive details from exemplars; redact PII and internal credentials.
- Keep metadata updated; set `lastReviewed` when changing content.

---

## Backend SOR Composer Prototype

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