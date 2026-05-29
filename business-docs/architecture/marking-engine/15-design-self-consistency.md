# 15 — Design: Self-Consistency Wrapper for High-Stakes Marks

Traces to: `00-architecture-source.md` §1.5 ("Self-consistency for high-stakes marks", "Confidence score", "Calibration") and `01-ielts-writing-task2-spec.md` §6 (Self-consistency), §5 (Validator), §8 (Calibration).

Scope: the **self-consistency wrapper** only — the component that runs the grounded marker N times for high-stakes scripts, compares per-criterion bands across runs, collapses agreement into a single result that surfaces a **range** instead of false precision when runs disagree, routes borderline/disagreeing scripts to a human, and emits an agreement signal that feeds the calibration harness. This doc does NOT design the marker call itself, the forced-tool schema, the validator's evidence-span check, or the feedback generator — those are separate design docs. This wrapper sits *around* the marker+validator and is invoked by the marking route.

---

## 1. Current state in THIS codebase

### 1.1 There is no self-consistency anywhere
Every LLM marker in the repo is a **single model call** per submission:
- `src/app/api/ielts/writing-feedback/route.ts` and `.../speaking-feedback/route.ts` — one `messages.create`, model proposes the overall band, code only falls back to the criteria mean when `|model − mean| > 1`.
- `src/app/api/cefr-assess/route.ts` (EAL) — one call.
- `src/app/api/mark/route.ts` and `src/app/api/marking/run/route.ts` (GCSE spine) — one call each; `temperature` is not even set on any of these calls.

No code samples the marker more than once, compares runs, computes a per-criterion spread, surfaces a band range, or uses cross-run agreement as a confidence signal. The objective Listening/Reading/mock scoring (`src/lib/ielts/bands.ts` `objectiveToBand`, `src/app/ielts/mock/marking.ts`) is deterministic question-counting and correctly needs no self-consistency.

### 1.2 Confidence is deliberately absent / nulled
`src/lib/marking/persistence.ts` writes `ai_confidence = NULL` on purpose ("we no longer fake confidence"). The DB column exists (`marking_submissions.ai_confidence DOUBLE, CHECK 0..1`) but is unused. `deriveUncertaintyFlags()` only ever emits `GRADE_INDICATIVE_ONLY` (a grade-boundary provenance flag, not a model-confidence signal). There is no per-criterion confidence and no `needs_human_review` field. Human review today is **structural**, not confidence-driven: `/api/marking/run` routes B2B marks to `teacher_review_required` and B2C to `ai_marked` draft regardless of agreement.

### 1.3 The reusable building blocks that already exist
- **Exact IELTS rounding** — `src/lib/ielts/bands.ts` `overallBand(bands[])` already implements the spec §5 rule (frac <0.25 → floor, <0.75 → +0.5, else +1) and `roundToBand(raw)` (nearest 0.5, clamped 0–9). **Reuse, do not reimplement.**
- **Agreement maths** — `src/lib/marker-qa/metrics.ts` `computeAgreement(pairs)` (exact-band / within-half / within-one / MAE) plus inter-marker / QWK / drift helpers. This is AI-vs-human agreement; the self-consistency wrapper needs the related but distinct **cross-run** (AI-vs-AI) spread, which should live beside it in `src/lib/marker-qa/` and reuse the same band-distance primitives.
- **Model constant** — `src/lib/anthropic-client.ts` exports `ANTHROPIC_MODEL = 'claude-sonnet-4-20250514'` (single constant; **no `claude-sonnet-4-6`, no `opus-4-8`, no effort-tier parameter** in the installed `@anthropic-ai/sdk@0.90.0`). The spec's `xhigh`/`opus-4-8` re-mark names are **not callable today**.
- **Provenance capture** — `src/lib/marking/versioning-capture.ts` `captureVersions()` records model/prompt/rubric version per mark, best-effort, never throws.
- **Compliance chain** — auth → premium → `checkMinorAIConsent` → `isAiOptedOutServer` → `rateLimit` → `contentSafetyCheck` → `logAiDecision` is already wired in the IELTS routes and must wrap the multi-run path exactly once (not once per run).
- **Calibration seed test** — `src/lib/marker-qa/metrics.test.ts` (Vitest, jsdom, globals, `@` alias). New SUTs follow the same harness.

