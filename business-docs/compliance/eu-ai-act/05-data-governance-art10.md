# 05 — Data & Data Governance Statement (Article 10)

**Regulation:** Regulation (EU) 2024/1689 — **Article 10** (data and data governance)
**System:** The English Hub AI Marking & Assessment System (high-risk, Annex III(3)(b))
**Provider:** The English Hub (Calum Jardine, Provider accountable person, cj@upskillenergy.com)
**Document status:** v1.1 — ISSUED 2026-05-17 — honest baseline; open items are GAPs with owner + date. v1.1 reconciles with remediation landed during drafting: an Art. 12/19 inference logger with default SHA-256 input hashing (`src/lib/ai-audit-log.ts`) and `boundarySource` provenance tagging (`src/lib/marking/grade-predictor.ts`) now exist — retention/provenance items re-scoped, verified by `path:line`.
**Document owner:** Data Protection Lead + Engineering
**Pack index:** `00-README-index.md`. Reconciliation with the signed DPIA: **doc 15**.

> **Framing — Article 10 applied to a foundation-model system.** Article 10's training/validation/
> testing dataset obligations are written for systems "developed with techniques involving the
> training of models with data". The English Hub **does not train or fine-tune any model**: it
> applies a pinned Anthropic foundation model (`claude-sonnet-4-20250514`,
> `src/app/api/mark/route.ts:154`) with a hand-authored rubric corpus and deterministic
> post-processing. Article 10 is therefore applied in two parts: (A) the **provider-controlled
> data** that materially governs system behaviour — the mark-scheme corpus, the grade-boundary
> table, and the learner input/output data flow; and (B) the **upstream GPAI training data**,
> which is Anthropic's and is governed via the value-chain route (Art. 25; doc 01). Article 10(5)
> special-category handling and the bias-examination duty (Art. 10(2)(f)–(g)) are applied to the
> provider-controlled data and to system *outputs*.

---

## 1. Data categories processed by the system

| # | Data category | Where | Sent to Anthropic? | Special category? | Evidence |
|---|---|---|---|---|---|
| D1 | **Learner free-text essay / spoken-response transcript** | Request body `essay` / `text` | **YES** — it is the model input | Free text **may incidentally contain** special-category or safeguarding-relevant content (health, sexuality, religion, self-harm) because learners write personal narrative | `src/app/api/mark/route.ts:45,157`; `cefr-assess/route.ts:42,144` |
| D2 | Question text / task prompt | `questionText` / topic | **YES** | No | `src/app/api/mark/route.ts:44,157` |
| D3 | Studied text title (e.g. "Macbeth") | optional `studiedText` | **YES** (if provided) | No | `src/lib/marking/prompt-builder.ts:66-68` |
| D4 | Mark-scheme id / question id / board / CEFR band | request fields | Indirectly — the scheme content is embedded in the system prompt | No | `src/lib/marking/prompt-builder.ts:80-92` |
| D5 | Locale (`x-lang`/cookie) | request header/cookie | Indirectly — triggers the Arabic language directive appended to the prompt | No (but is a proxy signal) | `src/lib/i18n/ai-language-directive.ts:24-53` |
| D6 | Identity & account data (name, email, DOB, school, `isMinor`, country, `parentId`) | Supabase / Prisma `User` | **NO** | DOB/age = data about a child | `prisma/schema.prisma:157-168` |
| D7 | Consent records | Prisma `Consent`, `parental_consents` | **NO** | No | `prisma/schema.prisma:217-233`; `src/lib/consent-check.ts:51-60` |
| D8 | Privacy settings (`aiOptOut`, `aiTrainingOptIn`) | Prisma `PrivacySettings` | **NO** | No | `prisma/schema.prisma:441-455` |
| D9 | AI output (predicted grade, AO scores, feedback) | response JSON; B2C → browser `localStorage`; B2B → `marking_submissions` | Output of Anthropic, returned to provider | Derived profiling of a minor's attainment | `src/app/marking/submit/page.tsx:285-293`; `prisma/schema.prisma:712-737` |
| D10 | Rate-limit counters keyed by user id | Upstash Redis | **NO** | No | `src/lib/rate-limit.ts:100-135` |

