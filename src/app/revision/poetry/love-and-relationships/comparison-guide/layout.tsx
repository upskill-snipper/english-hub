import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparison Guide — AQA Love & Relationships Poetry',
  description:
    'How to compare AQA Love & Relationships poems: shared themes, contrast frames, quotation pairings and Grade 9 comparative essay technique for Paper 2.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/comparison-guide',
  },
}

export default function LoveAndRelationshipsComparisonGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
