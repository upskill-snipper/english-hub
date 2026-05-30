import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe, isIeltsPriceId } from '@/lib/stripe'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { attributeAffiliateReferral } from '@/lib/affiliate/attribution'
import { calculateCommissionPence, getCurrentTierInfo } from '@/lib/affiliate/tiers'
import { prisma } from '@/lib/prisma'
import { captureGrandfatherFields, type Plan as PricingPlan } from '@/lib/pricing/grandfather'

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
 * Map a Stripe subscription `status` to our Prisma `SubscriptionStatus`
 * enum. Kept narrow on purpose - `incomplete` / `unpaid` etc. fall back
 * to `PAST_DUE` so the entitlement layer still revokes Pro access.
 */
function mapStripeToPrismaStatus(
  stripeStatus: Stripe.Subscription.Status,
): 'ACTIVE' | 'CANCELLED' | 'PAST_DUE' | 'TRIALING' | 'PAUSED' {
  switch (stripeStatus) {
    case 'active':
      return 'ACTIVE'
    case 'trialing':
      return 'TRIALING'
    case 'past_due':
    case 'unpaid':
    case 'incomplete':
    case 'incomplete_expired':
      return 'PAST_DUE'
    case 'canceled':
      return 'CANCELLED'
    case 'paused':
      return 'PAUSED'
    default:
      return 'PAST_DUE'
  }
}

