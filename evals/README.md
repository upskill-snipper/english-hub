# Marking Accuracy / Robustness Evals — EU AI Act Article 15

This directory is a **defensible accuracy/robustness instrument** for the GCSE
marking feature (high-risk, Annex III(3)(b)), in support of **EU AI Act
Article 15**. It measures agreement between predicted and human-examiner grades
on a gold-standard set — **per board, per cohort and overall** — with
statistical rigor, and a CI gate that **refuses to certify accuracy from
synthetic data**.

> **The single remaining human handoff** is sourcing licensed, dual-marked,
> senior-adjudicated **real** scripts, running the live evaluation, and signing
> off the resulting figure. Everything else (metrics, slicing, gate, offline
> reproducibility, the LLM path) is built and CI-enforced. See
> [`datasets/REAL-DATA-PROTOCOL.md`](datasets/REAL-DATA-PROTOCOL.md).

## Two adapters — what is being measured depends on the adapter

`evals/adapters/`. The metrics/reporting code is adapter-agnostic.

| Adapter                       | `EVAL_ADAPTER`    | Measures                                                                                                                                                                                             | Network                                                                    |
| ----------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **examiner-replay** (default) | `examiner-replay` | The deterministic **grade-boundary model** only (replays examiner AO marks through production `predictGrade`). Isolates the AQA cross-board proxy concern (doc 06 §C). **Does NOT measure the LLM.** | Never                                                                      |
| **llm-marker**                | `llm`             | The **exact production marking path**: `buildMarkingPrompt` → `claude-sonnet-4-20250514` → `generateFeedback` → `predictGrade`. The only adapter that can produce an LLM-accuracy figure.            | **Offline by default** (fixture replay). Live only with `EVAL_LLM_LIVE=1`. |

### Offline-CI ↔ live-LLM split (Art. 15 evidence must reproduce offline)

The `llm` adapter is **offline and deterministic by default**:

- **Default / CI:** replays the raw model response from a recorded **fixture
  cache** (`evals/fixtures/<key>.json`), keyed by
  `sha256(model · systemPrompt · userMessage · markSchemeId · questionId · caseId)`.
  Any prompt/model/case change invalidates the fixture. A **missing fixture
  fails the run loudly** — it never silently falls back to the network.
- **Live:** `EVAL_LLM_LIVE=1` + `ANTHROPIC_API_KEY` performs the real Anthropic
  call. The SDK is dynamically imported **only** on this path, so CI never even
  loads it.
- **Record:** `EVAL_LLM_RECORD=1` (implies live) persists each live response to
  the fixture cache for future offline replay.

5 illustrative **synthetic** fixtures are shipped (`source:
synthetic-authored`). They prove the LLM pipeline works end-to-end offline; they
are **not** real model output and **cannot** certify accuracy. Re-seed with
`node_modules/.bin/vitest run --config evals/fixtures/seed.config.ts --disableConsoleIntercept`
(see `fixtures/README.md`).

## What it computes (`evals/stats.ts`, pure & unit-tested)

For every slice (overall, per board, per cohort):

| Metric                       | Definition                                                                                                                                                 |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Exact agreement**          | Fraction where predicted grade == examiner grade.                                                                                                          |
| **Adjacent (±1) agreement**  | Fraction within one grade step on `U,1,…,9`.                                                                                                               |
| **Quadratic Weighted Kappa** | Chance-corrected ordinal agreement; quadratic weights over the grade scale.                                                                                |
| **QWK 95% CI**               | **Percentile bootstrap** (2000 resamples, **seeded** mulberry32 → byte-for-byte reproducible; `null` when n<2).                                            |
| **Per-AO MAE**               | Mean \|predicted − examiner\| per Assessment Objective (id-matched).                                                                                       |
| **Mean grade error**         | Mean absolute grade-step distance.                                                                                                                         |
| **Grade-band confusion**     | 4×4 matrix over `Grade 1-3/4-5/6-7/8-9`.                                                                                                                   |
| **Test–retest variance**     | With `EVAL_RUNS=N` (N≥2): fraction of cases whose grade changes across runs + mean/max spread. Deterministic adapter ⇒ 0; informative for the sampled LLM. |

`stats.ts` has **no `@/` imports, no I/O, no `Math.random()`** and is covered by
`stats.test.ts` (sanity cases only, offline).

## Sub-group / disparate-impact slicing

The gold schema carries optional `cohort` attributes — `eal`, `send`,
`dialect`, `firstLanguage`, `isMinor` (coarse, **non-identifying** flags; not
personal data). The harness computes every metric per slice and a
**disparate-impact delta** vs the overall figure.

**Fairness threshold:** a cohort slice whose exact-agreement **or** QWK is more
than **`maxDisparityDelta` (0.10)** _worse_ than overall is **flagged**, and —
if that slice contains real data — fails the run. Rationale and value live in
`thresholds.json` and doc 05 §5.1.

## The synthetic-vs-real CI gate (non-negotiable)

Synthetic data can validate the _instrument_; it can **never** certify the
system's _accuracy_. Enforced in `run.ts`:

- A board with **zero real (`synthetic:false`) cases** has its numeric verdict
  **hard-suppressed**; the report prints a loud
  `NOT YET VALID FOR <board> — synthetic only` banner.
- A run is **`certifiable` only** with the **`llm` adapter AND real data**. A
  synthetic-only or boundary-only run can still **PASS as a mechanics check**,
  but is explicitly labelled `MECHANICS CHECK ONLY — NOT a certified accuracy
figure` and emits a `NOT A CERTIFIED ACCURACY RESULT` banner.
- Threshold gates apply only to slices with ≥1 real case (synthetic data cannot
  fail→pass-certify accuracy).
