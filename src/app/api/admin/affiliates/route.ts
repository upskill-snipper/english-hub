import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

/**
 * GET /api/admin/affiliates
 * Returns all affiliates with stats for admin management.
 */
export async function GET(request: NextRequest) {
  const { error: authError } = await verifyAdmin()
  if (authError) {
    return NextResponse.json({ error: authError }, { status: authError === 'Unauthorized' ? 401 : 403 })
  }

  const supabaseAdmin = createServiceRoleClient()

  const statusFilter = request.nextUrl.searchParams.get('status')

  const validStatuses = ['pending', 'active', 'suspended', 'terminated']
  if (statusFilter && !validStatuses.includes(statusFilter)) {
    return NextResponse.json({ error: 'Invalid status filter' }, { status: 400 })
  }

  let query = supabaseAdmin
    .from('affiliates')
    .select(`
      *,
      affiliate_referrals (
        id,
        commission_amount_gbp,
        commission_status
      )
    `)
    .order('created_at', { ascending: false })

  if (statusFilter) {
    query = query.eq('status', statusFilter)
  }

  const { data: affiliates, error } = await query

  if (error) {
    console.error('Failed to fetch affiliates:', error)
    return NextResponse.json({ error: 'Failed to fetch affiliates' }, { status: 500 })
  }

  // Compute stats for each affiliate
  const enriched = (affiliates ?? []).map((a: any) => {
    const referrals = a.affiliate_referrals ?? []
    return {
      ...a,
      affiliate_referrals: undefined,
      stats: {
        total_referrals: referrals.length,
        total_commission_paid: referrals
          .filter((r: any) => r.commission_status === 'paid')
          .reduce((sum: number, r: any) => sum + (r.commission_amount_gbp ?? 0), 0),
        pending_commission: referrals
          .filter((r: any) => ['pending', 'confirmed'].includes(r.commission_status))
          .reduce((sum: number, r: any) => sum + (r.commission_amount_gbp ?? 0), 0),
      },
    }
  })

  return NextResponse.json(enriched)
}
