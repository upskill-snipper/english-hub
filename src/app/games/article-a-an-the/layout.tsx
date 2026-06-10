import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A, An or The? Articles Game | EAL English',
  description:
    'Practise English articles: choose a, an, the or nothing in real sentences. A free grammar game for EAL learners and anyone new to English.',
  alternates: { canonical: '/games/article-a-an-the' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
