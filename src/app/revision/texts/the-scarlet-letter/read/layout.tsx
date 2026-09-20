import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Scarlet Letter Online, Free',
  description:
    'Read The Scarlet Letter by Nathaniel Hawthorne in full, free. The complete public-domain novel, chapter by chapter, with inline theme notes.',
  alternates: { canonical: '/revision/texts/the-scarlet-letter/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
