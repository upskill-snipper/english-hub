#!/usr/bin/env node
/**
 * Refuse a draft whose links are untagged, mistagged or unregistered (ANA-4).
 *
 * WHY. KPI framework §8.1: values come from closed lists, never improvised, and
 * every published link is registered before it is used. Nothing enforced
 * either. Two of the eleven attributed accounts in production arrived as
 * `utm_source=ig&utm_medium=social` - two values, both outside their list, both
 * close enough to the right ones to pass a human read. They will never join to
 * `instagram` or `social-organic` in any report, and the accounts they
 * represent are permanently unattributable.
 *
 * WHAT IT REFUSES, in the same shape as `scripts/check-placeholders.mjs`:
 *
 *   - a bare `theenglishhub.app` link with no `utm_` parameters at all
 *   - `utm_medium` or `utm_campaign` outside its closed list
 *   - `utm_source` outside the vocabulary or its four permitted prefixes
 *   - any value that is not lowercase letters, digits and hyphens
 *   - anything that looks like a person, a school or an email address in a tag,
 *     which is rule 2 and a safeguarding rule rather than a tidiness one
 *   - a tagged link that is not in `09 Measurement/Link-Register.csv`
 *
 * It does NOT refuse an untagged link to somebody else's site, or an internal
 * link inside the product: rule 3 says never tag an internal link, so a checker
 * that demanded tags everywhere would be enforcing the opposite of the rule.
 *
 *   node scripts/check-utm-links.mjs                  # the approved queue
 *   node scripts/check-utm-links.mjs --all            # drafts too
 *   node scripts/check-utm-links.mjs <file> [<file>]  # specific files
 *
 * Exit codes: 0 clean, 1 at least one refusal, 2 nothing to check.
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const BUSINESS = resolve('C:/Users/calum/OneDrive/Desktop/The English Hub - Business')
const REGISTER = join(BUSINESS, '12 Launch Campaign 2026/09 Measurement/Link-Register.csv')
const QUEUE = join(BUSINESS, '03 Social Media/Queue')

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

/** Every registered URL, so an unregistered one can be named. */
function registeredUrls() {
  if (!existsSync(REGISTER)) return null
  const lines = readFileSync(REGISTER, 'utf8').split(/\r?\n/).filter(Boolean)
  const header = lines[0].replace(/^\uFEFF/, '').split(',')
  const urlIndex = header.indexOf('full_url')
  if (urlIndex === -1) return null
  const out = new Set()
  for (const line of lines.slice(1)) {
    const values = (line.match(/("([^"]|"")*"|[^,]*)(,|$)/g) ?? []).map((v) =>
      v.replace(/,$/, '').replace(/^"|"$/g, ''),
    )
    if (values[urlIndex]) out.add(values[urlIndex])
  }
  return out
}

function filesToCheck() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'))
  if (args.length) return args

  const dirs = process.argv.includes('--all') ? ['01 Drafts', '02 Approved'] : ['02 Approved']
  const out = []
  for (const dir of dirs) {
    const full = join(QUEUE, dir)
    if (!existsSync(full) || !statSync(full).isDirectory()) continue
    for (const f of readdirSync(full)) {
      if (f.endsWith('.md')) out.push(join(full, f))
    }
  }
  return out
}

/**
 * Every path the product actually serves: a route file, or a redirect source.
 *
 * FOUND BY THIS CHECK, not predicted by the item. Two queued drafts link to
 * `/free-trial` and `/free-tier`. Neither exists and neither is a redirect,
 * so both are 404s - waiting in a queue to be posted to an audience. An
 * untagged link loses the attribution; a dead one loses the reader.
 *
 * Returns null when the route tree cannot be read, and the check is then
 * skipped rather than reporting everything as broken.
 */
