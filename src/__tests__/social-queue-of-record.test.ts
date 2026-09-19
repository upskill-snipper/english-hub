import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { permittedPrices } from '@/lib/social/permitted-prices'
// A Node script, imported here only to compare its rules against the app side.
import { readPermittedPrices, reflow } from '../../scripts/social-draft.mjs'

/**
 * The queue of record, and the drafter that fills it (AUTO-3, SOC-4).
 *
 * THE DEFECT. Two calendars disagree. `03 Social Media/Posting-Calendar.csv`
 * holds 42 July rows and none of the campaign; the 90-day calendar holds 408
 * rows, every one still marked Planned. The queue is a folder of markdown
 * files. Nothing reconciles the three, so the SOP's instruction to correct the
 * calendar the same day is a job nobody has time for.
 *
 * WHAT THE SCRIPT FOUND, once it could read the file at all. Its first parser
 * took line 0 as the header - the calendar opens with three `#` comment lines -
 * so every row parsed into nonsense and it reported "0 lapsed rows" against a
 * file with dozens. Repaired, it independently reproduces the audit's numbers:
 * 408 rows, 52 lapsed and still Planned, 219 unique slugs.
 *
 * AND THE FINDING THAT IS BIGGER THAN THE ITEM SAID. The item expected a
 * shortfall between 219 slugs and ~135 library assets. The real position is
 * that the calendar and the library share NO naming convention at all -
 * `launch-day-open` against `instagram-carousel-01-mark-scheme-decoder` - so
 * 217 of 219 slots have nothing behind them under any automated match. The two
 * artefacts were built independently. The Asset Checklist's reverse-trace rule
 * cannot be satisfied mechanically until one of them is renamed or a mapping is
 * written, and that is a decision about the plan, not a script.
 */

const ROOT = process.cwd()
const SCRIPT = readFileSync(join(ROOT, 'scripts/social-draft.mjs'), 'utf8')
const MIGRATION = readFileSync(join(ROOT, 'supabase/migrations/20260919_social_posts.sql'), 'utf8')

