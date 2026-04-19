import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

const VALID_ROLES = ['admin', 'head_of_department', 'teacher'] as const
type SchoolRole = (typeof VALID_ROLES)[number]

interface RouteParams {
  params: Promise<{ id: string }>
}

// GET /api/school/members/[id] — get single member details
export async function GET(request: NextRequest, props: RouteParams) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-member-get:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const actor = await verifySchoolMember(user.id)
    if (!actor) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const memberId = params.id
    if (!memberId) {
      return NextResponse.json({ error: 'Member ID is required' }, { status: 400 })
    }

    const admin = createServiceRoleClient()

    const { data: member, error: fetchError } = await admin
      .from('school_members')
      .select(
        'id, user_id, role, full_name, email, department, invite_status, last_active_at, created_at, school_id',
      )
      .eq('id', memberId)
      .eq('school_id', actor.school_id)
      .single()

    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        return NextResponse.json({ error: 'Member not found' }, { status: 404 })
      }
      console.error('Member fetch error:', fetchError)
      return NextResponse.json({ error: 'Failed to fetch member' }, { status: 500 })
    }

    return NextResponse.json({ member })
  } catch (error) {
    console.error('Member get error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/school/members/[id] — update member (name, email, role, department)
export async function PUT(request: NextRequest, props: RouteParams) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-member-update:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const actor = await verifySchoolMember(user.id, ['admin'])
    if (!actor) {
      return NextResponse.json(
        { error: 'Forbidden: only school admins can update members' },
        { status: 403 },
      )
    }

    const memberId = params.id
    if (!memberId) {
      return NextResponse.json({ error: 'Member ID is required' }, { status: 400 })
    }

    let body: { name?: string; email?: string; role?: string; department?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { name, email, role, department } = body

    // Validate fields if provided
    if (name !== undefined && (typeof name !== 'string' || name.trim().length === 0)) {
      return NextResponse.json({ error: 'name must be a non-empty string' }, { status: 422 })
    }

    if (email !== undefined) {
      if (typeof email !== 'string' || !email.includes('@')) {
        return NextResponse.json({ error: 'email must be a valid email address' }, { status: 422 })
      }
    }

    if (role !== undefined && !VALID_ROLES.includes(role as SchoolRole)) {
      return NextResponse.json(
        { error: `role must be one of: ${VALID_ROLES.join(', ')}` },
        { status: 422 },
      )
    }

    if (department !== undefined && typeof department !== 'string') {
      return NextResponse.json({ error: 'department must be a string' }, { status: 422 })
    }

    // Require at least one field to update
    if (
      name === undefined &&
      email === undefined &&
      role === undefined &&
      department === undefined
    ) {
      return NextResponse.json(
        { error: 'At least one field to update is required' },
        { status: 422 },
      )
    }

    const admin = createServiceRoleClient()

    // Verify target member belongs to the same school
    const { data: existing, error: fetchError } = await admin
      .from('school_members')
      .select('id, school_id')
      .eq('id', memberId)
      .eq('school_id', actor.school_id)
      .single()

    if (fetchError || !existing) {
      return NextResponse.json({ error: 'Member not found in your school' }, { status: 404 })
    }

    const updates: Record<string, string> = {}
    if (name !== undefined) updates.full_name = name.trim()
    if (email !== undefined) updates.email = email.toLowerCase().trim()
    if (role !== undefined) updates.role = role
    if (department !== undefined) updates.department = department.trim()

    const { data: updated, error: updateError } = await admin
      .from('school_members')
      .update(updates)
      .eq('id', memberId)
      .select(
        'id, user_id, role, full_name, email, department, invite_status, last_active_at, created_at, school_id',
      )
      .single()

    if (updateError) {
      console.error('Member update error:', updateError)
      return NextResponse.json({ error: 'Failed to update member' }, { status: 500 })
    }

    return NextResponse.json({ member: updated })
  } catch (error) {
    console.error('Member update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/school/members/[id] — remove member from school
export async function DELETE(request: NextRequest, props: RouteParams) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-member-delete:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const actor = await verifySchoolMember(user.id, ['admin'])
    if (!actor) {
      return NextResponse.json(
        { error: 'Forbidden: only school admins can remove members' },
        { status: 403 },
      )
    }

    const memberId = params.id
    if (!memberId) {
      return NextResponse.json({ error: 'Member ID is required' }, { status: 400 })
    }

    const admin = createServiceRoleClient()

    // Verify target member belongs to the same school
    const { data: existing, error: fetchError } = await admin
      .from('school_members')
      .select('id, user_id, school_id')
      .eq('id', memberId)
      .eq('school_id', actor.school_id)
      .single()

    if (fetchError || !existing) {
      return NextResponse.json({ error: 'Member not found in your school' }, { status: 404 })
    }

    // Prevent self-removal
    if (existing.user_id === user.id) {
      return NextResponse.json(
        { error: 'You cannot remove yourself from the school' },
        { status: 422 },
      )
    }

    const { error: deleteError } = await admin.from('school_members').delete().eq('id', memberId)

    if (deleteError) {
      console.error('Member delete error:', deleteError)
      return NextResponse.json({ error: 'Failed to remove member' }, { status: 500 })
    }

    return NextResponse.json({ success: true, removedMemberId: memberId })
  } catch (error) {
    console.error('Member delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
