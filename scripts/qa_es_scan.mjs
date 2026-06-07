// Read-only Pass-0 deterministic QA scan over i18n shards for the Spanish layer.
// Reports per shard: em-dashes in es, token-parity mismatches (en vs es),
// and es===en (potential missed translations). No writes.
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const DIR = 'src/lib/i18n'
const files = readdirSync(DIR).filter((f) => f.startsWith('dictionary') && f.endsWith('.ts'))

// Interpolation tokens we care about: {x}, %s, {{x}}, :name
const TOKEN_RE = /\{\{?[a-zA-Z0-9_]+\}?\}|%[sd]|:[a-zA-Z]+/g
const EMDASH_RE = /[—–]/g // em-dash + en-dash

// Brand/exam/technical terms expected to stay Latin (so es===en is OK for these).
const ALLOW_SAME = [
  /^[A-Z0-9 .,'&/+()-]+$/, // all-caps/codes/punct (e.g. "GCSE", "AQA Paper 1")
  /^[0-9%£$€.,:/\s-]+$/, // numbers/prices/dates only
]

function extractEntries(src) {
  // Match  'key': { en: '...', ar: '...', es: '...' }  (single or double quotes, any order)
  const out = []
  // crude but effective: split on top-level entries via regex over the whole file
  const entryRe = /(['"])((?:\\.|(?!\1).)*?)\1\s*:\s*\{([^}]*)\}/g
  let m
  while ((m = entryRe.exec(src))) {
    const key = m[2]
    const body = m[3]
    const en = fieldVal(body, 'en')
    const es = fieldVal(body, 'es')
    const ar = fieldVal(body, 'ar')
    if (en !== null || es !== null) out.push({ key, en, es, ar })
  }
  return out
}
function fieldVal(body, name) {
  const re = new RegExp(`\\b${name}\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1).)*?)\\1`)
  const m = re.exec(body)
  return m ? m[2] : null
}
function tokens(s) {
  return (s.match(TOKEN_RE) || []).sort()
}
function sameOk(en, es) {
  if (en !== es) return false
  return ALLOW_SAME.some((re) => re.test(en))
}

let totEm = 0,
  totTok = 0,
  totSame = 0,
  totMissing = 0
const report = []
for (const f of files.sort()) {
  const src = readFileSync(join(DIR, f), 'utf8')
  const entries = extractEntries(src)
  let em = 0,
    tok = 0,
    same = 0,
    missing = 0
  const emKeys = [],
    tokKeys = [],
    sameKeys = []
  for (const e of entries) {
    if (e.es === null) {
      if (e.en !== null) missing++
      continue
    }
    if (EMDASH_RE.test(e.es)) {
      em++
      if (emKeys.length < 6) emKeys.push(e.key)
    }
    if (e.en !== null) {
      const te = tokens(e.en).join('|')
      const ts = tokens(e.es).join('|')
      if (te !== ts) {
        tok++
        if (tokKeys.length < 6) tokKeys.push(`${e.key} [en:${te}|es:${ts}]`)
      }
      if (e.en === e.es && !sameOk(e.en, e.es) && e.en.length > 3) {
        same++
        if (sameKeys.length < 6) sameKeys.push(e.key)
      }
    }
  }
  totEm += em
  totTok += tok
  totSame += same
  totMissing += missing
  if (em || tok || same) {
    report.push({ f, em, tok, same, missing, emKeys, tokKeys, sameKeys })
  }
}

console.log('=== Pass-0 ES QA scan ===')
console.log(`shards scanned: ${files.length}`)
console.log(`TOTALS  em-dash=${totEm}  token-mismatch=${totTok}  es==en(suspect)=${totSame}  es-missing(has en)=${totMissing}`)
console.log('')
for (const r of report) {
  console.log(`-- ${r.f}: em=${r.em} tok=${r.tok} same=${r.same}`)
  if (r.emKeys.length) console.log(`   em: ${r.emKeys.join(', ')}`)
  if (r.tokKeys.length) console.log(`   tok: ${r.tokKeys.join(' ;; ')}`)
  if (r.sameKeys.length) console.log(`   same: ${r.sameKeys.join(', ')}`)
}
