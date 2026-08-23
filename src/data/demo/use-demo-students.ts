'use client'

import { useEffect, useState } from 'react'
import type { DemoStudent } from './types'

// Module-scope cache. The dynamic import itself is cached by the bundler, but
// holding the resolved array here means a second demo detail page renders its
// content on the first paint instead of flashing the loading state again.
let cachedStudents: DemoStudent[] | null = null

/**
 * Lazily loads the full demo student roster.
 *
 * The defect this fixes: `src/data/demo/students-detail.ts` is ~320 KB of static
 * data, and importing it at module scope from a 'use client' page put the whole
 * roster into that route's First Load JS. Around 19 demo pages did that, so a
 * prospective school clicking through from a sales email downloaded the entire
 * roster on every screen, including the many that only render list rows and
 * roll-ups. Those surfaces now use DEMO_STUDENT_INDEX; only screens that really
 * render a student's essays, mocks, quizzes, modules or activity call this hook,
 * and the roster arrives as a separate async chunk.
 *
 * Returns `students: null` while loading. On failure it returns `failed: true`
 * and never substitutes placeholder records - callers must render an honest
 * error state rather than invented data.
 */
export function useDemoStudents(): { students: DemoStudent[] | null; failed: boolean } {
  const [students, setStudents] = useState<DemoStudent[] | null>(cachedStudents)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (cachedStudents) return
    let cancelled = false
    import('./students-detail')
      .then((mod) => {
        cachedStudents = mod.DEMO_STUDENTS
        if (!cancelled) setStudents(mod.DEMO_STUDENTS)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { students, failed }
}
