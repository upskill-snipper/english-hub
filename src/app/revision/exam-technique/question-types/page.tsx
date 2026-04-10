import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  getBoardExamTechniqueContent,
  getIgcseRedirectPath,
  isGcseExamBoard,
} from '@/components/revision/BoardSpecificExamTechnique'

import QuestionTypesView from './question-types-view'

export default async function QuestionTypesPage() {
  const board = await getServerBoard()

  if (!board) {
    redirect('/board-select?next=/revision/exam-technique/question-types')
  }

  if (isIgcseBoard(board)) {
    const target = getIgcseRedirectPath(board)
    if (target) redirect(target)
  }

  if (!isGcseExamBoard(board)) {
    redirect('/board-select?next=/revision/exam-technique/question-types')
  }

  const content = getBoardExamTechniqueContent(board)

  return (
    <QuestionTypesView
      boardName={content.boardName}
      shortName={content.shortName}
      questionTypes={content.questionTypes}
    />
  )
}
