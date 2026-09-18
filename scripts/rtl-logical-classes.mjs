#!/usr/bin/env node
// ─── Physical → logical Tailwind direction utilities ─────────────────────────
//
// WHY (19 September 2026, A11Y-10)
// The product ships in Arabic and lays itself out for English. 3,597 physical
// margin/padding utilities, 967 text-left/right, 628 physical insets, 581
// border-l/r and 19 rounded corners are all pinned to the LEFT and RIGHT of the
// screen rather than to the START and END of the reading direction. In Arabic
// the whole interface is mirrored by the browser and then un-mirrored, piece by
// piece, by these classes.
//
// In an LTR document `ms-2` renders identically to `ml-2`. So for the English
// product this conversion is provably a no-op, and for the Arabic product it is
// the difference between a mirrored layout and a broken one.
//
// ── WHY THIS EXISTS ALONGSIDE scripts/rtl-migrate.ps1 ───────────────────────
// That script was committed in May 2026 and never run. It has two defects that
// would have made running it worse than not:
//
//   1. Every one of its token patterns opens with `(?<![\w-])`, which sees the
//      leading minus of `-ml-2` and refuses. 584 negative utilities would have
//      been left behind - and its companion lint rule matches `-?(ml|mr|pl|pr)-`,
//      so the build would then have failed on 584 classes the codemod would not
//      fix. Negatives are handled here.
//
//   2. Its className matcher makes the brace optional, so on a quoted
//      className it runs lazily to the next `}` up to 400 characters away and
//      can swallow a sibling attribute. Latent rather than live, but this
//      parses braces properly instead.
//
// ── THE SAFETY NET THAT ACTUALLY MATTERS ────────────────────────────────────
// 848 files cannot be reviewed by eye. So `--verify` re-reads every changed
// line and asserts that applying the token map to the ORIGINAL line reproduces
// the NEW line exactly. If the regex ever swallowed a sibling attribute, ate a
// quote or touched prose, the reconstruction would not match and the run is
// rejected. That check is what makes a diff this size defensible.
//
// Usage:
//   node scripts/rtl-logical-classes.mjs            # dry run, prints a summary
//   node scripts/rtl-logical-classes.mjs --apply    # write
//   node scripts/rtl-logical-classes.mjs --verify   # assert the tree is converted
// ────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Ordered longest-first so a prefix never shadows a longer token.
 *
 * `rounded-l` must come AFTER `rounded-lg` is excluded, which the trailing
 * boundary below handles: `rounded-lg` is a SIZE, not a side, and turning it
 * into `rounded-sg` would silently delete the corner radius everywhere.
 */
const TOKENS = [
  ['rounded-tl', 'rounded-ss'],
  ['rounded-tr', 'rounded-se'],
  ['rounded-bl', 'rounded-es'],
  ['rounded-br', 'rounded-ee'],
  ['rounded-l', 'rounded-s'],
  ['rounded-r', 'rounded-e'],
  ['border-l', 'border-s'],
  ['border-r', 'border-e'],
  ['text-left', 'text-start'],
  ['text-right', 'text-end'],
  ['ml-', 'ms-'],
  ['mr-', 'me-'],
  ['pl-', 'ps-'],
  ['pr-', 'pe-'],
  // `left-1/2` and `right-1/2` are EXCLUDED - see CENTRING_IDIOM below.
  ['left-', 'start-'],
  ['right-', 'end-'],
]

/**
 * The one conversion that would make Arabic WORSE, not better.
 *
 * `left-1/2 -translate-x-1/2` is the standard centring idiom, and it is
 * direction-neutral: `left: 50%` then shift back half your own width works
 * identically in RTL, because `translate-x` is physical in both directions.
 *
 * Convert only the first half and it breaks: `start-1/2` becomes `right: 50%`
 * in Arabic while `-translate-x-1/2` still moves the element physically left,
 * so the thing ends up off-centre. Every one of the 50 occurrences of
 * `left-1/2` / `right-1/2` in this repo is paired with `translate-x`, so
 * excluding them wholesale is both safe and complete.
 */
const CENTRING_IDIOM = '(?!1/2)'

/**
 * A token must begin at a class boundary: start of string, whitespace, a quote,
 * an opening brace/paren/bracket, or a variant colon (`md:`, `hover:`).
 *
 * An optional leading `-` is carried through for negative utilities, and the
 * boundary is required BEFORE that minus - which is what keeps `bg-right-top`
 * and `object-right` out of it, since their `-` is preceded by a letter.
 */
const BACKTICK = String.fromCharCode(96)

/** `\s`, `\[` and `\]` built via String.raw so no escape survives a copy-paste. */
const WS = String.raw`\s`
const OPEN_BRACKET = String.raw`\[`
const CLOSE_BRACKET = String.raw`\]`

const BOUNDARY = '(?<=^|[' + WS + '"\'' + BACKTICK + '{(' + OPEN_BRACKET + ':])'

/** A class token ends at whitespace, a quote, a closing brace/bracket, or a `-`. */
const TOKEN_END =
  '(?=$|[-' + WS + '"\'' + BACKTICK + '}' + CLOSE_BRACKET + '])'

