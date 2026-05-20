# Personal Data Management System (PDMS) — index

**Controller:** Upskill Energy Limited (United Kingdom, Companies House 16511479), trading as The English Hub
**Service:** theenglishhub.app — GCSE/IGCSE English revision SaaS, serving learners and schools in the United Kingdom and the State of Qatar
**Regulator (Qatar):** National Cyber Governance and Assurance Authority (NCGAA), Qatar
**Date of this index:** 2026-05-20
**Maintainer:** Calum Johnston — Data Protection Officer (dpo@theenglishhub.app)
**Review cadence:** Six-monthly, plus any time a material change is made to processing, sub-processors, or product scope
**Purpose of this document:** to satisfy the NCGAA Compliance and Data Protection Department's PDMS expectation (PDPPL Guidelines) — a single index that maps each PDPPL obligation to the internal artefact that evidences our compliance with it. This is the one-page document we hand to a school DPO during procurement, or to NCGAA on inspection.

---

## 1. PDPPL article → evidence map

| PDPPL article | Obligation | Evidence artefact (repo path) |
|---|---|---|
| Art. 4 | Explicit, informed consent before processing | `src/lib/consent.ts` (append-only consent ledger), `src/app/auth/register/page.tsx` (signup consent gates), `src/app/dashboard/consent/page.tsx` (in-product consent management), Prisma `Consent` model |
| Art. 5 | Records of processing operations | `business-docs/compliance/rfc/ropa-v1.md` (RoPA v1.0 — 12 activities) |
| Arts. 5–12 | Lawful, fair, transparent processing; purpose limit; accuracy; security; retention; transparency | `src/app/legal/privacy-qatar/page.tsx` (v2.0 — public Qatar privacy notice), `src/app/legal/privacy/page.tsx` (UK privacy notice), RoPA |
| Art. 13 | Individual rights + 30-day response deadline | `src/app/account/data-export/page.tsx` (DSAR self-service), `src/app/dashboard/consent/page.tsx` (consent withdrawal), DPO mailbox `dpo@theenglishhub.app`; SLA stated in `/legal/privacy-qatar` §13 |
| Art. 14 | Right of access (copy of data) | `src/app/account/data-export/page.tsx`, `src/app/api/account/export/route.ts` |
| Art. 15 | Cross-border flow not to be restricted | `src/app/legal/privacy-qatar/page.tsx` §6, RoPA cross-border column |
| Art. 16 | **Prior NCGAA permission for processing personal data of a special nature (incl. minors' data)** | `business-docs/compliance/qatar-pdppl/01-article-16-permit/application-dossier.md` (in preparation; not yet submitted), DPIAs supporting the application |
| Art. 17 | Cross-border transfer rules | RoPA cross-border column; sub-processor DPAs filed at `business-docs/contracts/dpas/`; signup-flow cross-border consent gate (`consentDataTransfer` in `src/app/auth/register/page.tsx`) |
| Art. 22 | Electronic direct marketing — prior opt-in, sender ID, opt-out | Marketing emails wired through Resend with unsubscribe in every message; signup captures `MARKETING` consent separately; opt-out audit trail in `Consent` table |
| Art. 23–25 | Breach notification within 72 hours | `business-docs/compliance/qatar-pdppl/02-breach-response/ncgaa-notification-template.md` (pre-filled controller details); breach response runbook at `business-docs/compliance/qatar-pdppl/02-breach-response/runbook.md` |
| DPIA | Required for new processing / material change | `business-docs/compliance/childrens-code/03-dpias/` — parent DPIA + analytics DPIA + AI features DPIA (all v1.0 FINAL as of 2026-05-20) |
| DPO | Not mandatory under mainland PDPPL; voluntarily appointed | Calum Johnston, dpo@theenglishhub.app — mailbox live since 2026-04-21 (Cloudflare Email Routing, `business-docs/CLOUDFLARE-EMAIL-SETUP.md`) |

## 2. Other governance artefacts in the PDMS

| Artefact | Repo path | Purpose |
|---|---|---|
| Records of Processing Activities (RoPA) | `business-docs/compliance/rfc/ropa-v1.md` | Article 30 UK GDPR / PDPPL Art. 5 — full activity register |
| DPIA — processing of children's personal data | `business-docs/compliance/childrens-code/03-dpias/dpia-processing-children-data.md` | Parent DPIA — the central evidentiary document for the Article 16 permit application |
| DPIA — analytics on child accounts | `business-docs/compliance/childrens-code/03-dpias/dpia-analytics.md` | Focused DPIA on telemetry on under-18s |
| DPIA — AI content pipeline | `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md` | Focused DPIA on AI processing (essay marking, etc.) |
| Sub-processor register | `src/config/subprocessors.ts` + `/data-processing` page | Canonical machine-readable sub-processor list, exposed to users |
| Qatar pre-publication content classifier design | `business-docs/compliance/rfc/qatar-content-classifier-design.md` | Two-stage filter for Qatar-specific risk categories (Cybercrime Law 14/2014, Penal Code, public-morality offences) |
| Parental consent flow design | `business-docs/compliance/rfc/parental-consent-flow-design.md` | Verifiable parental consent flow for under-18s |
| Children's Code defaults | `src/lib/privacy/child-defaults.ts` + `src/__tests__/child-defaults-strict.test.ts` | Standard 8 high-privacy defaults enforced in code |
| Article 16 permit application dossier | `business-docs/compliance/qatar-pdppl/01-article-16-permit/application-dossier.md` | Application package for NCGAA — see §3 below |
| Breach response runbook + NCGAA pre-filled notification | `business-docs/compliance/qatar-pdppl/02-breach-response/` | 72-hour breach response |
| Cloudflare Email Routing runbook | `business-docs/CLOUDFLARE-EMAIL-SETUP.md` | Mailbox provisioning (complete since 2026-04-21) |
| Send-as setup runbook | `business-docs/compliance/qatar-pdppl/03-pdms/dpo-mailbox-send-as-runbook.md` | Configuring Google Workspace "Send Mail As" so DPO replies originate from `dpo@theenglishhub.app` rather than the forwarded `info@upskillenergy.com` |
| External-audit remediation log | `REMEDIATION-LOG.md` + `BUSINESS-DECISIONS-NEEDED.md` | Audit trail of every remediation decision since 2026-05-19 |

## 3. NCGAA interactions — what we owe and when

| Interaction | Status | When |
|---|---|---|
| Article 16 permit application (processing minors' data) | **In preparation** — see `01-article-16-permit/application-dossier.md` | Submit within 30 days of Qatari legal review sign-off |
| 72-hour breach notification | **Standing readiness** — pre-filled template at `02-breach-response/ncgaa-notification-template.md` | Within 72 hours of becoming aware of any breach likely to cause serious harm |
| General controller registration | **Not required** — PDPPL imposes no general registration obligation (confirmed by DLA Piper country guide) | n/a |
| Annual / periodic NCGAA filings | **None required** by the law as drafted | n/a — monitor NCGAA guidance for change |
| Audit / inspection response | **Standing readiness** — this PDMS index is the response document | On notice from NCGAA |

## 4. Qatari legal review — sign-off log

| Date | Reviewer | Scope | Outcome / opinion ref. |
|---|---|---|---|
| _Pending_ | TBD (Clyde & Co Doha / DLA Piper Doha / Eversheds Doha — to be commissioned) | Full PDPPL gap analysis + sign-off on the Article 16 permit dossier before submission to NCGAA | _Awaiting engagement_ |

A standing Qatari-licensed legal opinion is the customary procurement evidence used by Qatari schools, because NCGAA does not issue a "PDPPL compliance certificate" for controllers. Budget USD 8k–25k for the first opinion; reissue on material change.

## 5. Procurement-pack — what we hand a Qatar school DPO on request

1. This PDMS index (`00-pdms-index.md`)
2. The public Qatar privacy notice URL: <https://theenglishhub.app/legal/privacy-qatar>
3. The RoPA (`ropa-v1.md`)
4. The three DPIAs (parent + analytics + AI features, all v1.0 FINAL)
5. The sub-processor register + relevant DPAs (under NDA)
6. The Article 16 permit reference number, once granted
7. The Qatari legal opinion letter, once obtained
8. The pre-filled NCGAA breach-notification template (proof of readiness)

## 6. Authorship + sign-off

| Role | Name | Date |
|---|---|---|
| Author | Calum Johnston (DPO) | 2026-05-20 |
| DSL review | Lauren Johnson | _Pending — review on next safeguarding review cycle_ |
| External legal sign-off | _Pending — Qatari counsel TBD_ | _Pending_ |