function knownPaths() {
  const app = join(REPO, 'src/app')
  if (!existsSync(app)) return null
  const paths = new Set(['/'])
  const walk = (dir, prefix) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry)
      if (!statSync(full).isDirectory()) continue
      // Route groups `(x)` and private folders `_x` do not appear in the URL.
      if (entry.startsWith('_')) continue
      const segment = entry.startsWith('(') && entry.endsWith(')') ? '' : `/${entry}`
      const next = `${prefix}${segment}`
      if (existsSync(join(full, 'page.tsx')) || existsSync(join(full, 'page.ts'))) {
        paths.add(next || '/')
      }
      walk(full, next)
    }
  }
  walk(app, '')

  const redirects = join(REPO, 'src/lib/seo/route-redirects.json')
  if (existsSync(redirects)) {
    const table = JSON.parse(readFileSync(redirects, 'utf8'))
    for (const rule of table.redirects ?? []) paths.add(rule.source)
  }
  return paths
}

const routes = knownPaths()
const registered = registeredUrls()
const files = filesToCheck()
const problems = []

for (const file of files) {
  const text = readFileSync(file, 'utf8')
  const short = file.replace(BUSINESS, '<business>')

  // Every theenglishhub.app link in the file, tagged or not - INCLUDING the
  // bare `theenglishhub.app/free-trial` form, which is how every link in the
  // queue is actually written. The first version of this required a protocol,
  // found nothing in 36 files, and reported the queue clean. A checker that
  // matches none of the thing it checks is worse than no checker, because it
  // produces a green line that somebody trusts.
  //
  // `(?<![\w@.])` keeps `press@theenglishhub.app` out: an email address is not
  // an outbound link and tagging one would be nonsense.
  for (const m of text.matchAll(
    /(?<![\w@.])(?:https?:\/\/)?(?:www\.)?theenglishhub\.app(?:\/[^\s)\]"'<>]*)?/g,
  )) {
    const raw = m[0].replace(/[.,;:]+$/, '')
    // A bare mention of the domain with no path and no query is a brand
    // mention in prose, not a link to tag.
    const hasPathOrQuery = /theenglishhub\.app\/\S/.test(raw) || raw.includes('?')
    if (!hasPathOrQuery) continue

    let url
    try {
      url = new URL(raw.startsWith('http') ? raw : `https://${raw}`)
    } catch {
      problems.push({ file: short, url: raw, why: 'is not a parseable URL' })
      continue
    }

    // Checked FIRST, before the tag rules. The untagged branch below returns
    // early, so a link that is both untagged AND a 404 reported only the
    // smaller of its two problems.
    // Does the destination exist at all?
    if (routes) {
      const path = url.pathname.replace(/\/$/, '') || '/'
      // A dynamic segment cannot be checked by name, so anything under a route
      // that exists as a prefix is accepted.
      const known =
        routes.has(path) ||
        [...routes].some((r) => r !== '/' && (path === r || path.startsWith(`${r}/`)))
      if (!known) {
        problems.push({
          file: short,
          url: raw,
          why: `${path} is not a route and not a redirect - this link is a 404`,
        })
      }
    }

    const params = url.searchParams
    const has = ['utm_source', 'utm_medium', 'utm_campaign'].some((k) => params.has(k))
    if (!has) {
      problems.push({
        file: short,
        url: raw,
        why: 'is an outbound link with no UTM parameters - it will be unattributable',
      })
      continue
    }

    for (const [key, allowed] of [
      ['utm_medium', MEDIUMS],
      ['utm_campaign', CAMPAIGNS],
    ]) {
      const value = params.get(key)
      if (value === null) {
        problems.push({ file: short, url: raw, why: `has no ${key}` })
      } else if (!allowed.has(value)) {
        problems.push({
          file: short,
          url: raw,
          why: `${key}="${value}" is outside the closed list (KPI rule 4)`,
        })
      }
    }

    const source = params.get('utm_source')
    if (source === null) {
      problems.push({ file: short, url: raw, why: 'has no utm_source' })
    } else if (
      !SOURCES.has(source) &&
      !SOURCE_PREFIXES.some((p) => source.startsWith(p) && source.length > p.length)
    ) {
      problems.push({
        file: short,
        url: raw,
        why: `utm_source="${source}" is outside the vocabulary - production already holds "ig"`,
      })
    }

    for (const key of ['utm_source', 'utm_content', 'utm_campaign', 'utm_medium']) {
      const value = params.get(key)
      if (value === null) continue
      if (!SLUG.test(value)) {
        problems.push({
          file: short,
          url: raw,
          why: `${key}="${value}" is not lowercase letters, digits and hyphens (KPI rule 1)`,
        })
      }
      if (value.includes('@') || /\b(school|academy|college|grammar)\b/.test(value)) {
        problems.push({
          file: short,
          url: raw,
          why: `${key}="${value}" may name a person or an institution (KPI rule 2, safeguarding)`,
        })
      }
    }

    if (registered && !registered.has(raw)) {
      problems.push({
        file: short,
        url: raw,
        why: 'is not in Link-Register.csv - an unregistered link is an unattributable link (rule 5)',
      })
    }
  }
}

