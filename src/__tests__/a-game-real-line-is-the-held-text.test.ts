import { describe, expect, it } from 'vitest'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Every real line a skills game prints from a held text is the text's words
 * (24 October 2026).
 *
 * WHY. The founder asked on 24 October 2026 for "as much actual text as
 * possible" in the games, and the rebuilt banks now print about 1,800 lines
 * from out-of-copyright books, each with a `source` naming its book. Students
 * learn these lines. The site's held-text guard
 * (every-quotation-is-the-held-text.test.ts, scripts/check-quotations.mjs)
 * deliberately leaves alone "a quotation beside a source field", which is
 * exactly how the games store theirs, so every one of these lines rested on
 * its writer's own check: three writers said so in their reports that day.
 *
 * WHAT IS HELD. For each game item whose `source` names one held text
 * (src/data/full-texts), the line it prints (its sentence, quotation,
 * extract or example, the right answer where the right answer is the line
 * as printed, or a paragraph's sentences) is split at its answer gaps, and
 * every part of four words or more must be in that text word for word. A
 * line that is not the text's whole (Vocabulary Builder's "Dickens calls
 * Scrooge a '...'") is held by the words it puts in quotation marks. Case,
 * quotation marks, apostrophes, dash styles, verse line breaks written " / "
 * and a part's closing punctuation are not compared; every word and every
 * other stop is.
 *
 * WHAT IT CANNOT HOLD. A part under four words, the word in a gap, the frame
 * around a quotation, and a source that names no held text (a poem the site
 * does not hold, a passage written for the site): those still rest on the
 * writer and the checker.
 */

const BANKS_DIR = join(process.cwd(), 'src/data/games/banks')
const TEXTS_DIR = join(process.cwd(), 'src/data/full-texts')

/** Fields that hold the line as the book prints it, gaps aside. */
const LINE_FIELDS = ['sentence', 'quote', 'extract', 'example', 'correct', 'text'] as const
/** Games whose right option is the line as printed (the others are its faults). */
const RIGHT_OPTION_IS_THE_LINE = new Set([
  'apostrophe-ace',
  'punctuation-repair',
  'capital-letter-quest',
  'common-error-fixer',
])

interface Held {
  slug: string
  title: string
  author: string
  body: string
  /**
   * Another printing the site holds and students sit: a board anthology's,
   * printed line by line on the poem's page. The Edexcel IGCSE anthology
   * prints Keats's April 1819 text of La Belle Dame ("The sedge has withered
   * from the lake") where the held edition has the 1820 text ("is withered"),
   * and "Tyger, Tyger, burning bright," with commas the held Blake lacks; a
   * game following the anthology follows what the student reads.
   */
  printings: string[]
}

/** Poem pages whose printed lines are a board anthology's text. */
const ANTHOLOGY_PAGES = ['src/app/igcse/edexcel/poetry']

/** A poem page's printed lines: its `text: '...'` entries, in order. */
function pagePrinting(slug: string): string[] {
  const out: string[] = []
  for (const dir of ANTHOLOGY_PAGES) {
    const file = join(process.cwd(), dir, slug, 'page.tsx')
    if (!existsSync(file)) continue
    const src = readFileSync(file, 'utf8')
    const printed = [...src.matchAll(/\btext:\s*'((?:[^'\\]|\\.)*)'/g)].map((m) =>
      m[1].replace(/\\'/g, "'"),
    )
    if (printed.length) out.push(normal(printed.join(' ')))
  }
  return out
}

/** Quotation marks and apostrophes, which are not compared. */
const QUOTE_MARKS = /['"‘’ʼ“”«»]/g
/** Dash styles, which are not compared (a spaced hyphen is one too). */
const DASHES = /\s*(—|–|―|--)\s*|\s+-\s+/g

function normal(s: string): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z]+;/g, ' ')
    .replace(QUOTE_MARKS, '')
    .replace(DASHES, ' ')
    .replace(/\s+\/\s+/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim()
}

