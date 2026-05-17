# 09 — Deployer Obligations (Art 26) + Fundamental Rights Impact Assessment Template (Art 27)

**Regulation:** Regulation (EU) 2024/1689, Articles 26 and 27.
**System:** "The English Hub" AI marking / grade-prediction / feedback / CEFR system — high-risk, **Annex III(3)(b)**.
**Provider:** The English Hub Ltd (UK). **Deployer:** the school/college/education body enabling the product.
**Document status:** v0.1 DRAFT — pending legal sign-off.
**Cross-references:** doc 08 (instructions for use), doc 02 (RMS), doc 03 (data governance), doc 10 (transparency), doc 11 (post-market monitoring), doc 12 (serious incidents), doc 15 (reconciled DPIA).

> This document has two parts. **Part A** is a plain summary of what a deployer school must do under Article 26. **Part B** is a ready-to-use Article 27 Fundamental Rights Impact Assessment (FRIA) **template**, pre-filled with this system's facts, for the school (a body governed by public law, or a private body providing a public service / education) to complete, sign and retain. The Provider supplies it; **only the Deployer can validly complete and sign it.**

---

# PART A — Deployer obligations under Article 26

| Art 26 ref | Obligation | What the school must concretely do for this system |
|---|---|---|
| 26(1) | Take appropriate technical & organisational measures to use the system per its instructions for use | Read, distribute and follow **doc 08**. Configure who can enable AI marking; restrict to supported boards/use. |
| 26(2) | Assign human oversight to natural persons with competence, training, authority and support | Name the overseeing staff (e.g. class English teacher + a curriculum lead). Ensure they have time and authority to review/override before any mark is used. Provide AI-literacy training (Art 4). |
| 26(3) | Ensure input data is relevant and sufficiently representative for the intended purpose (to the extent the deployer controls the input) | Ensure pupils submit their own, genuine, on-topic, correctly-board-selected essays; do not paste special-category data into essays. See doc 08 §6. |
| 26(4) | Monitor operation per instructions; inform provider/distributor and suspend use where risks arise; report serious incidents | Monitor mark quality vs teacher judgement; on malfunction or rights risk, **suspend use** and notify `cj@upskillenergy.com`; follow doc 12 for serious incidents. |
| 26(5) | Keep automatically generated logs for the appropriate period (≥6 months unless law says otherwise) | Retain marking/override records (`marking_submissions`, incl. `teacher_reviewed_*` `prisma/schema.prisma:726-729`) and the school's own oversight log. Coordinate retention with the Provider (doc 05). |
| 26(6) | Where the deployer is an employer, inform workers' representatives and affected workers before use | If staff are subject to AI-assisted evaluation, inform/consult per national law (likely N/A for pupil marking, but assess). |
| 26(7) | Inform natural persons that they are subject to the high-risk AI system; for Annex III systems making/assisting decisions about them, inform of that fact | Tell pupils and parents/guardians **before use** that an AI system marks their work and predicts a grade (formative only). Use the wording in **doc 10 §3** and doc 08 §7. |
| 26(8) | Cooperate with competent authorities | Provide records and assistance on request from the relevant market surveillance authority (doc 12 §6). |
| 26(9) | **Where applicable, carry out a Data Protection Impact Assessment (DPIA)** under GDPR Art 35, using the information in the instructions for use | Complete/maintain the school's **own** GDPR DPIA for using this system on minors (the Provider's reconciled DPIA is **doc 15** — it is the Provider's, not the school's). |
| 26(10) | (Law-enforcement remote biometric ID) | **Not applicable** — no biometrics in this system. |
| 26(11) | Use the information in Art 13 instructions to comply with Art 35 GDPR where relevant | Feed doc 08 into the school's DPIA and privacy notices. |
| 27 | **If the deployer is a body governed by public law, or a private operator providing public services, or deploying certain Annex III systems — perform a Fundamental Rights Impact Assessment** before first use | Complete **Part B** below and notify the market surveillance authority of the result as required by Art 27(3). |

