/**
 * Next-best-action + predictive readiness for the grounded Marking Engine
 * (design doc 18 §4.3 adaptive NBA + spaced repetition; §4.4 predictive
 * readiness).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * `mastery.ts` answers WHERE a learner stands: a per-criterion trend
 * ({@link CriterionTrend}) and an error profile ({@link ErrorProfile}) aggregated
 * on the SINGLE engine taxonomy. Two questions remain, and they are this module's
 * job, as PURE functions (no DB, no model calls, no hidden clock — callers pass
 * `now`):
 *
 *   1. nextBestActions / focusOn (§4.3): what should the learner practise NEXT,
 *      ranked, with a spaced-repetition-style ordering so a weak area that has not
 *      resurfaced for a while is pushed back up the queue (resurface-until-
 *      mastered).
 *   2. readinessEstimate (§4.4): are they on track to a target band, expressed
 *      HONESTLY — with an explicit uncertainty band and a hard refusal to forecast
 *      on too little data.
 *
 * NO TAXONOMY FORK (binding instruction). Recommendations key on the SAME
 * `MarkingErrorType` / `MarkingErrorCategory` from `../error-taxonomy` that
 * `mastery.ts` and the marker use. We consume `mastery.ts`'s OWN exported types
 * ({@link ErrorProfile}, {@link ErrorTypeStat}, {@link CriterionTrend}); we do not
 * re-derive error stats or invent a parallel category system. The game-skill
 * taxonomy (`src/lib/learning-profile/`) is a different axis and is intentionally
 * not used here.
 *
 * TWO DELIBERATE HONESTY DISCIPLINES (design doc 18 §5 risks):
 *   • SPACED REPETITION as a pure ORDERING. We do not own an SR state store; the
 *     caller supplies an optional per-error-type recency signal (submissions since
 *     last seen) and we fold a bounded Leitner-style boost into the ranking. With
 *     no signal we fall back to pure frequency — still deterministic.
 *   • READINESS REFUSES TO OVER-CLAIM. Below {@link MIN_TREND_POINTS} datapoints we
 *     return `insufficient_data` with every numeric forecast field null — never a
 *     false-precision "~N weeks". When we do forecast, `weeksToTarget` is ALWAYS
 *     bracketed by a low/high band; a flat/declining trajectory yields `stalled`
 *     with null weeks (we will not extrapolate a non-positive slope into a fake
 *     finish date). This is the "defensible to a parent/regulator" posture.
 */

import {
  ERROR_TAXONOMY_BY_CATEGORY,
  type MarkingErrorCategory,
  type MarkingErrorType,
} from '../error-taxonomy'
import type { CriterionTrend, ErrorProfile, ErrorTypeStat } from './mastery'

// ─── Next-best-action shapes ─────────────────────────────────────────────────

/**
 * What a recommendation targets. We recommend practice against either a single
 * error TYPE (the granular, taxonomy-tagged unit, from the error profile) or a
 * whole CRITERION (when the weakness is a low/declining band rather than one
 * recurring error). The criterion `code` is the marker's own code (e.g. 'GRA'),
 * carried verbatim from {@link CriterionTrend} — no separate criterion enum.
 */
export type RecommendationTarget =
  | { readonly kind: 'error_type'; readonly errorType: MarkingErrorType }
  | { readonly kind: 'criterion'; readonly criterionCode: string }

/**
 * One ranked, targeted practice recommendation.
 *
 * `microLessonSlug` is a stable, URL-safe handle derived deterministically from
 * the target (see {@link microLessonSlugFor}); the content layer maps it to a
 * lesson — analytics never invents content. `priorityScore` is the
 * spaced-repetition-weighted urgency used for ordering (higher sorts first),
 * exposed so callers/tests can reason about the order.
 */
export interface PracticeRecommendation {
  readonly target: RecommendationTarget
  /** Stable content handle; deterministic from the target. */
  readonly microLessonSlug: string
  /** Spaced-repetition-weighted urgency; higher sorts first. */
  readonly priorityScore: number
  /** Human-readable WHY, for the learner surface. */
  readonly reason: string
}

