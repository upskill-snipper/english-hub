import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A View from the Bridge Context | GCSE English',
  description:
    'AO3 context for A View from the Bridge: 1950s Red Hook, Italian immigration, McCarthyism, Greek tragedy and codes of honour, for GCSE English essays.',
  alternates: { canonical: '/revision/texts/a-view-from-the-bridge/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
