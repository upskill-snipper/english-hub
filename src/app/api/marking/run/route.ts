// ─── POST /api/marking/run ───────────────────────────────────────────────────
// Run the AI marker against a previously-submitted `marking_submissions` row.
//
// This is the SECOND step of the spine (POST /api/submissions is the first).
// Separating them keeps the (teacher-gated, latency-heavy) model call off the
// submission path and lets a B2B submission be marked then routed to a teacher
// for review before any student ever sees a grade.
//
// The AI mark produced here is ALWAYS A DRAFT. This route only ever writes
// status 'ai_marked' (B2C self-study) or 'teacher_review_required' (B2B
// class) - it NEVER writes 'approved'. Final marks are a human act, persisted
// elsewhere (the override / moderation writers).
//
// Body: { submissionId }. Authorisation:
//   • b2c_self  - caller must be the owning student.
//   • b2b_class - caller must be an accepted school member of the row's
//                 school (verifySchoolMember), same-school checked.
//
// DB access is via the Supabase service-role client only.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest } from 'next/server'
import type Anthropic from '@anthropic-ai/sdk'
import { getAnthropicClient, ANTHROPIC_MODEL } from '@/lib/anthropic-client'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { hasActiveSubscription } from '@/lib/course-access'
import {
  enforceTrialAllowance,
  refundTrialAllowance,
  EMPTY_TRIAL_GATE,
  type TrialAllowanceGate,
} from '@/lib/usage/trial-allowance'
import { applyAllowanceHeaders } from '@/lib/usage/free-allowance'
import { rateLimit } from '@/lib/rate-limit'
import {
  badRequestResponse,
  forbiddenResponse,
  notFoundResponse,
  rateLimitResponse,
  serverErrorResponse,
  serviceUnavailableResponse,
  successResponse,
  unauthorizedResponse,
  requireJsonContentType,
} from '@/lib/api-response'
import { getMarkScheme } from '@/lib/marking/mark-schemes'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { generateFeedback } from '@/lib/marking/feedback-generator'
import { resolveLocaleFromRequest } from '@/lib/i18n/ai-language-directive'
import { cachedSystemBlocks } from '@/lib/ai/cached-system'
import { logAiDecision, aiAuditTokenUsage } from '@/lib/ai-audit-log'
import { captureVersions } from '@/lib/marking/versioning-capture'
import { loadSubmission, applyAiResult, deriveUncertaintyFlags } from '@/lib/marking/persistence'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

interface RunRequestBody {
  submissionId: string
}

