// ─── Grade Predictor ─────────────────────────────────────────────────────────
// Convert raw AO marks on a GCSE/IGCSE English paper into a predicted 1-9
// grade, using PER-BOARD published grade boundaries where they are available
// and human-verified.
//
// VALIDITY / SCOPE — read before changing the boundary model:
//
// Exam boards do NOT publish a fixed mark→grade table; boundaries move year on
// year with cohort performance and differ between boards. We now hold a typed,
// source-traceable boundary table per board in ./grade-boundaries (one module
// per board + a registry). The predictor resolves the student's board and:
//
//   • If the board maps to a registered table that is `verified: true` and has
//     usable thresholds → those board-specific, percentage-normalised
//     boundaries are used. `boundarySource` reflects the board + series.
//
//   • Otherwise (unknown board, table not yet human-verified, or thresholds
//     missing/PROVISIONAL) → we FALL BACK to the AQA five-year-average proxy
//     curve, AND return a hard signal: `boundarySource:
//     'aqa-proxy-unverified'` plus `indicativeOnly: true`, so the API/UI and
//     the EU AI Act Art. 15 accuracy/robustness harness can suppress or
//     clearly label the numeric grade rather than over-claim a board-specific
//     result.
//
// This keeps the public return shape backward-compatible (new fields are
// additive/optional in spirit; existing callers that ignore them are
// unaffected) while removing the cross-board *numeric* defect: non-AQA
// students now either get verified board boundaries, or an explicitly
// flagged indicative proxy — never a silently mis-calibrated AQA grade.
//
// The ONLY remaining human step to make a board's real boundaries take effect
// is to verify its transcribed numbers against the official PDF and flip
// `verified` to true in that board's module under ./grade-boundaries.
// ────────────────────────────────────────────────────────────────────────────

import type { AOScore } from './mark-schemes/types'
import {
  getUsableBoundaryTable,
  normaliseBoardId,
  type BoardBoundaryTable,
} from './grade-boundaries'

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * Provenance of the grade-boundary model used for a prediction.
 *
 * - `"board-verified"`: a per-board, human-verified published boundary table
 *   from ./grade-boundaries was used. The specific board/series is in
 *   {@link GradePrediction.boundaryDetail}.
 * - `"aqa-5yr-average"`: the AQA five-year-average curve applied to an AQA
 *   board (a same-board, still-indicative estimate) — used when AQA's own
 *   verified table is not yet enabled.
 * - `"aqa-5yr-average-proxy"`: the AQA curve applied as a cross-board proxy
 *   (legacy provenance tag; retained for backward compatibility).
 * - `"aqa-proxy-unverified"`: the AQA curve applied as a fallback because the
 *   resolved board has no verified/usable boundary table. Paired with
 *   `indicativeOnly: true`; callers SHOULD suppress or clearly label the grade.
 */
export type BoundarySource =
  | 'board-verified'
  | 'aqa-5yr-average'
  | 'aqa-5yr-average-proxy'
  | 'aqa-proxy-unverified'

/**
 * Boards for which the AQA-derived table is a same-board (still indicative)
 * estimate rather than a cross-board proxy. Comparison is case-insensitive.
 */
const AQA_BOARD_ALIASES: ReadonlySet<string> = new Set(['aqa'])

/**
 * Resolve the boundary-model provenance for a given exam board.
 *
 * Retained as a stable, standalone helper for callers that record provenance
 * without adopting the richer prediction fields. It now reflects the
 * verification gate:
 *  • a registered + verified + usable board table → `"board-verified"`
 *  • AQA with no verified table → `"aqa-5yr-average"`
 *  • any other board with no verified table → `"aqa-proxy-unverified"`
 *  • no board supplied → `"aqa-5yr-average-proxy"` (conservative legacy tag)
 *
 * @param board - Exam board id/name (e.g. "AQA", "Edexcel", "cambridge-0500").
 */
export function getBoundarySource(board?: string | null): BoundarySource {
  if (getUsableBoundaryTable(board)) return 'board-verified'
  if (!board) return 'aqa-5yr-average-proxy'
  const normalised = board.trim().toLowerCase()
  const isAqa =
    AQA_BOARD_ALIASES.has(normalised) ||
    normalised.startsWith('aqa-') ||
    normaliseBoardId(board) === 'aqa'
  return isAqa ? 'aqa-5yr-average' : 'aqa-proxy-unverified'
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
   * Provenance of the grade-boundary model used. Optional and additive:
   * existing callers that ignore it are unaffected.
   */
  boundarySource: BoundarySource
  /**
   * Hard signal that the numeric grade is an indicative proxy, NOT a
   * board-specific result. `true` whenever the AQA proxy curve was used as a
   * fallback because the student's board has no verified/usable boundary
   * table. Callers (API/UI) SHOULD suppress or clearly label the grade when
   * this is true. Absent/false ⇒ board-verified boundaries were used.
   */
  indicativeOnly?: boolean
  /**
   * Human-readable provenance detail for traceability (EU AI Act Art. 12/15),
   * e.g. "AQA GCSE English (8700) — June 2024" or
   * "AQA 5-year-average proxy (board 'edexcel' not yet verified)".
   */
  boundaryDetail?: string
}

// ─── Thresholds ──────────────────────────────────────────────────────────────

interface PctThreshold {
  grade: string
  pct: number
}

