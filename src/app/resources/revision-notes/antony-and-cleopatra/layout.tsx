import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Antony and Cleopatra Revision Notes | A-Level Shakespeare',
  description:
    "A-Level notes on Shakespeare's Antony and Cleopatra: the Rome and Egypt opposition, character profiles, themes, First Folio quotations and exam essay plans.",
  alternates: { canonical: '/resources/revision-notes/antony-and-cleopatra' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
