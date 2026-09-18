import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

// ─── /api/examiner/runs/[runId] ─────────────────────────────────────────────
// GET one saved result in full (transcript, notes, commentary); DELETE it.
// Filtered by owner as well as id.
// ────────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Ctx = { params: Promise<{ runId: string }> }
const idSchema = z.string().uuid()

async function requireUser() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function GET(_request: NextRequest, ctx: Ctx) {
  const user = await requireUser()
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })
  const { runId } = await ctx.params
  if (!idSchema.safeParse(runId).success)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const admin = createServiceRoleClient()
  const { data, error } = await admin
    .from('examiner_marking_runs')
    .select('*')
    .eq('id', runId)
    .eq('owner_id', user.id)
    .maybeSingle()
  if (error) return NextResponse.json({ error: 'Could not load this result.' }, { status: 500 })
  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ run: data })
}

export async function DELETE(_request: NextRequest, ctx: Ctx) {
  const user = await requireUser()
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })
  const { runId } = await ctx.params
  if (!idSchema.safeParse(runId).success)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const admin = createServiceRoleClient()
  const { error, count } = await admin
    .from('examiner_marking_runs')
    .delete({ count: 'exact' })
    .eq('id', runId)
    .eq('owner_id', user.id)
  if (error) return NextResponse.json({ error: 'Could not delete this result.' }, { status: 500 })
  if (!count) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ deleted: true })
}
