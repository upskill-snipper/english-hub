import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { rateLimitResponse } from '@/lib/api-response'
import { EXAMINER_BOUNDS } from '@/lib/marking/examiner/models'
import { getExaminerPack } from '@/lib/marking/examiner/registry'

// ─── /api/examiner/schemes ──────────────────────────────────────────────────
// A teacher's library of mark schemes: the text they pasted or the text pulled
// out of a PDF or Word file in their browser (the file itself never reaches
// the server). One row per (owner, pack, name); saving the same name again
// replaces the body. Signed-in only; no subscription needed to keep a library.
// ────────────────────────────────────────────────────────────────────────────

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const saveSchema = z.object({
  packId: z.string().min(1).max(80),
  name: z.string().trim().min(1).max(120),
  body: z.string().min(20).max(EXAMINER_BOUNDS.maxSchemeChars),
  sourceKind: z.enum(['pdf', 'docx', 'text', 'paste']).optional(),
})

async function requireUser() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function GET() {
  const user = await requireUser()
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })

  const admin = createServiceRoleClient()
  const { data, error } = await admin
    .from('examiner_mark_schemes')
    .select('id, pack_id, name, char_count, source_kind, updated_at')
    .eq('owner_id', user.id)
    .order('updated_at', { ascending: false })
    .limit(200)
  if (error) {
    console.error('[examiner/schemes] list failed', error.message)
    return NextResponse.json({ error: 'Could not load your mark schemes.' }, { status: 500 })
  }
  return NextResponse.json({ schemes: data ?? [] })
}

export async function POST(request: NextRequest) {
  const user = await requireUser()
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 })

  const rl = await rateLimit(`examiner-schemes-write:${user.id}`, {
    limit: 60,
    windowSeconds: 3600,
  })
  if (!rl.success) return rateLimitResponse(rl.resetAt)

  let body: z.infer<typeof saveSchema>
  try {
    body = saveSchema.parse(await request.json())
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  if (!getExaminerPack(body.packId)) {
    return NextResponse.json({ error: 'Unknown paper' }, { status: 404 })
  }

  const admin = createServiceRoleClient()
  const { data: existing } = await admin
    .from('examiner_mark_schemes')
    .select('id')
    .eq('owner_id', user.id)
    .eq('pack_id', body.packId)
    .eq('name', body.name)
    .maybeSingle()

  const row = {
    owner_id: user.id,
    pack_id: body.packId,
    name: body.name,
    body: body.body,
    char_count: body.body.length,
    source_kind: body.sourceKind ?? 'paste',
    updated_at: new Date().toISOString(),
  }

  const result = existing
    ? await admin
        .from('examiner_mark_schemes')
        .update(row)
        .eq('id', existing.id)
        .eq('owner_id', user.id)
        .select('id, pack_id, name, char_count, source_kind, updated_at')
        .single()
    : await admin
        .from('examiner_mark_schemes')
        .insert(row)
        .select('id, pack_id, name, char_count, source_kind, updated_at')
        .single()

  if (result.error || !result.data) {
    console.error('[examiner/schemes] save failed', result.error?.message)
    return NextResponse.json({ error: 'Could not save the mark scheme.' }, { status: 500 })
  }
  return NextResponse.json({ scheme: result.data, replaced: Boolean(existing) })
}
