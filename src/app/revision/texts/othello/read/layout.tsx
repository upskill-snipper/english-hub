import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Othello Online, Free',
  description:
    'Read the full play of Othello by William Shakespeare online, free. Quotations, themes and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/othello/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
