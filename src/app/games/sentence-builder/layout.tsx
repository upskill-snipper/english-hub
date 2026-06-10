import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sentence Builder | KS3 Grammar Game',
  description:
    'Build simple, compound and complex sentences from word tiles. A free sentence-structure game for KS3 English and early GCSE writing practice.',
  alternates: { canonical: '/games/sentence-builder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
