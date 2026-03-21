import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revision | The English Hub',
  description: 'Flashcards, techniques, and revision tools for GCSE English exam preparation.',
}

export default function RevisionLayout({ children }: { children: React.ReactNode }) {
  return children
}
