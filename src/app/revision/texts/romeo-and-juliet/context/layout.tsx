import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Romeo and Juliet Context | GCSE English',
  description:
    'AO3 context for Romeo and Juliet: Elizabethan England, arranged marriage, Petrarchan love and the Globe audience, explained for GCSE English essays.',
  alternates: { canonical: '/revision/texts/romeo-and-juliet/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