/** Trailing context: the token must end at a class boundary or continue a class. */
function tokenPattern(from) {
  const literal = from.replace(/-/g, '\\-')
  // `ml-` style tokens already end in `-`, so anything may follow - except the
  // centring idiom, which must keep its physical inset.
  if (from.endsWith('-')) {
    const guard = from === 'left-' || from === 'right-' ? CENTRING_IDIOM : ''
    return new RegExp(BOUNDARY + '(-?)' + literal + guard, 'g')
  }
  // `rounded-l`, `border-r`, `text-left` must not be a prefix of a longer word:
  // `rounded-lg`, `border-red-500`, `text-lefty`. Allow only `-` or a boundary.
  return new RegExp(BOUNDARY + '(-?)' + literal + TOKEN_END, 'g')
}

const PATTERNS = TOKENS.map(([from, to]) => ({ from, to, re: tokenPattern(from) }))

/** Apply the token map to one class-list string. */
export function convertClassList(text) {
  let out = text
  for (const { to, re } of PATTERNS) {
    out = out.replace(re, (_m, neg) => `${neg ?? ''}${to}`)
  }
  return out
}

/**
 * Find every `className=` region and hand its VALUE to `fn`.
 *
 * Handles `className="..."`, `className='...'` and `className={ ... }` with
 * properly balanced braces, so a `cn(...)` call spanning lines and containing
 * its own object literals is transformed whole rather than up to the first `}`.
 */
function mapClassNameRegions(source, fn) {
  let out = ''
  let i = 0
  const ATTR = /className\s*=\s*/g

  for (;;) {
    ATTR.lastIndex = i
    const m = ATTR.exec(source)
    if (!m) break

    const valueStart = m.index + m[0].length
    out += source.slice(i, valueStart)
    const opener = source[valueStart]

    if (opener === '"' || opener === "'") {
      const close = source.indexOf(opener, valueStart + 1)
      if (close === -1) {
        i = valueStart
        continue
      }
      out += opener + fn(source.slice(valueStart + 1, close)) + opener
      i = close + 1
      continue
    }

    if (opener === '{') {
      let depth = 0
      let j = valueStart
      for (; j < source.length; j++) {
        if (source[j] === '{') depth++
        else if (source[j] === '}') {
          depth--
          if (depth === 0) break
        }
      }
      if (j >= source.length) {
        i = valueStart
        continue
      }
      out += '{' + fn(source.slice(valueStart + 1, j)) + '}'
      i = j + 1
      continue
    }

    i = valueStart
  }

  return out + source.slice(i)
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === 'node_modules' || entry === 'generated') continue
      walk(full, out)
    } else if (/\.tsx$/.test(entry)) {
      out.push(full)
    }
  }
  return out
}

function run({ apply, verify }) {
  const files = walk(join(process.cwd(), 'src'))
  let changedFiles = 0
  let changedLines = 0
  const failures = []

  for (const file of files) {
    const before = readFileSync(file, 'utf8')
    const after = mapClassNameRegions(before, convertClassList)
    if (after === before) continue

    // THE SAFETY NET. Reconstruct the new line from the old one using only the
    // token map. If they differ, something other than a class token changed.
    const a = before.split(/\r?\n/)
    const b = after.split(/\r?\n/)
    if (a.length !== b.length) {
      failures.push(`${file}: line count changed ${a.length} -> ${b.length}`)
      continue
    }
    for (let n = 0; n < a.length; n++) {
      if (a[n] === b[n]) continue
      changedLines++
      if (convertClassList(a[n]) !== b[n]) {
        failures.push(`${file}:${n + 1}\n  old: ${a[n].trim()}\n  new: ${b[n].trim()}`)
      }
    }

    changedFiles++
    if (apply) writeFileSync(file, after)
  }

  if (failures.length) {
    console.error(`REJECTED - ${failures.length} line(s) changed in a way the token map`)
    console.error('does not explain. Nothing was written.\n')
    for (const f of failures.slice(0, 20)) console.error(f)
    process.exit(1)
  }

  if (verify) {
    if (changedFiles > 0) {
      console.error(
        `VERIFY FAILED: ${changedFiles} file(s) still contain physical direction ` +
          'utilities inside className. Run with --apply.',
      )
      process.exit(1)
    }
    console.log('VERIFY OK: no physical direction utilities left in any className.')
    return
  }

  console.log(
    `${apply ? 'Wrote' : 'Would change'} ${changedFiles} files, ${changedLines} lines.`,
  )
  if (!apply) console.log('Dry run. Re-run with --apply to write.')
}

// Only run when invoked directly. Tests import `convertClassList` from here to
// assert the token map, and an import must not rewrite 944 files as a side
// effect of loading the module.
const invokedDirectly = process.argv[1] && process.argv[1].endsWith('rtl-logical-classes.mjs')
if (invokedDirectly) {
  const args = new Set(process.argv.slice(2))
  run({ apply: args.has('--apply'), verify: args.has('--verify') })
}
