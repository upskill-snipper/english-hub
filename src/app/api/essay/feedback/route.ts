// ─── Essay Feedback API Route ───────────────────────────────────────────
// POST /api/essay/feedback
// Accepts essay text, runs it through an AI provider, filters the
// response for compliance, and returns feedback with content warnings.

import { NextRequest, NextResponse } from 'next/server'
import type Anthropic from '@anthropic-ai/sdk'
import { getAnthropicClient } from '@/lib/anthropic-client'
import { filterAIResponse, type UserCountry } from '@/lib/content-filter'
import { getDisclaimer } from '@/lib/ai-disclaimer'
import { rateLimit } from '@/lib/rate-limit'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import {
  unauthorizedResponse,
  forbiddenResponse,
  badRequestResponse,
  rateLimitResponse,
  unsupportedMediaTypeResponse,
  serviceUnavailableResponse,
  serverErrorResponse,
} from '@/lib/api-response'
import { checkMinorAIConsent } from '@/lib/consent-check'
import { hasActiveSubscription } from '@/lib/course-access'
import { isAiOptedOutServer } from '@/lib/ai-preferences'
import { contentSafetyCheck } from '@/lib/content-safety'
import { withArabicDirective, resolveLocaleFromRequest } from '@/lib/i18n/ai-language-directive'
import { logAiDecision } from '@/lib/ai-audit-log'

// ─── Types ──────────────────────────────────────────────────────────────

interface FeedbackRequest {
  essayText: string
  examBoard: 'AQA' | 'Edexcel' | 'OCR' | 'WJEC' | 'CCEA'
  topic: string
  userCountry: UserCountry
  userId?: string
}

interface AuditLogEntry {
  timestamp: string
  userId: string | null
  examBoard: string
  topic: string
  userCountry: UserCountry
  filtered: boolean
  escalationRequired: boolean
  modifiedCategories: string[]
  warningCount: number
}

// ─── AI Provider Placeholder ────────────────────────────────────────────
// Replace this with your actual AI provider integration (OpenAI, Anthropic, etc.)

async function generateAIFeedback(
  essayText: string,
  examBoard: string,
  topic: string,
  request: NextRequest,
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('AI service is temporarily unavailable.')
  }

  // Shared client - privacy posture documented in src/lib/anthropic-client.ts;
  // behaviour identical to new Anthropic({ apiKey }).
  const anthropic = getAnthropicClient(apiKey)

  const baseSystemPrompt = [
    `You are an expert GCSE English teacher providing constructive feedback on student essays.`,
    `The student is studying the ${examBoard} exam board.`,
    `The essay topic is: ${topic}.`,
    ``,
    `Provide detailed, encouraging feedback covering:`,
    `1. **Overall impression** (2-3 sentences)`,
    `2. **Strengths** (3 specific things done well with examples from the text)`,
    `3. **Areas for improvement** (3 specific suggestions with examples of how to improve)`,
    `4. **Language & technique** (comment on vocabulary, sentence variety, literary techniques used)`,
    `5. **Exam tips** (1-2 specific tips for improving marks in the ${examBoard} exam)`,
    ``,
    `Be encouraging but honest. Use UK English spelling and terminology.`,
    `If the submission is not an essay or is inappropriate, respond with: {"error": "INVALID_SUBMISSION"}`,
  ].join('\n')

  const systemPrompt = withArabicDirective(baseSystemPrompt, request)

  const message = await anthropic.messages.create(
    {
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2048,
      system: systemPrompt,
      messages: [{ role: 'user', content: essayText }],
    },
    { timeout: 50_000 },
  )

  return message.content
    .filter((block): block is Anthropic.TextBlock => block.type === 'text')
    .map((block) => block.text)
    .join('')
}

// ─── Audit Logging ──────────────────────────────────────────────────────
// Logs filtering activity for compliance review.

