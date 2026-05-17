// ─── Grade Predictor ─────────────────────────────────────────────────────────
// Convert raw AO marks on a GCSE/IGCSE English paper into a predicted 1-9 grade.
//
// IMPORTANT — validity / scope of the boundary model:
// The mark→grade thresholds below are averaged from the past five years of
// published *AQA* grade boundaries for English Language (8700) and Literature
// (8702). Exam boards do NOT publish a fixed mark-to-grade table — boundaries
// move year on year with cohort performance, and they differ between boards
// (AQA / Edexcel / OCR / Eduqas) and for Cambridge IGCSE (0500 / 0990) which
// uses A*–G / 9–1 scales that are not directly comparable.
//
// Until per-board boundaries are sourced, the AQA-derived table is applied as
// an *indicative cross-board proxy only*. Every prediction now carries a
// `boundarySource` tag so callers, the UI and the EU AI Act Art. 15
// accuracy/robustness eval harness (see /evals) can record that the figure is
// a proxy rather than a board-specific boundary. This is a conservative,
// non-breaking mitigation of the cross-board validity defect: behaviour for
// existing callers is unchanged (the new field is optional and the existing
// return shape is preserved); only provenance is now made explicit.
//
// Source: https://filestore.aqa.org.uk/sites/default/files/resources/grade-boundaries
// ────────────────────────────────────────────────────────────────────────────

import type { AOScore } from './mark-schemes/types'

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * Provenance of the grade-boundary model used for a prediction.
 *
 * - `"aqa-5yr-average-proxy"`: the AQA 8700/8702 five-year rolling-average
 *   table, applied as an *indicative proxy* (including for non-AQA boards
 *   pending board-specific boundaries).
 * - `"aqa-5yr-average"`: the same table applied to an AQA board, where it is
 *   a like-for-like (still indicative) estimate.
 */
export type BoundarySource = 'aqa-5yr-average' | 'aqa-5yr-average-proxy'

/**
 * Boards for which the AQA-derived table is a same-board (still indicative)
 * estimate rather than a cross-board proxy. Comparison is case-insensitive.
 */
const AQA_BOARD_ALIASES: ReadonlySet<string> = new Set(['aqa'])

/**
 * Resolve the boundary-model provenance for a given exam board.
 *
 * This is the non-breaking extension point for the cross-board validity fix:
 * callers that cannot adopt the new optional {@link GradePrediction.boundarySource}
 * field can still record provenance by calling this directly. When real
 * per-board boundaries are added, only this function and the threshold table
 * need to change.
 *
 * @param board - Exam board id/name (e.g. "AQA", "Edexcel", "cambridge-0500").
 *                When omitted or unrecognised the result is the cross-board
 *                proxy tag, which is the safe (least-overclaiming) default.
 */
export function getBoundarySource(board?: string | null): BoundarySource {
  if (!board) return 'aqa-5yr-average-proxy'
  const normalised = board.trim().toLowerCase()
  // Treat ids like "aqa", "aqa-lang-paper1" as AQA; everything else is a proxy.
  const isAqa = AQA_BOARD_ALIASES.has(normalised) || normalised.startsWith('aqa-')
  return isAqa ? 'aqa-5yr-average' : 'aqa-5yr-average-proxy'
}

export interface GradePrediction {
  /** Numeric GCSE grade ("9" = highest, "1" = lowest, "U" = ungraded). */
  grade: string
  /** Grade band, used for UI colour coding and summary messaging. */
  band: 'Grade 1-3' | 'Grade 4-5' | 'Grade 6-7' | 'Grade 8-9'
  /** Percentage mark (0-100). */
  percentage: number
  /** Total marks awarded out of the max available. */
  totalMarks: number
  /** Maximum marks available on the paper (or question). */
  maxMarks: number
  /** Distance (in marks) to the next grade up. */
  marksToNextGrade: number
  /** The grade above the current one, if any. */
  nextGrade?: string
  /**
   * Provenance of the grade-boundary model used. Optional and additive: existing
   * callers that ignore it are unaffected. When `predictGrade` /
   * `predictGradeFromTotals` are called with a `board`, this reflects whether
   * the AQA table was a same-board estimate or a cross-board proxy; when no
   * board is supplied it defaults to the conservative proxy tag.
   */
  boundarySource: BoundarySource
}

