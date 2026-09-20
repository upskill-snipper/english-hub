import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Tyger Online, Free',
  description:
    'Read The Tyger by William Blake in full, free. The complete public-domain poem in a clean reader, with four inline notes on its language and imagery.',
  alternates: { canonical: '/revision/texts/the-tyger/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
