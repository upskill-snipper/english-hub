import { NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const { error: authError } = await verifyAdmin()

    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
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
    console.error('[api/admin/stats] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
