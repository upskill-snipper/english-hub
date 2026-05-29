/**
 * Learner mastery + error analytics over a sequence of {@link MarkingResultV2}.
 *
 * WHY THIS FILE EXISTS (design doc 18 §4.1 mastery, §4.2 error-analytics;
 * architecture §4)
 * --------------------------------------------------------------------------
 * The learner model is NOT a single band. It is (a) a per-criterion trend over
 * time, (b) a plain-English synthesis of that trend, (c) a per-learner error
 * profile aggregated on the ENGINE taxonomy, and (d) a strictly de-identified
 * cohort aggregate. All four are computed as PURE functions over already-marked,
 * already-validated results — no DB, no model calls — so they are deterministic
 * and fixture-testable now (design doc 18 §4: "read cheaply (no model calls)";
 * "Steps 1–3 are independent and fixture-testable now").
 *
 * TAXONOMY (no fork)
 * ------------------
 * Error aggregation keys on {@link MarkingErrorType} / {@link MarkingErrorCategory}
 * from `../error-taxonomy` — the engine's single source of truth (its own file
 * header: "the §4 learner-model analytics keys all reference the SAME 20 strings").
 * This module deliberately introduces NO parallel category system. The game-skill
 * taxonomy in `src/lib/learning-profile/taxonomy.ts` is a different axis (games →
 * literacy skills) and is intentionally NOT used here (design doc 18 §1.2: "This
 * is NOT the §2.1 error taxonomy").
 *
 * SCHEMA REALITY
 * --------------
 * {@link MarkingResultV2} has NO learner id and NO top-level timestamp: identity is
 * supplied by the caller and time comes from `provenance.markedAt` (ISO-8601).
 * `criteria` is a discriminated union ({@link CriterionScoreV2}); we normalise both
 * arms (band/maxBand and awardedMarks/maxMarks) to [0,1] so criteria on different
 * scales trend on one axis. `errors[]` carries the taxonomy `type` plus a verbatim
 * `quote` — the latter is the learner's OWN data and may appear in a per-learner
 * profile, but is structurally barred from the cohort aggregate (see DP-3 below).
 *
 * DE-IDENTIFICATION (plan DP-3 — HARD requirement)
 * ------------------------------------------------
 * {@link cohortErrorAggregate} must be "incapable of emitting a quote or id". This
 * is enforced by TYPE, not discipline: {@link CohortErrorAggregate} has no free-text
 * field — every leaf is a taxonomy code, a category, or a number. Learner ids enter
 * only a `Set` to be COUNTED and are never read back out. See the function and the
 * accompanying test, which JSON-serialises the result and asserts no quote/id leaks.
 *
 * DETERMINISM RULES (design doc 18)
 * ---------------------------------
 * - results are sorted by `provenance.markedAt` ascending, ties broken by the
 *   caller-supplied stable `id`, BEFORE any trend is computed;
 * - per-criterion normalised score = awarded / max, guarding divide-by-zero
 *   (max 0 ⇒ 0);
 * - direction thresholds (normalised delta first→last): improving ≥ +0.05,
 *   declining ≤ −0.05, otherwise flat (shared across mastery + cohort);
 * - top-N defaults to 3; ties broken by code/criterion lexicographically.
 */

import type { MarkingResultV2, CriterionScoreV2 } from '../result-schema'
import {
  type MarkingErrorType,
  type MarkingErrorCategory,
  MARKING_ERROR_CATEGORIES,
  errorCategory,
  isMarkingErrorType,
} from '../error-taxonomy'

/**
 * A {@link MarkingResultV2} paired with the identity + an optional stable id the
 * caller owns.
 *
 * WHY a wrapper: the canonical result has neither a learner id nor a unique row
 * id (those live in the persistence layer, design doc 18 Step 4). Rather than
 * inventing fields on the schema, callers pass identity alongside the result.
 * `id` is used ONLY as a deterministic tie-break when two results share a
 * `markedAt`; it is never surfaced in any output.
 */
