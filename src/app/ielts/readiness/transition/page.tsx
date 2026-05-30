// ─── IELTS-11 Academic-transition modules - entitlement gate (Server) ───────
// Short self-guided modules + a per-module self-rating that prepares a Gulf
// applicant for UK university life (academic writing, lectures/contact hours,
// budgeting, accommodation). The ratings write an AcademicTransitionReadiness
// Input into the readiness store, so the Candidate Readiness Report's Transition
// domain (weight 15) becomes module-driven instead of self-report.
//
// Mirrors /ielts/readiness: a Server Component resolves the user's IELTS
// entitlement (createServerSupabaseClient + hasIeltsAccess) and passes a boolean
// to the interactive client. Free users get a tasteful teaser with a
// /pricing#ielts CTA. Page files export only the default component.
// ────────────────────────────────────────────────────────────────────────────

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { hasIeltsAccess } from '@/lib/course-access'
import { TransitionModulesClient } from './TransitionModulesClient'

export default async function IeltsTransitionPage() {
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

  return <TransitionModulesClient hasAccess={hasAccess} />
}
