# 01 — System Classification & Article 6(3) Derogation Assessment

**Regulation:** Regulation (EU) 2024/1689 (EU AI Act)
**System:** The English Hub AI Marking & Assessment System
**Provider:** The English Hub Ltd (United Kingdom)
**Document status:** ISSUED v1.0 — 2026-05-17
**Owner:** Founder (Provider accountable person) + external EU AI Act counsel
**Decision recorded by:** Calum Jardine, cj@upskillenergy.com

> This document is the formal, regulator-facing classification of the system. It states the
> Annex III basis, the documented Article 6(3) derogation assessment, the value-chain role
> mapping, the territorial-scope analysis, and the Article 5 prohibited-practices screen.
> It cites code evidence by `path:line`. Items marked **[COUNSEL DECISION]** require sign-off
> by qualified EU counsel before they can be treated as concluded; the analysis here is the
> position The English Hub puts forward for that sign-off.

---

## 1. Description of the AI system (Annex IV(1) summary)

The English Hub operates a single LLM-backed system, exposed through six API routes, all
calling Anthropic `claude-sonnet-4-20250514`:

| Route | Function | Evidence |
|---|---|---|
| `POST /api/mark` | Marks an essay against an exam-board mark scheme; returns per-AO scores, **predicted GCSE grade (1–9/U)**, grade band, strengths, improvements, next-steps-to-next-grade, summary | `src/app/api/mark/route.ts:51-235`; `src/lib/marking/prompt-builder.ts:61-131`; `src/lib/marking/feedback-generator.ts:120-140` |
| `POST /api/mark/stream` | Streaming variant of the above | route directory `src/app/api/mark/stream/` |
| `POST /api/essay-feedback` | Estimated grade band + AO scores + annotated paragraph feedback | `src/app/api/essay-feedback/route.ts:53-115` |
| `POST /api/essay/feedback` | Free-text AI feedback with content filter & disclaimer | `src/app/api/essay/feedback/route.ts:51-96` |
| `POST /api/cefr-assess` | CEFR band assessment (A2–C1) of EAL learner writing/speaking | `src/app/api/cefr-assess/route.ts:49-209` |
| `POST /api/toolkit/generate-notes` | AI-generated revision notes for a set text & target grade | `src/app/api/toolkit/generate-notes/route.ts:137-298` |

The grade predictor converts model-awarded AO marks into a 1–9 grade using a **single static
percentage table averaged from five years of AQA 8700/8702 boundaries, applied to all exam
boards** (`src/lib/marking/grade-predictor.ts:4-9, 40-50`). The percentage shown to the
learner as "confidence" is `totalMarks / maxMarks` (`src/app/marking/submit/page.tsx:254`) —
it is **not** a model-confidence figure. These two facts are material to the risk analysis in
doc 02 and to accuracy claims in doc 06.

**Intended purpose (Art. 3(12)):** to give GCSE/IGCSE English learners (and their teachers)
formative marking, an indicative predicted grade, and improvement feedback, plus CEFR
assessment for EAL learners. The system is marketed both B2C (parent-pays direct learners) and
B2B (schools/colleges as deployers).

**Affected natural persons:** learners aged 13–18, a large proportion of whom are minors
(`src/app/api/auth/validate-age/route.ts:38-49`; `prisma/schema.prisma:161,165`), including
EAL learners; and teachers when the system informs their marking workload (B2B).

---

## 2. High-risk classification — Annex III(3)(b)

### 2.1 The applicable head of Annex III

Annex III point 3 covers AI in **education and vocational training**. Point 3(b) covers AI
systems intended to be used:

> *"to evaluate learning outcomes, including when those outcomes are used to steer the
> learning process of natural persons in education and vocational training institutions or
> programmes at all levels."*

Point 3(a) (determining access/admission) and 3(d) (detecting prohibited behaviour during
tests) are **not** engaged. Point 3(c) (assessing the appropriate level of education) is
**not the primary** function but is touched by grade prediction; classification does not turn
on it.

### 2.2 Application to The English Hub (both channels)