**Profiling note.** D9 is automated evaluation of a child's educational attainment (a predicted GCSE grade). It is profiling of children and an Art. 22 GDPR–adjacent / Children's Code concern; the AI Act human-oversight (doc 07) and transparency (doc 10) obligations attach. Doc 15 reconciles this with the signed DPIA.

---

## 2. Minors' data (Article 10(5); Children's Code interaction)

- The user model records `dateOfBirth` and a derived `isMinor` flag (`prisma/schema.prisma:161,165`). The platform's core audience is 13–18, so **a large share of D1 essay text is authored by children**.
- Minor-specific gating before any AI call: AI-processing consent **and** parental consent for minors via `checkMinorAIConsent` → `checkParentalConsent` (`src/lib/consent-check.ts:82-97`, `24-69`); parental consent satisfied by a linked parent or an approved `parental_consents` row (`src/lib/consent-check.ts:46-60`).
- AI opt-out is enforced server-side from the database (cannot be bypassed via localStorage), `src/lib/ai-preferences.ts:40-51`, and is checked on every AI route (e.g. `src/app/api/mark/route.ts:84-89`).
- **Special-category risk in children's free text.** D1 is unstructured child-authored prose that can contain health/sexuality/religion/safeguarding disclosures. The only handling is the keyword self-harm/suicide signpost in `contentSafetyCheck` (two patterns `/\b(self[- ]?harm)/i`, `/\bsuicid/i` → static UK helpline text; `src/lib/content-safety.ts:95-109`). There is **no special-category detection, minimisation or redaction before the text is transmitted to Anthropic**. **GAP-DG-1** — recorded, not claimed as a control. Owner: Data Protection Lead + Engineering. Target: 2026-07-15 (design a pre-transmission safeguarding/special-category screen and document the lawful-basis/DPIA position).
- Children's Code alignment is tracked under `business-docs/compliance/childrens-code/` and reconciled in doc 15. The age-assurance mechanism (self-declared DOB) and its limits are a Children's Code matter referenced here, owned there.

---

## 3. Data minimisation in prompts — what is and is NOT sent to Anthropic

**Verified against the prompt builders and the public claim.**

- The user message sent to the model is constructed solely from the question and the essay; `buildUserMessage` emits `QUESTION:\n<questionText>\n\nSTUDENT'S RESPONSE:\n<essay>` with **no identity fields** (`src/lib/marking/prompt-builder.ts:158-171`). The system prompt is the mark-scheme rubric + safety rules; it contains `studiedText` if the learner supplied it (`src/lib/marking/prompt-builder.ts:66-68`) but no PII.
- CEFR route: the candidate text is fenced as untrusted data; the prompt carries skill/band/topic title only, no identity (`src/lib/eal/assess.ts:191-209`).
- Defence-in-depth truncation before transmission: essay → 30,000 chars, question → 2,000 (`src/lib/marking/prompt-builder.ts:161-162`); CEFR text → 12,000 (`src/lib/eal/assess.ts:195`); legacy essay-feedback essay → 30,000, question → 500 (`src/app/api/essay-feedback/route.ts:207-209`).
- **Public claim verification.** The AI explainer tells learners that only essay text + chosen question are sent, and that name, email, DOB/age, school and "any other personal information" are **not** sent (`src/app/marking/ai-explainer/page.tsx:104-118`). **This claim is consistent with the code paths above** for the identity fields D6 — none of name/email/DOB/school is added to the prompt. **Caveat to record:** the claim "no other personal information" is only true *structurally*; the essay body itself (D1) can contain the learner's own personal/special-category disclosures, which **are** transmitted. The explainer does not surface this nuance — see doc 10 (transparency) and GAP-DG-1.

