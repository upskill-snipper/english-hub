// ─── Essay Feedback API Route ───────────────────────────────────────────
// POST /api/essay/feedback
// Accepts essay text, runs it through an AI provider, filters the
// response for compliance, and returns feedback with content warnings.

import { NextRequest, NextResponse } from "next/server";
import { filterAIResponse, type UserCountry } from "@/lib/content-filter";
import { getDisclaimer } from "@/lib/ai-disclaimer";

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
  // TODO: Replace with actual AI provider call
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
  // TODO: Replace with actual audit logging (database, logging service, etc.)
  // For now, log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[AUDIT] Essay feedback filter:", JSON.stringify(entry));
  }

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
    const body = await request.json();
    const validation = validateRequest(body);

    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { essayText, examBoard, topic, userCountry, userId } =
      validation.data;

    // Generate AI feedback
    let rawFeedback: string;
    try {
      rawFeedback = await generateAIFeedback(essayText, examBoard, topic);
    } catch {
      return NextResponse.json(
        {
          error:
            "AI feedback service is currently unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    // Run through content filter
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

    // TODO: Store essay and feedback in database
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
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