async function logToAuditTrail(entry: AuditLogEntry): Promise<void> {
  // EU AI Act Art. 12/19 - delegate to the shared, best-effort AI decision
  // logger (persists to the existing `AuditLog` model). This records the
  // content-filter outcome for this feedback decision. `logAiDecision` never
  // throws into the request path, so this stays safe to await here.
  await logAiDecision({
    feature: 'essay/feedback',
    userId: entry.userId,
    locale: null,
    // No raw essay in scope here (only filter metadata); nothing to hash.
    inputText: null,
    promptSchemeId: entry.examBoard,
    requestStartedAt: new Date(entry.timestamp),
    responseFinishedAt: new Date(entry.timestamp),
    success: !entry.escalationRequired,
    outputSummary: {
      examBoard: entry.examBoard,
      topic: entry.topic,
      userCountry: entry.userCountry,
      filtered: entry.filtered,
      escalationRequired: entry.escalationRequired,
      modifiedCategories: entry.modifiedCategories,
      warningCount: entry.warningCount,
    },
    errorClass: entry.escalationRequired ? 'CONTENT_ESCALATION' : null,
  })
}

// ─── Request Validation ─────────────────────────────────────────────────

function validateRequest(
  body: unknown,
): { valid: true; data: FeedbackRequest } | { valid: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Request body is required' }
  }

  const { essayText, examBoard, topic, userCountry, userId } = body as Record<string, unknown>

  if (!essayText || typeof essayText !== 'string') {
    return { valid: false, error: 'essayText is required and must be a string' }
  }

  if (essayText.trim().length < 50) {
    return {
      valid: false,
      error: 'Essay text must be at least 50 characters',
    }
  }

  if (essayText.length > 50_000) {
    return {
      valid: false,
      error: 'Essay text must not exceed 50,000 characters',
    }
  }

  const validBoards = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CCEA']
  if (!examBoard || !validBoards.includes(examBoard as string)) {
    return {
      valid: false,
      error: `examBoard must be one of: ${validBoards.join(', ')}`,
    }
  }

  if (!topic || typeof topic !== 'string') {
    return { valid: false, error: 'topic is required and must be a string' }
  }

  const validCountries: UserCountry[] = ['UK', 'QA', 'OTHER']
  if (!userCountry || !validCountries.includes(userCountry as UserCountry)) {
    return {
      valid: false,
      error: `userCountry must be one of: ${validCountries.join(', ')}`,
    }
  }

  return {
    valid: true,
    data: {
      essayText: essayText as string,
      examBoard: examBoard as FeedbackRequest['examBoard'],
      topic: topic as string,
      userCountry: userCountry as UserCountry,
      userId: typeof userId === 'string' ? userId : undefined,
    },
  }
}

