# 07 — Human Oversight Design & Operating Procedure (Article 14)

**Regulation:** Regulation (EU) 2024/1689 — **Article 14** (human oversight); supports Art. 26(2) (deployer oversight) and Art. 86 (right to explanation)
**System:** The English Hub AI Marking & Assessment System (high-risk, Annex III(3)(b))
**Provider:** The English Hub (Calum Jardine, Provider accountable person, cj@upskillenergy.com)
**Document status:** v1.1 — ISSUED 2026-05-17 — honest baseline; target design explicitly labelled NOT-YET-IMPLEMENTED where it is a GAP. v1.1 reconciles with remediation landed during drafting: an Art. 12/19 inference logger (`src/lib/ai-audit-log.ts`) now exists, providing the auditable decision record that GAP-HO-3 required — re-scoped, verified by `path:line`.
**Document owner:** Product + Founder
**Pack index:** `00-README-index.md`

> **Article 14 in one line for this system.** Because the system evaluates and steers the learning
> of natural persons (many of them children), it must be designed so a human can understand it,
> not over-rely on it, interpret its output, decide not to use it, and intervene/stop it
> (Art. 14(4)(a)–(e)). **Current state: the human-oversight design is materially incomplete.**
> The B2C path has *no in-product human review or contest control*; the B2B teacher-override is a
> schema affordance that is not wired to any AI route. This document states the current state
> with `path:line`, then specifies the target oversight design and the measures that enable
> deployers (schools) to exercise oversight.

---

## 1. CURRENT STATE (as-built, evidenced)

### 1.1 B2C learners — oversight effectively absent

| Art. 14 requirement | As-built | Evidence |
|---|---|---|
| Output understandable / interpretable (14(4)(c)) | Practice-only framing and "not a real marker / not an official result" explanation; structured AO breakdown + justification + summary returned | `src/app/marking/ai-explainer/page.tsx:76-77,124-129`; `src/lib/marking/feedback-generator.ts:122-137` |
| Stay aware of automation bias / not over-rely (14(4)(b)) | Disclaimer text exists but is **only emitted by `/api/essay/feedback`** (`src/lib/ai-disclaimer.ts:4-7`, used at `src/app/api/essay/feedback/route.ts:268`); the primary `/api/mark` path returns no disclaimer in payload; the headline number is **mislabelled "confidence"** (`src/app/marking/submit/page.tsx:254`) which *amplifies* over-reliance | GAP-IV-1 / GAP-AC-1 |
| Ability to obtain human review of the decision (14(4) + Art. 86) | **No in-product control.** Policy text itself admits: *"That button does not yet exist on the student-facing feedback component … an equivalent self-serve route for direct-to-consumer students does not [exist]"* | `src/lib/i18n/dictionary-legal-long.ts:629` |
| Channel to a human | Email only — `info@Upskillenergy.com`, "we will arrange this where possible" | `src/app/marking/ai-explainer/page.tsx:135-142` |
| Decide not to use / opt out (14(4)(d)) | AI opt-out enforced server-side from DB; cannot be bypassed via localStorage | `src/lib/ai-preferences.ts:40-51`; gate e.g. `src/app/api/mark/route.ts:84-89` |
| Intervene / stop (14(4)(e)) | Opt-out disables AI; no per-output "reject / send to human" action; no override of a rendered grade | `src/lib/ai-preferences.ts:20-29` |
| Record of the decision for later review | **NOW EXISTS (server-side).** Every inference is logged to `AuditLog` (`ai_decision`) with model, scheme/board, SHA-256 input hash + length, output grade summary, error class and a consent snapshot, across all 6 routes (`src/lib/ai-audit-log.ts:161-202,217-240`). **Residual:** the user-facing copy is still only in browser `localStorage` (`src/app/marking/submit/page.tsx:285-293`); `HumanReviewRequest` (`prisma/schema.prisma:294-320`) is still unwired and there is **no link from a learner contest to its log entry** — so the record exists but cannot yet be invoked by the data subject | `src/lib/ai-audit-log.ts:217-240`; `src/app/marking/submit/page.tsx:285-293`; `prisma/schema.prisma:294-320` |

**Finding:** for B2C, Article 14 is **NOT MET** beyond opt-out and practice-only framing. The right to human review is asserted in policy but **not provided in product** (the codebase confirms its own gap at `src/lib/i18n/dictionary-legal-long.ts:629`).