- The runner exits **non-zero** on any threshold/fairness/stability breach on a
  gated slice.

## Thresholds (ratchet-only) — `evals/thresholds.json`

| Threshold                 | Value  | Maps to                                            |
| ------------------------- | ------ | -------------------------------------------------- |
| `minExactAgreement`       | `0.60` | Yearly boundary shift makes exact match noisy.     |
| `minAdjacentAgreement`    | `0.95` | >1-grade error = material, user-visible harm.      |
| `minQwk`                  | `0.70` | "Substantial agreement" floor for ordinal marking. |
| `maxDisparityDelta`       | `0.10` | Disparate-impact flag threshold (doc 05 §5.1).     |
| `maxGradeInstabilityRate` | `0.15` | Max test–retest grade churn (LLM only).            |

**Ratchet rule:** values may only be **raised** as the verified real set grows.
Lowering one to make a failing run pass requires a written justification in the
PR and **Provider sign-off** (cj@upskillenergy.com). To finalise: re-ratify
`minQwk` against the examiner–examiner baseline QWK on the same real scripts.

## Drift & regression policy

- **CI gate:** fails the build below threshold on any gated slice. Release
  blocker for the marking feature.
- **Re-eval triggers:** change of the pinned model literal
  `claude-sonnet-4-20250514`; any prompt change (`prompt-builder.ts`); any
  change to the boundary table or `mark-schemes/**`; scheduled quarterly;
  a post-market signal. A model-literal change also invalidates all fixtures
  (re-record required).
- **Drift watch:** a QWK drop **> 0.05** vs the previous recorded run on an
  unchanged dataset is a regression to investigate before merge.
- **Provenance check:** the report prints how many cases used the **AQA
  cross-board proxy** boundary (`aqa-5yr-average-proxy`); should trend to zero
  as board-specific boundaries land.

## Datasets

- `datasets/gold-standard.example.jsonl` — original 5-case example (kept).
- `datasets/gold-standard.synthetic.jsonl` — **~28 synthetic** cases spanning
  AQA/Edexcel/OCR/WJEC Eduqas/Cambridge(0500/0990) × grades U–9 × the AOs, each
  `synthetic:true` with `provenance` and `cohort`. **Default dataset.**
- `datasets/REAL-DATA-PROTOCOL.md` — the exact spec for ingesting licensed,
  dual-marked, senior-adjudicated **real** scripts (schema, ≥150/board,
  GDPR/Children's-Code anonymisation for minors, sign-off matrix). **The human
  handoff.**

> **Data safety / GDPR:** never commit real candidate work or any child/student
> personal data. `studentAnswer` in shipped data is always a synthetic
> placeholder. Real scripts live in a separate access-controlled store and are
> loaded by path (`EVAL_REAL_DATASET=/secure/path.jsonl`) at eval time.

## Running it

```bash
# from D:\Coding\english-hub

# 1. Default: boundary baseline + stats unit tests (offline, deterministic).
npm run eval:marking

# 2. LLM marking path, OFFLINE (fixture replay — CI default for the model path).
EVAL_ADAPTER=llm npm run eval:marking

# 3. Pure stats tests already run alongside (evals/stats.test.ts).

# 4. REAL evaluation (human handoff — see datasets/REAL-DATA-PROTOCOL.md):
EVAL_REAL_DATASET=/secure/aqa-lit-p1-real.jsonl \
EVAL_ADAPTER=llm EVAL_LLM_LIVE=1 ANTHROPIC_API_KEY=sk-... EVAL_RUNS=3 \
npm run eval:marking
```

`npm run eval:marking` =
`vitest run --config evals/vitest.eval.config.ts --disableConsoleIntercept`.
It is **not** part of `npm test` (root include is `src/**/*.test.{ts,tsx}`).

### Env

| Var                 | Default           | Meaning                                                         |
| ------------------- | ----------------- | --------------------------------------------------------------- |
| `EVAL_ADAPTER`      | `examiner-replay` | `examiner-replay` \| `llm`                                      |
| `EVAL_DATASET`      | `synthetic`       | `synthetic` \| `example` \| absolute path                       |
| `EVAL_REAL_DATASET` | _(unset)_         | Absolute path to the secure real set (overrides `EVAL_DATASET`) |
| `EVAL_RUNS`         | `1`               | N≥1; N>1 enables test–retest variance                           |
| `EVAL_LLM_LIVE`     | _(unset)_         | `1` permits the real Anthropic call (llm only)                  |
| `EVAL_LLM_RECORD`   | _(unset)_         | `1` records live responses as fixtures (implies live)           |

## What a human still must do

1. **Source & licence** real GCSE/IGCSE scripts (≥150 per board/paper),
   dual-marked + senior-adjudicated, per `datasets/REAL-DATA-PROTOCOL.md`.
2. **Anonymise** (minors' data — UK GDPR + Children's Code) and store outside
   the repo; update DPIA/ROPA.
3. **Run the live LLM evaluation** (`EVAL_ADAPTER=llm EVAL_LLM_LIVE=1
EVAL_RUNS=3`) per board.
4. **Ratify** `minQwk` against the examiner–examiner baseline on those scripts.
5. **Sign off** the per-board accuracy figure (Provider accountable person) and
   transcribe it into doc 06 §A5 / doc 04 Annex IV / doc 13.

Until then the harness self-reports **NOT YET VALID** and never certifies a
number.
