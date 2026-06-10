import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paragraph Jumble | KS3 Writing Game',
  description:
    'Reorder jumbled sentences into a coherent paragraph. A free structure and cohesion game for KS3 English and GCSE writing practice.',
  alternates: { canonical: '/games/paragraph-jumble' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
