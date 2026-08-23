/**
 * GET /api/school/consent/details?token=xxx
 * Public endpoint - returns consent details for the parent consent page.
 * No auth required (parent may not have an account).
 *
 * Serves both kinds of request now:
 *   • school_id set  - a school asked for consent on behalf of a student.
 *   • school_id NULL - the student signed up directly and asked us to
 *     email their guardian (src/lib/parental-consent.ts).
 *
 * The route used to fall back to the literal strings 'Unknown Student' and
 * 'Unknown School' when a lookup came back empty. On a self-serve request
 * there is no school at all, so every guardian following a direct-signup
 * link would have been told their child's school was "Unknown School" -
 * invented detail on a consent form, which is exactly what a consent form
 * must never contain. Missing values are now returned as null and the page
 * omits the row.
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
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const token = request.nextUrl.searchParams.get('token')
    if (!token) {
      return NextResponse.json({ error: 'Missing consent token.' }, { status: 400 })
    }

    const admin = createServiceRoleClient()

    const { data: consent, error: lookupError } = await admin
      .from('parental_consents')
      .select('id, status, parent_email, student_user_id, school_id, expires_at')
      .eq('consent_token', token)
      .single()

    if (lookupError || !consent) {
      return NextResponse.json(
        { error: 'This consent link is invalid or has already been used.' },
        { status: 404 },
      )
    }

    if (consent.status !== 'pending') {
      return NextResponse.json(
        { error: `This consent request has already been ${consent.status}.` },
        { status: 410 },
      )
    }

    // Self-serve links carry a 7-day expiry, which the email promises. School
    // rows predate the column and have expires_at NULL, meaning no expiry -
    // their behaviour is unchanged.
    if (consent.expires_at && new Date(consent.expires_at).getTime() < Date.now()) {
      return NextResponse.json(
        {
          error:
            'This consent link has expired. Ask your child to send a new request from their account.',
        },
        { status: 410 },
      )
    }

    // Student name always; school name only when the request came from a
    // school. No school lookup is attempted for a self-serve request.
    const { data: profile } = await admin
      .from('profiles')
      .select('full_name')
      .eq('id', consent.student_user_id)
      .single()

    let schoolName: string | null = null
    if (consent.school_id) {
      const { data: school } = await admin
        .from('schools')
        .select('name')
        .eq('id', consent.school_id)
        .single()
      schoolName = (school as { name: string } | null)?.name ?? null
    }

    return NextResponse.json({
      student_name: (profile as { full_name: string | null } | null)?.full_name ?? null,
      school_name: schoolName,
      // Lets the consent page pick the right wording: a school asking on a
      // student's behalf, or a student who signed up on their own.
      context: consent.school_id ? 'school' : 'self_serve',
      parent_email: consent.parent_email,
      status: consent.status,
      expires_at: consent.expires_at ?? null,
    })
  } catch (error) {
    console.error('Consent details error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