// ─── Thresholds ──────────────────────────────────────────────────────────────

/**
 * Indicative percentage thresholds (5-year rolling average) for the AQA
 * English Language (8700) and Literature (8702) full-paper grade boundaries.
 * These are *lower* bounds — a mark >= threshold earns that grade.
 */
const AQA_ENGLISH_THRESHOLDS: ReadonlyArray<{ grade: string; pct: number }> = [
  { grade: '9', pct: 82 },
  { grade: '8', pct: 73 },
  { grade: '7', pct: 64 },
  { grade: '6', pct: 55 },
  { grade: '5', pct: 46 },
  { grade: '4', pct: 37 },
  { grade: '3', pct: 28 },
  { grade: '2', pct: 19 },
  { grade: '1', pct: 10 },
]

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Predict an indicative GCSE grade from a list of per-AO scores.
 *
 * @param aoScores - Marks awarded per assessment objective.
 * @param questionMaxMarks - Optional override for the denominator. If omitted
 *                           we sum each AO's maxMarks.
 * @param board - Optional exam board id/name. Used only to tag
 *                {@link GradePrediction.boundarySource}; the numeric thresholds
 *                are unchanged (AQA five-year average proxy) until per-board
 *                boundaries are available. Omitting it yields the conservative
 *                cross-board proxy tag and otherwise behaves exactly as before.
 */
export function predictGrade(
  aoScores: readonly AOScore[],
  questionMaxMarks?: number,
  board?: string | null,
): GradePrediction {
  const totalMarks = aoScores.reduce((sum, ao) => sum + ao.marks, 0)
  const maxMarks = questionMaxMarks ?? aoScores.reduce((sum, ao) => sum + ao.maxMarks, 0)

  const percentage = maxMarks > 0 ? (totalMarks / maxMarks) * 100 : 0

  const { grade, nextGrade } = pickGrade(percentage)
  const band = toGradeBand(grade)
  const marksToNextGrade = calculateMarksToNextGrade(totalMarks, maxMarks, nextGrade)

  return {
    grade,
    band,
    percentage: round(percentage, 1),
    totalMarks,
    maxMarks,
    marksToNextGrade,
    nextGrade,
    // Indicative-proxy provenance for EU AI Act Art. 15 traceability. The
    // AQA-derived table is NOT a board-specific boundary set; see file header.
    boundarySource: getBoundarySource(board),
  }
}

/**
 * Predict a grade from a total mark / max mark pair (no AO breakdown).
 *
 * @param board - Optional exam board id/name; see {@link predictGrade}.
 */
export function predictGradeFromTotals(
  totalMarks: number,
  maxMarks: number,
  board?: string | null,
): GradePrediction {
  const synthetic: AOScore[] = [
    {
      id: 'TOTAL',
      label: 'Total',
      marks: totalMarks,
      maxMarks,
      band: '',
      justification: '',
    },
  ]
  return predictGrade(synthetic, maxMarks, board)
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pickGrade(percentage: number): { grade: string; nextGrade?: string } {
  for (let i = 0; i < AQA_ENGLISH_THRESHOLDS.length; i++) {
    const threshold = AQA_ENGLISH_THRESHOLDS[i]
    if (percentage >= threshold.pct) {
      const above = i > 0 ? AQA_ENGLISH_THRESHOLDS[i - 1].grade : undefined
      return { grade: threshold.grade, nextGrade: above }
    }
  }
  return { grade: 'U', nextGrade: '1' }
}

function toGradeBand(grade: string): GradePrediction['band'] {
  switch (grade) {
    case '9':
    case '8':
      return 'Grade 8-9'
    case '7':
    case '6':
      return 'Grade 6-7'
    case '5':
    case '4':
      return 'Grade 4-5'
    default:
      return 'Grade 1-3'
  }
}

function calculateMarksToNextGrade(
  totalMarks: number,
  maxMarks: number,
  nextGrade?: string,
): number {
  if (!nextGrade || maxMarks === 0) return 0
  const next = AQA_ENGLISH_THRESHOLDS.find((t) => t.grade === nextGrade)
  if (!next) return 0
  const marksNeeded = Math.ceil((next.pct / 100) * maxMarks)
  return Math.max(0, marksNeeded - totalMarks)
}

function round(value: number, dp: number): number {
  const factor = Math.pow(10, dp)
  return Math.round(value * factor) / factor
}
