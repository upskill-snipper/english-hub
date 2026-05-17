// ─── Platform-admin — Paid-marker payment & throughput ──────────────────────
// GET /api/admin/marker-pay?from=YYYY-MM-DD&to=YYYY-MM-DD[&format=csv]
//
// Site-admin only. Computes, per marker, how many scripts they have actually
// approved in a date window and the pay due, straight off the FROZEN Smart-IP
// schema via the service-role Supabase client (markers / marking_submissions /
// teacher_moderations are RLS deny-by-default — see 20260519_marker_drive.sql
// and 20260518_smart_ip_marking.sql).
//
// ── Attribution & counting ──────────────────────────────────────────────────
// An "approved script" for a marker = a DISTINCT marking_submissions row that
// has at least one teacher_moderations row whose decision is an APPROVING
// decision, where the moderation is attributable to that marker by EITHER:
//   • teacher_moderations.reviewer_user_id === markers.user_id   (they did the
//     review), OR
//   • marking_submissions.assigned_marker_id === markers.id      (the script
//     was assigned to them and an approving moderation exists).
// A submission is counted at most once per marker even with several
// moderations. Gold vs non-gold uses marking_submissions.is_gold.
//
// APPROVING_DECISIONS = ['approved','corrected']. The teacher_moderations
// decision CHECK is ('approved','rejected','corrected','sent_back'); both
// 'approved' (clean sign-off) and 'corrected' (accepted into the corpus WITH
// the teacher's correction — the actual training signal, and real marking
// work done) count as an approved/reviewed script. 'rejected'/'sent_back' do
// NOT (no usable, approved output produced).
//
// ── Pay formula ─────────────────────────────────────────────────────────────
//   amount_pence = approved_script_count × markers.pay_rate_pence
// (pay_rate_pence is "per approved script" per the migration). Markers with a
// NULL pay_rate_pence contribute 0 and are flagged rateMissing:true.
//
// Date window: teacher_moderations.created_at in [from 00:00:00, to+1d 00:00)
// (UTC, end-inclusive of the whole `to` day). Both params optional — absent
// `from` = all history; absent `to` = up to now.
//
// EMPTY-TABLE SAFE: a missing table / query error degrades to an empty,
// zeroed payload (never a 500) — these tables are expected to be empty until
// the marker drive is live. format=csv streams a download of the same data.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const APPROVING_DECISIONS = new Set(['approved', 'corrected'])

interface MarkerRow {
  id: string
  user_id: string | null
  display_name: string | null
  email: string | null
  status: string | null
  pay_rate_pence: number | null
}

interface SubmissionRow {
  id: string
  assigned_marker_id: string | null
  is_gold: boolean | null
}

interface ModerationRow {
  submission_id: string
  reviewer_user_id: string | null
  decision: string | null
  created_at: string | null
}

interface MarkerPayLine {
  markerId: string
  displayName: string
  email: string | null
  status: string | null
  payRatePence: number | null
  rateMissing: boolean
  approvedScripts: number
  goldScripts: number
  nonGoldScripts: number
  amountPence: number
}

interface MarkerPayPayload {
  generatedAt: string
  storeAvailable: boolean
  note: string | null
  period: { from: string | null; to: string | null }
  totals: {
    markers: number
    approvedScripts: number
    goldScripts: number
    nonGoldScripts: number
    amountPence: number
  }
  markers: MarkerPayLine[]
}

/** Parse a YYYY-MM-DD param to a UTC ISO instant, or null if absent/invalid. */
function parseFrom(v: string | null): string | null {
  if (!v) return null
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v.trim())
  if (!m) return null
  const d = new Date(`${m[1]}-${m[2]}-${m[3]}T00:00:00.000Z`)
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}

/** End-inclusive: the instant at the START of the day AFTER `to`. */
function parseToExclusive(v: string | null): string | null {
  if (!v) return null
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v.trim())
  if (!m) return null
  const d = new Date(`${m[1]}-${m[2]}-${m[3]}T00:00:00.000Z`)
  if (Number.isNaN(d.getTime())) return null
  d.setUTCDate(d.getUTCDate() + 1)
  return d.toISOString()
}

function emptyPayload(
  reason: string | null,
  from: string | null,
  to: string | null,
): MarkerPayPayload {
  return {
    generatedAt: new Date().toISOString(),
    storeAvailable: reason === null,
    note: reason,
    period: { from, to },
    totals: { markers: 0, approvedScripts: 0, goldScripts: 0, nonGoldScripts: 0, amountPence: 0 },
    markers: [],
  }
}

