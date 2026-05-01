/**
 * POST /api/promo/redeem
 *
 * Authenticated endpoint that redeems a promo code by creating a discounted
 * Stripe Checkout Session for the web-only redemption flow. This is the
 * compliant path for mobile users to benefit from promo pricing: they open
 * the web redeem page (see `src/app/redeem/page.tsx`), enter their code,
 * complete Stripe Checkout, and then see entitlement sync onto the mobile
 * device automatically through the existing `/api/me/entitlements` pipeline.
 *
 * Apple § 3.1.1 anchor. The in-app mobile experience never carries a discount
 * surface; the mobile Promo Code Copy merely directs the user here. See
 * `english-hub-mobile/docs/PROMO_CODE_COMPLIANCE.md` for the full rationale.
 *
 * Request body:
 *   `{ code: string, productId: string }`
 *
 * On success:
 *   `{ url: string }` — the Stripe Checkout Session URL to redirect to.
 *
 * Reconciliation continues via the existing Stripe webhook: on
 * `checkout.session.completed` the `Subscription` row is populated, and
 * mobile reads entitlement via `/api/me/entitlements` on next foreground.
 */

import { NextRequest } from 'next/server'
import Stripe from 'stripe'

import {
  badRequestResponse,
  errorResponse,
  rateLimitResponse,
  serverErrorResponse,
  successResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import { PRICING } from '@/constants/pricing'
import { getClientIp, rateLimit } from '@/lib/rate-limit'
import { PRICE_IDS, stripe } from '@/lib/stripe'
import { createServerSupabaseClient } from '@/lib/supabase/server'

/** Maximum permitted code length; matches the validate endpoint. */
const MAX_CODE_LENGTH = 64
const CODE_REGEX = /^[A-Z0-9_-]{3,64}$/

/**
 * Internal map of the stable product identifiers returned by
 * `/api/promo/validate` to the configured Stripe price IDs. Keeping this
 * here (rather than exposing price IDs to the client) means the client can
 * never forge a price, and it mirrors the same pattern used in
 * `/api/stripe/checkout`.
 */
function resolveStripePriceId(productId: string): string | null {
  switch (productId) {
    case 'student_annual':
      return PRICE_IDS.PRO_ANNUAL
    default:
      return null
  }
}

/**
 * MVP allowlist — duplicated from `validate/route.ts` so the two routes can
 * evolve independently. Once a `promo_codes` table exists this moves to a
 * shared helper. ASSUMPTION: table not yet in place.
 *
 * `finalAmountPennies` is the unit amount to charge AFTER the discount, not
 * the discount itself — Stripe's `price_data` works on the final amount for
 * one-off sessions. For `2026ENGLISH`, the canonical figure is
 * STUDENT_ANNUAL_WITH_CODE (£20 → 2000p), taking the £29.99 base down by the
 * STUDENT_ANNUAL_SAVINGS amount (£9.99). Sourced from
 * `src/constants/pricing.ts` so any future price change cascades here.
 */
interface RedemptionRule {
  readonly finalAmountPennies: number
  readonly allowedProductIds: readonly string[]
  /** Shown on the Stripe Checkout line item. */
  readonly description: string
}

const REDEMPTION_RULES: Readonly<Record<string, RedemptionRule>> = Object.freeze({
  [PRICING.AFFILIATE_PROMO_CODE]: {
    finalAmountPennies: Math.round(PRICING.STUDENT_ANNUAL_WITH_CODE * 100),
    allowedProductIds: ['student_annual'],
    description: `The English Hub — Student Annual (promo ${PRICING.AFFILIATE_PROMO_CODE})`,
  },
})

interface RedeemRequestBody {
  code?: string
  productId?: string
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit — 10 per IP per 5 minutes; matches the main checkout route.
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`promo-redeem:${ip}`, {
      limit: 10,
      windowSeconds: 300,
    })
    if (!rl.success) {
      return rateLimitResponse(rl.resetAt)
    }

    let body: RedeemRequestBody
    try {
      body = (await request.json()) as RedeemRequestBody
    } catch {
      return badRequestResponse('Invalid request body.')
    }

    const rawCode = body.code
    const rawProduct = body.productId
    if (typeof rawCode !== 'string' || typeof rawProduct !== 'string') {
      return badRequestResponse('`code` and `productId` are required strings.')
    }

    const code = rawCode.trim().toUpperCase()
    const productId = rawProduct.trim()
    if (code.length === 0 || code.length > MAX_CODE_LENGTH || !CODE_REGEX.test(code)) {
      return badRequestResponse('Invalid promo code format.')
    }
    if (productId.length === 0 || productId.length > 64) {
      return badRequestResponse('Invalid productId.')
    }

    const rule = REDEMPTION_RULES[code]
    if (!rule) {
      // ASSUMPTION: In a later iteration this branch will consult Rewardful
      // for arbitrary affiliate-issued promo codes. For MVP only the
      // hard-coded allowlist is honoured.
      return errorResponse('Unknown or expired promo code.', 404)
    }
    if (!rule.allowedProductIds.includes(productId)) {
      return errorResponse('This promo code does not apply to the selected plan.', 400)
    }

    const priceId = resolveStripePriceId(productId)
    if (priceId === null) {
      return errorResponse('Unknown productId.', 400)
    }

    // Authenticate — the redeem flow requires a signed-in Supabase user so
    // the Stripe customer can be bound to a Supabase userId. The web redeem
    // page routes unauthenticated users through sign-up before reaching here.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError !== null || user === null) {
      return unauthorizedResponse()
    }

    // Get / create Stripe customer — same pattern as /api/stripe/checkout.
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()
    if (profileError) {
      console.error('[api/promo/redeem] profile lookup failed:', profileError)
      return serverErrorResponse('Failed to load user profile.')
    }

    let stripeCustomerId: string | null = profile?.stripe_customer_id ?? null
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
        console.error('[api/promo/redeem] profile update failed:', updateError)
        return serverErrorResponse('Failed to link Stripe customer.')
      }
    }

    // Build a Checkout Session with a discounted unit amount. We use
    // `price_data` so the discount is baked into the line item rather than
    // relying on Stripe coupons — this keeps the route self-contained and
    // auditable for each code.
    const appUrl = process.env.NEXT_PUBLIC_APP_URL
    if (!appUrl) {
      return serverErrorResponse('App URL is not configured.')
    }

    const successUrl = `${appUrl}/redeem/success?session_id={CHECKOUT_SESSION_ID}&code=${encodeURIComponent(code)}`
    const cancelUrl = `${appUrl}/redeem?cancelled=1`

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      customer: stripeCustomerId,
      mode: 'subscription',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'gbp',
            unit_amount: rule.finalAmountPennies,
            recurring: { interval: 'year' },
            product_data: {
              name: rule.description,
              metadata: {
                promoCode: code,
                productId,
                basePriceId: priceId,
              },
            },
          },
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        userId: user.id,
        promoCode: code,
        productId,
        flow: 'promo_redeem',
      },
      subscription_data: {
        metadata: {
          userId: user.id,
          promoCode: code,
          productId,
          flow: 'promo_redeem',
        },
      },
      // Deliberately NOT setting `allow_promotion_codes: true` here — the
      // promo is already applied via `unit_amount`.
    }

    const session = await stripe.checkout.sessions.create(sessionParams)
    if (!session.url) {
      return serverErrorResponse('Stripe did not return a Checkout URL.')
    }

    return successResponse({ url: session.url })
  } catch (error) {
    console.error('[api/promo/redeem] unexpected error:', error)
    if (error instanceof Stripe.errors.StripeError) {
      return errorResponse('Payment processing error. Please try again.', error.statusCode ?? 500)
    }
    return serverErrorResponse()
  }
}
