import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Animal Farm Online, Free',
  description:
    'Read Animal Farm by George Orwell in full, free. The complete novella, chapter by chapter, out of UK copyright since 2021, with notes on the lines that matter.',
  alternates: { canonical: '/revision/texts/animal-farm/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
