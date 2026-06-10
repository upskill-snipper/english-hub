import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'An Inspector Calls Key Quotes | GCSE English Revision',
  description:
    '30 key quotes from An Inspector Calls organised by act, with AO2 analysis and links to responsibility, class and gender for GCSE English exam revision.',
  alternates: { canonical: '/revision/texts/an-inspector-calls/key-quotes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
