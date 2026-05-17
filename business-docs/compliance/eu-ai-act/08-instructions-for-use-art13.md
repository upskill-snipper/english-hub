# 08 — Instructions for Use (Art 13 EU AI Act)

**Regulation:** Regulation (EU) 2024/1689 (the "EU AI Act"), Article 13 and Annex IV(7).
**System:** "The English Hub" AI marking, grade-prediction, feedback and CEFR-assessment system.
**Classification:** High-risk AI system — **Annex III(3)(b)** (AI systems intended to be used to evaluate learning outcomes, including where those outcomes are used to steer the learning process of natural persons).
**Provider:** The English Hub Ltd (United Kingdom) — `cj@upskillenergy.com`.
**Upstream GPAI model:** Anthropic Claude `claude-sonnet-4-20250514` (Anthropic PBC, US).
**Deployer (the audience for this document):** schools, colleges and other education institutions that enable the marking product for their pupils ("the Deployer").
**Conformity route:** Annex VI internal control (self-assessment, no notified body).
**Document status:** v0.1 DRAFT — pending legal sign-off (see `human-action-checklist.md`).
**Cross-references:** doc 01 (system overview & classification), doc 02 (risk-management system / RMS), doc 03 (data governance), doc 04 (technical documentation Annex IV), doc 05 (logging/record-keeping), doc 06 (accuracy/robustness/cybersecurity), doc 07 (human oversight design). *(Docs 01–07 are planned siblings in this folder and are referenced as such.)*

> **How to read this document.** Article 13 requires the provider to give deployers concise, complete, correct and clear instructions for use. This is that document. It is written to be handed to a school's Data Protection Officer / Designated Safeguarding Lead / Head of English. It is deliberately blunt about limitations because Article 13(3)(b)(iii) requires disclosure of known and foreseeable circumstances that may lead to risks to health, safety or fundamental rights.

---

## 1. Identity and contact (Art 13(3)(a))

| Field | Value |
|---|---|
| Provider legal name | The English Hub Ltd |
| Provider contact | `cj@upskillenergy.com` |
| EU authorised representative (Art 22) | **[TO BE APPOINTED — placeholder]** — required before EU placement if the provider has no EU establishment (see doc 16 and `human-action-checklist.md`) |
| System name | The English Hub — AI Marking & Feedback |
| Upstream GPAI model | Anthropic Claude `claude-sonnet-4-20250514`, invoked at `src/app/api/essay/feedback/route.ts:84` and (per the same model id) the marking pipeline |
| Intended high-risk use | Annex III(3)(b) — evaluation of learning outcomes (essay marking) and steering of the learning process (feedback, next-steps, predicted grade) |
| Software version | **[RELEASE TAG — placeholder; bind at release]** |

---

## 2. Intended purpose (Art 13(3)(b)(i))

The system is intended **only** to provide **formative practice feedback** on GCSE/IGCSE English Language and English Literature written responses, for learners typically aged 13–18, including learners with English as an additional language (EAL).

It performs the following functions:

1. **AI essay marking** — accepts a learner's essay plus a question, marks it against an exam-board Assessment Objective (AO) rubric, and returns per-AO marks with justifications and short evidence quotes. Pipeline: `src/lib/marking/prompt-builder.ts:44`, model id `claude-sonnet-4-20250514`, parsing/clamping `src/lib/marking/feedback-generator.ts:71`.
2. **Predicted grade** — converts the AO marks to an *indicative* 1–9 grade. Logic: `src/lib/marking/grade-predictor.ts:61`.
3. **Written feedback** — strengths, improvements (capped, never a rewritten essay — `src/lib/marking/feedback-generator.ts:50` `MAX_SUGGESTION_CHARS = 250`), and next-steps-to-next-grade.
4. **Standalone essay feedback** — `POST /api/essay/feedback` (`src/app/api/essay/feedback/route.ts`) for Premium B2C users; appends a disclaimer (`src/lib/ai-disclaimer.ts:4`).
5. **CEFR productive-skill assessment** — assesses EAL learners' written/spoken-notes responses and returns an overall CEFR band plus per-criterion bands. UI: `src/components/eal/CEFRAssessClient.tsx`; endpoint `POST /api/cefr-assess`.
6. **Revision/study-material generation** — AI-drafted revision content surfaced with an on-page AI notice (`src/app/toolkit/revision-builder/page.tsx`, `src/app/blog/[slug]/page.tsx`).

