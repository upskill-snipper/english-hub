/**
 * Calibration metrics — pure functions that quantify how closely the AI marker
 * agrees with a trusted human reference mark.
 *
 * WHY this module exists:
 * The single most important question for a marking engine that may show learners
 * an IELTS band (DECISIONS-log OQ-5: a mark is shown labelled "AI practice
 * feedback" only when we trust it) is: "how often, and by how much, does the AI
 * disagree with a human examiner?". This module turns a set of {ai, human}
 * mark pairs into auditable trust numbers. It deliberately contains NO database
 * access and NO model calls: calibration must be deterministic and reproducible
 * so that a given evaluation set always yields the same CalibrationReport. That
 * reproducibility is what lets us gate trust thresholds on a fixed, reviewable
 * number rather than on a moving model.
 *
 * Design references: design doc 17 (§metrics), architecture §2 ("calibration").
 *
 * IELTS scoring model assumed throughout:
 *  - Bands run 0..9 in 0.5 increments.
 *  - Four analytic criteria are scored separately: TR, CC, LR, GRA.
 *    (Task Response, Coherence & Cohesion, Lexical Resource,
 *     Grammatical Range & Accuracy.)
 *  - An overall band is the headline number a learner sees.
 *
 * This file defines its own minimal input shapes rather than importing the full
 * engine result schema, because calibration only needs the bare numeric marks
 * and keeping the types local keeps these functions pure, portable and trivially
 * testable with hand-computed fixtures.
 */

/**
 * The four IELTS analytic writing criteria, by their canonical short codes.
 * Kept as a readonly tuple so callers can iterate criteria deterministically
 * (correlation is reported per criterion, in this fixed order).
 */
export const IELTS_CRITERIA = ['TR', 'CC', 'LR', 'GRA'] as const

/**
 * A single IELTS analytic criterion code.
 */
export type IeltsCriterion = (typeof IELTS_CRITERIA)[number]

/**
 * Per-criterion band scores. Each value is an IELTS band (0..9, 0.5 steps).
 * Both the AI output and the human reference are expressed in this shape so the
 * two can be compared criterion-by-criterion.
 */
export type CriterionBands = Readonly<Record<IeltsCriterion, number>>

/**
 * One unit of comparison: an AI-produced overall band plus its per-criterion
 * breakdown, paired against the equivalent human-reference marks for the SAME
 * piece of writing. A whole calibration run is an array of these.
 */
export interface MarkPair {
  /** Overall band the AI engine produced (the headline learner-facing number). */
  readonly aiOverall: number
  /** Overall band a human examiner assigned to the same script. */
  readonly humanOverall: number
  /** AI per-criterion bands. */
  readonly aiCriteria: CriterionBands
  /** Human per-criterion bands. */
  readonly humanCriteria: CriterionBands
}

/**
 * Pearson correlation for a single criterion across the evaluation set.
 *
 * `value` is `null` when correlation is undefined — i.e. fewer than two pairs,
 * or zero variance on either side (e.g. every human gave LR=6). A flat reference
 * set genuinely has no correlation to measure, and reporting `null` is more
 * honest than coercing it to 0 or 1.
 */
export interface CriterionCorrelation {
  readonly criterion: IeltsCriterion
  /** Pearson r in [-1, 1], or null when undefined for this set. */
  readonly value: number | null
  /** Number of pairs that contributed to this correlation. */
  readonly n: number
}

/**
 * The rolled-up trust report for a whole evaluation set.
 */
export interface CalibrationReport {
  /** Number of {ai, human} pairs summarised. */
  readonly count: number
  /**
   * Fraction (0..1) of pairs whose AI overall band exactly equals the human
   * overall band. Strict equality on the headline number.
   */
  readonly exactBandAgreement: number
  /**
   * Fraction (0..1) of pairs whose AI overall band is within +/- 0.5 of the
   * human overall band. This is the headline trust metric: IELTS itself treats
   * a half-band as the unit of meaningful disagreement, so "within half a band"
   * is the number we gate learner-facing marks on.
   */
  readonly withinHalfBandAgreement: number
  /**
   * Per-criterion Pearson correlation (TR/CC/LR/GRA), in IELTS_CRITERIA order.
   * Reported separately because the engine can be well calibrated on one
   * criterion (e.g. GRA, which is rule-like) yet poorly on another (e.g. TR,
   * which is judgement-heavy), and an averaged single number would hide that.
   */
  readonly perCriterionCorrelation: readonly CriterionCorrelation[]
}

/**
 * Tolerance, in IELTS bands, for the "within half band" headline metric.
 * A tiny epsilon guards against binary floating-point representation of 0.5.
 */
