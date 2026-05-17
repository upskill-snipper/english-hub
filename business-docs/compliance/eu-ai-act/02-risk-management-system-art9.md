# 02 — Risk Management System (Article 9)

**Regulation:** Regulation (EU) 2024/1689, Article 9
**System:** The English Hub AI Marking & Assessment System (high-risk, Annex III(3)(b))
**Document status:** ISSUED v1.0 — 2026-05-17
**Risk owner:** Founder (Calum Jardine, cj@upskillenergy.com)
**Review cadence:** Quarterly + on any trigger in §6

> Article 9 requires a **continuous, iterative** risk-management process run across the
> lifecycle: identify & analyse known and reasonably foreseeable risks to health, safety and
> fundamental rights; estimate & evaluate risks from intended use and reasonably foreseeable
> misuse; evaluate post-market data; and adopt targeted risk-management measures. Art. 9(9)
> requires specific consideration of whether the system is likely to adversely impact persons
> under 18. This system is used overwhelmingly by minors, so **minors are a named vulnerable
> group throughout this RMS.**

---

## 1. Methodology

- **Scoring.** Likelihood (Rare / Possible / Likely / Almost-certain) × Severity (Minor /
  Moderate / Major / Severe, where Severe = serious harm to a child's education, mental
  health, or fundamental rights). Residual rating after mitigation: Low / Medium / High.
- **Acceptability rule.** No risk rated **High residual** may persist without either (a) a
  funded, dated remediation reducing it to ≤ Medium, or (b) a documented Founder risk
  acceptance with counsel/DPO input. A residual rating may **not** be lowered on the strength
  of a control that is not evidenced in the codebase (the failure mode of the existing signed
  DPIA — see doc 15).
- **Lifecycle scope.** Design → data → integration of the GPAI (Anthropic) → release →
  post-market monitoring (doc 11) → incident handling (doc 12).
- **Inputs.** Codebase audit (this pack), existing DPIA, ROPA, Children's-Code gap analysis,
  public AI-governance honest assessment (`src/lib/i18n/dictionary-legal-long.ts`).
- **Vulnerable groups (Art. 9(9)).** Minors aged 13–18; within that, EAL learners and
  SEND learners are treated as compounded-vulnerability subgroups.

---

## 2. Reasonably foreseeable misuse (Art. 9(2)(b))

- A learner pasting non-essay content or prompt-injection text to manipulate the marker
  (`src/lib/content-safety.ts:22-34`).
- A learner treating the indicative predicted grade as an official/guaranteed grade despite
  the disclaimer (`src/lib/ai-disclaimer.ts:4-7`).
- A learner or teacher using the AQA-derived grade table for a non-AQA board and treating the
  number as accurate (`src/lib/marking/grade-predictor.ts:4-9, 40-50`).
- A learner submitting a free-text disclosure of harm (self-harm/abuse) into the essay field
  expecting help (`src/lib/content-safety.ts:92-109`).
- A teacher over-relying on AI marks instead of exercising independent judgement (automation
  bias).

---

## 3. Risk register (system-specific)

Severity reflects impact on a **minor learner** unless stated.

### R1 — LLM marking error (incorrect AO marks / band)

- **Hazard.** The model awards marks/bands that diverge materially from a qualified examiner.
- **Affected.** All learners; minors disproportionately (lower ability to detect the error).
- **Likelihood:** Likely · **Severity:** Major (misdirected revision, misplaced confidence in a high-stakes year).
- **Existing controls.** Mark scheme + AO band descriptors injected as grounding context
  (`src/lib/marking/prompt-builder.ts:80-83, 133-154`); marks clamped to scheme maxima
  (`src/lib/marking/feedback-generator.ts:187-191`); formative-only disclaimer
  (`src/lib/ai-disclaimer.ts:4-7`).
- **GAPs vs. DPIA claim.** `dpia-ai-features-v1.md:47` asserts a *weekly 200-gold-essay eval
  suite with a <80% accuracy feature-pause*. **No such eval, metric, or pause exists in the
  codebase.** There is no measured accuracy figure for any board (doc 06 is a GAP).
- **Residual:** **High** until an accuracy evaluation regime exists (doc 06 / §5).
- **Owner / date.** Engineering + Founder — accuracy baseline & eval harness by **2026-07-15**;
  feature-pause threshold wired by **2026-07-25**.

