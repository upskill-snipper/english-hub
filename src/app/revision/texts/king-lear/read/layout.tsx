import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read King Lear Online, Free',
  description:
    'Read the full play of King Lear by William Shakespeare online, free. Quotations, themes and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/king-lear/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
