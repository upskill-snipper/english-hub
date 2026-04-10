import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import UnseenPoetryClient from './client'

export default async function UnseenPoetryHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])
  return <UnseenPoetryClient />
}
