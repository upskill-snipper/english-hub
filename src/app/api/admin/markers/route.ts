// ─── Platform-admin - Paid marker management ────────────────────────────────
// GET  /api/admin/markers     list markers (newest first)
// POST /api/admin/markers     create OR update (upsert) a marker
//
// Site-admin only (verifyAdmin - these tables are RLS deny-by-default; the
// service-role client is the only writer). Mirrors the house style of
// src/app/api/admin/prompts/route.ts and src/app/api/admin/model-performance.
//
// `markers` columns (snake_case - see 20260519_marker_drive.sql):
//   id, user_id, display_name, email, boards[], qualification,
//   status ∈ active|paused|offboarded, contract_signed_at, nda_signed_at,
//   pay_rate_pence, notes, created_at
//
// EMPTY-TABLE SAFE: a missing table / query error degrades to an empty list
// with a `note` (never a 500) so the admin page renders an empty state -
// these tables are expected to be empty until the marker drive is live.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

const MARKERS_TABLE = 'markers'
const MARKER_STATUSES = ['active', 'paused', 'offboarded'] as const
type MarkerStatus = (typeof MARKER_STATUSES)[number]

const MARKER_SELECT =
  'id, user_id, display_name, email, boards, qualification, status,' +
  ' contract_signed_at, nda_signed_at, pay_rate_pence, notes, created_at'

interface MarkerRow {
  id: string
  user_id: string | null
  display_name: string
  email: string | null
  boards: string[] | null
  qualification: string | null
  status: string
  contract_signed_at: string | null
  nda_signed_at: string | null
  pay_rate_pence: number | null
  notes: string | null
  created_at: string
}

interface UpsertMarkerBody {
  id?: string
  display_name?: string
  email?: string | null
  boards?: unknown
  qualification?: string | null
  status?: string
  pay_rate_pence?: number | null
  contract_signed_at?: string | null
  nda_signed_at?: string | null
  user_id?: string | null
  notes?: string | null
}

