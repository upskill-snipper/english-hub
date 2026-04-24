/**
 * RevenueCat webhook event schemas.
 *
 * Zod schemas for every event type we journal and/or act on. The outer
 * wrapper is `{ api_version, event: {...} }` where the `event` object
 * carries a discriminating `type` field. We model the shared fields in
 * a base schema and extend per event type.
 *
 * ASSUMPTION(W4): payload field names follow the RevenueCat V1 webhook
 * taxonomy — `app_user_id`, `original_app_user_id`, `product_id`,
 * `event_timestamp_ms`, `original_purchase_date_ms`, `purchased_at_ms`,
 * `expiration_at_ms`, `is_trial_period`, `period_type`, `store`,
 * `environment`, `id` (the event id used for idempotency). If RC has
 * rolled to a V2 shape we must re-map these in `reconcile.ts`.
 */

import { z } from 'zod'

// ─── Shared primitives ─────────────────────────────────────────────────

/**
 * Event types RevenueCat may emit. We keep this as a superset — events
 * we do not yet act on (e.g. `TEST`, `CHARGEBACK`) still journal cleanly
 * so future rules can replay from history.
 */
export const REVENUECAT_EVENT_TYPES = [
  'INITIAL_PURCHASE',
  'RENEWAL',
  'PRODUCT_CHANGE',
  'CANCELLATION',
  'UNCANCELLATION',
  'EXPIRATION',
  'BILLING_ISSUE',
  'SUBSCRIBER_ALIAS',
  'NON_RENEWING_PURCHASE',
  'TRANSFER',
  'SUBSCRIPTION_PAUSED',
  'REFUND',
  'TEST',
  'CHARGEBACK',
] as const

export type RevenueCatEventType = (typeof REVENUECAT_EVENT_TYPES)[number]

/**
 * Subset of stores RevenueCat reports. We map these to our
 * `SubscriptionPlatform` enum (`IOS` / `ANDROID`). Any other store
 * reduces to a log-only journal entry.
 */
export const revenuecatStoreSchema = z.enum([
  'APP_STORE',
  'MAC_APP_STORE',
  'PLAY_STORE',
  'AMAZON',
  'STRIPE',
  'PROMOTIONAL',
])

// Every RC event carries these fields. Anything optional is genuinely
// optional in the upstream payload — we cannot tighten the contract
// without risking legitimate events being rejected.
const baseEventSchema = z.object({
  // Stable unique event id — used as our idempotency key.
  id: z.string().min(1),
  // `app_user_id` is the identifier we set via `Purchases.logIn()`; we
  // align it with Supabase `userId` (UUID string).
  app_user_id: z.string().min(1),
  // When RevenueCat aliases two ids, this is the canonical one. Used
  // only by `SUBSCRIBER_ALIAS` bookkeeping.
  original_app_user_id: z.string().optional(),
  // Epoch milliseconds.
  event_timestamp_ms: z.number().int().nonnegative().optional(),
  // Store / platform origin.
  store: revenuecatStoreSchema.optional(),
  // `PRODUCTION` | `SANDBOX`.
  environment: z.enum(['PRODUCTION', 'SANDBOX']).optional(),
})

// Event subtypes share a product-centric core.
const productEventBase = baseEventSchema.extend({
  product_id: z.string().min(1),
  // Original purchase of the subscription chain — epoch ms.
  original_purchase_date_ms: z.number().int().nonnegative().optional(),
  // When this period started — epoch ms.
  purchased_at_ms: z.number().int().nonnegative().optional(),
  // When the current period expires — epoch ms. May be absent on pure
  // cancellation events.
  expiration_at_ms: z.number().int().nonnegative().optional(),
  // TRIAL, NORMAL, INTRO, PROMOTIONAL.
  period_type: z.string().optional(),
  is_trial_period: z.boolean().optional(),
})

// ─── Per-type schemas ──────────────────────────────────────────────────

const initialPurchaseSchema = productEventBase.extend({
  type: z.literal('INITIAL_PURCHASE'),
})
const renewalSchema = productEventBase.extend({ type: z.literal('RENEWAL') })
const productChangeSchema = productEventBase.extend({
  type: z.literal('PRODUCT_CHANGE'),
  // The SKU the user is moving _to_. Some payloads carry this under
  // `new_product_id`; we accept both and prefer `new_product_id` when
  // present in the reconciler.
  new_product_id: z.string().optional(),
})
const cancellationSchema = productEventBase.extend({
  type: z.literal('CANCELLATION'),
  // `cancel_reason`: UNSUBSCRIBE | BILLING_ERROR | DEVELOPER_INITIATED
  // | PRICE_INCREASE | CUSTOMER_SUPPORT | UNKNOWN.
  cancel_reason: z.string().optional(),
})
const uncancellationSchema = productEventBase.extend({
  type: z.literal('UNCANCELLATION'),
})
const expirationSchema = productEventBase.extend({
  type: z.literal('EXPIRATION'),
  expiration_reason: z.string().optional(),
})
const billingIssueSchema = productEventBase.extend({
  type: z.literal('BILLING_ISSUE'),
  grace_period_expiration_at_ms: z.number().int().nonnegative().optional(),
})
const subscriberAliasSchema = baseEventSchema.extend({
  type: z.literal('SUBSCRIBER_ALIAS'),
  // Aliases carry both ids. `app_user_id` from `baseEventSchema` is the
  // new canonical one; the old one is `original_app_user_id`.
})
const nonRenewingPurchaseSchema = productEventBase.extend({
  type: z.literal('NON_RENEWING_PURCHASE'),
})
const transferSchema = baseEventSchema.extend({
  type: z.literal('TRANSFER'),
  // List of app user ids whose entitlements transferred. Shape varies —
  // accept loosely and log for manual review.
  transferred_from: z.array(z.string()).optional(),
  transferred_to: z.array(z.string()).optional(),
})
const subscriptionPausedSchema = productEventBase.extend({
  type: z.literal('SUBSCRIPTION_PAUSED'),
  auto_resume_at_ms: z.number().int().nonnegative().optional(),
})
const refundSchema = productEventBase.extend({
  type: z.literal('REFUND'),
})
const testSchema = baseEventSchema.extend({ type: z.literal('TEST') })
const chargebackSchema = productEventBase.extend({
  type: z.literal('CHARGEBACK'),
})

// Discriminated union — zod drives exhaustiveness in the reconciler.
export const revenuecatEventSchema = z.discriminatedUnion('type', [
  initialPurchaseSchema,
  renewalSchema,
  productChangeSchema,
  cancellationSchema,
  uncancellationSchema,
  expirationSchema,
  billingIssueSchema,
  subscriberAliasSchema,
  nonRenewingPurchaseSchema,
  transferSchema,
  subscriptionPausedSchema,
  refundSchema,
  testSchema,
  chargebackSchema,
])

export type RevenueCatEvent = z.infer<typeof revenuecatEventSchema>

// Outer envelope: `{ api_version: '1.0', event: { ... } }`.
export const revenuecatWebhookPayloadSchema = z.object({
  api_version: z.string().optional(),
  event: revenuecatEventSchema,
})

export type RevenueCatWebhookPayload = z.infer<typeof revenuecatWebhookPayloadSchema>

// Handler signature per event type. Returns a reconcile summary (see
// `reconcile.ts`). Kept here so tests can import the shape.
export interface ReconcileResult {
  subscription?: {
    id: string
    userId: string
    status: string
    platform: string
  }
  skipped?: boolean
  reason?: string
}

export type EventHandler<E extends RevenueCatEvent = RevenueCatEvent> = (
  event: E,
) => Promise<ReconcileResult>
