import type { Metadata } from 'next'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'
import UnseenPoetryClient from './client'

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Unseen Poetry - Analysis and Comparison - The English Hub',
    description:
      'How to read an unseen poem for the Pearson Edexcel IGCSE 4ET1 Paper 1 Section A. Approach, language analysis, structure and form, comparison practice.',
    images: [
      {
        url: '/api/og?title=Edexcel+IGCSE+Unseen+Poetry+-+Analysis+and+Comparison+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Edexcel IGCSE Unseen Poetry - Analysis and Comparison - The English Hub',
      },
    ],
  },
  title: 'Edexcel IGCSE Unseen Poetry - Analysis and Comparison',
  description:
    'How to read an unseen poem for the Pearson Edexcel IGCSE 4ET1 Paper 1 Section A. Approach, language analysis, structure and form, comparison practice.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel/unseen-poetry' },
}

export default async function UnseenPoetryHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])
  return (
    <>
      <LearningResourceJsonLd
        name="Edexcel IGCSE Literature unseen poetry guide"
        description="How to approach unseen poetry for Pearson Edexcel IGCSE Literature 4ET1 - reading approach, language analysis, structure and form, and comparison practice."
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