**Who must do the Art 27 FRIA here?** State schools, academies, FE colleges and other public-law education bodies, and private providers delivering education as a public service, that deploy this Annex III(3)(b) system, must complete a FRIA before first use and on material change. Private tutoring businesses should still complete it as best practice and to support their GDPR DPIA. The Provider cannot do this for the Deployer but provides the pre-filled template to make it low-effort.

---

# PART B — Fundamental Rights Impact Assessment (Art 27) — TEMPLATE (pre-filled)

> Instructions: the Deployer completes the bracketed `[…]` fields, reviews each pre-filled statement against its own context, signs §B9, and notifies the market surveillance authority per Art 27(3) (and submits the summary via the template the authority/AI Office provides). Retain with the school's DPIA.

## B1. Deployer & system identification

| Field | Value |
|---|---|
| Deployer (legal name) | `[School/Trust legal name]` |
| Deployer type | `[ ] Public-law body  [ ] Private body providing a public service  [ ] Private operator (best-practice FRIA)` |
| Address / DfE URN or equivalent | `[…]` |
| Data Protection Officer | `[name, email]` |
| Designated Safeguarding Lead | `[name, email]` |
| Senior responsible owner for this deployment | `[name, role]` |
| AI system | The English Hub — AI Marking & Feedback (Annex III(3)(b)) |
| Provider | The English Hub Ltd, `cj@upskillenergy.com` |
| Provider instructions for use relied on | doc 08, version `[release tag]` |
| First-use date | `[date]` |
| FRIA version / review date | `v1.0 / [date]`; next review `[date or trigger]` |

## B2. Deployer's processes in which the system is used (Art 27(1)(a))

The system is used to: have pupils submit GCSE/IGCSE English practice essays which are **marked by AI against an AO rubric**, receive an **AI-predicted 1–9 grade**, AI strengths/improvements/next-steps, and (for EAL pupils) an **AI CEFR band**. The output is used by `[teachers]` to `[inform formative feedback, identify intervention, set targets — DELETE ANY THAT DO NOT APPLY]`. Pre-fill assumption: output is **formative only** and a teacher reviews/overrides before any recorded mark (doc 08 §5). **The Deployer must confirm this is true in its setting; if any output is used for setting, tiering, predicted-grade submission, or access decisions, the risk rating below increases materially and counsel must be involved.**

## B3. Period and frequency of intended use (Art 27(1)(b))

`[e.g. Years 10–11 GCSE English, term-time, ~weekly per class, academic year 2026/27]`.

## B4. Categories of natural persons and groups affected (Art 27(1)(c))

