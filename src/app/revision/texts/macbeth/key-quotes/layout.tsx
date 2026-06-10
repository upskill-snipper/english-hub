import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macbeth Key Quotes | GCSE English Revision',
  description:
    '34 key quotes from Macbeth organised act by act, each with AO2 analysis and theme links from ambition to guilt, for GCSE English exam revision.',
  alternates: { canonical: '/revision/texts/macbeth/key-quotes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
