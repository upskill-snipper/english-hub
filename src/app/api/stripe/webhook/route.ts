import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import Stripe from 'stripe'
import { stripe, isIeltsPriceId } from '@/lib/stripe'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { attributeAffiliateReferral } from '@/lib/affiliate/attribution'
import { calculateCommissionPence, getCurrentTierInfo } from '@/lib/affiliate/tiers'
import { prisma } from '@/lib/prisma'
import { captureGrandfatherFields, type Plan as PricingPlan } from '@/lib/pricing/grandfather'
import { syncStripeSubscriptionToPrisma } from '@/lib/billing/subscription-sync'
import {
  WEB_ACCESS_STATUSES,
  carriesIelts,
  findCoveringSubscription,
  findDuplicateSubscription,
  isIeltsOnly,
  pricesOnInvoice,
  pricesOnSubscription,
} from '@/lib/billing/duplicate-subscription-guard'
import {
  chargeInvoiceId,
  idOf,
  invoiceSubscriptionId,
  subscriptionPeriodEnd,
} from '@/lib/billing/stripe-shapes'
import { sendPaymentFailedEmail, sendPlanEndedEmail } from '@/lib/email/lifecycle/billing'

// Disable body parsing - we need the raw body for signature verification
export const runtime = 'nodejs'

/** Thrown when required metadata fields are missing from a Stripe event. */
class WebhookMetadataError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'WebhookMetadataError'
  }
}

/**
 * ─── Identity note for every handler in this file ───────────────────────
 *
 * The `userId` a handler resolves - from `metadata.userId`, or from a
 * `profiles` lookup by `stripe_customer_id` - is a SUPABASE auth uuid.
 * `Subscription.userId` is a foreign key to the Prisma `User.id`, a cuid.
 * Passing the uuid straight to Prisma is what silently dropped the
 * subscription row for ~96% of customers. Every Prisma write keyed on a user
 * goes through `syncStripeSubscriptionToPrisma`, which translates the uuid
 * through the identity layer and reports loudly when it cannot.
 *
 * The Supabase `profiles` writes in these handlers keep using the uuid -
 * that IS the primary key of `profiles`, and is correct there.
 */

/**
 * Sync the IELTS-specific entitlement (profiles.ielts_status) from a Stripe
 * subscription. IELTS is a STANDALONE product gated separately from the global
 * 'pro' flag (see course-access.hasIeltsAccess), so its entitlement is driven
 * off whether the subscription's price is an IELTS price — NOT off
 * subscription_status.
 *
 *  • subscription contains an IELTS price AND is active/trialing → 'active'
 *  • subscription contains an IELTS price AND is ended/cancelled/unpaid → 'free'
 *  • subscription contains NO IELTS price → leave ielts_status untouched
 *    (a GCSE/Student subscription must never clear or grant IELTS access).
 *
 * Best-effort: never throws into the webhook (an IELTS-sync failure must not
 * fail the whole event and trigger a Stripe retry storm); logs and returns.
 */
/**
 * True when EVERY recurring price on the subscription is an IELTS price, so
 * the subscription must NOT grant the global 'pro' flag. The rule lives in the
 * billing guard module (`isIeltsOnly`), where the coverage check applies the
 * same test to the customer's OTHER subscriptions; this is the route's binding
 * of it to the configured IELTS price ids.
 */
function isIeltsOnlySubscription(subscription: Stripe.Subscription): boolean {
  return isIeltsOnly(subscription, isIeltsPriceId)
}

async function syncIeltsEntitlement(
  userId: string,
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>,
): Promise<void> {
  try {
    const hasIeltsPrice = (subscription.items?.data ?? []).some((item) =>
      isIeltsPriceId(item.price?.id),
    )
    if (!hasIeltsPrice) return // not an IELTS subscription — don't touch ielts_status

    // The retry-window choice (23 October 2026, see invoice.payment_failed)
    // applies to IELTS as well: a past_due IELTS subscription leaves
    // ielts_status as it is, and the flag is cleared when Stripe gives up
    // (unpaid, or deletion). Until this line an IELTS subscriber lost access
    // on the first failed attempt while a Pro subscriber kept theirs, the same
    // decision applied to one product and not the other.
    if (subscription.status === 'past_due') return

    const liveStatuses = ['active', 'trialing']
    const nextStatus = liveStatuses.includes(subscription.status) ? 'active' : 'free'

    const { error } = await supabase
      .from('profiles')
      .update({ ielts_status: nextStatus })
      .eq('id', userId)
    if (error) {
      console.error('[stripe/webhook] Failed to set ielts_status:', error)
    }
  } catch (err) {
    console.error('[stripe/webhook] syncIeltsEntitlement threw (ignored):', err)
  }
}

/**
 * Write the public."Subscription" Prisma row that the rest of the app
 * (entitlements, trial lifecycle, renewal reminders, grandfathered pricing)
 * reads from.
 *
 * `supabaseUserId` is the Supabase auth uuid this handler resolved. The
 * translation to the Prisma `User.id` that the foreign key requires happens
 * inside `syncStripeSubscriptionToPrisma`, which also does the reporting
 * when the row cannot be written. Never throws.
 *
 * Returns the Prisma user id on success, or null - callers that need to
 * touch the same row afterwards must check it rather than assume.
 *
 * ─── Never for an IELTS-only subscription (24 October 2026) ───────────────
 * The row is one per user and records the MAIN entitlement: mobile
 * (`pickEntitlement` in src/lib/entitlements.ts) reads `pro` from it and
 * nothing else, the trial-expiry cron finds a no-card trial only by it, and
 * IELTS has no place in either. Every handler already kept an IELTS-only
 * subscription off `profiles.subscription_status`; the row had no such
 * carve-out, and the sync lets any LIVE subscription take it. So an IELTS
 * purchase replaced whatever the row held. A main-plan holder who bought
 * IELTS had the IELTS subscription written over the main plan, and when IELTS
 * ended its CANCELLED landed on the same row: mobile read a paying customer as
 * free until the main plan's next event, up to a year away. A no-card
 * trialist who bought IELTS lost the trial row to the IELTS subscription, the
 * cron never selected it again, and the trial's 'pro' stayed for good, past
 * the end of the IELTS plan. An IELTS-only payer whose row held IELTS while a
 * main plan was deleted beside it was kept ACTIVE by the live-row guard, and
 * mobile granted full Pro. IELTS access is `profiles.ielts_status`, set by
 * syncIeltsEntitlement, so an IELTS-only subscription writes no row at all,
 * and its payments are not counted on a main plan's row. A mixed subscription
 * (IELTS and a main price) is the main entitlement and still writes.
 */
async function recordSubscriptionRow(
  supabaseUserId: string,
  subscription: Stripe.Subscription,
  source: string,
  eventId?: string | null,
  options: { recordPayment?: boolean } = {},
): Promise<string | null> {
  if (isIeltsOnlySubscription(subscription)) {
    console.info(
      `[stripe/webhook] IELTS_ONLY_ROW_SKIPPED subscription=${subscription.id} ` +
        `status=${subscription.status} source=${source}. The Subscription row records the main ` +
        'entitlement only; IELTS access is profiles.ielts_status.',
    )
    return null
  }
  const result = await syncStripeSubscriptionToPrisma({
    supabaseUserId,
    subscription,
    source,
    eventId,
    recordPayment: options.recordPayment,
  })
  return result.ok ? result.prismaUserId : null
}

/** Stripe statuses under which a subscription grants access. */
const ACCESS_GRANTING_STATUSES: ReadonlySet<string> = new Set(['active', 'trialing'])

/**
 * Is this profile currently 'pro'?
 *
 * The first-event handlers (webhook:D10) and the `incomplete` and
 * `incomplete_expired` cases of `.updated` use this as the coverage check
 * before a NEVER-LIVE status is written. It is a legitimate stand-in for
 * asking Stripe, and the reasoning is this: a non-live value written over a
 * profile that is not 'pro' cannot remove access, so there is nothing to
 * protect and no Stripe call to pay for; and a profile that IS 'pro' while a
 * subscription that never reached active or trialing stalls or expires owes
 * that 'pro' to something else - a no-card trial, or another plan - which the
 * stalled subscription has no business ending, because it never granted
 * anything that could be revoked. Until 23 October 2026 `incomplete` ended a
 * trialist's trial on the spot, and until later the same day
 * `incomplete_expired` ended it a day later.
 *
 * Fails CLOSED. The read's error used to be discarded, so a transient database
 * fault read as "not pro" and let the non-live write through. A database error
 * now throws: the event claim is released and Stripe retries. "No such
 * profile" (PGRST116) is an answer, not a fault: not pro.
 */
async function profileIsPro(
  supabase: ReturnType<typeof createServiceRoleClient>,
  userId: string,
): Promise<boolean> {
  const { data, error } = await supabase
    .from('profiles')
    .select('subscription_status')
    .eq('id', userId)
    .single()
  if (error && error.code !== 'PGRST116') {
    throw new Error(
      `profiles read failed while checking whether ${userId} is pro: ${error.message}`,
    )
  }
  return data?.subscription_status === 'pro'
}

/**
 * The profile's status and end date, read for the stale-event guards.
 *
 * Throws on a database error other than "no row": the guards exist to refuse
 * a write, and a discarded error that reads as "not terminal" lets the write
 * through, which is the failure shape this file keeps finding. `terminal` is
 * the state the `.deleted` handler and an `unpaid` status leave behind.
 */
