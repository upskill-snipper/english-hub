import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe, PRICE_IDS, COURSE_PRICE_MAP } from '@/lib/stripe'
import { PRICING } from '@/constants/pricing'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  assertEmailVerifiedFor,
  PolicyError,
  emailVerificationRequiredResponse,
} from '@/lib/auth/email-verification-policy'
import { readAffiliateCookieFromRequest } from '@/lib/affiliate/tracking-cookie'
import { resolveAttribution, DEFAULT_ATTRIBUTION } from '@/lib/affiliate/attribution-v2'

/**
 * Recognised plan identifiers. The legacy `'monthly' | 'annual'` keys
 * resolve to the historical `STRIPE_PRICE_PRO_*` env vars (treated as the
 * Student tier for backward compatibility). The granular `student_*` /
 * `teacher_*` keys honour the dedicated STUDENT/TEACHER env vars when set
 * - falling back to PRO_* when they aren't - so the billing page can drive
 * distinct Student vs Teacher subscriptions without breaking existing
 * deployments that only have the legacy env vars wired up.
 */
type PlanKey =
  | 'monthly'
  | 'annual'
  | 'student_monthly'
  | 'student_annual'
  | 'teacher_monthly'
  | 'teacher_annual'

interface CheckoutRequestBody {
  priceId?: string
  plan?: PlanKey
  courseId?: string
  mode: 'subscription' | 'payment'
  rewardful_referral?: string | null
}

/**
 * Resolve a plan key → Stripe price ID via env vars. The Stripe-sync
 * script (`scripts/stripe-sync-products.ts`) provisions
 * `STRIPE_PRICE_STUDENT_*` and `STRIPE_PRICE_TEACHER_*`, but historically
 * only the `STRIPE_PRICE_PRO_*` pair was wired up. To avoid 500s in
 * environments still on the legacy pair, fall back to PRO_* whenever the
 * tier-specific env var is missing.
 */
