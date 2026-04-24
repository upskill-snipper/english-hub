/**
 * Unit tests for the grandfathering helpers + back-fill logic.
 * Closes R-031 acceptance: prices lock at signup and are preserved on renewal.
 */

import { describe, it, expect, vi } from 'vitest'
import {
  priceForTier,
  resolveTierAtSignup,
  captureGrandfatherFields,
  PRICE_INCREASE_DATE,
} from './grandfather'
import { backfillGrandfatheredPrices } from './backfill-grandfathered'
import { PRICING } from '@/constants/pricing'

// Expected minor-unit conversions — avoid re-implementing `poundsToMinor`
// in tests; compare against the constants × 100, rounded.
const p = (pounds: number) => Math.round(pounds * 100)

describe('priceForTier', () => {
  it('returns Early Access student monthly in minor units', () => {
    expect(priceForTier('MONTHLY', 'early_access', 'student')).toBe(p(PRICING.STUDENT_MONTHLY))
  })

  it('returns Early Access student annual in minor units', () => {
    expect(priceForTier('ANNUAL', 'early_access', 'student')).toBe(p(PRICING.STUDENT_ANNUAL))
  })

  it('returns Early Access teacher annual in minor units', () => {
    expect(priceForTier('ANNUAL', 'early_access', 'teacher')).toBe(p(PRICING.TEACHER_ANNUAL))
  })

  it('returns Standard teacher monthly in minor units', () => {
    expect(priceForTier('MONTHLY', 'standard', 'teacher')).toBe(
      p(PRICING.TEACHER_MONTHLY_STANDARD),
    )
  })

  it('returns Founding school price regardless of plan', () => {
    expect(priceForTier('ANNUAL', 'founding_school', 'teacher')).toBe(p(PRICING.FOUNDER_SCHOOL_MIN))
  })

  it('returns Founding Legacy school price', () => {
    expect(priceForTier('ANNUAL', 'founding_legacy', 'teacher')).toBe(
      p(PRICING.FOUNDER_SCHOOL_LEGACY),
    )
  })
})

describe('resolveTierAtSignup', () => {
  it('returns early_access one millisecond before the rollover', () => {
    const justBefore = new Date(PRICE_INCREASE_DATE.getTime() - 1)
    expect(resolveTierAtSignup(justBefore)).toBe('early_access')
  })

  it('returns standard exactly at the rollover instant', () => {
    expect(resolveTierAtSignup(PRICE_INCREASE_DATE)).toBe('standard')
  })

  it('returns standard after the rollover', () => {
    const after = new Date('2026-09-01T00:00:00.000Z')
    expect(resolveTierAtSignup(after)).toBe('standard')
  })

  it('returns early_access for today (pre-Aug-2026 clock)', () => {
    // Assumes this test runs on the assistant's system clock, which is
    // pinned pre-rollover per the R-031 pre-launch window.
    const today = new Date('2026-04-23T12:00:00.000Z')
    expect(resolveTierAtSignup(today)).toBe('early_access')
  })
})

describe('captureGrandfatherFields', () => {
  it('captures Early Access student annual pre-rollover', () => {
    const now = new Date('2026-05-01T00:00:00.000Z')
    const cap = captureGrandfatherFields('ANNUAL', 'student', now)
    expect(cap).toEqual({
      grandfatheredPriceMinor: p(PRICING.STUDENT_ANNUAL),
      grandfatheredCurrency: 'GBP',
      pricingTier: 'early_access',
    })
  })

  it('captures Standard teacher annual post-rollover (simulated clock)', () => {
    const now = new Date('2026-08-15T00:00:00.000Z')
    const cap = captureGrandfatherFields('ANNUAL', 'teacher', now)
    expect(cap).toEqual({
      grandfatheredPriceMinor: p(PRICING.TEACHER_ANNUAL_STANDARD),
      grandfatheredCurrency: 'GBP',
      pricingTier: 'standard',
    })
  })
})

describe('renewal preservation contract', () => {
  // We do not unit-test the reconciler's Prisma calls here; that is covered
  // by the existing revenuecat webhook tests. What we can assert is the
  // documented contract: capturing twice with different clocks returns
  // different tiers, proving that the webhook MUST preserve the earlier
  // captured value on RENEWAL rather than recompute.
  it('would produce a different tier at renewal if recomputed naively', () => {
    const signup = captureGrandfatherFields('MONTHLY', 'student', new Date('2026-05-01'))
    const renewal = captureGrandfatherFields('MONTHLY', 'student', new Date('2026-09-01'))
    expect(signup.pricingTier).toBe('early_access')
    expect(renewal.pricingTier).toBe('standard')
    expect(signup.grandfatheredPriceMinor).not.toBe(renewal.grandfatheredPriceMinor)
  })
})

// ─── Back-fill tests ───────────────────────────────────────────────────

function makePrismaMock(rows: Array<{
  id: string
  userId: string
  plan: 'MONTHLY' | 'ANNUAL'
  isTeacherPlan: boolean
  grandfatheredPriceMinor: number | null
}>) {
  const updated: Array<{ id: string; data: Record<string, unknown> }> = []
  const mock = {
    subscription: {
      findMany: vi.fn(async () => rows.filter((r) => r.grandfatheredPriceMinor === null)),
      update: vi.fn(async ({ where, data }: { where: { id: string }; data: Record<string, unknown> }) => {
        updated.push({ id: where.id, data })
        const row = rows.find((r) => r.id === where.id)
        if (row) row.grandfatheredPriceMinor = data.grandfatheredPriceMinor as number
        return row
      }),
    },
  }
  return { mock, updated }
}

describe('backfillGrandfatheredPrices', () => {
  it('assigns Early Access student annual to a legacy student-annual row', async () => {
    const { mock, updated } = makePrismaMock([
      {
        id: 'sub-1',
        userId: 'user-1',
        plan: 'ANNUAL',
        isTeacherPlan: false,
        grandfatheredPriceMinor: null,
      },
    ])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await backfillGrandfatheredPrices(mock as any)
    expect(result).toEqual({ scanned: 1, updated: 1, skipped: 0 })
    expect(updated[0]?.data.grandfatheredPriceMinor).toBe(p(PRICING.STUDENT_ANNUAL))
    expect(updated[0]?.data.pricingTier).toBe('early_access')
  })

  it('assigns Early Access teacher monthly to a legacy teacher-monthly row', async () => {
    const { mock, updated } = makePrismaMock([
      {
        id: 'sub-2',
        userId: 'user-2',
        plan: 'MONTHLY',
        isTeacherPlan: true,
        grandfatheredPriceMinor: null,
      },
    ])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await backfillGrandfatheredPrices(mock as any)
    expect(result.updated).toBe(1)
    expect(updated[0]?.data.grandfatheredPriceMinor).toBe(p(PRICING.TEACHER_MONTHLY))
  })

  it('skips rows that already have a locked price', async () => {
    const { mock } = makePrismaMock([
      {
        id: 'sub-3',
        userId: 'user-3',
        plan: 'ANNUAL',
        isTeacherPlan: false,
        grandfatheredPriceMinor: 2999,
      },
    ])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await backfillGrandfatheredPrices(mock as any)
    expect(result).toEqual({ scanned: 0, updated: 0, skipped: 0 })
  })
})
