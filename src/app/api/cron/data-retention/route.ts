import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { cleanupExpiredData } from '@/lib/data-retention'
import { runCron } from '@/lib/cron/observability'

export const dynamic = 'force-dynamic'

/**
 * GET /api/cron/data-retention
 *
 * Daily cron job that runs the full data-retention cleanup cycle.
 * Runs at 4 AM daily (configured in vercel.json).
 *
 * Processing order (per UK GDPR & Children's Code):
 *   1. Children's data (priority cleanup per ICO guidance)
 *   1b. Children's Code Standard 8 dormant account processing
 *   2. Hard-delete soft-deleted accounts past 30-day grace period
 *   3. Warn and soft-delete inactive accounts (2 years)
 *   4. Anonymise usage/analytics data older than 12 months
 *   5. Archive support tickets older than 2 years
 *   6. Clean up expired marketing consent records
 *
 * Protected by CRON_SECRET (Vercel's standard Bearer token pattern).
 */
export async function GET(request: NextRequest) {
  // ── Auth: verify CRON_SECRET ──────────────────────────────────────
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  const authHeader = request.headers.get('authorization')
  const incoming = Buffer.from(authHeader ?? '')
  const expected = Buffer.from(`Bearer ${cronSecret}`)
  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return runCron('data-retention', async () => {
    // ── Run the full cleanup cycle ────────────────────────────────────
    const summary = await cleanupExpiredData()

    return {
      summary: {
        startedAt: summary.startedAt,
        completedAt: summary.completedAt,
        hardDeletedAccounts: summary.hardDeletedAccounts.length,
        inactiveWarningsSent: summary.inactiveWarningsSent.length,
        inactiveSoftDeleted: summary.inactiveSoftDeleted.length,
        childrenPriorityCleanups: summary.childrenPriorityCleanups,
        childDormancy: summary.childDormancy
          ? {
              warningsSent: summary.childDormancy.warningsSent.length,
              deletions: summary.childDormancy.deletions.length,
              errors: summary.childDormancy.errors.length,
            }
          : null,
        usageDataAnonymised: summary.usageDataAnonymised,
        supportTicketsArchived: summary.supportTicketsArchived,
        expiredMarketingConsents: summary.expiredMarketingConsents,
        errorCount: summary.errors.length,
      },
    }
  })
}
