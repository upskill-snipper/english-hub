import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Silas Marner Online, Free',
  description:
    'Read Silas Marner by George Eliot in full, free. The complete public-domain novel, chapter by chapter, with twenty inline quotation notes.',
  alternates: { canonical: '/revision/texts/silas-marner/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
