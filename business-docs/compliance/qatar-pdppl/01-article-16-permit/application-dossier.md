# PDPPL Article 16 permit application — dossier

> **Status:** Draft v1.0 — ready for Qatari legal review and signature.
> **Submission:** **Do not submit** without prior written sign-off from a Qatari-licensed legal adviser. Once the Qatari legal opinion is received, attach it as Exhibit G and submit to NCGAA via the stakeholder services portal at <https://ncsa.gov.qa/en/pages/personal-data-privacy-stakeholders-services>.
> **Owner:** Calum Johnston, Data Protection Officer (dpo@theenglishhub.app)
> **Date drafted:** 2026-05-20

---

## 0. Why this application is being filed

Qatar's Personal Data Privacy Protection Law (Law No. 13 of 2016 — "PDPPL") Article 16 requires the data controller to obtain **prior permission from the Competent Department** (the National Cyber Governance and Assurance Authority — NCGAA) before processing **personal data of a special nature**. Under the PDPPL definitions, "personal data of a special nature" includes:

- ethnic origin
- **data concerning minors** (under 18)
- health data
- religious beliefs
- criminal records

The English Hub's primary user base is **GCSE and IGCSE students aged 11–17**, all of whom are minors under Qatari law. Processing their personal data therefore engages Article 16 and we file this application to obtain the corresponding permit before commercial launch with Qatar-resident school customers.

Note: there is no general controller-registration regime under PDPPL; this is the only formal pre-processing authorisation the law requires of us.

---

## 1. Identity of the controller

| Field | Value |
|---|---|
| Legal name | Upskill Energy Limited |
| Country of incorporation | United Kingdom (England and Wales) |
| Companies House number | 16511479 |
| Trading name | The English Hub |
| Registered office | Available to NCGAA on written request via dpo@theenglishhub.app (not published) |
| Service URL | https://theenglishhub.app |
| ICO registration (UK) | ZC016690 |
| Data Protection Officer | Calum Johnston — dpo@theenglishhub.app |
| Designated Safeguarding Lead | Lauren Johnson — safeguarding@theenglishhub.app, +974 5187 9582 (Qatar mobile), 24-hour acknowledgement SLA |
| Local representative in Qatar | None at the date of this application (PDPPL does not require one for online services). NCGAA correspondence routed via the DPO. Will appoint a local representative if NCGAA requires one as a condition of grant. |

---

## 2. Description of the processing

### 2.1 Nature

The English Hub is a self-service online English-language learning platform for students preparing for GCSE and IGCSE English Language and English Literature examinations across the AQA, Edexcel, OCR, Eduqas, WJEC, and Cambridge IGCSE exam boards, with an additional EAL (English as an Additional Language) track. The platform delivers:

- structured course content (reading + practice)
- timed mock examinations
- AI-assisted formative essay marking
- progress tracking and weekly progress reports to linked parent/guardian accounts
- a teacher-facing dashboard for school-deployed accounts

### 2.2 Data subjects covered by this application

Personal data of natural persons aged 11–17 who are resident in the State of Qatar and who hold a student account on the platform, or whose data is provided to the platform by a Qatar-based school customer or by a parent/guardian creating a parent-linked account.

