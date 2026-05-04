import type { Metadata } from 'next'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import UnseenPoetryClient from './client'

export const metadata: Metadata = {
  title:
    'IGCSE Edexcel unseen poetry — approach, language, structure, comparison — The English Hub',
  description:
    'How to read an unseen poem for the Pearson Edexcel IGCSE 4ET1 Paper 1 Section A. Approach, language analysis, structure and form, comparison practice.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel/unseen-poetry' },
}

export default async function UnseenPoetryHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Unseen Poetry', url: 'https://theenglishhub.app/igcse/edexcel/unseen-poetry' },
        ]}
      />
      <LearningResourceJsonLd
        name="Edexcel IGCSE Literature unseen poetry guide"
        description="How to approach unseen poetry for Pearson Edexcel IGCSE Literature 4ET1 — reading approach, language analysis, structure and form, and comparison practice."
        educationalLevel="IGCSE"
        learningResourceType="Skill guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/igcse/edexcel/unseen-poetry"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      <UnseenPoetryClient />
    </>
  )
}
