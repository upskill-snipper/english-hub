import { NextRequest, NextResponse } from "next/server";
import { cleanupExpiredData } from "@/lib/data-retention";

// ─── Cron endpoint for scheduled data retention cleanup ─────────────────
//
// This endpoint should be called by a scheduled job (e.g. Vercel Cron,
// AWS CloudWatch, or similar) on a daily basis.
//
// Required header: x-cron-secret must match the CRON_SECRET env variable.

export async function POST(request: NextRequest) {
  try {
    // ── Verify cron secret ────────────────────────────────────────────

    const cronSecret = request.headers.get("x-cron-secret");
    const expectedSecret = process.env.CRON_SECRET;

    if (!expectedSecret) {
      console.error(
        "[data-retention] CRON_SECRET environment variable is not set"
      );
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    if (!cronSecret || cronSecret !== expectedSecret) {
      return NextResponse.json(
        { error: "Unauthorised" },
        { status: 401 }
      );
    }

    // ── Run cleanup ──────────────────────────────────────────────────

    const summary = await cleanupExpiredData();

    // ── Return summary ──────────────────────────────────────────────

    return NextResponse.json({
      success: true,
      summary: {
        startedAt: summary.startedAt,
        completedAt: summary.completedAt,
        actions: {
          hardDeletedAccounts: summary.hardDeletedAccounts.length,
          inactiveWarningsSent: summary.inactiveWarningsSent.length,
          inactiveSoftDeleted: summary.inactiveSoftDeleted.length,
          usageDataAnonymised: summary.usageDataAnonymised,
          supportTicketsArchived: summary.supportTicketsArchived,
          expiredMarketingConsents: summary.expiredMarketingConsents,
          childrenPriorityCleanups: summary.childrenPriorityCleanups,
        },
        errors: summary.errors.length,
        // Only include error details in non-production for debugging
        ...(process.env.NODE_ENV !== "production" && {
          errorDetails: summary.errors,
        }),
      },
    });
  } catch (error) {
    console.error("[data-retention] Unhandled error:", error);
    return NextResponse.json(
      { error: "Data retention cleanup failed" },
      { status: 500 }
    );
  }
}

// ─── GET: health check for monitoring ───────────────────────────────────

export async function GET(request: NextRequest) {
  const cronSecret = request.headers.get("x-cron-secret");
  const expectedSecret = process.env.CRON_SECRET;

  if (!expectedSecret || !cronSecret || cronSecret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  return NextResponse.json({
    status: "ok",
    endpoint: "data-retention-cron",
    description:
      "POST to this endpoint to trigger data retention cleanup. " +
      "Requires x-cron-secret header.",
  });
}
