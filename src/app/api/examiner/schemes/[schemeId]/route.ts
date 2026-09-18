import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'

// ─── /api/examiner/schemes/[schemeId] ───────────────────────────────────────
// GET returns one saved scheme with its body; PATCH renames; DELETE removes.
// Every query is filtered by owner_id as well as id, so a guessed uuid
// belonging to another teacher returns 404, never their scheme.
// ────────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Ctx = { params: Promise<{ schemeId: string }> }

const idSchema = z.string().uuid()
const patchSchema = z.object({ name: z.string().trim().min(1).max(120) })

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
  const { schemeId } = await ctx.params
  if (!idSchema.safeParse(schemeId).success)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const admin = createServiceRoleClient()
  const { data, error } = await admin
    .from('examiner_mark_schemes')
    .select('id, pack_id, name, body, char_count, source_kind, updated_at')
    .eq('id', schemeId)
    .eq('owner_id', user.id)
    .maybeSingle()
  if (error) return NextResponse.json({ error: 'Could not load the mark scheme.' }, { status: 500 })
  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ scheme: data })
}

export async function PATCH(request: NextRequest, ctx: Ctx) {
  const user = await requireUser()
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })
  const { schemeId } = await ctx.params
  if (!idSchema.safeParse(schemeId).success)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })

  let body: z.infer<typeof patchSchema>
  try {
    body = patchSchema.parse(await request.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const admin = createServiceRoleClient()
  const { data, error } = await admin
    .from('examiner_mark_schemes')
    .update({ name: body.name, updated_at: new Date().toISOString() })
    .eq('id', schemeId)
    .eq('owner_id', user.id)
    .select('id, pack_id, name, char_count, source_kind, updated_at')
    .maybeSingle()
  if (error)
    return NextResponse.json({ error: 'Could not rename the mark scheme.' }, { status: 500 })
  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ scheme: data })
}

export async function DELETE(_request: NextRequest, ctx: Ctx) {
  const user = await requireUser()
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })
  const { schemeId } = await ctx.params
  if (!idSchema.safeParse(schemeId).success)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const admin = createServiceRoleClient()
  const { error, count } = await admin
    .from('examiner_mark_schemes')
    .delete({ count: 'exact' })
    .eq('id', schemeId)
    .eq('owner_id', user.id)
  if (error)
    return NextResponse.json({ error: 'Could not delete the mark scheme.' }, { status: 500 })
  if (!count) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ deleted: true })
}
