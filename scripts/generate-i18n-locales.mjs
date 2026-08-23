#!/usr/bin/env node
/**
 * Generate flat, per-locale i18n message maps for the CLIENT bundle.
 *
 * THE DEFECT THIS FIXES
 * ---------------------
 * `src/lib/i18n/use-t.ts` is a 'use client' module that statically imported
 * `lookup` from `./dictionary`, which eagerly imports ~80 shard files
 * (~4.6 MB of source) holding en/ar/es interleaved per key. `useT()` is
 * called by `header.tsx`, which the root layout shell renders, so the whole
 * trilingual dictionary landed in EVERY route's client graph - one shared
 * chunk of 3,801,191 bytes raw / 1,080,352 gzipped referenced by 1,237 of
 * 1,238 page manifests. An English reader downloaded and parsed every
 * Arabic and Spanish string on the site before the page could hydrate.
 *
 * THE APPROACH
 * ------------
 * Emit one FLAT `Record<string, string>` per locale with the fallback chain
 * ALREADY RESOLVED, by calling the real `lookup(key, locale)` for every key
 * returned by the real `allDictionaryKeys()`. Because the values come from
 * the production resolver rather than from re-parsing the sources, the
 * output is identical to today's runtime behaviour BY CONSTRUCTION - the
 * shard precedence order (including the load-bearing 2026-05-16 fix that
 * puts AUDIT_FIX_DICTIONARY last) is honoured automatically.
 *
 * `use-t.ts` then imports the English map synchronously and lazily fetches
 * ar/es, so only the locale actually in use is ever downloaded.
 *
 * HOW IT COMPILES THE DICTIONARY
 * ------------------------------
 * The repo has no tsx/ts-node runner, so we transpile the i18n TypeScript
 * sources to CommonJS in a temp directory with the `typescript` compiler
 * API (a direct devDependency) and require the result. This is real
 * compilation and real module evaluation - we deliberately do NOT hand-parse
 * the dictionary sources, because a parser would be a second, drift-prone
 * implementation of the precedence rules.
 *
 * Run directly:  npm run i18n:generate
 * Runs in CI as part of the `prebuild` chain. The output is ALSO committed,
 * because `npm run dev` does not run `prebuild` - without committed files a
 * newly added key would render as [[key]] in local development.
 */

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const I18N_DIR = path.join(ROOT, 'src', 'lib', 'i18n')
const OUT_DIR = path.join(I18N_DIR, 'generated')

export const LOCALES = ['en', 'ar', 'es']

/** Export name used in each generated module, e.g. en -> EN_MESSAGES. */
export function exportNameFor(locale) {
  return `${locale.toUpperCase()}_MESSAGES`
}

/**
 * Transpile a set of TypeScript files to CommonJS in a scratch directory and
 * return a `require`-able path map. Type-checking is intentionally skipped -
 * `npx tsc --noEmit` covers that separately and a full type-check here would
 * add a minute to every build for no extra safety.
 */
export function compileToTemp(files, prefix = 'eh-i18n-') {
  const ts = require('typescript')
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix))
  // Pin CommonJS for this directory regardless of any ancestor package.json,
  // otherwise Node may interpret the emitted .js as ESM and fail on `exports`.
  fs.writeFileSync(path.join(dir, 'package.json'), '{"type":"commonjs"}')

  const emitted = {}
  for (const file of files) {
    // Strip a leading BOM - dictionary.ts carries one and TypeScript emits it
    // straight through, which upsets the CommonJS wrapper.
    const source = fs.readFileSync(file, 'utf8').replace(/^﻿/, '')
    const { outputText } = ts.transpileModule(source, {
      fileName: file,
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true,
      },
    })
    const outPath = path.join(dir, path.basename(file).replace(/\.ts$/, '.js'))
    fs.writeFileSync(outPath, outputText, 'utf8')
    emitted[path.basename(file, '.ts')] = outPath
  }
  return { dir, emitted }
}

/** Compile + load the real dictionary module (lookup, allDictionaryKeys). */
export function loadDictionary() {
  const files = fs
    .readdirSync(I18N_DIR)
    .filter((f) => /^dictionary.*\.ts$/.test(f))
    .map((f) => path.join(I18N_DIR, f))
  const { dir, emitted } = compileToTemp(files)
  const mod = require(emitted['dictionary'])
  if (typeof mod.lookup !== 'function' || typeof mod.allDictionaryKeys !== 'function') {
    throw new Error('dictionary.ts must export lookup() and allDictionaryKeys()')
  }
  return { mod, dir, shardCount: files.length }
}

function renderModule(locale, keys, lookup) {
  const exportName = exportNameFor(locale)
  const lines = keys.map(
    (key) => `  ${JSON.stringify(key)}: ${JSON.stringify(lookup(key, locale))},`,
  )
  return `// GENERATED FILE - DO NOT EDIT BY HAND.
// Produced by scripts/generate-i18n-locales.mjs from src/lib/i18n/dictionary.ts.
// Run \`npm run i18n:generate\` after changing any dictionary shard.
//
// Flat ${locale.toUpperCase()} message map with the shard precedence chain and the
// en fallback already resolved, so the client never needs the trilingual
// dictionary. Values here are exactly \`lookup(key, '${locale}')\`; see
// scripts/verify-i18n-locales.mjs, which asserts that for every key.

export const ${exportName}: Record<string, string> = {
${lines.join('\n')}
}
`
}

async function formatIfPossible(files) {
  // Keep the emitted files in the repo's prettier style so lint-staged does
  // not rewrite a 1 MB generated file on every unrelated commit.
  let prettier
  try {
    prettier = require('prettier')
  } catch {
    return false
  }
  for (const file of files) {
    const config = (await prettier.resolveConfig(file)) ?? {}
    const source = fs.readFileSync(file, 'utf8')
    const formatted = await prettier.format(source, { ...config, filepath: file })
    fs.writeFileSync(file, formatted, 'utf8')
  }
  return true
}

async function main() {
  const started = Date.now()
  const { mod, dir, shardCount } = loadDictionary()
  const keys = mod.allDictionaryKeys()

  fs.mkdirSync(OUT_DIR, { recursive: true })
  const written = []
  const previous = {}
  for (const locale of LOCALES) {
    const outPath = path.join(OUT_DIR, `${locale}.ts`)
    previous[outPath] = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : null
    fs.writeFileSync(outPath, renderModule(locale, keys, mod.lookup), 'utf8')
    written.push(outPath)
  }
  await formatIfPossible(written)

  fs.rmSync(dir, { recursive: true, force: true })

  // The committed files are the ones `npm run dev` uses, since dev never runs
  // prebuild. A build that has to rewrite them means someone edited a
  // dictionary shard without regenerating, so local dev was rendering stale
  // copy (or [[key]]) for those keys. The build self-heals, but say so.
  const stale = written.filter((f) => previous[f] !== fs.readFileSync(f, 'utf8'))
  if (stale.length) {
    console.warn(
      `i18n: WARNING - committed locale map(s) were out of date and have been rewritten: ${stale
        .map((f) => path.basename(f))
        .join(', ')}. Commit the regenerated files (npm run i18n:generate).`,
    )
  }

  console.log(
    `i18n: generated ${LOCALES.length} locale maps (${keys.length} keys, ${shardCount} shards) in ${Date.now() - started}ms`,
  )
  for (const file of written) {
    console.log(`  ${path.relative(ROOT, file)}  ${fs.statSync(file).size} bytes`)
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error('i18n generation failed:', err)
    process.exit(1)
  })
}
