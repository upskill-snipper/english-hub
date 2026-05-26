import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'

// GET /api/profile/grade-progress
//
// Returns the current user's aggregate performance score, derived from
// quiz_responses (Supabase table, 0-100 correct rate) and AIFeedback
// (Prisma AIFeedback.overallScore, already on a 0-100 scale). The
// Your Hub sidebar consumes this to fill the target-grade progress bar.
//
// Shape:
//   {
//     avgScore: number | null,          // 0-100, null if no data
//     sources: {
//       quiz:  { count, correctRate, weight },
//       essay: { count, avgScore,   weight },
//     },
//     totalSamples: number,
//   }
//
// Weighting: essays and quizzes are blended by their own sample size
// so small cohorts don't dominate. A single essay won't wipe out 50
// quiz responses, and vice versa. Minimum 3 total samples before
// avgScore is returned (otherwise null → client renders empty-state).

const MIN_SAMPLES = 3

export async function GET() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user || !user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ── Quiz sample (Supabase) ──────────────────────────────────────────
  const { data: quizRows, error: quizErr } = await supabase
    .from('quiz_responses')
    .select('is_correct')
    .eq('user_id', user.id)
    .limit(500) // cap to keep the read bounded; newer 500 is enough for trend

  if (quizErr) {
    console.error('[grade-progress] quiz query failed:', quizErr)
  }

  const quizCount = quizRows?.length ?? 0
  const quizCorrect = (quizRows ?? []).filter((r) => r.is_correct).length
  const quizCorrectRate = quizCount > 0 ? (quizCorrect / quizCount) * 100 : null

  // ── Essay sample (Prisma) ───────────────────────────────────────────
  // Match the Prisma User by supabaseUserId (preferred) or email fallback
  // - same pattern as Identity PR-3. Tolerate the user not having a
  // Prisma row (e.g. pre-backfill edge case) without throwing.
  let essayCount = 0
  let essayAvgScore: number | null = null
  try {
    const prismaUser = await prisma.user.findFirst({
      where: {
        OR: [{ supabaseUserId: user.id }, { email: user.email.toLowerCase() }],
      },
      select: { id: true },
    })
    if (prismaUser) {
      const feedback = await prisma.aIFeedback.findMany({
        where: { essay: { userId: prismaUser.id, deletedAt: null } },
        select: { overallScore: true },
        orderBy: { createdAt: 'desc' },
        take: 50,
      })
      essayCount = feedback.length
      if (essayCount > 0) {
        const sum = feedback.reduce((acc, f) => acc + f.overallScore, 0)
        essayAvgScore = sum / essayCount
      }
    }
  } catch (e) {
    console.error('[grade-progress] essay query failed:', e)
  }

  const totalSamples = quizCount + essayCount
  if (totalSamples < MIN_SAMPLES) {
    return NextResponse.json({
      avgScore: null,
      sources: {
        quiz: { count: quizCount, correctRate: quizCorrectRate, weight: 0 },
        essay: { count: essayCount, avgScore: essayAvgScore, weight: 0 },
      },
      totalSamples,
    })
  }

  // ── Blend ───────────────────────────────────────────────────────────
  // Weight each source by its sample size so neither dominates. If a
  // source has 0 samples its weight is 0 and it drops out of the avg.
  const quizWeight = quizCorrectRate !== null ? quizCount : 0
  const essayWeight = essayAvgScore !== null ? essayCount : 0
  const weightSum = quizWeight + essayWeight
  const avgScore =
    weightSum > 0
      ? ((quizCorrectRate ?? 0) * quizWeight + (essayAvgScore ?? 0) * essayWeight) / weightSum
      : null

  return NextResponse.json({
    avgScore,
    sources: {
      quiz: { count: quizCount, correctRate: quizCorrectRate, weight: quizWeight },
      essay: { count: essayCount, avgScore: essayAvgScore, weight: essayWeight },
    },
    totalSamples,
  })
}
