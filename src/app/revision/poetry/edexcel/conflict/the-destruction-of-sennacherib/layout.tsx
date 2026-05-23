import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destruction of Sennacherib — Edexcel Conflict',
  description:
    'The Destruction of Sennacherib by Lord Byron — GCSE analysis for the Pearson Edexcel Conflict cluster: war, rhythm, imagery and comparison poems.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/edexcel/conflict/the-destruction-of-sennacherib',
  },
}

export default function EdexcelConflictTheDestructionOfSennacheribLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
