// ─── Platform-admin — Rubric version listing (read-only) ────────────────────
// GET /api/admin/rubrics            list rubric_versions (newest first)
//
// Site-admin only. Backed by src/lib/versioning/admin.ts (service-role; these
// tables are RLS deny-by-default). Rubrics are content-hash pointers to the
// in-code mark schemes — surfaced read-only with their content hash. Empty-
// table safe.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { verifyAdmin } from '@/lib/admin-auth'
import { listRubricVersions } from '@/lib/versioning/admin'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-rubrics-list:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const result = await listRubricVersions()
    return NextResponse.json({
      rubrics: result.data,
      storeAvailable: result.ok,
      note: result.ok ? null : (result.error ?? 'Versioning store unavailable'),
    })
  } catch (error) {
    console.error('[api/admin/rubrics GET] Unexpected error:', error)
    return NextResponse.json({ rubrics: [], storeAvailable: false, note: 'Unavailable' })
  }
}