/**
 * Optional per-error-type recency signal so weak areas resurface (§4.3).
 *
 * The caller (persistence/cron — the SR state store, which this pure module does
 * NOT own) supplies, per error type, how many submissions ago it was last seen.
 * Higher `submissionsSinceLastSeen` → stronger resurface boost. Omit entirely for
 * pure-frequency ordering.
 */
export interface ErrorRecency {
  readonly type: MarkingErrorType
  /** Submissions elapsed since this error type was last observed (>= 0). */
  readonly submissionsSinceLastSeen: number
}

/**
 * Input to {@link nextBestActions}: a learner's error profile + per-criterion
 * trend (both from `mastery.ts`), plus an optional recency signal.
 */
export interface NextBestActionInput {
  /** The learner's error profile, aggregated on the engine taxonomy. */
  readonly errorProfile: ErrorProfile
  /** Per-criterion mastery trends (used to surface a weak/declining criterion). */
  readonly criterionTrends?: readonly CriterionTrend[]
  /** Per-error-type resurfacing signal; omit for pure-frequency ordering. */
  readonly recency?: readonly ErrorRecency[]
}

// ─── Next-best-action tunables ───────────────────────────────────────────────

/**
 * Weight on a criterion being weak. Scaled so a clearly weak/declining criterion
 * earns a place in the ranking without, on its own, out-ranking a genuinely
 * high-frequency recurring error. Commensurable with an error's frequency
 * `share` (both land in roughly [0,1]).
 */
export const CRITERION_GAP_WEIGHT = 0.6

/**
 * Spaced-repetition resurfacing strength: how strongly an error that has not
 * appeared recently is boosted back up the queue. Leitner intuition — the longer
 * a weak area has lain dormant without being re-practised, the more it deserves to
 * resurface (design doc 18 §4.3). Kept modest, and the boost is sub-linear (see
 * {@link scoreErrorStat}), so a high-frequency current error still beats a stale
 * rare one unless it has been dormant for a long time.
 */
export const RESURFACE_WEIGHT = 0.15

/**
 * Normalised criterion score (in [0,1]) at/above which a criterion is treated as
 * strong enough not to recommend. `mastery.ts` normalises every criterion to
 * [0,1]; a latest normalised score >= this is "doing fine".
 */
export const CRITERION_STRONG_NORMALISED = 0.75

/**
 * Hard cap on how many recommendations we return. {@link focusOn} collapses to the
 * single top one ("one priority at a time", architecture §3); the short ranked
 * list lets a surface show a handful.
 */
export const MAX_RECOMMENDATIONS = 5

// ─── Micro-lesson slug ───────────────────────────────────────────────────────

/**
 * Deterministic, URL-safe slug for a recommendation target, derived from the SAME
 * canonical taxonomy strings (no new map to drift): an error type `grammar.tense`
 * → `grammar-tense`; a criterion code `GRA` → `criterion-gra`. The content layer
 * owns slug→lesson; analytics only guarantees the same weakness always resolves
 * to the same handle.
 */
export function microLessonSlugFor(target: RecommendationTarget): string {
  if (target.kind === 'error_type') {
    return target.errorType.replace(/\./g, '-')
  }
  return `criterion-${target.criterionCode.toLowerCase()}`
}

// ─── Spaced-repetition-style ordering ────────────────────────────────────────

/**
 * Score one error stat with the spaced-repetition resurfacing boost folded in.
 *
 * Base is the error's SHARE of the learner's tagged errors (frequency dominates);
 * resurfacing adds a bounded, sub-linear boost proportional to how long the error
 * has been dormant. `log1p` keeps a single very stale error from running away with
 * the queue. Pure and monotonic in both inputs.
 */