describe('the migration', () => {
  it('holds no personal data, which is why it touches no RLS on a child table', () => {
    // Comments stripped first: the migration NAMES the things it does not hold
    // ("No pupil, no teacher, no school"), so a plain search finds its own
    // explanation. Fifth time this shape has bitten in one session.
    const sql = MIGRATION.replace(/^\s*--.*$/gm, '').replace(/COMMENT ON [\s\S]*?;/g, '')
    for (const forbidden of ['user_id', 'pupil', 'email', 'student_id', 'school_id']) {
      expect(sql.toLowerCase()).not.toContain(forbidden)
    }
  })

  it('enables row-level security and grants nothing to anon', () => {
    expect(MIGRATION).toMatch(/ALTER TABLE public\.social_posts ENABLE ROW LEVEL SECURITY/)
    expect(MIGRATION).toMatch(/REVOKE ALL ON public\.social_posts FROM anon, authenticated/)
  })

  it('has one row per slot, so the queue cannot grow a duplicate of every post', () => {
    expect(MIGRATION).toMatch(/UNIQUE \(platform, calendar_slug\)/)
  })

  it('stores the claim report, replacing a line of prose nothing read', () => {
    expect(MIGRATION).toContain('claim_report')
  })

  it('constrains status, so "published" cannot be set by a typo', () => {
    expect(MIGRATION).toMatch(/CHECK \(status IN \(/)
  })
})

describe('the calendar parser', () => {
  it('skips the comment lines the file opens with', () => {
    // Taking line 0 as the header parsed every row into nonsense and reported
    // "0 lapsed" for a file with 52. This is the assertion that stops it.
    expect(SCRIPT).toContain("!l.trimStart().startsWith('#')")
  })

  it('reads the calendar\u2019s own Slug column rather than inventing one', () => {
    // Deriving a slug from the pillar produced `honest-by-design` for twenty
    // different slots, collided them, and matched no asset at all.
    expect(SCRIPT).toMatch(/row\.Slug/)
    expect(SCRIPT).not.toMatch(/\$\{row\.Slot \?\? ''\}/)
  })
})

describe('re-flowing the lapsed rows', () => {
  const rows = [
    { Date: '2026-09-01', Status: 'Planned' },
    { Date: '2026-09-03', Status: 'Planned' },
    { Date: '2026-09-30', Status: 'Planned' },
    { Date: '2026-09-02', Status: 'Posted' },
  ]

  it('moves only what has lapsed and is still Planned', () => {
    const { rows: out, shifted } = reflow(rows, '2026-09-22', '2026-09-19')
    expect(shifted).toBe(2)
    expect(out[2].Date).toBe('2026-09-30')
    expect(out[3].Date).toBe('2026-09-02')
  })

  it('preserves the spacing somebody designed', () => {
    // 1 September and 3 September are two days apart. They must still be two
    // days apart after the shift, or the sequence is destroyed rather than
    // rescued.
    const { rows: out } = reflow(rows, '2026-09-22', '2026-09-19')
    expect(out[0].Date).toBe('2026-09-22')
    expect(out[1].Date).toBe('2026-09-24')
  })

  it('does nothing when nothing has lapsed', () => {
    const { shifted } = reflow(rows, '2026-09-22', '2026-08-01')
    expect(shifted).toBe(0)
  })
})

describe('the two copies of the price list', () => {
  it('agree, because a second copy is how a wrong price reaches a post', () => {
    // The lint runs under plain Node in the script and inside the app, and
    // there is no TypeScript runner here, so the prices are read twice. This is
    // what stops the two drifting.
    expect(readPermittedPrices().sort()).toEqual(permittedPrices().sort())
  })

  it('is not empty, or the price rule checks nothing', () => {
    expect(permittedPrices().length).toBeGreaterThan(10)
  })
})

describe('what the drafter will not do', () => {
  it('never publishes', () => {
    const code = SCRIPT.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    expect(code).not.toMatch(/status:\s*'published'/)
    expect(code).not.toMatch(/fetch\(['"`]https:\/\/(?!api\.anthropic)/)
  })

  it('puts the approval header on every draft it writes', () => {
    expect(SCRIPT).toContain("'DRAFT FOR APPROVAL, not posted'")
  })

  it('will not write a draft that fails the claim lint', () => {
    const code = SCRIPT.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    const at = code.indexOf('if (!report.ok)')
    expect(at).toBeGreaterThan(-1)
    // The refusal must come BEFORE the write, or the lint is decoration.
    expect(at).toBeLessThan(code.indexOf('writeFileSync(file'))
    expect(code.slice(at, at + 200)).toContain('continue')
  })

  it('invents copy only when asked', () => {
    // Generating a quarter of machine-written marketing nobody asked for is not
    // a favour, and it spends money.
    expect(SCRIPT).toMatch(/GENERATE && asset/)
    expect(SCRIPT).toContain("flag('generate')")
  })

  it('writes UTF-8 without a byte-order mark', () => {
    // Three drafts in the queue carry mojibake because a BOM file was
    // re-encoded on its way through the pipeline.
    expect(SCRIPT).toMatch(/encoding: 'utf8'/)
  })
})

describe('the live calendar', () => {
  const CALENDAR =
    'C:/Users/calum/OneDrive/Desktop/The English Hub - Business/' +
    '12 Launch Campaign 2026/04 Social Content/00 Plan/02-90-Day-Posting-Calendar.csv'

  it.skipIf(!existsSync(CALENDAR))('still has the shape the audit described', () => {
    const lines = readFileSync(CALENDAR, 'utf8')
      .split(/\r?\n/)
      .map((l) => l.replace(/^\uFEFF/, ''))
      .filter((l) => l.trim().length > 0 && !l.trimStart().startsWith('#'))
    expect(lines[0].split(',')).toContain('Slug')
    // 408 data rows. If this changes the numbers in the docblock above are
    // stale and should be re-measured rather than trusted.
    expect(lines.length - 1).toBe(408)
  })
})
