import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// GET: Fetch invite details (no auth required, so unauthenticated users can see what they're accepting)
export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`invite-lookup:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const token = request.nextUrl.searchParams.get('token')
    if (!token) {
      return NextResponse.json({ error: 'Missing invite token.' }, { status: 400 })
    }

    const admin = createServiceRoleClient()

    const { data: member, error: memberError } = await admin
      .from('school_members')
      .select('id, role, full_name, email, invite_status, invite_expires_at, school_id, schools(name)')
      .eq('invite_token', token)
      .single()

    if (memberError || !member) {
      return NextResponse.json(
        { error: 'This invite link is invalid or has already been used.' },
        { status: 404 }
      )
    }

    // Check time-based expiration before status checks
    if (member.invite_expires_at && new Date(member.invite_expires_at) < new Date()) {
      await admin
        .from('school_members')
        .update({ invite_status: 'expired' })
        .eq('id', member.id)
      return NextResponse.json(
        { error: 'This invitation has expired. Please ask your school administrator for a new invite.' },
        { status: 410 }
      )
    }

    if (member.invite_status === 'accepted') {
      return NextResponse.json(
        { error: 'This invitation has already been accepted.' },
        { status: 410 }
      )
    }

    if (member.invite_status === 'expired') {
      return NextResponse.json(
        { error: 'This invitation has expired. Please ask your school administrator for a new invite.' },
        { status: 410 }
      )
    }

    return NextResponse.json({
      school_name: (member.schools as unknown as { name: string } | null)?.name ?? 'Unknown School',
      role: member.role,
      invite_status: member.invite_status,
    })
  } catch (error) {
    console.error('Invite lookup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST: Accept the invite (auth required)
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`invite-accept:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'You must be logged in to accept an invitation.' }, { status: 401 })
    }

    const body = await request.json()
    const token = (body.token ?? '').trim()

    if (!token) {
      return NextResponse.json({ error: 'Missing invite token.' }, { status: 400 })
    }

    const admin = createServiceRoleClient()

    // Find the pending invite
    const { data: member, error: memberError } = await admin
      .from('school_members')
      .select('id, role, email, invite_status, invite_expires_at, school_id, schools(name)')
      .eq('invite_token', token)
      .single()

    if (memberError || !member) {
      return NextResponse.json(
        { error: 'This invite link is invalid or has already been used.' },
        { status: 404 }
      )
    }

    // Check time-based expiration before status checks
    if (member.invite_expires_at && new Date(member.invite_expires_at) < new Date()) {
      await admin
        .from('school_members')
        .update({ invite_status: 'expired' })
        .eq('id', member.id)
      return NextResponse.json(
        { error: 'This invitation has expired. Please ask your school administrator for a new invite.' },
        { status: 410 }
      )
    }

    if (member.invite_status === 'accepted') {
      return NextResponse.json(
        { error: 'This invitation has already been accepted.' },
        { status: 410 }
      )
    }

    if (member.invite_status === 'expired') {
      return NextResponse.json(
        { error: 'This invitation has expired. Please ask your school administrator for a new invite.' },
        { status: 410 }
      )
    }

    // Verify the authenticated user's email matches the invited email
    if (!user.email || user.email.toLowerCase() !== member.email?.toLowerCase()) {
      return NextResponse.json(
        { error: 'You can only accept invites sent to your email address.' },
        { status: 403 }
      )
    }

    // Check the user isn't already a member of this school
    const { data: existingMember } = await admin
      .from('school_members')
      .select('id')
      .eq('school_id', member.school_id)
      .eq('user_id', user.id)
      .eq('invite_status', 'accepted')
      .single()

    if (existingMember) {
      return NextResponse.json(
        { error: 'You are already a member of this school.' },
        { status: 409 }
      )
    }

    // Accept the invite: link user_id and update status
    const { error: updateError } = await admin
      .from('school_members')
      .update({
        user_id: user.id,
        invite_status: 'accepted',
        invite_token: null,
        last_active_at: new Date().toISOString(),
      })
      .eq('id', member.id)

    if (updateError) {
      console.error('Failed to accept invite:', updateError)
      return NextResponse.json(
        { error: 'Failed to accept the invitation. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      school_name: (member.schools as unknown as { name: string } | null)?.name ?? 'Unknown School',
      role: member.role,
    })
  } catch (error) {
    console.error('Invite accept error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
