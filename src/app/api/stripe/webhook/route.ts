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
        console.warn(
          `Payment failed for customer ${invoice.customer}, invoice ${invoice.id}. ` +
          'TODO: send notification email to user.'
        )
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
        { error: error.message },
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
    const { error } = await supabase
      .from('profiles')
      .update({ subscription_status: 'pro' })
      .eq('id', userId)

    if (error) {
      console.error('Failed to update subscription_status to pro:', error)
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

  const { error } = await supabase
    .from('profiles')
    .update({ subscription_status: subscriptionStatus })
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

  const { error } = await supabase
    .from('profiles')
    .update({ subscription_status: 'cancelled' })
    .eq('id', userId)

  if (error) {
    console.error('Failed to set subscription_status to cancelled:', error)
    throw error
  }

  // Void any pending/confirmed affiliate commission for this subscription
  const { data: referral } = await supabase
    .from('affiliate_referrals')
    .select('id, commission_status')
    .eq('stripe_subscription_id', subscription.id)
    .in('commission_status', ['pending', 'confirmed'])
    .single()

  if (referral) {
    await supabase
      .from('affiliate_referrals')
      .update({
        commission_status: 'voided',
        commission_voided_reason: 'Subscription cancelled before payout',
      })
      .eq('id', referral.id)

    console.log(`Voided affiliate commission for referral ${referral.id} (subscription cancelled)`)
  }
}
