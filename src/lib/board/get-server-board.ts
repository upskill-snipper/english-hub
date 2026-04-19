import { cookies } from 'next/headers'
import type { ExamBoard } from './board-store'
import { BOARDS } from './board-config'

// Derive valid board IDs from the canonical BOARDS array so new boards
// are automatically recognised without manually updating this list.
const VALID: ExamBoard[] = BOARDS.map((b) => b.id)

export async function getServerBoard(): Promise<ExamBoard | null> {
  try {
    const store = await cookies()
    const value = store.get('english-hub-board')?.value
    if (value && VALID.includes(value as ExamBoard)) {
      return value as ExamBoard
    }
  } catch {}
  return null
}