// ─── POST Handler ───────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 0. Content-Type validation
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return unsupportedMediaTypeResponse()
    }

    // 1. Authenticate
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse()
    }

    // 1b. Subscription check - essay feedback is a Premium feature
    const isPremium = await hasActiveSubscription(supabase, user.id)
    if (!isPremium) {
      return forbiddenResponse(
        'Essay feedback is a Premium feature. Please upgrade your subscription to access AI-powered feedback.',
      )
    }

    // 2. Rate limit: 20 essays per hour per user
    const rl = await rateLimit(`essay-feedback-v2:${user.id}`, {
      limit: 10,
      windowSeconds: 86_400,
    })
    if (!rl.success) {
      return rateLimitResponse(rl.resetAt)
    }

    // 3. Parental consent check for minor users
    const consentCheck = await checkMinorAIConsent(user.id)
    if (!consentCheck.allowed) {
      return forbiddenResponse(consentCheck.reason ?? 'Consent is required to use this feature.')
    }

    // 3b. AI opt-out enforcement (Children's Code - GAP-12B)
    const aiOptedOut = await isAiOptedOutServer(user.id)
    if (aiOptedOut) {
      return forbiddenResponse(
        'AI features are currently disabled for your account. To re-enable AI feedback, visit your privacy settings or ask a parent/guardian to update your preferences.',
      )
    }

    // 4. Parse & validate body
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return badRequestResponse('Invalid JSON in request body.')
    }

    const validation = validateRequest(body)

    if (!validation.valid) {
      return badRequestResponse(validation.error)
    }

    const { essayText, examBoard, topic, userCountry } = validation.data
    const userId = user.id

    // 3c. Safeguarding / misuse pre-screen - parity with /api/mark. Routes
    // a minor's self-harm disclosure to the static helpline message and
    // blocks prompt-injection / essay-generation misuse before the model.
    const safetyError = contentSafetyCheck({ essay: essayText, questionText: topic ?? '' })
    if (safetyError) return badRequestResponse(safetyError)

    // EU AI Act Art. 12/19: bracket the model call so the audit record can
    // capture latency + a hash of the (minor's) essay. Best-effort.
    const aiRequestStartedAt = new Date()
    const aiAuditBase = {
      feature: 'essay/feedback' as const,
      userId,
      locale: resolveLocaleFromRequest(request),
      inputText: essayText,
      promptSchemeId: examBoard,
      consentSnapshot: {
        aiOptOut: false,
        aiProcessingConsentOk: true,
      },
      ipAddress: request.headers.get('x-forwarded-for'),
    }

    // 4. Generate AI feedback
    let rawFeedback: string
    try {
      rawFeedback = await generateAIFeedback(essayText, examBoard, topic, request)
    } catch (aiError: unknown) {
      const err = aiError as { message?: string; status?: number; error?: { type?: string } }

      void logAiDecision({
        ...aiAuditBase,
        requestStartedAt: aiRequestStartedAt,
        responseFinishedAt: new Date(),
        success: false,
        errorClass: err.error?.type ?? (err.status ? `http_${err.status}` : 'anthropic_error'),
        errorMessage: typeof err.message === 'string' ? err.message.slice(0, 300) : null,
      })

      // Timeout from AI provider
      if (
        err.message?.includes('timeout') ||
        err.message?.includes('ETIMEDOUT') ||
        err.error?.type === 'timeout_error'
      ) {
        return serviceUnavailableResponse('AI feedback service timed out. Please try again.')
      }

      // Upstream rate limit from AI provider
      if (err.status === 429) {
        return serviceUnavailableResponse(
          'AI feedback service is temporarily overloaded. Please try again in a moment.',
        )
      }

      return serviceUnavailableResponse(
        'AI feedback service is currently unavailable. Please try again later.',
      )
    }
    const aiResponseFinishedAt = new Date()

    // 5. Run through content filter
    const filterResult = filterAIResponse(rawFeedback, userCountry, topic)

    // Build response
    const disclaimer = getDisclaimer(examBoard)
    const humanReviewUrl = filterResult.escalationRequired
      ? `/api/review/request?topic=${encodeURIComponent(topic)}&board=${examBoard}`
      : null

    // EU AI Act Art. 12/19 - record the AI feedback decision itself
    // (model, latency, essay hash, filter outcome).
    void logAiDecision({
      ...aiAuditBase,
      requestStartedAt: aiRequestStartedAt,
      responseFinishedAt: aiResponseFinishedAt,
      success: true,
      outputSummary: {
        feedbackLength: filterResult.filteredText.length,
        filtered: filterResult.flagged,
        escalationRequired: filterResult.escalationRequired,
        modifiedCategories: filterResult.modifiedCategories,
        warningCount: filterResult.warnings.length,
      },
    })

    // Log to audit trail
    await logToAuditTrail({
      timestamp: new Date().toISOString(),
      userId: userId ?? null,
      examBoard,
      topic,
      userCountry,
      filtered: filterResult.flagged,
      escalationRequired: filterResult.escalationRequired,
      modifiedCategories: filterResult.modifiedCategories,
      warningCount: filterResult.warnings.length,
    })

    // TODO(Phase-7): Store essay submission and feedback in Supabase essay_submissions table (see commented schema below)
    // await db.essaySubmission.create({
    //   data: {
    //     userId,
    //     essayText,
    //     examBoard,
    //     topic,
    //     rawFeedback,
    //     filteredFeedback: filterResult.filteredText,
    //     flagged: filterResult.flagged,
    //     escalationRequired: filterResult.escalationRequired,
    //   },
    // });

    return NextResponse.json({
      feedback: filterResult.filteredText,
      disclaimer,
      contentWarnings: filterResult.contentWarnings ?? [],
      flagged: filterResult.flagged,
      escalationRequired: filterResult.escalationRequired,
      humanReviewUrl,
      warnings: filterResult.warnings
        .filter((w) => w.severity !== 'critical')
        .map((w) => ({
          category: w.category,
          message: w.description,
        })),
    })
  } catch {
    console.error('[Essay Feedback API] Unexpected error')
    return serverErrorResponse('An unexpected error occurred. Please try again.')
  }
}
