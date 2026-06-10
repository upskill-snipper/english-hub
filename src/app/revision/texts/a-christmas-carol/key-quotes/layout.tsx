import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Christmas Carol Key Quotes | GCSE English Revision',
  description:
    '28 key quotes from A Christmas Carol organised by stave, each with AO2 analysis and theme links from redemption to poverty, for GCSE English revision.',
  alternates: { canonical: '/revision/texts/a-christmas-carol/key-quotes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
