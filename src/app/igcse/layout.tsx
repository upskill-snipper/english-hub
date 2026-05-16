import type { Metadata } from 'next'
import { RevisionShell } from '@/app/revision/_components/revision-shell'

export const metadata: Metadata = {
  title: 'IGCSE English',
  description:
    'IGCSE English Literature and Language revision resources. Study guides, exam technique and past-paper practice for top grades.',
  alternates: { canonical: 'https://theenglishhub.app/igcse' },
  openGraph: {
    title: 'IGCSE English — The English Hub',
    description:
      'IGCSE English Literature and Language revision resources. Study guides, exam technique and past-paper practice for top grades.',
  },
}

// Wrap every IGCSE board route in the same RevisionShell used at /revision
// so the "Your Hub" sidebar + header render consistently regardless of
// which board tree the student entered through.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <RevisionShell>{children}</RevisionShell>
}
