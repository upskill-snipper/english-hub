/**
 * Weekly Student Reports cron.
 *
 * Sends a digest email directly to active students summarising their last 7
 * days. Distinct from `weekly-reports` (parents, opted-in) and
 * `weekly-parent-reports` (parents, derived from child essays). Spec:
 *
 *   • Auth — `Authorization: Bearer ${CRON_SECRET}` (timing-safe).
 *   • Audience — `User.role === 'STUDENT'`, active, not soft-deleted, with
 *     `PrivacySettings.marketingEnabled === true`. Children (<13) are
 *     additionally excluded unless they have explicit email consent
 *     (Children's Code §5: marketing OFF by default for under-13s).
 *   • Recency gate — at least one essay in the last 7 days.
 *   • Streaks — only included when streaks are enabled (children: NEVER —
 *     streak mechanics fall under the Children's Code §11 "detrimental use"
 *     guidance and we suppress them entirely for under-18s).
 *   • Recommendations — only when `PrivacySettings.aiOptOut === false`.
 *   • Delivery — Resend, batches of 50, 1s spacing between batches.
 *
 * Returns `{ sent, skipped, errors }` (HTTP 200 even on partial failures —
 * caller can introspect `errors[]` for follow-up).
 *
 * Suggested Vercel Cron entry (orchestrator owns vercel.json):
 *
 *     {
 *       "path": "/api/cron/weekly-student-reports",
 *       "schedule": "0 17 * * 0"
 *     }
 *
 * (Sunday 17:00 UTC — one hour after weekly-parent-reports so the parent
 * digest lands first in shared family inboxes.)
 */

import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

import { prisma } from '@/lib/prisma'
import { sendViaResend } from '@/lib/email/resend'
import {
  renderWeeklyStudentEmail,
  renderWeeklyStudentText,
  type WeeklyStudentQuizScore,
} from '@/lib/email/templates/weekly-student'

// ─── Constants ───────────────────────────────────────────────────────────

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000
const BATCH_SIZE = 50
const BATCH_SPACING_MS = 1000
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://theenglishhub.app'

// ─── Types ───────────────────────────────────────────────────────────────

interface CronResult {
  sent: number
  skipped: number
  errors: string[]
}

