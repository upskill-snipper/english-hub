/**
 * Tests for the free-allowance meter.
 *
 * WHAT THESE PROTECT
 * The cap this helper replaces was non-functional in production because it
 * lived in a per-process Map. The replacement is only worth anything if the
 * count survives, the wall actually refuses, the identity is right, and the
 * raw IP never reaches storage - so each of those is asserted here rather than
 * left to a code review.
 *
 * Strategy: a fake Prisma that implements the real semantics of the three raw
 * statements (the guarded upsert, the plain read, the refund) against an
 * in-memory map keyed the same way the unique index is. The guard is the whole
 * point of the design, so the fake honours it literally.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// ─── Fake Prisma ────────────────────────────────────────────────────────────
//
// vi.mock is hoisted above every top-level const in this file, so the whole
// fake is built inside vi.hoisted() - otherwise the mock factory runs before
// the fake exists.

interface Row {
  id: string
  subject_type: string
  subject_key: string
  meter: string
  period_key: string
  count: number
  limit_applied: number
}

const H = vi.hoisted(() => {
  const store = new Map<string, Record<string, unknown>>()

  const state = {
    store,
    configRows: [] as { key: string; value: string }[],
    userRow: { id: 'prisma-user-1' } as { id: string } | null,
    subscriptionRow: null as Record<string, unknown> | null,
    dbThrows: false,
  }

  const bucketKey = (t: string, k: string, m: string, p: string) => [t, k, m, p].join('|')
  const sqlOf = (strings: TemplateStringsArray) => strings.join(' ').replace(/\s+/g, ' ').trim()

  const prisma = {
    appConfigSetting: {
      findMany: vi.fn(async () => state.configRows),
    },
    user: {
      findUnique: vi.fn(async () => state.userRow),
    },
    subscription: {
      findUnique: vi.fn(async () => state.subscriptionRow),
    },
    freeAllowanceUsage: {
      deleteMany: vi.fn(async () => ({ count: 0 })),
    },

    $queryRaw: vi.fn(async (strings: TemplateStringsArray, ...values: unknown[]) => {
      if (state.dbThrows) throw new Error('connection terminated unexpectedly')
      const sql = sqlOf(strings)

      if (sql.startsWith('INSERT INTO free_allowance_usage')) {
        const guarded = sql.includes('WHERE free_allowance_usage.count <')
        const id = values[0] as string
        const subjectType = values[1] as string
        const subjectKey = values[2] as string
        const meter = values[3] as string
        const periodKey = values[4] as string
        const limitApplied = values[5] as number
        // The guarded form binds the live limit a second time, in the WHERE.
        const guardLimit = guarded ? (values[6] as number) : Number.POSITIVE_INFINITY

        const key = bucketKey(subjectType, subjectKey, meter, periodKey)
        const existing = store.get(key) as Row | undefined

        if (!existing) {
          const row: Row = {
            id,
            subject_type: subjectType,
            subject_key: subjectKey,
            meter,
            period_key: periodKey,
            count: 1,
            limit_applied: limitApplied,
          }
          store.set(key, row as unknown as Record<string, unknown>)
          return [{ count: row.count, limit_applied: row.limit_applied }]
        }

        // ON CONFLICT DO UPDATE ... WHERE count < :limit. A failing WHERE means
        // the statement returns NO ROW, which is how the helper learns the
        // allowance is spent - and nothing is incremented.
        if (existing.count >= guardLimit) return []
        existing.count += 1
        return [{ count: existing.count, limit_applied: existing.limit_applied }]
      }

      if (sql.startsWith('SELECT count FROM free_allowance_usage')) {
        const row = store.get(
          bucketKey(
            values[0] as string,
            values[1] as string,
            values[2] as string,
            values[3] as string,
          ),
        ) as Row | undefined
        return row ? [{ count: row.count }] : []
      }

      throw new Error('unexpected query: ' + sql)
    }),

    $executeRaw: vi.fn(async (strings: TemplateStringsArray, ...values: unknown[]) => {
      if (state.dbThrows) throw new Error('connection terminated unexpectedly')
      const sql = sqlOf(strings)
      if (sql.startsWith('UPDATE free_allowance_usage')) {
        const row = store.get(
          bucketKey(
            values[0] as string,
            values[1] as string,
            values[2] as string,
            values[3] as string,
          ),
        ) as Row | undefined
        if (!row) return 0
        row.count = Math.max(row.count - 1, 0)
        return 1
      }
      throw new Error('unexpected statement: ' + sql)
    }),
  }

  // Object.assign, NOT a spread: the fake reads `state.configRows` etc. at call
  // time, so a shallow copy would leave every per-test mutation invisible to it.
  return Object.assign(state, { prisma })
})

const store = H.store as unknown as Map<string, Row>
const prismaMock = H.prisma

vi.mock('@/lib/prisma', () => ({ prisma: H.prisma }))

// ─── Subject under test ─────────────────────────────────────────────────────

import {
  resolveUsageSubject,
  consumeAllowance,
  peekAllowance,
  refundAllowance,
  enforceAllowance,
  FreeAllowanceConfigError,
} from '@/lib/usage/free-allowance'
import { getLimit, resetConfigCache } from '@/lib/usage/limits'
import { resolveNoCardTrial, enforceTrialAllowance } from '@/lib/usage/trial-allowance'
import { hashIP } from '@/lib/security'

const TEST_SALT = 'unit-test-salt-not-the-production-one'
const TEST_IP = '203.0.113.42'
const SUPABASE_UUID = '11111111-1111-1111-1111-111111111111'

function req(ip = TEST_IP) {
  return { headers: new Headers({ 'x-real-ip': ip }) }
}

const ORIGINAL_ENV = { ...process.env }

beforeEach(() => {
  store.clear()
  H.configRows = []
  H.userRow = { id: 'prisma-user-1' }
  H.subscriptionRow = null
  H.dbThrows = false
  resetConfigCache()
  process.env = { ...ORIGINAL_ENV, IP_HASH_SALT: TEST_SALT }
  vi.clearAllMocks()
})

afterEach(() => {
  process.env = { ...ORIGINAL_ENV }
})

// ─── Identity ───────────────────────────────────────────────────────────────

describe('resolveUsageSubject', () => {
  it('keys on the Supabase uuid when the caller is signed in', () => {
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)
    expect(subject).toEqual({ subjectType: 'user', subjectKey: SUPABASE_UUID })
  })

  it('keys a signed-out caller on a salted hash, never the raw IP', () => {
    const subject = resolveUsageSubject(req(), null)
    expect(subject.subjectType).toBe('ip')
    expect(subject.subjectKey).not.toContain(TEST_IP)
    expect(subject.subjectKey).not.toContain('203.0.113')
    // Full sha256 digest, not the 16-char truncation hashIP() uses for logs.
    expect(subject.subjectKey).toMatch(/^[0-9a-f]{64}$/)
    expect(subject.subjectKey).not.toBe(hashIP(TEST_IP))
  })

  it('gives different IPs different buckets and the same IP the same bucket', () => {
    const a = resolveUsageSubject(req('198.51.100.7'), null)
    const b = resolveUsageSubject(req('198.51.100.8'), null)
    const aAgain = resolveUsageSubject(req('198.51.100.7'), null)
    expect(a.subjectKey).not.toBe(b.subjectKey)
    expect(a.subjectKey).toBe(aAgain.subjectKey)
  })

  it('changes the hash when the salt changes, so a leaked salt is rotatable', () => {
    const withSaltA = resolveUsageSubject(req(), null).subjectKey
    process.env.IP_HASH_SALT = 'a-different-salt'
    const withSaltB = resolveUsageSubject(req(), null).subjectKey
    expect(withSaltA).not.toBe(withSaltB)
  })

  it('refuses to meter an anonymous caller in production without IP_HASH_SALT', () => {
    // A known or absent salt makes the stored hash reversible across the whole
    // IPv4 space, so it would still be personal data. Hard failure, not a warning.
    // NODE_ENV is typed read-only, so reassign the whole object (the helper
    // reads process.env at call time, never at module load).
    process.env = { ...ORIGINAL_ENV, NODE_ENV: 'production' }
    delete process.env.IP_HASH_SALT
    expect(() => resolveUsageSubject(req(), null)).toThrow(FreeAllowanceConfigError)
    // A signed-in caller needs no salt and is unaffected.
    expect(() => resolveUsageSubject(req(), SUPABASE_UUID)).not.toThrow()
  })
})

// ─── Consumption ────────────────────────────────────────────────────────────

describe('consumeAllowance', () => {
  it('counts each call and reports what is left', async () => {
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)

    const first = await consumeAllowance(subject, 'ielts_diagnostic')
    expect(first.allowed).toBe(true)
    expect(first.used).toBe(1)
    expect(first.limit).toBe(8) // signed-in default
    expect(first.remaining).toBe(7)

    const second = await consumeAllowance(subject, 'ielts_diagnostic')
    expect(second.used).toBe(2)
    expect(second.remaining).toBe(6)
  })

  it('refuses once the allowance is spent, and keeps refusing', async () => {
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN = '2'
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)

    expect((await consumeAllowance(subject, 'ielts_diagnostic')).allowed).toBe(true)
    expect((await consumeAllowance(subject, 'ielts_diagnostic')).allowed).toBe(true)

    const third = await consumeAllowance(subject, 'ielts_diagnostic')
    expect(third.allowed).toBe(false)
    expect(third.used).toBe(2)
    expect(third.remaining).toBe(0)

    // A refusal must not keep incrementing, or the reported "used" would run
    // away from the cap and the copy would be wrong.
    const fourth = await consumeAllowance(subject, 'ielts_diagnostic')
    expect(fourth.allowed).toBe(false)
    expect(fourth.used).toBe(2)
  })

  it('gives signed-out callers the lower cap and signed-in callers the higher one', async () => {
    const anon = resolveUsageSubject(req(), null)
    const signedIn = resolveUsageSubject(req(), SUPABASE_UUID)

    expect((await consumeAllowance(anon, 'ielts_diagnostic')).limit).toBe(4)
    expect((await consumeAllowance(signedIn, 'ielts_diagnostic')).limit).toBe(8)
  })

  it('keeps separate buckets per subject, so one learner cannot spend another allowance', async () => {
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN = '1'
    const a = resolveUsageSubject(req(), SUPABASE_UUID)
    const b = resolveUsageSubject(req(), '22222222-2222-2222-2222-222222222222')

    expect((await consumeAllowance(a, 'ielts_diagnostic')).allowed).toBe(true)
    expect((await consumeAllowance(a, 'ielts_diagnostic')).allowed).toBe(false)
    expect((await consumeAllowance(b, 'ielts_diagnostic')).allowed).toBe(true)
  })

  it('never writes a raw IP into storage', async () => {
    const subject = resolveUsageSubject(req(), null)
    await consumeAllowance(subject, 'ielts_diagnostic')

    const written = JSON.stringify([...store.values()])
    expect(written).not.toContain(TEST_IP)
    expect(written).not.toContain('203.0.113')
    expect([...store.values()][0].subject_key).toMatch(/^[0-9a-f]{64}$/)
  })
})

describe('refundAllowance', () => {
  it('gives a use back when the model call never happened', async () => {
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)
    await consumeAllowance(subject, 'ielts_diagnostic')
    await consumeAllowance(subject, 'ielts_diagnostic')

    await refundAllowance(subject, 'ielts_diagnostic')

    const state = await peekAllowance(subject, 'ielts_diagnostic')
    expect(state.used).toBe(1)
  })

  it('reopens an exhausted allowance, so an outage cannot eat it permanently', async () => {
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN = '1'
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)

    expect((await consumeAllowance(subject, 'ielts_diagnostic')).allowed).toBe(true)
    expect((await consumeAllowance(subject, 'ielts_diagnostic')).allowed).toBe(false)

    await refundAllowance(subject, 'ielts_diagnostic')
    expect((await consumeAllowance(subject, 'ielts_diagnostic')).allowed).toBe(true)
  })

  it('never goes below zero', async () => {
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)
    await consumeAllowance(subject, 'ielts_diagnostic')
    await refundAllowance(subject, 'ielts_diagnostic')
    await refundAllowance(subject, 'ielts_diagnostic')

    expect((await peekAllowance(subject, 'ielts_diagnostic')).used).toBe(0)
  })
})

describe('peekAllowance', () => {
  it('reads without consuming', async () => {
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)
    await consumeAllowance(subject, 'ielts_diagnostic')

    await peekAllowance(subject, 'ielts_diagnostic')
    await peekAllowance(subject, 'ielts_diagnostic')
    await peekAllowance(subject, 'ielts_diagnostic')

    expect((await peekAllowance(subject, 'ielts_diagnostic')).used).toBe(1)
  })
})

// ─── Configuration ──────────────────────────────────────────────────────────

describe('limit resolution', () => {
  it('uses the code default when nothing overrides it', async () => {
    expect(await getLimit('diagnosticSignedOut')).toBe(4)
    expect(await getLimit('trialAi')).toBe(40)
    expect(await getLimit('trialAiDaily')).toBe(15)
  })

  it('respects an environment override', async () => {
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_OUT = '11'
    expect(await getLimit('diagnosticSignedOut')).toBe(11)
  })

  it('lets a database override beat the environment, which is the no-deploy path', async () => {
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_OUT = '11'
    H.configRows = [{ key: 'free_allowance.diagnostic.signed_out', value: '25' }]
    resetConfigCache()
    expect(await getLimit('diagnosticSignedOut')).toBe(25)
  })

  it('ignores an unparseable or out-of-range value instead of throwing', async () => {
    H.configRows = [{ key: 'free_allowance.diagnostic.signed_out', value: 'four' }]
    resetConfigCache()
    expect(await getLimit('diagnosticSignedOut')).toBe(4)

    H.configRows = [{ key: 'free_allowance.diagnostic.signed_out', value: '999999' }]
    resetConfigCache()
    expect(await getLimit('diagnosticSignedOut')).toBe(4)
  })

  it('falls back to env and defaults when the config read fails', async () => {
    prismaMock.appConfigSetting.findMany.mockRejectedValueOnce(new Error('db down'))
    process.env.EH_TRIAL_AI_LIMIT = '7'
    resetConfigCache()
    expect(await getLimit('trialAi')).toBe(7)
  })

  it('applies a raised limit immediately, without waiting for the next bucket', async () => {
    // The mitigation this whole design leans on is "raise the number in about a
    // minute". Enforcing against the stored limit_applied would delay a raise
    // until the bucket rolled over, which would make that claim false.
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN = '1'
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)
    await consumeAllowance(subject, 'ielts_diagnostic')
    expect((await consumeAllowance(subject, 'ielts_diagnostic')).allowed).toBe(false)

    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN = '5'
    const after = await consumeAllowance(subject, 'ielts_diagnostic')
    expect(after.allowed).toBe(true)
    expect(after.limit).toBe(5)
  })
})

describe('kill switches', () => {
  it('shadow mode counts but never blocks', async () => {
    process.env.EH_FREE_ALLOWANCE_SHADOW_MODE = 'true'
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN = '1'
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)

    await consumeAllowance(subject, 'ielts_diagnostic')
    const over = await consumeAllowance(subject, 'ielts_diagnostic')

    expect(over.allowed).toBe(true)
    expect(over.shadowed).toBe(true)
    expect(over.used).toBe(2) // still counted, which is the point of shadow mode
  })

  it('enforcement off counts but never blocks', async () => {
    process.env.EH_FREE_ALLOWANCE_ENFORCED = 'false'
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN = '1'
    const subject = resolveUsageSubject(req(), SUPABASE_UUID)

    await consumeAllowance(subject, 'ielts_diagnostic')
    const over = await consumeAllowance(subject, 'ielts_diagnostic')
    expect(over.allowed).toBe(true)
    expect(over.used).toBe(2)
  })
})

// ─── Route-level gate ───────────────────────────────────────────────────────

describe('enforceAllowance', () => {
  it('passes through while the allowance lasts', async () => {
    const gate = await enforceAllowance(req(), SUPABASE_UUID, 'ielts_diagnostic')
    expect(gate.response).toBeNull()
    expect(gate.state?.remaining).toBe(7)
  })

  it('returns 402 with a stable machine code, not 403 or 429', async () => {
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_IN = '1'
    await enforceAllowance(req(), SUPABASE_UUID, 'ielts_diagnostic')

    const gate = await enforceAllowance(req(), SUPABASE_UUID, 'ielts_diagnostic')
    expect(gate.response).not.toBeNull()
    expect(gate.response!.status).toBe(402)

    const body = await gate.response!.json()
    expect(body.code).toBe('free_allowance_exhausted')
    expect(body.limit).toBe(1)
    expect(body.used).toBe(1)
    expect(body.upgradeUrl).toBe('/pricing')
    expect(typeof body.resetsAt).toBe('string')
    expect(typeof body.error).toBe('string')
  })

  it('tells a signed-out learner that signing in gives more', async () => {
    // The shared-NAT case: a school or a household on one public IP shares a
    // single counter, and signing in is the honest way out of it.
    process.env.EH_FREE_DIAGNOSTIC_LIMIT_SIGNED_OUT = '1'
    await enforceAllowance(req(), null, 'ielts_diagnostic')
    const gate = await enforceAllowance(req(), null, 'ielts_diagnostic')

    const body = await gate.response!.json()
    expect(body.error.toLowerCase()).toContain('sign in')
  })

  it('fails CLOSED with a 503 when the database is unreachable', async () => {
    H.dbThrows = true
    const gate = await enforceAllowance(req(), SUPABASE_UUID, 'ielts_diagnostic')
    expect(gate.response).not.toBeNull()
    expect(gate.response!.status).toBe(503)
  })
})

// ─── The trial discriminator ────────────────────────────────────────────────

describe('no-card trial discriminator', () => {
  const base = {
    id: 'sub_1',
    status: 'TRIALING',
    currentPeriodEnd: new Date(Date.now() + 5 * 86400000),
    stripeSubscriptionId: null,
    stripeCustomerId: null,
    paymentCount: 0,
  }

  it('identifies a no-card trial', async () => {
    H.subscriptionRow = { ...base }
    const trial = await resolveNoCardTrial({ id: SUPABASE_UUID, email: 'a@b.com' })
    expect(trial).not.toBeNull()
    expect(trial!.subscriptionId).toBe('sub_1')
  })

  it('does NOT cap a card-on-file trial', async () => {
    // Starting a paid plan at checkout gives the first 7 days free WITH a card.
    // The card is the abuse control, and capping it would break that promise.
    H.subscriptionRow = { ...base, stripeSubscriptionId: 'sub_stripe_1', stripeCustomerId: 'cus_1' }
    expect(await resolveNoCardTrial({ id: SUPABASE_UUID, email: 'a@b.com' })).toBeNull()
  })

  it('does NOT cap a trial row that has taken a payment', async () => {
    H.subscriptionRow = { ...base, paymentCount: 1 }
    expect(await resolveNoCardTrial({ id: SUPABASE_UUID, email: 'a@b.com' })).toBeNull()
  })

  it('does NOT cap a genuine subscriber', async () => {
    for (const status of ['ACTIVE', 'PAUSED', 'CANCELLED', 'PAST_DUE']) {
      H.subscriptionRow = { ...base, status }
      expect(await resolveNoCardTrial({ id: SUPABASE_UUID, email: 'a@b.com' })).toBeNull()
    }
  })

  it('does NOT cap a user with no subscription row at all', async () => {
    H.subscriptionRow = null
    expect(await resolveNoCardTrial({ id: SUPABASE_UUID, email: 'a@b.com' })).toBeNull()
  })

  it('does NOT cap an expired trial - that is the paywall, not this meter', async () => {
    H.subscriptionRow = { ...base, currentPeriodEnd: new Date(Date.now() - 86400000) }
    expect(await resolveNoCardTrial({ id: SUPABASE_UUID, email: 'a@b.com' })).toBeNull()
  })
})

describe('enforceTrialAllowance', () => {
  const noCardTrial = {
    id: 'sub_1',
    status: 'TRIALING',
    currentPeriodEnd: new Date(Date.now() + 5 * 86400000),
    stripeSubscriptionId: null,
    stripeCustomerId: null,
    paymentCount: 0,
  }

  it('never meters a subscriber', async () => {
    H.subscriptionRow = { ...noCardTrial, status: 'ACTIVE', stripeSubscriptionId: 'sub_stripe_1' }
    const gate = await enforceTrialAllowance(req(), { id: SUPABASE_UUID, email: 'a@b.com' })

    expect(gate.response).toBeNull()
    expect(gate.consumed).toBeNull()
    expect(store.size).toBe(0) // nothing was even counted
  })

  it('meters a no-card trial across the whole trial, not per month', async () => {
    H.subscriptionRow = { ...noCardTrial }
    const gate = await enforceTrialAllowance(req(), { id: SUPABASE_UUID, email: 'a@b.com' })

    expect(gate.response).toBeNull()
    expect(gate.consumed?.meters).toEqual(['trial_ai_daily', 'trial_ai'])
    const periodKeys = [...store.values()].map((r) => r.period_key)
    expect(periodKeys).toContain('trial:sub_1')
  })

  it('stops a no-card trial at the ceiling with a 402', async () => {
    process.env.EH_TRIAL_AI_LIMIT = '2'
    H.subscriptionRow = { ...noCardTrial }
    const session = { id: SUPABASE_UUID, email: 'a@b.com' }

    expect((await enforceTrialAllowance(req(), session)).response).toBeNull()
    expect((await enforceTrialAllowance(req(), session)).response).toBeNull()

    const blocked = await enforceTrialAllowance(req(), session)
    expect(blocked.response!.status).toBe(402)
    expect((await blocked.response!.json()).code).toBe('free_allowance_exhausted')
  })

  it('applies the daily sub-cap and refunds the whole-trial meter it did not use', async () => {
    process.env.EH_TRIAL_AI_DAILY_LIMIT = '1'
    process.env.EH_TRIAL_AI_LIMIT = '40'
    H.subscriptionRow = { ...noCardTrial }
    const session = { id: SUPABASE_UUID, email: 'a@b.com' }

    await enforceTrialAllowance(req(), session)
    const blocked = await enforceTrialAllowance(req(), session)
    expect(blocked.response!.status).toBe(402)

    // The daily cap refused FIRST, so the whole-trial ceiling must still show
    // exactly one use - a rejected call must not silently cost the learner two.
    const whole = [...store.values()].find((r) => r.meter === 'trial_ai')
    expect(whole?.count).toBe(1)
  })

  it('fails CLOSED when the subscription lookup throws', async () => {
    prismaMock.user.findUnique.mockRejectedValueOnce(new Error('db down'))
    const gate = await enforceTrialAllowance(req(), { id: SUPABASE_UUID, email: 'a@b.com' })
    expect(gate.response!.status).toBe(503)
  })
})