**Logging-side minimisation (new):** the Art. 12/19 inference log does **not** retain D1 raw text by default — it stores a SHA-256 hash + length, with raw capture behind a hard opt-in flag (`src/lib/ai-audit-log.ts:18-25,186-189`). This means record-keeping does not create a standing corpus of children's essays (a deliberate Children's Code-aligned design; see doc 15).

**Net data-minimisation finding:** PARTIAL-CONFORMS. Structural minimisation of identifiers is implemented and matches the public statement; the inference log is hash-by-default. Residual gap: no content-level minimisation/redaction of special-category material inside D1 *before transmission to Anthropic* (GAP-DG-1) — the hashing protects the *log*, not the *prompt sent upstream*.

---

## 4. Provenance of the grade-boundary dataset (Art. 10(2)(b)–(c) — data collection & origin)

The only provider-curated quantitative dataset governing an output is the grade-boundary threshold table:

- `AQA_ENGLISH_THRESHOLDS` — nine `{grade, pct}` rows, grade 9 = 82% … grade 1 = 10% (`src/lib/marking/grade-predictor.ts:99-109`).
- **Documented origin:** "averaged from the past five years of published AQA grade boundaries for 8700 and 8702", source `https://filestore.aqa.org.uk/.../grade-boundaries` (`src/lib/marking/grade-predictor.ts:4-22`). The values are intentionally "indicative" and presented as such to the learner. **Provenance is now machine-tagged:** `getBoundarySource()` / `GradePrediction.boundarySource` distinguish `aqa-5yr-average` from `aqa-5yr-average-proxy` (`src/lib/marking/grade-predictor.ts:37-65,82-90,152-154`) and the eval harness reports the proxy count for auditability (`evals/run.ts:257-271`; `evals/README.md:58-61`).
- **Provenance defect (representativeness — Art. 10(3), Art. 10(2)(f)–(g)) — PARTIALLY mitigated (provenance), defect persists (numbers).** This **AQA-derived** table is still the *only* table and is applied to **every board** — Edexcel, OCR, Cambridge IGCSE (0500/0990), Eduqas. Provenance is now explicit, **but the production call site `feedback-generator.ts:120` calls `predictGrade(aoScores, question.totalMarks)` without passing `board`**, so every prediction is tagged with the conservative `aqa-5yr-average-proxy` value yet **still computed from AQA numbers** (schemes carry their own `version`/`sourceUrl`, e.g. `cambridge-0500.ts:545-546`, `edexcel-lang.ts:372-373`, still unused for boundary selection). The dataset remains **not representative** of the non-AQA populations it is applied to — a data-governance defect, now auditable but not corrected. **GAP-DG-2 / GAP-IV-3** — owner Engineering, target 2026-07-31: pass `scheme.board` at `feedback-generator.ts:120`, source per-board 5-year boundary tables with cited provenance, and suppress/caveat non-AQA numeric grades meanwhile (see doc 06 §C, doc 07).
- **Provenance evidencing action:** capture, for each board/paper, the source URL, the 5 boundary years used, and the averaging method, as a versioned datasheet appended to doc 06. Currently only the AQA narrative comment exists in code — **DOC-GAP** (no formal datasheet yet).

The mark-scheme corpus itself (AO band descriptors) is hand-authored from published exam-board specifications with `version`/`sourceUrl` provenance fields (`src/lib/marking/mark-schemes/types.ts:85-89`; e.g. `aqa-lit-paper1.ts:295-297`). A documented review/verification of fidelity of each scheme against the official specification is a **DOC-GAP** (owner: Engineering + a subject lead; target 2026-07-31).

---

## 5. Examination for bias and discriminatory outcomes (Art. 10(2)(f)–(g))

