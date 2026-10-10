import type { Metadata } from 'next'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'
import UnseenPoetryClient from './client'

// Until 10 October 2026 the title, descriptions and JSON-LD offered
// "comparison" for the unseen poem. 4ET1 Paper 1 Section A sets one poem and
// asks for no comparison; comparison is Section B, on two anthology poems.
export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Unseen Poetry - Reading and Analysis - The English Hub',
    description:
      'How to read and analyse the one unseen poem in Edexcel IGCSE Literature 4ET1 Paper 1: approach, language, structure and form, building your answer, practice.',
    images: [
      {
        url: '/api/og?title=Edexcel+IGCSE+Unseen+Poetry+-+Reading+and+Analysis+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Edexcel IGCSE Unseen Poetry - Reading and Analysis - The English Hub',
      },
    ],
  },
  title: 'Edexcel IGCSE Unseen Poetry - Reading and Analysis',
  description:
    'How to read and analyse the one unseen poem in Edexcel IGCSE Literature 4ET1 Paper 1: approach, language, structure and form, building your answer, practice.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel/unseen-poetry' },
}

export default async function UnseenPoetryHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])
  return (
    <>
      <LearningResourceJsonLd
        name="Edexcel IGCSE Literature unseen poetry guide"
        description="How to approach the unseen poem in Pearson Edexcel IGCSE Literature 4ET1 Paper 1 Section A - reading approach, language analysis, structure and form, and building an answer on one poem."
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
