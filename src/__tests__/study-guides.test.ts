// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

import { SET_TEXTS } from '@/lib/board/set-texts'
import { ANTHOLOGY } from '@/lib/board/edexcel-igcse-anthology'
import { LITERATURE_4ET1 } from '@/lib/board/edexcel-igcse-literature'
import { CAMBRIDGE_0475 } from '@/lib/board/cambridge-0475'
import { STUDY_GUIDE_LOADERS } from '@/data/study-guides'
import {
  proseOf,
  quotationsOf,
  quotedSpans,
  validateGuide,
  wordCount,
} from '@/lib/study-guides/validate'
import { SECTION_KEYS, type StudyGuide } from '@/lib/study-guides/types'
import { sectionsPresent } from '@/lib/study-guides/sections'
import { inPart, partOf, showsPartChips } from '@/lib/study-guides/parts'

/**
 * Every study guide meets the same bar, and every quotation from an
 * out-of-copyright text is in that text.
 *
 * WHY. "A lot of the texts are missing Language Analysis, Key Vocabulary, Exam
 * Practice etc." (the founder, 25 September 2026). Measured that day across the
 * 108 registered set texts: 38 had no guide anywhere, and the other 70 had up to
 * nine guides each with no two agreeing on what a guide contains. The sections
 * are now fixed in src/lib/study-guides/types.ts and every guide is measured
 * against them here.
 *
 * THE QUOTATION CHECK IS THE ONE THAT MATTERS MOST. A revision guide that
 * misquotes teaches a student to misquote, in an exam, from memory. For the 26
 * texts held as byte copies of a published edition in src/data/full-texts, every
 * quotation must appear in that edition. For texts still in copyright there is
 * no licensed copy here to check against, and this file says so rather than
 * pretending: those rest on the sources each guide records.
 */

const DIR = 'src/data/study-guides'

function guideFiles(): string[] {
  return readdirSync(DIR)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f) => f.replace(/\.ts$/, ''))
    .sort()
}

/** The author a verified specification module prints for a slug, if any. */
function verifiedAuthor(slug: string): string | undefined {
  for (const part of ANTHOLOGY) {
    const e = part.entries.find((x) => x.slug === slug)
    if (e && 'author' in e && e.author) return e.author as string
  }
  for (const choice of LITERATURE_4ET1) {
    const e = choice.entries.find((x) => x.slug === slug)
    if (e) return e.author
  }
  for (const year of CAMBRIDGE_0475) {
    for (const paper of year.papers) {
      for (const option of paper.options) {
        const e = option.texts.find((x) => x.slug === slug)
        if (e) return e.author
      }
    }
  }
  return undefined
}

/**
 * Normalise for matching a quotation against an edition: case, whitespace,
 * curly versus straight quotes and apostrophes, and dash forms. Nothing that
 * would let a different word through.
 */
