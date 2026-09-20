import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read My Last Duchess Online, Free',
  description:
    'Read the full poem of My Last Duchess by Robert Browning online, free. Language highlighted inline.',
  alternates: { canonical: '/revision/texts/my-last-duchess/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
