import { NextRequest, NextResponse } from "next/server";

/* ─── Types ──────────────────────────────────────────────────── */

export interface FeedbackEntry {
  id: string;
  type: "suggestion" | "issue";
  status: "new" | "reviewed" | "resolved";
  createdAt: string;
  pageUrl: string;
  userId?: string;
  email?: string;

  // Suggestion fields
  subject?: string;
  message?: string;
  category?: string;

  // Issue fields
  issueType?: string;
  description?: string;
  severity?: string;
}

/* ─── In-memory store (replace with DB in production) ────────── */

const feedbackStore: FeedbackEntry[] = [];

/* ─── POST — submit feedback ─────────────────────────────────── */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, pageUrl, email } = body;

    if (!type || !pageUrl) {
      return NextResponse.json(
        { error: "Missing required fields: type, pageUrl" },
        { status: 400 }
      );
    }

    if (type === "suggestion") {
      if (!body.subject?.trim() || !body.message?.trim()) {
        return NextResponse.json(
          { error: "Subject and message are required for suggestions" },
          { status: 400 }
        );
      }
    } else if (type === "issue") {
      if (!body.description?.trim()) {
        return NextResponse.json(
          { error: "Description is required for issue reports" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: 'Invalid type. Must be "suggestion" or "issue"' },
        { status: 400 }
      );
    }

    const entry: FeedbackEntry = {
      id: `fb_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      type,
      status: "new",
      createdAt: new Date().toISOString(),
      pageUrl,
      email: email || undefined,
      // TODO: extract userId from session/auth when available
      userId: undefined,

      // Suggestion-specific
      ...(type === "suggestion" && {
        subject: body.subject,
        message: body.message,
        category: body.category || "Other",
      }),

      // Issue-specific
      ...(type === "issue" && {
        issueType: body.issueType || "Other",
        description: body.description,
        severity: body.severity || "Minor",
      }),
    };

    feedbackStore.push(entry);

    return NextResponse.json(
      { success: true, id: entry.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

/* ─── GET — admin list (add auth check in production) ────────── */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const status = searchParams.get("status");
  const severity = searchParams.get("severity");

  let results = [...feedbackStore];

  if (type) {
    results = results.filter((f) => f.type === type);
  }
  if (status) {
    results = results.filter((f) => f.status === status);
  }
  if (severity) {
    results = results.filter((f) => f.severity === severity);
  }

  // Sort newest first
  results.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json({
    feedback: results,
    total: results.length,
    counts: {
      suggestions: feedbackStore.filter((f) => f.type === "suggestion").length,
      issues: feedbackStore.filter((f) => f.type === "issue").length,
      new: feedbackStore.filter((f) => f.status === "new").length,
      reviewed: feedbackStore.filter((f) => f.status === "reviewed").length,
      resolved: feedbackStore.filter((f) => f.status === "resolved").length,
    },
  });
}

/* ─── PATCH — update status ──────────────────────────────────── */

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "Missing required fields: id, status" },
        { status: 400 }
      );
    }

    if (!["new", "reviewed", "resolved"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    const entry = feedbackStore.find((f) => f.id === id);
    if (!entry) {
      return NextResponse.json(
        { error: "Feedback entry not found" },
        { status: 404 }
      );
    }

    entry.status = status;

    return NextResponse.json({ success: true, entry });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
