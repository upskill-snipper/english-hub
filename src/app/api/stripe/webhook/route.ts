import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServiceRoleClient } from '@/lib/supabase/server'

// Disable body parsing — we need the raw body for signature verification
export const runtime = 'nodejs'

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
      { error: `Webhook signature verification failed: ${message}` },
      { status: 400 }
    )
  }

  const supabase = createServiceRoleClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session, supabase)
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
    console.error('checkout.session.completed: missing userId in metadata')
    return
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
      console.warn('checkout.session.completed (payment): no courseId in metadata, skipping enrolment')
      return
    }

    const { error } = await supabase.from('enrolments').insert({
      user_id: userId,
      course_id: courseId,
      status: 'active',
      stripe_session_id: session.id,
    })

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
  const userId = subscription.metadata?.userId
  if (!userId) {
    console.error('customer.subscription.updated: missing userId in metadata')
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
  const userId = subscription.metadata?.userId
  if (!userId) {
    console.error('customer.subscription.deleted: missing userId in metadata')
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
}
