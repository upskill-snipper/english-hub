import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twelfth Night Revision Notes | GCSE & A-Level Shakespeare',
  description:
    "Revise Shakespeare's Twelfth Night for GCSE and A-Level: act-by-act plot, Viola and Malvolio analysis, themes, Folio quotations, festive context and essays.",
  alternates: { canonical: '/resources/revision-notes/twelfth-night' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
