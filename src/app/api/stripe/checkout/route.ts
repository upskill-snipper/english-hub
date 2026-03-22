import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe, PRICE_IDS, COURSE_PRICE_MAP } from '@/lib/stripe'
import { PRICING } from '@/constants/pricing'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

interface CheckoutRequestBody {
  priceId?: string
  plan?: 'monthly' | 'annual'
  courseId?: string
  mode: 'subscription' | 'payment'
  rewardful_referral?: string | null
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 10 checkout attempts per IP per 5 minutes
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`checkout:${ip}`, { limit: 10, windowSeconds: 300 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    let body: CheckoutRequestBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }
    const { courseId, mode, rewardful_referral } = body
    let { priceId } = body

    // Resolve plan identifier to a server-side price ID
    if (!priceId && body.plan) {
      if (body.plan === 'monthly') {
        priceId = process.env.STRIPE_PRICE_PRO_MONTHLY
      } else if (body.plan === 'annual') {
        priceId = process.env.STRIPE_PRICE_PRO_ANNUAL
      }
    }

    if (!priceId || !mode) {
      return NextResponse.json(
        { error: 'Missing required fields: priceId (or plan) and mode' },
        { status: 400 }
      )
    }

    if (mode !== 'subscription' && mode !== 'payment') {
      return NextResponse.json(
        { error: 'Invalid mode. Must be "subscription" or "payment"' },
        { status: 400 }
      )
    }

    // Validate priceId against known price IDs (filter out undefined/empty values)
    const validPriceIds = new Set(
      [
        ...Object.values(PRICE_IDS),
        ...Object.values(COURSE_PRICE_MAP),
      ].filter((id): id is string => typeof id === 'string' && id.length > 0)
    )
    if (!validPriceIds.has(priceId)) {
      return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
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

    // Get or create Stripe customer
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (profileError) {
      console.error('Failed to fetch profile:', profileError)
      return NextResponse.json(
        { error: 'Failed to fetch user profile' },
        { status: 500 }
      )
    }

    let stripeCustomerId = profile?.stripe_customer_id

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { userId: user.id },
      })

      stripeCustomerId = customer.id

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ stripe_customer_id: stripeCustomerId })
        .eq('id', user.id)

      if (updateError) {
        console.error('Failed to update profile with Stripe customer ID:', updateError)
        return NextResponse.json(
          { error: 'Failed to link Stripe customer' },
          { status: 500 }
        )
      }
    }

    // Build checkout session params
    const appUrl = process.env.NEXT_PUBLIC_APP_URL!

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      customer: stripeCustomerId,
      line_items: [{ price: priceId, quantity: 1 }],
      mode,
      success_url: `${appUrl}/dashboard?checkout=success`,
      cancel_url: `${appUrl}/courses`,
      metadata: {
        userId: user.id,
        ...(courseId && { courseId }),
        ...(rewardful_referral && { rewardful_referral }),
      },
    }

    if (mode === 'subscription') {
      sessionParams.allow_promotion_codes = true
      sessionParams.subscription_data = {
        trial_period_days: PRICING.TRIAL_DAYS,
        metadata: {
          userId: user.id,
        },
      }
    }

    if (mode === 'payment') {
      sessionParams.payment_intent_data = {
        metadata: {
          userId: user.id,
          ...(courseId && { courseId }),
        },
      }
    }

    const session = await stripe.checkout.sessions.create(sessionParams)

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[api/stripe/checkout] Checkout session error:', error)

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