**It is NOT intended for, and must NOT be used as:**

- an official, summative or certificated assessment of any kind;
- the sole basis of any decision producing a legal or similarly significant effect on a learner (e.g. setting, tiering, predicted-grade submission to UCAS or an exam board, access arrangements, exclusion, or any decision under Art 22 GDPR);
- a substitute for a qualified human marker or for the exam board's official marking;
- a safeguarding triage tool (the system does **not** currently contain an operational safeguarding-disclosure detector — see §4 and doc 02);
- use outside GCSE/IGCSE English Language/Literature or outside the supported boards.

---

## 3. Capabilities and LIMITATIONS (Art 13(3)(b)(ii)–(iii))

### 3.1 Capabilities

- Marks against embedded AO band descriptors for the supported boards. Mark schemes present in code: AQA Lang P1/P2, AQA Lit P1, Cambridge 0500/0990, Edexcel Lang/Lit, Eduqas Lang/Lit, OCR Lang/Lit (`src/lib/marking/mark-schemes/`).
- Clamps every AO mark to the scheme maximum and rounds it (`src/lib/marking/feedback-generator.ts:169` `normaliseAOScores`).
- Prompt-level prompt-injection resistance and an off-topic / invalid-submission guard returning `{"error":"INVALID_SUBMISSION"}` / `{"error":"OFF_TOPIC"}` (`src/lib/marking/prompt-builder.ts:86`).
- Hard cap so feedback cannot smuggle a fully rewritten essay back to the learner (`src/lib/marking/feedback-generator.ts:240` `normaliseImprovements`).

### 3.2 Material limitations the Deployer MUST understand and communicate

| # | Limitation | Evidence in code | Consequence for the Deployer |
|---|---|---|---|
| L1 | **The grade is predicted, not official.** It is an *indicative* number, not an exam-board result. | `src/lib/marking/grade-predictor.ts:1-10` (header expressly states AQA publishes no fixed table) | Never report this grade as a forecast/centre-assessed grade or to any exam board. |
| L2 | **One AQA-derived threshold table is applied to ALL boards.** The 1–9 cut-offs are a 5-year rolling average of **AQA 8700/8702** boundaries only and are applied even when the learner selected Edexcel, OCR, Eduqas or Cambridge. A `boundarySource` provenance tag now records whether the figure was a same-board AQA estimate or a `aqa-5yr-average-proxy` cross-board proxy — but the **numeric thresholds are still identical for every board** (no per-board boundaries yet). | `src/lib/marking/grade-predictor.ts:99-109` `AQA_ENGLISH_THRESHOLDS`; applied unconditionally in `pickGrade` `:183`; provenance tag (mitigation, not a fix) `getBoundarySource` `:58-65`, header `:4-19` | Predicted grades for non-AQA boards carry **additional inaccuracy** (provenance tag makes this explicit/traceable but does not correct the number). Tell non-AQA cohorts explicitly. **GAP — owner: Provider eng; target date: [TBD] (see doc 06).** |
| L3 | **Grade boundaries move year-on-year**; the table is a historical average, not the live boundary for any series. | `grade-predictor.ts:5-7` | Treat the grade as a rough band indicator only. |
| L4 | **No human reviews B2C marks before the learner sees them.** Output is generated and shown directly. | `src/app/marking/results/[id]/page.tsx:204` renders results with no human-review gate; `/legal/ai-governance` admits the self-serve human-review button "does not yet exist" (`src/lib/i18n/dictionary-legal-long.ts:629`) | The **Deployer must supply the human oversight** — see §5. |
| L5 | **LLM marking is non-deterministic and can be wrong, inconsistent or biased**, including against EAL learners despite age-appropriate prompting. The DPIA-asserted automated bias-evaluation and tone-classifier controls are **not implemented in code** (see doc 15). | No bias-eval / tone-classifier modules exist in `src/`; prompt-level instruction only at `prompt-builder.ts:71-91` | Do not rely on the mark for any decision about an individual learner; apply human oversight, especially for EAL/SEND pupils. |
| L6 | **No safeguarding-disclosure detection.** Essays may contain disclosures (self-harm, abuse, etc.); the system does **not** detect, pause, or route these to a human queue. The v1 DPIA claimed this control; it does not exist. | No disclosure-detector module in `src/`; see doc 15 changelog | The Deployer's own safeguarding policy and DSL remain fully responsible for disclosures in submitted essays. |
| L7 | **Essay text is sent to Anthropic (US).** Only essay text + question + year-group/board metadata is sent; no name/email/DOB/school (`src/app/marking/ai-explainer/page.tsx:100-119`). The "zero-data-retention / no-training" terms asserted in the v1 DPIA/RoPA are a **contractual item to be confirmed in writing** — see `human-action-checklist.md`. | Anthropic SDK call `src/app/api/essay/feedback/route.ts:62-90` | Deployer must reflect the US transfer and the upstream processor in its own privacy notice to pupils/parents. |
| L8 | **Provider/sub-processor disclosure on the public site is currently inconsistent** (Anthropic-only vs "OpenAI and Anthropic"). The reconciled register is `src/config/subprocessors.ts` (not yet wired to the legal pages). | `src/config/subprocessors.ts:5-42`; `dictionary-legal-long.ts:538` vs `:867-873` | Rely on doc 10 §4 (single-source table), not the live pages, until reconciled. |

