import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Follower — AQA Love & Relationships Analysis',
  description:
    'Follower by Seamus Heaney — GCSE analysis for AQA Love & Relationships: father-son bond, role reversal, structure, context and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/follower',
  },
}

export default function LoveAndRelationshipsFollowerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
