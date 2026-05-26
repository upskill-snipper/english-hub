import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Climbing My Grandfather - AQA Love & Relationships',
  description:
    'Climbing My Grandfather by Andrew Waterhouse - GCSE analysis for AQA Love & Relationships: extended metaphor, structure, context and comparisons.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/love-and-relationships/climbing-my-grandfather',
  },
}

export default function LoveAndRelationshipsClimbingMyGrandfatherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
