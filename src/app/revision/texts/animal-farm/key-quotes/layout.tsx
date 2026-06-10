import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Animal Farm Key Quotes | GCSE English Revision',
  description:
    "20 key quotes from Animal Farm with chapter references and AO2 analysis of Orwell's language, covering power, propaganda and corruption for GCSE revision.",
  alternates: { canonical: '/revision/texts/animal-farm/key-quotes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
