import { redirect } from 'next/navigation'

// The "/dashboard/essay/new" route previously rendered a local form whose
// submit handler was a `setTimeout` stub (no real API call). The real,
// production-ready entry point for AI essay feedback is at
// `/dashboard/essay-feedback`, which:
//   - posts to `/api/essay-feedback`
//   - has the full board / paper / question-type selectors
//   - displays real AO-scored feedback
//
// We permanently redirect the old URL so any bookmarks, nav links, or inbound
// links land on the working flow instead of a non-functional stub.
export default function NewEssayRedirect() {
  redirect('/dashboard/essay-feedback')
}
