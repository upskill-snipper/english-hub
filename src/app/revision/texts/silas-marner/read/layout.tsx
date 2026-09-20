import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Silas Marner Online, Free',
  description:
    'Read the full novel of Silas Marner by George Eliot online, free. Quotations highlighted inline.',
  alternates: { canonical: '/revision/texts/silas-marner/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
