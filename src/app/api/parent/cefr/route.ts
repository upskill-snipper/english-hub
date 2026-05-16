import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { summariseCEFRCohort } from '@/lib/eal/cefr-aggregate'

// ── GET: Return the linked child's CEFR placement progress for the
//        authenticated parent. Mirrors /api/parent/progress exactly for
//        auth, role check, rate limiting and child resolution; the only
//        difference is the payload (CEFR cohort summary for one child).

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // ── Role check: only parent accounts can view child progress ──────────
    const parentRole = user.user_metadata?.role
    if (parentRole !== 'parent') {
      return NextResponse.json(
        { error: 'Only parent accounts can access child progress.' },
        { status: 403 },
      )
    }

    // Rate limit: 30 requests per minute per user
    const rl = await rateLimit(`parent-cefr:${user.id}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    const serviceClient = createServiceRoleClient()

    // ── Find linked child ────────────────────────────────────────────────────

    const { data: link, error: linkError } = await serviceClient
      .from('parent_child_links')
      .select('child_id')
      .eq('parent_id', user.id)
      .eq('status', 'active')
      .order('linked_at', { ascending: false })
      .limit(1)
      .single()

    if (linkError || !link) {
      return NextResponse.json(
        { error: 'No linked child account found. Link a child account first.' },
        { status: 404 },
      )
    }

    const childId = link.child_id

    // ── Fetch child profile ──────────────────────────────────────────────────

    const { data: childProfile, error: profileError } = await serviceClient
      .from('profiles')
      .select('id, full_name')
      .eq('id', childId)
      .single()

    if (profileError || !childProfile) {
      return NextResponse.json({ error: 'Child profile not found.' }, { status: 404 })
    }

    // ── Aggregate CEFR placements for this single child ───────────────────────
    // summariseCEFRCohort returns { available: false } (a normal 200) when the
    // progress_cefr migration hasn't been applied yet; it only throws on an
    // unexpected error, which we surface as a 500.

    try {
      const summary = await summariseCEFRCohort(serviceClient, [childId])
      return NextResponse.json({
        childName: childProfile.full_name ?? 'Student',
        summary,
      })
    } catch (aggregateError) {
      console.error('[parent/cefr] CEFR aggregation failed:', aggregateError)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
  } catch (error) {
    console.error('[parent/cefr] error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
