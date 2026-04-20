import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { sendWeeklyReport } from '@/lib/weekly-report'
import { runCron } from '@/lib/cron/observability'

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
  // ── Verify cron secret (x-cron-secret header, not Bearer) ─────────
  const cronSecret = request.headers.get('x-cron-secret')
  const expectedSecret = process.env.CRON_SECRET

  if (!expectedSecret) {
    console.error('[weekly-reports] CRON_SECRET environment variable is not set')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  if (
    !cronSecret ||
    !crypto.timingSafeEqual(Buffer.from(cronSecret), Buffer.from(expectedSecret))
  ) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  return runCron('weekly-reports', async () => {
    // ── Fetch parents who opted in to weekly reports ──────────────────

    // TODO(Phase-7): Replace with Supabase query on parent_settings table (weeklyReportEnabled, reportDay, linked students with active subscriptions)
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
    const parentIds: string[] = []

    let totalSent = 0
    let totalFailed = 0

    for (const parentId of parentIds) {
      const result = await sendWeeklyReport(parentId)
      totalSent += result.sent
      totalFailed += result.failed
    }

    return {
      parentsProcessed: parentIds.length,
      emailsSent: totalSent,
      emailsFailed: totalFailed,
    }
  })
}

// ── Health check / status endpoint ────────────────────────────────────

export async function GET(request: NextRequest) {
  const cronSecret = request.headers.get('x-cron-secret')
  const expectedSecret = process.env.CRON_SECRET

  if (
    !expectedSecret ||
    !cronSecret ||
    !crypto.timingSafeEqual(Buffer.from(cronSecret), Buffer.from(expectedSecret))
  ) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  return NextResponse.json({
    status: 'ok',
    endpoint: 'weekly-reports',
  })
}
