// ─── /school/calendar: removed 12 October 2026 ─────────────────────────────
//
// The revision calendar opened with three invented assignments ("Mock Paper
// 1 - Creative Writing" for "Year 11 Set 1" and two more, all dated May
// 2026) written into the page itself, and kept every lesson a teacher added
// in page state only, so it was gone on the next visit. A teacher would have
// seen deadlines nobody had set, for classes their school may not have.
//
// This route stays as a redirect so an old bookmark lands on the dashboard
// instead of a 404.

import { redirect } from 'next/navigation'

export default function RemovedCalendarPage() {
  redirect('/school/dashboard')
}
