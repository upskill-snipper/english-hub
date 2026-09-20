import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read My Last Duchess Online, Free',
  description:
    'Read My Last Duchess by Robert Browning in full, free. The complete public-domain poem with inline language, quotation and theme notes.',
  alternates: { canonical: '/revision/texts/my-last-duchess/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
