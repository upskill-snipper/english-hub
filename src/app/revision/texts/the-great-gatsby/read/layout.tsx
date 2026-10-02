import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Great Gatsby Online, Free',
  description:
    'Read The Great Gatsby by F. Scott Fitzgerald in full, free. The complete public-domain novel, chapter by chapter.',
  alternates: { canonical: '/revision/texts/the-great-gatsby/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
