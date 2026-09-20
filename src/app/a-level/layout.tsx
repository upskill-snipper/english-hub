import type { Metadata } from 'next'
import { RevisionShell } from '@/app/revision/_components/revision-shell'

export const metadata: Metadata = {
  title: 'A-Level English',
  description:
    'UK A-Level English Literature and Language resources. Board-specific hubs for AQA, Pearson Edexcel, OCR and WJEC Eduqas, plus cross-board revision tools.',
  alternates: { canonical: 'https://theenglishhub.app/a-level' },
  openGraph: {
    title: 'A-Level English - The English Hub',
    description:
      'UK A-Level English Literature and Language resources. Board-specific hubs for AQA, Pearson Edexcel, OCR and WJEC Eduqas.',
    images: [
      {
        url: '/api/og?title=A-Level+English+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'A-Level English - The English Hub',
      },
    ],
  },
}

// Unify the A-Level route tree with the /revision layout - same sidebar
// + header chrome ("Your Hub" nav) regardless of the entry URL.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* THE HUB'S JSON-LD MOVED TO page.tsx ON 20 SEPTEMBER 2026. It
          describes /a-level, and a layout wraps every descendant, so all 5
          URLs beneath it carried a node naming a different page. Same rule
          the FAQ walls established: a node describing one URL is mounted
          from that URL's page, never from a layout. */}
      <RevisionShell>{children}</RevisionShell>
    </>
  )
}
