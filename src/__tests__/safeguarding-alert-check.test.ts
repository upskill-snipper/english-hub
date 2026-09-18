import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * A safeguarding alert that fails to reach a human must not fail silently.
 *
 * THE DEFECT (19 September 2026). When a child reports a safeguarding concern,
 * /api/safeguarding/report emails the designated lead. If every recipient
 * fails it writes an audit row, with a comment saying the record exists "so
 * the failure surfaces in the audit log / compliance check rather than
 * vanishing".
 *
 * Nothing read it. A repo-wide search for SAFEGUARDING_ALERT_DELIVERY_FAILED
 * returned exactly one hit: the line that writes it. prisma.auditLog is read
 * in two places, neither of which aggregates - a DSAR export of one user's own
 * rows, and a retention timestamp.
 *
 * So it did vanish. A child's disclosure could fail to reach anybody and the
 * only trace would be a row nobody queries. Until 18 September that was not
 * hypothetical: sendEmail() pointed at an unconfigured SMTP host, so EVERY
 * safeguarding alert failed.
 */

const mockFindMany = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: { auditLog: { findMany: (...a: unknown[]) => mockFindMany(...a) } },
}))

const mockSendEmail = vi.fn()
vi.mock('@/lib/email', () => ({ sendEmail: (...a: unknown[]) => mockSendEmail(...a) }))

vi.mock('@sentry/nextjs', () => ({
  captureException: vi.fn(),
  addBreadcrumb: vi.fn(),
  captureMessage: vi.fn(),
}))

import { GET } from '@/app/api/cron/safeguarding-alert-check/route'

const SECRET = 'cron_secret_for_tests'

function req(auth = `Bearer ${SECRET}`): NextRequest {
  return new NextRequest('http://localhost/api/cron/safeguarding-alert-check', {
    method: 'GET',
    headers: new Headers(auth ? { authorization: auth } : {}),
  })
}

function failureRow(over: Record<string, unknown> = {}) {
  return {
    id: 'log_1',
    resourceId: 'report_1',
    timestamp: new Date('2026-09-19T02:00:00.000Z'),
    details: { referenceNumber: 'SG-ABC123', severity: 'high', lastError: 'no transport' },
    ...over,
  }
}

beforeEach(() => {
  vi.clearAllMocks()
  process.env.CRON_SECRET = SECRET
  delete process.env.SAFEGUARDING_ESCALATION_EMAIL
  mockFindMany.mockResolvedValue([])
  mockSendEmail.mockResolvedValue({ success: true })
})

// ─── Nothing wrong ──────────────────────────────────────────────────────

describe('when every alert reached the lead', () => {
  it('reports success', async () => {
    const res = await GET(req())
    expect(res.status).toBe(200)
    expect((await res.json()).failures).toBe(0)
  })

  it('sends no email', async () => {
    process.env.SAFEGUARDING_ESCALATION_EMAIL = 'dsl@example.com'
    await GET(req())
    expect(mockSendEmail).not.toHaveBeenCalled()
  })
})

// ─── The defect ─────────────────────────────────────────────────────────

describe('when an alert did not reach the lead', () => {
  beforeEach(() => mockFindMany.mockResolvedValue([failureRow()]))

  it('fails the cron run rather than returning a cheerful 200', async () => {
    // A green tick in the Vercel dashboard with undelivered safeguarding
    // alerts inside its JSON is the exact shape of failure this route exists
    // to remove. runCron turns a throw into a 500 and a Sentry exception.
    const res = await GET(req())
    expect(res.status).toBe(500)
  })

  it('names the references, so the alert is actionable without the database', async () => {
    const res = await GET(req())
    const body = await res.json()
    expect(body.error).toContain('SG-ABC123')
  })

  it('says how many', async () => {
    mockFindMany.mockResolvedValue([failureRow(), failureRow({ id: 'log_2' })])
    const body = await (await GET(req())).json()
    expect(body.error).toContain('2 safeguarding alert')
  })
})

// ─── What it must never leak ────────────────────────────────────────────

