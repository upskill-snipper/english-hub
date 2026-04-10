import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  getBoardExamTechniqueContent,
  getIgcseRedirectPath,
  isGcseExamBoard,
} from '@/components/revision/BoardSpecificExamTechnique'

import ExamTechniqueHubView from './exam-technique-hub-view'

export default async function ExamTechniquePage() {
  const board = await getServerBoard()

  if (!board) {
    redirect('/board-select?next=/revision/exam-technique')
  }

  // Send IGCSE users to their dedicated pages.
  if (isIgcseBoard(board)) {
    const target = getIgcseRedirectPath(board)
    if (target) redirect(target)
  }

  if (!isGcseExamBoard(board)) {
    redirect('/board-select?next=/revision/exam-technique')
  }

  const content = getBoardExamTechniqueContent(board)

  return <ExamTechniqueHubView boardName={content.boardName} shortName={content.shortName} />
}
