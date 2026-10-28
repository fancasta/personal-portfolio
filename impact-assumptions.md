# Portfolio impact model — working assumptions

All figures below are scenarios for discussion, not measured results. The only existing benefit estimate is the user's resume statement of 80 hours of annual manual data preparation saved. Times and volumes need validation through a timed baseline, staff interviews and system logs.

## Grant reporting dashboard

A reasonable hypothetical monthly cycle for one combined reporting package: extract Salesforce reports 1–2 hours, clean and join 2–4 hours, apply programme-specific definitions and review exceptions 2–4 hours, build Excel templates/charts and distribute 2–4 hours. Total 7–14 hours per cycle; 12 cycles imply 84–168 hours/year. A central pipeline might still require 1–4 hours per cycle for review and exceptions, or 12–48 hours/year. For the midpoint (10 hours manual vs 2.5 hours with automation), 12 × (10 − 2.5) = 90 hours gross annual reduction. The bounds cannot be combined as a measured confidence interval. Excludes implementation, maintenance, hosting, Salesforce licences and exceptional rework. If maintenance requires 24 hours/year, the midpoint net operational difference becomes 66 hours/year. One-time build cost remains separate; at a hypothetical 200–500 engineering hours, simple payback at 66 net hours/year is roughly 3–8 years if hours are valued equally. Productivity, compliance and timeliness benefits may justify the build but are not monetised in this model.

A Salesforce Report + Excel baseline can perform meaningful aggregation, charts, formulas, exports and some automation; exact limits depend on permissions, Salesforce editions, source data model and the report/export configuration. The dashboard offers one governed place for programme-specific logic, repeatable data pipelines, historical snapshots, scoped access, bespoke drilldowns, audit/review workflows and integration delivery. It also introduces engineering ownership, maintenance, hosting and privacy obligations. Bespoke functionality is not evidence that Salesforce cannot implement an equivalent solution.

Potential indicators: elapsed hours from period close to reviewed report; staff minutes per monthly cycle; percentage of outputs passing reconciliation first time; refresh freshness; number of manual interventions; availability; and per-programme completeness. Start with a 3-cycle baseline and time records. Targets are hypotheses until measured.

## Workato sundown and event automation

Example: 500 registration changes per year, 3 minutes each for manual handling, versus 8 hours annual exception/review time = 25 − 8 = 17 hours/year gross avoided staff time. This excludes build effort, operational maintenance and platform fees. For 250–1,000 changes and 2–5 minutes each, manual baseline is about 8–83 hours/year; exception handling must be measured separately. Workato replacement cost benefit = avoided Workato subscription and usage costs − incremental Salesforce/hosting cost − ongoing engineering maintenance; obtain actual invoices before stating savings. Repeat processing and data accuracy are distinct metrics from time saved.

Suggested metrics: source registration reconciliation rate; missed/delayed webhook count; duplicate or ambiguous identity exception rate; median time from source event to CRM update; failures requiring human intervention; replay safety; test pass rate and change lead time. Reconciliation in the event repository documents 61 tickets, 116 passing deployment-compatible tests, and a repeat of 56 unambiguous orders with no writes or new errors. This is an October 2026 recovery sample and is not an annual success rate; external delivery was not independently reconciled. The user confirms leading the work.

## Verification before external publication

Confirm employer approval for project specifics and use synthetic diagrams. Verify Jev product name, functionality and the wording of the AIC labelling workflow with the user. The agent team diagram is a conceptual working structure, not a claim of a fixed org chart or independent human staff. Salesforce capabilities vary; assess against the actual org rather than making blanket claims.
