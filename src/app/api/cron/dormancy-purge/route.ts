import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { findDormantChildAccounts, purgeDormantAccount } from '@/lib/privacy/dormancy'
import { runCron } from '@/lib/cron/observability'
import { CHILD_DELETION_LOCK } from '@/lib/cron/lock'
import { measureRetentionCoverage } from '@/lib/cron/coverage'
import { authoriseCronRequest } from '@/lib/cron/auth'

export const dynamic = 'force-dynamic'

// ─── Types ────────────────────────────────────────────────────────────────

interface PurgeError {
  userId?: string
  step: string
  message: string
}

/**
 * POST /api/cron/dormancy-purge
 *
 * Children's Code (Standard 8 - Data Minimisation) auto-purge endpoint.
 * Identifies child accounts that have been inactive for 12+ months and
 * irrevocably removes their PII, deletes consent records, anonymises
 * analytics, and soft-deletes the user row. Each purge is audited.
 *
 * Unlike `/api/cron/dormancy-check` (which only sends warnings) this
 * endpoint performs the actual deletion. It is intentionally separate so
 * that the warning cadence (daily) can differ from the purge cadence
 * (weekly) and so that purge failures are isolated from warning failures.
 *
 * Auth: Bearer CRON_SECRET (Vercel Cron's standard pattern).
 * Returns: { purged: number, errors: PurgeError[] }
 */
/**
 * Vercel Cron entry point.
 *
 * DEFECT this fixes (2026-08-23): this route is scheduled weekly in
 * vercel.json ("0 4 * * 0") but exported ONLY a POST handler. Vercel Cron
 * issues a GET, so every scheduled run returned 405 and the child-account
 * dormancy purge - a data-retention obligation, not an optional job - has
 * never actually executed. Same defect class as the weekly-report crons
 * fixed earlier. POST is retained for manual invocation.
 */
export async function GET(request: NextRequest) {
  return POST(request)
}

export async function POST(request: NextRequest) {
  const auth = authoriseCronRequest(request, 'dormancy-purge')
  if (!auth.ok) return auth.response

  return runCron(
    'dormancy-purge',
    async () => {
      // Candidates come from prisma.user, so an account with no projection
      // is invisible here. Recorded per run rather than assumed away.
      const coverage = await measureRetentionCoverage('dormancy-purge')

      const errors: PurgeError[] = []
      let purged = 0

      let dormantIds: string[] = []
      try {
        dormantIds = await findDormantChildAccounts(prisma)
      } catch (err) {
        errors.push({
          step: 'find_dormant_child_accounts',
          message: err instanceof Error ? err.message : String(err),
        })
        return { coverage, purged, errors }
      }

      for (const userId of dormantIds) {
        try {
          await purgeDormantAccount(prisma, userId)
          purged += 1
        } catch (err) {
          errors.push({
            userId,
            step: 'purge_dormant_account',
            message: err instanceof Error ? err.message : String(err),
          })
        }
      }

      // Cycle-summary audit so DPO can verify weekly purge volume.
      try {
        await prisma.auditLog.create({
          data: {
            userId: null,
            action: 'CHILD_DORMANCY_PURGE_CYCLE_COMPLETED',
            resource: 'ChildDormancy',
            resourceId: 'system',
            details: {
              automated: true,
              candidates: dormantIds.length,
              purged,
              errors: errors.length,
              timestamp: new Date().toISOString(),
              complianceStandard: "Children's Code Standard 8 - Data Minimisation",
            },
            ipAddress: 'system',
          },
        })
      } catch (err) {
        errors.push({
          step: 'audit_summary',
          message: err instanceof Error ? err.message : String(err),
        })
      }

      return { coverage, purged, errors }
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
