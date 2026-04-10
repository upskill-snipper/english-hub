import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import type { ExamBoard } from '@/lib/board/board-config'

// ─── Validation ─────────────────────────────────────────────────────────

const VALID_BOARDS = [
  'aqa',
  'edexcel',
  'ocr',
  'eduqas',
  'edexcel-igcse',
  'cambridge-0500',
  'cambridge-0990',
] as const satisfies readonly ExamBoard[]

const setBoardSchema = z.object({
  board: z.enum(VALID_BOARDS),
})

const COOKIE_NAME = 'english-hub-board'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

// ─── POST /api/board ────────────────────────────────────────────────────
// Persists the user's selected exam board in a cookie so middleware and
// server components can read it on the next request.

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    )
  }

  const parsed = setBoardSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid board value', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { board } = parsed.data

  const response = NextResponse.json({ ok: true, board })

  response.cookies.set({
    name: COOKIE_NAME,
    value: board,
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
    httpOnly: false,
  })

  return response
}

// ─── DELETE /api/board ──────────────────────────────────────────────────
// Clears the board cookie.

export async function DELETE() {
  const response = NextResponse.json({ ok: true })
  response.cookies.set({
    name: COOKIE_NAME,
    value: '',
    path: '/',
    maxAge: 0,
    sameSite: 'lax',
    httpOnly: false,
  })
  return response
}
