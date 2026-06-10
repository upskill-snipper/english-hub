import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/prose/things-fall-apart/characters' },
  title: 'Things Fall Apart: Characters - Edexcel IGCSE Literature',
  description:
    "Character analysis for Achebe's Things Fall Apart for Edexcel IGCSE Literature: Okonkwo, Nwoye, Ezinma, Obierika and the missionaries, with key quotations.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
