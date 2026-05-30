// ─── UK Candidate Readiness Report - entitlement gate (Server Component) ─────
// The FULL report is the headline £39 IELTS-plan feature, so the page is a
// Server Component that resolves the user's IELTS entitlement server-side
// (createServerSupabaseClient + hasIeltsAccess, exactly like the gated IELTS
// API routes) and passes a boolean down to the interactive client report.
//
// The client child is responsible for ALL the interactivity + the localStorage-
// first data (diagnostic profile, saved self-report). When `hasAccess` is false
// the client renders a tasteful blurred/teaser state with a CTA to /pricing#ielts
// rather than the full report. Page files export only the default component.
// ────────────────────────────────────────────────────────────────────────────

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { hasIeltsAccess } from '@/lib/course-access'
import { ReadinessReportClient } from './ReadinessReportClient'

export default async function IeltsReadinessPage() {
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
    // Signed out / auth unavailable → treat as no access; the client shows the
    // teaser + CTA. The report is never rendered for a non-entitled user.
    hasAccess = false
  }

  return <ReadinessReportClient hasAccess={hasAccess} />
}
