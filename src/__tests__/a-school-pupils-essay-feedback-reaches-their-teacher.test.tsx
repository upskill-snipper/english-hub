import { describe, it, expect, vi, beforeEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'

/**
 * A school pupil's essay feedback goes where their teacher can see it
 * (12 October 2026).
 *
 * The standalone AI essay feedback (/dashboard/essay-feedback, and the inline
 * panel on /practice and in the Mock Exam Mode) stores its result in the
 * Prisma Essay table, which no school surface reads. Once a school's live
 * access opened the paywall for its pupils, it would have given them AI marks
 * no teacher could see, against Calum's decision that the teacher reviews a
 * school pupil's AI feedback. The smaller, safer fix was taken: hide those
 * entry points from school pupils and point them to Mark an essay, with
 * /api/essay-feedback refusing them as a backstop (essay-feedback-route.test.ts).
 *
 * Rendered with renderToStaticMarkup in the node environment.
 */

vi.mock('@/lib/i18n/use-t', () => ({ useT: () => (key: string) => key }))

let access: { premium: boolean; schoolPupil: boolean } | null = null
vi.mock('@/hooks/usePaidAccess', () => ({ usePaidAccess: () => access }))

import EssayFeedbackInline from '@/components/EssayFeedbackInline'
import { SchoolMarkingRedirect } from '@/components/marking/SchoolMarkingRedirect'
import {
  isSchoolMarkingRefusal,
  SCHOOL_MARKING_PATH,
  SCHOOL_MARKING_ROUTE_CODE,
} from '@/lib/marking/school-route'

function panel() {
  return renderToStaticMarkup(
    <EssayFeedbackInline
      board="AQA"
      paper="Paper 1"
      questionType="Essay"
      questionText="How does Shakespeare present ambition?"
    />,
  )
}

beforeEach(() => {
  access = null
})

describe('the inline essay feedback panel (practice and Mock Exam Mode)', () => {
  it('is replaced, for a school pupil, by a pointer to Mark an essay', () => {
    access = { premium: true, schoolPupil: true }
    const html = panel()
    expect(html).toContain('data-testid="school-marking"')
    expect(html).toContain(`href="${SCHOOL_MARKING_PATH}"`)
    expect(html).not.toContain('marking.essay_feedback_title')
  })

  it('is unchanged for anyone else', () => {
    access = { premium: true, schoolPupil: false }
    const html = panel()
    expect(html).toContain('marking.essay_feedback_title')
    expect(html).not.toContain('data-testid="school-marking"')
  })

  it('shows as before while the answer is still loading; the route refuses a pupil regardless', () => {
    access = null
    expect(panel()).toContain('marking.essay_feedback_title')
  })
})

describe('the pointer itself', () => {
  it('says why, and links to the marking form', () => {
    const html = renderToStaticMarkup(<SchoolMarkingRedirect />)
    expect(html).toContain('Your teacher sees your essays')
    expect(html).toContain('href="/marking/submit"')
    expect(html).toContain('Mark an essay')
  })
})

describe('the refusal the pages switch on', () => {
  it('is recognised only by its code on a 403', () => {
    expect(isSchoolMarkingRefusal(403, { code: SCHOOL_MARKING_ROUTE_CODE })).toBe(true)
    expect(isSchoolMarkingRefusal(403, { code: 'parental_consent_required' })).toBe(false)
    expect(isSchoolMarkingRefusal(403, { error: 'Essay feedback is a Premium feature.' })).toBe(
      false,
    )
    expect(isSchoolMarkingRefusal(500, { code: SCHOOL_MARKING_ROUTE_CODE })).toBe(false)
    expect(isSchoolMarkingRefusal(403, null)).toBe(false)
  })
})

describe('the other entry points', () => {
  const read = (rel: string) => readFileSync(join(process.cwd(), rel), 'utf8')

  it('/dashboard/essay-feedback shows the pointer to a school pupil, up front and on refusal', () => {
    const page = read('src/app/dashboard/essay-feedback/page.tsx')
    expect(page).toContain('access?.schoolPupil || schoolRefused')
    expect(page).toContain('isSchoolMarkingRefusal(res.status, data)')
    expect(page).toContain('<SchoolMarkingRedirect')
  })

  it('the dashboard quick action sends a school pupil to Mark an essay', () => {
    const page = read('src/app/dashboard/page.tsx')
    expect(page).toMatch(/access\?\.schoolPupil\s*\?\s*\{[^}]*href: '\/marking\/submit'/)
  })
})