export interface LearnerResult {
  /** Opaque learner identifier (used for per-learner grouping / cohort counts). */
  readonly learnerId: string
  /** Stable per-result id, used only as a markedAt tie-break for determinism. */
  readonly id: string
  /** The validated, canonical marking result. */
  readonly result: MarkingResultV2
}

/**
 * Direction of a trend, derived from the normalised delta first→last.
 *
 * WHY a closed union: callers (narrative, dashboards) branch on this; a literal
 * union keeps that branching exhaustive under strict TS.
 */
export type TrendDirection = 'improving' | 'declining' | 'flat'

/**
 * Normalised-delta thresholds for classifying a trend direction.
 *
 * WHY exported + shared: {@link masteryNarrative}, {@link perCriterionTrend} and
 * the cohort trend MUST classify direction identically (design doc 18 requires the
 * cohort trend to use the same thresholds as the mastery narrative). One constant
 * prevents drift.
 */
export const TREND_THRESHOLDS = {
  /** Normalised delta at/above which a trend is "improving". */
  improving: 0.05,
  /** Normalised delta at/below which a trend is "declining". */
  declining: -0.05,
} as const

/** Default number of top error types to surface (design doc 18: top-N default 3). */
export const DEFAULT_TOP_N = 3

/** A per-criterion mastery trend across a learner's submission history. */
export interface CriterionTrend {
  /** Stable criterion code, e.g. 'GRA'. */
  readonly code: string
  /** Human-readable criterion label carried from the most recent result. */
  readonly label: string
  /**
   * Ordered (oldest→newest) NORMALISED scores in [0,1].
   *
   * WHY normalised: band-scale and marks-scale criteria have different maxima;
   * normalising lets the direction/delta compare on one scale (design doc 18 §4.1).
   */
  readonly normalisedScores: readonly number[]
  /**
   * Ordered (oldest→newest) AWARDED values on the criterion's OWN scale (band or
   * marks).
   *
   * WHY keep raw too: the narrative speaks in the marker's units ("GRA 5.5→6.5",
   * design doc 18 §2.3), so the raw awarded values must survive alongside the
   * normalised ones.
   */
  readonly awardedScores: readonly number[]
  /** Normalised delta first→last (full precision). */
  readonly delta: number
  /** Direction classified from {@link delta} via {@link TREND_THRESHOLDS}. */
  readonly direction: TrendDirection
}

/** A single aggregated error type with its count and most-recent evidence. */
export interface ErrorTypeStat {
  /** Fully-qualified taxonomy type, e.g. 'grammar.tense'. */
  readonly type: MarkingErrorType
  /** The category this type rolls up to, e.g. 'grammar'. */
  readonly category: MarkingErrorCategory
  /** Number of times this type occurred across the learner's submissions. */
  readonly count: number
  /**
   * Most recent verbatim evidence quote for this type, if any.
   *
   * WHY allowed HERE: this is the learner's OWN data within their session boundary
   * (design doc 18 §4.2 per-learner focus areas). It is NEVER carried into the
   * cohort aggregate (see {@link CohortErrorAggregate}).
   */
  readonly latestEvidence?: string
}

/** Per-learner error profile aggregated on the engine taxonomy. */
export interface ErrorProfile {
  /** The learner this profile describes (opaque id). */
  readonly learnerId: string
  /** Total tagged errors with a recognised taxonomy type. */
  readonly totalErrors: number
  /** Per fully-qualified type stats, sorted by count desc then type asc. */
  readonly byType: readonly ErrorTypeStat[]
  /** Per-category counts, keyed by the four taxonomy families. */
  readonly byCategory: Readonly<Record<MarkingErrorCategory, number>>
  /** Top-N types by frequency (ties broken by type asc). */
  readonly topTypes: readonly ErrorTypeStat[]
}