async function readProfileState(
  supabase: ReturnType<typeof createServiceRoleClient>,
  userId: string,
): Promise<{
  status: string | null
  endDate: string | null
  terminal: boolean
  endDatePassed: boolean
}> {
  const { data, error } = await supabase
    .from('profiles')
    .select('subscription_status, subscription_end_date')
    .eq('id', userId)
    .single()
  if (error && error.code !== 'PGRST116') {
    throw new Error(`profiles read failed for ${userId}: ${error.message}`)
  }
  const status: string | null = data?.subscription_status ?? null
  const endDate: string | null = data?.subscription_end_date ?? null
  return {
    status,
    endDate,
    terminal: status === 'cancelled' || status === 'unpaid',
    endDatePassed: endDate ? new Date(endDate).getTime() < Date.now() : false,
  }
}

/**
 * Which Supabase user a subscription event is about.
 *
 * `metadata.userId` when the subscription was made by one of our checkout
 * routes; otherwise the profile that carries the Stripe customer id. Both are
 * Supabase auth uuids (see the identity note above).
 *
 * Two outcomes short of a user, kept apart on purpose. A database ERROR on the
 * lookup throws: the event claim is released and Stripe retries, because a
 * transient fault must not be read as "nobody". Until 23 October 2026 the
 * `.updated` and `.deleted` handlers discarded that error, answered 200 and
 * kept the claim, so a cancelled customer's deletion delivered during a
 * database blip was consumed for good and the profile stayed 'pro'. NO profile
 * and no metadata is the subscription made by hand in the dashboard, or on a
 * customer record created outside checkout: that is answered 200 with
 * `ignored: 'unresolved_user'`, every fact logged, and one Sentry message
 * fingerprinted the same way for all three handlers, so a person links the
 * customer and runs the reconcile script. A 500 there would retry for three
 * days with nothing changing between attempts (webhook:D9).
 */
type ResolvedUser = { userId: string; ignored: null } | { userId: null; ignored: 'unresolved_user' }

async function resolveSubscriptionUser(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>,
  eventType: string,
  eventId: string | null | undefined,
): Promise<ResolvedUser> {
  const fromMetadata = subscription.metadata?.userId
  if (fromMetadata) return { userId: fromMetadata, ignored: null }

  const customerId = subscription.customer as string
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single()
  if (error && error.code !== 'PGRST116') {
    throw new Error(
      `profiles lookup by stripe_customer_id=${customerId} failed for ${eventType}: ${error.message}`,
    )
  }
  if (profile?.id) return { userId: profile.id as string, ignored: null }

  const facts = {
    event: eventType,
    error: 'unresolved_user',
    eventId: eventId ?? null,
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    status: subscription.status,
    priceIds: pricesOnSubscription(subscription),
    metadata: subscription.metadata,
  }
  console.error(JSON.stringify({ level: 'error', ...facts }))
  Sentry.captureMessage(`Stripe ${eventType} for a customer nobody can resolve`, {
    level: 'error',
    tags: { surface: 'stripe-webhook', defect: 'unresolved-user' },
    fingerprint: ['stripe-webhook', 'unresolved-user'],
    extra: facts,
  })
  return { userId: null, ignored: 'unresolved_user' }
}

/**
 * The subscription as Stripe holds it NOW, through the pinned client, or null
 * when Stripe could not say. Never throws; the caller decides what an
 * unanswered question means for its write.
 */
async function retrieveCurrentSubscription(
  subscriptionId: string,
): Promise<Stripe.Subscription | null> {
  try {
    const current = await stripe.subscriptions.retrieve(subscriptionId)
    return current && typeof current.status === 'string' ? current : null
  } catch (err) {
    console.warn(
      `[stripe/webhook] could not retrieve subscription ${subscriptionId} from Stripe: ${String(err)}`,
    )
    return null
  }
}

/**
 * ─── Idempotency: claim the event id BEFORE processing ──────────────────
 *
 * Until 23 October 2026 this route did SELECT, process, INSERT. Two deliveries
 * of one event arriving together (Stripe retries a slow endpoint while the
 * first attempt is still running) both passed the SELECT and both processed.
 * The SELECT's error was discarded, so a missing table or an RLS change read
 * as "never seen" for every event and nothing said so. And an INSERT that
 * failed after a successful run left the event replayable with only a warning.
 *
 * Now the id is inserted first. `webhook_events.event_id` is the primary key
 * (supabase/migrations/20260419_webhook_events_table.sql), so a second claim
 * fails with 23505, which means "already processed, answer 200, run nothing".
 * A row therefore means CLAIMED, and may be a run still in progress, rather
 * than "fully processed" as the table comment says.
 *
 * If processing then throws, the claim is released so that Stripe's retry can
 * run. If the release itself fails the retry will be refused, so that is
 * reported at error level with the event id: an operator has to replay it.
 *
 * If the claim fails for any OTHER reason the event is still processed,
 * loudly. The alternative, answering 500 until the journal is repaired, would
 * hold every paying customer's entitlement hostage to a bookkeeping table; a
 * processed event with a reported gap in replay protection is the lesser
 * harm, and the handlers are idempotent apart from paymentCount, which
 * `scripts/stripe-reconcile-subscriptions.mjs` recounts from Stripe.
 */
type WebhookClaim = 'claimed' | 'already_processed' | 'unprotected'

async function claimWebhookEvent(
  supabase: ReturnType<typeof createServiceRoleClient>,
  event: Stripe.Event,
): Promise<WebhookClaim> {
  const { error } = await supabase.from('webhook_events').insert({
    event_id: event.id,
    event_type: event.type,
    processed_at: new Date().toISOString(),
  })
  if (!error) return 'claimed'

  const isConflict = error.code === '23505' || /duplicate key/i.test(error.message ?? '')
  if (isConflict) return 'already_processed'

  console.error(
    `[stripe-webhook] IDEMPOTENCY_CLAIM_FAILED event=${event.id} type=${event.type} ` +
      `code=${error.code ?? 'none'}: ${error.message}. Processing anyway, UNPROTECTED against ` +
      'a Stripe retry of this delivery.',
  )
  Sentry.captureMessage('Stripe webhook idempotency claim failed', {
    level: 'error',
    tags: { surface: 'stripe-webhook', defect: 'idempotency-claim' },
    extra: { eventId: event.id, eventType: event.type, dbError: error.message, code: error.code },
  })
  return 'unprotected'
}

