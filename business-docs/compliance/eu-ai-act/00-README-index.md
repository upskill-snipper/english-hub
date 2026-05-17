# EU AI Act Compliance Pack — Index & Traceability

**System:** The English Hub — AI essay marking, grade prediction, feedback, CEFR assessment
**Regulation:** Regulation (EU) 2024/1689 ("EU AI Act")
**Role of The English Hub:** **Provider** of a high-risk AI system (Annex III(3)(b))
**Upstream GPAI provider:** Anthropic PBC (`claude-sonnet-4-20250514`)
**Deployers:** Schools / colleges (B2B); The English Hub itself operates the system for direct B2C learners
**Conformity route:** Annex VI — internal control (self-assessment)
**Pack owner:** Calum Jardine (Founder / acting Provider accountable person), cj@upskillenergy.com
**Target state date:** 2 August 2026 (Art. 113 high-risk applicability for Annex III systems)
**Pack version:** 1.0 — created 2026-05-17
**Status of this pack:** FOUNDATION ISSUED (docs 00–03). Docs 04–16 are SCOPED AND OWNED, NOT YET DRAFTED.

---

## 1. Purpose

This pack is the single source of truth for The English Hub's conformity with the EU AI Act
for its high-risk AI education system. It is written to be read cold by a market-surveillance
authority, a notified body in a future audit, a school Data Protection Officer, or an acquirer's
diligence team.

It is deliberately honest about gaps. A signed Data Protection Impact Assessment already exists
in this repository
(`business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md`, v1.0 FINAL,
founder-signed 2026-05-12) that asserts a number of technical controls that **do not exist in the
codebase** (see doc 15 for the full reconciliation). This pack does **not** repeat that error.
Where a control required by the Act is not implemented, it is recorded as a **GAP** with an owner
and a target date, never as an implemented control.

---

## 2. Compliance pack artefact register

| # | Artefact | AI Act basis | Status | Responsible owner |
|---|----------|--------------|--------|-------------------|
| 00 | This index + requirements-traceability matrix | Art. 11, Annex IV(1) | **ISSUED v1.0** | Founder (Provider accountable person) |
| 01 | System classification & Article 6(3) derogation assessment | Art. 6, Annex III(3)(b), Art. 2, Art. 5 | **ISSUED v1.0** | Founder + external counsel |
| 02 | Risk management system | Art. 9 | **ISSUED v1.0** | Founder (Risk owner) |
| 03 | Quality management system | Art. 17, Art. 4 | **ISSUED v1.0** | Founder (QMS owner) |
| 04 | Technical documentation (Annex IV technical file) | Art. 11, Annex IV | **NOT STARTED** | Founder + Engineering |
| 05 | Data & data governance statement | Art. 10 | **NOT STARTED** | Data Protection Lead + Engineering |
| 06 | Accuracy, robustness & cybersecurity dossier | Art. 15 | **NOT STARTED** | Engineering + Founder |
| 07 | Human oversight design & operating procedure | Art. 14 | **NOT STARTED** | Product + Founder |
| 08 | Instructions for Use (IFU) for deployers | Art. 13, Art. 16(g) | **NOT STARTED** | Founder + Product |
| 09 | Deployer obligations brief + FRIA template (Art. 27) | Art. 26, Art. 27 | **NOT STARTED** | Founder (provides to schools) |
| 10 | Transparency & marking-of-output statement | Art. 50, Art. 13 | **NOT STARTED** | Product + Content |
| 11 | Post-market monitoring plan | Art. 72 | **NOT STARTED** | Founder (PMM owner) |
| 12 | Serious-incident reporting procedure | Art. 73 | **NOT STARTED** | Founder (Incident owner) |
| 13 | EU Declaration of Conformity + CE marking record | Art. 47, Art. 48, Annex V | **NOT STARTED** | Founder |
| 14 | EU database registration record (Art. 49 / Art. 71) | Art. 49, Art. 71 | **NOT STARTED** | Founder |
| 15 | Reconciled DPIA ↔ AI Act control statement | Art. 9(9), GDPR Art. 35 | **NOT STARTED — HIGH PRIORITY** | Data Protection Lead + Founder |
| 16 | Certification / conformity roadmap to 2 Aug 2026 | Art. 113 | **NOT STARTED** | Founder |

