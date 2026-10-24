/**
 * Tests for the trial-ending cron route: the no-card trial sequence, M1 to M5.
 *
 * Strategy: mock Prisma, the Supabase service client (profiles, auth users and
 * marking_submissions), identity resolution, sendEmail and runCron, then drive
 * GET/POST directly. The marketing preference is NOT mocked: the real
 * isMarketingAllowed runs against the mocked stores and ledger, so the
 * consent-centre case below is tested end to end. The assertions lock down
 * what was broken or risky in this area:
 *
 *   1. Vercel Cron sends GET with `Authorization: Bearer <CRON_SECRET>`.
 *      Two crons here previously shipped POST-only and returned 405 to
 *      every scheduled invocation, forever.
 *   2. Idempotency. A ledger row is claimed before every send and released
 *      when the send fails; a second run sends nothing.
 *   3. The audience discriminator. A paying or mobile subscriber must be
 *      structurally excluded from every query, not merely unlikely to match.
 *   4. Age (23 October 2026). A child, unknown age included, gets service
 *      copy with no price and no plan link, and never M1, M4 or M5, whatever
 *      their marketing setting says. The 2000-01-01 placeholder is not an age.
 *   5. M3 is a service notice now, so it is not gated on marketing consent.
 *   6. (24 October 2026.) The price in M2 and M3 needs an adult who may
 *      receive marketing; a withdrawal in the consent centre counts; neither
 *      goes to a Stripe customer; every email goes to the confirmed auth
 *      address only; the younger of two real dates decides; and a role alone
 *      is not an age.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── Fixtures ────────────────────────────────────────────────────────────

const SECRET = 'test-secret-abcdef'
const DAY = 24 * 60 * 60 * 1000

type ReminderRow = { sentAt: Date; nextPaymentDate: Date }

type SubRow = {
  id: string
  currentPeriodStart: Date
  currentPeriodEnd: Date
  isTeacherPlan: boolean
  user: {
    id: string
    supabaseUserId: string | null
    dateOfBirth: Date | null
    isMinor: boolean
    role: string
    lastLoginAt: Date | null
  }
  renewalReminders: ReminderRow[]
}

type Profile = {
  id: string
  role: string | null
  date_of_birth: string | null
  is_minor: boolean | null
  subscription_status: string | null
  stripe_customer_id: string | null
}

type AuthUser = { email: string | null; email_confirmed_at: string | null } | 'error'

const state: {
  endingSoon: SubRow[]
  recentlyExpired: SubRow[]
  firstEssay: SubRow[]
  questsFree: SubRow[]
  oneEssay: SubRow[]
  profiles: Profile[]
  profilesError: boolean
  /** No profiles row at all comes back, rather than the default one. */
  profileRowsMissing: boolean
  /** Supabase ids whose PrivacySettings.marketingEnabled is true. */
  consented: Set<string>
  /** Supabase ids whose latest Consent MARKETING row is a withdrawal. */
  withdrawnInConsentCentre: Set<string>
  authUsers: Map<string, AuthUser>
  essayCount: number
  ieltsCount: number
  submissionCount: number | null
  submissionsError: boolean
  whereClauses: Array<Record<string, unknown>>
  ledger: Set<string>
  ledgerRows: Map<string, string>
  renewalCreated: Array<{ id: string; subscriptionId: string }>
  order: string[]
  sendSucceeds: boolean
  ledgerCreateThrows: boolean
  renewalCreateThrows: boolean
} = {
  endingSoon: [],
  recentlyExpired: [],
  firstEssay: [],
  questsFree: [],
  oneEssay: [],
  profiles: [],
  profilesError: false,
  profileRowsMissing: false,
  consented: new Set(),
  withdrawnInConsentCentre: new Set(),
  authUsers: new Map(),
  essayCount: 0,
  ieltsCount: 0,
  submissionCount: 0,
  submissionsError: false,
  whereClauses: [],
  ledger: new Set(),
  ledgerRows: new Map(),
  renewalCreated: [],
  order: [],
  sendSucceeds: true,
  ledgerCreateThrows: false,
  renewalCreateThrows: false,
}

const DEFAULT_AUTH_EMAIL = 'learner@example.com'

