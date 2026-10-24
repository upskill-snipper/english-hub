import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * M0, the account-ready email (23 October 2026).
 *
 * provisionSignupTrial returned what it did and every caller threw it away,
 * so the moment a trial began nobody was told when it ended or that no card
 * had been taken. These pin the sender: once per account through the
 * LifecycleEmail ledger, claimed before the send and released on failure; the
 * date read from the trial row; the switch honoured; both one-click headers;
 * under-13s skipped; a child told about approval and shown no price.
 */

const SUPABASE_ID = '11111111-2222-4333-8444-555555555555'
const PRISMA_ID = 'cuid_m0_1'
const TRIAL_END = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

const state: {
  sub: Record<string, unknown> | null
  profile: Record<string, unknown> | null
  prismaUser: Record<string, unknown> | null
  ledger: Set<string>
  order: string[]
  sendSucceeds: boolean
} = { sub: null, profile: null, prismaUser: null, ledger: new Set(), order: [], sendSucceeds: true }

vi.mock('@/lib/prisma', () => ({
  prisma: {
    subscription: { findUnique: vi.fn(async () => state.sub) },
    user: {
      findFirst: vi.fn(async () => state.prismaUser),
      findUnique: vi.fn(async () => null),
    },
    lifecycleEmail: {
      create: vi.fn(async ({ data }: { data: { userId: string; kind: string } }) => {
        const key = `${data.userId}|${data.kind}`
        if (state.ledger.has(key)) throw Object.assign(new Error('unique'), { code: 'P2002' })
        state.ledger.add(key)
        state.order.push(`claim:${data.kind}`)
        return { id: key }
      }),
      delete: vi.fn(async ({ where }: { where: { id: string } }) => {
        state.ledger.delete(where.id)
        state.order.push('release')
        return { id: where.id }
      }),
    },
  },
}))

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      select: () => ({
        eq: () => ({ maybeSingle: async () => ({ data: state.profile, error: null }) }),
      }),
    }),
  }),
}))

type SendArgs = [string, string, string, string, { headers?: Record<string, string> }?]
const sendEmail = vi.fn(async (..._a: SendArgs) => {
  state.order.push('send')
  return state.sendSucceeds ? { success: true } : { success: false, error: 'down' }
})
vi.mock('@/lib/email', () => ({ sendEmail: (...a: unknown[]) => sendEmail(...(a as SendArgs)) }))

const { sendAccountReadyEmail, announceTrialReady } =
  await import('@/lib/email/lifecycle/account-ready')

function profile(over: Record<string, unknown> = {}) {
  return {
    id: SUPABASE_ID,
    email: 'learner@example.com',
    full_name: '<b>Click here</b>',
    date_of_birth: '2000-06-01',
    is_minor: false,
    role: 'student',
    school_name: null,
    exam_board: null,
    created_at: new Date().toISOString(),
    ...over,
  }
}

const ARGS = { supabaseUserId: SUPABASE_ID, prismaUserId: PRISMA_ID, email: 'learner@example.com' }

beforeEach(() => {
  process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED = 'true'
  process.env.CRON_SECRET = 'test-secret'
  state.sub = {
    status: 'TRIALING',
    currentPeriodEnd: TRIAL_END,
    stripeSubscriptionId: null,
    isTeacherPlan: false,
  }
  state.profile = profile()
  state.prismaUser = null
  state.ledger = new Set()
  state.order = []
  state.sendSucceeds = true
  sendEmail.mockClear()
})