describe('what the alert contains', () => {
  it('never carries anything the child wrote', async () => {
    // The audit row's details column is written by the report route and holds
    // a reference, a severity and an error string. If a disclosure ever ends
    // up in there, this route must not become a second copy of it in an
    // email subject line and a Sentry event.
    mockFindMany.mockResolvedValue([
      failureRow({
        details: {
          referenceNumber: 'SG-ABC123',
          severity: 'high',
          disclosure: 'something a child wrote',
        },
      }),
    ])
    const body = await (await GET(req())).json()
    expect(body.error).not.toContain('something a child wrote')
  })

  it('selects only the four columns it needs', async () => {
    await GET(req())
    const args = mockFindMany.mock.calls[0][0] as { select: Record<string, boolean> }
    expect(Object.keys(args.select).sort()).toEqual(['details', 'id', 'resourceId', 'timestamp'])
  })
})

// ─── The optional escalation ────────────────────────────────────────────

describe('the escalation email', () => {
  beforeEach(() => mockFindMany.mockResolvedValue([failureRow()]))

  it('is sent when an address is configured', async () => {
    process.env.SAFEGUARDING_ESCALATION_EMAIL = 'dsl@example.com'
    await GET(req())
    expect(mockSendEmail).toHaveBeenCalled()
    expect(mockSendEmail.mock.calls[0][0]).toBe('dsl@example.com')
  })

  it('still fails the run when no address is configured', async () => {
    // The check must not be inert until somebody sets a variable - that is
    // the same class of defect being fixed.
    const res = await GET(req())
    expect(res.status).toBe(500)
    expect(mockSendEmail).not.toHaveBeenCalled()
  })

  it('reports its own failure rather than swallowing it', async () => {
    process.env.SAFEGUARDING_ESCALATION_EMAIL = 'dsl@example.com'
    mockSendEmail.mockResolvedValue({ success: false, error: 'no transport' })
    const body = await (await GET(req())).json()
    expect(body.error).toContain('FAILED')
  })
})

// ─── The window ─────────────────────────────────────────────────────────

describe('the lookback window', () => {
  it('is longer than the daily cadence, so a missed run cannot hide a failure', async () => {
    await GET(req())
    const args = mockFindMany.mock.calls[0][0] as { where: { timestamp: { gte: Date } } }
    const hours = (Date.now() - args.where.timestamp.gte.getTime()) / 36e5
    expect(hours).toBeGreaterThan(24)
  })

  it('queries the right action', async () => {
    await GET(req())
    const args = mockFindMany.mock.calls[0][0] as { where: { action: string } }
    expect(args.where.action).toBe('SAFEGUARDING_ALERT_DELIVERY_FAILED')
  })
})

// ─── Auth ───────────────────────────────────────────────────────────────

describe('access', () => {
  it('401s without the cron secret', async () => {
    expect((await GET(req(''))).status).toBe(401)
  })

  it('401s with the wrong secret', async () => {
    expect((await GET(req('Bearer wrong'))).status).toBe(401)
  })

  it('500s when no secret is configured, rather than running open', async () => {
    delete process.env.CRON_SECRET
    expect((await GET(req())).status).toBe(500)
  })
})

// ─── It is actually scheduled ───────────────────────────────────────────

describe('the schedule', () => {
  it('is registered in vercel.json, or it never runs', () => {
    const vercel = JSON.parse(readFileSync(join(process.cwd(), 'vercel.json'), 'utf8')) as {
      crons: { path: string; schedule: string }[]
    }
    const entry = vercel.crons.find((c) => c.path === '/api/cron/safeguarding-alert-check')
    expect(entry, 'the route exists but nothing calls it').toBeDefined()
    expect(entry!.schedule).toMatch(/\* \* \*$/)
  })

  it('writes the signal it reads, so the pair cannot drift apart', () => {
    const reportRoute = readFileSync(
      join(process.cwd(), 'src/app/api/safeguarding/report/route.ts'),
      'utf8',
    )
    expect(reportRoute).toContain("action: 'SAFEGUARDING_ALERT_DELIVERY_FAILED'")
  })
})
