import type { Metadata } from 'next'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
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
  return <UnseenPoetryClient />
}
