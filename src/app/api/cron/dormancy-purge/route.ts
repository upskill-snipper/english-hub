import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { prisma } from '@/lib/prisma'
import { findDormantChildAccounts, purgeDormantAccount } from '@/lib/privacy/dormancy'
import { runCron } from '@/lib/cron/observability'

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
export async function POST(request: NextRequest) {
  // ── Auth: verify CRON_SECRET (Bearer token) ───────────────────────
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    console.error('[dormancy-purge] CRON_SECRET environment variable is not set')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const authHeader = request.headers.get('authorization')
  const incoming = Buffer.from(authHeader ?? '')
  const expected = Buffer.from(`Bearer ${cronSecret}`)

  if (incoming.length !== expected.length || !timingSafeEqual(incoming, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return runCron('dormancy-purge', async () => {
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
      return { purged, errors }
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

    return { purged, errors }
  })
}
