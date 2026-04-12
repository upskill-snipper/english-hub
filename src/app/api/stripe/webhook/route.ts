import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { attributeAffiliateReferral } from '@/lib/affiliate/attribution'

// Disable body parsing — we need the raw body for signature verification
export const runtime = 'nodejs'

/** Thrown when required metadata fields are missing from a Stripe event. */
class WebhookMetadataError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'WebhookMetadataError'
  }
}

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured')
    return NextResponse.json(
      { error: 'Webhook endpoint is not configured' },
      { status: 500 }
    )
  }

  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Webhook signature verification failed:', message)
    return NextResponse.json(
      { error: 'Invalid webhook signature' },
      { status: 400 }
    )
  }

  const supabase = createServiceRoleClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session, supabase)

        // Affiliate attribution — if this checkout came via an affiliate link
        const rewardfulReferralId = session.metadata?.rewardful_referral
        if (rewardfulReferralId) {
          try {
            await attributeAffiliateReferral({
              rewardfulReferralId,
              stripeSession: session,
              supabase,
            })
          } catch (err) {
            // Log but do not fail the webhook — attribution is non-critical
            console.error('Affiliate attribution error:', err)
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
          })
        )

        // Send payment-failed notification via Resend (non-blocking)
        const resendApiKey = process.env.RESEND_API_KEY
        if (resendApiKey) {
          // Resolve customer email — first try Stripe, then fall back to profiles table
          let customerEmail: string | null = null

          try {
            const customer = await stripe.customers.retrieve(customerId)
            if (!customer.deleted && customer.email) {
              customerEmail = customer.email
            }
          } catch (err) {
            console.warn('[stripe/webhook] Failed to retrieve Stripe customer for invoice.payment_failed:', err)
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
              `<p>We were unable to process your latest payment for <strong>The English Hub Pro</strong>.</p>`,
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
                  `[stripe/webhook] Failed to send payment_failed email to ${customerEmail}: ${res.status} ${errorBody}`
                )
              }
            } catch (err) {
              // Log but do not fail the webhook — email is non-critical
              console.error('[stripe/webhook] Error sending payment_failed email:', err)
            }
          } else {
            console.warn(
              `[stripe/webhook] invoice.payment_failed: could not resolve email for customer ${customerId}, skipping notification`
            )
          }
        } else {
          console.warn(
            `[stripe/webhook] RESEND_API_KEY not configured — skipping payment_failed email`
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
        if (paidProfile && (invoice as any).subscription) {
          const periodEnd = (invoice as any).period_end as number | undefined
          const subscriptionEndDate = periodEnd
            ? new Date(periodEnd * 1000).toISOString()
            : null

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
          // Resolve subscription ID — may be directly on the charge or via the invoice
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const chargeAny = charge as any
          let subscriptionId: string | null =
            typeof chargeAny.subscription === 'string' ? chargeAny.subscription : null

          if (!subscriptionId && chargeAny.invoice) {
            const invoiceId =
              typeof chargeAny.invoice === 'string' ? chargeAny.invoice : chargeAny.invoice?.id
            if (invoiceId) {
              const invoice = await stripe.invoices.retrieve(invoiceId) as any
              subscriptionId =
                typeof invoice.subscription === 'string' ? invoice.subscription : null
            }
          }

          if (!subscriptionId) {
            console.warn(
              `[stripe/webhook] charge.refunded: could not resolve subscription for charge ${charge.id}, skipping commission void`
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
              voidError
            )
          } else if (voidedCount && voidedCount > 0) {
            console.info(
              `[stripe/webhook] charge.refunded: voided ${voidedCount} affiliate commission(s) for subscription ${subscriptionId}`
            )
          }
        } catch (err) {
          // Log but do not fail the webhook — commission voiding is non-critical
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
          console.error('Could not resolve user for subscription', subscription.id)
          return NextResponse.json({ received: true })
        }

        const activeStatuses = ['active', 'trialing']
        const subscriptionStatus = activeStatuses.includes(subscription.status) ? 'pro' : 'incomplete'

        const periodEnd = (subscription as any).current_period_end as number | undefined
        const subscriptionEndDate = periodEnd
          ? new Date(periodEnd * 1000).toISOString()
          : null

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
        break
      }

      default: {
        // Unhandled event type — acknowledge receipt
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    if (error instanceof WebhookMetadataError) {
      console.error(`Missing metadata in ${event.type}: ${error.message}`)
      return NextResponse.json(
        { error: 'Missing required metadata in webhook event' },
        { status: 400 }
      )
    }

    console.error(`Error handling webhook event ${event.type}:`, error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

// ---------------------------------------------------------------------------
// Event handlers
// ---------------------------------------------------------------------------

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session,
  supabase: ReturnType<typeof createServiceRoleClient>
) {
  const userId = session.metadata?.userId
  if (!userId) {
    throw new WebhookMetadataError(
      `checkout.session.completed: missing userId in metadata (session ${session.id})`
    )
  }

  if (session.mode === 'subscription') {
    const subscriptionId = session.subscription as string
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const activeStatuses = ['active', 'trialing']
    const subscriptionStatus = activeStatuses.includes(subscription.status) ? 'pro' : 'incomplete'

    const periodEnd = (subscription as any).current_period_end as number | undefined
    const subscriptionEndDate = periodEnd
      ? new Date(periodEnd * 1000).toISOString()
      : null

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
  }

  if (session.mode === 'payment') {
    const courseId = session.metadata?.courseId
    if (!courseId) {
      throw new WebhookMetadataError(
        `checkout.session.completed (payment): missing courseId in metadata (session ${session.id})`
      )
    }

    const { error } = await supabase.from('enrolments').upsert({
      user_id: userId,
      course_id: courseId,
      payment_type: 'one_time',
      stripe_payment_intent_id: session.payment_intent as string,
    }, { onConflict: 'user_id,course_id' })

    if (error) {
      console.error('Failed to create enrolment record:', error)
      throw error
    }
  }
}

async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>
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
  const periodEnd = (subscription as any).current_period_end as number | undefined
  const subscriptionEndDate = periodEnd
    ? new Date(periodEnd * 1000).toISOString()
    : null

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
}

async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>
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

  const sub = subscription as any
  const endTimestamp: number | undefined =
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
    console.error(`[stripe/webhook] Failed to void affiliate commissions for subscription ${subscription.id}:`, voidError)
  }
}

