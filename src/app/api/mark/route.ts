// ─── POST /api/mark ──────────────────────────────────────────────────────────
// Mark a student's essay against a specified GCSE mark scheme and question,
// returning a structured `MarkingResult` (AO breakdown, predicted grade,
// strengths, improvements, and next-steps guidance).
//
// Flow:
//   1. Validate content type, auth, subscription, consent, rate limit.
//   2. Look up the mark scheme and question.
//   3. Build a prompt from the mark scheme + essay.
//   4. Call the Anthropic Claude API.
//   5. Parse the response into a `MarkingResult` and return it.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import type Anthropic from '@anthropic-ai/sdk'
import { getAnthropicClient } from '@/lib/anthropic-client'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { hasActiveSubscription } from '@/lib/course-access'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { contentSafetyCheck } from '@/lib/content-safety'
import {
  badRequestResponse,
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  serviceUnavailableResponse,
  unauthorizedResponse,
  unsupportedMediaTypeResponse,
} from '@/lib/api-response'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import { getMarkScheme } from '@/lib/marking/mark-schemes'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { getExaminerExemplars } from '@/lib/marking/calibration/examiner-anchors'
import { generateFeedback } from '@/lib/marking/feedback-generator'
import { fireStudentFirstMark } from '@/lib/trustpilot/trigger-invite'
import { withArabicDirective, resolveLocaleFromRequest } from '@/lib/i18n/ai-language-directive'
import { logAiDecision } from '@/lib/ai-audit-log'

export const maxDuration = 60

// ─── Types ───────────────────────────────────────────────────────────────────

