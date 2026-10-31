import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phrasal Verbs Match | EAL English Game',
  description:
    'Match English phrasal verbs to their meanings and choose the one a sentence needs, from give up to look after. A free vocabulary game for EAL learners.',
  alternates: { canonical: '/games/phrasal-verbs-match' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
