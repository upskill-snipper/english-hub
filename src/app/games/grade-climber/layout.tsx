import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grade Climber | GCSE English Quiz Game',
  description:
    'Answer GCSE-style English questions at increasing difficulty: three right to climb a grade, two wrong to drop. Free revision game, no signup.',
  alternates: { canonical: '/games/grade-climber' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
