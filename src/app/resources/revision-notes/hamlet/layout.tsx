import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hamlet Revision Notes | GCSE & A-Level English Literature',
  description:
    "Revise Shakespeare's Hamlet for GCSE and A-Level: act-by-act plot, character profiles, themes, 20 key quotations with analysis and exam questions with plans.",
  alternates: { canonical: '/resources/revision-notes/hamlet' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