**Current state: NO bias examination has been performed.** The signed DPIA's "matched-pair bias evaluation" is **not implemented in the codebase** (recorded in `00-README-index.md` §3 Art. 10 row and reconciled in doc 15). The only relevant code is generic content filtering/safety, not bias measurement (`src/lib/content-filter.ts`, `src/lib/content-safety.ts`). This is **GAP-DG-3** and is a material high-risk gap.

Foreseeable bias vectors for this system (must be measured, not assumed absent):

1. **EAL / Arabic-L1 learners.** The system explicitly serves Khaleeji-Arabic EAL learners; the Arabic language directive changes prompt context (`src/lib/i18n/ai-language-directive.ts:39`) and the CEFR assessor reasons about "Arabic-L1 transfer errors" (`src/lib/eal/assess.ts:162`). Risk: systematic under-marking of non-native syntactic patterns; differential CEFR banding.
2. **SEND learners.** Atypical structure/spelling/length may be penalised by the model; the deterministic length floor (≥80 chars / ≥100 words, `src/app/api/mark/route.ts:253`; `src/lib/validate-request.ts:46`) and the gibberish/low-alpha heuristics (`src/lib/content-safety.ts:69-78`) may disproportionately reject assistive-tech or atypical output.
3. **Dialect / non-standard English.** Non-standard but valid English (e.g. African-American or regional British vernacular in creative writing) may be marked down for "accuracy", and the code/gibberish heuristics may misfire.
4. **Minors by age band.** Younger writers' developmentally-appropriate work may be mis-mapped by an AQA GCSE-calibrated table.
5. **Cross-board population skew.** GAP-DG-2: non-AQA cohorts receive AQA-calibrated grades — a structural disparate-impact by qualification.

### 5.1 Bias-evaluation methodology to implement (concrete, regulator-facing)

To be built and run before reliance is encouraged; results appended to doc 06 and doc 02 (RMS):

1. **Construct a stratified evaluation corpus** of human-marked scripts (shared with the doc 06 accuracy gold standard) labelled with non-identifying cohort attributes: EAL/L1 status, SEND-support flag (proxy permitted), dialect/variety of the writing, learner age band, exam board, paper. Minimum ≥150 scripts per board/paper, with EAL and SEND strata each ≥30 per board where the population exists. Data minimisation: cohort labels stored separately from identity, used only for aggregate bias metrics, deleted after the evaluation cycle.
2. **Matched-pair / counterfactual test.** Hold content constant and vary only surface features that should not affect a fair mark (e.g. controlled introduction of L1-transfer error patterns into otherwise-identical scripts; dialectal vs standardised renderings of the same argument). Measure the grade/AO delta attributable purely to the surface feature.
3. **Group fairness metrics.** Per sub-group vs reference group, report: mean signed grade error (bias direction), mean absolute error, exact/adjacent examiner-agreement and QWK, and grade-band confusion. Flag any sub-group whose mean signed error differs from the reference by more than a pre-registered tolerance (proposed ±0.3 of a grade) or whose QWK is materially lower.
4. **Statistical testing.** Significance test the inter-group difference (e.g. bootstrap CIs on the error difference); pre-register the tolerance and test in doc 06 so the result is not post-hoc.
5. **Mitigation loop.** Where a group is disadvantaged: prompt remediation (explicit fairness instruction / L1-transfer guidance already partially present at `src/lib/eal/assess.ts:162`), board-specific calibration, suppression of the numeric grade for affected cohorts pending fix, and re-test. Document residual disparate impact and the Provider's risk acceptance (Art. 9(5)).
6. **Cadence & regression.** Re-run on every model-version change, prompt change, or grade-table change, and on a scheduled quarterly cadence; integrate into the drift monitor (doc 06) and PMM (doc 11). Owner: Data Protection Lead + Engineering. Target: methodology ratified 2026-06-30; first bias evaluation completed 2026-07-31.

---

## 6. The "no training on student data" assertion — and how to evidence it

