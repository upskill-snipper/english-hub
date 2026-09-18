import { describe, it, expect, vi, beforeEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Day 8, and the customer it must never be shown to.
 *
 * THE DEFECT (19 September 2026). The trial countdown banner hides the moment
 * the trial end is in the past, and nothing replaced it. So at 04:15 the expiry
 * cron flipped the account to free and the dashboard simply went quiet - no
 * banner, no explanation, and the AI marking link still sitting there ungated,
 * ready to refuse them. That is the exact moment a trialist decides whether to
 * pay, and the product had nothing to say.
 *
 * THE HAZARD IN FIXING IT, which is what most of this file is about.
 *
 * Prisma's SubscriptionStatus is UPPERCASE (ACTIVE | CANCELLED | PAST_DUE |
 * TRIALING | PAUSED) and subscription-sync maps Stripe's `canceled` to
 * CANCELLED and `past_due` to PAST_DUE. On status and dates alone, a LAPSED
 * PAYER is indistinguishable from an expired trialist: not premium, period end
 * in the past. Classify naively and you tell somebody who paid you money that
 * their "free trial has ended".
 *
 * `stripeSubscriptionId === null` is what separates them - a no-card trial has
 * no Stripe subscription behind it. The profile fallback has no Prisma row to
 * read, so it uses `stripe_customer_id` for the same purpose: production holds
 * 4 payers against 3 Prisma Subscription rows, so at least one payer DOES
 * reach that path.
 */

let authUser: { id: string; email: string } | null = { id: 'uuid-1', email: 'a@b.com' }
let profileRow: Record<string, unknown> | null = null

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: authUser }, error: null }) },
    from: () => ({
      select: () => ({ eq: () => ({ single: async () => ({ data: profileRow, error: null }) }) }),
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

const past = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
const future = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)

beforeEach(() => {
  vi.clearAllMocks()
  authUser = { id: 'uuid-1', email: 'a@b.com' }
  profileRow = null
  mockUserFindUnique.mockResolvedValue({ id: 'cuid-1' })
  mockSubFindUnique.mockResolvedValue(null)
})

/** A Prisma Subscription row. `stripeSubscriptionId: null` means a no-card trial. */
function sub(over: Record<string, unknown> = {}) {
  return {
    status: 'TRIALING',
    currentPeriodEnd: past,
    cancelledAt: null,
    stripeSubscriptionId: null,
    ...over,
  }
}

// ─── The fix ────────────────────────────────────────────────────────────

describe('an expired no-card trial', () => {
  it('is named, instead of collapsing to nothing', async () => {
    mockSubFindUnique.mockResolvedValue(sub())
    const s = await getTrialState()
    expect(s.kind).toBe('trial-ended')
    expect(s.isPremium).toBe(false)
  })

  it('carries the date it ended, for the card to state', async () => {
    mockSubFindUnique.mockResolvedValue(sub())
    expect((await getTrialState()).trialEndedAt?.toISOString()).toBe(past.toISOString())
  })
})

// ─── The hazard ─────────────────────────────────────────────────────────

describe('a customer who paid is never told their trial ended', () => {
  it.each(['CANCELLED', 'PAST_DUE', 'ACTIVE', 'PAUSED'])(
    'a lapsed %s subscription with a Stripe id is not a finished trial',
    async (status) => {
      mockSubFindUnique.mockResolvedValue(
        sub({
          status,
          currentPeriodEnd: past,
          stripeSubscriptionId: 'sub_live_1',
          cancelledAt: past,
        }),
      )
      const s = await getTrialState()
      expect(s.kind, `${status} was classified as ${s.kind}`).not.toBe('trial-ended')
      expect(s.trialEndedAt).toBeNull()
    },
  )

  it('does not classify a TRIALING row that had a card behind it', async () => {
    // The 7-day card-on-file trial. It ends by converting to a charge, not by
    // expiring, so "your free trial ended" is the wrong sentence for it.
    mockSubFindUnique.mockResolvedValue(sub({ stripeSubscriptionId: 'sub_card_trial' }))
    expect((await getTrialState()).kind).not.toBe('trial-ended')
  })

  it('is case-insensitive about status, because Prisma stores it uppercase', async () => {
    // The plan as originally written compared against lowercase 'pro'/'active',
    // which no Prisma row can ever match - so every payer fell through to the
    // expired-trial branch.
    mockSubFindUnique.mockResolvedValue(
      sub({ status: 'active', currentPeriodEnd: future, stripeSubscriptionId: 'sub_1' }),
    )
    expect((await getTrialState()).isPremium).toBe(true)
  })
})

describe('the profile fallback, which at least one payer reaches', () => {
  beforeEach(() => {
    mockUserFindUnique.mockResolvedValue(null)
    mockSubFindUnique.mockResolvedValue(null)
  })

  it('names an expired trial when there was never a checkout', async () => {
    profileRow = {
      subscription_status: 'free',
      subscription_end_date: past.toISOString(),
      stripe_customer_id: null,
    }
    expect((await getTrialState()).kind).toBe('trial-ended')
  })

  it('says nothing when the account has been through checkout', async () => {
    // Production has 4 payers and 3 Prisma rows, so this path is live.
    profileRow = {
      subscription_status: 'free',
      subscription_end_date: past.toISOString(),
      stripe_customer_id: 'cus_123',
    }
    const s = await getTrialState()
    expect(s.kind).not.toBe('trial-ended')
  })

  it('reports a live plan as pro', async () => {
    profileRow = {
      subscription_status: 'pro',
      subscription_end_date: future.toISOString(),
      stripe_customer_id: 'cus_123',
    }
    const s = await getTrialState()
    expect(s.kind).toBe('pro')
    expect(s.isPremium).toBe(true)
  })

  it('reports an account that never started a trial', async () => {
    profileRow = {
      subscription_status: 'free',
      subscription_end_date: null,
      stripe_customer_id: null,
    }
    expect((await getTrialState()).kind).toBe('never-trialed')
  })
})

// ─── A failed read must never look like an answer ───────────────────────

describe('unknown', () => {
  it('is what a database failure reports, not a finished trial', async () => {
    // Telling somebody their trial ended because Prisma timed out would be
    // worse than saying nothing, and the banner excludes 'unknown' for exactly
    // that reason.
    mockUserFindUnique.mockRejectedValue(new Error('connection refused'))
    const s = await getTrialState()
    expect(s.kind).toBe('unknown')
    expect(s.trialEndedAt).toBeNull()
  })

  it('is what an unauthenticated request reports', async () => {
    authUser = null
    expect((await getTrialState()).kind).toBe('unknown')
  })
})

// ─── The banner only speaks when it knows something ─────────────────────

describe('the banner wrapper', () => {
  const src = readFileSync(
    join(process.cwd(), 'src/components/billing/TrialCountdownBannerServer.tsx'),
    'utf8',
  )

  it('renders the card for a finished trial', () => {
    expect(src).toContain("kind === 'trial-ended'")
    expect(src).toContain('NotOnProCard')
  })

  it('stays silent on unknown', () => {
    expect(src).not.toContain("kind === 'unknown'")
    expect(src).toContain('return null')
  })

  it('still shows nothing to a paying customer', () => {
    expect(src).toContain('if (isPremium) return null')
  })
})
