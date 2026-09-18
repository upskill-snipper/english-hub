// ─── Cancel a subscription from inside the product ──────────────────────────
//
// THE DEFECT THIS FIXES (18 September 2026)
//
// This route could not succeed. It required `fullName`, `email`,
// `subscriptionPlan` and `startDate` and answered 400 "Missing required
// fields" when any was absent. Its only caller, the cancel page linked from
// the subscription dashboard, posts `{ reason, feedback, cancelImmediately }`
// and never sent any of the four, so **every in-app cancellation attempt
// returned 400**. The only working exit was the Stripe portal on
// /account/billing, which is two pages away and not where the product sends
// anyone who clicks "Cancel subscription".
//
// Three further faults behind that one, each of which would have bitten as
// soon as the 400 was lifted:
//
//   1. `validPlans` was ['monthly','annual','family','student'] — no teacher
//      and no IELTS value, so the two newest paid plans were rejected outright.
//   2. It listed `status: 'active'` only and cancelled `subscriptions.data[0]`
//      with no plan match. A customer holding Pro and IELTS would have had an
//      arbitrary one cancelled, and a customer still in their 7-day card trial
//      (`status: 'trialing'`) got "No active subscription found" — the people
//      most likely to be cancelling.
//   3. It returned `{ referenceNumber, message }`, while the page reads
//      `data.accessEndsAt` to tell the customer when their access ends. Even a
//      successful call would have shown them nothing.
//
// Why this matters beyond the bug: both the Consumer Contracts Regulations and
// the DMCC Act subscription rules require an exit as easy as the entry. A
// subscriber who cannot cancel raises a chargeback instead of churning
// quietly, which costs the dispute fee plus the refund and raises Stripe's
// risk profile on a young account.
//
// SCOPE HELD DELIBERATELY: this schedules cancellation at the end of the paid
// period. It never cancels immediately and never refunds — forfeiting paid
// time is a money decision and money decisions are the owner's.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

interface CancelRequestBody {
  /** Why they are leaving. Optional; stored on the Stripe subscription. */
  reason?: string
  /** Free text from the cancel flow. Optional. */
  feedback?: string
  /**
   * Present in the page's body for historical reasons. Only `false` is
   * honoured; see the scope note in the header.
   */
  cancelImmediately?: boolean
  /**
   * Disambiguates when a customer holds more than one live subscription.
   * Without it, a customer with two is refused rather than having one picked
   * for them.
   */
  subscriptionId?: string
}

/** Statuses a customer can still be billed for, and so must be able to exit. */
const CANCELLABLE_STATUSES = ['active', 'trialing', 'past_due', 'unpaid'] as const

function generateRefNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `CAN-${timestamp}-${random}`
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 cancellation attempts per IP per 10 minutes.
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`cancel:${ip}`, { limit: 5, windowSeconds: 600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    let body: CancelRequestBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { reason, feedback, cancelImmediately, subscriptionId } = body

    // Length limits on the two free-text fields. Nothing here is required:
    // a customer must never be blocked from leaving by a validation rule.
    if (reason !== undefined && (typeof reason !== 'string' || reason.length > 2000)) {
      return NextResponse.json(
        { error: 'reason must be 2000 characters or fewer' },
        { status: 400 },
      )
    }
    if (feedback !== undefined && (typeof feedback !== 'string' || feedback.length > 2000)) {
      return NextResponse.json(
        { error: 'feedback must be 2000 characters or fewer' },
        { status: 400 },
      )
    }

    if (cancelImmediately === true) {
      // Immediate cancellation forfeits time already paid for. That is a money
      // decision, so it is refused here rather than performed quietly.
      return NextResponse.json(
        {
          error:
            'Immediate cancellation is not available here. Your subscription can be scheduled to end at the close of the period you have already paid for. For anything else, contact support.',
        },
        { status: 400 },
      )
    }

    // Authenticate.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (profileError || !profile?.stripe_customer_id) {
      return NextResponse.json(
        { error: 'No billing account found. Please contact support.' },
        { status: 400 },
      )
    }

    // `status: 'all'` then filter: Stripe's list endpoint takes one status at a
    // time, and a trialing or past_due subscriber is exactly who needs this.
    const all = await stripe.subscriptions.list({
      customer: profile.stripe_customer_id,
      status: 'all',
      limit: 100,
    })

    const live = all.data.filter(
      (s) =>
        (CANCELLABLE_STATUSES as readonly string[]).includes(s.status) && !s.cancel_at_period_end,
    )

    if (live.length === 0) {
      // Distinguish "already cancelled" from "never had one": a customer who
      // clicks twice should be reassured, not told they have no subscription.
      const alreadyScheduled = all.data.find(
        (s) =>
          (CANCELLABLE_STATUSES as readonly string[]).includes(s.status) && s.cancel_at_period_end,
      )
      if (alreadyScheduled) {
        return NextResponse.json({
          referenceNumber: generateRefNumber(),
          accessEndsAt: periodEndIso(alreadyScheduled),
          alreadyScheduled: true,
          message:
            'Your subscription was already scheduled to end. Nothing further is needed, and you keep full access until then.',
        })
      }
      return NextResponse.json({ error: 'No active subscription found.' }, { status: 404 })
    }

    let target: Stripe.Subscription
    if (subscriptionId) {
      const found = live.find((s) => s.id === subscriptionId)
      if (!found) {
        return NextResponse.json(
          { error: 'That subscription could not be found on your account.' },
          { status: 404 },
        )
      }
      target = found
    } else if (live.length > 1) {
      // Never pick one on the customer's behalf. The old route took
      // `data[0]`, so a Pro + IELTS holder could have lost the wrong product.
      return NextResponse.json(
        {
          error:
            'You have more than one active subscription, so please choose which to cancel in the billing portal.',
          subscriptions: live.map((s) => ({
            id: s.id,
            status: s.status,
            accessEndsAt: periodEndIso(s),
          })),
        },
        { status: 409 },
      )
    } else {
      target = live[0]!
    }

    const updated = await stripe.subscriptions.update(target.id, {
      cancel_at_period_end: true,
      metadata: {
        ...(target.metadata ?? {}),
        cancellation_reason: reason || 'not-provided',
        cancellation_feedback: (feedback || '').slice(0, 450),
        cancellation_requested_by: user.id,
        cancellation_requested_at: new Date().toISOString(),
      },
    })

    return NextResponse.json({
      referenceNumber: generateRefNumber(),
      // The page reads this to tell the customer when access ends. The old
      // route never returned it.
      accessEndsAt: periodEndIso(updated) ?? periodEndIso(target),
      message:
        'Your subscription has been scheduled for cancellation at the end of the current billing period.',
    })
  } catch (error) {
    console.error('[api/stripe/cancel] Cancellation error:', error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: 'Payment processing error. Please try again.' },
        { status: error.statusCode ?? 500 },
      )
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/** The end of the paid period as an ISO string, or null when Stripe omits it. */
function periodEndIso(subscription: Stripe.Subscription): string | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const end = (subscription as any).current_period_end as number | undefined
  return typeof end === 'number' ? new Date(end * 1000).toISOString() : null
}