const HALF_BAND = 0.5
const FLOAT_EPSILON = 1e-9

/**
 * Exact-equality tolerance for band comparison. Bands arrive as 0.5-step
 * decimals; comparing with a small epsilon avoids spurious mismatches from
 * float representation (e.g. summed/derived bands).
 */
const EXACT_EPSILON = 1e-9

/**
 * Fraction of pairs where the AI overall band exactly matches the human overall
 * band. Returns 0 for an empty set (no agreement can be demonstrated on no
 * data), which keeps the metric in [0, 1] without throwing.
 *
 * @param pairs evaluation set of AI-vs-human mark pairs
 * @returns proportion in [0, 1] of exactly-agreeing pairs
 */
export function exactBandAgreement(pairs: readonly MarkPair[]): number {
  if (pairs.length === 0) {
    return 0
  }
  let hits = 0
  for (const pair of pairs) {
    if (Math.abs(pair.aiOverall - pair.humanOverall) <= EXACT_EPSILON) {
      hits += 1
    }
  }
  return hits / pairs.length
}

/**
 * Headline trust metric: fraction of pairs where the AI overall band lands
 * within +/- 0.5 of the human overall band. Returns 0 for an empty set.
 *
 * @param pairs evaluation set of AI-vs-human mark pairs
 * @returns proportion in [0, 1] within half a band
 */
export function withinHalfBandAgreement(pairs: readonly MarkPair[]): number {
  if (pairs.length === 0) {
    return 0
  }
  let hits = 0
  for (const pair of pairs) {
    if (Math.abs(pair.aiOverall - pair.humanOverall) <= HALF_BAND + FLOAT_EPSILON) {
      hits += 1
    }
  }
  return hits / pairs.length
}

/**
 * Pearson product-moment correlation between two equal-length numeric series.
 * Returns null when correlation is undefined: n < 2, or either series has zero
 * variance (constant), because Pearson r divides by the product of standard
 * deviations and a constant series has none.
 *
 * Pulled out as a small helper so per-criterion correlation stays readable and
 * the undefined-cases live in exactly one place.
 */
function pearson(xs: readonly number[], ys: readonly number[]): number | null {
  const n = xs.length
  if (n < 2 || ys.length !== n) {
    return null
  }
  let sumX = 0
  let sumY = 0
  for (let i = 0; i < n; i += 1) {
    sumX += xs[i]
    sumY += ys[i]
  }
  const meanX = sumX / n
  const meanY = sumY / n

  let covXY = 0
  let varX = 0
  let varY = 0
  for (let i = 0; i < n; i += 1) {
    const dx = xs[i] - meanX
    const dy = ys[i] - meanY
    covXY += dx * dy
    varX += dx * dx
    varY += dy * dy
  }

  // Zero variance on either side => correlation is undefined, not 0.
  if (varX <= FLOAT_EPSILON || varY <= FLOAT_EPSILON) {
    return null
  }
  const r = covXY / Math.sqrt(varX * varY)
  // Clamp to [-1, 1] to absorb floating-point overshoot.
  if (r > 1) {
    return 1
  }
  if (r < -1) {
    return -1
  }
  return r
}

/**
 * Per-criterion Pearson correlation (TR/CC/LR/GRA) between AI and human marks.
 * Each criterion is correlated independently so a weak criterion cannot be
 * masked by a strong one in an averaged figure.
 *
 * @param pairs evaluation set of AI-vs-human mark pairs
 * @returns one CriterionCorrelation per criterion, in IELTS_CRITERIA order
 */
export function perCriterionCorrelation(
  pairs: readonly MarkPair[],
): readonly CriterionCorrelation[] {
  return IELTS_CRITERIA.map((criterion): CriterionCorrelation => {
    const aiSeries = pairs.map((pair) => pair.aiCriteria[criterion])
    const humanSeries = pairs.map((pair) => pair.humanCriteria[criterion])
    return {
      criterion,
      value: pearson(aiSeries, humanSeries),
      n: pairs.length,
    }
  })
}

/**
 * Roll a whole evaluation set into a single CalibrationReport. This is the entry
 * point a calibration harness calls after assembling its {ai, human} pairs.
 * Pure: same input always yields the same report.
 *
 * @param pairs evaluation set of AI-vs-human mark pairs
 * @returns the rolled-up CalibrationReport
 */
export function summarise(pairs: readonly MarkPair[]): CalibrationReport {
  return {
    count: pairs.length,
    exactBandAgreement: exactBandAgreement(pairs),
    withinHalfBandAgreement: withinHalfBandAgreement(pairs),
    perCriterionCorrelation: perCriterionCorrelation(pairs),
  }
}
