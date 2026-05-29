/**
 * The G-LIVE Gate — the hard, fail-closed release gate that decides whether a
 * promoted marking build is allowed to mark for real learners.
 *
 * WHY this module exists:
 * A build can produce schema-valid (doc 05), evidence-grounded (doc 07) output
 * that is still confidently *miscalibrated* — the bands it awards don't match a
 * trained examiner. metrics.ts quantifies that gap (CalibrationReport); this gate
 * converts that measurement into a binary release decision. It is the checkpoint
 * that, with the validator, gates learner exposure (design doc 17 §5).
 *
 * WHY fail-closed (design doc 17 §5, "Gate on regression AND an absolute floor"):
 * A gate that defaults to "allow" when data is missing or ambiguous is not a
 * gate. Every check throws rather than warns. A build that cannot *prove* it is
 * safe is, by definition, unsafe — the absence of evidence is treated as
 * failure. On success the gate returns nothing; on any failure it throws a
 * descriptive {@link CalibrationGateError} naming the specific failed check,
 * leaving the caller to route to human review / alerting (the gate does not
 * decide that — DECISIONS-log OQ-5 owns the learner-exposure routing).
 *
 * WHY this is pure logic over a provided baseline (design doc 17 §7, §8):
 * The gate does not compute metrics (metrics.ts does), does not fetch the
 * baseline (the caller provides it), and does not touch the DB — baseline
 * storage (`calibration_runs`) is a later migration-lane concern (design doc 17
 * §schema). We define the CalibrationBaseline shape here so the gate has a
 * stable contract; persistence is deliberately out of scope and prisma is not
 * touched.
 */

import { type CalibrationReport, withinHalfBandAgreement, type MarkPair } from './metrics'

/**
 * Lowest reportable IELTS band the calibration set must cover (design doc 17
 * §coverage targets: "each populated band (IELTS 4–9)"). Coverage below this is
 * a malformed baseline — we never silently trust an out-of-range band.
 */
export const MIN_REPORTABLE_BAND = 4

/**
 * Highest reportable IELTS band the calibration set must cover (design doc 17
 * §coverage targets: bands 4–9).
 */
export const MAX_REPORTABLE_BAND = 9

/**
 * Minimum total gold-set submissions for a gate run to be valid (design doc 17
 * §coverage targets: "≥50 essays per active set"). Below this the within-half-band
 * figure is statistically meaningless (design doc 17 §Risks: "Set too small …
 * metrics lie"), so we refuse to make a release decision at all.
 */
export const MIN_GATE_SAMPLE_SIZE = 50

/**
 * Minimum submissions required for any *populated* band (design doc 17 §coverage
 * targets: "each populated band … having ≥5 essays"). No band may have its
 * accuracy inferred from one or two examples.
 */
export const MIN_PER_BAND_SAMPLE_SIZE = 5

/**
 * Minimum number of distinct populated bands the gold set must span. A set
 * concentrated in a single band tells us nothing about behaviour across the
 * reporting range, so we require a genuine spread (design doc 17 §Risks:
 * "sparse bands → … a 'green' run is not trustworthy").
 */
export const MIN_POPULATED_BANDS = 2

/**
 * The documented absolute release floor for within-half-band agreement (design
 * doc 17 §Tolerances: `minWithinHalfRate: 0.80`). A build that agrees with the
 * examiner within ±0.5 of a band on fewer than 80% of submissions is not fit to
 * mark learners.
 */
export const WITHIN_HALF_BAND_FLOOR = 0.8

/**
 * Allowed regression tolerance vs the prior promoted baseline (design doc 17
 * §Tolerances: `maxWithinHalfDrop: 0.03`). A new build may be marginally noisier
 * than its predecessor due to model non-determinism (§Risks); a drop larger than
 * this is a *material* regression and must block release.
 */
export const MAX_WITHIN_HALF_BAND_DROP = 0.03

/**
 * A promoted, stored result of a calibration run over the gold set — the input
 * the gate reasons over.
 *
 * WHY the type lives here (not in prisma): persistence of `calibration_runs` is a
 * later migration-lane concern (design doc 17 §schema). The gate only needs the
 * in-memory shape; defining it here keeps the gate self-contained and free of
 * any DB coupling, and makes it trivially testable with hand-built fixtures.
 */
