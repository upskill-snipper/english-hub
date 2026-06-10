import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparatives and Superlatives Game | EAL',
  description:
    'Form comparatives and superlatives: big, bigger, biggest and the irregular ones. A free grammar game for EAL and beginner English learners.',
  alternates: { canonical: '/games/comparatives-superlatives' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