### R2 — Grade mis-prediction (predictor model risk)

- **Hazard.** A single static 5-year AQA average table maps % → grade for **all** boards and
  papers; real boundaries move yearly and differ by board.
- **Affected.** All learners; especially non-AQA learners.
- **Likelihood:** Almost-certain (systematic, by design) · **Severity:** Moderate–Major.
- **Existing controls.** Output labelled "indicative" in code comments
  (`src/lib/marking/grade-predictor.ts:6-8`); UI disclaimer.
- **GAP.** The number is presented to learners as a `predictedGrade` with a `confidence` %
  that is merely `totalMarks/maxMarks` (`src/app/marking/submit/page.tsx:254`), which can be
  misread as a reliability score.
- **Residual:** **Medium** (with disclaimer) → target **Low** with (i) explicit per-board
  caveat in the rendered output, (ii) renaming/relabelling the "confidence" figure, (iii)
  board-specific tables or a stated single-board scope.
- **Owner / date.** Product + Engineering — UI relabel & per-board caveat by **2026-06-30**;
  board-table decision by **2026-07-31**.

### R3 — Cross-board grade-table misuse

- **Hazard.** Edexcel/OCR/WJEC/CCEA/IGCSE learners receive AQA-calibrated grades.
- **Likelihood:** Likely · **Severity:** Moderate.
- **Controls.** None board-specific today.
- **Residual:** **Medium** → **Low** once R2 board-table decision is implemented or scope is
  contractually/UX-limited to AQA.
- **Owner / date.** Engineering — same milestone as R2 (**2026-07-31**).

### R4 — Bias against EAL / SEND / minors (fundamental-rights: non-discrimination, Art. 10)

- **Hazard.** The marker penalises L2-transfer features, dialectal/SEND writing patterns, or
  shorter minor-typical responses, depressing grades for protected groups.
- **Affected.** EAL learners (notably Gulf-Arabic L1 per existing analysis), SEND learners,
  younger minors.
- **Likelihood:** Possible–Likely · **Severity:** Severe (discriminatory educational harm).
- **Existing controls.** System-prompt instruction to keep feedback age-appropriate and to
  reject off-topic submissions (`src/lib/marking/prompt-builder.ts:86-91`). The prompt does
  **not** currently contain the L2/transfer-error guidance the DPIA asserts at
  `dpia-ai-features-v1.md:53`.
- **GAPs vs. DPIA claim.** `dpia-ai-features-v1.md:53` asserts a *quarterly matched-pair bias
  eval (L1-English vs L1-Arabic), a >5% AO-gap retune trigger, and a Gulf-Arabic transfer-error
  library*. **None of this exists in code.** The public honest assessment concedes the gap:
  *"We have not yet tested AI-generated feedback for systematic bias …"*
  (`src/lib/i18n/dictionary-legal-long.ts:341`).
- **Residual:** **High** (no bias testing on a system used at scale by EAL minors).
- **Owner / date.** Data Protection Lead + Engineering — matched-pair bias evaluation
  protocol designed by **2026-07-10**, first run + results in doc 05/06 by **2026-07-31**;
  L2-guidance added to the system prompt by **2026-06-30** (interim mitigation).

### R5 — Prompt injection / safety-rail bypass

- **Hazard.** Embedded instructions in the essay override the examiner persona or extract a
  full rewritten essay (academic-integrity harm) or unsafe content to a minor.
- **Likelihood:** Possible · **Severity:** Moderate.
- **Existing controls.** Regex injection screen pre-call (`src/lib/content-safety.ts:22-40`);
  system-prompt instruction to ignore embedded instructions
  (`src/lib/marking/prompt-builder.ts:90`); output suggestion length hard-capped to prevent a
  smuggled full essay (`src/lib/marking/feedback-generator.ts:50, 240-248`); input scrubbing
  for the notes route (`src/app/api/toolkit/generate-notes/route.ts:128-135`).
- **Residual:** **Medium** (regex screens are brittle; defence-in-depth present).
- **Owner / date.** Engineering — add adversarial prompt-injection test set to the eval
  harness by **2026-08-01**.