function scoreErrorStat(
  stat: ErrorTypeStat,
  totalErrors: number,
  recencyByType: ReadonlyMap<MarkingErrorType, number>,
): number {
  const share = totalErrors > 0 ? stat.count / totalErrors : 0
  const dormancy = recencyByType.get(stat.type) ?? 0
  const resurface = RESURFACE_WEIGHT * Math.log1p(Math.max(0, dormancy))
  return share + resurface
}

/**
 * Stable canonical-order index for an error type, used purely as a deterministic
 * tie-break (spec order: grammar.* → lexical.* → discourse.* → task.*).
 */
function canonicalTypeIndex(type: MarkingErrorType): number {
  let idx = 0
  for (const cat of ['grammar', 'lexical', 'discourse', 'task'] as const) {
    for (const t of ERROR_TAXONOMY_BY_CATEGORY[cat].types) {
      if (t === type) return idx
      idx += 1
    }
  }
  return Number.MAX_SAFE_INTEGER
}

/** Latest normalised score of a criterion trend, or 1 (treated as strong) when
 * it has no points so we never recommend an empty criterion. */
function latestNormalised(trend: CriterionTrend): number {
  const scores = trend.normalisedScores
  return scores.length > 0 ? scores[scores.length - 1] : 1
}

/**
 * Produce a ranked list of targeted practice recommendations, with
 * spaced-repetition-style ordering so weak areas resurface (design doc 18 §4.3).
 *
 * Ordering (all on the SINGLE engine taxonomy / the marker's own criterion codes
 * — no fork):
 *   1. Each recurring error type (from {@link ErrorProfile.byType}) is scored by
 *      its share boosted by how long it has been dormant.
 *   2. Each criterion below {@link CRITERION_STRONG_NORMALISED}, OR declining, is
 *      scored by its normalised gap (plus a nudge when its direction is
 *      declining), so a slipping criterion surfaces even if not yet low.
 *   3. The combined list is sorted by score desc; ties broken deterministically
 *      (error types before criteria, then canonical taxonomy / code order), then
 *      capped at {@link MAX_RECOMMENDATIONS}.
 *
 * Pure and deterministic: same input → same ordered output. A clean/empty profile
 * → empty list (honestly nothing to recommend).
 */
export function nextBestActions(input: NextBestActionInput): readonly PracticeRecommendation[] {
  const { errorProfile, criterionTrends = [], recency } = input

  const recencyByType = new Map<MarkingErrorType, number>()
  for (const r of recency ?? []) {
    // Guard against negative / NaN dormancy from upstream; clamp to >= 0.
    const v = Number.isFinite(r.submissionsSinceLastSeen)
      ? Math.max(0, r.submissionsSinceLastSeen)
      : 0
    recencyByType.set(r.type, v)
  }

  interface Ranked extends PracticeRecommendation {
    /** 0 = error type, 1 = criterion — error types win ties. */
    readonly tieKind: 0 | 1
    /** Stable within-kind tie-break index. */
    readonly tieIndex: number
  }
  const ranked: Ranked[] = []

  // (1) Error-type recommendations, spaced-repetition-weighted.
  for (const stat of errorProfile.byType) {
    if (stat.count <= 0) continue
    const score = scoreErrorStat(stat, errorProfile.totalErrors, recencyByType)
    const target: RecommendationTarget = { kind: 'error_type', errorType: stat.type }
    const dormancy = recencyByType.get(stat.type) ?? 0
    const sharePct =
      errorProfile.totalErrors > 0 ? Math.round((stat.count / errorProfile.totalErrors) * 100) : 0
    ranked.push({
      target,
      microLessonSlug: microLessonSlugFor(target),
      priorityScore: score,
      reason:
        dormancy > 0
          ? `Recurring ${stat.type} error (${stat.count}x); not practised in ${dormancy} submission(s) — worth revisiting.`
          : `Recurring ${stat.type} error (${stat.count}x, ${sharePct}% of your tagged errors).`,
      tieKind: 0,
      tieIndex: canonicalTypeIndex(stat.type),
    })
  }

  // (2) Criterion recommendations for weak or declining criteria.
  let criterionTie = 0
  for (const trend of criterionTrends) {
    const latest = latestNormalised(trend)
    const isWeak = latest < CRITERION_STRONG_NORMALISED
    const isDeclining = trend.direction === 'declining'
    if (!isWeak && !isDeclining) continue
    // Gap from "strong"; a declining-but-not-yet-weak criterion still gets a
    // small positive score so it surfaces.
    const gap = Math.max(0, CRITERION_STRONG_NORMALISED - latest)
    const decliningNudge = isDeclining ? 0.1 : 0
    const score = CRITERION_GAP_WEIGHT * (gap + decliningNudge)
    if (score <= 0) continue
    const target: RecommendationTarget = {
      kind: 'criterion',
      criterionCode: trend.code,
    }
    ranked.push({
      target,
      microLessonSlug: microLessonSlugFor(target),
      priorityScore: score,
      reason: isDeclining
        ? `${trend.label} is trending down — worth focused practice.`
        : `${trend.label} is your weakest area right now.`,
      tieKind: 1,
      tieIndex: criterionTie++,
    })
  }

  ranked.sort(
    (a, b) => b.priorityScore - a.priorityScore || a.tieKind - b.tieKind || a.tieIndex - b.tieIndex,
  )

  return ranked.slice(0, MAX_RECOMMENDATIONS).map(({ tieKind: _k, tieIndex: _i, ...rest }) => rest)
}

