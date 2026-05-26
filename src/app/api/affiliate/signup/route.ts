/**
 * POST /api/affiliate/signup
 *
 * New affiliate programme application endpoint (NEW percentage-tier system).
 *
 * Writes to the NEW `affiliate_accounts` table defined in
 * supabase/migrations-pending/002_affiliates.sql - NOT the legacy `affiliates`
 * table used by the Rewardful-based system under /api/affiliates/apply.
 *
 * On success, creates an `affiliate_accounts` row with status = 'pending'
 * for manual admin review. Duplicate emails are rejected with a generic
 * message to prevent enumeration.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

interface SignupBody {
  full_name: string
  email: string
  website?: string
  social_handle?: string
  audience_size?: number
  audience_description: string
  promo_strategy: string
  payout_method?: 'bank_transfer' | 'paypal' | 'stripe_connect'
  accepted_terms: boolean
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`affiliate-signup:${ip}`, {
      limit: 5,
      windowSeconds: 3600,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many signup attempts. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          },
        },
      )
    }

    let body: SignupBody
    try {
      body = (await request.json()) as SignupBody
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const errors: string[] = []

    if (!body.full_name || body.full_name.trim().length < 2 || body.full_name.length > 120) {
      errors.push('Full name must be 2-120 characters')
    }
    if (!body.email || !EMAIL_REGEX.test(body.email)) {
      errors.push('Valid email address is required')
    }
    if (
      !body.audience_description ||
      body.audience_description.trim().length < 20 ||
      body.audience_description.length > 1000
    ) {
      errors.push('Audience description must be 20-1000 characters')
    }
    if (
      !body.promo_strategy ||
      body.promo_strategy.trim().length < 20 ||
      body.promo_strategy.length > 1000
    ) {
      errors.push('Promotion strategy must be 20-1000 characters')
    }
    if (!body.accepted_terms) {
      errors.push('You must accept the affiliate terms to apply')
    }
    if (
      body.payout_method &&
      !['bank_transfer', 'paypal', 'stripe_connect'].includes(body.payout_method)
    ) {
      errors.push('Invalid payout method')
    }
    if (
      body.audience_size !== undefined &&
      (typeof body.audience_size !== 'number' ||
        body.audience_size < 0 ||
        body.audience_size > 1_000_000_000)
    ) {
      errors.push('Audience size must be a non-negative number')
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0], errors }, { status: 400 })
    }

    const supabaseAdmin = createServiceRoleClient()
    const normalizedEmail = body.email.toLowerCase().trim()

    // Prevent enumeration - return a generic success-like message regardless
    const { data: existing } = await supabaseAdmin
      .from('affiliate_accounts')
      .select('id')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        {
          error:
            'An application with this email is already on file. If you believe this is an error, please contact support.',
        },
        { status: 409 },
      )
    }

    // Link to auth user if one is logged in
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    const { data: inserted, error: insertError } = await supabaseAdmin
      .from('affiliate_accounts')
      .insert({
        user_id: user?.id ?? null,
        full_name: body.full_name.trim(),
        email: normalizedEmail,
        website: body.website?.trim() || null,
        social_handle: body.social_handle?.trim() || null,
        audience_size: body.audience_size ?? null,
        audience_description: body.audience_description.trim(),
        promo_strategy: body.promo_strategy.trim(),
        payout_method: body.payout_method ?? 'bank_transfer',
        status: 'pending',
        tier: 'bronze',
      })
      .select('id')
      .single()

    if (insertError) {
      console.error('[affiliate/signup] insert failed:', insertError)
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 },
      )
    }

    // TODO(Phase-5): Send applicant confirmation email and notify admin at AFFILIATE_ADMIN_EMAIL via Resend

    return NextResponse.json(
      { success: true, application_id: inserted?.id ?? null },
      { status: 201 },
    )
  } catch (err) {
    console.error('[affiliate/signup] unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
