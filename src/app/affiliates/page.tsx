import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AffiliatePublicPage from '@/components/affiliates/AffiliatePublicPage'

// 2026-05-01: SEO/integrity pass — title rewritten to query-aligned form,
// description shortened to 120-155 char band, canonical URL added.
// Description stays generic ("recurring commission") rather than claiming
// a specific percentage: the live affiliate component shows mixed values
// (£5-£20 fixed amounts in the commission table, plus a "20%" stat tile
// and a "30% / 15% of first-year" dt block) so no single percentage is
// safe to repeat in metadata until the affiliate terms are reconciled.
// H1 + FAQ for this route live in <AffiliatePublicPage>, not this file.
export const metadata = {
  title: 'Affiliate programme — The English Hub',
  description:
    'Earn recurring commission promoting GCSE and IGCSE English revision with The English Hub. Pick a code, share your link, get paid monthly.',
  alternates: { canonical: 'https://theenglishhub.app/affiliates' },
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
