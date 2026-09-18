import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * The trial countdown banner, for accounts with no Prisma row.
 *
 * THE DEFECT (19 September 2026). `getTrialState()` returned EMPTY whenever
 * there was no Prisma `User` row or no Prisma `Subscription` row. Production
 * held 13 Prisma users against 206 profiles and ZERO TRIALING rows, so the
 * banner mounted in the dashboard layout had never rendered for a single
 * person - and the four paying customers got no premium signal from it either.
 *
 * `profiles.subscription_status` and `subscription_end_date` are what the web
 * entitlement gates actually read, so they are the sound fallback. The profile
 * cannot tell a no-card trial from a paid plan (it writes 'pro' for both), so
 * an account known only from its profile is treated as premium rather than
 * trialing: showing a countdown that may not exist is worse than showing none.
 */

let authUser: { id: string; email: string } | null = { id: 'uuid-1', email: 'a@b.com' }
let profileRow: Record<string, unknown> | null = null

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: authUser }, error: null }) },
    from: () => ({
      select: () => ({
        eq: () => ({ single: async () => ({ data: profileRow, error: null }) }),
      }),
    }),
  }),
}))

const mockUserFindUnique = vi.fn()
const mockSubFindUnique = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: { findUnique: (...a: unknown[]) => mockUserFindUnique(...a) },
    subscription: { findUnique: (...a: unknown[]) => mockSubFindUnique(...a) },
  },
}))

import { getTrialState } from '@/lib/billing/trial-state'

/**
 * "The banner renders nothing" - which is what these tests are actually about.
 *
 * They used to deep-equal the whole TrialState. SF-7 then widened it with
 * `kind` and `trialEndedAt`, and eleven tests failed while the behaviour they
 * describe was unchanged. Asserting the two fields the banner reads keeps them
 * about the behaviour rather than the shape.
 */
async function showsNothing(): Promise<boolean> {
  const s = await getTrialState()
  return s.trialEndsAt === null && s.isPremium === false
}

const future = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
const past = new Date(Date.now() - 24 * 60 * 60 * 1000)

beforeEach(() => {
  vi.clearAllMocks()
  authUser = { id: 'uuid-1', email: 'a@b.com' }
  profileRow = null
  mockUserFindUnique.mockResolvedValue(null)
  mockSubFindUnique.mockResolvedValue(null)
})

// ─── The regression ─────────────────────────────────────────────────────

describe('an account with no Prisma row', () => {
  it('is recognised as premium from its profile', async () => {
    profileRow = { subscription_status: 'pro', subscription_end_date: future.toISOString() }
    const state = await getTrialState()
    expect(state.isPremium).toBe(true)
  })

  it('shows a countdown when the profile says trialing', async () => {
    profileRow = { subscription_status: 'trialing', subscription_end_date: future.toISOString() }
    const state = await getTrialState()
    expect(state.trialEndsAt?.toISOString()).toBe(future.toISOString())
    expect(state.isPremium).toBe(false)
  })

  it('claims no countdown it cannot evidence', async () => {
    // 'pro' covers both a no-card trial and a paid plan, so a profile-only
    // account gets premium, not a trial clock that may be wrong.
    profileRow = { subscription_status: 'pro', subscription_end_date: future.toISOString() }
    const state = await getTrialState()
    expect(state.trialEndsAt).toBeNull()
  })
})

// ─── Nothing is over-claimed ────────────────────────────────────────────

describe('what the fallback refuses', () => {
  it('shows nothing once the period has passed', async () => {
    profileRow = { subscription_status: 'pro', subscription_end_date: past.toISOString() }
    expect(await showsNothing()).toBe(true)
  })

  it('shows nothing with no end date, rather than guessing one', async () => {
    profileRow = { subscription_status: 'pro', subscription_end_date: null }
    expect(await showsNothing()).toBe(true)
  })

  it.each(['free', 'cancelled', 'past_due', ''])('shows nothing for a %s profile', async (s) => {
    profileRow = { subscription_status: s, subscription_end_date: future.toISOString() }
    expect(await showsNothing()).toBe(true)
  })

  it('shows nothing when there is no profile either', async () => {
    profileRow = null
    expect(await showsNothing()).toBe(true)
  })

  it('shows nothing when nobody is signed in', async () => {
    authUser = null
    expect(await showsNothing()).toBe(true)
  })
})

// ─── The Prisma row still wins where it exists ──────────────────────────

describe('an account that does have a Prisma row', () => {
  beforeEach(() => {
    mockUserFindUnique.mockResolvedValue({ id: 'cuid-1' })
  })

  it('uses it, because only it distinguishes a trial from a paid plan', async () => {
    mockSubFindUnique.mockResolvedValue({
      status: 'TRIALING',
      currentPeriodEnd: future,
      cancelledAt: null,
    })
    // A profile saying 'pro' must not override a Prisma row saying TRIALING.
    profileRow = { subscription_status: 'pro', subscription_end_date: future.toISOString() }
    const state = await getTrialState()
    expect(state.trialEndsAt?.toISOString()).toBe(future.toISOString())
    expect(state.isPremium).toBe(false)
  })

  it('reports premium for an ACTIVE row', async () => {
    mockSubFindUnique.mockResolvedValue({
      status: 'ACTIVE',
      currentPeriodEnd: future,
      cancelledAt: null,
    })
    const state = await getTrialState()
    expect(state.isPremium).toBe(true)
    expect(state.trialEndsAt).toBeNull()
  })

  it('does not claim premium for PAST_DUE, which is losing access', async () => {
    mockSubFindUnique.mockResolvedValue({
      status: 'PAST_DUE',
      currentPeriodEnd: future,
      cancelledAt: null,
    })
    expect((await getTrialState()).isPremium).toBe(false)
  })

  it('hides an expired trial rather than taunting the user', async () => {
    mockSubFindUnique.mockResolvedValue({
      status: 'TRIALING',
      currentPeriodEnd: past,
      cancelledAt: null,
    })
    expect(await showsNothing()).toBe(true)
  })
})

// ─── It must never break the page it mounts on ──────────────────────────

describe('failure', () => {
  it('returns empty rather than throwing when Prisma is unreachable', async () => {
    mockUserFindUnique.mockRejectedValue(new Error('connection refused'))
    expect(await showsNothing()).toBe(true)
    // And it must report 'unknown', not a definite answer: telling somebody
    // their trial ended because Prisma timed out is worse than saying nothing.
    expect((await getTrialState()).kind).toBe('unknown')
  })
})