async function releaseWebhookEvent(
  supabase: ReturnType<typeof createServiceRoleClient>,
  event: Stripe.Event,
): Promise<void> {
  const report = (detail: string) => {
    console.error(
      `[stripe-webhook] IDEMPOTENCY_RELEASE_FAILED event=${event.id} type=${event.type}: ${detail}. ` +
        "The claim is still held, so Stripe's retry of this event will be answered 200 without " +
        'running. Replay it by hand once the cause is fixed.',
    )
    Sentry.captureMessage('Stripe webhook idempotency release failed', {
      level: 'error',
      tags: { surface: 'stripe-webhook', defect: 'idempotency-release' },
      extra: { eventId: event.id, eventType: event.type, detail },
    })
  }
  try {
    const { error } = await supabase.from('webhook_events').delete().eq('event_id', event.id)
    if (error) report(error.message)
  } catch (err) {
    report(err instanceof Error ? err.message : String(err))
  }
}

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured')
    return NextResponse.json({ error: 'Webhook endpoint is not configured' }, { status: 500 })
  }

  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Webhook signature verification failed:', message)
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 })
  }

  const supabase = createServiceRoleClient()

  // Claim the event id before anything runs; see claimWebhookEvent.
  const claim = await claimWebhookEvent(supabase, event)
  if (claim === 'already_processed') {
    return NextResponse.json({ received: true, duplicate: true })
  }

  // Set when the event was accepted but deliberately not acted on, so the
  // 200 says why and the Stripe delivery log reads honestly.
  let ignored: string | null = null

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session, supabase, event.id)

        // ── Affiliate attribution path 1: legacy Rewardful link-clicks ─
        // Cookie/link-based attribution from the older programme.
        const rewardfulReferralId = session.metadata?.rewardful_referral
        if (rewardfulReferralId) {
          try {
            await attributeAffiliateReferral({
              rewardfulReferralId,
              stripeSession: session,
              supabase,
            })
          } catch (err) {
            // Log but do not fail the webhook - attribution is non-critical
            console.error('Affiliate attribution error:', err)
          }
        }

        // ── Affiliate attribution path 2: code-based redemption (v2) ──
        // /api/promo/redeem stamps `metadata.affiliateId` (the row ID
        // from public.affiliate_accounts) and `metadata.promoCode` onto
        // the checkout session when an affiliate's code was typed at
        // /redeem. We book a row in `affiliate_conversions` so the
        // affiliate's dashboard reflects the conversion and the
        // commission is queued for later payout. Idempotent on
        // session.id (external_id) - webhook retries are safe.
        const affiliateId = session.metadata?.affiliateId
        const promoCode = session.metadata?.promoCode
        if (affiliateId && promoCode) {
          try {
            await recordCodeBasedConversion({
              session,
              affiliateId,
              promoCode,
              supabase,
            })
          } catch (err) {
            // Non-blocking: a conversion-record failure must NOT cause
            // the webhook to 500 (Stripe will retry every event for 3
            // days, and the customer's subscription is already live).
            // We log loudly so it can be reconciled by a back-fill job.
            console.error('[stripe/webhook] code-based affiliate conversion record failed:', err, {
              sessionId: session.id,
              affiliateId,
              promoCode,
            })
          }
        }
        break
      }

      case 'customer.subscription.updated': {
        ignored = await handleSubscriptionUpdated(
          event.data.object as Stripe.Subscription,
          supabase,
          event.id,
        )
        break
      }

      case 'customer.subscription.deleted': {
        ignored = await handleSubscriptionDeleted(
          event.data.object as Stripe.Subscription,
          supabase,
          event.id,
        )
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string

        const { data: failedProfile } = await supabase
          .from('profiles')
          .select('id, email')
          .eq('stripe_customer_id', customerId)
          .single()

        console.warn(
          JSON.stringify({
            event: 'invoice.payment_failed',
            invoiceId: invoice.id,
            customerId,
            userId: failedProfile?.id ?? null,
            amountDue: invoice.amount_due,
            currency: invoice.currency,
          }),
        )

        // ── Does another live subscription already cover this? ──────────────
        // `profiles.subscription_status` is ONE field per person, and this
        // handler used to write past_due on it for any failing invoice without
        // asking which subscription failed. On 8 September 2026 a customer
        // ended up with two subscriptions for the same annual plan. One was
        // paid. The other failed, retried, and failed again - and each failure
        // revoked the access she had paid GBP 67.99 for:
        //
        //   15 Sept 18:44  duplicate fails      -> past_due
        //   16 Sept 21:15  real one pays        -> pro
        //   17 Sept 20:44  duplicate retries    -> past_due
        //   18 Sept 04:18  duplicate's dunning ends -> cancelled
        //
        // She wrote in saying she could not use what she had bought. We had
        // also emailed her twice telling her to update her payment method.
        //
        // So: if the customer holds ANOTHER live subscription carrying the same
        // price, this invoice is a duplicate's. Do not revoke, and do not send
        // a dunning email about a subscription they did not knowingly buy.
        // Asking Stripe, not our own records, for the reason given in
        // `duplicate-subscription-guard.ts`.
        const failedPrices = pricesOnInvoice(invoice)
        // Both API shapes (`invoice.subscription`, or under clover
        // `invoice.parent.subscription_details.subscription`). Reading only
        // the old field left this undefined under clover, so the failing
        // subscription was never excluded below and "covered" itself: every
        // failure read as a duplicate's and nobody was told.
        const failedSubId = invoiceSubscriptionId(invoice) ?? undefined
        const covered = failedPrices.length
          ? await findDuplicateSubscription(stripe, customerId, failedPrices, {
              excludeSubscriptionId: failedSubId,
            })
          : { duplicate: false, existing: null }

        if (covered.duplicate) {
          console.warn(
            `[stripe/webhook] DUPLICATE_INVOICE_FAILED_IGNORED customer=${customerId} ` +
              `invoice=${invoice.id} failedSubscription=${failedSubId ?? 'unknown'} ` +
              `coveredBy=${covered.existing?.id} status=${covered.existing?.status}. ` +
              'Entitlement left intact and no dunning email sent: the customer holds another ' +
              'live subscription for the same price, so this is a duplicate. Cancel it and void ' +
              'its open invoice.',
          )
          break
        }

        // ── Access survives the retry window (product choice, 23 Oct 2026) ──
        // This handler used to write `subscription_status = 'past_due'` here,
        // and the web gate reads exactly 'pro', so the FIRST failed attempt
        // removed access while Stripe's own retries were still scheduled and
        // the email below promised "to avoid any interruption". A declined
        // card is usually an expired card or a bank check, and most recover
        // on a retry within days. The entitlement is therefore left alone
        // here and in handleSubscriptionUpdated's past_due case; it is
        // revoked when Stripe gives up (customer.subscription.deleted, or
        // status unpaid). The Prisma row still records PAST_DUE, which mobile
        // already treats as read-only grace. To reverse this choice, put the
        // write back here and `past_due: 'past_due'` back into the status map,
        // and remove `past_due` from WEB_ACCESS_STATUSES in the guard module.
        //
        // THIS CHOICE DEPENDS ON A DASHBOARD SETTING nobody on this machine can
        // see. "Stripe gives up" is only true if Stripe Dashboard > Settings >
        // Billing > Subscriptions and emails > Manage failed payments sets the
        // action after the final retry to "cancel the subscription" or "mark
        // it unpaid". If it is "leave the subscription past_due", nothing in
        // this file ever revokes: past_due writes null here, the trial-expiry
        // cron never touches a row with a Stripe id, and a card trialist whose
        // first payment declined keeps 'pro' without having paid. The founder
        // confirms the setting before this ships and records which one it is
        // here; a daily backstop that revokes 'pro' when the profile's end
        // date is well past and Stripe shows no live subscription is the
        // safety net if the setting cannot be relied on.
        //
        // ── Merged 24 October 2026 ───────────────────────────────────────
        // fix/trial-lifecycle-emails-2026-10-23 kept the past_due write here
        // and added two things to it. An IELTS-only carve-out: this was the
        // one handler with none, so a failed IELTS invoice wrote past_due over
        // a Student or Teacher plan held beside it, and invoice.paid's
        // IELTS-only branch never wrote 'pro' back. And `profileMovedToPastDue`,
        // which told M6 whether "paused" was true. fix/stripe-webhook-2026-10-23
        // removed the write for every invoice, which contains the carve-out:
        // no invoice, IELTS or not, writes past_due here, and no other path
        // writes past_due to the profile (handleSubscriptionUpdated maps it to
        // null). The webhook branch decides entitlement writes, so the write
        // stays gone, and M6 is told `accessPaused: false` below: this handler
        // removed no access, so "paused" would be false. `ieltsOnlyInvoice`
        // stays because M6 names an IELTS plan from it. If the retry-window
        // choice is reversed and the write comes back, `accessPaused` must be
        // true on exactly the path that writes it, and false for an IELTS-only
        // invoice, which must keep its carve-out.
        const ieltsOnlyInvoice =
          failedPrices.length > 0 && failedPrices.every((p) => isIeltsPriceId(p))

        // Send payment-failed notification via Resend (non-blocking)
        const resendApiKey = process.env.RESEND_API_KEY
        if (resendApiKey) {
          // Resolve customer email - first try Stripe, then fall back to profiles table
          let customerEmail: string | null = null

          try {
            const customer = await stripe.customers.retrieve(customerId)
            if (!customer.deleted && customer.email) {
              customerEmail = customer.email
            }
          } catch (err) {
            console.warn(
              '[stripe/webhook] Failed to retrieve Stripe customer for invoice.payment_failed:',
              err,
            )
          }

          if (!customerEmail) {
            customerEmail = failedProfile?.email ?? null
          }

          if (customerEmail) {
            // ── M6, the payment-failed notice (rewritten 23 October 2026) ──
            // It said "To avoid any interruption to your subscription" after
            // this handler had already written past_due, and the web gate
            // reads 'pro' only, so the interruption had already happened. The
            // copy follows what this handler did: "paused" only when it moved
            // the profile to past_due, and otherwise nothing about access,
            // only the action. Since the merge of 24 October 2026 it never
            // moves the profile (see the retry-window note above), so
            // `accessPaused` is false for every invoice and M6 reads "Your
            // payment did not go through ... To keep your plan, update your
            // payment details", which is true while access is kept.
            // One notice per invoice (LifecycleEmail, or the invoice's first
            // attempt when there is no ledger user; see the sender), never a
            // webhook failure.
            await sendPaymentFailedEmail({
              supabaseUserId: failedProfile?.id ?? null,
              to: customerEmail,
              invoiceId: invoice.id ?? event.id,
              amountMinor: invoice.amount_due,
              currency: invoice.currency,
              accessPaused: false,
              ieltsOnly: ieltsOnlyInvoice,
              attemptCount: invoice.attempt_count,
            })
          } else {
            console.warn(
              `[stripe/webhook] invoice.payment_failed: could not resolve email for customer, skipping notification`,
            )
          }
        } else {
          console.warn(
            '[stripe/webhook] RESEND_API_KEY not configured - skipping payment_failed email',
          )
        }

        break
      }

      case 'invoice.paid': {
        // ─── The IELTS hole (closed 18 September 2026) ────────────────────
        //
        // This handler used to write subscription_status = 'pro' for ANY
        // subscription invoice on the customer, with no IELTS carve-out,
        // although checkout.session.completed, customer.subscription.updated
        // and customer.subscription.deleted all carry one.
        //
        // IELTS is a standalone product gated by profiles.ielts_status. An
        // IELTS-only subscriber is a GBP 39/month customer, and the global
        // 'pro' flag unlocks every GCSE, IGCSE and Teacher feature through
        // hasActiveSubscription(). So the highest-priced SKU was handing out
        // the entire catalogue — first on the GBP 0 trial invoice at checkout,
        // then on every renewal. Worse: because .deleted also carves IELTS
        // out, that 'pro' was never cleared, so an IELTS trial taken and
        // cancelled inside 7 days left a permanently free Pro account.
        //
        // Both IELTS price ids are set in production and the roadmap is about
        // to exercise the buy button, so this stopped being theoretical.
        // ──────────────────────────────────────────────────────────────────
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string

        const { data: paidProfile, error: paidProfileError } = await supabase
          .from('profiles')
          .select('id, email, subscription_status')
          .eq('stripe_customer_id', customerId)
          .single()
        // A database fault is not "no profile". Read as one, it answered 200
        // and kept the claim, so the payment was never recorded and Stripe
        // never retried. It throws now, as the subscription handlers' lookup
        // does: the claim is released and Stripe retries.
        if (paidProfileError && paidProfileError.code !== 'PGRST116') {
          throw new Error(
            `invoice.paid ${invoice.id}: profiles lookup by stripe_customer_id=${customerId} ` +
              `failed: ${paidProfileError.message}`,
          )
        }

        // Both API shapes. Under the pinned clover version the subscription is
        // `invoice.parent.subscription_details.subscription`, and reading only
        // the old top-level field made this null for every delivery: no
        // retrieve, no grant, no payment recorded. The webhook journal held 19
        // invoice.paid events on 20 October 2026 against paymentCount 0 on
        // every row.
        const paidSubscriptionId = invoiceSubscriptionId(invoice)

        if (paidProfile && paidSubscriptionId) {
          // Retrieve the subscription rather than trusting the invoice: only
          // the subscription carries the line items this decision needs, and
          // only it carries the authoritative current_period_end.
          let paidSubscription: Stripe.Subscription | null = null
          try {
            paidSubscription = await stripe.subscriptions.retrieve(paidSubscriptionId)
          } catch (err) {
            console.error('[stripe/webhook] invoice.paid could not retrieve subscription:', err)
            // Fail closed. Granting 'pro' without being able to check whether
            // this is IELTS-only is the exact defect being fixed, so do
            // nothing and let the .updated event reconcile.
            Sentry.captureException(err, {
              tags: { surface: 'stripe-webhook', defect: 'invoice-paid-retrieve' },
            })
            break
          }

          // A paid invoice is not a licence to grant on its own. Stripe does
          // not guarantee delivery order, and an invoice.paid arriving after
          // customer.subscription.deleted used to re-grant 'pro' to a
          // cancelled customer (webhook:D11). The subscription just retrieved
          // is Stripe's current truth: if it no longer grants access, this
          // delivery is stale. Nothing is written; the reconcile script
          // counts the payment from Stripe if the row ever needs it.
          if (!ACCESS_GRANTING_STATUSES.has(paidSubscription.status)) {
            console.warn(
              `[stripe/webhook] STALE_INVOICE_PAID_IGNORED invoice=${invoice.id} ` +
                `subscription=${paidSubscription.id} status=${paidSubscription.status} ` +
                `customer=${customerId}. The subscription no longer grants access, so this ` +
                'paid invoice does not re-grant pro.',
            )
            break
          }

          // The Prisma row is the record of what was paid on the main plan:
          // period and paymentCount. An IELTS-only subscription writes no row
          // (see recordSubscriptionRow): until 24 October 2026 this wrote it
          // too, over a main plan's row or a no-card trial's. A GBP 0 invoice
          // (the trial start) is not a payment; see `recordPayment` in the
          // sync module.
          const tookMoney = (invoice.amount_paid ?? 0) > 0
          const recordRow = () =>
            recordSubscriptionRow(paidProfile.id, paidSubscription!, 'invoice.paid', event.id, {
              recordPayment: tookMoney,
            })

          if (isIeltsOnlySubscription(paidSubscription)) {
            // IELTS-only: set the IELTS entitlement and leave the global flag
            // and the Prisma row exactly as they were. Never widen either here.
            await syncIeltsEntitlement(paidProfile.id, paidSubscription, supabase)
            break
          }

          // Not IELTS-only. Take the period end from the subscription, which
          // is the renewal boundary entitlement should follow; the invoice's
          // period_end is the billing line's window and can differ on
          // proration, mid-cycle changes and trial conversion. The retrieved
          // subscription is in the clover shape, so the period is on its items.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const invoiceAny = invoice as any
          const periodEnd =
            subscriptionPeriodEnd(paidSubscription) ?? (invoiceAny.period_end as number | undefined)
          const subscriptionEndDate = periodEnd ? new Date(periodEnd * 1000).toISOString() : null

          const { error } = await supabase
            .from('profiles')
            .update({
              subscription_status: 'pro',
              ...(subscriptionEndDate && { subscription_end_date: subscriptionEndDate }),
            })
            .eq('id', paidProfile.id)

          if (error) {
            console.error('Failed to update profile after invoice.paid:', error)
            throw error
          }

          // A mixed subscription (IELTS + a non-IELTS price) keeps 'pro' AND
          // needs its IELTS flag kept in step.
          await syncIeltsEntitlement(paidProfile.id, paidSubscription, supabase)
          await recordRow()
        }
        break
      }

      case 'charge.succeeded': {
        break
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge
        const paymentIntentId = idOf(charge.payment_intent)

        try {
          // Which subscription paid this charge? An old-shape payload carries
          // `charge.invoice`. A clover payload carries no invoice field at all
          // (Charges.d.ts has none), and the link runs the other way: the
          // InvoicePayment object, found by payment intent
          // (InvoicePayments.d.ts:49 `invoice`, :81 `payment.payment_intent`).
          // Until 23 October 2026 only the old field was read, so on a clover
          // payload every refunded subscription charge resolved to nothing,
          // no commission was voided, and a console.warn was the only trace.
          let invoiceId = chargeInvoiceId(charge)
          if (!invoiceId && paymentIntentId) {
            const payments = await stripe.invoicePayments.list({
              payment: { type: 'payment_intent', payment_intent: paymentIntentId },
              limit: 1,
            })
            invoiceId = idOf(payments.data[0]?.invoice)
            if (!invoiceId) {
              // A payment intent with no invoice behind it is a one-off
              // purchase (a course), which carries no subscription commission.
              console.info(
                `[stripe/webhook] charge.refunded ${charge.id}: payment intent ${paymentIntentId} ` +
                  'has no invoice, so this was a one-off purchase and there is no subscription ' +
                  'commission to void',
              )
              break
            }
          }

          if (!invoiceId) {
            // Neither shape named an invoice and there is no payment intent to
            // ask by. Nothing can be voided here, and a commission that should
            // have been voided is money, so this is reported, not warned.
            const detail = {
              chargeId: charge.id,
              paymentIntentId,
              customerId: idOf(charge.customer),
              amountRefunded: charge.amount_refunded,
            }
            console.error(
              `[stripe/webhook] REFUND_SUBSCRIPTION_UNRESOLVED ${JSON.stringify(detail)}. Could not ` +
                'find the invoice behind this refunded charge, so no affiliate commission was ' +
                'voided. Check the charge in Stripe and void by hand.',
            )
            Sentry.captureMessage('Refunded charge could not be tied to a subscription', {
              level: 'error',
              tags: { surface: 'stripe-webhook', defect: 'refund-unresolved' },
              extra: detail,
            })
            break
          }

          // Retrieved through the pinned client, so in the clover shape: the
          // subscription is under `parent.subscription_details`.
          const invoice = await stripe.invoices.retrieve(invoiceId)
          const subscriptionId = invoiceSubscriptionId(invoice)
          if (!subscriptionId) {
            console.info(
              `[stripe/webhook] charge.refunded ${charge.id}: invoice ${invoiceId} is not a ` +
                'subscription invoice, so there is no commission to void',
            )
            break
          }

          const { error: voidError, count: voidedCount } = await supabase
            .from('affiliate_referrals')
            .update({
              commission_status: 'refunded',
              commission_voided_reason: 'Charge refunded',
            })
            .eq('stripe_subscription_id', subscriptionId)
            .in('commission_status', ['pending', 'confirmed'])

          if (voidError) {
            console.error(
              `[stripe/webhook] Failed to void affiliate commissions for charge ${charge.id} (subscription ${subscriptionId}):`,
              voidError,
            )
          } else if (voidedCount && voidedCount > 0) {
            console.info(
              `[stripe/webhook] charge.refunded: voided ${voidedCount} affiliate commission(s) for subscription ${subscriptionId}`,
            )
          }
        } catch (err) {
          // The webhook still answers 200: a failed commission void must not
          // make Stripe retry a refund event against handlers that are not
          // idempotent. But a commission left payable after a refund is money,
          // so the failure is reported at error level with what is needed to
          // void it by hand, not only logged.
          console.error('[stripe/webhook] charge.refunded handler error:', err)
          Sentry.captureException(err, {
            level: 'error',
            tags: { surface: 'stripe-webhook', defect: 'refund-void-failed' },
            extra: { chargeId: charge.id, paymentIntentId },
          })
        }

        break
      }

      case 'customer.subscription.trial_will_end': {
        const subscription = event.data.object as Stripe.Subscription
        await handleTrialWillEnd(subscription, supabase)
        break
      }

      case 'customer.subscription.created': {
        const snapshot = event.data.object as Stripe.Subscription

        // Nobody to attach this to is answered 200 with a reason (webhook:D9);
        // a database fault on the lookup throws so that Stripe retries. Both
        // live in resolveSubscriptionUser.
        const resolved = await resolveSubscriptionUser(snapshot, supabase, event.type, event.id)
        if (!resolved.userId) {
          ignored = resolved.ignored
          break
        }
        const userId = resolved.userId

        // ── A first event acts on Stripe's CURRENT state, not the snapshot ──
        // `data.object` is the subscription as it was at creation. Stripe
        // delivers at least once and in no particular order, so this event can
        // arrive after `customer.subscription.deleted` for the same id, or
        // after a renewal has moved the period on. Acting on the snapshot then
        // wrote 'pro' over 'cancelled' and the FIRST period's end date over the
        // current one, and the Prisma row followed (webhook:D15; production
        // showed two rows cancelled on the day they started). So the
        // subscription is retrieved through the pinned client, as invoice.paid
        // already does, and the handler acts on what Stripe holds now:
        //   - active or trialing: grant, with the current period;
        //   - incomplete: the first-status path below (webhook:D10);
        //   - anything else (canceled, incomplete_expired, past_due, unpaid,
        //     paused) is a status the lifecycle handlers own and have seen or
        //     will see, so this delivery is stale and writes nothing.
        // When Stripe cannot be asked the snapshot is used, except over a
        // profile already in a terminal state: writing 'pro' there on a
        // snapshot is the exact regression, so that case throws, the claim is
        // released and Stripe retries. One Stripe call per new subscription.
        const current = await retrieveCurrentSubscription(snapshot.id)
        if (!current) {
          const profileState = await readProfileState(supabase, userId)
          if (profileState.terminal) {
            throw new Error(
              `customer.subscription.created ${snapshot.id}: Stripe could not be asked whether ` +
                `this subscription is still live and the profile is already ` +
                `${profileState.status}, so the snapshot is not acted on. Stripe will retry.`,
            )
          }
        }
        const subscription = current ?? snapshot
        const isLive = ACCESS_GRANTING_STATUSES.has(subscription.status)
        if (current && !isLive && current.status !== 'incomplete') {
          console.warn(
            `[stripe/webhook] STALE_SUBSCRIPTION_CREATED_IGNORED subscription=${snapshot.id} ` +
              `customer=${snapshot.customer} snapshotStatus=${snapshot.status} ` +
              `currentStatus=${current.status}. Stripe now holds this subscription in a status ` +
              'the lifecycle handlers own, so this first event is stale and writes nothing.',
          )
          ignored = 'stale_event'
          break
        }

        const subscriptionStatus = isLive ? 'pro' : 'incomplete'

        // IELTS-only subscriptions must not grant the global 'pro' flag; their
        // entitlement is ielts_status (set by syncIeltsEntitlement, called from
        // the related checkout/updated handlers). They write nothing to the
        // profile here, and no Prisma row (see recordSubscriptionRow).
        const ieltsOnly = isIeltsOnlySubscription(subscription)

        // A not-yet-live first status is written only over a non-pro profile;
        // see profileIsPro (webhook:D10). The end date goes with it.
        const writeStatus = !ieltsOnly && (isLive || !(await profileIsPro(supabase, userId)))

        // Both API shapes: top-level on older payloads, per item under clover.
        const periodEnd = subscriptionPeriodEnd(subscription)
        const subscriptionEndDate = periodEnd ? new Date(periodEnd * 1000).toISOString() : null

        // The end date belongs to the main entitlement, as in
        // handleSubscriptionUpdated. Until 24 October 2026 a live IELTS-only
        // subscription wrote its own period end here with no status, over the
        // date a no-card trial or a main plan runs on; over a cancelled
        // profile that also reopened the stale-event guard, which refuses to
        // re-grant 'pro' only while that date is in the past.
        const profilePatch = {
          ...(writeStatus ? { subscription_status: subscriptionStatus } : {}),
          ...(!ieltsOnly &&
            (isLive || writeStatus) &&
            subscriptionEndDate && { subscription_end_date: subscriptionEndDate }),
        }

        if (Object.keys(profilePatch).length > 0) {
          const { error } = await supabase.from('profiles').update(profilePatch).eq('id', userId)

          if (error) {
            console.error('Failed to update profile for new subscription:', error)
            throw error
          }
        }

        // Mirror to the Prisma `Subscription` row so entitlements, the trial
        // lifecycle, renewal reminders and the growth dashboard see the new
        // subscription. `userId` here is a Supabase auth uuid - see the
        // identity note at the top of this file.
        await recordSubscriptionRow(userId, subscription, event.type, event.id)
        break
      }

      default: {
        // Unhandled event type - acknowledge receipt
        break
      }
    }

    // The claim made above is the idempotency record; nothing to write here.
    return NextResponse.json({
      received: true,
      ...(ignored && { ignored }),
      ...(claim === 'unprotected' && { idempotency: 'unprotected' }),
    })
  } catch (error) {
    // Whatever the failure, the claim must go, or Stripe's retry of this
    // event is answered 200 without running. Released before the response
    // so a slow release cannot race the retry.
    if (claim === 'claimed') await releaseWebhookEvent(supabase, event)

    if (error instanceof WebhookMetadataError) {
      console.error(`Missing metadata in ${event.type}: ${error.message}`)
      return NextResponse.json(
        { error: 'Missing required metadata in webhook event' },
        { status: 400 },
      )
    }

    console.error(`Error handling webhook event ${event.type}:`, error)
    // The money path had zero error reporting - every webhook failure was
    // console-only. Capture to Sentry so a broken subscription lifecycle
    // (checkout, renewal, cancellation) surfaces instead of silently dropping.
    Sentry.captureException(error, {
      tags: { surface: 'stripe-webhook' },
      extra: { eventType: event.type, eventId: event.id },
    })
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}

