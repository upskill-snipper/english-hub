// Cycle 7 / Identity PR-3: lookups prefer supabaseUserId over email.
import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { isValidLinkCode, normalizeLinkCode, isLinkCodeExpired } from '@/lib/parent/link-codes'
import { isParentRole } from '@/lib/parent/access-control'

// ── POST: Redeem a 6-char link code to link parent → child ──────────────────
//
// Flow:
//   1. Student generates a code in their dashboard (server writes a row
//      into parent_link_codes with a 15-minute TTL).
//   2. Parent enters the code on /parent/link-child.
//   3. This endpoint validates the code, consumes it (single-use),
//      and creates an ACTIVE parent_child_links row.
//
// Security:
//   - Only parent-role users can call this.
//   - Rate-limited to 5 attempts / hour / parent (brute-force protection).
//   - Codes are single-use and TTL'd.
//   - Self-linking is explicitly blocked.

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // ── Role check ───────────────────────────────────────────────────────────
    if (!isParentRole(user)) {
      return NextResponse.json(
        { error: 'Only parent accounts can link to a child.' },
        { status: 403 },
      )
    }

    // ── Rate limiting: 5 attempts per hour per parent ────────────────────────
    const rl = await rateLimit(`link-child:${user.id}`, {
      limit: 5,
      windowSeconds: 3600,
    })

    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many link attempts. Please try again in an hour.' },
        { status: 429 },
      )
    }

    // ── Parse and validate body ──────────────────────────────────────────────
    let body: { code?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const rawCode = (body.code ?? '').toString()
    if (!rawCode) {
      return NextResponse.json({ error: 'A 6-character link code is required.' }, { status: 400 })
    }

    const code = normalizeLinkCode(rawCode)

    if (!isValidLinkCode(code)) {
      return NextResponse.json(
        {
          error: 'That link code looks wrong. Please check with your child and try again.',
        },
        { status: 400 },
      )
    }

    const serviceClient = createServiceRoleClient()

    // ── Look up the code ─────────────────────────────────────────────────────
    const { data: linkCode, error: codeErr } = await serviceClient
      .from('parent_link_codes')
      .select('id, code, child_id, expires_at, consumed_at')
      .eq('code', code)
      .maybeSingle()

    if (codeErr) {
      console.error('[parent/link-child] code lookup failed:', codeErr)
      return NextResponse.json(
        { error: 'Could not verify link code. Please try again.' },
        { status: 500 },
      )
    }

    if (!linkCode) {
      return NextResponse.json({ error: 'Invalid or expired link code.' }, { status: 404 })
    }

    if (linkCode.consumed_at) {
      return NextResponse.json({ error: 'This link code has already been used.' }, { status: 410 })
    }

    if (isLinkCodeExpired(linkCode.expires_at)) {
      return NextResponse.json(
        { error: 'This link code has expired. Ask your child for a new one.' },
        { status: 410 },
      )
    }

    const childUserId: string = linkCode.child_id

    // Prevent self-linking
    if (childUserId === user.id) {
      return NextResponse.json(
        { error: 'You cannot link your own account as a child.' },
        { status: 400 },
      )
    }

    // ── Check for existing active/pending link ───────────────────────────────
    const { data: existingLink } = await serviceClient
      .from('parent_child_links')
      .select('id, status')
      .eq('parent_id', user.id)
      .eq('child_id', childUserId)
      .maybeSingle()

    if (existingLink && existingLink.status === 'active') {
      return NextResponse.json({ error: 'This child account is already linked.' }, { status: 409 })
    }

    // ── Enforce Parent tier cap: up to 3 children per parent ─────────────────
    const { count: activeCount } = await serviceClient
      .from('parent_child_links')
      .select('id', { count: 'exact', head: true })
      .eq('parent_id', user.id)
      .eq('status', 'active')

    if ((activeCount ?? 0) >= 3) {
      return NextResponse.json(
        {
          error: 'Your Parent plan supports up to 3 linked children. Unlink one to add another.',
        },
        { status: 409 },
      )
    }

    // ── Atomically consume the code and create the active link ──────────────
    // Supabase JS doesn't expose a single transaction primitive from the
    // client library — we consume the code first (so it can't be reused)
    // then insert the link. If the insert fails, a cron cleanup will
    // collect the orphaned consumed code.
    const nowIso = new Date().toISOString()

    const { error: consumeErr } = await serviceClient
      .from('parent_link_codes')
      .update({ consumed_at: nowIso, consumed_by_parent_id: user.id })
      .eq('id', linkCode.id)
      .is('consumed_at', null) // guard against race

    if (consumeErr) {
      console.error('[parent/link-child] consume failed:', consumeErr)
      return NextResponse.json(
        { error: 'Could not redeem link code. Please try again.' },
        { status: 500 },
      )
    }

    const { data: link, error: linkError } = await serviceClient
      .from('parent_child_links')
      .upsert(
        {
          parent_id: user.id,
          child_id: childUserId,
          status: 'active',
          linked_at: nowIso,
          requested_at: nowIso,
          link_code_id: linkCode.id,
        },
        { onConflict: 'parent_id,child_id' },
      )
      .select('id, status, linked_at')
      .single()

    if (linkError) {
      console.error('[parent/link-child] create link failed:', linkError)
      return NextResponse.json(
        { error: 'Failed to create link. Please try again.' },
        { status: 500 },
      )
    }

    // ── Fetch child profile for response ─────────────────────────────────────
    const { data: childProfile } = await serviceClient
      .from('profiles')
      .select('id, full_name, email')
      .eq('id', childUserId)
      .single()

    return NextResponse.json({
      success: true,
      link_id: link.id,
      status: link.status,
      linked_at: link.linked_at,
      child: {
        id: childProfile?.id ?? childUserId,
        name: childProfile?.full_name ?? 'Student',
        email: childProfile?.email ?? null,
      },
    })
  } catch (error) {
    console.error('[parent/link-child] unhandled error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