export interface CalibrationBaseline {
  /** Stable id of this promoted baseline (for traceability/regression links). */
  readonly id: string
  /** Total gold-set submissions this baseline was measured over. */
  readonly n: number
  /**
   * Headline accuracy: fraction (0..1) where the engine overall band is within
   * ±0.5 of the human overall band. This is the figure the floor and regression
   * checks gate on. Mirrors {@link CalibrationReport.withinHalfBandAgreement}.
   */
  readonly withinHalfBand: number
  /**
   * Per-band coverage: how many gold-set submissions carry each human overall
   * band. Keyed by band (e.g. 4, 4.5, … 9). Only populated bands need appear.
   */
  readonly perBandCoverage: Readonly<Record<number, number>>
  /**
   * The full metric report from metrics.ts that produced this baseline. The gate
   * treats this as authoritative and never recomputes it.
   */
  readonly report: CalibrationReport
  /**
   * The prior promoted baseline, for regression comparison. `null` when this is
   * the first ever promotion — nothing to regress against, so the regression
   * check is skipped and only the absolute floor applies (design doc 17 §5:
   * "Regression-only blocks the first good baseline").
   */
  readonly priorBaseline: PriorBaselineRef | null
}

/**
 * The minimal reference to the prior promoted baseline needed for the regression
 * check. We only need its headline accuracy, not the whole object.
 */
export interface PriorBaselineRef {
  /** Stable id of the prior promoted baseline. */
  readonly id: string
  /** Its within-half-band agreement — the regression comparison point. */
  readonly withinHalfBand: number
}

/** The discrete checks the gate enforces (design doc 17 §5, §Tolerances). */
export type CalibrationGateCheck =
  | 'sufficient-n'
  | 'band-coverage'
  | 'absolute-floor'
  | 'no-regression'

/**
 * Error thrown when the gate refuses to promote a build. Carries the specific
 * failed-check identifier so callers can route/alert without string-matching the
 * message (fail-closed: the throw IS the gate's negative answer).
 */
export class CalibrationGateError extends Error {
  /** Machine-readable identifier of the check that failed. */
  public readonly check: CalibrationGateCheck

  constructor(check: CalibrationGateCheck, message: string) {
    super(message)
    this.name = 'CalibrationGateError'
    this.check = check
  }
}

/**
 * Assert that a promoted calibration baseline is GREEN — i.e. safe to expose to
 * real learners. Returns nothing on success; throws {@link CalibrationGateError}
 * naming the first failed check on any failure (fail-closed).
 *
 * Checks, in order (all must pass — design doc 17 §5, §Tolerances):
 *  1. Sufficient n: total submissions >= {@link MIN_GATE_SAMPLE_SIZE}.
 *  2. Band coverage: every populated band sits in
 *     [{@link MIN_REPORTABLE_BAND}, {@link MAX_REPORTABLE_BAND}] and has
 *     >= {@link MIN_PER_BAND_SAMPLE_SIZE}; the set spans
 *     >= {@link MIN_POPULATED_BANDS} bands.
 *  3. Absolute floor: within-half-band >= {@link WITHIN_HALF_BAND_FLOOR}.
 *  4. No regression: within-half-band has not dropped more than
 *     {@link MAX_WITHIN_HALF_BAND_DROP} below the prior promoted baseline.
 *     Skipped when there is no prior baseline (first ever promotion).
 *
 * @param baseline - the promoted baseline to gate.
 * @throws {CalibrationGateError} on any failed check.
 */
export function assertCalibrationGreen(baseline: CalibrationBaseline): void {
  assertSufficientSampleSize(baseline)
  assertBandCoverage(baseline)
  assertAbsoluteFloor(baseline)
  assertNoRegression(baseline)
}

/**
 * Check 1 — sufficient n. Below the statistical floor we cannot make a release
 * decision, so we throw rather than guess (fail-closed).
 */
function assertSufficientSampleSize(baseline: CalibrationBaseline): void {
  if (baseline.n < MIN_GATE_SAMPLE_SIZE) {
    throw new CalibrationGateError(
      'sufficient-n',
      `Gate FAIL (sufficient-n): gold set has n=${baseline.n}, ` +
        `requires >= ${MIN_GATE_SAMPLE_SIZE}.`,
    )
  }
}

/**
 * Check 2 — band coverage. Every populated band in the reporting range must
 * carry enough examples, the set must span a genuine spread of bands, and no
 * coverage may sit outside the reportable range (an out-of-range band signals a
 * malformed baseline we must not trust — fail-closed).
 */
