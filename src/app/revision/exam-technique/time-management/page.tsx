import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  getBoardExamTechniqueContent,
  getIgcseRedirectPath,
  isGcseExamBoard,
} from '@/components/revision/BoardSpecificExamTechnique'

import TimeManagementView from './time-management-view'

export default async function TimeManagementPage() {
  const board = await getServerBoard()

  if (!board) {
    redirect('/board-select?next=/revision/exam-technique/time-management')
  }

  if (isIgcseBoard(board)) {
    const target = getIgcseRedirectPath(board)
    if (target) redirect(target)
  }

  if (!isGcseExamBoard(board)) {
    redirect('/board-select?next=/revision/exam-technique/time-management')
  }

  const content = getBoardExamTechniqueContent(board)

  return (
    <TimeManagementView
      boardName={content.boardName}
      shortName={content.shortName}
      totalDuration={content.totalDuration}
      structureSummary={content.structureSummary}
      papers={content.papers}
    />
  )
}
