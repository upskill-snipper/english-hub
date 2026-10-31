import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Figurative Language Finder | KS3 Game',
  description:
    'Name the device in real lines from classic texts, then say what a word, image or pun suggests. A free figurative language game for KS3 and GCSE English.',
  alternates: { canonical: '/games/figurative-language-finder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
