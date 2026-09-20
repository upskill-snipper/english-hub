import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read La Belle Dame sans Merci Online, Free',
  description:
    'Read La Belle Dame sans Merci by John Keats in full, free. The complete public-domain poem with eight inline language notes and a context note.',
  alternates: { canonical: '/revision/texts/la-belle-dame-sans-merci/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