**Where the assertion is made to data subjects:**
- AI explainer: "Under our agreement with Anthropic, your essay text is **not used to train their AI models**" (`src/app/marking/ai-explainer/page.tsx:115-118`).
- Equivalent assertions in `/legal` pages and the privacy policy (referenced from `src/app/marking/ai-explainer/page.tsx:197-203`).
- A user-level `aiTrainingOptIn` exists, default **false** (`prisma/schema.prisma:446`), and `aiOptOut` default false (`prisma/schema.prisma:447`).

**Evidence status: NOT YET EVIDENCED — TO BE CONFIRMED (GAP-DG-4).** The assertion is a contractual/processor claim about Anthropic. The codebase cannot prove it; what is needed as Art. 10 / Art. 25 value-chain evidence:

1. **Anthropic Data Processing Addendum / commercial terms** held on file confirming customer API content is not used to train Anthropic's models (standard for Anthropic commercial API, but the executed agreement and effective date must be filed as the evidence of record).
2. **Zero-Data-Retention (ZDR) status — to be confirmed.** Whether ZDR is in force for this account, and the default content-retention window if not, must be confirmed in writing with Anthropic and recorded here with the confirmation date. The current integration sends no retention/no-store directive in code (`src/app/api/mark/route.ts:152-160`; `toolkit/generate-notes/route.ts:246-253`) — retention is governed by the contract/account configuration, not the request.
3. **Sub-processor / international-transfer record:** Anthropic is US-based (stated to users at `src/app/marking/ai-explainer/page.tsx:95-97`); the transfer mechanism (SCCs / UK IDTA) and Anthropic's listing in the RoPA (`business-docs/compliance/rfc/ropa-v1.md`) and sub-processor list must be cited as evidence.
4. **Internal consistency:** if a future feature relied on `aiTrainingOptIn`, the data path must honour it; today the flag is inert (no code reads it for an AI training pathway) — acceptable only while the upstream "no training" contractual position holds. Record this dependency explicitly.

Owner: Data Protection Lead + Founder. Target: Anthropic DPA + ZDR status confirmed and filed by 2026-06-15; cross-referenced in doc 01 (Art. 25) and doc 15.

---

## 7. Data quality and governance practices (Art. 10(2)(a)–(e))

| Art. 10(2) practice | Implementation | Status |
|---|---|---|
| (a) Design choices / data assumptions | Rubric-grounded prompting; deterministic grade map assumed AQA-representative | Documented; **defective assumption** for non-AQA (GAP-DG-2) |
| (b) Data collection processes & origin | Mark schemes from published specs (`version`/`sourceUrl`); boundary table from AQA published data (`grade-predictor.ts:4-9`) | PARTIAL — formal datasheets a DOC-GAP |
| (c) Data preparation (labelling, cleaning) | N/A for training; input truncation/sanitisation (`prompt-builder.ts:161-162`; `toolkit/generate-notes/route.ts:128-135`) | Implemented for input hygiene |
| (d) Formulation of assumptions (what data is meant to measure) | AO bands → mark; mark% → grade | Documented |
| (e) Assessment of availability/quantity/suitability | **No assessment performed** for accuracy/bias datasets (none exist) | **GAP** (DG-3) |
| (f) Examination for biases (incl. fundamental-rights/feedback-loop) | None performed | **GAP** (DG-3) |
| (g) Measures to detect/prevent/mitigate biases | Generic content filtering only; not bias mitigation | **GAP** (DG-3) |
| (h) Relevant data gaps/shortcomings & how addressed | This document | Documented; remediation in doc 06/02/16 |

There is **no feedback loop that re-trains anything** (no model training; outputs are not fed back into any learning process), which removes one Art. 10(2)(f) failure mode — but the absence of any bias measurement remains the dominant gap.

---

## 8. Retention

