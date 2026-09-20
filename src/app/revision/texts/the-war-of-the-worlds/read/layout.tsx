import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The War of the Worlds Online, Free',
  description:
    'Read The War of the Worlds by H. G. Wells in full, free. The complete public-domain novel, chapter by chapter, in a clean distraction-free reader.',
  alternates: { canonical: '/revision/texts/the-war-of-the-worlds/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
