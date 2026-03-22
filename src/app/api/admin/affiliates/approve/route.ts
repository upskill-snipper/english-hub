import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { createRewardfulAffiliate } from '@/lib/rewardful'

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
  const supabase = createServerSupabaseClient()
  const admin = await verifyAdmin(supabase)
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: ApproveBody
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!body.affiliateId || !body.action) {
    return NextResponse.json({ error: 'Missing affiliateId or action' }, { status: 400 })
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

  // 2. Update affiliate record
  const updateData: Record<string, unknown> = {
    status: 'active',
    activated_at: new Date().toISOString(),
    rewardful_affiliate_id: rewardfulAffiliate.id,
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
