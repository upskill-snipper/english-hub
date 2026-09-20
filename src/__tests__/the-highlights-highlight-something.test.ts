import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { TEXT_ANNOTATIONS } from '@/data/text-annotations.generated'

/**
 * The reader offered five highlighting overlays and highlighted nothing.
 *
 * REPORTED FROM THE LIVE SITE, on The Merchant of Venice: "Highlighting and
 * notes not highlighted throughout texts." Checked, and it was every text:
 * Context, Key Quotes, Language, Themes and Characters rendered as five pills
 * on all twenty-six full texts, and all twenty-six carried zero annotations. A
 * toggle that highlights nothing when pressed cannot be told apart from a
 * toggle that is broken.
 *
 * THE CONTENT EXISTED. Each text's study guide carries authored quotations with
 * commentary - who says it, and what to say about it. What was missing was the
 * link between a quotation and the place in the text where it occurs.
 *
 * WHAT THE GENERATOR MAY AND MAY NOT DO. It writes no analysis. Every note is
 * the guide's own `who` and `analysis`; every `text` is cut verbatim out of our
 * published edition. The verbatim part is not a nicety: the viewer matches the
 * annotation against the rendered text with a regex, so the guide's own wording
 * - modernised punctuation, "/" for line breaks - would match nothing and
 * highlight nothing, which is the defect again with more steps.
 *
 * THE ASSERTION THAT MATTERS is that every span is genuinely present in the
 * text it claims to be in. A generator that emitted a near-miss would highlight
 * the wrong line, and being confidently wrong about what Shylock says is worse
 * than saying nothing.
 */

const ROOT = process.cwd()
const DATA_DIR = join(ROOT, 'src/data/full-texts')

/**
 * The texts themselves, imported rather than parsed.
 *
 * The first version of this file read the `content:` literals with a regex that
 * accepted only double quotes. Prettier writes them single-quoted, so it found
 * zero sections and reported every annotation as pointing at a section that
 * does not exist - a false alarm about a generator that was working correctly.
 * Importing the modules is exact and cannot drift with a formatting rule.
 */
interface GlobbingMeta {
  glob: (pattern: string, options: { eager: boolean }) => Record<string, Record<string, unknown>>
}

// `import.meta.glob` is a Vite feature and is not in the ImportMeta type this
// project compiles against, so tsc rejects it outright. Narrowing here rather
// than pulling vite/client into the global types for one test file.
const MODULES = (import.meta as unknown as GlobbingMeta).glob('../data/full-texts/*.ts', {
  eager: true,
})

interface LoadedSection {
  id: string
  content: string
}

/** The plain text the viewer sees: tags stripped, nothing else changed. */
function sectionsOf(slug: string): Map<string, string> {
  const path = Object.keys(MODULES).find((k) => k.endsWith(`/${slug}.ts`))
  const out = new Map<string, string>()
  if (!path) return out
  const data = Object.values(MODULES[path]).find(
    (v) =>
      typeof v === 'object' && v !== null && Array.isArray((v as { sections?: unknown }).sections),
  ) as { sections: LoadedSection[] } | undefined
  if (!data) return out
  for (const section of data.sections) {
    out.set(section.id, section.content.replace(/<[^>]*>/g, ''))
  }
  return out
}

const SLUGS = Object.keys(TEXT_ANNOTATIONS)

describe('there are annotations at all', () => {
  it('across a realistic number of texts', () => {
    // If this collapses the suite below passes by checking nothing, which is
    // exactly the state the reported defect was in.
    expect(SLUGS.length).toBeGreaterThanOrEqual(10)
  })

  it('and a realistic number of quotations', () => {
    const total = SLUGS.flatMap((s) => Object.values(TEXT_ANNOTATIONS[s])).flat().length
    expect(total).toBeGreaterThan(100)
  })

  it('including the text this was reported on', () => {
    expect(SLUGS).toContain('the-merchant-of-venice')
  })
})

describe('every highlight is really in the text', () => {
  const cases: [string, string, string, string][] = []
  for (const slug of SLUGS) {
    for (const [sectionId, anns] of Object.entries(TEXT_ANNOTATIONS[slug])) {
      for (const a of anns) cases.push([slug, sectionId, a.text.slice(0, 40), a.text])
    }
  }

  it('the case list was built', () => {
    expect(cases.length).toBeGreaterThan(100)
  })

  it('each span occurs verbatim in its own section', () => {
    // The whole correctness question in one assertion. Checked in a loop rather
    // than it.each so a failure names every offender at once.
    const missing: string[] = []
    const bySlug = new Map<string, Map<string, string>>()
    for (const [slug, sectionId, , text] of cases) {
      if (!bySlug.has(slug)) bySlug.set(slug, sectionsOf(slug))
      const plain = bySlug.get(slug)!.get(sectionId)
      if (plain === undefined) {
        missing.push(`${slug}: section ${sectionId} does not exist`)
        continue
      }
      if (!plain.includes(text)) missing.push(`${slug}/${sectionId}: ${text.slice(0, 50)}`)
    }
    expect(missing).toEqual([])
  })

  it('and is long enough not to be a coincidence', () => {
    // A short common phrase highlights half the play and teaches nothing.
    const short = cases
      .filter(([, , , text]) => text.trim().length < 20)
      .map(([s, , t]) => `${s}: ${t}`)
    expect(short).toEqual([])
  })
})