### R6 — Over-reliance / parasocial reliance by minors

- **Hazard.** A minor treats the AI as a human teacher / authority, erodes guardian/teacher
  authority, or develops dependence.
- **Likelihood:** Likely · **Severity:** Moderate.
- **Existing controls.** Formative disclaimer text (`src/lib/ai-disclaimer.ts:4-7`);
  system-prompt persona is explicitly a marking tool with no first-person human claims
  (`src/lib/marking/prompt-builder.ts:71-73`).
- **GAPs vs. DPIA claim.** `dpia-ai-features-v1.md:59` asserts a *30-minute cooling-off
  banner* and persistent "AI tutor" labelling; the cooling-off banner is **not implemented**
  (no timer/banner in the marking submit/results flow). Children's-Code GAP-12A/12B
  (first-use AI explainer + opt-out) is *"Copy drafted; implementation pending"*
  (`gap-analysis.md` P2). Server-side AI opt-out and minor-consent gating **are** enforced
  consistently across all four interactive marking routes — `/api/mark`
  (`src/app/api/mark/route.ts:78-89`), `/api/cefr-assess`
  (`src/app/api/cefr-assess/route.ts:77-87`), `/api/essay-feedback`
  (`src/app/api/essay-feedback/route.ts:148-158`) and `/api/essay/feedback`
  (`src/app/api/essay/feedback/route.ts:206-217`) — via `checkMinorAIConsent`
  (`src/lib/consent-check.ts:82-97`) and `isAiOptedOutServer`
  (`src/lib/ai-preferences.ts:40-51`). The gating itself is a strength; the persistent
  label / cooling-off prompt are the residual gaps.
- **Residual:** **Medium** → target **Low** with first-use explainer + persistent label +
  cooling-off prompt actually shipped.
- **Owner / date.** Product + Frontend — first-use AI explainer & persistent label by
  **2026-06-30** (tracked as GAP-12A/12B); cooling-off prompt by **2026-07-31**.

### R7 — Confidence / wellbeing harm from blunt feedback tone

- **Hazard.** Harsh or demoralising feedback damages a minor's confidence/wellbeing.
- **Likelihood:** Possible · **Severity:** Moderate–Major (minor's mental wellbeing).
- **Existing controls.** System prompt mandates a "warm, encouraging and constructive" tone
  for a 14–16 audience (`src/lib/marking/prompt-builder.ts:71-73`;
  `src/app/api/essay-feedback/route.ts:58, 81-86`).
- **GAP vs. DPIA claim.** `dpia-ai-features-v1.md:49` asserts *post-hoc tone classification
  with automatic rewrite of tone-failed responses* and a parent "feedback intensity" slider.
  **No tone classifier or rewrite stage exists.** **Binding constraint (doc 01 §6(f)):** any
  tone/affect feature must not infer the *learner's* emotions (Art. 5(1)(f)); only the
  model-output register may be evaluated.
- **Residual:** **Medium** (prompt-level tone control only; no measurement).
- **Owner / date.** Product — decide tone-QA approach compliant with Art. 5(1)(f) by
  **2026-07-31**; if built, document in doc 06/07.

### R8 — Safeguarding-disclosure miss (fundamental rights: child safety)

- **Hazard.** A minor discloses self-harm/abuse in an essay; the disclosure is missed or not
  routed to a human, and/or the essay text is sent to the GPAI provider.
- **Likelihood:** Possible · **Severity:** Severe.
- **Existing controls.** Two regex families only — `/self[- ]?harm/` and `/suicid/` — which
  return static UK helpline signposting and **block the submission**
  (`src/lib/content-safety.ts:95-109`). A `SafeguardingReport` model and human-review models
  exist in the schema (`prisma/schema.prisma:294, 401`).
- **GAPs vs. DPIA claim.** `dpia-ai-features-v1.md:51` asserts a *free-text disclosure
  detector = keywords **plus** a Haiku classifier covering suicide, self-harm, **abuse, eating
  disorders, family violence**, with routing to a **human safeguarding queue** and DSL/parent
  notification, on a **zero-retention** Anthropic endpoint*. **Reality:** a 2-regex keyword
  check with **no** classifier, **no** coverage of abuse/eating-disorders/family-violence,
  **no** human queue write (the model exists but the safety path does not populate it), and
  **no** evidence of a configured zero-data-retention endpoint anywhere in the AI routes
  (`src/app/api/mark/route.ts:148-160` uses the standard SDK with no ZDR header/endpoint;
  same for `cefr-assess`, `essay-feedback`, `essay/feedback`, `toolkit/generate-notes`).
  Additionally, `/api/essay/feedback` does **not** run the pre-submission
  `contentSafetyCheck` safeguarding/injection screen that `/api/mark` and
  `/api/essay-feedback` run (`src/app/api/mark/route.ts:112-116` vs.
  `src/app/api/essay/feedback/route.ts` which relies only on a post-hoc `filterAIResponse`
  at L265), so a self-harm/abuse disclosure submitted via that route is **not** intercepted
  by the keyword signposting before being sent to the GPAI; and that route's
  `logToAuditTrail` and DB persistence are TODO stubs
  (`src/app/api/essay/feedback/route.ts:101-105, 286-298`). (Minor-consent and AI-opt-out
  gating *are* present on that route — L206-217.)
- **Residual:** **High** (narrow detector; missing categories; no human routing; provider-
  retention assertion unproven; one AI route missing the minor-consent gate).
- **Owner / date.** Founder + Engineering — (1) confirm & document Anthropic data-retention
  posture in doc 05 by **2026-06-15**; (2) extend detector coverage and wire the
  `SafeguardingReport` human queue by **2026-07-31**; (3) add the pre-submission
  `contentSafetyCheck` to `/api/essay/feedback` (or retire/redirect that route) by
  **2026-06-15**; (4) reconcile the DPIA claims in doc 15 immediately.

### R9 — Data leakage to the GPAI provider / training exposure

- **Hazard.** Minors' essay text (potentially containing personal/special-category
  disclosures) is processed by Anthropic and could be retained or used for training contrary
  to the DPIA's assertions; cross-border transfer exposure.
