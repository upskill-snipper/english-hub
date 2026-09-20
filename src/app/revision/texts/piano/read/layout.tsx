import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Piano Online, Free',
  description:
    'Read the full poem of Piano by D. H. Lawrence online, free. Language highlighted inline.',
  alternates: { canonical: '/revision/texts/piano/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