/**
 * The single highest-priority next action ("one priority at a time", design doc
 * 18 §4.3 / architecture §3), or null when there is nothing to recommend.
 */
export function focusOn(input: NextBestActionInput): PracticeRecommendation | null {
  return nextBestActions(input)[0] ?? null
}

// ─── Predictive readiness (§4.4) ─────────────────────────────────────────────

/**
 * A datapoint in a learner's overall-band trajectory. Criterion-generic: any
 * 0–9 band series works (typically the overall band over time).
 */
export interface TrendPoint {
  /** ISO 8601 timestamp of the mark. */
  readonly date: string
  /** The band at that point (0–9 IELTS scale). */
  readonly band: number
}

/**
 * The honest verdict of a readiness estimate.
 *   • `insufficient_data` — too few points to forecast at all; we REFUSE rather
 *     than fabricate. The only verdict with no weeks/rate.
 *   • `achieved` — already at/above the target band.
 *   • `on_track` — improving fast enough to reach target within a credible horizon.
 *   • `slow` — improving, but the horizon is long.
 *   • `stalled` — flat or declining; no positive trajectory to extrapolate.
 */
export type ReadinessStatus = 'insufficient_data' | 'achieved' | 'on_track' | 'slow' | 'stalled'

/**
 * Honest readiness estimate. When `status` is `insufficient_data` the numeric
 * forecast fields are null — there is NO false-precision forecast. Otherwise the
 * point estimate `weeksToTarget` is ALWAYS accompanied by an uncertainty band
 * (`weeksToTargetLow`/`High`) so a surface can never show a bare number.
 */
export interface ReadinessEstimate {
  readonly status: ReadinessStatus
  readonly currentBand: number | null
  readonly targetBand: number
  /** Best-estimate band change per week (least-squares slope); null when not
   * forecastable. */
  readonly ratePerWeek: number | null
  /** Point estimate of weeks to target; null when not forecastable or already
   * achieved with no horizon. */
  readonly weeksToTarget: number | null
  /** Optimistic bound of the uncertainty band (fewer weeks). */
  readonly weeksToTargetLow: number | null
  /** Pessimistic bound of the uncertainty band (more weeks). */
  readonly weeksToTargetHigh: number | null
  /** Confidence in [0,1] from sample size + fit quality. Always present. */
  readonly confidence: number
  /** Number of datapoints the estimate is based on. */
  readonly sampleCount: number
  /** Human-readable, honest summary for the learner surface. */
  readonly summary: string
}

