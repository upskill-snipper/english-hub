import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Punctuation Repair | KS3 English Game',
  description:
    'Choose the correctly punctuated sentence: commas, colons, semicolons, brackets and speech marks, many in real lines. A free punctuation game for KS3 English.',
  alternates: { canonical: '/games/punctuation-repair' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
