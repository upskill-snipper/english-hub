import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conflict - Edexcel GCSE poetry cluster',
  description:
    'Edexcel GCSE Conflict poetry - all 15 poems analysed. War, struggle, turmoil. Comparison guides for the Pearson Edexcel 1ET0 Paper 2 Section A.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/edexcel/conflict' },
}

export default function EdexcelConflictLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