/**
 * One de-identified cohort entry for a single error type.
 *
 * DP-3: every field is a taxonomy type, a category, or a number. There is
 * deliberately NO free-text field, so this type CANNOT carry a quote or an id.
 */
export interface CohortTypeStat {
  /** Fully-qualified taxonomy type. */
  readonly type: MarkingErrorType
  /** The category this type rolls up to. */
  readonly category: MarkingErrorCategory
  /** Total occurrences of this type across the whole cohort. */
  readonly count: number
  /** How many distinct learners exhibited this type (a count, never an id). */
  readonly learnerCount: number
  /** Cross-cohort trend direction for this type (same thresholds as narrative). */
  readonly direction: TrendDirection
}

/**
 * De-identified cohort error aggregate (DP-3 hard requirement).
 *
 * WHY the shape is locked to numbers + taxonomy enums: this is the only analytics
 * artefact permitted to cross into shared dashboards (design doc 18 §4.2 / §5).
 * Because no field can hold learner text or an identifier, it is *structurally*
 * impossible to leak a quote or id through this type.
 */
export interface CohortErrorAggregate {
  /** Number of learners contributing to this aggregate (a count, not ids). */
  readonly learnerCount: number
  /** Total tagged errors with a recognised type across the cohort. */
  readonly totalErrors: number
  /** Per-type stats, sorted by count desc then type asc. */
  readonly byType: readonly CohortTypeStat[]
  /** Per-category counts. */
  readonly byCategory: Readonly<Record<MarkingErrorCategory, number>>
  /** Top-N types by frequency (ties broken by type asc). */
  readonly topTypes: readonly CohortTypeStat[]
}

/**
 * Classify a normalised delta into a {@link TrendDirection}.
 *
 * WHY centralised: mastery and cohort trends MUST agree on direction (design
 * doc 18). One function, one set of thresholds.
 */
export function classifyDirection(delta: number): TrendDirection {
  if (delta >= TREND_THRESHOLDS.improving) return 'improving'
  if (delta <= TREND_THRESHOLDS.declining) return 'declining'
  return 'flat'
}

/**
 * Normalise a {@link CriterionScoreV2} (either scale) to [0,1].
 *
 * WHY a single helper: the result schema is a discriminated union (band vs marks);
 * trending must put both on one axis. Divide-by-zero is guarded (a `max` of 0 ⇒ 0)
 * so a malformed or zero-max criterion never produces NaN/Infinity in a trend.
 */
function normalisedScoreOf(criterion: CriterionScoreV2): number {
  if (criterion.scale === 'band') {
    return criterion.maxBand > 0 ? criterion.band / criterion.maxBand : 0
  }
  return criterion.maxMarks > 0 ? criterion.awardedMarks / criterion.maxMarks : 0
}

/**
 * The awarded value of a criterion on its OWN scale (band number or marks).
 *
 * WHY: the narrative reports in the marker's units, so it needs the raw figure,
 * not the normalised one.
 */
function awardedScoreOf(criterion: CriterionScoreV2): number {
  return criterion.scale === 'band' ? criterion.band : criterion.awardedMarks
}

/**
 * Sort learner results into the canonical analysis order.
 *
 * WHY: every trend depends on a stable ordering. Sorting by `provenance.markedAt`
 * ascending with the caller's `id` as the lexicographic tie-break makes fixtures
 * deterministic regardless of input order. Returns a NEW array; input is never
 * mutated (the inputs are `readonly` anyway).
 */
function sortByMarkedAt(results: ReadonlyArray<LearnerResult>): LearnerResult[] {
  return [...results].sort((a, b) => {
    const ta = a.result.provenance.markedAt
    const tb = b.result.provenance.markedAt
    if (ta < tb) return -1
    if (ta > tb) return 1
    if (a.id < b.id) return -1
    if (a.id > b.id) return 1
    return 0
  })
}

/** Round to 1 decimal place (design doc 18 §2.3: narrative numbers like "5.5→6.5"). */
function round1(value: number): number {
  return Math.round(value * 10) / 10
}

