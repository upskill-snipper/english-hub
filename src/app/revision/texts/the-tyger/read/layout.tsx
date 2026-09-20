import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read The Tyger Online, Free',
  description:
    'Read the full poem of The Tyger by William Blake online, free. Language highlighted inline.',
  alternates: { canonical: '/revision/texts/the-tyger/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
