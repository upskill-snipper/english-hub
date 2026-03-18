import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createServerSupabaseClient } from '@/lib/supabase/server'

interface CheckoutRequestBody {
  priceId: string
  courseId?: string
  mode: 'subscription' | 'payment'
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequestBody = await request.json()
    const { priceId, courseId, mode } = body

    if (!priceId || !mode) {
      return NextResponse.json(
        { error: 'Missing required fields: priceId and mode' },
        { status: 400 }
      )
    }

    if (mode !== 'subscription' && mode !== 'payment') {
      return NextResponse.json(
        { error: 'Invalid mode. Must be "subscription" or "payment"' },
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
      },
    }

    if (mode === 'subscription') {
      sessionParams.allow_promotion_codes = true
      sessionParams.subscription_data = {
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
    console.error('Checkout session error:', error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode ?? 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