// ─── Handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<Response> {
  // ── Auth: Authorization: Bearer <CRON_SECRET> (timing-safe) ─────────
  const expected = process.env.CRON_SECRET
  if (!expected) {
    console.error('[weekly-student-reports] CRON_SECRET is not configured')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const auth = request.headers.get('authorization') ?? ''
  const provided = auth.startsWith('Bearer ') ? auth.slice('Bearer '.length) : ''
  if (
    provided.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(expected))
  ) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const result: CronResult = { sent: 0, skipped: 0, errors: [] }
  const startedAt = Date.now()

  try {
    // ── Pull candidate students ──────────────────────────────────────
    //
    // We require:
    //   • role === STUDENT
    //   • accountStatus ACTIVE
    //   • not soft-deleted
    //   • PrivacySettings.marketingEnabled = true (this is OFF by default
    //     for children per Children's Code, so the same filter naturally
    //     excludes under-13s without explicit consent).
    const students = await prisma.user.findMany({
      where: {
        role: 'STUDENT',
        accountStatus: 'ACTIVE',
        deletedAt: null,
        privacySettings: { marketingEnabled: true },
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        dateOfBirth: true,
        isMinor: true,
        privacySettings: {
          select: {
            aiOptOut: true,
            marketingEnabled: true,
          },
        },
      },
    })

    // ── Build digests in series, send in batches ─────────────────────
    const sendable: Array<{
      to: string
      subject: string
      html: string
      text: string
      userId: string
    }> = []

    const now = new Date()
    const windowStart = new Date(now.getTime() - SEVEN_DAYS_MS)

    for (const student of students) {
      try {
        // Belt-and-braces email check (PrivacySettings could be null in
        // theory if seed data is incomplete).
        if (!student.email) {
          result.skipped++
          continue
        }
        if (!student.privacySettings?.marketingEnabled) {
          result.skipped++
          continue
        }

        const ageYears = ageInYears(student.dateOfBirth, now)
        const isChild = ageYears < 13 || student.isMinor

        // Children's Code: under-13 marketing is OFF by default. The
        // marketingEnabled gate above already enforces this — if a child
        // has it on, their guardian explicitly opted in. We still suppress
        // streaks and limit suggestion text for any minor.
        const streaksEnabled = !isChild
        const recommendationsEnabled = !student.privacySettings.aiOptOut && !isChild

        // ── Activity check: at least one essay in the last 7 days ────
        const recentEssays = await prisma.essay.findMany({
          where: {
            userId: student.id,
            deletedAt: null,
            createdAt: { gte: windowStart, lt: now },
          },
          select: {
            id: true,
            title: true,
            subject: true,
            createdAt: true,
            aiFeedback: {
              select: {
                overallScore: true,
                grammarScore: true,
                structureScore: true,
                argumentScore: true,
                vocabularyScore: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
        })

        if (recentEssays.length === 0) {
          result.skipped++
          continue
        }

        // ── Streak: count distinct active days (UTC) in the window ───
        let streakDays: number | null = null
        if (streaksEnabled) {
          const days = new Set<string>()
          for (const e of recentEssays) {
            days.add(e.createdAt.toISOString().slice(0, 10))
          }
          streakDays = days.size
        }

        // ── Top 3 "quiz" scores — until a Quiz model lands, AIFeedback
        // overall scores are the closest signal of scored activity.
        const topQuizzes: WeeklyStudentQuizScore[] = recentEssays
          .filter((e) => typeof e.aiFeedback?.overallScore === 'number')
          .map((e) => ({
            title: e.title || `${e.subject} essay`,
            score: e.aiFeedback!.overallScore,
            takenAt: e.createdAt.toISOString(),
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 3)

        // ── Focus recommendation: pick the lowest AO-aligned subscore
        // across the week and surface a generic prompt. We deliberately
        // avoid grade predictions (Children's Code data minimisation).
        const focusRecommendation = recommendationsEnabled
          ? deriveFocusRecommendation(recentEssays)
          : null

        const dashboardUrl = `${SITE_URL}/dashboard`
        const unsubscribeUrl = `${SITE_URL}/dashboard/settings`

        const html = await renderWeeklyStudentEmail({
          firstName: student.firstName,
          streakDays,
          topQuizzes,
          focusRecommendation,
          dashboardUrl,
          unsubscribeUrl,
        })
        const text = renderWeeklyStudentText({
          firstName: student.firstName,
          streakDays,
          topQuizzes,
          focusRecommendation,
          dashboardUrl,
          unsubscribeUrl,
        })

        sendable.push({
          to: student.email,
          subject: 'Your week on The English Hub',
          html,
          text,
          userId: student.id,
        })
      } catch (perStudentErr) {
        result.errors.push(`prep ${student.id}: ${errMessage(perStudentErr)}`)
        result.skipped++
      }
    }

    // ── Dispatch in batches of 50 with 1s spacing ────────────────────
    for (let i = 0; i < sendable.length; i += BATCH_SIZE) {
      const batch = sendable.slice(i, i + BATCH_SIZE)
      const outcomes = await Promise.all(
        batch.map(async (msg) => {
          const r = await sendViaResend({
            to: msg.to,
            subject: msg.subject,
            html: msg.html,
            text: msg.text,
            tags: [
              { name: 'category', value: 'student' },
              { name: 'event', value: 'weekly-digest' },
            ],
          })
          return { msg, r }
        }),
      )
      for (const { msg, r } of outcomes) {
        if (r.sent) {
          result.sent++
        } else {
          result.skipped++
          result.errors.push(`send ${msg.userId}: ${r.reason}${r.detail ? ` — ${r.detail}` : ''}`)
        }
      }
      const isLastBatch = i + BATCH_SIZE >= sendable.length
      if (!isLastBatch) {
        await sleep(BATCH_SPACING_MS)
      }
    }

    console.info('[weekly-student-reports] complete', {
      durationMs: Date.now() - startedAt,
      candidates: students.length,
      ...result,
      errorSample: result.errors.slice(0, 5),
    })

    return NextResponse.json(result, { status: 200 })
  } catch (err) {
    // Surface the failure to the caller but preserve any partial work.
    result.errors.push(`fatal: ${errMessage(err)}`)
    console.error('[weekly-student-reports] FAILED', {
      durationMs: Date.now() - startedAt,
      error: err,
    })
    return NextResponse.json(result, { status: 500 })
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function ageInYears(dob: Date, now: Date): number {
  let years = now.getUTCFullYear() - dob.getUTCFullYear()
  const m = now.getUTCMonth() - dob.getUTCMonth()
  if (m < 0 || (m === 0 && now.getUTCDate() < dob.getUTCDate())) {
    years--
  }
  return years
}

interface EssayWithFeedback {
  aiFeedback: {
    grammarScore: number
    structureScore: number
    argumentScore: number
    vocabularyScore: number
  } | null
}

/**
 * Derive a one-line "Focus on X" suggestion from the week's lowest AO score.
 * Returns null when there's no scored feedback to learn from.
 */
function deriveFocusRecommendation(essays: readonly EssayWithFeedback[]): string | null {
  const totals = { grammar: 0, structure: 0, argument: 0, vocabulary: 0 }
  let count = 0
  for (const e of essays) {
    if (!e.aiFeedback) continue
    totals.grammar += e.aiFeedback.grammarScore
    totals.structure += e.aiFeedback.structureScore
    totals.argument += e.aiFeedback.argumentScore
    totals.vocabulary += e.aiFeedback.vocabularyScore
    count++
  }
  if (count === 0) return null

  const averages = [
    { key: 'grammar', value: totals.grammar / count },
    { key: 'structure', value: totals.structure / count },
    { key: 'argument', value: totals.argument / count },
    { key: 'vocabulary', value: totals.vocabulary / count },
  ] as const

  const lowest = averages.reduce((a, b) => (b.value < a.value ? b : a))

  switch (lowest.key) {
    case 'grammar':
      return 'Grammar — try one timed paragraph this week paying close attention to punctuation and tense.'
    case 'structure':
      return 'Structure — practise opening with a clear thesis and signposting each paragraph.'
    case 'argument':
      return 'Argument — back each point with a quotation and a why-it-matters sentence.'
    case 'vocabulary':
      return 'Vocabulary — pick three new words from your reading and use them in your next essay.'
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function errMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err)
}
