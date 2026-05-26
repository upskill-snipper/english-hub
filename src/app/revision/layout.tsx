import type { Metadata } from 'next'
import { RevisionShell } from './_components/revision-shell'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'
import { GeoFaq, REVISION_FAQS } from '@/components/seo/GeoFaq'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Your Hub',
  description:
    'Your unified home for English revision, study tools, progress tracking, and exam technique -- personalised to your exam board for KS3, GCSE, IGCSE and IAL success.',
  // NOTE: canonical is intentionally NOT set here. A layout-level canonical
  // is inherited by every nested leaf page and produces duplicate/parent-pointing
  // canonicals, suppressing rankings for sub-topics (SEO audit item #29).
  // Each leaf page owns its own `alternates.canonical` via generateMetadata /
  // metadata export. The self-referential canonical for `/revision` itself is
  // set in `./page.tsx`.
  openGraph: {
    title: 'Your Hub -- The English Hub',
    description:
      'Your unified home for English revision, study tools, progress tracking, and exam technique -- personalised to your exam board.',
  },
}

export default async function RevisionLayout({ children }: { children: React.ReactNode }) {
  const geoFaqHeading = await t('revision.layout.geo_faq_heading')
  return (
    <>
      {/* educationalLevel intentionally omitted - this tree spans KS3,
          GCSE, IGCSE and IAL, so a single level value would be wrong. */}
      <LearningResourceJsonLd
        name="English Revision Hub"
        description="Unified English revision: study tools, progress tracking, set-text analysis and exam technique personalised to your exam board across KS3, GCSE, IGCSE and IAL."
        learningResourceType="Revision hub"
        url="https://theenglishhub.app/revision"
        about="English revision"
        audienceRole="student"
      />
      <RevisionShell>
        {children}
        <div className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6">
          <GeoFaq faqs={REVISION_FAQS} heading={geoFaqHeading} />
        </div>
      </RevisionShell>
    </>
  )
}
