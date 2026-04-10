import { getServerBoard } from '@/lib/board/get-server-board'
import { StudyPlanClient } from './study-plan-client'

export default async function StudyPlanPage() {
  const board = await getServerBoard()
  return <StudyPlanClient initialBoard={board} />
}
