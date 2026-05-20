# Data Protection Impact Assessment — Processing of Children's Personal Data

**Reference:** DPIA-2026-CC-01
**Service:** The English Hub
**Scope:** All processing of personal data of users under 18, within the core product
**DPIA version:** 1.0 (FINAL — supersedes v0.9 draft of 2026-04-10)
**Owner:** Calum Johnston — Data Protection Officer (DPO), dpo@theenglishhub.app
**Designated Safeguarding Lead (separate role, B1):** Lauren Johnson — safeguarding@theenglishhub.app, +974 5187 9582, 24-hour acknowledgement SLA
**Date prepared:** 2026-04-10
**Last reviewed:** 2026-05-20
**Next review:** 2026-11-20 (or on material change)
**Review cycle:** Six-monthly, or on material change to processing, subprocessor list, or product scope

**Related DPIAs:**
- `dpia-analytics.md` — analytics on child accounts (narrower scope)
- `dpia-ai-features-v1.md` — AI content pipeline (narrower scope; v1.0 FINAL)

This DPIA follows the ICO template structure (Step 1 through Step 7) and is intended to satisfy Article 35 UK GDPR read with Standard 2 of the Age Appropriate Design Code, and to serve as the supporting documentation for the **Qatar PDPPL Article 16 permit application** for processing personal data of minors (dossier at `business-docs/compliance/qatar-pdppl/01-article-16-permit/`).

## Change log

- **2026-05-20 (v1.0 FINAL)** — Promoted from v0.9 draft as part of the PDPPL gap-analysis remediation. Material changes since v0.9:
  - **B5 (minimum age lowered from 13 to 11):** scope now expressly covers 11–17 year-olds. For 11–12 year-olds, who fall below UK GDPR Article 8's digital age of consent, processing relies on **verifiable parental/guardian consent** captured via the parent-link email at sign-up rather than the child's own consent. Standard 8 high-privacy defaults already extended to under-18s under v0.9 and continue to apply to the wider cohort unchanged.
  - **B1 / B10 (separate DPO / DSL):** Lauren Johnson appointed as Designated Safeguarding Lead, separate from the Data Protection Officer (Calum Johnston). All references to "DPO and DSL" elsewhere in this DPIA should be read as two distinct individuals with distinct contact channels.
  - **B2 (hosting topology):** §4.5 sub-processor list and §2 data-flow narrative updated to make the canonical hosting topology explicit — Vercel (front end), Supabase (auth + primary DB, EU/Frankfurt), Microsoft Azure UK South (backend API), Anthropic Claude API (US, DPA prohibits training on submissions).
  - **B4 (response SLA):** general acknowledgement service-level commitment set to 10 working days; PDPPL/UK GDPR statutory deadline (30 calendar days / 1 month) for substantive data-subject-rights responses remains unchanged.
  - **Qatar PDPPL coverage:** Section added confirming this DPIA is the supporting document for the Article 16 permit application for processing minors' data (children's data being "personal data of a special nature" under PDPPL).
- **2026-04-10 (v0.9 DRAFT)** — Initial draft.

---

## Step 1 — Identify the need for a DPIA

Is a DPIA required? **Yes.**

Article 35(1) UK GDPR requires a DPIA where processing is "likely to result in a high risk to the rights and freedoms of natural persons". Article 35(3)(b) explicitly lists systematic processing of personal data on a large scale involving evaluation as high-risk. The ICO's "likely high risk" list further lists:

- Processing of children's data for profiling or automated decision-making, or for marketing, or for offering online services directly to them
- Innovative use of technology (we use AI/ML)
- Denial of service based on automated decision-making (not us, but adjacent)
- Evaluation or scoring (the AI marker)
- Systematic monitoring (our activity logs)
- Processing of data concerning vulnerable data subjects (children are explicitly listed)

Two or more of those apply to The English Hub. A DPIA is required.

Standard 2 of the Age Appropriate Design Code reinforces this: DPIAs must be carried out for services likely to be accessed by children, and must specifically consider the risks to children.

---

## Step 2 — Describe the processing

### 2.1 Nature of the processing

**What data is collected?** See `02-policies/data-minimisation-for-children.md` for the authoritative list. Summary:
- Account identifiers (email, opaque user_id, first name, age bracket)
- Authentication data (hashed password)
- Usage data (essays submitted, practice answers, scores, device/browser metadata)
- Security data (IP address — transient, truncated)
- Consent records (for under-13s)

