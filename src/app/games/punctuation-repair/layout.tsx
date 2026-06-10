import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Punctuation Repair | KS3 English Game',
  description:
    'Fix missing capital letters, full stops and commas in broken sentences. A free punctuation game for KS3 English and literacy practice.',
  alternates: { canonical: '/games/punctuation-repair' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
