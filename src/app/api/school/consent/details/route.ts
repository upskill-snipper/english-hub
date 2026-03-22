/**
 * GET /api/school/consent/details?token=xxx
 * Public endpoint — returns consent details for the parent consent page.
 * No auth required (parent may not have an account).
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`consent-details:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const token = request.nextUrl.searchParams.get('token')
    if (!token) {
      return NextResponse.json({ error: 'Missing consent token.' }, { status: 400 })
    }

    const admin = createServiceRoleClient()

    const { data: consent, error: lookupError } = await admin
      .from('parental_consents')
      .select('id, status, parent_email, student_user_id, school_id')
      .eq('consent_token', token)
      .single()

    if (lookupError || !consent) {
      return NextResponse.json(
        { error: 'This consent link is invalid or has already been used.' },
        { status: 404 }
      )
    }

    if (consent.status !== 'pending') {
      return NextResponse.json(
        { error: `This consent request has already been ${consent.status}.` },
        { status: 410 }
      )
    }

    // Fetch student name and school name
    const [{ data: profile }, { data: school }] = await Promise.all([
      admin
        .from('profiles')
        .select('full_name')
        .eq('id', consent.student_user_id)
        .single(),
      admin
        .from('schools')
        .select('name')
        .eq('id', consent.school_id)
        .single(),
    ])

    return NextResponse.json({
      student_name: profile?.full_name ?? 'Unknown Student',
      school_name: school?.name ?? 'Unknown School',
      parent_email: consent.parent_email,
      status: consent.status,
    })
  } catch (error) {
    console.error('Consent details error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
