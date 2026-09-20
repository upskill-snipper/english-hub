import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Julius Caesar Online, Free',
  description:
    'Read the full play of Julius Caesar by William Shakespeare online, free. Quotations, themes and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/julius-caesar/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
