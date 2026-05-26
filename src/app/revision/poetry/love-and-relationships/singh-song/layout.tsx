import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Singh Song! - AQA Love & Relationships Analysis',
  description:
    'Singh Song! by Daljit Nagra - GCSE analysis for AQA Love & Relationships: new-wed love, dialect, voice, structure and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships/singh-song',
  },
}

export default function LoveAndRelationshipsSinghSongLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
