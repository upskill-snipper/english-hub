import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparison Techniques — Edexcel IGCSE Unseen Poetry',
  description:
    'Compare two unseen poems for Edexcel IGCSE Literature: point-by-point structure, linking phrases for similarity, difference and development, plus pitfalls.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
