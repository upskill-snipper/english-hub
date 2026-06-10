import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/drama/curious-incident/characters' },
  title: 'Curious Incident: Characters - Edexcel IGCSE Literature',
  description:
    'Character analysis for The Curious Incident of the Dog in the Night-Time for Edexcel IGCSE Literature: Christopher, Ed, Judy and Siobhan, with key quotes.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
