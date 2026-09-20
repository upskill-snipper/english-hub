import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Hamlet Online, Free',
  description:
    'Read Hamlet by William Shakespeare in full, free. The complete public-domain play, scene by scene, in a clean reader with three reading modes.',
  alternates: { canonical: '/revision/texts/hamlet/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
