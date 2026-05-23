import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essay Plans — AQA Love & Relationships Poetry',
  description:
    'Grade 9 comparative essay plans for AQA Love & Relationships poetry: model theses, paragraph structures, quotations and examiner technique for Paper 2.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/essay-plans',
  },
}

export default function LoveAndRelationshipsEssayPlansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
