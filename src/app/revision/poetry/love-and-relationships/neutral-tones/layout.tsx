import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neutral Tones - AQA Love & Relationships Analysis',
  description:
    'Neutral Tones by Thomas Hardy - GCSE analysis for AQA Love & Relationships: lost love, pathetic fallacy, cyclical structure and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/neutral-tones',
  },
}

export default function LoveAndRelationshipsNeutralTonesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
