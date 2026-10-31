import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paragraph Jumble | KS3 Writing Game',
  description:
    'Put jumbled sentences in order to make a paragraph, and choose the connective each gap needs. A free structure and cohesion game for KS3 and GCSE English.',
  alternates: { canonical: '/games/paragraph-jumble' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
