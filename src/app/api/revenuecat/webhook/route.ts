/**
 * POST /api/revenuecat/webhook
 *
 * Receiver for RevenueCat webhook events. Mirrors the structure of the
 * existing Stripe webhook handler (src/app/api/stripe/webhook/route.ts):
 *   1. Verify signature (constant-time) — 401 on mismatch.
 *   2. Parse + validate body with zod — 422 on malformed payload.
 *   3. Journal the event into `RevenueCatEvent` BEFORE reconciliation.
 *      This gives us a durable audit trail independent of downstream
 *      business-logic bugs; we can replay from the journal if needed.
 *   4. Idempotency: skip reconciliation if this `event.id` has already
 *      been processed (processedAt IS NOT NULL).
 *   5. Reconcile the event into Prisma `Subscription` (pure function in
 *      `lib/revenuecat/reconcile.ts`).
 *   6. Stamp `processedAt` on the journal row.
 *   7. Return `{ ok: true, data: { eventId } }` / error envelope.
 *
 * The handler is synchronous on purpose — RevenueCat requires a 200
 * within ~10 s and will retry on any non-2xx. We journal first so the
 * retry is cheap (idempotent no-op) if reconciliation is the thing that
 * failed.
 *
 * ASSUMPTION(W4): authentication is a shared-secret Bearer token in the
 * `Authorization` header — see `lib/revenuecat/verify.ts`.
 */

import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { ZodError } from 'zod'
import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { verifyWebhookSignature } from '@/lib/revenuecat/verify'
import { revenuecatWebhookPayloadSchema, type RevenueCatEvent } from '@/lib/revenuecat/events'
import { reconcileEvent } from '@/lib/revenuecat/reconcile'

// HMAC / secret comparison requires the raw body and Node crypto.
export const runtime = 'nodejs'
// Never cache a mutating POST handler.
export const dynamic = 'force-dynamic'

// ─── Response envelopes ────────────────────────────────────────────────

function ok(data: Record<string, unknown>, status = 200) {
  return NextResponse.json({ ok: true, data }, { status })
}

function fail(code: string, message: string, status: number) {
  return NextResponse.json({ ok: false, error: { code, message } }, { status })
}

// ─── Method guards ─────────────────────────────────────────────────────

async function methodNotAllowed() {
  return NextResponse.json(
    { ok: false, error: { code: 'method_not_allowed', message: 'POST only' } },
    { status: 405, headers: { Allow: 'POST' } },
  )
}

export const GET = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed

// ─── PII scrubbing ─────────────────────────────────────────────────────
//
// NEVER log the full payload. The `subscriber` object on RC events
// carries attributes (email, name) which we treat as PII. We log only
// operational metadata.
function scrubForLog(event: RevenueCatEvent) {
  return {
    eventId: event.id,
    type: event.type,
    appUserId: event.app_user_id,
    store: 'store' in event ? event.store : undefined,
    environment: 'environment' in event ? event.environment : undefined,
    productId: 'product_id' in event ? event.product_id : undefined,
  }
}

