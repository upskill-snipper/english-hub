/**
 * RevenueCat → Subscription reconciler.
 *
 * Pure async function: given a parsed + validated RevenueCat event and a
 * Prisma client, mutate the corresponding `Subscription` row (or skip
 * gracefully) and return a structured summary. The route handler calls
 * this after journalling; unit tests hit it directly.
 *
 * Schema contract (post `20260420_02_stripe_columns_nullable.sql`):
 *   1. `Subscription.stripeSubscriptionId` and `stripeCustomerId` are
 *      NULLABLE. Mobile rows write `null` for both — the earlier
 *      sentinel workaround (`rc_<appUserId>_<productId>`) is retired.
 *   2. `SubscriptionStatus` includes `PAUSED`. Google Play's
 *      `SUBSCRIPTION_PAUSED` maps here directly rather than overloading
 *      `PAST_DUE`.
 *   3. `Subscription.refundedAt` exists. REFUND / CHARGEBACK events
 *      populate it without overloading `cancelledAt`.
 *   4. `User.supabaseUserId` is nullable; legacy users may lack it. We
 *      look up by `supabaseUserId` first, then fall back to `User.id`
 *      (cuid) so mobile clients that `logIn(user.id)` still reconcile.
 */

import type { PrismaClient, Subscription } from '@prisma/client'
import { SubscriptionPlan, SubscriptionStatus } from '@prisma/client'
import type { RevenueCatEvent } from './events'
import { captureGrandfatherFields } from '@/lib/pricing/grandfather'

// `SubscriptionPlatform` lives in the Prisma client but the generator
// is owned by a sibling agent; to remain resilient during the rollout
// window where the migration has landed but the client hasn't been
// regenerated yet, we reference the enum values by string literal and
// cast through a local type alias. This keeps the code type-safe
// against the Prisma model (which already references the enum column)
// while avoiding an import that may transiently resolve to `undefined`.
type SubscriptionPlatformValue = 'WEB' | 'IOS' | 'ANDROID'
const SubscriptionPlatform = {
  WEB: 'WEB' as SubscriptionPlatformValue,
  IOS: 'IOS' as SubscriptionPlatformValue,
  ANDROID: 'ANDROID' as SubscriptionPlatformValue,
} as const

// ─── Types ─────────────────────────────────────────────────────────────

export interface ReconcileOutcome {
  subscription?: Subscription
  skipped?: boolean
  reason?: string
}

// ─── Product ID → Plan / Teacher mapping ───────────────────────────────
//
// SUBSCRIPTION_AND_ENTITLEMENTS.md § Plans and SKUs — four iOS and four
// Play SKUs. Anything else falls back to MONTHLY, isTeacherPlan=false
// and logs a warning.
interface ProductMeta {
  plan: SubscriptionPlan
  isTeacherPlan: boolean
}

const PRODUCT_CATALOGUE: Record<string, ProductMeta> = {
  // iOS
  'com.upskillenergy.theenglishhub.student.monthly': {
    plan: SubscriptionPlan.MONTHLY,
    isTeacherPlan: false,
  },
  'com.upskillenergy.theenglishhub.student.annual': {
    plan: SubscriptionPlan.ANNUAL,
    isTeacherPlan: false,
  },
  'com.upskillenergy.theenglishhub.teacher.monthly': {
    plan: SubscriptionPlan.MONTHLY,
    isTeacherPlan: true,
  },
  'com.upskillenergy.theenglishhub.teacher.annual': {
    plan: SubscriptionPlan.ANNUAL,
    isTeacherPlan: true,
  },
  // Android
  eh_student_monthly: { plan: SubscriptionPlan.MONTHLY, isTeacherPlan: false },
  eh_student_annual: { plan: SubscriptionPlan.ANNUAL, isTeacherPlan: false },
  eh_teacher_monthly: { plan: SubscriptionPlan.MONTHLY, isTeacherPlan: true },
  eh_teacher_annual: { plan: SubscriptionPlan.ANNUAL, isTeacherPlan: true },
}

