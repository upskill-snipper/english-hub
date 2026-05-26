import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eden Rock - AQA Love & Relationships Analysis',
  description:
    'Eden Rock by Charles Causley - GCSE analysis for AQA Love & Relationships: memory, the afterlife, structure, context and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/eden-rock',
  },
}

export default function LoveAndRelationshipsEdenRockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
