import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macbeth Context | GCSE English Revision',
  description:
    'AO3 context for Macbeth: James I, witchcraft, the Gunpowder Plot, divine right and the Great Chain of Being, with exam links for GCSE English essays.',
  alternates: { canonical: '/revision/texts/macbeth/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
