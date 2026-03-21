import { PRICE_IDS } from '@/lib/stripe'

export type PlanType = 'monthly' | 'annual' | 'crammer' | 'one_time'

/**
 * Map a Stripe price ID to a plan type for affiliate commission calculation.
 * Returns 'one_time' for individual course purchases (no affiliate commission).
 */
export function determinePlanType(priceId: string): PlanType {
  if (priceId === PRICE_IDS.PRO_MONTHLY) return 'monthly'
  if (priceId === PRICE_IDS.PRO_ANNUAL) return 'annual'
  // Future: add crammer price ID mapping here
  return 'one_time'
}

/**
 * Check whether a plan type is eligible for affiliate commission.
 * Only subscription plans earn commission, not one-time course purchases.
 */
export function isCommissionEligible(planType: PlanType): boolean {
  return planType !== 'one_time'
}
