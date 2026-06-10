import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Streetcar Named Desire Notes | A-Level English Literature',
  description:
    "Revise Tennessee Williams's A Streetcar Named Desire for A-Level: scene-by-scene plot, Blanche and Stanley analysis, themes, key quotes and post-war context.",
  alternates: { canonical: '/resources/revision-notes/a-streetcar-named-desire' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
