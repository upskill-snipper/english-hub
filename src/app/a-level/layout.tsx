import type { Metadata } from 'next'
import { RevisionShell } from '@/app/revision/_components/revision-shell'

export const metadata: Metadata = {
  title: 'A-Level English',
  description:
    'UK A-Level English Literature and Language resources. Board-specific hubs for AQA, Pearson Edexcel, OCR and WJEC Eduqas, plus cross-board revision tools.',
  alternates: { canonical: 'https://theenglishhub.app/a-level' },
  openGraph: {
    title: 'A-Level English — The English Hub',
    description:
      'UK A-Level English Literature and Language resources. Board-specific hubs for AQA, Pearson Edexcel, OCR and WJEC Eduqas.',
  },
}

// Unify the A-Level route tree with the /revision layout — same sidebar
// + header chrome ("Your Hub" nav) regardless of the entry URL.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <RevisionShell>{children}</RevisionShell>
}