/**
 * Upsert the public."Subscription" Prisma row that the rest of the app
 * (entitlements, renewal reminders, growth dashboard) reads from. The
 * Stripe webhook is the canonical point of truth for web-originated
 * subscriptions; without this call the row only existed for mobile
 * (RevenueCat) users.
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

async function upsertStripeSubscriptionRow(
  userId: string,
  subscription: Stripe.Subscription,
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sub = subscription as any
  const periodStart = sub.current_period_start as number | undefined
  const periodEnd = sub.current_period_end as number | undefined
  // `items` is sometimes absent on test fixtures and on certain Stripe
  // event shapes; tolerate that and default to MONTHLY.
  const interval = subscription.items?.data?.[0]?.price?.recurring?.interval
  const plan: 'MONTHLY' | 'ANNUAL' = interval === 'year' ? 'ANNUAL' : 'MONTHLY'
  const status = mapStripeToPrismaStatus(subscription.status)
  const cancelledAt =
    subscription.status === 'canceled' && sub.ended_at ? new Date(sub.ended_at * 1000) : null

  try {
    await prisma.subscription.upsert({
      where: { userId },
      create: {
        userId,
        stripeCustomerId: subscription.customer as string,
        stripeSubscriptionId: subscription.id,
        plan,
        status,
        currentPeriodStart: periodStart ? new Date(periodStart * 1000) : new Date(),
        currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : new Date(),
        cancelledAt,
        platform: 'WEB',
      },
      update: {
        stripeCustomerId: subscription.customer as string,
        stripeSubscriptionId: subscription.id,
        plan,
        status,
        ...(periodStart && { currentPeriodStart: new Date(periodStart * 1000) }),
        ...(periodEnd && { currentPeriodEnd: new Date(periodEnd * 1000) }),
        cancelledAt,
      },
    })
  } catch (err) {
    // Log but do not fail the webhook - the Supabase profile write is the
    // load-bearing one for entitlement gating; the Prisma row is the
    // canonical record for renewals / dashboards and can be back-filled.
    console.error('[stripe/webhook] Failed to upsert Subscription row:', err)
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

  // Idempotency check - skip if this event has already been processed
  const { data: existing } = await supabase
    .from('webhook_events')
    .select('event_id')
    .eq('event_id', event.id)
    .single()
  if (existing) {
    return NextResponse.json({ received: true })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session, supabase)

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
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription, supabase)
        break
      }

      case 'customer.subscription.deleted': {
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription, supabase)
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

        // Mark the profile past_due immediately. Stripe will eventually fire
        // a `customer.subscription.updated` with `status: 'past_due'`, but
        // delivery order / lag is not guaranteed - flipping the flag here
        // keeps the entitlement gate honest from the moment the charge fails.
        if (failedProfile) {
          const { error: pastDueError } = await supabase
            .from('profiles')
            .update({ subscription_status: 'past_due' })
            .eq('id', failedProfile.id)

          if (pastDueError) {
            console.error(
              '[stripe/webhook] Failed to set subscription_status=past_due:',
              pastDueError,
            )
            throw pastDueError
          }
        }

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
            const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
            const billingUrl = `${siteUrl}/account/billing`
            const fromAddress = 'The English Hub <noreply@theenglishhub.app>'
            const subject = 'Action Required: Payment Failed - The English Hub'

            const html = [
              `<h2>Your payment was unsuccessful</h2>`,
              `<p>Hi there,</p>`,
              `<p>We were unable to process your latest payment for <strong>The English Hub Premium</strong>.</p>`,
              `<p>To avoid any interruption to your subscription, please update your payment method at your earliest convenience.</p>`,
              `<p><a href="${billingUrl}">Update your payment method</a></p>`,
              `<p>If you believe this is an error or need any help, feel free to reach out to our support team.</p>`,
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
                  `[stripe/webhook] Failed to send payment_failed email: ${res.status} ${errorBody}`,
                )
              }
            } catch (err) {
              // Log but do not fail the webhook - email is non-critical
              console.error('[stripe/webhook] Error sending payment_failed email:', err)
            }
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
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string

        const { data: paidProfile } = await supabase
          .from('profiles')
          .select('id, email, subscription_status')
          .eq('stripe_customer_id', customerId)
          .single()

        // If this is a subscription invoice, ensure status is 'pro'
        // (handles edge case where payment succeeds after past_due)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const invoiceAny = invoice as any
        if (paidProfile && invoiceAny.subscription) {
          const periodEnd = invoiceAny.period_end as number | undefined
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
        }
        break
      }

      case 'charge.succeeded': {
        break
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge

        try {
          // Resolve subscription ID - may be directly on the charge or via the invoice
          let subscriptionId: string | null = null

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const chargeAny = charge as any
          if (!subscriptionId && chargeAny.invoice) {
            const invoiceId =
              typeof chargeAny.invoice === 'string' ? chargeAny.invoice : chargeAny.invoice?.id
            if (invoiceId) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const invoice = (await stripe.invoices.retrieve(invoiceId)) as any
              subscriptionId =
                typeof invoice.subscription === 'string' ? invoice.subscription : null
            }
          }

          if (!subscriptionId) {
            console.warn(
              `[stripe/webhook] charge.refunded: could not resolve subscription for charge ${charge.id}, skipping commission void`,
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
          // Log but do not fail the webhook - commission voiding is non-critical
          console.error('[stripe/webhook] charge.refunded handler error:', err)
        }

        break
      }

      case 'customer.subscription.trial_will_end': {
        const subscription = event.data.object as Stripe.Subscription
        await handleTrialWillEnd(subscription, supabase)
        break
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription

        let userId = subscription.metadata?.userId
        if (!userId) {
          // Fallback: look up user by stripe_customer_id
          const customerId = subscription.customer as string
          const { data: profile } = await supabase
            .from('profiles')
            .select('id')
            .eq('stripe_customer_id', customerId)
            .single()
          if (profile) userId = profile.id
        }
        if (!userId) {
          // Loud, structured error so it shows up in Sentry / log search.
          // Returning 500 makes Stripe retry - preferable to silently
          // dropping a paying customer's first subscription event.
          console.error(
            JSON.stringify({
              level: 'error',
              event: 'customer.subscription.created',
              error: 'unresolved_user',
              subscriptionId: subscription.id,
              customerId: subscription.customer,
              metadata: subscription.metadata,
            }),
          )
          return NextResponse.json(
            { error: 'Could not resolve user for subscription' },
            { status: 500 },
          )
        }

        const activeStatuses = ['active', 'trialing']
        const subscriptionStatus = activeStatuses.includes(subscription.status)
          ? 'pro'
          : 'incomplete'

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const periodEnd = (subscription as any).current_period_end as number | undefined
        const subscriptionEndDate = periodEnd ? new Date(periodEnd * 1000).toISOString() : null

        const { error } = await supabase
          .from('profiles')
          .update({
            subscription_status: subscriptionStatus,
            ...(subscriptionEndDate && { subscription_end_date: subscriptionEndDate }),
          })
          .eq('id', userId)

        if (error) {
          console.error('Failed to update profile for new subscription:', error)
          throw error
        }

        // Mirror to the Prisma `Subscription` row so entitlements,
        // renewal reminders, and the growth dashboard see the new
        // subscription. (Until now this row was only created by the
        // RevenueCat mobile reconciler.)
        await upsertStripeSubscriptionRow(userId, subscription)
        break
      }

      default: {
        // Unhandled event type - acknowledge receipt
        break
      }
    }

    // Record processed event for idempotency (non-fatal if table doesn't exist)
    try {
      await supabase.from('webhook_events').insert({
        event_id: event.id,
        event_type: event.type,
        processed_at: new Date().toISOString(),
      })
    } catch {
      // Non-fatal
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    if (error instanceof WebhookMetadataError) {
      console.error(`Missing metadata in ${event.type}: ${error.message}`)
      return NextResponse.json(
        { error: 'Missing required metadata in webhook event' },
        { status: 400 },
      )
    }

    console.error(`Error handling webhook event ${event.type}:`, error)
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
) {
  const userId = session.metadata?.userId
  if (!userId) {
    throw new WebhookMetadataError(
      `checkout.session.completed: missing userId in metadata (session ${session.id})`,
    )
  }

  if (session.mode === 'subscription') {
    const subscriptionId = session.subscription as string
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const activeStatuses = ['active', 'trialing']
    const subscriptionStatus = activeStatuses.includes(subscription.status) ? 'pro' : 'incomplete'

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cpEnd = (subscription as any).current_period_end as number | undefined
    const subscriptionEndDate = cpEnd ? new Date(cpEnd * 1000).toISOString() : null

    const { error } = await supabase
      .from('profiles')
      .update({
        subscription_status: subscriptionStatus,
        ...(subscriptionEndDate && { subscription_end_date: subscriptionEndDate }),
      })
      .eq('id', userId)

    if (error) {
      console.error(`Failed to update subscription_status to ${subscriptionStatus}:`, error)
      throw error
    }

    // IELTS standalone entitlement: if this checkout was for an IELTS price,
    // set profiles.ielts_status. Does nothing for GCSE/Student checkouts.
    await syncIeltsEntitlement(userId, subscription, supabase)

    // Ensure the Prisma `Subscription` row exists at checkout time. This
    // is the first event in the subscription lifecycle, so the rest of
    // the app sees the new subscription immediately rather than waiting
    // for the trailing `customer.subscription.created`.
    await upsertStripeSubscriptionRow(userId, subscription)

    // Grandfathering capture (R-031). Lock the price + tier on the Prisma
    // Subscription row at signup so renewals after the Aug 2026 Standard
    // rollover still charge / display the Early Access price. Preserves any
    // pre-existing locked price on an existing row - never overwrites.
    try {
      const existingSub = await prisma.subscription.findUnique({ where: { userId } })
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
            where: { userId },
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
) {
  let userId = subscription.metadata?.userId
  if (!userId) {
    // Fallback: look up user by stripe_customer_id
    const customerId = subscription.customer as string
    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId)
      .single()
    if (profile) userId = profile.id
  }
  if (!userId) {
    console.error('Could not resolve user for subscription', subscription.id)
    return
  }

  const statusMap: Record<string, string> = {
    active: 'pro',
    trialing: 'pro',
    past_due: 'past_due',
    canceled: 'cancelled',
    unpaid: 'unpaid',
    incomplete: 'incomplete',
    incomplete_expired: 'cancelled',
    paused: 'paused',
  }

  const subscriptionStatus = statusMap[subscription.status] ?? 'free'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const periodEndUpdate = (subscription as any).current_period_end as number | undefined
  const subscriptionEndDate = periodEndUpdate
    ? new Date(periodEndUpdate * 1000).toISOString()
    : null

  // P1 (Cycle 2 security audit): Stripe does not guarantee webhook delivery
  // order. An `customer.subscription.updated` with `status: 'active'` that
  // arrives AFTER a `customer.subscription.deleted` has already fired would
  // silently re-grant Pro to a cancelled user. Guard: if the stored state
  // is already terminal (`cancelled`/`unpaid`) and the subscription's
  // canonical end date has passed, refuse to upgrade back to `pro` or
  // `trialing`. A genuine re-subscription comes through `checkout.session
  // .completed` → `subscription.created`, not a late-arriving `.updated`.
  const wouldUpgrade = subscriptionStatus === 'pro' || subscriptionStatus === 'trialing'
  if (wouldUpgrade) {
    const { data: currentProfile } = await supabase
      .from('profiles')
      .select('subscription_status, subscription_end_date')
      .eq('id', userId)
      .single()

    const currentStatus = currentProfile?.subscription_status
    const currentEndDate = currentProfile?.subscription_end_date
      ? new Date(currentProfile.subscription_end_date)
      : null

    const isTerminalState = currentStatus === 'cancelled' || currentStatus === 'unpaid'
    const endDatePassed = currentEndDate ? currentEndDate.getTime() < Date.now() : false

    if (isTerminalState && endDatePassed) {
      console.warn('[stripe/webhook] Refusing to re-grant Pro via stale subscription.updated', {
        subscriptionId: subscription.id,
        userId,
        currentStatus,
        currentEndDate: currentProfile?.subscription_end_date,
        incomingStatus: subscriptionStatus,
      })
      return
    }
  }

  const { error } = await supabase
    .from('profiles')
    .update({
      subscription_status: subscriptionStatus,
      subscription_end_date: subscriptionEndDate,
    })
    .eq('id', userId)

  if (error) {
    console.error('Failed to update subscription_status:', error)
    throw error
  }

  // IELTS standalone entitlement: track active/cancelled for IELTS prices.
  await syncIeltsEntitlement(userId, subscription, supabase)

  // Keep the Prisma `Subscription` row in lock-step with the profile.
  await upsertStripeSubscriptionRow(userId, subscription)
}

async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>,
) {
  let userId = subscription.metadata?.userId
  if (!userId) {
    // Fallback: look up user by stripe_customer_id
    const customerId = subscription.customer as string
    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId)
      .single()
    if (profile) userId = profile.id
  }
  if (!userId) {
    console.error('Could not resolve user for subscription', subscription.id)
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sub = subscription as any
  const endTimestamp: number | null | undefined =
    sub.ended_at ?? sub.cancel_at ?? sub.current_period_end
  const subscriptionEndDate = endTimestamp
    ? new Date(endTimestamp * 1000).toISOString()
    : new Date().toISOString()

  const { error } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'cancelled',
      subscription_end_date: subscriptionEndDate,
    })
    .eq('id', userId)

  if (error) {
    console.error('Failed to set subscription_status to cancelled:', error)
    throw error
  }

  // IELTS standalone entitlement: clear ielts_status on cancellation of an
  // IELTS subscription (no-op for non-IELTS subscriptions).
  await syncIeltsEntitlement(userId, subscription, supabase)

  // Mirror cancellation onto the Prisma `Subscription` row.
  await upsertStripeSubscriptionRow(userId, subscription)

  // Void any pending/confirmed affiliate commissions for this subscription
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
}

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

  const fromAddress = 'The English Hub <noreply@theenglishhub.app>'
  const subject = 'Your free trial is ending soon - The English Hub'

  const html = [
    `<h2>Your trial is ending ${trialEndFormatted === 'soon' ? 'soon' : `on ${trialEndFormatted}`}</h2>`,
    `<p>Hi there,</p>`,
    `<p>Just a friendly heads-up that your free trial of <strong>The English Hub Premium</strong> ` +
      `will end <strong>${trialEndFormatted === 'soon' ? 'soon' : `on ${trialEndFormatted}`}</strong>.</p>`,
    `<p>After your trial ends, your subscription will automatically begin and you'll continue ` +
      `to have full access to all Premium features.</p>`,
    `<p>If you'd like to make changes to your plan or cancel before the trial ends, you can ` +
      `manage your subscription from your account settings.</p>`,
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
