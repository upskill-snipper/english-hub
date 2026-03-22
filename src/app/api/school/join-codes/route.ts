import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no ambiguous chars (no 0/O, 1/I/L)
  let code = ''
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`school-join-codes:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const membership = await verifySchoolMember(user.id)
    if (!membership) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const admin = createServiceRoleClient()
    const { data: codes, error: codesError } = await admin
      .from('school_join_codes')
      .select('*, classes(id, name)')
      .eq('school_id', membership.school_id)
      .order('created_at', { ascending: false })

    if (codesError) {
      console.error('Join codes fetch error:', codesError)
      return NextResponse.json({ error: 'Failed to fetch join codes' }, { status: 500 })
    }

    // Add usage stats: remaining uses, expired status
    const codesWithStats = (codes || []).map((code: {
      id: string; code: string; max_uses: number; uses: number;
      expires_at: string | null; is_active: boolean; created_at: string;
      class_id: string | null; classes: { id: string; name: string } | null
    }) => ({
      ...code,
      remaining_uses: code.max_uses > 0 ? Math.max(0, code.max_uses - code.uses) : null,
      is_expired: code.expires_at ? new Date(code.expires_at) < new Date() : false,
      is_usable: code.is_active
        && (code.max_uses <= 0 || code.uses < code.max_uses)
        && (!code.expires_at || new Date(code.expires_at) >= new Date()),
    }))

    return NextResponse.json({ join_codes: codesWithStats })
  } catch (error) {
    console.error('Join codes error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`school-join-codes-create:${ip}`, { limit: 10, windowSeconds: 60 })
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

    const membership = await verifySchoolMember(user.id)
    if (!membership) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    let body: { class_id?: string; max_uses?: number; expires_days?: number }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { class_id, max_uses = 200, expires_days = 30 } = body

    const admin = createServiceRoleClient()

    // Validate class belongs to school if provided
    if (class_id) {
      const { data: cls } = await admin
        .from('classes')
        .select('id')
        .eq('id', class_id)
        .eq('school_id', membership.school_id)
        .single()

      if (!cls) {
        return NextResponse.json({ error: 'Class not found in your school' }, { status: 404 })
      }
    }

    const expiresAt = new Date(Date.now() + expires_days * 24 * 60 * 60 * 1000).toISOString()
    const code = generateCode()

    const { data: joinCode, error: createError } = await admin
      .from('school_join_codes')
      .insert({
        school_id: membership.school_id,
        class_id: class_id || null,
        code,
        max_uses,
        expires_at: expiresAt,
        created_by: membership.id,
      })
      .select()
      .single()

    if (createError) {
      console.error('Join code create error:', createError)
      // Handle unique constraint violation (code collision) — retry once
      if (createError.code === '23505') {
        const retryCode = generateCode()
        const { data: retryJoinCode, error: retryError } = await admin
          .from('school_join_codes')
          .insert({
            school_id: membership.school_id,
            class_id: class_id || null,
            code: retryCode,
            max_uses,
            expires_at: expiresAt,
            created_by: membership.id,
          })
          .select()
          .single()

        if (retryError) {
          return NextResponse.json({ error: 'Failed to create join code' }, { status: 500 })
        }
        return NextResponse.json({ join_code: retryJoinCode }, { status: 201 })
      }
      return NextResponse.json({ error: 'Failed to create join code' }, { status: 500 })
    }

    return NextResponse.json({ join_code: joinCode }, { status: 201 })
  } catch (error) {
    console.error('Join code create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
