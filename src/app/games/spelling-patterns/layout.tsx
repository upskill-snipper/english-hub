import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spelling Patterns | KS3 Spelling Game',
  description:
    'Learn the spelling rules: i before e, doubling letters, -tion endings and more. A free spelling game for KS3 English and literacy revision.',
  alternates: { canonical: '/games/spelling-patterns' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
