import type { Metadata } from 'next'
import { RevisionShell } from '@/app/revision/_components/revision-shell'

export const metadata: Metadata = {
  title: 'IGCSE English',
  description:
    'IGCSE English Literature and Language revision resources. Study guides, exam technique and past-paper practice for top grades.',
  alternates: { canonical: 'https://theenglishhub.app/igcse' },
  openGraph: {
    title: 'IGCSE English - The English Hub',
    description:
      'IGCSE English Literature and Language revision resources. Study guides, exam technique and past-paper practice for top grades.',
    images: [
      {
        url: '/api/og?title=IGCSE+English+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'IGCSE English - The English Hub',
      },
    ],
  },
}

// Wrap every IGCSE board route in the same RevisionShell used at /revision
// so the "Your Hub" sidebar + header render consistently regardless of
// which board tree the student entered through.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* THE HUB'S JSON-LD MOVED TO page.tsx ON 20 SEPTEMBER 2026. It
          describes /igcse, and a layout wraps every descendant, so all 153
          URLs beneath it carried a node naming a different page. Same rule
          the FAQ walls established: a node describing one URL is mounted
          from that URL's page, never from a layout. */}
      <RevisionShell>{children}</RevisionShell>
    </>
  )
}
