/**
 * Affiliate programme tier logic for The English Hub.
 *
 * NOTE: This file powers the NEW per-referral percentage-based tier system
 * exposed under `/api/affiliate/*`. It is intentionally separate from the
 * legacy flat-rate tier system in `src/app/api/affiliates/` (plural), which
 * uses integer tiers 1/2/3 stored in the existing `affiliates` table.
 *
 * Tier ladder (based on total confirmed referrals):
 *   - Bronze:  0–4 referrals   → 10% commission
 *   - Silver:  5–24 referrals  → 15% commission
 *   - Gold:    25+ referrals   → 25% commission
 */

export type AffiliateTier = 'bronze' | 'silver' | 'gold'

export interface TierInfo {
  tier: AffiliateTier
  label: string
  commissionRate: number // decimal, e.g. 0.10 = 10%
  minReferrals: number
  maxReferrals: number | null // null = unbounded
  nextTier: AffiliateTier | null
  referralsToNextTier: number | null
}

export const TIERS = {
  bronze: {
    tier: 'bronze' as const,
    label: 'Bronze',
    commissionRate: 0.1,
    minReferrals: 0,
    maxReferrals: 4,
  },
  silver: {
    tier: 'silver' as const,
    label: 'Silver',
    commissionRate: 0.15,
    minReferrals: 5,
    maxReferrals: 24,
  },
  gold: {
    tier: 'gold' as const,
    label: 'Gold',
    commissionRate: 0.25,
    minReferrals: 25,
    maxReferrals: null,
  },
} as const

/**
 * Determine tier info from a confirmed referral count.
 */
export function getTierForReferralCount(referralCount: number): TierInfo {
  const safeCount = Math.max(0, Math.floor(referralCount))

  if (safeCount >= TIERS.gold.minReferrals) {
    return {
      ...TIERS.gold,
      nextTier: null,
      referralsToNextTier: null,
    }
  }

  if (safeCount >= TIERS.silver.minReferrals) {
    return {
      ...TIERS.silver,
      nextTier: 'gold',
      referralsToNextTier: TIERS.gold.minReferrals - safeCount,
    }
  }

  return {
    ...TIERS.bronze,
    nextTier: 'silver',
    referralsToNextTier: TIERS.silver.minReferrals - safeCount,
  }
}

/**
 * Get the commission rate (decimal) for a given referral count.
 */
export function getCommissionRate(referralCount: number): number {
  return getTierForReferralCount(referralCount).commissionRate
}

/**
 * Calculate commission in minor units (pence) from a sale amount in pence
 * and the affiliate's current referral count.
 */
export function calculateCommissionPence(
  saleAmountPence: number,
  referralCount: number
): number {
  const rate = getCommissionRate(referralCount)
  return Math.round(saleAmountPence * rate)
}

/**
 * Calculate commission in GBP (decimal number) from a sale amount in GBP
 * and the affiliate's current referral count.
 */
export function calculateCommissionGbp(
  saleAmountGbp: number,
  referralCount: number
): number {
  const rate = getCommissionRate(referralCount)
  // Round to 2dp to avoid floating-point tail
  return Math.round(saleAmountGbp * rate * 100) / 100
}
