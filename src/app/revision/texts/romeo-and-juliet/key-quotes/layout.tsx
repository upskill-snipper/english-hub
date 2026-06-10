import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Romeo and Juliet Key Quotes | GCSE English Revision',
  description:
    '29 key quotes from Romeo and Juliet with act and scene references, AO2 analysis and links to love, conflict and fate for GCSE English exam revision.',
  alternates: { canonical: '/revision/texts/romeo-and-juliet/key-quotes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