/** A profile for an id the test did not describe: a student with no date of birth, no Stripe id. */
function defaultProfile(id: string): Profile {
  return {
    id,
    role: 'student',
    date_of_birth: null,
    is_minor: null,
    subscription_status: 'pro',
    stripe_customer_id: null,
  }
}

// ─── Mocks ───────────────────────────────────────────────────────────────

type Where = {
  status: string
  currentPeriodStart?: unknown
  currentPeriodEnd: { gt?: Date; gte?: Date; lt?: Date; lte?: Date }
}

/** tryPrismaUserId's answer in this test: the Supabase id, marked. */
const cuidOf = (supabaseId: string) => `cuid:${supabaseId}`
const supabaseIdOf = (cuid: string) => cuid.replace(/^cuid:/, '')

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: {
      findMany: vi.fn(async ({ where }: { where: Where }) => {
        state.whereClauses.push(where as unknown as Record<string, unknown>)
        if (where.status === 'TRIALING') {
          return where.currentPeriodStart ? state.firstEssay : state.endingSoon
        }
        if (where.currentPeriodEnd.gte) return state.recentlyExpired
        // The two winback windows: 7 days after the end, and 30.
        const daysAgo = Math.round((Date.now() - where.currentPeriodEnd.lte!.getTime()) / DAY)
        return daysAgo >= 20 ? state.oneEssay : state.questsFree
      }),
    },
    lifecycleEmail: {
      create: vi.fn(async ({ data }: { data: { userId: string; kind: string } }) => {
        if (state.ledgerCreateThrows) throw new Error('relation "LifecycleEmail" does not exist')
        const key = `${data.userId}|${data.kind}`
        if (state.ledger.has(key)) throw Object.assign(new Error('unique'), { code: 'P2002' })
        state.ledger.add(key)
        const id = `le_${state.ledger.size}`
        state.ledgerRows.set(id, key)
        state.order.push(`claim:${data.kind}`)
        return { id }
      }),
      delete: vi.fn(async ({ where }: { where: { id: string } }) => {
        const key = state.ledgerRows.get(where.id)
        if (key) state.ledger.delete(key)
        state.order.push('release')
        return { id: where.id }
      }),
    },
    renewalReminder: {
      create: vi.fn(async ({ data }: { data: { subscriptionId: string } }) => {
        if (state.renewalCreateThrows) throw new Error('ledger write failed')
        const id = `rr_${state.renewalCreated.length + 1}`
        state.renewalCreated.push({ id, subscriptionId: data.subscriptionId })
        state.order.push('rr-claim')
        return { id }
      }),
      delete: vi.fn(async ({ where }: { where: { id: string } }) => {
        state.order.push('rr-release')
        return { id: where.id }
      }),
    },
    essay: { count: vi.fn(async () => state.essayCount) },
    iELTSAttempt: { count: vi.fn(async () => state.ieltsCount) },
    // The two stores isMarketingAllowed reads through Prisma.
    privacySettings: {
      findUnique: vi.fn(async ({ where }: { where: { userId: string } }) => ({
        marketingEnabled: state.consented.has(supabaseIdOf(where.userId)),
      })),
    },
    consent: {
      findFirst: vi.fn(async ({ where }: { where: { userId: string } }) =>
        state.withdrawnInConsentCentre.has(supabaseIdOf(where.userId))
          ? { granted: false, withdrawnAt: new Date(Date.now() - DAY) }
          : null,
      ),
    },
  },
}))

vi.mock('@/lib/identity', async () => {
  const actual = await vi.importActual<typeof import('@/lib/identity')>('@/lib/identity')
  return { ...actual, tryPrismaUserId: async (id: string) => cuidOf(id) }
})

