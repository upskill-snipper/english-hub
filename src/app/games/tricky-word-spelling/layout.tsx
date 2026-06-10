import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tricky Word Sprint | EAL Spelling Game',
  description:
    'Beat the clock spelling the everyday English words people get wrong most. A free timed spelling game for EAL and beginner English learners.',
  alternates: { canonical: '/games/tricky-word-spelling' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
