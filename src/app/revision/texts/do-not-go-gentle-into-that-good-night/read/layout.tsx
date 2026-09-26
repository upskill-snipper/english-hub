import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Do not go gentle into that good night',
  description:
    'Read Do not go gentle into that good night by Dylan Thomas in full, free, as the Edexcel International GCSE anthology prints it. Out of UK copyright since 2024.',
  alternates: { canonical: '/revision/texts/do-not-go-gentle-into-that-good-night/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