function profilesFor(ids: string[]): Profile[] {
  if (state.profileRowsMissing) return []
  return ids.map((id) => state.profiles.find((p) => p.id === id) ?? defaultProfile(id))
}

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    auth: {
      admin: {
        getUserById: vi.fn(async (id: string) => {
          const u = state.authUsers.get(id) ?? {
            email: DEFAULT_AUTH_EMAIL,
            email_confirmed_at: '2026-10-01T00:00:00.000Z',
          }
          if (u === 'error') return { data: { user: null }, error: { message: 'auth down' } }
          return { data: { user: { id, ...u } }, error: null }
        }),
      },
    },
    from: (table: string) => {
      if (table === 'profiles') {
        return {
          select: () => ({
            // The cron's batch read.
            in: async (_col: string, ids: string[]) =>
              state.profilesError
                ? { data: null, error: { message: 'profiles down' } }
                : { data: profilesFor(ids), error: null },
            // isMarketingAllowed's read of profiles.marketing_opt_in, which
            // is false on every row in production.
            eq: () => ({
              maybeSingle: async () => ({ data: { marketing_opt_in: false }, error: null }),
            }),
          }),
        }
      }
      // marking_submissions
      return {
        select: () => ({
          eq: () => ({
            gte: async () =>
              state.submissionsError
                ? { count: null, error: { message: 'down' } }
                : { count: state.submissionCount, error: null },
          }),
        }),
      }
    },
  }),
}))