/** A gap a student fills, and the cue beside it ("___ (live)"). */
const GAP_WITH_CUE = /_{2,}\s*\(\s*[\w' ]{1,24}\s*\)/g
const GAPS = /_{2,}|[⟨⟩]|\[\.\.\.\]|\.\.\.|…|\u0001/

/** The parts of a printed line between its answer gaps. */
function parts(line: string): string[] {
  return line
    .replace(GAP_WITH_CUE, '\u0001')
    .split(GAPS)
    .map((p) => normal(p).replace(/^[\s.,;:!?]+|[\s.,;:!?]+$/g, ''))
    .filter((p) => p.split(' ').filter(Boolean).length >= 4)
}

/** The words a line puts in quotation marks: a quotation framed by our own words. */
const QUOTED = /(?:^|[\s(:])[‘“"'](.+?)[’”"'](?=$|[\s.,;:!?)])/g
function quoted(line: string): string[] {
  return [...line.matchAll(QUOTED)].map((m) => m[1])
}

const held: Held[] = []
for (const f of readdirSync(TEXTS_DIR).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
  const slug = f.replace(/\.ts$/, '')
  // Left out of all agent work and every game (a content filter stops it).
  if (slug === 'do-not-go-gentle-into-that-good-night') continue
  const mod = (await import(`../data/full-texts/${f}`)) as Record<string, unknown>
  for (const v of Object.values(mod)) {
    const t = v as { title?: string; author?: string; sections?: { content?: string }[] }
    if (!t || typeof t.title !== 'string' || !Array.isArray(t.sections)) continue
    held.push({
      slug,
      title: t.title,
      author: t.author ?? '',
      body: normal(t.sections.map((s) => s.content ?? '').join(' ')),
      printings: pagePrinting(slug),
    })
  }
}

/** Ways a source names a held text, beyond its title. */
const ALIASES: Record<string, string[]> = {
  'jekyll-and-hyde': ['jekyll and hyde', 'dr jekyll'],
  'a-midsummer-nights-dream': ['midsummer'],
  // Held as "King Henry V" and "Sonnet 116: Let me not...", cited without.
  'henry-v': ['henry v'],
  'sonnet-116': ['sonnet 116'],
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function heldFor(source: string): Held | null {
  const s = normal(source)
  const found = held.filter((h) => {
    const title = normal(h.title)
    const names = [title, title.replace(/^the /, ''), ...(ALIASES[h.slug] ?? [])]
    if (!names.some((n) => new RegExp(`(^|[^a-z])${escape(n)}([^a-z]|$)`).test(s))) return false
    // A short title ("If", "Piano") counts only beside its author's name.
    if (title.length <= 8) return s.includes(normal(h.author).split(' ').pop() || '\u0001')
    return true
  })
  return found.length === 1 ? found[0] : null
}

interface Line {
  where: string
  part: string
  text: Held
}

/** Is this part in the held edition, or in an anthology printing of it? */
const inText = (text: Held, part: string) =>
  text.body.includes(part) || text.printings.some((p) => p.includes(part))

const lines: Line[] = []
for (const f of readdirSync(BANKS_DIR).filter((f) => f.endsWith('.ts'))) {
  const slug = f.replace(/\.ts$/, '')
  const mod = (await import(`../data/games/banks/${f}`)) as {
    BANK?: { items: readonly unknown[]; key: (i: never) => string }
  }
  const bank = mod.BANK
  if (!bank) continue
  for (const raw of bank.items) {
    const item = raw as Record<string, unknown>
    if (typeof item.source !== 'string') continue
    const text = heldFor(item.source)
    if (!text) continue
    const printed: string[] = []
    for (const field of LINE_FIELDS)
      if (typeof item[field] === 'string') printed.push(item[field] as string)
    if (Array.isArray(item.sentences))
      printed.push(
        ...(item.sentences as unknown[]).filter((x): x is string => typeof x === 'string'),
      )
    if (
      RIGHT_OPTION_IS_THE_LINE.has(slug) &&
      Array.isArray(item.options) &&
      typeof item.answerIndex === 'number'
    ) {
      const right = (item.options as unknown[])[item.answerIndex]
      if (typeof right === 'string') printed.push(right)
    }
    const where = `${slug}: ${bank.key(raw as never).slice(0, 60)}`
    for (const line of printed) {
      const whole = parts(line)
      // The line is the text's own, or it frames the text's words in quotes,
      // and then those words are what is held.
      const own = whole.every((p) => inText(text, p))
      const spans = own ? [] : quoted(line)
      const checked = own || !spans.length ? whole : spans.flatMap(parts)
      for (const part of checked) lines.push({ where, part, text })
    }
  }
}

describe('the real lines the skills games print', () => {
  it('are found, so this is not passing on nothing', () => {
    expect(lines.length).toBeGreaterThan(500)
    expect(new Set(lines.map((l) => l.where.split(':')[0])).size).toBeGreaterThan(8)
  })

  it('are the held text word for word', () => {
    const wrong = lines
      .filter((l) => !inText(l.text, l.part))
      .map((l) => `${l.where} | ${l.text.slug} | ${l.part.slice(0, 80)}`)
    expect(wrong, `${wrong.length} lines not in their text`).toEqual([])
  })
})
