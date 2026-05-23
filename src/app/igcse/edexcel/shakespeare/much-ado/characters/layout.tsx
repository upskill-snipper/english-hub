import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Much Ado: Characters — Edexcel IGCSE Literature',
  description:
    'Character analysis for Much Ado About Nothing for Edexcel IGCSE Literature: Beatrice, Benedick, Claudio, Hero, Don Pedro, Don John and the Watch, with quotes.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