type SendArgs = [string, string, string, string, { headers?: Record<string, string> }?]
const sendEmailMock = vi.fn(async (..._args: SendArgs) => {
  state.order.push('send')
  return state.sendSucceeds
    ? { success: true as const, messageId: 'm_1' }
    : { success: false as const, error: 'smtp down' }
})
vi.mock('@/lib/email', () => ({
  sendEmail: (...args: unknown[]) => sendEmailMock(...(args as SendArgs)),
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
  state.endingSoon = []
  state.recentlyExpired = []
  state.firstEssay = []
  state.questsFree = []
  state.oneEssay = []
  state.profiles = []
  state.profilesError = false
  state.profileRowsMissing = false
  state.consented = new Set()
  state.withdrawnInConsentCentre = new Set()
  state.authUsers = new Map()
  state.essayCount = 0
  state.ieltsCount = 0
  state.submissionCount = 0
  state.submissionsError = false
  state.whereClauses = []
  state.ledger = new Set()
  state.ledgerRows = new Map()
  state.renewalCreated = []
  state.order = []
  state.sendSucceeds = true
  state.ledgerCreateThrows = false
  state.renewalCreateThrows = false
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

async function run() {
  const res = await GET(req('GET', `Bearer ${SECRET}`))
  return { res, body: await res.json() }
}

const UID = '11111111-2222-4333-8444-555555555555'
const ADULT_DOB = new Date('1990-05-01T00:00:00.000Z')
const CHILD_DOB = new Date('2011-05-01T00:00:00.000Z')
const PLACEHOLDER_DOB = new Date('2000-01-01T00:00:00.000Z')

function makeSub(
  overrides: Partial<Omit<SubRow, 'user'>> & { user?: Partial<SubRow['user']> } = {},
): SubRow {
  const { user, ...rest } = overrides
  return {
    id: 'sub_1',
    currentPeriodStart: new Date(Date.now() - 6 * DAY),
    currentPeriodEnd: new Date(Date.now() + DAY),
    isTeacherPlan: false,
    renewalReminders: [],
    ...rest,
    user: {
      id: 'u_1',
      supabaseUserId: UID,
      dateOfBirth: ADULT_DOB,
      isMinor: false,
      role: 'STUDENT',
      lastLoginAt: null,
      ...user,
    },
  }
}

function sent(i = 0) {
  const call = sendEmailMock.mock.calls[i]!
  return { to: call[0], subject: call[1], html: call[2], text: call[3], options: call[4] }
}

function expectOneClickHeaders(options: { headers?: Record<string, string> } | undefined) {
  expect(options?.headers?.['List-Unsubscribe']).toMatch(
    /^<https:\/\/theenglishhub\.app\/api\/unsubscribe\?token=[^>]+>$/,
  )
  expect(options?.headers?.['List-Unsubscribe-Post']).toBe('List-Unsubscribe=One-Click')
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
  it('sends nothing while TRIAL_LIFECYCLE_EMAILS_ENABLED is unset, and says skipped', async () => {
    delete process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED
    state.endingSoon = [makeSub()]
    state.recentlyExpired = [makeSub({ id: 'sub_2', currentPeriodEnd: new Date(Date.now() - DAY) })]
    state.firstEssay = [makeSub({ id: 'sub_3' })]

    const { res, body } = await run()

    expect(res.status).toBe(200)
    expect(body.skipped).toContain('disabled')
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(state.ledger.size).toBe(0)
    expect(state.whereClauses).toHaveLength(0)
  })

  it('treats anything other than exactly "true" as off', async () => {
    process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED = 'TRUE'
    state.endingSoon = [makeSub()]
    const { body } = await run()
    expect(body.skipped).toContain('disabled')
    expect(sendEmailMock).not.toHaveBeenCalled()
  })
})

// ─── M2: trial ending ────────────────────────────────────────────────────

describe('M2 trial ending', () => {
  it('sends once, to the account holder, with the subject and both unsubscribe headers', async () => {
    state.endingSoon = [makeSub()]

    const { body } = await run()

    expect(body.warned).toBe(1)
    expect(sendEmailMock).toHaveBeenCalledTimes(1)
    const s = sent()
    expect(s.to).toBe('learner@example.com')
    expect(s.subject).toMatch(/^Your free trial ends on \d{1,2} \w+ \d{4}$/)
    expectOneClickHeaders(s.options)
    expect(s.html).toContain('/unsubscribe?token=')
  })

  it('claims the ledger row, then the RenewalReminder row, BEFORE sending', async () => {
    state.endingSoon = [makeSub()]
    await run()
    expect(state.order).toEqual(['claim:M2_TRIAL_ENDING', 'rr-claim', 'send'])
    expect(state.renewalCreated).toHaveLength(1)
  })

  it('releases both claims when the send fails, keeping it retryable', async () => {
    state.sendSucceeds = false
    state.endingSoon = [makeSub()]

    const { body } = await run()

    expect(body.warned).toBe(0)
    expect(body.skipped.sendFailed).toBe(1)
    expect(state.order).toEqual([
      'claim:M2_TRIAL_ENDING',
      'rr-claim',
      'send',
      'release',
      'rr-release',
    ])
    expect(state.ledger.size).toBe(0)
  })

  it('sends nothing when the ledger cannot be written (table not yet created)', async () => {
    state.ledgerCreateThrows = true
    state.endingSoon = [makeSub()]

    const { body } = await run()

    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.claimFailed).toBe(1)
  })

  it('sends nothing, and releases the ledger, when the RenewalReminder claim fails', async () => {
    state.renewalCreateThrows = true
    state.endingSoon = [makeSub()]

    await run()

    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(state.ledger.size).toBe(0)
  })

  it('does not re-send when a warning RenewalReminder row already exists', async () => {
    const end = new Date(Date.now() + DAY)
    state.endingSoon = [
      makeSub({
        currentPeriodEnd: end,
        renewalReminders: [{ sentAt: new Date(Date.now() - DAY), nextPaymentDate: end }],
      }),
    ]
    const { body } = await run()
    expect(body.skipped.alreadySent).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('skips an account whose auth user has no email address', async () => {
    state.authUsers.set(UID, { email: null, email_confirmed_at: '2026-10-01T00:00:00.000Z' })
    state.endingSoon = [makeSub()]
    const { body } = await run()
    expect(body.skipped.noEmail).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('skips an account with no Supabase id to address or unsubscribe it by', async () => {
    state.endingSoon = [makeSub({ user: { supabaseUserId: null } })]
    const { body } = await run()
    expect(body.skipped.noSupabaseId).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('never emails an under-13 account holder', async () => {
    state.endingSoon = [makeSub({ user: { dateOfBirth: new Date(Date.now() - 11 * 365 * DAY) } })]
    const { body } = await run()
    expect(body.skipped.underAge).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })
})

// ─── Only a confirmed address (24 October 2026) ──────────────────────────

describe('the address every email goes to', () => {
  it('is the auth account’s own, confirmed address', async () => {
    state.authUsers.set(UID, {
      email: 'current@example.com',
      email_confirmed_at: '2026-10-01T00:00:00.000Z',
    })
    state.endingSoon = [makeSub()]
    await run()
    expect(sent().to).toBe('current@example.com')
  })

  it('is never an unconfirmed one, for any email in the sequence', async () => {
    state.authUsers.set(UID, { email: 'typo@example.com', email_confirmed_at: null })
    state.profiles = [FREE_PROFILE]
    state.consented.add(UID)
    state.endingSoon = [makeSub({ id: 'a', user: { id: 'u_a' } })]
    state.recentlyExpired = [
      makeSub({ id: 'b', user: { id: 'u_b' }, currentPeriodEnd: new Date(Date.now() - DAY) }),
    ]
    state.firstEssay = [makeSub({ id: 'c', user: { id: 'u_c' } })]
    state.questsFree = [
      makeSub({ id: 'd', user: { id: 'u_d' }, currentPeriodEnd: new Date(Date.now() - 8 * DAY) }),
    ]

    const { body } = await run()

    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.unconfirmed).toBe(4)
    expect(state.ledger.size).toBe(0)
  })

  it('is skipped, not guessed, when the auth user cannot be read', async () => {
    state.authUsers.set(UID, 'error')
    state.endingSoon = [makeSub()]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.confirmCheckFailed).toBe(1)
  })
})

// ─── Audience: adult, child, unknown, placeholder, consent ───────────────

describe('M2 and M3 audience', () => {
  it('gives an adult who may receive marketing the price and the plan link', async () => {
    state.consented.add(UID)
    state.endingSoon = [makeSub()]
    await run()
    expect(sent().text).toContain('planned standard pricing')
    expect(sent().html).toContain('/pricing?src=em-d6')
  })

  // 24 October 2026: the price went to every adult on age alone.
  it('gives an adult who never consented the service copy, with no £ and no /pricing', async () => {
    state.endingSoon = [makeSub()]
    await run()
    expect(sendEmailMock).toHaveBeenCalledTimes(1)
    expect(sent().text).not.toContain('£')
    expect(sent().html).not.toContain('/pricing')
    expect(sent().html).toContain('/revision/texts?src=em-d6')
  })

  it('gives an adult who withdrew marketing in the consent centre the service copy', async () => {
    state.consented.add(UID)
    state.withdrawnInConsentCentre.add(UID)
    state.recentlyExpired = [makeSub({ id: 'sub_2', currentPeriodEnd: new Date(Date.now() - DAY) })]
    await run()
    expect(sent().text).not.toContain('£')
    expect(sent().html).toContain('/games/texts?src=em-d8')
  })

  it('gives a child the service copy, with no £ and no /pricing, even with marketing on', async () => {
    state.consented.add(UID)
    state.endingSoon = [makeSub({ user: { dateOfBirth: CHILD_DOB } })]
    await run()
    expect(sendEmailMock).toHaveBeenCalledTimes(1)
    expect(sent().text).not.toContain('£')
    expect(sent().html).not.toContain('/pricing')
    expect(sent().html).toContain('/revision/texts?src=em-d6')
  })

  it('treats unknown age as a child', async () => {
    state.consented.add(UID)
    state.endingSoon = [makeSub({ user: { dateOfBirth: null } })]
    await run()
    expect(sent().text).not.toContain('£')
    expect(sent().html).not.toContain('/pricing')
  })

  it('never reads an age from the 2000-01-01 placeholder', async () => {
    state.consented.add(UID)
    state.endingSoon = [makeSub({ user: { dateOfBirth: PLACEHOLDER_DOB } })]
    await run()
    expect(sent().text).not.toContain('£')
  })

  it('takes the younger of two real dates, whichever store holds it', async () => {
    state.consented.add(UID)
    // Profile a child, Prisma an adult.
    state.profiles = [{ ...defaultProfile(UID), date_of_birth: '2011-02-02', is_minor: true }]
    state.endingSoon = [makeSub({ user: { dateOfBirth: ADULT_DOB } })]
    await run()
    expect(sent(0).text).not.toContain('£')

    // Profile an adult, Prisma a child: the case the first version got wrong.
    state.ledger = new Set()
    state.profiles = [{ ...defaultProfile(UID), date_of_birth: '1990-02-02' }]
    state.endingSoon = [makeSub({ user: { dateOfBirth: CHILD_DOB } })]
    await run()
    expect(sendEmailMock).toHaveBeenCalledTimes(2)
    expect(sent(1).text).not.toContain('£')
  })

  it('does not take a teacher role alone for an adult', async () => {
    state.consented.add(UID)
    state.profiles = [{ ...defaultProfile(UID), role: 'teacher' }]
    state.endingSoon = [makeSub({ user: { dateOfBirth: null, role: 'TEACHER' } })]
    await run()
    expect(sent().text).not.toContain('£')
  })

  it('M3 reaches a child too, with the child copy', async () => {
    state.recentlyExpired = [
      makeSub({
        id: 'sub_2',
        currentPeriodEnd: new Date(Date.now() - DAY),
        user: { dateOfBirth: CHILD_DOB },
      }),
    ]
    const { body } = await run()
    expect(body.followedUp).toBe(1)
    expect(sent().subject).toBe('Your free trial has ended - your account is still open')
    expect(sent().text).not.toContain('£')
    expect(sent().html).toContain('/games/texts?src=em-d8')
    expectOneClickHeaders(sent().options)
  })
})

// ─── M2 and M3 never to a Stripe customer (24 October 2026) ──────────────

describe('M2 and M3, which say no card was taken', () => {
  it('go to nobody with a Stripe customer id, who may have left card details at checkout', async () => {
    state.profiles = [{ ...defaultProfile(UID), stripe_customer_id: 'cus_1' }]
    state.endingSoon = [makeSub({ id: 'a', user: { id: 'u_a' } })]
    state.recentlyExpired = [
      makeSub({ id: 'b', user: { id: 'u_b' }, currentPeriodEnd: new Date(Date.now() - DAY) }),
    ]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.stripeCustomer).toBe(2)
    expect(state.renewalCreated).toHaveLength(0)
  })

  it('wait for the next run when the profile cannot be read, since only it rules that out', async () => {
    state.profilesError = true
    state.endingSoon = [makeSub()]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.profileUnavailable).toBe(1)
  })

  it('skip an account with no profile row at all', async () => {
    state.profileRowsMissing = true
    state.endingSoon = [makeSub()]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.profileUnavailable).toBe(1)
  })
})

// ─── M3: trial ended ─────────────────────────────────────────────────────

describe('M3 trial ended', () => {
  it('sends for a recently expired trial, claiming before sending', async () => {
    state.consented.add(UID)
    state.recentlyExpired = [makeSub({ id: 'sub_2', currentPeriodEnd: new Date(Date.now() - DAY) })]
    const { body } = await run()
    expect(body.followedUp).toBe(1)
    expect(state.order).toEqual(['claim:M3_TRIAL_ENDED', 'rr-claim', 'send'])
    expect(sent().html).toContain('/pricing?src=em-d8')
  })

  it('does not re-send when a follow-up row already exists', async () => {
    const end = new Date(Date.now() - 2 * DAY)
    state.recentlyExpired = [
      makeSub({
        id: 'sub_2',
        currentPeriodEnd: end,
        renewalReminders: [{ sentAt: new Date(Date.now() - DAY), nextPaymentDate: end }],
      }),
    ]
    const { body } = await run()
    expect(body.followedUp).toBe(0)
    expect(body.skipped.alreadySent).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('still follows up when only a warning row exists', async () => {
    const end = new Date(Date.now() - 2 * DAY)
    state.recentlyExpired = [
      makeSub({
        id: 'sub_2',
        currentPeriodEnd: end,
        renewalReminders: [{ sentAt: new Date(Date.now() - 4 * DAY), nextPaymentDate: end }],
      }),
    ]
    const { body } = await run()
    expect(body.followedUp).toBe(1)
  })
})

// ─── M1: the first marked essay ──────────────────────────────────────────

describe('M1 first marked essay', () => {
  it('sends to an adult with nothing marked, once, with both headers', async () => {
    state.firstEssay = [makeSub({ id: 'sub_3', currentPeriodEnd: new Date(Date.now() + 4 * DAY) })]

    const { body } = await run()

    expect(body.nudged).toBe(1)
    expect(sendEmailMock).toHaveBeenCalledTimes(1)
    expect(sent().subject).toBe('Your first marked essay: a mark for each assessment objective')
    expect(sent().html).toContain('/marking/submit?src=em-d3')
    expectOneClickHeaders(sent().options)
    expect(state.order).toEqual(['claim:M1_FIRST_ESSAY', 'send'])
  })

  it('never sends to a child, or to an unknown age', async () => {
    state.firstEssay = [
      makeSub({ id: 'a', user: { id: 'u_a', dateOfBirth: CHILD_DOB } }),
      makeSub({ id: 'b', user: { id: 'u_b', dateOfBirth: null } }),
      makeSub({ id: 'c', user: { id: 'u_c', dateOfBirth: PLACEHOLDER_DOB } }),
    ]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.notAdult).toBe(3)
  })

  it('skips a teacher, whose trial is the examiner tool', async () => {
    state.firstEssay = [makeSub({ isTeacherPlan: true })]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.teacher).toBe(1)
  })

  it('skips anyone who has submitted to the marking page, which writes no Prisma Essay', async () => {
    state.submissionCount = 1
    state.firstEssay = [makeSub()]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.alreadyMarking).toBe(1)
  })

  it('skips anyone with a Prisma Essay', async () => {
    state.essayCount = 2
    state.firstEssay = [makeSub()]
    await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('skips, rather than guesses, when the marking history cannot be read', async () => {
    state.submissionsError = true
    state.firstEssay = [makeSub()]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.checkFailed).toBe(1)
  })
})

// ─── M4 and M5: consented adults ─────────────────────────────────────────

const FREE_PROFILE: Profile = {
  id: UID,
  role: 'student',
  date_of_birth: '1990-05-01',
  is_minor: false,
  subscription_status: 'free',
  stripe_customer_id: null,
}

describe('M4 and M5', () => {
  it('M4 goes to a consented adult still on the free plan', async () => {
    state.profiles = [FREE_PROFILE]
    state.consented.add(UID)
    state.questsFree = [makeSub({ id: 'sub_4', currentPeriodEnd: new Date(Date.now() - 8 * DAY) })]

    const { body } = await run()

    expect(body.questsFree).toBe(1)
    expect(sent().subject).toBe('Quests for your set text are free with your account')
    expect(sent().html).toContain('/games/texts?src=em-d14')
    expectOneClickHeaders(sent().options)
    expect(state.order).toEqual(['claim:M4_QUESTS_FREE', 'send'])
  })

  it('M5 goes to a consented adult a month after the trial ended', async () => {
    state.profiles = [FREE_PROFILE]
    state.consented.add(UID)
    state.oneEssay = [makeSub({ id: 'sub_5', currentPeriodEnd: new Date(Date.now() - 31 * DAY) })]

    const { body } = await run()

    expect(body.oneEssay).toBe(1)
    expect(sent().subject).toBe('One essay from class, marked against each assessment objective')
    expect(sent().html).toContain('/pricing?src=em-d30')
  })

  it('a consented minor gets neither', async () => {
    state.profiles = [{ ...FREE_PROFILE, date_of_birth: '2009-03-03' }]
    state.consented.add(UID)
    state.questsFree = [makeSub({ id: 'sub_4', currentPeriodEnd: new Date(Date.now() - 8 * DAY) })]
    state.oneEssay = [makeSub({ id: 'sub_5', currentPeriodEnd: new Date(Date.now() - 31 * DAY) })]

    const { body } = await run()

    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.notAdult).toBe(2)
  })

  it('an adult who has not consented gets neither', async () => {
    state.profiles = [FREE_PROFILE]
    state.questsFree = [makeSub({ id: 'sub_4', currentPeriodEnd: new Date(Date.now() - 8 * DAY) })]
    const { body } = await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.notConsented).toBe(1)
  })

  // 24 October 2026. Withdrawing MARKETING at /dashboard/consent wrote only a
  // ledger row, which isMarketingAllowed did not read, so this adult was told
  // "withdrawn" and still got M4 and M5 with the price.
  it('an adult who switched marketing on, then withdrew it in the consent centre, gets neither', async () => {
    state.profiles = [FREE_PROFILE]
    state.consented.add(UID)
    state.withdrawnInConsentCentre.add(UID)
    state.questsFree = [makeSub({ id: 'sub_4', currentPeriodEnd: new Date(Date.now() - 8 * DAY) })]
    state.oneEssay = [makeSub({ id: 'sub_5', currentPeriodEnd: new Date(Date.now() - 31 * DAY) })]

    const { body } = await run()

    expect(sendEmailMock).not.toHaveBeenCalled()
    expect(body.skipped.notConsented).toBe(2)
  })

  it('skips anyone who has become a customer or signed in since', async () => {
    state.consented.add(UID)
    state.profiles = [{ ...FREE_PROFILE, stripe_customer_id: 'cus_1' }]
    state.questsFree = [makeSub({ id: 'sub_4', currentPeriodEnd: new Date(Date.now() - 8 * DAY) })]
    let r = await run()
    expect(r.body.skipped.notFree).toBe(1)

    state.profiles = [FREE_PROFILE]
    state.questsFree = [
      makeSub({
        id: 'sub_4',
        currentPeriodEnd: new Date(Date.now() - 8 * DAY),
        user: { lastLoginAt: new Date(Date.now() - DAY) },
      }),
    ]
    r = await run()
    expect(r.body.skipped.signedInSince).toBe(1)
    expect(sendEmailMock).not.toHaveBeenCalled()
  })

  it('skips when the profile cannot be read, since only it proves the plan is free', async () => {
    state.profilesError = true
    state.consented.add(UID)
    state.questsFree = [makeSub({ id: 'sub_4', currentPeriodEnd: new Date(Date.now() - 8 * DAY) })]
    await run()
    expect(sendEmailMock).not.toHaveBeenCalled()
  })
})

