import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Winter Swans — AQA Love & Relationships Analysis',
  description:
    'Winter Swans by Owen Sheers — GCSE analysis for AQA Love & Relationships: reconciliation, nature imagery, structure and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/winter-swans',
  },
}

export default function LoveAndRelationshipsWinterSwansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