The system's core output is an **evaluation of a learner's learning outcome**: a mark against
each Assessment Objective, a predicted grade, and a grade band
(`src/lib/marking/feedback-generator.ts:122-137`). That evaluation is then explicitly used to
**steer the learning process** — the output includes `nextStepsToNextGrade` and prescriptive
`improvements` telling the learner what to do next to raise their grade
(`src/lib/marking/prompt-builder.ts:99-101`; `feedback-generator.ts:132-134`). Revision-note
generation is additionally tuned to the learner's `targetGrade` and `weakAreas`
(`src/app/api/toolkit/generate-notes/route.ts:182, 217-218`). This is squarely "evaluate
learning outcomes … used to steer the learning process".

- **B2B (schools):** the recipient is an "education … institution". Annex III(3)(b) applies on
  its face.
- **B2C (direct parent-pays learners):** the phrase "institutions **or programmes** at all
  levels" is read by The English Hub as covering a structured GCSE/IGCSE revision *programme*
  delivered directly to learners. The system evaluates outcomes against the same statutory
  exam-board AOs and steers the learner's revision. The English Hub therefore classifies the
  B2C channel as high-risk as well, and does **not** rely on a "non-institutional consumer
  product" carve-out. **[COUNSEL DECISION]** — counsel to confirm the "programmes" limb
  reaches the B2C channel; The English Hub's position is that it does and that, even if
  arguable, the prudent and learner-protective classification is high-risk for both channels.

### 2.3 Conclusion

**The system is a high-risk AI system under Annex III(3)(b) for both the B2B and the B2C
channel.** The full obligations for high-risk systems (Arts. 9–15, 16–21, 47–49, 72–73) apply.
Conformity route: **Annex VI internal control** (self-assessment; no third-party conformity
assessment body is mandated for Annex III(3) systems).

---

## 3. Article 6(3) derogation assessment

### 3.1 The test

Article 6(3) provides that an Annex III system is **not** high-risk where it **does not pose a
significant risk of harm to health, safety or fundamental rights, including by not materially
influencing the outcome of decision-making**. This is established only if **one or more** of
the four conditions in Art. 6(3)(a)–(d) is met:

- (a) the system performs a **narrow procedural task**;
- (b) the system **improves the result of a previously completed human activity**;
- (c) the system **detects decision-making patterns** or deviations and is not meant to
  replace/influence the human assessment without proper human review;
- (d) the system performs a **preparatory task** to an assessment relevant to an Annex III use case.

Critically, Art. 6(3) second sub-paragraph: the derogation **never applies if the AI system
performs profiling of natural persons** (within the meaning of GDPR Art. 4(4) /
LED Art. 3(4)).

### 3.2 Condition-by-condition assessment

| Cond. | Argument that it applies | The English Hub's conclusion |
|---|---|---|
| 6(3)(a) narrow procedural task | The system does not perform a narrow, mechanical procedural task. It produces an open-ended qualitative judgement (band placement, justification, prose feedback) against multi-criteria rubrics. | **Does not apply.** |
| 6(3)(b) improves a prior completed human activity | The marking is **not** a refinement of a mark a human already produced. It is the **first and often only** assessment the learner receives for that practice essay; `/api/mark` runs before any human sees the work and persists nothing for a human (`src/app/marking/submit/page.tsx:285-293`). | **Does not apply.** |
| 6(3)(c) detects patterns, not meant to replace/influence human assessment without review | The system **is** meant to influence the learner directly: the grade and next-steps are rendered to the learner with no mandatory human review in the path; the policy-promised human-review route for B2C learners does not exist in the product (`src/lib/i18n/dictionary-legal-long.ts:629`). | **Does not apply.** |
| 6(3)(d) preparatory task to an assessment | The grade prediction and band placement **are** the assessment output, not a preparatory step feeding a separate human assessment. The teacher-override surface (B2B only) is downstream and optional, not a designed-in human assessment that the AI merely prepares. | **Does not apply.** |

### 3.3 Profiling bar (Art. 6(3) second sub-paragraph)

The system evaluates aspects of a natural person relating to that person's **performance** and
predicted educational attainment, and uses prior performance signals (`weakAreas`,
`targetGrade`) to tailor outputs (`src/app/api/toolkit/generate-notes/route.ts:182, 217-218`).
This involves automated processing of personal data to **evaluate certain personal aspects**
of a natural person — in particular performance, with predictive elements. On a cautious
reading consistent with the existing profiling policy
(`business-docs/compliance/childrens-code/02-policies/profiling-policy.md`) and the
Children's-Code gap analysis treatment of essay analysis as profiling
(`business-docs/compliance/childrens-code/01-assessment/gap-analysis.md`, GAP-12A/12B), the
system **performs profiling of natural persons**. By the express terms of Art. 6(3) second
sub-paragraph, **the derogation cannot apply** wherever profiling is present, irrespective of
conditions (a)–(d).

