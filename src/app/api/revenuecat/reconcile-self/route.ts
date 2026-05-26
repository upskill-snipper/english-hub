/**
 * POST /api/revenuecat/reconcile-self
 *
 * Closes the cross-platform drift loop flagged in W4-AUD-API-001. The
 * mobile client calls this after `restorePurchases()` or when
 * `useCrossPlatformRecognition` detects that RevenueCat believes the
 * caller is entitled but the server still reads as free. Instead of
 * waiting for the next scheduled RevenueCat webhook (which can be
 * minutes to hours in the worst case), we fetch `CustomerInfo` from
 * RevenueCat's REST API for the caller and run the existing
 * `reconcileEvent` helper with a synthetic event built from the current
 * state. The reconciliation code-path is therefore identical to the
 * live webhook - the only difference is the trigger.
 *
 * Flow:
 *   1. Authenticate the caller via Supabase session (cookie).
 *   2. Rate-limit to 5/min per Prisma user id via Upstash
 *      (`useCrossPlatformRecognition` runs on every foreground
 *      transition, so we cap aggressively).
 *   3. Resolve the Prisma `User.id` from the Supabase session so we can
 *      read any existing `Subscription` row.
 *   4. Fetch `https://api.revenuecat.com/v1/subscribers/{appUserId}`
 *      using `REVENUECAT_SECRET_API_KEY`. The appUserId is the Supabase
 *      UUID - mobile calls `Purchases.logIn(supabaseUserId)` at sign-in
 *      so this is the canonical identifier.
 *   5. Translate the returned `CustomerInfo` into the `RevenueCatEvent`
 *      shape the existing reconciler understands - most live mobile
 *      users will map to a synthetic `INITIAL_PURCHASE` (if there is
 *      an active entitlement) or to an `EXPIRATION` (if the most
 *      recent entitlement has lapsed).
 *   6. Hand the event to `reconcileEvent` and return the resulting
 *      `Subscription` row under the standard `{ ok, data }` envelope.
 *      If RC reports no entitlement and no existing row exists we
 *      short-circuit with `{ skipped: true, reason: 'no_entitlement' }`
 *      rather than synthesising a dead event.
 *
 * Compliance: never logs the RevenueCat payload; only operational
 * metadata (entitlement keys, store, environment). See
 * `webhook/route.ts:scrubForLog` for the shared pattern.
 *
 * British English in doc comments.
 */

import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { reconcileEvent } from '@/lib/revenuecat/reconcile'
import type { RevenueCatEvent } from '@/lib/revenuecat/events'

// Node runtime - `reconcileEvent` uses Prisma + crypto; never edge.
export const runtime = 'nodejs'
// POST mutates Subscription state; never cache.
export const dynamic = 'force-dynamic'

// ─── Response envelopes ────────────────────────────────────────────────

function ok<T>(data: T, status = 200): NextResponse {
  const res = NextResponse.json({ ok: true, data }, { status })
  res.headers.set('Cache-Control', 'private, no-store')
  return res
}

function fail(code: string, message: string, status: number): NextResponse {
  const res = NextResponse.json({ ok: false, error: { code, message } }, { status })
  res.headers.set('Cache-Control', 'private, no-store')
  return res
}

// ─── Method guards ─────────────────────────────────────────────────────

async function methodNotAllowed(): Promise<NextResponse> {
  return NextResponse.json(
    { ok: false, error: { code: 'method_not_allowed', message: 'POST only' } },
    { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'private, no-store' } },
  )
}

export const GET = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed

// ─── RevenueCat REST types ─────────────────────────────────────────────
//
// Mirror only the fields we read; we never round-trip the full payload.
// Reference: https://www.revenuecat.com/docs/api-v1 §Subscribers.

interface RCEntitlement {
  readonly expires_date: string | null // ISO 8601
  readonly product_identifier: string
  readonly purchase_date: string
}

interface RCSubscription {
  readonly expires_date: string | null
  readonly original_purchase_date: string | null
  readonly purchase_date: string
  readonly period_type?: string
  readonly store?: string
  readonly is_sandbox?: boolean
  readonly unsubscribe_detected_at?: string | null
  readonly billing_issues_detected_at?: string | null
}

interface RCSubscriberPayload {
  readonly subscriber: {
    readonly original_app_user_id: string
    readonly entitlements?: Record<string, RCEntitlement>
    readonly subscriptions?: Record<string, RCSubscription>
  }
}

// ─── Helpers ───────────────────────────────────────────────────────────

async function resolveCallerPrismaId(
  sessionUserId: string,
  sessionUserEmail: string | null,
): Promise<string | null> {
  const prismaUser = await prisma.user.findUnique({
    where: { supabaseUserId: sessionUserId },
    select: { id: true },
  })
  if (prismaUser) return prismaUser.id
  if (sessionUserEmail) {
    const fallback = await prisma.user.findUnique({
      where: { email: sessionUserEmail.toLowerCase() },
      select: { id: true },
    })
    return fallback?.id ?? null
  }
  return null
}

function isoToMs(value: string | null | undefined): number | undefined {
  if (!value) return undefined
  const ms = Date.parse(value)
  return Number.isFinite(ms) ? ms : undefined
}

