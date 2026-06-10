import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Verb To Be Game | EAL Grammar',
  description:
    'Practise am, is, are, was and were by filling the gap in real sentences. A free grammar game for EAL learners building core English foundations.',
  alternates: { canonical: '/games/to-be-conjugation' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