// ─── Idempotency across runs ─────────────────────────────────────────────

describe('a second run', () => {
  it('sends nothing that the first run sent', async () => {
    state.profiles = [FREE_PROFILE]
    state.consented.add(UID)
    state.endingSoon = [makeSub({ id: 'sub_a', user: { id: 'u_a' } })]
    state.firstEssay = [makeSub({ id: 'sub_b', user: { id: 'u_b' } })]
    state.questsFree = [
      makeSub({
        id: 'sub_c',
        user: { id: 'u_c' },
        currentPeriodEnd: new Date(Date.now() - 8 * DAY),
      }),
    ]

    await run()
    const firstRun = sendEmailMock.mock.calls.length
    expect(firstRun).toBe(3)

    const { body } = await run()
    expect(sendEmailMock.mock.calls.length).toBe(firstRun)
    expect(body.skipped.alreadySent).toBe(3)
  })
})

// ─── Audience discriminator ──────────────────────────────────────────────

describe('trial-ending audience safety', () => {
  it('structurally excludes paying, Stripe and mobile subscribers in every query', async () => {
    await run()

    expect(state.whereClauses).toHaveLength(5)
    for (const where of state.whereClauses) {
      expect(where.stripeSubscriptionId).toBeNull()
      expect(where.platform).toBe('WEB')
      expect(where.revenuecatAppUserId).toBeNull()
      expect(where.paymentCount).toBe(0)
      expect(where.user).toEqual({ deletedAt: null, accountStatus: 'ACTIVE' })
    }
  })

  it('no longer gates the trial-ended notice on marketing consent', async () => {
    await run()
    for (const where of state.whereClauses) {
      expect((where.user as Record<string, unknown>).privacySettings).toBeUndefined()
    }
  })

  it('bounds every window so switching the flag on cannot mail old trials', async () => {
    await run()
    const [warn, followUp, firstEssay, questsFree, oneEssay] = state.whereClauses as Array<
      Record<string, { gt?: Date; gte?: Date; lt?: Date; lte?: Date }>
    >

    expect(warn.currentPeriodEnd.lte!.getTime() - warn.currentPeriodEnd.gt!.getTime()).toBe(2 * DAY)
    expect(followUp.currentPeriodEnd.lt!.getTime() - followUp.currentPeriodEnd.gte!.getTime()).toBe(
      3 * DAY,
    )
    // M1 only for trials that have not yet reached M2's window.
    expect(firstEssay.currentPeriodEnd.gt!.getTime()).toBeGreaterThan(Date.now() + 2 * DAY - 1000)
    for (const w of [questsFree, oneEssay]) {
      expect(w.currentPeriodEnd.lte!.getTime() - w.currentPeriodEnd.gt!.getTime()).toBe(3 * DAY)
    }
  })
})
