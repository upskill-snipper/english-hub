#!/usr/bin/env node
/**
 * Create and maintain `09 Measurement/Link-Register.csv` (ANA-4).
 *
 * WHY. The KPI framework's §8.1 rule 5 says every published link is registered
 * before it is used, one row per link, and that an unregistered link is an
 * unattributable link. The file did not exist. The consequence is already in
 * production: of the 11 profiles carrying an attribution, two arrived as
 * `utm_source=ig` with `utm_medium=social` - neither value is in either closed
 * list, and neither will ever join to `instagram` or `social-organic` in a
 * report. Nobody noticed, because both look almost right.
 *
 * (The other nine came from `chatgpt.com` with no medium and no campaign at
 * all: an answer engine already sending signups that no campaign can claim.
 * That is not a defect, but it is worth knowing before deciding what to double.)
 *
 * WHAT IT WRITES. The bio and link-in-bio placement for each platform, which
 * are permanent and therefore the most expensive to get wrong, plus a row for
 * every draft in the queue that names a destination. Every URL is produced by
 * `buildTaggedUrl`, so a value outside the vocabulary cannot reach the file.
 *
 * It is idempotent: existing rows are matched on `full_url` and kept with their
 * original `date_created`, so re-running does not rewrite history and the diff
 * shows only what is genuinely new.
 *
 *   node scripts/build-link-register.mjs            # report only
 *   node scripts/build-link-register.mjs --apply    # write the CSV
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, '..')
const APPLY = process.argv.includes('--apply')

const BUSINESS = resolve(
  'C:/Users/calum/OneDrive/Desktop/The English Hub - Business',
)
const REGISTER = join(BUSINESS, '12 Launch Campaign 2026/09 Measurement/Link-Register.csv')
const QUEUE = join(BUSINESS, '03 Social Media/Queue/01 Drafts')

/** The date every generated row is stamped with, passed in rather than read from the clock. */
const TODAY = process.env.LINK_REGISTER_DATE ?? new Date().toISOString().slice(0, 10)

// The builder is TypeScript, so its rules are mirrored here rather than
// imported. `src/__tests__/link-register.test.ts` asserts the two agree - a
// second copy of a vocabulary is exactly how `ig` happened, so it is checked.
const MEDIUMS = new Set([
  'email',
  'newsletter',
  'dm',
  'social-organic',
  'social-paid',
  'cpc',
  'referral',
  'affiliate',
  'pdf',
  'qr',
  'profile',
])
const CAMPAIGNS = new Set([
  'launch-2026-09',
  'founding-schools',
  'parents-autumn',
  'ielts-band',
  'gulf-igcse',
  'seo-evergreen',
  'creators-2026',
])
const SOURCES = new Set([
  'linkedin',
  'instagram',
  'tiktok',
  'youtube',
  'facebook',
  'x',
  'newsletter',
  'email-sequence',
  'google-ads',
  'meta-ads',
])
const SOURCE_PREFIXES = ['partner-', 'affiliate-', 'pdf-', 'qr-']
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const ORIGIN = 'https://theenglishhub.app'

const COLUMNS = [
  'date_created',
  'channel',
  'asset_file',
  'destination_path',
  'full_url',
  'campaign',
  'source',
  'medium',
  'content',
  'notes',
]

function buildTaggedUrl({ destination, source, medium, campaign, content }) {
  if (!destination.startsWith('/')) throw new Error(`destination must start with "/": ${destination}`)
  for (const [field, value] of [
    ['source', source],
    ['content', content],
  ]) {
    if (!SLUG.test(value)) throw new Error(`utm_${field} "${value}" is not a lowercase slug`)
    if (value.includes('@') || /\b(school|academy|college)\b/.test(value)) {
      throw new Error(`utm_${field} "${value}" may name a person or institution (KPI rule 2)`)
    }
  }
  const knownSource =
    SOURCES.has(source) || SOURCE_PREFIXES.some((p) => source.startsWith(p) && source.length > p.length)
  if (!knownSource) throw new Error(`utm_source "${source}" is outside the vocabulary`)
  if (!MEDIUMS.has(medium)) throw new Error(`utm_medium "${medium}" is outside the closed list`)
  if (!CAMPAIGNS.has(campaign)) throw new Error(`utm_campaign "${campaign}" is outside the closed list`)

  const url = new URL(destination, ORIGIN)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', medium)
  url.searchParams.set('utm_campaign', campaign)
  url.searchParams.set('utm_content', content)
  return url.toString()
}

/**
 * The permanent placements.
 *
 * A bio link is set once and lives for the life of the account, so it is the
 * one link where an untagged or mistagged URL costs the most. Destinations are
 * chosen per audience: the parent-facing platforms land on /for-parents, the
 * professional one on /schools, the rest on the homepage.
 */
