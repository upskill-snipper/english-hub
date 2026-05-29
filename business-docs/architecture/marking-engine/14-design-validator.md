# 14 — Design: Validator (the trust backstop)

> Component: **Validator + Confidence** (architecture §1.5, §2; IELTS spec §5, §6).
> Scope of this doc: the *code-side* validation layer that sits between the Marker
> (forced tool call, see `submit_ielts_writing_assessment`) and the Feedback
> Generator. It is the engine's anti-hallucination / anti-bad-arithmetic backstop:
> overall-band recompute, verbatim evidence verification, range/completeness checks,
> confidence computation + thresholds, and `needs_human_review` routing — including
> the **reject-and-rerun-once** behaviour on fabricated evidence spans.
>
> This is a **design doc only**. No code is changed in this phase.

---

## 0. Where this sits in the pipeline

```
Router → Knowledge Pack → Retrieval → Marker (forced tool call)
                                          │
                                          ▼
                              ┌───────────────────────┐
                              │   VALIDATOR (this doc) │
                              │  1. range/completeness │
                              │  2. evidence verify    │
                              │  3. overall recompute  │
                              │  4. confidence + route │
                              └───────────┬───────────┘
                                          │  validated assessment
                                          ▼
                                   Feedback Generator → persist + return
```

The Validator's contract:

- **Input**: the raw object returned by the Marker's forced tool call
  (`submit_ielts_writing_assessment`, shape per IELTS spec §4) **plus** the exact
  essay text that was sent to the Marker, **plus** a *rerun callback* the Validator
  can invoke once if it detects fabricated evidence.
- **Output**: a `ValidatedAssessment` — bands of record (criterion + overall computed
  in code), per-quote verification results, structured validation issues, an
  `overall_confidence` in [0,1], and a `needs_human_review` boolean with reasons.
- **Guarantee**: nothing downstream (feedback, persistence, the UI band) ever uses a
  number the model produced by arithmetic, or a quote the model invented.

---

## 1. Current state in THIS codebase

There is **no Validator module** today. The pieces that approximate one are scattered,
GCSE-shaped, and weaker than the spec on every axis. Verified by reading the files
below in this session.

### 1.1 What already exists and is directly reusable

- **Exact IELTS rounding is already implemented and correct.**
  `src/lib/ielts/bands.ts` exports:
  - `roundToBand(value)` — `frac < 0.25 → floor`, `frac < 0.75 → floor + 0.5`,
    `else floor + 1`. This is **byte-for-byte the spec §5.1 `ielts_overall` rule.**
  - `overallBand(bands: number[])` — mean of the array then `roundToBand`.
  The Validator MUST reuse these, not re-implement them. (One nuance: `overallBand`
  takes a generic array; the IELTS overall is specifically the mean of the four
  criterion bands TR/CC/LR/GRA. A thin wrapper `ieltsOverall(tr,cc,lr,gra)` should
  call `overallBand([tr,cc,lr,gra])` so the "exactly four criteria" contract is explicit.)

- **The "compute the headline number in code, never trust the model" pattern already
  exists for GCSE.** `src/lib/marking/grade-predictor.ts` `predictGrade()` is pure,
  deterministic, never calls the model, and its header explicitly cites §1.5/§5. The
  IELTS Validator follows the same shape, applied to band averaging instead of a
  percentage→grade boundary lookup.

- **Defensive parse + clamp + truncate pattern exists.**
  `src/lib/marking/feedback-generator.ts` clamps AO marks to scheme maxima, rounds,
  coerces strings, caps lengths. This is the *style* the Validator's range-check
  should match, but it is GCSE-AO-shaped and not reusable as-is.

### 1.2 What partially exists but is too weak

- **Overall cross-check (weak, wrong direction).**
  `src/app/api/ielts/writing-feedback/route.ts` `buildTaskFeedback()` computes the
  criteria mean and only overrides the model's `overallBand` **if it disagrees by more
  than 1 band**. The spec wants the opposite posture: the **code recompute is always the
  band of record**, and a model disagreement **> 0.5** is a *flag for review*, not a
  threshold for whether to trust the model. This logic must be inverted and moved into
  the Validator.

