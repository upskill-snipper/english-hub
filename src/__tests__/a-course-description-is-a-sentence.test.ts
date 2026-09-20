import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { allCourses } from '@/data/courses'
import { courseDescription, MAX_DESCRIPTION } from '@/lib/seo/course-meta'

/**
 * Eighty-seven course pages had a meta description that stopped mid-sentence.
 *
 * THE DEFECT (20 September 2026). `src/app/courses/[id]/page.tsx` built it as
 *
 *   `${subtitle}. ${description.slice(0, 120)}... ${n} modules, ${duration}.${board}`
 *
 * `slice(0, 120)` counts characters, not words or sentences. Live on
 * /courses/aqa-lit-christmas-carol that produced:
 *
 *   "Complete novella study with AQA exam technique. A comprehensive 10-module
 *    course covering Charles Dickens's A Christmas Carol for AQA GCSE English
 *    Literature. Includes ... 10 modules, 9 hours. (AQA)"
 *
 * Three faults in one string: a clause abandoned after the word "Includes", an
 * ellipsis standing in for nothing, and a module count and duration repeated
 * from the sentence that had just given them. Measured across the data:
 *
 *   87 of 87 were over 160 characters, the longest 288
 *   78 of 87 cut mid-sentence and printed the dangling ellipsis
 *
 * so Google truncated every one of them, usually at the fragment.
 *
 * A SECOND FAULT THE SAME MEASUREMENT FOUND. Eleven courses have a description
 * that is one long sentence, and in those cases the template's opening
 * subtitle is all that survives a rewrite - except that the subtitle is shared.
 * Eight Edexcel IGCSE poetry courses carry "Edexcel IGCSE Literature poetry
 * anthology study" and nothing else, so a naive fix would have shipped eight
 * identical descriptions while the poem and the poet sat unused in the sentence
 * that did not fit. That is why courseDescription is allowed to trim a single
 * sentence, and why it prefers a clause boundary when it does.
 *
 * ALSO FIXED HERE. The title was assembled by hand as `${title} | The English
 * Hub` - a different separator from every other page on the site. Next applies
 * a parent title template to its immediate children only, so the root's
 * '%s - The English Hub' reached /courses and stopped, and these 87 pages had
 * to brand themselves. ../layout.tsx now declares the template, the page sets
 * its own title and nothing else, and the social cards - which do NOT inherit
 * a template - name the brand explicitly.
 *
 * MUTATIONS RUN, each verified to have altered the file first: restoring the
 * slice(0, 120) template fails; removing the title template from the layout
 * fails; raising MAX_DESCRIPTION past 160 fails.
 */

const PAGE = readFileSync('src/app/courses/[id]/page.tsx', 'utf8')
const LAYOUT = readFileSync('src/app/courses/layout.tsx', 'utf8')

const DESCRIPTIONS = allCourses.map((c) => [c.id, courseDescription(c)] as const)

describe('a course description is a finished sentence', () => {
  it('reads real courses', () => {
    // Vacuity guard: an empty catalogue passes every sweep below.
    expect(allCourses.length).toBeGreaterThan(80)
    expect(DESCRIPTIONS.every(([, d]) => d.length > 0)).toBe(true)
  })

  it('the budget is a number, not whatever the helper currently says', () => {
    // The first version of this file asserted every description against
    // MAX_DESCRIPTION, which is the constant that PRODUCED them - so raising it
    // to 400 changed every output and failed nothing. The limit is Google's,
    // so it is written here as a literal and the helper is held to it.
    expect(MAX_DESCRIPTION).toBe(160)
  })

  it.each(DESCRIPTIONS)('%s', (id, description) => {
    expect(description.length, `${id} is ${description.length} chars`).toBeLessThanOrEqual(160)
    expect(description, `${id} still trails an ellipsis`).not.toMatch(/\.\.\.|…/)
    expect(description, `${id} does not end in a full stop`).toMatch(/[.!?]$/)
    // The old template's other tell - a subtitle with no terminator running
    // straight into the next sentence - is NOT checked here. The first draft
    // tried, with /[a-z)] [A-Z][a-z]+ [a-z]/, and it failed 15 healthy courses
    // on the phrase "the English language": a proper noun mid-sentence is
    // indistinguishable from a missing full stop by punctuation alone. The
    // behaviour is pinned instead by an explicit case at the bottom of this
    // file, where the input is known.
  })

  it('and says something, rather than the least it can get away with', () => {
    // A description of 40 characters would satisfy every assertion above. The
    // point of the rewrite was to USE the budget, not to duck it.
    const short = DESCRIPTIONS.filter(([, d]) => d.length < 100)
    expect(short.map(([id]) => id)).toEqual([])
    const median = [...DESCRIPTIONS.map(([, d]) => d.length)].sort((a, b) => a - b)[
      Math.floor(DESCRIPTIONS.length / 2)
    ]
    expect(median).toBeGreaterThan(120)
  })

  it('and no two courses say the same thing', () => {
    // The eight poetry courses share a subtitle. Falling back to it would have
    // been the easy fix and would have produced eight identical descriptions.
    const seen = new Map<string, string[]>()
    for (const [id, d] of DESCRIPTIONS) seen.set(d, [...(seen.get(d) ?? []), id])
    const duplicated = [...seen.values()].filter((ids) => ids.length > 1)
    expect(duplicated).toEqual([])
  })

  it('and the page no longer builds the string itself', () => {
    expect(PAGE, 'the slice(0, 120) template is back').not.toMatch(/description\.slice\(0, 120\)/)
    expect(PAGE).toContain('courseDescription(course)')
  })

  it('and the brand comes from the template, not from a hand-written suffix', () => {
    expect(LAYOUT, 'children of /courses inherit no template').toMatch(
      /template: '%s - The English Hub'/,
    )
    expect(PAGE, 'the pipe separator is back').not.toMatch(/\| The English Hub/)
    // The counterweight: openGraph and twitter titles do NOT inherit a
    // template, so removing the hand-written brand from THEM would silently
    // strip it from every share card.
    expect(PAGE).toMatch(/const socialTitle = `\$\{course\.title\} - The English Hub`/)
    expect(PAGE).toMatch(/title: socialTitle/)
  })

  it('the helper behaves on the shapes that broke the old one', () => {
    // A guard built on assertions that never exercise the edge is the failure
    // mode this repository keeps shipping.
    const oneLongSentence = courseDescription({
      subtitle: 'Shared subtitle',
      description:
        'A comprehensive study of a poem by a named poet covering context, language and imagery analysis, structure and form, and exam practice with model responses for the anthology.',
      duration: '3 weeks',
      moduleList: [1, 2, 3, 4],
    })
    expect(oneLongSentence).toContain('named poet')
    expect(oneLongSentence.length).toBeLessThanOrEqual(160)
    expect(oneLongSentence).toMatch(/\.$/)

    // A subtitle with no terminator must not run into the next sentence.
    expect(
      courseDescription({
        subtitle: 'Poem-by-poem analysis for the full 15-poem anthology',
        description: 'A comprehensive guide to every poem.',
        duration: '15 hours',
        moduleList: new Array(15),
      }),
    ).toContain('anthology. A comprehensive')

    // The module count is not repeated when the prose already gives it.
    expect(
      courseDescription({
        subtitle: 'Complete novella study.',
        description: 'A comprehensive 10-module course covering the whole text.',
        duration: '9 hours',
        moduleList: new Array(10),
      }),
    ).not.toMatch(/10 modules/)
  })
})