### 1.4 No notion of "high-stakes" exists
Nothing in code classifies a submission as high-stakes vs low-stakes. The cost-control decision ("only run N× for high-stakes") therefore has no existing input to key off. It must be introduced.

---

## 2. Target state

A pure, testable wrapper — `runSelfConsistentMark` — that the marking route calls **instead of** a bare single marker call when (and only when) a script is high-stakes. Behaviour:

1. **N chosen by policy, not always-on.** Default `N = 1` (single run, no extra cost). High-stakes → `N = 3`. A borderline/disagreement signal can escalate to `N = 5` (one extra round). N is bounded and cost-gated (§4).
2. **Runs are real samples, not duplicates.** Each run calls the *same* grounded marker (same cached system block, same forced-tool schema) at a **non-zero temperature** so runs can legitimately differ. Run 1 may be `temperature 0` (the "best estimate") with runs 2..N at `temperature ~0.4`; or all runs at a single non-zero temperature — see §5.
3. **Per-criterion aggregation across runs.** For each criterion (TR/CC/LR/GRA) collect the integer bands from all runs, compute the **point estimate** (median, tie-break toward the lower band for conservatism) and the **spread** (max − min).
4. **Surface a RANGE, not false precision.** If any criterion's spread `> 1` band, the result carries an explicit per-criterion `bandRange {low, high}` and an overall **band range** (compute `overallBand` over the per-run low set and over the per-run high set). The single number is suppressed/marked indicative for those criteria.
5. **Cross-run agreement → confidence signal.** Convert spread into a `consistencyConfidence` 0–1 component (full agreement = high; >1 spread on any criterion = low). This combines (in the wider Validator+Confidence doc) with evidence-verification and descriptor-match into the final `overall_confidence`. This doc owns only the self-consistency component and its threshold.
6. **Route borderline to human.** If any criterion spread `> 1`, **or** the overall band range straddles a half-band, **or** the median sits exactly on a borderline half-band → set `needsHumanReview = true`. The wrapper does not itself perform the review; it sets the flag the route/persistence already understand (`teacher_review_required`).
7. **Feed agreement into calibration.** Persist the per-run bands, per-criterion spread, and `consistencyConfidence` so the calibration harness (`src/lib/marker-qa/`) can correlate low cross-run agreement with high AI-vs-human disagreement and tune N / thresholds / exemplars.
8. **Cost controls.** Self-consistency runs **only** for high-stakes scripts; N is capped; runs short-circuit early when the first runs already agree perfectly (optional early-exit, §4); the stable system block is cached so the marginal cost of each extra run is mostly output tokens, not re-sent rubric.

### 2.1 Shape of the wrapper output (additive, does not replace the marker result)
```
SelfConsistencyOutcome {
  runs: number;                         // actual runs executed (1, 3, or 5)
  temperatureProfile: number[];         // temperature used per run
  perCriterion: {
    name: 'TR'|'CC'|'LR'|'GRA';
    bands: number[];                    // one per run
    point: number;                      // median, lower-tie
    spread: number;                     // max - min
    bandRange?: { low: number; high: number }; // present only when spread > 1
  }[];
  computedOverall: number;              // overallBand(perCriterion.point[])
  overallRange?: { low: number; high: number }; // present when any spread > 1
  consistencyConfidence: number;        // 0..1, from spread
  needsHumanReview: boolean;            // self-consistency-driven gate
  agreementRecord: {...};               // persisted for calibration §8
}
```
The chosen marker result that the route returns is the **median run** (the run whose per-criterion bands are closest to the point estimates), so evidence spans and descriptor_matched come from one internally-consistent real run, not a Frankenstein average.

---

## 3. The gap