- **Human-review routing exists only as a status, not a confidence gate.**
  `marking_submissions.status` has `teacher_review_required`; `/api/marking/run`
  routes B2B marks there structurally (source-based, not confidence-based).
  `persistence.ts` `applyAiResult()` deliberately sets `ai_confidence = NULL`
  ("we no longer fake confidence") and `deriveUncertaintyFlags()` emits only
  `GRADE_INDICATIVE_ONLY`. There is **no** `overall_confidence < 0.7 OR any criterion
  < 0.6 OR any integrity flag → review` gate (spec §5.4).

### 1.3 What does not exist at all

- **No verbatim evidence-span verification** anywhere. The GCSE feedback-generator
  truncates evidence quotes to 200 chars; the IELTS route prompt merely *suggests*
  quoting. Nothing checks a quote is a substring of the essay. The spec's central
  anti-hallucination backstop (§5.2) is absent. **No `verifyEvidence(essay, spans)`
  unit, no reject-and-rerun, no fabrication→review path.**
- **No range/completeness check** for the four-criterion 0–9 integer schema (the GCSE
  path checks AO-mark maxima, a different shape).
- **No confidence computation** (model-reported × evidence factor × consistency factor).
- **No self-consistency** multi-run / spread machinery.
- **No `needs_human_review` field** on the result (only a status enum + uncertainty
  flags jsonb).
- **No error taxonomy validation** (the §4 20-value enum has no SUT and no guard).
- **No IELTS marking lib at all** — `src/lib/ielts/` is objective scoring + descriptors
  + a thin attempt store. The new Validator is greenfield code under a new namespace.

---

## 2. Target state

A pure, deterministic, **model-free** Validator module:

```
src/lib/marking/ielts/
  types.ts            # IeltsRawAssessment (marker tool output), ValidatedAssessment,
                      # CriterionName, ValidationIssue, ConfidenceBreakdown
  overall.ts          # ieltsOverall() wrapper over ielts/bands.ts; recompute + disagreement
  evidence.ts         # normaliseForMatch(), verifyQuote(), verifyAssessmentEvidence()
  range-check.ts      # criterion presence, integer 0–9, integrity_flags shape
  confidence.ts       # confidence formula + thresholds (§6)
  error-taxonomy.ts   # the fixed 20-value enum + isValidErrorType()
  validator.ts        # validateAssessment() orchestrator + reject/rerun-once policy
  index.ts            # barrel
```

Key properties:

1. **Pure & deterministic.** `validateAssessment(raw, essay, opts)` does no I/O except
   invoking the caller-supplied `rerun()` callback (and only at most once). It can be
   unit-tested entirely with fixtures — no DB, no Anthropic, runs under jsdom.

2. **Code is the band of record.** Criterion bands are taken from the model (they are
   not arithmetic), but each is **range-checked** and coerced to a valid integer 0–9.
   The **overall band is recomputed** from the four validated criterion bands via
   `ielts/bands.ts` rounding. The model's `proposed_overall_band` is used **only** for
   the disagreement flag.

3. **Every evidence quote is verified verbatim** (whitespace + case normalised
   substring match) against the exact essay sent to the Marker. Any miss is a
   **fabrication** → reject + rerun once → if still failing, route to human review and
   mark the offending quotes `verified: false` (do not silently drop — surface them).

4. **Confidence is computed honestly**, combining model-reported per-criterion
   confidence, an evidence factor, and a consistency factor (1.0 when single run).

5. **Routing is explicit**: `needs_human_review` with an array of machine-readable
   reasons, so persistence/UX can show *why* (and so analytics can aggregate review
   causes).

6. **Reconciles the "never fake confidence" posture.** Today `ai_confidence` is forced
   to NULL because the old number was a fabricated holistic guess. The Validator's
   confidence is a *defined, reproducible* function of verifiable signals (evidence
   verification + model-reported + spread), so it is legitimate to persist. This is a
   deliberate, documented reversal of the NULL policy **for the IELTS path only** (the
   GCSE path keeps NULL until it has the same machinery). See risk R7.

---

## 3. The gap (summary table)

