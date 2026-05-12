# DPIA — AI Content Pipeline (Children's Code + UK GDPR + Qatar PDPPL)

Version: **1.0 (FINAL)** · supersedes v0.9 (DRAFT)
Date: 2026-05-12
Owner: Calum Jardine (Founder), cj@upskillenergy.com
DPO: _[DPO_NAME]_ — see Section 6 sign-off

## 1. Scope

This DPIA covers AI-driven processing of personal data within The English Hub SaaS platform:

  1.1 Essay marking (Claude Sonnet, per-student submission)
  1.2 Model-answer generation (Claude Sonnet, set-text driven)
  1.3 Vocabulary explainer (Claude Haiku, on-demand)
  1.4 Auto-generated blog / SEO content (Claude Sonnet, build-time)
  1.5 KS3 progress reporting (aggregations + LLM narrative)
  1.6 Pre-publication content classifier (Qatar jurisdiction — see paired classifier design)

Data subjects: students aged 11–18 (KS3, KS4/GCSE/IGCSE, KS5/A-level); parent/guardian accounts; teacher accounts; school admin accounts.

Lawful bases: contract (parent/school) + legitimate interests (assessment quality, with LIA on file) + consent for optional features (parental opt-in for AI marking of essays containing free-text disclosures).

## 2. Necessity and proportionality

AI is necessary because: (a) the unit economics of human-marked formative practice at GCSE scale are prohibitive for the parent-pays B2C tier; (b) latency expectation (sub-60s feedback) is unmeetable by humans; (c) the vocabulary and model-answer features have no human-only equivalent at the price point.

Proportionality controls:
- **Data minimisation**: only essay text + student year-group + set-text metadata sent to the model. No name, no school, no contact data.
- **No advertising profile**: we do not build advertising profiles of children and do not share with ad networks.
- **No solely-automated decisions with legal/significant effect**: AI marking is formative, not summative; teachers/parents see it as practice feedback, not certified grading.
- **Human-in-the-loop**: any flagged content (safeguarding disclosures, Qatar classifier FLAG/BLOCK) routes to a human.
- **Zero-retention** configuration with Anthropic API; no training on submitted data (contractual + ZDR endpoints where available).

## 3. Risks identified (top 8, child-specific)

  R1  Poor AI feedback misleads a student's revision strategy.
  R2  Confidence harm from harsh / blunt AI marking tone.
  R3  Essays contain personal disclosures (mental health, family, safeguarding-relevant) processed by third-party LLM provider.
  R4  Bias against L2 English speakers (notably Gulf Arabic L1 students) — penalising idiomatic / structural transfer errors disproportionately.
  R5  Guardians undermined ("the AI said I did get it right") — parental authority eroded by AI as alternative authority.
  R6  Children's essays appearing in third-party model training data.
  R7  Bot-impersonation — child believes the AI marker is a human teacher, develops parasocial reliance.
  R8  Output text is algorithmically detectable as AI-assisted → legitimate student work later flagged as plagiarised when submitted (mock or coursework).

## 4. Mitigations

**R1** — Marking is formative-framed. Every output includes a banner: *"Practice feedback — your teacher's marking is the source of truth."* Marking schemes anchored to published AO descriptors (AQA 8700, Edexcel iGCSE etc.) loaded as reference context to reduce drift. Weekly eval suite of 200 gold-standard essays monitors mark-band agreement vs examiner marks; <80% threshold triggers feature pause.

**R2** — Tone profile enforced via system prompt: *"warm, specific, improvement-oriented; never use 'wrong', prefer 'try this instead'"*. Marking outputs are tone-classified post-hoc; tone-failed responses rewritten before render. Parent account holds a "feedback intensity" slider (gentle / standard / direct).

**R3** — Free-text disclosure detector runs pre-submission: known safeguarding keywords + Haiku classifier (suicide, self-harm, abuse, eating disorders, family violence). On hit: AI marking paused, content routed to a human safeguarding queue, parent/designated safeguarding lead notified per the school's policy (B2B) or per our DSL contact (B2C). Anthropic zero-retention endpoint + no-training contractual term ensure the disclosure does not enter training pipelines.

**R4** — L2 marking guidance built into the system prompt: *"many students have English as an additional language; distinguish transfer errors from comprehension errors; mark on AO criteria, not on native-speaker idiom"*. Quarterly bias eval: matched-pair essays (L1 English vs L1 Arabic, same content) scored; if gap >5% on the same AO band the prompt and few-shot examples are retuned. Gulf-Arabic-specific transfer-error library maintained.

**R5** — Parent dashboard shows the AI's mark alongside a "what a teacher would likely add" note and explicit framing that the AI is a tutor not an authority. Parent override visible: parents can re-mark and the AI mark is hidden in favour of the parent's. Onboarding video for parents explains the limit of AI marking. Teacher accounts in the B2B tier can set their marking to override AI by default.

**R6** — Anthropic enterprise contract specifies no-training on inputs/outputs; zero-data-retention endpoint used for all child-data paths. Vendor list reviewed annually. Self-hosted Ollama fallback evaluated for the highest-sensitivity flows (KS3 disclosures); decision logged.

**R7** — Persistent in-product label "AI tutor" on every assistant message; avatar visually distinct from human teacher avatars. Cooling-off banner after 30 minutes of continuous use: *"You've been working with the AI tutor for a while — take a break, or message your teacher."* No first-person human claims; system prompt forbids "I am a teacher" framings.

**R8** — AI marking outputs deliberately do NOT rewrite the student's essay. Outputs are commentary + targeted exemplar fragments only, never a full rewritten essay attributable to the student. Model-answer feature gated behind an "exam-conditions" mode that the student cannot trigger within an active assignment window set by the teacher. Watermarking of model-answer output (invisible token-level signature) lets us prove provenance if a school's plagiarism workflow flags a submission.

## 5. Residual risk rating

| Risk | Pre-mitigation | Post-mitigation | Justification |
|------|----------------|-----------------|---------------|
| R1   | High           | Medium          | Eval suite catches systemic drift, not edge cases. |
| R2   | Medium         | Low             | Tone enforcement + post-hoc rewrite are effective. |
| R3   | High           | Medium          | ZDR + disclosure detector strong but not infallible. |
| R4   | Medium         | Medium          | Bias eval reduces but does not eliminate; L2 idiom is hard. |
| R5   | Medium         | Low             | Parent override + explicit framing addresses most cases. |
| R6   | High           | Low             | Contractual + ZDR endpoints are the standard remedy. |
| R7   | Medium         | Low             | Persistent labelling + cooling-off banners effective. |
| R8   | Medium         | Medium          | Watermarking helps but external detectors evolve. |

**Overall residual risk: Medium** — proceed with quarterly review.

## 6. Sign-off

DPIA approved by:

  DPO: ___________________________  Date: ____________  v1.0
  Founder: Calum Jardine            Date: 2026-05-12   v1.0

## 7. Review cadence

  - Quarterly review on the first business day of each calendar quarter
  - Ad-hoc review on any material change:
      • Model provider change (e.g. Anthropic → alternative)
      • Model version upgrade with capability change
      • New AI feature added to the platform
      • New jurisdiction onboarded (currently UK + Qatar)
      • Any safeguarding or content incident
  - Annual external review by the DPO with documented opinion
