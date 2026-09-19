// ─── A finished mock exam, recorded where the grade dashboard can see it ────
//
// SF-4 asked for each mock attempt - multiple-choice score, elapsed time and
// per-question answers - to land in `practice_sessions` so it appears in
// /dashboard/grades. Until 19 September 2026 nothing was persisted at all: a
// student could sit a full paper, read the results screen and leave no trace,
// while the dashboard told them they had done no practice.
//
// COLUMN NAMES ARE THE ONES THE TABLE REALLY HAS. The neighbouring insert on
// /practice named five columns that do not exist, so every save there failed
// and the table held zero rows for months. These were read from
// information_schema on production on 19 September 2026:
//
//   id, user_id, exam_board, paper, question_type, question_data,
//   user_answer, self_rating, time_spent_seconds, created_at
//
// `self_rating` is CHECK (self_rating BETWEEN 1 AND 5) and a mock exam has no
// self-rating, so it is left null rather than sent as 0.
//
// WHAT IS STORED, AND WHY. The student's own written answers, under their own
// RLS-owned row, which is the same category of data the practice page already
// stores in `user_answer` on the same table - not a new one. It is what makes
// the attempt worth revisiting rather than a bare count. The retention crons in
// docs/system/09 cover this table.
//
// WHAT IS NOT STORED: no mark for written work. The app has never scored a
// written answer on this surface and must not start here; the results view is
// explicit that written answers are self-marked against the mark scheme.

import type { SupabaseClient } from '@supabase/supabase-js'

export interface MockAttemptQuestion {
  number: number
  label: string
  marks: number
  isMultipleChoice?: boolean
  /** Marks earned, for multiple choice only. Null for written answers. */
  earned: number | null
  /** The student's written answer, empty for multiple choice. */
  answer: string
}

export interface MockAttempt {
  paperId: string
  paperName: string
  examBoard: string
  paperType: string
  paperNumber: number
  elapsedSeconds: number
  questions: MockAttemptQuestion[]
}

export interface PersistOutcome {
  /** False when nothing was attempted, e.g. a signed-out visitor. */
  attempted: boolean
  saved: boolean
  /** Present when a save was attempted and failed. */
  error?: string
}

/** Marks earned and available across the multiple-choice questions only. */
export function multipleChoiceScore(questions: MockAttemptQuestion[]): {
  earned: number
  available: number
} {
  let earned = 0
  let available = 0
  for (const q of questions) {
    if (q.earned === null) continue
    earned += q.earned
    available += q.marks
  }
  return { earned, available }
}

/**
 * The row this attempt becomes. Split out from the write so the shape can be
 * asserted without a database.
 */
export function attemptRow(userId: string, attempt: MockAttempt) {
  const mc = multipleChoiceScore(attempt.questions)
  return {
    user_id: userId,
    exam_board: attempt.examBoard,
    paper: attempt.paperName,
    // Distinguishes a whole-paper attempt from the single-question rows
    // /practice writes, so the dashboard can tell them apart later.
    question_type: 'mock-exam',
    question_data: {
      paperId: attempt.paperId,
      paperType: attempt.paperType,
      paperNumber: attempt.paperNumber,
      multipleChoiceEarned: mc.earned,
      multipleChoiceAvailable: mc.available,
      questions: attempt.questions.map((q) => ({
        number: q.number,
        label: q.label,
        marks: q.marks,
        earned: q.earned,
        answer: q.answer,
        words: q.answer.trim() ? q.answer.trim().split(/\s+/).length : 0,
      })),
    },
    user_answer: null,
    // A mock exam has no self-rating, and 0 would fail the CHECK constraint.
    self_rating: null,
    time_spent_seconds: attempt.elapsedSeconds,
  }
}

/**
 * Write the attempt. Never throws: a failed save must not take away the
 * results screen the student has just earned.
 *
 * It does NOT fail silently either, which is the distinction that matters
 * here. The outcome is returned so the caller can say so on screen, because a
 * caught exception with a reassuring comment is the single most common defect
 * in this codebase.
 */
export async function persistMockAttempt(
  supabase: SupabaseClient,
  userId: string | null | undefined,
  attempt: MockAttempt,
): Promise<PersistOutcome> {
  if (!userId) return { attempted: false, saved: false }

  try {
    const { error } = await supabase.from('practice_sessions').insert(attemptRow(userId, attempt))
    if (error) {
      console.error('[mock-exams] could not save attempt', error)
      return { attempted: true, saved: false, error: error.message }
    }
    return { attempted: true, saved: true }
  } catch (err) {
    console.error('[mock-exams] could not save attempt', err)
    return {
      attempted: true,
      saved: false,
      error: err instanceof Error ? err.message : 'unknown error',
    }
  }
}