function resolveProductMeta(productId: string | undefined): ProductMeta {
  if (productId && PRODUCT_CATALOGUE[productId]) return PRODUCT_CATALOGUE[productId]
  // Unknown SKU — default to a safe Student Monthly. Logged by caller.
  return { plan: SubscriptionPlan.MONTHLY, isTeacherPlan: false }
}

// ─── Helpers ───────────────────────────────────────────────────────────

function msToDate(ms: number | undefined | null): Date | null {
  if (!ms || !Number.isFinite(ms)) return null
  return new Date(ms)
}

function storeToPlatform(store: string | undefined): SubscriptionPlatformValue {
  if (store === 'APP_STORE' || store === 'MAC_APP_STORE') return SubscriptionPlatform.IOS
  if (store === 'PLAY_STORE') return SubscriptionPlatform.ANDROID
  // STRIPE / AMAZON / PROMOTIONAL / undefined — fall back to IOS as the
  // most common mobile path. Callers receive this in logs.
  return SubscriptionPlatform.IOS
}

/**
 * Resolve the Prisma `User.id` from a RevenueCat `app_user_id`. Mobile
 * calls `Purchases.logIn(supabaseUserId)`, so the `app_user_id` is the
 * Supabase UUID. We first try `supabaseUserId`, then fall back to the
 * Prisma cuid `id` for any legacy client that set app_user_id to a
 * Prisma id.
 */
async function resolveUserId(
  prisma: PrismaClient,
  appUserId: string,
): Promise<string | null> {
  // Supabase user ids are RFC 4122 UUIDs. If this doesn't look like one
  // we skip the first lookup entirely to avoid a Postgres cast error.
  const looksLikeUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    appUserId,
  )

  if (looksLikeUuid) {
    const bySupabase = await prisma.user.findUnique({
      where: { supabaseUserId: appUserId },
      select: { id: true },
    })
    if (bySupabase) return bySupabase.id
  }

  // Legacy fallback — the cuid path.
  const byId = await prisma.user.findUnique({
    where: { id: appUserId },
    select: { id: true },
  })
  return byId?.id ?? null
}

// ─── Main entry ────────────────────────────────────────────────────────