interface MarkRequestBody {
  markSchemeId: string
  questionId: string
  questionText: string
  essay: string
  studiedText?: string
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 1. Content-Type
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return unsupportedMediaTypeResponse()
    }

    // 2. Authenticate
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse('You must be signed in to use AI marking.')
    }

    // 3. Premium subscription gate
    const isPremium = await hasActiveSubscription(supabase, user.id)
    if (!isPremium) {
      return forbiddenResponse(
        'AI marking is a Premium feature. Please upgrade to mark your essays against GCSE mark schemes.',
      )
    }

    // 4. Parental consent (for minor users)
    const consentCheck = await checkMinorAIConsent(user.id)
    if (!consentCheck.allowed) {
      return forbiddenResponse(consentCheck.reason ?? 'Consent is required to use this feature.')
    }

    // 4b. AI opt-out enforcement (Children's Code - GAP-12B)
    const aiOptedOut = await isAiOptedOutServer(user.id)
    if (aiOptedOut) {
      return forbiddenResponse(
        'AI features are currently disabled for your account. To re-enable AI marking, visit your privacy settings or ask a parent/guardian to update your preferences.',
      )
    }

    // 5. Rate limit: 10 essays / day
    const rl = await rateLimit(`mark:${user.id}`, {
      limit: 10,
      windowSeconds: 86_400,
    })
    if (!rl.success) {
      return rateLimitResponse(rl.resetAt)
    }

    // 6. Parse body
    let body: MarkRequestBody
    try {
      body = (await request.json()) as MarkRequestBody
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }

    const validation = validateBody(body)
    if (validation) return badRequestResponse(validation)

    // 7. Content safety pre-check (same as essay-feedback route)
    const safetyError = contentSafetyCheck({
      questionText: body.questionText,
      essay: body.essay,
    })
    if (safetyError) return badRequestResponse(safetyError)

    // 8. Resolve mark scheme
    const scheme = getMarkScheme(body.markSchemeId)
    if (!scheme) {
      return badRequestResponse(`Unknown mark scheme "${body.markSchemeId}".`)
    }

    // 8b. LIVE examiner calibration — a mark-range-spread sample of THIS
    //     platform's own approved examiner marks for this board+question, so the
    //     AI calibrates to how the human examiners mark. Fail-open: any problem
    //     yields [] and marking proceeds exactly as before.
    let examinerExemplars: { ref: string; summary: string }[] = []
    try {
      const q = scheme.questions.find(
        (qq) =>
          qq.id.toLowerCase() === body.questionId.trim().toLowerCase() ||
          qq.questionType.toLowerCase() === body.questionId.trim().toLowerCase(),
      )
      examinerExemplars = await getExaminerExemplars({
        board: scheme.board,
        markSchemeId: scheme.id,
        questionId: body.questionId,
        questionType: q?.questionType,
        paper: scheme.paper,
        maxMarks: q?.totalMarks,
      })
    } catch {
      examinerExemplars = []
    }

    // 9. Build prompt
    let prompt
    try {
      prompt = buildMarkingPrompt({
        scheme,
        questionId: body.questionId,
        questionText: body.questionText,
        essay: body.essay,
        studiedText: body.studiedText,
        examinerExemplars,
      })
    } catch (err) {
      console.error('[api/mark] prompt build failed', err)
      return badRequestResponse(err instanceof Error ? err.message : 'Invalid question.')
    }

    // 10. Anthropic API key
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('[api/mark] ANTHROPIC_API_KEY not configured')
      return serviceUnavailableResponse(
        'AI marking is temporarily unavailable. Please try again later.',
      )
    }

    // 11. Call Claude (shared client - privacy posture documented in
    // src/lib/anthropic-client.ts; behaviour identical to new Anthropic()).
    const anthropic = getAnthropicClient(apiKey)
    // EU AI Act Art. 12/19: bracket the model call so the audit record can
    // capture request/response timestamps + latency. Best-effort; never
    // affects the response path.
    const aiRequestStartedAt = new Date()
    const auditBase = {
      feature: 'mark' as const,
      userId: user.id,
      locale: resolveLocaleFromRequest(request),
      inputText: body.essay,
      markSchemeId: body.markSchemeId,
      questionId: body.questionId,
      promptSchemeId: body.markSchemeId,
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
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4_096,
          system: withArabicDirective(prompt.systemPrompt, request),
          messages: [{ role: 'user', content: prompt.userMessage }],
        },
        { timeout: 50_000 },
      )
    } catch (aiError: unknown) {
      const err = aiError as {
        status?: number
        message?: string
        error?: { type?: string }
      }
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
        console.error('[api/mark] Anthropic timeout')
        return serviceUnavailableResponse('The AI service timed out. Please try again.')
      }
      if (err.status === 429) {
        console.error('[api/mark] Anthropic rate limit')
        return serviceUnavailableResponse(
          'The AI service is temporarily overloaded. Please try again shortly.',
        )
      }
      console.error('[api/mark] Anthropic error', aiError)
      return serviceUnavailableResponse(
        'The AI marking service is currently unavailable. Please try again later.',
      )
    }
    const aiResponseFinishedAt = new Date()

    // 12. Extract text
    const responseText = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('')

    // 13. Parse and build result
    const feedback = generateFeedback({
      scheme,
      questionId: body.questionId,
      rawResponseText: responseText,
    })

    if (!feedback.ok) {
      void logAiDecision({
        ...auditBase,
        requestStartedAt: aiRequestStartedAt,
        responseFinishedAt: aiResponseFinishedAt,
        tokenUsage: {
          inputTokens: message.usage?.input_tokens,
          outputTokens: message.usage?.output_tokens,
        },
        success: false,
        outputSummary: { rejected: feedback.error.type },
        errorClass: feedback.error.type,
        errorMessage: 'reason' in feedback.error ? String(feedback.error.reason) : null,
      })
      if (feedback.error.type === 'INVALID_SUBMISSION') {
        return badRequestResponse(
          'Your submission does not appear to be an essay. Please paste your own written work for marking.',
        )
      }
      if (feedback.error.type === 'OFF_TOPIC') {
        return badRequestResponse(
          'This tool only marks GCSE English responses. Please submit English Language or Literature work.',
        )
      }
      console.error(
        '[api/mark] failed to parse model response',
        feedback.error.reason,
        responseText.slice(0, 500),
      )
      return serverErrorResponse('Failed to process the AI response. Please try again.')
    }

    // EU AI Act Art. 12/19 - record the successful AI marking decision.
    void logAiDecision({
      ...auditBase,
      requestStartedAt: aiRequestStartedAt,
      responseFinishedAt: aiResponseFinishedAt,
      tokenUsage: {
        inputTokens: message.usage?.input_tokens,
        outputTokens: message.usage?.output_tokens,
      },
      success: true,
      outputSummary: {
        predictedGrade: feedback.result.predictedGrade,
        gradeBand: feedback.result.gradeBand,
        totalMarks: feedback.result.totalMarks,
        maxMarks: feedback.result.maxMarks,
        aoScores: feedback.result.aoScores.map((ao) => ({
          id: ao.id,
          marks: ao.marks,
          maxMarks: ao.maxMarks,
        })),
      },
    })

    // Trustpilot review solicitation - fire-and-forget on first successful
    // mark. Dedup in the trigger orchestrator ensures only the first invocation
    // per user actually sends an invite; subsequent marks no-op cheaply. If
    // TRUSTPILOT_ENABLED is unset, the trigger logs only.
    void fireStudentFirstMark(user.id).catch((err) =>
      console.warn('[api/mark] Trustpilot trigger dispatch failed', err),
    )

    return NextResponse.json({
      result: feedback.result,
      remaining: rl.remaining,
    })
  } catch (err) {
    console.error('[api/mark] unexpected error', err)
    return serverErrorResponse('Something went wrong. Please try again later.')
  }
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validateBody(body: MarkRequestBody): string | null {
  if (!body || typeof body !== 'object') return 'Request body must be an object.'
  if (!body.markSchemeId || typeof body.markSchemeId !== 'string') {
    return 'markSchemeId is required.'
  }
  if (!body.questionId || typeof body.questionId !== 'string') {
    return 'questionId is required.'
  }
  if (!body.questionText || typeof body.questionText !== 'string') {
    return 'questionText is required.'
  }
  if (!body.essay || typeof body.essay !== 'string') {
    return 'essay is required.'
  }
  if (body.essay.length < 80) {
    return 'Your essay is too short to mark reliably. Please write at least a few paragraphs.'
  }
  if (body.essay.length > 30_000) {
    return 'Your essay exceeds the 30,000 character limit.'
  }
  if (body.questionText.length > 2_000) {
    return 'The question text exceeds the 2,000 character limit.'
  }
  return null
}
