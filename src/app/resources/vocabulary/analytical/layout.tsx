import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytical Vocabulary',
  description:
    'Master analytical vocabulary for GCSE English Literature and Language. Key terms for discussing techniques, effects, and writers intentions.',
  alternates: { canonical: 'https://theenglishhub.app/resources/vocabulary/analytical' },
  openGraph: {
    title: 'Analytical Vocabulary — The English Hub',
    description:
      'Master analytical vocabulary for GCSE English Literature and Language. Key terms for discussing techniques, effects, and writers intentions.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
