import { NextResponse } from 'next/server'
import { listExaminerPacks } from '@/lib/marking/examiner/registry'

// ─── GET /api/examiner/packs ────────────────────────────────────────────────
// The pack picker: every board and paper the examiner tool can mark against,
// exemplar-derived packs first. Public and cacheable: it is a list of exam
// papers, not user data, and the full pack (grids, gates, briefing) is fetched
// separately per paper so the browser never loads the whole corpus.
// ────────────────────────────────────────────────────────────────────────────

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET() {
  return NextResponse.json(
    { packs: listExaminerPacks() },
    { headers: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400' } },
  )
}