// ─── Readiness tunables ──────────────────────────────────────────────────────

/**
 * Minimum trajectory points before we will forecast AT ALL. Below this we return
 * `insufficient_data` — never a false-precision "~N weeks". Three matches the
 * design-doc small-N honesty threshold (§5: "unreliable below ~3–4 submissions").
 */
export const MIN_TREND_POINTS = 3

/** Slopes at/below this (band/week) are treated as no real improvement. */
const FLAT_SLOPE_EPSILON = 1e-3

/**
 * Weeks-to-target above this horizon is reported as `slow` rather than
 * `on_track`. ~2 academic terms — beyond this, "on track" would over-claim.
 */
export const ON_TRACK_HORIZON_WEEKS = 26

const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000

/** Internal least-squares fit over (weekOffset, band) points. */
interface LinearFit {
  readonly slope: number
  readonly intercept: number
  /** Coefficient of determination R² in [0,1]; 1 for a perfect/degenerate fit. */
  readonly rSquared: number
}

/**
 * Least-squares line + R² over (x,y). Returns a flat, honest fit (slope 0,
 * intercept = mean y, R² 0) when x has no variance, so callers never see
 * NaN/Infinity. Pure.
 */
function linearFit(xs: readonly number[], ys: readonly number[]): LinearFit {
  const n = xs.length
  const meanY = ys.reduce((s, y) => s + y, 0) / n
  if (n < 2) return { slope: 0, intercept: meanY, rSquared: 0 }
  const meanX = xs.reduce((s, x) => s + x, 0) / n
  let sxx = 0
  let sxy = 0
  for (let i = 0; i < n; i++) {
    const dx = xs[i] - meanX
    sxx += dx * dx
    sxy += dx * (ys[i] - meanY)
  }
  if (sxx === 0) return { slope: 0, intercept: meanY, rSquared: 0 }
  const slope = sxy / sxx
  const intercept = meanY - slope * meanX
  let ssRes = 0
  let ssTot = 0
  for (let i = 0; i < n; i++) {
    const predicted = slope * xs[i] + intercept
    ssRes += (ys[i] - predicted) ** 2
    ssTot += (ys[i] - meanY) ** 2
  }
  const rSquared = ssTot === 0 ? 1 : Math.max(0, Math.min(1, 1 - ssRes / ssTot))
  return { slope, intercept, rSquared }
}

/**
 * Estimate readiness toward a target band from a band trajectory, HONESTLY.
 *
 * Refuses to over-claim:
 *   • < {@link MIN_TREND_POINTS} valid points → `insufficient_data`, all forecast
 *     fields null (the load-bearing low-data refusal).
 *   • Already at/above target → `achieved`.
 *   • Flat/declining → `stalled`, no weeks (we will not extrapolate a non-positive
 *     slope into a fake finish date).
 *   • Improving → finite `weeksToTarget` WITH an uncertainty band derived from fit
 *     quality + sample size, classified `on_track` vs `slow` by horizon.
 *
 * Pure and deterministic; the caller passes `now` so there is no hidden clock.
 * Invalid points (unparseable dates, non-finite bands) are dropped before the fit.
 *
 * @param trend band trajectory points (any order; sorted internally by date).
 * @param targetBand the band the learner is aiming for (0–9).
 * @param now reference time (accepted for API symmetry; the honest baseline is the
 *   last marked attempt, so the estimate is independent of when it is read).
 */
