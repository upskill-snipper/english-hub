import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-members:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const admin = createServiceRoleClient()
    const { data: members, error: membersError } = await admin
      .from('school_members')
      .select('id, user_id, role, full_name, email, department, invite_status, last_active_at, created_at')
      .eq('school_id', member.school_id)
      .order('created_at', { ascending: true })

    if (membersError) {
      console.error('Members fetch error:', membersError)
      return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 })
    }

    return NextResponse.json({ members: members || [] })
  } catch (error) {
    console.error('Members list error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-members-invite:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    // Only admins and HoDs can invite teachers
    if (member.role === 'teacher') {
      return NextResponse.json({ error: 'Forbidden: insufficient role to invite members' }, { status: 403 })
    }

    let body: { email?: string; name?: string; role?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { email, name, role = 'teacher' } = body

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 422 })
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 422 })
    }

    const validRoles = ['admin', 'head_of_department', 'teacher']
    if (!validRoles.includes(role)) {
      return NextResponse.json({ error: `Role must be one of: ${validRoles.join(', ')}` }, { status: 422 })
    }

    // Non-admins can only invite teachers
    if (member.role === 'head_of_department' && role === 'admin') {
      return NextResponse.json({ error: 'Only admins can invite other admins' }, { status: 403 })
    }

    const admin = createServiceRoleClient()

    // Check if already a member
    const { data: existing } = await admin
      .from('school_members')
      .select('id, invite_status')
      .eq('school_id', member.school_id)
      .eq('email', email.toLowerCase().trim())
      .single()

    if (existing) {
      return NextResponse.json({ error: 'This email has already been invited' }, { status: 422 })
    }

    // Generate invite token and set expiration (7 days from now)
    // Requires DB column: invite_expires_at timestamptz
    const inviteToken = crypto.randomUUID()
    const inviteExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()

    // Check if the user already has an account
    const { data: existingProfile } = await admin
      .from('profiles')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single()

    const { data: newMember, error: insertError } = await admin
      .from('school_members')
      .insert({
        school_id: member.school_id,
        user_id: existingProfile?.id || null,
        role,
        full_name: name.trim(),
        email: email.toLowerCase().trim(),
        department: 'English',
        invite_status: 'pending',
        invite_token: inviteToken,
        invite_expires_at: inviteExpiresAt,
      })
      .select()
      .single()

    if (insertError) {
      console.error('Invite member error:', insertError)
      return NextResponse.json({ error: 'Failed to invite member' }, { status: 500 })
    }

    // In a production system, you would send an email here with the invite token.
    // For now, we return the token so the frontend can construct the invite link.

    return NextResponse.json({
      member: newMember,
      invite_url: `${process.env.NEXT_PUBLIC_APP_URL}/school/invite/${inviteToken}`,
    }, { status: 201 })
  } catch (error) {
    console.error('Invite member error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