| Spec requirement (IELTS §5/§6) | Today | Target |
|---|---|---|
| Overall band recomputed in code, model arithmetic distrusted | Weak: only overrides model if `>1` band off (wrong direction) | `ieltsOverall()` recompute = band of record; model used only for `>0.5` disagreement flag |
| Verbatim evidence verification + reject/rerun-once on fabrication | **Absent** | `verifyAssessmentEvidence()` + reject/rerun-once policy in `validator.ts` |
| Range-check (integer 0–9, all 4 criteria present) | **Absent** for IELTS shape | `range-check.ts` |
| Confidence (model × evidence × consistency) | **Absent** (NULL by design) | `confidence.ts` formula §6 |
| Self-consistency spread → lower confidence + range | **Absent** | optional multi-run hook; `consistency_factor` |
| `needs_human_review` gate (<0.7 / criterion <0.6 / any integrity flag / any unverified) | Status-only, source-based | explicit boolean + reasons in `ValidatedAssessment` |
| Error-taxonomy validation (20-value enum) | **Absent** | `error-taxonomy.ts` + guard test |

---

## 4. Detailed design

### 4.1 Types (`types.ts`)

```ts
export type CriterionName =
  | "task_response"
  | "coherence_cohesion"
  | "lexical_resource"
  | "grammatical_range";

export const CRITERIA: readonly CriterionName[] = [
  "task_response", "coherence_cohesion", "lexical_resource", "grammatical_range",
] as const;

export interface RawEvidence { quote: string; explanation: string; }

export interface RawCriterion {
  band: number;                 // model claims integer 0–9
  descriptor_matched: string;
  evidence: RawEvidence[];      // 1–3 expected
  confidence: number;           // 0–1
}

export interface RawIntegrityFlags {
  under_length: boolean;
  off_topic: boolean;
  likely_memorised: boolean;
  copied_from_prompt: boolean;
}

export interface IeltsRawAssessment {           // == marker tool output (spec §4)
  criteria: Record<CriterionName, RawCriterion>;
  errors: RawError[];
  integrity_flags: RawIntegrityFlags;
  proposed_overall_band: number;
  overall_confidence?: number;                  // model-reported, advisory only
  holistic_note: string;
}

export type ValidationIssueCode =
  | "MISSING_CRITERION" | "BAND_OUT_OF_RANGE" | "BAND_NOT_INTEGER"
  | "NO_EVIDENCE" | "TOO_MANY_EVIDENCE" | "EVIDENCE_FABRICATED"
  | "MISSING_INTEGRITY_FLAGS" | "INVALID_ERROR_TYPE"
  | "OVERALL_DISAGREEMENT" | "RERUN_EXHAUSTED";

export interface ValidationIssue {
  code: ValidationIssueCode;
  criterion?: CriterionName;
  detail: string;
  fatal: boolean;               // fatal → assessment rejected (after rerun policy)
}

export interface VerifiedEvidence extends RawEvidence { verified: boolean; }

export interface ValidatedCriterion {
  name: CriterionName;
  band: number;                 // validated integer 0–9 (band of record)
  descriptor_matched: string;
  evidence: VerifiedEvidence[];
  confidence: number;           // clamped 0–1
}

export type ReviewReason =
  | "low_overall_confidence" | "low_criterion_confidence"
  | "integrity_flag" | "unverified_evidence"
  | "overall_disagreement" | "high_consistency_spread"
  | "schema_rejected";

export interface ConfidenceBreakdown {
  meanCriterionConfidence: number;
  evidenceFactor: number;
  consistencyFactor: number;
  overall: number;              // product, clamped 0–1
}

export interface ValidatedAssessment {
  ok: boolean;                  // false ⇒ schema unrecoverable even after rerun
  criteria: ValidatedCriterion[];
  overallBand: number;          // CODE-RECOMPUTED — band of record
  proposedOverallBand: number;  // model arithmetic, for audit
  overallDisagreement: number;  // |overall - proposed|
  integrityFlags: RawIntegrityFlags;
  errors: ValidatedError[];     // taxonomy-validated; bad types dropped + flagged
  confidence: ConfidenceBreakdown;
  needsHumanReview: boolean;
  reviewReasons: ReviewReason[];
  issues: ValidationIssue[];
  reran: boolean;               // true if the rerun-once path was taken
}
```