> **Numbering note.** Docs are numbered for the full target pack. Only 00–03 exist today.
> Creating 04–16 is the work tracked in doc 16 (roadmap). Do not cite an unissued doc as
> evidence of conformity.

---

## 3. Requirements-traceability matrix (Article → artefact → status)

Status legend: **CONFORMS** (implemented & evidenced) · **PARTIAL** (some controls, material gaps) ·
**GAP** (required, not yet met) · **DOC-ONLY** (documented here, implementation tracked elsewhere).

| AI Act provision | Obligation (summary) | Primary artefact | Implementation status (2026-05-17) | Owner |
|---|---|---|---|---|
| Art. 6(2) + Annex III(3)(b) | High-risk classification (evaluate learning outcomes / steer learning) | 01 | **CONFORMS** — classified high-risk | Founder + counsel |
| Art. 6(3) | Derogation assessment (significant-influence test) | 01 | **CONFORMS** — assessed; derogation **does not apply** | Founder + counsel |
| Art. 2 | Territorial scope / EU-market trigger | 01 | **DOC-ONLY** — counsel decision pending on EU placing-on-market | Founder + counsel |
| Art. 5 | Prohibited-practices screen (incl. emotion recognition in education) | 01 | **PARTIAL** — screened; "tone classifier" in signed DPIA must NOT ship as emotion recognition | Founder + counsel |
| Art. 9 | Risk management system | 02 | **PARTIAL** — RMS established (this pack); several mitigations are GAPs | Founder |
| Art. 10 | Data & data governance (bias, representativeness) | 05 | **GAP** — no bias evaluation has been run; DPIA's "matched-pair bias eval" not implemented | Data Protection Lead |
| Art. 11 + Annex IV | Technical documentation | 04, 00 | **GAP** — Annex IV file not yet assembled | Founder + Eng |
| Art. 12 | Logging / automatic record-keeping over lifecycle | 04, 06 | **GAP** — `/api/mark` persists nothing (localStorage only, `src/app/marking/submit/page.tsx:285-293`); audit-log of AI inferences absent | Engineering |
| Art. 13 | Transparency & instructions to deployer | 08, 10 | **PARTIAL** — disclaimer text exists (`src/lib/ai-disclaimer.ts:4-7`); no IFU for schools | Product |
| Art. 14 | Human oversight | 07 | **PARTIAL (B2B) / GAP (B2C)** — `HumanReviewRequest` model exists (`prisma/schema.prisma:294`) but no student-facing review UI (`dictionary-legal-long.ts:629`) | Product |
| Art. 15 | Accuracy, robustness, cybersecurity | 06 | **GAP** — no accuracy metric, no eval suite; DPIA's "weekly 200-essay eval" not implemented | Engineering + Founder |
| Art. 16 | Provider obligations (umbrella) | 00, all | **PARTIAL** | Founder |
| Art. 17 | Quality management system | 03 | **PARTIAL** — QMS defined (this pack); operating evidence to be built | Founder |
| Art. 18 | Documentation retention (10 yrs) | 03, 04 | **DOC-ONLY** — retention rule set; store to be designated | Founder |
| Art. 19 | Automatically generated logs retention | 06, 11 | **GAP** — logs not generated (see Art. 12 row) | Engineering |
| Art. 20 | Corrective actions & duty to inform | 11, 12 | **DOC-ONLY** — procedure in 11/12 | Founder |
| Art. 21 | Cooperation with competent authorities | 03 | **DOC-ONLY** | Founder |
| Art. 22 | Authorised representative (if provider outside EU) | 01, 14 | **GAP** — depends on Art. 2 decision; appoint if provider is non-EU establishment | Founder + counsel |
| Art. 23 | Importer obligations | n/a | **N/A** — service provided directly, not imported as a product | — |
| Art. 24 | Distributor obligations | n/a | **N/A** | — |
| Art. 25 | Responsibilities along the value chain (Anthropic = GPAI upstream) | 01, 04 | **DOC-ONLY** — Anthropic role mapped in 01 | Founder |
| Art. 26 | Deployer obligations (schools) | 09 | **GAP** — no deployer brief issued | Founder |
| Art. 27 | Fundamental Rights Impact Assessment (public-body / education deployers) | 09 | **GAP** — FRIA template not produced for schools | Founder |
| Art. 47 + Annex V | EU Declaration of Conformity | 13 | **GAP** — DoC not drafted | Founder |
| Art. 48 | CE marking | 13 | **GAP** — affixing process not defined | Founder |
| Art. 49 / 71 | Registration in the EU database | 14 | **GAP** — not registered | Founder |
| Art. 50 | Transparency for AI interaction & AI-generated content | 10 | **PARTIAL** — visible "Made with AI" label asserted (`dictionary-legal-long.ts:356`); coverage gaps acknowledged | Product |
| Art. 72 | Post-market monitoring system | 11 | **GAP** — no PMM system operating | Founder |
| Art. 73 | Serious-incident reporting (15-day / 2-day windows) | 12 | **GAP** — no procedure | Founder |
| Art. 4 | AI literacy of staff/operators | 03 | **PARTIAL** — covered in QMS §8; training record to be created | Founder |
| Art. 86 | Right to explanation of individual decision-making | 07, 10 | **GAP** — no explanation route to affected learner | Product |
| GDPR Art. 35 / AI Act Art. 9(9) | DPIA alignment | 15 | **GAP — HIGH PRIORITY** — existing signed DPIA over-claims controls | DPL + Founder |

