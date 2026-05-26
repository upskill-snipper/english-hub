/**
 * POST /api/admin/pricing/backfill - auth + happy-path tests.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── Mocks ─────────────────────────────────────────────────────────────

type AdminOutcome = 'Unauthorized' | 'Forbidden' | null
let adminOutcome: AdminOutcome = null

vi.mock('@/lib/admin-auth', () => ({
  verifyAdmin: vi.fn(async () => ({
    user: adminOutcome === null ? { id: 'admin', email: 'admin@x' } : null,
    error: adminOutcome,
  })),
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {},
}))

const backfillResult = { scanned: 3, updated: 2, skipped: 1 }
let backfillShouldThrow = false
vi.mock('@/lib/pricing/backfill-grandfathered', () => ({
  backfillGrandfatheredPrices: vi.fn(async () => {
    if (backfillShouldThrow) throw new Error('boom')
    return backfillResult
  }),
}))

// Import AFTER mocks.
import { POST } from './route'

function makeRequest(): NextRequest {
  return new NextRequest('https://theenglishhub.app/api/admin/pricing/backfill', {
    method: 'POST',
  })
}

describe('POST /api/admin/pricing/backfill', () => {
  beforeEach(() => {
    adminOutcome = null
    backfillShouldThrow = false
  })

  it('returns 401 when the caller is unauthenticated', async () => {
    adminOutcome = 'Unauthorized'
    const res = await POST(makeRequest())
    expect(res.status).toBe(401)
    const body = await res.json()
    expect(body.error).toBe('Unauthorized')
  })

  it('returns 403 when the caller is authenticated but not an admin', async () => {
    adminOutcome = 'Forbidden'
    const res = await POST(makeRequest())
    expect(res.status).toBe(403)
    const body = await res.json()
    expect(body.error).toBe('Forbidden')
  })

  it('returns 200 with counts when the caller is an admin', async () => {
    adminOutcome = null
    const res = await POST(makeRequest())
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body).toEqual({ ok: true, data: backfillResult })
  })

  it('returns 500 when the back-fill throws', async () => {
    adminOutcome = null
    backfillShouldThrow = true
    const res = await POST(makeRequest())
    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body.ok).toBe(false)
  })
})
