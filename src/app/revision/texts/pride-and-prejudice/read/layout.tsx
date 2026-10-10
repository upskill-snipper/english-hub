import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Pride and Prejudice Online, Free',
  description:
    'Read the whole of Pride and Prejudice by Jane Austen online, free: all 61 chapters, a chapter at a time.',
  alternates: { canonical: '/revision/texts/pride-and-prejudice/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
