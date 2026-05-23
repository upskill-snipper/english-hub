import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Walking Away — AQA Love & Relationships Analysis',
  description:
    'Walking Away by C. Day-Lewis — GCSE analysis for AQA Love & Relationships: parental love, letting go, structure, context and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/walking-away',
  },
}

export default function LoveAndRelationshipsWalkingAwayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