/**
 * Compute a per-criterion mastery trend across a learner's submissions.
 *
 * For every criterion `code` that appears in ANY submission, emit the ordered
 * (oldest→newest) normalised and awarded score sequences, the normalised delta
 * first→last, and the classified direction. A submission that omits a given
 * criterion simply contributes no point for it (the sequence tracks only the
 * submissions where that criterion was marked).
 *
 * WHY normalise for delta/direction but keep awarded: see {@link CriterionTrend}.
 */
export function perCriterionTrend(results: ReadonlyArray<LearnerResult>): CriterionTrend[] {
  const ordered = sortByMarkedAt(results)

  // Preserve first-seen order of criterion codes for deterministic output.
  const order: string[] = []
  const normalised = new Map<string, number[]>()
  const awarded = new Map<string, number[]>()
  const labels = new Map<string, string>()

  for (const { result } of ordered) {
    for (const criterion of result.criteria) {
      const code = criterion.code
      let norm = normalised.get(code)
      let raw = awarded.get(code)
      if (norm === undefined || raw === undefined) {
        order.push(code)
        norm = []
        raw = []
        normalised.set(code, norm)
        awarded.set(code, raw)
      }
      norm.push(normalisedScoreOf(criterion))
      raw.push(awardedScoreOf(criterion))
      // Newest label wins (ascending order ⇒ last write is most recent).
      labels.set(code, criterion.label)
    }
  }

  return order.map((code) => {
    const norm = normalised.get(code) ?? []
    const raw = awarded.get(code) ?? []
    const delta = norm.length > 0 ? norm[norm.length - 1] - norm[0] : 0
    return {
      code,
      label: labels.get(code) ?? code,
      normalisedScores: norm,
      awardedScores: raw,
      delta,
      direction: classifyDirection(delta),
    }
  })
}

/**
 * Produce a plain-English synthesis of a learner's mastery trends.
 *
 * Names the MOST improved criterion (highest normalised delta) and the WEAKEST
 * criterion (lowest mean normalised score), e.g. "your grammar has climbed from
 * 5.5 to 6.5 over 4 submissions; your persistent weak point is task response"
 * (design doc 18 §2.3 / §4.1).
 *
 * WHY raw numbers in the prose: the narrative speaks in the marker's units, so the
 * first/last AWARDED values are shown (rounded to 1dp), while improvement is judged
 * on the normalised delta so criteria with different maxima stay comparable.
 */
export function masteryNarrative(results: ReadonlyArray<LearnerResult>): string {
  const trends = perCriterionTrend(results)
  if (trends.length === 0) {
    return 'No marked submissions yet, so there is no mastery trend to report.'
  }

  const submissionCount = results.length

  // `trends` is non-empty here (guarded above). We pick extremes with reduce
  // rather than `sort()[0]` so the result is a guaranteed `CriterionTrend` even
  // under `noUncheckedIndexedAccess`, and the comparison is the single source of
  // ordering (delta desc / mean asc, tie-broken by code asc for determinism).
  const meanNorm = (t: CriterionTrend): number =>
    t.normalisedScores.length === 0
      ? 0
      : t.normalisedScores.reduce((s, n) => s + n, 0) / t.normalisedScores.length

  // Most improved: highest normalised delta; tie-break by code asc.
  const mostImproved = trends.reduce((best, t) => {
    if (t.delta !== best.delta) return t.delta > best.delta ? t : best
    return t.code < best.code ? t : best
  })

  // Weakest: lowest mean normalised score; tie-break by code asc.
  const weakest = trends.reduce((worst, t) => {
    const mt = meanNorm(t)
    const mw = meanNorm(worst)
    if (mt !== mw) return mt < mw ? t : worst
    return t.code < worst.code ? t : worst
  })

  const first = round1(mostImproved.awardedScores[0] ?? 0)
  const last = round1(mostImproved.awardedScores[mostImproved.awardedScores.length - 1] ?? 0)

  const verb =
    mostImproved.direction === 'improving'
      ? 'has climbed'
      : mostImproved.direction === 'declining'
        ? 'has slipped'
        : 'has held steady'

  const submissionsWord = submissionCount === 1 ? 'submission' : 'submissions'

  return (
    `Your ${mostImproved.label.toLowerCase()} ${verb} from ${first} to ${last} ` +
    `over ${submissionCount} ${submissionsWord}; ` +
    `your persistent weak point is ${weakest.label.toLowerCase()}.`
  )
}

