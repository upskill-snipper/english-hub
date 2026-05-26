// ─── Platform-admin - Prompt version management ─────────────────────────────
// GET  /api/admin/prompts            list prompt_versions (newest first)
// POST /api/admin/prompts            create a new version (active by default)
//
// Site-admin only. Backed by src/lib/versioning/admin.ts (service-role; these
// tables are RLS deny-by-default). Prompts are VERSIONED & STORED - improvable
// over time, never hardcoded in the app. Empty-table safe.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { verifyAdmin } from '@/lib/admin-auth'
import {
  createPromptVersion,
  listPromptVersions,
  type CreatePromptVersionInput,
} from '@/lib/versioning/admin'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-prompts-list:${ip}`, { limit: 30, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const promptKey = searchParams.get('prompt_key')?.trim() || undefined

    const result = await listPromptVersions(promptKey)
    // Empty-table safe: result.ok === false still returns [] with a note.
    return NextResponse.json({
      prompts: result.data,
      storeAvailable: result.ok,
      note: result.ok ? null : (result.error ?? 'Versioning store unavailable'),
    })
  } catch (error) {
    console.error('[api/admin/prompts GET] Unexpected error:', error)
    return NextResponse.json({ prompts: [], storeAvailable: false, note: 'Unavailable' })
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-prompts-create:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const { error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const ct = request.headers.get('content-type')
    if (!ct || !ct.includes('application/json')) {
      return NextResponse.json({ error: 'Content-Type must be application/json' }, { status: 415 })
    }

    let body: Partial<CreatePromptVersionInput>
    try {
      body = (await request.json()) as Partial<CreatePromptVersionInput>
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    if (!body.prompt_key || typeof body.prompt_key !== 'string') {
      return NextResponse.json({ error: 'prompt_key is required' }, { status: 400 })
    }
    if (!body.prompt_text || typeof body.prompt_text !== 'string') {
      return NextResponse.json({ error: 'prompt_text is required' }, { status: 400 })
    }

    const result = await createPromptVersion({
      prompt_key: body.prompt_key,
      prompt_text: body.prompt_text,
      subject: body.subject ?? null,
      exam_board: body.exam_board ?? null,
      question_type: body.question_type ?? null,
      rubric_version_id: body.rubric_version_id ?? null,
      // Spec: create AND activate.
      activate: body.activate !== false,
    })

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error ?? 'Failed to create prompt version' },
        { status: 502 },
      )
    }

    return NextResponse.json({ prompt: result.data }, { status: 201 })
  } catch (error) {
    console.error('[api/admin/prompts POST] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
