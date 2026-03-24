import { NextRequest, NextResponse } from "next/server";
import { sendWeeklyReport } from "@/lib/weekly-report";

// ─── Cron endpoint for weekly parent progress reports ─────────────────
//
// This endpoint should be called by a scheduled job (e.g. Vercel Cron,
// AWS CloudWatch, or similar) on a weekly basis at the configured time.
//
// Required header: x-cron-secret must match the CRON_SECRET env variable.
//
// The endpoint fetches all parents who have opted in to weekly reports
// and sends each a branded HTML email with their child's progress.

export async function POST(request: NextRequest) {
  try {
    // ── Verify cron secret ────────────────────────────────────────────

    const cronSecret = request.headers.get("x-cron-secret");
    const expectedSecret = process.env.CRON_SECRET;

    if (!expectedSecret) {
      console.error(
        "[weekly-reports] CRON_SECRET environment variable is not set"
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

    // ── Fetch parents who opted in to weekly reports ──────────────────

    // TODO: Replace with real database query
    // const parents = await prisma.user.findMany({
    //   where: {
    //     role: "PARENT",
    //     parentSettings: {
    //       weeklyReportEnabled: true,
    //       reportDay: getCurrentDayName(),
    //     },
    //     linkedStudents: {
    //       some: {
    //         student: {
    //           subscription: { status: "ACTIVE" },
    //         },
    //       },
    //     },
    //   },
    //   select: { id: true, email: true },
    // });

    // Mock: No parents in database yet
    const parentIds: string[] = [];

    let totalSent = 0;
    let totalFailed = 0;

    for (const parentId of parentIds) {
      const result = await sendWeeklyReport(parentId);
      totalSent += result.sent;
      totalFailed += result.failed;
    }

    return NextResponse.json({
      success: true,
      parentsProcessed: parentIds.length,
      emailsSent: totalSent,
      emailsFailed: totalFailed,
    });
  } catch (error) {
    console.error("[weekly-reports] Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ── Health check / status endpoint ────────────────────────────────────

export async function GET() {
  return NextResponse.json({
    endpoint: "weekly-reports",
    status: "ok",
    description: "Sends weekly progress report emails to opted-in parents",
    schedule: "Weekly (configurable per parent)",
    method: "POST with x-cron-secret header",
  });
}
