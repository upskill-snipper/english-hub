// Server component wrapper for the /school/lessons listing page.
//
// The heavy lesson-plan barrel (74 files, ~3.4 MB) is imported here on the
// server via `@/data/lesson-plans/metadata`. We project each LessonPlan down
// to an 11-field metadata shape BEFORE crossing the RSC boundary - the
// client island (`LessonsListClient`) only ever receives the projection, so
// the content fields (`objectives`, `mainActivities`, `worksheetQuestions`,
// `teacherNotes`, etc.) never reach the browser bundle.

import { headers } from 'next/headers'

import LessonsListClient from '@/components/school/LessonsListClient'
import {
  ALL_LESSON_METADATA,
  recommendLessonsMetadata,
  type LessonPlanMetadata,
} from '@/data/lesson-plans/metadata'
import type { Locale } from '@/lib/i18n/dictionary'
import { tSync } from '@/lib/i18n/t'

// Pre-compute filter-dropdown option lists server-side so the client doesn't
// need to scan the full array just to populate the <Select> components.
const ALL_SKILLS: string[] = Array.from(
  new Set(ALL_LESSON_METADATA.flatMap((lp) => lp.targetedSkills)),
).sort()

const ALL_TEXT_LABELS: string[] = Array.from(
  new Set(ALL_LESSON_METADATA.map((lp) => lp.textLabel)),
).sort()

// ── Analytics-driven recommendations (server-side fetch) ────────────────────

interface WeakArea {
  module_name?: string
  course_name?: string
  severity?: string
  students_below_threshold?: number
  avg_score?: number
}

interface ClassOverview {
  weak_areas?: WeakArea[]
}

async function fetchRecommendations(): Promise<{
  recommended: LessonPlanMetadata[]
  reasons: Record<string, string>
}> {
  try {
    // Reconstruct the same absolute URL the old client-side fetch used,
    // anchored to the current request's host so cookies still scope correctly.
    const h = await headers()
    const host = h.get('host')
    const proto = h.get('x-forwarded-proto') ?? 'http'
    const cookie = h.get('cookie') ?? ''
    // Resolve the active locale once so all reason strings render in the
    // same language. Middleware stamps `x-lang` on every request.
    const locale: Locale = h.get('x-lang') === 'ar' ? 'ar' : 'en'
    if (!host) return { recommended: [], reasons: {} }

    const res = await fetch(`${proto}://${host}/api/school/overview`, {
      headers: { cookie },
      cache: 'no-store',
    })
    if (!res.ok) return { recommended: [], reasons: {} }

    const data = await res.json()
    const classes: ClassOverview[] = data.overview?.classes ?? []

    // Collect all weak areas across classes
    const weakAreaLabels: string[] = []
    const reasonMap: Record<string, string> = {}

    for (const cls of classes) {
      for (const area of cls.weak_areas ?? []) {
        if (area.severity === 'critical' || area.severity === 'warning') {
          const label = area.module_name ?? area.course_name
          if (label) weakAreaLabels.push(label)
        }
      }
    }

    const uniqueAreas = Array.from(new Set(weakAreaLabels))
    const recommended = recommendLessonsMetadata(uniqueAreas, 'AQA', 6)

    // Pre-resolve the templates once per request - `tSync` is just a
    // dictionary lookup, but pulling it out of the inner loop keeps
    // intent clear and avoids redundant work for large weak-area sets.
    const weakAreaTemplate = tSync('school.lessons.reason.weak_area', locale)
    const genericReason = tSync('school.lessons.reason.generic', locale)

    // Build reason strings
    for (const cls of classes) {
      for (const area of cls.weak_areas ?? []) {
        if (area.severity !== 'critical' && area.severity !== 'warning') continue
        const areaLabel = `${area.module_name ?? area.course_name}`
        const areaText = areaLabel.toLowerCase()
        for (const lp of recommended) {
          if (reasonMap[lp.id]) continue
          const skillMatch = lp.targetedSkills.some(
            (s) => s.toLowerCase().includes(areaText) || areaText.includes(s.toLowerCase()),
          )
          const keywordMatch = lp.keywords.some((k) => areaText.includes(k.toLowerCase()))
          if (skillMatch || keywordMatch) {
            reasonMap[lp.id] = weakAreaTemplate
              .replace('{count}', String(area.students_below_threshold ?? 0))
              .replace('{area}', areaLabel)
              .replace('{avg}', String(Math.round(area.avg_score ?? 0)))
          }
        }
      }
    }

    // Generic reason for anything unmatched
    for (const lp of recommended) {
      if (!reasonMap[lp.id]) {
        reasonMap[lp.id] = genericReason
      }
    }

    return { recommended, reasons: reasonMap }
  } catch {
    return { recommended: [], reasons: {} }
  }
}

export default async function LessonPlansPage() {
  const { recommended, reasons } = await fetchRecommendations()

  return (
    <LessonsListClient
      lessons={ALL_LESSON_METADATA}
      recommendedLessons={recommended}
      recommendReasons={reasons}
      allSkills={ALL_SKILLS}
      allTextLabels={ALL_TEXT_LABELS}
    />
  )
}