/**
 * Empty per-category counter with every taxonomy family present at 0.
 *
 * WHY pre-seed all categories from {@link MARKING_ERROR_CATEGORIES}: callers can
 * index any category without an undefined check, the JSON shape is stable for
 * dashboards, and the keys can never drift from the taxonomy (derived from it).
 */
function emptyCategoryCounts(): Record<MarkingErrorCategory, number> {
  const counts = {} as Record<MarkingErrorCategory, number>
  for (const category of MARKING_ERROR_CATEGORIES) {
    counts[category] = 0
  }
  return counts
}

/**
 * Iterate the recognised tagged errors of a result in document order.
 *
 * WHY a guard on `isMarkingErrorType`: an error whose `type` is somehow not in the
 * engine taxonomy is ignored rather than forking a new bucket — the engine
 * taxonomy is authoritative. (The validated schema types `type` as
 * {@link MarkingErrorType}; the guard is defence-in-depth at this aggregation
 * trust boundary.)
 */
function* recognisedErrors(
  result: MarkingResultV2,
): Generator<{ type: MarkingErrorType; quote: string }> {
  for (const error of result.errors) {
    if (isMarkingErrorType(error.type)) {
      yield { type: error.type, quote: error.quote }
    }
  }
}

/** Sort type stats by count desc, then type asc (lexicographic tie-break). */
function sortByCountThenType<T extends { type: MarkingErrorType; count: number }>(stats: T[]): T[] {
  return stats.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count
    return a.type < b.type ? -1 : a.type > b.type ? 1 : 0
  })
}

/**
 * Aggregate one learner's tagged errors onto the engine taxonomy.
 *
 * Emits counts per fully-qualified type AND per category, the most recent evidence
 * quote per type (allowed — the learner's own data), and the top-N types by
 * frequency. Unrecognised types are skipped (taxonomy is authoritative).
 *
 * @param learnerId - opaque learner id; carried through for the caller's record.
 * @param results - the learner's marked submissions (any order; sorted here).
 * @param topN - number of top types to surface (default {@link DEFAULT_TOP_N}).
 */
export function errorProfile(
  learnerId: string,
  results: ReadonlyArray<LearnerResult>,
  topN: number = DEFAULT_TOP_N,
): ErrorProfile {
  const ordered = sortByMarkedAt(results)

  const counts = new Map<MarkingErrorType, number>()
  const latestEvidence = new Map<MarkingErrorType, string>()
  const byCategory = emptyCategoryCounts()
  let totalErrors = 0

  // Ascending order ⇒ the last evidence written per type is the most recent.
  for (const { result } of ordered) {
    for (const { type, quote } of recognisedErrors(result)) {
      counts.set(type, (counts.get(type) ?? 0) + 1)
      byCategory[errorCategory(type)] += 1
      totalErrors += 1
      latestEvidence.set(type, quote)
    }
  }

  const byType: ErrorTypeStat[] = []
  for (const [type, count] of counts) {
    const evidence = latestEvidence.get(type)
    byType.push({
      type,
      category: errorCategory(type),
      count,
      ...(evidence !== undefined ? { latestEvidence: evidence } : {}),
    })
  }
  const sorted = sortByCountThenType(byType)

  return {
    learnerId,
    totalErrors,
    byType: sorted,
    byCategory,
    topTypes: sorted.slice(0, Math.max(0, topN)),
  }
}

