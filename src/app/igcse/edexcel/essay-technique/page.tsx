import type { Metadata } from 'next'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import EssayTechniqueClient from './client'

export const metadata: Metadata = {
  title: 'Essay Technique - Edexcel IGCSE Literature',
  description:
    'Edexcel IGCSE English Literature essay technique: the 3-part introduction, PEEL paragraphs for poetry, embedding quotations and writing high-grade conclusions.',
}

export default async function EssayTechniqueHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])
  return <EssayTechniqueClient />
}
