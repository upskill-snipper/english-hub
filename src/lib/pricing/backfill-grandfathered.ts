/**
 * Back-fill `grandfatheredPriceMinor` / `grandfatheredCurrency` / `pricingTier`
 * on every Subscription row created BEFORE the grandfathering migration.
 *
 * R-031. The founder is running this against a small (< 500 row) production
 * user base, so no batching / cursor is necessary. Reading every row and
 * updating in a single `Promise.all` is acceptable; should the user base
 * grow before this script is retired, move to a `take` / `skip` loop.
 *
 * Safety rules:
 *   • Never overwrite an existing `grandfatheredPriceMinor` - only fill rows
 *     where it is NULL. Enforced by the WHERE clause and the per-row guard.
 *   • Everyone back-filled pre-migration is by definition an Early Access
 *     subscriber (the Standard tier doesn't take effect until Aug 2026).
 *     All rows therefore receive `pricingTier = 'early_access'`.
 *   • Price is computed from the row's existing `plan` + `isTeacherPlan`
 *     using **present-day Early Access prices** - matches what the user
 *     was actually charged by Stripe / RevenueCat on their last renewal.
 *
 * Not an API route - invoked via the admin endpoint at
 * `src/app/api/admin/pricing/backfill/route.ts`.
 */

import type { PrismaClient } from '@prisma/client'
import { priceForTier, type Plan } from './grandfather'

export interface BackfillResult {
  scanned: number
  updated: number
  skipped: number
}

export async function backfillGrandfatheredPrices(prisma: PrismaClient): Promise<BackfillResult> {
  const candidates = await prisma.subscription.findMany({
    where: { grandfatheredPriceMinor: null },
    select: {
      id: true,
      userId: true,
      plan: true,
      isTeacherPlan: true,
      grandfatheredPriceMinor: true,
    },
  })

  let updated = 0
  let skipped = 0

  for (const row of candidates) {
    // Re-check in case another process raced us on this row.
    if (row.grandfatheredPriceMinor !== null) {
      skipped += 1
      continue
    }

    const plan: Plan = row.plan === 'ANNUAL' ? 'ANNUAL' : 'MONTHLY'
    const role: 'student' | 'teacher' = row.isTeacherPlan ? 'teacher' : 'student'
    const priceMinor = priceForTier(plan, 'early_access', role)

    await prisma.subscription.update({
      where: { id: row.id },
      data: {
        grandfatheredPriceMinor: priceMinor,
        grandfatheredCurrency: 'GBP',
        pricingTier: 'early_access',
      },
    })
    updated += 1
  }

  return {
    scanned: candidates.length,
    updated,
    skipped,
  }
}
