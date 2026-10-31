import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Word Class Sorter | KS3 Grammar Game',
  description:
    'Sort words by class where the sentence decides, then name phrases and clauses and what they do. A free grammar game for KS3 English and literacy revision.',
  alternates: { canonical: '/games/word-class-sorter' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