| Need (target) | Today | Gap to close |
|---|---|---|
| Run marker N× for high-stakes | Single call everywhere | New `runSelfConsistentMark` wrapper + a marker function it can call N times |
| Non-zero temperature | `temperature` unset on every call | Set temperature explicitly per run |
| Per-criterion cross-run spread | None | New cross-run spread function in `marker-qa/` |
| Surface a RANGE when spread >1 | Single number always | `bandRange`/`overallRange` in outcome + persisted JSON |
| Cross-run agreement → confidence | `ai_confidence` forced NULL | `consistencyConfidence` component (this doc) feeding the wider confidence number |
| Route borderline to human on disagreement | Structural routing only (B2B always reviewed) | Confidence/spread-driven `needsHumanReview` mapped to existing `teacher_review_required` |
| Feed agreement into calibration | No cross-run data stored | Persist per-run bands + spread; extend `marker-qa` to consume AI-vs-AI agreement |
| Cost control (only high-stakes, capped N) | No high-stakes concept | `isHighStakes` policy input + N policy + cap + early-exit |
| Reuse exact rounding | `overallBand` exists | Wire wrapper to `overallBand`/`roundToBand` (no reimplementation) |
| Model/effort reconciliation | `ANTHROPIC_MODEL` only; no opus/effort | Wrapper must use the **callable** model for all N runs; escalation "model" is N→5 same-model, not opus, until Phase 0 confirms an opus id |

---

## 4. Cost controls, temperature, and how N is chosen

### 4.1 Only high-stakes (the primary cost lever)
The wrapper takes an explicit `isHighStakes: boolean` (or a `stakes: 'low'|'high'` enum) decided by the **caller**, not inferred inside the wrapper. Definition for the IELTS MVP:
- **High-stakes** = a submission whose band is shown to the user as an authoritative score they will act on / that enters the calibration corpus / B2B graded class work — i.e. anything persisted to `marking_submissions` as a real mark.
- **Low-stakes** = formative/practice attempts, `/api/mark` ad-hoc B2C single marks where the product already frames output as indicative, retries, and any free-tier preview.

Low-stakes → `N = 1`, no temperature sampling beyond the single run → **zero added cost** vs today. This keeps the 3× token cost confined to the marks that actually need defensibility (spec §6 "for borderline or high-stakes scripts").

### 4.2 How N is chosen (policy ladder)
```
N policy (per submission):
  if !isHighStakes        -> N = 1                 // no self-consistency
  else                    -> N = 3                 // spec §6 baseline (2–3×)
  then, after 3 runs:
    if any criterion spread > 1  -> run 2 more     // escalate to N = 5
    else                          -> stop at 3
```
- **Baseline N = 3** matches spec §6 ("run the marker 2–3×"). Three is the smallest N that gives a median (robust to one outlier run) while keeping cost at 3× the single-run output.
- **Escalation to N = 5** (the only escalation available today) is reserved for scripts that *already* showed disagreement — so the extra 2 runs are spent only where they can resolve a tie or confirm a genuine range. This is the architecture-source §1.5 "N=3–5" band, gated by observed spread rather than applied to every script.
- **No opus escalation yet.** Spec §1 names `claude-opus-4-8` for re-marks, but it is not a callable id in the installed SDK (`anthropic-client.ts` exposes only `ANTHROPIC_MODEL`). Until Phase 0 confirms an opus id, "escalation" = more runs of the same callable model. The wrapper must read its model from a single constant so that swapping in an opus re-mark later is a one-line change, not a wrapper rewrite.

### 4.3 Early-exit (optional, additive cost saving)
If the first 2 high-stakes runs agree **exactly** on all four criteria, the third run is unlikely to change the median; an early-exit can stop at 2 and assign high `consistencyConfidence`. Default OFF for the MVP (run a full 3 so the calibration corpus has 3-sample variance data for every high-stakes script); turn ON later once N-tuning is calibrated. Documented here so the build step exposes the flag rather than hard-coding 3.

