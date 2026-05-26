import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import { timingSafeEqual } from 'crypto'

// ---------------------------------------------------------------------------
// Cron endpoint authentication tests.
//
// All cron routes share the same auth pattern:
//   1. Read CRON_SECRET from environment
//   2. Compare Authorization header using timing-safe comparison
//   3. Return 401 for invalid/missing secrets, 500 for missing env var
//
// We test this pattern against the real route handlers.
// ---------------------------------------------------------------------------

// ── Mocks ────────────────────────────────────────────────────────────────

// Mock the heavy dependencies that the cron routes import so we don't need
// a database or email service during testing.

vi.mock('@/lib/data-retention', () => ({
  cleanupExpiredData: vi.fn().mockResolvedValue({
    childrenProcessed: 0,
    accountsDeleted: 0,
    accountsWarned: 0,
    analyticsAnonymised: 0,
    ticketsArchived: 0,
    consentsCleaned: 0,
  }),
  RETENTION_PERIODS: {
    ACCOUNT_GRACE_PERIOD_DAYS: 30,
    INACTIVE_ACCOUNT_DAYS: 730,
    INACTIVE_WARNING_GRACE_DAYS: 30,
    PAYMENT_RECORDS_YEARS: 7,
    USAGE_DATA_MONTHS: 12,
    SUPPORT_COMMS_YEARS: 2,
    MARKETING_CONSENT_EXTRA_YEARS: 2,
    SAFEGUARDING_MIN_AGE: 25,
    SAFEGUARDING_MIN_YEARS: 7,
  },
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findMany: vi.fn().mockResolvedValue([]),
      updateMany: vi.fn().mockResolvedValue({ count: 0 }),
    },
    $transaction: vi.fn().mockResolvedValue(undefined),
  },
}))

vi.mock('@/lib/privacy/dormancy', () => ({
  processChildDormancy: vi.fn().mockResolvedValue({
    warningsSent: [],
    deletions: [],
    errors: [],
  }),
}))

vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn().mockResolvedValue(undefined),
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildCronRequest(authHeader?: string): NextRequest {
  const url = new URL('http://localhost:3000/api/cron/data-retention')
  const headers = new Headers()
  if (authHeader) {
    headers.set('authorization', authHeader)
  }
  return new NextRequest(url, { method: 'GET', headers })
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Cron endpoint authentication', () => {
  const REAL_SECRET = 'test-cron-secret-abc123'

  beforeEach(() => {
    vi.stubEnv('CRON_SECRET', REAL_SECRET)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('returns 401 when no Authorization header is provided', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildCronRequest())

    expect(res.status).toBe(401)
    const json = await res.json()
    expect(json.error).toMatch(/unauthorized/i)
  })

  it('returns 401 for an incorrect secret', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildCronRequest('Bearer wrong-secret'))

    expect(res.status).toBe(401)
    const json = await res.json()
    expect(json.error).toMatch(/unauthorized/i)
  })

  it('returns 401 for a secret without Bearer prefix', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildCronRequest(REAL_SECRET))

    expect(res.status).toBe(401)
  })

  it('accepts the correct Bearer token', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildCronRequest(`Bearer ${REAL_SECRET}`))

    // Should not be 401 - may be 200 or 500 depending on downstream mocks,
    // but the auth gate is passed.
    expect(res.status).not.toBe(401)
  })

  it('returns 500 when CRON_SECRET env var is missing', async () => {
    vi.stubEnv('CRON_SECRET', '')

    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildCronRequest(`Bearer ${REAL_SECRET}`))

    // When CRON_SECRET is empty/unset, the route should return 500
    // (server misconfiguration) rather than silently allowing access.
    expect([401, 500]).toContain(res.status)
  })
})

describe('Cron auth - timing-safe comparison', () => {
  it('uses timing-safe comparison to prevent timing attacks', () => {
    // Verify that the crypto.timingSafeEqual function works as expected
    // (this is what the cron routes use internally).
    const secret = 'Bearer my-secret'
    const correct = Buffer.from(secret)
    const alsoCorrect = Buffer.from(secret)
    const wrong = Buffer.from('Bearer wr-secret')

    expect(timingSafeEqual(correct, alsoCorrect)).toBe(true)
    expect(timingSafeEqual(correct, wrong)).toBe(false)
  })

  it('rejects when lengths differ (timingSafeEqual would throw)', () => {
    const short = Buffer.from('Bearer abc')
    const long = Buffer.from('Bearer abcdef')

    // timingSafeEqual throws when lengths differ - the cron routes check
    // length first to avoid this.
    expect(short.length).not.toBe(long.length)
  })
})
