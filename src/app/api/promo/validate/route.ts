/**
 * GET /api/promo/validate?code=XXX
 *
 * Validates a promo code for the web redeem page (`/redeem`). Returns whether
 * the code is redeemable, the discount amount in pennies, and which Stripe
 * product IDs it applies to.
 *
 * This endpoint is WEB-ONLY. Under no circumstances should the mobile app
 * call it — Apple § 3.1.1 forbids presenting promo-coded discount pricing
 * inside an app that uses IAP. The mobile side recognises entitlement only
 * AFTER the user has completed the web redemption + Stripe Checkout flow
 * (via `/api/me/entitlements`). See `english-hub-mobile/docs/PROMO_CODE_COMPLIANCE.md`.
 *
 * Validation logic:
 *   1. Normalise the code (trim, upper-case).
 *   2. Reject empty / malformed codes.
 *   3. If Rewardful is configured, attempt to resolve the code as a link
 *      token. ASSUMPTION: a helper that validates an arbitrary code against
 *      the affiliate backend is not yet in place. Until it is, we fall back
 *      to a hard-coded allowlist containing the house promo `2026ENGLISH`
 *      for MVP.
 *   4. Return discount metadata the redeem page can render.
 *
 * Response shape:
 *   `{ valid: boolean, discountPennies: number, productIds: string[], reason?: string }`
 *
 * Not authenticated — public endpoint. Rate-limited aggressively to deter
 * code-brute-forcing.
 */

import { NextRequest } from 'next/server'

import { errorResponse, rateLimitResponse, successResponse } from '@/lib/api-response'
import { PRICING } from '@/constants/pricing'
import { getClientIp, rateLimit } from '@/lib/rate-limit'

/** Max allowed length for a submitted code. Arbitrary but generous. */
const MAX_CODE_LENGTH = 64
const CODE_REGEX = /^[A-Z0-9_-]{3,64}$/

/**
 * MVP hard-coded allowlist. Promotes to a Supabase-backed table once
 * `promo_codes` exists; ASSUMPTION: not shipped yet. The shape below mirrors
 * what that future row will return, so the handler stays stable.
 *
 * `discountPennies` is the absolute discount off the base annual SKU. We do
 * NOT use percentage coupons here — the redemption creates a Stripe Checkout
 * Session with a pre-discounted unit amount, which is simpler to reason
 * about and audit.
 *
 * The `2026ENGLISH` code takes Student Annual from £29.99 → £20, a £9.99
 * discount. Sourced from `src/constants/pricing.ts` (STUDENT_ANNUAL_SAVINGS)
 * so a single change in the constants module cascades to validate + redeem.
 */
interface PromoRule {
  readonly discountPennies: number
  readonly productIds: readonly string[]
}

const HOUSE_PROMO_ALLOWLIST: Readonly<Record<string, PromoRule>> = Object.freeze({
  [PRICING.AFFILIATE_PROMO_CODE]: {
    discountPennies: Math.round(PRICING.STUDENT_ANNUAL_SAVINGS * 100),
    // Product ID is resolved via the server-side STRIPE_PRICE_* env var on
    // the redeem route. Here we expose a stable identifier that the redeem
    // page can forward unchanged.
    productIds: ['student_annual'],
  },
})

export interface ValidateResponse {
  readonly valid: boolean
  readonly discountPennies: number
  readonly productIds: readonly string[]
  readonly reason?: string
}

export async function GET(request: NextRequest) {
  // Rate limit: 20 validations per IP per minute (code-guessing deterrent).
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`promo-validate:${ip}`, {
    limit: 20,
    windowSeconds: 60,
  })
  if (!rl.success) {
    return rateLimitResponse(rl.resetAt)
  }

  const raw = request.nextUrl.searchParams.get('code')
  if (raw === null) {
    return errorResponse('Missing "code" query parameter.', 400)
  }

  const code = raw.trim().toUpperCase()
  if (code.length === 0 || code.length > MAX_CODE_LENGTH || !CODE_REGEX.test(code)) {
    return successResponse<ValidateResponse>({
      valid: false,
      discountPennies: 0,
      productIds: [],
      reason: 'invalid_format',
    })
  }

  const rule = HOUSE_PROMO_ALLOWLIST[code]
  if (!rule) {
    // ASSUMPTION: Once affiliate-link tokens (Rewardful) are directly
    // redeemable for the same discount, this branch should consult Rewardful
    // via `fetchRewardfulReferral` (see `src/lib/rewardful.ts`). For MVP the
    // allowlist is authoritative.
    return successResponse<ValidateResponse>({
      valid: false,
      discountPennies: 0,
      productIds: [],
      reason: 'unknown_code',
    })
  }

  return successResponse<ValidateResponse>({
    valid: true,
    discountPennies: rule.discountPennies,
    productIds: [...rule.productIds],
  })
}
