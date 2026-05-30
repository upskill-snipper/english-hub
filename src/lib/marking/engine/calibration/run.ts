// ─── Calibration Run — the train-the-ML loop core ──────────────────────────
//
// Turns a set of {AI mark, human mark} script rows for an IELTS area into a
// calibration decision: build MarkPair[] → summarise() agreement → run
// assertCalibrationGreen() → report whether the area may go live, and (if green)
// hand back a CalibrationBaseline ready to persist+promote.
//
// This is the missing orchestration the project always described but never had
// wired: the metrics + gate were pure library code with no caller. This module
// is that caller. It stays PURE over its inputs (no DB, no network) so it is
// unit-testable with hand-built rows; the admin route does the IO (fetch rows,
// persist baseline) around it.
//
// SCOPE: IELTS band model only. The agreement maths (within-half-BAND, the four
// TR/CC/LR/GRA criteria, bands 4-9) is IELTS-specific by construction
// (metrics.ts / gate.ts). GCSE grade-distance and KS3/EAL level-distance need
// their own metric+gate and are explicitly out of scope here — we do not pretend
// a band gate certifies a grade model.
// ───────────────────────────────────────────────────────────────────────────

import {
  summarise,
  withinHalfBandAgreement,
  exactBandAgreement,
  IELTS_CRITERIA,
  type MarkPair,
  type CriterionBands,
} from './metrics'
import {
  assertCalibrationGreen,
  CalibrationGateError,
  type CalibrationBaseline,
  type CalibrationGateCheck,
  type PriorBaselineRef,
} from './gate'

/**
 * One script's marks as needed for calibration: the AI overall+criteria and the
 * human overall+criteria. The admin route maps DB rows (ai_result vs
 * teacher_band_marks) into this shape; keeping it explicit makes run() pure.
 */
export interface CalibrationScript {
  /** Submission id (for diagnostics / which rows were excluded). */
  readonly id: string
  readonly aiOverall: number
  readonly humanOverall: number
  readonly aiCriteria: CriterionBands
  readonly humanCriteria: CriterionBands
}

/** A per-check result for the gate, surfaced to the admin UI. */
export interface GateCheckResult {
  readonly check: CalibrationGateCheck | 'ok'
  readonly passed: boolean
  readonly message: string
}

/** The full outcome of a calibration run. */
export interface CalibrationRunResult {
  /** How many scripts contributed valid pairs. */
  readonly n: number
  /** Headline within-half-band agreement (0..1). */
  readonly withinHalfBand: number
  /** Exact-band agreement (0..1). */
  readonly exactBand: number
  /** Human-band coverage map { band: count }. */
  readonly perBandCoverage: Readonly<Record<number, number>>
  /** True only if every gate check passed (area may go live). */
  readonly green: boolean
  /** Per-check breakdown (the first failure is the blocking one). */
  readonly checks: readonly GateCheckResult[]
  /**
   * A CalibrationBaseline built from this run, ready to persist. Present whether
   * or not green (the route persists green ones as 'promoted', others as
   * 'measured'); the gate decision is carried by `green`/`checks`.
   */
  readonly baseline: CalibrationBaseline
  /** The full metric report (for storage + display). */
  readonly report: ReturnType<typeof summarise>
}

/**
 * Build the human-band coverage map (how many scripts carry each human overall
 * band). The gate's band-coverage check reads this.
 */
function computeCoverage(scripts: readonly CalibrationScript[]): Record<number, number> {
  const cov: Record<number, number> = {}
  for (const s of scripts) {
    cov[s.humanOverall] = (cov[s.humanOverall] ?? 0) + 1
  }
  return cov
}

/**
 * Run a calibration over a set of scripts for one area.
 *
 * @param args.id           a stable id to stamp on the produced baseline
 * @param args.scripts      the AI-vs-human marks (already mapped from DB rows)
 * @param args.priorBaseline the prior promoted baseline ref (regression check),
 *                           or null for the first promotion
 * @returns the run result (metrics + per-check gate breakdown + a baseline)
 */
export function runCalibration(args: {
  readonly id: string
  readonly scripts: readonly CalibrationScript[]
  readonly priorBaseline: PriorBaselineRef | null
}): CalibrationRunResult {
  const pairs: MarkPair[] = args.scripts.map((s) => ({
    aiOverall: s.aiOverall,
    humanOverall: s.humanOverall,
    aiCriteria: s.aiCriteria,
    humanCriteria: s.humanCriteria,
  }))

  const report = summarise(pairs)
  const perBandCoverage = computeCoverage(args.scripts)
  const withinHalf = withinHalfBandAgreement(pairs)
  const exact = exactBandAgreement(pairs)

  const baseline: CalibrationBaseline = {
    id: args.id,
    n: pairs.length,
    withinHalfBand: withinHalf,
    perBandCoverage,
    report,
    priorBaseline: args.priorBaseline,
  }

  // Run the gate. It throws CalibrationGateError on the FIRST failed check; we
  // translate that into a per-check breakdown for the UI rather than a 500.
  const checks: GateCheckResult[] = []
  let green = false
  try {
    assertCalibrationGreen(baseline)
    green = true
    checks.push({
      check: 'ok',
      passed: true,
      message: 'All gate checks passed — area may go live.',
    })
  } catch (err) {
    if (err instanceof CalibrationGateError) {
      checks.push({ check: err.check, passed: false, message: err.message })
    } else {
      checks.push({
        check: 'ok',
        passed: false,
        message: err instanceof Error ? err.message : 'Unknown calibration error',
      })
    }
  }

  return {
    n: pairs.length,
    withinHalfBand: withinHalf,
    exactBand: exact,
    perBandCoverage,
    green,
    checks,
    baseline,
    report,
  }
}

/**
 * Helper: pull a CriterionBands object out of a loose record of code→number,
 * defaulting any missing criterion to the overall band (so a partial human mark
 * still yields a usable per-criterion series rather than NaN). Exported for the
 * admin route's row mapping.
 */
export function toCriterionBands(
  raw: Record<string, number> | null | undefined,
  fallbackOverall: number,
): CriterionBands {
  const out = {} as Record<string, number>
  for (const c of IELTS_CRITERIA) {
    const v = raw?.[c]
    out[c] = typeof v === 'number' && Number.isFinite(v) ? v : fallbackOverall
  }
  return out as CriterionBands
}
