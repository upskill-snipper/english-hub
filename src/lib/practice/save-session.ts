import type { SupabaseClient } from '@supabase/supabase-js'
import type { PracticeQuestion } from '@/data/practice/types'
import { reportSaveFailure, type SaveFailureReporter } from '@/lib/save-failure-report'

/**
 * Saves one answered /practice question to `practice_sessions`, and says
 * whether it did.
 *
 * MOVED HERE FROM src/app/practice/page.tsx (10 October 2026) so that a failed
 * save can be reported and the reporting tested. Until then the page caught
 * every error and only showed the student "Could not save"; nothing reached
 * the team, so an empty table could not be told apart from a broken insert.
 * A failure is now reported once, through src/lib/save-failure-report.ts,
 * without the student's answer. practice-sessions-writes-real-columns.test.ts
 * reads the insert below for its column names.
 */
export async function savePracticeSession(
  supabase: SupabaseClient,
  {
    userId,
    currentQuestion,
    answer,
    rating,
    elapsed,
    timedMode,
  }: {
    userId: string
    currentQuestion: PracticeQuestion
    answer: string
    rating: number
    elapsed: number
    timedMode: boolean
  },
  report: SaveFailureReporter = reportSaveFailure,
): Promise<boolean> {
  try {
    // ─── Column names, verified against the live table ───────────────────
    //
    // THE DEFECT THIS FIXES (19 September 2026). This insert named five
    // columns that do not exist: question_id, board, answer, time_seconds
    // and timed_mode. The live table has exam_board, user_answer,
    // time_spent_seconds and a question_data JSONB, and has had since
    // 001_initial_schema.sql. So every save on this page failed, the student
    // saw "Could not save", and practice_sessions held 0 rows - ever.
    //
    // /dashboard/grades reads this table to count a student's practice, so
    // that count has been zero for everyone since the page shipped.
    //
    // Checked against information_schema on the production database rather
    // than against the migration, per CLAUDE.md structural fact 3: the
    // tracker records an intention, not a reality. Here they agreed, and it
    // was the CODE that had drifted.
    const { error, status } = await supabase.from('practice_sessions').insert({
      user_id: userId,
      exam_board: currentQuestion.board,
      paper: currentQuestion.paper != null ? String(currentQuestion.paper) : null,
      question_type: currentQuestion.questionType || currentQuestion.type || null,
      // The three fields with no column of their own. question_data is JSONB
      // and exists for exactly this, so nothing is silently dropped.
      question_data: {
        questionId: currentQuestion.id,
        title: currentQuestion.title ?? null,
        marks: currentQuestion.marks ?? null,
        timedMode,
      },
      user_answer: answer,
      // `rating` is 0 until the student picks a star, and the column is
      // CHECK (self_rating BETWEEN 1 AND 5). Sending 0 would fail the insert
      // for anyone who saved without rating themselves - a second, separate
      // reason this never worked. The column is nullable; unrated means null.
      self_rating: rating > 0 ? rating : null,
      time_spent_seconds: elapsed,
    })
    if (error) {
      report('practice', error, status)
      return false
    }
    return true
  } catch (err) {
    report('practice', err)
    return false
  }
}
