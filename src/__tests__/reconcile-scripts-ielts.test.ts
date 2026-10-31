import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

/**
 * The two reconcile scripts and an IELTS-only subscription (31 October 2026).
 *
 * Since b24bfd2d9 (24 October 2026) an IELTS-only subscription never takes the
 * one-per-user Prisma `Subscription` row: the row records the main
 * entitlement, mobile reads `pro` from it, and the trial-expiry cron finds a
 * no-card trial only by it. The webhook keeps that rule. The repair script
 * the founder is told to run with `--write` did not: it chose any live
 * subscription, so it wrote an IELTS subscription over a no-card trial row
 * (which the cron then never selected again, so the trial's 'pro' stayed for
 * good), created an ACTIVE row for an IELTS-only payer (mobile `pro: true`),
 * and overwrote a cancelled main plan's row with a live IELTS one. And once
 * written, the webhook never corrected the row, because it now skips IELTS.
 *
 * The report-only companion flagged every IELTS-only payer as
 * NO_SUBSCRIPTION_ROW, "read as a free user", which pointed the operator at
 * the writing script.
 *
 * These import the real scripts with Stripe, Prisma and Supabase mocked.
 */

const MAIN = 'price_student_annual'
const IELTS_M = 'price_ielts_monthly'
const IELTS_A = 'price_ielts_annual'
const DAY = 24 * 60 * 60
const NOW = Math.floor(Date.now() / 1000)

type Sub = Record<string, unknown>

function sub(id: string, status: string, priceId: string, over: Sub = {}): Sub {
  return {
    id,
    status,
    created: NOW - 10 * DAY,
    items: {
      data: [
        {
          current_period_start: NOW - DAY,
          current_period_end: NOW + 30 * DAY,
          price: { id: priceId, recurring: { interval: 'month' }, product: 'prod_x' },
        },
      ],
    },
    ...over,
  }
}

// ─── Stripe ───────────────────────────────────────────────────────────────

let subsByCustomer: Record<string, Sub[]> = {}
let paidInvoices: Record<string, number> = {}

vi.mock('stripe', () => ({
  default: class {
    subscriptions = {
      list: async ({ customer }: { customer: string }) => ({
        data: subsByCustomer[customer] ?? [],
      }),
    }
    invoices = {
      list: async ({ subscription }: { subscription: string }) => ({
        data: Array.from({ length: paidInvoices[subscription] ?? 0 }, (_, i) => ({
          id: `in_${subscription}_${i}`,
          amount_paid: 3999,
        })),
        has_more: false,
      }),
    }
  },
}))

// ─── Prisma ───────────────────────────────────────────────────────────────

type Row = Record<string, unknown>
let rows: Row[] = []
let users: Array<{ id: string; supabaseUserId: string | null; email?: string }> = []
let profiles: Array<Record<string, unknown>> = []

const mockUpdate = vi.fn(async (args: { where: { id: string }; data: Row }) => ({
  id: args.where.id,
}))
const mockCreate = vi.fn(async (args: { data: Row }) => ({ id: 'row_new', ...args.data }))
const mockDisconnect = vi.fn(async () => {})

vi.mock('@prisma/client', () => ({
  PrismaClient: class {
    subscription = {
      findMany: async () =>
        rows.map((r) => ({
          ...r,
          user: users.find((u) => u.id === r.userId) ?? null,
        })),
      findUnique: async ({ where }: { where: { userId: string } }) =>
        rows.find((r) => r.userId === where.userId) ?? null,
      update: mockUpdate,
      create: mockCreate,
    }
    user = {
      findMany: async () => users,
      findFirst: async ({ where }: { where: { supabaseUserId: string } }) =>
        users.find((u) => u.supabaseUserId === where.supabaseUserId) ?? null,
      findUnique: async ({ where }: { where: { id?: string; email?: string } }) =>
        users.find((u) => (where.id ? u.id === where.id : u.email === where.email)) ?? null,
    }
    $queryRaw = async () => profiles.filter((p) => p.stripe_customer_id)
    $disconnect = mockDisconnect
  },
}))

// ─── Supabase, for the report-only script ─────────────────────────────────

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    from: () => {
      const chain = {
        select: () => chain,
        or: () => chain,
        order: () => chain,
        range: async () => ({ data: profiles, error: null }),
      }
      return chain
    },
  }),
}))

// ─── Running a script ─────────────────────────────────────────────────────

let logged: string[] = []
const savedArgv = process.argv

async function run(script: string, flags: string[]): Promise<Record<string, unknown>> {
  vi.resetModules()
  mockDisconnect.mockClear()
  logged = []
  process.argv = ['node', script, ...flags]
  await import(/* @vite-ignore */ `../../scripts/${script}?t=${Math.random()}`)
  await vi.waitFor(() => expect(mockDisconnect).toHaveBeenCalled(), { timeout: 5000 })
  const json = logged.find((l) => l.trim().startsWith('{'))
  if (!json) throw new Error(`no JSON report from ${script}: ${logged.join('\n')}`)
  return JSON.parse(json) as Record<string, unknown>
}