### 4.2 Overall recompute (`overall.ts`)

```ts
import { overallBand } from "@/lib/ielts/bands";

export function ieltsOverall(tr: number, cc: number, lr: number, gra: number): number {
  return overallBand([tr, cc, lr, gra]);   // reuse spec-exact rounding
}

export function overallDisagreement(computed: number, proposed: number): number {
  if (!Number.isFinite(proposed)) return 0;  // model omitted/garbage → no penalty here,
                                             // schema check handles missing fields
  return Math.abs(computed - proposed);
}
```

- The Validator computes `overallBand` from the **validated** criterion bands (after
  range-check coercion), never from `proposed_overall_band`.
- `overallDisagreement > 0.5` ⇒ add `OVERALL_DISAGREEMENT` issue (non-fatal) and
  `overall_disagreement` review reason. Per spec §5.1 the recompute still stands as
  the band of record; disagreement only triggers review.

**Edge cases (be exhaustive):**
- A criterion that fails range-check and cannot be coerced (e.g. missing) → the
  overall **cannot** be computed honestly → schema is rejected (after rerun policy);
  do **not** average over three criteria.
- `proposed_overall_band` half-band like 6.5 vs computed 6.5 → disagreement 0, fine.
- `proposed` outside 0–9 → still just compute `|diff|`; if it makes diff > 0.5 it flags
  for review (a model that proposes 11 is exactly the kind of thing review should catch).

### 4.3 Evidence verification (`evidence.ts`)

This is the load-bearing anti-hallucination check. Be careful about normalisation —
under- or over-normalising both cause false results.

```ts
export function normaliseForMatch(s: string): string {
  return s
    .normalize("NFKC")            // unify unicode forms (e.g. fancy quotes' codepoints)
    .replace(/[‘’‛′]/g, "'")   // curly/prime → straight apostrophe
    .replace(/[“”″]/g, '"')          // curly → straight double quote
    .replace(/[–—−]/g, "-")          // en/em dash, minus → hyphen
    .replace(/\s+/g, " ")         // collapse all whitespace runs to single space
    .trim()
    .toLowerCase();
}

export function verifyQuote(essayNorm: string, quote: string): boolean {
  const q = normaliseForMatch(quote);
  if (q.length === 0) return false;            // empty quote is a fabrication
  return essayNorm.includes(q);
}
```

`verifyAssessmentEvidence(raw, essay)`:
1. Compute `essayNorm = normaliseForMatch(essay)` **once**.
2. For each criterion, for each evidence quote, set `verified = verifyQuote(...)`.
3. Return per-criterion verified arrays + a boolean `anyFabricated`.

**Edge cases (exhaustive):**
- **Empty / whitespace-only quote** → `verified: false` (fabrication). The model
  must quote *something* real.
- **Quote longer than the essay** → naturally fails `includes`.
- **Quote that is the whole essay** → passes (legit but useless; not a fabrication).
- **Ellipsis-joined quote** (`"the cat ... the mat"`) → would fail a single `includes`.
  v1 decision: **treat as fabrication** (spec says "lifted verbatim"); document that the
  Marker prompt must forbid ellipsis-spliced quotes. (A later v2 may split on `...` and
  verify each fragment; out of scope here, noted as a future option.)
- **Punctuation the model added** (e.g. trailing period not in essay) → normalisation
  does NOT strip punctuation, so this fails. Mitigation: the Marker prompt instructs
  "quote exactly, including/excluding trailing punctuation to match the source." We
  deliberately do **not** strip all punctuation in normalisation because doing so makes
  the check too loose (a fabricated quote with the same words in a different sentence
  could pass). Whitespace + case + smart-punctuation-unification is the chosen balance.
- **Diacritics / non-Latin scripts** (IELTS essays are English but candidates may use
  loanwords) → NFKC keeps base characters; we do **not** strip diacritics, to avoid
  false positives.
- **Case where the essay itself is empty** (should have been caught upstream by
  under_length, but defensive) → `essayNorm === ""`, every non-empty quote fails →
  all fabricated → schema rejected; this is correct behaviour.
