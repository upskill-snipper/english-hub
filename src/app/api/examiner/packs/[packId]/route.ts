import { NextResponse, type NextRequest } from 'next/server'
import { getExaminerPack } from '@/lib/marking/examiner/registry'

// ─── GET /api/examiner/packs/[packId] ───────────────────────────────────────
// One full examiner pack: grids, gates, triggers, anchors, phrase bank and the
// examiner briefing. Plain data, no user content, so it is cacheable. The
// briefing is included deliberately - a teacher may read exactly what the
// model is told before trusting a mark, which is the AI-transparency position
// the product takes everywhere else.
// ────────────────────────────────────────────────────────────────────────────

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET(_request: NextRequest, context: { params: Promise<{ packId: string }> }) {
  const { packId } = await context.params
  const pack = getExaminerPack(packId)
  if (!pack) {
    return NextResponse.json({ error: 'Unknown pack' }, { status: 404 })
  }
  return NextResponse.json(
    { pack },
    { headers: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400' } },
  )
}
