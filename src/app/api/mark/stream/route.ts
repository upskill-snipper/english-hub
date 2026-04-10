// ─── POST /api/mark/stream ───────────────────────────────────────────────────
// Streaming variant of /api/mark. Returns a Server-Sent Events (SSE) stream
// so the client can progressively render feedback as the model generates it.
//
// Stream event shape (text/event-stream):
//   data: {"type":"token","text":"..."}
//   data: {"type":"done","result":{...}}
//   data: {"type":"error","message":"..."}
//
// The final `done` event contains the fully parsed `MarkingResult`, so the
// client can rely on that rather than re-parsing tokens.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest } from "next/server"
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
  serviceUnavailableResponse,
  unauthorizedResponse,
  unsupportedMediaTypeResponse,
} from "@/lib/api-response"
import { getMarkScheme } from "@/lib/marking/mark-schemes"
import { buildMarkingPrompt } from "@/lib/marking/prompt-builder"
import { generateFeedback } from "@/lib/marking/feedback-generator"

export const maxDuration = 60
export const runtime = "nodejs"

// ─── Types ───────────────────────────────────────────────────────────────────

interface MarkStreamRequestBody {
  markSchemeId: string
  questionId: string
  questionText: string
  essay: string
  studiedText?: string
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // 1. Content-Type
  const contentType = request.headers.get("content-type")
  if (!contentType || !contentType.includes("application/json")) {
    return unsupportedMediaTypeResponse()
  }

  // 2. Auth
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return unauthorizedResponse("You must be signed in to use AI marking.")
  }

  // 3. Pro check
  const isPro = await hasActiveSubscription(supabase, user.id)
  if (!isPro) {
    return forbiddenResponse(
      "AI marking is a Pro feature. Please upgrade to mark your essays.",
    )
  }

  // 4. Consent
  const consentCheck = await checkMinorAIConsent(user.id)
  if (!consentCheck.allowed) {
    return forbiddenResponse(
      consentCheck.reason ?? "Consent is required to use this feature.",
    )
  }

  // 5. Rate limit — streaming endpoints share the daily budget.
  const rl = await rateLimit(`mark:${user.id}`, {
    limit: 10,
    windowSeconds: 86_400,
  })
  if (!rl.success) return rateLimitResponse(rl.resetAt)

  // 6. Body
  let body: MarkStreamRequestBody
  try {
    body = (await request.json()) as MarkStreamRequestBody
  } catch {
    return badRequestResponse("Invalid JSON in request body.")
  }
  const validation = validateBody(body)
  if (validation) return badRequestResponse(validation)

  const safetyError = contentSafetyCheck({
    questionText: body.questionText,
    essay: body.essay,
  })
  if (safetyError) return badRequestResponse(safetyError)

  // 7. Resolve scheme and build prompt
  const scheme = getMarkScheme(body.markSchemeId)
  if (!scheme) return badRequestResponse(`Unknown mark scheme "${body.markSchemeId}".`)

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
    return badRequestResponse(err instanceof Error ? err.message : "Invalid question.")
  }

  // 8. API key
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error("[api/mark/stream] ANTHROPIC_API_KEY not configured")
    return serviceUnavailableResponse(
      "AI marking is temporarily unavailable. Please try again later.",
    )
  }

  // 9. Spin up the stream
  const anthropic = new Anthropic({ apiKey })
  const encoder = new TextEncoder()

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (payload: Record<string, unknown>) => {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(payload)}\n\n`),
        )
      }

      let accumulated = ""

      try {
        const messageStream = anthropic.messages.stream({
          model: "claude-sonnet-4-20250514",
          max_tokens: 4_096,
          system: prompt.systemPrompt,
          messages: [{ role: "user", content: prompt.userMessage }],
        })

        for await (const event of messageStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            accumulated += event.delta.text
            send({ type: "token", text: event.delta.text })
          }
        }

        // Finalisation: parse accumulated text into a MarkingResult.
        const feedback = generateFeedback({
          scheme,
          questionId: body.questionId,
          rawResponseText: accumulated,
        })

        if (!feedback.ok) {
          if (feedback.error.type === "INVALID_SUBMISSION") {
            send({
              type: "error",
              message:
                "Your submission does not appear to be an essay. Please paste your own written work for marking.",
            })
          } else if (feedback.error.type === "OFF_TOPIC") {
            send({
              type: "error",
              message:
                "This tool only marks GCSE English responses. Please submit English Language or Literature work.",
            })
          } else {
            console.error(
              "[api/mark/stream] failed to parse model response",
              feedback.error.reason,
            )
            send({
              type: "error",
              message: "Failed to process the AI response. Please try again.",
            })
          }
          controller.close()
          return
        }

        send({
          type: "done",
          result: feedback.result,
          remaining: rl.remaining,
        })
        controller.close()
      } catch (err: unknown) {
        console.error("[api/mark/stream] streaming error", err)
        send({
          type: "error",
          message:
            "The AI marking service encountered an error. Please try again.",
        })
        controller.close()
      }
    },
  })

  return new Response(stream, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  })
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validateBody(body: MarkStreamRequestBody): string | null {
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
