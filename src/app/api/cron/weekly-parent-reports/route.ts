/**
 * Weekly Parent Reports cron.
 *
 * Runs every Sunday at 16:00 UTC (`0 16 * * 0`). For every active
 * parent-child link, it:
 *
 *   1. Skips the child if they are under 13 (belt-and-braces - the platform
 *      already enforces ≥13 at registration).
 *   2. Skips if the child has `aiOptOut` or `profileVisibility = PRIVATE`
 *      (Children's Code §5 + §8).
 *   3. Pulls the child's essays and progress signals for the last 7 days.
 *   4. Calls the pure generator in `src/lib/parent-reports/generate.ts`.
 *   5. Persists the result to `WeeklyReport` - idempotent on
 *      `(studentId, weekStartsAt)` via a pre-check + unique-enough composite
 *      index (see prisma/schema.prisma `@@index([parentId, weekStarting])`).
 *   6. Sends a transactional email to the parent.
 *   7. Creates a mobile push notification via `/api/push/send`.
 *
 * Returns `{ ok, data: { generated, emailed, pushed, skipped } }` on success
 * and surfaces errors to Sentry through `runCron`.
 */

import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { runCron } from '@/lib/cron/observability'
import {
  generateWeeklyReport,
  type ReportChild,
  type ReportEssaySummary,
  type ReportProgress,
  type AssessmentObjective,
  type WeeklyReportPayload,
} from '@/lib/parent-reports/generate'
import { buildWeeklyParentReportEmail } from '@/emails/weekly-parent-report'

// ─── Constants ───────────────────────────────────────────────────────────

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000

