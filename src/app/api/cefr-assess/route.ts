// ─── POST /api/cefr-assess ───────────────────────────────────────────────────
// AI-assisted CEFR assessment of an EAL learner's productive-skill
// response (writing or speaking). Returns a structured
// `CEFRAssessmentResult` (overall band, per-criterion bands, strengths,
// improvements, next steps, summary).
//
// Gating sequence is intentionally byte-for-byte aligned with
// src/app/api/mark/route.ts (auth → Premium → consent → AI opt-out →
// rate-limit) so the existing client error-handling patterns
// (essay-feedback / marking) work unchanged here.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import type Anthropic from '@anthropic-ai/sdk'
import { getAnthropicClient } from '@/lib/anthropic-client'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { hasActiveSubscription } from '@/lib/course-access'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import {
  badRequestResponse,
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  serviceUnavailableResponse,
  unauthorizedResponse,
  unsupportedMediaTypeResponse,
} from '@/lib/api-response'
import { withArabicDirective, resolveLocaleFromRequest } from '@/lib/i18n/ai-language-directive'
import { findEALTopic } from '@/lib/eal/curriculum'
import { CEFR_PRODUCT_BANDS, type CEFRBand } from '@/lib/eal/cefr'
import { buildCEFRAssessPrompt, parseCEFRAssessment } from '@/lib/eal/assess'
import { logAiDecision } from '@/lib/ai-audit-log'

export const maxDuration = 60

// ─── Types ───────────────────────────────────────────────────────────────────

interface CEFRAssessRequestBody {
  skill: 'writing' | 'speaking'
  topicId: string
  band: CEFRBand
  text: string
}

const VALID_BANDS = new Set<string>(CEFR_PRODUCT_BANDS)

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
      return unauthorizedResponse('You must be signed in to use AI assessment.')
    }

    // 3. Premium subscription gate
    const isPremium = await hasActiveSubscription(supabase, user.id)
    if (!isPremium) {
      return forbiddenResponse(
        'AI assessment is a Premium feature. Please upgrade to have your writing and speaking assessed against CEFR levels.',
      )
    }

    // 4. Parental consent (for minor users)
    const consentCheck = await checkMinorAIConsent(user.id)
    if (!consentCheck.allowed) {
      return forbiddenResponse(consentCheck.reason ?? 'Consent is required to use this feature.')
    }

    // 4b. AI opt-out enforcement (Children's Code — GAP-12B)
    const aiOptedOut = await isAiOptedOutServer(user.id)
    if (aiOptedOut) {
      return forbiddenResponse(
        'AI features are currently disabled for your account. To re-enable AI assessment, visit your privacy settings or ask a parent/guardian to update your preferences.',
      )
    }

    // 5. Rate limit: 10 assessments / day
    const rl = await rateLimit(`cefr-assess:${user.id}`, {
      limit: 10,
      windowSeconds: 86_400,
    })
    if (!rl.success) {
      return rateLimitResponse(rl.resetAt)
    }

    // 6. Parse body
    let body: CEFRAssessRequestBody
    try {
      body = (await request.json()) as CEFRAssessRequestBody
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }

    const validation = validateBody(body)
    if (validation) return badRequestResponse(validation)

    // 7. Resolve EAL topic
    const topic = findEALTopic(body.topicId)
    if (!topic) {
      return badRequestResponse(`Unknown EAL topic "${body.topicId}".`)
    }

    // 8. Build prompt
    const locale = resolveLocaleFromRequest(request)
    const topicTitle = locale === 'ar' && topic.title.ar ? topic.title.ar : topic.title.en
    const prompt = buildCEFRAssessPrompt({
      skill: body.skill,
      band: body.band,
      topicTitle,
      text: body.text,
      locale,
    })

    // 9. Anthropic API key
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('[api/cefr-assess] ANTHROPIC_API_KEY not configured')
      return serviceUnavailableResponse(
        'AI assessment is temporarily unavailable. Please try again later.',
      )
    }

    // 10. Call Claude (shared client — privacy posture documented in
    // src/lib/anthropic-client.ts; behaviour identical to new Anthropic()).
    const anthropic = getAnthropicClient(apiKey)
    // EU AI Act Art. 12/19: bracket the model call for the audit record.
    const aiRequestStartedAt = new Date()
    const auditBase = {
      feature: 'cefr-assess' as const,
      userId: user.id,
      locale,
      inputText: body.text,
      promptSchemeId: prompt.cacheKey,
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
        console.error('[api/cefr-assess] Anthropic timeout')
        return serviceUnavailableResponse('The AI service timed out. Please try again.')
      }
      if (err.status === 429) {
        console.error('[api/cefr-assess] Anthropic rate limit')
        return serviceUnavailableResponse(
          'The AI service is temporarily overloaded. Please try again shortly.',
        )
      }
      console.error('[api/cefr-assess] Anthropic error', aiError)
      return serviceUnavailableResponse(
        'The AI assessment service is currently unavailable. Please try again later.',
      )
    }
    const aiResponseFinishedAt = new Date()

    // 11. Extract text
    const responseText = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('')

    // 12. Parse + validate into the strict result contract
    const outcome = parseCEFRAssessment(responseText)
    if (!outcome.ok) {
      void logAiDecision({
        ...auditBase,
        requestStartedAt: aiRequestStartedAt,
        responseFinishedAt: aiResponseFinishedAt,
        tokenUsage: {
          inputTokens: message.usage?.input_tokens,
          outputTokens: message.usage?.output_tokens,
        },
        success: false,
        outputSummary: { rejected: outcome.error },
        errorClass: outcome.error,
        errorMessage: outcome.reason ?? null,
      })
      if (outcome.error === 'INVALID_SUBMISSION') {
        return badRequestResponse(
          'Your submission does not look like a genuine attempt at this task. Please write your own response for assessment.',
        )
      }
      if (outcome.error === 'OFF_TOPIC') {
        return badRequestResponse(
          'This tool only assesses English-language learning work. Please submit a writing or speaking response.',
        )
      }
      console.error(
        '[api/cefr-assess] failed to parse model response',
        outcome.reason,
        responseText.slice(0, 500),
      )
      return serverErrorResponse('Failed to process the AI response. Please try again.')
    }

    // EU AI Act Art. 12/19 — record the successful CEFR assessment decision.
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
        band: outcome.result.band,
        perCriterion: outcome.result.perCriterion.map((c) => ({
          name: c.name?.en ?? null,
          band: c.band,
        })),
      },
    })

    return NextResponse.json({
      result: outcome.result,
      remaining: rl.remaining,
    })
  } catch (err) {
    console.error('[api/cefr-assess] unexpected error', err)
    return serverErrorResponse('Something went wrong. Please try again later.')
  }
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validateBody(body: CEFRAssessRequestBody): string | null {
  if (!body || typeof body !== 'object') return 'Request body must be an object.'
  if (body.skill !== 'writing' && body.skill !== 'speaking') {
    return 'skill must be "writing" or "speaking".'
  }
  if (!body.topicId || typeof body.topicId !== 'string') {
    return 'topicId is required.'
  }
  if (!body.band || typeof body.band !== 'string' || !VALID_BANDS.has(body.band)) {
    return 'band must be one of A2, B1, B2, C1.'
  }
  if (!body.text || typeof body.text !== 'string') {
    return 'text is required.'
  }
  if (body.text.trim().length < 40) {
    return 'Your response is too short to assess reliably. Please write a few more sentences.'
  }
  if (body.text.length > 12_000) {
    return 'Your response exceeds the 12,000 character limit.'
  }
  return null
}
