import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/admin-auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

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
    // Rate limit: 10 submissions per IP per hour
    const ip = getClientIp(request.headers);
    const rl = await rateLimit(`feedback:${ip}`, { limit: 10, windowSeconds: 3600 });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { type, pageUrl, email } = body;

    if (!type || !pageUrl) {
      return NextResponse.json(
        { error: "Missing required fields: type, pageUrl" },
        { status: 400 }
      );
    }

    // Validate and sanitize string fields with length limits
    if (typeof pageUrl !== "string" || pageUrl.trim().length > 2000) {
      return NextResponse.json(
        { error: "pageUrl must be a string of 2000 characters or fewer" },
        { status: 400 }
      );
    }

    if (email !== undefined && email !== null) {
      if (typeof email !== "string" || email.length > 320) {
        return NextResponse.json(
          { error: "Invalid email" },
          { status: 400 }
        );
      }
    }

    if (type === "suggestion") {
      if (!body.subject?.trim() || !body.message?.trim()) {
        return NextResponse.json(
          { error: "Subject and message are required for suggestions" },
          { status: 400 }
        );
      }
      if (typeof body.subject !== "string" || body.subject.trim().length > 200) {
        return NextResponse.json(
          { error: "Subject must be 200 characters or fewer" },
          { status: 400 }
        );
      }
      if (typeof body.message !== "string" || body.message.trim().length > 5000) {
        return NextResponse.json(
          { error: "Message must be 5000 characters or fewer" },
          { status: 400 }
        );
      }
      if (body.category && (typeof body.category !== "string" || body.category.length > 100)) {
        return NextResponse.json(
          { error: "Invalid category" },
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
      if (typeof body.description !== "string" || body.description.trim().length > 5000) {
        return NextResponse.json(
          { error: "Description must be 5000 characters or fewer" },
          { status: 400 }
        );
      }
      if (body.issueType && (typeof body.issueType !== "string" || body.issueType.length > 100)) {
        return NextResponse.json(
          { error: "Invalid issue type" },
          { status: 400 }
        );
      }
      if (body.severity && (typeof body.severity !== "string" || !["Minor", "Major", "Critical"].includes(body.severity))) {
        return NextResponse.json(
          { error: 'Severity must be "Minor", "Major", or "Critical"' },
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
      pageUrl: pageUrl.trim(),
      email: email?.trim() || undefined,
      // TODO: extract userId from session/auth when available
      userId: undefined,

      // Suggestion-specific
      ...(type === "suggestion" && {
        subject: body.subject.trim(),
        message: body.message.trim(),
        category: body.category?.trim() || "Other",
      }),

      // Issue-specific
      ...(type === "issue" && {
        issueType: body.issueType?.trim() || "Other",
        description: body.description.trim(),
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

/* ─── GET — admin list ────────────────────────────────────────── */

export async function GET(request: NextRequest) {
  const { user, error } = await verifyAdmin();
  if (error === "Unauthorized" || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (error === "Forbidden") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

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
  // Only admins can update feedback status
  const { user, error: authErr } = await verifyAdmin();
  if (authErr === "Unauthorized" || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (authErr === "Forbidden") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

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
