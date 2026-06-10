import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Figurative Language Finder | KS3 Game',
  description:
    'Name the device: simile, metaphor or personification in real examples. A free figurative language game for KS3 and GCSE English revision.',
  alternates: { canonical: '/games/figurative-language-finder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
