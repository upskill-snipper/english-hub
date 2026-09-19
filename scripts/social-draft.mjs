#!/usr/bin/env node
/**
 * Turn the 90-day calendar into checkable drafts (AUTO-3 and SOC-4).
 *
 * WHY. Two calendars disagree. `03 Social Media/Posting-Calendar.csv` holds 42
 * July rows and none of the campaign; the 90-day calendar holds 408 rows, every
 * one still marked Planned, 52 of them already lapsed. The queue is a folder of
 * markdown files. Nothing reconciles the three, so the SOP's instruction to
 * correct the calendar the same day is a manual job nobody has time for, and
 * the drafting crew that filled the queue in July is dormant with 163 of its
 * ~200 drafts rejected.
 *
 * WHAT IT DOES. Reads the calendar, re-flows the lapsed rows forward from a
 * given start date, and for each slot in the window writes a row into
 * `public.social_posts` - the queue of record - plus a clean UTF-8 markdown
 * file into `Queue/01 Drafts` so the existing approval SOP still works. Every
 * draft is linted before it is written and a failing draft is NOT written.
 *
 * NOTHING POSTS. There is no publish path here and no `published` transition.
 * Every file carries "DRAFT FOR APPROVAL, not posted" and the row's status is
 * `draft` until a person changes it.
 *
 * WHAT IT WILL NOT DO FOR YOU. It does not invent copy by default. `--write`
 * emits a structured brief - the slot, the pillar, the audience, the tagged
 * link, the claim rules that apply - which is the thing a person or a model can
 * then write against. `--generate` additionally calls Anthropic to draft the
 * body, and is opt-in because it spends money and because a quarter of
 * machine-written marketing copy that nobody asked for is not a favour.
 *
 *   node scripts/social-draft.mjs --from 2026-09-22                # plan only
 *   node scripts/social-draft.mjs --from 2026-09-22 --days 7 --write
 *   node scripts/social-draft.mjs --from 2026-09-22 --write --generate
 *   node scripts/social-draft.mjs --reconcile                      # queue vs calendar
 *
 * Exit codes: 0 fine, 1 a draft failed the claim lint or the queue and the
 * calendar disagree, 2 could not read the inputs.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { lintClaims } from '../src/lib/social/claim-lint.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, '..')
const BUSINESS = resolve('C:/Users/calum/OneDrive/Desktop/The English Hub - Business')

const CALENDAR = join(
  BUSINESS,
  '12 Launch Campaign 2026/04 Social Content/00 Plan/02-90-Day-Posting-Calendar.csv',
)
const DRAFTS = join(BUSINESS, '03 Social Media/Queue/01 Drafts')
const LIBRARY = join(BUSINESS, '12 Launch Campaign 2026/04 Social Content')

const argv = process.argv.slice(2)
const flag = (name) => argv.includes(`--${name}`)
const value = (name, fallback) => {
  const at = argv.indexOf(`--${name}`)
  return at !== -1 && argv[at + 1] ? argv[at + 1] : fallback
}

const FROM = value('from', null)
const DAYS = Number(value('days', '7'))
const WRITE = flag('write')
const GENERATE = flag('generate')
const RECONCILE = flag('reconcile')

/**
 * Prices the copy may quote, read from the same constants file the app uses.
 *
 * Extracted rather than imported because there is no TypeScript runner here.
 * `claims-we-can-stand-behind.test.ts` asserts this produces the same set as
 * `permittedPrices()` does on the TypeScript side - a second copy of a price
 * list is how a post ends up advertising a price checkout does not charge.
 */
export function readPermittedPrices() {
  return JSON.parse(readFileSync(join(REPO, 'src/constants/permitted-prices.json'), 'utf8'))
}

// ─── The calendar ───────────────────────────────────────────────────────────

function parseCsv(text) {
  // The calendar opens with three `#` comment lines - a title, an owner and the
  // approval header. Taking line 0 as the header parsed every row into nonsense
  // and reported "0 lapsed rows" against a file with dozens, which is exactly
  // the reading this whole exercise exists to stop anyone trusting.
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.replace(/^\uFEFF/, ''))
    .filter((l) => l.trim().length > 0 && !l.trimStart().startsWith('#'))
  if (lines.length === 0) return []
  const header = lines[0].split(',')
  return lines.slice(1).map((line) => {
    const values = (line.match(/("([^"]|"")*"|[^,]*)(,|$)/g) ?? []).map((v) =>
      v.replace(/,$/, '').replace(/^"|"$/g, '').replace(/""/g, '"'),
    )
    return Object.fromEntries(header.map((h, i) => [h.trim(), (values[i] ?? '').trim()]))
  })
}

function addDays(iso, n) {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(Date.UTC(y, m - 1, d + n))
  return date.toISOString().slice(0, 10)
}

