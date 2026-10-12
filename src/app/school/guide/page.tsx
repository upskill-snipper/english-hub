// ─── /school/guide: removed 12 October 2026 ────────────────────────────────
//
// The "setup guide" described a product the portal is not: renewal and
// upgrades "from the Billing section in Settings" (schools are invoiced and
// there is no billing in the portal), a credentials spreadsheet from an
// importer that queries a table that does not exist (import_jobs), and
// teacher CSV templates for a path that teachers do not take (they are
// invited by email). A school following it would have hit dead ends at every
// step.
//
// The dashboard's own checklist now carries the real setup steps. This route
// stays as a redirect so an old bookmark lands there instead of a 404.

import { redirect } from 'next/navigation'

export default function RemovedGuidePage() {
  redirect('/school/dashboard')
}
