// ─── IELTS-10 Visa & Finance checklist - entitlement gate (Server Component) ─
// An interactive UK Student-visa + finance readiness checklist that produces a
// "can apply / not yet / blocked" status AND writes a VisaFinanceReadinessInput
// into the readiness store, so the Candidate Readiness Report's Visa & Finance
// domain (weight 20) becomes tool-driven instead of self-report.
//
// Mirrors /ielts/readiness: a Server Component resolves the user's IELTS
// entitlement server-side (createServerSupabaseClient + hasIeltsAccess) and
// passes a boolean to the interactive client. Free users get a tasteful teaser
// with a /pricing#ielts CTA. Page files export only the default component.
// ────────────────────────────────────────────────────────────────────────────

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { hasIeltsAccess } from '@/lib/course-access'
import { VisaFinanceChecklistClient } from './VisaFinanceChecklistClient'

export default async function IeltsVisaFinancePage() {
  let hasAccess = false
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      hasAccess = await hasIeltsAccess(supabase, user.id)
    }
  } catch {
    // Signed out / auth unavailable → no access; client shows the teaser + CTA.
    hasAccess = false
  }

  return <VisaFinanceChecklistClient hasAccess={hasAccess} />
}
