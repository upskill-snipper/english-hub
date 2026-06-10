import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macbeth Essay Plans | GCSE English Revision',
  description:
    'Eight Macbeth essay plans covering the tragic hero, guilt, masculinity and more, with thesis statements, key quotes and structure tips for GCSE exams.',
  alternates: { canonical: '/revision/texts/macbeth/essay-plans' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
