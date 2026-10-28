# Portfolio impact model — working assumptions

All figures below are scenarios for discussion, not measured results. The owner reports the baseline as at least two people working one day each per report. Times and volumes need validation through a timed baseline, staff interviews and system logs.

## Grant reporting dashboard

The source lists three AAC centres (Simei 227, Simei 107, MacPherson), three CREST centres (Simei, MacPherson, Tampines), plus CREST Youth, COMIT, OMEGA and ICCP: ten illustrative programme/centre reporting units. Staff Training and Corporate Counselling are additional areas but are excluded from this quarterly model because their reporting cadence is unconfirmed. These units are not a verified count of separate grants.

The owner reports at least two people working one day each per report to identify data issues, communicate corrections, regenerate and repeat. Assuming eight working hours per person-day gives at least 16 person-hours per report. Assuming four cycles a year, ten units and one hour of remaining review per report, the illustrative difference is 10 × 4 × (16 − 1) = 600 hours/year. The one-hour review is a modelling assumption, not a measurement. Work shared between reports, actual reporting cadence, repeat work, remaining review, maintenance, implementation and hosting costs can change this result. No net savings are claimed until these are measured.
A Salesforce Report + Excel baseline can perform meaningful aggregation, charts, formulas, exports and some automation; exact limits depend on permissions, Salesforce editions, source data model and the report/export configuration. The dashboard offers one governed place for programme-specific logic, repeatable data pipelines, historical snapshots, scoped access, bespoke drilldowns, audit/review workflows and integration delivery. It also introduces engineering ownership, maintenance, hosting and privacy obligations. Bespoke functionality is not evidence that Salesforce cannot implement an equivalent solution.

Potential indicators: elapsed hours from period close to reviewed report; staff minutes per monthly cycle; percentage of outputs passing reconciliation first time; refresh freshness; number of manual interventions; availability; and per-programme completeness. Start with a 3-cycle baseline and time records. Targets are hypotheses until measured.

## Workato sundown and event automation

Example: 500 registration changes per year, 3 minutes each for manual handling, versus 8 hours annual exception/review time = 25 − 8 = 17 hours/year gross avoided staff time. This excludes build effort, operational maintenance and platform fees. For 250–1,000 changes and 2–5 minutes each, manual baseline is about 8–83 hours/year; exception handling must be measured separately. Workato replacement cost benefit = avoided Workato subscription and usage costs − incremental Salesforce/hosting cost − ongoing engineering maintenance; obtain actual invoices before stating savings. Repeat processing and data accuracy are distinct metrics from time saved.

Suggested metrics: source registration reconciliation rate; missed/delayed webhook count; duplicate or ambiguous identity exception rate; median time from source event to CRM update; failures requiring human intervention; replay safety; test pass rate and change lead time. Reconciliation in the event repository documents 61 tickets, 116 passing deployment-compatible tests, and a repeat of 56 unambiguous orders with no writes or new errors. This is an October 2026 recovery sample and is not an annual success rate; external delivery was not independently reconciled. The user confirms leading the work.

## Verification before external publication

Confirm employer approval for project specifics and use synthetic diagrams. Verify Jev product name, functionality and the wording of the AIC labelling workflow with the user. The agent team diagram is a conceptual working structure, not a claim of a fixed org chart or independent human staff. Salesforce capabilities vary; assess against the actual org rather than making blanket claims.
