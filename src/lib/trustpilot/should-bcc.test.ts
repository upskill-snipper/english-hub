/**
 * Unit tests for shouldBccTrustpilot - the pure eligibility gate.
 *
 * The Prisma + Supabase deps are fully stubbed. Tests cover the 10 cases
 * called out in the BCC rollout brief.
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

// ── Prisma mock ────────────────────────────────────────────────────────────

const makePrisma = (user: unknown) =>
  ({
    user: { findUnique: vi.fn().mockResolvedValue(user) },
  }) as unknown as import('@prisma/client').PrismaClient

const NOW = new Date('2026-04-23T12:00:00.000Z')
const adultDob = new Date('2000-01-01T00:00:00.000Z')
const minorDob = new Date('2012-01-01T00:00:00.000Z')

const eligibleUser = {
  id: 'u1',
  dateOfBirth: adultDob,
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
      prisma: makePrisma({ ...eligibleUser, dateOfBirth: minorDob, isMinor: true }),
      now: NOW,
    })
    expect(r).toEqual({ ok: false, reason: 'under_18' })
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
