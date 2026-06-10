import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apostrophe Ace | KS3 Punctuation Game',
  description:
    'Master apostrophes for possession and omission, and dodge the plural trap. A free punctuation game for KS3 English and literacy revision.',
  alternates: { canonical: '/games/apostrophe-ace' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