### 4.4 Temperature
- Single-run (N=1) low-stakes: `temperature 0` (deterministic, cheapest, current behaviour preserved).
- Self-consistency runs: **non-zero**, e.g. `temperature 0.4`. Rationale: temperature 0 would make repeated runs near-identical and self-consistency meaningless (architecture-source §1.5 explicitly says "at a non-zero temperature"). 0.4 is high enough to expose genuine band ambiguity, low enough to avoid wild variance that manufactures false disagreement.
- **Profile option:** run 1 at `temperature 0` (the canonical best-estimate, and the run preferred as the returned median-tiebreak) and runs 2..N at `0.4`. This anchors the point estimate to the deterministic read while still measuring spread. The `temperatureProfile[]` is recorded per run for calibration so we can later A/B "all-0.4" vs "0-then-0.4".
- Temperature is a single config constant (e.g. `SELF_CONSISTENCY_TEMPERATURE = 0.4`) so calibration can tune it without code changes.

### 4.5 Caching keeps the marginal run cheap
The marker's stable system block (rubric + descriptors + exemplars) must be sent with `cache_control` (designed in the marker-call doc). Given a cache hit, each additional run pays only output tokens + the (small) varying user block, so N=3 is far less than 3× the single-run *cost* even though it is 3× the *calls*. The wrapper depends on caching being present but does not implement it.

### 4.6 Latency
N parallel calls (Promise.all) keep wall-clock ≈ one call + slowest-run jitter, within the existing 50s client timeout and `maxDuration = 60`. Runs are independent so they parallelise cleanly; the wrapper must cap concurrency at N (3–5) and treat a single run's failure as "drop that run, proceed if ≥2 runs succeeded; else fall back to single-run result + flag".

---

## 5. Ordered build steps

Each step is code-free here (design only). All paths absolute.

### Step 1 — Cross-run spread maths (pure, unit-tested first)
- **Files:** `D:\Coding\english-hub\src\lib\marker-qa\self-consistency.ts` (new), `D:\Coding\english-hub\src\lib\marker-qa\self-consistency.test.ts` (new).
- **Content:** `crossRunSpread(bandsByCriterion)`, `medianBand(bands)` (lower-tie), `spreadToConfidence(maxSpread)` (e.g. 0 spread → 1.0; spread 1 → ~0.7; spread >1 → ≤0.5), and `surfaceRange(bands)` → `{low, high}`. Reuse `roundToBand` / `overallBand` from `src/lib/ielts/bands.ts` for any overall computation — do NOT reimplement rounding.
- **Depends on:** nothing (pure).
- **Acceptance:** Vitest unit tests prove: identical runs → spread 0, confidence 1.0, no range; one outlier band → median ignores it; spread >1 → `bandRange` present and `surfaceRange` returns correct low/high; `overallRange` computed via `overallBand` over low-set and high-set matches hand-worked examples; tie at half-band rounds to the lower band. Run `npm run test -- self-consistency`.

### Step 2 — The wrapper (orchestration, mock the marker)
- **Files:** `D:\Coding\english-hub\src\lib\marking\self-consistency-runner.ts` (new), `...\self-consistency-runner.test.ts` (new).
- **Content:** `runSelfConsistentMark({ markOnce, isHighStakes, config })` where `markOnce(temperature)` is an injected function returning one validated marker result (so the wrapper is testable without Anthropic). Implements the N policy ladder (§4.2), parallel runs, per-failure tolerance (§4.6), median-run selection, builds `SelfConsistencyOutcome` (§2.1) via Step 1 maths, sets `needsHumanReview` per §2 rule 6. Config holds `baselineN=3`, `escalateN=5`, `temperatureProfile`, `earlyExit=false`, `concurrencyCap`.
- **Depends on:** Step 1.
- **Acceptance:** Tests with a mocked `markOnce`: low-stakes → exactly 1 call, no range, `consistencyConfidence` defaulted, `needsHumanReview=false` (unless validator flag injected); high-stakes agreeing → 3 calls, single numbers, high confidence, no review; high-stakes with one criterion spread>1 → 5 calls, `bandRange` present, `needsHumanReview=true`; one run throwing → proceeds on ≥2; all-but-one throwing → single-run fallback + flag. Assert temperature passed to each `markOnce` matches the profile.

