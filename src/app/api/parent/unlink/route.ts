import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { isParentRole } from '@/lib/parent/access-control'

// ── DELETE /api/parent/unlink ───────────────────────────────────────────────
//
// Soft-unlinks a parent from a child. Marks the parent_child_links row as
// 'unlinked' with a timestamp rather than hard-deleting, for audit /
// safeguarding trails. After this call, all read endpoints will refuse
// access to that child's data.
//
// Body: { child_id: string }

export async function DELETE(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!isParentRole(user)) {
      return NextResponse.json(
        { error: 'Only parent accounts can unlink children.' },
        { status: 403 }
      )
    }

    // Rate limit: 10 unlinks per hour per parent
    const rl = await rateLimit(`parent-unlink:${user.id}`, {
      limit: 10,
      windowSeconds: 3600,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many unlink requests. Please try again later.' },
        { status: 429 }
      )
    }

    let body: { child_id?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    const childId = body.child_id
    if (!childId || typeof childId !== 'string') {
      return NextResponse.json(
        { error: 'child_id is required.' },
        { status: 400 }
      )
    }

    const serviceClient = createServiceRoleClient()

    const { data: updated, error: updateErr } = await serviceClient
      .from('parent_child_links')
      .update({
        status: 'unlinked',
        unlinked_at: new Date().toISOString(),
      })
      .eq('parent_id', user.id)
      .eq('child_id', childId)
      .eq('status', 'active')
      .select('id')

    if (updateErr) {
      console.error('[parent/unlink] update failed:', updateErr)
      return NextResponse.json(
        { error: 'Failed to unlink. Please try again.' },
        { status: 500 }
      )
    }

    if (!updated || updated.length === 0) {
      return NextResponse.json(
        { error: 'No active link found for this child.' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      unlinked_child_id: childId,
      unlinked_at: new Date().toISOString(),
    })
  } catch (error) {
    console.error('[parent/unlink] unhandled error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