function norm(s: string): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/g, ' ')
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–-]+/g, ' ')
    .replace(/[^\p{L}\p{N}' ]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

/** A quotation may use an ellipsis to join two parts; each part must be in the text. */
function fragments(quote: string): string[] {
  return quote
    .split(/\s*(?:\.\.\.|…|\/)\s*/)
    .map((f) => norm(f))
    .filter((f) => f.split(' ').length >= 2)
}

const fullTextCache = new Map<string, string | null>()
function fullText(slug: string): string | null {
  if (fullTextCache.has(slug)) return fullTextCache.get(slug)!
  const p = join('src/data/full-texts', `${slug}.ts`)
  // The edition is read as source, where each section is one string literal:
  // paragraph breaks are the two characters \n and some letters are \u
  // escapes. Undecoded, norm() turned each \n into a stray word "n", so any
  // quotation running over a paragraph break, and every printed passage of
  // more than one paragraph, could never be found (found 26 September 2026,
  // printing Animal Farm's passages).
  const decoded = (s: string) =>
    s
      .replace(/\\u([0-9a-fA-F]{4})/g, (_, h: string) => String.fromCharCode(parseInt(h, 16)))
      .replace(/\\[nrt]/g, ' ')
      .replace(/\\(.)/g, '$1')
  const v = existsSync(p) ? norm(decoded(readFileSync(p, 'utf8'))) : null
  fullTextCache.set(slug, v)
  return v
}

describe('the study-guide register', () => {
  it('lists every guide file, and every entry has a file', () => {
    const index = readFileSync(join(DIR, 'index.ts'), 'utf8')
    // Quoted keys or bare ones: the generator writes 'night':, and the commit
    // hook's Prettier rewrites it night:. Reading only the quoted form passed on
    // a freshly generated index and failed on every committed one (found on 26
    // September 2026 by running the suite on a clean checkout of the commit).
    const registered = [...index.matchAll(/^\s*(?:'([a-z0-9-]+)'|([a-z][a-z0-9]*)):\s*\(\)\s*=>/gm)]
      .map((m) => m[1] ?? m[2])
      .sort()
    expect(registered).toEqual(guideFiles())
    expect(Object.keys(STUDY_GUIDE_LOADERS).sort()).toEqual(guideFiles())
  })
})

const slugs = guideFiles()

describe.each(slugs)('guide: %s', (slug) => {
  it('loads, and its slug is its filename', async () => {
    const guide = await STUDY_GUIDE_LOADERS[slug]()
    expect(guide.slug).toBe(slug)
  })

  it('meets the bar', async () => {
    const guide = await STUDY_GUIDE_LOADERS[slug]()
    const problems = validateGuide(guide, {
      registered: SET_TEXTS.some((t) => t.slug === slug),
      verifiedAuthor: verifiedAuthor(slug),
    })
    expect(problems).toEqual([])
  })

  it('covers every section, itself or through a native page that exists', async () => {
    const guide: StudyGuide = await STUDY_GUIDE_LOADERS[slug]()
    const present = new Set(sectionsPresent(guide))
    for (const [section, route] of Object.entries(guide.native ?? {})) {
      // A native claim is a route to a real page under src/app, not a promise.
      const dir = join('src/app', route!.replace(/^\//, '').split('#')[0])
      expect(existsSync(join(dir, 'page.tsx')), `${section} -> ${route} has no page`).toBe(true)
      expect(present.has(section as never), `${section} is both native and written`).toBe(false)
      present.add(section as never)
    }
    expect(SECTION_KEYS.filter((k) => !present.has(k))).toEqual([])
  })

  it('quotes an out-of-copyright text exactly', async () => {
    const guide: StudyGuide = await STUDY_GUIDE_LOADERS[slug]()
    const text = guide.rights.status === 'public-domain' ? fullText(slug) : null
    if (!text) return // no edition held: see the file header for what that means
    const missing: string[] = []
    // Key quotations and the quotations on the scene cards alike: an animation
    // that shows a misquotation teaches it just as well as a list does.
    for (const q of quotationsOf(guide)) {
      for (const f of fragments(q)) if (!text.includes(f)) missing.push(q)
    }
    const elsewhere = new Set((guide.quotesFromElsewhere ?? []).map((q) => norm(q)))
    for (const e of guide.extracts ?? []) {
      // The phrases a close reading annotates are quotations too. types.ts says
      // each "must appear" in the held edition, and until 26 September 2026
      // nothing checked it for an extract printed without its text: Animal
      // Farm's annotations were never compared with the novella. A phrase the
      // guide declares it takes from another printing (La Belle Dame quotes the
      // anthology's "Thee hath in thrall") is excused, as in prose below.
      for (const a of e.annotations ?? []) {
        if (elsewhere.has(norm(a.phrase))) continue
        for (const f of fragments(a.phrase))
          if (!text.includes(f)) missing.push(`annotation in ${e.title}: ${a.phrase}`)
      }
      if (!e.text) continue
      for (const f of fragments(e.text)) if (!text.includes(f)) missing.push(`extract: ${e.title}`)
    }
    // And every phrase quoted inside the guide's own prose, unless the guide
    // declares it comes from somewhere else. The pilot's draft quoted
    // "dethroned" in an otherwise accurate sentence; the novel never says it.
    for (const span of proseOf(guide).flatMap((s) => quotedSpans(s))) {
      if (elsewhere.has(norm(span))) continue
      for (const f of fragments(span)) if (!text.includes(f)) missing.push(`in prose: ${span}`)
    }
    expect(missing, 'quotations not found in the held edition').toEqual([])
  })
})

describe('the validator itself', () => {
  // A validator that accepts everything passes every guide above. These pin
  // that each rule fires on the shape it exists to stop.
  const base: StudyGuide = {
    slug: 'x',
    title: 'X',
    author: 'A Writer',
    form: 'poem',
    scope: 'The whole poem.',
    rights: { status: 'copyright', acknowledgement: '© A Writer.' },
    workLength: { words: 200, lines: 20, basis: 'test fixture' },
    sources: [{ label: 'publisher' }],
    timeline: [1, 2, 3].map((n) => ({
      where: `Stanza ${n}`,
      title: `Moment ${n}`,
      summary:
        'Something happens here that is described in just enough words to pass the summary rule.',
      setting: 'A room',
      who: [],
      themes: [],
      tension: 2 as const,
      significance: 'It matters.',
    })),
    relationships: [],
  }
  const run = (g: Partial<StudyGuide>) => validateGuide({ ...base, ...g }, { registered: true })

  it('passes a clean minimal guide', () => {
    expect(run({})).toEqual([])
  })

  const ANALYSIS =
    'An analysis long enough to pass the analysis rule, which asks for at least twenty five words so that a quotation is never left standing without comment on what it does.'
  const words = (n: number) => Array.from({ length: n }, (_, i) => `w${i}`).join(' ')
  const sixQuotes = (first: string) =>
    Array.from({ length: 6 }, (_, i) => ({
      text: i === 0 ? first : `short line ${i}`,
      where: 'Stanza 1',
      analysis: ANALYSIS,
    }))

  it('holds every quotation from a copyrighted text under 15 words', () => {
    // The site's rule, and the most the assistant writing these guides may
    // reproduce: see fair-dealing.ts for why it is tighter than the law.
    expect(run({ keyQuotes: sixQuotes(words(14)) })).toEqual([])
    expect(run({ keyQuotes: sixQuotes(words(15)) }).join('\n')).toMatch(
      /15 words, over the 14-word limit/,
    )
    const novel = { form: 'novel' as const, workLength: { words: 80000, basis: 'fixture' } }
    expect(
      validateGuide(
        { ...base, ...novel, keyQuotes: sixQuotes(words(15)) },
        { registered: true },
      ).join('\n'),
    ).toMatch(/over the 14-word limit/)
  })

  it('and no more than two lines of a poem at once', () => {
    expect(run({ keyQuotes: sixQuotes('one / two / three') }).join('\n')).toMatch(
      /over the 2-line limit/,
    )
  })

  it('counts a quotation inside the prose, and a phrase annotated in a passage', () => {
    // Moving a long quotation from keyQuotes into an analysis sentence, or into
    // a passage note, must not take it out of the rule.
    const long = words(15)
    expect(run({ overview: { summary: [`She says “${long}” here.`] } }).join('\n')).toMatch(
      /over the 14-word limit/,
    )
    const passage = {
      title: 'The opening',
      where: 'Stanza 1',
      pointer: 'The first four lines.',
      summary:
        'A summary of the passage long enough to meet the rule for a passage guide that prints no text of its own at all here.',
      annotations: [0, 1, 2].map((i) => ({
        phrase: i === 0 ? long : `phrase ${i}`,
        note: 'A note long enough to count as a note on this phrase here.',
      })),
      question: 'How does the poem open?',
    }
    expect(run({ extracts: [passage] }).join('\n')).toMatch(/over the 14-word limit/)
  })

  it('caps the total quoted from a poem at a share of it, so fragments cannot rebuild it', () => {
    // A 200-word poem: fifteen per cent is 30 words.
    const quotes = Array.from({ length: 6 }, (_, i) => ({
      text: `${words(6)} q${i}`,
      where: `Stanza ${i}`,
      analysis: ANALYSIS,
    }))
    expect(run({ keyQuotes: quotes }).join('\n')).toMatch(
      /quotes 42 words of the work in total, over the 30-word limit for a poem of this length/,
    )
  })

  it('caps a short prose work by share, not by the long-work total', () => {
    const short = {
      form: 'non-fiction' as const,
      workLength: { words: 900, basis: 'fixture' },
      timeline: base.timeline.concat(base.timeline[0]),
    }
    const quotes = Array.from({ length: 7 }, (_, i) => ({
      text: `${words(13)} q${i}`,
      where: 'Paragraph 1',
      analysis: ANALYSIS,
    }))
    const out = validateGuide({ ...base, ...short, keyQuotes: quotes }, { registered: true }).join(
      '\n',
    )
    expect(out).not.toMatch(/-word limit: /)
    expect(out).toMatch(
      /quotes 98 words of the work in total, over the 90-word limit for a short work/,
    )
  })

  it('requires a length for a copyrighted work, so a missing one cannot loosen the limits', () => {
    expect(run({ workLength: undefined }).join('\n')).toMatch(/needs workLength/)
  })

  it('never prints the passage of a copyrighted text, only points to it', () => {
    const printed = {
      title: 'The opening',
      where: 'Stanza 1',
      pointer: 'The first four lines.',
      text: 'a small bright passage of a few words',
      annotations: [0, 1, 2].map((i) => ({
        phrase: `small${i}`,
        note: 'A note long enough to count as a note on this phrase here.',
      })),
      question: 'How does the poem open?',
    }
    expect(run({ extracts: [printed] }).join('\n')).toMatch(
      /prints the passage of a copyrighted text/,
    )
    const pointedTo = { ...printed, text: undefined, summary: undefined }
    expect(run({ extracts: [pointedTo] }).join('\n')).toMatch(
      /needs a summary of at least 30 words/,
    )
  })

  it('checks a public-domain passage against its own annotations', () => {
    const pd = {
      rights: { status: 'public-domain' as const, acknowledgement: 'First published 1850.' },
    }
    const passage = {
      title: 'The opening',
      where: 'Chapter 1',
      pointer: 'The first paragraph.',
      text: 'a small bright passage of a few words',
      annotations: [
        {
          phrase: 'small bright',
          note: 'A note long enough to count as a note on this phrase here.',
        },
        {
          phrase: 'not in the passage',
          note: 'A note long enough to count as a note on this phrase here.',
        },
      ],
      question: 'How does the writer open the chapter?',
    }
    const out = run({ ...pd, extracts: [passage] }).join('\n')
    expect(out).toMatch(/at least three annotations/)
    expect(out).toMatch(/annotates "not in the passage", which is not in the extract/)
  })

  it('rejects a mark tariff and a numbered assessment objective', () => {
    const exam = {
      questions: [
        {
          question: 'How is fear presented? (12 marks)',
          skill: 'Analysis',
          guidance: ['a', 'b', 'c'],
        },
        { question: 'Q', skill: 'AO2', guidance: ['a', 'b', 'c'] },
      ],
      tips: [],
    }
    const out = run({ examPractice: exam }).join('\n')
    expect(out).toMatch(/mark tariff/)
    expect(out).toMatch(/assessment objective/)
  })

  it('rejects an em dash, an exclamation mark and American spelling outside quotation marks', () => {
    const out = run({
      overview: { summary: ['It is vivid — and wonderful! The color is analyzed.'] },
    }).join('\n')
    expect(out).toMatch(/em dash/)
    expect(out).toMatch(/exclamation/)
    expect(out).toMatch(/American spelling/)
  })

  it('allows all three inside a quotation', () => {
    expect(
      run({ overview: { summary: ['She cries “Out, damned spot!” and the color fades.'] } }).join(
        '\n',
      ),
    ).toMatch(/American spelling "color"/)
    expect(run({ overview: { summary: ['She cries “Out, damned spot!”'] } })).toEqual([])
  })

  it('rejects an author the specification contradicts', () => {
    const out = validateGuide(
      { ...base, author: 'Bernard MacLaverty' },
      { registered: true, verifiedAuthor: 'Alice Munro' },
    )
    expect(out.join('\n')).toMatch(/disagrees with the specification/)
  })

  it('finds a misquotation of a held edition', () => {
    // The check the per-guide test relies on, pinned against a real edition.
    const sign = fullText('the-sign-of-four')!
    expect(sign).toBeTruthy()
    const real = fragments('Sherlock Holmes took his bottle from the corner of the mantel-piece')
    const wrong = fragments('Sherlock Holmes took his pipe from the corner of the mantel-piece')
    expect(real.every((f) => sign.includes(f))).toBe(true)
    expect(wrong.every((f) => sign.includes(f))).toBe(false)
  })
})

describe('reading a held edition', () => {
  it('reads paragraph breaks as breaks, not as the letter n', () => {
    const text = fullText('animal-farm')
    expect(text).not.toBeNull()
    // Undecoded, every "</p>\n\n<p>" left " n n " in the normalised text.
    expect(text).not.toMatch(/ n n /)
  })
})

describe('the parts of a text', () => {
  it('groups a moment by its reference before the first comma', () => {
    expect(partOf('Act 3, Scene 4')).toBe('Act 3')
    expect(partOf('Book One, Chapter VII')).toBe('Book One')
    expect(partOf('Stanza 2')).toBe('Stanza 2')
  })

  it('matches a part exactly, so Chapter 1 does not collect Chapter 10', () => {
    expect(inPart('Chapter 1, the door', 'Chapter 1')).toBe(true)
    expect(inPart('Chapter 10, the last night', 'Chapter 1')).toBe(false)
    expect(inPart('act 2, scene 1', 'Act 2')).toBe(true)
  })

  it('offers part chips only between 2 and 16 parts, and both halves ask the same rule', () => {
    const acts = (n: number) => Array.from({ length: n }, (_, i) => `Act ${i + 1}, scene`)
    expect(showsPartChips(acts(1))).toBe(false)
    expect(showsPartChips(acts(5))).toBe(true)
    expect(showsPartChips(acts(16))).toBe(true)
    // Jane Eyre's guide has 23 parts: no chips, so its introduction must not
    // tell the student to choose one, as it did until 26 September 2026.
    expect(showsPartChips(acts(23))).toBe(false)
    const dir = join(process.cwd(), 'src/components/study-guide/visuals')
    for (const f of ['story-visuals.tsx', 'story-visuals-client.tsx'])
      expect(readFileSync(join(dir, f), 'utf8'), f).toMatch(/showsPartChips\(timeline\.map/)
  })
})

/**
 * Every page that mounts a guide's visuals or supplement mounts something that
 * renders. A scene player filtered to a part with no moments returns null, and
 * a supplement whose guide claims nothing native duplicates the page above it:
 * both would look like success in a code review and show nothing, or twice as
 * much, to a student.
 */
describe('mounted guides', () => {
  function pages(dir: string, out: string[] = []): string[] {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name)
      if (e.isDirectory()) pages(p, out)
      else if (e.name === 'page.tsx' || e.name === 'layout.tsx') out.push(p)
    }
    return out
  }
  const mounts = pages('src/app')
    .map((file) => ({ file, src: readFileSync(file, 'utf8') }))
    .filter(({ src }) => /from '@\/data\/study-guides\/[a-z0-9-]+'/.test(src))
    .map(({ file, src }) => ({
      file,
      src,
      slug: src.match(/from '@\/data\/study-guides\/([a-z0-9-]+)'/)![1],
    }))

  it.each(mounts.map((m) => [m.file.split('\\').join('/'), m] as const))(
    '%s mounts a guide that exists, and it renders',
    async (_file, m) => {
      expect(slugs).toContain(m.slug)
      const guide = await STUDY_GUIDE_LOADERS[m.slug]()
      for (const [, part] of m.src.matchAll(/<StoryVisuals[^>]*\bpart="([^"]+)"/g)) {
        expect(
          guide.timeline.filter((mo) => inPart(mo.where, part)).length,
          `no moments in "${part}"`,
        ).toBeGreaterThan(0)
      }
      if (m.src.includes('<GuideSupplement')) {
        expect(
          Object.keys(guide.native ?? {}).length,
          'a supplement with nothing native',
        ).toBeGreaterThan(0)
      }
    },
  )
})
