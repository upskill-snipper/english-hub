import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Handmaid's Tale Notes | A-Level English Literature",
  description:
    "A-Level revision notes for Atwood's The Handmaid's Tale: plot with the Historical Notes coda, Offred's narration, themes, key quotations and dystopian context.",
  alternates: { canonical: '/resources/revision-notes/the-handmaids-tale' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
