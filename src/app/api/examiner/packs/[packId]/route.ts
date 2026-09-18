import { NextResponse, type NextRequest } from 'next/server'
import { getExaminerPack } from '@/lib/marking/examiner/registry'
import { anchorsForQuestion, summariseCalibration } from '@/lib/marking/examiner/calibration'
import type { ExaminerAnchor } from '@/lib/marking/examiner/calibration'

// ─── GET /api/examiner/packs/[packId] ───────────────────────────────────────
// One full examiner pack: grids, gates, triggers, anchors, phrase bank and the
// examiner briefing. Plain data, no user content, so it is cacheable. The
// briefing is included deliberately - a teacher may read exactly what the
// model is told before trusting a mark, which is the AI-transparency position
// the product takes everywhere else.
//
// The standardisation ladder is served with it: the marks real examiners
// awarded on this paper and the reasons they gave. A teacher standardising
// their own department wants exactly that table, and it is the same data the
// marking prompt is calibrated on, so what the teacher reads is what the model
// was told.
// ────────────────────────────────────────────────────────────────────────────

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET(_request: NextRequest, context: { params: Promise<{ packId: string }> }) {
  const { packId } = await context.params
  const pack = getExaminerPack(packId)
  if (!pack) {
    return NextResponse.json({ error: 'Unknown pack' }, { status: 404 })
  }
  const anchors: Record<string, ExaminerAnchor[]> = {}
  for (const q of pack.questions) {
    const found = anchorsForQuestion(packId, q.id)
    if (found.length) anchors[q.id] = found
  }

  return NextResponse.json(
    { pack, calibration: { sources: summariseCalibration(packId), anchors } },
    { headers: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400' } },
  )
}
