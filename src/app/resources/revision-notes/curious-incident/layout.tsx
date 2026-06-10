import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Curious Incident Revision Notes | GCSE & IGCSE English',
  description:
    "GCSE and IGCSE notes on Mark Haddon's The Curious Incident of the Dog in the Night-Time: plot, Christopher's narration, themes, key quotes and essay planning.",
  alternates: { canonical: '/resources/revision-notes/curious-incident' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
