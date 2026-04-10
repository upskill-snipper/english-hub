import { cookies } from 'next/headers'
import type { ExamBoard } from './board-store'

const VALID: ExamBoard[] = ['aqa','edexcel','ocr','eduqas','edexcel-igcse','cambridge-0500','cambridge-0990']

export async function getServerBoard(): Promise<ExamBoard | null> {
  try {
    const store = cookies()
    const value = store.get('english-hub-board')?.value
    if (value && VALID.includes(value as ExamBoard)) {
      return value as ExamBoard
    }
  } catch {}
  return null
}
