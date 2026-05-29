# Design: Data & Analytics Layer — Per-Learner Model, Error Analytics, Next-Best-Action, Predictive Readiness, Marking-Quality QA

*Marking Engine §4 (architecture-source.md). Companion to the IELTS Writing Task 2 module (01-spec). De-identified cohort analytics per §5.*

Status: design only. No code is changed by this doc. It is the build plan for the Data & Analytics layer of the grounded Marking Engine.

---

## 0. Scope and traceability

This designs architecture-source §4:

- §4.1 Per-learner mastery over time (band + per-criterion + error profile from the taxonomy).
- §4.2 Error analytics: per-learner focus areas and per-cohort common errors, tagged to the fixed taxonomy (§2.1 / 01-spec §4 enum).
- §4.3 Adaptive next-best-action with spaced repetition (resurface weak areas until mastered).
- §4.4 Predictive readiness ("tracking to Band 7 in ~10 weeks"), calibrated against real outcomes.
- §4.5 Internal marking-quality analytics (AI-vs-human agreement, per-criterion reliability, drift). Internal only.
- §5 Privacy: de-identified cohort analytics, minimisation, retention/deletion, consent.

**Dependency.** This layer consumes the marker's structured, taxonomy-tagged output (01-spec §4 schema: `criteria[]` TR/CC/LR/GRA bands, `errors[]` tagged to the 20-value taxonomy, `integrity_flags`, `overall_confidence`, `needs_human_review`, `pack_version`). That IELTS marker **does not exist in code yet** (the live IELTS routes are prose-JSON, un-grounded — see §1.4). So analytics that need the new structured store are blocked on the marker/persistence work; the analytics-internal pieces (schema, aggregation maths, QA metrics, reconciliation) can be designed and partly built now against the existing GCSE/CEFR stacks.

---

## 1. Current state in THIS codebase

There is **no IELTS-criterion learner model**. There are instead **three separate, overlapping analytics stacks**, all keyed on the wrong unit for §4 (GCSE %/grade, game-skill accuracy, or CEFR placement level — none on IELTS bands + TR/CC/LR/GRA + a tagged error taxonomy). None of the §4 pieces I was told existed (an IELTS `buildLearnerProfile`, an error-type Leitner scheduler, `recommendNextAction`/`focusOn`, `estimateReadiness`, an `ielts_attempts`/`learner_profiles`/`marker_calibration` migration) actually exist. The reusable assets are real but GCSE/CEFR-shaped.

### 1.1 Stack A — school/teacher GCSE analytics (`src/lib/analytics/`)
- `index.ts` barrels: `aggregation.ts` (per-student/class/school rollups from Supabase `module_progress`/`assessment_attempts`/`practice_sessions`/`certificates`/`profiles`), `trajectory.ts`, `weak-areas.ts`, `recommendations.ts`, `export.ts`, `types.ts`.
- `trajectory.ts` — `calculateTrajectory()` (improving/stable/declining via a 2-window mean comparison) and `predictGrade()` (**GCSE 1-9**, percentage→grade via board boundaries). This is the closest existing "mastery over time" + "predictive" code, but it is **percentage/grade**, not IELTS band, and has **no per-criterion series** and **no calibration against outcomes**.
- `weak-areas.ts` — `identifyWeakAreas()`/`buildModuleScoreData()`: weak areas keyed on **module**, with critical/warning/minor severity. Not the §2.1 error taxonomy.
- `types.ts` — `StudentAnalytics`/`ClassAnalytics`/`WeakArea`/`Recommendation`/`TrendDataPoint`, all percentage/grade-based. (Note the known type-drift: `report-templates.ts`/`engagement-metrics.ts` import a *different* snake_case `StudentAnalytics` from `@/lib/types`.)

### 1.2 Stack B — game-skill learner profile (`src/lib/learning-profile/`)
- `taxonomy.ts` — a **game→skill** taxonomy (`Strand`/`Skill`/`Level`/`Audience`, `getGameTaxon`, `gamesForSkill`). This is NOT the §2.1 error taxonomy; it maps games to literacy skills.
- `profile.ts` — `buildLearningProfile()`: **client-only, reads localStorage** (`game-scores.ts`), produces per-skill recency-weighted `mastery`, `trend`, `classification`, strand rollups, and `nextSteps` (which game to play next). Pure but **client/guest-oriented**, game-based, not server-materialised, not criterion-based.
- There is **no** `spaced-repetition.ts` in this directory and **no** `buildLearnerProfile`/`CriterionMasterySnapshot`.