### Step 3 — Marker adapter for the wrapper (real model, single run)
- **Files:** `D:\Coding\english-hub\src\lib\marking\ielts-marker.ts` (new) — a single-run `markIeltsWritingOnce(input, temperature)` that performs the grounded forced-tool marker call + validator (evidence-span check, code-recompute) and returns one validated criterion-band result. Reuses `getAnthropicClient`, `ANTHROPIC_MODEL` (`src/lib/anthropic-client.ts`), the IELTS descriptors (`src/lib/ielts/band-descriptors.ts`), and `overallBand` (`src/lib/ielts/bands.ts`).
- **Content:** sets `temperature` from the wrapper argument (THIS is where temperature finally reaches the SDK); model = `ANTHROPIC_MODEL` for all runs; reads from a single model constant so a future opus re-mark is a one-line swap.
- **Depends on:** the separate marker-call + validator design docs (forced-tool schema, evidence check). This step *consumes* them; if they are not yet built, the adapter can wrap the existing prose-JSON IELTS route logic as an interim `markOnce`.
- **Acceptance:** integration test (mock Anthropic SDK) asserts: temperature is set on the request, model equals `ANTHROPIC_MODEL`, the returned shape satisfies `markOnce`'s contract, and the system block carries `cache_control`. Gated live smoke (`@vitest-environment node`, opt-in env) optional.

### Step 4 — Stakes policy + wire into the route
- **Files:** `D:\Coding\english-hub\src\lib\marking\stakes-policy.ts` (new, `isHighStakes(context)`), and the IELTS marking route (`D:\Coding\english-hub\src\app\api\ielts\writing-feedback\route.ts`, or the new grounded IELTS route if greenfield).
- **Content:** route computes `isHighStakes` (persisted graded attempt / B2B class / non-preview), then calls `runSelfConsistentMark` with `markOnce = (t) => markIeltsWritingOnce(input, t)`. Compliance chain (auth/consent/rate-limit/safety/audit) wraps the wrapper **once**; `logAiDecision` records `runs` and `consistencyConfidence`. Rate-limit cost accounting must count a self-consistency request as its N (so 3× runs ≈ 3× quota) to prevent cost blow-out.
- **Depends on:** Steps 2, 3.
- **Acceptance:** route test (mocked deps) asserts: low-stakes path issues 1 model call; high-stakes path issues 3 (or 5) and the response includes the range when present; opted-out / non-consenting / over-limit users never reach any run; audit log carries `runs` + confidence.

### Step 5 — Persist self-consistency for calibration
- **Files:** `D:\Coding\english-hub\src\lib\marking\persistence.ts` (extend `applyAiResult` to write `consistencyConfidence` into the existing `ai_confidence` column — now that confidence is *measured*, not faked — and store `agreementRecord`/per-run bands in `ai_result` JSONB or `ai_uncertainty_flags`), and possibly `D:\Coding\english-hub\supabase\migrations\<new>_self_consistency.sql` if a first-class column/table is preferred over JSONB. `deriveUncertaintyFlags` extended to emit a `SELF_CONSISTENCY_RANGE` flag when a range is surfaced. Set `status = teacher_review_required` when `needsHumanReview`.
- **Content:** the per-run bands + spread + confidence become the seed for AI-vs-AI agreement tracking; this is the data the calibration harness joins against human marks.
- **Depends on:** Step 2 (outcome shape), persistence area map.
- **Acceptance:** `persistence.test.ts` extended: `ai_confidence` now reflects `consistencyConfidence` (no longer forced NULL on the self-consistent path), range flag persisted, `needsHumanReview` → `teacher_review_required`. Existing "FORCES ai_confidence to null" test updated/replaced to reflect the new, *measured*-only policy (still never fabricated).

