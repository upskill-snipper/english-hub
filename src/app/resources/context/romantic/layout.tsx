import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Romantic Period Context',
  description:
    'Understand Romantic era historical and literary context for GCSE English. Key ideas, writers, and social changes that shaped Romantic poetry and prose.',
  alternates: { canonical: 'https://theenglishhub.app/resources/context/romantic' },
  openGraph: {
    title: 'Romantic Period Context — The English Hub',
    description:
      'Understand Romantic era historical and literary context for GCSE English. Key ideas, writers, and social changes that shaped Romantic poetry and prose.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
