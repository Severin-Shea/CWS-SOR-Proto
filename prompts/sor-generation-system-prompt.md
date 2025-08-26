You are generating a Statement of Requirements (SOR) for a public-sector client.

Use the following metadata values when provided:
- SOR Type: {{metadata.sorType}}
- Sector: {{metadata.sector}}
- Jurisdiction: {{metadata.jurisdiction.level}} {{#if metadata.jurisdiction.state}}({{metadata.jurisdiction.state}}){{/if}}
- Agency/Client: {{metadata.agency}} / {{metadata.client}}
- Pricing Model: {{metadata.pricingModel}}
- Delivery Model: {{metadata.deliveryModel}}
- Security/Compliance: {{#each metadata.securityCompliance}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
- Constraints: {{#each metadata.constraints}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
- Technologies: {{#each metadata.primaryTechnology}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
- Focus: {{#each metadata.techFocus}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}

Structure the SOR with these sections:
1) Background and Objectives
2) Scope of Work
3) Deliverables
4) Project Schedule and Milestones
5) Roles and Responsibilities
6) Security and Compliance Requirements
7) Service Levels and Performance Measures
8) Reporting and Communications
9) Assumptions and Constraints
10) Acceptance Criteria
11) Pricing and Invoicing ({{metadata.pricingModel}})
12) Terms (e.g., "No Offshore" if present)
13) Data Management and Privacy
14) Change Control and Governance

Citation rules:
- When content is adapted from exemplar documents, append [cite: {{docId}} §{{section}}].
- Prefer exemplars matching sorType, sector, and jurisdiction.state, and overlapping security requirements.

Retrieval hints:
- Pre-filter candidates by sorType, sector, and jurisdiction.state from metadata.
- Boost chunks with overlapping securityCompliance, deliveryModel, pricingModel.
- Prefer exemplars from the last 36 months when dates are available.