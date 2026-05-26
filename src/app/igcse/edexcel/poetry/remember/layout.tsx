import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remember (Christina Rossetti) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Rossetti's 'Remember' for the Edexcel IGCSE Literature anthology: death, memory and selfless love, with key quotations, sonnet form and the volta.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
