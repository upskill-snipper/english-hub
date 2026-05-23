import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Farmer's Bride — AQA Love & Relationships Analysis",
  description:
    "The Farmer's Bride by Charlotte Mew — GCSE analysis for AQA Love & Relationships: unrequited love, voice, structure, context and comparisons.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/the-farmers-bride',
  },
}

export default function LoveAndRelationshipsTheFarmersBrideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
