import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Word Class Sorter | KS3 Grammar Game',
  description:
    'Sort words into noun, verb, adjective or adverb, where context decides. A free word class game for KS3 English grammar and literacy revision.',
  alternates: { canonical: '/games/word-class-sorter' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
