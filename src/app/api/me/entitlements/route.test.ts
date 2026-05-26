/**
 * Tests for GET /api/me/entitlements.
 *
 * Strategy: mock Supabase auth, Prisma, and the rate-limiter; invoke
 * the exported GET handler directly. Each test seeds the Subscription
 * row(s) the route should see and asserts the projected entitlement
 * envelope.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

// Auth fixture - flipped per test to simulate signed-out callers.
interface SupabaseSessionFixture {
  user: { id: string; email: string | null; created_at?: string } | null
  error: { message: string } | null
}
let supabaseSession: SupabaseSessionFixture = {
  user: { id: '11111111-1111-1111-1111-111111111111', email: 'amara@example.com' },
  error: null,
}

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: {
      getUser: async () => ({
        data: { user: supabaseSession.user },
        error: supabaseSession.error,
      }),
    },
  }),
}))

// Prisma fixture state.
interface SubscriptionFixture {
  id: string
  userId: string
  plan: 'MONTHLY' | 'ANNUAL'
  status: 'ACTIVE' | 'TRIALING' | 'CANCELLED' | 'PAST_DUE' | 'PAUSED'
  currentPeriodStart: Date
  currentPeriodEnd: Date
  cancelledAt: Date | null
  isTeacherPlan: boolean
  platform: 'WEB' | 'IOS' | 'ANDROID'
  originalPurchaseDate: Date | null
}

let userFixture: { id: string } | null = { id: 'prisma-user-1' }
let subscriptionRows: SubscriptionFixture[] = []

const prismaMock = {
  user: {
    findUnique: vi.fn(async () => userFixture),
  },
  subscription: {
    findMany: vi.fn(async ({ where }: { where: { userId: string } }) => {
      return subscriptionRows.filter((r) => r.userId === where.userId)
    }),
  },
}

vi.mock('@/lib/prisma', () => ({ prisma: prismaMock }))

// Rate limit - always pass in tests unless a specific test flips it.
const rateLimitMock = vi.fn(async () => ({
  success: true,
  remaining: 100,
  resetAt: Date.now() + 60_000,
}))
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: rateLimitMock,
  getClientIp: () => '127.0.0.1',
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildRequest(): NextRequest {
  return new NextRequest('http://localhost/api/me/entitlements', { method: 'GET' })
}

async function invokeGet(): Promise<Response> {
  const mod = await import('@/app/api/me/entitlements/route')
  return mod.GET(buildRequest())
}

function daysFromNow(days: number): Date {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000)
}

function daysAgo(days: number): Date {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000)
}

function makeSub(overrides: Partial<SubscriptionFixture> = {}): SubscriptionFixture {
  return {
    id: 'sub-' + Math.random().toString(36).slice(2, 8),
    userId: 'prisma-user-1',
    plan: 'MONTHLY',
    status: 'ACTIVE',
    currentPeriodStart: daysAgo(3),
    currentPeriodEnd: daysFromNow(27),
    cancelledAt: null,
    isTeacherPlan: false,
    platform: 'IOS',
    originalPurchaseDate: daysAgo(90),
    ...overrides,
  }
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('GET /api/me/entitlements', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.clearAllMocks()
    supabaseSession = {
      user: { id: '11111111-1111-1111-1111-111111111111', email: 'amara@example.com' },
      error: null,
    }
    userFixture = { id: 'prisma-user-1' }
    subscriptionRows = []
    rateLimitMock.mockResolvedValue({ success: true, remaining: 100, resetAt: Date.now() + 60_000 })
  })

  // ── Auth ────────────────────────────────────────────────────────────

  it('returns 401 when the caller has no Supabase session', async () => {
    supabaseSession = { user: null, error: null }
    const res = await invokeGet()
    expect(res.status).toBe(401)
    const body = (await res.json()) as { ok: boolean; error: { code: string } }
    expect(body.ok).toBe(false)
    expect(body.error.code).toBe('AUTH_EXPIRED')
  })

  it('returns 401 when Supabase returns an auth error', async () => {
    supabaseSession = { user: null, error: { message: 'jwt expired' } }
    const res = await invokeGet()
    expect(res.status).toBe(401)
  })

  // ── Empty state (no subscription row) ───────────────────────────────

  it('returns an empty entitlement payload when the user has no Subscription row', async () => {
    const res = await invokeGet()
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      ok: boolean
      data: {
        pro: boolean
        teacher_tools: boolean
        platform: string | null
        status: string | null
        subscription: unknown
      }
    }
    expect(body.ok).toBe(true)
    expect(body.data.pro).toBe(false)
    expect(body.data.teacher_tools).toBe(false)
    expect(body.data.platform).toBeNull()
    expect(body.data.status).toBeNull()
    expect(body.data.subscription).toBeNull()
  })

  // ── Active subscription ─────────────────────────────────────────────

  it('returns pro:true and status:active for a live ACTIVE subscription', async () => {
    subscriptionRows = [makeSub({ status: 'ACTIVE', platform: 'WEB' })]
    const res = await invokeGet()
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      ok: boolean
      data: {
        pro: boolean
        teacher_tools: boolean
        platform: string
        status: string
        currentPeriodEnd: string
        trialEndsAt: string | null
        subscription: { plan: string; isTeacherPlan: boolean }
      }
    }
    expect(body.data.pro).toBe(true)
    expect(body.data.teacher_tools).toBe(false)
    expect(body.data.platform).toBe('web')
    expect(body.data.status).toBe('active')
    expect(body.data.trialEndsAt).toBeNull()
    expect(body.data.subscription).toEqual({ plan: 'MONTHLY', isTeacherPlan: false })
    expect(body.data.currentPeriodEnd).toMatch(/^\d{4}-\d{2}-\d{2}T/)
  })

  // ── Expired ─────────────────────────────────────────────────────────

  it('returns pro:false and status:expired for a cancelled row past period end', async () => {
    subscriptionRows = [
      makeSub({
        status: 'CANCELLED',
        currentPeriodStart: daysAgo(60),
        currentPeriodEnd: daysAgo(30),
        cancelledAt: daysAgo(45),
      }),
    ]
    const res = await invokeGet()
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      data: { pro: boolean; teacher_tools: boolean; status: string }
    }
    expect(body.data.pro).toBe(false)
    expect(body.data.teacher_tools).toBe(false)
    expect(body.data.status).toBe('expired')
  })

  it('returns pro:false and status:expired for an ACTIVE row whose period has elapsed', async () => {
    // Pathological DB state - status ACTIVE but period ended. The
    // projection must not grant pro.
    subscriptionRows = [
      makeSub({
        status: 'ACTIVE',
        currentPeriodStart: daysAgo(60),
        currentPeriodEnd: daysAgo(1),
      }),
    ]
    const res = await invokeGet()
    const body = (await res.json()) as { data: { pro: boolean; status: string } }
    expect(body.data.pro).toBe(false)
    expect(body.data.status).toBe('expired')
  })

  // ── Trialing ────────────────────────────────────────────────────────

  it('returns pro:true, status:trialing, trialEndsAt set for an in-trial row', async () => {
    const trialEnd = daysFromNow(4)
    subscriptionRows = [
      makeSub({
        status: 'TRIALING',
        currentPeriodStart: daysAgo(3),
        currentPeriodEnd: trialEnd,
      }),
    ]
    const res = await invokeGet()
    const body = (await res.json()) as {
      data: { pro: boolean; status: string; trialEndsAt: string | null }
    }
    expect(body.data.pro).toBe(true)
    expect(body.data.status).toBe('trialing')
    expect(body.data.trialEndsAt).toBe(trialEnd.toISOString())
  })

  // ── Teacher plan ────────────────────────────────────────────────────

  it('returns teacher_tools:true when the Subscription is a teacher plan', async () => {
    subscriptionRows = [makeSub({ isTeacherPlan: true, platform: 'IOS' })]
    const res = await invokeGet()
    const body = (await res.json()) as {
      data: {
        pro: boolean
        teacher_tools: boolean
        subscription: { isTeacherPlan: boolean }
      }
    }
    expect(body.data.pro).toBe(true)
    expect(body.data.teacher_tools).toBe(true)
    expect(body.data.subscription.isTeacherPlan).toBe(true)
  })

  it('does not grant teacher_tools when pro is false (expired teacher plan)', async () => {
    subscriptionRows = [
      makeSub({
        isTeacherPlan: true,
        status: 'CANCELLED',
        currentPeriodEnd: daysAgo(5),
        cancelledAt: daysAgo(10),
      }),
    ]
    const res = await invokeGet()
    const body = (await res.json()) as {
      data: { pro: boolean; teacher_tools: boolean }
    }
    expect(body.data.pro).toBe(false)
    expect(body.data.teacher_tools).toBe(false)
  })

  // ── Multiple active subscriptions ───────────────────────────────────

  it('picks the row with the latest currentPeriodEnd when there are multiple active rows', async () => {
    // Web Stripe row (earlier end) + iOS IAP row (later end). The
    // iOS row should win, and we surface a warning so the client can
    // show a banner.
    const webEnd = daysFromNow(10)
    const iosEnd = daysFromNow(45)
    subscriptionRows = [
      makeSub({
        id: 'sub-web',
        userId: 'prisma-user-1',
        status: 'ACTIVE',
        platform: 'WEB',
        currentPeriodStart: daysAgo(20),
        currentPeriodEnd: webEnd,
      }),
      makeSub({
        id: 'sub-ios',
        userId: 'prisma-user-1',
        status: 'ACTIVE',
        platform: 'IOS',
        currentPeriodStart: daysAgo(3),
        currentPeriodEnd: iosEnd,
      }),
    ]
    const res = await invokeGet()
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      data: {
        pro: boolean
        platform: string
        currentPeriodEnd: string
        warning?: string
      }
    }
    expect(body.data.pro).toBe(true)
    expect(body.data.platform).toBe('ios')
    expect(body.data.currentPeriodEnd).toBe(iosEnd.toISOString())
    expect(body.data.warning).toContain('multiple_active_subscriptions')
  })

  // ── Cache-Control ───────────────────────────────────────────────────

  it('emits Cache-Control: private, no-store', async () => {
    subscriptionRows = [makeSub()]
    const res = await invokeGet()
    expect(res.headers.get('Cache-Control')).toBe('private, no-store')
  })
})
