import { NextRequest, NextResponse } from "next/server";
import { reviews, ReviewRecord } from "./store";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateReferenceNumber(): string {
  const now = new Date();
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `HR-${datePart}-${randomPart}`;
}

const VALID_REASONS = [
  "inaccurate",
  "unclear",
  "unfair-score",
  "missed-points",
  "other",
] as const;

// ---------------------------------------------------------------------------
// In-memory store (replace with database in production)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// POST /api/review — create a new review request
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { essayId, reason, detail, selfAssessment } = body;

    // --- Validation ---
    if (!essayId || typeof essayId !== "string") {
      return NextResponse.json(
        { error: "essayId is required." },
        { status: 400 }
      );
    }

    if (!reason || !VALID_REASONS.includes(reason)) {
      return NextResponse.json(
        { error: "A valid reason is required." },
        { status: 400 }
      );
    }

    if (!detail || typeof detail !== "string" || detail.trim().length === 0) {
      return NextResponse.json(
        { error: "Detail is required." },
        { status: 400 }
      );
    }

    if (detail.length > 2000) {
      return NextResponse.json(
        { error: "Detail must be 2000 characters or fewer." },
        { status: 400 }
      );
    }

    if (selfAssessment && typeof selfAssessment === "string" && selfAssessment.length > 1500) {
      return NextResponse.json(
        { error: "Self-assessment must be 1500 characters or fewer." },
        { status: 400 }
      );
    }

    // --- Build record ---
    // TODO: replace with real user ID from session/auth
    const userId = "current-user";

    const referenceNumber = generateReferenceNumber();
    const now = new Date().toISOString();

    const record: ReviewRecord = {
      referenceNumber,
      userId,
      essayId,
      essayTitle: `Essay ${essayId}`, // TODO: look up real title
      reason,
      detail: detail.trim(),
      selfAssessment:
        selfAssessment && typeof selfAssessment === "string"
          ? selfAssessment.trim()
          : undefined,
      status: "submitted",
      timeline: [
        {
          stage: "submitted",
          label: "Review request submitted",
          timestamp: now,
          description: "Your request has been received and queued for review.",
        },
        {
          stage: "under-review",
          label: "Under review",
          timestamp: null,
        },
        {
          stage: "completed",
          label: "Review completed",
          timestamp: null,
        },
      ],
      createdAt: now,
    };

    reviews.push(record);

    return NextResponse.json(
      {
        referenceNumber,
        estimatedResponse: "3 school days",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}

// ---------------------------------------------------------------------------
// GET /api/review — list current user's review requests
// ---------------------------------------------------------------------------

export async function GET() {
  // TODO: filter by authenticated user
  const userId = "current-user";

  const userReviews = reviews
    .filter((r) => r.userId === userId)
    .map((r) => ({
      referenceNumber: r.referenceNumber,
      essayTitle: r.essayTitle,
      reason: r.reason,
      status: r.status,
      createdAt: r.createdAt,
    }))
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return NextResponse.json({ reviews: userReviews });
}
