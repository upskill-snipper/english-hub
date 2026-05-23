import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnet 29 — AQA Love & Relationships Analysis',
  description:
    "Sonnet 29 ('I think of thee!') by Elizabeth Barrett Browning — GCSE analysis for AQA Love & Relationships: longing, the conceit and comparisons.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/sonnet-29',
  },
}

export default function LoveAndRelationshipsSonnet29Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
