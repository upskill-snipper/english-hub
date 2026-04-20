import type { Metadata } from 'next'
import { RevisionShell } from './_components/revision-shell'

export const metadata: Metadata = {
  title: 'Your Hub -- The English Hub',
  description:
    'Your unified home for English revision, study tools, progress tracking, and exam technique -- personalised to your exam board for KS3, GCSE, IGCSE and IAL success.',
  alternates: { canonical: 'https://theenglishhub.app/revision' },
  openGraph: {
    title: 'Your Hub -- The English Hub',
    description:
      'Your unified home for English revision, study tools, progress tracking, and exam technique -- personalised to your exam board.',
  },
}

export default function RevisionLayout({ children }: { children: React.ReactNode }) {
  return <RevisionShell>{children}</RevisionShell>
}
