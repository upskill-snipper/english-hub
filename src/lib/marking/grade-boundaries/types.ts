// ─── Per-Board Grade-Boundary Data Model ─────────────────────────────────────
// Typed, source-traceable grade-boundary tables for each GCSE/IGCSE English
// exam board. These replace the single AQA-derived proxy table that was
// previously applied to *every* board (the cross-board validity defect).
//
// DESIGN NOTES — read before editing the data modules:
//
//  • Boundaries are stored as PERCENTAGE thresholds (0-100), not raw marks.
//    Boards publish raw-mark boundaries against a fixed subject maximum
//    (usually 160, Eduqas 200). The marking tool, however, marks a *single
//    question / paper* with an arbitrary `maxMarks`. Normalising the published
//    raw boundary to a percentage of its own published maximum lets the same
//    table generalise across papers and totals. The percentage is the SOURCE
//    raw boundary ÷ SOURCE maximum, computed once from official figures and
//    frozen here with the raw inputs recorded for audit.
//
//  • `verified` MUST stay `false` until a human has checked the numbers in
//    this module against the official board PDF named in `sourceUrl` and
//    flipped the flag. The predictor treats `verified:false` exactly like a
//    missing table — it falls back to the AQA proxy and hard-flags the
//    result as indicative-only. Setting `verified:true` is the ONLY human
//    step required to make a board's real boundaries take effect.
//
//  • Never fabricate a figure. If a grade threshold cannot be sourced
//    confidently, set it to `null` and leave a `// TODO: verify ...` comment
//    pointing at the official source. `null` thresholds are skipped by the
//    percentage maths and treated as "unknown" (the board stays gated).
// ────────────────────────────────────────────────────────────────────────────

/** GCSE 9-1 grade keys (highest → lowest). 'U' is implicit (below grade 1). */
export type NumericGrade = '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2' | '1'

export const NUMERIC_GRADES: readonly NumericGrade[] = ['9', '8', '7', '6', '5', '4', '3', '2', '1']

/**
 * A single grade threshold expressed as a percentage of the paper maximum.
 * `pct` is the lower bound: a percentage >= `pct` earns this grade.
 *
 * `rawMark` / `rawMax` record the official published raw figures the
 * percentage was derived from, purely for audit/verification — they are NOT
 * used at runtime. `null` => the figure could not be sourced (board stays
 * gated for that grade; see file header).
 */
export interface GradeThreshold {
  grade: NumericGrade
  /** Lower-bound percentage (0-100), or null if unsourced. */
  pct: number | null
  /** Official published raw mark for this grade (audit only). */
  rawMark: number | null
  /** Official published subject/paper maximum the rawMark is out of (audit only). */
  rawMax: number | null
}

/**
 * The grade-boundary table for one qualification (one board + spec code).
 */
export interface BoardBoundaryTable {
  /** Canonical board id used as the registry key (e.g. "aqa", "edexcel"). */
  board: string
  /** Human-readable qualification + spec code, e.g. "AQA GCSE English (8700/8702)". */
  qualification: string
  /** Exam series the figures are taken from, e.g. "June 2024". */
  series: string
  /** Official source URL the figures were transcribed from. */
  sourceUrl: string
  /** ISO date the figures were retrieved/transcribed. */
  retrievedAt: string
  /**
   * Human verification gate. MUST be false until someone checks the numbers
   * against {@link sourceUrl} and flips it. The predictor treats false as
   * "do not use these numbers" (AQA-proxy fallback + indicative-only flag).
   */
  verified: boolean
  /**
   * Optional note explaining provenance caveats (e.g. "subject-level
   * boundary; Cambridge option-combination not modelled").
   */
  note?: string
  /** Percentage thresholds, ordered highest grade → lowest. */
  thresholds: readonly GradeThreshold[]
}

/**
 * Build a {@link GradeThreshold} list from official raw figures, computing the
 * percentage once. Pass `null` for any grade whose raw mark could not be
 * sourced — it propagates as an unsourced (null) percentage.
 *
 * @param rawMax  Official published subject/paper maximum (e.g. 160, 200).
 * @param raw     Map of grade → official raw mark (or null if unsourced).
 */
export function thresholdsFromRaw(
  rawMax: number,
  raw: Readonly<Record<NumericGrade, number | null>>,
): GradeThreshold[] {
  return NUMERIC_GRADES.map((grade) => {
    const rawMark = raw[grade]
    const pct = rawMark === null || rawMax <= 0 ? null : roundTo((rawMark / rawMax) * 100, 4)
    return { grade, pct, rawMark, rawMax: rawMark === null ? null : rawMax }
  })
}

function roundTo(value: number, dp: number): number {
  const f = Math.pow(10, dp)
  return Math.round(value * f) / f
}
