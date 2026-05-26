import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Half-Caste (John Agard) - Edexcel IGCSE Poetry',
  description:
    "Analysis of John Agard's 'Half-Caste' for the Edexcel IGCSE Literature anthology: identity, prejudice and dialect, with key quotations, tone and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
