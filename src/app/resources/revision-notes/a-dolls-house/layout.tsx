import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "A Doll's House Revision Notes | A-Level English Literature",
  description:
    "A-Level revision notes for Ibsen's A Doll's House: act-by-act plot, Nora and Torvald character analysis, themes, key quotations and AQA and OCR exam questions.",
  alternates: { canonical: '/resources/revision-notes/a-dolls-house' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