function escapeCsvField(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return ''
  let str = String(value)
  // Prevent CSV formula injection.
  if (/^[=+\-@]/.test(str)) str = `'${str}`
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

function toCsv(payload: MarkerPayPayload): string {
  const header = [
    'Marker',
    'Email',
    'Status',
    'Pay rate (pence/script)',
    'Approved scripts',
    'Gold',
    'Non-gold',
    'Amount (pence)',
    'Amount (GBP)',
  ]
  const lines = [header.map(escapeCsvField).join(',')]
  for (const m of payload.markers) {
    lines.push(
      [
        escapeCsvField(m.displayName),
        escapeCsvField(m.email),
        escapeCsvField(m.status),
        escapeCsvField(m.rateMissing ? '' : m.payRatePence),
        escapeCsvField(m.approvedScripts),
        escapeCsvField(m.goldScripts),
        escapeCsvField(m.nonGoldScripts),
        escapeCsvField(m.amountPence),
        escapeCsvField((m.amountPence / 100).toFixed(2)),
      ].join(','),
    )
  }
  lines.push(
    [
      escapeCsvField('TOTAL'),
      '',
      '',
      '',
      escapeCsvField(payload.totals.approvedScripts),
      escapeCsvField(payload.totals.goldScripts),
      escapeCsvField(payload.totals.nonGoldScripts),
      escapeCsvField(payload.totals.amountPence),
      escapeCsvField((payload.totals.amountPence / 100).toFixed(2)),
    ].join(','),
  )
  return lines.join('\r\n') + '\r\n'
}

export async function GET(request: NextRequest) {
  const fromParam = request.nextUrl.searchParams.get('from')
  const toParam = request.nextUrl.searchParams.get('to')
  const wantsCsv = request.nextUrl.searchParams.get('format') === 'csv'
  const fromIso = parseFrom(fromParam)
  const toExclusiveIso = parseToExclusive(toParam)
  // Echo the user-facing window (the inclusive `to` day, not the exclusive
  // instant) back in the payload.
  const toEchoIso = (() => {
    if (!toParam) return null
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(toParam.trim())
    if (!m) return null
    const d = new Date(`${m[1]}-${m[2]}-${m[3]}T00:00:00.000Z`)
    return Number.isNaN(d.getTime()) ? null : d.toISOString()
  })()

  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-marker-pay:${ip}`, { limit: 30, windowSeconds: 60 })
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

    // ── Markers ───────────────────────────────────────────────────────────
    const { data: markerData, error: markerErr } = await supabase
      .from('markers')
      .select('id, user_id, display_name, email, status, pay_rate_pence')
      .limit(5000)

    if (markerErr) {
      console.error('[admin/marker-pay] markers query failed', markerErr)
      const p = emptyPayload('Marker store unavailable', fromIso, toEchoIso)
      return wantsCsv ? csvResponse(p) : NextResponse.json(p)
    }

    const markers = (markerData ?? []) as MarkerRow[]
    if (markers.length === 0) {
      const p = emptyPayload(null, fromIso, toEchoIso)
      return wantsCsv ? csvResponse(p) : NextResponse.json(p)
    }

    // ── Submissions (gold flag + assigned marker) ─────────────────────────
    const { data: subData, error: subErr } = await supabase
      .from('marking_submissions')
      .select('id, assigned_marker_id, is_gold')
      .limit(100000)

    if (subErr) {
      console.error('[admin/marker-pay] submissions query failed', subErr)
      const p = emptyPayload('Marking store unavailable', fromIso, toEchoIso)
      return wantsCsv ? csvResponse(p) : NextResponse.json(p)
    }

    const submissions = (subData ?? []) as SubmissionRow[]
    const subById = new Map(submissions.map((s) => [s.id, s]))

    // ── Moderations in the window ─────────────────────────────────────────
    let modQuery = supabase
      .from('teacher_moderations')
      .select('submission_id, reviewer_user_id, decision, created_at')
      .order('created_at', { ascending: false })
      .limit(200000)
    if (fromIso) modQuery = modQuery.gte('created_at', fromIso)
    if (toExclusiveIso) modQuery = modQuery.lt('created_at', toExclusiveIso)

    const { data: modData, error: modErr } = await modQuery

    if (modErr) {
      console.error('[admin/marker-pay] moderations query failed', modErr)
      // Markers exist but no moderation history — every marker is 0 scripts.
      const p = zeroLines(markers, fromIso, toEchoIso, 'Moderation history unavailable')
      return wantsCsv ? csvResponse(p) : NextResponse.json(p)
    }

    const moderations = (modData ?? []) as ModerationRow[]

    // markers.user_id → marker (for reviewer_user_id attribution).
    const markerByUserId = new Map<string, MarkerRow>()
    for (const m of markers) {
      if (m.user_id) markerByUserId.set(m.user_id, m)
    }
    const markerById = new Map(markers.map((m) => [m.id, m]))

    // markerId → set of DISTINCT approved submission ids (dedupe across
    // multiple moderations and across both attribution paths).
    const approvedByMarker = new Map<string, Set<string>>()
    const ensure = (id: string) => {
      let s = approvedByMarker.get(id)
      if (!s) {
        s = new Set<string>()
        approvedByMarker.set(id, s)
      }
      return s
    }

    for (const mod of moderations) {
      const decision = (mod.decision ?? '').trim()
      if (!APPROVING_DECISIONS.has(decision)) continue
      const sub = subById.get(mod.submission_id)

      // Path 1: the marker who performed the review.
      if (mod.reviewer_user_id) {
        const reviewerMarker = markerByUserId.get(mod.reviewer_user_id)
        if (reviewerMarker) ensure(reviewerMarker.id).add(mod.submission_id)
      }
      // Path 2: the marker the script is assigned to (approving mod exists).
      if (sub?.assigned_marker_id && markerById.has(sub.assigned_marker_id)) {
        ensure(sub.assigned_marker_id).add(mod.submission_id)
      }
    }

    const lines: MarkerPayLine[] = markers
      .map((m) => {
        const ids = approvedByMarker.get(m.id) ?? new Set<string>()
        let gold = 0
        for (const sid of ids) {
          if (subById.get(sid)?.is_gold === true) gold++
        }
        const approved = ids.size
        const nonGold = approved - gold
        const rate = typeof m.pay_rate_pence === 'number' ? m.pay_rate_pence : null
        const amountPence = rate === null ? 0 : approved * rate
        return {
          markerId: m.id,
          displayName: m.display_name ?? '(unnamed marker)',
          email: m.email,
          status: m.status,
          payRatePence: rate,
          rateMissing: rate === null,
          approvedScripts: approved,
          goldScripts: gold,
          nonGoldScripts: nonGold,
          amountPence,
        }
      })
      // Most-paid first; then by script count; stable by name.
      .sort(
        (a, b) =>
          b.amountPence - a.amountPence ||
          b.approvedScripts - a.approvedScripts ||
          a.displayName.localeCompare(b.displayName),
      )

    const payload: MarkerPayPayload = {
      generatedAt: new Date().toISOString(),
      storeAvailable: true,
      note: null,
      period: { from: fromIso, to: toEchoIso },
      totals: {
        markers: lines.length,
        approvedScripts: lines.reduce((s, l) => s + l.approvedScripts, 0),
        goldScripts: lines.reduce((s, l) => s + l.goldScripts, 0),
        nonGoldScripts: lines.reduce((s, l) => s + l.nonGoldScripts, 0),
        amountPence: lines.reduce((s, l) => s + l.amountPence, 0),
      },
      markers: lines,
    }

    return wantsCsv ? csvResponse(payload) : NextResponse.json(payload)
  } catch (error) {
    console.error('[api/admin/marker-pay] Unexpected error:', error)
    const p = emptyPayload('Pay data temporarily unavailable', fromIso, toEchoIso)
    return wantsCsv ? csvResponse(p) : NextResponse.json(p)
  }
}

/** Markers exist but no moderation data — every line zeroed. */
function zeroLines(
  markers: MarkerRow[],
  from: string | null,
  to: string | null,
  note: string,
): MarkerPayPayload {
  const lines: MarkerPayLine[] = markers.map((m) => {
    const rate = typeof m.pay_rate_pence === 'number' ? m.pay_rate_pence : null
    return {
      markerId: m.id,
      displayName: m.display_name ?? '(unnamed marker)',
      email: m.email,
      status: m.status,
      payRatePence: rate,
      rateMissing: rate === null,
      approvedScripts: 0,
      goldScripts: 0,
      nonGoldScripts: 0,
      amountPence: 0,
    }
  })
  return {
    generatedAt: new Date().toISOString(),
    storeAvailable: true,
    note,
    period: { from, to },
    totals: {
      markers: lines.length,
      approvedScripts: 0,
      goldScripts: 0,
      nonGoldScripts: 0,
      amountPence: 0,
    },
    markers: lines,
  }
}

function csvResponse(payload: MarkerPayPayload): NextResponse {
  const stamp = new Date().toISOString().slice(0, 10)
  return new NextResponse(toCsv(payload), {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="marker-pay-${stamp}.csv"`,
      'Cache-Control': 'no-store',
    },
  })
}
