import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { NextRequest } from 'next/server'
import type Stripe from 'stripe'
import type { Subscription } from '@prisma/client'

/**
 * A no-card trialist who pays for IELTS, and the trial AI ceiling
 * (31 October 2026).
 *
 * `resolveNoCardTrial` decides whom to meter from the Prisma row alone: a
 * TRIALING row with no Stripe ids and no payments. Before b24bfd2d9 an IELTS
 * checkout took that row, so the payer had "a card on file" and was not
 * metered. Since b24bfd2d9 an IELTS-only subscription never takes the row
 * (rightly: mobile read it as Pro, and the trial-expiry cron lost the trial),
 * so the row stays a no-card trial until the cron ends it, and the four IELTS
 * routes held a customer who had just paid GBP 39 a month or GBP 249 a year to
 * 15 AI calls a day and 40 across the trial, then a 402 telling them to see
 * the plans. The IELTS routes now pass `ieltsFunded`, and a paid IELTS plan
 * (`profiles.ielts_status` 'active') is not metered there.
 *
 * This runs the real webhook checkout over a stateful row, then the real
 * enforceTrialAllowance.
 */

const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'
const PRISMA_CUID = 'ckusr0000prismacuid0001'
const IELTS = 'price_ielts_monthly'
const DAY = 24 * 60 * 60
const NOW = Math.floor(Date.now() / 1000)
const TRIAL_END = NOW + 5 * DAY

vi.mock('@/lib/identity', () => ({
  requirePrismaUserId: async () => PRISMA_CUID,
  tryPrismaUserId: async () => PRISMA_CUID,
  findExistingUser: async () => ({ id: PRISMA_CUID }),
  IdentityUnresolved: class extends Error {},
  IdentityConflict: class extends Error {},
}))

let row: Subscription | null = null

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: async () => ({ id: PRISMA_CUID }) },
    subscription: {
      upsert: async ({ update }: { update: Record<string, unknown> }) => {
        if (row) Object.assign(row, update)
        return { id: 'row_1' }
      },
      findUnique: async () => (row ? { ...row } : null),
      update: async ({ data }: { data: Record<string, unknown> }) => {
        if (row) Object.assign(row, data)
        return { id: 'row_1' }
      },
    },
  },
}))

vi.mock('@sentry/nextjs', () => ({ captureException: vi.fn(), captureMessage: vi.fn() }))
vi.mock('@/lib/affiliate/attribution', () => ({ attributeAffiliateReferral: vi.fn() }))
vi.mock('@/lib/school-entitlement', () => ({ getPupilSchoolAccess: vi.fn(async () => null) }))

const mockConsume = vi.fn(async () => ({ allowed: true, used: 1, limit: 40 }))
vi.mock('@/lib/usage/free-allowance', () => ({
  consumeAllowance: (...a: unknown[]) => mockConsume(...(a as [])),
  refundAllowance: vi.fn(async () => {}),
  resolveUsageSubject: () => ({ kind: 'user', id: SUPABASE_UUID }),
  allowanceExhaustedResponse: () => new Response('402', { status: 402 }),
}))

let stripeSubs: Record<string, Stripe.Subscription> = {}
const mockConstructEvent = vi.fn()
vi.mock('@/lib/stripe', () => ({
  stripe: {
    webhooks: { constructEvent: (...a: unknown[]) => mockConstructEvent(...(a as [])) },
    subscriptions: {
      retrieve: async (id: string) => stripeSubs[id],
      list: async () => ({ data: Object.values(stripeSubs) }),
    },
    customers: { retrieve: async () => ({ deleted: false, email: 'p@example.com' }) },
    invoices: { retrieve: vi.fn() },
  },
  isIeltsPriceId: (id: string | null | undefined) => id === IELTS,
}))

let profile: Record<string, unknown> = {}
let profileReadFails = false

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: (table: string) => {
      if (table === 'webhook_events') {
        return {
          insert: async () => ({ error: null }),
          delete: () => ({ eq: async () => ({ error: null }) }),
        }
      }
      const single = async () =>
        profileReadFails
          ? { data: null, error: { code: '57014', message: 'statement timeout' } }
          : { data: { id: SUPABASE_UUID, ...profile }, error: null }
      return {
        select: () => ({ eq: () => ({ single, maybeSingle: single }) }),
        update: (payload: Record<string, unknown>) => {
          if (table === 'profiles') profile = { ...profile, ...payload }
          return { eq: () => ({ error: null, in: async () => ({ error: null, count: 0 }) }) }
        },
        insert: async () => ({ error: null }),
      }
    },
  }),
}))

