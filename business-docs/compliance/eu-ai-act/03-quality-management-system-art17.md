# 03 — Quality Management System (Article 17)

**Regulation:** Regulation (EU) 2024/1689, Article 17 (and Article 4 — AI literacy)
**System:** The English Hub AI Marking & Assessment System (high-risk, Annex III(3)(b))
**Document status:** ISSUED v1.0 — 2026-05-17
**QMS owner:** Founder (Calum Jardine, cj@upskillenergy.com)
**Scope:** All AI functionality (the six routes in doc 00 §4); proportionate to a
micro-enterprise provider with a single founder-led engineering function.

> Article 17(1) requires the provider to put in place a documented quality management system
> ensuring compliance with the Regulation, covering at minimum the thirteen elements
> Art. 17(1)(a)–(m). This document maps each element to The English Hub's actual practice and
> states, honestly, where an element is **defined but not yet operating** (a GAP) versus
> **operating**. It does not assert controls absent from the codebase.

---

## Art. 17(1)(a) — Regulatory compliance strategy (incl. conformity assessment & change management)

- **Conformity route.** Annex VI internal control (self-assessment); confirmed in doc 01.
  No notified body required for Annex III(3).
- **Strategy.** Reach an Annex VI conformity-ready state by **2 August 2026** (Art. 113):
  assemble the Annex IV technical file (doc 04), satisfy Arts. 9–15, draw up the
  EU Declaration of Conformity and affix CE marking (doc 13), register in the EU database
  (doc 14). Sequencing and dependencies are owned in doc 16 (roadmap).
- **Change management for conformity.** Any change that may affect compliance — model ID
  change from `claude-sonnet-4-20250514`, system-prompt change
  (`src/lib/marking/prompt-builder.ts:61-131`), grade-table change
  (`src/lib/marking/grade-predictor.ts:40-50`), safety-screen change
  (`src/lib/content-safety.ts`), or a new EU deployer — triggers re-assessment under Art. 9
  (doc 02 §6) and a technical-file update (Art. 11). Substantial modification (Art. 3(23))
  triggers a fresh conformity assessment.
- **Status:** strategy **defined**; conformity activities **GAP / in roadmap** (doc 16).

## Art. 17(1)(b) — Techniques/procedures for design, design control and design verification

- **Design control.** AI feature design records the intended purpose, the affected
  population (minors; EAL), the rubric grounding approach, and the Art. 5/Art. 9 constraints
  from docs 01–02 **before** implementation.
- **Existing design controls in code.** Examiner-persona + AO-grounded system prompt
  (`src/lib/marking/prompt-builder.ts:61-154`); strict output contract validated and clamped
  server-side (`src/lib/marking/feedback-generator.ts:71-140, 169-256`); defence-in-depth
  input truncation (`src/lib/marking/prompt-builder.ts:158-171`).
- **Design verification.** To be performed via the test regime in doc 06 (Art. 15) and the
  acceptance gate in doc 02 §5. **Currently a GAP** — no design-verification test suite
  exists yet.