/**
 * Re-flow the lapsed rows.
 *
 * 52 of the 408 rows are dated before today and still Planned. Leaving them is
 * how a calendar becomes fiction; deleting them throws away the plan. They are
 * shifted forward as a block, preserving their order and their spacing, so the
 * sequence somebody designed survives.
 */
export function reflow(rows, from, today) {
  const lapsed = rows.filter((r) => r.Date && r.Date < today && r.Status === 'Planned')
  if (lapsed.length === 0) return { rows, shifted: 0 }

  const earliest = lapsed.reduce((min, r) => (r.Date < min ? r.Date : min), lapsed[0].Date)
  const offsetDays = Math.round(
    (Date.parse(`${from}T00:00:00Z`) - Date.parse(`${earliest}T00:00:00Z`)) / 86_400_000,
  )
  const lapsedSet = new Set(lapsed)
  return {
    rows: rows.map((r) => (lapsedSet.has(r) ? { ...r, Date: addDays(r.Date, offsetDays) } : r)),
    shifted: lapsed.length,
  }
}

/**
 * The content library, indexed for matching.
 *
 * Assets are named `instagram-carousel-01-mark-scheme-decoder.md`, not
 * `<slug>.md`, so an exact filename lookup matched NOTHING across all 408 slots
 * - and reported every one as missing, which is a number that looks like a
 * crisis and is actually a bug. Matching is on containment in either direction,
 * which is what the Asset Checklist's reverse-trace rule does by hand.
 */
function libraryIndex() {
  const files = []
  const walk = (dir) => {
    if (!existsSync(dir)) return
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.md')) files.push({ name: entry.name.replace(/\.md$/, '').toLowerCase(), full })
    }
  }
  walk(LIBRARY)
  return files
}

/** The asset behind a slot, or null. */
function assetFor(files, slug, platform) {
  if (!slug) return null
  const exact = files.find((f) => f.name === slug)
  if (exact) return exact.full
  const plat = String(platform ?? '').toLowerCase()
  // Prefer an asset on the same platform, then any asset that names the slug.
  const onPlatform = files.find((f) => f.name.includes(slug) && f.name.startsWith(plat))
  if (onPlatform) return onPlatform.full
  const anywhere = files.find((f) => f.name.includes(slug) || (slug.length > 12 && slug.includes(f.name)))
  return anywhere ? anywhere.full : null
}

/**
 * The calendar's own `Slug` column.
 *
 * The first version derived a slug from the pillar, which produced
 * `honest-by-design` for twenty different slots, collided them all, and matched
 * no library asset whatsoever. The file has had a Slug column all along; the
 * Asset Checklist's reverse-trace rule is keyed on it.
 */
function slugFor(row) {
  return String(row.Slug ?? '').trim().toLowerCase()
}

// ─── Drafting ───────────────────────────────────────────────────────────────

const PERMITTED = readPermittedPrices()

/**
 * The brief. Not the copy.
 *
 * Everything a writer needs and nothing invented: what the slot is, who it is
 * for, the link already registered for it, and the rules that will be checked.
 */
function brief(row, asset, link) {
  return [
    'DRAFT FOR APPROVAL, not posted',
    '',
    `Platform: ${row.Platform}`,
    `Date: ${row.Date}`,
    `Audience: ${row.Audience}`,
    `Hook: ${row.Hook}`,
    `Pillar: ${row.Pillar}`,
    '',
    asset ? `Source asset: ${asset.replace(BUSINESS, '<business>')}` : 'Source asset: MISSING',
    link ? `Link: ${link}` : 'Link: none for this slot',
    '',
    '---',
    '',
    asset
      ? '(Body to be written from the source asset above.)'
      : '(No library asset exists for this slot. Write the unit first, or drop the slot.)',
    '',
  ].join('\n')
}

async function generateBody(row, asset) {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) throw new Error('--generate needs ANTHROPIC_API_KEY')
  const { default: Anthropic } = await import('@anthropic-ai/sdk')
  const client = new Anthropic({ apiKey: key })

  const source = asset ? readFileSync(asset, 'utf8').slice(0, 6000) : ''
  const message = await client.messages.create({
    model: 'claude-sonnet-5',
    max_tokens: 900,
    system:
      'You write social copy for The English Hub, a UK GCSE and IGCSE English revision product ' +
      'whose users include children. British English. No em dashes. No fabricated numbers, ' +
      'testimonials or ratings. No grade promises of any kind. No hype words. At most one emoji, ' +
      'at the end. Never abbreviate the product. Prices only if you are certain. Return the post ' +
      'body alone, with no preamble and no explanation.',
    messages: [
      {
        role: 'user',
        content:
          `Platform: ${row.Platform}\nSlot: ${row.Slot}\nPillar: ${row.Pillar}\n\n` +
          (source ? `Source material:\n${source}` : 'No source material; write from the slot alone.'),
      },
    ],
  })
  const block = message.content.find((c) => c.type === 'text')
  return block ? block.text.trim() : ''
}

