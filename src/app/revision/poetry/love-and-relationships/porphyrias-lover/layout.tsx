import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Porphyria's Lover - AQA Love & Relationships Analysis",
  description:
    "Porphyria's Lover by Robert Browning - GCSE analysis for AQA Love & Relationships: dramatic monologue, control, structure and comparison poems.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/porphyrias-lover',
  },
}

export default function LoveAndRelationshipsPorphyriasLoverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