/**
 * Compute the cross-cohort trend direction for a single error type.
 *
 * WHY split the cohort into halves: there is no per-type score to trend, only
 * frequency. We compare the type's normalised frequency (occurrences per
 * submission) in the OLDER half vs the NEWER half of the cohort's submissions,
 * then classify the delta with the SAME thresholds as the mastery narrative. A
 * FALLING error rate is "improving" mastery; a RISING rate is "declining".
 *
 * Determinism: submissions are globally sorted (markedAt, id) before the split,
 * and the split point is the floor of half the count.
 */
function cohortTypeDirection(
  type: MarkingErrorType,
  orderedResults: ReadonlyArray<LearnerResult>,
): TrendDirection {
  const n = orderedResults.length
  if (n < 2) return 'flat'

  const mid = Math.floor(n / 2)
  const older = orderedResults.slice(0, mid)
  const newer = orderedResults.slice(mid)

  const rate = (slice: ReadonlyArray<LearnerResult>): number => {
    if (slice.length === 0) return 0
    let hits = 0
    for (const { result } of slice) {
      for (const { type: t } of recognisedErrors(result)) {
        if (t === type) hits += 1
      }
    }
    return hits / slice.length
  }

  // Falling rate (newer < older) ⇒ improving, so delta = olderRate − newerRate
  // (positive ⇒ improving), matching the narrative's "higher delta is better".
  const delta = rate(older) - rate(newer)
  return classifyDirection(delta)
}

/**
 * Aggregate tagged errors across MANY learners into a DE-IDENTIFIED shape (DP-3).
 *
 * Returns counts ONLY: per-type totals, distinct-learner counts, per-category
 * totals, and the top-N types with a cross-cohort trend direction. The return type
 * {@link CohortErrorAggregate} has no free-text field, so this function is
 * structurally incapable of emitting any learner text, evidence quote, or
 * identifier — even though it READS quotes via {@link recognisedErrors}, none can
 * flow into the output.
 *
 * @param resultsByLearner - map of opaque learner id → that learner's results.
 *   The keys (ids) are used ONLY to count distinct learners; they never appear in
 *   the output.
 * @param topN - number of top types to surface (default {@link DEFAULT_TOP_N}).
 */
export function cohortErrorAggregate(
  resultsByLearner: ReadonlyMap<string, ReadonlyArray<LearnerResult>>,
  topN: number = DEFAULT_TOP_N,
): CohortErrorAggregate {
  const counts = new Map<MarkingErrorType, number>()
  const learnersPerType = new Map<MarkingErrorType, Set<string>>()
  const byCategory = emptyCategoryCounts()
  const allResults: LearnerResult[] = []
  let totalErrors = 0
  let learnerCount = 0

  for (const [learnerId, results] of resultsByLearner) {
    learnerCount += 1
    for (const learnerResult of results) {
      allResults.push(learnerResult)
      for (const { type } of recognisedErrors(learnerResult.result)) {
        counts.set(type, (counts.get(type) ?? 0) + 1)
        byCategory[errorCategory(type)] += 1
        totalErrors += 1
        let set = learnersPerType.get(type)
        if (set === undefined) {
          set = new Set<string>()
          learnersPerType.set(type, set)
        }
        // The id enters a Set purely to be COUNTED; it is never read back out.
        set.add(learnerId)
      }
    }
  }

  const ordered = sortByMarkedAt(allResults)

  const byType: CohortTypeStat[] = []
  for (const [type, count] of counts) {
    byType.push({
      type,
      category: errorCategory(type),
      count,
      learnerCount: learnersPerType.get(type)?.size ?? 0,
      direction: cohortTypeDirection(type, ordered),
    })
  }
  const sorted = sortByCountThenType(byType)

  return {
    learnerCount,
    totalErrors,
    byType: sorted,
    byCategory,
    topTypes: sorted.slice(0, Math.max(0, topN)),
  }
}