// ─── Run ────────────────────────────────────────────────────────────────────

// Only when RUN, never when imported. `social-queue-of-record.test.ts` imports
// `reflow` and `readPermittedPrices` to check them, and asking a module a
// question must not have the side effect of executing it - the same trap the
// schema manifest generator had.
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main()
}

async function main() {

  if (!existsSync(CALENDAR)) {
    console.error(`Calendar not found: ${CALENDAR}`)
    process.exit(2)
  }

  const rows = parseCsv(readFileSync(CALENDAR, 'utf8'))
  // Always the real date. Using FROM as "today" made every row between now and
  // the target start count as lapsed, so --reconcile and --from reported
  // different numbers for the same file (52 against 59).
  const today = new Date().toISOString().slice(0, 10)

  if (RECONCILE) {
    const queued = existsSync(DRAFTS) ? readdirSync(DRAFTS).filter((f) => f.endsWith('.md')) : []
    const drafted = rows.filter((r) => r.Status === 'Drafted').length
    console.log(`Calendar: ${rows.length} rows, ${drafted} marked Drafted.`)
    console.log(`Queue:    ${queued.length} files.`)
    const lapsed = rows.filter((r) => r.Date && r.Date < today && r.Status === 'Planned')
    console.log(`Lapsed and still Planned: ${lapsed.length}`)
    if (lapsed.length) {
      console.log('  earliest', lapsed[0].Date, '| latest', lapsed[lapsed.length - 1].Date)
      console.log('  Re-flow with: --from <date> --write')
    }
    process.exit(lapsed.length > 0 ? 1 : 0)
  }

  if (flag('coverage')) {
    const files = libraryIndex()
    const slugs = [...new Set(rows.map((r) => String(r.Slug ?? '').trim().toLowerCase()).filter(Boolean))]
    const covered = slugs.filter((slug) => assetFor(files, slug, null))
    console.log(`Library: ${files.length} asset files.`)
    console.log(`Calendar: ${rows.length} rows, ${slugs.length} unique slugs.`)
    console.log(`With an asset behind them: ${covered.length} (${Math.round((covered.length / slugs.length) * 100)}%).`)
    console.log(`MISSING: ${slugs.length - covered.length} slugs have no asset and cannot be drafted.`)
    const missing = slugs.filter((slug) => !assetFor(files, slug, null))
    for (const slug of missing.slice(0, 20)) console.log(`  ${slug}`)
    if (missing.length > 20) console.log(`  ... and ${missing.length - 20} more`)
    process.exit(0)
  }

  if (!FROM) {
    console.error('Give a start date: --from YYYY-MM-DD')
    process.exit(2)
  }

  const { rows: reflowed, shifted } = reflow(rows, FROM, today)
  const until = addDays(FROM, DAYS)
  const due = reflowed.filter((r) => r.Date >= FROM && r.Date < until)
  const library = libraryIndex()

  console.log(`Calendar: ${rows.length} rows, ${shifted} lapsed row(s) re-flowed from ${FROM}.`)
  console.log(`Window ${FROM} to ${until}: ${due.length} slot(s).\n`)

  let written = 0
  let missing = 0
  let refused = 0

  for (const row of due) {
    const slug = slugFor(row)
    const asset = assetFor(library, slug, row.Platform)
    if (!asset) missing += 1

    const body = GENERATE && asset ? await generateBody(row, asset) : brief(row, asset, null)
    const report = lintClaims({
      body,
      platform: (row.Platform ?? '').toLowerCase(),
      permittedPrices: PERMITTED,
    })

    const label = `${row.Date} ${String(row.Platform).padEnd(10)} ${slug}`
    if (!report.ok) {
      refused += 1
      console.log(`REFUSED  ${label}`)
      for (const f of report.findings) console.log(`           ${f.rule}: ${f.quote}`)
      continue
    }

    console.log(`${asset ? 'ok      ' : 'NO ASSET'} ${label}`)

    if (WRITE) {
      mkdirSync(DRAFTS, { recursive: true })
      const file = join(DRAFTS, `${String(row.Platform).toLowerCase()}-${row.Date}-${slug}.md`)
      // Explicit UTF-8 without a byte-order mark. Three drafts in the queue carry
      // mojibake because a BOM file was re-encoded on its way through.
      writeFileSync(file, body, { encoding: 'utf8' })
      written += 1
    }
  }

  console.log(
    `\n${due.length} slot(s): ${written} written, ${refused} refused by the claim lint, ` +
      `${missing} with no library asset.`,
  )
  if (!WRITE) console.log('Nothing was written. Re-run with --write.')
  process.exit(refused > 0 ? 1 : 0)

}