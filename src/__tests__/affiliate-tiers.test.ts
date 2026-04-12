import { describe, it, expect } from 'vitest'
import {
  getTierForReferralCount,
  getCommissionRate,
  calculateCommissionPence,
  calculateCommissionGbp,
  TIERS,
} from '@/lib/affiliate/tiers'

// ── getTierForReferralCount ──────────────────────────────────────────────────

describe('getTierForReferralCount', () => {
  it('returns Bronze for 0 referrals', () => {
    const info = getTierForReferralCount(0)
    expect(info.tier).toBe('bronze')
    expect(info.label).toBe('Bronze')
  })

  it('returns Bronze for 4 referrals (upper boundary)', () => {
    expect(getTierForReferralCount(4).tier).toBe('bronze')
  })

  it('returns Silver for 5 referrals (lower boundary)', () => {
    expect(getTierForReferralCount(5).tier).toBe('silver')
  })

  it('returns Silver for 24 referrals (upper boundary)', () => {
    expect(getTierForReferralCount(24).tier).toBe('silver')
  })

  it('returns Gold for 25 referrals (lower boundary)', () => {
    expect(getTierForReferralCount(25).tier).toBe('gold')
  })

  it('returns Gold for very high counts', () => {
    expect(getTierForReferralCount(1000).tier).toBe('gold')
  })

  it('clamps negative counts to Bronze', () => {
    expect(getTierForReferralCount(-5).tier).toBe('bronze')
  })

  it('floors fractional counts', () => {
    // 4.9 floors to 4 -> Bronze
    expect(getTierForReferralCount(4.9).tier).toBe('bronze')
    // 5.1 floors to 5 -> Silver
    expect(getTierForReferralCount(5.1).tier).toBe('silver')
  })

  it('includes nextTier info for Bronze', () => {
    const info = getTierForReferralCount(2)
    expect(info.nextTier).toBe('silver')
    expect(info.referralsToNextTier).toBe(3) // 5 - 2
  })

  it('includes nextTier info for Silver', () => {
    const info = getTierForReferralCount(10)
    expect(info.nextTier).toBe('gold')
    expect(info.referralsToNextTier).toBe(15) // 25 - 10
  })

  it('has no nextTier for Gold', () => {
    const info = getTierForReferralCount(30)
    expect(info.nextTier).toBeNull()
    expect(info.referralsToNextTier).toBeNull()
  })
})

// ── getCommissionRate ────────────────────────────────────────────────────────

describe('getCommissionRate', () => {
  it('returns 10% for Bronze tier (0-4 referrals)', () => {
    expect(getCommissionRate(0)).toBe(0.1)
    expect(getCommissionRate(4)).toBe(0.1)
  })

  it('returns 15% for Silver tier (5-24 referrals)', () => {
    expect(getCommissionRate(5)).toBe(0.15)
    expect(getCommissionRate(24)).toBe(0.15)
  })

  it('returns 25% for Gold tier (25+ referrals)', () => {
    expect(getCommissionRate(25)).toBe(0.25)
    expect(getCommissionRate(100)).toBe(0.25)
  })
})

// ── calculateCommissionPence ─────────────────────────────────────────────────

describe('calculateCommissionPence', () => {
  it('calculates 10% of 1000p for Bronze', () => {
    expect(calculateCommissionPence(1000, 0)).toBe(100)
  })

  it('calculates 15% of 1000p for Silver', () => {
    expect(calculateCommissionPence(1000, 10)).toBe(150)
  })

  it('calculates 25% of 1000p for Gold', () => {
    expect(calculateCommissionPence(1000, 30)).toBe(250)
  })

  it('rounds to nearest penny', () => {
    // 10% of 999 = 99.9 -> rounds to 100
    expect(calculateCommissionPence(999, 0)).toBe(100)
    // 15% of 101 = 15.15 -> rounds to 15
    expect(calculateCommissionPence(101, 5)).toBe(15)
  })

  it('returns 0 for 0 sale amount', () => {
    expect(calculateCommissionPence(0, 10)).toBe(0)
  })
})

// ── calculateCommissionGbp ───────────────────────────────────────────────────

describe('calculateCommissionGbp', () => {
  it('calculates 10% of GBP 10.00 for Bronze', () => {
    expect(calculateCommissionGbp(10, 0)).toBe(1)
  })

  it('calculates 15% of GBP 20.00 for Silver', () => {
    expect(calculateCommissionGbp(20, 10)).toBe(3)
  })

  it('calculates 25% of GBP 40.00 for Gold', () => {
    expect(calculateCommissionGbp(40, 30)).toBe(10)
  })

  it('rounds to 2 decimal places', () => {
    // 10% of 9.99 = 0.999 -> 1.00
    expect(calculateCommissionGbp(9.99, 0)).toBe(1)
    // 15% of 1.01 = 0.1515 -> 0.15
    expect(calculateCommissionGbp(1.01, 5)).toBe(0.15)
  })

  it('returns 0 for 0 sale amount', () => {
    expect(calculateCommissionGbp(0, 25)).toBe(0)
  })
})
