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

import { NextRequest, NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { rateLimit } from "@/lib/rate-limit"
import { hasActiveSubscription } from "@/lib/course-access"
import { checkMinorAIConsent } from "@/lib/consent-check"
import { contentSafetyCheck } from "@/lib/content-safety"
import {
  badRequestResponse,
  forbiddenResponse,
  rateLimitResponse,
  serverErrorResponse,
  serviceUnavailableResponse,
  unauthorizedResponse,
  unsupportedMediaTypeResponse,
} from "@/lib/api-response"
import { getMarkScheme } from "@/lib/marking/mark-schemes"
import { buildMarkingPrompt } from "@/lib/marking/prompt-builder"
import { generateFeedback } from "@/lib/marking/feedback-generator"

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
    const contentType = request.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      return unsupportedMediaTypeResponse()
    }

    // 2. Authenticate
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return unauthorizedResponse("You must be signed in to use AI marking.")
    }

    // 3. Pro subscription gate
    const isPro = await hasActiveSubscription(supabase, user.id)
    if (!isPro) {
      return forbiddenResponse(
        "AI marking is a Pro feature. Please upgrade to mark your essays against GCSE mark schemes.",
      )
    }

    // 4. Parental consent (for minor users)
    const consentCheck = await checkMinorAIConsent(user.id)
    if (!consentCheck.allowed) {
      return forbiddenResponse(
        consentCheck.reason ?? "Consent is required to use this feature.",
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
      return badRequestResponse("Invalid JSON in request body.")
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
      return badRequestResponse(
        `Unknown mark scheme "${body.markSchemeId}".`,
      )
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
      })
    } catch (err) {
      console.error("[api/mark] prompt build failed", err)
      return badRequestResponse(
        err instanceof Error ? err.message : "Invalid question.",
      )
    }

    // 10. Anthropic API key
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error("[api/mark] ANTHROPIC_API_KEY not configured")
      return serviceUnavailableResponse(
        "AI marking is temporarily unavailable. Please try again later.",
      )
    }

    // 11. Call Claude
    const anthropic = new Anthropic({ apiKey })
    let message
    try {
      message = await anthropic.messages.create(
        {
          model: "claude-sonnet-4-20250514",
          max_tokens: 4_096,
          system: prompt.systemPrompt,
          messages: [{ role: "user", content: prompt.userMessage }],
        },
        { timeout: 50_000 },
      )
    } catch (aiError: unknown) {
      const err = aiError as {
        status?: number
        message?: string
        error?: { type?: string }
      }
      if (
        err.message?.includes("timeout") ||
        err.message?.includes("ETIMEDOUT") ||
        err.error?.type === "timeout_error"
      ) {
        console.error("[api/mark] Anthropic timeout")
        return serviceUnavailableResponse(
          "The AI service timed out. Please try again.",
        )
      }
      if (err.status === 429) {
        console.error("[api/mark] Anthropic rate limit")
        return serviceUnavailableResponse(
          "The AI service is temporarily overloaded. Please try again shortly.",
        )
      }
      console.error("[api/mark] Anthropic error", aiError)
      return serviceUnavailableResponse(
        "The AI marking service is currently unavailable. Please try again later.",
      )
    }

    // 12. Extract text
    const responseText = message.content
      .filter((block): block is Anthropic.TextBlock =>
        block.type === "text",
      )
      .map((block) => block.text)
      .join("")

    // 13. Parse and build result
    const feedback = generateFeedback({
      scheme,
      questionId: body.questionId,
      rawResponseText: responseText,
    })

    if (!feedback.ok) {
      if (feedback.error.type === "INVALID_SUBMISSION") {
        return badRequestResponse(
          "Your submission does not appear to be an essay. Please paste your own written work for marking.",
        )
      }
      if (feedback.error.type === "OFF_TOPIC") {
        return badRequestResponse(
          "This tool only marks GCSE English responses. Please submit English Language or Literature work.",
        )
      }
      console.error(
        "[api/mark] failed to parse model response",
        feedback.error.reason,
        responseText.slice(0, 500),
      )
      return serverErrorResponse(
        "Failed to process the AI response. Please try again.",
      )
    }

    return NextResponse.json({
      result: feedback.result,
      remaining: rl.remaining,
    })
  } catch (err) {
    console.error("[api/mark] unexpected error", err)
    return serverErrorResponse("Something went wrong. Please try again later.")
  }
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validateBody(body: MarkRequestBody): string | null {
  if (!body || typeof body !== "object") return "Request body must be an object."
  if (!body.markSchemeId || typeof body.markSchemeId !== "string") {
    return "markSchemeId is required."
  }
  if (!body.questionId || typeof body.questionId !== "string") {
    return "questionId is required."
  }
  if (!body.questionText || typeof body.questionText !== "string") {
    return "questionText is required."
  }
  if (!body.essay || typeof body.essay !== "string") {
    return "essay is required."
  }
  if (body.essay.length < 80) {
    return "Your essay is too short to mark reliably. Please write at least a few paragraphs."
  }
  if (body.essay.length > 30_000) {
    return "Your essay exceeds the 30,000 character limit."
  }
  if (body.questionText.length > 2_000) {
    return "The question text exceeds the 2,000 character limit."
  }
  return null
}
