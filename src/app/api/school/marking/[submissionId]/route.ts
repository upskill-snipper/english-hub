// ─── One essay in the teacher marking queue ─────────────────────────────────
// GET /api/school/marking/[submissionId]
//
// Everything a teacher needs to review one essay: the pupil's answer, the
// AI's mark for each assessment objective with its comment, the teacher's
// current adjustments, and the history of decisions.
//
// Scoped exactly like the queue (../../_lib/staff-scope.ts). An essay outside
// the viewer's scope answers 404, not 403, so the response does not confirm
// that another class's or another school's essay exists.
//
// Decisions are not made here. The page posts them to
// POST /api/marking/[submissionId]/review, which records the
// teacher_moderations row (including ao_corrections) and moves the status on.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { parseGradeToNumber } from '@/lib/marking/persistence'
import {
  errorResponse,
  notFoundResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import { canSeeSubmission, resolveStaffScope } from '../../_lib/staff-scope'
import {
  applyCorrections,
  latestCorrectionsBySubmission,
  parseAoBreakdown,
  type EffectiveAoMark,
} from '../../_lib/objectives'
import { ScopedReadError, readModerations, readPupilIdentities, wordCount } from '../../_lib/reads'

export const dynamic = 'force-dynamic'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const DETAIL_COLUMNS =
  'id, school_id, student_id, class_id, exam_board, qualification, paper, question_text,' +
  ' essay_title, essay_text, status, submitted_at, ai_score, ai_max_marks, ai_grade,' +
  ' ai_uncertainty_flags, ai_feedback, ai_ao_breakdown, final_teacher_mark,' +
  ' final_teacher_feedback, teacher_adjustment_reason, moderation_notes,' +
  ' teacher_reviewed_at, approved_at'

interface DetailRow {
  id: string
  school_id: string | null
  student_id: string
  class_id: string | null
  exam_board: string | null
  qualification: string | null
  paper: string | null
  question_text: string | null
  essay_title: string | null
  essay_text: string | null
  status: string
  submitted_at: string
  ai_score: number | null
  ai_max_marks: number | null
  ai_grade: string | null
  ai_uncertainty_flags: unknown
  ai_feedback: string | null
  ai_ao_breakdown: unknown
  final_teacher_mark: string | null
  final_teacher_feedback: string | null
  teacher_adjustment_reason: string | null
  moderation_notes: string | null
  teacher_reviewed_at: string | null
  approved_at: string | null
}

export interface SubmissionDetail {
  id: string
  studentId: string
  studentName: string | null
  yearGroup: string | null
  classId: string | null
  className: string | null
  examBoard: string | null
  qualification: string | null
  paper: string | null
  questionText: string | null
  title: string | null
  essayText: string
  wordCount: number
  status: string
  submittedAt: string
  aiScore: number | null
  aiMaxMarks: number | null
  /** The AI's grade as one of the review route's options ('9'..'1', 'U'), else null. */
  aiGrade: string | null
  /** The grade boundary behind the AI's grade was a proxy, not the board's own. */
  aiGradeIndicative: boolean
  aiFeedback: string | null
  /** The AI's objective marks with the teacher's current adjustments applied. */
  objectives: EffectiveAoMark[]
  finalGrade: string | null
  finalFeedback: string | null
  adjustmentReason: string | null
  moderationNotes: string | null
  reviewedAt: string | null
  approvedAt: string | null
  history: Array<{ decision: string; at: string | null; grade: string | null }>
}

/** The AI's grade text ("6+", "Grade 7", "U") as a review-route option. */
function gradeOption(raw: string | null): string | null {
  if (!raw) return null
  if (raw.trim().toUpperCase() === 'U') return 'U'
  const n = parseGradeToNumber(raw)
  return n === null ? null : String(n)
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ submissionId: string }> },
) {
  try {
    const { submissionId } = await params
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) return unauthorizedResponse('Sign in required')

    const limit = await rateLimit(`school-marking-detail:${user.id}`, {
      limit: 120,
      windowSeconds: 60,
    })
    if (!limit.success) return rateLimitResponse(limit.resetAt)

    const svc = createServiceRoleClient()
    const resolved = await resolveStaffScope(svc, user.id)
    if (!resolved.ok) return errorResponse(resolved.error, resolved.status)
    const { scope } = resolved

    // Not a uuid: no such essay. Postgres would reject it with 22P02, which
    // would otherwise surface as a server error.
    if (!UUID.test(submissionId)) {
      return notFoundResponse('That essay is not in your marking queue.')
    }

    const { data, error } = await svc
      .from('marking_submissions')
      .select(DETAIL_COLUMNS)
      .eq('id', submissionId)
      .maybeSingle()
    if (error) throw new ScopedReadError('marking_submissions', error.message)

    const row = data as DetailRow | null
    if (!row || !canSeeSubmission(scope, row)) {
      return notFoundResponse('That essay is not in your marking queue.')
    }

    const [moderations, pupils] = await Promise.all([
      readModerations(svc, [row.id]),
      readPupilIdentities(svc, scope.schoolId, [row.student_id]),
    ])
    const corrections = latestCorrectionsBySubmission(moderations).get(row.id)
    const pupil = pupils.get(row.student_id)
    const cls = row.class_id ? scope.classes.find((c) => c.id === row.class_id) : undefined
    const flags = Array.isArray(row.ai_uncertainty_flags) ? row.ai_uncertainty_flags : []

    const submission: SubmissionDetail = {
      id: row.id,
      studentId: row.student_id,
      studentName: pupil?.name ?? pupil?.email ?? null,
      yearGroup: pupil?.yearGroup ?? null,
      classId: row.class_id,
      className: cls?.name ?? null,
      examBoard: row.exam_board,
      qualification: row.qualification,
      paper: row.paper,
      questionText: row.question_text,
      title: row.essay_title ?? row.question_text ?? null,
      essayText: row.essay_text ?? '',
      wordCount: wordCount(row.essay_text),
      status: row.status,
      submittedAt: row.submitted_at,
      aiScore: row.ai_score,
      aiMaxMarks: row.ai_max_marks,
      aiGrade: gradeOption(row.ai_grade),
      aiGradeIndicative: flags.includes('GRADE_INDICATIVE_ONLY'),
      aiFeedback: row.ai_feedback,
      objectives: applyCorrections(parseAoBreakdown(row.ai_ao_breakdown), corrections),
      finalGrade: row.final_teacher_mark,
      finalFeedback: row.final_teacher_feedback,
      adjustmentReason: row.teacher_adjustment_reason,
      moderationNotes: row.moderation_notes,
      reviewedAt: row.teacher_reviewed_at,
      approvedAt: row.approved_at,
      history: moderations.map((m) => ({
        decision: m.decision,
        at: m.created_at,
        grade: m.teacher_grade,
      })),
    }

    return NextResponse.json({ submission })
  } catch (err) {
    console.error('[school/marking/[submissionId] GET] failed', err)
    return serverErrorResponse('We could not load this essay. Please try again.')
  }
}
