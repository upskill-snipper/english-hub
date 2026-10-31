/**
 * Unit tests for shouldBccTrustpilot - the eligibility gate.
 *
 * The Prisma + Supabase deps are fully stubbed, and so are the email age
 * group and the marketing read, which since 31 October 2026 decide the age
 * and consent steps as they do for triggerTrustpilotInvite. Until then the
 * happy-path fixture's "adult" date of birth was 2000-01-01, the placeholder
 * that identity/age.ts says is never an age, and this file passed with it;
 * src/__tests__/trustpilot-every-path-gated.test.ts runs the real age
 * reading against that placeholder.
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'

import { shouldBccTrustpilot } from './should-bcc'

// ── Supabase mock ──────────────────────────────────────────────────────────
// `checkDedup` calls `createServiceRoleClient().from('trustpilot_invite').…`.
// We stub the chain to return controllable result sets.

type FakeRow = { id: string }
const dedupState: { perTrigger: FakeRow[]; globalWindow: FakeRow[] } = {
  perTrigger: [],
  globalWindow: [],
}

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      select: () => ({
        eq: (col: string, val: string) => {
          const base = {
            eq: (c2: string, v2: string) =>
              chain(col === 'trigger' || c2 === 'trigger' ? 'perTrigger' : 'globalWindow'),
            in: () => chain('globalWindow'),
          }
          return base
        },
      }),
    }),
  }),
}))

function chain(which: 'perTrigger' | 'globalWindow') {
  return {
    eq: () => chain(which),
    in: () => chain(which),
    gte: () => chain(which),
    limit: () => Promise.resolve({ data: dedupState[which], error: null }),
  }
}

// ── Age group and marketing ────────────────────────────────────────────────

let ageGroup = 'ADULT'
let marketingAllowed = true
const askedFor: string[] = []

vi.mock('@/lib/identity', () => ({
  resolveEmailAgeGroup: async (id: string) => {
    askedFor.push(id)
    return ageGroup
  },
  isAdultForEmail: (group: string) => group === 'ADULT',
}))

vi.mock('@/lib/email/marketing-preference', () => ({
  isMarketingAllowed: async () => marketingAllowed,
}))

// ── Prisma mock ────────────────────────────────────────────────────────────

const makePrisma = (user: unknown) =>
  ({
    user: { findUnique: vi.fn().mockResolvedValue(user) },
  }) as unknown as import('@prisma/client').PrismaClient

const NOW = new Date('2026-04-23T12:00:00.000Z')
const SUPABASE_UUID = '11111111-2222-4333-8444-555555555555'

const eligibleUser = {
  id: 'u1',
  supabaseUserId: SUPABASE_UUID,
  isMinor: false,
  deletedAt: null,
  privacySettings: { marketingEnabled: true, aiOptOut: false },
}

// ── Tests ──────────────────────────────────────────────────────────────────

beforeEach(() => {
  process.env.TRUSTPILOT_ENABLED = 'true'
  process.env.TRUSTPILOT_INVITE_EMAIL = 'theenglishhub.app+x@invite.trustpilot.com'
  dedupState.perTrigger = []
  dedupState.globalWindow = []
  ageGroup = 'ADULT'
  marketingAllowed = true
  askedFor.length = 0
})
afterEach(() => {
  vi.restoreAllMocks()
})

describe('shouldBccTrustpilot', () => {
  it('happy path - student_first_mark', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r.ok).toBe(true)
  })

  it('happy path - student_90d_retention', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_90d_retention',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r.ok).toBe(true)
  })

  it('happy path - teacher_first_bulk_mark', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'teacher_first_bulk_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r.ok).toBe(true)
  })

  it('happy path - teacher_month_3_streak', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'teacher_month_3_streak',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r.ok).toBe(true)
  })

  it('minor - under_18', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma({ ...eligibleUser, isMinor: true }),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'under_18' })
  })

  it('a known minor by date of birth, with isMinor false - under_18', async () => {
    ageGroup = 'MINOR_16_17'
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'under_18' })
  })

  it('age not known, isMinor false - not_known_adult', async () => {
    ageGroup = 'UNKNOWN'
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'not_known_adult' })
  })

  it('asks the age group of the Supabase uuid, not the Prisma id', async () => {
    await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(askedFor).toEqual([SUPABASE_UUID])
  })

  it('no Supabase identity - refused', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma({ ...eligibleUser, supabaseUserId: null }),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'no_supabase_identity' })
  })

  it('no PrivacySettings row and isMarketingAllowed says no - no_marketing_consent', async () => {
    marketingAllowed = false
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma({ ...eligibleUser, privacySettings: null }),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'no_marketing_consent' })
  })

  it('marketing opted out', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma({
        ...eligibleUser,
        privacySettings: { marketingEnabled: false, aiOptOut: false },
      }),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'marketing_opt_out' })
  })

  it('ai opted out', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma({
        ...eligibleUser,
        privacySettings: { marketingEnabled: true, aiOptOut: true },
      }),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'ai_opt_out' })
  })

  it('dedup - 12 months per trigger', async () => {
    dedupState.perTrigger = [{ id: 'prev' }]
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'duplicate_trigger_12m' })
  })

  it('dedup - 90 day global window', async () => {
    dedupState.globalWindow = [{ id: 'prev-other' }]
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'global_90d_window' })
  })

  it('flag off', async () => {
    process.env.TRUSTPILOT_ENABLED = 'false'
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'flag_off' })
  })

  it('env empty', async () => {
    process.env.TRUSTPILOT_INVITE_EMAIL = ''
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'student_first_mark',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'env_empty' })
  })

  it('unknown trigger', async () => {
    const r = await shouldBccTrustpilot({
      userId: 'u1',
      trigger: 'not_a_real_trigger',
      prisma: makePrisma(eligibleUser),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'unknown_trigger' })
  })
})