export async function reconcileEvent(
  prisma: PrismaClient,
  event: RevenueCatEvent,
): Promise<ReconcileOutcome> {
  // Bookkeeping-only event types short-circuit before we even touch the
  // user lookup — they do not mutate `Subscription`.
  if (event.type === 'TEST') {
    return { skipped: true, reason: 'test_event' }
  }
  if (event.type === 'SUBSCRIBER_ALIAS') {
    return { skipped: true, reason: 'alias_bookkeeping' }
  }
  if (event.type === 'NON_RENEWING_PURCHASE') {
    // MVP does not sell non-renewing SKUs.
    return { skipped: true, reason: 'non_renewing_not_supported' }
  }
  if (event.type === 'TRANSFER') {
    // Manual review — the entitlement has moved to a different store
    // account. We do not automate the remediation.
    return { skipped: true, reason: 'transfer_manual_review' }
  }

  const appUserId = event.app_user_id
  const userId = await resolveUserId(prisma, appUserId)
  if (!userId) {
    // Per the spec we MUST NOT 4xx here — we 200 so RevenueCat stops
    // retrying. Caller (route) decides the HTTP code.
    return { skipped: true, reason: 'user_not_found' }
  }

  // From here every branch operates on a product-bearing event. Narrow
  // the type once.
  if (!('product_id' in event)) {
    return { skipped: true, reason: 'no_product_id' }
  }

  const productId = event.product_id
  const meta = resolveProductMeta(productId)
  const platform = storeToPlatform(event.store)
  const purchasedAt = msToDate(event.purchased_at_ms)
  const expirationAt = msToDate(event.expiration_at_ms)
  const originalPurchase = msToDate(event.original_purchase_date_ms)

  // Common fields for create-vs-update.
  const periodStart = purchasedAt ?? new Date()
  // `expirationAt` is absent on CANCELLATION / REFUND. For those we
  // preserve any existing value by reading the row first.
  const existing = await prisma.subscription.findUnique({ where: { userId } })

  switch (event.type) {
    case 'INITIAL_PURCHASE': {
      const isTrial = event.is_trial_period === true
      const status = isTrial ? SubscriptionStatus.TRIALING : SubscriptionStatus.ACTIVE
      // Grandfathering (R-031). Capture the locked price + tier at signup
      // so a renewal after the Aug 2026 Standard rollover still honours
      // the Early Access price. `captureGrandfatherFields` uses the
      // current wall-clock to decide Early Access vs Standard.
      const role: 'student' | 'teacher' = meta.isTeacherPlan ? 'teacher' : 'student'
      const grandfather = captureGrandfatherFields(
        meta.plan === SubscriptionPlan.MONTHLY ? 'MONTHLY' : 'ANNUAL',
        role,
      )
      // On re-purchase after expiry we keep the ORIGINAL locked price
      // where one already exists — the user earned that price by being
      // an Early Access subscriber before the rollover.
      const preservedGrandfatherPrice = existing?.grandfatheredPriceMinor ?? grandfather.grandfatheredPriceMinor
      const preservedGrandfatherCurrency = existing?.grandfatheredCurrency ?? grandfather.grandfatheredCurrency
      const preservedPricingTier = existing?.pricingTier ?? grandfather.pricingTier
      const sub = await prisma.subscription.upsert({
        where: { userId },
        update: {
          // Preserve any pre-existing Stripe identity (cross-platform
          // subscriber). Otherwise null — this row is RevenueCat-owned.
          stripeCustomerId: existing?.stripeCustomerId ?? null,
          stripeSubscriptionId: existing?.stripeSubscriptionId ?? null,
          plan: meta.plan,
          status,
          currentPeriodStart: periodStart,
          currentPeriodEnd: expirationAt ?? periodStart,
          cancelledAt: null,
          refundedAt: null,
          isTeacherPlan: meta.isTeacherPlan,
          revenuecatAppUserId: appUserId,
          revenuecatProductId: productId,
          platform,
          originalPurchaseDate: originalPurchase ?? existing?.originalPurchaseDate ?? null,
          grandfatheredPriceMinor: preservedGrandfatherPrice,
          grandfatheredCurrency: preservedGrandfatherCurrency,
          pricingTier: preservedPricingTier,
        },
        create: {
          userId,
          stripeCustomerId: null,
          stripeSubscriptionId: null,
          plan: meta.plan,
          status,
          currentPeriodStart: periodStart,
          currentPeriodEnd: expirationAt ?? periodStart,
          isTeacherPlan: meta.isTeacherPlan,
          revenuecatAppUserId: appUserId,
          revenuecatProductId: productId,
          platform,
          originalPurchaseDate: originalPurchase,
          grandfatheredPriceMinor: grandfather.grandfatheredPriceMinor,
          grandfatheredCurrency: grandfather.grandfatheredCurrency,
          pricingTier: grandfather.pricingTier,
        },
      })
      return { subscription: sub }
    }

    case 'RENEWAL': {
      if (!existing) {
        // Defensive: RENEWAL before INITIAL_PURCHASE (out-of-order
        // delivery). Treat as a late-arriving initial purchase — and
        // capture grandfather fields at the original-purchase date if
        // known, else now.
        const role: 'student' | 'teacher' = meta.isTeacherPlan ? 'teacher' : 'student'
        const grandfather = captureGrandfatherFields(
          meta.plan === SubscriptionPlan.MONTHLY ? 'MONTHLY' : 'ANNUAL',
          role,
          originalPurchase ?? new Date(),
        )
        const sub = await prisma.subscription.create({
          data: {
            userId,
            stripeCustomerId: null,
            stripeSubscriptionId: null,
            plan: meta.plan,
            status: SubscriptionStatus.ACTIVE,
            currentPeriodStart: periodStart,
            currentPeriodEnd: expirationAt ?? periodStart,
            isTeacherPlan: meta.isTeacherPlan,
            revenuecatAppUserId: appUserId,
            revenuecatProductId: productId,
            platform,
            originalPurchaseDate: originalPurchase,
            grandfatheredPriceMinor: grandfather.grandfatheredPriceMinor,
            grandfatheredCurrency: grandfather.grandfatheredCurrency,
            pricingTier: grandfather.pricingTier,
          },
        })
        return { subscription: sub }
      }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: {
          status: SubscriptionStatus.ACTIVE,
          currentPeriodStart: periodStart,
          currentPeriodEnd: expirationAt ?? existing.currentPeriodEnd,
          cancelledAt: null,
          revenuecatProductId: productId,
          platform,
          paymentCount: { increment: 1 },
        },
      })
      return { subscription: sub }
    }

    case 'PRODUCT_CHANGE': {
      // `new_product_id` wins when RC splits the old/new. Otherwise the
      // outer `product_id` already points to the target SKU.
      const targetProduct = event.new_product_id ?? productId
      const targetMeta = resolveProductMeta(targetProduct)
      if (!existing) {
        return { skipped: true, reason: 'product_change_without_existing' }
      }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: {
          plan: targetMeta.plan,
          isTeacherPlan: targetMeta.isTeacherPlan,
          revenuecatProductId: targetProduct,
          // stripeSubscriptionId stays as-is. On a mobile-only row it is
          // null; on a cross-platform row it remains the real Stripe id.
        },
      })
      return { subscription: sub }
    }

    case 'CANCELLATION': {
      // Auto-renew off but still in paid period — status stays ACTIVE,
      // we just stamp `cancelledAt`.
      if (!existing) return { skipped: true, reason: 'cancellation_without_existing' }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: { cancelledAt: new Date() },
      })
      return { subscription: sub }
    }

    case 'UNCANCELLATION': {
      if (!existing) return { skipped: true, reason: 'uncancellation_without_existing' }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: { cancelledAt: null },
      })
      return { subscription: sub }
    }

    case 'EXPIRATION': {
      if (!existing) return { skipped: true, reason: 'expiration_without_existing' }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: {
          status: SubscriptionStatus.CANCELLED,
          cancelledAt: existing.cancelledAt ?? new Date(),
          currentPeriodEnd: expirationAt ?? new Date(),
        },
      })
      return { subscription: sub }
    }

    case 'BILLING_ISSUE': {
      if (!existing) return { skipped: true, reason: 'billing_issue_without_existing' }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: { status: SubscriptionStatus.PAST_DUE },
      })
      return { subscription: sub }
    }

    case 'SUBSCRIPTION_PAUSED': {
      // Google Play SUBSCRIPTION_PAUSED → dedicated PAUSED status.
      if (!existing) return { skipped: true, reason: 'paused_without_existing' }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: { status: SubscriptionStatus.PAUSED },
      })
      return { subscription: sub }
    }

    case 'REFUND': {
      // REFUND now populates the dedicated refundedAt column. We still
      // set status = CANCELLED so entitlement queries reading only `status`
      // correctly revoke access; refundedAt disambiguates a refund-driven
      // revocation from a user auto-renew-off cancellation.
      if (!existing) return { skipped: true, reason: 'refund_without_existing' }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: {
          status: SubscriptionStatus.CANCELLED,
          refundedAt: new Date(),
        },
      })
      return { subscription: sub }
    }

    case 'CHARGEBACK': {
      // Treat identically to REFUND — a chargeback is a bank-initiated
      // refund and lands in the same terminal, revoked state.
      if (!existing) return { skipped: true, reason: 'chargeback_without_existing' }
      const sub = await prisma.subscription.update({
        where: { userId },
        data: {
          status: SubscriptionStatus.CANCELLED,
          refundedAt: new Date(),
        },
      })
      return { subscription: sub }
    }

    default: {
      // Exhaustiveness guard — type-system tells us this branch is
      // unreachable for a well-typed event. Runtime fallback stays safe.
      const _exhaustive: never = event
      void _exhaustive
      return { skipped: true, reason: 'unhandled_event_type' }
    }
  }
}
