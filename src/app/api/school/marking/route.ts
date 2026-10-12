// ─── Teacher marking queue ─────────────────────────────────────────────────
// GET /api/school/marking
//
// The essays a member of school staff may review, newest first:
//   * admin and head_of_department: the whole school;
//   * teacher: the classes whose classes.teacher_id is their school_members.id;
//   * anyone else: 403.
//
// A DEFECT, FIXED 12 OCTOBER 2026. This route read marking_submissions,
// classes, profiles and teacher_moderations through the signed-in teacher's
// own Supabase session, so row-level security decided what came back, and it
// answered every failure with `{ submissions: [] }`. Production RLS on the
// school tables was recursing (42P17), so every read failed and every
// teacher would have been told "no submissions yet" whatever their pupils had
// written; and because RLS on profiles lets a user read only their own row,
// every pupil who did appear would have been called "Student". A missing
// table, a denied read and a teacher with genuinely no work were
// indistinguishable.
//
// Now: reads use the service role and are scoped explicitly by membership
// (../_lib/staff-scope.ts); pupils' names are read server-side for the pupils
// in scope only (../_lib/reads.ts); and any failure answers with an error
// status. A teacher who teaches no classes gets `hasClasses: false`, which the
// page states plainly, instead of an empty list that looks like a quiet week.
//
// The list carries no essay text. The full submission, with its objective
// marks, comes from GET /api/school/marking/[submissionId] when a teacher
// opens it.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import {
  errorResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import { resolveStaffScope } from '../_lib/staff-scope'
import {
  readModerations,
  readPupilIdentities,
  readScopedSubmissions,
  wordCount,
} from '../_lib/reads'
import { AWAITING_REVIEW_STATUSES, NOT_YET_MARKED_STATUSES } from '../_lib/objectives'

export const dynamic = 'force-dynamic'

/**
 * Essays still needing the teacher (or still with the AI) are all listed, up
 * to a ceiling no real department reaches; finished essays only the newest.
 * One cap over both, as there was, would let a busy week of approvals push
 * an older essay that still needs review off the bottom of the queue with
 * nothing to say it was there.
 */
const OPEN_STATUSES = [...AWAITING_REVIEW_STATUSES, ...NOT_YET_MARKED_STATUSES]
const OPEN_LIMIT = 2000
const DONE_LIMIT = 200

const LIST_COLUMNS =
  'id, school_id, student_id, class_id, exam_board, question_text, essay_title, essay_text,' +
  ' status, submitted_at, ai_score, ai_max_marks, final_teacher_mark, teacher_reviewed_at'

interface ListRow {
  id: string
  school_id: string | null
  student_id: string
  class_id: string | null
  exam_board: string | null
  question_text: string | null
  essay_title: string | null
  essay_text: string | null
  status: string
  submitted_at: string
  ai_score: number | null
  ai_max_marks: number | null
  final_teacher_mark: string | null
  teacher_reviewed_at: string | null
}

/** One row of the queue, as the page renders it. */
export interface QueueRow {
  id: string
  studentId: string
  /** Null when neither the school's record nor the profile has a name. */
  studentName: string | null
  classId: string | null
  className: string | null
  examBoard: string | null
  /** The essay title, else the question it answers. */
  title: string | null
  wordCount: number
  status: string
  submittedAt: string
  aiScore: number | null
  aiMaxMarks: number | null
  finalGrade: string | null
  reviewedAt: string | null
  lastDecision: { decision: string; at: string | null } | null
}

export interface QueueResponse {
  scope: 'school' | 'teacher'
  /** False only for a teacher who teaches no classes yet. */
  hasClasses: boolean
  classes: Array<{ id: string; name: string | null }>
  submissions: QueueRow[]
  /** Set when a cap left essays out, so the page can say so. */
  truncated: { open: number | null; done: number | null }
}

export async function GET(_req: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) return unauthorizedResponse('Sign in required')

    const limit = await rateLimit(`school-marking-list:${user.id}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!limit.success) return rateLimitResponse(limit.resetAt)

    const svc = createServiceRoleClient()
    const resolved = await resolveStaffScope(svc, user.id)
    if (!resolved.ok) return errorResponse(resolved.error, resolved.status)
    const { scope } = resolved

    const classes = scope.classes.map((c) => ({ id: c.id, name: c.name }))
    const base = {
      scope: scope.wholeSchool ? ('school' as const) : ('teacher' as const),
      classes,
    }

    if (!scope.wholeSchool && scope.classes.length === 0) {
      return NextResponse.json({
        ...base,
        hasClasses: false,
        submissions: [],
        truncated: { open: null, done: null },
      } satisfies QueueResponse)
    }

    const [open, done] = await Promise.all([
      readScopedSubmissions<ListRow>(svc, scope, LIST_COLUMNS, {
        statuses: OPEN_STATUSES,
        limit: OPEN_LIMIT,
      }),
      readScopedSubmissions<ListRow>(svc, scope, LIST_COLUMNS, {
        excludeStatuses: OPEN_STATUSES,
        limit: DONE_LIMIT,
      }),
    ])
    const rows = [...open.rows, ...done.rows].sort((a, b) =>
      b.submitted_at.localeCompare(a.submitted_at),
    )

    const [moderations, pupils] = await Promise.all([
      readModerations(
        svc,
        rows.map((r) => r.id),
      ),
      readPupilIdentities(
        svc,
        scope.schoolId,
        rows.map((r) => r.student_id),
      ),
    ])

    const latest = new Map<string, { decision: string; at: string | null }>()
    for (const m of moderations) {
      if (!latest.has(m.submission_id)) {
        latest.set(m.submission_id, { decision: m.decision, at: m.created_at })
      }
    }
    const className = new Map(scope.classes.map((c) => [c.id, c.name]))

    const submissions: QueueRow[] = rows.map((r) => ({
      id: r.id,
      studentId: r.student_id,
      studentName: pupils.get(r.student_id)?.name ?? pupils.get(r.student_id)?.email ?? null,
      classId: r.class_id,
      className: r.class_id ? (className.get(r.class_id) ?? null) : null,
      examBoard: r.exam_board,
      title: r.essay_title ?? r.question_text ?? null,
      wordCount: wordCount(r.essay_text),
      status: r.status,
      submittedAt: r.submitted_at,
      aiScore: r.ai_score,
      aiMaxMarks: r.ai_max_marks,
      finalGrade: r.final_teacher_mark,
      reviewedAt: r.teacher_reviewed_at,
      lastDecision: latest.get(r.id) ?? null,
    }))

    return NextResponse.json({
      ...base,
      hasClasses: true,
      submissions,
      truncated: {
        open: open.total > open.rows.length ? open.rows.length : null,
        done: done.total > done.rows.length ? done.rows.length : null,
      },
    } satisfies QueueResponse)
  } catch (err) {
    console.error('[school/marking GET] failed', err)
    return serverErrorResponse('We could not load the marking queue. Please try again.')
  }
}
