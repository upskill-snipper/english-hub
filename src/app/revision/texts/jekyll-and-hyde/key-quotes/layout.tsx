import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jekyll and Hyde Key Quotes | GCSE English Revision',
  description:
    "25 key quotes from Jekyll and Hyde with chapter references and AO2 analysis of Stevenson's language, linked to duality and secrecy for GCSE revision.",
  alternates: { canonical: '/revision/texts/jekyll-and-hyde/key-quotes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
