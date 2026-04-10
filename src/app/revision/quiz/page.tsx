import { getServerBoard } from '@/lib/board/get-server-board'
import { QuizHubClient } from './quiz-hub-client'

export default async function QuizPage() {
  const board = await getServerBoard()
  return <QuizHubClient initialBoard={board} />
}
