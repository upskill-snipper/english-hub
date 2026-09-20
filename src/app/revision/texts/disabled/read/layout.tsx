import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Disabled Online, Free',
  description: 'Read the full poem of Disabled by Wilfred Owen online, free.',
  alternates: { canonical: '/revision/texts/disabled/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
