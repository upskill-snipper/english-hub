import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Before You Were Mine - AQA Love & Relationships Analysis',
  description:
    'Before You Were Mine by Carol Ann Duffy - GCSE analysis for AQA Love & Relationships: themes, language, structure, context and comparison poems.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/love-and-relationships/before-you-were-mine',
  },
}

export default function LoveAndRelationshipsBeforeYouWereMineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
