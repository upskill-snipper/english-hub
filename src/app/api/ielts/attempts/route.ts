// ─── IELTS attempt persistence (server write-through) ──────────────────────
// The client store (src/lib/ielts/store.ts) keeps localStorage as the primary,
// instant store and fires a NON-BLOCKING POST here so attempts also land in the
// DB - enabling cross-device continuity and B2B teacher analytics.
//
// Everything here is GRACEFUL and best-effort: if the user can't be resolved
// (signed out / pre-supabaseUserId transition) or the `ielts_attempts` table
// isn't migrated yet, we return a non-fatal `{ persisted: false }` (HTTP 200)
// and the client is unaffected - localStorage already holds the attempt.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs' // Prisma requires the Node.js runtime.

/** Resolve the Prisma User.id for the current Supabase session, or null. */
async function resolveDbUserId(): Promise<string | null> {
  try {
    const supabase = await createServerSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return null
    const dbUser = await prisma.user.findUnique({
      where: { supabaseUserId: user.id },
      select: { id: true },
    })
    return dbUser?.id ?? null
  } catch {
    return null
  }
}

const asStr = (v: unknown): string | null => (typeof v === 'string' ? v : null)
const asNum = (v: unknown): number | null =>
  typeof v === 'number' && Number.isFinite(v) ? v : null

export async function POST(request: NextRequest) {
  const userId = await resolveDbUserId()
  if (!userId) return NextResponse.json({ persisted: false, reason: 'no-user' })

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
  const userId = await resolveDbUserId()
  if (!userId) return NextResponse.json({ attempts: [] })

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
  } catch {
    return NextResponse.json({ attempts: [] })
  }
}
