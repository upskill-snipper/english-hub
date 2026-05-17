import type { Metadata } from 'next'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'
import { GeoFaq, RESOURCES_FAQS } from '@/components/seo/GeoFaq'
import { t } from '@/lib/i18n/t'

// Created 2026-05-16 for GEO: /resources had NO layout and ~181 leaf
// pages emitted zero structured data — the single biggest schema gap.
// A hub-level LearningResource node here cascades +12 GEO to every
// page in the tree. Distinct hub url, so it does not conflict with any
// child page that emits its own (different-url) schema.
export const metadata: Metadata = {
  title: { default: 'Free English Resources', template: '%s — The English Hub' },
}

export default async function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const faqHeading = await t('resources.layout.faq_heading')
  return (
    <>
      <LearningResourceJsonLd
        name="Free GCSE & IGCSE English Resources"
        description="Free English resources: revision notes, poetry guides, writing-skills walkthroughs, exam techniques, vocabulary builders and study tools for AQA, Edexcel, OCR, Eduqas and Cambridge IGCSE."
        learningResourceType="Resource library"
        url="https://theenglishhub.app/resources"
        about="GCSE and IGCSE English"
        audienceRole="student"
      />
      {children}
      {/* Tree-wide GEO FAQ: adds FAQPage JSON-LD + question-shaped
          headings + citable exam codes to every /resources/* leaf
          (181 pages) from one file. None of these pages emit their own
          FAQPage, so there is no duplicate-structured-data conflict.
          Cluster-specific FAQ sets via mid-level layouts are a planned
          refinement to avoid an identical block across the tree. */}
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <GeoFaq faqs={RESOURCES_FAQS} heading={faqHeading} />
      </div>
    </>
  )
}