type Finding = { state: string; customerId?: string; supabaseUserId?: string }
const findingFor = (report: Record<string, unknown>, customerId: string): Finding | undefined =>
  (report.findings as Finding[]).find((f) => f.customerId === customerId)

beforeEach(() => {
  subsByCustomer = {}
  paidInvoices = {}
  rows = []
  users = []
  profiles = []
  mockUpdate.mockClear()
  mockCreate.mockClear()
  process.env.STRIPE_SECRET_KEY = 'sk_test_reconcile'
  process.env.DATABASE_URL = 'postgres://test'
  process.env.STRIPE_PRICE_IELTS_MONTHLY = IELTS_M
  process.env.STRIPE_PRICE_IELTS_ANNUAL = IELTS_A
  process.env.STRIPE_PRICE_STUDENT_ANNUAL = MAIN
  process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co'
  process.env.SUPABASE_SERVICE_ROLE_KEY = 'service-role-test'
  vi.spyOn(console, 'log').mockImplementation((...a: unknown[]) => {
    logged.push(a.map(String).join(' '))
  })
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  process.argv = savedArgv
  vi.restoreAllMocks()
  delete process.env.STRIPE_PRICE_IELTS_MONTHLY
  delete process.env.STRIPE_PRICE_IELTS_ANNUAL
  delete process.env.STRIPE_PRICE_STUDENT_ANNUAL
})

function trialRow(id: string, userId: string): Row {
  return {
    id,
    userId,
    stripeCustomerId: null,
    stripeSubscriptionId: null,
    status: 'TRIALING',
    plan: 'MONTHLY',
    platform: 'WEB',
    isTeacherPlan: false,
    currentPeriodStart: new Date((NOW - 2 * DAY) * 1000),
    currentPeriodEnd: new Date((NOW + 5 * DAY) * 1000),
    cancelledAt: null,
    paymentCount: 0,
  }
}

function person(n: string, customer: string, profile: Record<string, unknown> = {}) {
  const uuid = `0000000${n}-0000-4000-8000-00000000000${n}`
  users.push({ id: `cuid_${n}`, supabaseUserId: uuid, email: `p${n}@example.com` })
  profiles.push({
    id: uuid,
    email: `p${n}@example.com`,
    stripe_customer_id: customer,
    subscription_status: 'free',
    ielts_status: 'free',
    ...profile,
  })
  return { uuid, cuid: `cuid_${n}` }
}

// ═══════════════════════════════════════════════════════════════════════════

