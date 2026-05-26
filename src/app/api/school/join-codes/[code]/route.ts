import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

// PATCH /api/school/join-codes/[code] - disable a join code
export async function PATCH(request: NextRequest, props: { params: Promise<{ code: string }> }) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-join-codes-patch:${ip}`, { limit: 20, windowSeconds: 60 })
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

    const membership = await verifySchoolMember(user.id, ['admin', 'head_of_department'])
    if (!membership) {
      return NextResponse.json(
        { error: 'Forbidden: requires admin or head of department role' },
        { status: 403 },
      )
    }

    let body: { is_active?: boolean }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const admin = createServiceRoleClient()
    const { data: updated, error: updateError } = await admin
      .from('school_join_codes')
      .update({ is_active: body.is_active ?? false })
      .eq('code', params.code)
      .eq('school_id', membership.school_id)
      .select()
      .single()

    if (updateError) {
      if (updateError.code === 'PGRST116') {
        return NextResponse.json({ error: 'Join code not found' }, { status: 404 })
      }
      console.error('Join code update error:', updateError)
      return NextResponse.json({ error: 'Failed to update join code' }, { status: 500 })
    }

    return NextResponse.json({ join_code: updated })
  } catch (error) {
    console.error('Join code patch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/school/join-codes/[code] - permanently delete a join code
export async function DELETE(request: NextRequest, props: { params: Promise<{ code: string }> }) {
  const params = await props.params
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-join-codes-delete:${ip}`, { limit: 20, windowSeconds: 60 })
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

    const membership = await verifySchoolMember(user.id, ['admin', 'head_of_department'])
    if (!membership) {
      return NextResponse.json(
        { error: 'Forbidden: requires admin or head of department role' },
        { status: 403 },
      )
    }

    const admin = createServiceRoleClient()
    const { error: deleteError } = await admin
      .from('school_join_codes')
      .delete()
      .eq('code', params.code)
      .eq('school_id', membership.school_id)

    if (deleteError) {
      console.error('Join code delete error:', deleteError)
      return NextResponse.json({ error: 'Failed to delete join code' }, { status: 500 })
    }

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('Join code delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
