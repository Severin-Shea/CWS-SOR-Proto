create extension if not exists vector;

create table if not exists documents (
  doc_id text primary key,
  title text,
  abstract text,
  agency text,
  contract_type text,
  project_domain text,
  year int,
  recency_score real default 0,
  blob_path text,
  metadata jsonb,
  created_at timestamptz default now()
);

create table if not exists chunks (
  id bigserial primary key,
  doc_id text references documents(doc_id) on delete cascade,
  section_ref text,
  text text,
  embedding vector(1536),
  tsv tsvector,
  created_at timestamptz default now()
);
create index if not exists idx_chunks_doc on chunks(doc_id);
create index if not exists idx_chunks_vec on chunks using ivfflat (embedding vector_cosine_ops) with (lists = 100);
create index if not exists idx_chunks_tsv on chunks using gin (tsv);

create table if not exists compose_sessions (
  compose_id uuid primary key,
  status text check (status in ('examples_pending','template_pending','drafting','completed')),
  request_payload jsonb not null,
  proposed_examples jsonb,
  approved_examples jsonb,
  proposed_template_spec jsonb,
  approved_template_spec jsonb,
  archetype_key text,
  last_run_audit jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists archetype_cache (
  key text primary key,
  schema_json jsonb,
  template_spec jsonb,
  version text,
  updated_at timestamptz default now()
);

create table if not exists audit_logs (
  id bigserial primary key,
  compose_id uuid,
  actor_id text,
  action text,
  payload jsonb,
  created_at timestamptz default now()
);

create or replace function chunks_tsv_update() returns trigger as $$
begin
  new.tsv := to_tsvector('english', coalesce(new.text,''));
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_chunks_tsv on chunks;
create trigger trg_chunks_tsv before insert or update on chunks
for each row execute function chunks_tsv_update();