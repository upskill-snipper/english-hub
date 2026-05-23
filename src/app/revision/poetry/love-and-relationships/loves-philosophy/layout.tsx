import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Love's Philosophy — AQA Love & Relationships Analysis",
  description:
    "Love's Philosophy by Percy Bysshe Shelley — GCSE analysis for AQA Love & Relationships: nature imagery, persuasion, structure and comparison poems.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/loves-philosophy',
  },
}

export default function LoveAndRelationshipsLovesPhilosophyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
