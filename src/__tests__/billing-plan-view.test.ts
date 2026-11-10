import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { billingPlanView } from '@/lib/billing/billing-plan-view'

/**
 * /account/billing for a no-card trialist.
 *
 * THE DEFECT (found 10 November 2026). The trial writes 'pro' to the profile,
 * the same as a payer, so the billing page showed every trialist "Premium",
 * "Renews {trial end}" and only a "Manage Subscription" button, which opens
 * the Stripe portal and errors for anyone without a Stripe customer. The page
 * a trialist visits to pay offered no way to pay.
 */

describe('billingPlanView', () => {
  it('calls a pro profile with no Stripe customer a trial', () => {
    expect(billingPlanView({ subscription_status: 'pro', stripe_customer_id: null })).toBe('trial')
  })

  it('calls a pro profile that has been through checkout premium', () => {
    expect(billingPlanView({ subscription_status: 'pro', stripe_customer_id: 'cus_1' })).toBe(
      'premium',
    )
  })

  it('keeps a cancelled payer cancelled', () => {
    expect(billingPlanView({ subscription_status: 'cancelled', stripe_customer_id: 'cus_1' })).toBe(
      'cancelled',
    )
  })

  it('treats free, past due, missing and unknown as free', () => {
    expect(billingPlanView({ subscription_status: 'free', stripe_customer_id: null })).toBe('free')
    expect(billingPlanView({ subscription_status: 'past_due', stripe_customer_id: 'cus_1' })).toBe(
      'free',
    )
    expect(billingPlanView(null)).toBe('free')
    expect(billingPlanView(undefined)).toBe('free')
  })
})

describe('the billing page', () => {
  const src = readFileSync(join(process.cwd(), 'src/app/account/billing/page.tsx'), 'utf8')

  it('decides the plan from billingPlanView, not from the status alone', () => {
    expect(src).toContain('billingPlanView(profile)')
    expect(src).not.toMatch(/const isPro = profile\?\.subscription_status === 'pro'/)
  })

  it('offers the portal only to people with something to manage', () => {
    expect(src).toContain('{isPro || isCancelled ? (')
  })

  it('names the trial and its end date', () => {
    expect(src).toContain("t('account.billing.plan_trial')")
    expect(src).toContain("t('account.billing.trial_ends')")
    expect(src).toContain("t('account.billing.trial_blurb')")
  })
})