function resolvePlanPriceId(plan: PlanKey): string | undefined {
  switch (plan) {
    case 'monthly':
    case 'student_monthly':
      return process.env.STRIPE_PRICE_STUDENT_MONTHLY || process.env.STRIPE_PRICE_PRO_MONTHLY
    case 'annual':
    case 'student_annual':
      return process.env.STRIPE_PRICE_STUDENT_ANNUAL || process.env.STRIPE_PRICE_PRO_ANNUAL
    case 'teacher_monthly':
      return process.env.STRIPE_PRICE_TEACHER_MONTHLY || process.env.STRIPE_PRICE_PRO_MONTHLY
    case 'teacher_annual':
      return process.env.STRIPE_PRICE_TEACHER_ANNUAL || process.env.STRIPE_PRICE_PRO_ANNUAL
    default:
      return undefined
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 10 checkout attempts per IP per 5 minutes
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`checkout:${ip}`, { limit: 10, windowSeconds: 300 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    let body: CheckoutRequestBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }
    const { courseId, mode, rewardful_referral } = body
    let { priceId } = body

    // Resolve plan identifier to a server-side price ID
    if (!priceId && body.plan) {
      priceId = resolvePlanPriceId(body.plan)
    }

    if (!priceId || !mode) {
      return NextResponse.json(
        { error: 'Missing required fields: priceId (or plan) and mode' },
        { status: 400 },
      )
    }

    if (mode !== 'subscription' && mode !== 'payment') {
      return NextResponse.json(
        { error: 'Invalid mode. Must be "subscription" or "payment"' },
        { status: 400 },
      )
    }

    // Sanitize optional metadata fields
    if (courseId && (typeof courseId !== 'string' || courseId.length > 100)) {
      return NextResponse.json({ error: 'Invalid courseId' }, { status: 400 })
    }
    if (
      rewardful_referral &&
      (typeof rewardful_referral !== 'string' || rewardful_referral.length > 200)
    ) {
      return NextResponse.json({ error: 'Invalid referral code' }, { status: 400 })
    }

    // Validate priceId against known price IDs (filter out undefined/empty values).
    // Also accept the granular STUDENT_/TEACHER_ env vars when they are set -
    // the resolver above can produce them, so the validator must too.
    const tierEnvPriceIds = [
      process.env.STRIPE_PRICE_STUDENT_MONTHLY,
      process.env.STRIPE_PRICE_STUDENT_ANNUAL,
      process.env.STRIPE_PRICE_TEACHER_MONTHLY,
      process.env.STRIPE_PRICE_TEACHER_ANNUAL,
    ]
    const validPriceIds = new Set(
      [...Object.values(PRICE_IDS), ...Object.values(COURSE_PRICE_MAP), ...tierEnvPriceIds].filter(
        (id): id is string => typeof id === 'string' && id.length > 0,
      ),
    )
    if (!validPriceIds.has(priceId)) {
      return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
    }

    // Authenticate user
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Soft-verification gate: as of 28 Apr 2026 sign-up no longer requires
    // a verified email, but Stripe checkout still does - this catches
    // typo'd email addresses before any money moves. Policy lives in
    // src/lib/auth/email-verification-policy.ts.
    try {
      assertEmailVerifiedFor('stripe_checkout', user)
    } catch (e) {
      if (e instanceof PolicyError) {
        return NextResponse.json(emailVerificationRequiredResponse('stripe_checkout'), {
          status: 403,
        })
      }
      throw e
    }

    // Get or create Stripe customer
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (profileError) {
      console.error('Failed to fetch profile:', profileError)
      return NextResponse.json({ error: 'Failed to fetch user profile' }, { status: 500 })
    }

    let stripeCustomerId = profile?.stripe_customer_id

    // Test → Live migration safety net: a stripe_customer_id stored while
    // we were running with sk_test_… keys does NOT exist in the live-mode
    // account (Stripe keeps customer records partitioned by mode). When
    // we cut over to sk_live_… keys, every pre-existing profile that has
    // a customer ID will fail the next checkout with
    //   "No such customer: 'cus_xxx'" (resource_missing).
    // We detect the stale ID with a cheap retrieve() call and clear it,
    // letting the create-customer branch below re-link a fresh live
    // customer. Costs one Stripe API call per checkout for users who
    // already have a customer ID - negligible.
    if (stripeCustomerId) {
      try {
        await stripe.customers.retrieve(stripeCustomerId)
      } catch (verifyErr) {
        if (
          verifyErr instanceof Stripe.errors.StripeError &&
          verifyErr.code === 'resource_missing'
        ) {
          console.warn(
            `[api/stripe/checkout] Stale customer ${stripeCustomerId} for user ${user.id} - likely created in test mode. Re-linking.`,
          )
          stripeCustomerId = null
        } else {
          throw verifyErr
        }
      }
    }

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { userId: user.id },
      })

      stripeCustomerId = customer.id

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ stripe_customer_id: stripeCustomerId })
        .eq('id', user.id)

      if (updateError) {
        console.error('Failed to update profile with Stripe customer ID:', updateError)
        return NextResponse.json({ error: 'Failed to link Stripe customer' }, { status: 500 })
      }
    }

    // ── Affiliate cookie attribution ──────────────────────────────────────
    // BUG-1 fix: customers who clicked an affiliate link
    // `theenglishhub.app/?ref=CODE` previously had their attribution
    // dropped here - the `teh_aff` cookie was set by the middleware but
    // nothing read it at checkout time. The webhook only books a
    // conversion for sessions carrying `metadata.affiliateId`, which the
    // standard checkout never set. Result: zero affiliate rows for every
    // link-click attribution path.
    //
    // Fix: read the cookie, run last-touch attribution (30-day window
    // matches `DEFAULT_ATTRIBUTION`), look up the affiliate by code,
    // verify the affiliate is `status='active'`, and stamp the resolved
    // `affiliateId` + `affiliateCode` onto the session metadata. The
    // existing `recordCodeBasedConversion` webhook handler picks it up
    // unchanged and books an `affiliate_conversions` row.
    //
    // Code-typed redemptions go through /api/promo/redeem, never this
    // route, so there's no double-attribution risk.
    let cookieAffiliateId: string | null = null
    let cookieAffiliateCode: string | null = null
    if (mode === 'subscription') {
      try {
        const cookiePayload = readAffiliateCookieFromRequest(request)
        const attribution = resolveAttribution(cookiePayload, DEFAULT_ATTRIBUTION)
        if (attribution.attributed && attribution.ref) {
          const adminClient = createServiceRoleClient()
          const { data: affiliate } = await adminClient
            .from('affiliate_accounts')
            .select('id, code, status')
            .eq('code', attribution.ref)
            .eq('status', 'active')
            .maybeSingle()
          if (affiliate) {
            cookieAffiliateId = affiliate.id
            cookieAffiliateCode = affiliate.code
          }
        }
      } catch (err) {
        // Never let an attribution lookup failure break checkout.
        console.error('[api/stripe/checkout] affiliate cookie attribution failed:', err)
      }
    }

    // Build checkout session params
    const appUrl = process.env.NEXT_PUBLIC_APP_URL!

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      customer: stripeCustomerId,
      line_items: [{ price: priceId, quantity: 1 }],
      mode,
      success_url: `${appUrl}/dashboard?checkout=success`,
      cancel_url: `${appUrl}/courses`,
      metadata: {
        userId: user.id,
        ...(courseId && { courseId }),
        ...(rewardful_referral && { rewardful_referral }),
        // Mirrors the metadata shape /api/promo/redeem stamps so the
        // webhook's recordCodeBasedConversion handler treats both
        // attribution paths identically. `promoCode` here is the
        // affiliate's code (used as the redemption identifier in the
        // conversion's metadata.promoCode field for reporting).
        ...(cookieAffiliateId && {
          affiliateId: cookieAffiliateId,
          promoCode: cookieAffiliateCode!,
        }),
      },
    }

    if (mode === 'subscription') {
      // `allow_promotion_codes: true` was previously enabled, exposing the
      // Stripe-hosted promo field at checkout. That confused users who
      // tried to enter our app-level codes (2026ENGLISH, affiliate
      // codes) - Stripe doesn't know about those and shows "This code is
      // invalid", which reads as "the site is broken". App-level codes
      // are now collected on the pricing page itself and routed through
      // /api/promo/redeem (which bakes the discount into a separate
      // checkout session). Stripe-Dashboard coupons can be applied via
      // the Customer Portal post-purchase if ever needed.
      sessionParams.allow_promotion_codes = false
      sessionParams.subscription_data = {
        trial_period_days: PRICING.TRIAL_DAYS,
        metadata: {
          userId: user.id,
        },
      }
    }

    if (mode === 'payment') {
      sessionParams.payment_intent_data = {
        metadata: {
          userId: user.id,
          ...(courseId && { courseId }),
        },
      }
    }

    const session = await stripe.checkout.sessions.create(sessionParams)

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[api/stripe/checkout] Checkout session error:', error)

    if (error instanceof Stripe.errors.StripeError) {
      // Surface the actual Stripe error message to the client. Stripe's
      // error strings are NOT sensitive - they're things like
      //   "No such price: 'price_xxx'" (env var mismatch with account)
      //   "Invalid API Key provided: sk_live_..." (typo in the key)
      //   "You did not provide an API key" (env var unset / not deployed)
      // Showing them lets the founder/operator pinpoint the
      // misconfiguration without having to dig through Vercel function
      // logs. We also include the Stripe error code where present so
      // support copy can grep on it.
      const stripeMessage = error.message || 'Stripe rejected the request'
      const stripeCode = error.code ? ` (code: ${error.code})` : ''
      return NextResponse.json(
        {
          error: `Payment processing error. Please try again.`,
          stripeMessage: `${stripeMessage}${stripeCode}`,
        },
        { status: error.statusCode ?? 500 },
      )
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
