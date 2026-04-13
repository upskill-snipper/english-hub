import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

// ---------------------------------------------------------------------------
// Data-retention cron endpoint tests.
//
// Tests the /api/cron/data-retention route handler for:
//   - Auth (CRON_SECRET Bearer token)
//   - Response format (ok, durationMs, summary)
//   - Error handling when cleanup fails
// ---------------------------------------------------------------------------

// ── Mocks ────────────────────────────────────────────────────────────────

const mockCleanupResult = {
  startedAt: '2026-04-12T04:00:00Z',
  completedAt: '2026-04-12T04:00:05Z',
  hardDeletedAccounts: [],
  inactiveWarningsSent: [],
  inactiveSoftDeleted: [],
  childrenPriorityCleanups: 0,
  childDormancy: {
    warningsSent: [],
    deletions: [],
    errors: [],
  },
  usageDataAnonymised: 0,
  supportTicketsArchived: 0,
  expiredMarketingConsents: 0,
  errors: [],
}

const mockCleanup = vi.fn().mockResolvedValue(mockCleanupResult)

vi.mock('@/lib/data-retention', () => ({
  cleanupExpiredData: (...args: unknown[]) => mockCleanup(...args),
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
  prisma: { $transaction: vi.fn() },
}))

vi.mock('@/lib/privacy/dormancy', () => ({
  processChildDormancy: vi.fn().mockResolvedValue({
    warningsSent: [],
    deletions: [],
    errors: [],
  }),
}))

vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn(),
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const REAL_SECRET = 'cron-test-secret-xyz'

function buildRequest(authHeader?: string): NextRequest {
  const url = new URL('http://localhost:3000/api/cron/data-retention')
  const headers = new Headers()
  if (authHeader) headers.set('authorization', authHeader)
  return new NextRequest(url, { method: 'GET', headers })
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('/api/cron/data-retention', () => {
  beforeEach(() => {
    vi.stubEnv('CRON_SECRET', REAL_SECRET)
    mockCleanup.mockResolvedValue(mockCleanupResult)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
    mockCleanup.mockReset().mockResolvedValue(mockCleanupResult)
  })

  // ── Auth ────────────────────────────────────────────────────────────────

  it('returns 401 without Authorization header', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildRequest())
    expect(res.status).toBe(401)
  })

  it('returns 401 with wrong secret', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildRequest('Bearer wrong-secret'))
    expect(res.status).toBe(401)
  })

  it('returns 500 when CRON_SECRET is not configured', async () => {
    vi.stubEnv('CRON_SECRET', '')
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildRequest(`Bearer ${REAL_SECRET}`))
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.error).toMatch(/misconfiguration/i)
  })

  // ── Success response format ────────────────────────────────────────────

  it('returns 200 with correct response shape on success', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildRequest(`Bearer ${REAL_SECRET}`))

    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.ok).toBe(true)
    expect(typeof json.durationMs).toBe('number')
    expect(json.summary).toBeDefined()
    expect(json.summary.startedAt).toBe('2026-04-12T04:00:00Z')
    expect(json.summary.completedAt).toBe('2026-04-12T04:00:05Z')
  })

  it('includes numeric summary counts', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildRequest(`Bearer ${REAL_SECRET}`))
    const json = await res.json()

    expect(json.summary.hardDeletedAccounts).toBe(0)
    expect(json.summary.inactiveWarningsSent).toBe(0)
    expect(json.summary.inactiveSoftDeleted).toBe(0)
    expect(json.summary.childrenPriorityCleanups).toBe(0)
    expect(json.summary.usageDataAnonymised).toBe(0)
    expect(json.summary.supportTicketsArchived).toBe(0)
    expect(json.summary.expiredMarketingConsents).toBe(0)
    expect(json.summary.errorCount).toBe(0)
  })

  it('includes child dormancy sub-object', async () => {
    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildRequest(`Bearer ${REAL_SECRET}`))
    const json = await res.json()

    expect(json.summary.childDormancy).toEqual({
      warningsSent: 0,
      deletions: 0,
      errors: 0,
    })
  })

  // ── Error handling ─────────────────────────────────────────────────────

  it('returns 500 when cleanup throws', async () => {
    mockCleanup.mockRejectedValueOnce(new Error('DB connection failed'))
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const { GET } = await import('@/app/api/cron/data-retention/route')
    const res = await GET(buildRequest(`Bearer ${REAL_SECRET}`))

    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.ok).toBe(false)
    expect(json.error).toMatch(/failed/i)
  })
})
