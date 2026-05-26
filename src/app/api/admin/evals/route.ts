// ─── Platform-admin - Marking eval scorecard ────────────────────────────────
// GET /api/admin/evals
//
// Site-admin only. Surfaces the OFFLINE Art. 15 eval harness's ratchet
// thresholds (read straight from evals/thresholds.json) alongside the SAME
// DB-derived score-agreement metrics, framed as a live "scorecard" against
// those bars.
//
// CRITICAL: this endpoint NEVER claims a certified accuracy figure. Production
// AI-vs-teacher deltas are an in-the-field signal, NOT the licensed,
// dual-marked, senior-adjudicated gold set the harness requires. We therefore
// always return `certifiable: false` with the protocol reason. (Mirrors the
// harness's own "MECHANICS CHECK ONLY / NOT A CERTIFIED ACCURACY RESULT"
// behaviour in evals/run.ts.)
//
// Does NOT execute the harness or import its server-heavy code - it only
// reads the JSON thresholds file and recomputes light metrics from the DB.
// EMPTY-TABLE SAFE: zeroed metrics, never a 500.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

const REAL_DATA_PROTOCOL = 'evals/datasets/REAL-DATA-PROTOCOL.md'
const NOT_CERTIFIABLE_REASON =
  'needs licensed real examiner data per evals/datasets/REAL-DATA-PROTOCOL.md'

interface Thresholds {
  version: number
  rationale: string
  minExactAgreement: number
  minAdjacentAgreement: number
  minQwk: number
  maxDisparityDelta: number
  maxGradeInstabilityRate: number
}

// Conservative fallback if the file cannot be read in the runtime sandbox -
// keeps the endpoint up; matches the committed evals/thresholds.json values.
const FALLBACK_THRESHOLDS: Thresholds = {
  version: 1,
  rationale:
    'Fallback copy of evals/thresholds.json - the on-disk file could not be read in this runtime. Values mirror the committed ratchet thresholds.',
  minExactAgreement: 0.6,
  minAdjacentAgreement: 0.95,
  minQwk: 0.7,
  maxDisparityDelta: 0.1,
  maxGradeInstabilityRate: 0.15,
}

interface ModerationRow {
  submission_id: string
  ai_score: number | null
  teacher_score: number | null
  created_at: string
}

const r3 = (n: number) => Math.round(n * 1000) / 1000