---

## 4. Accuracy, robustness and the conditions for them (Art 13(3)(b)(ii), Art 13(3)(e))

- **No validated accuracy metric is currently published or measured.** The v1 DPIA asserted a "weekly eval suite of 200 gold-standard essays … <80% threshold triggers feature pause" — **this control does not exist in code** (no eval-suite/feature-pause module in `src/`; see doc 15). `/legal/ai-governance` itself states accuracy/failure-mode statistics are not published (`dictionary-legal-long.ts:336`).
- **Declared accuracy level (interim, honest):** *Not quantified.* Until the evaluation harness in doc 06 is built and run, the system's mark-band agreement vs. examiner marks is **unknown** and must be treated as **indicative only**. This is itself a declared limitation under Art 13(3)(b)(ii). **GAP — owner: Provider; deliverable: doc 06 accuracy methodology + first measured baseline; target date: before 2 Aug 2026.**
- **Conditions under which accuracy is least unreliable:** AQA English Language/Literature questions that match an embedded scheme in `src/lib/marking/mark-schemes/`; essays in the 50–30,000 character window (`prompt-builder.ts:161-162`, `essay/feedback/route.ts:122-134`); a single, genuine, on-topic response.
- **Conditions that degrade accuracy:** non-AQA boards (see L2); very short or very long submissions; mixed-language or heavily EAL-transfer text; questions with no embedded scheme; adversarial or instruction-laden essay text (mitigated but not eliminated by `prompt-builder.ts:90`).
- **Robustness:** model timeouts and upstream 429s are handled and surfaced as a service-unavailable message (`essay/feedback/route.ts:243-262`); invalid model JSON is recovered or rejected (`feedback-generator.ts:144-167`).

---

## 5. Human-oversight measures the Deployer MUST apply (Art 13(3)(d), Art 14, Art 26(2))

Because the Provider does **not** place a human in the loop for B2C marks (L4), **the Deployer is the human oversight layer** for its pupils. The Deployer **must**:

