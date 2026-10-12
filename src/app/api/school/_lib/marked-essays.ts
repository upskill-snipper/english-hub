// ─── Load a viewer's marked essays for the objective views ─────────────────
//
// One loader shared by the department view (/api/school/analytics/marking)
// and the pupil view (/api/school/students/[studentId]), so a pupil's
// strengths on their own page and in the department table are the same
// numbers from the same rows. Scope comes from the caller's StaffScope;
// failures throw (see reads.ts).
// ────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'
import {
  AWAITING_REVIEW_STATUSES,
  MARKED_STATUSES,
  NOT_YET_MARKED_STATUSES,
  REVIEWED_STATUSES,
  applyCorrections,
  latestCorrectionsBySubmission,
  parseAoBreakdown,
  type MarkedEssay,
} from './objectives'
import { readModerations, readScopedSubmissions, subjectOf, type SubmissionFilter } from './reads'
import type { StaffScope } from './staff-scope'

export const ESSAY_COLUMNS =
  'id, school_id, student_id, class_id, exam_board, qualification, mark_scheme_id,' +
  ' question_text, essay_title, status, submitted_at, ai_score, ai_max_marks, ai_ao_breakdown'

export interface EssayRow {
  id: string
  school_id: string | null
  student_id: string
  class_id: string | null
  exam_board: string | null
  qualification: string | null
  mark_scheme_id: string | null
  question_text: string | null
  essay_title: string | null
  status: string
  submitted_at: string
  ai_score: number | null
  ai_max_marks: number | null
  ai_ao_breakdown: unknown
}

export interface ReviewedEssay extends MarkedEssay {
  /** A teacher has recorded at least one decision on it. */
  reviewed: boolean
  status: string
  submittedAt: string
  title: string | null
  /** The mark scheme and question together, so the same question groups. */
  questionKey: string
  questionText: string | null
}

export interface StatusTotals {
  /** Every essay in scope, whatever its state. */
  essays: number
  notYetMarked: number
  awaitingReview: number
  reviewed: number
  rejected: number
  /** Marked essays whose stored objective breakdown could not be read. */
  markedWithoutBreakdown: number
}

export interface LoadedEssays {
  rows: EssayRow[]
  /** Marked essays only, with any teacher adjustments applied. */
  essays: ReviewedEssay[]
  totals: StatusTotals
  /** The limit left older essays out; the figures cover the newest only. */
  truncated: boolean
}

/** The essays the viewer may see, ready for the aggregation in objectives.ts. */
export async function loadMarkedEssays(
  svc: SupabaseClient,
  scope: StaffScope,
  filter: Omit<SubmissionFilter, 'statuses' | 'excludeStatuses'>,
): Promise<LoadedEssays> {
  const { rows, total } = await readScopedSubmissions<EssayRow>(svc, scope, ESSAY_COLUMNS, filter)

  const marked = rows.filter((r) => MARKED_STATUSES.includes(r.status))
  const moderations = await readModerations(
    svc,
    marked.map((r) => r.id),
  )
  const corrections = latestCorrectionsBySubmission(moderations)
  const decided = new Set(moderations.map((m) => m.submission_id))

  let markedWithoutBreakdown = 0
  const essays: ReviewedEssay[] = []
  for (const row of marked) {
    const ai = parseAoBreakdown(row.ai_ao_breakdown)
    if (ai.length === 0) {
      markedWithoutBreakdown += 1
      continue
    }
    const subject = subjectOf(row)
    essays.push({
      submissionId: row.id,
      studentId: row.student_id,
      classId: row.class_id,
      subjectKey: subject.key,
      subjectLabel: subject.label,
      aos: applyCorrections(ai, corrections.get(row.id)),
      reviewed: decided.has(row.id),
      status: row.status,
      submittedAt: row.submitted_at,
      title: row.essay_title ?? row.question_text ?? null,
      questionKey: `${row.mark_scheme_id ?? ''}::${(row.question_text ?? row.essay_title ?? '').trim()}`,
      questionText: row.question_text ?? row.essay_title ?? null,
    })
  }

  const count = (statuses: readonly string[]) =>
    rows.filter((r) => statuses.includes(r.status)).length

  return {
    rows,
    essays,
    totals: {
      essays: rows.length,
      notYetMarked: count(NOT_YET_MARKED_STATUSES),
      awaitingReview: count(AWAITING_REVIEW_STATUSES),
      reviewed: count(REVIEWED_STATUSES.filter((s) => s !== 'rejected')),
      rejected: count(['rejected']),
      markedWithoutBreakdown,
    },
    truncated: total > rows.length,
  }
}