### 1.3 Other relevant existing pieces
- `src/lib/spaced-repetition.ts` — a generic **SM-2 flashcard** scheduler (`CardReviewState` {easinessFactor, interval, repetitions, nextReviewDate}, `calculateNextReview`, `getDueCards`, `getStudyQueue`). Card-based, **not** keyed on error types; reusable as the SR engine if generalised.
- `src/lib/recommendations/engine.ts` — `generateRecommendations()`: GCSE quiz/poem/study-plan recommender from localStorage `UserProgress`. `focus-on.ts` — `getFocusRecommendations()`: Supabase-backed focus list from `progress_poems`/`progress_games`/`progress_quizzes`/`reading_assessments`, **gated behind `profiles.personalised_recommendations` (Children's-Code default OFF)**. Both are content-rec engines, not taxonomy-driven NBA, but the gate pattern and shape are directly reusable.
- `src/lib/marker-qa/metrics.ts` (+ `metrics.test.ts`, the layer's only real test; consumed by `src/app/api/admin/marker-qa/route.ts` + `admin/marker-qa/page.tsx`) — **paid-human-marker** QA: `perMarkerGoldAccuracy`, `interMarkerAgreement`, `markerDriftFlags`, with exact/±1/MAE on **raw GCSE marks** and **grade-level QWK** via `evals/stats.ts`. This is the strongest §4.5/§8 asset, but it measures **human markers vs gold / each other**, on the **GCSE grade scale**, not **AI vs human on the IELTS TR/CC/LR/GRA band scale**. Reusable engine + admin surface, wrong axis.
- `src/lib/eal/cefr-aggregate.ts` — `summariseCEFRCohort(serviceClient, userIds)` over the append-only `progress_cefr` table (migration `20260516_progress_cefr.sql`): band distribution, skill averages, latest-by-user, monthly trend. Consumed by `/api/school/cefr` + `/api/parent/cefr`, degrades gracefully if unmigrated. This is a **working slice of §4 cohort analytics** and the **best existing template** for an IELTS cohort aggregate (criterion-level, de-identified, RLS), but keyed on CEFR placement rows, not tagged marking output.
- `src/lib/parent-reports/generate.ts` (+ test, + cron `api/cron/weekly-parent-reports/route.ts`) — pure, Children's-Code-compliant weekly parent report keyed on **AO1–AO4**, with strong minimisation (no essay body / rationale / predicted grade) and eligibility gates (age<13 / aiOptOut / PRIVATE). The compliance scaffolding is exactly what an IELTS report must reuse; the **AO1–AO4 axis is wrong for IELTS**.

### 1.4 Where IELTS data lands today, and the taxonomy gap
- IELTS marking today is the **un-grounded** `src/app/api/ielts/{writing,speaking}-feedback` routes (prose JSON, single call, model-holistic band, no tagged `errors[]`, no confidence, no human-review gate). Attempts persist via `src/app/api/ielts/attempts/route.ts` (best-effort, non-blocking) into the **Prisma `IELTSAttempt`** table (cuid id, `skill`, `band` Float 0–9, `taskType`, `promptId`, `responseText`, `criteria` JSON of CriterionFeedback, `createdAt`; `@@index([userId, skill])`) — a **thin practice-attempt log**, not the §2 structured schema: **no `errors[]`, no integrity flags, no `overall_confidence`, no `pack_version`/`model_version`, no error taxonomy.** The new structured store (Step 4) should extend/supersede this — it is the closest existing IELTS write-through but cannot back §4 as-is. The only other progress artefact is the Prisma `WeeklyReport` snapshot (`averageScore`/`projectedGrade`/`strengths`/`weaknesses` JSON), written by the parent-report cron — a report cache, not a learner model.
- The fixed §2.1 / 01-spec error taxonomy (20 values: grammar.* ×7, lexical.* ×5, discourse.* ×4, task.* ×4) exists **only as a string enum inside the spec doc**. There is **no shared taxonomy constant in code**, no `errors[]` column anywhere, and therefore **all §4 error analytics are currently impossible**.

### 1.5 What is entirely absent (the §4 surface)
- No per-criterion IELTS mastery-over-time model, no `CriterionMasterySnapshot`, no per-criterion trend.
- No code error taxonomy, no per-learner / per-cohort error aggregation on it.
- No spaced-repetition keyed on weak error types / criteria.
- No taxonomy-driven next-best-action or single-`focusOn` for IELTS.
- No IELTS-band readiness estimator, no readiness calibration loop.
- No AI-vs-human IELTS calibration store/metrics (only human-marker QA on GCSE grades).
- No analytics store for the structured mark (no `ielts_attempts`/`learner_profiles`/`learner_review_states`/`marker_calibration`; no de-identified IELTS cohort view).
- No nightly learner-model aggregation cron (only weekly report crons; aggregation is on-demand).

---

## 2. Target state

A single criterion-based analytics layer, driven by validated structured marks, that generalises across IELTS (now) and CEFR/GCSE (later) rather than forking a fourth stack:

1. **One shared error taxonomy constant** in code (the 20-value enum) — the single source of truth used by the marker tool schema, the validator, and every aggregation. This is the keystone; everything else depends on it.
2. **Structured analytics store**: each validated IELTS mark persisted with criterion bands, tagged `errors[]`, integrity flags, `overall_confidence`, `needs_human_review`, `pack_version`. A materialised per-learner model (criterion mastery + error stats), a spaced-repetition state per (learner, error-type/criterion), and an AI-vs-human calibration store.
3. **Per-learner model (§4.1)**: per-criterion band series with trend ("GRA 5.5→6.5 over 8 weeks"), plus the error profile. Materialised by a nightly incremental cron; read cheaply (no model calls).
4. **Error analytics (§4.2)**: per-learner top error types as focus areas; per-cohort common errors via a **de-identified** view/rollup with a **minimum-cohort-size** guard.
5. **Adaptive NBA + spaced repetition (§4.3)**: one prioritised next action (generalise `spaced-repetition.ts` SM-2 to schedule weak error-types/criteria; collapse to a single `focusOn`, mirroring the existing focus-rec discipline and consent gate).
6. **Predictive readiness (§4.4)**: IELTS-band trajectory → weeks-to-target + status + honest confidence, plus a prediction-vs-outcome calibration loop. Generalise `analytics/trajectory.ts` rather than duplicate it.
7. **Marking-quality QA (§4.5/§8)**: extend the `marker-qa` engine to an **AI-vs-human, per-criterion (TR/CC/LR/GRA)** axis with confidence distributions and **drift across pack/model versions**, surfaced on the existing admin QA dashboard. Internal/service-role only.
8. **Reconciliation**: keep Stack A (GCSE %/grade) and the game-skill profile as-is for their domains; build the IELTS learner model on the **CEFR-aggregate pattern** (`cefr-aggregate.ts` + `progress_cefr`) as the proven template; add an **IELTS-criterion parent-report variant** under the existing `parent-reports/generate.ts` gates instead of forcing AO1–AO4.
9. **Privacy (§5)**: no PII in analytics rows/aggregates; owner-RLS on learner tables; deny-by-default on calibration; de-identified cohort surfaces with min-cohort thresholds; cascade-delete + retention-cron coverage; `pack_version`/`model_version` provenance on every materialised profile.

---

## 3. The gap (current → target)

| Capability | Current | Target | Gap |
|---|---|---|---|
| Error taxonomy | only in the spec doc | one code constant, shared | **Create it** (keystone) |
| Structured store | `IELTSAttempt` thin log; no `errors[]` | attempts + learner model + SR + calibration tables | New migration(s) |
| Per-criterion mastery (§4.1) | GCSE %/grade trajectory; game-skill mastery; CEFR cohort | IELTS band per-criterion series + trend | New profile builder + materialisation |
| Per-learner errors (§4.2) | none on the taxonomy | top error types as focus | New aggregation |
| Per-cohort errors (§4.2) | CEFR cohort (placement), GCSE module weak-areas | de-identified IELTS error counts + min-cohort guard | New view/rollup (clone CEFR pattern) |
| Spaced repetition (§4.3) | SM-2 flashcard scheduler (card-based) | schedule weak error-types/criteria | Generalise SM-2; new state store |
| Next-best-action (§4.3) | GCSE/poem rec engines (gated) | one taxonomy-driven `focusOn` | New NBA on the profile; reuse gate |
| Predictive readiness (§4.4) | GCSE grade forecast only | IELTS-band weeks-to-target + calibration | Generalise trajectory; add calibration loop |
| Marking QA (§4.5) | human-marker gold/agreement on GCSE grades | AI-vs-human per-criterion + drift + confidence dist | Extend marker-qa to new axis |
| Cron | weekly reports; on-demand aggregation | nightly incremental learner-model rebuild | New cron |
| Reconciliation | 3 overlapping stacks + type drift | one criterion model; IELTS parent variant | Decide boundaries; new report path |
| Privacy (§5) | strong gates on existing paths | same gates wired into the new IELTS path | RLS/cascade/retention for new tables |

---

## 4. Ordered build steps

Steps 1–3 are independent and fixture-testable now. Steps 4+ depend on the IELTS marker/validator + persistence (01-spec) emitting the structured result.

### Step 1 — Shared error-taxonomy constant + types (keystone)
- **Files:** `src/lib/marking/error-taxonomy.ts` (new), `src/lib/marking/error-taxonomy.test.ts` (new).
- **Work:** Export the 20-value enum as a `const` tuple + `ErrorType` union, `ERROR_CATEGORY` map (grammar/lexical/discourse/task), learner/teacher labels, and an optional micro-lesson slug map. This is imported by the marker tool schema (01-spec §4), the validator, and every aggregation here.
- **Depends on:** none.
- **Acceptance:** a guard test asserts exactly the 20 spec strings, that every value has a category + label, and that the array matches the order/contents of the 01-spec enum. Fails if the enum drifts from the spec.

### Step 2 — Predictive readiness engine (§4.4), criterion-generic
- **Files:** `src/lib/analytics/readiness.ts` (new), `src/lib/analytics/readiness.test.ts` (new). Reuse the least-squares slope helper already in `analytics/recommendations`/`focus-on` (extract a shared `linearSlope`).
- **Work:** `estimateReadiness(history: {date, overallBand}[], targetBand, now)` → `{ currentBand, targetBand, ratePerWeek, weeksToTarget|null, status: 'achieved'|'on_track'|'slow'|'stalled', confidence }`. `weeksToTarget = null` when rate ≤ 0; `achieved` when current ≥ target; confidence from sample size + residual variance. Honest about small N.
- **Depends on:** none (band-agnostic; testable with synthetic histories).
- **Acceptance:** parametrised tests — improving→finite weeks + on_track; flat→null + stalled; at-target→achieved; <3 points→low confidence; no NaN/Infinity.

### Step 3 — Marking-QA: AI-vs-human per-criterion axis + drift + confidence (§4.5)
- **Files:** `src/lib/marker-qa/ai-agreement.ts` (new), `src/lib/marker-qa/ai-agreement.test.ts` (new). Reuse `evals/stats.ts` (QWK/exact) and the patterns in `marker-qa/metrics.ts`.
- **Work:** `aiVsHumanAgreement(pairs)` per criterion (TR/CC/LR/GRA) and overall: exact-band, within-half-band, MAE, signed bias (ai−human), QWK on the 0–9 band scale. `confidenceDistribution(confidences)` histogram. `driftSeries(pairsByPeriod)` keyed on pack/model version or week to flag agreement/bias regression. All pure.
- **Depends on:** Step 1 only for criterion naming (can stub).
- **Acceptance:** tests — perfect pairs→exact 1/bias 0; biased pairs→correct signed bias; drift detected when a later period crosses a threshold; histogram sums to N; empty→zeros, never NaN.

### Step 4 — Analytics store migration (structured marks + learner model + SR + calibration)
- **Files:** `supabase/migrations/2026XXXX_ielts_analytics.sql` (new); mirror shapes into `prisma/schema.prisma` (access via Supabase, per the marking-spine convention).
- **Work:** Tables — `ielts_attempts` (user_id, prompt_id, criterion_bands jsonb, overall_band, errors jsonb tagged to the taxonomy, integrity_flags jsonb, overall_confidence, needs_human_review, pack_version, model_version, created_at); `learner_profiles` (PK user_id, criteria jsonb, error_stats jsonb, submission_count, last_updated); `learner_review_states` ((user_id, error_type) SR boxes); `marker_calibration` (submission_id, criterion, ai_band, human_band, pack_version, model_version, decided_at). Owner-RLS on learner tables; **deny-by-default (no learner SELECT) on `marker_calibration`**; a de-identified `ielts_cohort_error_counts` view (pack_version, error_type, occurrences — **no user_id, no essay**). Idempotent. Clone the RLS/grant patterns from `20260516_progress_cefr.sql`.
- **Depends on:** Step 1.
- **Acceptance:** migration applies idempotently; RLS verified (cross-user read denied, calibration not readable by learners); cohort view exposes only the three non-identifying columns.

### Step 5 — Persistence adapter (DB ↔ pure libs)
- **Files:** `src/lib/marking/learner-store.ts` (new), `src/lib/marking/learner-store.test.ts` (new).
- **Work:** Service-role functions: `loadAttempts(svc,userId,since?)`, `upsertLearnerProfile`, `load/upsertReviewStates`, `insertCalibrationPairs`, `cohortErrorCounts(svc,packVersion?,minCohort)`. Pure mapping over jsonb; no business logic. Enforce min-cohort suppression in `cohortErrorCounts`.
- **Depends on:** Step 4.
- **Acceptance:** mocked-Supabase tests assert jsonb round-trips, `since` filtering, min-cohort suppression, and that no PII columns are ever read/written.

### Step 6 — Per-learner model builder + spaced repetition + NBA (§4.1/§4.3)
- **Files:** `src/lib/marking/learner-profile.ts` (new: `buildLearnerProfile(attempts)` → per-criterion `{latestBand, meanBand, trendSlope, sampleCount}` + `errorStats`), generalise `src/lib/spaced-repetition.ts` to schedule error-types/criteria (new `nextReviewForErrorType` wrapper or a small Leitner module), `src/lib/marking/next-best-action.ts` (new: `recommendNextAction(profile, reviews)` + `focusOn()` single item), with tests for each.
- **Work:** Pure aggregation + prioritisation: due reviews first, then weakest criterion, then top recurring error not already scheduled; resolve a micro-lesson slug from Step 1. One `focusOn` (architecture §3 "one priority at a time").
- **Depends on:** Steps 1, 2 (trend helper), 5.
- **Acceptance:** unit tests — trend sign, rolling window, error counts, SR lapse→box1/clean→advance, NBA priority order, focusOn returns exactly one.

### Step 7 — Nightly aggregation cron (incremental)
- **Files:** `src/app/api/cron/learner-model-aggregate/route.ts` (new) + `route.test.ts`; schedule in `vercel.json`. Mirror auth/test shape of `weekly-parent-reports/route.ts` + its `route.test.ts`.
- **Work:** For learners with `ielts_attempts` newer than `learner_profiles.last_updated`, rebuild the profile and advance review states; idempotent; incremental; cron-secret auth.
- **Depends on:** Steps 5, 6.
- **Acceptance:** fixture attempts → correct profile/review rows; second run no-op; unauthorised → 401.

### Step 8 — Write path from marking + moderation
- **Files:** the IELTS marking-run route + the IELTS moderation/approve route (per 01-spec); reuse `learner-store.ts`.
- **Work:** On a validated mark, insert one `ielts_attempts` row (taxonomy-tagged). On human moderation producing a trusted band, insert `marker_calibration` pairs (4 criteria + overall) with pack/model version.
- **Depends on:** IELTS marker/validator existing; Steps 4–5.
- **Acceptance:** marking a fixture → one complete attempt row; moderation → 5 calibration pairs; stored row + outbound model request carry no surrounding PII (reuse the data-minimisation guard).

### Step 9 — Read APIs + dashboards
- **Files:** `src/app/api/learner-model/me/route.ts` (learner self), `src/app/api/school/analytics/ielts-cohort/route.ts` (teacher, de-identified), extend `src/app/api/admin/marker-qa/route.ts` + `admin/marker-qa/page.tsx` (AI-vs-human tab). Optional learner/teacher dashboard pages.
- **Work:** Learner endpoint returns profile + `focusOn()` + `estimateReadiness()` (computed on read) under the personalised-recommendations consent gate. Cohort endpoint returns the de-identified view (min-cohort enforced). QA tab is admin-gated.
- **Depends on:** Steps 2, 3, 6, 7.
- **Acceptance:** learner endpoint returns caller-only data (RLS+auth+consent); cohort returns no user_id and suppresses small cohorts; QA tab rejects non-admins; route tests cover all three.

### Step 10 — Reconciliation + IELTS parent-report variant + readiness calibration loop
- **Files:** `src/lib/parent-reports/generate.ts` (add IELTS-criterion variant alongside AO1–AO4), `weekly-parent-reports/route.ts` (branch by module), `src/lib/marker-qa/readiness-calibration.ts` (new) + a `readiness_predictions` table (extend the Step 4 migration).
- **Work:** Keep GCSE/game/CEFR stacks for their domains; add IELTS criterion mastery + one focus area + readiness to the parent report under the existing eligibility/minimisation gates. Persist each readiness prediction and later compare to the realised band to calibrate confidence; surface in the QA dashboard.
- **Depends on:** Steps 6, 7, 9.
- **Acceptance:** IELTS parent report renders criterion mastery + one focus + readiness, passes existing eligibility/minimisation tests, emits no essay body or raw error quotes; calibration report shows predicted-vs-actual error and flags over-confidence.

---

## 5. Risks

- **Marker dependency.** The whole §4 store/aggregation is blocked on the IELTS marker emitting the structured, taxonomy-tagged result (01-spec). The live IELTS routes are prose-JSON with no `errors[]` and no confidence; until they are refactored onto the grounded engine, Steps 4–10 have no real input. Steps 1–3 are the safe early wins.
- **Taxonomy is the keystone.** Architecture-source §2 is explicit: "without a fixed taxonomy, every analytics dream downstream is impossible." Step 1 must land first and must match the spec enum exactly, or the marker, validator, and analytics diverge.
- **Three overlapping legacy stacks + confirmed type drift.** Stack A (`analytics/*`), game-skill profile (`learning-profile/*`), and CEFR aggregate are all different units; there is a confirmed `StudentAnalytics` snake_case (`@/lib/types`) vs camelCase (`analytics/types.ts`) drift. Building a *fourth* IELTS stack risks compounding this — the design deliberately reuses the CEFR-aggregate pattern and generalises trajectory/SR rather than cloning.
- **Wrong-axis reuse temptation.** `marker-qa/metrics.ts` measures human-vs-human/gold on the GCSE grade scale; `parent-reports/generate.ts` is AO1–AO4; `spaced-repetition.ts` is card-based. Each is reusable only after re-axing to IELTS criteria/error-types — copying without re-axing would silently produce meaningless metrics.
- **Small-N reliability.** Per-criterion trend and readiness regression are unreliable below ~3–4 submissions; UI claims ("on track for Band 7") must be gated behind a minimum sample + confidence threshold to stay defensible to a parent/regulator (the north star) and to honour §9's anti-over-claiming caveat.
- **Cohort re-identification.** De-identified-by-schema is necessary but not sufficient in small classes; enforce a minimum-cohort-size threshold before surfacing cohort error counts (§5). The CEFR aggregate is the pattern but should be checked for this guard too.
- **Calibration sparsity (§4.5).** AI-vs-human pairs only accrue as humans moderate; until the marker drive (`markers`/`marker_batches`) produces volume, per-criterion agreement/bias/drift will be noisy — the QA surface must show sample sizes and suppress low-N conclusions (the existing `insufficientData`/`MIN_GOLD_FOR_VERDICT` discipline in `marker-qa` is the right precedent).
- **Confidence-posture conflict.** Live GCSE persistence deliberately sets `ai_confidence = NULL` ("we no longer fake confidence"); the IELTS analytics assume a genuine `overall_confidence` per attempt. The marker must commit to producing real confidence (01-spec §5.3/5.4) or readiness-confidence and QA confidence-distributions are vacuous.
- **Cron cost/scale.** Aggregation must be incremental (only learners with new attempts) to fit Vercel cron limits; the current on-demand aggregation in `analytics/aggregation.ts` will not scale to a daily per-learner rebuild.
- **Consent gating must extend to the new path.** The strong existing gates (`personalised_recommendations` default-OFF, parent-report eligibility, AI opt-out, retention/dormancy crons) cover the old paths; the new IELTS learner-model API, cohort view, and parent variant must each be wired into the same gates, not bypass them.
