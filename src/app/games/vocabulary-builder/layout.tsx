import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vocabulary Builder | GCSE English Game',
  description:
    'Choose the correct definition for each word, with wrong answers recycled for spaced repetition. A free GCSE and IGCSE vocabulary game.',
  alternates: { canonical: '/games/vocabulary-builder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