// ---------------------------------------------------------------------------
// Event handlers
// ---------------------------------------------------------------------------

/**
 * Code-based affiliate conversion booking.
 *
 * Called from the `checkout.session.completed` handler when the session
 * carries `metadata.affiliateId` + `metadata.promoCode` - i.e. the
 * customer typed an affiliate's code at /redeem and our /api/promo/redeem
 * endpoint stamped the affiliate's row ID onto the session.
 *
 * Inserts a row into public.affiliate_conversions with the same shape
 * /api/affiliate/track-conversion uses for cookie-based attribution
 * (so the affiliate dashboard, payout pipeline and commission ledger
 * see code-based redemptions identically). Idempotent on
 * external_id = session.id - Stripe retries every event for 3 days and
 * we must never double-count.
 *
 * Failures are caught by the calling try/catch - this function may
 * throw freely on schema/RLS/network errors and the webhook will still
 * return 200 to Stripe so retries don't stack up.
 */
async function recordCodeBasedConversion({
  session,
  affiliateId,
  promoCode,
  supabase,
}: {
  session: Stripe.Checkout.Session
  affiliateId: string
  promoCode: string
  supabase: ReturnType<typeof createServiceRoleClient>
}): Promise<void> {
  // 1. Idempotency - we must never insert two conversions for the same
  // session ID, regardless of how many times Stripe retries.
  const { data: existing } = await supabase
    .from('affiliate_conversions')
    .select('id')
    .eq('external_id', session.id)
    .maybeSingle()

  if (existing) {
    console.log(
      `[stripe/webhook] code-based conversion already recorded for session ${session.id} (id=${existing.id})`,
    )
    return
  }

  // 2. Resolve the affiliate's current confirmed-referral count to
  // determine which tier they were on at the moment of conversion.
  // The tier value is locked in at insert time so future tier changes
  // don't retroactively alter past commission.
  const { data: account, error: accountErr } = await supabase
    .from('affiliate_accounts')
    .select('id, status, tier, confirmed_referral_count')
    .eq('id', affiliateId)
    .maybeSingle()

  if (accountErr) {
    throw new Error(`Failed to resolve affiliate account ${affiliateId}: ${accountErr.message}`)
  }
  if (!account) {
    throw new Error(`No affiliate account row for ${affiliateId} - promoCode ${promoCode}`)
  }
  if (account.status !== 'active') {
    console.warn(
      `[stripe/webhook] affiliate ${affiliateId} status=${account.status}, recording conversion as voided`,
    )
  }

  // 3. Order value - Stripe gives us amount_total in pence, currency
  // already lower-cased. Use 0 if the session somehow has no total
  // (subscription with trial: amount_total can be 0 on first invoice).
  const orderValuePence = Math.max(0, session.amount_total ?? 0)
  const currency = (session.currency ?? 'gbp').toLowerCase()

  // 4. Commission via the flat-rate tier ladder (lib/affiliate/tiers.ts).
  // Same calculation /api/affiliate/track-conversion uses for cookie
  // attribution, so the two attribution paths produce identical
  // commission shape downstream.
  const referralCount = Number(account.confirmed_referral_count ?? 0)
  const commissionPence = calculateCommissionPence(referralCount)
  // Internal tier-1..tier-5 ladder (display + commission ladder helper)
  // - kept in scope for log lines so we can correlate the commission
  // amount with the flat-rate ladder. Never written to the DB; the DB's
  // tier_at_conversion column is constrained to 'bronze'/'silver'/'gold'.
  const tierInfo = getCurrentTierInfo(referralCount + 1)
  // Pull the affiliate's currently-stored tier ('bronze'/'silver'/'gold')
  // straight from the row. It already passed the schema CHECK on insert,
  // so it'll pass it again here. Default to 'bronze' if somehow null
  // (the column is NOT NULL with default 'bronze' so this is belt-and-
  // braces).
  const tierAtConversion = (account.tier ?? 'bronze') as 'bronze' | 'silver' | 'gold'

  const referredUserId = session.metadata?.userId ?? null
  const isSubscription = session.mode === 'subscription'

  // 5. Insert. If the affiliate is suspended/terminated we still record
  // the conversion (so accounting is complete) but mark it voided so
  // the payout cron doesn't pay out.
  const status = account.status === 'active' ? 'pending' : 'voided'
  const voidedReason =
    account.status === 'active' ? null : `Affiliate ${account.status} at conversion time`

  const { error: insertErr } = await supabase.from('affiliate_conversions').insert({
    affiliate_id: account.id,
    link_id: null, // code-based redemption doesn't go through a tracked link
    external_id: session.id,
    order_value_pence: orderValuePence,
    commission_pence: commissionPence,
    // Flat-rate system has no percentage rate; matches /api/affiliate/track-conversion.
    commission_rate: 0,
    tier_at_conversion: tierAtConversion,
    currency,
    product_type: isSubscription ? 'subscription' : 'one_time',
    referred_user_id: referredUserId,
    // The schema constraint only allows 'first-touch' / 'last-touch'.
    // Code-based redemption is conceptually a "touch" at redemption
    // time, so we record it as 'last-touch' and flag the actual source
    // ('promo_redeem') in `metadata` for downstream reporting.
    attribution_model: 'last-touch',
    touched_at: new Date().toISOString(),
    status,
    voided_reason: voidedReason,
    metadata: {
      promoCode,
      sessionMode: session.mode,
      source: 'promo_redeem',
      attribution_kind: 'code',
    },
  })

  if (insertErr) {
    throw new Error(
      `affiliate_conversions insert failed for session ${session.id}: ${insertErr.message} (code: ${insertErr.code ?? 'unknown'})`,
    )
  }

  console.log(
    `[stripe/webhook] recorded code-based conversion: session=${session.id} affiliate=${affiliateId} code=${promoCode} commission=${commissionPence}p tier=${tierInfo.tier}`,
  )
}

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session,
  supabase: ReturnType<typeof createServiceRoleClient>,
  eventId?: string | null,
) {
  // Supabase auth uuid - `profiles.id`, NOT the Prisma `User.id`.
  const userId = session.metadata?.userId
  if (!userId) {
    throw new WebhookMetadataError(
      `checkout.session.completed: missing userId in metadata (session ${session.id})`,
    )
  }

  if (session.mode === 'subscription') {
    const subscriptionId = session.subscription as string
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const isLive = ACCESS_GRANTING_STATUSES.has(subscription.status)
    const subscriptionStatus = isLive ? 'pro' : 'incomplete'

    // IELTS is a standalone product — an IELTS-only checkout must set
    // ielts_status (below, via syncIeltsEntitlement) but must NOT touch the
    // global subscription_status='pro' (which would wrongly unlock GCSE/Student).
    // For a brand-new IELTS-only buyer subscription_status simply stays its
    // existing value (default 'free').
    const ieltsOnly = isIeltsOnlySubscription(subscription)

    // A not-yet-live first status is written only over a non-pro profile;
    // see profileIsPro (webhook:D10).
    const writeStatus = !ieltsOnly && (isLive || !(await profileIsPro(supabase, userId)))

    // This subscription was RETRIEVED through the pinned client, so it arrives
    // in the clover shape with the period on its items. Reading the top-level
    // field here meant checkout never wrote an end date.
    const cpEnd = subscriptionPeriodEnd(subscription)
    const subscriptionEndDate = cpEnd ? new Date(cpEnd * 1000).toISOString() : null

    // Not for an IELTS-only subscription: the end date is the main
    // entitlement's (see the same patch in customer.subscription.created).
    const profilePatch = {
      ...(writeStatus ? { subscription_status: subscriptionStatus } : {}),
      ...(!ieltsOnly &&
        (isLive || writeStatus) &&
        subscriptionEndDate && { subscription_end_date: subscriptionEndDate }),
    }

    if (Object.keys(profilePatch).length > 0) {
      const { error } = await supabase.from('profiles').update(profilePatch).eq('id', userId)

      if (error) {
        console.error(`Failed to update subscription_status to ${subscriptionStatus}:`, error)
        throw error
      }
    }

    // IELTS standalone entitlement: if this checkout was for an IELTS price,
    // set profiles.ielts_status. Does nothing for GCSE/Student checkouts.
    await syncIeltsEntitlement(userId, subscription, supabase)

    // Ensure the Prisma `Subscription` row exists at checkout time. This
    // is the first event in the subscription lifecycle, so the rest of
    // the app sees the new subscription immediately rather than waiting
    // for the trailing `customer.subscription.created`.
    const prismaUserId = await recordSubscriptionRow(
      userId,
      subscription,
      'checkout.session.completed',
      eventId,
    )

    // Grandfathering capture (R-031). Lock the price + tier on the Prisma
    // Subscription row at signup so renewals after the Aug 2026 Standard
    // rollover still charge / display the Early Access price. Preserves any
    // pre-existing locked price on an existing row - never overwrites.
    //
    // This block was querying `where: { userId }` with the SUPABASE uuid as
    // well, so `existingSub` was always null and the `if (existingSub)` guard
    // meant nothing was ever written: no web subscriber has a locked price
    // recorded. It now uses the Prisma id the row was actually written
    // against, and is skipped entirely when the row could not be written (the
    // sync call above has already reported that). An IELTS-only checkout
    // writes no row (see recordSubscriptionRow), so it has nothing to capture
    // onto: the grandfathered price is a main-plan price.
    if (ieltsOnly) {
      // Nothing to do, and nothing went wrong.
    } else if (!prismaUserId) {
      console.error(
        '[stripe/webhook] Skipping grandfather capture: no Subscription row for session',
        { sessionId: session.id, supabaseUserId: userId },
      )
    } else {
      try {
        const existingSub = await prisma.subscription.findUnique({
          where: { userId: prismaUserId },
        })
        if (!existingSub?.grandfatheredPriceMinor) {
          const isTeacherPlan = existingSub?.isTeacherPlan ?? false
          const plan: PricingPlan =
            existingSub?.plan === 'ANNUAL' ||
            subscription.items.data[0]?.price?.recurring?.interval === 'year'
              ? 'ANNUAL'
              : 'MONTHLY'
          const grandfather = captureGrandfatherFields(plan, isTeacherPlan ? 'teacher' : 'student')
          if (existingSub) {
            await prisma.subscription.update({
              where: { userId: prismaUserId },
              data: {
                grandfatheredPriceMinor: grandfather.grandfatheredPriceMinor,
                grandfatheredCurrency: grandfather.grandfatheredCurrency,
                pricingTier: grandfather.pricingTier,
              },
            })
          }
        }
      } catch (err) {
        // Non-fatal - grandfathering capture must not break checkout.
        console.error('[stripe/webhook] Grandfather capture failed (non-fatal):', err)
      }
    }
  }

  if (session.mode === 'payment') {
    const courseId = session.metadata?.courseId
    if (!courseId) {
      throw new WebhookMetadataError(
        `checkout.session.completed (payment): missing courseId in metadata (session ${session.id})`,
      )
    }

    const { error } = await supabase.from('enrolments').upsert(
      {
        user_id: userId,
        course_id: courseId,
        payment_type: 'one_time',
        stripe_payment_intent_id: session.payment_intent as string,
      },
      { onConflict: 'user_id,course_id' },
    )

    if (error) {
      console.error('Failed to create enrolment record:', error)
      throw error
    }
  }
}