- **HTML/markdown the model wrapped a quote in** → strip surrounding `**`, backticks,
  and matched leading/trailing quote chars *before* matching (a small unwrap step),
  because those are presentation artefacts, not claimed essay content. Document the
  exact unwrap set in code comments.

### 4.4 Range & completeness check (`range-check.ts`)

For each of the four `CRITERIA`:
- **Present** in `raw.criteria`? Missing → `MISSING_CRITERION` (fatal).
- `band` is a finite number, **integer**, in **0–9**?
  - Non-finite / missing → `BAND_OUT_OF_RANGE` (fatal).
  - Non-integer (e.g. 6.5) → spec §4 says criterion bands are integer in v1.
    Policy: **coerce by rounding to nearest integer**, emit `BAND_NOT_INTEGER`
    (non-fatal) so we don't reject a usable mark over a formatting slip, but record it.
    (Rounding, not floor — a 6.5 claim is genuinely "between 6 and 7"; nearest is the
    least-biased coercion. Document this clearly; it is a judgement call.)
  - Out of 0–9 after rounding → clamp to [0,9] **and** emit `BAND_OUT_OF_RANGE`
    (fatal) — a band of 11 means the model is confused; clamp for safety but reject so
    a human looks. (Clamp-and-reject, not clamp-and-pass: a wildly OOR band is a trust
    signal, not a typo.)
- `evidence`: length 0 → `NO_EVIDENCE` (fatal — spec requires 1–3); length > 3 →
  `TOO_MANY_EVIDENCE` (non-fatal, truncate to first 3).
- `confidence`: coerce to number, clamp [0,1]; non-finite → treat as 0 and let the
  confidence gate catch it (a missing confidence should *lower* trust, not raise it).
- `integrity_flags`: object present with all four boolean keys? Missing object or keys
  → `MISSING_INTEGRITY_FLAGS` (fatal — we cannot route safely without them; a missing
  integrity object could be hiding an off-topic essay). Coerce truthy/falsy to bool.

**Fatal vs non-fatal:** *fatal* issues mean the assessment is structurally untrustworthy
→ feeds the reject/rerun policy (§4.6). *Non-fatal* issues are recorded, may add review
reasons, but do not by themselves trigger a rerun.

### 4.5 Confidence (`confidence.ts`)

Implements spec §6 exactly:

```
overall_confidence = mean(criterion_confidences) * evidence_factor * consistency_factor
```

- `meanCriterionConfidence` = mean of the four validated, clamped criterion confidences.
- `evidenceFactor`:
  - `1.0` if **every** evidence quote across all criteria verified.
  - Otherwise scale down by the verified ratio, with a floor penalty. v1 formula:
    `evidenceFactor = verifiedQuotes / totalQuotes`, but **if any quote is unverified
    after the rerun policy, the assessment is already routed to human review** (§5.2),
    so in practice `evidenceFactor < 1` only co-occurs with `needsHumanReview = true`.
    Keep the proportional factor for the persisted confidence number's honesty.
  - If `totalQuotes === 0` (all criteria had evidence stripped) → schema already
    rejected; not reached.
- `consistencyFactor`:
  - `1.0` for a single run (default).
  - For multi-run (§5.3): `1.0` if max per-criterion spread ≤ 1 band; degrade linearly
    to a floor (e.g. `0.6`) as spread grows; if any criterion spread > 1 band, also add
    `high_consistency_spread` review reason and surface a band range to feedback.
- `overall` = product, clamped [0,1].

### 4.6 Orchestrator + reject/rerun-once (`validator.ts`)

```ts
export interface ValidateOptions {
  essay: string;
  rerun?: () => Promise<IeltsRawAssessment>;   // re-call the Marker once
  runs?: IeltsRawAssessment[];                  // optional self-consistency extra runs
  confidenceThreshold?: number;                 // default 0.7
  criterionFloor?: number;                      // default 0.6
}

export async function validateAssessment(
  raw: IeltsRawAssessment,
  opts: ValidateOptions,
): Promise<ValidatedAssessment>;
```

**Algorithm:**