/**
 * Pick the "best" active entitlement from a subscriber payload - the one
 * with the latest `expires_date`. Returns `null` if every entitlement has
 * already expired (or if none exist). We trust the RC field naming; the
 * reconciler is the authority on how a given product maps to plan/role.
 */
function pickActiveEntitlement(
  payload: RCSubscriberPayload,
): { productId: string; entry: RCEntitlement } | null {
  const entitlements = payload.subscriber.entitlements ?? {}
  let best: { productId: string; entry: RCEntitlement; expiresMs: number } | null = null
  const now = Date.now()
  for (const entry of Object.values(entitlements)) {
    const expiresMs = isoToMs(entry.expires_date ?? null)
    // `expires_date === null` means lifetime entitlement - treat as
    // infinitely active.
    const effective = expiresMs ?? Number.POSITIVE_INFINITY
    if (effective <= now) continue
    if (!best || effective > best.expiresMs) {
      best = { productId: entry.product_identifier, entry, expiresMs: effective }
    }
  }
  if (!best) return null
  return { productId: best.productId, entry: best.entry }
}

/**
 * Build a synthetic `RevenueCatEvent` from the subscriber payload. The
 * returned event replays through `reconcileEvent` exactly as though
 * RevenueCat had just delivered it over the webhook.
 *
 * Returns `null` when there is no active entitlement AND no
 * subscription history to reason about - the caller short-circuits in
 * that case rather than fabricating an event.
 */
function synthesiseEvent(appUserId: string, payload: RCSubscriberPayload): RevenueCatEvent | null {
  const active = pickActiveEntitlement(payload)
  const subscriptions = payload.subscriber.subscriptions ?? {}

  if (active) {
    const subEntry = subscriptions[active.productId]
    const store = normaliseStore(subEntry?.store)
    return {
      type: 'INITIAL_PURCHASE',
      id: `reconcile-self-${appUserId}-${Date.now()}`,
      app_user_id: appUserId,
      product_id: active.productId,
      purchased_at_ms: isoToMs(active.entry.purchase_date),
      expiration_at_ms: isoToMs(active.entry.expires_date ?? undefined),
      original_purchase_date_ms: isoToMs(
        subEntry?.original_purchase_date ?? active.entry.purchase_date,
      ),
      is_trial_period: subEntry?.period_type === 'trial',
      period_type: subEntry?.period_type,
      store,
      environment: subEntry?.is_sandbox ? 'SANDBOX' : 'PRODUCTION',
      event_timestamp_ms: Date.now(),
    }
  }

  // No active entitlement - find the most recently expired subscription
  // so the reconciler can stamp `cancelledAt` / `currentPeriodEnd` on
  // the row. If there is no history at all we bail out to a no-op.
  const historical = Object.entries(subscriptions)
    .map(([productId, entry]) => ({
      productId,
      entry,
      expiresMs: isoToMs(entry.expires_date ?? undefined) ?? 0,
    }))
    .filter((r) => r.expiresMs > 0)
    .sort((a, b) => b.expiresMs - a.expiresMs)[0]

  if (!historical) return null

  return {
    type: 'EXPIRATION',
    id: `reconcile-self-${appUserId}-${Date.now()}`,
    app_user_id: appUserId,
    product_id: historical.productId,
    purchased_at_ms: isoToMs(historical.entry.purchase_date),
    expiration_at_ms: historical.expiresMs,
    original_purchase_date_ms: isoToMs(historical.entry.original_purchase_date ?? undefined),
    is_trial_period: historical.entry.period_type === 'trial',
    period_type: historical.entry.period_type,
    store: normaliseStore(historical.entry.store),
    environment: historical.entry.is_sandbox ? 'SANDBOX' : 'PRODUCTION',
    event_timestamp_ms: Date.now(),
  }
}

type AllowedStore =
  | 'APP_STORE'
  | 'MAC_APP_STORE'
  | 'PLAY_STORE'
  | 'AMAZON'
  | 'STRIPE'
  | 'PROMOTIONAL'

function normaliseStore(store: string | undefined): AllowedStore | undefined {
  // Defensive cast - the schema enum lists the six allowed stores.
  // Anything else drops to `undefined` so the reconciler falls back to
  // its safe default.
  const allowed: readonly AllowedStore[] = [
    'APP_STORE',
    'MAC_APP_STORE',
    'PLAY_STORE',
    'AMAZON',
    'STRIPE',
    'PROMOTIONAL',
  ]
  if (store && (allowed as readonly string[]).includes(store)) {
    return store as AllowedStore
  }
  return undefined
}

