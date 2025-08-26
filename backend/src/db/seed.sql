-- Minimal seed so the service can propose examples and retrieve some sections.
insert into documents (doc_id, title, abstract, agency, contract_type, project_domain, year, recency_score)
values
  ('USDA_2023_A','Cloud Migration SOR 2023','AWS migration for USDA with FedRAMP Moderate controls','USDA','FixedPrice','CloudMigration',2023,0.90)
, ('USDA_2024_B','Data Center Exit','Data center exit and migration to cloud','USDA','FixedPrice','CloudMigration',2024,0.95)
, ('HHS_2022_C','IV&V SOR','Independent Verification & Validation sample','HHS','T&M','IV&V',2022,0.70)
on conflict do nothing;

insert into chunks (doc_id, section_ref, text)
values
  ('USDA_2023_A','4.2 Security','The solution shall comply with FedRAMP Moderate. Security controls include access management and audit logging.')
, ('USDA_2023_A','2.1 Scope','Scope includes discovery, assessment, migration planning, and execution.')
, ('USDA_2024_B','3.1 Deliverables','Deliverables: Migration Plan, Test Plan, Cutover Plan, Operations Handbook.')
, ('USDA_2024_B','5.0 Milestones','Milestones: Discovery (30d), Pilot (60d), Cutover (90d).')
, ('HHS_2022_C','1.0 Terms','All terms and conditions apply per federal acquisition regulations.');