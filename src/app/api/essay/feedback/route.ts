// ─── Essay Feedback API Route ───────────────────────────────────────────
// POST /api/essay/feedback
// Accepts essay text, runs it through an AI provider, filters the
// response for compliance, and returns feedback with content warnings.

import { NextRequest, NextResponse } from "next/server";
import { filterAIResponse, type UserCountry } from "@/lib/content-filter";
import { getDisclaimer } from "@/lib/ai-disclaimer";
import { rateLimit } from "@/lib/rate-limit";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  unauthorizedResponse,
  forbiddenResponse,
  badRequestResponse,
  rateLimitResponse,
  unsupportedMediaTypeResponse,
  serviceUnavailableResponse,
  serverErrorResponse,
} from "@/lib/api-response";
import { checkMinorAIConsent } from "@/lib/consent-check";
import { hasActiveSubscription } from "@/lib/course-access";

// ─── Types ──────────────────────────────────────────────────────────────

interface FeedbackRequest {
  essayText: string;
  examBoard: "AQA" | "Edexcel" | "OCR" | "WJEC" | "CCEA";
  topic: string;
  userCountry: UserCountry;
  userId?: string;
}

interface AuditLogEntry {
  timestamp: string;
  userId: string | null;
  examBoard: string;
  topic: string;
  userCountry: UserCountry;
  filtered: boolean;
  escalationRequired: boolean;
  modifiedCategories: string[];
  warningCount: number;
}

// ─── AI Provider Placeholder ────────────────────────────────────────────
// Replace this with your actual AI provider integration (OpenAI, Anthropic, etc.)

async function generateAIFeedback(
  essayText: string,
  examBoard: string,
  topic: string
): Promise<string> {
  // TODO(Phase-6): Integrate AI essay feedback via Anthropic Claude API (see commented example below)
  // Example integration:
  //
  // const response = await openai.chat.completions.create({
  //   model: "gpt-4",
  //   messages: [
  //     { role: "system", content: buildSystemPrompt(examBoard, topic) },
  //     { role: "user", content: essayText },
  //   ],
  // });
  // return response.choices[0].message.content;

  throw new Error(
    "AI provider not configured. Set up OpenAI or Anthropic integration."
  );
}

// ─── Audit Logging ──────────────────────────────────────────────────────
// Logs filtering activity for compliance review.

async function logToAuditTrail(entry: AuditLogEntry): Promise<void> {
  // TODO(Phase-7): Persist audit log entries to Supabase audit_logs table (see commented example below)

  // Production implementation example:
  // await db.auditLog.create({ data: entry });
}

// ─── Request Validation ─────────────────────────────────────────────────

function validateRequest(
  body: unknown
): { valid: true; data: FeedbackRequest } | { valid: false; error: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Request body is required" };
  }

  const { essayText, examBoard, topic, userCountry, userId } =
    body as Record<string, unknown>;

  if (!essayText || typeof essayText !== "string") {
    return { valid: false, error: "essayText is required and must be a string" };
  }

  if (essayText.trim().length < 50) {
    return {
      valid: false,
      error: "Essay text must be at least 50 characters",
    };
  }

  if (essayText.length > 50_000) {
    return {
      valid: false,
      error: "Essay text must not exceed 50,000 characters",
    };
  }

  const validBoards = ["AQA", "Edexcel", "OCR", "WJEC", "CCEA"];
  if (!examBoard || !validBoards.includes(examBoard as string)) {
    return {
      valid: false,
      error: `examBoard must be one of: ${validBoards.join(", ")}`,
    };
  }

  if (!topic || typeof topic !== "string") {
    return { valid: false, error: "topic is required and must be a string" };
  }

  const validCountries: UserCountry[] = ["UK", "QA", "OTHER"];
  if (!userCountry || !validCountries.includes(userCountry as UserCountry)) {
    return {
      valid: false,
      error: `userCountry must be one of: ${validCountries.join(", ")}`,
    };
  }

  return {
    valid: true,
    data: {
      essayText: essayText as string,
      examBoard: examBoard as FeedbackRequest["examBoard"],
      topic: topic as string,
      userCountry: userCountry as UserCountry,
      userId: typeof userId === "string" ? userId : undefined,
    },
  };
}

// ─── POST Handler ───────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // 0. Content-Type validation
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return unsupportedMediaTypeResponse();
    }

    // 1. Authenticate
    const supabase = createServerSupabaseClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return unauthorizedResponse();
    }

    // 1b. Subscription check — essay feedback is a Pro feature
    const isPro = await hasActiveSubscription(supabase, user.id);
    if (!isPro) {
      return forbiddenResponse(
        "Essay feedback is a Pro feature. Please upgrade your subscription to access AI-powered feedback."
      );
    }

    // 2. Rate limit: 20 essays per hour per user
    const rl = await rateLimit(`essay-feedback-v2:${user.id}`, {
      limit: 20,
      windowSeconds: 3600,
    });
    if (!rl.success) {
      return rateLimitResponse(rl.resetAt);
    }

    // 3. Parental consent check for minor users
    const consentCheck = await checkMinorAIConsent(user.id);
    if (!consentCheck.allowed) {
      return forbiddenResponse(consentCheck.reason ?? "Consent is required to use this feature.");
    }

    // 4. Parse & validate body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return badRequestResponse("Invalid JSON in request body.");
    }

    const validation = validateRequest(body);

    if (!validation.valid) {
      return badRequestResponse(validation.error);
    }

    const { essayText, examBoard, topic, userCountry } =
      validation.data;
    const userId = user.id;

    // 4. Generate AI feedback
    let rawFeedback: string;
    try {
      rawFeedback = await generateAIFeedback(essayText, examBoard, topic);
    } catch (aiError: unknown) {
      const err = aiError as { message?: string; status?: number; error?: { type?: string } };

      // Timeout from AI provider
      if (
        err.message?.includes("timeout") ||
        err.message?.includes("ETIMEDOUT") ||
        err.error?.type === "timeout_error"
      ) {
        return serviceUnavailableResponse(
          "AI feedback service timed out. Please try again."
        );
      }

      // Upstream rate limit from AI provider
      if (err.status === 429) {
        return serviceUnavailableResponse(
          "AI feedback service is temporarily overloaded. Please try again in a moment."
        );
      }

      return serviceUnavailableResponse(
        "AI feedback service is currently unavailable. Please try again later."
      );
    }

    // 5. Run through content filter
    const filterResult = filterAIResponse(rawFeedback, userCountry, topic);

    // Build response
    const disclaimer = getDisclaimer(examBoard);
    const humanReviewUrl = filterResult.escalationRequired
      ? `/api/review/request?topic=${encodeURIComponent(topic)}&board=${examBoard}`
      : null;

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
    });

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
        .filter((w) => w.severity !== "critical")
        .map((w) => ({
          category: w.category,
          message: w.description,
        })),
    });
  } catch {
    console.error("[Essay Feedback API] Unexpected error");
    return serverErrorResponse("An unexpected error occurred. Please try again.");
  }
}
