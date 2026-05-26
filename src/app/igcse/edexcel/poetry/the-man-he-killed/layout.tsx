import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Man He Killed (Thomas Hardy) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Hardy's 'The Man He Killed' for the Edexcel IGCSE Literature anthology: the futility of war, with key quotations, colloquial voice and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
