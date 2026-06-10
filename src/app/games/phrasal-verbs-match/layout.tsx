import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phrasal Verbs Match | EAL English Game',
  description:
    'Match common English phrasal verbs to their meanings, from give up to look after. A free vocabulary game for EAL and intermediate learners.',
  alternates: { canonical: '/games/phrasal-verbs-match' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
