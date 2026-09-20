import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Strange Case of Dr Jekyll and Mr Hyde Online, Free',
  description:
    'Read the full novella of The Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson online, free. quotations and themes highlighted inline.',
  alternates: { canonical: '/revision/texts/jekyll-and-hyde/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
