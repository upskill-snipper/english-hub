import type { Metadata } from 'next'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'

// Created 2026-05-16 for GEO: /resources had NO layout and ~181 leaf
// pages emitted zero structured data — the single biggest schema gap.
// A hub-level LearningResource node here cascades +12 GEO to every
// page in the tree. Distinct hub url, so it does not conflict with any
// child page that emits its own (different-url) schema.
export const metadata: Metadata = {
  title: { default: 'Free English Resources', template: '%s — The English Hub' },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
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
    </>
  )
}
