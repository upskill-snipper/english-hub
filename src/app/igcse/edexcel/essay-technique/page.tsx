import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import EssayTechniqueClient from './client'

export default async function EssayTechniqueHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])
  return <EssayTechniqueClient />
}