### Step 6 — Feed agreement into calibration
- **Files:** `D:\Coding\english-hub\src\lib\marker-qa\self-consistency.ts` (extend) + `D:\Coding\english-hub\src\lib\marker-qa\metrics.ts` (reuse `computeAgreement`). Add a calibration join that correlates low `consistencyConfidence` (cross-run, AI-vs-AI) with high AI-vs-human disagreement (existing `computeAgreement`) over the calibration set (spec §8).
- **Content:** output a report: does low self-consistency predict low human agreement? If yes, the spread threshold and N policy are validated; if not, raise/lower the spread→confidence mapping and the high-stakes N. This closes the §1.5/§8 calibration loop for the self-consistency component specifically.
- **Depends on:** Step 5 (persisted data) + a calibration set existing (separate doc / spec §8 step 2).
- **Acceptance:** test over a fixture of (per-run bands, human band) tuples asserts the correlation/report computes; documented threshold recommendation produced. No live dependency.

---

## 6. Risks

- **R1 — Cost blow-out if "high-stakes" is mis-scoped.** If every B2C mark is classified high-stakes, token cost triples across the board. Mitigation: default `isHighStakes=false`; explicit allow-list of high-stakes contexts; rate-limit counts N; dashboards on runs/day.
- **R2 — Temperature manufactures false disagreement.** Too high a temperature makes runs disagree for reasons unrelated to genuine band ambiguity, inflating human-review volume and cost. Mitigation: keep temperature ≤0.4, make it a tunable constant, and validate via Step 6 calibration that cross-run spread actually predicts human disagreement before trusting it.
- **R3 — False precision from averaging.** Returning a mean of disagreeing runs would hide uncertainty (the exact anti-pattern the spec warns against). Mitigation: never average — surface a RANGE when spread >1 and return one real internally-consistent run as the point result.
- **R4 — Confidence policy conflict.** The codebase deliberately sets `ai_confidence = NULL` ("never fake confidence"). Self-consistency now produces a *real* confidence. Mitigation: only write `ai_confidence` on the self-consistent path where it is measured; keep NULL where there is no multi-run evidence; update the existing test that pins NULL so the intent ("never *fabricated*") is preserved while measured values are allowed.
- **R5 — Model/effort mismatch.** Spec assumes `claude-sonnet-4-6 @xhigh` + `opus-4-8` re-mark; only `ANTHROPIC_MODEL='claude-sonnet-4-20250514'` is callable, with no effort tier. Mitigation: wrapper reads model from one constant; "escalation" = N→5 of the same model until Phase 0 confirms a real opus id; do not hard-code spec ids.
- **R6 — Latency / partial failures.** N parallel calls within a 50s/60s budget; a slow or failing run could stall or skew the result. Mitigation: `Promise.allSettled`, proceed on ≥2 successes, single-run fallback + review flag on mass failure, concurrency cap.
- **R7 — Borderline gate floods human reviewers.** If the spread/borderline rule is too sensitive, too many scripts route to humans, undermining the cost case for automation. Mitigation: tune the spread→review threshold against the calibration set (Step 6); start strict (only spread >1 OR straddling half-band) and relax only with evidence.
- **R8 — Determinism of objective skills.** Applying self-consistency to objective Listening/Reading/mock scoring would waste cost for zero benefit (they are deterministic). Mitigation: `isHighStakes`/wrapper is only invoked on subjective LLM marks; objective scoring bypasses it entirely.
- **R9 — Non-integer / malformed run output.** A run could return a non-integer or out-of-range band, corrupting median/spread. Mitigation: the validator (Step 3) rejects/clamps before the band reaches the wrapper; the wrapper treats a still-malformed run as a failed run (R6 path).
- **R10 — Cache dependency.** If the marker doesn't actually cache the system block, N runs cost ≈ N× full input tokens. Mitigation: wrapper documents the dependency; Step 3 acceptance asserts `cache_control` is present; cost monitoring catches regressions.
