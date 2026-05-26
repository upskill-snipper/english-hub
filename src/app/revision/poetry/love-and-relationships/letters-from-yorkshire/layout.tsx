import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Letters from Yorkshire - AQA Love & Relationships',
  description:
    'Letters from Yorkshire by Maura Dooley - GCSE analysis for AQA Love & Relationships: connection, distance, structure, context and comparisons.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/love-and-relationships/letters-from-yorkshire',
  },
}

export default function LoveAndRelationshipsLettersFromYorkshireLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
