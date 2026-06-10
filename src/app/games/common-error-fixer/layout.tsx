import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fix the Common Mistake | EAL English Game',
  description:
    'Spot and correct the mistakes English learners make most, from word order to missing articles. A free editing game for EAL students.',
  alternates: { canonical: '/games/common-error-fixer' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
