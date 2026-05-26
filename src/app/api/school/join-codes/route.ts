import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

function generateCode(length = 8): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no ambiguous chars (no 0/O, 1/I/L)
  const randomBytes = crypto.getRandomValues(new Uint8Array(length))
  return Array.from(randomBytes, (b) => chars[b % chars.length]).join('')
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-join-codes:${ip}`, { limit: 30, windowSeconds: 60 })
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
    const codesWithStats = (codes || []).map(
      (code: {
        id: string
        code: string
        max_uses: number
        uses: number
        expires_at: string | null
        is_active: boolean
        created_at: string
        class_id: string | null
        classes: { id: string; name: string } | null
      }) => ({
        ...code,
        remaining_uses: code.max_uses > 0 ? Math.max(0, code.max_uses - code.uses) : null,
        is_expired: code.expires_at ? new Date(code.expires_at) < new Date() : false,
        is_usable:
          code.is_active &&
          (code.max_uses <= 0 || code.uses < code.max_uses) &&
          (!code.expires_at || new Date(code.expires_at) >= new Date()),
      }),
    )

    return NextResponse.json({ join_codes: codesWithStats })
  } catch (error) {
    console.error('Join codes error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-join-codes-create:${ip}`, { limit: 10, windowSeconds: 60 })
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

    let body: {
      type?: 'student' | 'teacher'
      class_id?: string
      classId?: string
      max_uses?: number
      maxUses?: number
      expires_days?: number
      expiresAt?: string | null
      code?: string
    }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const codeType: 'student' | 'teacher' = body.type ?? 'student'
    if (codeType !== 'student' && codeType !== 'teacher') {
      return NextResponse.json({ error: 'type must be "student" or "teacher"' }, { status: 422 })
    }

    const class_id = body.class_id ?? body.classId
    const max_uses = body.maxUses ?? body.max_uses ?? 200
    const customCode = body.code?.trim().toUpperCase() || null

    // Validate numeric parameters
    if (
      typeof max_uses !== 'number' ||
      !Number.isInteger(max_uses) ||
      max_uses < 0 ||
      max_uses > 10000
    ) {
      return NextResponse.json(
        { error: 'max_uses must be an integer between 0 and 10000' },
        { status: 422 },
      )
    }

    // Validate custom code if provided
    if (customCode && !/^[A-Z0-9]{3,12}$/.test(customCode)) {
      return NextResponse.json(
        { error: 'Custom code must be 3-12 uppercase alphanumeric characters' },
        { status: 422 },
      )
    }

    // Resolve expiry: explicit ISO date, expires_days offset, or null (never)
    let expiresAt: string | null = null
    if (body.expiresAt !== undefined) {
      if (body.expiresAt !== null) {
        const parsed = new Date(body.expiresAt)
        if (isNaN(parsed.getTime()) || parsed <= new Date()) {
          return NextResponse.json(
            { error: 'expiresAt must be a future ISO date string or null' },
            { status: 422 },
          )
        }
        expiresAt = parsed.toISOString()
      }
      // null means never expires - leave as null
    } else if (body.expires_days !== undefined) {
      const expires_days = body.expires_days
      if (
        typeof expires_days !== 'number' ||
        !Number.isInteger(expires_days) ||
        expires_days < 1 ||
        expires_days > 365
      ) {
        return NextResponse.json(
          { error: 'expires_days must be an integer between 1 and 365' },
          { status: 422 },
        )
      }
      expiresAt = new Date(Date.now() + expires_days * 24 * 60 * 60 * 1000).toISOString()
    } else {
      // Default: 30 days
      expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    }

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

    const code = customCode ?? generateCode()

    const insertPayload = {
      school_id: membership.school_id,
      class_id: class_id || null,
      type: codeType,
      code,
      max_uses,
      expires_at: expiresAt,
      created_by: membership.id,
    }

    const { data: joinCode, error: createError } = await admin
      .from('school_join_codes')
      .insert(insertPayload)
      .select()
      .single()

    if (createError) {
      console.error('Join code create error:', createError)
      // Handle unique constraint violation (code collision) - retry once with auto-generated code
      if (createError.code === '23505') {
        const retryCode = generateCode()
        const { data: retryJoinCode, error: retryError } = await admin
          .from('school_join_codes')
          .insert({ ...insertPayload, code: retryCode })
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