1. **Range/completeness check** `raw`. If it has a **fatal schema** issue that is *not*
   evidence-related (missing criterion, OOR band, missing integrity flags, no evidence),
   we still proceed to step 2 only if the criteria/bands are usable; otherwise:
   - If `rerun` available and not yet used → call it once, restart from step 1 with the
     new `raw`, set `reran = true`. (One rerun total across both schema-fatal and
     evidence-fabrication causes — they share the single rerun budget.)
   - If rerun unavailable or already used → return `{ ok:false, needsHumanReview:true,
     reviewReasons:["schema_rejected"], issues:[…, RERUN_EXHAUSTED] }`.

2. **Evidence verification** against `opts.essay`. If `anyFabricated`:
   - If rerun budget remains → rerun once, restart from step 1 with new `raw`.
   - If exhausted → keep going but mark unverified quotes `verified:false`, add
     `EVIDENCE_FABRICATED` issues, add `unverified_evidence` review reason, and force
     `needsHumanReview = true`. **Do not reject the whole result** at this point — a
     human should see the mark *and* the flagged fabrication (more useful than a bare
     rejection, and matches spec §5.2 "route to human review").

   Rationale for the shared single-rerun budget: spec §5.2 says "re-run **once**".
   We interpret "once" as one rerun for the *whole* assessment, whatever the trigger,
   to bound cost/latency. Document this; it is a judgement call (R3).

3. **Overall recompute** via `ieltsOverall(tr,cc,lr,gra)` on validated bands.
   Compute `overallDisagreement`; if `> 0.5` add issue + review reason.

4. **Confidence** via `confidence.ts` (incorporating any `opts.runs` spread).

5. **Routing gate** (`needsHumanReview = true` if ANY):
   - `confidence.overall < confidenceThreshold` (0.7) → `low_overall_confidence`
   - any validated criterion `confidence < criterionFloor` (0.6) → `low_criterion_confidence`
   - any integrity flag true → `integrity_flag`
   - any unverified evidence remaining → `unverified_evidence`
   - `overallDisagreement > 0.5` → `overall_disagreement`
   - consistency spread > 1 band → `high_consistency_spread`
   - schema rejected → `schema_rejected`

6. **Errors**: validate each `errors[].type` against the taxonomy; drop invalid types
   and emit `INVALID_ERROR_TYPE` (non-fatal). Verify `errors[].quote` with the same
   evidence verifier; an unverified error quote is treated like unverified evidence
   (flag, do not silently keep a fabricated error example).

7. Return the fully-populated `ValidatedAssessment`.

### 4.7 Error taxonomy (`error-taxonomy.ts`)

Pin the fixed enum from architecture §2 / spec §4 (the §4 analytics depend on its
stability). The 20-value list (grammar.* × 7, lexical.* × 5, discourse.* × 4, task.* × 4)
is defined as a `readonly` tuple with an `isValidErrorType()` guard and a coverage test
that asserts exactly 20 values and no duplicates so the enum can't silently drift.
(The exact string values should be agreed with the Knowledge-Pack/Marker design docs so
all three components share one source of truth; this doc owns the *validation* of them,
not their canonical authoring — cross-reference the taxonomy design doc when it lands.)

---

## 5. Build steps (ordered)

Each step is independently testable; tests run under the existing Vitest config
(jsdom, globals, `@` alias). No route/DB wiring in this component's steps — that is the
integration layer's job (separate doc). All new code under `src/lib/marking/ielts/`.

### Step 1 — Types + IELTS overall wrapper
- **Files**: `src/lib/marking/ielts/types.ts` (new), `src/lib/marking/ielts/overall.ts` (new).
- **Do**: define all types in §4.1; implement `ieltsOverall()` + `overallDisagreement()`
  reusing `overallBand` from `src/lib/ielts/bands.ts` (do NOT re-implement rounding).
- **Acceptance**: `src/lib/marking/ielts/__tests__/overall.test.ts` — parametrised
  rounding table proving spec §5.1 boundaries: means {6.0→6, 6.24→6, 6.25→6.5,
  6.74→6.5, 6.75→7, 8.875→9, 0→0}; and `overallDisagreement(6.5, 7.0) === 0.5`,
  `(6.5, 7.5) === 1.0`. Test imports `overallBand` indirectly (asserts wrapper agrees
  with `ielts/bands` on 100 random 4-tuples).