async function handleTrialWillEnd(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceRoleClient>
) {
  const customerId = subscription.customer as string

  // Resolve customer email — first try Stripe, then fall back to profiles table
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
  const trialEndDate = trialEndTimestamp
    ? new Date(trialEndTimestamp * 1000)
    : null
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
      customerId,
      customerEmail,
      trialEnd: trialEndDate?.toISOString() ?? null,
    })
  )

  if (!customerEmail) {
    console.error(
      `[stripe/webhook] trial_will_end: could not resolve email for customer ${customerId}, skipping notification`
    )
    return
  }

  // Send trial-ending notification via Resend
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    console.warn(
      `[stripe/webhook] RESEND_API_KEY not configured — skipping trial_will_end email for ${customerEmail}`
    )
    return
  }

  const fromAddress = 'The English Hub <noreply@theenglishhub.app>'
  const subject = 'Your free trial is ending soon — The English Hub'

  const html = [
    `<h2>Your trial is ending ${trialEndFormatted === 'soon' ? 'soon' : `on ${trialEndFormatted}`}</h2>`,
    `<p>Hi there,</p>`,
    `<p>Just a friendly heads-up that your free trial of <strong>The English Hub Pro</strong> ` +
      `will end <strong>${trialEndFormatted === 'soon' ? 'soon' : `on ${trialEndFormatted}`}</strong>.</p>`,
    `<p>After your trial ends, your subscription will automatically begin and you'll continue ` +
      `to have full access to all Pro features.</p>`,
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
        `[stripe/webhook] Failed to send trial_will_end email to ${customerEmail}: ${res.status} ${errorBody}`
      )
    }
  } catch (err) {
    // Log but do not fail the webhook — email is non-critical
    console.error('[stripe/webhook] Error sending trial_will_end email:', err)
  }
}