describe('scripts/stripe-reconcile-subscriptions.mjs --write and an IELTS-only subscription', () => {
  it('does not write an IELTS subscription over a no-card trial row', async () => {
    const p = person('1', 'cus_trialist', { subscription_status: 'pro', ielts_status: 'active' })
    rows.push(trialRow('row_trial', p.cuid))
    subsByCustomer.cus_trialist = [sub('sub_ielts_A', 'trialing', IELTS_M)]

    const report = await run('stripe-reconcile-subscriptions.mjs', ['--write', '--json'])

    expect(mockUpdate).not.toHaveBeenCalled()
    expect(mockCreate).not.toHaveBeenCalled()
    expect(findingFor(report, 'cus_trialist')?.state).toBe('IELTS_ONLY_SKIPPED')
  })

  it('does not create a row for an IELTS-only payer with none', async () => {
    person('2', 'cus_norow', { ielts_status: 'active' })
    subsByCustomer.cus_norow = [sub('sub_ielts_B', 'active', IELTS_A)]

    const report = await run('stripe-reconcile-subscriptions.mjs', ['--write', '--json'])

    expect(mockCreate).not.toHaveBeenCalled()
    expect(mockUpdate).not.toHaveBeenCalled()
    expect(findingFor(report, 'cus_norow')?.state).toBe('IELTS_ONLY_SKIPPED')
  })

  it('keeps a cancelled main plan on its row while an IELTS plan is live', async () => {
    const p = person('3', 'cus_mainended', {
      subscription_status: 'cancelled',
      ielts_status: 'active',
    })
    const ended = NOW - 3 * DAY
    rows.push({
      ...trialRow('row_main', p.cuid),
      stripeCustomerId: 'cus_mainended',
      stripeSubscriptionId: 'sub_main_C',
      status: 'CANCELLED',
      cancelledAt: new Date(ended * 1000),
    })
    subsByCustomer.cus_mainended = [
      sub('sub_main_C', 'canceled', MAIN, { ended_at: ended, created: NOW - 40 * DAY }),
      sub('sub_ielts_C', 'active', IELTS_M, { created: NOW - 5 * DAY }),
    ]

    await run('stripe-reconcile-subscriptions.mjs', ['--write', '--json'])

    for (const call of mockUpdate.mock.calls) {
      expect(call[0].data.stripeSubscriptionId).not.toBe('sub_ielts_C')
      expect(call[0].data.status).not.toBe('ACTIVE')
    }
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('does not call a Pro and IELTS holder a duplicate, and repairs the main plan', async () => {
    const p = person('4', 'cus_both', { subscription_status: 'pro', ielts_status: 'active' })
    rows.push({
      ...trialRow('row_both', p.cuid),
      stripeCustomerId: 'cus_both',
      stripeSubscriptionId: 'sub_main_D',
      status: 'ACTIVE',
      paymentCount: 0,
    })
    subsByCustomer.cus_both = [
      sub('sub_main_D', 'active', MAIN),
      sub('sub_ielts_D', 'active', IELTS_M),
    ]
    paidInvoices.sub_main_D = 2
    paidInvoices.sub_ielts_D = 5

    const report = await run('stripe-reconcile-subscriptions.mjs', ['--write', '--json'])

    expect(findingFor(report, 'cus_both')?.state).toBe('DIFFERS')
    expect(mockUpdate).toHaveBeenCalledTimes(1)
    const data = mockUpdate.mock.calls[0]![0].data
    expect(data.stripeSubscriptionId).toBe('sub_main_D')
    // The IELTS plan's five payments are not counted on the main plan's row.
    expect(data.paymentCount).toBe(2)
  })

  it('reports a row that already holds an IELTS subscription, and leaves it', async () => {
    const p = person('5', 'cus_heldielts', { subscription_status: 'pro', ielts_status: 'active' })
    rows.push({
      ...trialRow('row_held', p.cuid),
      stripeCustomerId: 'cus_heldielts',
      stripeSubscriptionId: 'sub_ielts_E',
      status: 'ACTIVE',
    })
    subsByCustomer.cus_heldielts = [sub('sub_ielts_E', 'active', IELTS_M)]

    const report = await run('stripe-reconcile-subscriptions.mjs', ['--write', '--json'])

    expect(findingFor(report, 'cus_heldielts')?.state).toBe('ROW_HOLDS_IELTS')
    expect(mockUpdate).not.toHaveBeenCalled()
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('still converts a trial row for a main-plan payer (the control)', async () => {
    const p = person('6', 'cus_paid', { subscription_status: 'pro' })
    rows.push(trialRow('row_paid', p.cuid))
    subsByCustomer.cus_paid = [sub('sub_main_F', 'active', MAIN)]

    await run('stripe-reconcile-subscriptions.mjs', ['--write', '--json'])

    expect(mockUpdate).toHaveBeenCalledTimes(1)
    expect(mockUpdate.mock.calls[0]![0].data.stripeSubscriptionId).toBe('sub_main_F')
  })

  it('refuses --write when it cannot tell an IELTS price from a main one', async () => {
    delete process.env.STRIPE_PRICE_IELTS_ANNUAL
    const exit = vi.spyOn(process, 'exit').mockImplementation(((code?: number) => {
      throw new Error(`exit ${code}`)
    }) as never)
    person('7', 'cus_x', { ielts_status: 'active' })
    subsByCustomer.cus_x = [sub('sub_ielts_G', 'active', IELTS_A)]

    vi.resetModules()
    process.argv = ['node', 'stripe-reconcile-subscriptions.mjs', '--write', '--json']
    await expect(
      import(
        /* @vite-ignore */ `../../scripts/stripe-reconcile-subscriptions.mjs?t=${Math.random()}`
      ),
    ).rejects.toThrow('exit 1')
    expect(exit).toHaveBeenCalledWith(1)
    expect(mockCreate).not.toHaveBeenCalled()
    expect(mockUpdate).not.toHaveBeenCalled()
  })
})

describe('scripts/reconcile-stripe-subscriptions.mjs and an IELTS-only payer', () => {
  it('does not report an IELTS-only payer with no row as a lost billing record', async () => {
    person('8', 'cus_ieltsonly', { subscription_status: 'free', ielts_status: 'active' })

    const report = await run('reconcile-stripe-subscriptions.mjs', ['--json'])
    const states = (report.findings as Finding[]).map((f) => f.state)

    expect(states).not.toContain('NO_SUBSCRIPTION_ROW')
    expect((report.counts as Record<string, number>).NO_SUBSCRIPTION_ROW).toBe(0)
  })

  it('still reports a pro profile with no row (the control)', async () => {
    person('9', 'cus_prolost', { subscription_status: 'pro', ielts_status: 'active' })

    const report = await run('reconcile-stripe-subscriptions.mjs', ['--json'])

    expect((report.counts as Record<string, number>).NO_SUBSCRIPTION_ROW).toBe(1)
  })
})
