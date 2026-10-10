import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Great Expectations Online, Free',
  description:
    'Read the whole of Great Expectations by Charles Dickens online, free: all 59 chapters, a chapter at a time.',
  alternates: { canonical: '/revision/texts/great-expectations/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
