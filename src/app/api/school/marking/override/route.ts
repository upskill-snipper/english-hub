// ─── Teacher Marking Override ──────────────────────────────────────────────
// POST /api/school/marking/override
//
// Lets a school staff member override the AI-generated grade for a student
// submission and attach a free-text comment. Authorization rule:
//
//   • Caller must be authenticated.
//   • Caller must be an accepted school_member (admin, head_of_department or
//     teacher).
//   • The submission's student must belong to at least one class that the
//     caller is the teacher of, OR the caller must be admin / head of
//     department for the same school as the submission.
//
// Persists `teacher_grade`, `teacher_comment`, `teacher_reviewed_by` and
// `teacher_reviewed_at` columns on the `marking_submissions` Supabase table.
// (See report — these columns + the table itself need a Prisma migration if
// they don't already exist.)

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  badRequestResponse,
  forbiddenResponse,
  notFoundResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
  unsupportedMediaTypeResponse,
} from '@/lib/api-response'

export const dynamic = 'force-dynamic'

// ─── Validation ────────────────────────────────────────────────────────────

// 9-1 GCSE grades plus "U" (ungraded) — must match the dropdown on the
// teacher marking page.
const ALLOWED_GRADES = new Set(['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U'])
const MAX_COMMENT_LENGTH = 4000

interface OverrideBody {
  submissionId: string
  teacherGrade: string
  teacherComment: string | null
}

function validateBody(
  body: unknown,
): { ok: true; data: OverrideBody } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Request body is required' }
  }

  const { submissionId, teacherGrade, teacherComment } = body as Record<string, unknown>

  if (typeof submissionId !== 'string' || submissionId.trim().length === 0) {
    return { ok: false, error: 'submissionId is required' }
  }
  if (typeof teacherGrade !== 'string' || !ALLOWED_GRADES.has(teacherGrade)) {
    return {
      ok: false,
      error: `teacherGrade must be one of: ${Array.from(ALLOWED_GRADES).join(', ')}`,
    }
  }

  let normalisedComment: string | null = null
  if (teacherComment !== undefined && teacherComment !== null) {
    if (typeof teacherComment !== 'string') {
      return { ok: false, error: 'teacherComment must be a string or null' }
    }
    const trimmed = teacherComment.trim()
    if (trimmed.length > MAX_COMMENT_LENGTH) {
      return {
        ok: false,
        error: `teacherComment must be ${MAX_COMMENT_LENGTH} characters or fewer`,
      }
    }
    normalisedComment = trimmed.length === 0 ? null : trimmed
  }

  return {
    ok: true,
    data: {
      submissionId: submissionId.trim(),
      teacherGrade,
      teacherComment: normalisedComment,
    },
  }
}

