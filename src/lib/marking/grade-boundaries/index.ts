// ─── Grade-Boundary Registry ─────────────────────────────────────────────────
// Single lookup keyed by a normalised board id. Resolves the per-board,
// source-traceable boundary table for the grade predictor.
//
// IMPORTANT: a table is only *usable* by the predictor when it both exists
// AND has `verified === true`. Until a human verifies the transcribed numbers
// against the official board PDF and flips that flag, every board falls back
// to the AQA proxy with a hard indicative-only signal. This is the deliberate
// safety gate - see ./types.ts header and getUsableBoundaryTable() below.
// ────────────────────────────────────────────────────────────────────────────

import type { BoardBoundaryTable, GradeThreshold } from './types'
import { aqaBoundaries } from './aqa'
import { edexcelBoundaries } from './edexcel'
import { ocrBoundaries } from './ocr'
import { eduqasBoundaries } from './eduqas'
import { cambridge0500Boundaries, cambridge0990Boundaries } from './cambridge'

export type { BoardBoundaryTable, GradeThreshold, NumericGrade } from './types'
export { NUMERIC_GRADES, thresholdsFromRaw } from './types'

/**
 * Registry keyed by canonical board id. Keys intentionally align with the
 * `ExamBoard` ids in src/lib/board/board-config.ts where they overlap.
 */
export const GRADE_BOUNDARY_REGISTRY: Readonly<Record<string, BoardBoundaryTable>> = {
  aqa: aqaBoundaries,
  edexcel: edexcelBoundaries,
  ocr: ocrBoundaries,
  eduqas: eduqasBoundaries,
  'cambridge-0500': cambridge0500Boundaries,
  'cambridge-0990': cambridge0990Boundaries,
}

/**
 * Normalise an arbitrary board identifier to a registry key.
 *
 * Accepts BOTH:
 *  • mark-scheme `MarkScheme.board` display strings ("AQA", "Edexcel",
 *    "OCR", "WJEC Eduqas", "Cambridge", "Cambridge (9-1)"), and
 *  • `ExamBoard` config ids ("aqa", "edexcel", "cambridge-0500", …).
 *
 * Returns the canonical key, or `null` if it cannot be mapped (the predictor
 * then uses the proxy + indicative-only signal - the safe default).
 */
export function normaliseBoardId(board?: string | null): string | null {
  if (!board) return null
  const raw = board.trim().toLowerCase()
  if (!raw) return null

  // Exact registry key already.
  if (raw in GRADE_BOUNDARY_REGISTRY) return raw

  // Cambridge variants. 0990 is the "9-1" syllabus; 0500 is the A*-G one.
  if (raw.includes('cambridge') || raw.startsWith('cie') || raw.includes('igcse')) {
    if (raw.includes('0990') || raw.includes('9-1') || raw.includes('9-1')) {
      return 'cambridge-0990'
    }
    if (raw.includes('0500')) return 'cambridge-0500'
    // Bare "Cambridge" (the 0500 mark schemes' board label) → 0500 (A*-G).
    if (raw === 'cambridge') return 'cambridge-0500'
    return null
  }

  // GCSE boards: match on a contained token so "WJEC Eduqas",
  // "Pearson Edexcel", "aqa-lang-paper1" etc. all resolve.
  if (raw === 'aqa' || raw.startsWith('aqa-') || raw.startsWith('aqa ')) return 'aqa'
  if (raw.includes('edexcel') || raw.includes('pearson')) return 'edexcel'
  if (raw.includes('ocr')) return 'ocr'
  if (raw.includes('eduqas') || raw.includes('wjec')) return 'eduqas'

  return null
}

/**
 * Resolve the registered table for a board (verified or not). Use
 * {@link getUsableBoundaryTable} for the predictor path - this raw accessor
 * is for diagnostics / the verification workflow / tests.
 */
export function getBoundaryTable(board?: string | null): BoardBoundaryTable | null {
  const key = normaliseBoardId(board)
  return key ? (GRADE_BOUNDARY_REGISTRY[key] ?? null) : null
}

/**
 * Resolve a table the predictor is allowed to use for real grades.
 *
 * Returns the table ONLY when all of the following hold:
 *   • the board maps to a registered table,
 *   • that table is `verified === true`, and
 *   • it has at least one usable (non-null) percentage threshold.
 *
 * Otherwise returns `null`, signalling the caller to fall back to the AQA
 * proxy and flag the result indicative-only. This is the unverified-gate.
 */
export function getUsableBoundaryTable(board?: string | null): BoardBoundaryTable | null {
  const table = getBoundaryTable(board)
  if (!table) return null
  if (!table.verified) return null
  if (!hasUsableThresholds(table.thresholds)) return null
  return table
}

/** True if at least one threshold has a usable (non-null) percentage. */
export function hasUsableThresholds(thresholds: readonly GradeThreshold[]): boolean {
  return thresholds.some((t) => t.pct !== null && Number.isFinite(t.pct))
}