async function loadThresholds(): Promise<{ thresholds: Thresholds; source: string }> {
  try {
    const file = path.join(process.cwd(), 'evals', 'thresholds.json')
    const raw = await readFile(file, 'utf8')
    const parsed = JSON.parse(raw) as Thresholds
    return { thresholds: parsed, source: 'evals/thresholds.json' }
  } catch (err) {
    console.error('[api/admin/evals] thresholds.json unreadable, using fallback', err)
    return { thresholds: FALLBACK_THRESHOLDS, source: 'fallback (file unreadable)' }
  }
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-evals:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const { thresholds, source: thresholdsSource } = await loadThresholds()

    // ── Live, in-field score-agreement metrics (NOT a certified figure) ───
    let scoredPairs = 0
    let exactPct = 0
    let within1Pct = 0
    let within2Pct = 0
    let meanAbsError = 0
    let storeAvailable = true
    let note: string | null = null

    try {
      const supabase = createServiceRoleClient()

      // Denormalised ai_score on the submission as the fallback predictor.
      const { data: subData, error: subErr } = await supabase
        .from('marking_submissions')
        .select('id, ai_score')
        .limit(20000)

      if (subErr) {
        storeAvailable = false
        note = 'Marking store unavailable'
      } else {
        const aiScoreBySubmission = new Map<string, number | null>(
          (subData ?? []).map((s: { id: string; ai_score: number | null }) => [s.id, s.ai_score]),
        )

        const { data: modData, error: modErr } = await supabase
          .from('teacher_moderations')
          .select('submission_id, ai_score, teacher_score, created_at')
          .order('created_at', { ascending: false })
          .limit(50000)

        if (modErr) {
          note = 'Moderation history unavailable'
        } else {
          const latest = new Map<string, ModerationRow>()
          for (const m of (modData ?? []) as ModerationRow[]) {
            if (!latest.has(m.submission_id)) latest.set(m.submission_id, m)
          }

          const errs: number[] = []
          for (const [submissionId, mod] of latest) {
            const ai =
              typeof mod.ai_score === 'number'
                ? mod.ai_score
                : (aiScoreBySubmission.get(submissionId) ?? null)
            const teacher = typeof mod.teacher_score === 'number' ? mod.teacher_score : null
            if (ai !== null && teacher !== null) errs.push(Math.abs(ai - teacher))
          }

          scoredPairs = errs.length
          if (scoredPairs > 0) {
            meanAbsError = r3(errs.reduce((a, b) => a + b, 0) / scoredPairs)
            exactPct = r3(errs.filter((e) => e === 0).length / scoredPairs)
            within1Pct = r3(errs.filter((e) => e <= 1).length / scoredPairs)
            within2Pct = r3(errs.filter((e) => e <= 2).length / scoredPairs)
          }
        }
      }
    } catch (err) {
      console.error('[api/admin/evals] metric computation failed', err)
      storeAvailable = false
      note = 'Metrics temporarily unavailable'
    }

    // Scorecard: the field metric we *can* compute today vs the offline bars.
    // `pass: null` everywhere - a production proxy cannot pass→certify an
    // Art. 15 gate; only the licensed-data harness run can.
    const scorecard = [
      {
        metric: 'minExactAgreement',
        threshold: thresholds.minExactAgreement,
        fieldProxy: 'exact score match (|ai−teacher| = 0)',
        fieldValue: exactPct,
        pass: null as boolean | null,
      },
      {
        metric: 'minAdjacentAgreement',
        threshold: thresholds.minAdjacentAgreement,
        fieldProxy: 'within 1 mark (|ai−teacher| ≤ 1)',
        fieldValue: within1Pct,
        pass: null as boolean | null,
      },
      {
        metric: 'minQwk',
        threshold: thresholds.minQwk,
        fieldProxy: 'not derivable from field deltas (needs gold grades)',
        fieldValue: null as number | null,
        pass: null as boolean | null,
      },
      {
        metric: 'maxDisparityDelta',
        threshold: thresholds.maxDisparityDelta,
        fieldProxy: 'cohort slicing requires the gold dataset',
        fieldValue: null as number | null,
        pass: null as boolean | null,
      },
      {
        metric: 'maxGradeInstabilityRate',
        threshold: thresholds.maxGradeInstabilityRate,
        fieldProxy: 'test-retest only measurable in the offline LLM harness',
        fieldValue: null as number | null,
        pass: null as boolean | null,
      },
    ]

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      storeAvailable,
      note,

      // The non-negotiable honesty flag.
      certifiable: false,
      certifiableReason: NOT_CERTIFIABLE_REASON,
      realDataProtocol: REAL_DATA_PROTOCOL,
      banner:
        'NOT A CERTIFIED ACCURACY RESULT - these are in-field production deltas, ' +
        'not the licensed, dual-marked, senior-adjudicated gold set the EU AI ' +
        'Act Art. 15 harness requires. Certification requires running the ' +
        'offline LLM eval on real examiner data (see ' +
        REAL_DATA_PROTOCOL +
        ').',

      thresholds: {
        source: thresholdsSource,
        version: thresholds.version,
        rationale: thresholds.rationale,
        minExactAgreement: thresholds.minExactAgreement,
        minAdjacentAgreement: thresholds.minAdjacentAgreement,
        minQwk: thresholds.minQwk,
        maxDisparityDelta: thresholds.maxDisparityDelta,
        maxGradeInstabilityRate: thresholds.maxGradeInstabilityRate,
      },

      fieldMetrics: {
        scoredPairs,
        meanAbsError,
        exactPct,
        within1Pct,
        within2Pct,
      },

      scorecard,
    })
  } catch (error) {
    console.error('[api/admin/evals] Unexpected error:', error)
    return NextResponse.json(
      {
        generatedAt: new Date().toISOString(),
        storeAvailable: false,
        note: 'Eval scorecard temporarily unavailable',
        certifiable: false,
        certifiableReason: NOT_CERTIFIABLE_REASON,
        realDataProtocol: REAL_DATA_PROTOCOL,
        banner: 'NOT A CERTIFIED ACCURACY RESULT.',
        thresholds: { source: 'fallback', ...FALLBACK_THRESHOLDS },
        fieldMetrics: {
          scoredPairs: 0,
          meanAbsError: 0,
          exactPct: 0,
          within1Pct: 0,
          within2Pct: 0,
        },
        scorecard: [],
      },
      { status: 200 },
    )
  }
}
