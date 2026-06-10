import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collocations: Make, Do, Have, Take | EAL',
  description:
    'Pick the verb that naturally goes with each noun: make, do, have or take. A free collocations game for EAL learners building natural English.',
  alternates: { canonical: '/games/collocations-challenge' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
