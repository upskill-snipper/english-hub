/**
 * check-copy-quality.mjs - house-style linter for user-facing copy.
 *
 * The English Hub ships ~19,000 dictionary strings across three locales
 * plus inline prose. "Read it all once" does not scale and does not stay
 * fixed, so the rules that CAN be mechanised run here, in prebuild.
 *
 * TWO ZONES, deliberately different standards:
 *
 *   CHROME  - product and marketing voice: nav, headings, CTAs, metadata,
 *             pricing, FAQs, forms, errors, emails. House style is
 *             enforced strictly here because this is The English Hub
 *             speaking in its own voice.
 *
 *   CONTENT - the teaching corpus: set-text guides, poetry analysis,
 *             model answers, exam-technique pages, courses, games.
 *             Only structural faults are errors. Style rules are warnings
 *             because this prose legitimately quotes primary texts (a
 *             Steinbeck quotation keeps its American spelling) and uses
 *             literary vocabulary that the marketing voice bans
 *             ("revolutionary ideals" is correct about Animal Farm).
 *
 * Usage:
 *   node scripts/check-copy-quality.mjs           # errors fail the build
 *   node scripts/check-copy-quality.mjs --warn    # report all, exit 0
 *   node scripts/check-copy-quality.mjs --json    # machine-readable
 *   node scripts/check-copy-quality.mjs --zone=chrome
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ROOT = process.cwd()
const ARGS = process.argv.slice(2)
const WARN_ONLY = ARGS.includes('--warn')
const AS_JSON = ARGS.includes('--json')
const ZONE_FILTER = (ARGS.find((a) => a.startsWith('--zone=')) || '').split('=')[1] || null

// ─── Zone classification ──────────────────────────────────────────────
//
// Paths that render the teaching corpus rather than the product's own
// voice. Anything not listed here is chrome.
const CONTENT_PATTERNS = [
  /^src\/app\/(revision|resources|analysis|igcse|a-level|ks3|games|courses|learn|practice|mock-exams|assessment)\//,
  /^src\/app\/ielts\/learn\//,
  /^src\/app\/eal\/(?!page)/,
  /^src\/app\/demo\/student\/courses\//,
  /^src\/data\/analysis\//,
]

function zoneFor(rel) {
  return CONTENT_PATTERNS.some((re) => re.test(rel)) ? 'content' : 'chrome'
}

// ─── Rule vocabulary ──────────────────────────────────────────────────

const AMERICANISMS = [
  [/\bcolor(s|ed|ing)?\b/i, 'colour'],
  [/\bfavorite(s)?\b/i, 'favourite'],
  [/\bbehavior(s|al)?\b/i, 'behaviour'],
  [/\bhonor(s|ed|able)?\b/i, 'honour'],
  [/\bneighbor(s|hood)?\b/i, 'neighbour'],
  [/\borganiz(e|es|ed|ing|ation|ations)\b/i, 'organise / organisation'],
  [/\brecogniz(e|es|ed|ing)\b/i, 'recognise'],
  [/\bpersonaliz(e|es|ed|ing|ation)\b/i, 'personalise'],
  [/\bspecializ(e|es|ed|ing)\b/i, 'specialise'],
  [/\banalyze(s|d)?\b/i, 'analyse'],
  [/\bmemoriz(e|es|ed|ing)\b/i, 'memorise'],
  [/\bsummariz(e|es|ed|ing)\b/i, 'summarise'],
  [/\bemphasiz(e|es|ed|ing)\b/i, 'emphasise'],
  [/\bpractic(ing|ed)\b/i, 'practising / practised (the verb takes an s)'],
  [/\bto practice\b/i, 'to practise (the verb takes an s)'],
  [/\bcenter(s|ed)?\b/i, 'centre'],
  [/\btheater(s)?\b/i, 'theatre'],
  [/\bgray\b/i, 'grey'],
  [/\bcatalog(s)?\b/i, 'catalogue'],
  [/\bdefense\b/i, 'defence'],
  [/\boffense\b/i, 'offence'],
  [/\btravel(ing|ed)\b/i, 'travelling / travelled'],
  [/\bcancel(ing|ed)\b/i, 'cancelling / cancelled'],
  [/\benrollment\b/i, 'enrolment'],
  [/\bfulfill(s|ed|ing)?\b/i, 'fulfil / fulfils / fulfilled'],
  [/\bskillful\b/i, 'skilful'],
  [/\bgotten\b/i, 'got'],
  [/\b(freshman|sophomore|middle school)\b/i, 'UK school terminology'],
  [/\bgrade (?:9th|10th|11th|12th)\b/i, 'UK year groups (Year 10, Year 11)'],
]

const BANNED_HYPE = [
  /\brevolutionar(y|ise|ize)\b/i,
  /\bgame[- ]chang(er|ing)\b/i,
  /\bcutting[- ]edge\b/i,
  /\bworld[- ]class\b/i,
  /\bunlock your potential\b/i,
  /\bsuper ?charge\b/i,
  /\bnext[- ]level\b/i,
  /\bbest[- ]in[- ]class\b/i,
]

// A children's education product must never guarantee an outcome. These
// stay ERROR in both zones - there is no legitimate use.
const GRADE_PROMISES = [
  /\bguarantee(s|d)?\b[^.]{0,40}\bgrade/i,
  /\bgrade\b[^.]{0,30}\bis guaranteed\b/i,
  /\bwill (?:get|achieve|score|hit)\b[^.]{0,20}\bgrade \d/i,
  /\bimprove by (?:one|two|three|\d+) grades?\b/i,
  /\b(?:moved|went|gone) up two grades\b/i,
  /\bguaranteed results\b/i,
]

const RULES = [
  {
    id: 'missing-dict-key',
    both: 'error',
    test: (s) => /\[\[[a-z0-9_.]+\]\]/i.test(s),
    message: 'missing dictionary key leaking to the user as [[key]]',
  },
  {
    id: 'grade-promise',
    both: 'error',
    test: (s) => GRADE_PROMISES.some((re) => re.test(s)),
    message: 'outcome promise - forbidden on a children’s education product',
  },
  {
    id: 'em-dash',
    chrome: 'error',
    content: 'off', // literary quotation legitimately uses em dashes
    test: (s) => /—/.test(s),
    message: 'em dash - house style uses a spaced hyphen ( - )',
  },
  {
    id: 'double-hyphen',
    chrome: 'error',
    content: 'warn',
    test: (s) => /\S--\S|\s--\s/.test(s),
    message: 'literal "--" in prose - use a spaced hyphen ( - )',
  },
  {
    id: 'americanism',
    chrome: 'error',
    content: 'warn', // may be inside a quotation from a US text
    test: (s) => AMERICANISMS.some(([re]) => re.test(s)),
    detail: (s) => {
      const hit = AMERICANISMS.find(([re]) => re.test(s))
      return hit ? `use "${hit[1]}"` : ''
    },
    message: 'Americanism - the site is British English',
  },
  {
    id: 'banned-hype',
    chrome: 'error',
    content: 'off', // "revolutionary" is correct about Animal Farm
    test: (s) => BANNED_HYPE.some((re) => re.test(s)),
    message: 'banned hype word (brand voice: clear, confident, kind)',
  },
  {
    id: 'double-space',
    chrome: 'warn',
    content: 'off',
    test: (s) => /[a-z,.] {2,}[a-z]/i.test(s),
    message: 'double space inside a sentence',
  },
  {
    id: 'unsubstituted-token',
    chrome: 'warn',
    content: 'off',
    test: (s) => /\{(?:n|days|price|currency|count|total)\}/.test(s),
    message: 'placeholder token rendered in JSX - check the call site substitutes it',
    jsxOnly: true,
  },
  {
    id: 'long-sentence',
    chrome: 'warn',
    content: 'off',
    test: (s) =>
      s
        .split(/(?<=[.!?])\s+/)
        .some((x) => x.trim().split(/\s+/).length > 45),
    message: 'sentence over 45 words - the audience is 13-18 year olds',
  },
]

function severityFor(rule, zone) {
  const s = rule.both ?? rule[zone]
  return s === 'off' ? null : s
}

// ─── Extraction ───────────────────────────────────────────────────────

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next' || name.startsWith('.')) continue
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

/** Lines that are code or vector data, never prose. */
function isNotProse(line) {
  return (
    /^[Mm][\d.\-\s]/.test(line) || // bare SVG path data
    /\bd="[Mm][\d.\-\s]/.test(line) || // SVG path attribute
    /viewBox=|stroke|fillRule|clipRule/.test(line) ||
    /[{}()[\];]\s*$/.test(line) || // code-ish line endings
    /=>|===|!==|\?\?|&&|\|\||\breturn\b|\bconst\b|\bimport\b/.test(line) ||
    /^[A-Za-z0-9_.]+\(/.test(line) || // function call
    /https?:\/\//.test(line) ||
    /^[A-Z_]+$/.test(line)
  )
}

/**
 * Files whose prose is deliberately incorrect: error-spotting games feed
 * the learner sentences containing planted mistakes. Linting them would
 * report the teaching material as a defect.
 *
 * NOTE: the planted sentence must contain exactly ONE error. A sentence
 * with several ("Its important to practice everyday." has three) is a
 * content bug, because a sharp student spots a mistake the game will not
 * accept. That is a content review, not something this linter can judge.
 */
const INTENTIONAL_ERROR_FILES = [/^src\/app\/games\/page\.tsx$/, /^src\/app\/games\/.*error/i]

function hasIntentionalErrors(rel) {
  return INTENTIONAL_ERROR_FILES.some((re) => re.test(rel))
}

/** English values from a dictionary module: `en: '…'`. */
function extractDictionaryStrings(rel, src) {
  const out = []
  const lines = src.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*en:\s*(['"`])([\s\S]*?)\1\s*,?\s*$/)
    if (m && m[2].trim()) out.push({ file: rel, line: i + 1, text: m[2], kind: 'dict' })
  }
  return out
}

/** Prose from a TSX file: JSX text nodes and sentence-like literals. */
function extractJsxStrings(rel, src) {
  const out = []
  const lines = src.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line || isNotProse(line)) continue
    if (/^(import|export\s|\/\/|\/\*|\*)/.test(line)) continue
    if (/className=|class=|style=|href=|src=|key=|data-testid|aria-labelledby|\bid=/.test(line))
      continue

    const textNode = line.match(/^>?\s*([A-Z][^<>{}]{15,}?)\s*<?$/)
    if (textNode && /[a-z]{3}/.test(textNode[1])) {
      out.push({ file: rel, line: i + 1, text: textNode[1], kind: 'jsx' })
      continue
    }
    const lit = line.match(/(['"])([A-Z][^'"]{20,}?)\1/)
    if (lit && / /.test(lit[2])) {
      out.push({ file: rel, line: i + 1, text: lit[2], kind: 'jsx' })
    }
  }
  return out
}

// ─── Run ──────────────────────────────────────────────────────────────

const strings = []
for (const file of walk(join(ROOT, 'src'))) {
  if (!/\.tsx?$/.test(file)) continue
  if (/\.(test|spec)\.tsx?$/.test(file)) continue
  const rel = relative(ROOT, file).split(sep).join('/')
  // Bulk data modules are corpus, not prose surfaces we lint here.
  if (rel.startsWith('src/data/') && !rel.startsWith('src/data/analysis')) continue

  if (hasIntentionalErrors(rel)) continue

  const src = readFileSync(file, 'utf8')
  const zone = zoneFor(rel)
  if (ZONE_FILTER && zone !== ZONE_FILTER) continue

  const found = rel.includes('lib/i18n/dictionary')
    ? extractDictionaryStrings(rel, src)
    : rel.endsWith('.tsx')
      ? extractJsxStrings(rel, src)
      : []
  for (const s of found) strings.push({ ...s, zone })
}

const violations = []
for (const s of strings) {
  for (const rule of RULES) {
    const severity = severityFor(rule, s.zone)
    if (!severity) continue
    if (rule.jsxOnly && s.kind !== 'jsx') continue
    if (!rule.test(s.text)) continue
    violations.push({
      rule: rule.id,
      severity,
      zone: s.zone,
      message: rule.detail ? `${rule.message} (${rule.detail(s.text)})` : rule.message,
      file: s.file,
      line: s.line,
      text: s.text.length > 130 ? s.text.slice(0, 130) + '…' : s.text,
    })
  }
}

const errors = violations.filter((v) => v.severity === 'error')
const warns = violations.filter((v) => v.severity === 'warn')

if (AS_JSON) {
  console.log(JSON.stringify({ scanned: strings.length, errors, warns }, null, 2))
} else {
  const byRule = {}
  for (const v of violations) (byRule[`${v.severity}:${v.rule}:${v.zone}`] ||= []).push(v)
  for (const [k, list] of Object.entries(byRule).sort((a, b) => b[1].length - a[1].length)) {
    const [sev, rule, zone] = k.split(':')
    console.log(`\n${sev.toUpperCase()}  ${rule}  [${zone}]  (${list.length})  ${list[0].message}`)
    for (const v of list.slice(0, 10)) console.log(`   ${v.file}:${v.line}  ${v.text}`)
    if (list.length > 10) console.log(`   … and ${list.length - 10} more`)
  }
  const chrome = strings.filter((s) => s.zone === 'chrome').length
  console.log(
    `\n${strings.length} strings scanned (${chrome} chrome, ${strings.length - chrome} content) - ${errors.length} errors, ${warns.length} warnings`,
  )
}

process.exit(!WARN_ONLY && errors.length ? 1 : 0)