async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>,
  eventId?: string | null,
): Promise<string | null> {
  // Supabase auth uuid throughout - see the identity note at the top. A
  // database fault on the lookup throws so that Stripe retries; no profile at
  // all is answered with an ignored reason (see resolveSubscriptionUser).
  const resolved = await resolveSubscriptionUser(
    subscription,
    supabase,
    'customer.subscription.updated',
    eventId,
  )
  if (!resolved.userId) return resolved.ignored
  const userId = resolved.userId

  // `null` means "leave profiles.subscription_status as it is". past_due is
  // null by choice (23 October 2026): the customer keeps access through
  // Stripe's retry window and loses it on `unpaid` or on deletion. See the
  // invoice.payment_failed handler for the reasoning and how to reverse it.
  const statusMap: Record<string, string | null> = {
    active: 'pro',
    trialing: 'pro',
    past_due: null,
    canceled: 'cancelled',
    unpaid: 'unpaid',
    incomplete: 'incomplete',
    incomplete_expired: 'cancelled',
    paused: 'paused',
  }

  let subscriptionStatus =
    subscription.status in statusMap ? statusMap[subscription.status] : 'free'
  // Both API shapes. When neither carries a period the stored end date is
  // left alone below: this handler used to write `subscription_end_date:
  // null` for every clover-shaped payload, wiping a real date each renewal.
  const periodEndUpdate = subscriptionPeriodEnd(subscription)
  const subscriptionEndDate = periodEndUpdate
    ? new Date(periodEndUpdate * 1000).toISOString()
    : null

  // P1 (Cycle 2 security audit): Stripe does not guarantee webhook delivery
  // order. An `customer.subscription.updated` with `status: 'active'` that
  // arrives AFTER a `customer.subscription.deleted` has already fired would
  // silently re-grant Pro to a cancelled user. Guard: if the stored state
  // is already terminal (`cancelled`/`unpaid`) and the subscription's
  // canonical end date has passed, refuse to upgrade back to `pro`. A genuine
  // re-subscription comes through `checkout.session.completed` and
  // `customer.subscription.created` (which acts on Stripe's current state of
  // the new subscription), not a late-arriving `.updated`. The profile read
  // throws on a database error rather than reading it as "not terminal".
  if (subscriptionStatus === 'pro') {
    const profileState = await readProfileState(supabase, userId)
    if (profileState.terminal && profileState.endDatePassed) {
      console.warn('[stripe/webhook] Refusing to re-grant Pro via stale subscription.updated', {
        subscriptionId: subscription.id,
        userId,
        currentStatus: profileState.status,
        currentEndDate: profileState.endDate,
        incomingStatus: subscriptionStatus,
      })
      return 'stale_event'
    }
  }

  // IELTS-only subscriptions must not touch the global subscription_status
  // (that would wrongly grant/clobber GCSE 'pro'); their entitlement is
  // ielts_status, synced below via syncIeltsEntitlement.
  const ieltsOnly = isIeltsOnlySubscription(subscription)

  // ── Does another subscription still justify the access? ────────────────
  // `profiles.subscription_status` is one field per person. The September
  // 2026 duplicate (see handleSubscriptionDeleted) revoked a paid customer
  // through invoice.payment_failed and .deleted; this handler mirrored
  // past_due, unpaid and cancelled straight onto the profile and wrote the
  // duplicate over the Prisma row of the live subscription, so the same
  // outcome stayed open here until 23 October 2026.
  //
  // So for any NON-live status, ask Stripe whether the customer holds another
  // subscription that still keeps the web gate open (or, for an IELTS-only
  // subscription, another that carries IELTS). If so, write nothing - not the
  // profile, not the IELTS flag, not the Prisma row - and say so. The question
  // is about access, not prices: judged per price, a customer who moved from
  // monthly to annual was revoked when the monthly plan ended, and two dead
  // subscriptions covered each other. See findCoveringSubscription, which
  // throws when Stripe cannot be asked, so that "unknown" releases the claim
  // and Stripe retries instead of being read as "not covered". A live status
  // needs no check and pays for no Stripe call.
  const incomingIsLive = ACCESS_GRANTING_STATUSES.has(subscription.status)
  if (!incomingIsLive) {
    const cover = await findCoveringSubscription(stripe, subscription.customer as string, {
      excludeSubscriptionId: subscription.id,
      grants: ieltsOnly ? 'ielts' : 'pro',
      isIeltsPriceId,
    })

    // ── Is this snapshot stale? (24 October 2026) ─────────────────────────
    // The payload is the subscription as it was when the event was created,
    // and Stripe delivers in no particular order. When the check above throws
    // (Stripe could not be asked) the claim is released and Stripe retries,
    // so an 'unpaid' or 'past_due' snapshot can be delivered AFTER the
    // customer has paid and the subscription is active again. This handler
    // acted on the snapshot: the list just fetched excluded this very
    // subscription and its current status was never read, so a paying
    // customer was written 'unpaid' and their row PAST_DUE. The stale-event
    // guard above refuses only a re-grant of 'pro', and created and
    // invoice.paid already act on Stripe's current state. So when the same
    // list shows this subscription active or trialing now, the non-live
    // snapshot is out of date and nothing is written. No extra Stripe call.
    if (cover.current && ACCESS_GRANTING_STATUSES.has(cover.current.status)) {
      console.warn(
        `[stripe/webhook] STALE_SUBSCRIPTION_UPDATED_IGNORED subscription=${subscription.id} ` +
          `customer=${subscription.customer} snapshotStatus=${subscription.status} ` +
          `currentStatus=${cover.current.status}. Stripe now holds this subscription live, so ` +
          'this non-live snapshot is stale and writes nothing.',
      )
      return 'stale_event'
    }

    if (cover.covered) {
      console.warn(
        `[stripe/webhook] DUPLICATE_SUBSCRIPTION_UPDATED_IGNORED customer=${subscription.customer} ` +
          `updated=${subscription.id} incomingStatus=${subscription.status} ` +
          `coveredBy=${cover.coveringSubscription?.id} status=${cover.coveringSubscription?.status}. ` +
          'Entitlement and Prisma row left intact: the customer holds another subscription that ' +
          'still grants this access. If both carry the same price it is a duplicate: cancel it and ' +
          'void its open invoice.',
      )
      return 'covered_by_other_subscription'
    }
  }

  // A subscription that never reached active or trialing (`incomplete`, and
  // `incomplete_expired` a day later) never granted anything, so its status
  // cannot be a revocation of anything. A profile that is 'pro' when such a
  // subscription stalls or expires owes that 'pro' to something else - a
  // no-card trial, or another plan the coverage check above did not see - and
  // neither the status nor the period end is written over it (webhook:D10).
  // Until 23 October 2026 `incomplete_expired` wrote 'cancelled' here, which
  // ended a seven-day trial on day two when a checkout stalled at the bank.
  let heldBackForPro = false
  const neverLive =
    subscription.status === 'incomplete' || subscription.status === 'incomplete_expired'
  if (neverLive && !ieltsOnly && (await profileIsPro(supabase, userId))) {
    subscriptionStatus = null
    heldBackForPro = true
    console.info(
      `[stripe/webhook] NEVER_LIVE_STATUS_HELD_BACK subscription=${subscription.id} ` +
        `status=${subscription.status} user=${userId}. The profile is 'pro' through something ` +
        'this subscription never granted, so its status and period end are not written over it.',
    )
  }

  // past_due writes no status, only the period end, so on its own it could
  // move the end date of a profile that is already terminal. A subscription
  // never comes back from canceled, so a past_due arriving over a 'cancelled'
  // or 'unpaid' profile is a stale delivery; writing its (future) period end
  // there unlocked the stale-event guard above, which refuses to re-grant only
  // while that date is in the past, and a late `active` for the same
  // subscription then wrote 'pro' over a cancelled customer. So the date is
  // not written over a terminal profile. One profile read, on past_due only.
  let staleRetryWindow = false
  if (subscriptionStatus === null && !heldBackForPro && !ieltsOnly && subscriptionEndDate) {
    const profileState = await readProfileState(supabase, userId)
    if (profileState.terminal) {
      staleRetryWindow = true
      console.warn(
        `[stripe/webhook] STALE_PAST_DUE_END_DATE_IGNORED subscription=${subscription.id} ` +
          `user=${userId} profileStatus=${profileState.status}. The profile is already ` +
          'terminal, so this past_due delivery does not move its end date.',
      )
    }
  }

  // The end date belongs to whichever subscription is granting access. It is
  // written with a status (including past_due's null, which is the customer's
  // own subscription in its retry window), and not when the status was held
  // back as above, when the subscription is IELTS-only, or over a terminal
  // profile on past_due, so that none of them moves the date a Pro plan or a
  // trial is running on or reopens the stale-event guard.
  const profilePatch = {
    ...(ieltsOnly || subscriptionStatus === null
      ? {}
      : { subscription_status: subscriptionStatus }),
    ...(subscriptionEndDate && !ieltsOnly && !heldBackForPro && !staleRetryWindow
      ? { subscription_end_date: subscriptionEndDate }
      : {}),
  }

  if (Object.keys(profilePatch).length > 0) {
    const { error } = await supabase.from('profiles').update(profilePatch).eq('id', userId)

    if (error) {
      console.error('Failed to update subscription_status:', error)
      throw error
    }
  }

  // IELTS standalone entitlement: track active/cancelled for IELTS prices.
  await syncIeltsEntitlement(userId, subscription, supabase)

  // Keep the Prisma `Subscription` row in lock-step with the profile.
  await recordSubscriptionRow(userId, subscription, 'customer.subscription.updated', eventId)
  return null
}

