import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plural Builder | EAL Spelling Game',
  description:
    'Build English plurals: regular, irregular and the odd ones out. A free spelling and grammar game for EAL and beginner English learners, no signup.',
  alternates: { canonical: '/games/plural-builder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
