import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || 'admin@theenglishhub.app')
  .split(',')
  .map((e) => e.trim().toLowerCase())

async function verifyAdmin(supabase: ReturnType<typeof createServerSupabaseClient>) {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('email')
    .eq('id', user.id)
    .single()

  if (!profile?.email || !ADMIN_EMAILS.includes(profile.email.toLowerCase())) {
    return null
  }

  return user
}

/**
 * GET /api/admin/affiliates
 * Returns all affiliates with stats for admin management.
 */
export async function GET(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const admin = await verifyAdmin(supabase)
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabaseAdmin = createServiceRoleClient()

  const statusFilter = request.nextUrl.searchParams.get('status')

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