- Pupils aged **13–18**, i.e. **children** (heightened protection — EU Charter Art 24; UK Children's Code framing already adopted by Provider, see `business-docs/compliance/childrens-code/`).
- **EAL learners** (CEFR feature target group) — risk of marking bias against second-language transfer features.
- **SEND learners** — risk of inaccurate/unfair AI judgement.
- Pupils with **safeguarding vulnerabilities** whose essays may contain disclosures (the system does **not** detect these — doc 08 L6).
- Parents/guardians (consent and information rights for minors).

## B5. Specific risks of harm to fundamental rights (Art 27(1)(d))

| Right (EU Charter) | Risk arising from this specific system | Pre-filled likelihood / severity (Deployer to confirm) |
|---|---|---|
| **Art 24 — Rights of the child / best interests** | Children's formative trajectory steered by potentially inaccurate AI feedback; over-reliance on a non-human "marker". | Likelihood: Medium · Severity: Medium-High |
| **Art 14 — Right to education** | Inaccurate predicted grade / AO marking misdirects revision or setting if misused; non-AQA boards systematically less accurate (doc 08 L2). | Likelihood: Medium · Severity: High if used beyond formative |
| **Art 21 — Non-discrimination** | Bias against EAL/dialect/SEND writing; the automated bias-evaluation control asserted in the Provider's v1 DPIA **does not exist** (doc 15) — only prompt-level instruction (`src/lib/marking/prompt-builder.ts:71-91`). | Likelihood: Medium · Severity: High |
| **Art 8 — Personal data protection** | Essay text (children's data) sent to Anthropic in the **US**; "zero-retention/no-training" not yet confirmed in writing (doc 08 L7); Provider's public sub-processor disclosure inconsistent (doc 08 L8). | Likelihood: Medium · Severity: Medium-High |
| **Art 7 — Private/family life** | Essays may contain personal/family disclosures processed by a third-country LLM with no disclosure detection (doc 08 L6). | Likelihood: Low-Medium · Severity: High if it occurs |
| **Art 1 — Human dignity / Art 24** | Harsh or blunt AI feedback to a minor; the tone-classifier/rewrite control asserted in the v1 DPIA **does not exist** (doc 15). | Likelihood: Medium · Severity: Medium |
| **Right to an effective remedy / human review** | Provider provides **no B2C self-serve human-review route**; `/legal/ai-governance` admits the button "does not yet exist" (`src/lib/i18n/dictionary-legal-long.ts:629`). Remedy depends entirely on the Deployer's teacher-override (`src/app/api/school/marking/override/route.ts`). | Likelihood: Medium · Severity: Medium |

## B6. Human oversight measures the Deployer will implement (Art 27(1)(e))

Pre-filled minimum (Deployer to adopt/strengthen):

1. Named teacher oversight per class; **every AI mark treated as provisional** and reviewed before it is recorded or acted upon; teacher override used (`marking_submissions.teacher_*`, `prisma/schema.prisma:726-729`).
2. Predicted grade **never** used as a centre/forecast grade or submitted externally.
3. Extra human scrutiny for non-AQA cohorts (doc 08 L2) and EAL/SEND pupils.
4. Safeguarding remains entirely human: DSL + school policy apply to all essay content; staff briefed that the AI does **not** flag disclosures (doc 08 L6).
5. Pupils/parents informed per doc 10 §3 / doc 08 §7; opt-out honoured.
6. Staff AI-literacy training delivered before first use (Art 4); over-reliance/automation-bias explicitly covered.
7. Malfunctions and serious incidents reported to the Provider and handled per doc 12.

## B7. Measures if risks materialise (Art 27(1)(f) — governance & complaint arrangements)

- **Internal complaint route:** `[school contact]`; pupil/parent may request human re-marking, which the Deployer fulfils via teacher override.
- **Escalation:** to the Deployer's DPO/DSL; to the Provider (`cj@upskillenergy.com`); and, for serious incidents, to the relevant market surveillance authority (doc 12 §6).
- **Suspension trigger:** the Deployer will suspend AI marking for the affected scope on evidence of systematic inaccuracy, bias, a safeguarding gap, or a data-protection failure, pending Provider remediation.
- **Records:** oversight, overrides and complaints logged and retained ≥6 months (Art 26(5)).

## B8. Relationship to GDPR DPIA (Art 27(4))

If the Deployer's GDPR DPIA already covers elements above, this FRIA **complements** it and need not duplicate it — cross-reference the DPIA here: `[DPIA ref]`. The Provider's reconciled DPIA is **doc 15** (Provider-side; informational input only).

## B9. Conclusion, sign-off and authority notification (Art 27(2)–(3))

- **Residual fundamental-rights risk (Deployer's assessment):** `[Low / Medium / High]` — justification: `[…]`.
- **Decision:** `[ ] Proceed  [ ] Proceed with conditions: ____  [ ] Do not proceed`.
- **Notification to market surveillance authority:** completed on `[date]` via `[template/portal ref]` (Art 27(3)); summary results recorded at `[ref]`.

| Role | Name | Signature | Date |
|---|---|---|---|
| Senior responsible owner | `[…]` | `[…]` | `[…]` |
| Data Protection Officer | `[…]` | `[…]` | `[…]` |
| Designated Safeguarding Lead | `[…]` | `[…]` | `[…]` |

## B10. Review triggers

Re-run this FRIA on: Provider model/version change with capability impact; Provider notifying a material limitation/accuracy change; expansion of use beyond formative; a safeguarding/data-protection/bias incident; annually as a minimum.

*End of doc 09.*