1. **Appoint named, competent staff** (e.g. the class English teacher) to oversee use, with the authority and time to review AI output before it informs any decision about a pupil (Art 26(2)).
2. **Treat every AI mark/grade as provisional.** Use the **teacher override** before any mark is recorded, reported or acted upon. The override exists and persists `teacher_grade`, `teacher_comment`, `teacher_reviewed_by`, `teacher_reviewed_at` (`prisma/schema.prisma:726-729`; endpoint `src/app/api/school/marking/override/route.ts`, status set to `teacher_reviewed` at `:206`).
3. **Never use the predicted grade as a centre/forecast grade** or submit it to an exam board, UCAS or for access arrangements.
4. **Apply extra scrutiny for non-AQA cohorts** (L2) and for EAL/SEND pupils (L5).
5. **Keep safeguarding human and unchanged** (L6): the AI does not detect disclosures; the Deployer's DSL and safeguarding policy apply to all essay content.
6. **Be able to disable the feature** for a class/pupil and fall back to human marking (organisational measure; the product supports teacher-marked workflow independently of AI).
7. **Watch for automation bias and over-reliance** in both staff and pupils; the Provider's in-product framing is limited and must not be relied on alone.
8. **Log and report malfunctions** to the Provider (`cj@upskillenergy.com`) without undue delay, and cooperate with serious-incident handling (doc 12).

---

## 6. Input data requirements (Art 13(3)(b)(vi))

- **Required input:** the learner's own, genuine, single essay response (50–30,000 characters), the exam question text, the selected board, and the question/scheme id. Optional: studied text (e.g. "Macbeth") and year group.
- **Must NOT be input:** other people's work; personal data beyond what the workflow requires (no need to type names, contact details, or special-category data into the essay box); content the Deployer is not permitted to send to a US processor under its own data-protection assessment.
- **Board selection matters:** selecting the correct board controls which AO scheme is used; the **grade conversion is still AQA-derived regardless** (L2).
- **Quality dependency:** garbage-in produces garbage-out; off-topic/instruction text triggers the invalid-submission guard rather than a mark.

---

## 7. What the Deployer must tell pupils and parents (Art 13 + Art 26(7) + GDPR Arts 13–14)

The Deployer must, before use, inform pupils and (for minors) parents/guardians that:

1. **An AI system marks the essay and predicts a grade** — it is *automated*, *formative practice only*, and **not** an official result.
2. **The predicted grade is not an exam-board grade** and, for non-AQA boards, is derived from an AQA boundary table (L2).
3. **A human teacher reviews and can override** the AI before it informs any decision (the Deployer's own oversight per §5), and explain how a pupil/parent asks for human review.
4. **Essay text is processed by Anthropic (Claude) in the US**; no name/email/DOB/school is sent (per `ai-explainer` §3). The Deployer must reflect this in its GDPR Art 13/14 notice and its own DPIA, naming the Provider as processor and Anthropic as sub-processor.
5. **They can opt out of AI features** (B2C route: parent/guardian settings — `src/app/marking/ai-explainer/page.tsx:145-182`); for school accounts the Deployer controls enablement.
6. **The system is registered in the EU high-risk AI database** (doc 14) and the public-facing transparency notices in doc 10 apply.

---

## 8. Maintenance, monitoring and the Provider's obligations to the Deployer

- The Provider operates a **post-market monitoring system** (doc 11) and a **serious-incident procedure** (doc 12); the Deployer must report malfunctions and incidents to `cj@upskillenergy.com`.
- The Provider will notify Deployers of: model-provider/version changes with capability impact, accuracy-baseline publication, material limitation changes, and any corrective action under Art 20.
- These instructions are versioned; the Deployer must use the version matching the deployed release (§1).

---

## 9. Open gaps explicitly declared in these instructions (no invented controls)

| Gap | Owner | Target |
|---|---|---|
| Single AQA threshold table applied to all boards (L2) | Provider eng | Before 2 Aug 2026 (doc 06) |
| No measured/published accuracy baseline (§4) | Provider | Before 2 Aug 2026 (doc 06) |
| No B2C self-serve human-review route (L4) | Provider eng | See doc 10 / doc 16 roadmap |
| No safeguarding-disclosure detector (L6) | Provider + Deployer policy interim | See doc 15 remediation |
| Anthropic ZDR/no-training not yet confirmed in writing (L7) | Provider/Counsel | See `human-action-checklist.md` |
| Sub-processor/provider disclosure inconsistent (L8) | Provider/DPO | See doc 10 §4 |

*End of doc 08.*
