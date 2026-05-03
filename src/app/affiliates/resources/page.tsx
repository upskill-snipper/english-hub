import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AffiliateResources from '@/components/affiliates/AffiliateResources'

export const metadata = {
  title: 'Affiliate Resources — The English Hub',
  description:
    'Ready-to-paste promo scripts, captions, and templates for The English Hub affiliates.',
}

// ─── /affiliates/resources ──────────────────────────────────────────────────
//
// Reads from the NEW affiliate_accounts system (migration 20260420_affiliates_v2).
// The legacy `affiliates` table has been retired from this page; every active
// affiliate has a row in `affiliate_accounts` with a public `code` used for
// ?ref=<code> attribution. The 30-day attribution cookie is set by the
// homepage middleware whenever a visitor lands with ?ref= in the URL.
// ────────────────────────────────────────────────────────────────────────────

export default async function AffiliateResourcesPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login?redirect=/affiliates/resources')

  const admin = createServiceRoleClient()

  const { data: account } = await admin
    .from('affiliate_accounts')
    .select('id, code, status, full_name, tier')
    .eq('user_id', user.id)
    .maybeSingle()

  // No row at all — punt them to the public enrolment page
  if (!account) {
    redirect('/affiliates#apply')
  }

  // Paused / pending / terminated — back to /affiliates so they see the
  // appropriate banner. Active + approved affiliates can use the resources.
  const isUsable = account.status === 'active' || account.status === 'approved'
  if (!isUsable) {
    redirect('/affiliates')
  }

  const referralUrl = `https://theenglishhub.app/?ref=${account.code}`

  return (
    <AffiliateResources
      referralUrl={referralUrl}
      affiliateCode={account.code}
      affiliateName={account.full_name}
    />
  )
}
