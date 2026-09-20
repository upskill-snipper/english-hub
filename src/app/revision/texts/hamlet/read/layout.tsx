import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Hamlet Online, Free',
  description:
    'Read the full play of Hamlet by William Shakespeare online, free. Quotations, themes and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/hamlet/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