### 1.2 B2B (schools/teachers) — partial scaffolding, not wired

| Art. 14 requirement | As-built | Evidence |
|---|---|---|
| Teacher (deployer human) can override the AI grade | `marking_submissions` has `teacherGrade`, `teacherComment`, `teacherReviewedById`, `teacherReviewedAt` columns | `prisma/schema.prisma:726-729` |
| The AI inference is captured for teacher review | `marking_submissions` has `aiGrade`, `aiConfidence`, `aiFeedback`, `aiBandMarks`, `status` | `prisma/schema.prisma:720-724` |
| The pipeline actually writes inferences for teachers to review | **No AI route writes `MarkingSubmission`** — `/api/mark`, `/api/mark/stream`, `/api/essay-feedback`, `/api/cefr-assess` return JSON to the client and persist nothing server-side (B2C `localStorage` only) | `src/app/api/mark/route.ts:227-230`; `src/app/marking/submit/page.tsx:285-293` |

**Finding:** the B2B teacher-override is a **schema affordance only**; with no write path, a teacher cannot in practice review/override an AI grade through the wired product today. Article 14 for B2B is **GAP (scaffolded, not operative)**.

### 1.3 Oversight-relevant controls that DO exist (give credit where due)

- Deterministic post-processing constrains the model: AO marks clamped to scheme maxima and the grade computed in code, not by the model (`src/lib/marking/feedback-generator.ts:187-191`; `src/lib/marking/grade-predictor.ts:61-88`) — a human reviewing the output sees a bounded, rule-derived grade.
- Model self-guardrails return `INVALID_SUBMISSION`/`OFF_TOPIC` which the routes convert to safe refusals (`src/app/api/mark/route.ts:200-217`).
- Safeguarding signpost for self-harm/suicide content routes the child to UK helplines instead of marking (`src/lib/content-safety.ts:95-109`) — a human-protective interrupt (narrow, keyword-based).
- Server-enforced consent/minor/opt-out gates ensure a human (parent) decision precedes AI use for minors (`src/lib/consent-check.ts:82-97`).

---

## 2. TARGET HUMAN-OVERSIGHT DESIGN (to be implemented)