**How is it collected?** Directly from the child (self-serve), from a teacher uploading a school roster, or from a parent via the parent-link flow.

**Where is it stored?** In a managed SQL database hosted in UK/EU; encrypted at rest and in transit; object storage for essay attachments; short-lived security logs.

**Who has access?** Child users (their own data), the associated teacher (school accounts), the associated parent (parent-linked accounts), the engineering team (strictly for operational need, access audited), the Data Protection Lead (for rights requests and incidents), and contracted sub-processors (hosting, email, payments, error monitor, AI marker).

**What processes are applied?** Storage, display in UI, marking (human and AI), progress calculation, notification sending, export for user data requests, deletion.

**How long is it retained?** Account lifetime + short post-deletion window for backups / audit; 24-month dormant-account deletion (automation pending — GAP-8B).

### 2.2 Scope

- **Number of data subjects expected:** initial target of several thousand students in first year; growing into tens of thousands if school procurement lands
- **Geographic reach:** UK primarily; incidental EEA
- **Volume of data per subject:** moderate — a few hundred essays / practice items in an active student year, plus account metadata
- **Duration:** indefinite while active; deletion on request or dormancy
- **Categories of data subject:** children 13–17 (majority), adult learners, teachers, parents
- **Special categories:** none deliberately collected, but essay content may incidentally include sensitive material — see §3 below

### 2.3 Context

- **Relationship with data subjects:** direct B2C or mediated via school / parent
- **Control level of the data subject:** significant — children can exercise all their rights in-app
- **Children involved:** yes, as the primary user group
- **Prior concerns:** none external; internal gaps tracked in `gap-analysis.md`
- **Public attention / novelty:** the use of AI marking is a relatively novel technical element
- **Industry codes:** we align with ICO Children's Code, UK GDPR, DPA 2018, PECR, DfE digital standards

### 2.4 Purposes

- **Primary purpose:** to provide GCSE English Language and Literature practice, feedback, and progress tracking to students, enabling them to improve at their exam subjects
- **Secondary purposes:** secure operation of the service, analytics on aggregate product usage (non-identifying), customer support, fulfilment of legal obligations
- **Intended outcome for data subjects:** improved understanding and exam outcomes; meaningful feedback on written work; a private and safe place to practise
- **Expected benefits:** educational benefit to users; educational equity (students without teacher access can still get feedback); reduced marking burden for teachers; commercial viability of the service so it can continue

---

## Step 3 — Consultation

- **Data Protection Lead:** integrated throughout design
- **Internal engineering + product:** reviewed as part of feature reviews
- **External DPO:** not yet engaged (GAP-2A)
- **Users / partners:** planned consultation with 2 partner schools (GAP-1B)
- **Data subjects:** informal feedback from teacher advisors; no formal child consultation yet
- **Sub-processors:** engaged contractually; DPAs in place
- **ICO:** not consulted under Article 36 (no residual high risk currently)

---

## Step 4 — Necessity and proportionality

### 4.1 Lawful basis for processing

| Processing activity | Lawful basis | Rationale |
|---|---|---|
| Running the core service (account, practice, marking) | Article 6(1)(b) — performance of contract | The child is using the service; running it is necessary for the contract. For under-13s the "contract" stands on parental consent under the parental-consent policy. |
| Security logging, fraud prevention | Article 6(1)(f) — legitimate interests | Genuine legitimate interest in security; low data volume; short retention; mitigated by minimisation; balanced against child rights. |
| Non-essential analytics | Article 6(1)(a) — consent | Opt-in; for under-13s, parental consent required. |
| Marketing communications | Article 6(1)(a) — consent | Opt-in; for under-13s, parental consent required. |
| AI marking | Article 6(1)(b) — performance of contract, supported by parental consent for under-13s and older-child consent for 13+ | Central to the service's educational purpose. |
| Compliance with legal obligations | Article 6(1)(c) | e.g., SAR responses, ICO notifications |

### 4.2 Necessity

For each processing activity above, we have asked: **could we achieve the same purpose with less data?** Outcomes:
- Reduced account collection to minimum set (see `data-minimisation-for-children.md`)
- Truncated IP storage
- Short security log retention
- Removed full DOB in favour of age bracket
- Architectural exclusion of location, biometrics, contacts
- AI sub-processor zero-retention contract to avoid accumulating essay content off-platform

### 4.3 Proportionality

