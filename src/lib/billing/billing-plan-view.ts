/**
 * Which plan the billing page (/account/billing) should say the person is on.
 *
 * THE DEFECT THIS FIXES (found 10 November 2026). The no-card trial writes
 * `profiles.subscription_status = 'pro'`, the same value a payer has, and the
 * billing page read nothing else. So every trialist was shown "Premium",
 * "Renews" on their trial end date, and one button, "Manage Subscription".
 * That button opens the Stripe customer portal, and /api/stripe/portal answers
 * "No billing account found. Please subscribe first." to anyone who has never
 * been through checkout. A trialist who came to this page to pay found a page
 * telling them they already had a renewing plan, and no way to buy one.
 *
 * The discriminator is the one src/lib/billing/trial-state.ts already uses in
 * its profile fallback: checkout writes `stripe_customer_id` before it sends
 * anyone to Stripe, so 'pro' without it is a no-card trial (or a plan granted
 * outside Stripe, which has no portal to manage either).
 */
export type BillingPlanView = 'premium' | 'trial' | 'cancelled' | 'free'

export function billingPlanView(
  profile:
    | { subscription_status?: string | null; stripe_customer_id?: string | null }
    | null
    | undefined,
): BillingPlanView {
  const status = profile?.subscription_status
  if (status === 'pro') return profile?.stripe_customer_id ? 'premium' : 'trial'
  if (status === 'cancelled') return 'cancelled'
  return 'free'
}
