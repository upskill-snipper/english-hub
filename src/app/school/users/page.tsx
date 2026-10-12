// ─── /school/users: removed 12 October 2026 ────────────────────────────────
//
// The page listed the school's staff and pupils with controls to add a user,
// remove users, change roles and remove a selection in bulk. None of them
// saved anything: each one changed the page's React state and nothing else,
// so a removed pupil reappeared on the next visit and an added teacher never
// existed. An administrator could reasonably believe they had removed a
// pupil's access when they had not.
//
// Staff are invited at /school/invite and listed in /school/settings; pupils
// are imported at /school/admin/bulk-upload and placed in classes at
// /school/classes. This route stays as a redirect so an old bookmark lands on
// the dashboard instead of a 404.

import { redirect } from 'next/navigation'

export default function RemovedUsersPage() {
  redirect('/school/dashboard')
}