### Step 2 — Evidence verification
- **Files**: `src/lib/marking/ielts/evidence.ts` (new).
- **Do**: `normaliseForMatch`, `verifyQuote`, `verifyAssessmentEvidence` per §4.3,
  including the unwrap step for markdown/quote-char wrapping.
- **Acceptance**: `evidence.test.ts` — verbatim match passes; whitespace-collapsed
  match passes (`"the   cat"` vs essay `"the cat"`); case-insensitive passes; smart-quote
  vs straight-quote passes; **empty quote fails**; **fabricated quote fails**;
  ellipsis-spliced quote fails; quote with model-added trailing period vs essay without
  → fails (documents the deliberate strictness); essay-empty → all fail.

### Step 3 — Range & completeness check
- **Files**: `src/lib/marking/ielts/range-check.ts` (new).
- **Do**: implement §4.4 with the fatal/non-fatal taxonomy.
- **Acceptance**: `range-check.test.ts` — all-valid → no fatal issues; missing
  `lexical_resource` → fatal `MISSING_CRITERION`; band 11 → clamped to 9 + fatal
  `BAND_OUT_OF_RANGE`; band 6.5 → coerced to 7 (round) + non-fatal `BAND_NOT_INTEGER`;
  empty evidence → fatal `NO_EVIDENCE`; 5 evidence → truncated to 3 + non-fatal
  `TOO_MANY_EVIDENCE`; missing `integrity_flags` → fatal `MISSING_INTEGRITY_FLAGS`;
  confidence `"high"`/NaN → coerced to 0.

### Step 4 — Error taxonomy
- **Files**: `src/lib/marking/ielts/error-taxonomy.ts` (new).
- **Do**: the readonly 20-value tuple + `isValidErrorType()`.
- **Acceptance**: `error-taxonomy.test.ts` — exactly 20 values, no duplicates,
  `isValidErrorType("grammar.subject_verb_agreement")` true, `isValidErrorType("made.up")`
  false. (Guard against silent drift, per the test-inventory gap.)

### Step 5 — Confidence
- **Files**: `src/lib/marking/ielts/confidence.ts` (new).
- **Do**: §4.5 formula; pure function of (criterion confidences, verified ratio,
  consistency spread).
- **Acceptance**: `confidence.test.ts` — all-verified single-run with mean 0.9 → 0.9;
  half quotes unverified → `evidenceFactor` 0.5 applied; spread > 1 band →
  `consistencyFactor < 1`; product clamped to [0,1]; mean of empty → 0.

### Step 6 — Validator orchestrator + reject/rerun-once
- **Files**: `src/lib/marking/ielts/validator.ts` (new), `src/lib/marking/ielts/index.ts` (new barrel).
- **Do**: §4.6 algorithm including the **shared single rerun budget**, routing gate,
  error-quote verification.
- **Acceptance**: `validator.test.ts` (the most important suite) —
  1. Clean valid assessment, all evidence real, confidences 0.9 → `ok:true`,
     `needsHumanReview:false`, `overallBand` = code recompute, `reran:false`.
  2. Fabricated evidence + `rerun` returning a clean assessment → `reran:true`,
     final `needsHumanReview:false`, rerun invoked **exactly once**.
  3. Fabricated evidence + `rerun` returning still-fabricated → `reran:true`,
     `needsHumanReview:true`, `unverified_evidence` reason, unverified quotes have
     `verified:false`, result still returned (not nulled).
  4. Fabricated evidence + no `rerun` callback → `needsHumanReview:true`,
     `RERUN_EXHAUSTED`-equivalent path, rerun never called.
  5. `proposed_overall_band` off by 0.75 from recompute → `overall_disagreement`
     reason; overallBand still = recompute.
  6. Any integrity flag true (e.g. `off_topic`) → `needsHumanReview:true` even with
     perfect confidence + verified evidence.
  7. One criterion confidence 0.5 (< 0.6 floor) → review.
  8. Overall confidence 0.65 (< 0.7) → review.
  9. Schema-fatal (missing criterion) + rerun fixes it → `reran:true`, `ok:true`.
  10. Self-consistency: `opts.runs` with a 2-band spread on GRA → `consistencyFactor`
      down, `high_consistency_spread` reason, review.

