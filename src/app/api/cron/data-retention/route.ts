import { NextRequest, NextResponse } from 'next/server'
import { cleanupExpiredData } from '@/lib/data-retention'
import { runCron } from '@/lib/cron/observability'
import { CHILD_DELETION_LOCK } from '@/lib/cron/lock'
import { measureRetentionCoverage } from '@/lib/cron/coverage'
import { authoriseCronRequest } from '@/lib/cron/auth'

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
  const auth = authoriseCronRequest(request, 'data-retention')
  if (!auth.ok) return auth.response

  return runCron(
    'data-retention',
    async () => {
      // ── How much of the user base can this run actually see? ──────────
      // Everything below enumerates prisma.user. When that table holds fewer
      // rows than there are real accounts, low counts below mean "invisible",
      // not "clean". Reported so a green run cannot be read as a discharged
      // retention duty.
      const coverage = await measureRetentionCoverage('data-retention')

      // ── Run the full cleanup cycle ────────────────────────────────────
      const summary = await cleanupExpiredData()

      return {
        coverage,
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
    },
    {
      // Shared with the other job that deletes dormant children's accounts.
      // The per-name lease stops Vercel running THIS job twice; only a shared
      // name stops the two of them running at once, and one of the two purge
      // paths is not wrapped in a transaction. See `@/lib/cron/lock`.
      lockName: CHILD_DELETION_LOCK,
    },
  )
}
