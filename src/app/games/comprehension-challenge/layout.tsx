import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comprehension Challenge | GCSE English',
  description:
    'Read passages and answer GCSE-style questions on inference, language, structure and evaluation. A free English Language revision game.',
  alternates: { canonical: '/games/comprehension-challenge' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
