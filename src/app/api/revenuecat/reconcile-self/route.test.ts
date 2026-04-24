/**
 * Tests for POST /api/revenuecat/reconcile-self — the cross-platform
 * entitlement reconcile endpoint (W4-AUD-API-001 follow-up).
 *
 * Coverage:
 *   1. 401 when unauthenticated.
 *   2. 500 when the RevenueCat secret is not configured.
 *   3. 429 when the Upstash limiter trips.
 *   4. 200 + up-to-date `Subscription` row on a live RC entitlement.
 *   5. 200 no-op when RC has no entitlement and no subscription row exists
 *      (already-in-sync path).
 *   6. 200 no-op when RC returns 404 for an unknown subscriber.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── In-memory mocks ────────────────────────────────────────────────────

type SessionUser = { id: string; email: string | null } | null
let sessionUser: SessionUser = {
  id: '11111111-1111-1111-1111-111111111111',
  email: 'amara@example.com',
}

const supabaseMock = {
  auth: {
    getUser: vi.fn(async () => ({ data: { user: sessionUser }, error: null })),
  },
}

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => supabaseMock,
  createServiceRoleClient: () => supabaseMock,
}))

let userRow: { id: string } | null = { id: 'prisma-user-1' }
let existingSubscription: Record<string, unknown> | null = null
let lastUpsert: unknown = null
let lastUpdate: unknown = null

const prismaMock = {
  user: {
    findUnique: vi.fn(async ({ where }: { where: Record<string, unknown> }) => {
      // First lookup is by supabaseUserId; second (reconcile.ts fallback) by id.
      // Both resolve to the same fixture when `userRow` is set.
      void where
      return userRow
    }),
  },
  subscription: {
    findUnique: vi.fn(async () => existingSubscription),
    upsert: vi.fn(async (args: { where: { userId: string }; create: Record<string, unknown>; update: Record<string, unknown> }) => {
      lastUpsert = args
      const row = {
        id: 'sub-1',
        userId: args.where.userId,
        ...(existingSubscription ?? {}),
        ...args.create,
        ...args.update,
      }
      existingSubscription = row
      return row
    }),
    update: vi.fn(async (args: { where: { userId: string }; data: Record<string, unknown> }) => {
      lastUpdate = args
      const row = {
        ...(existingSubscription ?? { id: 'sub-1', userId: args.where.userId }),
        ...args.data,
      }
      existingSubscription = row
      return row
    }),
    create: vi.fn(async (args: { data: Record<string, unknown> }) => {
      const row = { id: 'sub-1', ...args.data }
      existingSubscription = row
      return row
    }),
  },
}

vi.mock('@/lib/prisma', () => ({ prisma: prismaMock }))

// Rate-limit mock — tests flip `rateLimitResult` to drive the 429 branch.
let rateLimitResult = { success: true, remaining: 5, resetAt: Date.now() + 60_000 }
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(async () => rateLimitResult),
  getClientIp: vi.fn(() => '127.0.0.1'),
}))

// Sentry is a no-op.
vi.mock('@sentry/nextjs', () => ({
  addBreadcrumb: vi.fn(),
  captureException: vi.fn(),
}))

// Global fetch mock — each test pushes a response queue.
const fetchQueue: Array<{ status: number; body: unknown }> = []
const originalFetch = globalThis.fetch
beforeEach(() => {
  fetchQueue.length = 0
  globalThis.fetch = vi.fn(async () => {
    const next = fetchQueue.shift()
    if (!next) throw new Error('no queued fetch response')
    return new Response(JSON.stringify(next.body), {
      status: next.status,
      headers: { 'content-type': 'application/json' },
    })
  }) as unknown as typeof fetch
})

function restoreFetch(): void {
  globalThis.fetch = originalFetch
}

// ─── Helpers ────────────────────────────────────────────────────────────

function buildRequest(): NextRequest {
  return new NextRequest('http://localhost/api/revenuecat/reconcile-self', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({}),
  })
}

const ACTIVE_RC_PAYLOAD = {
  subscriber: {
    original_app_user_id: '11111111-1111-1111-1111-111111111111',
    entitlements: {
      pro: {
        expires_date: '2099-01-01T00:00:00Z',
        product_identifier: 'com.upskillenergy.theenglishhub.student.monthly',
        purchase_date: '2026-04-01T00:00:00Z',
      },
    },
    subscriptions: {
      'com.upskillenergy.theenglishhub.student.monthly': {
        expires_date: '2099-01-01T00:00:00Z',
        original_purchase_date: '2026-04-01T00:00:00Z',
        purchase_date: '2026-04-01T00:00:00Z',
        period_type: 'normal',
        store: 'APP_STORE',
        is_sandbox: false,
      },
    },
  },
}

// ─── Tests ──────────────────────────────────────────────────────────────

describe('POST /api/revenuecat/reconcile-self', () => {
  let POST: (req: NextRequest) => Promise<Response>

  beforeEach(async () => {
    vi.resetModules()
    vi.clearAllMocks()
    sessionUser = { id: '11111111-1111-1111-1111-111111111111', email: 'amara@example.com' }
    userRow = { id: 'prisma-user-1' }
    existingSubscription = null
    lastUpsert = null
    lastUpdate = null
    rateLimitResult = { success: true, remaining: 5, resetAt: Date.now() + 60_000 }
    process.env.REVENUECAT_SECRET_API_KEY = 'rc_sk_test'

    const mod = await import('@/app/api/revenuecat/reconcile-self/route')
    POST = mod.POST as unknown as (req: NextRequest) => Promise<Response>
  })

  // ── Authentication ────────────────────────────────────────────────────

  it('returns 401 when the caller is not authenticated', async () => {
    sessionUser = null
    const res = await POST(buildRequest())
    expect(res.status).toBe(401)
    const body = (await res.json()) as { ok: boolean; error: { code: string } }
    expect(body.ok).toBe(false)
    expect(body.error.code).toBe('AUTH_EXPIRED')
    // No RC call should have been made.
    expect(fetchQueue.length).toBe(0)
  })

  it('returns 500 when REVENUECAT_SECRET_API_KEY is missing', async () => {
    delete process.env.REVENUECAT_SECRET_API_KEY
    const res = await POST(buildRequest())
    expect(res.status).toBe(500)
    const body = (await res.json()) as { ok: boolean; error: { code: string } }
    expect(body.error.code).toBe('not_configured')
  })

  // ── Rate limit ────────────────────────────────────────────────────────

  it('returns 429 when the rate limiter trips', async () => {
    rateLimitResult = { success: false, remaining: 0, resetAt: Date.now() + 15_000 }
    const res = await POST(buildRequest())
    expect(res.status).toBe(429)
    expect(res.headers.get('Retry-After')).not.toBeNull()
    const body = (await res.json()) as { ok: boolean; error: { code: string } }
    expect(body.error.code).toBe('RATE_LIMITED')
  })

  // ── Happy path: active entitlement reconciles into a Subscription row ──

  it('200 upserts a Subscription row from an active RC entitlement', async () => {
    fetchQueue.push({ status: 200, body: ACTIVE_RC_PAYLOAD })
    const res = await POST(buildRequest())
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      ok: boolean
      data: {
        subscription: { status: string; platform: string; revenuecatAppUserId: string } | null
        skipped: boolean
      }
    }
    expect(body.ok).toBe(true)
    expect(body.data.skipped).toBe(false)
    expect(prismaMock.subscription.upsert).toHaveBeenCalledTimes(1)
    const upsertArgs = lastUpsert as { create: Record<string, unknown> }
    expect(upsertArgs.create.userId).toBe('prisma-user-1')
    expect(upsertArgs.create.status).toBe('ACTIVE')
    expect(upsertArgs.create.platform).toBe('IOS')
    expect(upsertArgs.create.revenuecatAppUserId).toBe(
      '11111111-1111-1111-1111-111111111111',
    )
    restoreFetch()
  })

  // ── No-op: RC returns 200 but subscriber has no entitlement and no history ──

  it('200 no-op when RC has neither active entitlement nor history', async () => {
    fetchQueue.push({
      status: 200,
      body: {
        subscriber: {
          original_app_user_id: '11111111-1111-1111-1111-111111111111',
          entitlements: {},
          subscriptions: {},
        },
      },
    })
    const res = await POST(buildRequest())
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      ok: boolean
      data: { subscription: unknown; skipped: boolean; reason: string }
    }
    expect(body.ok).toBe(true)
    expect(body.data.skipped).toBe(true)
    expect(body.data.reason).toBe('no_entitlement')
    expect(prismaMock.subscription.upsert).not.toHaveBeenCalled()
    expect(prismaMock.subscription.update).not.toHaveBeenCalled()
    restoreFetch()
  })

  // ── No-op: RC 404 for an unknown subscriber ──────────────────────────

  it('200 no-op when RC returns 404 for an unknown subscriber', async () => {
    fetchQueue.push({ status: 404, body: { code: 'not_found' } })
    const res = await POST(buildRequest())
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      ok: boolean
      data: { skipped: boolean; reason: string }
    }
    expect(body.data.skipped).toBe(true)
    expect(body.data.reason).toBe('no_rc_subscriber')
    expect(prismaMock.subscription.upsert).not.toHaveBeenCalled()
    restoreFetch()
  })

  // ── Method not allowed ───────────────────────────────────────────────

  it('GET returns 405', async () => {
    const mod = await import('@/app/api/revenuecat/reconcile-self/route')
    const res = await (mod.GET as unknown as () => Promise<Response>)()
    expect(res.status).toBe(405)
    expect(res.headers.get('allow')).toBe('POST')
  })
})