export function readinessEstimate(
  trend: readonly TrendPoint[],
  targetBand: number,
  now?: Date,
): ReadinessEstimate {
  void now

  const sorted = [...trend]
    .filter((p) => Number.isFinite(p.band) && !Number.isNaN(new Date(p.date).getTime()))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const sampleCount = sorted.length

  // ── Low-data refusal: never fabricate a forecast from too little data. ──
  if (sampleCount < MIN_TREND_POINTS) {
    const current = sampleCount > 0 ? sorted[sampleCount - 1].band : null
    return {
      status: 'insufficient_data',
      currentBand: current,
      targetBand,
      ratePerWeek: null,
      weeksToTarget: null,
      weeksToTargetLow: null,
      weeksToTargetHigh: null,
      // Stays low; scales only with how close we are to the minimum.
      confidence: Math.min(0.2, (sampleCount / MIN_TREND_POINTS) * 0.2),
      sampleCount,
      summary:
        sampleCount === 0
          ? 'Not enough data yet — no marked attempts to estimate a trajectory.'
          : `Not enough data yet — ${sampleCount} attempt(s); need at least ${MIN_TREND_POINTS} before estimating a trajectory.`,
    }
  }

  const t0 = new Date(sorted[0].date).getTime()
  const xs = sorted.map((p) => (new Date(p.date).getTime() - t0) / MS_PER_WEEK)
  const ys = sorted.map((p) => p.band)
  const currentBand = ys[ys.length - 1]

  const { slope, rSquared } = linearFit(xs, ys)

  // Confidence: fit quality (R²) gated by a sample-size factor that saturates as
  // N grows. More points + tighter fit → more confident.
  const sizeFactor = Math.min(1, sampleCount / (MIN_TREND_POINTS * 2))
  const confidence = Math.max(0, Math.min(1, 0.4 * sizeFactor + 0.6 * rSquared * sizeFactor))

  // Already at/above target → achieved (regardless of slope).
  if (currentBand >= targetBand) {
    return {
      status: 'achieved',
      currentBand,
      targetBand,
      ratePerWeek: slope,
      weeksToTarget: 0,
      weeksToTargetLow: 0,
      weeksToTargetHigh: 0,
      confidence,
      sampleCount,
      summary: `Already at or above the target band (${currentBand} >= ${targetBand}).`,
    }
  }

  // Flat or declining → stalled; refuse to extrapolate a finish date.
  if (slope <= FLAT_SLOPE_EPSILON) {
    return {
      status: 'stalled',
      currentBand,
      targetBand,
      ratePerWeek: slope <= 0 ? slope : 0,
      weeksToTarget: null,
      weeksToTargetLow: null,
      weeksToTargetHigh: null,
      confidence,
      sampleCount,
      summary:
        'On the current trajectory there is no upward trend, so a time-to-target cannot be estimated honestly. Recent attempts are flat or declining.',
    }
  }

  // Improving → finite estimate WITH an uncertainty band.
  const gap = targetBand - currentBand
  const weeksToTarget = gap / slope

  // Band widens by (1 - confidence): a perfectly-fit, well-sampled trajectory
  // gives a tight band; a noisy one gives a wide, honest band.
  const spread = (1 - confidence) * weeksToTarget
  const weeksToTargetLow = Math.max(0, weeksToTarget - spread)
  const weeksToTargetHigh = weeksToTarget + spread

  const status: ReadinessStatus = weeksToTarget <= ON_TRACK_HORIZON_WEEKS ? 'on_track' : 'slow'

  const roundedWeeks = Math.round(weeksToTarget)
  const summary =
    status === 'on_track'
      ? `On the current trajectory, roughly ${roundedWeeks} week(s) to band ${targetBand} (range ${Math.round(
          weeksToTargetLow,
        )}-${Math.round(weeksToTargetHigh)}; confidence ${(confidence * 100).toFixed(0)}%).`
      : `Improving, but on the current trajectory it would take about ${roundedWeeks} week(s) to band ${targetBand} (range ${Math.round(
          weeksToTargetLow,
        )}-${Math.round(weeksToTargetHigh)}) — beyond a typical ${ON_TRACK_HORIZON_WEEKS}-week horizon.`

  return {
    status,
    currentBand,
    targetBand,
    ratePerWeek: slope,
    weeksToTarget,
    weeksToTargetLow,
    weeksToTargetHigh,
    confidence,
    sampleCount,
    summary,
  }
}
