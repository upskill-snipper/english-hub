import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curious Incident: Characters - Edexcel IGCSE Literature',
  description:
    'Character analysis for The Curious Incident of the Dog in the Night-Time for Edexcel IGCSE Literature: Christopher, Ed, Judy and Siobhan, with key quotes.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
