# 01 — Financials

This folder contains the financial model, supporting schedules, and the policies and assumptions that sit behind them. It is the section investors spend the most time in, so everything here should be internally consistent and reproducible.

> **Founder checklist**
> - [ ] Every number in `00-overview/` ties to a cell in this folder
> - [ ] Assumptions file reviewed every month
> - [ ] Model version bumped in `data-room/README.md` on every material change
> - [ ] Source-of-truth exports saved with date stamps when shared

---

## Contents

| File | What it is | When to update |
|---|---|---|
| `financial-model-template.md` | Narrative description of the financial model: sheets, tabs, logic, formulas | When the model structure changes |
| `financial-model-template.csv` | 36-month P&L, balance sheet, cash flow, and unit-economics skeleton | Monthly |
| `arr-bridge-template.csv` | Monthly ARR bridge (starting, new, expansion, contraction, churn, ending) | Monthly |
| `unit-economics-template.csv` | LTV, CAC, payback, gross margin by segment / channel | Monthly |
| `cohort-retention-template.csv` | Monthly cohort retention curves (logo and revenue) | Monthly |
| `saas-metrics-glossary.md` | Definitions of every SaaS metric used in the model | On change of definition only |
| `revenue-recognition-policy.md` | How revenue is recognised and why | Annually, or on accounting change |
| `key-assumptions.md` | Single source of truth for every driver in the model | Monthly, and every time a driver changes |

---

## Golden rules

1. **One source of truth.** Numbers in the IM, one-pager, deck, and KPI dashboards all come from the files in this folder. If a number appears outside this folder and doesn't match, the folder wins.
2. **Inputs and outputs are separated.** Assumptions live in `key-assumptions.md`; outputs live in the model CSVs. Never hard-code an assumption inside an output schedule.
3. **Every metric is defined.** If a metric is shown, it must appear in `saas-metrics-glossary.md` with a formula.
4. **History is sacred.** Actuals never change once a month is closed. Restatements get a footnote and a version bump.
5. **Comments travel with the model.** If an assumption changed because of new data, record it in `key-assumptions.md` with the date and the reason.

---

## Common investor questions this folder answers

- What's your ARR today, 3 months ago, 12 months ago, and what drove the change?
- What's your gross margin and what are the inputs?
- What's your cohort retention (logo and revenue)?
- What does your CAC look like by channel, and what's the payback?
- How much runway do you have, and what does it look like after the raise?
- What are the top 3 assumptions your plan depends on, and what happens if each is 20% worse?
