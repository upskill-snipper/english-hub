import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnet 116 (Shakespeare) — Edexcel IGCSE Poetry',
  description:
    "Analysis of Shakespeare's 'Sonnet 116' for the Edexcel IGCSE Literature anthology: constant love and time, with key quotations, sonnet form, metaphor and rhyme.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
