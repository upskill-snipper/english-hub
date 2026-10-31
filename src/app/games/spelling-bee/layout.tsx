import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spelling Bee | GCSE & KS3 Spelling Game',
  description:
    'Hear each word, read its definition or the sentence it fits, then type the spelling. A free audio spelling game for GCSE and KS3 English.',
  alternates: { canonical: '/games/spelling-bee' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
