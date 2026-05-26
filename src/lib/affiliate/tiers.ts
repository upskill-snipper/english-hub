/**
 * Affiliate programme tier logic - flat-rate commissions.
 *
 * 19 April 2026 rewrite:
 *   Previously: percentage-based tiers (bronze 10% / silver 15% / gold 25%)
 *   Now: flat-rate per-signup commissions based on the affiliate's LIFETIME
 *   confirmed-signup count. Aligns with the new £20/year student tier.
 *
 * Tier ladder (lifetime confirmed signups):
 *   Tier 1 - Starter  ·    1-100 signups   →  £5 per signup
 *   Tier 2 - Growing  ·  101-250 signups   →  £6 per signup
 *   Tier 3 - Advanced ·  251-500 signups   →  £7 per signup
 *   Tier 4 - Scaling  ·  501-1,000 signups →  £8 per signup
 *   Tier 5 - Partner  ·  1,001+ signups    →  £10 per signup
 *
 * Mechanics:
 *   - Tier is determined on each confirmed signup by the affiliate's
 *     cumulative count INCLUDING that new signup.
 *   - Confirmed = past the 60-day payout gate (clears the 14-day UK refund
 *     window plus a 46-day clawback buffer).
 *   - Tier counter is LIFETIME (never resets). Commits to the affiliate's
 *     long-term earning trajectory.
 *
 * This file is independent of the legacy integer-tier system at
 * `src/app/api/affiliates/` (plural) which uses Rewardful-style flat rates.
 */

export type AffiliateTier = 'tier-1' | 'tier-2' | 'tier-3' | 'tier-4' | 'tier-5'

export interface TierInfo {
  tier: AffiliateTier
  label: string
  /** Flat commission in pence (integer). */
  commissionPence: number
  /** Flat commission in GBP (for display). */
  commissionGbp: number
  /** First signup number that qualifies for this tier (1-indexed, inclusive). */
  minSignup: number
  /** Last signup number in this tier (inclusive). null = unbounded. */
  maxSignup: number | null
  nextTier: AffiliateTier | null
  signupsToNextTier: number | null
}

/**
 * Tier configuration, in order. Ordered lowest → highest so we can linearly
 * search from the bottom when mapping a signup number to a tier.
 */
export const TIERS = {
  'tier-1': {
    tier: 'tier-1' as const,
    label: 'Starter',
    commissionPence: 500, // £5
    commissionGbp: 5,
    minSignup: 1,
    maxSignup: 100,
  },
  'tier-2': {
    tier: 'tier-2' as const,
    label: 'Growing',
    commissionPence: 600, // £6
    commissionGbp: 6,
    minSignup: 101,
    maxSignup: 250,
  },
  'tier-3': {
    tier: 'tier-3' as const,
    label: 'Advanced',
    commissionPence: 700, // £7
    commissionGbp: 7,
    minSignup: 251,
    maxSignup: 500,
  },
  'tier-4': {
    tier: 'tier-4' as const,
    label: 'Scaling',
    commissionPence: 800, // £8
    commissionGbp: 8,
    minSignup: 501,
    maxSignup: 1000,
  },
  'tier-5': {
    tier: 'tier-5' as const,
    label: 'Partner',
    commissionPence: 1000, // £10
    commissionGbp: 10,
    minSignup: 1001,
    maxSignup: null,
  },
} as const

const TIER_ORDER: AffiliateTier[] = ['tier-1', 'tier-2', 'tier-3', 'tier-4', 'tier-5']

/**
 * Determine the tier for a given lifetime signup number.
 *
 * @param signupNumber  1-indexed ordinal of the signup: 1 for the first
 *                      signup ever, 2 for the second, etc. Pass
 *                      `existingConfirmedCount + 1` when computing the
 *                      commission for a new signup.
 */
export function getTierForSignupNumber(signupNumber: number): TierInfo {
  const n = Math.max(1, Math.floor(signupNumber))

  for (let i = 0; i < TIER_ORDER.length; i++) {
    const tier = TIERS[TIER_ORDER[i]]
    const withinTier = n >= tier.minSignup && (tier.maxSignup === null || n <= tier.maxSignup)
    if (withinTier) {
      const nextKey = TIER_ORDER[i + 1] ?? null
      return {
        ...tier,
        nextTier: nextKey,
        signupsToNextTier: nextKey ? TIERS[nextKey].minSignup - n : null,
      }
    }
  }

  // Fallback (shouldn't hit - tier-5 is unbounded).
  return {
    ...TIERS['tier-5'],
    nextTier: null,
    signupsToNextTier: null,
  }
}

/**
 * Tier info at an affiliate's CURRENT lifetime count. Use this for dashboard
 * progress bars ("You are Tier X, Y more signups to Tier Z").
 *
 * Note: passing `0` returns tier-1 info with 1 signup needed to start earning.
 */
export function getCurrentTierInfo(lifetimeConfirmedCount: number): TierInfo {
  // If they have 0, show them as "at tier 1, 0 signups in".
  if (lifetimeConfirmedCount <= 0) {
    return {
      ...TIERS['tier-1'],
      nextTier: 'tier-2',
      signupsToNextTier: TIERS['tier-2'].minSignup - 1, // Need to reach signup #101 to enter tier 2
    }
  }
  return getTierForSignupNumber(lifetimeConfirmedCount)
}

/**
 * Calculate the commission in pence for a NEW signup given the affiliate's
 * existing confirmed count. This is what the conversion tracker calls.
 *
 * Example:
 *   existingCount = 99  →  new signup is #100  →  tier-1  →  £5  (500p)
 *   existingCount = 100 →  new signup is #101  →  tier-2  →  £6  (600p)
 *   existingCount = 999 →  new signup is #1000 →  tier-4  →  £8  (800p)
 *   existingCount = 1000 → new signup is #1001 →  tier-5  →  £10 (1000p)
 */
export function calculateCommissionPence(existingConfirmedCount: number): number {
  const signupNumber = Math.max(1, Math.floor(existingConfirmedCount) + 1)
  return getTierForSignupNumber(signupNumber).commissionPence
}

/**
 * Same as above but returns GBP (decimal). Display / logging convenience.
 */
export function calculateCommissionGbp(existingConfirmedCount: number): number {
  return calculateCommissionPence(existingConfirmedCount) / 100
}

/**
 * Public-facing tier ladder for rendering on the /affiliates page and the
 * CommissionCalculator component. Ordered ascending. Does NOT include live
 * progress data - use `getCurrentTierInfo` for that.
 */
export const PUBLIC_TIER_LADDER = TIER_ORDER.map((key) => ({
  tier: key,
  label: TIERS[key].label,
  minSignup: TIERS[key].minSignup,
  maxSignup: TIERS[key].maxSignup,
  commissionGbp: TIERS[key].commissionGbp,
  /** Human-readable signup range for display (e.g. "1-100", "1,001+"). */
  range: TIERS[key].maxSignup
    ? `${TIERS[key].minSignup.toLocaleString('en-GB')}-${TIERS[key].maxSignup!.toLocaleString('en-GB')}`
    : `${TIERS[key].minSignup.toLocaleString('en-GB')}+`,
}))
