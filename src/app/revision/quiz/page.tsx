import { headers } from 'next/headers'
import { QuizJsonLd } from '@/components/seo/json-ld'
import { getServerBoard } from '@/lib/board/get-server-board'
import { QuizHubClient } from './quiz-hub-client'

export default async function QuizPage() {
  const board = await getServerBoard()
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    <>
      <QuizJsonLd
        name="GCSE and IGCSE English quick quiz"
        description="Topic-tagged quiz questions for GCSE and IGCSE English revision — Macbeth, Power & Conflict, exam technique, vocabulary."
        about="GCSE English"
        educationalLevel="GCSE"
        url="https://theenglishhub.app/revision/quiz"
        audienceRole="student"
        nonce={nonce}
      />
      <QuizHubClient initialBoard={board} />
    </>
  )
}
