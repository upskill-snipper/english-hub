// ─── GET /api/health/marking ─────────────────────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026, REL-9)
//
// `/api/health/ai` asks seven model ids to reply "ok" in 8 tokens. That proves
// a model id is callable and nothing else - it would have stayed green through
// a safety-layer refusal on benign exam prose, through `generateFeedback`
// failing to parse a response, and through a mark coming back outside the range
// the paper can award. All three break marking for every learner while the
// provider is perfectly healthy.
//
// This marks one fixed essay through the path learners actually use and reports
// WHERE it got to, so an alert names the failure rather than the symptom. See
// `@/lib/marking/health-probe` for what it does and does not replicate.
//
// COST. One real marking call per run, on a daily cron. Roughly a penny a week.
// The existing `/api/health/ai` cron already spends on seven calls a day, so
// this is the same category of spend, not a new one - but it is real spend on a
// schedule and should be said out loud rather than buried.
//
// IT REPORTS, IT DOES NOT PAGE. The route answers 200 with `ok: false` on a
// failed probe rather than 500. A health endpoint that returns 500 when the
// thing it monitors is broken is indistinguishable from a health endpoint that
// is itself broken, and the two want different responses from whoever is
// woken up.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { runMarkingProbe } from '@/lib/marking/health-probe'
import { authoriseCronRequest } from '@/lib/cron/auth'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET(request: NextRequest) {
  const auth = authoriseCronRequest(request, 'health/marking')
  if (!auth.ok) return auth.response

  const result = await runMarkingProbe()

  if (!result.ok) {
    // Loud in the log, because this is the line that would have made the two
    // model-retirement outages visible on the day rather than ten weeks later.
    console.error(
      `[health/marking] FAILED at stage=${result.stage} model=${result.model} ` +
        `scheme=${result.schemeId}/${result.questionId}: ${result.detail}`,
    )
  }

  return NextResponse.json({
    ok: result.ok,
    stage: result.stage,
    detail: result.detail,
    latencyMs: result.latencyMs,
    model: result.model,
    scheme: `${result.schemeId}/${result.questionId}`,
    ...(result.ok
      ? {
          totalMarks: result.totalMarks,
          maxMarks: result.maxMarks,
          predictedGrade: result.predictedGrade,
        }
      : {}),
    checkedAt: new Date().toISOString(),
  })
}