export async function POST(request: NextRequest) {
  // The no-card trial AI ceiling is held here rather than inside the try below,
  // so the catch at the bottom can still give the allowance back. A paying
  // subscriber and a card-on-file trial are never metered - see
  // src/lib/usage/trial-allowance.ts.
  let trialGate: TrialAllowanceGate = EMPTY_TRIAL_GATE

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
      return unauthorizedResponse('You must be signed in to run marking.')
    }

    // 2. Rate limit - generous; the heavy work is one model call per row.
    const rl = await rateLimit(`marking-run:${user.id}`, {
      limit: 30,
      windowSeconds: 86_400,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // 3. Parse body
    let body: RunRequestBody
    try {
      body = (await request.json()) as RunRequestBody
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }
    if (
      !body ||
      typeof body !== 'object' ||
      typeof body.submissionId !== 'string' ||
      body.submissionId.trim().length === 0
    ) {
      return badRequestResponse('submissionId is required.')
    }
    const submissionId = body.submissionId.trim()

    // 4. Load the row (service role - Supabase only).
    const svc = createServiceRoleClient()
    let row
    try {
      row = await loadSubmission(svc, submissionId)
    } catch (dbErr) {
      console.error('[api/marking/run] load failed', dbErr)
      return serverErrorResponse('Failed to load the submission. Please try again.')
    }
    if (!row) return notFoundResponse('Submission not found.')

    // 5. Authorise by source.
    if (row.source === 'b2c_self') {
      if (row.student_id !== user.id) {
        return forbiddenResponse('You can only run marking on your own submission.')
      }
      // 2026-06-08 paywall (audit H1): AI marking is billable. This branch
      // previously trusted ownership alone, so a user who created a
      // submission while on a paid plan and then lapsed could keep POSTing
      // their leftover pending submissionId and consume paid AI marking
      // (up to the 30/day rate limit) indefinitely. Gate on a live
      // subscription / trial here. b2b_class stays governed by
      // verifySchoolMember in the else-branch (school seat = entitlement).
      const isPremium = await hasActiveSubscription(supabase, user.id)
      if (!isPremium) {
        return forbiddenResponse(
          'AI marking is a Premium feature. Start your free trial to continue.',
        )
      }
    } else {
      // b2b_class - caller must be an accepted member of the row's school.
      const member = await verifySchoolMember(user.id, ['admin', 'head_of_department', 'teacher'])
      if (!member) {
        return forbiddenResponse('Only school staff can run marking for class submissions.')
      }
      const memberSchoolId = (member as { school_id: string | null }).school_id
      if (row.school_id && memberSchoolId && row.school_id !== memberSchoolId) {
        return forbiddenResponse('Submission belongs to another school.')
      }
    }

    // 6. Guard the state machine - only mark a row that is awaiting marking.
    //    Re-running an already-marked / teacher-touched row would silently
    //    clobber a draft a teacher may be mid-review on.
    if (row.status !== 'submitted' && row.status !== 'pending') {
      return badRequestResponse(`Submission is not awaiting marking (status: ${row.status}).`)
    }

    if (!row.mark_scheme_id) {
      return badRequestResponse('Submission has no mark scheme associated.')
    }

    // 7. Resolve mark scheme + build prompt. `rubric_ref` holds the in-scheme
    //    question id captured at submission time.
    const scheme = getMarkScheme(row.mark_scheme_id)
    if (!scheme) {
      return badRequestResponse(`Unknown mark scheme "${row.mark_scheme_id}".`)
    }
    const questionId = row.rubric_ref ?? ''
    let prompt
    try {
      prompt = buildMarkingPrompt({
        scheme,
        questionId,
        questionText: row.question_text ?? '',
        essay: row.essay_text,
        studiedText: row.studied_text ?? undefined,
      })
    } catch (err) {
      console.error('[api/marking/run] prompt build failed', err)
      return badRequestResponse(err instanceof Error ? err.message : 'Invalid question.')
    }

    // NO-CARD TRIAL AI CEILING. This is the last gate before we spend money,
    // and it sits in the same position as checkMinorAIConsent and
    // isAiOptedOutServer: after content-type / auth / entitlement / consent /
    // AI opt-out / validation / content-safety, immediately before the first
    // model call. A trial signup carries `subscription_status = 'pro'`, the
    // identical flag the paywall above reads, so without this a free account
    // has the same unlimited AI access a paying one does. Refused with 402 and
    // code 'free_allowance_exhausted', never 403 or 429.
    trialGate = await enforceTrialAllowance(request, user)
    if (trialGate.response) return trialGate.response

    // 8. Anthropic key
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('[api/marking/run] ANTHROPIC_API_KEY not configured')
      await refundTrialAllowance(trialGate)
      return serviceUnavailableResponse(
        'AI marking is temporarily unavailable. Please try again later.',
      )
    }

    // 9. Call Claude (shared client - privacy posture documented centrally).
    const anthropic = getAnthropicClient(apiKey)
    const aiRequestStartedAt = new Date()
    // EU AI Act Art. 12/19 traceability for the Smart-IP marking spine.
    // 'marking/run' is a first-class member of the AiAuditFeature union.
    const auditBase = {
      feature: 'marking/run' as const,
      userId: user.id,
      locale: resolveLocaleFromRequest(request),
      inputText: row.essay_text,
      markSchemeId: row.mark_scheme_id,
      questionId,
      promptSchemeId: row.mark_scheme_id,
      consentSnapshot: {
        aiOptOut: false,
        aiProcessingConsentOk: true,
      },
      ipAddress: request.headers.get('x-forwarded-for'),
    }

    let message
    try {
      message = await anthropic.messages.create(
        {
          model: ANTHROPIC_MODEL,
          max_tokens: 4_096,
          // Cache the mark-scheme prefix; the AR directive follows the
          // breakpoint so both locales share one entry. Renders byte-identically
          // to the old withArabicDirective() string - see @/lib/ai/cached-system.
          system: cachedSystemBlocks(prompt.systemPrompt, request),
          messages: [{ role: 'user', content: prompt.userMessage }],
        },
        { timeout: 50_000 },
      )
    } catch (aiError: unknown) {
      const err = aiError as { status?: number; message?: string; error?: { type?: string } }
      void logAiDecision({
        ...auditBase,
        requestStartedAt: aiRequestStartedAt,
        responseFinishedAt: new Date(),
        success: false,
        errorClass: err.error?.type ?? (err.status ? `http_${err.status}` : 'anthropic_error'),
        errorMessage: typeof err.message === 'string' ? err.message.slice(0, 300) : null,
      })
      if (
        err.message?.includes('timeout') ||
        err.message?.includes('ETIMEDOUT') ||
        err.error?.type === 'timeout_error'
      ) {
        console.error('[api/marking/run] Anthropic timeout')
        await refundTrialAllowance(trialGate)
        return serviceUnavailableResponse('The AI service timed out. Please try again.')
      }
      if (err.status === 429) {
        console.error('[api/marking/run] Anthropic rate limit')
        await refundTrialAllowance(trialGate)
        return serviceUnavailableResponse(
          'The AI service is temporarily overloaded. Please try again shortly.',
        )
      }
      console.error('[api/marking/run] Anthropic error', aiError)
      await refundTrialAllowance(trialGate)
      return serviceUnavailableResponse(
        'The AI marking service is currently unavailable. Please try again later.',
      )
    }
    const aiResponseFinishedAt = new Date()

    // 10. Extract text + parse into a structured MarkingResult.
    const responseText = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('')

    const feedback = generateFeedback({
      scheme,
      questionId,
      rawResponseText: responseText,
    })

    if (!feedback.ok) {
      void logAiDecision({
        ...auditBase,
        requestStartedAt: aiRequestStartedAt,
        responseFinishedAt: aiResponseFinishedAt,
        tokenUsage: message.usage ? aiAuditTokenUsage(message.usage) : undefined,
        success: false,
        outputSummary: { rejected: feedback.error.type },
        errorClass: feedback.error.type,
        errorMessage: 'reason' in feedback.error ? String(feedback.error.reason) : null,
      })
      if (feedback.error.type === 'INVALID_SUBMISSION') {
        await refundTrialAllowance(trialGate)
        return badRequestResponse(
          'This submission does not appear to be an essay. It cannot be marked.',
        )
      }
      if (feedback.error.type === 'OFF_TOPIC') {
        await refundTrialAllowance(trialGate)
        return badRequestResponse('This submission is not GCSE English work. It cannot be marked.')
      }
      console.error(
        '[api/marking/run] failed to parse model response',
        feedback.error.reason,
        responseText.slice(0, 500),
      )
      await refundTrialAllowance(trialGate)
      return serverErrorResponse('Failed to process the AI response. Please try again.')
    }

    const result = feedback.result

    // 11. Capture model / prompt / rubric provenance (best-effort, never throws).
    const versions = await captureVersions(svc, {
      promptText: `${prompt.systemPrompt}\n\n${prompt.userMessage}`,
      markSchemeId: row.mark_scheme_id,
      schemeVersion: scheme.version ?? 'v1.0',
      examBoard: scheme.board,
      qualification: row.qualification,
    })

    // 12. Persist the DRAFT AI result. B2B class work must go to a teacher
    //     before any student sees it → 'teacher_review_required'. B2C
    //     self-study can surface the (clearly-labelled draft) immediately →
    //     'ai_marked'. Never 'approved' from here.
    const nextStatus = row.source === 'b2b_class' ? 'teacher_review_required' : 'ai_marked'
    try {
      await applyAiResult(svc, submissionId, {
        result,
        uncertaintyFlags: deriveUncertaintyFlags(result),
        modelVersionId: versions.modelVersionId,
        promptVersionId: versions.promptVersionId,
        rubricVersionId: versions.rubricVersionId,
        status: nextStatus,
      })
    } catch (dbErr) {
      console.error('[api/marking/run] persist failed', dbErr)
      await refundTrialAllowance(trialGate)
      return serverErrorResponse('Failed to save the marking result. Please try again.')
    }

    // 13. EU AI Act Art. 12/19 - record the successful (draft) AI decision.
    void logAiDecision({
      ...auditBase,
      requestStartedAt: aiRequestStartedAt,
      responseFinishedAt: aiResponseFinishedAt,
      tokenUsage: message.usage ? aiAuditTokenUsage(message.usage) : undefined,
      success: true,
      outputSummary: {
        predictedGrade: result.predictedGrade,
        gradeBand: result.gradeBand,
        totalMarks: result.totalMarks,
        maxMarks: result.maxMarks,
        status: nextStatus,
        aoScores: result.aoScores.map((ao) => ({
          id: ao.id,
          marks: ao.marks,
          maxMarks: ao.maxMarks,
        })),
      },
    })

    // The AI mark is a DRAFT - never presented as final. The caller/UI must
    // label it accordingly; B2B work is not student-visible until approved.
    return applyAllowanceHeaders(successResponse({ result }), trialGate.state)
  } catch (err) {
    console.error('[api/marking/run] unexpected error', err)
    await refundTrialAllowance(trialGate)
    return serverErrorResponse('Something went wrong. Please try again later.')
  }
}
