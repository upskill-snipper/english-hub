import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interventions Demo | English Support Tracking',
  description:
    'See how the platform flags students who need support and tracks intervention impact. An interactive school demo with sample English data.',
  alternates: { canonical: '/demo/school/interventions' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