// ─── Main handler ──────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // ── 1. Pull raw body + verify signature ─────────────────────────────
  const rawBody = await request.text()

  if (!process.env.REVENUECAT_WEBHOOK_SECRET) {
    console.error('[revenuecat/webhook] REVENUECAT_WEBHOOK_SECRET is not configured')
    return fail('not_configured', 'Webhook endpoint is not configured', 500)
  }

  if (!verifyWebhookSignature(rawBody, request.headers)) {
    // Do not leak _why_ the signature failed — could be missing header,
    // wrong bearer, anything. 401 + generic copy is correct.
    console.warn('[revenuecat/webhook] Signature verification failed')
    return fail('invalid_signature', 'Invalid webhook signature', 401)
  }

  // ── 2. Parse JSON + validate shape ──────────────────────────────────
  let parsedJson: unknown
  try {
    parsedJson = JSON.parse(rawBody)
  } catch {
    return fail('invalid_json', 'Request body is not valid JSON', 422)
  }

  let event: RevenueCatEvent
  try {
    const parsed = revenuecatWebhookPayloadSchema.parse(parsedJson)
    event = parsed.event
  } catch (err) {
    if (err instanceof ZodError) {
      console.warn('[revenuecat/webhook] Payload failed validation', {
        issues: err.issues.map((i) => ({ path: i.path.join('.'), code: i.code })),
      })
      return fail('invalid_payload', 'Payload did not match schema', 422)
    }
    console.error('[revenuecat/webhook] Unexpected parse error', err)
    return fail('parse_error', 'Could not parse payload', 422)
  }

  // Add a Sentry breadcrumb for the rest of the request. Scrubbed copy
  // only; no PII.
  Sentry.addBreadcrumb({
    category: 'revenuecat.webhook',
    message: `RC event ${event.type}`,
    level: 'info',
    data: scrubForLog(event),
  })

  // ── 3. Idempotency check ────────────────────────────────────────────
  // The schema doesn't carry an `eventId` column — we stash the RC id
  // inside the `payload` JSON and query by JSON path. Postgres handles
  // this fine; the combined (appUserId, eventType) index narrows the
  // scan first.
  let alreadyProcessedJournal: { id: string } | null = null
  try {
    const existing = await prisma.$queryRaw<
      Array<{ id: string }>
    >`SELECT id FROM "RevenueCatEvent"
      WHERE app_user_id = ${event.app_user_id}
        AND event_type = ${event.type}
        AND payload->>'id' = ${event.id}
        AND processed_at IS NOT NULL
      LIMIT 1`
    if (existing.length > 0) {
      alreadyProcessedJournal = existing[0]
    }
  } catch (err) {
    // A raw-query failure here is non-fatal — we fall through to a best-
    // effort journal + reconcile. A genuine schema problem will be
    // caught by the insert below.
    console.warn('[revenuecat/webhook] Idempotency lookup failed; continuing', err)
  }

  if (alreadyProcessedJournal) {
    console.info(
      JSON.stringify({
        event: 'revenuecat.webhook.duplicate',
        ...scrubForLog(event),
      }),
    )
    return ok({ eventId: event.id, deduped: true })
  }

  // ── 4. Journal the event ────────────────────────────────────────────
  // Journal BEFORE reconciliation so that even if reconciliation blows
  // up we have a durable record for replay. The row is finalised
  // (processedAt stamped) only after reconciliation succeeds.
  let journalId: string
  try {
    const journal = await prisma.revenueCatEvent.create({
      data: {
        eventType: event.type,
        appUserId: event.app_user_id,
        productId: 'product_id' in event ? event.product_id : null,
        payload: parsedJson as Prisma.InputJsonValue,
      },
      select: { id: true },
    })
    journalId = journal.id
  } catch (err) {
    // Journalling failed — we cannot safely continue. RevenueCat will
    // retry the delivery; returning 500 signals that to them.
    console.error('[revenuecat/webhook] Failed to journal event', err)
    Sentry.captureException(err, { tags: { route: 'revenuecat.webhook' } })
    return fail('journal_failed', 'Could not persist event', 500)
  }

  // ── 5. Reconcile ────────────────────────────────────────────────────
  try {
    const outcome = await reconcileEvent(prisma, event)

    // Stamp the journal row as processed regardless of whether the
    // reconciler mutated a Subscription — `skipped` is a legitimate
    // terminal outcome (e.g. TEST, TRANSFER, user_not_found).
    await prisma.revenueCatEvent.update({
      where: { id: journalId },
      data: { processedAt: new Date() },
    })

    console.info(
      JSON.stringify({
        event: 'revenuecat.webhook.processed',
        ...scrubForLog(event),
        skipped: outcome.skipped ?? false,
        reason: outcome.reason ?? null,
      }),
    )

    return ok({ eventId: event.id, skipped: outcome.skipped ?? false })
  } catch (err) {
    // Record the failure on the journal row so the replay cron can pick
    // this up without scanning Sentry. Best-effort — if the update
    // itself fails we still fall through to a 500.
    try {
      await prisma.revenueCatEvent.update({
        where: { id: journalId },
        data: {
          processingError: err instanceof Error ? err.message.slice(0, 500) : 'unknown',
        },
      })
    } catch {
      // Non-fatal, we already have the upstream failure to report.
    }

    console.error('[revenuecat/webhook] Reconciliation failed', {
      ...scrubForLog(event),
      error: err instanceof Error ? err.message : 'unknown',
    })
    Sentry.captureException(err, {
      tags: { route: 'revenuecat.webhook', eventType: event.type },
      extra: scrubForLog(event),
    })

    return fail('reconcile_failed', 'Could not reconcile event', 500)
  }
}
