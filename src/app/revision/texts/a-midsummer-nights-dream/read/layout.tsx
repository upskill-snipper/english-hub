import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Act I, Scene I Online, Free',
  description: 'Read the full play of Act I, Scene I by William Shakespeare online, free.',
  alternates: { canonical: '/revision/texts/a-midsummer-nights-dream/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
