import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Synonym Shuffle | KS3 Vocabulary Game',
  description:
    'Upgrade tired words to precise, ambitious vocabulary. A free synonym game for KS3 English students improving their writing word choices.',
  alternates: { canonical: '/games/synonym-shuffle' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
