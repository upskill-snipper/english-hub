import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Piano (D.H. Lawrence) — Edexcel IGCSE Poetry',
  description:
    "Analysis of D.H. Lawrence's 'Piano' for the Edexcel IGCSE Literature anthology: memory, nostalgia and childhood, with key quotations and sound imagery.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
