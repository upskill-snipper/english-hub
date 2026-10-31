import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vocabulary Builder | GCSE English Game',
  description:
    'Choose what each word means, alone or in a real line from a classic, or the word that fits a gap. A free GCSE and IGCSE vocabulary game.',
  alternates: { canonical: '/games/vocabulary-builder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
