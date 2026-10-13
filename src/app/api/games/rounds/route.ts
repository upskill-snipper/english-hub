import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { RoundPayloadSchema, saveRound } from '@/lib/game-results/store'

export const dynamic = 'force-dynamic'

/**
 * POST /api/games/rounds: a signed-in student finished a round of a skills
 * game, or a level or review of a set-text quest, and their browser sends it.
 *
 * WHY (13 October 2026). The founder asked for game results to be tracked as
 * analytics for students and their schools. The only server save the games
 * had, /api/progress/games, never stored a row (it wrote the auth uuid into a
 * table that checks the Prisma cuid). This route stores each round in
 * game_rounds, keyed on the auth uuid from the session, through the service
 * role, with the shape src/lib/game-results/store.ts accepts and nothing else.
 *
 * Guests get 401, but the browser never sends a guest's round in the first
 * place (src/components/games/game-round.tsx): a guest's games stay in the
 * browser, as the quest pages tell them.
 *
 * A failed save is logged as a `[game-rounds]` line, which the server log
 * keeps in production whatever the Sentry settings, with the database's error
 * code and message only: never the round, which is a child's answers.
 */
export async function POST(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // A round takes a minute or more to play; 120 an hour is far above any
  // student and stops a runaway client.
  const rl = await rateLimit(`game-rounds:${user.id}`, { limit: 120, windowSeconds: 3600 })
  if (!rl.success) return NextResponse.json({ error: 'Too many rounds' }, { status: 429 })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Not a round' }, { status: 400 })
  }
  const parsed = RoundPayloadSchema.safeParse(body)
  if (!parsed.success) {
    // Logged, because a refusal here is a bug in a game page, and the browser
    // never reads the answer: every round from that game would be lost
    // without a trace. Field paths and messages only, never the values.
    console.error(
      '[game-rounds] refused',
      JSON.stringify(
        parsed.error.issues
          .slice(0, 5)
          .map((i) => ({ path: i.path.join('.'), message: i.message })),
      ),
    )
    return NextResponse.json({ error: 'Not a round' }, { status: 400 })
  }

  const result = await saveRound(user.id, parsed.data)
  if (!result.ok) {
    console.error(
      '[game-rounds] save failed',
      JSON.stringify({ code: result.error?.code ?? null, message: result.error?.message ?? '' }),
    )
    Sentry.captureMessage(`A game round failed to save: ${result.error?.code ?? 'unknown'}`, {
      level: 'error',
      tags: { area: 'student-save', path: 'game-round' },
    })
    return NextResponse.json({ error: 'Could not save the round' }, { status: 500 })
  }
  return new NextResponse(null, { status: 204 })
}