const PLACEMENTS = [
  { channel: 'instagram', source: 'instagram', destination: '/for-parents', campaign: 'parents-autumn' },
  { channel: 'tiktok', source: 'tiktok', destination: '/', campaign: 'launch-2026-09' },
  { channel: 'youtube', source: 'youtube', destination: '/', campaign: 'seo-evergreen' },
  { channel: 'linkedin', source: 'linkedin', destination: '/schools', campaign: 'founding-schools' },
  { channel: 'facebook', source: 'facebook', destination: '/for-parents', campaign: 'parents-autumn' },
  { channel: 'x', source: 'x', destination: '/', campaign: 'launch-2026-09' },
]

function placementRows() {
  const rows = []
  for (const p of PLACEMENTS) {
    rows.push({
      date_created: TODAY,
      channel: p.channel,
      asset_file: '(profile bio)',
      destination_path: p.destination,
      full_url: buildTaggedUrl({
        destination: p.destination,
        source: p.source,
        medium: 'profile',
        campaign: p.campaign,
        content: 'bio-link',
      }),
      campaign: p.campaign,
      source: p.source,
      medium: 'profile',
      content: 'bio-link',
      notes: 'Permanent placement. Set once when the account is created.',
    })
  }
  return rows
}

/** One row per queued draft, using its own filename as the content slug. */
function draftRows() {
  if (!existsSync(QUEUE)) return []
  const rows = []
  for (const file of readdirSync(QUEUE).filter((f) => f.endsWith('.md')).sort()) {
    const m = file.match(/^([a-z]+)-(\d{4}-\d{2}-\d{2})-(.+)\.md$/)
    if (!m) continue
    const [, platform, , slug] = m
    if (!SOURCES.has(platform)) continue // blog and newsletter drafts are not outbound social
    const content = slug.replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
    if (!SLUG.test(content)) continue

    const campaign =
      platform === 'linkedin'
        ? 'founding-schools'
        : platform === 'facebook'
          ? 'parents-autumn'
          : 'launch-2026-09'
    const destination =
      campaign === 'founding-schools' ? '/schools' : campaign === 'parents-autumn' ? '/for-parents' : '/'
    // A newsletter is a broadcast, not a social post. The first version of this
    // tagged every queued newsletter issue as `social-organic`, which would have
    // put the owned channel into the social column of every report - the same
    // class of error as `ig`, arriving from the tool meant to prevent it.
    const medium = platform === 'newsletter' ? 'newsletter' : 'social-organic'

    rows.push({
      date_created: TODAY,
      channel: platform,
      asset_file: `03 Social Media/Queue/01 Drafts/${file}`,
      destination_path: destination,
      full_url: buildTaggedUrl({ destination, source: platform, medium, campaign, content }),
      campaign,
      source: platform,
      medium,
      content,
      notes: 'Generated from the queued draft. Confirm the destination before posting.',
    })
  }
  return rows
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0)
  if (lines.length === 0) return []
  const header = lines[0].replace(/^\uFEFF/, '').split(',')
  return lines.slice(1).map((line) => {
    // Values here never contain a comma inside quotes today, but handle it.
    const values = line.match(/("([^"]|"")*"|[^,]*)(,|$)/g) ?? []
    const cleaned = values.map((v) => v.replace(/,$/, '').replace(/^"|"$/g, '').replace(/""/g, '"'))
    return Object.fromEntries(header.map((h, i) => [h, cleaned[i] ?? '']))
  })
}

function toCsv(rows) {
  const esc = (v) => (/[",\n\r]/.test(v) ? `"${String(v).replace(/"/g, '""')}"` : v)
  return [COLUMNS.join(','), ...rows.map((r) => COLUMNS.map((c) => esc(r[c] ?? '')).join(','))].join('\n') + '\n'
}

// ─── Run ────────────────────────────────────────────────────────────────────

const existing = existsSync(REGISTER) ? parseCsv(readFileSync(REGISTER, 'utf8')) : []
const byUrl = new Map(existing.map((r) => [r.full_url, r]))

const generated = [...placementRows(), ...draftRows()]
let added = 0
for (const row of generated) {
  if (byUrl.has(row.full_url)) continue
  byUrl.set(row.full_url, row)
  added += 1
}

const all = [...byUrl.values()].sort(
  (a, b) => a.channel.localeCompare(b.channel) || a.content.localeCompare(b.content),
)

console.log(`Register: ${existing.length} existing row(s), ${added} new, ${all.length} total.`)
if (added > 0) {
  console.log('\nNew rows:')
  for (const row of generated.filter((r) => !existing.some((e) => e.full_url === r.full_url))) {
    console.log(`  ${row.channel.padEnd(10)} ${row.content.padEnd(44)} ${row.full_url}`)
  }
}

if (APPLY) {
  writeFileSync(REGISTER, toCsv(all), 'utf8')
  console.log(`\nWrote ${REGISTER.replace(BUSINESS, '<business>')}`)
} else {
  console.log('\nRe-run with --apply to write the register.')
}

// Keep the repo aware of where this lives without importing across the boundary.
if (!existsSync(join(REPO, 'src/lib/social/utm.ts'))) {
  console.error('WARNING: src/lib/social/utm.ts is missing; the two vocabularies cannot be compared.')
  process.exitCode = 1
}