describe('M0 account ready', () => {
  it('sends nothing while the switch is off, and says skipped', async () => {
    delete process.env.TRIAL_LIFECYCLE_EMAILS_ENABLED
    const out = await sendAccountReadyEmail(ARGS)
    expect(out).toEqual({ status: 'skipped', reason: expect.stringContaining('disabled') })
    expect(sendEmail).not.toHaveBeenCalled()
    expect(state.ledger.size).toBe(0)
  })

  it('sends once, to the confirmed address, with the subject and both headers', async () => {
    const out = await sendAccountReadyEmail(ARGS)
    expect(out.status).toBe('sent')
    expect(sendEmail).toHaveBeenCalledTimes(1)
    const [to, subject, html, text, options] = sendEmail.mock.calls[0]!
    expect(to).toBe('learner@example.com')
    expect(subject).toBe('Your English Hub account is ready: start with your set text')
    expect(options?.headers?.['List-Unsubscribe']).toMatch(
      /^<https:\/\/theenglishhub\.app\/api\/unsubscribe\?token=/,
    )
    expect(options?.headers?.['List-Unsubscribe-Post']).toBe('List-Unsubscribe=One-Click')
    expect(html).toContain('/revision/texts?ref=em-d0')
    // The typed name is never printed: it is free text on a children's product.
    expect(html).not.toContain('Click here')
    expect(text).not.toContain('Click here')
  })

  it('claims the ledger row before sending', async () => {
    await sendAccountReadyEmail(ARGS)
    expect(state.order).toEqual(['claim:M0_ACCOUNT_READY', 'send'])
  })

  it('is idempotent: a second callback sends nothing', async () => {
    await sendAccountReadyEmail(ARGS)
    const second = await sendAccountReadyEmail(ARGS)
    expect(second.status).toBe('already-sent')
    expect(sendEmail).toHaveBeenCalledTimes(1)
  })

  it('releases the claim when the send fails, so it can be retried', async () => {
    state.sendSucceeds = false
    const out = await sendAccountReadyEmail(ARGS)
    expect(out.status).toBe('send-failed')
    expect(state.order).toEqual(['claim:M0_ACCOUNT_READY', 'send', 'release'])
    expect(state.ledger.size).toBe(0)
  })

  it('takes the date from the trial row', async () => {
    await sendAccountReadyEmail(ARGS)
    const date = TRIAL_END.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Europe/London',
    })
    expect(sendEmail.mock.calls[0]![3]).toContain(`runs until ${date}`)
  })

  it('sends nothing for a row that is not a live no-card trial', async () => {
    state.sub = { ...state.sub!, stripeSubscriptionId: 'sub_card' }
    expect((await sendAccountReadyEmail(ARGS)).status).toBe('skipped')
    state.sub = null
    expect((await sendAccountReadyEmail(ARGS)).status).toBe('skipped')
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('never emails an under-13', async () => {
    state.profile = profile({ date_of_birth: '2016-01-01' })
    expect(await sendAccountReadyEmail(ARGS)).toEqual({ status: 'skipped', reason: 'under-13' })
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('tells an under-16 about approval, and shows no price', async () => {
    state.profile = profile({ date_of_birth: '2012-01-01' })
    await sendAccountReadyEmail(ARGS)
    const text = sendEmail.mock.calls[0]![3]
    expect(text).toContain("AI feedback needs a parent's or school's approval first.")
    expect(text).not.toContain('£')
  })

  it('treats unknown age as a child and states the rule', async () => {
    state.profile = profile({ date_of_birth: null })
    await sendAccountReadyEmail(ARGS)
    expect(sendEmail.mock.calls[0]![3]).toContain(
      "If you are under 16, AI feedback needs a parent's or school's approval first.",
    )
  })

  it('sends an adult teacher to the examiner tool', async () => {
    state.profile = profile({ role: 'teacher', date_of_birth: null })
    await sendAccountReadyEmail(ARGS)
    expect(sendEmail.mock.calls[0]![2]).toContain('/toolkit/examiner?ref=em-d0')
  })

  it('sends nothing without an address', async () => {
    expect((await sendAccountReadyEmail({ ...ARGS, email: null })).status).toBe('skipped')
    expect(sendEmail).not.toHaveBeenCalled()
  })
})

describe('announceTrialReady', () => {
  it('does nothing unless a trial was provisioned', async () => {
    announceTrialReady(
      { provisioned: false, reason: 'already-subscribed' },
      {
        supabaseUserId: SUPABASE_ID,
        email: 'learner@example.com',
      },
    )
    announceTrialReady(undefined, { supabaseUserId: SUPABASE_ID, email: 'learner@example.com' })
    await new Promise((r) => setTimeout(r, 10))
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('sends M0 when the provisioner says it provisioned', async () => {
    announceTrialReady(
      { provisioned: true, trialEndsAt: TRIAL_END, prismaUserId: PRISMA_ID },
      { supabaseUserId: SUPABASE_ID, email: 'learner@example.com' },
    )
    await vi.waitFor(() => expect(sendEmail).toHaveBeenCalledTimes(1))
  })
})
