# Marking Accuracy / Robustness Evals — EU AI Act Article 15

This directory provides **offline, deterministic** accuracy and robustness
evidence for the GCSE marking feature, in support of **EU AI Act Article 15**
(accuracy, robustness and cybersecurity of high-risk AI systems).

It measures how closely the grade predictor agrees with **human-examiner
grades** on a gold-standard dataset, sliced **per exam board** and **overall**.

> Scope note: this harness currently evaluates the **grade-boundary model**
> (the deterministic mark → grade mapping) by replaying examiner AO marks
> through the production `predictGrade`. It deliberately does **not** call the
> LLM marker — see _Adapters_ below. This isolates boundary-model validity
> (the Art. 15 concern flagged in review: the AQA table is applied cross-board)
> from LLM marking variance, and keeps the harness hermetic for CI.

## What it measures

For the gold set, per board and overall:

| Metric                             | Definition                                                                                                                                         |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Exact agreement**                | Fraction of cases where predicted grade == examiner grade.                                                                                         |
| **Adjacent agreement**             | Fraction within ±1 grade step on the ordinal scale `U,1,2,…,9`.                                                                                    |
| **Quadratic Weighted Kappa (QWK)** | Chance-corrected ordinal agreement vs examiner grades (1 = perfect, 0 = chance, can be negative). Standard quadratic weights over the grade scale. |

QWK is the headline metric because it is the standard for ordinal automated /
human marking agreement and penalises larger grade errors quadratically.

## Pass thresholds

Defined in `run.ts` (`THRESHOLDS`) and enforced **per board _and_ overall** —
a single weak board fails the run:

| Threshold              | Value  | Rationale                                                                                  |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------ |
| `minExactAgreement`    | `0.60` | Grade boundaries shift yearly; exact match on the first attempt is inherently noisy.       |
| `minAdjacentAgreement` | `0.95` | A prediction off by **more than one grade** is the materially harmful, user-visible error. |
| `minQwk`               | `0.70` | Conventional "substantial agreement" floor for ordinal human/automated marking.            |

These are **conservative initial gates**, not targets. They are intentionally
strict on adjacent agreement (the metric that maps to real student harm) and
moderate on exact agreement.

## Drift & regression policy

- **CI gate (regression):** the harness runs in CI and **fails the build**
  (non-zero exit) if any per-board or overall metric drops below threshold.
  Treat a failure as a release blocker for the marking feature.
- **Ratchet:** thresholds may only be **raised** as the verified gold set
  grows and metrics stabilise — never lowered to make a failing run pass.
  Lowering a threshold requires a written justification in the PR description
  and sign-off from the feature owner.
- **Drift watch:** when real per-board grade boundaries are sourced, re-run
  with the updated table and record overall + per-board QWK in the PR.
  A QWK drop of **> 0.05** vs the previous recorded run on an unchanged
  dataset is a regression and must be investigated before merge.
- **Provenance check:** the report prints how many cases were scored with the
  **AQA cross-board proxy** boundaries (`boundarySource: aqa-5yr-average-proxy`).
  This count should trend to zero as board-specific boundaries land. It exists
  so the validity caveat is auditable, not hidden.
- **Cadence:** re-run on every change to `src/lib/marking/**` and at minimum
  once per exam-results cycle (when awarding bodies publish new boundaries).

## Adapters (offline now, LLM later)

`run.ts` marks each case via a `MarkerAdapter` (`types.ts`). The default,
`examinerReplayAdapter`, is **pure and offline**: it feeds the examiner's AO
marks into `predictGrade` and returns the grade. No network, no LLM, fully
deterministic — safe for CI.

To later evaluate the **live LLM marker**, implement `MarkerAdapter` (e.g.
`llmMarkerAdapter`) that produces a grade from the model's output and pass it
to `runEval(adapter)`. The metrics, slicing and reporting code does **not**
change. Keep any networked adapter **out of the default CI path** — Art. 15
evidence must remain reproducible offline.

## Dataset

`datasets/gold-standard.example.jsonl` — **JSON Lines**, one case per line;
blank lines and `//` lines are ignored. Schema: see `types.ts`
(`GoldStandardCase`). The shipped cases are **synthetic placeholders** and
exist to exercise the harness and document the format.

> **Data safety / GDPR:** never commit real candidate work or any
> child/student personal data to this repo. `studentAnswer` must always be an
> obviously synthetic placeholder. Real examiner-verified cases should live in
> a separate, access-controlled store and be loaded by path at eval time, not
> checked in here.

### How to add cases

1. Obtain an **examiner-marked** response (per-AO marks + the awarded grade)
   from a verified, consented/licensed source. Strip all personal data.
2. Append one JSON object per line to a dataset file with the `types.ts`
   schema. Use a real `markSchemeId` from
   `src/lib/marking/mark-schemes` and real AO codes for that scheme.
3. Set `examinerMarks` to the human per-AO marks and `examinerGrade` to the
   human/awarding-body grade. Optionally set `questionMaxMarks`.
4. Keep `studentAnswer` a synthetic/redacted placeholder.
5. Re-run the harness; confirm metrics still pass and update any recorded
   QWK baseline per the drift policy above.

## Running it

No `tsx` runner is installed in this project, but **`vitest` is**, so the
harness is wrapped in a single `vitest` test that prints the report and exits
non-zero below threshold. It is **not** part of `npm test`: the root vitest
`include` is `src/**/*.test.{ts,tsx}` (this lives outside `src/`), so the
harness uses its own config, `evals/vitest.eval.config.ts`, which targets only
`evals/run.ts`.

```bash
# from D:\Coding\english-hub
node_modules/.bin/vitest run --config evals/vitest.eval.config.ts --disableConsoleIntercept
# or, via the added npm script:
npm run eval:marking
```

The command prints a per-board + overall table, the boundary-provenance
count, and `RESULT: PASS ✅` / `FAIL ❌`.
