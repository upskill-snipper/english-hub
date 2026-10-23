import { describe, it, expect, vi, beforeEach } from 'vitest'
import type Stripe from 'stripe'

/**
 * webhook:D14 - the Stripe path must set isTeacherPlan from the price.
 *
 * Mobile shows teacher tools only when the Prisma row says `isTeacherPlan`
 * (src/lib/entitlements.ts). The sync module never wrote the column, so every
 * web subscription took the default, false, and a teacher who paid GBP 67.99
 * for Teachers Annual through the website lost teacher tools on mobile.
 *
 * The tier is read from the price: a configured TEACHER price (directly, or as
 * the `basePriceId` a promo-built price carries on its product) is a teacher
 * plan; a configured PRO or STUDENT price is a student plan; anything else
 * says nothing and leaves the stored value alone.
 */

const TEACHER_ANNUAL = 'price_teacher_annual_test'
const TEACHER_MONTHLY = 'price_teacher_monthly_test'
const PRO_MONTHLY = 'price_pro_monthly_test'
const PRO_ANNUAL = 'price_pro_annual_test'

const PRISMA_CUID = 'ckusr0000prismacuid0001'
const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'

vi.mock('@/lib/identity', () => ({
  requirePrismaUserId: async () => PRISMA_CUID,
  tryPrismaUserId: async () => PRISMA_CUID,
  IdentityUnresolved: class extends Error {},
  IdentityConflict: class extends Error {},
}))

interface UpsertArgs {
  where: { userId: string }
  create: Record<string, unknown>
  update: Record<string, unknown>
}
const mockUpsert = vi.fn(async (_args: UpsertArgs) => ({ id: 'row_1' }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      upsert: (args: UpsertArgs) => mockUpsert(args),
      findUnique: vi.fn(async () => null),
    },
  },
}))
vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn(), captureMessage: vi.fn() }))

function item(priceId: string, basePriceId?: string): Stripe.SubscriptionItem {
  return {
    id: `si_${priceId}`,
    current_period_end: 1_800_000_000,
    price: {
      id: priceId,
      recurring: { interval: 'year' },
      product: basePriceId ? { id: 'prod_x', metadata: { basePriceId } } : 'prod_x',
    },
  } as unknown as Stripe.SubscriptionItem
}

function subscription(items: Stripe.SubscriptionItem[]): Stripe.Subscription {
  return {
    id: 'sub_1',
    object: 'subscription',
    customer: 'cus_1',
    status: 'active',
    metadata: { userId: SUPABASE_UUID },
    items: { data: items },
  } as unknown as Stripe.Subscription
}

async function sync(sub: Stripe.Subscription) {
  const { syncStripeSubscriptionToPrisma } = await import('@/lib/billing/subscription-sync')
  return syncStripeSubscriptionToPrisma({
    supabaseUserId: SUPABASE_UUID,
    subscription: sub,
    source: 'customer.subscription.created',
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  process.env.STRIPE_PRICE_TEACHER_ANNUAL = TEACHER_ANNUAL
  process.env.STRIPE_PRICE_TEACHER_MONTHLY = TEACHER_MONTHLY
  process.env.STRIPE_PRICE_PRO_MONTHLY = PRO_MONTHLY
  process.env.STRIPE_PRICE_PRO_ANNUAL = PRO_ANNUAL
  delete process.env.STRIPE_PRICE_STUDENT_MONTHLY
  delete process.env.STRIPE_PRICE_STUDENT_ANNUAL
})

describe('planTierFromSubscription', () => {
  it('recognises a teacher catalogue price', async () => {
    const { planTierFromSubscription } = await import('@/lib/billing/plan-from-price')
    expect(planTierFromSubscription(subscription([item(TEACHER_ANNUAL)]))).toEqual({
      isTeacherPlan: true,
      teacherPriceId: TEACHER_ANNUAL,
    })
  })

  it('recognises a promo-built price through its product basePriceId', async () => {
    const { planTierFromSubscription } = await import('@/lib/billing/plan-from-price')
    expect(planTierFromSubscription(subscription([item('price_adhoc_1', TEACHER_ANNUAL)]))).toEqual(
      { isTeacherPlan: true, teacherPriceId: TEACHER_ANNUAL },
    )
  })

  it('calls a student price a student plan', async () => {
    const { planTierFromSubscription } = await import('@/lib/billing/plan-from-price')
    expect(planTierFromSubscription(subscription([item(PRO_MONTHLY)])).isTeacherPlan).toBe(false)
  })

  it('says nothing about a price it does not know', async () => {
    const { planTierFromSubscription } = await import('@/lib/billing/plan-from-price')
    expect(planTierFromSubscription(subscription([item('price_ielts_x')])).isTeacherPlan).toBeNull()
  })

  it('does not treat a TEACHER variable aliased to the PRO price as evidence', async () => {
    process.env.STRIPE_PRICE_TEACHER_ANNUAL = PRO_ANNUAL
    const { planTierFromSubscription } = await import('@/lib/billing/plan-from-price')
    expect(planTierFromSubscription(subscription([item(PRO_ANNUAL)])).isTeacherPlan).toBe(false)
  })
})

describe('the Prisma row', () => {
  it('is written as a teacher plan for a teacher price', async () => {
    await sync(subscription([item(TEACHER_ANNUAL)]))
    const args = mockUpsert.mock.calls[0]![0]
    expect(args.create.isTeacherPlan).toBe(true)
    expect(args.create.teacherPriceId).toBe(TEACHER_ANNUAL)
    expect(args.update.isTeacherPlan).toBe(true)
    expect(args.update.teacherPriceId).toBe(TEACHER_ANNUAL)
  })

  it('is written as a student plan for a student price', async () => {
    await sync(subscription([item(PRO_ANNUAL)]))
    const args = mockUpsert.mock.calls[0]![0]
    expect(args.create.isTeacherPlan).toBe(false)
    expect(args.update.isTeacherPlan).toBe(false)
    expect(args.update.teacherPriceId).toBeNull()
  })

  it('leaves the stored tier alone for a price that says nothing', async () => {
    await sync(subscription([item('price_unknown')]))
    const args = mockUpsert.mock.calls[0]![0]
    expect(args.update).not.toHaveProperty('isTeacherPlan')
    expect(args.update).not.toHaveProperty('teacherPriceId')
    // A brand-new row still needs a value; the column default is false.
    expect(args.create.isTeacherPlan ?? false).toBe(false)
  })
})
