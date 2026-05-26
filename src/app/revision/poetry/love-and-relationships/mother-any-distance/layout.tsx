import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mother, any distance - AQA Love & Relationships',
  description:
    'Mother, any distance by Simon Armitage - GCSE analysis for AQA Love & Relationships: separation, growing up, structure, context and comparisons.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/love-and-relationships/mother-any-distance',
  },
}

export default function LoveAndRelationshipsMotherAnyDistanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
