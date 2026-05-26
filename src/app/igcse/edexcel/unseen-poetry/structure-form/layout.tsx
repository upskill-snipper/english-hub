import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Form and Structure - Edexcel IGCSE Unseen Poetry',
  description:
    'Analyse form and structure in unseen poetry for Edexcel IGCSE Literature: sonnets, ballads, dramatic monologue, free verse, stanza shape, rhyme and enjambment.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
