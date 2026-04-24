/**
 * Grandfathering helpers — closes R-031.
 *
 * Existing Early Access subscribers keep their signup price forever, even
 * after the August 2026 Standard pricing rollover takes effect. Capture
 * logic lives here; renewal preservation is enforced by webhook handlers
 * that never overwrite `grandfatheredPriceMinor` on RENEWAL events.
 *
 * All amounts in this module are **minor units** (pence). `PRICING`
 * constants in `src/constants/pricing.ts` are in major units (£) — we
 * convert once, here, so the rest of the codebase is unit-consistent.
 */

import { PRICING } from '@/constants/pricing'

// ─── Types ─────────────────────────────────────────────────────────────

export type PricingTier =
  | 'early_access'
  | 'standard'
  | 'founding_school'
  | 'founding_legacy'

export type Plan = 'MONTHLY' | 'ANNUAL'
export type Role = 'student' | 'teacher'

// ─── Rollover date ─────────────────────────────────────────────────────
//
// Canonical source of truth for when Standard pricing takes effect. The
// copy string `PRICING.PRICE_INCREASE_DATE` is "August 2026" — we pin
// the first of that month, 00:00 UTC, for comparisons.
export const PRICE_INCREASE_DATE: Date = new Date('2026-08-01T00:00:00.000Z')

// ─── poundsToMinor ─────────────────────────────────────────────────────
//
// `PRICING` values are plain JS numbers in pounds (e.g. 3.99). Naively
// multiplying by 100 can produce floating-point artefacts (3.99 * 100 =
// 398.99999…). Round to the nearest integer.
function poundsToMinor(amount: number): number {
  return Math.round(amount * 100)
}

// ─── priceForTier ──────────────────────────────────────────────────────
//
// Returns the locked price in minor units for a given plan + tier + role.
// Schools are not sold in-app (see SUBSCRIPTION_AND_ENTITLEMENTS.md §
// "School plans — not sold in-app"); the `founding_school` /
// `founding_legacy` tiers exist for completeness and reporting parity.
export function priceForTier(plan: Plan, tier: PricingTier, role: Role): number {
  if (tier === 'early_access') {
    if (role === 'teacher') {
      return poundsToMinor(plan === 'MONTHLY' ? PRICING.TEACHER_MONTHLY : PRICING.TEACHER_ANNUAL)
    }
    return poundsToMinor(plan === 'MONTHLY' ? PRICING.STUDENT_MONTHLY : PRICING.STUDENT_ANNUAL)
  }

  if (tier === 'standard') {
    if (role === 'teacher') {
      return poundsToMinor(
        plan === 'MONTHLY' ? PRICING.TEACHER_MONTHLY_STANDARD : PRICING.TEACHER_ANNUAL_STANDARD,
      )
    }
    return poundsToMinor(
      plan === 'MONTHLY' ? PRICING.STUDENT_MONTHLY_STANDARD : PRICING.STUDENT_ANNUAL_STANDARD,
    )
  }

  if (tier === 'founding_school') {
    // School licences are annual-only; `plan` is ignored for school tiers.
    return poundsToMinor(PRICING.FOUNDER_SCHOOL_MIN)
  }

  if (tier === 'founding_legacy') {
    return poundsToMinor(PRICING.FOUNDER_SCHOOL_LEGACY)
  }

  // `tier` is narrowed by the union but the runtime fall-through keeps us
  // safe against a future tier added to the union without a case here.
  const _exhaustive: never = tier
  void _exhaustive
  throw new Error(`Unknown pricing tier: ${tier as string}`)
}

// ─── resolveTierAtSignup ───────────────────────────────────────────────
//
// Early Access if `now` is strictly before the rollover date, Standard
// otherwise. Exported for the back-fill script's "present-day" check and
// directly by webhook handlers.
export function resolveTierAtSignup(now: Date): Extract<PricingTier, 'early_access' | 'standard'> {
  return now.getTime() < PRICE_INCREASE_DATE.getTime() ? 'early_access' : 'standard'
}

// ─── captureGrandfatherFields ──────────────────────────────────────────
//
// Convenience bundler used by webhook handlers. Returns the three fields
// webhooks write onto a new Subscription row.
export interface GrandfatherCapture {
  grandfatheredPriceMinor: number
  grandfatheredCurrency: string
  pricingTier: PricingTier
}

export function captureGrandfatherFields(
  plan: Plan,
  role: Role,
  now: Date = new Date(),
): GrandfatherCapture {
  const tier = resolveTierAtSignup(now)
  return {
    grandfatheredPriceMinor: priceForTier(plan, tier, role),
    grandfatheredCurrency: 'GBP',
    pricingTier: tier,
  }
}
