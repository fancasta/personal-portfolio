# Portfolio impact model — working assumptions

All figures below are scenarios for discussion, not measured results. The only existing benefit estimate is the user's resume statement of 80 hours of annual manual data preparation saved. Times and volumes need validation through a timed baseline, staff interviews and system logs.

## Grant reporting dashboard

The repository names six core programme areas: AAC, CREST, CREST Youth, COMIT, OMEGA and ICCP. These are programme areas, not a verified count of individual grants. Use six as an adjustable proxy and confirm the actual grant inventory. The user advises quarterly reporting usually occurs four times per year for each grant. At six proxy areas, that is 24 area-cycles annually, assuming no shared reporting work and all six have quarterly submissions.

Illustrative per area-cycle baseline: 0.5–1 hour export, 1–2 hours cleaning and joining, 0.5–1.5 hours applying rules and reconciling, and 1–2 hours formatting and distributing: 3–6.5 hours. The midpoint scenario uses 4 manual hours and 1 hour automated review per area-cycle: 6 × 4 × (4 − 1) = 72 hours gross per year. With 24 hours annual maintenance, the illustrative net operational difference is 48 hours/year, excluding one-time build, hosting and licence costs. Shared work across grants, actual frequencies, exceptions and user time can change the result materially. At 200–500 hypothetical build hours, equal-cost simple payback at 48 net hours/year is roughly 4.2–10.4 years; salary differences and other costs are excluded. The resume's 80-hour annual estimate is separately self-reported and should not be added to this scenario.
A Salesforce Report + Excel baseline can perform meaningful aggregation, charts, formulas, exports and some automation; exact limits depend on permissions, Salesforce editions, source data model and the report/export configuration. The dashboard offers one governed place for programme-specific logic, repeatable data pipelines, historical snapshots, scoped access, bespoke drilldowns, audit/review workflows and integration delivery. It also introduces engineering ownership, maintenance, hosting and privacy obligations. Bespoke functionality is not evidence that Salesforce cannot implement an equivalent solution.

Potential indicators: elapsed hours from period close to reviewed report; staff minutes per monthly cycle; percentage of outputs passing reconciliation first time; refresh freshness; number of manual interventions; availability; and per-programme completeness. Start with a 3-cycle baseline and time records. Targets are hypotheses until measured.

## Workato sundown and event automation

Example: 500 registration changes per year, 3 minutes each for manual handling, versus 8 hours annual exception/review time = 25 − 8 = 17 hours/year gross avoided staff time. This excludes build effort, operational maintenance and platform fees. For 250–1,000 changes and 2–5 minutes each, manual baseline is about 8–83 hours/year; exception handling must be measured separately. Workato replacement cost benefit = avoided Workato subscription and usage costs − incremental Salesforce/hosting cost − ongoing engineering maintenance; obtain actual invoices before stating savings. Repeat processing and data accuracy are distinct metrics from time saved.

Suggested metrics: source registration reconciliation rate; missed/delayed webhook count; duplicate or ambiguous identity exception rate; median time from source event to CRM update; failures requiring human intervention; replay safety; test pass rate and change lead time. Reconciliation in the event repository documents 61 tickets, 116 passing deployment-compatible tests, and a repeat of 56 unambiguous orders with no writes or new errors. This is an October 2026 recovery sample and is not an annual success rate; external delivery was not independently reconciled. The user confirms leading the work.

## Verification before external publication

Confirm employer approval for project specifics and use synthetic diagrams. Verify Jev product name, functionality and the wording of the AIC labelling workflow with the user. The agent team diagram is a conceptual working structure, not a claim of a fixed org chart or independent human staff. Salesforce capabilities vary; assess against the actual org rather than making blanket claims.
