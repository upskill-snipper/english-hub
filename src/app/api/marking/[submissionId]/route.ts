// ─── GET /api/marking/[submissionId] ─────────────────────────────────────────
// Read a single submission, scoped so a student can never see an AI mark
// before it is allowed to be shown.
//
// Visibility rules (safeguard: students see approved feedback only):
//   • Owning student, source = b2c_self : sees their row, but AI/teacher
//     result fields are stripped UNLESS status ∈ ('ai_marked','approved').
//   • Owning student, source = b2b_class: sees their row, but ALL feedback
//     fields are stripped UNLESS status = 'approved' (a teacher must approve
//     before a class student sees anything).
//   • School member (admin / head_of_department / teacher) of the row's
//     school: sees the full row.
//   • Anyone else: 404 (do not leak existence).
//
// We prefer an RLS-scoped read (createServerSupabaseClient) and fall back to
// the service-role client + explicit authz, mirroring /api/school/marking
// (the Supabase generated types don't know these columns; the existing school
// routes already use the service-role + explicit-authz pattern).
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit } from '@/lib/rate-limit'
import {
  forbiddenResponse,
  notFoundResponse,
  rateLimitResponse,
  serverErrorResponse,
  successResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import { loadSubmission, type MarkingSubmissionRow } from '@/lib/marking/persistence'

export const dynamic = 'force-dynamic'

// Fields that constitute the AI/teacher "result". Stripped to null when the
// requesting student is not yet allowed to see the marking outcome.
const RESULT_FIELDS = [
  'ai_result',
  'ai_score',
  'ai_max_marks',
  'ai_grade',
  'ai_grade_band',
  'ai_confidence',
  'ai_ao_breakdown',
  'ai_uncertainty_flags',
  'ai_feedback',
  'ai_band_marks',
  'teacher_grade',
  'teacher_comment',
  'final_teacher_mark',
  'final_teacher_feedback',
  'teacher_adjustment_reason',
  'moderation_notes',
] as const satisfies readonly (keyof MarkingSubmissionRow)[]

function stripResultFields(row: MarkingSubmissionRow): MarkingSubmissionRow {
  const redacted = { ...row }
  for (const f of RESULT_FIELDS) {
    ;(redacted as Record<string, unknown>)[f] = null
  }
  return redacted
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ submissionId: string }> },
) {
  try {
    const { submissionId } = await context.params
    if (!submissionId || submissionId.trim().length === 0) {
      return notFoundResponse('Submission not found.')
    }

    // 1. Authenticate
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse('Sign in required')
    }

    // 2. Rate limit - read endpoint a client may poll.
    const rl = await rateLimit(`marking-get:${user.id}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // 3. Load the row. Try the RLS-scoped client first so row-level policies
    //    apply; fall back to service-role + explicit authz (the school routes'
    //    established pattern - the Supabase types don't model these columns).
    let row: MarkingSubmissionRow | null = null
    try {
      row = await loadSubmission(supabase, submissionId.trim())
    } catch {
      row = null
    }
    if (!row) {
      const svc = createServiceRoleClient()
      try {
        row = await loadSubmission(svc, submissionId.trim())
      } catch (dbErr) {
        console.error('[api/marking/[submissionId]] load failed', dbErr)
        return serverErrorResponse('Failed to load the submission.')
      }
    }
    if (!row) return notFoundResponse('Submission not found.')

    // 4. Authorise + apply the student-visibility safeguard.
    const isOwningStudent = row.student_id === user.id

    if (isOwningStudent) {
      if (row.source === 'b2c_self') {
        // Self-study: AI fields only once marked or approved.
        const canSeeResult = row.status === 'ai_marked' || row.status === 'approved'
        return successResponse({
          submission: canSeeResult ? row : stripResultFields(row),
        })
      }
      // b2b_class student: feedback ONLY when a teacher has approved it.
      const canSeeResult = row.status === 'approved'
      return successResponse({
        submission: canSeeResult ? row : stripResultFields(row),
      })
    }

    // Not the owner - must be a school member of the row's school.
    const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
    if (!member) {
      // Do not leak existence to unrelated users.
      return notFoundResponse('Submission not found.')
    }
    const memberSchoolId = (member as { school_id: string | null }).school_id
    const isSiteAdmin = memberSchoolId === '__site_admin__'
    if (!isSiteAdmin && row.school_id && memberSchoolId && row.school_id !== memberSchoolId) {
      return forbiddenResponse('Submission belongs to another school.')
    }
    if (!isSiteAdmin && !row.school_id) {
      // A B2C self-study row has no school - not visible to school staff.
      return notFoundResponse('Submission not found.')
    }

    // School staff see the full row.
    return successResponse({ submission: row })
  } catch (err) {
    console.error('[api/marking/[submissionId]] unexpected error', err)
    return serverErrorResponse('Something went wrong. Please try again later.')
  }
}
