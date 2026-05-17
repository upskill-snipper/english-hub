// ─── POST /api/submissions ───────────────────────────────────────────────────
// Unified submission INSERT path for the teacher-in-the-loop marking spine.
//
// Creates a `marking_submissions` row in status 'submitted'. It does NOT run
// the AI — POST /api/marking/run is a separate, explicit step so submission
// and (potentially-expensive, teacher-gated) marking are decoupled.
//
// Gate order mirrors POST /api/mark exactly:
//   auth → subscription → checkMinorAIConsent → isAiOptedOutServer →
//   rateLimit → contentSafetyCheck
//
// Both B2C self-study (no school) and B2B class submissions flow through here;
// schoolId / classId are nullable. The student answer is mapped onto
// `essay_text`. DB access is via the Supabase service-role client only (the
// new tables are intentionally absent from the local Prisma client).
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { hasActiveSubscription } from '@/lib/course-access'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { contentSafetyCheck } from '@/lib/content-safety'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import {
  badRequestResponse,
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  successResponse,
  unauthorizedResponse,
  requireJsonContentType,
} from '@/lib/api-response'
import { getMarkScheme } from '@/lib/marking/mark-schemes'
import { insertSubmission, type SubmissionSource } from '@/lib/marking/persistence'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

// ─── Validation ──────────────────────────────────────────────────────────────

interface SubmissionRequestBody {
  source: SubmissionSource
  examBoard: string
  qualification?: string
  paper?: string
  questionText: string
  questionType?: string
  studiedText?: string
  studentAnswer: string
  targetGrade?: string
  markSchemeId: string
  questionId: string
  schoolId?: string
  classId?: string
}

const MAX_ANSWER_CHARS = 30_000
const MIN_ANSWER_CHARS = 80
const MAX_QUESTION_CHARS = 2_000

interface ValidatedBody {
  source: SubmissionSource
  examBoard: string
  qualification: string | null
  paper: string | null
  questionText: string
  questionType: string | null
  studiedText: string | null
  studentAnswer: string
  targetGrade: string | null
  markSchemeId: string
  questionId: string
  schoolId: string | null
  classId: string | null
}

function optionalString(v: unknown, max = 500): string | null {
  if (v === undefined || v === null) return null
  if (typeof v !== 'string') return null
  const t = v.trim()
  return t.length === 0 ? null : t.slice(0, max)
}

