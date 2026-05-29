# 17 — Design: Calibration Harness (scheduled AI-vs-human run + drift alerting + release gate + dashboard)

> **Scope.** The **calibration harness**: the human-marked calibration set as a
> core, growing asset; the *scheduled* run of the Marking Engine against that set;
> the agreement **metrics** (exact-band, within-half-band, per-criterion
> correlation); **drift alerting**; the **dashboard**; and the **gate** that
> blocks any prompt/pack/model change which regresses calibration. This is the
> cross-cutting control from architecture-source §2 ("Calibration against humans —
> the trust foundation"), §4 ("Internal marking-quality analytics"), and IELTS
> spec §8 + build-order step 7. **This harness must exist and be green before
> marking is exposed at scale** (arch §8 step 2; §9 "resist shipping
> marking-at-scale before calibration exists").
>
> **Relationship to the existing `evals/` harness.** This is *not* the same thing
> as the developer eval (`npm run eval:marking`), and the doc is explicit about
> the boundary in "Current state" below. The eval is a fast, CI/dev,
> baseline-file regression over a handful of GCSE gold *fixtures*. The calibration
> harness is the operational, scheduled, DB-backed, growing-corpus, drift-alerting
> control that gates production. They **share the same pure metric primitives**
> (`evals/stats.ts`) and the **same "run the real pipeline, never re-implement it"**
> discipline (`evals/harness.ts`), and the calibration harness should be built as
> an *extension* of that proven pattern, not a parallel stack.

---

## Current state in THIS codebase

There is **no calibration harness today**, and several of the pieces a later
agent might assume exist do **not** — so this section is deliberately precise.

**What exists and is reusable:**

1. **A real AI-vs-gold eval harness — `evals/` (GCSE only).**
   - `evals/run-eval.ts` (`npm run eval:marking` / `:update`) marks every gold
     fixture through the **real** pipeline and compares to expert truth. Two
     modes: *assert* (exit 1 if metrics drop below `evals/baseline.json`
     thresholds) and *update* (re-write the baseline). It calls Anthropic for real
     and "never silently passes on a degraded run" (network failure → abort).
   - `evals/harness.ts` exposes `markEssayForEval(fixture)` which runs the
     **same** `getMarkScheme → buildMarkingPrompt → Anthropic(ANTHROPIC_MODEL) →
     generateFeedback` path the API route uses — the load-bearing "test the real
     code, not a reimplementation" property the calibration harness must inherit.
   - `evals/schema.ts` — `GoldFixture` = `{ id, markSchemeId, questionId, essay,
     studiedText?, expectedAOMarks[], expectedGrade, notes? }`, loaded from
     `evals/fixtures/*.json`. This is **GCSE/AO-shaped** (AO marks + a 1–9 grade),
     **not** IELTS (no TR/CC/LR/GRA, no 0–9 half-band overall).
   - `evals/baseline.json` is the frozen comparison point with three thresholds:
     `minExactAgreement`, `minAdjacentAgreement`, `minQwk`. This is exactly a
     "baseline + regression gate" pattern, scoped to the dev loop.

2. **Pure agreement maths — `evals/stats.ts` (the metric core to reuse).**
   Exports `exactAgreement`, `adjacentAgreement(a,b,tol)`,
   `quadraticWeightedKappa`, **`pearson(a,b)`**, `meanAbsoluteError`,
   `summariseRun`. These are band/grade-agnostic numeric primitives. `pearson` is
   precisely the per-criterion-correlation primitive arch §2/IELTS §8 require.

3. **Paid-marker QA metrics — `src/lib/marker-qa/metrics.ts` (+ `metrics.test.ts`).**
   Pure functions over gold-graded human marks: `perMarkerGoldAccuracy`
   (exact / within-±1 / MAE / grade-QWK), `interMarkerAgreement` (pairwise +
   pooled), and **`markerDriftFlags`** (absolute-floor breach *or* recent-window
   regression vs a marker's own baseline). This is the **drift pattern to mirror**
   for AI-vs-human drift, but note it measures *human markers* against gold, uses
   **within-±1** (not within-half-band), and a `BAND_WIDTH_PCT`/raw-mark world —
   it is GCSE-shaped and not per-criterion-IELTS.

4. **Human-mark provenance to seed a calibration set.**
   `20260519_marker_drive.sql` adds `marking_submissions.is_gold` / `gold_expected`
   and `markers` / `marker_batches`; `teacher_moderations` + `final_teacher_mark`
   capture human marks and AI-vs-human deltas. These are the **source** of human
   gold marks. They are GCSE-shaped on the `marking_submissions` spine.

5. **Cron + alerting + provenance infrastructure (all present, reusable).**
   - Vercel cron is configured in `vercel.json` (`crons[]`) and routes live under
     `src/app/api/cron/*` guarded by a `CRON_SECRET` bearer token
     (`Authorization: Bearer ${CRON_SECRET}` → 401 otherwise). Pattern is uniform
     across all six existing cron routes.
   - `src/lib/email.ts` `sendEmail` is the existing notification transport (used by
     the weekly-report crons).
   - `model_versions` / `prompt_versions` / `rubric_versions` +
     `src/lib/marking/versioning-capture.ts` content-hash and capture
     model/prompt/rubric versions per mark (EU AI Act Art. 12) — the provenance to
     attribute each calibration run to an exact ruleset.

**What does NOT exist (do not assume it):**

- **No IELTS marking module.** No TR/CC/LR/GRA marker, no
  `submit_ielts_writing_assessment` tool, no `ielts_overall()` half-band
  computation, no IELTS knowledge pack. (Live IELTS routes
  `api/ielts/writing-feedback` etc. are prose-JSON, single-call, not the grounded
  engine.) The calibration harness's metrics are *per-criterion*; until the IELTS
  marker exists, the harness can only run end-to-end against the GCSE pipeline.
- **No calibration DB tables.** No `*_calibration` set table, no
  `*_marking_metrics` run-history table, no per-criterion correlation store. (The
  only DB-backed regression artefact today is the flat-file `evals/baseline.json`.)
- **No scheduled calibration run, no drift alert, no dashboard, no release gate**
  on prompt/pack/model changes. Pack/prompt/model edits today ship with *only* the
  dev-loop `eval:marking` GCSE fixture check — there is no growing-corpus,
  per-criterion, alerting, production-gating control.
- **No design docs 02–16** in `business-docs/architecture/marking-engine/` — only
  `00` and `01` exist at the time of writing. References below to "the IELTS
  marker", "the knowledge pack", "the calibration *set* store", and "version
  activation" point at components other design docs/agents own; this doc defines
  the **harness that consumes them** and states each dependency explicitly rather
  than assuming a sibling doc.

### Gap summary

| Capability (target: arch §2/§4, IELTS §8) | Today |
| --- | --- |
| Human-marked calibration set as a stored, growing, queryable asset | **Missing** (only flat-file GCSE fixtures; human gold lives un-curated on the spine) |
| Scheduled AI-vs-human run over that set (nightly/weekly) | **Missing** (eval is dev/CI, on-demand, fixture-based) |
| Per-criterion metrics (TR/CC/LR/GRA correlation) | **Missing** (eval is single GCSE grade; `pearson` primitive exists, unused for this) |
| Within-**half**-band agreement | **Missing** (eval uses exact + adjacent-±1; marker-qa uses ±1) |
| Drift alerting vs a frozen baseline | **Missing** for AI (`markerDriftFlags` does it for humans; eval only fails CI) |
| Dashboard of metrics over time, per version | **Missing** |
| Release gate blocking regressions to prod | **Partial** — `eval:marking` gates CI on GCSE fixtures, but not per-criterion, not on the growing set, not wired to version activation |
| Per-run provenance (pack/prompt/model) | Provenance tables exist; **not** linked to calibration runs |

---

## Target state

A **calibration harness** with five parts:

1. **The calibration set, as a core asset (storage, schema, growth).**
   A versioned, append-only store of real submissions marked by qualified humans,
   with anonymised text and the human criterion marks — *the* ground truth. It
   grows continuously (every approved human mark that meets curation criteria is a
   candidate). It is queryable by band coverage so we know where the set is thin.

2. **The scheduled AI-vs-human run.**
   Nightly (and on-demand for a candidate version), run the **real** Marking
   Engine pipeline over every essay in the active calibration set — reusing the
   `evals/harness.ts` "call the real marker" discipline — and pair each AI result
   with its human gold.

3. **The metrics.**
   For the overall band: **exact-band agreement** (|Δ| = 0) and
   **within-half-band agreement** (|Δ| ≤ 0.5). Per criterion: **Pearson
   correlation** (TR, CC, LR, GRA separately, via `evals/stats.ts` `pearson`),
   plus per-criterion exact / within-half rates and mean-abs error. All computed
   off the **code-recomputed** overall band (never the model's
   `proposed_overall_band`).

4. **Drift alerting.**
   Each run is compared to a **frozen, explicitly-promoted baseline** for the same
   set version, using both an **absolute floor** and a **no-material-regression**
   rule (mirroring `markerDriftFlags`' two-pronged logic). A breach sets
   `regressed = true` and fires an alert to the marking owners via `sendEmail`.

5. **The dashboard + the gate.**
   An admin dashboard plots every metric over time per pack/prompt/model version
   with the baseline overlaid. A fail-closed **gate** (`assertCalibrationGreen`)
   wired into version activation + CI ensures **no pack/prompt/model can mark at
   scale without a green calibration run** against the current set.

### Design principles

- **Run the real engine, never a re-implementation** — inherit `evals/harness.ts`.
  A shared marker entrypoint means "how we calibrate" == "how we mark".
- **Code-computed overall vs human overall.** Agreement is measured on the
  validator's code-recomputed overall band (IELTS §5 `ielts_overall`), not the
  model's self-reported number.
- **Baseline is explicit, immutable, and human-promoted.** Metrics are always read
  *relative to* a promoted baseline for a `set_version`; re-baselining is a logged
  deliberate act that must still clear the absolute floor.
- **Gate on regression AND an absolute floor.** Regression-only blocks the first
  good baseline; floor-only lets quality erode slowly. Enforce both.
- **Reuse, don't fork, the metric core.** `evals/stats.ts` (`pearson`, `QWK`,
  exact/adjacent, MAE) is the single source of agreement maths for dev eval *and*
  calibration. The half-band rule is the only genuinely new metric primitive.
- **Honest about set size.** Surface `n` and per-band coverage on every run;
  small-n / sparse-band runs are advisory (warn), not blocking, until coverage
  targets are met. The pre-scale gate is a *populated* set, not just green code.
- **Privacy by construction (arch §5).** The calibration set stores anonymised
  text + criterion marks only; the dashboard and alerts never surface raw essays
  or learner identifiers.

---

## Architecture

```
                  ┌───────────────────────────────────────────────┐
  cron (nightly)  │  GET /api/cron/calibration-run (CRON_SECRET)  │
  CI (candidate)──▶  or  npm run calibration:run -- --candidate    │
  admin (manual)  │                                                │
                  │ 1. loadCalibrationSet(active)        (set.ts)  │
                  │ 2. for each gold essay → runMarker()           │
                  │      via the SHARED real-pipeline entrypoint   │
                  │      (evals/harness.ts-style)                  │
                  │ 3. computeCalibrationMetrics(ai, human)        │
                  │      reuses evals/stats.ts (pearson/QWK/…)     │
                  │ 4. compareToBaseline() → regressed?  (gate.ts) │
                  │ 5. persist run row                  (persist)  │
                  │ 6. if regressed/coverage-low → alertDrift()    │
                  └───────────────┬───────────────────────────────┘
          ┌───────────────────────┼────────────────────────────┐
          ▼                       ▼                             ▼
  calibration_runs        sendEmail drift alert      /admin/marking/calibration
  (+ calibration_set)                                (trends + baseline overlay)
          ▲
          │ assertCalibrationGreen(triple) reads latest green run
   version activation (pack/prompt/model) ─── gated ──▶ prod marking at scale
```

### New code

- `src/lib/marking/calibration/metrics.ts` — per-criterion + half-band metrics on
  top of `evals/stats.ts` (import `pearson`, `quadraticWeightedKappa`,
  `exactAgreement`). Adds `withinHalfBand` + the IELTS half-band rounding helper
  (or imports it from the validator/`ielts_overall` once that exists).
- `src/lib/marking/calibration/set.ts` — calibration-set loader + coverage
  summary + version listing (read side of the set store).
- `src/lib/marking/calibration/run.ts` (+ `types.ts`) — runs the **shared real
  marker entrypoint** over the set, pairs AI vs human, returns a
  `CalibrationRunResult`.
- `src/lib/marking/calibration/baseline.ts` + `gate.ts` — `getBaseline`,
  `compareToBaseline`, `promoteBaseline`, `assertCalibrationGreen` (fail-closed).
- `src/lib/marking/calibration/alert.ts` — `alertDrift` via `sendEmail`.
- `src/app/api/cron/calibration-run/route.ts` — scheduled entrypoint
  (CRON_SECRET-guarded, matching the existing cron routes) + `vercel.json` entry.
- `scripts/run-calibration.ts` + `package.json` `"calibration:run"`.
- `src/app/admin/marking/calibration/page.tsx` + a read API — the dashboard.
- DB migration adding `calibration_set` (the asset) and `calibration_runs` (run
  history) — see schema below.

### Calibration set schema (the core asset)

A new migration `supabase/migrations/<date>_calibration.sql`:

```sql
-- The human-marked ground-truth corpus. Append-only, versioned, anonymised.
create table calibration_set (
  id              uuid primary key default gen_random_uuid(),
  set_version     text not null,            -- e.g. 'ielts_writing_2026.1'
  task_type       text not null,            -- 'IELTS_Writing_Task2' | GCSE scheme id
  pack_version    text,                     -- pack the human marked against (if any)
  -- anonymised inputs (arch §5: no learner identifiers, text de-identified)
  question_text   text not null,
  essay_text      text not null,
  task_meta       jsonb default '{}',       -- e.g. {academic_or_general, word_count}
  -- human ground truth (per-criterion + overall). Criterion-agnostic via jsonb.
  human_criteria  jsonb not null,           -- {TR:7, CC:6, LR:7, GRA:6} OR {AO1:..}
  human_overall   numeric not null,         -- 0-9 half-band (IELTS) / 1-9 (GCSE)
  marker_count    int not null default 1,   -- how many humans marked it
  reconciled      boolean not null default false, -- multi-marker reconciled?
  source          text not null,            -- 'expert_panel' | 'moderated_teacher' | ...
  active          boolean not null default true,
  created_at      timestamptz not null default now()
);
create index on calibration_set (set_version, active);
create index on calibration_set (task_type);

-- One row per scheduled/candidate run = the harness output + history.
create table calibration_runs (
  id                 uuid primary key default gen_random_uuid(),
  run_at             timestamptz not null default now(),
  set_version        text not null,
  task_type          text not null,
  pack_version       text,
  prompt_version_id  uuid,                  -- FK prompt_versions
  model_version_id   uuid,                  -- FK model_versions
  n                  int not null,
  coverage           jsonb not null,        -- per-band counts + meetsTarget
  exact_band_rate    numeric,
  within_half_rate   numeric,
  mean_abs_overall   numeric,
  criterion_metrics  jsonb not null,        -- {TR:{r,exact,withinHalf,mae}, ...}
  is_baseline        boolean not null default false,
  regressed          boolean not null default false,
  below_floor        boolean not null default false,
  failures           jsonb default '[]',    -- human-readable breach reasons
  notes              text
);
create index on calibration_runs (set_version, run_at desc);
create unique index on calibration_runs (set_version)
  where is_baseline;                        -- at most one baseline per set version
```

`human_criteria` is `jsonb` (not fixed columns) deliberately so the **same set
store serves IELTS (TR/CC/LR/GRA) and GCSE (AO1…) and future boards** — the
criterion *names* live in data, matching arch §1.2 "specialization lives in data".

### Calibration-set growth (how the asset compounds)

- **Seed:** load expert-marked essays (IELTS first) as `source='expert_panel'`,
  one row per essay, `reconciled=true` where ≥2 markers agree.
- **Continuous growth:** an ingestion path promotes qualifying human marks into the
  set — e.g. `teacher_moderations` / `final_teacher_mark` rows where a moderated
  human mark exists and the submission is consented + anonymisable (reuse the
  Smart-IP anonymiser; arch §5). Candidates are reviewed before insertion so the
  set stays high-quality (a wrong "gold" mark poisons the gate).
- **Versioning:** `set_version` is bumped when the set composition changes
  materially; the baseline is tied to a `set_version`, so growing the set forces a
  conscious re-baseline rather than silently moving the goalposts.
- **Coverage targets:** ≥50 essays per active set, with each populated band
  (IELTS 4–9) having ≥5 essays — surfaced on every run; the pre-scale gate.

### Tolerances (initial — tune after the first real baseline)

```ts
export const CALIBRATION_TOLERANCES = {
  absolute: {
    minWithinHalfRate: 0.80,   // ≥80% of essays within 0.5 band overall
    minExactBandRate:  0.45,   // ≥45% exact overall band
    minCriterionR:     0.60,   // each of TR/CC/LR/GRA Pearson r ≥ 0.60
    maxMeanAbsOverall: 0.45,   // mean abs overall band error ≤ 0.45
  },
  regressionVsBaseline: {
    maxWithinHalfDrop: 0.03,
    maxExactBandDrop:  0.05,
    maxCriterionRDrop: 0.05,
    maxMeanAbsRise:    0.05,
  },
} as const
```

---

## Build steps (ordered)

> Each step names the files it touches and its acceptance/verification criteria.
> Steps 1–4 are the harness core; 5–7 add schedule/alert/dashboard; 8 wires the
> gate; 9 is the first real baseline (the pre-scale gate). **No production marking
> at scale before step 9 is green.** Steps 1–2 and the set-store parts of 3 can be
> built against the GCSE pipeline today; the *per-criterion IELTS* numbers only
> become real once the IELTS marker (other docs) exists — call that out in step 3.

### Step 1 — Per-criterion + half-band metric layer

- **Files:** `src/lib/marking/calibration/metrics.ts` (new) +
  `metrics.test.ts` (new). Imports `pearson`, `quadraticWeightedKappa`,
  `exactAgreement` from `evals/stats.ts` (do **not** re-implement them).
- **Builds:** `computeCalibrationMetrics(pairs)` where each pair carries the AI's
  per-criterion bands + code-recomputed overall and the human per-criterion bands
  + overall. Returns `{ n, exactBandRate, withinHalfRate, meanAbsOverall,
  criterionMetrics: { <name>: { r, exactRate, withinHalfRate, mae } } }`. The
  **only** new primitive is `withinHalfBand(a,b) = |a−b| ≤ 0.5`; the half-band
  rounding helper is shared with the validator's `ielts_overall` (import it; do not
  duplicate the rounding rule).
- **Acceptance:** unit tests: perfect agreement → all rates 1, every `r` = 1;
  fixture vectors → expected exact/within-half/`r` to 3 dp; off-by-0.5 counted in
  within-half but not exact; empty input → `n:0`, null/0 correlations. `npm test`
  green. A test asserts `pearson`/`QWK` come from `evals/stats.ts` (import, not
  copy).
- **Depends on:** `evals/stats.ts` (exists); the `ielts_overall` half-band helper
  (validator doc) — until that lands, inline a clearly-marked half-band rounder to
  be replaced.

### Step 2 — Calibration set store + loader

- **Files:** `supabase/migrations/<date>_calibration.sql` (new — `calibration_set`
  + `calibration_runs` above); `src/lib/marking/calibration/set.ts` (new) +
  `set.test.ts` (new).
- **Builds:** `loadCalibrationSet(svc, { setVersion, taskType })` → active rows via
  the service-role Supabase client (mirroring `persistence.ts` access);
  `summariseCoverage(rows)` → `{ perBand, n, meetsCoverageTarget }`;
  `listCalibrationSetVersions(svc)` for the dashboard.
- **Acceptance:** migration applies idempotently; the unique-baseline-per-set index
  exists; with a mocked Supabase client the loader returns parsed rows and a
  correct coverage summary (≥50 total, ≥5 per populated band); empty set →
  `n:0`, no throw.
- **Depends on:** Step 1 not required; provenance tables already migrated.

### Step 3 — Calibration runner (real pipeline over the set)

- **Files:** `src/lib/marking/calibration/run.ts` (new), `types.ts` (new),
  `run.test.ts` (new). Reuses the `evals/harness.ts` discipline: call the **one
  shared marker entrypoint** the API route uses. For GCSE that is the existing
  `getMarkScheme → buildMarkingPrompt → Anthropic → generateFeedback` path
  (`markEssayForEval` is the template). For IELTS, call the IELTS marker entrypoint
  once it exists (extract it to a lib fn so route + eval + calibration share it).
- **Builds:** `runCalibration({ svc, setVersion, taskType, packVersion,
  promptVersionId, modelVersionId, dryRun })`: marks each gold essay with the
  **candidate** pack/prompt/model, pairs AI vs human, calls
  `computeCalibrationMetrics`, returns a `CalibrationRunResult` (metrics + version
  ids + `n` + coverage). Bounded concurrency (respect rate limits / cost). `dryRun`
  skips persistence.
- **Acceptance:** with the marker entrypoint mocked, a 6-essay fixture set produces
  a `CalibrationRunResult` matching hand-computed metrics; asserts the candidate
  pack/prompt/model are the ones passed to the marker; never reads/writes live
  submission tables; concurrency is bounded. A smoke assertion confirms the
  calibration runner and the live route resolve to the **same** marker function.
- **Depends on:** Steps 1, 2; the shared marker entrypoint (GCSE exists; IELTS per
  marker doc).

### Step 4 — Persist run + baseline compare

- **Files:** `src/lib/marking/calibration/persist.ts` (new),
  `baseline.ts` (new), tests alongside.
- **Builds:** `persistRun(svc, result)` → insert a `calibration_runs` row (metrics
  → columns, `criterion_metrics`/`coverage` → jsonb). `getBaseline(svc,
  setVersion)` → the `is_baseline=true` row. `compareToBaseline(result, baseline,
  CALIBRATION_TOLERANCES)` → `{ regressed, belowFloor, failures[] }`.
  `promoteBaseline(svc, runId)` flips `is_baseline` (unique partial index enforces
  one per set). `regressed`/`below_floor`/`failures` written to the row.
- **Acceptance:** insert maps every metric to the right column; `compareToBaseline`
  emits a human-readable reason per breach for both floor and regression; promoting
  is idempotent and single-baseline-per-set (DB index + test); empty-baseline case
  (first run) handled (floor-only).
- **Depends on:** Steps 2, 3.

### Step 5 — Scheduled + manual trigger

- **Files:** `src/app/api/cron/calibration-run/route.ts` (new),
  `scripts/run-calibration.ts` (new), `package.json` (`"calibration:run"`),
  `vercel.json` (add a `crons[]` entry, e.g. `"0 3 * * *"`, mirroring the existing
  CRON_SECRET-bearer pattern in `weekly-parent-reports`).
- **Builds:** the cron route resolves the *currently active* pack/prompt/model,
  runs `runCalibration` over the active set, persists, compares to baseline, and
  calls `alertDrift` on regression/low-coverage. The script does the same for an
  arbitrary `--candidate` version (CI use).
- **Acceptance:** route returns 401 without `Authorization: Bearer ${CRON_SECRET}`
  (test); a mocked green run → 200, no alert; a mocked regressed run → persists
  `regressed=true` and calls the alert; `vercel.json` has the cron entry pointing
  at the route.
- **Depends on:** Steps 3, 4, 6.

### Step 6 — Drift alerting

- **Files:** `src/lib/marking/calibration/alert.ts` (new) + test. Uses the existing
  `src/lib/email.ts` `sendEmail` (do not add a new transport).
- **Builds:** `alertDrift(result, baseline, comparison)` → one digest listing which
  metrics regressed/fell below floor, by how much, current vs baseline, the
  pack/prompt/model under test, and a dashboard link; plus a softer coverage
  warning when `n < 50` or any populated band `< 5`. Mirrors the two-pronged logic
  of `markerDriftFlags` (absolute floor OR regression).
- **Acceptance:** alert fires only on regression/below-floor or coverage warning;
  payload includes the offending metrics + version ids; no alert on a clean,
  well-covered run.
- **Depends on:** Step 4.

### Step 7 — Dashboard

- **Files:** `src/app/admin/marking/calibration/page.tsx` (new) +
  `src/app/api/admin/marking/calibration/route.ts` (admin-gated read API, new).
- **Builds:** admin-only page reading `calibration_runs` (latest N per set version),
  plotting within-half-band, exact-band, per-criterion `r`, and mean-abs-overall
  over time with the baseline overlaid and `regressed` runs marked; shows per-band
  coverage; a "promote to baseline" action calling `promoteBaseline`.
- **Acceptance:** renders with seeded run rows; the read API denies non-admins
  (auth test); promote moves the baseline overlay; **no raw essay text or learner
  identifiers shown** (arch §5).
- **Depends on:** Steps 4, 5.

### Step 8 — The release gate (load-bearing)

- **Files:** `src/lib/marking/calibration/gate.ts` (new) + test; integrate into the
  version-activation/publish path (`prompt_versions.active`,
  `model_versions.is_active`, and the pack-publish step the pack doc owns); add a CI
  step (`.github/workflows/*` or the repo CI config) running
  `npm run calibration:run -- --candidate` that fails the job on `regressed` or
  `below_floor`.
- **Builds:** `assertCalibrationGreen({ svc, setVersion, packVersion,
  promptVersionId, modelVersionId })` → finds the latest `calibration_runs` row for
  that exact triple; **throws (fail-closed)** if none, or it is `regressed`, or
  `below_floor`. Activation/publish call it before flipping any version live.
- **Acceptance:** activating a pack/prompt/model with no run → rejected (test);
  with a regressed/below-floor run → rejected; with a green run → allowed; CI fails
  on a deliberately-regressed fixture run. Operationalises arch §2 "Nothing ships
  to prod that regresses calibration" and §9 "resist shipping marking-at-scale
  before calibration exists".
- **Depends on:** Steps 3, 4; the version-activation surface (pack/version docs).

### Step 9 — First real baseline + coverage to target (pre-scale gate)

- **Files:** data only — populate `calibration_set` (≥50 essays, IELTS bands 4–9,
  no populated band < 5) from expert-marked sources; run `calibration:run`; review
  the dashboard; `promoteBaseline` on the first acceptable run.
- **Acceptance:** an `is_baseline=true` `calibration_runs` row exists for the active
  set with `n ≥ 50`, coverage target met, all absolute floors passed; the gate
  (Step 8) is live and green for the current prod triple. **Only now is marking
  cleared to scale** (arch §8 step 2).
- **Depends on:** the IELTS marker + pack (other docs); Steps 1–8; expert-marked
  essays.

---

## How this gates changes to prompt / pack / model

1. **Author** a new immutable version (new `pack_version`, new `prompt_versions`
   row + hash, or new `model_versions` row) — never edited in place (versioning
   doc).
2. **Run** `calibration:run -- --candidate` against the active set with that exact
   triple (locally, in CI, or via the admin trigger).
3. **Compare** to the frozen baseline for that `set_version`; enforce both the
   absolute floor *and* no material regression (Step 4 tolerances).
4. **Block or promote.** CI fails and `assertCalibrationGreen` throws
   (fail-closed) if there is no green run for the triple. A green run (+ a human
   "promote") makes the version eligible to go active; `promoteBaseline` resets the
   comparison point only for a deliberate, reviewed improvement.
5. **Monitor.** The nightly cron re-runs the *active* triple, catching silent
   drift (model-side behaviour change, set growth) even with no code change, and
   alerts.

Calibration is the single chokepoint: prod can only ever run a pack/prompt/model
combination that has demonstrably agreed with human markers on the gold set.

---

## Risks

- **Set too small / unrepresentative → metrics lie.** With < 50 essays or sparse
  bands, exact-band and per-criterion `r` are noisy and a "green" run is not
  trustworthy. *Mitigation:* coverage surfaced + warned every run; small-n
  advisory until the target is met; Step 9 (a *populated* set) is the hard
  pre-scale gate.
- **Harness diverges from the prod path.** If the runner re-implements marking it
  can pass while prod regresses. *Mitigation:* Step 3 mandates the single shared
  marker entrypoint (the `evals/harness.ts` property) + a smoke test asserting the
  runner and live route call the same function.
- **No IELTS marker yet.** The per-criterion IELTS numbers are vapourware until the
  IELTS marker + `ielts_overall` exist. *Mitigation:* build Steps 1–8 against the
  GCSE pipeline first (criterion-agnostic via `human_criteria` jsonb), so the
  harness, gate, and dashboard are proven before IELTS lands and only the marker
  entrypoint swaps in at Step 9.
- **Model non-determinism inflates/deflates agreement.** Single-sample marks vary
  run-to-run; a "regression" may be noise. *Mitigation:* use the same
  self-consistency setting (validator/self-consistency doc) as prod for borderline
  essays; require a *material* regression beyond tolerance to block.
- **Gold marks themselves wrong / single-marker.** Human gold has error; a
  flagged "regression" may be the engine being right. *Mitigation:* prefer
  `reconciled=true`, `marker_count ≥ 2`; the dashboard shows per-essay
  AI-vs-human deltas so reviewers audit outliers before re-baselining.
- **Baseline ratchet erosion.** Repeated re-baselining hides slow decline.
  *Mitigation:* re-baselining is a deliberate, logged human act and must still
  clear the **absolute floor**, not merely "no regression vs the previous
  (already-degraded) baseline".
- **Cost / rate limits.** Running the full engine (incl. self-consistency) over
  50+ essays on every PR is slow and costly. *Mitigation:* PR CI keeps the fast
  `eval:marking` fixture check; the full real-model calibration runs nightly + on
  explicit version promotion, with bounded concurrency.
- **Two regression artefacts could drift apart.** `evals/baseline.json` (dev) and
  `calibration_runs` baseline (ops) measure different things on different data.
  *Mitigation:* keep them clearly separated by purpose (dev fixtures vs growing
  human set), share only `evals/stats.ts`, and document that the *ops* baseline is
  the production gate.
- **Privacy.** Calibration essays must be anonymised/consented before entering
  `calibration_set` (arch §5; reuse the Smart-IP anonymiser); the dashboard/alerts
  must never surface raw essays or identifiers. *Mitigation:* ingestion runs
  through the existing anonymiser + consent gates; dashboard shows metrics + ids
  only.
- **GCSE/IELTS metric mismatch in shared code.** `marker-qa/metrics.ts` uses
  within-±1 and raw-mark bands; reusing it naively mis-measures IELTS half-bands.
  *Mitigation:* reuse only the band-agnostic `evals/stats.ts` primitives
  (`pearson`/`QWK`/exact); the half-band rule is implemented once in Step 1 and
  shared with the validator.
