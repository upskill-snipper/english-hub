/**
 * Tests for the trial-ending cron route.
 *
 * Strategy: mock Prisma, sendEmail and runCron, then drive GET/POST
 * directly. The assertions lock down the three things that were actually
 * broken or risky in this area of the codebase:
 *
 *   1. Vercel Cron sends GET with `Authorization: Bearer <CRON_SECRET>`.
 *      Two crons here previously shipped POST-only and returned 405 to
 *      every scheduled invocation, forever.
 *   2. Idempotency. A re-run must never re-send, and a failed send must
 *      stay retryable rather than being silently swallowed.
 *   3. The audience discriminator. A paying or mobile subscriber must be
 *      structurally excluded from the query, not merely unlikely to match.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── Fixtures ────────────────────────────────────────────────────────────

const SECRET = 'test-secret-abcdef'
const NOW = Date.now()
const DAY = 24 * 60 * 60 * 1000

type ReminderRow = { sentAt: Date; nextPaymentDate: Date }

type SubRow = {
  id: string
  currentPeriodEnd: Date
  user: {
    id: string
    email: string | null
    firstName: string
    dateOfBirth: Date
  }
  renewalReminders: ReminderRow[]
}

const state: {
  trialing: SubRow[]
  cancelled: SubRow[]
  whereClauses: Array<Record<string, unknown>>
  created: Array<{ id: string; subscriptionId: string; nextPaymentDate: Date }>
  deleted: string[]
  order: string[]
  sendSucceeds: boolean
  createThrows: boolean
} = {
  trialing: [],
  cancelled: [],
  whereClauses: [],
  created: [],
  deleted: [],
  order: [],
  sendSucceeds: true,
  createThrows: false,
}

// ─── Mocks ───────────────────────────────────────────────────────────────

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      findMany: vi.fn(async ({ where }: { where: Record<string, unknown> }) => {
        state.whereClauses.push(where)
        // The route runs the warning query (TRIALING) then the follow-up
        // query (CANCELLED).
        return where.status === 'TRIALING' ? state.trialing : state.cancelled
      }),
    },
    renewalReminder: {
      create: vi.fn(
        async ({ data }: { data: { subscriptionId: string; nextPaymentDate: Date } }) => {
          if (state.createThrows) throw new Error('ledger write failed')
          state.order.push('claim')
          const id = `rr_${state.created.length + 1}`
          state.created.push({
            id,
            subscriptionId: data.subscriptionId,
            nextPaymentDate: data.nextPaymentDate,
          })
          return { id }
        },
      ),
      delete: vi.fn(async ({ where }: { where: { id: string } }) => {
        state.order.push('release')
        state.deleted.push(where.id)
        return { id: where.id }
      }),
    },
  },
}))

const sendEmailMock = vi.fn(async () => {
  state.order.push('send')
  return state.sendSucceeds
    ? { success: true as const, messageId: 'm_1' }
    : { success: false as const, error: 'smtp down' }
})
vi.mock('@/lib/email', () => ({
  sendEmail: (...args: unknown[]) => sendEmailMock(...(args as [])),
}))

vi.mock('@/lib/cron/observability', () => ({
  runCron: async <T>(_name: string, body: () => Promise<T>) => {
    const result = await body()
    return Response.json({ ok: true, ...result })
  },
}))

beforeEach(() => {
  process.env.CRON_SECRET = SECRET
  process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED = 'true'
  state.trialing = []
  state.cancelled = []
  state.whereClauses = []
  state.created = []
  state.deleted = []
  state.order = []
  state.sendSucceeds = true
  state.createThrows = false
  sendEmailMock.mockClear()
})

const { GET, POST } = await import('./route')

// ─── Helpers ─────────────────────────────────────────────────────────────

function req(method: 'GET' | 'POST', authorization?: string): NextRequest {
  return new NextRequest('http://localhost/api/cron/trial-ending', {
    method,
    headers: authorization ? { authorization } : {},
  })
}

function makeSub(overrides: Partial<SubRow> = {}): SubRow {
  return {
    id: 'sub_1',
    currentPeriodEnd: new Date(NOW + DAY),
    user: {
      id: 'u_1',
      email: 'learner@example.com',
      firstName: 'Amira',
      dateOfBirth: new Date('2009-01-01T00:00:00.000Z'),
    },
    renewalReminders: [],
    ...overrides,
  }
}

// ─── Auth ────────────────────────────────────────────────────────────────

describe('trial-ending cron auth', () => {
  it('rejects a request with no Authorization header', async () => {
    const res = await GET(req('GET'))
    expect(res.status).toBe(401)
  })

  it('rejects a wrong secret', async () => {
    const res = await GET(req('GET', 'Bearer nope'))
    expect(res.status).toBe(401)
  })

  it('returns 500 when CRON_SECRET is not configured', async () => {
    delete process.env.CRON_SECRET
    const res = await GET(req('GET', `Bearer ${SECRET}`))
    expect(res.status).toBe(500)
  })

  it('accepts the GET + Bearer shape Vercel Cron actually sends', async () => {
    const res = await GET(req('GET', `Bearer ${SECRET}`))
    expect(res.status).toBe(200)
  })

  it('accepts POST for manual invocation with the same Bearer shape', async () => {
    const res = await POST(req('POST', `Bearer ${SECRET}`))
    expect(res.status).toBe(200)
  })
})

// ─── Feature flag ────────────────────────────────────────────────────────

describe('trial-ending feature flag', () => {
  it('sends nothing while TRIAL_LIFECYCLE_EMAILS_ENABLED is unset', async () => {
    delete process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED
    state.trialing = [makeSub()]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.skipped).toContain('disabled')
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(state.created).toHaveLength(0)
  })
})

// ─── Warning send ────────────────────────────────────────────────────────

describe('trial-ending warning', () => {
  it('sends one reminder and records it in the ledger', async () => {
    state.trialing = [makeSub()]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(body.warned).toBe(1)
    expect(sendEmailMock).toHaveBeenCalledTimes(1)
    expect(state.created).toHaveLength(1)
  })

  it('claims the ledger row BEFORE sending, so a re-run cannot double-send', async () => {
    // Ordering is the whole idempotency guarantee: recording after the send
    // leaves a window where a successful send with a failed ledger write is
    // re-sent on the next run.
    state.trialing = [makeSub()]

    await GET(req('GET', `Bearer ${SECRET}`))

    expect(state.order).toEqual(['claim', 'send'])
  })

  it('does not re-send when a warning row already exists', async () => {
    const end = new Date(NOW + DAY)
    state.trialing = [
      makeSub({
        currentPeriodEnd: end,
        // Warning rows are written before the trial boundary.
        renewalReminders: [{ sentAt: new Date(NOW - DAY), nextPaymentDate: end }],
      }),
    ]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(body.warned).toBe(0)
    expect(body.skipped.alreadySent).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('releases the ledger claim when the send fails, keeping it retryable', async () => {
    state.sendSucceeds = false
    state.trialing = [makeSub()]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(body.warned).toBe(0)
    expect(body.skipped.sendFailed).toBe(1)
    expect(state.deleted).toEqual(['rr_1'])
    expect(state.order).toEqual(['claim', 'send', 'release'])
  })

  it('does not send when the ledger claim itself fails', async () => {
    state.createThrows = true
    state.trialing = [makeSub()]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.warned).toBe(0)
  })

  it('skips an account with no email address', async () => {
    state.trialing = [makeSub({ user: { ...makeSub().user, email: null } })]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(body.skipped.noEmail).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('never emails an under-13 account holder', async () => {
    const tooYoung = new Date(NOW - 11 * 365 * DAY)
    state.trialing = [makeSub({ user: { ...makeSub().user, dateOfBirth: tooYoung } })]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(body.skipped.underAge).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })
})

// ─── Follow-up send ──────────────────────────────────────────────────────

describe('trial-ending follow-up', () => {
  it('sends a follow-up for a recently expired trial', async () => {
    state.cancelled = [makeSub({ id: 'sub_2', currentPeriodEnd: new Date(NOW - DAY) })]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(body.followedUp).toBe(1)
    expect(sendEmailMock).toHaveBeenCalledTimes(1)
  })

  it('does not re-send when a follow-up row already exists', async () => {
    const end = new Date(NOW - 2 * DAY)
    state.cancelled = [
      makeSub({
        id: 'sub_2',
        currentPeriodEnd: end,
        // Follow-up rows are written after the trial boundary.
        renewalReminders: [{ sentAt: new Date(NOW - DAY), nextPaymentDate: end }],
      }),
    ]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(body.followedUp).toBe(0)
    expect(body.skipped.alreadySent).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('still follows up when only a warning row exists', async () => {
    const end = new Date(NOW - 2 * DAY)
    state.cancelled = [
      makeSub({
        id: 'sub_2',
        currentPeriodEnd: end,
        renewalReminders: [{ sentAt: new Date(NOW - 4 * DAY), nextPaymentDate: end }],
      }),
    ]

    const res = await GET(req('GET', `Bearer ${SECRET}`))
    const body = await res.json()

    expect(body.followedUp).toBe(1)
  })
})

// ─── Audience discriminator ──────────────────────────────────────────────

describe('trial-ending audience safety', () => {
  it('structurally excludes paying, Stripe and mobile subscribers', async () => {
    await GET(req('GET', `Bearer ${SECRET}`))

    expect(state.whereClauses).toHaveLength(2)
    for (const where of state.whereClauses) {
      // Never a Stripe-managed subscription.
      expect(where.stripeSubscriptionId).toBeNull()
      // Never a RevenueCat mobile row (these also carry a null Stripe id).
      expect(where.platform).toBe('WEB')
      expect(where.revenuecatAppUserId).toBeNull()
      // Never anyone who has ever been charged.
      expect(where.paymentCount).toBe(0)
    }
  })

  it('gates the winback on marketing consent but not the service notice', async () => {
    await GET(req('GET', `Bearer ${SECRET}`))

    const [warnWhere, followUpWhere] = state.whereClauses
    const warnUser = warnWhere.user as Record<string, unknown>
    const followUpUser = followUpWhere.user as Record<string, unknown>

    // The warning is a service message about the recipient's own account.
    expect(warnUser.privacySettings).toBeUndefined()
    // The winback is marketing, so it requires an explicit opt-in.
    expect(followUpUser.privacySettings).toEqual({ marketingEnabled: true })
  })

  it('only looks at trials that have not yet ended when warning', async () => {
    await GET(req('GET', `Bearer ${SECRET}`))

    const warnWhere = state.whereClauses[0]
    const window = warnWhere.currentPeriodEnd as { gt: Date; lte: Date }
    expect(window.gt.getTime()).toBeLessThanOrEqual(Date.now())
    expect(window.lte.getTime()).toBeGreaterThan(window.gt.getTime())
  })

  it('bounds the follow-up window so enabling the flag cannot mail old trials', async () => {
    await GET(req('GET', `Bearer ${SECRET}`))

    const followUpWhere = state.whereClauses[1]
    const window = followUpWhere.currentPeriodEnd as { lt: Date; gte: Date }
    expect(window.gte.getTime()).toBeLessThan(window.lt.getTime())
    // Floor is 3 days back, not the beginning of time.
    expect(window.lt.getTime() - window.gte.getTime()).toBe(3 * DAY)
  })
})