// ─── The calendar has somewhere to put the tagged URL ───────────────────────
//
// ANA-4 asked for a Tagged URL column on Posting-Calendar.csv, and the reason
// is sequencing rather than tidiness: the calendar is what Calum works from
// when posting, and a bio link or a pinned post is a PERMANENT placement. If
// the column is not there when the first account goes live, the tagged URL
// lives only in the register, the calendar shows an untagged one, and the
// placement that cannot easily be changed is the one that gets it wrong.
//
// Checked here rather than in its own script because this is the thing that
// already knows what a tagged link is, and a second script is a second thing
// to remember to run.
{
  const calendar = join(BUSINESS, '03 Social Media/Posting-Calendar.csv')
  if (existsSync(calendar)) {
    const rows = readFileSync(calendar, 'utf8')
      .replace(/^\uFEFF/, '')
      .split(/\r?\n/)
    const header = (rows[0] ?? '').split(',').map((h) => h.trim())
    if (!header.includes('Tagged URL')) {
      console.error('')
      console.error('Posting-Calendar.csv has no "Tagged URL" column.')
      console.error('  Posting from a calendar with no column for it is how an untagged bio link')
      console.error('  becomes permanent. Add the column before the first account goes live.')
      process.exit(1)
    }

    // A row naming a draft is a row about to be posted, so it needs its URL.
    const iDraft = header.indexOf('Draft file')
    const iTagged = header.indexOf('Tagged URL')
    const untagged = []
    for (const row of rows.slice(1)) {
      if (!row.trim()) continue
      const cells = row.split(',')
      const draft = (cells[iDraft] ?? '').trim()
      const tagged = (cells[iTagged] ?? '').trim()
      if (draft && !tagged) untagged.push(draft)
    }
    if (untagged.length) {
      console.error('')
      console.error(`${untagged.length} calendar row(s) name a draft but carry no tagged URL:`)
      for (const d of untagged.slice(0, 10)) console.error(`  ${d}`)
      process.exit(1)
    }
  }
}

if (!files.length) {
  console.log('Nothing to check.')
  process.exit(2)
}

if (registered === null) {
  console.error('Link-Register.csv is missing or has no full_url column.')
  console.error('Run: node scripts/build-link-register.mjs --apply')
  process.exit(1)
}

console.log(`Checked ${files.length} file(s) against ${registered.size} registered link(s).`)

if (problems.length) {
  console.log(`\nREFUSED (${problems.length}):`)
  for (const p of problems) {
    console.log(`  ${p.file}`)
    console.log(`    ${p.url}`)
    console.log(`    ${p.why}\n`)
  }
  process.exit(1)
}

console.log('Every outbound link is tagged from the vocabulary and registered.')
process.exit(0)
