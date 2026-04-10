# Key Assumptions

**Status**: Template v0.1
This file is the single source of truth for every assumption behind the financial model and investor narrative. If a number in the model isn't derived from a formula, it must be an assumption listed here.

> **Founder checklist**
> - [ ] Every driver in the model has an entry below
> - [ ] Each assumption has a source (actual data or a stated belief)
> - [ ] Each assumption has a date it was last reviewed
> - [ ] Sensitivity: for the top 5, note what happens if the number is 20% worse

---

## 1. Pricing

| Assumption | Value | Source / rationale | Last reviewed |
|---|---|---|---|
| Individual plan — monthly price | £[X] | [Current pricing page / A/B test] | [YYYY-MM-DD] |
| Individual plan — annual price (effective monthly) | £[X] | [Annual discount %] | |
| School plan — per-seat price | £[X] | [Pilot contracts] | |
| School plan — minimum seats | [N] | [Sales policy] | |
| Discount rate (blended) | [X]% | [Historical actual] | |
| Annual/monthly mix | [X]% annual | [Historical actual] | |

## 2. Acquisition

| Assumption | Value | Source / rationale | Last reviewed |
|---|---|---|---|
| Monthly website visitors (start) | [N] | [GA4] | |
| Visitor growth rate (monthly) | [X]% | [Trailing 3 months] | |
| Visitor → signup conversion | [X]% | [GA4] | |
| Signup → trial start | [X]% | [Product analytics] | |
| Trial → paid conversion | [X]% | [Stripe data] | |
| Organic share of new signups | [X]% | [UTM attribution] | |
| Paid channel CAC (Google) | £[X] | [Ads data] | |
| Paid channel CAC (Meta) | £[X] | [Ads data] | |
| Paid channel CAC (TikTok) | £[X] | [Ads data] | |
| Partner / affiliate CAC | £[X] | [Partner deal economics] | |
| Blended CAC target | £[X] | [Derived] | |

## 3. Retention

| Assumption | Value | Source / rationale | Last reviewed |
|---|---|---|---|
| Monthly gross logo churn — Individual | [X]% | [Cohort data] | |
| Monthly gross logo churn — School | [X]% | [Cohort data, small sample flagged] | |
| Expansion MRR rate (monthly) | [X]% | [Seat growth in existing accounts] | |
| Contraction MRR rate (monthly) | [X]% | [Downgrades] | |
| NRR target (trailing 12) | [X]% | [Plan] | |
| Refund rate | [X]% | [Stripe data] | |

## 4. Unit economics

| Assumption | Value | Source / rationale | Last reviewed |
|---|---|---|---|
| Gross margin — Individual | [X]% | [Model] | |
| Gross margin — School | [X]% | [Model] | |
| AI / LLM cost per active user per month | £[X] | [Usage × price per token] | |
| Hosting cost per active user per month | £[X] | [Cloud bill / MAU] | |
| Payment processing rate | [X]% + £[X] | [Stripe] | |
| LTV / CAC target | [N]x | [Plan] | |
| CAC payback target | [N] months | [Plan] | |

## 5. Headcount & salaries

| Assumption | Value | Source / rationale | Last reviewed |
|---|---|---|---|
| Founder salary | £[X] | [Agreed] | |
| Senior engineer salary (blended) | £[X] | [Market data] | |
| Junior engineer salary | £[X] | | |
| Content specialist salary | £[X] | | |
| GTM salary (AE) | £[X] | | |
| Marketing salary | £[X] | | |
| Employer NI / taxes rate | [X]% | [UK HMRC] | |
| Benefits cost per head | £[X]/mo | | |
| Contractor day rate (design) | £[X] | | |
| Contractor day rate (content) | £[X] | | |
| Total headcount end of Y1 | [N] | [Hiring plan] | |
| Total headcount end of Y2 | [N] | [Hiring plan] | |
| Total headcount end of Y3 | [N] | [Hiring plan] | |

## 6. Opex (non-salary)

| Assumption | Value | Source / rationale | Last reviewed |
|---|---|---|---|
| Software & tooling per head per month | £[X] | [Current run rate] | |
| Rent / facilities (monthly) | £[X] | [Lease] | |
| Marketing spend as % of revenue | [X]% | [Plan] | |
| Legal & professional (monthly baseline) | £[X] | | |
| Accounting (monthly) | £[X] | | |
| Insurance (annual) | £[X] | | |
| Travel & entertainment (monthly) | £[X] | | |

## 7. Capital & tax

| Assumption | Value | Source / rationale | Last reviewed |
|---|---|---|---|
| Opening cash | £[X] | [Bank] | |
| Round size (this raise) | £[X] | [Plan] | |
| Round timing | [Quarter YYYY] | [Plan] | |
| Corporation tax rate | [X]% | [HMRC] | |
| R&D tax credit claim | £[X]/yr | [Claim history] | |
| VAT treatment | [Standard / reverse charge / OSS] | [Accountant] | |

## 8. Macro / external

| Assumption | Value | Source / rationale | Last reviewed |
|---|---|---|---|
| FX — USD/GBP | [X] | [Plan rate] | |
| FX — EUR/GBP | [X] | [Plan rate] | |
| Inflation applied to opex (Y2, Y3) | [X]% | [Plan] | |
| AI / LLM cost trajectory | [Flat / -20%/yr / other] | [Assumption] | |

---

## Sensitivity — the top 5

For the five assumptions the plan is most exposed to, document what happens if the number is 20% worse:

| Assumption | Current | -20% case | Impact on Y2 ARR | Impact on Y2 cash | Impact on runway |
|---|---|---|---|---|---|
| Blended CAC | | | | | |
| Monthly churn | | | | | |
| Trial → paid conversion | | | | | |
| Organic share of acquisition | | | | | |
| AI / LLM cost per user | | | | | |

---

## Change log

| Date | Assumption | Old | New | Reason |
|---|---|---|---|---|
| [YYYY-MM-DD] | — | — | — | Initial template |
