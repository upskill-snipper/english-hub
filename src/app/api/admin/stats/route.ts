import { NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'admin@theenglishhub.app'

export async function GET() {
  try {
    // Verify the requesting user is authenticated and is the admin
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (user.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Use service role client to access all data
    const adminClient = createServiceRoleClient()

    // Fetch counts in parallel
    const [
      usersResult,
      subscribersResult,
      enrolmentsResult,
      certificatesResult,
      recentUsersResult,
      recentEnrolmentsResult,
    ] = await Promise.all([
      adminClient
        .from('profiles')
        .select('id', { count: 'exact', head: true }),
      adminClient
        .from('profiles')
        .select('id', { count: 'exact', head: true })
        .eq('subscription_status', 'pro'),
      adminClient
        .from('enrolments')
        .select('id', { count: 'exact', head: true }),
      adminClient
        .from('certificates')
        .select('id', { count: 'exact', head: true }),
      adminClient
        .from('profiles')
        .select('id, email, full_name, year_group, subscription_status, created_at')
        .order('created_at', { ascending: false })
        .limit(20),
      adminClient
        .from('enrolments')
        .select('id, user_id, course_id, enrolled_at, payment_type')
        .order('enrolled_at', { ascending: false })
        .limit(20),
    ])

    return NextResponse.json({
      totalUsers: usersResult.count ?? 0,
      activeSubscribers: subscribersResult.count ?? 0,
      totalEnrolments: enrolmentsResult.count ?? 0,
      certificateCount: certificatesResult.count ?? 0,
      recentUsers: recentUsersResult.data ?? [],
      recentEnrolments: recentEnrolmentsResult.data ?? [],
    })
  } catch (error) {
    console.error('Admin stats error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
