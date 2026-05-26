// ─── Teacher Review · Moderation / Approval Workflow ───────────────────────
// POST /api/marking/[submissionId]/review
//
// The teacher-in-the-loop decision endpoint. The AI mark is only ever a
// DRAFT; this route is the single place a human turns that draft into an
// approved / rejected / corrected / sent-back outcome AND records the
// structured `teacher_moderations` audit + training-label row.
//
// Authorisation (mirrors /api/school/marking/override exactly):
//   • Caller must be authenticated.
//   • B2B rows (school_id present): caller must be an accepted school_member
//     who is admin / head_of_department for that school, OR a teacher of a
//     class containing the submission's student (two-step class_students
//     lookup, identical to the override route).
//   • B2C rows (source = 'b2c_self', school_id NULL): caller must be a
//     platform site admin (isSiteAdmin).
//
// Persistence is sequential best-effort (Supabase has no multi-statement
// transaction over PostgREST): we INSERT the immutable teacher_moderations
// history row FIRST (the label trail must never be lost), then UPDATE the
// marking_submissions spine with the final teacher decision + status
// transition. Both use the service-role client; all validation/authz has
// already passed by then.
//
// Supabase generated types don't know about `marking_submissions` /
// `teacher_moderations` yet (Prisma client not regenerated - see schema
// migration note), so DB rows are cast through `unknown` to the shapes the
// frozen migration guarantees.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { isSiteAdmin } from '@/lib/site-admin'
// ADDITIVE (paid-marker console): lets the row's assigned ACTIVE marker
// review commissioned/specimen/platform rows. Does not affect the existing
// teacher/school/site-admin paths - see the marker branch in step 5.
import { getCurrentMarker } from '@/lib/marker-auth'
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

// 9-1 GCSE grades plus "U" (ungraded) - must match the override route and the
// dropdown on the teacher marking page.
const ALLOWED_GRADES = new Set(['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U'])
const MAX_FEEDBACK_LENGTH = 8000
const MAX_NOTES_LENGTH = 4000
const MAX_REASON_LENGTH = 2000

// Public API verbs → internal canonical decision + the past-tense value the
// teacher_moderations.decision CHECK constraint requires.
const DECISIONS = ['approve', 'reject', 'correct', 'send_back'] as const
type ReviewDecision = (typeof DECISIONS)[number]

const MODERATION_DECISION: Record<ReviewDecision, string> = {
  approve: 'approved',
  reject: 'rejected',
  correct: 'corrected',
  send_back: 'sent_back',
}

// Status transition table (see route header / agent report).
//   approve   → approved                  (final; sets approved_by/at)
//   reject    → rejected                   (final)
//   correct   → teacher_review_required    (stays in queue, correction saved)
//   send_back → teacher_review_required    (returned to student, stays in queue)
const STATUS_AFTER: Record<ReviewDecision, string> = {
  approve: 'approved',
  reject: 'rejected',
  correct: 'teacher_review_required',
  send_back: 'teacher_review_required',
}

interface AoCorrection {
  ao: string
  score?: number | null
  maxScore?: number | null
  comment?: string | null
}

interface ReviewBody {
  decision: ReviewDecision
  teacherGrade: string | null
  teacherFeedback: string | null
  aoCorrections: AoCorrection[] | null
  adjustmentReason: string | null
  moderationNotes: string | null
  trainingEligible: boolean | null
}

function asTrimmedStringOrNull(
  value: unknown,
  field: string,
  max: number,
): { ok: true; value: string | null } | { ok: false; error: string } {
  if (value === undefined || value === null) return { ok: true, value: null }
  if (typeof value !== 'string') {
    return { ok: false, error: `${field} must be a string or null` }
  }
  const trimmed = value.trim()
  if (trimmed.length > max) {
    return { ok: false, error: `${field} must be ${max} characters or fewer` }
  }
  return { ok: true, value: trimmed.length === 0 ? null : trimmed }
}

