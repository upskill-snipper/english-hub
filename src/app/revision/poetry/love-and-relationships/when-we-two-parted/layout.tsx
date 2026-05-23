import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When We Two Parted — AQA Love & Relationships',
  description:
    'When We Two Parted by Lord Byron — GCSE analysis for AQA Love & Relationships: secret love, grief, cyclical structure and comparison poems.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/love-and-relationships/when-we-two-parted',
  },
}

export default function LoveAndRelationshipsWhenWeTwoPartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
