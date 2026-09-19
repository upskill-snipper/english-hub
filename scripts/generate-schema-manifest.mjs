#!/usr/bin/env node
/**
 * Freeze what the repository expects of the database into JSON.
 *
 * WHY A MANIFEST AND NOT A SCAN AT RUNTIME (DATA-1). The health route at
 * `/api/health/schema` runs inside a Vercel serverless function. The migration
 * files and the `src/` tree are not in that bundle - Next.js only includes what
 * is statically imported. A route that tried to read `supabase/migrations/`
 * there would parse ZERO files, find nothing missing, and report a clean
 * schema for ever. That is the exact defect this repository is named for, so
 * the expectations are generated here, committed, and imported statically.
 *
 * The cost is that the manifest can go stale.
 * `src/__tests__/schema-manifest-is-current.test.ts` regenerates it and fails
 * if it differs, so staleness is a failing test rather than a quiet lie.
 *
 *   node scripts/generate-schema-manifest.mjs
 *   node scripts/generate-schema-manifest.mjs --check   (exit 1 if out of date)
 */

import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { fromMigrations, fromCode } from './schema-expectations.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..')
const OUT = resolve(ROOT, 'src/lib/schema/expected-schema.json')

/** Map -> plain object, key-sorted so a regeneration produces a stable diff. */
function sorted(map) {
  return Object.fromEntries([...map.entries()].sort(([a], [b]) => (a < b ? -1 : 1)))
}

export function buildManifest() {
  const m = fromMigrations(resolve(ROOT, 'supabase/migrations'))
  const c = fromCode(resolve(ROOT, 'src'), resolve(ROOT, 'prisma/schema.prisma'), ROOT)

  return {
    // Deliberately NOT a timestamp of the run: that would make every
    // regeneration a diff and the --check mode useless.
    generatedAt: 'regenerate with scripts/generate-schema-manifest.mjs',
    tables: sorted(m.tables),
    columns: sorted(m.columns),
    codeTables: sorted(c.supabase),
    prismaTables: sorted(c.prismaModels),
    policies: sorted(m.policies),
    indexes: sorted(m.indexes),
    triggers: sorted(m.triggers),
    functions: sorted(m.functions),
  }
}

/** The manifest as it should appear on disk. */
export function manifestJson() {
  return JSON.stringify(buildManifest(), null, 2) + '\n'
}

// Only when RUN, never when imported. `check-schema-drift.mjs` imports
// `buildManifest` to ask what the repository expects, and that question must
// not have the side effect of rewriting a committed file.
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const json = manifestJson()

  if (process.argv.includes('--check')) {
    const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : ''
    if (current !== json) {
      console.error('src/lib/schema/expected-schema.json is out of date.')
      console.error('Run: node scripts/generate-schema-manifest.mjs')
      process.exit(1)
    }
    console.log('Schema manifest is current.')
    process.exit(0)
  }

  writeFileSync(OUT, json, 'utf8')
  console.log(`Wrote ${OUT.replace(ROOT, '.')}`)
}
