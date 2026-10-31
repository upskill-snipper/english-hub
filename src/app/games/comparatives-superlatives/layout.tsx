import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparatives and Superlatives Game | EAL',
  description:
    'Choose the comparative or superlative a sentence needs: bigger, the biggest, as big as and the irregular ones. A free grammar game for EAL learners.',
  alternates: { canonical: '/games/comparatives-superlatives' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
