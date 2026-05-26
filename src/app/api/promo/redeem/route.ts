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
 *   `{ url: string }` - the Stripe Checkout Session URL to redirect to.
 *
 * Reconciliation continues via the existing Stripe webhook: on
 * `checkout.session.completed` the `Subscription` row is populated, and
 * mobile reads entitlement via `/api/me/entitlements` on next foreground.
 */

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

import {
  badRequestResponse,
  errorResponse,
  rateLimitResponse,
  serverErrorResponse,
  successResponse,
  unauthorizedResponse,
} from '@/lib/api-response'
import {
  assertEmailVerifiedFor,
  PolicyError,
  emailVerificationRequiredResponse,
} from '@/lib/auth/email-verification-policy'
import { PRICING } from '@/constants/pricing'
import { getClientIp, rateLimit } from '@/lib/rate-limit'
import { PRICE_IDS, stripe } from '@/lib/stripe'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

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
    case 'teacher_annual':
      // Teacher Annual price IDs live under STRIPE_PRICE_TEACHER_ANNUAL
      // (resolved server-side in /api/stripe/checkout). For the redeem
      // flow we use Stripe's price_data with a custom unit_amount, so
      // we don't strictly need the price ID here - but we still return
      // one as a `basePriceId` reference in the line-item metadata for
      // reporting / audit. The PRO_ANNUAL fallback is fine when a
      // dedicated TEACHER env var isn't present in this environment.
      return process.env.STRIPE_PRICE_TEACHER_ANNUAL || PRICE_IDS.PRO_ANNUAL
    default:
      return null
  }
}

/**
 * Per-product pricing for redeemed codes. Sourced from
 * `src/constants/pricing.ts` so a single change in the constants module
 * cascades through validate, redeem, and the UI.
 *
 * `finalAmountPennies` is the unit amount to charge AFTER the discount,
 * not the discount itself - Stripe's `price_data` works on the final
 * amount for one-off sessions.
 */
interface ProductPricing {
  readonly finalAmountPennies: number
  /** Shown on the Stripe Checkout line item. */
  readonly description: string
}

interface RedemptionRule {
  /** Allowed product IDs for this code. */
  readonly allowedProductIds: readonly string[]
  /** Final price + line-item description per product. */
  readonly productPricing: Readonly<Record<string, ProductPricing>>
}

const REDEMPTION_RULES: Readonly<Record<string, RedemptionRule>> = Object.freeze({
  [PRICING.AFFILIATE_PROMO_CODE]: {
    // The same code unlocks the Student Annual £20/yr rate AND the
    // Teacher Annual £58/yr rate (both are flat £9.99 off the standard
    // early-access price). Both earn affiliate commission via the
    // webhook's recordCodeBasedConversion.
    allowedProductIds: ['student_annual', 'teacher_annual'],
    productPricing: {
      student_annual: {
        finalAmountPennies: Math.round(PRICING.STUDENT_ANNUAL_WITH_CODE * 100),
        description: `The English Hub - Student Annual (promo ${PRICING.AFFILIATE_PROMO_CODE})`,
      },
      teacher_annual: {
        finalAmountPennies: Math.round(PRICING.TEACHER_ANNUAL_WITH_CODE * 100),
        description: `The English Hub - Teacher Annual (promo ${PRICING.AFFILIATE_PROMO_CODE})`,
      },
    },
  },
})

interface RedeemRequestBody {
  code?: string
  productId?: string
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit - 10 per IP per 5 minutes; matches the main checkout route.
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

    // Two-tier resolution for codes:
    // 1. Hardcoded allowlist (only `2026ENGLISH` for MVP) - every user can
    //    use these regardless of attribution.
    // 2. Active affiliate codes from `affiliate_accounts` (Supabase). When
    //    a partner self-enrols via /affiliates, they get a code which
    //    SHOULD redeem the same Student Annual £20/year rate as the
    //    public code. The original implementation never looked here, so
    //    every affiliate code returned "Unknown or expired".
    let rule: RedemptionRule | undefined = REDEMPTION_RULES[code]
    let attributedAffiliateId: string | null = null

