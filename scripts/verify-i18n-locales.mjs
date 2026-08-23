#!/usr/bin/env node
/**
 * Prove the generated per-locale maps are behaviourally identical to the
 * dictionary they replace.
 *
 * The client hook (src/lib/i18n/use-t.ts) no longer walks the shard
 * precedence chain at runtime - it reads a pre-resolved flat map. That is
 * only safe if, for EVERY key and EVERY locale,
 *
 *     generated[locale][key] === lookup(key, locale)
 *
 * This script asserts exactly that against the real compiled dictionary and
 * the real committed generated files (both loaded through the TypeScript
 * compiler, not re-parsed by hand). Any drift - a stale commit, a hand edit
 * of a generated file, a reordered shard chain - fails the build here rather
 * than shipping wrong or missing copy to a child.
 *
 * Run:  npm run i18n:verify
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import { LOCALES, exportNameFor, compileToTemp, loadDictionary } from './generate-i18n-locales.mjs'

const require = createRequire(import.meta.url)
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'src', 'lib', 'i18n', 'generated')

function fail(message) {
  console.error(`i18n verify FAILED: ${message}`)
  process.exit(1)
}

function main() {
  const missingFiles = LOCALES.filter((l) => !fs.existsSync(path.join(OUT_DIR, `${l}.ts`)))
  if (missingFiles.length) {
    fail(`missing generated map(s): ${missingFiles.join(', ')}. Run npm run i18n:generate.`)
  }

  const { mod: dict, dir: dictDir } = loadDictionary()
  const { dir: genDir, emitted } = compileToTemp(
    LOCALES.map((l) => path.join(OUT_DIR, `${l}.ts`)),
    'eh-i18n-generated-',
  )

  const maps = {}
  for (const locale of LOCALES) {
    const loaded = require(emitted[locale])
    const map = loaded[exportNameFor(locale)]
    if (!map || typeof map !== 'object') {
      fail(`generated/${locale}.ts does not export ${exportNameFor(locale)}`)
    }
    maps[locale] = map
  }

  const keys = dict.allDictionaryKeys()
  const mismatches = []
  const missing = []
  let checked = 0

  for (const key of keys) {
    for (const locale of LOCALES) {
      const expected = dict.lookup(key, locale)
      const actual = maps[locale][key]
      checked += 1
      if (actual === undefined) {
        missing.push(`${locale}:${key}`)
      } else if (actual !== expected) {
        mismatches.push({ locale, key, expected, actual })
      }
    }
  }

  // A key present in a generated map but absent from the dictionary would be
  // stale copy that no longer has a source of truth - also a failure.
  const keySet = new Set(keys)
  const extra = []
  for (const locale of LOCALES) {
    for (const key of Object.keys(maps[locale])) {
      if (!keySet.has(key)) extra.push(`${locale}:${key}`)
    }
  }

  fs.rmSync(dictDir, { recursive: true, force: true })
  fs.rmSync(genDir, { recursive: true, force: true })

  if (missing.length) {
    fail(
      `${missing.length} key(s) absent from the generated maps, e.g. ${missing.slice(0, 5).join(', ')}`,
    )
  }
  if (extra.length) {
    fail(`${extra.length} stale key(s) in the generated maps, e.g. ${extra.slice(0, 5).join(', ')}`)
  }
  if (mismatches.length) {
    for (const m of mismatches.slice(0, 10)) {
      console.error(
        `  ${m.locale} ${m.key}\n    expected: ${JSON.stringify(m.expected)}\n    actual:   ${JSON.stringify(m.actual)}`,
      )
    }
    fail(`${mismatches.length} of ${checked} lookups differ. Run npm run i18n:generate.`)
  }

  console.log(
    `i18n verify OK: ${keys.length} keys x ${LOCALES.length} locales = ${checked} lookups, 100% identical to lookup().`,
  )
}

main()