- **Likelihood:** Possible · **Severity:** Severe.
- **Existing controls.** Outbound payload limited to essay + rubric + question; account
  identifiers not sent in the prompt (`src/lib/marking/prompt-builder.ts:158-171`); ROPA
  records the Anthropic transfer and asserts SCCs + zero-retention
  (`business-docs/compliance/rfc/ropa-v1.md` activity 4).
- **GAPs.** No zero-data-retention endpoint/header is set in any AI route (see R8 evidence).
  The public honest assessment states Anthropic has *"no documented Qatar-specific transfer
  mechanism"* (`src/lib/i18n/dictionary-legal-long.ts:613`). No DPA/ZDR contract artefact is
  in-repo to evidence the DPIA/ROPA claim.
- **Residual:** **High** until the Anthropic data-processing/zero-retention posture is
  evidenced and the transfer mechanism is documented.
- **Owner / date.** Founder / DPL — obtain & file Anthropic DPA + data-retention/no-training
  evidence; document transfer mechanism in doc 05 by **2026-06-15**.

### R10 — No lifecycle logging (traceability) — Art. 12 enabler-risk

- **Hazard.** `/api/mark` persists no record server-side (browser `localStorage` only —
  `src/app/marking/submit/page.tsx:285-293`); there is no automatic log of AI inferences,
  inputs/outputs, model version, or decisions. This defeats post-market monitoring (Art. 72),
  incident reconstruction (Art. 73), accuracy auditing (Art. 15), and the learner's right to
  explanation (Art. 86).
- **Likelihood:** Almost-certain (architectural) · **Severity:** Major (compliance &
  accountability).
- **Existing controls.** `AuditLog` model exists and is used for consent events
  (`src/lib/consent.ts:84-94`); `MarkingSubmission`/`Essay`/`AIFeedback` models exist
  (`prisma/schema.prisma:252-292, 712`) but the marking route does not write to them.
- **Residual:** **High.**
- **Owner / date.** Engineering — design & implement compliant inference logging
  (input hash, model ID, output, timestamp, user, route) with a defined retention aligned to
  Art. 19; specified in doc 06/11, delivered by **2026-07-31**.

---

## 4. Risk summary table

