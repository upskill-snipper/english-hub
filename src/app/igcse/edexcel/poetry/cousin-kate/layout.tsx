import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cousin Kate (Christina Rossetti) — Edexcel IGCSE Poetry',
  description:
    "Analysis of Rossetti's 'Cousin Kate' for the Edexcel IGCSE Literature anthology: betrayal, class and female shame, with key quotations, form and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
