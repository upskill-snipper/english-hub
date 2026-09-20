import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Romeo and Juliet Online, Free',
  description:
    'Read the full play of Romeo and Juliet by William Shakespeare online, free. Quotations, themes, language and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/romeo-and-juliet/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
