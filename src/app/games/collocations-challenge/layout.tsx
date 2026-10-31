import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collocations Challenge | EAL Vocabulary Game',
  description:
    'Choose the word that naturally goes with its partner, or spot the pair that is not natural English. A free collocations game for EAL learners.',
  alternates: { canonical: '/games/collocations-challenge' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
