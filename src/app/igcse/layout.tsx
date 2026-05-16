import type { Metadata } from 'next'
import { RevisionShell } from '@/app/revision/_components/revision-shell'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'

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
  return (
    <>
      <LearningResourceJsonLd
        name="IGCSE English Revision"
        description="IGCSE English Literature and Language revision: study guides, exam technique and past-paper practice for Pearson Edexcel (4ET1, 4EA1) and Cambridge International (0500, 0990)."
        educationalLevel="IGCSE"
        learningResourceType="Revision hub"
        url="https://theenglishhub.app/igcse"
        about="IGCSE English"
        audienceRole="student"
      />
      <RevisionShell>{children}</RevisionShell>
    </>
  )
}
