// ─── Live Examiner Calibration (auto from approved marks) ────────────────────
//
// Turns your examiners' own approved marks into per-board calibration anchors,
// automatically. Every time a marker approves/corrects a script it flows
// (anonymised + consent-gated) into the `training_data` corpus; this reads a
// small, mark-range-spread sample for the SAME board + question and renders it
// as calibration exemplars injected into the marking prompt.
//
// Result: the more your examiners mark a board, the closer the AI marks to them
// on that board - no engineer in the loop. This complements the hand-authored
// seed anchors in ./<board>.ts; both are shown to the model.
//
// HARD RULE: fail-open. Any error (DB down, no rows, bad data) returns [] so
// marking is NEVER blocked or delayed by the calibration layer.
// ────────────────────────────────────────────────────────────────────────────

import { createServiceRoleClient } from '@/lib/supabase/server'
import type { CalibrationExemplar } from './index'

/**
 * Map a mark scheme (board display name + scheme id) to the `exam_board` enum
 * value stored in marking_submissions / training_data. Mirrors the classifier
 * used by the mark-scheme coverage audit so the mapping stays consistent.
 */
export function schemeToExamBoard(board: string, schemeId: string): string | null {
  const h = `${board} ${schemeId}`.toLowerCase()
  if (h.includes('cambridge') && h.includes('0500')) return 'CAMBRIDGE_0500'
  if (h.includes('cambridge') && h.includes('0990')) return 'CAMBRIDGE_0990'
  if (h.includes('edexcel') && h.includes('igcse')) return 'EDEXCEL_IGCSE'
  if (h.includes('eduqas') || h.includes('wjec')) return 'EDUQAS'
  if (h.includes('aqa')) return 'AQA'
  if (h.includes('edexcel')) return 'EDEXCEL'
  if (h.includes('ocr')) return 'OCR'
  return null
}

interface TrainingRow {
  student_answer: string | null
  teacher_final_mark: number | null
  grade_band: string | null
  question_type: string | null
  paper: string | null
}

/** Pick an even spread of `n` items from a sorted array (low → high). */
export function spread<T>(arr: readonly T[], n: number): T[] {
  if (n <= 0) return []
  if (arr.length <= n) return [...arr]
  const out: T[] = []
  const step = (arr.length - 1) / (n - 1)
  for (let i = 0; i < n; i++) out.push(arr[Math.round(i * step)])
  // de-dupe while preserving order (rounding can collide on small arrays)
  return out.filter((v, i) => out.indexOf(v) === i)
}

/** Render one approved examiner mark as a compact calibration line. */
export function formatExaminerExemplar(row: TrainingRow, maxMarks?: number): string {
  const mark = row.teacher_final_mark
  const denom = typeof maxMarks === 'number' && maxMarks > 0 ? `/${maxMarks}` : ''
  const band = row.grade_band ? ` (${row.grade_band})` : ''
  const excerpt = (row.student_answer ?? '').replace(/\s+/g, ' ').trim().slice(0, 220)
  return `Examiner awarded ${mark}${denom}${band}: "${excerpt}${excerpt.length >= 220 ? '…' : ''}"`
}

export interface ExaminerExemplarQuery {
  /** Scheme board display name, e.g. "Edexcel IGCSE". */
  board: string
  /** Mark scheme id, e.g. "edexcel-igcse-lang-paper1". */
  markSchemeId: string
  /** Question id within the scheme, e.g. "Q4". */
  questionId: string
  /** The scheme question's questionType label (alternate match key). */
  questionType?: string
  /** Paper label, e.g. "Paper 1". */
  paper?: string
  /** Question max marks, for the "X/max" display. */
  maxMarks?: number
  /** How many exemplars to return (default 4). */
  limit?: number
}

/**
 * Fetch a mark-range-spread set of the team's approved examiner marks for this
 * board + question, as calibration exemplars. Returns [] on any problem.
 */
export async function getExaminerExemplars(
  query: ExaminerExemplarQuery,
): Promise<CalibrationExemplar[]> {
  try {
    const examBoard = schemeToExamBoard(query.board, query.markSchemeId)
    if (!examBoard) return []

    const limit = Math.max(1, Math.min(query.limit ?? 4, 8))
    const admin = createServiceRoleClient()

    // Match the specific question: question_type stores the scheme questionId or
    // questionType. Scoping to the question keeps mark ranges meaningful (Q1/2
    // vs Q6/45). If neither is known we can't safely scope, so bail.
    const questionKeys = Array.from(
      new Set([query.questionId, query.questionType].filter((v): v is string => !!v)),
    )
    if (questionKeys.length === 0) return []

    let req = admin
      .from('training_data')
      .select('student_answer, teacher_final_mark, grade_band, question_type, paper')
      .eq('exam_board', examBoard)
      .in('question_type', questionKeys)
      .not('teacher_final_mark', 'is', null)
      .order('created_at', { ascending: false })
      .limit(60)
    if (query.paper) req = req.eq('paper', query.paper)

    const { data, error } = await req
    if (error || !data) return []

    const rows = (data as unknown as TrainingRow[]).filter(
      (r) => typeof r.teacher_final_mark === 'number' && !!r.student_answer,
    )
    if (rows.length === 0) return []

    rows.sort((a, b) => (a.teacher_final_mark as number) - (b.teacher_final_mark as number))
    const picked = spread(rows, limit)

    return picked.map((r, i) => ({
      ref: `examiner-${i + 1}`,
      summary: formatExaminerExemplar(r, query.maxMarks),
    }))
  } catch {
    return []
  }
}