function ieltsPlan(status: Stripe.Subscription.Status): Stripe.Subscription {
  return {
    id: 'sub_ielts',
    object: 'subscription',
    customer: 'cus_1',
    status,
    metadata: { userId: SUPABASE_UUID },
    items: {
      data: [
        {
          id: 'si_ielts',
          current_period_start: NOW - DAY,
          current_period_end: NOW + 30 * DAY,
          price: { id: IELTS, recurring: { interval: 'month' }, product: 'prod_1' },
        },
      ],
    },
  } as unknown as Stripe.Subscription
}

async function checkoutIelts() {
  mockConstructEvent.mockReturnValue({
    id: 'evt_checkout',
    object: 'event',
    api_version: '2026-02-25.clover',
    created: NOW,
    type: 'checkout.session.completed',
    data: {
      object: {
        id: 'cs_ielts',
        mode: 'subscription',
        subscription: 'sub_ielts',
        metadata: { userId: SUPABASE_UUID },
      },
    },
    livemode: false,
    pending_webhooks: 0,
    request: null,
  })
  const { POST } = await import('@/app/api/stripe/webhook/route')
  const res = await POST(
    new NextRequest('http://localhost/api/stripe/webhook', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json', 'stripe-signature': 'sig' }),
      body: '{}',
    }),
  )
  expect(res.status).toBe(200)
}

const caller = { id: SUPABASE_UUID, email: 'p@example.com' }
const req = { headers: new Headers() }

beforeEach(() => {
  vi.clearAllMocks()
  profileReadFails = false
  row = {
    id: 'row_1',
    userId: PRISMA_CUID,
    stripeCustomerId: null,
    stripeSubscriptionId: null,
    plan: 'MONTHLY',
    status: 'TRIALING',
    currentPeriodStart: new Date((NOW - 2 * DAY) * 1000),
    currentPeriodEnd: new Date(TRIAL_END * 1000),
    cancelledAt: null,
    platform: 'WEB',
    isTeacherPlan: false,
    paymentCount: 0,
    grandfatheredPriceMinor: null,
  } as unknown as Subscription
  profile = {
    subscription_status: 'pro',
    subscription_end_date: new Date(TRIAL_END * 1000).toISOString(),
    ielts_status: 'free',
  }
  stripeSubs = { sub_ielts: ieltsPlan('active') }
  process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test'
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  vi.spyOn(console, 'info').mockImplementation(() => {})
  vi.spyOn(console, 'log').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('a no-card trialist who pays for IELTS', () => {
  it('is not metered on an IELTS route once the IELTS plan is paid', async () => {
    await checkoutIelts()
    // b24bfd2d9's rule holds: the trial row is left for the cron.
    expect(row?.stripeSubscriptionId).toBeNull()
    expect(profile.ielts_status).toBe('active')

    const { enforceTrialAllowance } = await import('@/lib/usage/trial-allowance')
    const gate = await enforceTrialAllowance(req, caller, { ieltsFunded: true })

    expect(gate.response).toBeNull()
    expect(gate.consumed).toBeNull()
    expect(mockConsume).not.toHaveBeenCalled()
  })

  it('is still metered on a GCSE route: the IELTS plan does not fund the trial', async () => {
    await checkoutIelts()
    const { enforceTrialAllowance } = await import('@/lib/usage/trial-allowance')
    const gate = await enforceTrialAllowance(req, caller, { schoolFunded: true })

    expect(gate.consumed).not.toBeNull()
    expect(mockConsume).toHaveBeenCalled()
  })

  it('is metered on an IELTS route before paying for IELTS (the trial is the trial)', async () => {
    const { enforceTrialAllowance } = await import('@/lib/usage/trial-allowance')
    const gate = await enforceTrialAllowance(req, caller, { ieltsFunded: true })

    expect(gate.consumed).not.toBeNull()
    expect(mockConsume).toHaveBeenCalled()
  })

  it('is metered when the profile cannot be read: a failed read funds nothing', async () => {
    await checkoutIelts()
    profileReadFails = true
    const { enforceTrialAllowance } = await import('@/lib/usage/trial-allowance')
    const gate = await enforceTrialAllowance(req, caller, { ieltsFunded: true })

    expect(gate.consumed).not.toBeNull()
  })
})

describe('the four IELTS routes say a paid IELTS plan funds the call', () => {
  it.each([
    'src/app/api/ielts/writing-feedback/route.ts',
    'src/app/api/ielts/speaking-feedback/route.ts',
    'src/app/api/ielts/statement-feedback/route.ts',
    'src/app/api/marking/ielts-writing-task2/route.ts',
  ])('%s', (file) => {
    const source = readFileSync(join(process.cwd(), file), 'utf8')
    expect(source).toMatch(/enforceTrialAllowance\(request, user, \{ ieltsFunded: true \}\)/)
  })
})
