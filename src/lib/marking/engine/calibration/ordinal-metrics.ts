// ─── Ordinal Calibration Metrics — GCSE grades, KS3 / EAL levels ────────────
//
// The IELTS calibration (metrics.ts / gate.ts) measures agreement on a numeric
// BAND scale ("within half a band"). GCSE 9-1 grades and KS3/EAL levels are
// ORDINAL scales — ordered categories, not arithmetic numbers — so they need
// their own agreement metric: map each label to its position in the ordered
// scale, then measure exact and "within one step" agreement (the grade/level
// analogue of within-half-band).
//
// This module is the non-band half of the per-board calibration: Stage E selects
// THIS for gcse_grade / level shapes and the band metrics for IELTS. Pure: no DB,
// no model — deterministic and unit-testable with hand-built marks.
//
// WHY "within one step" is the headline: examiners routinely disagree by one
// grade/level; two grades apart is a material disagreement. So "AI lands on the
// human grade, or one either side" is the trust bar, mirroring how within-half-
// band is the IELTS bar.
// ───────────────────────────────────────────────────────────────────────────

import type { MarkingShape } from '@/lib/marking/marking-shapes'

/**
 * The ordered list of labels for a shape, BEST-LAST (so a higher index = a
 * higher attainment). GCSE grades are stored best-first (9..1,U); levels are
 * stored worst-first. We normalise to worst→best so "one step" is symmetric.
 *
 *  • gcse_grade: reverse the grades list, and drop 'U' to the bottom.
 *  • level:      the levels list is already worst→best.
 *
 * Returns null for a band shape (use the band metrics instead).
 */
export function orderedLabels(shape: MarkingShape): string[] | null {
  if (shape.kind === 'level') {
    return [...(shape.levels ?? [])]
  }
  if (shape.kind === 'gcse_grade') {
    const grades = [...(shape.grades ?? [])]
    // grades is best-first: ['9'..'1','U']. Put 'U' lowest, then 1..9 ascending.
    const u = grades.filter((g) => g === 'U')
    const numeric = grades
      .filter((g) => g !== 'U')
      .map((g) => Number(g))
      .filter((n) => Number.isFinite(n))
      .sort((a, b) => a - b)
      .map(String)
    return [...u, ...numeric] // worst (U) → best (9)
  }
  return null
}

/**
 * One ordinal mark pair: the AI label and the human label for the same script.
 */
export interface OrdinalPair {
  readonly ai: string
  readonly human: string
}

/** The rolled-up ordinal calibration report. */
export interface OrdinalReport {
  readonly count: number
  /** Fraction (0..1) where AI label === human label exactly. */
  readonly exactAgreement: number
  /** Fraction (0..1) where |index(AI) - index(human)| <= 1 (within one step). */
  readonly withinOneStep: number
  /** Mean absolute distance in steps (lower = closer). null for empty set. */
  readonly meanAbsDistance: number | null
  /** Per-label coverage of the HUMAN marks { label: count }. */
  readonly perLabelCoverage: Readonly<Record<string, number>>
}

/**
 * Compute the ordinal calibration report for a set of pairs against a shape.
 * Pairs whose labels aren't in the shape's ordered list are dropped (an
 * unrecognised label can't be positioned, so it can't be scored).
 */
export function summariseOrdinal(
  shape: MarkingShape,
  pairs: readonly OrdinalPair[],
): OrdinalReport {
  const labels = orderedLabels(shape)
  const indexOf = new Map<string, number>()
  if (labels) labels.forEach((l, i) => indexOf.set(l, i))

  let n = 0
  let exact = 0
  let withinOne = 0
  let distSum = 0
  const coverage: Record<string, number> = {}

  for (const p of pairs) {
    const ai = indexOf.get(p.ai)
    const human = indexOf.get(p.human)
    if (ai === undefined || human === undefined) continue
    n += 1
    coverage[p.human] = (coverage[p.human] ?? 0) + 1
    const dist = Math.abs(ai - human)
    if (dist === 0) exact += 1
    if (dist <= 1) withinOne += 1
    distSum += dist
  }

  return {
    count: n,
    exactAgreement: n === 0 ? 0 : exact / n,
    withinOneStep: n === 0 ? 0 : withinOne / n,
    meanAbsDistance: n === 0 ? null : distSum / n,
    perLabelCoverage: coverage,
  }
}

// ─── Ordinal gate ────────────────────────────────────────────────────────────

/** Minimum total pairs for an ordinal gate decision (mirrors the band gate). */
export const ORDINAL_MIN_SAMPLE_SIZE = 50
/** Minimum pairs per populated label. */
export const ORDINAL_MIN_PER_LABEL = 5
/** Minimum number of distinct populated labels (a genuine spread). */
export const ORDINAL_MIN_POPULATED_LABELS = 2
/**
 * Within-one-step floor. Set a touch higher than the band floor (0.80): a step
 * on a coarse grade/level scale is a larger real disagreement than half an IELTS
 * band, so we demand more of "within one".
 */
export const ORDINAL_WITHIN_ONE_FLOOR = 0.85

export type OrdinalGateCheck = 'sufficient-n' | 'label-coverage' | 'within-one-floor'

export interface OrdinalGateResult {
  readonly check: OrdinalGateCheck | 'ok'
  readonly passed: boolean
  readonly message: string
}

/**
 * Assess an ordinal report against the gate. Returns a per-check breakdown
 * (NOT throw-based — the run route surfaces the breakdown to the admin). `green`
 * is true only when every check passes.
 */
export function assessOrdinalGate(report: OrdinalReport): {
  green: boolean
  checks: OrdinalGateResult[]
} {
  const checks: OrdinalGateResult[] = []

  // 1. Sufficient n.
  if (report.count < ORDINAL_MIN_SAMPLE_SIZE) {
    checks.push({
      check: 'sufficient-n',
      passed: false,
      message: `Need >= ${ORDINAL_MIN_SAMPLE_SIZE} marked scripts; have ${report.count}.`,
    })
    return { green: false, checks }
  }

  // 2. Label coverage: >= MIN populated labels, each with >= MIN_PER_LABEL.
  const populated = Object.entries(report.perLabelCoverage).filter(([, c]) => c > 0)
  if (populated.length < ORDINAL_MIN_POPULATED_LABELS) {
    checks.push({
      check: 'label-coverage',
      passed: false,
      message: `Need a spread of >= ${ORDINAL_MIN_POPULATED_LABELS} grades/levels; only ${populated.length} populated.`,
    })
    return { green: false, checks }
  }
  for (const [label, count] of populated) {
    if (count < ORDINAL_MIN_PER_LABEL) {
      checks.push({
        check: 'label-coverage',
        passed: false,
        message: `Grade/level "${label}" has only ${count} script(s); need >= ${ORDINAL_MIN_PER_LABEL}.`,
      })
      return { green: false, checks }
    }
  }

  // 3. Within-one-step floor.
  if (report.withinOneStep < ORDINAL_WITHIN_ONE_FLOOR) {
    checks.push({
      check: 'within-one-floor',
      passed: false,
      message: `Within-one-step agreement ${report.withinOneStep.toFixed(3)} is below the floor ${ORDINAL_WITHIN_ONE_FLOOR}.`,
    })
    return { green: false, checks }
  }

  checks.push({
    check: 'ok',
    passed: true,
    message: 'All ordinal gate checks passed — area may go live.',
  })
  return { green: true, checks }
}
