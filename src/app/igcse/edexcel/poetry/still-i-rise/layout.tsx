import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Still I Rise (Maya Angelou) — Edexcel IGCSE Poetry',
  description:
    "Analysis of Angelou's 'Still I Rise' for the Edexcel IGCSE Literature anthology: resilience, pride and oppression, with key quotations, repetition and tone.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
