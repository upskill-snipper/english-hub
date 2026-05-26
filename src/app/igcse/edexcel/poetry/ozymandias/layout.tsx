import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ozymandias (Shelley) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Percy Bysshe Shelley's 'Ozymandias' for the Edexcel IGCSE Literature anthology: power, pride and decay, with key quotations, sonnet form and irony.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
