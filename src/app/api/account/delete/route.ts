import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

/**
 * POST /api/account/delete
 *
 * Permanently deletes the authenticated user's account and all associated data.
 * Uses the service-role client so it can call auth.admin.deleteUser().
 *
 * GDPR Article 17 — Right to Erasure:
 * Profile rows, enrolments, and other user data are removed via Supabase
 * cascade deletes (ON DELETE CASCADE on profiles.id -> auth.users.id).
 * The Stripe customer is NOT deleted here — Stripe retains invoices for
 * tax/legal compliance; the customer record becomes orphaned.
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 attempts per IP per 15 minutes
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`delete-account:${ip}`, {
      limit: 5,
      windowSeconds: 900,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Require explicit confirmation text to prevent accidental or automated deletion
    const body = await request.json().catch(() => ({}))
    if (body?.confirmText !== 'DELETE MY ACCOUNT') {
      return NextResponse.json(
        { error: 'You must provide confirmText set to "DELETE MY ACCOUNT" to proceed.' },
        { status: 400 }
      )
    }

    // Verify the user is authenticated
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Cancel any active Stripe subscription before deleting
    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (profile?.stripe_customer_id) {
      try {
        const { stripe } = await import('@/lib/stripe')
        const subscriptions = await stripe.subscriptions.list({
          customer: profile.stripe_customer_id,
          status: 'active',
          limit: 10,
        })
        for (const sub of subscriptions.data) {
          await stripe.subscriptions.cancel(sub.id)
        }
      } catch (stripeError) {
        console.error('Failed to cancel Stripe subscriptions during account deletion:', stripeError)
        // Continue with deletion — orphaned subscriptions will fail to renew
      }
    }

    // Delete the user via service role (cascades to profiles and related tables)
    const admin = createServiceRoleClient()
    const { error: deleteError } = await admin.auth.admin.deleteUser(user.id)

    if (deleteError) {
      console.error('Account deletion failed:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete account. Please contact support at info@Upskillenergy.com.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Account deletion error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please contact support at info@Upskillenergy.com.' },
      { status: 500 }
    )
  }
}