### Step 7 — Documentation cross-links
- **Files**: this doc + a `README` note in `src/lib/marking/ielts/` (new).
- **Do**: document the deliberate reversal of the `ai_confidence = NULL` policy for the
  IELTS path and the single-rerun-budget interpretation, so the persistence/integration
  agent wires `ValidatedAssessment.confidence.overall` and `needsHumanReview` into
  `applyAiResult` without re-litigating those decisions.
- **Acceptance**: doc references the exact field names the integration layer must
  persist (`overall_confidence`, `needs_human_review`, `review_reasons`,
  `overall_band`, `proposed_overall_band`, per-quote `verified`).
- **Depends on**: Steps 1–6.

---

## 6. Risks

- **R1 — Evidence normalisation tuning (false reject / false accept).** Too-loose
  normalisation lets a fabricated quote whose words happen to appear scattered in the
  essay pass; too-strict rejects legitimate quotes over a stray apostrophe and wastes a
  rerun. Mitigation: the conservative middle in §4.3 (whitespace + case +
  smart-punctuation unification, NO full punctuation/diacritic stripping), plus the
  Marker prompt must instruct exact verbatim quoting and forbid ellipsis splices. Needs
  validation against the calibration set once it exists (spec §8).

- **R2 — Rerun cost/latency and loops.** A rerun is a second `xhigh` marking call.
  Mitigation: **hard single-rerun budget shared across all triggers**; the Validator
  never loops; if the second run also fails it routes to human review, it does not run
  a third time.

- **R3 — "Re-run once" interpretation.** Spec §5.2 says rerun once *on fabrication*;
  it is silent on schema-fatal cases. We chose one shared budget across both causes.
  If product wants schema-fatal to be a hard immediate reject (no rerun), that is a
  one-line policy change but must be agreed.

- **R4 — Criterion non-integer coercion (round vs floor).** Spec says criterion bands
  are integer in v1, but a model may emit 6.5. We round-to-nearest and flag. If the
  examiner-fidelity view is "never round up a borderline", switch to floor. Documented
  judgement call.

- **R5 — Confidence threshold calibration.** 0.7 / 0.6 are spec defaults, not yet
  empirically validated. Until the calibration set (spec §8) exists they will over- or
  under-route to review. Mitigation: thresholds are `ValidateOptions` parameters, not
  constants, so they can be tuned without code change and A/B'd against human agreement.

- **R6 — Self-consistency is optional and costs N× calls.** v1 supports it via
  `opts.runs` but does not mandate it (spec §9: borderline-only). Risk that confidence
  is over-stated for single-run marks (consistency_factor = 1.0). Mitigation: the
  evidence factor + integrity flags + model-reported confidence still gate; document
  that single-run confidence is "model-reported × evidence-verified" only.

- **R7 — Reversing the `ai_confidence = NULL` posture.** Persistence deliberately
  nulls confidence today ("we no longer fake confidence"). The IELTS Validator's
  confidence is a *defined function of verifiable signals*, not a model holistic guess,
  so persisting it is defensible — but the integration agent must not blindly back-fill
  the GCSE path, and any UI must label it as "AI confidence (auto-checks)" not a human
  guarantee. EU AI Act honesty: the number is reproducible and traceable to pack/model
  versions, which strengthens (not weakens) the §1.5/§9 posture.

- **R8 — Essay-text provenance for verification.** The Validator MUST verify against
  the *exact* essay string sent to the Marker (post any truncation), not a re-loaded DB
  copy that might differ by whitespace/encoding. Mitigation: the caller passes the same
  string it sent to the Marker; the integration doc must enforce this. If they diverge,
  verification produces false fabrications and floods review.

- **R9 — Error taxonomy must match Marker + Knowledge-Pack docs.** If the three
  components define different enum strings, valid errors get dropped as
  `INVALID_ERROR_TYPE`. Mitigation: one shared `error-taxonomy.ts` imported by all;
  this doc owns validation, the Marker/Pack docs own authoring — reconcile before code.
