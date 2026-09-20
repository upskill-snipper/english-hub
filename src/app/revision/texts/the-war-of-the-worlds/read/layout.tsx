import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The War of the Worlds Online, Free',
  description: 'Read the full novel of The War of the Worlds by H. G. Wells online, free.',
  alternates: { canonical: '/revision/texts/the-war-of-the-worlds/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
