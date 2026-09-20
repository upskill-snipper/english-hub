import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read La Belle Dame sans Merci Online, Free',
  description:
    'Read the full poem of La Belle Dame sans Merci by John Keats online, free. Language highlighted inline.',
  alternates: { canonical: '/revision/texts/la-belle-dame-sans-merci/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
