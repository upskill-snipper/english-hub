import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Julius Caesar Revision Notes | GCSE & A-Level Shakespeare',
  description:
    "Revise Shakespeare's Julius Caesar for GCSE and A-Level: act-by-act plot, Brutus and Antony analysis, rhetoric, key quotations, Roman context and essay plans.",
  alternates: { canonical: '/resources/revision-notes/julius-caesar' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