- Is the processing proportionate to the benefit? **Yes.** The educational value of the service is significant, and the data footprint is modest.
- Are less intrusive alternatives available? **For each feature, we have explored alternatives (see the profiling policy exceptions).** The chosen designs are the least intrusive we can find while still delivering the educational outcome.

### 4.4 Transparency

- Full privacy notice + child-friendly notice + just-in-time explanations (partially complete, GAP-4A)
- Video explainer planned (GAP-4B)
- All policies version-controlled

### 4.5 Data subject rights

All UK GDPR rights are supported via the in-app "Your data" menu. See `05-ico/subject-access-request-procedure.md`.

---

## Step 5 — Identify and assess risks

See `01-assessment/risk-assessment-matrix.md` for the full matrix. Summary of child-specific high/medium risks:

| Risk | Mitigations | Residual |
|---|---|---|
| Child discloses sensitive content in an essay (self-harm, abuse) | Safeguarding pipeline: flagged content routed to human review; essay is not displayed with AI feedback; crisis signposting shown to child; in serious cases, school contact | Medium — but a well-designed safeguarding response, acknowledging that a child telling an adult is itself a protective outcome |
| Under-13 defeats age gate and uses service without parental consent | Mitigated by parent-link flow requirement; child-defaults regardless of declared age; no reduction in protection without stronger signal | Medium — acknowledged residual, tracked |
| Essay content shared outside intended audience | Private-by-default; peer sharing off; teacher-only sharing; contractual zero-retention with AI processor | Low |
| Sub-processor breach exposes child data | DPAs; minimum-necessary fields; UK/EU hosting; encryption; incident plan | Medium |
| AI marker produces an unfair grade treated as final | Framed as a suggestion; teacher is the final decision-maker; appeal flow | Low |
| Profiling of behaviour for commercial purposes | Architecturally impossible — no ad tech; no behavioural optimisation; policy + audit | Very low |
| Nudge techniques push children to weaker protections | Nudge policy; design review checklist; cookie banner fix in progress | Low → medium until GAP-13A closed |
| Inadequate transparency means child doesn't understand what's happening | Child privacy notice; just-in-time labels in progress; video explainer planned | Medium until GAP-4A/4B closed |

---

## Step 6 — Measures to reduce risk

Measures already in place:
- Data minimisation policy and data-field register
- High-privacy-by-default settings policy with engineering rules
- Age-verification policy and parent-consent flow
- Profiling policy with documented exceptions
- Nudge techniques policy with design-review checklist
- Geolocation policy (no precise location)
- DPAs with all sub-processors
- Encryption in transit and at rest
- Access control on internal admin tools; audit logs
- Incident response plan (in cyber-essentials pack, by the other workstream)
- Staff briefing on Children's Code + dark patterns
- Child-friendly privacy notice with in-product surfacing
- Safeguarding pipeline for worrying essay content
- Zero-retention AI sub-processor contract

Measures scheduled (see gap analysis):
- Cookie banner symmetry (GAP-13A) — P1
- Recommendations off by default for under-16s (GAP-7A) — P1
- Streaks off by default for under-16s (GAP-5A) — P1
- Dormant-account deletion automation (GAP-8B) — P1
- AI marking explainer + opt-out (GAP-12A/B) — P2
- Just-in-time notices audit (GAP-4A) — P2
- External DPO review (GAP-2A) — P3
- Age assurance vendor evaluation (GAP-3B) — P3

---

## Step 7 — Sign-off and record of outcomes

| Item | Outcome |
|---|---|
| Residual high risks requiring ICO prior consultation? | None. |
| Is processing compliant with UK GDPR / DPA 2018? | Substantially yes; see gaps. |
| Is it proportionate? | Yes. |
| Is it necessary? | Yes. |
| Is it in the best interests of the child (Standard 1)? | On balance, yes, with known items under remediation. |
| Overall recommendation | Proceed; complete P1 remediation before claiming full Children's Code compliance externally. |

**Sign-off:**

| Role | Name | Decision | Date |
|---|---|---|---|
| Data Protection Lead | — | Approve with remediation plan | 2026-04-10 |
| CTO | — | — | — |
| Founder | — | — | — |

**Next review:** 2027-04-10, or on any material change.

## Annexes

- Annex A — Sub-processor register (to be added)
- Annex B — Data-field register (to be added)
- Annex C — Security controls summary (see `business-docs/compliance/cyber-essentials/`)