function validateBody(
  body: unknown,
): { ok: true; data: ReviewBody } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Request body is required' }
  }

  const {
    decision,
    teacherGrade,
    teacherFeedback,
    aoCorrections,
    adjustmentReason,
    moderationNotes,
    trainingEligible,
  } = body as Record<string, unknown>

  if (typeof decision !== 'string' || !DECISIONS.includes(decision as ReviewDecision)) {
    return {
      ok: false,
      error: `decision must be one of: ${DECISIONS.join(', ')}`,
    }
  }
  const dec = decision as ReviewDecision

  // teacherGrade is optional everywhere, but when present must be valid.
  let grade: string | null = null
  if (teacherGrade !== undefined && teacherGrade !== null) {
    if (typeof teacherGrade !== 'string' || !ALLOWED_GRADES.has(teacherGrade)) {
      return {
        ok: false,
        error: `teacherGrade must be one of: ${Array.from(ALLOWED_GRADES).join(', ')}`,
      }
    }
    grade = teacherGrade
  }

  const fb = asTrimmedStringOrNull(teacherFeedback, 'teacherFeedback', MAX_FEEDBACK_LENGTH)
  if (!fb.ok) return fb
  const reason = asTrimmedStringOrNull(adjustmentReason, 'adjustmentReason', MAX_REASON_LENGTH)
  if (!reason.ok) return reason
  const notes = asTrimmedStringOrNull(moderationNotes, 'moderationNotes', MAX_NOTES_LENGTH)
  if (!notes.ok) return notes

  let corrections: AoCorrection[] | null = null
  if (aoCorrections !== undefined && aoCorrections !== null) {
    if (!Array.isArray(aoCorrections)) {
      return { ok: false, error: 'aoCorrections must be an array or null' }
    }
    // Light structural validation - stored verbatim as JSONB.
    for (const c of aoCorrections) {
      if (!c || typeof c !== 'object' || typeof (c as AoCorrection).ao !== 'string') {
        return { ok: false, error: 'each aoCorrections entry needs a string "ao"' }
      }
    }
    corrections = aoCorrections as AoCorrection[]
  }

  let training: boolean | null = null
  if (trainingEligible !== undefined && trainingEligible !== null) {
    if (typeof trainingEligible !== 'boolean') {
      return { ok: false, error: 'trainingEligible must be a boolean or null' }
    }
    training = trainingEligible
  }

  return {
    ok: true,
    data: {
      decision: dec,
      teacherGrade: grade,
      teacherFeedback: fb.value,
      aoCorrections: corrections,
      adjustmentReason: reason.value,
      moderationNotes: notes.value,
      trainingEligible: training,
    },
  }
}

// ─── Helpers ───────────────────────────────────────────────────────────────

// Site-admin synthetic members carry a non-UUID id ("site-admin-<uuid>")
// that would violate the UUID FK on teacher_reviewed_by / approved_by /
// reviewer_member_id. Treat those columns as null for synthetic members; the
// real auth user id is still recorded on reviewer_user_id / approved_by.
function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
}

// Grade text → integer score for the moderation label columns. GCSE 9-1 maps
// to itself; "U" (and anything non-numeric) has no numeric score.
function gradeToScore(grade: string | null): number | null {
  if (!grade) return null
  const n = Number.parseInt(grade, 10)
  return Number.isFinite(n) ? n : null
}

interface SubmissionRow {
  id: string
  student_id: string
  school_id: string | null
  class_id: string | null
  source: string | null
  status: string | null
  ai_grade: string | null
  ai_score: number | null
  ai_feedback: string | null
  // ADDITIVE (paid-marker console): the marker this row is assigned to, if
  // any. Used only by the new marker authz branch in step 5; the existing
  // teacher/school/site-admin paths never read it.
  assigned_marker_id: string | null
}

// Full hydrated SELECT shared by the success response (mirrors the GET /
// override response shape so the table row can update in place).
const HYDRATE_COLUMNS =
  'id, student_id, class_id, exam_board, essay_title, essay_text,' +
  ' source, status, submitted_at,' +
  ' ai_grade, ai_confidence, ai_feedback, ai_band_marks,' +
  ' ai_result, ai_score, ai_max_marks, ai_grade_band, ai_ao_breakdown,' +
  ' teacher_grade, teacher_comment, teacher_reviewed_by, teacher_reviewed_at,' +
  ' final_teacher_mark, final_teacher_feedback, teacher_adjustment_reason,' +
  ' moderation_notes, training_eligible, approved_by, approved_at'

// ─── Shared handler (imported by approve / reject thin wrappers) ────────────

