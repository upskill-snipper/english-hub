import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Prelude — AQA Power and Conflict',
  description:
    'Extract from The Prelude by William Wordsworth — GCSE analysis for AQA Power and Conflict: nature, the sublime, structure and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/the-prelude',
  },
}

export default function PowerAndConflictThePreludeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
