import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Three posts told a student to master an assessment objective that their own
 * body said was the wrong one.
 *
 * THE DEFECT (20 September 2026). Somebody corrected the AO errors in the prose
 * and stopped there. The frontmatter - which is what becomes the `<title>`, the
 * `<h1>`, the meta description, the excerpt on the index and the words baked
 * into the social card - still carried the mistake:
 *
 *   /blog/unseen-poetry-analysis-gcse-ao4
 *     h1  "Unseen Poetry Analysis for GCSE: Master AO4"
 *     h2  "...: Master AO2 for GCSE English Literature"
 *     body "The analytical AO ... is AO2 on AQA, Edexcel, OCR, Eduqas and
 *           WJEC - not AO4."
 *
 *   /blog/comparative-essay-gcse-english-ao5
 *     h1  "Comparative Essay GCSE English: AO5 Guide"
 *     body "English Literature does not have an AO5."
 *
 *   /blog/ao5-gcse-english-literature
 *     title and body both correct, social card still read "AO5 in GCSE
 *     English Literature: Master Literary Analysis".
 *
 * All three verified on the live site first. On the unseen-poetry page the
 * contradiction was visible in the first two headings, one under the other.
 *
 * WHY IT MATTERS MORE THAN A TYPO. The title is the line Google prints and the
 * first thing an answer engine reads. A student revising unseen poetry to
 * "master AO4" is revising spelling and punctuation, which AQA does not even
 * assess on that question. There is no AO5 in GCSE English Literature at all -
 * the repository's own mark schemes say so: AQA Literature runs AO1 to AO4,
 * AO4 being technical accuracy, while AO5 exists only in Language, for the
 * Section B writing task.
 *
 * THE SLUGS ARE DELIBERATELY UNCHANGED. "AO5 GCSE English Literature" is a real
 * thing students search for precisely because they have been told something
 * wrong, and these articles are the corrective answer. The URL may target the
 * misconception; the title may not assert it.
 *
 * MUTATIONS RUN, each verified to have altered the file first: restoring any
 * one of the three original titles fails, and so does restoring the original
 * cover on the post whose title was already right.
 */

const DIR = 'content/blog'

/** The frontmatter fields a reader or a crawler actually sees. */
const OUTWARD = ['title', 'description', 'excerpt', 'cover'] as const

/**
 * A body sentence that rules an objective OUT, in either language. The AO
 * number is the capture.
 */
const DENIALS = [
  /\bnot\s+\*{0,2}AO(\d)\b/gi,
  /\bno\s+\*{0,2}AO(\d)\b/gi,
  /does\s+\*?not\*?\s+have\s+an?\s+\*{0,2}AO(\d)\b/gi,
  /ليس\s+AO(\d)\b/g,
  /وليس\s+AO(\d)\b/g,
]

/**
 * Phrasings that SCOPE AN OBJECTIVE AWAY rather than claim it, and are
 * therefore allowed to name a denied AO in an outward string. Kept deliberately
 * short: each one is a real sentence from one of these posts, and the test
 * below proves every pattern still matches something, so a dead entry cannot
 * quietly widen the rule.
 */
const SCOPES_AWAY: [RegExp, string][] = [
  [/\bnot\s+AO\d\b/gi, 'Unseen poetry analysis for GCSE: AO2, not AO4'],
  [/\bno\s+AO\d\b/gi, 'Why English Literature has no AO5'],
  [/\bAO\d\s+belongs\s+to\b/gi, 'and why AO5 belongs to English Language'],
  [/وليس\s+AO\d\b/g, 'دليل AO2 وليس AO5'],
  [/ليس\s+AO\d\b/g, 'الهدف هو AO2 ليس AO5'],
]

/** `cover` is a URL, so its words arrive percent-encoded and plus-separated. */
function readable(key: string, value: string): string {
  if (key !== 'cover') return value
  return decodeURIComponent(value.replace(/\+/g, ' '))
}

type Post = { file: string; front: string; body: string }

const posts: Post[] = readdirSync(DIR)
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => {
    const src = readFileSync(join(DIR, f), 'utf8')
    const end = src.indexOf('\n---', 4)
    return { file: f, front: src.slice(0, end), body: src.slice(end) }
  })

function deniedIn(body: string): Set<string> {
  const out = new Set<string>()
  for (const re of DENIALS) for (const m of body.matchAll(re)) out.add(m[1])
  return out
}

function field(front: string, key: string): string {
  return new RegExp(`^${key}:\\s*'(.*)'$`, 'm').exec(front)?.[1] ?? ''
}

describe('no post names an assessment objective its own body rules out', () => {
  it('reads real posts', () => {
    // Vacuity guard: an empty read passes everything below it.
    expect(posts.length).toBeGreaterThan(70)
    expect(posts.map((p) => p.file)).toContain('unseen-poetry-analysis-gcse-ao4.mdx')
  })

  it('and the denial patterns actually match the sentences in question', () => {
    // A guard built on a regex that matches nothing is the failure mode this
    // repository keeps shipping. These are the three real sentences.
    expect(deniedIn('the analytical AO is **AO2** ... — not AO4.')).toEqual(new Set(['4']))
    expect(deniedIn('English Literature does *not* have an AO5.')).toEqual(new Set(['5']))
    expect(deniedIn('There is **no AO5 in AQA English Literature**')).toEqual(new Set(['5']))
    expect(deniedIn('AO2 rewards close reading of language.')).toEqual(new Set())
  })

  it.each(SCOPES_AWAY.map(([re, example]) => [String(re), re, example] as const))(
    'the scoping pattern %s matches the phrasing it is for',
    (_label, re, example) => {
      // Anti-vacuity on the OTHER list: a pattern that matches nothing widens
      // the rule for free and nobody notices. Checked against its documented
      // example rather than against live strings, so the two Arabic forms stay
      // usable before any Arabic title happens to need one.
      expect(example).toMatch(new RegExp(re.source, re.flags.replace('g', '')))
    },
  )

  it.each(posts.map((p) => p.file))('%s', (file) => {
    const post = posts.find((p) => p.file === file)!
    const denied = deniedIn(post.body)
    if (denied.size === 0) return

    for (const key of OUTWARD) {
      // Strip the scoping phrasings first: "AO2, not AO5" and "AO5 belongs to
      // English Language" are the article doing its job, and the social card
      // may repeat them.
      let value = readable(key, field(post.front, key))
      for (const [re] of SCOPES_AWAY) value = value.replace(re, '')
      for (const ao of denied) {
        expect(
          value,
          `${file}: the ${key} presents AO${ao} as the objective, and the body ` +
            `of this same post says it is not the one. The title is the line ` +
            `Google prints; it may not assert what the article corrects.`,
        ).not.toMatch(new RegExp(`AO[+%]?${ao}\\b`))
      }
    }
  })

  it('but the three posts still target the query that brings students in', () => {
    // The counterweight. Renaming the slugs would satisfy everything above and
    // throw away the search demand these articles exist to answer - students
    // look for "AO5 GCSE English Literature" BECAUSE they have been told
    // something wrong.
    for (const [file, slug] of [
      ['ao5-gcse-english-literature.mdx', 'ao5-gcse-english-literature'],
      ['comparative-essay-gcse-english-ao5.mdx', 'comparative-essay-gcse-english-ao5'],
      ['unseen-poetry-analysis-gcse-ao4.mdx', 'unseen-poetry-analysis-gcse-ao4'],
    ]) {
      const post = posts.find((p) => p.file === file)!
      expect(field(post.front, 'slug'), `${file} lost its slug`).toBe(slug)
    }
  })
})
