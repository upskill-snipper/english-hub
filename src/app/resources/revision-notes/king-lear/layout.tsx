import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'King Lear Revision Notes | A-Level English Literature',
  description:
    "A-Level revision notes for Shakespeare's King Lear: plot with the Gloucester subplot, character profiles, themes, key quotations and AQA and OCR essay plans.",
  alternates: { canonical: '/resources/revision-notes/king-lear' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
