import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Animal Farm Context | GCSE English',
  description:
    "AO3 context for Animal Farm: the Russian Revolution, Stalin and Trotsky, Orwell's democratic socialism and allegory as satire, for GCSE English essays.",
  alternates: { canonical: '/revision/texts/animal-farm/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
