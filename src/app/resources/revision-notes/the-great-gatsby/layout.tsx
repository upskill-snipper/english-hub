import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Great Gatsby Revision Notes | A-Level English Literature',
  description:
    "A-Level notes on Fitzgerald's The Great Gatsby: chapter-by-chapter plot, character profiles, themes, 18 key quotations, Jazz Age context and exam essay plans.",
  alternates: { canonical: '/resources/revision-notes/the-great-gatsby' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