// ─── Main handler ──────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // ── 1. Authenticate ────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user: sessionUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !sessionUser) {
      return fail('AUTH_EXPIRED', 'Your session has expired. Please sign in again.', 401)
    }

    // ── 2. Rate limit - 5/min per user (Upstash) ───────────────────────
    const rl = await rateLimit(`revenuecat-reconcile-self:${sessionUser.id}`, {
      limit: 5,
      windowSeconds: 60,
    })
    if (!rl.success) {
      const retryAfter = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000))
      const res = fail('RATE_LIMITED', 'Too many reconcile requests. Please wait a moment.', 429)
      res.headers.set('Retry-After', String(retryAfter))
      return res
    }

    // ── 3. Environment check ──────────────────────────────────────────
    const rcSecret = process.env.REVENUECAT_SECRET_API_KEY
    if (!rcSecret) {
      console.error('[revenuecat/reconcile-self] REVENUECAT_SECRET_API_KEY is not configured')
      return fail('not_configured', 'Reconcile endpoint is not configured.', 500)
    }

    // ── 4. Resolve caller's Prisma id ─────────────────────────────────
    const userId = await resolveCallerPrismaId(sessionUser.id, sessionUser.email ?? null)
    if (!userId) {
      // No Prisma row yet - the mobile client should register via
      // /auth/register first. Surfacing 404 mirrors /mobile/devices.
      return fail('NOT_FOUND', 'User profile not initialised. Complete onboarding first.', 404)
    }

    // RevenueCat `app_user_id` is the Supabase UUID (mobile calls
    // `Purchases.logIn(supabaseUserId)` at sign-in).
    const appUserId = sessionUser.id

    // ── 5. Fetch CustomerInfo from RevenueCat REST API ────────────────
    let rcResponse: Response
    try {
      rcResponse = await fetch(
        `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(appUserId)}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${rcSecret}`,
            Accept: 'application/json',
            // RevenueCat requires explicit platform, but the secret
            // key is platform-agnostic. Omit per docs § Subscribers.
          },
          // Bounded - RC's P95 is < 500ms; timing out at 8s leaves
          // plenty of headroom for Vercel's 10s budget.
          signal: AbortSignal.timeout(8_000),
        },
      )
    } catch (err) {
      console.error('[revenuecat/reconcile-self] RC fetch failed', {
        error: err instanceof Error ? err.message : 'unknown',
      })
      Sentry.captureException(err, { tags: { route: 'revenuecat.reconcile-self' } })
      return fail(
        'UPSTREAM_UNAVAILABLE',
        'Could not reach the subscription service. Please try again shortly.',
        503,
      )
    }

    if (rcResponse.status === 404) {
      // RC returns 404 for an unknown app_user_id - that means the
      // user has never authenticated with the SDK on any device. No
      // reconciliation to perform. Return the current Subscription
      // row (if any) as-is so the client sees a stable response.
      const existing = await prisma.subscription.findUnique({ where: { userId } })
      return ok({ subscription: existing, skipped: true, reason: 'no_rc_subscriber' })
    }

    if (!rcResponse.ok) {
      console.error('[revenuecat/reconcile-self] RC non-2xx', {
        status: rcResponse.status,
      })
      return fail(
        'UPSTREAM_UNAVAILABLE',
        'Subscription service returned an error. Please try again shortly.',
        502,
      )
    }

    let payload: RCSubscriberPayload
    try {
      payload = (await rcResponse.json()) as RCSubscriberPayload
    } catch (err) {
      console.error('[revenuecat/reconcile-self] RC payload parse failed', err)
      return fail('UPSTREAM_UNAVAILABLE', 'Subscription service returned an invalid response.', 502)
    }

    // ── 6. Synthesise an event & reconcile ─────────────────────────────
    const event = synthesiseEvent(appUserId, payload)
    if (!event) {
      // No active entitlement, no history - nothing to reconcile. Return
      // the existing Subscription row (likely null / free) unchanged so
      // the client can update its cache.
      const existing = await prisma.subscription.findUnique({ where: { userId } })
      return ok({ subscription: existing, skipped: true, reason: 'no_entitlement' })
    }

    const outcome = await reconcileEvent(prisma, event)

    console.info(
      JSON.stringify({
        event: 'revenuecat.reconcile_self',
        userId,
        eventType: event.type,
        productId: 'product_id' in event ? event.product_id : null,
        store: 'store' in event ? event.store : null,
        skipped: outcome.skipped ?? false,
        reason: outcome.reason ?? null,
      }),
    )

    return ok({
      subscription: outcome.subscription ?? null,
      skipped: outcome.skipped ?? false,
      reason: outcome.reason ?? null,
    })
  } catch (err) {
    console.error('[revenuecat/reconcile-self] Unhandled error', err)
    Sentry.captureException(err, { tags: { route: 'revenuecat.reconcile-self' } })
    return fail('INTERNAL', 'Something went wrong on our end. We have been notified.', 500)
  }
}

// ─── Test-only surface ─────────────────────────────────────────────────
//
// Note: Next.js 15 rejects any non-standard export from a `route.ts` file
// (only GET/POST/etc. and `runtime`/`revalidate`/etc. are allowed). The
// frozen-facade test bundle has been moved to a sibling helper file so
// unit tests can import from there without violating the Route type
// contract.
//
// If you need to unit-test `pickActiveEntitlement`, `synthesiseEvent` or
// `isoToMs`, import them directly from their source modules, or re-create
// the facade in `src/app/api/revenuecat/reconcile-self/_test-helpers.ts`
// (a file starting with `_` is ignored by Next.js route detection).