function assertBandCoverage(baseline: CalibrationBaseline): void {
  const entries = Object.entries(baseline.perBandCoverage)
    .map(([band, count]) => [Number(band), count] as const)
    .filter(([, count]) => count > 0)

  // Reject any coverage outside the reportable range [4, 9].
  for (const [band] of entries) {
    if (band < MIN_REPORTABLE_BAND || band > MAX_REPORTABLE_BAND) {
      throw new CalibrationGateError(
        'band-coverage',
        `Gate FAIL (band-coverage): band ${band} is outside the reportable ` +
          `range [${MIN_REPORTABLE_BAND}, ${MAX_REPORTABLE_BAND}].`,
      )
    }
  }

  // The set must span a genuine spread of bands, not concentrate in one.
  if (entries.length < MIN_POPULATED_BANDS) {
    throw new CalibrationGateError(
      'band-coverage',
      `Gate FAIL (band-coverage): only ${entries.length} populated band(s); ` +
        `requires a spread of >= ${MIN_POPULATED_BANDS} bands.`,
    )
  }

  // Every populated band must carry enough examples.
  for (const [band, count] of entries) {
    if (count < MIN_PER_BAND_SAMPLE_SIZE) {
      throw new CalibrationGateError(
        'band-coverage',
        `Gate FAIL (band-coverage): band ${band} has only ${count} ` +
          `submission(s), requires >= ${MIN_PER_BAND_SAMPLE_SIZE}.`,
      )
    }
  }
}

/**
 * Check 3 — absolute floor. The headline accuracy must clear the documented
 * release floor regardless of history (design doc 17 §5: "floor-only lets
 * quality erode slowly" — we enforce both floor and regression).
 */
function assertAbsoluteFloor(baseline: CalibrationBaseline): void {
  if (baseline.withinHalfBand < WITHIN_HALF_BAND_FLOOR) {
    throw new CalibrationGateError(
      'absolute-floor',
      `Gate FAIL (absolute-floor): within-half-band ` +
        `${baseline.withinHalfBand.toFixed(4)} is below the floor ` +
        `${WITHIN_HALF_BAND_FLOOR}.`,
    )
  }
}

/**
 * Check 4 — no regression. A drop of more than
 * {@link MAX_WITHIN_HALF_BAND_DROP} below the prior promoted baseline blocks
 * release. Skipped when there is no prior baseline (first ever promotion —
 * nothing to regress against, design doc 17 §5).
 */
function assertNoRegression(baseline: CalibrationBaseline): void {
  const prior = baseline.priorBaseline
  if (prior === null) {
    return
  }

  const drop = prior.withinHalfBand - baseline.withinHalfBand
  if (drop > MAX_WITHIN_HALF_BAND_DROP) {
    throw new CalibrationGateError(
      'no-regression',
      `Gate FAIL (no-regression): within-half-band dropped ${drop.toFixed(4)} ` +
        `(from ${prior.withinHalfBand.toFixed(4)} to ` +
        `${baseline.withinHalfBand.toFixed(4)}), exceeding the allowed ` +
        `drop ${MAX_WITHIN_HALF_BAND_DROP}.`,
    )
  }
}

/**
 * Convenience constructor: derive the gate's headline `withinHalfBand` and the
 * authoritative `report` from a set of {@link MarkPair}s, so a caller that holds
 * raw AI-vs-human pairs can build a {@link CalibrationBaseline} without
 * re-deriving the within-half-band figure by hand (and without risking a
 * mismatch between `report` and the gated number).
 *
 * WHY this exists: it keeps the single source of truth for the headline accuracy
 * in metrics.ts — the gate never invents its own agreement maths.
 *
 * @param args - identity, coverage and prior-baseline context plus the pairs.
 * @returns a CalibrationBaseline whose `withinHalfBand`/`report` come from
 *          metrics.ts.
 */
export function baselineFromPairs(args: {
  readonly id: string
  readonly pairs: readonly MarkPair[]
  readonly report: CalibrationReport
  readonly perBandCoverage: Readonly<Record<number, number>>
  readonly priorBaseline: PriorBaselineRef | null
}): CalibrationBaseline {
  return {
    id: args.id,
    n: args.pairs.length,
    withinHalfBand: withinHalfBandAgreement(args.pairs),
    perBandCoverage: args.perBandCoverage,
    report: args.report,
    priorBaseline: args.priorBaseline,
  }
}
