import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Things Fall Apart: Key Quotes — Edexcel IGCSE Literature',
  description:
    "Key quotations from Achebe's Things Fall Apart for Edexcel IGCSE Literature, with analysis of masculinity, colonialism, tradition and change for the exam essay.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
