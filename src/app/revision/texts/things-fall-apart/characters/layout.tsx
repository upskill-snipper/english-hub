import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Things Fall Apart Characters | IGCSE English',
  description:
    'Revise 10 Things Fall Apart characters including Okonkwo, Nwoye, Ezinma and Obierika, with key quotes and analysis for Edexcel and Cambridge IGCSE.',
  alternates: { canonical: '/revision/texts/things-fall-apart/characters' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
