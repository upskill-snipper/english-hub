/**
 * POST /api/admin/pricing/backfill
 *
 * Admin-only trigger for the grandfathering back-fill script. Fills
 * `grandfatheredPriceMinor` / `grandfatheredCurrency` / `pricingTier` on
 * every Subscription row where the lock is currently NULL, using
 * present-day Early Access prices keyed off `plan` + `isTeacherPlan`.
 *
 * Auth: `verifyAdmin()` - 401 Unauthorized when no session, 403 Forbidden
 * when the session is not in `ADMIN_EMAILS` / site admin list.
 *
 * Response: `{ ok: true, data: { scanned, updated, skipped } }`.
 *
 * Runbook: `D:\Coding\english-hub-mobile\docs\GRANDFATHERING_RUNBOOK.md`.
 */

import { NextRequest, NextResponse } from 'next/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'
import { backfillGrandfatheredPrices } from '@/lib/pricing/backfill-grandfathered'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(_request: NextRequest) {
  const { error: authError } = await verifyAdmin()

  if (authError === 'Unauthorized') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (authError === 'Forbidden') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const result = await backfillGrandfatheredPrices(prisma)
    return NextResponse.json({ ok: true, data: result })
  } catch (err) {
    console.error('[api/admin/pricing/backfill] Backfill failed:', err)
    return NextResponse.json({ ok: false, error: 'Backfill failed' }, { status: 500 })
  }
}
