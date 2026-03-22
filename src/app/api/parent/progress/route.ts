import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

// ── GET: Return child's learning data for the authenticated parent ──────────

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
        { status: 404 }
      )
    }

    const childId = link.child_id

    // ── Fetch child profile ──────────────────────────────────────────────────

    const { data: childProfile, error: profileError } = await serviceClient
      .from('profiles')
      .select('id, full_name, email')
      .eq('id', childId)
      .single()

    if (profileError || !childProfile) {
      return NextResponse.json(
        { error: 'Child profile not found.' },
        { status: 404 }
      )
    }

    // ── Fetch child's learning data in parallel ──────────────────────────────

    const [enrolRes, progressRes, certRes] = await Promise.all([
      serviceClient
        .from('enrolments')
        .select('course_id, enrolled_at')
        .eq('user_id', childId),
      serviceClient
        .from('module_progress')
        .select('id, course_id, module_id, completed, quiz_score, time_spent_seconds, completed_at')
        .eq('user_id', childId),
      serviceClient
        .from('certificates')
        .select('id, course_id, score, grade, issued_at')
        .eq('user_id', childId),
    ])

    if (enrolRes.error) {
      console.error('Failed to fetch enrolments:', enrolRes.error)
    }
    if (progressRes.error) {
      console.error('Failed to fetch module progress:', progressRes.error)
    }
    if (certRes.error) {
      console.error('Failed to fetch certificates:', certRes.error)
    }

    return NextResponse.json({
      child_id: childProfile.id,
      child_name: childProfile.full_name ?? 'Student',
      child_email: childProfile.email,
      enrolments: enrolRes.data ?? [],
      module_progress: progressRes.data ?? [],
      certificates: certRes.data ?? [],
    })
  } catch (error) {
    console.error('Parent progress error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
