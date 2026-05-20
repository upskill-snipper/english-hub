# Compliance one-pager — Qatar PDPPL + UK GDPR + ICO Children's Code

> Hand to: Directors of Learning Technology, Data Protection / Compliance leads, and anyone who asks any data-protection question at the booth. **Print 30 copies, A4 single-sided.** This is the document that gets you through procurement.

---

## The English Hub — compliance summary for Qatar procurement

**Controller:** Upskill Energy Limited (UK Companies House 16511479), trading as The English Hub
**Service:** theenglishhub.app
**Last reviewed:** 20 May 2026
**Document owner:** Calum Johnson — Data Protection Officer (dpo@theenglishhub.app)

---

## Qatar — PDPPL (Law No. 13 of 2016)

| Obligation | Position | Evidence |
|---|---|---|
| Article 4 — explicit consent | Captured at signup; recorded in cryptographically-hashed append-only consent ledger | `src/lib/consent.ts` + `Prisma Consent` model |
| Article 5 — Records of Processing | RoPA v1.0 — 12 documented activities | RoPA available to NCGAA / school DPO on request |
| Article 13 — individual rights + 30-day response | 30 calendar days, per NCGAA Individuals' Rights Guideline PDPPL‑02050219E. Self-service DSAR at `/account/data-export`. | Privacy notice §13; DSAR pipeline live |
| Article 16 — prior NCGAA permission for special-category data (including **minors' data**) | Application dossier **drafted and shelf-ready**. Submission held pending Qatari legal opinion (founder decision; will be commissioned when commercial commitment warrants). Substantive compliance posture is independent of formal submission. | Dossier at `business-docs/compliance/qatar-pdppl/01-article-16-permit/` (available to NCGAA / school DPO on written request) |
| Article 17 — cross-border transfer with explicit consent | **Live in signup as of 20 May 2026.** Qatar-resident users see a named-destination consent banner before account creation. | `src/app/auth/register/page.tsx` + the public Qatar Privacy Notice §6 |
| Article 22 — direct marketing opt-in + opt-out | All marketing consent-gated; every marketing email carries sender ID + unsubscribe | Marketing email templates |
| 72-hour breach notification | Standing readiness — pre-filled NCGAA notification template + runbook | `business-docs/compliance/qatar-pdppl/02-breach-response/` |
| General controller registration | **Not required** — PDPPL imposes no general registration obligation on controllers (DLA Piper country guide confirms) | n/a |
| DPO appointment | **Not mandatory** under mainland PDPPL but voluntarily appointed. Inbox monitored. | Calum Johnson, dpo@theenglishhub.app |
| Personal Data Management System (PDMS) | Single-page PDMS index maps every PDPPL article to internal evidence | `business-docs/compliance/qatar-pdppl/00-pdms-index.md` |

---

## United Kingdom — UK GDPR + DPA 2018

| Obligation | Position |
|---|---|
| ICO registration | **ZC016690** — verifiable at ico.org.uk |
| Lead supervisory authority | UK Information Commissioner's Office (ICO) |
| Lawful basis (Art. 6) | Contract for service delivery; explicit consent for AI processing of essay text; legitimate interest for security telemetry (LIA on file) |
| Records of Processing (Art. 30) | RoPA v1.0 |
| DPIAs (Art. 35) | Three v1.0 FINAL DPIAs on file: parent (children's data) + AI features + analytics |
| Breach notification | Within 72 hours to ICO + affected subjects where risk warrants (Art. 33–34) |
| International transfers | UK addendum + SCCs in every sub-processor DPA |

---

## Children — ICO Children's Code (Age Appropriate Design Code)

**Treats every under-18 user under the Code's 15 standards.**

- **Standard 8 (High-privacy defaults):** off-by-default for under-18s — personalised recommendations, streak gamification, behavioural nudges, non-essential analytics, marketing, social-share nudges, public leaderboards, geolocation. **Enforced in code** at `src/lib/privacy/child-defaults.ts` and asserted by strict test suite covering ages 11–17.
- **Standard 2 (DPIAs):** parent DPIA, analytics DPIA, AI features DPIA — all v1.0 FINAL.
- **Standard 9 (Data minimisation):** age bracket stored, not full DOB shown anywhere; opaque user IDs at the AI inference boundary.
- **Minimum age 11** with verifiable parental consent for ages 11–15 captured via parent-link email at signup. UK GDPR Article 8 sets the digital age of consent at 13; for users aged 11–12 we rely on verifiable parental consent rather than the child's own.

---

## Hosting topology (Qatar → where does your data actually live?)

```
Qatar user → Vercel front end (global edge, ephemeral)
           → Supabase EU/Frankfurt    (account, essays, marking results, consent ledger — primary store)
           → Microsoft Azure UK South (backend API)
           → Anthropic US             (AI essay marking only — DPA prohibits training on submissions, zero retention)
           → Sentry EU/Frankfurt      (error monitoring, scrubbed payloads)
           → Postmark / Resend US     (transactional email)
           → Stripe Ireland (UK failover) (payments — under-18 accounts cannot enter payment data)
```

**Cross-border transfer mechanism for Qatar:** explicit Article 17 consent at signup (named per destination) + subprocessor-specific DPA with SCCs or analogues + technical safeguards (TLS 1.3, AES-256 at rest, opaque identifiers at AI boundary, contractual zero-retention for AI inference).

---

## Sub-processor list (canonical)

Maintained at **theenglishhub.app/data-processing** and updated within 30 days of any material change. Every sub-processor is bound by a Data Processing Agreement incorporating SCCs or analogous safeguards. DPAs available to school DPOs on request.

---

## Safeguarding

**Designated Safeguarding Lead:** Lauren Johnson — safeguarding@theenglishhub.app · +974 5187 9582 · **24-hour acknowledgement SLA**.

Safeguarding-relevant disclosures in essay content are routed to the DSL within 24 hours via the safeguarding handler. Reference frameworks: KCSIE 2024, Working Together to Safeguard Children 2023, Children Act 2004, Online Safety Act 2023, UK GDPR / DPA 2018 / Children's Code. Full safeguarding policy at **theenglishhub.app/safeguarding**.

---

## Procurement pack — available on request

Email **dpo@theenglishhub.app** with subject line **"PDPPL diligence — [your school name]"** and we provide, within 5 working days:

1. The PDMS index
2. RoPA v1.0
3. All three v1.0 FINAL DPIAs (parent DPIA + AI features + analytics)
4. The Article 16 permit application dossier
5. The sub-processor register + relevant DPAs (under NDA)
6. The 72-hour breach response template + runbook
7. The cross-border consent specification (technical + UX)

A **Qatari-licensed legal opinion** on our PDPPL posture is held pending engagement (founder decision; will be commissioned when commercial commitment warrants). Where a school's procurement requires a country opinion before contracting, we will commission one as a condition of the contract closure.

---

## What we are NOT claiming

In the interests of straightforward procurement:

- ❌ We are **not** NCSA NIA-certified (we have not pursued NIA — separate cybersecurity scheme; deferred until commercially warranted)
- ❌ We do **not** hold an Article 16 permit reference yet (dossier shelf-ready; submission held)
- ❌ We are **not** endorsed by AQA / Pearson Edexcel / OCR / WJEC / Eduqas / Cambridge Assessment International Education. We **cover** their specifications; endorsement claims would be false
- ❌ We do **not** hold ISO/IEC 27001 certification (on roadmap; targeted for late 2026)
- ❌ We do **not** hold Cyber Essentials Plus (Cyber Essentials baseline in preparation)

We tell you what we don't have so you know exactly what you're buying.

---

**Calum Johnson — Founder & Data Protection Officer**
The English Hub · Upskill Energy Limited (UK Companies House 16511479)
ICO registration ZC016690 · dpo@theenglishhub.app · theenglishhub.app
