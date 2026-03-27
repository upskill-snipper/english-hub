import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { createRewardfulAffiliate } from '@/lib/rewardful'
import { verifyAdmin } from '@/lib/admin-auth'

interface ApproveBody {
  affiliateId: string
  action: 'approve' | 'reject'
  rejectionReason?: string
}

/**
 * POST /api/admin/affiliates/approve
 * Approve or reject an affiliate application.
 */
export async function POST(request: NextRequest) {
  const { error: authError } = await verifyAdmin()
  if (authError) {
    return NextResponse.json({ error: authError }, { status: authError === 'Unauthorized' ? 401 : 403 })
  }

  let body: ApproveBody
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!body.affiliateId || typeof body.affiliateId !== 'string' || body.affiliateId.length > 100) {
    return NextResponse.json({ error: 'Valid affiliateId is required' }, { status: 400 })
  }

  if (!body.action || (body.action !== 'approve' && body.action !== 'reject')) {
    return NextResponse.json({ error: 'action must be "approve" or "reject"' }, { status: 400 })
  }

  if (body.rejectionReason && (typeof body.rejectionReason !== 'string' || body.rejectionReason.length > 1000)) {
    return NextResponse.json({ error: 'rejectionReason must be 1000 characters or fewer' }, { status: 400 })
  }

  const supabaseAdmin = createServiceRoleClient()

  // Fetch the affiliate
  const { data: affiliate, error: fetchError } = await supabaseAdmin
    .from('affiliates')
    .select('*')
    .eq('id', body.affiliateId)
    .single()

  if (fetchError || !affiliate) {
    return NextResponse.json({ error: 'Affiliate not found' }, { status: 404 })
  }

  if (affiliate.status !== 'pending') {
    return NextResponse.json(
      { error: `Cannot ${body.action} affiliate with status '${affiliate.status}'` },
      { status: 400 }
    )
  }

  // ── Reject ──────────────────────────────────────────────
  if (body.action === 'reject') {
    const { error } = await supabaseAdmin
      .from('affiliates')
      .update({
        status: 'terminated',
        terminated_at: new Date().toISOString(),
        termination_reason: body.rejectionReason || 'Application rejected',
      })
      .eq('id', body.affiliateId)

    if (error) {
      return NextResponse.json({ error: 'Failed to reject affiliate' }, { status: 500 })
    }

    return NextResponse.json({ success: true, action: 'rejected' })
  }

  // ── Approve ─────────────────────────────────────────────
  // NOTE: For MVP this intentionally transitions directly from 'pending' to 'active'
  // without a separate agreement step. In a future release, add an intermediate
  // 'agreement_pending' state and populate the agreement_signed_at / agreement_version
  // fields before activating the affiliate.

  // 1. Create Rewardful affiliate account
  const nameParts = affiliate.full_name.split(' ')
  const rewardfulAffiliate = await createRewardfulAffiliate({
    email: affiliate.email,
    first_name: nameParts[0] ?? affiliate.full_name,
    last_name: nameParts.slice(1).join(' ') || undefined,
  })

  if (!rewardfulAffiliate) {
    return NextResponse.json(
      { error: 'Failed to create Rewardful affiliate account. Please retry.' },
      { status: 502 }
    )
  }

  // 2. Update affiliate record (store link token for ?via= URL)
  const linkToken = rewardfulAffiliate.links?.[0]?.token ?? null
  const updateData: Record<string, unknown> = {
    status: 'active',
    activated_at: new Date().toISOString(),
    rewardful_affiliate_id: rewardfulAffiliate.id,
    rewardful_link_token: linkToken,
  }

  const { error: updateError } = await supabaseAdmin
    .from('affiliates')
    .update(updateData)
    .eq('id', body.affiliateId)

  if (updateError) {
    console.error('Failed to activate affiliate:', updateError)
    return NextResponse.json({ error: 'Failed to activate affiliate' }, { status: 500 })
  }

  // TODO: Send onboarding email with affiliate link

  return NextResponse.json({
    success: true,
    action: 'approved',
    rewardful_id: rewardfulAffiliate?.id ?? null,
  })
}