/**
 * Indicative percentage thresholds (5-year rolling average) for the AQA
 * English Language (8700) / Literature (8702) full-paper grade boundaries.
 * Used ONLY as the fallback proxy when a board has no verified table. These
 * are *lower* bounds — a mark >= threshold earns that grade.
 *
 * NOTE: kept numerically identical to the historical proxy table so the
 * fallback path is behaviour-preserving for existing callers/tests.
 */
const AQA_PROXY_THRESHOLDS: ReadonlyArray<PctThreshold> = [
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
 * Predict a GCSE grade from a list of per-AO scores.
 *
 * @param aoScores - Marks awarded per assessment objective.
 * @param questionMaxMarks - Optional override for the denominator. If omitted
 *                           we sum each AO's maxMarks.
 * @param board - Optional exam board id/name (mark-scheme `board` string or
 *                `ExamBoard` id). When it resolves to a verified board table
 *                those boundaries are used; otherwise the AQA proxy is used
 *                and the result is flagged `indicativeOnly`. Omitting it
 *                behaves exactly as the legacy proxy did.
 */
export function predictGrade(
  aoScores: readonly AOScore[],
  questionMaxMarks?: number,
  board?: string | null,
): GradePrediction {
  const totalMarks = aoScores.reduce((sum, ao) => sum + ao.marks, 0)
  const maxMarks = questionMaxMarks ?? aoScores.reduce((sum, ao) => sum + ao.maxMarks, 0)

  const percentage = maxMarks > 0 ? (totalMarks / maxMarks) * 100 : 0

  const model = resolveBoundaryModel(board)

  const { grade, nextGrade } = pickGrade(percentage, model.thresholds)
  const band = toGradeBand(grade)
  const marksToNextGrade = calculateMarksToNextGrade(
    totalMarks,
    maxMarks,
    nextGrade,
    model.thresholds,
  )

  return {
    grade,
    band,
    percentage: round(percentage, 1),
    totalMarks,
    maxMarks,
    marksToNextGrade,
    nextGrade,
    boundarySource: model.source,
    indicativeOnly: model.indicativeOnly,
    boundaryDetail: model.detail,
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

// ─── Boundary-model resolution ───────────────────────────────────────────────

interface ResolvedBoundaryModel {
  thresholds: ReadonlyArray<PctThreshold>
  source: BoundarySource
  indicativeOnly: boolean
  detail: string
}

/**
 * Pick the boundary curve for a board. Verified board table if available;
 * otherwise the AQA proxy with a hard indicative-only signal.
 */
function resolveBoundaryModel(board?: string | null): ResolvedBoundaryModel {
  const table = getUsableBoundaryTable(board)
  if (table) {
    return {
      thresholds: toPctThresholds(table),
      source: 'board-verified',
      indicativeOnly: false,
      detail: `${table.qualification} — ${table.series} (verified; source: ${table.sourceUrl})`,
    }
  }

  // Fallback: AQA proxy curve. Distinguish AQA-on-AQA from cross-board proxy
  // and from "no board supplied" for accurate provenance, but the numbers
  // (and therefore behaviour) are identical in every fallback case.
  const source = getBoundarySource(board)
  const indicativeOnly = source !== 'board-verified'
  let detail: string
  if (!board) {
    detail = 'AQA 5-year-average proxy (no board supplied) — indicative only'
  } else if (source === 'aqa-5yr-average') {
    detail =
      'AQA 5-year-average curve (AQA board; verified AQA table not yet enabled) — indicative only'
  } else {
    const key = normaliseBoardId(board)
    detail =
      `AQA 5-year-average proxy (board ${JSON.stringify(board)}` +
      (key ? ` → '${key}'` : '') +
      ' has no verified boundary table) — indicative only'
  }
  return { thresholds: AQA_PROXY_THRESHOLDS, source, indicativeOnly, detail }
}

/**
 * Project a board table's percentage thresholds onto the predictor's shape,
 * dropping any unsourced (null) grades. Highest grade first (pickGrade relies
 * on descending order for `nextGrade`).
 */
function toPctThresholds(table: BoardBoundaryTable): PctThreshold[] {
  return table.thresholds
    .filter(
      (
        t,
      ): t is {
        grade: typeof t.grade
        pct: number
        rawMark: number | null
        rawMax: number | null
      } => t.pct !== null && Number.isFinite(t.pct),
    )
    .map((t) => ({ grade: t.grade, pct: t.pct }))
    .sort((a, b) => b.pct - a.pct)
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pickGrade(
  percentage: number,
  thresholds: ReadonlyArray<PctThreshold>,
): { grade: string; nextGrade?: string } {
  for (let i = 0; i < thresholds.length; i++) {
    const threshold = thresholds[i]
    if (percentage >= threshold.pct) {
      const above = i > 0 ? thresholds[i - 1].grade : undefined
      return { grade: threshold.grade, nextGrade: above }
    }
  }
  return {
    grade: 'U',
    nextGrade: thresholds.length ? thresholds[thresholds.length - 1].grade : '1',
  }
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
  nextGrade: string | undefined,
  thresholds: ReadonlyArray<PctThreshold>,
): number {
  if (!nextGrade || maxMarks === 0) return 0
  const next = thresholds.find((t) => t.grade === nextGrade)
  if (!next) return 0
  const marksNeeded = Math.ceil((next.pct / 100) * maxMarks)
  return Math.max(0, marksNeeded - totalMarks)
}

function round(value: number, dp: number): number {
  const factor = Math.pow(10, dp)
  return Math.round(value * factor) / factor
}
