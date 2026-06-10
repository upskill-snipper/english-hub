import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prepositions of Place Game | EAL English',
  description:
    'Practise in, on, under, behind and between with quick-fire questions. A free prepositions game for EAL and beginner English learners.',
  alternates: { canonical: '/games/prepositions-of-place' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
