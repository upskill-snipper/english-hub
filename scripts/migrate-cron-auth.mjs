/**
 * One-shot codemod: replace every hand-rolled CRON_SECRET comparison with the
 * shared `authoriseCronRequest` helper (REL-8, 19 September 2026).
 *
 * Kept in the repository rather than run from a temporary file so the change
 * is reproducible and reviewable. It is idempotent: a file already using the
 * helper is left alone.
 *
 * Run with `node scripts/migrate-cron-auth.mjs --apply`; without the flag it
 * prints what it would change and writes nothing.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const APPLY = process.argv.includes('--apply')
const ROOT = process.cwd()
const NL = String.fromCharCode(10)
const CR = String.fromCharCode(13)

/** Every scheduled route, and the name it should report itself as. */
function scheduledRoutes() {
  const out = []
  const cronDir = join(ROOT, 'src/app/api/cron')
  for (const name of readdirSync(cronDir)) {
    const file = join(cronDir, name, 'route.ts')
    if (existsSync(file)) out.push({ file, name })
  }
  for (const name of ['ai', 'marking']) {
    const file = join(ROOT, 'src/app/api/health', name, 'route.ts')
    if (existsSync(file)) out.push({ file, name: `health/${name}` })
  }
  return out
}

/**
 * The hand-rolled block, in every spelling found in this repository.
 *
 * Each alternative runs from the line that reads CRON_SECRET (or, for the one
 * route that reads the header first, from that line) to the closing brace of
 * the 401 return. The body is matched lazily so it stops at the FIRST 401,
 * which is what bounds the block.
 */
const BLOCKS = [
  // `const cronSecret = process.env.CRON_SECRET` ... 401
  /(?:[ \t]*\/\/[^\r\n]*\r?\n)*[ \t]*const cronSecret = process\.env\.CRON_SECRET\r?\n[\s\S]*?\r?\n[ \t]*return NextResponse\.json\(\{ error: '(?:Unauthorized|Unauthorised)' \}, \{ status: 401 \}\)\r?\n[ \t]*\}\r?\n/,
  // `const expectedSecret = ...` / `const expected = ...` ... 401
  /(?:[ \t]*\/\/[^\r\n]*\r?\n)*[ \t]*const (?:expectedSecret|expected) = process\.env\.CRON_SECRET\r?\n[\s\S]*?\r?\n[ \t]*return NextResponse\.json\(\{ error: '(?:Unauthorized|Unauthorised)' \}, \{ status: 401 \}\)\r?\n[ \t]*\}\r?\n/,
  // the POST variant that reads `x-cron-secret` into a const first
  /(?:[ \t]*\/\/[^\r\n]*\r?\n)*[ \t]*const cronSecret = request\.headers\.get\('x-cron-secret'\)[\s\S]*?\r?\n[ \t]*return NextResponse\.json\(\{ error: '(?:Unauthorized|Unauthorised)' \}, \{ status: 401 \}\)\r?\n[ \t]*\}\r?\n/,
]

function replacement(routeName, indent, eol) {
  return (
    `${indent}const auth = authoriseCronRequest(request, '${routeName}')${eol}` +
    `${indent}if (!auth.ok) return auth.response${eol}`
  )
}

let changed = 0
let skipped = 0

for (const { file, name } of scheduledRoutes()) {
  let src = readFileSync(file, 'utf8')
  const before = src
  // This repository has mixed line endings. Writing LF into a CRLF file would
  // turn a two-line change into a whole-file diff, so each file keeps its own.
  const eol = src.includes(CR + NL) ? CR + NL : NL

  let replacements = 0
  for (const block of BLOCKS) {
    // A file can carry the block twice (GET and POST).
    for (;;) {
      const m = src.match(block)
      if (!m) break
      const indentMatch = m[0].match(/^[ \t]*/m)
      src = src.replace(block, replacement(name, indentMatch ? indentMatch[0] : '  ', eol))
      replacements += 1
      if (replacements > 4) throw new Error(`runaway replacement in ${file}`)
    }
  }

  if (replacements === 0) {
    skipped += 1
    continue
  }

  // The helper import, if it is not already there.
  if (!src.includes("from '@/lib/cron/auth'")) {
    // After the first SINGLE-LINE import. Anchoring on the LAST `import `
    // put the new line inside a multi-line `import {` block and produced a
    // file that would not parse. `.` does not cross a line break, so this
    // matches only an import that opens and closes on one line.
    const single = src.match(/^import .*from '[^']+'/m)
    if (!single || single.index === undefined) {
      throw new Error(`no single-line import to anchor on in ${file}`)
    }
    const afterLine = src.indexOf(NL, single.index) + 1
    src =
      src.slice(0, afterLine) +
      `import { authoriseCronRequest } from '@/lib/cron/auth'${eol}` +
      src.slice(afterLine)
  }

  // Drop the crypto import when nothing in the file still calls it.
  if (!/timingSafeEqual\s*\(/.test(src)) {
    src = src.replace(/^import \{ timingSafeEqual \} from 'crypto'\r?\n/m, '')
    src = src.replace(/^import \* as crypto from 'crypto'\r?\n/m, '')
    src = src.replace(/^import crypto from 'crypto'\r?\n/m, '')
  }

  if (src !== before) {
    changed += 1
    console.log(`${replacements} block(s) -> ${file.replace(ROOT, '.')}`)
    if (APPLY) writeFileSync(file, src, 'utf8')
  }
}

console.log(
  `${NL}${changed} file(s) ${APPLY ? 'rewritten' : 'would change'}, ${skipped} already on the helper.`,
)
if (!APPLY) console.log('Re-run with --apply to write.')