### 3.4 Significant-influence finding

Independently of the profiling bar, the system **materially influences decision-making**:

- It tells minor learners what grade they are achieving and what to do next, shaping their
  revision strategy and self-assessment during the high-stakes GCSE/IGCSE period.
- In the B2B channel it informs teachers' marking workload and can anchor a teacher's
  judgement (anchoring/automation bias) even where a teacher override exists.
- A wrong predicted grade or biased feedback against an EAL/SEND learner has a real prospect
  of harming the learner's educational trajectory and the fundamental right to education and
  to non-discrimination.

### 3.5 Article 6(3) conclusion

> **The Article 6(3) derogation does NOT apply. The system remains a high-risk AI system.**
> Reasons: (i) none of conditions 6(3)(a)–(d) is satisfied; (ii) the system performs
> profiling of natural persons, which independently disqualifies the derogation under the
> second sub-paragraph; (iii) the system materially influences the educational
> decision-making of minors and teachers and poses a non-trivial risk to the fundamental
> rights to education and non-discrimination.

A provider relying on Art. 6(3) must document the assessment **before placing on the market**
and register under Art. 49(2). The English Hub is **not** relying on Art. 6(3); this section
is the documented negative assessment required to evidence that the derogation was considered
and rejected. **[COUNSEL DECISION]** — counsel to countersign §3.5.

---

## 4. Value-chain role mapping (Arts. 3, 16, 22, 25)

| Actor | Role under the Act | Basis | Obligations triggered |
|---|---|---|---|
| **The English Hub Ltd** | **Provider** of the high-risk AI system | Develops the system and places it on the market / puts it into service under its own name (Art. 3(3)) | Arts. 9–21, 47–49, 72–73; this entire pack |
| **Anthropic PBC** | **Provider of a general-purpose AI model** (GPAI) integrated upstream | `claude-sonnet-4-20250514` is a GPAI integrated as the inference engine in all six routes | Anthropic owes Art. 53/55 GPAI obligations; The English Hub relies on Art. 25(1)(c)/Art. 53(1)(b) information flow and must keep Anthropic's model documentation in the Annex IV file (doc 04) |
| **Schools / colleges (B2B)** | **Deployers** | Use the high-risk system under their authority for their pupils (Art. 3(4)) | Art. 26 deployer duties; Art. 27 FRIA (education bodies / public authorities); doc 09 |
| **The English Hub (B2C operation)** | **Provider that also deploys** | Operates the system directly for parent-pays learners | Provider obligations **plus** the substance of Art. 26 deployer duties for the B2C channel |
| **Parents/guardians (B2C)** | Not deployers | Contract counterparty and consent-giver for minors | Receive transparency information (doc 10) |
| EU establishment / authorised representative | **To be determined** | The provider is UK-established; if the system is placed on the EU market, Art. 22 requires a written-mandated authorised representative established in the Union | **GAP** — appoint if Art. 2 analysis (§5) concludes EU placing-on-market; tracked in doc 14 |

---

## 5. Territorial scope (Article 2)

Article 2(1) catches, inter alia, (a) providers **placing on the market or putting into
service** high-risk AI systems **in the Union**, irrespective of establishment, and (c)
providers/deployers established outside the Union **where the output produced by the system is
used in the Union**.

Relevant facts from the codebase and registers:

- The provider is UK-established (`business-docs/compliance/rfc/ropa-v1.md` header).
- The product is internet-delivered with no geofence on the AI routes; account country is
  collected (`prisma/schema.prisma:166`) but the marking routes do not restrict by country
  (`src/app/api/mark/route.ts:51-98` has no jurisdiction gate).
- Documented marketing focus to date is UK and Qatar (`src/lib/i18n/dictionary-legal-long.ts`
  is Qatar/PDPPL-oriented; ROPA models Qatar transfers). No record in-repo of deliberate
  EU-market targeting, but nothing technically prevents EU-resident learners or EU schools
  from using the system, and outputs would then be "used in the Union".

