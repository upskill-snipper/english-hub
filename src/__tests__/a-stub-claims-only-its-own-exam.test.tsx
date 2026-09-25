import { describe, it, expect, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

import { SET_TEXTS } from '@/lib/board/set-texts'

/**
 * A placeholder guide says it is on an exam only when it is.
 *
 * WHY. Until 25 September 2026 every StubStudyGuide page carried the badge
 * "Pearson IGCSE Language A (4EA1)", promised questions "aligned with the
 * Pearson Edexcel International GCSE English Language A (4EA1) mark scheme",
 * pointed students to "other anthology texts" and linked the Language A hub,
 * whatever the text's boards. The Pedestrian, The Man Who Loved Flowers and
 * When Greek Meets Greek are prescribed by no specification we cover (their
 * rows in set-texts.ts say so and say why), and each told students it was on
 * 4EA1. Their rights notices also sent students to the 4EA1 anthology for the
 * full text, which prints none of them.
 *
 * Rendered, because the defect was in what the page says, not in its source:
 * the component compiled and read the right data, and printed the same four
 * claims for every text.
 */

// The one async child: it reads specification data by slug and is tested
// on its own.
vi.mock('@/components/revision/exam-placement-card', () => ({ ExamPlacementCard: () => null }))
vi.mock('next/headers', () => ({
  headers: async () => ({ get: () => null }),
  cookies: async () => ({ get: () => undefined }),
}))

const { StubStudyGuide } = await import('@/app/revision/texts/_components/stub-study-guide')

const LANG_A_CLAIMS = [
  'Pearson IGCSE Language A (4EA1)',
  'English Language A (4EA1) mark scheme',
  'other anthology texts',
  'href="/igcse/edexcel-lang"',
]

async function html(slug: string) {
  const text = SET_TEXTS.find((t) => t.slug === slug)
  if (!text) throw new Error(`${slug} is not in set-texts.ts`)
  return renderToStaticMarkup(await StubStudyGuide({ text }))
}

describe('a stub claims only its own exam', () => {
  it('a 4EA1 text keeps its Language A badge, copy and hub link', async () => {
    const page = await html('a-passage-to-africa')
    for (const claim of LANG_A_CLAIMS) expect(page).toContain(claim)
  })

  it.each(['the-pedestrian', 'the-man-who-loved-flowers', 'when-greek-meets-greek'])(
    '%s, which no specification we cover prescribes, makes none of those claims',
    async (slug) => {
      const text = SET_TEXTS.find((t) => t.slug === slug)!
      expect(text.boards).toEqual([])
      const page = await html(slug)
      for (const claim of LANG_A_CLAIMS) expect(page).not.toContain(claim)
      // Nor calls it anthology prose.
      expect(page).not.toContain('Anthology Prose')
      // Nor sends students to an anthology that does not print it.
      expect(text.ukRightsNotice).not.toMatch(/978-1-446-93108-0|Pearson Education on behalf/)
      // And still names the text and says a guide is being written.
      expect(page).toContain(text.title)
      expect(page).toContain('We are currently writing a full study guide for')
    },
  )
})