async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>,
  eventId?: string | null,
): Promise<string | null> {
  // Supabase auth uuid throughout - see the identity note at the top. A
  // database fault on the lookup throws so that Stripe retries; no profile at
  // all is answered with an ignored reason (see resolveSubscriptionUser).
  const resolved = await resolveSubscriptionUser(
    subscription,
    supabase,
    'customer.subscription.deleted',
    eventId,
  )
  if (!resolved.userId) return resolved.ignored
  const userId = resolved.userId

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sub = subscription as any
  const endTimestamp: number | null | undefined =
    sub.ended_at ?? sub.cancel_at ?? subscriptionPeriodEnd(subscription)
  const subscriptionEndDate = endTimestamp
    ? new Date(endTimestamp * 1000).toISOString()
    : new Date().toISOString()

  // IELTS-only cancellation must NOT set subscription_status='cancelled' — doing
  // so would clobber a separately-held GCSE 'pro'. We only clear ielts_status
  // (via syncIeltsEntitlement below). Non-IELTS deletions still cancel globally.
  const ieltsOnly = isIeltsOnlySubscription(subscription)

  // ── The same carve-out, generalised ──────────────────────────────────────
  // The IELTS rule above exists because one person can hold two entitlements
  // and `profiles.subscription_status` is a single field. The same is true of
  // two subscriptions for the SAME product, which is not a hypothetical: on
  // 8 September 2026 a customer acquired two Teachers Annual subscriptions.
  // When the duplicate's dunning finished on 18 September this handler ran and
  // wrote 'cancelled' over a subscription she had paid GBP 67.99 for and which
  // Stripe still showed Active until 2027. She lost her access, and the only
  // reason anybody found out is that she emailed us.
  //
  // So before cancelling globally, ask Stripe whether the customer still holds
  // another subscription that keeps the web gate open (or, for an IELTS-only
  // deletion, another that carries IELTS). If they do, this deletion must not
  // touch the entitlement. The question is about ACCESS, not prices: until
  // 23 October 2026 it was asked per price, so a customer who held Student
  // Monthly, bought Student Annual and then cancelled the monthly plan was
  // revoked when the monthly subscription ended, because the annual one did
  // not carry the monthly price. And it fails CLOSED: when Stripe cannot be
  // asked, findCoveringSubscription throws, the claim is released and Stripe
  // retries, instead of "unknown" being read as "not covered" and a paid
  // customer cancelled, which is what the 18 September deletion did.
  const cover = await findCoveringSubscription(stripe, subscription.customer as string, {
    excludeSubscriptionId: subscription.id,
    grants: ieltsOnly ? 'ielts' : 'pro',
    isIeltsPriceId,
  })

  if (cover.covered) {
    console.warn(
      `[stripe/webhook] DUPLICATE_SUBSCRIPTION_DELETED_IGNORED customer=${subscription.customer} ` +
        `deleted=${subscription.id} stillCoveredBy=${cover.coveringSubscription?.id} ` +
        `status=${cover.coveringSubscription?.status}. Entitlement left intact: the customer ` +
        'holds another subscription that still grants this access.',
    )
  }

  const revokeEntitlement = !ieltsOnly && !cover.covered

  // The end date goes only with the revocation. It belongs to whichever
  // subscription is actually granting access, and the stale-event guard on
  // `customer.subscription.updated` refuses to re-grant Pro once this date has
  // passed. Writing a covered duplicate's end date here is what made the
  // obvious repair - touching the good subscription in the dashboard -
  // silently fail with 'Refusing to re-grant Pro'; and an IELTS-only
  // cancellation has no business moving the date a Pro plan runs on either.
  const profilePatch = revokeEntitlement
    ? { subscription_status: 'cancelled', subscription_end_date: subscriptionEndDate }
    : {}

  if (Object.keys(profilePatch).length > 0) {
    const { error } = await supabase.from('profiles').update(profilePatch).eq('id', userId)

    if (error) {
      console.error('Failed to set subscription_status to cancelled:', error)
      throw error
    }
  }

  if (!cover.covered) {
    // IELTS standalone entitlement: clear ielts_status on cancellation of an
    // IELTS subscription (no-op for non-IELTS subscriptions). Skipped when
    // covered: the live subscription carries the same prices, so clearing
    // the flag here would take away what it still grants.
    await syncIeltsEntitlement(userId, subscription, supabase)

    // Mirror cancellation onto the Prisma `Subscription` row. Skipped when
    // covered: one row per user, so this write would replace the live
    // subscription's id, status and period with the duplicate's. That is
    // exactly what happened on 18 September 2026 once the entitlement write
    // above had been guarded and this one had not.
    await recordSubscriptionRow(userId, subscription, 'customer.subscription.deleted', eventId)
  }

  // Void any pending/confirmed affiliate commissions for this subscription.
  // Keyed on the subscription id, so it is correct for a duplicate too.
  const { error: voidError, count: voidedCount } = await supabase
    .from('affiliate_referrals')
    .update({
      commission_status: 'voided',
      commission_voided_reason: 'Subscription cancelled before payout',
    })
    .eq('stripe_subscription_id', subscription.id)
    .in('commission_status', ['pending', 'confirmed'])

  if (voidError) {
    console.error(
      `[stripe/webhook] Failed to void affiliate commissions for subscription ${subscription.id}:`,
      voidError,
    )
  }

  // ── M7, "your plan has ended" (added 23 October 2026) ────────────────────
  // Beside the writes above, which it does not change. Only when this event
  // revoked the entitlement: a duplicate being cleaned up and an IELTS-only
  // plan are both skipped, because "your account stays open on the free plan"
  // would be false for someone who still holds a paid plan. Behind
  // TRIAL_LIFECYCLE_EMAILS_ENABLED; one per subscription; never throws.
  //
  // Merged 24 October 2026. fix/stripe-webhook-2026-10-23 made this handler
  // return an ignored reason (hence `return null` below) and changed what
  // `revokeEntitlement` means: coverage is now "another subscription keeps the
  // web gate open", not "another carries the same price", and Stripe being
  // unreachable throws before this line instead of reading as "not covered".
  // Both narrow the email to the customers who really lost access, so the
  // lifecycle branch's condition is kept as it was.
  //
  // Not when an IELTS plan remains (24 October 2026). An IELTS-only plan is
  // rightly not cover for 'pro', so the main plan ending beside a live IELTS
  // plan revokes, and M7 told a customer still paying for IELTS "Your account
  // stays open on the free plan" and "AI marking and the other paid features
  // have stopped", while their IELTS writing feedback (hasIeltsAccess) was
  // still open: the false sentence this comment already ruled out. The
  // cancel route handles the same case with otherPlanRemains. Here the email
  // is skipped rather than given new wording; a variant that names the IELTS
  // plan is copy for the founder to approve. An IELTS plan in its retry
  // window counts, because past_due leaves ielts_status as it is.
  const ieltsPlanRemains = cover.others.some(
    (other) => WEB_ACCESS_STATUSES.has(other.status) && carriesIelts(other, isIeltsPriceId),
  )
  if (revokeEntitlement && ieltsPlanRemains) {
    console.info(
      `[stripe/webhook:plan-ended] skipped subscription=${subscription.id} user=${userId}: an ` +
        'IELTS plan remains, so "your account stays open on the free plan" would be false.',
    )
  } else if (revokeEntitlement) {
    const customerId = subscription.customer as string
    await sendPlanEndedEmail({
      supabaseUserId: userId,
      subscriptionId: subscription.id,
      resolveEmail: () => resolveCustomerEmail(customerId, supabase),
    })
  }
  return null
}

