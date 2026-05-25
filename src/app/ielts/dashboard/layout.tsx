import type { Metadata } from 'next'

// ─── IELTS learner dashboard — layout ──────────────────────────────────────
// The dashboard page itself is a client component (it reads the
// localStorage-backed IELTS store after mount), so its title/robots live here
// in a thin server layout — the same split used by /ielts/progress and the
// GCSE /dashboard. This is the signed-in learner home, so it is personal and
// must never be indexed.
// ────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'My IELTS Dashboard — The English Hub',
  description:
    'Your IELTS learner home: target band, predicted band, exam countdown, study streak, what to study next, and your recent practice — all in one place.',
  robots: { index: false },
}

export default function IeltsDashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
