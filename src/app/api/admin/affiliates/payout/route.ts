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

  if (!user.email || !ADMIN_EMAILS.includes(user.email.toLowerCase())) {
    return null
  }

  return user
}

/**
 * POST /api/admin/affiliates/payout
 * Calculate payouts for a given month, or update payout status.
 */
export async function POST(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const admin = await verifyAdmin(supabase)
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let body: any
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
  const supabaseAdmin = createServiceRoleClient()

  // ── Calculate payouts for a month ─────────────────────
  if (body.action === 'calculate') {
    const { year, month } = body as { year: number; month: number; action: string }
    if (!year || !month) {
      return NextResponse.json({ error: 'year and month are required' }, { status: 400 })
    }

    const periodStart = `${year}-${String(month).padStart(2, '0')}-01`
    const nextMonth = month === 12 ? 1 : month + 1
    const nextYear = month === 12 ? year + 1 : year
    const periodEnd = `${nextYear}-${String(nextMonth).padStart(2, '0')}-01`

    // Find all confirmed referrals in this period not yet in a payout
    const { data: referrals, error: refError } = await supabaseAdmin
      .from('affiliate_referrals')
      .select('id, affiliate_id, commission_amount_gbp')
      .eq('commission_status', 'confirmed')
      .is('payout_id', null)
      .gte('converted_to_paid_at', periodStart)
      .lt('converted_to_paid_at', periodEnd)

    if (refError) {
      return NextResponse.json({ error: 'Failed to fetch referrals' }, { status: 500 })
    }

    if (!referrals || referrals.length === 0) {
      return NextResponse.json({ payouts: [], message: 'No confirmed referrals for this period' })
    }

    // Group by affiliate
    const grouped: Record<string, { count: number; total: number; referralIds: string[] }> = {}
    for (const ref of referrals) {
      if (!grouped[ref.affiliate_id]) {
        grouped[ref.affiliate_id] = { count: 0, total: 0, referralIds: [] }
      }
      grouped[ref.affiliate_id].count++
      grouped[ref.affiliate_id].total += ref.commission_amount_gbp ?? 0
      grouped[ref.affiliate_id].referralIds.push(ref.id)
    }

    // Create payout records
    const payoutResults = []
    for (const [affiliateId, data] of Object.entries(grouped)) {
      const { data: payout, error: payoutError } = await supabaseAdmin
        .from('affiliate_payouts')
        .insert({
          affiliate_id: affiliateId,
          period_start: periodStart,
          period_end: periodEnd,
          referral_count: data.count,
          gross_commission_gbp: data.total,
          status: 'calculated',
        })
        .select('id')
        .single()

      if (payoutError || !payout) {
        console.error(`Failed to create payout for affiliate ${affiliateId}:`, payoutError)
        continue
      }

      // Link referrals to this payout
      const { error: linkError } = await supabaseAdmin
        .from('affiliate_referrals')
        .update({ payout_id: payout.id })
        .in('id', data.referralIds)

      if (linkError) {
        console.error(`Failed to link referrals to payout ${payout.id}:`, linkError)
        // Continue processing other affiliates but log the failure
      }

      payoutResults.push({
        payout_id: payout.id,
        affiliate_id: affiliateId,
        referral_count: data.count,
        gross_commission_gbp: data.total,
      })
    }

    return NextResponse.json({ payouts: payoutResults })
  }

  // ── Update payout status ──────────────────────────────
  if (body.action === 'update_status') {
    const { payoutId, status, disclosure_check_passed, notes } = body

    if (!payoutId || !status) {
      return NextResponse.json({ error: 'payoutId and status are required' }, { status: 400 })
    }

    const validTransitions: Record<string, string[]> = {
      calculated: ['disclosure_checked'],
      disclosure_checked: ['approved'],
      approved: ['paid', 'failed'],
    }

    // Fetch current payout
    const { data: payout } = await supabaseAdmin
      .from('affiliate_payouts')
      .select('status')
      .eq('id', payoutId)
      .single()

    if (!payout) {
      return NextResponse.json({ error: 'Payout not found' }, { status: 404 })
    }

    if (!validTransitions[payout.status]?.includes(status)) {
      return NextResponse.json(
        { error: `Cannot transition from '${payout.status}' to '${status}'` },
        { status: 400 }
      )
    }

    // Disclosure check gate
    if (status === 'disclosure_checked' && disclosure_check_passed === undefined) {
      return NextResponse.json(
        { error: 'disclosure_check_passed is required for disclosure_checked status' },
        { status: 400 }
      )
    }

    // Cannot approve without passing disclosure check
    if (status === 'approved') {
      const { data: currentPayout } = await supabaseAdmin
        .from('affiliate_payouts')
        .select('disclosure_check_passed')
        .eq('id', payoutId)
        .single()

      if (!currentPayout?.disclosure_check_passed) {
        return NextResponse.json(
          { error: 'Cannot approve payout without passing disclosure check' },
          { status: 400 }
        )
      }
    }

    const updateData: Record<string, unknown> = { status }

    if (status === 'disclosure_checked') {
      updateData.disclosure_check_passed = disclosure_check_passed
      updateData.disclosure_check_notes = notes || null
      updateData.disclosure_checked_by = admin.email
      updateData.disclosure_checked_at = new Date().toISOString()
    }

    if (status === 'approved') {
      updateData.approved_by = admin.email
      updateData.approved_at = new Date().toISOString()
    }

    if (status === 'paid') {
      updateData.paid_at = new Date().toISOString()
      updateData.payment_reference = body.payment_reference || null
    }

    const { error: updateError } = await supabaseAdmin
      .from('affiliate_payouts')
      .update(updateData)
      .eq('id', payoutId)

    if (updateError) {
      return NextResponse.json({ error: 'Failed to update payout' }, { status: 500 })
    }

    // If paid, update referral commission status
    if (status === 'paid') {
      const { error: referralUpdateError } = await supabaseAdmin
        .from('affiliate_referrals')
        .update({ commission_status: 'paid' })
        .eq('payout_id', payoutId)

      if (referralUpdateError) {
        console.error(`Failed to update referral commission status for payout ${payoutId}:`, referralUpdateError)
        return NextResponse.json({ error: 'Payout status updated but failed to update referral commissions' }, { status: 500 })
      }
    }

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}
