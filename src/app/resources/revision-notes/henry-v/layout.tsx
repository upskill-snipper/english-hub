import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Henry V Revision Notes | A-Level Shakespeare Study Guide',
  description:
    "A-Level notes for Shakespeare's Henry V: act-by-act plot, kingship and war themes, character profiles, Folio quotations with analysis and exam essay plans.",
  alternates: { canonical: '/resources/revision-notes/henry-v' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
