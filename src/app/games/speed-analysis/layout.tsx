import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speed Analysis | GCSE Literary Device Game',
  description:
    'Identify the literary device in each extract against the clock. A free higher-tier analysis game for GCSE and IGCSE English revision.',
  alternates: { canonical: '/games/speed-analysis' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
