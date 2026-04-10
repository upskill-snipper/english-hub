# The English Hub — Data Room

This folder contains the due-diligence data room for The English Hub. It is a structured collection of documents investors, acquirers, or strategic partners would expect to review during a funding round, acquisition, or strategic transaction.

Nothing here should be shared externally without founder approval. All documents are **templates or living drafts** until explicitly marked `Final` in the version table below.

---

## Document Version Table

Bump the version whenever a document is materially updated. Use semantic versioning: `MAJOR.MINOR` (MAJOR = new structure, MINOR = content updates).

| Document | Path | Version | Status | Last Updated | Owner |
|---|---|---|---|---|---|
| Data Room README | `data-room/README.md` | 0.1 | Draft | 2026-04-10 | Founder |
| Information Memorandum | `00-overview/information-memorandum.md` | 0.1 | Template | 2026-04-10 | Founder |
| Investor One-Pager | `00-overview/one-pager.md` | 0.1 | Template | 2026-04-10 | Founder |
| Pitch Deck Outline | `00-overview/pitch-deck-outline.md` | 0.1 | Template | 2026-04-10 | Founder |
| Financials README | `01-financials/README.md` | 0.1 | Draft | 2026-04-10 | Founder |
| Financial Model Template | `01-financials/financial-model-template.md` | 0.1 | Template | 2026-04-10 | Founder |
| Financial Model CSV | `01-financials/financial-model-template.csv` | 0.1 | Template | 2026-04-10 | Founder |
| ARR Bridge Template | `01-financials/arr-bridge-template.csv` | 0.1 | Template | 2026-04-10 | Founder |
| Unit Economics Template | `01-financials/unit-economics-template.csv` | 0.1 | Template | 2026-04-10 | Founder |
| Cohort Retention Template | `01-financials/cohort-retention-template.csv` | 0.1 | Template | 2026-04-10 | Founder |
| SaaS Metrics Glossary | `01-financials/saas-metrics-glossary.md` | 0.1 | Reference | 2026-04-10 | Founder |
| Revenue Recognition Policy | `01-financials/revenue-recognition-policy.md` | 0.1 | Template | 2026-04-10 | Founder |
| Key Assumptions | `01-financials/key-assumptions.md` | 0.1 | Template | 2026-04-10 | Founder |
| Metrics README | `08-metrics/README.md` | 0.1 | Draft | 2026-04-10 | Founder |
| Monthly KPI Template | `08-metrics/monthly-kpi-template.csv` | 0.1 | Template | 2026-04-10 | Founder |
| Quarterly ARR Build | `08-metrics/arr-build-template.csv` | 0.1 | Template | 2026-04-10 | Founder |

**Status values**: `Template` (skeleton, needs data), `Draft` (partially populated), `Review` (complete, awaiting sign-off), `Final` (locked for the current round).

---

## Folder Structure

```
data-room/
  README.md                         <- this file
  00-overview/                      <- high-level investor materials
    information-memorandum.md
    one-pager.md
    pitch-deck-outline.md
  01-financials/                    <- historical and projected financials
    README.md
    financial-model-template.md
    financial-model-template.csv
    arr-bridge-template.csv
    unit-economics-template.csv
    cohort-retention-template.csv
    saas-metrics-glossary.md
    revenue-recognition-policy.md
    key-assumptions.md
  08-metrics/                       <- operational KPIs and dashboards
    README.md
    monthly-kpi-template.csv
    arr-build-template.csv
```

### Reserved folders (not yet populated)

The numeric prefixes (`00`, `01`, `08`) leave room for the standard data-room taxonomy. Create these as needed:

- `02-corporate/` — Cap table, articles of incorporation, shareholder agreements, board minutes, option pool documents
- `03-legal/` — Contracts, IP assignments, trademarks, T&Cs, privacy policy, GDPR/DPA, outstanding litigation
- `04-product/` — Product roadmap, architecture diagrams, tech stack, security & privacy documentation, uptime history
- `05-commercial/` — Customer list, logos, case studies, pipeline, sales playbook, pricing, top-customer contracts
- `06-marketing/` — GTM strategy, brand assets, channel performance, CAC by channel, content calendar
- `07-team/` — Org chart, employee list, employment agreements, equity grants, open roles, advisor agreements
- `09-diligence-responses/` — Q&A log from investor / acquirer diligence requests

---

## Version Control Notes

- **Source of truth**: these Markdown and CSV files live in the repo. Google Docs / Sheets copies are for sharing only; changes must be reflected back here before the version table is bumped.
- **No PII or customer lists in git history.** Customer data, cap tables, and bank details live in an access-controlled drive linked from the relevant section. Put the link, not the content, in this repo.
- **Naming convention**: `YYYY-MM-DD_filename_vX.Y.ext` for point-in-time snapshots sent to investors. Keep the live working copy under the canonical filename above.
- **Diligence responses**: when an investor asks a question, log it under `09-diligence-responses/` with date, asker, question, answer, and any supporting documents. This becomes a running FAQ that accelerates every subsequent round.
- **Audit trail**: the version table above is the canonical history. Bump it every time you send a document externally.

---

## Sharing Checklist

Before sending any document from this data room externally:

- [ ] Version number bumped in this README
- [ ] Document marked with the date and recipient in the sharing log (kept separately from this repo)
- [ ] NDA in place with the recipient
- [ ] Watermark applied to PDF exports (`DRAFT — PREPARED FOR [RECIPIENT]`)
- [ ] No live customer PII, no bank details, no passwords
- [ ] Founder sign-off recorded in commit message
