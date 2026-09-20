import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read King Henry V Online, Free',
  description:
    'Read the full play of King Henry V by William Shakespeare online, free. Quotations, themes and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/henry-v/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
