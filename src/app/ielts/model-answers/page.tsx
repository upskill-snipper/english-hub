// ─── IELTS Model Answers - entitlement gate (Server Component) ──────────────
// Resolves the user's IELTS entitlement server-side (same pattern as the
// readiness report and the visa-finance checklist) and passes a boolean to the
// interactive client. Non-entitled users see one free sample plus blurred
// teasers; entitled users see the full library. Page files export only the
// default component.
// ────────────────────────────────────────────────────────────────────────────

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { hasIeltsAccess } from '@/lib/course-access'
import { ModelAnswersClient } from './ModelAnswersClient'

export default async function IeltsModelAnswersPage() {
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
    // Signed out / auth unavailable → no access; the client shows the free
    // sample + blurred teasers with a CTA to /pricing#ielts.
    hasAccess = false
  }

  return <ModelAnswersClient hasAccess={hasAccess} />
}