The minimum age was lowered from 13 to 11 on 2026-05-20 (business decision B5) to accept Year 7 / Key Stage 3 students. UK GDPR Article 8 sets the digital age of consent at 13, so for users aged 11–12 we rely on **verifiable parental/guardian consent** (not the child's own) captured via the parent-link email at sign-up.

### 2.3 Categories of personal data processed

| Category | Specific fields |
|---|---|
| Account identifiers | Email address, opaque user ID, first name, last name, date of birth, country of residence |
| Authentication | Hashed password (Argon2id), session tokens, multi-factor authentication factor (optional) |
| Educational records | Year group, exam board, course enrolment, completed activities, essay submissions, AI marking feedback, mock exam scores, time-on-task |
| Linked-account data | Parent/guardian name + email; school admin/teacher identifiers (where applicable) |
| Consent records | Cryptographically-hashed consent ledger entries with timestamp, IP, version |
| Technical / security | IP address (truncated for analytics), user-agent, audit log of admin actions |

We **do not** collect: religious beliefs, ethnic origin, health data, criminal records, biometric data (no facial recognition; voice features are off by default and require explicit consent), or precise geolocation.

### 2.4 Purpose of the processing

- Deliver the contracted educational service (course content, practice, feedback)
- Generate AI-assisted marking feedback for student-submitted essays
- Send transactional emails (verification, password reset, parental consent loop, payment receipts, weekly progress reports)
- Produce parent/teacher progress dashboards and weekly summary emails
- Comply with legal obligations (tax retention, lawful requests from competent authorities, breach notification)

### 2.5 Lawful basis under PDPPL

| Activity | Basis |
|---|---|
| Account creation and authentication | Article 4 — consent of the data subject (or, for 11–12 year-olds, verifiable parental consent) |
| Service delivery | Article 4 — consent + contractual necessity |
| AI essay marking | Article 4 — explicit consent per submission |
| Cross-border data transfer to the EU and US | Article 17 — explicit, separate cross-border consent named per destination |
| Sub-processor disclosure | Article 4 — disclosed at consent capture and in the public privacy notice |

### 2.6 Intended recipients (sub-processors)

| Sub-processor | Jurisdiction | Function |
|---|---|---|
| Supabase, Inc. | European Union (Frankfurt) | Authentication and primary database |
| Microsoft Corporation (Azure) | United Kingdom (UK South region) | Backend API hosting |
| Vercel, Inc. | United States | Front-end hosting (global edge + configured primary region) |
| Anthropic, PBC | United States | AI essay marking — Claude API; zero-retention; contractually prohibited from training on submissions |
| Sentry (Functional Software, Inc.) | European Union (Frankfurt) | Error monitoring |
| Resend / Postmark | United States | Transactional email delivery |
| Stripe, Inc. | Ireland (primary) / United States (failover) | Payments — under-18 accounts cannot enter payment details |
| Cloudflare, Inc. | Global edge | CDN + WAF — no personal data stored at the edge |
| PostHog (consented only) | European Union (Frankfurt) | Product analytics |
| Google Analytics 4 (consented only) | United States | Aggregate analytics (consent-gated) |
| Rewardful (consented only) | United States | Affiliate referral tracking (consent-gated; under-18 accounts excluded) |
| Trustpilot (consented only) | United States | Reviews — under-18 accounts excluded |
| RevenueCat (mobile only) | United States | Mobile in-app purchase reconciliation |

Each sub-processor is bound by a Data Processing Agreement incorporating Standard Contractual Clauses or analogous safeguards. DPAs are available to NCGAA on request.

### 2.7 Cross-border transfer mechanism

We rely on:

1. **Explicit cross-border consent under PDPPL Article 17**, captured at sign-up for users whose declared country of residence is Qatar. The consent banner names each destination jurisdiction (European Union, United Kingdom, United States, Ireland, global edge for CDN). The consent record is held in the append-only consent ledger with cryptographic hash + timestamp + IP.
2. **Sub-processor-specific DPAs** with Standard Contractual Clauses or analogues for every destination outside the EU/UK.
3. **Technical safeguards**: TLS 1.3 in transit, AES-256 at rest, opaque identifiers at the AI inference boundary, contractual zero-retention for AI.

The full subprocessor + cross-border architecture is documented at <https://theenglishhub.app/legal/privacy-qatar> §6.

---

## 3. Safeguards implemented

### 3.1 Privacy by design — Standard 8 high-privacy defaults

For every account flagged as belonging to a minor (under 18), the following default to OFF and require an affirmative opt-in to enable:

- Personalised content recommendations beyond core study delivery
- Daily-streak / engagement nudge notifications
- Non-essential analytics
- Marketing communications
- Social-share nudges
- Public leaderboards
- Geolocation

These defaults are enforced in code at `src/lib/privacy/child-defaults.ts` and asserted by a strict test suite at `src/__tests__/child-defaults-strict.test.ts` that covers the full 11–17 cohort.

### 3.2 Verifiable parental consent

For users aged 11–15, a parent/guardian email is required at sign-up. A consent loop email is sent to that address and the account is not activated until the parent clicks through and grants consent. Each consent event is recorded in the cryptographically-hashed consent ledger.

### 3.3 Qatar-specific pre-publication content classifier

A two-stage classifier (regex denylist + Claude Haiku) screens AI-generated content for Qatar-specific risk categories before rendering to a Qatar-resident user. See `business-docs/compliance/rfc/qatar-content-classifier-design.md` for the full design.

### 3.4 Breach response

A 72-hour breach response capability is in standing readiness. The NCGAA notification template is pre-filled with controller details at `business-docs/compliance/qatar-pdppl/02-breach-response/ncgaa-notification-template.md`; the response runbook at `business-docs/compliance/qatar-pdppl/02-breach-response/runbook.md`.

### 3.5 Data subject rights — 30-day SLA

We respond to PDPPL data-subject-rights requests within 30 calendar days of receipt and identity verification, in line with the NCGAA Individuals' Rights Guidelines (PDPPL-02050219E). Complex requests may be extended by one further 30-day period with written notice before the original deadline expires.

### 3.6 DPIAs

Three DPIAs (parent / analytics / AI features) all v1.0 FINAL as of 2026-05-20. The parent DPIA at `business-docs/compliance/childrens-code/03-dpias/dpia-processing-children-data.md` is the primary supporting document for this application.

### 3.7 Sub-processor zero-retention for AI

Our DPA with Anthropic prohibits use of submitted essays to train Anthropic's models, and the API is configured for zero retention. Essays are transmitted under opaque submission identifiers with no directly identifying account fields.

### 3.8 Children excluded from commercial features

Under-18 accounts cannot enter payment details, are excluded from review invitations (Trustpilot), and are excluded from affiliate signup (Rewardful).

---

## 4. Risk assessment summary

The full risk register is in the parent DPIA. The headline residual-risk position for processing minors' data is **LOW–MEDIUM** after the safeguards above, with the highest residual risks being:

- **R3 (DPIA):** essays contain personal disclosures (mental health, family, safeguarding-relevant) processed by third-party LLM. Mitigated by the Anthropic DPA + zero retention + safeguarding disclosure handler routing flagged content to the DSL within 24 hours.
- **R4 (DPIA):** bias against L2 English speakers (notably Gulf Arabic L1 students). Mitigated by the EAL track, separate AO weighting, and the Qatar-aware content classifier.

---

## 5. Proposed conditions we are willing to accept on a grant

The controller is willing to accept the following conditions on grant of the Article 16 permit:

1. Annual self-assessment return to NCGAA describing material changes (if any) to the processing.
2. Notification to NCGAA of any new sub-processor processing minors' data, before the new sub-processor goes live.
3. Cooperation with any NCGAA inspection of the PDMS at any reasonable time, on reasonable notice.
4. Retention of the consent ledger and breach response artefacts for a minimum of 7 years.

---

## 6. Exhibits

| Exhibit | Source |
|---|---|
| A | Public Qatar privacy notice (v2.0, 2026-05-20) — <https://theenglishhub.app/legal/privacy-qatar> |
| B | RoPA v1.0 — `business-docs/compliance/rfc/ropa-v1.md` |
| C | DPIA — Processing of Children's Personal Data (v1.0 FINAL) — `business-docs/compliance/childrens-code/03-dpias/dpia-processing-children-data.md` |
| D | DPIA — AI content pipeline (v1.0 FINAL) — `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md` |
| E | DPIA — Analytics on Child Accounts (v1.0 FINAL) — `business-docs/compliance/childrens-code/03-dpias/dpia-analytics.md` |
| F | Qatar pre-publication content classifier design — `business-docs/compliance/rfc/qatar-content-classifier-design.md` |
| G | Qatari legal opinion — **PENDING** (commission Clyde & Co Doha / DLA Piper Doha / Eversheds Doha) |
| H | PDMS index — `business-docs/compliance/qatar-pdppl/00-pdms-index.md` |
| I | Sub-processor register + DPAs — available on written request to NCGAA |

---

## 7. Declarations

The undersigned declares that:

1. The information in this application and the attached exhibits is true and accurate to the best of the controller's knowledge as at the date of submission.
2. The controller will notify NCGAA of any material change to the processing, sub-processors, or safeguards described above within 30 days of the change taking effect.
3. The controller will respond to any NCGAA enquiry within the statutory timeframes.

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | Calum Johnston | _Pending — wet signature on the printed pack_ | _Pending submission_ |
| Director (Upskill Energy Limited) | Calum Johnston | _Pending_ | _Pending submission_ |

---

## 8. Submission checklist

- [ ] Qatari legal opinion received and inserted as Exhibit G
- [ ] All exhibits attached or hyperlinked with last-modified dates
- [ ] Pack printed, signed wet, scanned to PDF
- [ ] PDF submitted via NCGAA stakeholder services portal
- [ ] Submission acknowledgement reference recorded in `submission-log.md` (this directory)
- [ ] PDMS index updated with NCGAA reference number on grant
- [ ] Public privacy notice updated to cite the granted Article 16 permit reference number

---

## 9. After grant — ongoing obligations

| When | Action |
|---|---|
| On grant | Update `/legal/privacy-qatar` §10 to cite the granted permit reference number. Update this dossier and the PDMS index with the grant date and reference. |
| Within 30 days of any material change | File a change-notification with NCGAA |
| Annually | Self-assessment return to NCGAA |
| On any breach likely to cause serious harm | Activate the 72-hour breach response runbook |