    if (!rule) {
      // Look up the code in affiliate_accounts. We use the service-role
      // client because the table is RLS-locked and this endpoint is
      // authenticated via Supabase user - the user themselves doesn't
      // own the affiliate row, so the standard client can't read it.
      try {
        const adminClient = createServiceRoleClient()
        const { data: affiliate } = await adminClient
          .from('affiliate_accounts')
          .select('id, code, status')
          .eq('code', code)
          .eq('status', 'active')
          .maybeSingle()

        if (affiliate) {
          attributedAffiliateId = affiliate.id
          // Affiliates redeem the same Student Annual + Teacher Annual
          // rules as the public 2026ENGLISH code. Product gating and
          // pricing identical; only the line-item description carries
          // the affiliate's code (replacing the public-promo wording)
          // so refunds can trace back to the affiliate cleanly.
          const baseRule = REDEMPTION_RULES[PRICING.AFFILIATE_PROMO_CODE]
          if (baseRule) {
            rule = {
              allowedProductIds: baseRule.allowedProductIds,
              productPricing: {
                student_annual: {
                  finalAmountPennies: baseRule.productPricing.student_annual.finalAmountPennies,
                  description: `The English Hub - Student Annual (affiliate ${code})`,
                },
                teacher_annual: {
                  finalAmountPennies: baseRule.productPricing.teacher_annual.finalAmountPennies,
                  description: `The English Hub - Teacher Annual (affiliate ${code})`,
                },
              },
            }
          }
        }
      } catch (lookupErr) {
        console.error('[api/promo/redeem] affiliate lookup failed:', lookupErr)
        // Fall through to the "unknown code" path below - never let an
        // affiliate-table outage block the public 2026ENGLISH redemption.
      }
    }

    if (!rule) {
      return errorResponse('Unknown or expired promo code.', 404)
    }
    if (!rule.allowedProductIds.includes(productId)) {
      return errorResponse('This promo code does not apply to the selected plan.', 400)
    }
    const productPricing = rule.productPricing[productId]
    if (!productPricing) {
      // Should be unreachable when allowedProductIds and productPricing
      // stay in sync, but guard defensively in case of a future config
      // drift between the two maps.
      return errorResponse('This promo code does not apply to the selected plan.', 400)
    }

    const priceId = resolveStripePriceId(productId)
    if (priceId === null) {
      return errorResponse('Unknown productId.', 400)
    }

    // Authenticate - the redeem flow requires a signed-in Supabase user so
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

    // Soft-verification gate: parity with /api/stripe/checkout. Money is
    // about to move, so the user must have a verified email first. Policy
    // lives in src/lib/auth/email-verification-policy.ts.
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

    // Get / create Stripe customer - same pattern as /api/stripe/checkout.
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

    // Test → Live migration safety net (matches /api/stripe/checkout): a
    // stripe_customer_id stored while we were running with sk_test_… keys
    // does NOT exist in the live-mode account. Verify before use and
    // re-link if stale.
    if (stripeCustomerId) {
      try {
        await stripe.customers.retrieve(stripeCustomerId)
      } catch (verifyErr) {
        if (
          verifyErr instanceof Stripe.errors.StripeError &&
          verifyErr.code === 'resource_missing'
        ) {
          console.warn(
            `[api/promo/redeem] Stale customer ${stripeCustomerId} for user ${user.id} - likely created in test mode. Re-linking.`,
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
        console.error('[api/promo/redeem] profile update failed:', updateError)
        return serverErrorResponse('Failed to link Stripe customer.')
      }
    }

    // Build a Checkout Session with a discounted unit amount. We use
    // `price_data` so the discount is baked into the line item rather than
    // relying on Stripe coupons - this keeps the route self-contained and
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
            unit_amount: productPricing.finalAmountPennies,
            recurring: { interval: 'year' },
            product_data: {
              name: productPricing.description,
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
        // Attribute the redemption to the affiliate who issued the code
        // when applicable, so the webhook (handleCheckoutCompleted) can
        // credit commission. Empty string for the public 2026ENGLISH path
        // since Stripe metadata only accepts strings - null isn't allowed.
        affiliateId: attributedAffiliateId ?? '',
      },
      subscription_data: {
        metadata: {
          userId: user.id,
          promoCode: code,
          productId,
          flow: 'promo_redeem',
          affiliateId: attributedAffiliateId ?? '',
        },
      },
      // Deliberately NOT setting `allow_promotion_codes: true` here - the
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