| ID | Risk | Likelihood | Severity | Residual | Owner | Target |
|---|---|---|---|---|---|---|
| R1 | LLM marking error | Likely | Major | **High** | Eng + Founder | 2026-07-25 |
| R2 | Grade mis-prediction (predictor) | Almost-certain | Moderate–Major | Medium | Product + Eng | 2026-07-31 |
| R3 | Cross-board grade-table misuse | Likely | Moderate | Medium | Eng | 2026-07-31 |
| R4 | Bias vs EAL/SEND/minors | Possible–Likely | Severe | **High** | DPL + Eng | 2026-07-31 |
| R5 | Prompt injection / rail bypass | Possible | Moderate | Medium | Eng | 2026-08-01 |
| R6 | Over-reliance by minors | Likely | Moderate | Medium | Product + FE | 2026-07-31 |
| R7 | Blunt-tone wellbeing harm | Possible | Moderate–Major | Medium | Product | 2026-07-31 |
| R8 | Safeguarding-disclosure miss | Possible | Severe | **High** | Founder + Eng | 2026-07-31 |
| R9 | Data leakage / training exposure | Possible | Severe | **High** | Founder / DPL | 2026-06-15 |
| R10 | No lifecycle logging (Art. 12) | Almost-certain | Major | **High** | Engineering | 2026-07-31 |

**Five High-residual risks (R1, R4, R8, R9, R10)** are the controlling items for the 2 Aug
2026 readiness decision (doc 16). None may be down-rated on the basis of a DPIA-asserted
control that is absent from code.

---

## 5. Testing & validation regime (Art. 9(6)–(8))

**Current state: not established (GAP).** The DPIA's "weekly 200-essay eval" is not
implemented. Target regime, owned by Engineering + Founder, specified in detail in doc 06:

1. **Gold-standard accuracy set** — ≥150 essays per active board/paper with
   examiner-assigned AO marks; metric = exact-band agreement and ±1-band agreement vs
   examiner; baseline measured **before** any conformity claim.
2. **Bias evaluation** — matched-pair protocol (controlled content, varied L1/EAL and
   SEND-pattern surface features) with a pre-registered fairness threshold; first run feeds
   doc 05/06 (R4).
3. **Robustness/adversarial** — prompt-injection and jailbreak corpus exercising
   `content-safety.ts` and the system-prompt rails (R5).
4. **Safety-path tests** — disclosure-detection recall on a labelled safeguarding test set
   (R8).
5. **Acceptance gate** — defined pass thresholds; failure triggers the feature-pause control
   the DPIA promises but that does not yet exist; pre-deployment testing per Art. 9(6) before
   any material model/prompt change.
6. **Pre-deployment validation against the intended purpose** — testing in conditions
   representative of the intended use (minor learners, multiple boards, EAL cohort).

Until items 1–5 exist and have produced documented results, residual ratings for R1, R4 and
R8 remain **High** and the system is **not** in an Annex VI conformity-ready state (doc 16).

---

## 6. Review cadence & triggers (Art. 9(2) "continuous iterative")

- **Scheduled:** quarterly, first business day of each quarter (aligned with
  `dpia-ai-features-v1.md` §7).
- **Triggered review (any of):** change to any file under `src/app/api/{mark,mark/stream,
  essay-feedback,essay/feedback,cefr-assess,toolkit/generate-notes}`, `src/lib/marking/**`,
  `src/lib/content-safety.ts`, `src/lib/consent*`, `src/lib/ai-preferences.ts`; change of the
  model ID `claude-sonnet-4-20250514`; an Anthropic model/version/capability change; a new
  EU deployer; any safeguarding or content incident (link to doc 12); any post-market signal
  (doc 11) breaching a threshold.
- **Output of each review:** updated register, updated residual ratings (evidence-based
  only), updated owners/dates, and a feed into doc 03 (QMS), doc 11 (PMM) and doc 15 (DPIA
  reconciliation).

---

## 7. Cross-references

Classification & Art. 5 constraint: doc 01. QMS & change control: doc 03. Data governance &
bias evidence: doc 05. Accuracy/robustness/cyber & logging design: doc 06. Human oversight:
doc 07. Post-market monitoring: doc 11. Incident reporting: doc 12. DPIA reconciliation
(over-claimed controls): doc 15. Readiness roadmap: doc 16.