/** Coerce an arbitrary value into a clean string[] (board specialisms). */
function normaliseBoards(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((v) => (typeof v === 'string' ? v.trim() : '')).filter((v) => v.length > 0)
  }
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((v) => v.trim())
      .filter((v) => v.length > 0)
  }
  return []
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-markers-list:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const supabase = createServiceRoleClient()
    const { data, error } = await supabase
      .from(MARKERS_TABLE)
      .select(MARKER_SELECT)
      .order('created_at', { ascending: false })
      .limit(1000)

    if (error) {
      // Table almost certainly not migrated on this DB yet - empty state.
      console.error('[api/admin/markers GET] query failed', error)
      return NextResponse.json({
        markers: [],
        storeAvailable: false,
        note: 'Marker store unavailable',
      })
    }

    const markers = ((data ?? []) as unknown as MarkerRow[]).map((m) => ({
      id: m.id,
      user_id: m.user_id ?? null,
      display_name: m.display_name,
      email: m.email ?? null,
      boards: Array.isArray(m.boards) ? m.boards : [],
      qualification: m.qualification ?? null,
      status: m.status ?? 'active',
      contract_signed_at: m.contract_signed_at ?? null,
      nda_signed_at: m.nda_signed_at ?? null,
      pay_rate_pence: m.pay_rate_pence ?? null,
      notes: m.notes ?? null,
      created_at: m.created_at,
    }))

    return NextResponse.json({ markers, storeAvailable: true, note: null })
  } catch (error) {
    console.error('[api/admin/markers GET] Unexpected error:', error)
    return NextResponse.json({ markers: [], storeAvailable: false, note: 'Unavailable' })
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-markers-upsert:${ip}`, { limit: 30, windowSeconds: 60 })
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

    let body: UpsertMarkerBody
    try {
      body = (await request.json()) as UpsertMarkerBody
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const id = typeof body.id === 'string' && body.id.trim().length > 0 ? body.id.trim() : null
    const displayName = typeof body.display_name === 'string' ? body.display_name.trim() : ''

    // display_name is NOT NULL in the schema and is required to create.
    if (!id && displayName.length === 0) {
      return NextResponse.json({ error: 'display_name is required' }, { status: 400 })
    }

    let status: MarkerStatus | undefined
    if (body.status !== undefined) {
      if (
        typeof body.status !== 'string' ||
        !MARKER_STATUSES.includes(body.status as MarkerStatus)
      ) {
        return NextResponse.json(
          { error: `status must be one of ${MARKER_STATUSES.join(', ')}` },
          { status: 400 },
        )
      }
      status = body.status as MarkerStatus
    }

    let payRatePence: number | null | undefined
    if (body.pay_rate_pence !== undefined && body.pay_rate_pence !== null) {
      const n = Number(body.pay_rate_pence)
      if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
        return NextResponse.json(
          { error: 'pay_rate_pence must be a non-negative integer (pence)' },
          { status: 400 },
        )
      }
      payRatePence = n
    } else if (body.pay_rate_pence === null) {
      payRatePence = null
    }

    const supabase = createServiceRoleClient()

    if (id) {
      // ── Update an existing marker - only set provided fields. ───────────
      const patch: Record<string, unknown> = {}
      if (displayName.length > 0) patch.display_name = displayName
      if (body.email !== undefined) {
        patch.email = typeof body.email === 'string' ? body.email.trim() || null : null
      }
      if (body.boards !== undefined) patch.boards = normaliseBoards(body.boards)
      if (body.qualification !== undefined) {
        patch.qualification =
          typeof body.qualification === 'string' ? body.qualification.trim() || null : null
      }
      if (status !== undefined) patch.status = status
      if (payRatePence !== undefined) patch.pay_rate_pence = payRatePence
      if (body.contract_signed_at !== undefined) {
        patch.contract_signed_at = body.contract_signed_at || null
      }
      if (body.nda_signed_at !== undefined) patch.nda_signed_at = body.nda_signed_at || null
      if (body.user_id !== undefined) {
        patch.user_id =
          typeof body.user_id === 'string' && body.user_id.trim().length > 0
            ? body.user_id.trim()
            : null
      }
      if (body.notes !== undefined) {
        patch.notes = typeof body.notes === 'string' ? body.notes.trim() || null : null
      }

      if (Object.keys(patch).length === 0) {
        return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
      }

      const { data, error } = await supabase
        .from(MARKERS_TABLE)
        .update(patch)
        .eq('id', id)
        .select(MARKER_SELECT)
        .single()

      if (error || !data) {
        console.error('[api/admin/markers POST] update failed', error)
        return NextResponse.json(
          { error: error?.message ?? 'Failed to update marker' },
          { status: 502 },
        )
      }
      return NextResponse.json({ marker: data }, { status: 200 })
    }

    // ── Create a new marker. ─────────────────────────────────────────────
    const insertRow: Record<string, unknown> = {
      display_name: displayName,
      email:
        typeof body.email === 'string' && body.email.trim().length > 0 ? body.email.trim() : null,
      boards: normaliseBoards(body.boards),
      qualification:
        typeof body.qualification === 'string' && body.qualification.trim().length > 0
          ? body.qualification.trim()
          : null,
      status: status ?? 'active',
      pay_rate_pence: payRatePence ?? null,
      contract_signed_at: body.contract_signed_at || null,
      nda_signed_at: body.nda_signed_at || null,
      user_id:
        typeof body.user_id === 'string' && body.user_id.trim().length > 0
          ? body.user_id.trim()
          : null,
      notes:
        typeof body.notes === 'string' && body.notes.trim().length > 0 ? body.notes.trim() : null,
    }

    const { data, error } = await supabase
      .from(MARKERS_TABLE)
      .insert(insertRow)
      .select(MARKER_SELECT)
      .single()

    if (error || !data) {
      console.error('[api/admin/markers POST] insert failed', error)
      return NextResponse.json(
        { error: error?.message ?? 'Failed to create marker' },
        { status: 502 },
      )
    }
    return NextResponse.json({ marker: data }, { status: 201 })
  } catch (error) {
    console.error('[api/admin/markers POST] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
