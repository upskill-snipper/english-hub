// ─── Does every t('key') in the source actually exist? ──────────────────────
//
// A key that is not in the dictionary does not throw. `t()` returns the
// sentinel `[[some.key]]` and React renders it, so the visitor reads
// "[[dash.first_week.title]]" where a heading should be.
//
// `scripts/check-copy-quality.mjs` already spots that sentinel, but only in
// content it is given to scan. Nothing checks the source, so a key that is
// mistyped or renamed reaches a page and waits there for somebody to look at
// exactly the right screen in exactly the right locale.
//
// This resolves every literal `t('...')` / `tx('...')` / `tr('...')` call
// against the generated English map, which the i18n verifier already proves is
// identical to `lookup()`.
//
// WHAT IT CANNOT SEE, and says so rather than implying otherwise: keys built at
// runtime - `t(\`admin.aff.status.${status}\`)`, `t(h.label)` - are counted and
// reported separately. They are the ones this class of check never covers, and
// pretending a clean run means "every key resolves" would be the kind of green
// result this repository keeps finding.
//
//   node scripts/check-dictionary-keys-exist.mjs

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

/**
 * A literal key inside t(), tx() or tr(). Quotes or backticks, no ${.
 *
 * `withFallback(tx, 'key', 'Default')` is deliberately EXCLUDED. It exists to
 * catch exactly this case - it compares the result against the `[[key]]`
 * sentinel and substitutes its own default - so a missing key there reaches
 * nobody. Counting those would have reported 308 faults when the real number is
 * far lower, and a checker that cries wolf is one people learn to skip.
 */
const LITERAL_CALL = /\b(?:t|tx|tr)\(\s*(['"`])([a-z][a-z0-9_.]*)\1/g
/** A call whose key is computed, so this check cannot resolve it. */
const DYNAMIC_CALL = /\b(?:t|tx|tr)\(\s*(?:`[^`]*\$\{|[A-Za-z_$][A-Za-z0-9_$]*\s*[,)])/g

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '__tests__' || entry.name === 'generated') continue
      walk(full, out)
    } else if (/\.tsx?$/.test(entry.name)) out.push(full)
  }
  return out
}

/**
 * Four shards are deliberately NOT wired into the global lookup chain: the
 * IELTS planner, dashboard, learn and mock pages read them directly and fall
 * back to the shared `useT()` only for cross-module keys. Their keys are
 * therefore absent from the generated map and resolve perfectly at runtime.
 *
 * A first version of this check ignored them and reported 308 missing keys.
 * Roughly 290 of those were these four files - a confident, wrong answer that
 * would have sent somebody hunting for a defect on the highest-priced product
 * in the catalogue.
 */
const LOCAL_SHARDS = [
  'src/lib/i18n/dictionary-ielts-planner.ts',
  'src/lib/i18n/dictionary-ielts-dashboard.ts',
  'src/lib/i18n/dictionary-ielts-learn.ts',
  'src/lib/i18n/dictionary-ielts-mock.ts',
]

/**
 * Quoted keys declared in a shard file.
 *
 * Indentation is NOT assumed. Prettier wraps
 * `export const X: Record<...> =` onto its own line when the type is long, and
 * then indents the whole object by four spaces instead of two - which is what
 * the IELTS dashboard shard does. A two-space pattern read 0 of its 72 keys and
 * reported all 66 of its call sites as missing.
 */
