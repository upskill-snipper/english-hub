// ─── AI ↔ Examiner Agreement (per board) ─────────────────────────────────────
//
// Pure helpers that summarise how closely the AI's predicted mark matches the
// examiner's final mark, per exam board, from the approved training_data corpus.
// This powers the per-board agreement dashboard so you can SEE the AI tracking
// your examiners more closely as they mark more (the calibration loop working).
//
// Pure + dependency-free so it's unit-testable; the API layer just feeds rows in.
// ────────────────────────────────────────────────────────────────────────────

export interface AgreementInputRow {
  exam_board: string | null
  ai_predicted_mark: number | null
  teacher_final_mark: number | null
}

export interface BoardAgreement {
  /** Stored exam_board value, e.g. "EDEXCEL_IGCSE". */
  board: string
  /** Number of usable (both marks present) pairs. */
  n: number
  /** % where AI mark exactly equals the examiner mark. */
  exactPct: number
  /** % where the AI mark is within 1 of the examiner mark. */
  within1Pct: number
  /** Mean absolute difference (examiner − AI), rounded to 2dp. */
  meanAbsError: number
}

function round(n: number, dp = 1): number {
  const f = 10 ** dp
  return Math.round(n * f) / f
}

/**
 * Group usable rows by board and compute agreement stats. Rows missing either
 * mark, or with a null/blank board, are ignored. Returns boards sorted by
 * sample size (largest first).
 */
export function boardAgreementFromRows(rows: readonly AgreementInputRow[]): BoardAgreement[] {
  const byBoard = new Map<string, number[]>() // board → abs deltas... we keep raw deltas
  const rawByBoard = new Map<string, number[]>()

  for (const r of rows) {
    const board = (r.exam_board ?? '').trim()
    if (!board) continue
    if (typeof r.ai_predicted_mark !== 'number' || typeof r.teacher_final_mark !== 'number')
      continue
    const delta = r.teacher_final_mark - r.ai_predicted_mark
    if (!rawByBoard.has(board)) rawByBoard.set(board, [])
    rawByBoard.get(board)!.push(delta)
    if (!byBoard.has(board)) byBoard.set(board, [])
    byBoard.get(board)!.push(Math.abs(delta))
  }

  const out: BoardAgreement[] = []
  for (const [board, deltas] of rawByBoard) {
    const n = deltas.length
    if (n === 0) continue
    const exact = deltas.filter((d) => d === 0).length
    const within1 = deltas.filter((d) => Math.abs(d) <= 1).length
    const mae = deltas.reduce((s, d) => s + Math.abs(d), 0) / n
    out.push({
      board,
      n,
      exactPct: round((exact / n) * 100),
      within1Pct: round((within1 / n) * 100),
      meanAbsError: round(mae, 2),
    })
  }

  out.sort((a, b) => b.n - a.n)
  return out
}
