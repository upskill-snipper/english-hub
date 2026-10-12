// ─── /school/notifications: removed 12 October 2026 ────────────────────────
//
// The page started with an empty list and never fetched one, so it could
// only ever say there was nothing to see, however much was waiting. Its
// filters filtered nothing. The work that needs a teacher's attention is the
// marking queue, which the dashboard counts.
//
// This route stays as a redirect so an old bookmark lands on the dashboard
// instead of a 404.

import { redirect } from 'next/navigation'

export default function RemovedNotificationsPage() {
  redirect('/school/dashboard')
}