export async function handleReview(
  request: NextRequest,
  submissionId: string,
  /** When set, forces the decision regardless of body (approve/reject wrappers). */
  forcedDecision?: ReviewDecision,
): Promise<NextResponse> {
  try {
    // 0. Content-Type.
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return unsupportedMediaTypeResponse()
    }

    if (!submissionId || submissionId.trim().length === 0) {
      return badRequestResponse('submissionId is required')
    }
    const subId = submissionId.trim()

    // 1. Auth.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse()
    }

    // 2. Rate limit per user - generous for a UI form action (matches override).
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`marking-review:${user.id}:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // 3. Parse + validate body. The approve/reject wrappers force the
    //    decision but still accept the rest of the body (grade, feedback…).
    let rawBody: unknown
    try {
      rawBody = await request.json()
    } catch {
      // approve/reject can be called with an empty body - tolerate it.
      rawBody = {}
    }
    const bodyForValidation =
      forcedDecision && (typeof rawBody !== 'object' || rawBody === null)
        ? { decision: forcedDecision }
        : forcedDecision
          ? { ...(rawBody as Record<string, unknown>), decision: forcedDecision }
          : rawBody

    const validation = validateBody(bodyForValidation)
    if (!validation.ok) {
      return badRequestResponse(validation.error)
    }
    const {
      decision,
      teacherGrade,
      teacherFeedback,
      aoCorrections,
      adjustmentReason,
      moderationNotes,
      trainingEligible,
    } = validation.data

    // 4. Look up the submission (service role - RLS-independent, authz below).
    const admin = createServiceRoleClient()
    const { data: submissionRaw, error: subErr } = await admin
      .from('marking_submissions')
      .select(
        'id, student_id, school_id, class_id, source, status, ai_grade, ai_score, ai_feedback,' +
          ' assigned_marker_id',
      )
      .eq('id', subId)
      .single()

    if (subErr || !submissionRaw) {
      return notFoundResponse('Submission not found.')
    }
    const submission = submissionRaw as unknown as SubmissionRow

    // 5. Authorise.
    //
    // 5a. ADDITIVE - paid-marker branch (does NOT alter the existing
    //     teacher/school/site-admin authorisation below).
    //
    //     The corpus drive ingests commissioned / specimen / platform rows
    //     (school_id NULL, source != 'b2c_self'). When the caller resolves to
    //     an ACTIVE marker AND this row's assigned_marker_id is exactly that
    //     marker, the marker is authorised to review it and we SKIP the
    //     B2C/B2B blocks entirely. A marker can ONLY ever act on rows
    //     assigned to them: if they resolve to a marker but the row is a
    //     marker-drive row not assigned to them, deny (never fall through to
    //     the school/site-admin paths for someone else's marker work).
    //
    //     For any caller who is NOT an active marker, OR any non-marker-drive
    //     row, `handledByMarker` stays false and control falls through to the
    //     ORIGINAL, byte-identical authorisation logic - existing teacher /
    //     school-admin / site-admin behaviour is completely unchanged.
    const MARKER_DRIVE_SOURCES = new Set(['commissioned', 'specimen', 'platform'])
    let handledByMarker = false

    {
      const marker = await getCurrentMarker(supabase)
      if (marker) {
        const isMarkerDriveRow = MARKER_DRIVE_SOURCES.has(submission.source ?? '')
        if (isMarkerDriveRow) {
          if (submission.assigned_marker_id !== marker.id) {
            return forbiddenResponse('This script is not assigned to you.')
          }
          handledByMarker = true
        }
        // Marker resolved but row is NOT a marker-drive row → fall through to
        // the unchanged paths below (they may also be a teacher/site admin).
      }
    }

    //    B2C self-study (source = 'b2c_self' OR no school): platform admin only.
    //    B2B class submission: same-school admin/HoD, or teacher of a class
    //    containing the student (identical two-step lookup to /override).
    const isB2C = submission.source === 'b2c_self' || submission.school_id === null

    let reviewerMemberId: string | null = null

    if (!handledByMarker) {
      if (isB2C) {
        if (!isSiteAdmin(user.email)) {
          return forbiddenResponse(
            'Only a platform administrator can review self-study submissions.',
          )
        }
        // No school member for B2C; reviewer_member_id stays null.
      } else {
        const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
        if (!member) {
          return forbiddenResponse('Only school staff can review marking.')
        }

        const memberSchoolId = (member as { school_id: string }).school_id
        const memberRole = (member as { role: string }).role
        const memberId = (member as { id: string }).id

        // Site admins get a synthetic member ('__site_admin__'); they bypass the
        // same-school check (they can review any school's submission).
        const isSyntheticSiteAdmin = memberSchoolId === '__site_admin__'

        if (
          !isSyntheticSiteAdmin &&
          submission.school_id &&
          submission.school_id !== memberSchoolId
        ) {
          return forbiddenResponse('Submission belongs to another school.')
        }

        if (!isSyntheticSiteAdmin && memberRole === 'teacher') {
          // Find classes owned by this teacher.
          const { data: teacherClasses, error: classesErr } = await admin
            .from('classes')
            .select('id')
            .eq('school_id', memberSchoolId)
            .eq('teacher_id', memberId)

          if (classesErr) {
            console.error('[marking/review] classes lookup failed', classesErr)
            return serverErrorResponse('Failed to verify teacher access.')
          }

          const classIds = (teacherClasses ?? []).map((c: { id: string }) => c.id)
          if (classIds.length === 0) {
            return forbiddenResponse('You do not teach any classes containing this student.')
          }

          const { count, error: linkErr } = await admin
            .from('class_students')
            .select('student_id', { count: 'exact', head: true })
            .eq('student_id', submission.student_id)
            .eq('is_active', true)
            .in('class_id', classIds)

          if (linkErr) {
            console.error('[marking/review] class_students lookup failed', linkErr)
            return serverErrorResponse('Failed to verify teacher access.')
          }
          if (!count || count === 0) {
            return forbiddenResponse('You do not teach any classes containing this student.')
          }
        }
        // Admins / heads of department implicitly authorised once the
        // same-school check above passes.

        // Only persist a real UUID member id to the UUID FK columns.
        reviewerMemberId = isUuid(memberId) ? memberId : null
      }
    } // end if (!handledByMarker) - ADDITIVE wrapper for the marker branch

    // 6. Persist - sequential best-effort "transaction".
    //
    //    6a. INSERT the immutable teacher_moderations history/label row FIRST.
    //        The audit trail must survive even if the spine UPDATE fails.
    const nowIso = new Date().toISOString()
    const aiScore = submission.ai_score ?? gradeToScore(submission.ai_grade)
    const teacherScore = gradeToScore(teacherGrade)

    const { data: moderationRow, error: modErr } = await admin
      .from('teacher_moderations')
      .insert({
        submission_id: subId,
        reviewer_user_id: user.id,
        reviewer_member_id: reviewerMemberId,
        decision: MODERATION_DECISION[decision],
        ai_grade: submission.ai_grade ?? null,
        teacher_grade: teacherGrade,
        ai_score: aiScore,
        teacher_score: teacherScore,
        ao_corrections: aoCorrections,
        feedback_before: submission.ai_feedback ?? null,
        feedback_after: teacherFeedback,
        adjustment_reason: adjustmentReason,
        moderation_notes: moderationNotes,
        training_eligible: trainingEligible,
      })
      .select('id, decision, created_at')
      .single()

    if (modErr || !moderationRow) {
      console.error('[marking/review] teacher_moderations insert failed', modErr)
      return serverErrorResponse('Failed to record the moderation decision.')
    }

    //    6b. UPDATE the marking_submissions spine with the final teacher
    //        decision + status transition. approved_by/at are set ONLY on
    //        an explicit approve.
    const update: Record<string, unknown> = {
      final_teacher_mark: teacherGrade,
      final_teacher_feedback: teacherFeedback,
      teacher_adjustment_reason: adjustmentReason,
      teacher_grade: teacherGrade,
      teacher_comment: teacherFeedback,
      teacher_reviewed_by: reviewerMemberId,
      teacher_reviewed_at: nowIso,
      moderation_notes: moderationNotes,
      training_eligible: trainingEligible,
      status: STATUS_AFTER[decision],
    }
    if (decision === 'approve') {
      update.approved_by = user.id
      update.approved_at = nowIso
    }
    // ADDITIVE (paid-marker console): a marker approval makes the row
    // corpus-eligible so the training pipeline can pick it up - guaranteed
    // server-side regardless of the request body. `handledByMarker` is only
    // ever true on the marker branch, so teacher / school-admin / site-admin
    // approvals are completely unaffected (their training_eligible stays
    // exactly the body-supplied value as before). Source-aware CONSENT is
    // handled by a separate workstream and is intentionally NOT done here.
    if (handledByMarker && decision === 'approve') {
      update.training_eligible = true
    }

    const { data: updatedRaw, error: updateErr } = await admin
      .from('marking_submissions')
      .update(update)
      .eq('id', subId)
      .select(HYDRATE_COLUMNS)
      .single()

    if (updateErr || !updatedRaw) {
      console.error('[marking/review] marking_submissions update failed', updateErr)
      // The moderation row is already persisted (audit preserved); surface
      // the failure so the client can retry the spine write.
      return serverErrorResponse('Decision recorded but failed to update the submission.')
    }

    // 7. Hydrate display fields (student_name, class_name) so the row can
    //    update in place - mirrors the override route response shape.
    const u = updatedRaw as unknown as {
      id: string
      student_id: string
      class_id: string | null
      exam_board: string | null
      essay_title: string | null
      essay_text: string
      source: string | null
      status: string
      submitted_at: string
      ai_grade: string | null
      ai_confidence: number | null
      ai_feedback: string | null
      ai_band_marks: unknown
      ai_result: unknown
      ai_score: number | null
      ai_max_marks: number | null
      ai_grade_band: string | null
      ai_ao_breakdown: unknown
      teacher_grade: string | null
      teacher_comment: string | null
      teacher_reviewed_by: string | null
      teacher_reviewed_at: string | null
      final_teacher_mark: string | null
      final_teacher_feedback: string | null
      teacher_adjustment_reason: string | null
      moderation_notes: string | null
      training_eligible: boolean | null
      approved_by: string | null
      approved_at: string | null
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
      moderation: moderationRow,
    })
  } catch (error) {
    console.error('[marking/review] unexpected error', error)
    return serverErrorResponse('An unexpected error occurred.')
  }
}

// ─── POST ──────────────────────────────────────────────────────────────────

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ submissionId: string }> },
) {
  const { submissionId } = await params
  return handleReview(request, submissionId)
}
