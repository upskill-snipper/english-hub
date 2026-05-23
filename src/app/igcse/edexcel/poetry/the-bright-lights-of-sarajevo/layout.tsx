import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bright Lights of Sarajevo (Harrison) — IGCSE Poetry',
  description:
    "Analysis of Harrison's 'The Bright Lights of Sarajevo' for the Edexcel IGCSE anthology: war, resilience and love, with key quotations and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