Design principles: (i) **pre-reliance framing** — the learner must engage with the AI output as a *practice signal*, not a verdict, *before* it is presented as a grade; (ii) **always a human route** — every AI output carries an in-product path to a human; (iii) **deployer empowerment** — schools can configure and exercise oversight for their pupils; (iv) **anti-over-reliance for minors** — friction and honesty proportionate to the child audience (Art. 14(4)(b), Children's Code).

### 2.1 Pre-reliance framing (Art. 14(4)(b),(c))

- Replace the "confidence" figure with (a) the honest score label and (b) an evidence-based reliability line derived from doc 06 §A1 once measured; until measured, an explicit "accuracy not yet independently validated — practice only" notice. Code touch-points: `src/app/marking/submit/page.tsx:254` and the results renderer; remove `aiConfidence` semantics or rename in `prisma/schema.prisma:721`. (GAP-AC-1)
- Emit the AI disclaimer (`src/lib/ai-disclaimer.ts:4-7`) in the payload/UI of **all six** AI routes, not just `/api/essay/feedback` (GAP-IV-1).
- For non-validated boards, **suppress the numeric predicted grade** (doc 06 §C2 option 2) and show AO feedback + "indicative grade not available for <board> yet" — this is itself an over-reliance control, not only an accuracy fix.

### 2.2 In-product "Request human review" / "Contest this result" (Art. 14(4) + Art. 86)

- A control on every AI result (B2C and B2B) that creates a persisted review request. The data model already exists and should be used: `HumanReviewRequest` (`reason`, `reasonDetail`, `selfAssessment`, `status`, `referenceNumber`, `reviewerResponse`, `reviewedById`, `reviewedAt`; `prisma/schema.prisma:294-320`), with `Essay` + `AIFeedback` as the persisted artefacts (`prisma/schema.prisma:252-292`). Wiring this requires the inference to be persisted (see §2.5) so there is a concrete decision to contest — this is the dependency that makes GAP-IV-4 (logging) a blocker for Article 14, not only Article 12.
- SLA, triage and a named human reviewer role; the reviewer's decision recorded in `reviewerResponse`/`reviewedById` and surfaced to the learner with a reference number (`prisma/schema.prisma:303,305`).
- Replace the email-only fallback (`src/app/marking/ai-explainer/page.tsx:135-142`) with this in-product route while keeping email as a secondary channel.

### 2.3 Teacher override for B2B (Art. 14(4)(e), Art. 26(2))

- Wire an authenticated teacher action that writes `teacherGrade`/`teacherComment`/`teacherReviewedById`/`teacherReviewedAt` and flips `status` on `marking_submissions` (`prisma/schema.prisma:724-729`); the **teacher grade must be the authoritative grade shown to the pupil** once set, with the AI grade visibly demoted to "AI suggestion". Pre-requisite: a write path that creates the `marking_submissions` row at marking time for B2B (currently absent — §1.2).
- Class/teacher dashboards to review pending AI gradings before pupils see them (configurable "teacher-gated release" mode for schools).

### 2.4 Opt-out and throttling over-reliance by minors (Art. 14(4)(b),(d); Children's Code)

- Keep and surface the server-enforced opt-out (`src/lib/ai-preferences.ts:40-51`); expose it to the learner directly, not only via parent settings (`src/app/marking/ai-explainer/page.tsx:153-173`).
- Anti-over-reliance throttling for minors beyond the current 10/day cap (`src/app/api/mark/route.ts:92-98`): e.g. encourage a self-assessment step before revealing the AI grade (the `selfAssessment` field already exists, `prisma/schema.prisma:301`), periodic "this is practice, not your real grade" interstitials for repeat use, and surfacing human-review prominently after repeated low/again submissions.
- Honest uncertainty: never present a single grade as definitive; show the band and the practice caveat with equal prominence to the number.

### 2.5 Logging to enable oversight & explanation (Art. 14, 12, 86)

The minimum per-inference record **now exists**: `logAiDecision` persists timestamp/latency, route, model version, mark-scheme/board, a SHA-256 input hash + length (raw child text only behind a hard opt-in), a compact output summary (predicted grade/band), error class and a consent snapshot, for all 6 routes (`src/lib/ai-audit-log.ts:161-202,217-240`). This satisfies the *auditable-subject* prerequisite for §2.2/§2.3 and for Art. 86 explanations. **Remaining work to make it usable for oversight:** (a) capture the *live* consent values rather than the hard-coded `{aiOptOut:false, aiProcessingConsentOk:true}` snapshot (e.g. `src/app/api/mark/route.ts:163-166`); (b) persist (or reference) enough of the AO/justification output to reconstruct an individual explanation (current `outputSummary` is grade/band only — `src/app/api/mark/route.ts:270-274`); (c) create the **link from a `HumanReviewRequest` to its `ai_decision` log entry** so a contest resolves against the actual logged decision; (d) codify retention (doc 11). Re-scoped **GAP-HO-3** (no longer "nothing logged"; now "logged, not yet wired to the review/explanation flow"). Owner: Engineering. Target: 2026-07-15.

### 2.6 Right to explanation (Art. 86)

Provide, on request and within the human-review flow, a plain-language explanation of an individual grading: the scheme/board used, per-AO marks and the model's justification text (already produced — `src/lib/marking/feedback-generator.ts:199-208`), the deterministic %→grade mapping applied (`src/lib/marking/grade-predictor.ts:40-88`), the practice-only status, and the human-review outcome. This requires §2.5 logging to reconstruct a past decision.

---

## 3. MEASURES ENABLING DEPLOYERS (SCHOOLS) TO EXERCISE OVERSIGHT — Art. 14(3)(b), Art. 26(2)

The provider must build oversight *into* the system so a school can operate it safely. Measures (to be delivered with the Instructions for Use, doc 08, and the deployer brief / FRIA, doc 09):

1. **Teacher-gated release mode** (§2.3): school-configurable so no AI grade reaches a pupil until a teacher has reviewed it; the override columns become the system of record (`prisma/schema.prisma:726-729`).
2. **Class/teacher review dashboard** listing AI gradings with `aiGrade`/`aiFeedback`/`aiBandMarks` (`prisma/schema.prisma:720-723`) and one-click override + comment.
3. **Configurable disablement** at school level (a deployer-level analogue of the user `aiOptOut`) so a school can switch AI marking off for a class/cohort.
4. **Reliability/limitations briefing for teachers** in the IFU: the not-yet-validated accuracy state (doc 06 §A5), the **cross-board grade-table defect** (doc 06 §C — teachers of non-AQA boards must be told the predicted grade is not board-calibrated until fixed), the "confidence ≠ confidence" caveat, and the foreseeable bias vectors for EAL/SEND/dialect learners (doc 05 §5).
5. **Escalation/SLA to the provider** for contested results and a serious-incident channel (doc 12), so a school's oversight failures can be escalated.
6. **Art. 27 FRIA support** (doc 09): a template and the inputs (intended purpose, affected groups incl. minors/EAL/SEND, known limitations, oversight measures) that a public-body/education deployer needs to complete its Fundamental Rights Impact Assessment.
7. **AI-literacy material (Art. 4)** for teacher-operators: how to interpret AO scores/justifications, when to override, automation-bias warnings — referenced to the QMS (doc 03 §AI literacy).

---

## 4. GAP register & remediation (Article 14)

| ID | Requirement | Gap | Remediation | Owner | Target |
|---|---|---|---|---|---|
| GAP-HO-1 | 14(4) + Art. 86 (B2C) | No in-product human-review/contest control; policy admits it (`dictionary-legal-long.ts:629`) | Build §2.2 using `HumanReviewRequest`/`Essay`/`AIFeedback` (`prisma/schema.prisma:252-320`) | Product + Eng | 2026-07-31 |
| GAP-HO-2 | 14(4)(e), 26(2) (B2B) | Teacher-override columns exist but unwired (no `MarkingSubmission` write) | §2.3 + B2B write path; teacher grade authoritative | Eng + Product | 2026-07-31 |
| GAP-HO-3 | 14, 12, 86 | **Re-scoped — substantially mitigated.** Inference record now exists (`ai-audit-log.ts:217-240`); residual = live consent snapshot, AO/justification capture for explanation, contest↔log link, retention | §2.5 residuals | Engineering | 2026-07-15 |
| GAP-HO-4 | 14(4)(b) | Over-reliance amplified by "confidence" mislabel + disclaimer on only 1/6 routes | §2.1 (GAP-AC-1, GAP-IV-1) | Product + Eng | 2026-06-30 |
| GAP-HO-5 | 14(4)(b), Children's Code | No minor-specific over-reliance throttling beyond a daily cap | §2.4 self-assessment-first + interstitials | Product | 2026-07-31 |
| GAP-HO-6 | 14(3)(b), 26(2), 27 | No deployer oversight tooling, IFU, or FRIA support for schools | §3 + docs 08/09 | Founder + Product | per doc 16 |
| GAP-HO-7 | 14(4)(b)/(c) | Non-AQA numeric grades shown despite invalid boundary table (over-reliance on a wrong number) | Board-gate numeric grade (doc 06 §C2 opt.2) as an oversight control | Eng + Founder | interim 2026-06-30 |

> **Conformity statement (v1.1).** Article 14 is **NOT MET (B2C)** and **GAP — scaffolded but
> not operative (B2B)** as of 2026-05-17. The decision-record prerequisite (GAP-HO-3) is now
> substantially met by the inference logger, but the operative oversight controls — in-product
> human review/contest (GAP-HO-1) and a wired teacher override (GAP-HO-2) — do **not** exist;
> the codebase still self-attests the B2C gap at `src/lib/i18n/dictionary-legal-long.ts:629`.
> The EU Declaration of Conformity (doc 13) must not be signed while GAP-HO-1 and GAP-HO-2 are
> open without an explicit, documented residual-risk acceptance by the Provider accountable
> person and, at minimum, the interim over-reliance controls (§2.1 disclaimer-everywhere,
> "confidence" relabel, non-AQA grade gating) shipped.

---

## Cross-references

- Technical file (Annex IV(2)(d) oversight, logging GAP-IV-4): **doc 04**
- Data governance (bias vectors teachers must be briefed on; numeric-grade suppression): **doc 05**
- Accuracy/robustness (no validated accuracy; cross-board defect; "confidence" relabel): **doc 06**
- Instructions for Use / deployer brief + Art. 27 FRIA / AI literacy: **docs 08, 09, 03**
- Transparency & Art. 50 / Art. 86 explanation: **doc 10**
- Post-market monitoring / serious incidents: **docs 11, 12**
- EU Declaration of Conformity: **doc 13**
- DPIA reconciliation (human-review over-claim): **doc 15**; signed DPIA `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md`
- Public honest-assessment source admitting the gap: `src/lib/i18n/dictionary-legal-long.ts:629`
- Roadmap to 2 Aug 2026: **doc 16**
