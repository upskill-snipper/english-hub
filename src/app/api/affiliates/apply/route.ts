import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

interface ApplicationBody {
  full_name: string
  email: string
  date_of_birth: string
  tiktok_handle?: string
  instagram_handle?: string
  approx_follower_count: string
  audience_description: string
  best_post_url?: string
  content_plan: string
  understands_disclosure: boolean
  understands_commission: boolean
  understands_no_guarantee: boolean
  guardian_name?: string
  guardian_email?: string
  guardian_confirmed?: boolean
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 applications per IP per hour
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`affiliate-apply:${ip}`, { limit: 5, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    let body: ApplicationBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    // ── Validation ──────────────────────────────────────────
    const errors: string[] = []

    if (!body.full_name || body.full_name.length < 2 || body.full_name.length > 100) {
      errors.push('Full name must be 2–100 characters')
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push('Valid email address is required')
    }

    if (!body.date_of_birth || !/^\d{4}-\d{2}-\d{2}$/.test(body.date_of_birth)) {
      errors.push('Date of birth is required (YYYY-MM-DD)')
    }

    if (!body.tiktok_handle && !body.instagram_handle) {
      errors.push('At least one social platform handle is required')
    }

    if (!body.approx_follower_count) {
      errors.push('Approximate follower count is required')
    }

    if (
      !body.audience_description ||
      body.audience_description.length < 20 ||
      body.audience_description.length > 500
    ) {
      errors.push('Audience description must be 20–500 characters')
    }

    if (
      !body.content_plan ||
      body.content_plan.length < 20 ||
      body.content_plan.length > 500
    ) {
      errors.push('Content plan must be 20–500 characters')
    }

    if (!body.understands_disclosure) errors.push('Disclosure acknowledgement is required')
    if (!body.understands_commission) errors.push('Commission acknowledgement is required')
    if (!body.understands_no_guarantee) errors.push('No-guarantee acknowledgement is required')

    // Calculate age
    const dob = new Date(body.date_of_birth)
    const age = Math.floor((Date.now() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

    if (age < 13) {
      errors.push('Applicants must be at least 13 years old')
    }

    // Under-18 guardian validation
    if (age < 18) {
      if (!body.guardian_name) errors.push('Guardian name is required for applicants under 18')
      if (!body.guardian_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.guardian_email)) {
        errors.push('Valid guardian email is required for applicants under 18')
      }
      if (!body.guardian_confirmed) {
        errors.push('Guardian consent confirmation is required for applicants under 18')
      }
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0] }, { status: 400 })
    }

    // ── Check for duplicate email ───────────────────────────
    const supabaseAdmin = createServiceRoleClient()

    const { data: existing } = await supabaseAdmin
      .from('affiliates')
      .select('id, status')
      .eq('email', body.email.toLowerCase())
      .single()

    if (existing) {
      // Return a generic message to prevent email enumeration
      return NextResponse.json(
        { error: 'An application with this email has already been submitted. If you believe this is an error, please contact support.' },
        { status: 400 }
      )
    }

    // ── Check if user is logged in and link user_id ─────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // ── Insert application ──────────────────────────────────
    const { error: insertError } = await supabaseAdmin.from('affiliates').insert({
      user_id: user?.id ?? null,
      full_name: body.full_name.trim(),
      email: body.email.toLowerCase().trim(),
      date_of_birth: body.date_of_birth,
      tiktok_handle: body.tiktok_handle?.trim() || null,
      instagram_handle: body.instagram_handle?.trim() || null,
      approx_follower_count: body.approx_follower_count,
      audience_description: body.audience_description.trim(),
      best_post_url: body.best_post_url?.trim() || null,
      content_plan: body.content_plan.trim(),
      status: 'pending',
      tier: 1,
      parental_consent_guardian_name: age < 18 ? body.guardian_name?.trim() : null,
      parental_consent_guardian_email: age < 18 ? body.guardian_email?.toLowerCase().trim() : null,
    })

    if (insertError) {
      console.error('Failed to insert affiliate application:', insertError)
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      )
    }

    // TODO: Send confirmation email to applicant (and guardian if minor)
    // TODO: Send notification email to admin (AFFILIATE_ADMIN_EMAIL)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Affiliate application error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