- **Mandatory design gate (new control established here).** No change to an AI route, the
  system prompt, the grade table, or a safety screen ships without: (i) a recorded
  child-impact note (aligns with Children's-Code GAP-1A, `gap-analysis.md` P3), (ii) an
  Art. 9 risk delta, (iii) passing the doc 06 acceptance gate once that gate exists.
- **Owner / date.** Founder + Engineering — design gate documented in the repo's
  contribution process by **2026-06-30**.

## Art. 17(1)(c) — Development, quality control and quality assurance

- **Development controls in place.** Type-checked TypeScript; server-side validation of all
  AI inputs (`src/app/api/mark/route.ts:239-263`;
  `src/app/api/cefr-assess/route.ts:213-234`); pre-call content-safety screening
  (`src/lib/content-safety.ts:16-112`); CI exists (`.husky/`, `vitest.config.ts`,
  `playwright.config.ts`, `.github/`).
- **QA gap.** No AI-output quality gate (accuracy/bias/robustness) in CI. The DPIA-asserted
  "weekly 200-essay eval" (`dpia-ai-features-v1.md:47`) is **not implemented**.
- **Owner / date.** Engineering — AI quality gate wired to CI alongside doc 06 harness by
  **2026-07-31**.

## Art. 17(1)(d) — Examination, test and validation procedures (incl. frequency)

- **Procedure.** Defined in doc 06 and doc 02 §5: accuracy (per board), bias (matched-pair),
  robustness (adversarial/injection), safety-path recall (safeguarding). Frequency:
  pre-deployment for any material change (Art. 9(6)); scheduled re-validation quarterly;
  continuous via post-market monitoring (doc 11).
- **Status:** procedure **defined**, execution **GAP** (no baseline yet). Until a baseline
  exists, no accuracy or fairness claim may be made to deployers or in marketing.

## Art. 17(1)(e) — Technical specifications and standards applied

- **Standards strategy.** Apply harmonised standards once cited in the OJEU; in the interim,
  align to ISO/IEC 42001 (AI management system) and ISO/IEC 23894 (AI risk) as informal
  references. Any partial/non-application of a harmonised standard to be recorded in the
  Annex IV technical file (doc 04) with justification (Art. 17(1)(e)).
- **System technical spec anchors:** model `claude-sonnet-4-20250514`,
  `max_tokens` 4096 (marking/cefr) / 2048 (essay/feedback) / 2000 (notes), 50 s upstream
  timeout (`src/app/api/mark/route.ts:154-160`;
  `src/app/api/toolkit/generate-notes/route.ts:235, 247-251`), per-user rate limits
  (10/day marking & CEFR; 5/hour notes — `src/app/api/mark/route.ts:91-95`;
  `src/app/api/toolkit/generate-notes/route.ts:163-166`).
- **Status:** strategy **defined**; full spec consolidated in doc 04 (GAP).

## Art. 17(1)(f) — Data management procedures (acquisition, analysis, labelling, governance)

- **Operational data handling.** Marking inputs: essay text + rubric + question only;
  account identifiers excluded from the prompt
  (`src/lib/marking/prompt-builder.ts:158-171`). ROPA activity 3–4 governs essay
  storage/transfer (`business-docs/compliance/rfc/ropa-v1.md`).
- **Art. 10 governance GAP.** No documented training/validation/test dataset governance and
  **no bias-relevant data analysis** (the system uses a foundation model + static grade
  table, not a trained-in-house model, but Art. 10 still requires governance of any
  data used for evaluation/calibration, and bias examination). Detailed treatment in doc 05.
- **Owner / date.** Data Protection Lead + Engineering — doc 05 (data & data governance)
  drafted by **2026-07-15**.

## Art. 17(1)(g) — Risk management system

- The Art. 9 RMS is doc 02. It is a living document with quarterly + triggered review
  (doc 02 §6) and owned by the Founder. The QMS incorporates it by reference; QMS reviews
  consume the RMS register and feed remediation tracking.

## Art. 17(1)(h) — Post-market monitoring (Art. 72)

- **Status: GAP.** No post-market monitoring system operates today. A blocking enabler is
  the absence of inference logging — `/api/mark` persists nothing server-side
  (`src/app/marking/submit/page.tsx:285-293`) (doc 02 R10). The PMM plan and the data it
  needs are specified in doc 11.
- **Owner / date.** Founder — doc 11 PMM plan drafted by **2026-07-15**; logging delivered
  by **2026-07-31** (doc 02 R10).

## Art. 17(1)(i) — Serious-incident reporting procedures (Art. 73)

- **Status: GAP.** No Art. 73 procedure exists. Required: detection, severity assessment
  against Art. 3(49) "serious incident", reporting to the relevant market-surveillance
  authority within the Art. 73 windows (no later than 15 days; 2 days for widespread
  infringement / serious incident as specified), root-cause and corrective action (Art. 20).
- **Interim bridge.** The existing breach process in the ROPA (72-hour notification posture,
  `business-docs/compliance/rfc/ropa-v1.md` standing controls) and the `SafeguardingReport`
  model (`prisma/schema.prisma:401`) provide partial scaffolding but are **not** an
  AI-Act-Art. 73 procedure.
- **Owner / date.** Founder — doc 12 incident procedure drafted by **2026-07-15**.

## Art. 17(1)(j) — Handling of communication with authorities and third parties

- **Single point of contact:** Founder, cj@upskillenergy.com (also DPO contact per
  `business-docs/compliance/rfc/ropa-v1.md`). Procedure: log inbound regulator/notified-body
  contact, respond within statutory deadlines, preserve evidence, involve counsel for any
  AI-Act enforcement contact. Cooperation duty under Art. 21 acknowledged. Deployer
  communication channel for incident/feedback flow specified in docs 08–09 and 11.
- **Status:** contact **defined**; written procedure **to be finalised** in doc 12 by
  **2026-07-15**.

## Art. 17(1)(k) — Record-keeping

- **Operating records.** Append-only consent ledger + audit log
  (`src/lib/consent.ts:64-96, 105-142`); `AuditLog` model
  (`prisma/schema.prisma:422`).
- **AI-Act record-keeping GAP.** Records mandated by Arts. 11, 12, 18, 19 (technical file;
  automatically generated logs; 10-year documentation retention; log retention) are **not**
  in place — there is no AI-inference log at all (doc 02 R10).
- **Retention rule established here.** The Annex IV technical file, the DoC, and QMS
  documentation will be retained for **10 years** after the system is placed on the market /
  put into service (Art. 18). Automatically generated logs retained per Art. 19 (and in any
  case ≥ 6 months unless other law requires longer). Designated record store and custodian
  to be named in doc 04.
- **Owner / date.** Founder + Engineering — logging + record store by **2026-07-31**.

## Art. 17(1)(l) — Resource management (incl. security-of-supply)

- **Resources.** Founder-led; single critical AI supplier — **Anthropic** (GPAI provider).
  Concentration risk is material: a single model ID across all six routes
  (`src/app/api/mark/route.ts:154` and the four other AI routes). Security-of-supply
  measures: API key scoped & rotatable (`process.env.ANTHROPIC_API_KEY`), graceful
  service-unavailable handling on upstream failure
  (`src/app/api/mark/route.ts:139-185`), deterministic template fallback for revision notes
  (`src/app/api/toolkit/generate-notes/route.ts:259-280`).
- **Supplier governance.** Anthropic DPA / data-retention / no-training evidence to be
  obtained and filed (doc 02 R9; doc 05). Vendor list reviewed quarterly
  (`business-docs/compliance/rfc/ropa-v1.md` standing controls).
- **Owner / date.** Founder — supplier evidence filed by **2026-06-15**; documented
  fallback/continuity position in doc 06 by **2026-07-31**.

## Art. 17(1)(m) — Accountability framework

| Responsibility | Accountable | Notes |
|---|---|---|
| Overall AI Act conformity (Provider) | Founder | Single accountable person; micro-enterprise |
| Risk management (Art. 9) | Founder (Risk owner) | doc 02 |
| Data protection / DPIA reconciliation / Art. 10 | Data Protection Lead (role; currently Founder until DPO engaged) | doc 05, doc 15; external DPO engagement is `gap-analysis.md` GAP-2A (blocked on MRR) |
| Engineering implementation, logging, eval harness | Engineering (founder-led) | docs 04, 06 |
| Human oversight design (Art. 14) | Product + Founder | doc 07 |
| Deployer enablement (Arts. 26–27) | Founder | docs 08, 09 |
| Incident response (Art. 73) | Founder (Incident owner) | doc 12 |
| Legal sign-off (Arts. 2, 5, 6) | External counsel | doc 01 `[COUNSEL DECISION]` items |

Documented gap: key compliance roles are concentrated in one person; this is recorded as an
organisational risk. Mitigation: external counsel for legal-decision items and a fractional
DPO engagement on the MRR trigger (`gap-analysis.md` GAP-2A).

---

## Art. 4 — AI literacy (cross-cutting QMS obligation)

- **Obligation.** Ensure a sufficient level of AI literacy among staff and others operating
  the system on the provider's behalf, considering their role and the affected persons
  (minors).
- **Current state.** Informal (single founder-operator with working knowledge). **No
  recorded AI-literacy measure.** Schools (deployers) also owe Art. 4 to their teaching
  staff — addressed in the deployer brief (doc 09).
- **Control established here.** Maintain a one-page AI-literacy record for anyone operating
  or changing the AI system, covering: the system's intended purpose & limits, the indicative
  nature of the grade and the AQA-table caveat, the Art. 5(1)(f) emotion-recognition
  constraint (doc 01 §6), the safeguarding-path limits (doc 02 R8), and the obligation never
  to claim an unimplemented control.
- **Owner / date.** Founder — AI-literacy record created by **2026-06-30**; deployer-facing
  AI-literacy guidance in doc 09 by the IFU milestone (doc 16).

---

## QMS status summary

| Art. 17 element | State |
|---|---|
| (a) regulatory strategy | Defined; conformity activities in roadmap (GAP) |
| (b) design control/verification | Partial (design controls in code); verification GAP |
| (c) development QA | Partial; AI quality gate GAP |
| (d) test/validation procedures | Defined; execution GAP |
| (e) standards | Strategy defined; file GAP |
| (f) data management | Partial; Art. 10 governance GAP |
| (g) risk management | **Operating** (doc 02) |
| (h) post-market monitoring | GAP (blocked by logging) |
| (i) incident reporting | GAP |
| (j) authority communication | Defined; procedure GAP |
| (k) record-keeping | Partial; AI-Act records GAP |
| (l) resource/supply | Partial; supplier evidence GAP |
| (m) accountability | **Defined**; single-person concentration risk noted |
| Art. 4 AI literacy | Partial; record GAP |

**Honest overall position:** the QMS is **established and documented** but is **not yet
operating across all thirteen elements**. The controlling deficiencies for the 2 Aug 2026
target are the absence of (i) inference logging, (ii) an accuracy/bias/robustness evaluation
baseline, and (iii) the conformity instruments (technical file, DoC, EU registration). These
are sequenced in doc 16. No element is reported as compliant on the basis of a control that
is not present in the codebase.

---

## Cross-references

Classification & legal decisions: doc 01. Risk register: doc 02. Technical file: doc 04.
Data governance: doc 05. Accuracy/robustness/cyber & logging: doc 06. Human oversight:
doc 07. IFU: doc 08. Deployer/FRIA: doc 09. Transparency: doc 10. Post-market monitoring:
doc 11. Incident reporting: doc 12. DoC/CE: doc 13. EU registration: doc 14. DPIA
reconciliation: doc 15. Roadmap: doc 16.
