import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Poison Tree - Edexcel Conflict Analysis',
  description:
    'A Poison Tree by William Blake - GCSE analysis for the Pearson Edexcel Conflict cluster (1ET0): anger, betrayal, structure and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/edexcel/conflict/a-poison-tree',
  },
}

export default function EdexcelConflictAPoisonTreeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
