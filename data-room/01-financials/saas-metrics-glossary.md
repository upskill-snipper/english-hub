# SaaS Metrics Glossary

**Status**: v0.1 — Reference
Every metric used in the financial model, dashboards, and investor materials must appear here with a clear definition and formula. If a metric isn't here, it shouldn't be in an investor document.

---

## Revenue metrics

### MRR — Monthly Recurring Revenue
The predictable monthly revenue from active subscriptions, excluding one-time fees.
**Formula**: `Sum(monthly price × active subscriptions)`

### ARR — Annual Recurring Revenue
MRR annualised. Excludes one-time fees, professional services, and usage overages not contracted.
**Formula**: `MRR × 12`

### Committed ARR (CARR)
ARR including signed contracts that have not yet started billing. Always disclose whether reported ARR is committed or live.

### New MRR / New ARR
Revenue from brand-new customers in the period.

### Expansion MRR
Additional MRR from existing customers (seat expansion, upgrades, cross-sells).

### Contraction MRR
Reduction in MRR from existing customers who downgrade but don't churn.

### Churned MRR
MRR lost from customers who cancelled entirely in the period.

### Net New ARR
`New ARR + Expansion ARR − Contraction ARR − Churned ARR`

### ACV — Annual Contract Value
Average revenue per customer per year.
**Formula**: `Total ARR / Paying customers`

### ARPU — Average Revenue Per User
`MRR / Paying customers` (monthly) or the annual equivalent.

### Bookings vs. billings vs. revenue
- **Bookings**: value of contracts signed in the period (forward-looking).
- **Billings**: amounts invoiced to customers in the period.
- **Revenue**: recognised revenue under the company's recognition policy (see `revenue-recognition-policy.md`).

---

## Retention metrics

### Gross Revenue Retention (GRR)
Percentage of starting MRR retained, **excluding** expansion. Caps at 100%.
**Formula**: `(Starting MRR − Churn − Contraction) / Starting MRR`

### Net Revenue Retention (NRR) / Net Dollar Retention (NDR)
Percentage of starting MRR retained, **including** expansion. Can exceed 100%.
**Formula**: `(Starting MRR − Churn − Contraction + Expansion) / Starting MRR`

### DBNR — Dollar-Based Net Retention
Same as NRR. Use one term consistently.

### Logo retention
Percentage of customer logos retained.
**Formula**: `(Starting logos − Churned logos) / Starting logos`

### Monthly churn rate
`Churned MRR in month / Starting MRR`

### Annual churn rate
`1 − (1 − monthly churn)^12`

### Cohort retention curve
For each signup cohort, the percentage of logos (or revenue) still active at M1, M2, …, M24. See `cohort-retention-template.csv`.

---

## Acquisition metrics

### CAC — Customer Acquisition Cost
Fully-loaded cost of acquiring a new customer.
**Formula**: `(Sales & marketing spend in period, including salaries and tools) / New customers acquired in period`

### Blended CAC
CAC across all channels.

### Paid CAC
CAC for paid channels only (excluding organic new customers).

### CAC by channel
CAC computed separately for each distinct acquisition channel.

### LTV — Lifetime Value
Gross-margin-based expected revenue from a customer over their lifetime.
**Formula (simple)**: `ACV × Gross margin % / Annual churn %`
**Formula (cohort-based)**: sum of gross profit from a cohort divided by the starting logos.

### LTV / CAC
Ratio of LTV to CAC. 3.0x or higher is healthy for most SaaS. Below 1.0x is unsustainable.

### CAC payback (months)
Months of gross profit required to recover CAC.
**Formula**: `CAC / (ACV × Gross margin % / 12)`

---

## Efficiency metrics

### Gross margin %
`(Revenue − COGS) / Revenue`. For SaaS, target 70%+ long-term; AI-heavy products often start lower due to model costs.

### Rule of 40
`Growth rate % + EBITDA margin %`. 40%+ is considered healthy for scaling SaaS.

### Magic Number
`(Change in quarterly ARR × 4) / Prior-quarter S&M spend`. Above 0.75 indicates efficient growth.

### Burn Multiple
`Net burn / Net new ARR` in a period. Below 1.0 is excellent, 1.0–2.0 is healthy, above 2.0 indicates inefficient growth.

### Runway (months)
`Cash / Monthly net burn`. Investors typically want 18+ months post-raise.

### Net burn
`Operating cash outflow − Operating cash inflow` (monthly).

---

## Activity metrics (learning product specific)

### MAU / WAU / DAU
Monthly / Weekly / Daily active users. Define "active" explicitly (e.g. "completed at least one lesson in the period").

### DAU/MAU ratio
Stickiness. 20%+ is strong for education consumer apps.

### Lessons completed per active user per week
Product engagement proxy.

### Time-on-task
Total minutes spent in the app per user per period.

### Trial → paid conversion %
`Paying customers from cohort / Total trials started in cohort`

### Activation rate
`Users who reached the activation event / New signups`. Define the activation event explicitly.

---

## Notes on definitions

- **Be consistent**: if you change a definition, note the change date in the model and in `key-assumptions.md`, and restate prior periods.
- **Be explicit**: in every investor document, state whether a metric is monthly or annual, live or committed, gross or net.
- **Avoid fake metrics**: downloads, signups without activation, and "community size" are not SaaS metrics. Don't put them on the traction slide.
