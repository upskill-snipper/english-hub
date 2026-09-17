// ─── IELTS attempt persistence (server write-through) ──────────────────────
// The client store (src/lib/ielts/store.ts) keeps localStorage as the primary,
// instant store and fires a NON-BLOCKING POST here so attempts also land in the
// DB - enabling cross-device continuity and B2B teacher analytics.
//
// The POST is still best-effort by design: the learner must never lose an
// attempt because a write failed, and localStorage already holds it.
//
// The GET is NOT best-effort any more. Until 2026-09-17 it answered
// `200 { attempts: [] }` in three different situations - genuinely no
// attempts, no session, and "we could not identify you" - and the last of
// those was the common case, because only 8 of 200 accounts had a Prisma
// `User` row. A fifteen-year-old who had completed practice tests was shown
// an empty record as though it were a fact. An empty state asserted when the
// truth is unknown is a claim the code cannot support, so the three cases are
// now told apart: 401 when signed out, 503 when identity or the database
// cannot answer, and an empty list only when the account really has none.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { tryPrismaUserId } from '@/lib/identity'

export const runtime = 'nodejs' // Prisma requires the Node.js runtime.

type Resolution =
  | { state: 'ok'; userId: string; supabaseUserId: string }
  | { state: 'signed-out' }
  | { state: 'unresolved'; supabaseUserId: string }

/**
 * Resolve the Prisma User.id for the current session, projecting the account
 * just in time when it has no row yet. Distinguishes "not signed in" from
 * "signed in but unidentifiable" so callers can answer honestly.
 */
async function resolveDbUser(): Promise<Resolution> {
  let supabaseUserId: string | null = null
  try {
    const supabase = await createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    supabaseUserId = user?.id ?? null
  } catch (err) {
    console.error('[ielts/attempts] session lookup failed:', err)
    return { state: 'signed-out' }
  }

  if (!supabaseUserId) return { state: 'signed-out' }

  const userId = await tryPrismaUserId(supabaseUserId)
  if (!userId) {
    // Counted, with the id, so the projection gap is measurable instead of
    // hiding behind an empty array.
    console.error(
      `[ielts/attempts] signed-in user ${supabaseUserId} could not be resolved to a Prisma User row.`,
    )
    return { state: 'unresolved', supabaseUserId }
  }

  return { state: 'ok', userId, supabaseUserId }
}

const asStr = (v: unknown): string | null => (typeof v === 'string' ? v : null)
const asNum = (v: unknown): number | null =>
  typeof v === 'number' && Number.isFinite(v) ? v : null

export async function POST(request: NextRequest) {
  // Deliberately still non-fatal: the attempt is already in localStorage and
  // the client fires this without awaiting it. The `reason` is specific so a
  // failure to persist is diagnosable rather than uniform.
  const resolution = await resolveDbUser()
  if (resolution.state !== 'ok') {
    return NextResponse.json({ persisted: false, reason: resolution.state })
  }
  const userId = resolution.userId

  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ persisted: false, reason: 'bad-json' })
  }

  const skill = asStr(body.skill)
  const band = asNum(body.band)
  if (!skill || band === null) {
    return NextResponse.json({ persisted: false, reason: 'invalid' })
  }
  const isObjective = skill === 'listening' || skill === 'reading'

  const data: Prisma.IELTSAttemptUncheckedCreateInput = {
    userId,
    skill,
    band,
    ...(isObjective
      ? { testId: asStr(body.testId), rawScore: asNum(body.rawScore), total: asNum(body.total) }
      : {
          taskType: asStr(body.taskType),
          promptId: asStr(body.promptId),
          responseText: asStr(body.responseText),
          ...(Array.isArray(body.criteria)
            ? { criteria: body.criteria as Prisma.InputJsonValue }
            : {}),
        }),
  }

  try {
    await prisma.iELTSAttempt.create({ data })
    return NextResponse.json({ persisted: true })
  } catch {
    // Table not migrated yet, or transient DB error - non-fatal by design.
    return NextResponse.json({ persisted: false, reason: 'db' })
  }
}

export async function GET() {
  const resolution = await resolveDbUser()

  if (resolution.state === 'signed-out') {
    return NextResponse.json({ error: 'Sign in to see your saved attempts.' }, { status: 401 })
  }

  if (resolution.state === 'unresolved') {
    return NextResponse.json(
      {
        error:
          'We could not load your attempt history. Your practice attempts on this device are safe. Please try again shortly.',
      },
      { status: 503 },
    )
  }

  const userId = resolution.userId

  try {
    const rows = await prisma.iELTSAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 500,
    })
    const attempts = rows.map((r) =>
      r.skill === 'listening' || r.skill === 'reading'
        ? {
            id: r.id,
            skill: r.skill,
            testId: r.testId ?? '',
            rawScore: r.rawScore ?? 0,
            total: r.total ?? 0,
            band: r.band,
            date: r.createdAt.toISOString(),
          }
        : {
            id: r.id,
            skill: r.skill,
            taskType: r.taskType ?? 'writing-task-2',
            promptId: r.promptId ?? '',
            responseText: r.responseText ?? '',
            band: r.band,
            criteria: r.criteria ?? [],
            date: r.createdAt.toISOString(),
          },
    )
    return NextResponse.json({ attempts })
  } catch (err) {
    // A database failure is not an empty history. Say so.
    console.error('[ielts/attempts] read failed:', err)
    return NextResponse.json(
      {
        error:
          'We could not load your attempt history. Your practice attempts on this device are safe. Please try again shortly.',
      },
      { status: 503 },
    )
  }
}
