import type { Metadata } from 'next'

// 16 October 2026: this described a different tool - "Instant GCSE Feedback",
// paste an answer and get "instant AI feedback ... and a predicted grade band".
// The page is five pre-authored critical-perspective cards for A level and
// International A level Literature (AO5); nothing on it is live AI or a grade.
export const metadata: Metadata = {
  title: 'A Level Critical Perspectives Practice',
  description:
    'Practise answering named critical positions for A level and International A level English Literature: five critical lenses and the questions each critic asks.',
  alternates: { canonical: 'https://theenglishhub.app/toolkit/critic' },
}

export default function CriticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
