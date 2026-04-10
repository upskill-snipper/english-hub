# 08 — Metrics

This folder holds the operational KPI trackers. Where `01-financials/` is the book of record for finance, this folder is the book of record for how the business is performing operationally — the numbers you'd look at in a Monday morning team meeting or send in a monthly investor update.

> **Founder checklist**
> - [ ] Every metric in the monthly KPI tracker has a definition in `01-financials/saas-metrics-glossary.md`
> - [ ] Numbers reconcile to the financial model on the last day of each month
> - [ ] Update before the 5th business day of the following month
> - [ ] Historical rows are locked; never retroactively edit closed months

---

## Contents

| File | Cadence | Purpose |
|---|---|---|
| `monthly-kpi-template.csv` | Monthly | Core operating metrics for the monthly investor update and team review |
| `arr-build-template.csv` | Quarterly | Quarterly ARR build tied to the budget and board deck |

---

## How this folder relates to the others

- **Definitions** come from `01-financials/saas-metrics-glossary.md`. If a metric doesn't have a definition there, don't add it here.
- **Assumptions** behind forecasted columns come from `01-financials/key-assumptions.md`.
- **Reporting** uses these files:
  - Monthly investor update → pull the latest month from `monthly-kpi-template.csv`
  - Board deck → pull the quarterly build from `arr-build-template.csv`
  - IM Section 5 → reconcile headline metrics back to these files

---

## Monthly close routine

1. Close the financial month in the accounting system.
2. Pull raw data from product analytics, Stripe, ad platforms, and support tool.
3. Populate the new row in `monthly-kpi-template.csv`.
4. Reconcile to `01-financials/financial-model-template.csv` — if anything is off by more than 1%, investigate before publishing.
5. Update the latest quarter column in `arr-build-template.csv` if a quarter-end falls in the month.
6. Write the investor update using these numbers and archive the snapshot.
7. Bump the document version in `data-room/README.md` if the template structure changed.
