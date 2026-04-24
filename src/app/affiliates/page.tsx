import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AffiliatePublicPage from '@/components/affiliates/AffiliatePublicPage'

export const metadata = {
  title: 'Partner With Us — The English Hub',
  description:
    'Partner with The English Hub and help students achieve their potential. Earn competitive commission while making a real difference in education.',
}

// ─── /affiliates ────────────────────────────────────────────────────────────
// Self-serve partnership page. No review queue — enrolment via
// /api/affiliates/enrol is instant.
//
// If the user already has a NEW-system row in `affiliate_accounts`, send them
// to their dashboard. If they have a LEGACY-system pending application on the
// old `affiliates` table, we still let them see the page so they can
// re-enrol via the self-serve flow (the new row takes precedence everywhere
// else in the app). The `applicationStatus` prop is kept as a soft banner
// explaining the legacy state, but never blocks the new enrolment form.
// ────────────────────────────────────────────────────────────────────────────

export default async function AffiliatesPage() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return <AffiliatePublicPage />
  }

  // New-system check — if they have an active affiliate_accounts row, go to dashboard.
  const admin = createServiceRoleClient()
  const { data: newAccount } = await admin
    .from('affiliate_accounts')
    .select('id, code, status')
    .eq('user_id', user.id)
    .maybeSingle()

  if (newAccount && (newAccount.status === 'active' || newAccount.status === 'approved')) {
    redirect('/affiliates/dashboard')
  }

  // Legacy-system check — surface a soft banner only; enrolment form still renders.
  const { data: legacy } = await supabase
    .from('affiliates')
    .select('id, status')
    .eq('user_id', user.id)
    .maybeSingle()

  if (legacy?.status === 'active') {
    redirect('/affiliates/dashboard')
  }

  const applicationStatus =
    legacy?.status === 'pending' ||
    legacy?.status === 'agreement_sent' ||
    legacy?.status === 'agreement_signed'
      ? legacy.status
      : undefined

  return <AffiliatePublicPage applicationStatus={applicationStatus} isLoggedIn />
}
