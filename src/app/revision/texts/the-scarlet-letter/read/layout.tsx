import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Scarlet Letter Online, Free',
  description:
    'Read the full novel of The Scarlet Letter by Nathaniel Hawthorne online, free. Themes highlighted inline.',
  alternates: { canonical: '/revision/texts/the-scarlet-letter/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
