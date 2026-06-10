import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lord of the Flies Key Quotes | GCSE English Revision',
  description:
    '20 key quotes from Lord of the Flies with chapter references and AO2 analysis, linked to savagery, power and loss of innocence for GCSE English revision.',
  alternates: { canonical: '/revision/texts/lord-of-the-flies/key-quotes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
