import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

// ── POST: Link a child account to the authenticated parent ──────────────────

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

    let body: { child_email?: string; invite_code?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { child_email, invite_code } = body

    if (!child_email && !invite_code) {
      return NextResponse.json(
        { error: 'Please provide either a child email or invite code.' },
        { status: 400 }
      )
    }

    const serviceClient = createServiceRoleClient()

    // ── Find the child user ──────────────────────────────────────────────────

    let childUserId: string | null = null

    if (invite_code) {
      // Look up invite code in parent_links table (pending invites)
      const { data: pendingLink, error: inviteErr } = await serviceClient
        .from('parent_child_links')
        .select('child_id')
        .eq('invite_code', invite_code)
        .eq('status', 'pending')
        .single()

      if (inviteErr || !pendingLink) {
        return NextResponse.json(
          { error: 'Invalid or expired invite code.' },
          { status: 404 }
        )
      }
      childUserId = pendingLink.child_id
    } else if (child_email) {
      // Look up child by email in profiles
      const { data: childProfile, error: profileErr } = await serviceClient
        .from('profiles')
        .select('id')
        .eq('email', child_email)
        .single()

      if (profileErr || !childProfile) {
        return NextResponse.json(
          { error: 'No account found with that email address. Make sure your child has signed up first.' },
          { status: 404 }
        )
      }
      childUserId = childProfile.id
    }

    if (!childUserId) {
      return NextResponse.json(
        { error: 'Could not find child account.' },
        { status: 404 }
      )
    }

    // Prevent linking to yourself
    if (childUserId === user.id) {
      return NextResponse.json(
        { error: 'You cannot link your own account as a child.' },
        { status: 400 }
      )
    }

    // ── Check for existing link ──────────────────────────────────────────────

    const { data: existingLink } = await serviceClient
      .from('parent_child_links')
      .select('id')
      .eq('parent_id', user.id)
      .eq('child_id', childUserId)
      .in('status', ['active', 'pending'])
      .single()

    if (existingLink) {
      return NextResponse.json(
        { error: 'This child account is already linked to your parent account.' },
        { status: 409 }
      )
    }

    // ── Create or update the link ────────────────────────────────────────────

    const { data: link, error: linkError } = await serviceClient
      .from('parent_child_links')
      .upsert(
        {
          parent_id: user.id,
          child_id: childUserId,
          status: 'active',
          linked_at: new Date().toISOString(),
        },
        { onConflict: 'parent_id,child_id' }
      )
      .select()
      .single()

    if (linkError) {
      console.error('Failed to create parent-child link:', linkError)
      return NextResponse.json(
        { error: 'Failed to link accounts. Please try again.' },
        { status: 500 }
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
      child: {
        id: childProfile?.id,
        name: childProfile?.full_name ?? 'Student',
        email: childProfile?.email,
      },
    })
  } catch (error) {
    console.error('Link child error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// ── DELETE: Unlink a child account ──────────────────────────────────────────

export async function DELETE() {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const serviceClient = createServiceRoleClient()

    const { error: deleteError } = await serviceClient
      .from('parent_child_links')
      .update({ status: 'unlinked', unlinked_at: new Date().toISOString() })
      .eq('parent_id', user.id)
      .eq('status', 'active')

    if (deleteError) {
      console.error('Failed to unlink:', deleteError)
      return NextResponse.json(
        { error: 'Failed to unlink accounts.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Unlink error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