// ─── POST ──────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 0. Content-Type check.
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return unsupportedMediaTypeResponse()
    }

    // 1. Auth.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse()
    }

    // 2. Rate limit per user — generous for a UI form action.
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-marking-override:${user.id}:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // 3. Must be a school staff member.
    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
    if (!member) {
      return forbiddenResponse('Only school staff can override marking.')
    }

    // 4. Parse + validate body.
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }
    const validation = validateBody(body)
    if (!validation.ok) {
      return badRequestResponse(validation.error)
    }
    const { submissionId, teacherGrade, teacherComment } = validation.data

    // 5. Look up the submission.
    const admin = createServiceRoleClient()
    const { data: submission, error: subErr } = await admin
      .from('marking_submissions')
      .select('id, student_id, school_id, ai_grade, ai_score, ai_feedback')
      .eq('id', submissionId)
      .single()

    if (subErr || !submission) {
      return notFoundResponse('Submission not found.')
    }

    // 6. Authorise — submission must belong to the same school, and the
    //    caller must either be admin/head_of_department, or be the teacher of
    //    a class containing the submission's student.
    const submissionSchoolId = (submission as { school_id: string | null }).school_id
    if (submissionSchoolId && submissionSchoolId !== member.school_id) {
      return forbiddenResponse('Submission belongs to another school.')
    }

    const role = member.role as string
    if (role === 'teacher') {
      // Find classes owned by this teacher.
      const { data: teacherClasses, error: classesErr } = await admin
        .from('classes')
        .select('id')
        .eq('school_id', member.school_id)
        .eq('teacher_id', member.id)

      if (classesErr) {
        console.error('[marking/override] classes lookup failed', classesErr)
        return serverErrorResponse('Failed to verify teacher access.')
      }

      const classIds = (teacherClasses ?? []).map((c: { id: string }) => c.id)
      if (classIds.length === 0) {
        return forbiddenResponse('You do not teach any classes containing this student.')
      }

      const { count, error: linkErr } = await admin
        .from('class_students')
        .select('student_id', { count: 'exact', head: true })
        .eq('student_id', (submission as { student_id: string }).student_id)
        .eq('is_active', true)
        .in('class_id', classIds)

      if (linkErr) {
        console.error('[marking/override] class_students lookup failed', linkErr)
        return serverErrorResponse('Failed to verify teacher access.')
      }
      if (!count || count === 0) {
        return forbiddenResponse('You do not teach any classes containing this student.')
      }
    }
    // Admins / heads of department implicitly authorised once same-school
    // check above passes.

    // 7. Persist override. Columns expected on `marking_submissions`:
    //    teacher_grade, teacher_comment, teacher_reviewed_by, teacher_reviewed_at, status
    const reviewedAt = new Date().toISOString()
    const { data: updated, error: updateErr } = await admin
      .from('marking_submissions')
      .update({
        teacher_grade: teacherGrade,
        teacher_comment: teacherComment,
        teacher_reviewed_by: member.id,
        teacher_reviewed_at: reviewedAt,
        status: 'teacher_reviewed',
      })
      .eq('id', submissionId)
      .select(
        'id, student_id, class_id, exam_board, essay_title, essay_text,' +
          ' ai_grade, ai_confidence, ai_feedback, ai_band_marks,' +
          ' teacher_grade, teacher_comment, status, submitted_at,' +
          ' teacher_reviewed_at',
      )
      .single()

    if (updateErr || !updated) {
      console.error('[marking/override] update failed', updateErr)
      return serverErrorResponse('Failed to save override.')
    }

    // 7b. Capture the legacy override in the Smart-IP audit/label trail.
    //     decision = 'corrected' (this path is always a grade correction).
    //     Best-effort: a failure here must NOT change the existing override
    //     behaviour or response, so we only log and continue.
    {
      const sub = submission as unknown as {
        ai_grade: string | null
        ai_score: number | null
        ai_feedback: string | null
      }
      const gradeNum = Number.parseInt(teacherGrade, 10)
      const teacherScore = Number.isFinite(gradeNum) ? gradeNum : null
      // teacher_reviewed_by is a UUID FK; site-admin synthetic members have a
      // non-UUID id ("site-admin-<uuid>") — null it out for the FK column.
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        member.id,
      )
      const reviewerMemberId = isUuid ? member.id : null
      const { error: modErr } = await admin.from('teacher_moderations').insert({
        submission_id: submissionId,
        reviewer_user_id: user.id,
        reviewer_member_id: reviewerMemberId,
        decision: 'corrected',
        ai_grade: sub.ai_grade ?? null,
        teacher_grade: teacherGrade,
        ai_score: sub.ai_score ?? null,
        teacher_score: teacherScore,
        ao_corrections: null,
        feedback_before: sub.ai_feedback ?? null,
        feedback_after: teacherComment,
        adjustment_reason: null,
        moderation_notes: null,
        training_eligible: null,
      })
      if (modErr) {
        console.error('[marking/override] teacher_moderations insert failed', modErr)
      }
    }

    // 8. Hydrate display fields the client expects (student_name, class_name)
    //    so the table row updates in place without another fetch.
    //
    // The Supabase generated types don't yet know about `marking_submissions`
    // (see migration note in agent report), so we cast through `unknown` to
    // pin the shape we expect from the SELECT above.
    const u = updated as unknown as {
      id: string
      student_id: string
      class_id: string | null
      exam_board: string | null
      essay_title: string | null
      essay_text: string
      ai_grade: string | null
      ai_confidence: number | null
      ai_feedback: string | null
      ai_band_marks: unknown
      teacher_grade: string | null
      teacher_comment: string | null
      status: string
      submitted_at: string
      teacher_reviewed_at: string | null
    }

    const [{ data: studentRow }, { data: classRow }] = await Promise.all([
      admin.from('school_members').select('full_name').eq('id', u.student_id).maybeSingle(),
      u.class_id
        ? admin.from('classes').select('name').eq('id', u.class_id).maybeSingle()
        : Promise.resolve({ data: null }),
    ])

    return NextResponse.json({
      submission: {
        ...u,
        ai_band_marks: Array.isArray(u.ai_band_marks) ? u.ai_band_marks : [],
        student_name: (studentRow as { full_name?: string } | null)?.full_name ?? 'Student',
        class_name: (classRow as { name?: string } | null)?.name ?? 'Class',
        reviewed_at: u.teacher_reviewed_at,
      },
    })
  } catch (error) {
    console.error('[marking/override] unexpected error', error)
    return serverErrorResponse('An unexpected error occurred.')
  }
}