/**
 * The address to write to about a subscription: the Stripe customer's email
 * first, then the profile's, as the other notices in this file resolve it.
 * Null when neither is held. Never throws.
 */
async function resolveCustomerEmail(
  customerId: string,
  supabase: ReturnType<typeof createServiceRoleClient>,
): Promise<string | null> {
  try {
    const customer = await stripe.customers.retrieve(customerId)
    if (!customer.deleted && customer.email) return customer.email
  } catch (err) {
    console.warn('[stripe/webhook] Failed to retrieve Stripe customer for an email:', err)
  }
  try {
    const { data: profile } = await supabase
      .from('profiles')
      .select('email')
      .eq('stripe_customer_id', customerId)
      .single()
    return (profile as { email?: string | null } | null)?.email ?? null
  } catch {
    return null
  }
}

/**
 * `customer.subscription.trial_will_end` - Stripe fires this three days
 * before `trial_end` on any subscription that has a trial.
 *
 * WHO RECEIVES THIS. A checkout started at /api/stripe/checkout always sets
 * `subscription_data.trial_period_days = PRICING.TRIAL_DAYS`, so every
 * subscriber who came through that route - monthly or annual - gets this
 * email three days into their first week. It is not limited to people who
 * have paid nothing: it is the card-on-file trial notice, and the customer
 * has already entered payment details and chosen a plan.
 *
 * Not every web subscription comes through there. /api/promo/redeem creates
 * an annual subscription with no trial, so Stripe fires no trial_will_end for
 * it and those customers never see this email.
 *
 * That is why the copy below is careful about the charge. The previous
 * wording said only that "your subscription will automatically begin", which
 * an annual subscriber who believes they have already bought a year reads as
 * "we are about to bill you a second time" - and at least one customer did
 * read it exactly that way and wrote in.
 *
 * The copy names the one payment THIS subscription takes and stops there. It
 * deliberately does NOT say the charge is not a duplicate of something else.
 * Both checkout routes now refuse a second subscription for a price the
 * customer already holds (`findDuplicateSubscription`), but that guard fails
 * open when Stripe is unreachable, it only shipped on 18 September 2026, and
 * duplicates created before it are still live in Stripe. This handler checks
 * none of that, so asserting "not an extra charge" would be reassuring exactly
 * the customer we would be wrong about. Instead the copy invites them to tell
 * us, and promises to put it right - including the case that actually happened,
 * where nothing was taken twice and what was needed was cancelling a live
 * subscription that kept retrying.
 *
 * Claims in this email and what supports them:
 *   - the trial end date: `subscription.trial_end` on the Stripe object.
 *   - "the first payment for the plan you chose": every trial here is the
 *     7-day trial attached at checkout, so the invoice at trial end is the
 *     first one on this subscription.
 *   - No amount is stated. The Stripe object in hand is the subscription,
 *     not the upcoming invoice, so an amount here would be asserted rather
 *     than read, and a wrong figure in a billing email is worse than none.
 *   - "your billing page shows your plan and the date it renews" and the
 *     Manage subscription button: both are rendered by
 *     src/app/account/billing/page.tsx.
 */