function validateBody(
  body: unknown,
): { ok: true; data: ValidatedBody } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Request body must be an object.' }
  }
  const b = body as Record<string, unknown>

  if (b.source !== 'b2c_self' && b.source !== 'b2b_class') {
    return { ok: false, error: "source must be 'b2c_self' or 'b2b_class'." }
  }
  if (typeof b.examBoard !== 'string' || b.examBoard.trim().length === 0) {
    return { ok: false, error: 'examBoard is required.' }
  }
  if (typeof b.markSchemeId !== 'string' || b.markSchemeId.trim().length === 0) {
    return { ok: false, error: 'markSchemeId is required.' }
  }
  if (typeof b.questionId !== 'string' || b.questionId.trim().length === 0) {
    return { ok: false, error: 'questionId is required.' }
  }
  if (typeof b.questionText !== 'string' || b.questionText.trim().length === 0) {
    return { ok: false, error: 'questionText is required.' }
  }
  if (b.questionText.length > MAX_QUESTION_CHARS) {
    return { ok: false, error: `questionText exceeds the ${MAX_QUESTION_CHARS} character limit.` }
  }
  if (typeof b.studentAnswer !== 'string') {
    return { ok: false, error: 'studentAnswer is required.' }
  }
  const answer = b.studentAnswer
  if (answer.trim().length < MIN_ANSWER_CHARS) {
    return {
      ok: false,
      error: 'Your answer is too short to mark reliably. Please write at least a few paragraphs.',
    }
  }
  if (answer.length > MAX_ANSWER_CHARS) {
    return { ok: false, error: `Your answer exceeds the ${MAX_ANSWER_CHARS} character limit.` }
  }

  const source = b.source as SubmissionSource
  const schoolId = optionalString(b.schoolId, 64)
  const classId = optionalString(b.classId, 64)

  return {
    ok: true,
    data: {
      source,
      examBoard: b.examBoard.trim().slice(0, 120),
      qualification: optionalString(b.qualification, 120),
      paper: optionalString(b.paper, 120),
      questionText: b.questionText.trim(),
      questionType: optionalString(b.questionType, 120),
      studiedText: optionalString(b.studiedText, 500),
      studentAnswer: answer,
      targetGrade: optionalString(b.targetGrade, 16),
      markSchemeId: b.markSchemeId.trim(),
      questionId: b.questionId.trim(),
      schoolId,
      classId,
    },
  }
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 0. Content-Type
    const ctError = requireJsonContentType(request)
    if (ctError) return ctError

    // 1. Authenticate
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse('You must be signed in to submit work for marking.')
    }

    // 2. Premium subscription gate
    const isPremium = await hasActiveSubscription(supabase, user.id)
    if (!isPremium) {
      return forbiddenResponse(
        'AI marking is a Premium feature. Please upgrade to submit your work for marking.',
      )
    }

    // 3. Parental / AI-processing consent (for minor users)
    const consentCheck = await checkMinorAIConsent(user.id)
    if (!consentCheck.allowed) {
      return forbiddenResponse(consentCheck.reason ?? 'Consent is required to use this feature.')
    }

    // 4. AI opt-out enforcement (Children's Code — GAP-12B)
    const aiOptedOut = await isAiOptedOutServer(user.id)
    if (aiOptedOut) {
      return forbiddenResponse(
        'AI features are currently disabled for your account. To re-enable them, visit your privacy settings or ask a parent/guardian to update your preferences.',
      )
    }

    // 5. Rate limit: 20 submissions / day / user
    const rl = await rateLimit(`submissions:${user.id}`, {
      limit: 20,
      windowSeconds: 86_400,
    })
    if (!rl.success) {
      return rateLimitResponse(rl.resetAt)
    }

    // 6. Parse + validate body
    let raw: unknown
    try {
      raw = await request.json()
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }
    const validation = validateBody(raw)
    if (!validation.ok) return badRequestResponse(validation.error)
    const data = validation.data

    // 7. Content safety pre-check (same posture as /api/mark)
    const safetyError = contentSafetyCheck({
      questionText: data.questionText,
      essay: data.studentAnswer,
    })
    if (safetyError) return badRequestResponse(safetyError)

    // 8. Resolve mark scheme (fail fast — a row that can never be marked is
    //    useless; mirrors /api/mark's early scheme check).
    const scheme = getMarkScheme(data.markSchemeId)
    if (!scheme) {
      return badRequestResponse(`Unknown mark scheme "${data.markSchemeId}".`)
    }

    // 9. Insert the submission (service role — Supabase only, never Prisma).
    const svc = createServiceRoleClient()
    let inserted: { id: string }
    try {
      inserted = await insertSubmission(svc, {
        source: data.source,
        studentId: user.id,
        schoolId: data.schoolId,
        classId: data.classId,
        examBoard: data.examBoard,
        qualification: data.qualification,
        paper: data.paper,
        questionText: data.questionText,
        questionType: data.questionType,
        studiedText: data.studiedText,
        targetGrade: data.targetGrade,
        markSchemeId: data.markSchemeId,
        questionId: data.questionId,
        studentAnswer: data.studentAnswer,
      })
    } catch (dbErr) {
      console.error('[api/submissions] insert failed', dbErr)
      return serverErrorResponse('Failed to save your submission. Please try again.')
    }

    return successResponse({ submissionId: inserted.id }, 201)
  } catch (err) {
    console.error('[api/submissions] unexpected error', err)
    return serverErrorResponse('Something went wrong. Please try again later.')
  }
}
