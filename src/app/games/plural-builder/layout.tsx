import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plural Builder | EAL Spelling Game',
  description:
    'Choose the noun a sentence needs: regular and irregular plurals, uncountable nouns and nouns that stay singular. A free grammar game for EAL learners.',
  alternates: { canonical: '/games/plural-builder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
