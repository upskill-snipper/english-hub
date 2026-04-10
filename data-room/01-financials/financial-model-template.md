# Financial Model — Structure & Logic

**Status**: Template v0.1
**Companion file**: `financial-model-template.csv`
**Horizon**: 36 months forward from the current month + 24 months historical where available.

This document explains what the financial model contains, how it's organised, and the logic that links the pieces together. The CSV file is a flat skeleton; in practice the founder will keep a working copy in Google Sheets or Excel with cross-sheet formulas. Export a CSV snapshot into `financial-model-template.csv` every time the model is shared externally.

---

## 1. Tab structure (working copy in spreadsheet)

| # | Tab | Purpose | Direction |
|---|---|---|---|
| 1 | `README` | Instructions, version, contact | Input |
| 2 | `Assumptions` | All drivers — pricing, churn, CAC, salaries, etc. | Input |
| 3 | `Headcount` | Hiring plan by role with start dates and salaries | Input |
| 4 | `Pricing` | Price book and plan definitions | Input |
| 5 | `Revenue` | Bookings, MRR, ARR, recognised revenue | Calculation |
| 6 | `COGS` | Hosting, content licensing, payment fees, support | Calculation |
| 7 | `Opex` | Salaries, marketing, software, rent, professional fees | Calculation |
| 8 | `P&L` | Income statement by month and year | Output |
| 9 | `Balance Sheet` | Monthly balance sheet | Output |
| 10 | `Cash Flow` | Direct-method monthly cash flow | Output |
| 11 | `Unit Economics` | CAC, LTV, payback, gross margin by segment | Output |
| 12 | `ARR Bridge` | Starting → new → expansion → contraction → churn → ending | Output |
| 13 | `Cohorts` | Monthly cohort retention (logo + revenue) | Output |
| 14 | `Scenarios` | Base / upside / downside toggle | Control |
| 15 | `Dashboard` | One-page summary for investor meetings | Output |

---

## 2. P&L line items

These are the rows in the P&L tab and in `financial-model-template.csv`. All values in £ unless noted.

**Revenue**
1. Subscription revenue — Individual
2. Subscription revenue — School / B2B
3. One-time revenue (courses, certifications)
4. Other revenue (affiliate, partnerships)
5. **Total revenue**

**Cost of sales**
6. Hosting & infrastructure
7. AI / LLM API costs
8. Content licensing
9. Payment processing fees
10. Customer support (direct)
11. **Total COGS**
12. **Gross profit**
13. **Gross margin %**

**Operating expenses**
14. Salaries — Engineering
15. Salaries — Product
16. Salaries — Content & Curriculum
17. Salaries — GTM (Sales & Marketing)
18. Salaries — G&A
19. Employer taxes & benefits
20. Contractors
21. Marketing — paid acquisition
22. Marketing — content & SEO
23. Marketing — events
24. Software & SaaS tools
25. Rent & facilities
26. Legal & professional fees
27. Accounting
28. Insurance
29. Travel & entertainment
30. Other G&A
31. **Total opex**
32. **EBITDA**
33. Depreciation & amortisation
34. **Operating profit**
35. Interest income / (expense)
36. Tax
37. **Net profit**

---

## 3. Balance Sheet line items

**Assets**
- Cash & equivalents
- Accounts receivable
- Prepaid expenses
- Other current assets
- Property & equipment (net)
- Intangibles (net)
- **Total assets**

**Liabilities**
- Accounts payable
- Accrued expenses
- Deferred revenue (current)
- Deferred revenue (long-term)
- Debt (if any)
- Other liabilities
- **Total liabilities**

**Equity**
- Share capital
- Share premium
- Retained earnings
- **Total equity**

---

## 4. Cash Flow (direct method)

**Operating**
- Cash received from customers
- Cash paid to suppliers
- Cash paid to employees
- Other operating cash
- **Net cash from operations**

**Investing**
- Capex
- Intangible asset purchases
- **Net cash from investing**

**Financing**
- Equity raised
- Debt raised / (repaid)
- Interest paid
- **Net cash from financing**

**Summary**
- Net change in cash
- Opening cash
- **Closing cash**

---

## 5. Unit economics tab

Rows (by segment — Individual / B2B, and by channel — Organic / Paid / Partner):
- Blended CAC
- Average ACV
- Gross margin %
- Monthly churn %
- LTV (gross-margin based)
- LTV / CAC
- CAC payback (months)

---

## 6. Column structure

The CSV skeleton uses the following columns:

`Line Item, Category, Actual/Forecast, M1, M2, …, M36, Y1 Total, Y2 Total, Y3 Total, Notes`

- **Line Item** — matches the P&L / BS / CF row names above
- **Category** — Revenue / COGS / Opex / BS / CF / Metric
- **Actual/Forecast** — mark each month as `A` or `F` so it's clear where the cutover is
- **M1..M36** — monthly values (Month 1 = first month of the model window)
- **Y1/Y2/Y3** — annual totals (sums or year-end snapshots depending on row)
- **Notes** — cell-level commentary, especially for non-obvious assumptions

---

## 7. Logic you'll need to add when you move this to a spreadsheet

These are formulas the CSV cannot express but the working model must:

- **Revenue build**: `New MRR = (Traffic × Signup % × Trial→Paid %) × ACV`
- **Expansion**: `Expansion MRR = Beginning MRR × Expansion rate %`
- **Churn**: `Gross churn MRR = Beginning MRR × Monthly churn %`
- **Ending MRR**: `Beginning + New + Expansion − Contraction − Churn`
- **ARR**: `MRR × 12`
- **Deferred revenue**: `New bookings − Recognised revenue` (for annual plans)
- **CAC**: `(Sales & marketing spend) / New customers acquired in period`
- **LTV**: `ACV × Gross margin % / Monthly churn` (or better: cohort-based)
- **Payback**: `CAC / (ACV × Gross margin / 12)`
- **Runway**: `Cash / Monthly net burn`

---

## 8. Scenarios

Keep three scenarios in the live model:

- **Base** — what you'd tell a partner in a meeting
- **Upside** — plan assuming one paid channel scales 2x and churn drops 25%
- **Downside** — plan assuming CAC rises 50%, churn rises 50%, and no expansion

Scenarios should share the same structure and swap only Assumptions tab values via a toggle.
