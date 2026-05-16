import type { Metadata } from 'next'
import { RevisionShell } from '@/app/revision/_components/revision-shell'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'
import { GeoFaq, REVISION_FAQS } from '@/components/seo/GeoFaq'

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
  return (
    <>
      <LearningResourceJsonLd
        name="A-Level English Revision"
        description="UK A-Level English Literature and Language revision: board-specific hubs for AQA, Pearson Edexcel, OCR and WJEC Eduqas, plus cross-board essay technique and set-text analysis."
        educationalLevel="A-Level"
        learningResourceType="Revision hub"
        url="https://theenglishhub.app/a-level"
        about="A-Level English"
        audienceRole="student"
      />
      <RevisionShell>
        {children}
        <div className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6">
          <GeoFaq faqs={REVISION_FAQS} heading="A-Level English: common questions" />
        </div>
      </RevisionShell>
    </>
  )
}
