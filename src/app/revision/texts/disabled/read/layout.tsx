import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Disabled Online, Free',
  description:
    'Read the poem Disabled by Wilfred Owen in full, free. The complete public-domain text in a clean, distraction-free reader with three reading modes.',
  alternates: { canonical: '/revision/texts/disabled/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
