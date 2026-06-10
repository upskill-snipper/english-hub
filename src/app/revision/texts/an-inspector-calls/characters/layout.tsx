import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'An Inspector Calls Characters | GCSE English',
  description:
    'Revise the characters of An Inspector Calls, from Inspector Goole and Sheila to Mr Birling and Eva Smith, with key quotes and analysis for GCSE exams.',
  alternates: { canonical: '/revision/texts/an-inspector-calls/characters' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
