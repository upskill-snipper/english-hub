import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  AQA_CONTENT,
  getBoardExamTechniqueContent,
  getIgcseRedirectPath,
  isGcseExamBoard,
} from '@/components/revision/BoardSpecificExamTechnique'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

import ExamTechniqueHubView from './exam-technique-hub-view'

export default async function ExamTechniquePage() {
  const board = await getServerBoard()

  // Send IGCSE users to their dedicated exam-technique pages.
  if (isIgcseBoard(board)) {
    const target = getIgcseRedirectPath(board)
    if (target) redirect(target)
  }

  // GCSE boards get their tailored content. Visitors with no board chosen
  // (including crawlers, which never carry the board cookie) previously got
  // redirected to /board-select, which left the canonical /revision/exam-technique
  // URL serving a redirect with no <h1> (SEO audit: missing h1). We now render
  // the hub with neutral generic-GCSE content so the page always ships its
  // single server-rendered <h1>; the client view still personalises once a
  // board cookie is present. Non-GCSE/non-IGCSE boards fall back to the same
  // generic content rather than redirecting away.
  const content = isGcseExamBoard(board) ? getBoardExamTechniqueContent(board) : AQA_CONTENT

  return (
    <>
      <ArticleJsonLd
        headline="Exam Technique Revision"
        description="Interactive exam technique revision for GCSE English - essay structure, time management, and question types tailored to your exam board."
        datePublished="2026-04-01"
        url="https://theenglishhub.app/revision/exam-technique"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Exam technique', url: 'https://theenglishhub.app/revision/exam-technique' },
        ]}
      />
      <ExamTechniqueHubView boardName={content.boardName} shortName={content.shortName} />
    </>
  )
}