describe('every note is authored, not generated', () => {
  it('each one names a speaker and says something about the line', () => {
    for (const slug of SLUGS) {
      for (const anns of Object.values(TEXT_ANNOTATIONS[slug])) {
        for (const a of anns) {
          // The note is `${who}. ${analysis}` from the guide. A note as short as
          // a label would mean the analysis had gone missing.
          expect(
            a.note.length,
            `${slug}: note too short to be authored commentary`,
          ).toBeGreaterThan(60)
        }
      }
    }
  })

  it('and the commentary can be found in the guide it came from', () => {
    // The anti-fabrication check. Every note must be traceable to something a
    // person wrote; if the generator ever started writing its own, this fails.
    //
    // THE HAYSTACK WIDENED on 20 September 2026 and the guarantee did not. The
    // generator used to read one file, so this read one file. It now also reads
    // key-quotes/page.tsx and themes/page.tsx, which is where the theme tags
    // and the technique analysis were sitting unused while four of the five
    // overlays highlighted nothing. Those are authored pages, not generated
    // ones, so tracing a note to them is the same guarantee - but had this test
    // kept looking in page.tsx alone it would have failed honest notes and the
    // tempting fix would have been to delete the check.
    // WIDENED A SECOND TIME, for the course modules. Eight of the texts that
    // still highlighted nothing were poems with a four-module course written
    // about them, and the analysis in those modules is as authored as the
    // guides are. The haystack is built the way the GENERATOR chooses its
    // sources - any src/data file declaring CourseModule[] - so the two cannot
    // drift apart: a note can only pass here if it appears verbatim in a file a
    // person wrote.
    //
    // A note on why widening does not hollow this out: the needle is the last
    // sixty characters of the note with punctuation stripped. A sixty-character
    // alphanumeric run does not occur by coincidence, whatever the size of the
    // haystack. What widening costs is specificity about WHICH file, not
    // whether the sentence was written by a person.
    const courseSources = readdirSync(join(ROOT, 'src/data'))
      .filter((f) => f.endsWith('.ts'))
      .map((f) => join(ROOT, 'src/data', f))
      .map((p) => readFileSync(p, 'utf8'))
      .filter((s) => s.includes('CourseModule[]'))
      .join('\n')

    let checked = 0
    for (const slug of SLUGS) {
      const page = join(ROOT, 'src/app/revision/texts', slug, 'page.tsx')
      const guide =
        ['page.tsx', 'key-quotes/page.tsx', 'themes/page.tsx']
          .map((rel) => join(ROOT, 'src/app/revision/texts', slug, rel))
          .filter((p) => existsSync(p))
          .map((p) => readFileSync(p, 'utf8'))
          .join('\n') +
        '\n' +
        courseSources
      if (!existsSync(page) && !TEXT_ANNOTATIONS[slug]) continue
      // Built ONCE per text. It used to be rebuilt inside the inner loop, which
      // was survivable over one guide file and became a five-second timeout the
      // moment the haystack included the course modules - a test that fails on
      // the clock rather than on the assertion, which reads like a real defect.
      //
      // The guide stores curly quotes and dashes as unicode escapes; left
      // undecoded, stripping non-alphanumerics keeps the literal "u2019" and
      // corrupts exactly the passages containing an apostrophe. Markup goes
      // before the punctuation strip, not after: the course modules are HTML in
      // a template literal, so "was commonly used" is stored as
      // "was <em>commonly</em> used", and stripping only punctuation would
      // leave the tag names behind as "wasemcommonlyemused".
      const haystack = guide
        .replace(/\\u([0-9a-fA-F]{4})/g, (_, h: string) => String.fromCharCode(parseInt(h, 16)))
        .replace(/<[^>]*>/g, ' ')
        .replace(/[^a-z0-9]+/gi, '')
        .toLowerCase()
      for (const anns of Object.values(TEXT_ANNOTATIONS[slug])) {
        for (const a of anns) {
          // Compare on words only.
          const tail = a.note
            .slice(-60)
            .replace(/[^a-z0-9]+/gi, '')
            .toLowerCase()
          expect(haystack.includes(tail), `${slug}: note not found in its guide`).toBe(true)
          checked++
        }
      }
    }
    expect(checked).toBeGreaterThan(100)
  })
})

describe('the reader only offers overlays it can fill', () => {
  const VIEWER = readFileSync(join(ROOT, 'src/components/study/InteractiveTextViewer.tsx'), 'utf8')
  const READER = readFileSync(join(ROOT, 'src/components/study/FullTextReader.tsx'), 'utf8')

  it('the toggles are filtered to the types present', () => {
    expect(VIEWER).toContain('available.has(type)')
    expect(VIEWER).toContain('const availableOverlays')
  })

  it('and the whole row is hidden when there are none', () => {
    // Twenty-six texts still have no context, language, theme or character
    // annotations. Those pills must not appear at all rather than appear inert.
    expect(VIEWER).toContain('availableOverlays.size > 0')
  })

  it('the reader merges the generated annotations in', () => {
    expect(READER).toContain('TEXT_ANNOTATIONS[slug]')
    expect(READER).toContain('data={annotated}')
  })

  it('and leaves a text with none untouched', () => {
    expect(READER).toMatch(/: data\b/)
  })
})

describe('the generator refuses rather than guesses', () => {
  const GEN = readFileSync(join(ROOT, 'scripts/generate-text-annotations.mjs'), 'utf8')

  it('skips a quotation it cannot locate', () => {
    expect(GEN).toContain('if (!placed) missed.push')
  })

  it('and skips one too short to be distinctive', () => {
    expect(GEN).toMatch(/needle\.length < MIN_CHARS/)
  })

  it('and reports the misses rather than passing quietly', () => {
    expect(GEN).toContain('not located:')
  })

  it('every full text is offered to it, so none is quietly skipped', () => {
    const files = readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts'))
    expect(files.length).toBeGreaterThan(20)
    // And the generated file is NOT in that directory, because everything in
    // it is treated as a text by two other suites.
    expect(files).not.toContain('annotations.generated.ts')
  })
})
