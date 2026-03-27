import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

interface CancelRequestBody {
  fullName: string
  email: string
  address?: string
  subscriptionPlan: string
  startDate: string
  reason?: string
}

function generateRefNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `CAN-${timestamp}-${random}`
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 cancellation attempts per IP per 10 minutes
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`cancel:${ip}`, { limit: 5, windowSeconds: 600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    let body: CancelRequestBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { fullName, email, subscriptionPlan, startDate, reason } = body

    // Validate required fields
    if (!fullName?.trim() || !email?.trim() || !subscriptionPlan || !startDate) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, subscriptionPlan, and startDate' },
        { status: 400 }
      )
    }

    // Length limits
    if (typeof fullName !== 'string' || fullName.trim().length > 200) {
      return NextResponse.json({ error: 'fullName must be 200 characters or fewer' }, { status: 400 })
    }
    if (typeof email !== 'string' || email.trim().length > 320) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }
    if (reason && (typeof reason !== 'string' || reason.length > 2000)) {
      return NextResponse.json({ error: 'reason must be 2000 characters or fewer' }, { status: 400 })
    }

    // Validate subscription plan
    const validPlans = ['monthly', 'annual', 'family', 'student']
    if (!validPlans.includes(subscriptionPlan)) {
      return NextResponse.json(
        { error: 'Invalid subscription plan' },
        { status: 400 }
      )
    }

    // Authenticate user
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Fetch profile with Stripe customer ID
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (profileError || !profile?.stripe_customer_id) {
      return NextResponse.json(
        { error: 'No billing account found. Please contact support.' },
        { status: 400 }
      )
    }

    // List active subscriptions for this customer
    const subscriptions = await stripe.subscriptions.list({
      customer: profile.stripe_customer_id,
      status: 'active',
      limit: 10,
    })

    if (subscriptions.data.length === 0) {
      return NextResponse.json(
        { error: 'No active subscription found.' },
        { status: 404 }
      )
    }

    // Cancel the subscription at the end of the current billing period
    const subscription = subscriptions.data[0]
    await stripe.subscriptions.update(subscription.id, {
      cancel_at_period_end: true,
      metadata: {
        cancellation_reason: reason || 'not-provided',
        cancellation_requested_by: fullName,
        cancellation_email: email,
      },
    })

    const referenceNumber = generateRefNumber()

    return NextResponse.json({
      referenceNumber,
      message: 'Your subscription has been scheduled for cancellation at the end of the current billing period.',
    })
  } catch (error) {
    console.error('[api/stripe/cancel] Cancellation error:', error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: 'Payment processing error. Please try again.' },
        { status: error.statusCode ?? 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
