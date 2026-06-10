import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spelling Bee | GCSE & KS3 Spelling Game',
  description:
    'Listen to the word and its definition, then type the correct spelling. A free audio spelling game for GCSE and KS3 English revision.',
  alternates: { canonical: '/games/spelling-bee' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
