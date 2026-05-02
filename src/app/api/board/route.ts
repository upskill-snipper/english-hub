// Currently no client code POSTs to this route. The canonical client cookie writer is writeBoardCookie inside @/lib/board/board-store. This endpoint is retained for future server-side use cases.
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import type { ExamBoard } from '@/lib/board/board-config'
import { BOARDS } from '@/lib/board/board-config'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

// ─── Validation ─────────────────────────────────────────────────────────
//
// Derive the valid-board enum from the canonical BOARDS array so newly
// added boards (KS3, IAL, UK A-Level, IGCSE Language, etc.) are accepted
// without touching this file. Previously this was a hand-maintained subset
// of 7 boards, which silently rejected `ks3`, `ial-edexcel`, the four UK
// A-Level boards, `cambridge-0475`, and `edexcel-igcse-lang` with a 400
// despite those boards being selectable in the BoardSelectorSection UI.
const VALID_BOARDS = BOARDS.map((b) => b.id) as [
  ExamBoard,
  ...ExamBoard[],
] satisfies readonly ExamBoard[]

const setBoardSchema = z.object({
  board: z.enum(VALID_BOARDS),
})

const COOKIE_NAME = 'english-hub-board'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

// ─── POST /api/board ────────────────────────────────────────────────────
// Persists the user's selected exam board in a cookie so middleware and
// server components can read it on the next request.

export async function POST(request: NextRequest) {
  // ── Rate limit: 10 per minute per IP ──────────────────────────────────
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`board:${ip}`, { limit: 10, windowSeconds: 60 })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
      },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = setBoardSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid board value', details: parsed.error.flatten() },
      { status: 400 },
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