| Data | Retention | Evidence / status |
|---|---|---|
| D1 essay sent to Anthropic | Governed by Anthropic contract/account config; **default window TO BE CONFIRMED (ZDR)** | GAP-DG-4 (§6) |
| D1 raw essay text in the inference log | **NOT persisted by default** — only a SHA-256 hash + length; raw text gated behind hard opt-in `AI_AUDIT_STORE_RAW_INPUT` (default off) | `src/lib/ai-audit-log.ts:18-25,50-51,186-189` |
| D1/D9 for `/api/mark`, `/api/essay-feedback` (B2C) — *user-facing copy* | Result rendered client-side and stored only in the learner's browser `localStorage` (the durable provider record is now the inference log, next row) | `src/app/marking/submit/page.tsx:285-293` |
| D9 inference summary (all 6 routes) | Persisted server-side as an `AuditLog` `ai_decision` row (`details`: model, scheme/board, input hash+length, output grade summary, consent snapshot) | `src/lib/ai-audit-log.ts:161-202,217-240` — **DOC-GAP**: retention period not codified (doc 11) |
| D9 for B2B `marking_submissions` | Persisted in Supabase (RLS-governed); provider-side retention schedule | `prisma/schema.prisma:712-737` — **DOC-GAP**: retention period not codified |
| Consent / privacy settings | Lifetime of account per privacy policy | `prisma/schema.prisma:217-233,441-455` |
| AI inference audit log | **EXISTS** (`AuditLog` action=`ai_decision`); retention period to be codified in doc 11 | `src/lib/ai-audit-log.ts:225-234` — **DOC-GAP** (retention) |
| Technical documentation (this pack) | Art. 18 — 10 years post placing-on-market | `00-README-index.md` §3 (Art. 18 row, DOC-ONLY) |

A single, codified retention schedule covering D1/D9 across B2C and B2B (and aligned with the RoPA `business-docs/compliance/rfc/ropa-v1.md` and the Children's Code data-minimisation policy `business-docs/compliance/childrens-code/02-policies/data-minimisation-for-children.md`) is a **DOC-GAP** owned by Data Protection Lead, target 2026-07-15.

---

## Consolidated GAP register for this document

| ID | Art. 10 basis | Gap | Owner | Target |
|---|---|---|---|---|
| GAP-DG-1 | 10(2)(f), 10(5) | No special-category/safeguarding detection or minimisation of child-authored essay text before transmission to Anthropic | DPL + Engineering | 2026-07-15 |
| GAP-DG-2 | 10(3) representativeness | **Persists (provenance now tagged).** AQA-only boundary table applied to all boards; `feedback-generator.ts:120` omits `board` so non-AQA cohorts still get AQA numbers tagged as proxy | Engineering | 2026-07-31 |
| GAP-DG-3 | 10(2)(f)–(g) | No bias examination performed at all; methodology in §5.1 not yet built/run | DPL + Engineering | baseline 2026-07-31 |
| GAP-DG-4 | 10, Art. 25 | "No training on student data" + ZDR/retention not evidenced (Anthropic DPA/ZDR to-be-confirmed) | DPL + Founder | 2026-06-15 |
| DOC-GAP-DG-5 | 10(2)(b) | No formal datasheets for mark-scheme/boundary provenance & fidelity review | Engineering + subject lead | 2026-07-31 |
| DOC-GAP-DG-6 | retention | No codified retention schedule for D1/D9 (B2C/B2B) | DPL | 2026-07-15 |

---

## Cross-references

- Technical file (Annex IV(2)(c) data requirements, GAP-IV-3): **doc 04**
- Accuracy gold standard shared with bias corpus: **doc 06**
- Risk management (bias risk register): **doc 02**
- Human oversight / over-reliance / numeric-grade suppression: **doc 07**
- Transparency (essay-content nuance to learners): **doc 10**
- DPIA reconciliation (matched-pair bias eval over-claim): **doc 15**; signed DPIA `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md`
- RoPA: `business-docs/compliance/rfc/ropa-v1.md`; Children's Code data-minimisation: `business-docs/compliance/childrens-code/02-policies/data-minimisation-for-children.md`
- Roadmap: **doc 16**