---

## 4. System identity (for re-use across all docs)

| Attribute | Value | Evidence |
|---|---|---|
| AI system name | The English Hub AI Marking & Assessment System | — |
| Intended purpose | Formative marking of GCSE/IGCSE English essays against exam-board Assessment Objectives; indicative grade prediction; written feedback; CEFR assessment of EAL productive skills | `src/lib/marking/prompt-builder.ts:70-92` |
| AI model | Anthropic `claude-sonnet-4-20250514` (sole model, all routes) | `src/app/api/mark/route.ts:154`; `cefr-assess/route.ts:141`; `essay-feedback/route.ts:215`; `essay/feedback/route.ts:84`; `toolkit/generate-notes/route.ts:247` |
| AI surfaces (6 routes) | `/api/mark`, `/api/mark/stream`, `/api/essay-feedback`, `/api/essay/feedback`, `/api/cefr-assess`, `/api/toolkit/generate-notes` | route files under `src/app/api/` |
| Primary high-risk function | Evaluate learning outcomes and steer the learning process of natural persons | `grade-predictor.ts:40-50`; `feedback-generator.ts:120-137` |
| Output schema | `predictedGrade` (1–9/U), `gradeBand`, `aoScores[]`, `strengths`, `improvements`, `nextStepsToNextGrade`, `summary` | `feedback-generator.ts:122-137` |
| Affected persons | Students aged 13–18 (many minors), incl. EAL learners; teachers (B2B) | `validate-age/route.ts:38-49`; `prisma/schema.prisma:161,165` |
| Persistence of inferences | **None server-side for `/api/mark`** — written to browser `localStorage` only | `src/app/marking/submit/page.tsx:285-293` |

---

## 5. How to maintain this pack

- **Trigger for review:** any change to a file under `src/app/api/{mark,mark/stream,essay-feedback,essay/feedback,cefr-assess,toolkit/generate-notes}`, `src/lib/marking/**`, `src/lib/consent*`, `src/lib/content-safety.ts`, the model ID string, or onboarding of a new EU deployer.
- **Cadence:** quarterly review on the first business day of each calendar quarter (aligned with the DPIA cadence in `dpia-ai-features-v1.md` §7), plus ad-hoc on any trigger above or any serious incident.
- **Golden rule:** never document a control that is not in the codebase. Cite `path:line`. If you cannot cite it, it is a GAP.

---

## 6. Cross-references

- Existing signed DPIA: `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md`
- Draft children's-data DPIA: `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features.md`
- Record of Processing Activities: `business-docs/compliance/rfc/ropa-v1.md`
- Children's Code gap analysis: `business-docs/compliance/childrens-code/01-assessment/gap-analysis.md`
- Public AI-governance honest-assessment page source: `src/lib/i18n/dictionary-legal-long.ts`