async function handleTrialWillEnd(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>,
) {
  const customerId = subscription.customer as string

  // Resolve customer email - first try Stripe, then fall back to profiles table
  let customerEmail: string | null = null

  try {
    const customer = await stripe.customers.retrieve(customerId)
    if (!customer.deleted && customer.email) {
      customerEmail = customer.email
    }
  } catch (err) {
    console.warn('[stripe/webhook] Failed to retrieve Stripe customer for trial_will_end:', err)
  }

  if (!customerEmail) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('email')
      .eq('stripe_customer_id', customerId)
      .single()

    customerEmail = profile?.email ?? null
  }

  const trialEndTimestamp = subscription.trial_end
  const trialEndDate = trialEndTimestamp ? new Date(trialEndTimestamp * 1000) : null
  const trialEndFormatted = trialEndDate
    ? trialEndDate.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'soon'

  console.info(
    JSON.stringify({
      event: 'customer.subscription.trial_will_end',
      subscriptionId: subscription.id,
      trialEnd: trialEndDate?.toISOString() ?? null,
    }),
  )

  if (!customerEmail) {
    console.error(
      '[stripe/webhook] trial_will_end: could not resolve email for customer, skipping notification',
    )
    return
  }

  // Send trial-ending notification via Resend
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    console.warn('[stripe/webhook] RESEND_API_KEY not configured - skipping trial_will_end email')
    return
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
  const billingUrl = `${siteUrl}/account/billing`
  const fromAddress = 'The English Hub <noreply@theenglishhub.app>'
  const subject = 'Your free trial is ending soon - The English Hub'
  const endingPhrase = trialEndFormatted === 'soon' ? 'soon' : `on ${trialEndFormatted}`

  const html = [
    `<h2>Your trial is ending ${endingPhrase}</h2>`,
    `<p>Hi there,</p>`,
    `<p>Just a friendly heads-up that your free trial of <strong>The English Hub Premium</strong> ` +
      `will end <strong>${endingPhrase}</strong>.</p>`,
    `<p>When it does, this subscription starts and we take the first payment for the plan you ` +
      `chose when you signed up. That is the only payment this subscription takes before it ` +
      `renews.</p>`,
    `<p>Your <a href="${billingUrl}">billing page</a> shows your plan and the date it renews, ` +
      `and the Manage subscription button there opens your billing portal, where you can change ` +
      `or cancel the plan before the trial ends.</p>`,
    `<p>If you think you already hold another subscription with us, or anything on that page ` +
      `does not look right, email ` +
      `<a href="mailto:support@theenglishhub.app">support@theenglishhub.app</a>. We will check ` +
      `it, cancel anything you should not be paying for, and refund anything that has been taken ` +
      `twice.</p>`,
    `<br />`,
    `<p>Best regards,<br />The English Hub Team</p>`,
  ].join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: customerEmail,
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const errorBody = await res.text()
      console.error(
        `[stripe/webhook] Failed to send trial_will_end email to ${customerEmail}: ${res.status} ${errorBody}`,
      )
    }
  } catch (err) {
    // Log but do not fail the webhook - email is non-critical
    console.error('[stripe/webhook] Error sending trial_will_end email:', err)
  }
}
