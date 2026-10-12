// ─── /school/permissions: removed 12 October 2026 ──────────────────────────
//
// The page was a fixed table of what each role could do, written once and
// never read from the code. It was wrong: it had no head of department at
// all, and it said teachers could not see analytics or the school's pupils
// when the APIs let them see their own classes' analytics and the pupil
// list. A school deciding who should hold which role would have been misled.
//
// What each role can do is decided by the routes themselves (see
// src/app/api/school/_lib/staff-scope.ts and the sidebar's NAV_ITEMS in
// src/components/school/SchoolSidebarNav.tsx). This route stays as a
// redirect so an old bookmark lands on the dashboard instead of a 404.

import { redirect } from 'next/navigation'

export default function RemovedPermissionsPage() {
  redirect('/school/dashboard')
}