// ─── Handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<Response> {
  // ── CRON_SECRET gate (timing-safe) ─────────────────────────────────
  const cronSecret = request.headers.get('x-cron-secret') ?? ''
  const expectedSecret = process.env.CRON_SECRET
  if (!expectedSecret) {
    console.error('[weekly-parent-reports] CRON_SECRET is not configured')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  if (
    cronSecret.length !== expectedSecret.length ||
    !crypto.timingSafeEqual(Buffer.from(cronSecret), Buffer.from(expectedSecret))
  ) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  return runCron('weekly-parent-reports', async () => {
    // Week boundary: the cron fires Sunday 16:00 UTC. The reporting window
    // we present to the parent is the Sunday-to-Sunday week that just ended.
    const now = new Date()
    const weekEndsAt = new Date(now.getTime())
    weekEndsAt.setUTCHours(0, 0, 0, 0)
    // If the cron runs slightly past midnight Sunday we still target the
    // Sunday that just began.
    const dayOfWeek = weekEndsAt.getUTCDay() // 0 = Sunday
    weekEndsAt.setUTCDate(weekEndsAt.getUTCDate() - dayOfWeek)
    const weekStartsAt = new Date(weekEndsAt.getTime() - SEVEN_DAYS_MS)

    // ── Enumerate active parent-child links ─────────────────────────
    //
    // We read from the canonical Prisma projection - `User.parentId` is the
    // authoritative pointer; the Supabase `parent_child_links` row is the
    // operational mirror (see `src/app/api/parent/README.md`).
    const parentChildPairs = await prisma.user.findMany({
      where: {
        role: 'STUDENT',
        parentId: { not: null },
        deletedAt: null,
        accountStatus: 'ACTIVE',
      },
      select: {
        id: true,
        firstName: true,
        dateOfBirth: true,
        parentId: true,
        privacySettings: {
          select: {
            aiOptOut: true,
            profileVisibility: true,
          },
        },
      },
    })

    let generated = 0
    let emailed = 0
    let pushed = 0
    const skipped: Record<string, number> = {
      underAge: 0,
      aiOptOut: 0,
      profilePrivate: 0,
      parentMissing: 0,
      alreadySent: 0,
      noDelivery: 0,
    }

    for (const child of parentChildPairs) {
      if (!child.parentId) {
        skipped.parentMissing++
        continue
      }

      // ── Build the ReportChild slice ──────────────────────────────
      const reportChild: ReportChild = {
        id: child.id,
        firstName: child.firstName,
        dateOfBirth: child.dateOfBirth,
        privacy: {
          aiOptOut: child.privacySettings?.aiOptOut ?? false,
          profileVisibility:
            (child.privacySettings?.profileVisibility as 'PRIVATE' | 'SCHOOL_ONLY' | 'PUBLIC') ??
            'PRIVATE',
        },
      }

      // ── Idempotency: have we already generated this week? ────────
      const existing = await prisma.weeklyReport.findFirst({
        where: {
          studentId: child.id,
          weekStarting: weekStartsAt,
        },
        select: { id: true },
      })
      if (existing) {
        skipped.alreadySent++
        continue
      }

      // ── Fetch essays + progress signals for the 7-day window ─────
      const [essayRows, assignmentsCount] = await Promise.all([
        prisma.essay.findMany({
          where: {
            userId: child.id,
            deletedAt: null,
            createdAt: { gte: weekStartsAt, lt: weekEndsAt },
          },
          select: {
            id: true,
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
        }),
        prisma.assignmentSubmission.count({
          where: {
            studentId: child.id,
            status: 'GRADED',
            gradedAt: { gte: weekStartsAt, lt: weekEndsAt },
          },
        }),
      ])

      const essays: ReportEssaySummary[] = essayRows.map((row) => {
        const f = row.aiFeedback
        const aoScores: Partial<Record<AssessmentObjective, number>> = {}
        if (f) {
          // Mapping: grammar → AO1, structure → AO2, argument → AO3, vocabulary → AO4.
          // See generator doc for justification.
          if (typeof f.grammarScore === 'number') aoScores.AO1 = f.grammarScore
          if (typeof f.structureScore === 'number') aoScores.AO2 = f.structureScore
          if (typeof f.argumentScore === 'number') aoScores.AO3 = f.argumentScore
          if (typeof f.vocabularyScore === 'number') aoScores.AO4 = f.vocabularyScore
        }
        return {
          id: row.id,
          subject: row.subject,
          createdAt: row.createdAt,
          overallScore: f?.overallScore ?? null,
          aoScores,
        }
      })

      // Derive streak + time-spent from essay timestamps. This is a
      // conservative proxy - a dedicated Progress table is deferred
      // (see SHARED-CONTEXT.md; no `Progress` model exists yet).
      const progress: ReportProgress = computeProgress(
        essayRows.map((e) => e.createdAt),
        assignmentsCount,
        weekStartsAt,
        weekEndsAt,
      )

      // ── Generate ──────────────────────────────────────────────────
      const result = generateWeeklyReport(reportChild, essays, progress, {
        weekStartsAt,
        weekEndsAt,
      })

      if (!result.ok) {
        if (result.reason === 'CHILD_UNDER_13') skipped.underAge++
        else if (result.reason === 'AI_OPT_OUT') skipped.aiOptOut++
        else if (result.reason === 'PROFILE_PRIVATE') skipped.profilePrivate++
        continue
      }

      // ── Persist WeeklyReport (idempotent) ────────────────────────
      const payload = result.report
      try {
        await prisma.weeklyReport.create({
          data: {
            parentId: child.parentId,
            studentId: child.id,
            weekStarting: weekStartsAt,
            essaysCompleted: payload.essaysCompleted,
            totalTimeSpent: payload.timeSpentMinutes,
            averageScore: payload.averageScore,
            // `projectedGrade` is intentionally null - §8 minimisation.
            projectedGrade: null,
            strengths: payload.strengths as unknown as object,
            weaknesses: payload.focusAreas as unknown as object,
            recommendations: payload.suggestion
              ? ([payload.suggestion] as unknown as object)
              : ([] as unknown as object),
          },
        })
        generated++
      } catch (err) {
        // Another cron replica may have just inserted the same row - treat
        // as benign idempotency and move on.
        console.warn('[weekly-parent-reports] persist failed (likely duplicate)', {
          studentId: child.id,
          error: err instanceof Error ? err.message : String(err),
        })
        skipped.alreadySent++
        continue
      }

      // ── Fetch parent details for delivery ────────────────────────
      const parent = await prisma.user.findUnique({
        where: { id: child.parentId },
        select: { id: true, email: true, firstName: true },
      })
      if (!parent || !parent.email) {
        skipped.noDelivery++
        continue
      }

      // ── Email ─────────────────────────────────────────────────────
      const { subject, html, text } = buildWeeklyParentReportEmail({
        parentFirstName: parent.firstName,
        parentEmail: parent.email,
        report: payload,
      })
      const emailResult = await sendEmail(parent.email, subject, html, text)
      if (emailResult.success) {
        emailed++
      } else {
        console.warn('[weekly-parent-reports] email send failed', {
          parentId: parent.id,
          error: emailResult.error,
        })
      }

      // ── Push notification ────────────────────────────────────────
      const pushResult = await sendPushToParent(parent.id, payload, expectedSecret)
      if (pushResult) pushed++
    }

    return { generated, emailed, pushed, skipped }
  })
}

// ─── Helpers ─────────────────────────────────────────────────────────────

/**
 * Derive coarse progress signals from essay timestamps. Returns conservative
 * values - a dedicated progress table would be stronger, but this keeps the
 * report truthful without over-collecting.
 */
function computeProgress(
  essayDates: readonly Date[],
  assignmentsCount: number,
  weekStartsAt: Date,
  weekEndsAt: Date,
): ReportProgress {
  if (essayDates.length === 0) {
    return {
      timeSpentMinutes: 0,
      streakDays: 0,
      assignmentsCompleted: assignmentsCount,
      streakBrokenMidWeek: false,
    }
  }

  // Unique active days (UTC).
  const days = new Set<string>()
  for (const d of essayDates) {
    days.add(d.toISOString().slice(0, 10))
  }
  const activeDayCount = days.size

  // Check for a mid-week break (any gap day with essays on either side).
  const sortedDays = Array.from(days).sort()
  let streakBroken = false
  for (let i = 1; i < sortedDays.length; i++) {
    const prev = new Date(`${sortedDays[i - 1]}T00:00:00.000Z`).getTime()
    const curr = new Date(`${sortedDays[i]}T00:00:00.000Z`).getTime()
    if ((curr - prev) / (24 * 60 * 60 * 1000) > 1) {
      streakBroken = true
      break
    }
  }

  // 20 minutes per essay as a deliberately conservative floor; the real
  // number should come from a session-log table once added.
  const timeSpentMinutes = essayDates.length * 20

  return {
    timeSpentMinutes,
    streakDays: activeDayCount,
    assignmentsCompleted: assignmentsCount,
    streakBrokenMidWeek: streakBroken,
  }
}

/**
 * Fire-and-forget push notification via the internal `/api/push/send` route.
 * Failures are swallowed (logged) - email remains the canonical channel.
 */
async function sendPushToParent(
  parentId: string,
  report: WeeklyReportPayload,
  cronSecret: string,
): Promise<boolean> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://theenglishhub.app'
  try {
    const res = await fetch(`${baseUrl}/api/push/send`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-cron-secret': cronSecret,
      },
      body: JSON.stringify({
        userId: parentId,
        title: 'Weekly update',
        body: `${report.childFirstName}\u2019s weekly summary is ready.`,
        deepLink: `theenglishhub://parent/child/${report.childId}`,
        data: { kind: 'weekly-parent-report', childId: report.childId },
      }),
    })
    return res.ok
  } catch (err) {
    console.warn('[weekly-parent-reports] push fan-out failed', {
      parentId,
      error: err instanceof Error ? err.message : String(err),
    })
    return false
  }
}
