import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Tyger (William Blake) — Edexcel IGCSE Poetry',
  description:
    "Analysis of William Blake's 'The Tyger' for the Edexcel IGCSE Literature anthology: creation, awe and the divine, with key quotations, symbolism and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
