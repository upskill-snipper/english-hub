import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Romeo and Juliet Characters | GCSE English',
  description:
    'Revise 12 Romeo and Juliet characters including Romeo, Juliet, Mercutio, Tybalt and the Nurse, with key quotes and analysis for GCSE English exams.',
  alternates: { canonical: '/revision/texts/romeo-and-juliet/characters' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