**Position put forward:** the EU AI Act bites if The English Hub **places the system on the EU
market, puts it into service in the Union, or its outputs are used in the Union** (e.g. an
EU-resident learner, an EU/EEA school, or an international school in the EU using it). Whether
any of these triggers is currently met — and therefore whether full provider obligations and
an Art. 22 authorised representative are presently mandatory or are a readiness measure for
the 2 Aug 2026 date — is a **[COUNSEL DECISION]**. The English Hub's instruction to counsel
is to treat the Act as in scope on a precautionary basis and to advise on (i) whether to
geofence EU traffic on the AI routes pending conformity, or (ii) proceed to full conformity by
2 Aug 2026 and appoint an authorised representative. This decision gates docs 13 and 14 and is
tracked in doc 16.

---

## 6. Article 5 prohibited-practices screen

Each Art. 5(1) prohibition has been screened against the system as built.

| Art. 5(1) prohibition | Screen result | Evidence / note |
|---|---|---|
| (a) subliminal / manipulative techniques causing significant harm | **Not engaged.** Outputs are explicit marking feedback; no subliminal technique. Note: habit-forming "streaks" are a Children's-Code item (gap-analysis GAP-5A) but are not an AI-system manipulation technique. | `gap-analysis.md` GAP-5A |
| (b) exploiting vulnerabilities of age/disability | **Screened — residual care required.** Users are minors (a protected vulnerable group). The system must not exploit that vulnerability; tone and over-reliance controls are addressed in doc 02 (risks R6, R7) and doc 07. No exploitation by design identified. | `validate-age/route.ts:38-49` |
| (c) social scoring | **Not engaged.** No general-purpose social scoring. | — |
| (d) individual predictive policing | **Not engaged.** | — |
| (e) untargeted facial-image scraping | **Not engaged.** No image processing. | — |
| **(f) emotion-recognition systems in the area of education** | **SCREENED — ACTIVE CONTROL REQUIRED.** Art. 5(1)(f) **prohibits** AI systems to **infer emotions of a natural person in … education institutions**, save narrow safety/medical exceptions. The system as built does **not** infer emotion. **However, the signed DPIA `dpia-ai-features-v1.md:49` asserts a "tone classifier" that tone-classifies outputs and a "feedback intensity" slider.** Classifying the *tone of the model's own output* is not emotion recognition of a person. But any future component that infers the *learner's* emotional state from their essay (e.g. distress, frustration, confidence) and is used in this education system would be a **prohibited practice**. **CONTROL:** the "tone classifier" / affect features described in the DPIA must NOT be implemented as inference of a learner's emotions. Any affect-adjacent feature requires a documented Art. 5(1)(f) assessment and counsel sign-off **before** development. This is logged as a binding design constraint in doc 02 (risk register) and doc 15 (DPIA reconciliation). | `dpia-ai-features-v1.md:49`; current code: no emotion inference in `content-safety.ts` or `prompt-builder.ts` |
| (g) biometric categorisation of sensitive attributes | **Not engaged.** No biometrics. | — |
| (h) real-time remote biometric identification | **Not engaged.** | — |

**Screen conclusion:** no prohibited practice is currently implemented. One binding
constraint is recorded: the DPIA-described "tone classifier" must not be built or deployed as
emotion recognition of learners (Art. 5(1)(f)). This constraint is carried into docs 02, 07
and 15.

---

## 7. Outcome and instructions to counsel

1. **Classification:** high-risk under Annex III(3)(b), both B2C and B2B. **Concluded.**
2. **Art. 6(3) derogation:** does not apply (profiling bar + significant influence + no
   condition met). **Concluded; counsel to countersign §3.5.**
3. **Art. 2 EU-market trigger:** **[COUNSEL DECISION] open** — instruction given (§5).
4. **Art. 5 screen:** clear, subject to the binding emotion-recognition constraint (§6(f)).
5. **Roles:** Provider = The English Hub; GPAI upstream = Anthropic; deployers = schools;
   authorised representative to be appointed subject to §5.

Cross-references: risk register doc 02; QMS doc 03; deployer/FRIA doc 09; transparency
doc 10; DoC doc 13; EU registration doc 14; DPIA reconciliation doc 15; roadmap doc 16.
