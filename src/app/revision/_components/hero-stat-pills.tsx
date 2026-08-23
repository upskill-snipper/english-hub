'use client'

// Honest replacement for the three hardcoded hero pills that used to read
// "Target G7 · Predicted G6 · 9-day streak" for EVERY student and visitor,
// including brand-new 14-year-olds who had no target, no history and no
// streak. Fabricated attainment on a children's product is exactly what the
// no-fabrication doctrine forbids.
//
// This shows ONE pill, and only when it is genuinely the student's own value:
//   • the target grade they explicitly set in the Study Plan / grade picker.
// If no target is set we show a quiet link to set one rather than an invented
// number. Predicted grade and streak are deliberately NOT shown here: a
// trustworthy predicted grade needs real /api/profile/grade-progress data
// (surfaced inside the hub itself), and streaks are off by default for
// children (child-default streaks_enabled=false), so a hero pill would be
// wrong for most of the audience.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Target } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

const STUDY_PLAN_KEY = 'english-hub-study-plan'
const TARGET_GRADE_KEY = 'english-hub-target-grade'

/** Returns the grade the student explicitly set, or null if they never did. */
function readExplicitTargetGrade(): number | null {
  try {
    const direct = localStorage.getItem(TARGET_GRADE_KEY)
    if (direct) {
      const parsed = parseInt(direct, 10)
      if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= 9) return parsed
    }
    const plan = localStorage.getItem(STUDY_PLAN_KEY)
    if (plan) {
      const parsed = JSON.parse(plan) as { answers?: { grade?: string } }
      const g = parsed?.answers?.grade
      if (g === '4-5') return 5
      if (g === '6-7') return 7
      if (g === '8-9') return 9
    }
  } catch {
    // no-op: absent or malformed storage means "not set"
  }
  return null
}

export function HeroStatPills() {
  const t = useT()
  // Start null so server and first client render agree (no hydration flash),
  // then fill in from localStorage on the client.
  const [target, setTarget] = useState<number | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTarget(readExplicitTargetGrade())
    setReady(true)
  }, [])

  if (!ready) {
    // Reserve height so the layout does not jump once storage is read.
    return <div className="mt-4 h-7" aria-hidden="true" />
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {target !== null ? (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/50 px-3 py-1 text-xs">
          <Target className="size-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span className="font-semibold text-foreground">
            {t('revision_page.pill.target_grade')} {target}
          </span>
        </span>
      ) : (
        <Link
          href="/revision/study-plan"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-border"
        >
          <Target className="size-3" aria-hidden="true" />
          <span className="font-medium">{t('revision_page.pill.set_target')}</span>
        </Link>
      )}
    </div>
  )
}