function shardKeys(file) {
  const source = readFileSync(file, 'utf8')
  const code = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
  return [...code.matchAll(/^\s+'([a-z][a-z0-9_.]*)'\s*:\s*\{/gm)].map((m) => m[1])
}

/** Every key the dictionary knows, including the four local-only shards. */
async function knownKeys() {
  const { EN_MESSAGES } = await import('../src/lib/i18n/generated/en.ts')
  const known = new Set(Object.keys(EN_MESSAGES))
  for (const shard of LOCAL_SHARDS) {
    for (const key of shardKeys(shard)) known.add(key)
  }
  return known
}

/** t(`prefix.${x}.suffix`) - a key assembled at runtime. */
const TEMPLATE_CALL = /\b(?:t|tx|tr)\(\s*`([^`]*\$\{[^`]*)`/g

/**
 * Runtime-built keys that NO dictionary key could ever match.
 *
 * The literal check above cannot see these: the key does not exist until
 * render. But the SHAPE is knowable, and a shape nothing matches is a
 * guaranteed sentinel on every render, whatever the variable holds. So this
 * reports something stronger than "might be missing": no key of this form
 * exists at all.
 *
 * It found the seven affiliate template cards, every one of which rendered
 * `[[aff_comp.resources.tpl.<id>.title]]` as its heading.
 *
 * Substitutions are matched with `.*`, never `[^.]*`, because a substituted
 * variable can itself contain dots: `const base = \`ielts.ukread.${d.key}\`` is
 * exactly that, and a dot-free pattern reported all four of its call sites as
 * dead when every one resolves.
 */
export async function findDeadPatterns() {
  const known = [...(await knownKeys())]
  const dead = []
  let checked = 0

  for (const file of walk('src')) {
    const source = readFileSync(file, 'utf8')
    const code = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
    for (const m of code.matchAll(TEMPLATE_CALL)) {
      const template = m[1]
      checked += 1
      const parts = template.split(/\$\{[^}]*\}/)
      // No literal text at all leaves nothing to anchor on, and a guess would
      // be worse than an honest skip.
      if (!parts.some((part) => part.length > 2)) continue
      const escaped = parts.map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, (c) => '\\' + c))
      const pattern = new RegExp('^' + escaped.join('.*') + '$')
      if (!known.some((key) => pattern.test(key))) {
        dead.push({ file: file.split('\\').join('/'), template })
      }
    }
  }

  return { dead, checked }
}

export async function findMissingKeys() {
  const known = await knownKeys()

  const missing = new Map()
  let literals = 0
  let dynamic = 0
  let files = 0

  for (const file of walk('src')) {
    const source = readFileSync(file, 'utf8')
    if (!/\b(?:t|tx|tr|withFallback)\(/.test(source)) continue
    files += 1

    // Comments quote keys while explaining them, and a docblock is not a call.
    const code = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

    for (const m of code.matchAll(LITERAL_CALL)) {
      const key = m[2]
      // A key has a dot. Anything else is some other single-letter function.
      if (!key.includes('.')) continue
      literals += 1
      if (known.has(key)) continue
      const rel = file.split('\\').join('/')
      if (!missing.has(key)) missing.set(key, new Set())
      missing.get(key).add(rel)
    }

    dynamic += [...code.matchAll(DYNAMIC_CALL)].length
  }

  return { missing, literals, dynamic, files, known: known.size }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { missing, literals, dynamic, files, known } = await findMissingKeys()

  for (const [key, where] of missing) {
    console.log('')
    console.log(`${key}`)
    for (const f of where) console.log(`    ${f}`)
  }

  console.log('')
  console.log(
    `${literals} literal key(s) across ${files} file(s) resolved against ${known} dictionary entries.`,
  )
  console.log(`${dynamic} call(s) build their key at runtime and are NOT covered by this.`)
  if (missing.size) {
    console.log('')
    console.log(`${missing.size} key(s) do not exist. Each renders to the visitor as [[key]].`)
    process.exitCode = 1
  } else {
    console.log('Every literal key resolves.')
  }

  const { dead, checked } = await findDeadPatterns()
  console.log('')
  if (dead.length) {
    console.log(`${dead.length} runtime-built pattern(s) that NO key can match:`)
    for (const d of dead) {
      console.log(`  ${d.template}`)
      console.log(`      ${d.file}`)
    }
    process.exitCode = 1
  } else {
    console.log(`${checked} runtime-built pattern(s) checked; every one can match a key.`)
  }
}
