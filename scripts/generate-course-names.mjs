// ─── Generate the course id → title map ─────────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026)
//
// `getCourseName()` in src/lib/utils.ts carried this comment:
//
//   /** Get course name by ID - lazy-loads course data to avoid pulling ~900KB
//       into every import */
//
// and then did `require('@/data/courses')`. webpack resolves `require` with a
// static string at build time, so nothing was lazy. src/data/courses.ts
// aggregates 27 curriculum modules - about 7.6 MB of TypeScript - and because
// header.tsx, language-toggle.tsx and BoardGate.tsx all import `cn()` from
// @/lib/utils, the entire course corpus sat in the root layout's client graph
// on all 1,049 pages, and in the server chunk required by every page bundle.
//
// getCourseName has four production callers and needs one thing: a title for
// an id. That is about 90 short strings, not 7.6 MB of lessons.
//
// This script emits src/data/generated/course-names.json, which is what
// getCourseName now reads. It runs in `prebuild`, alongside the i18n and
// sitemap generators, so the map cannot drift from the corpus.
//
//   node scripts/generate-course-names.mjs
// ────────────────────────────────────────────────────────────────────────────

import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ROOT = process.cwd()
const OUT = path.join(ROOT, 'src', 'data', 'generated', 'course-names.json')

/**
 * Transpile the data modules to CommonJS in a scratch directory and require
 * the aggregator, exactly as scripts/generate-i18n-locales.mjs does for the
 * dictionary shards. Type-checking is skipped; `npx tsc --noEmit` covers it.
 */
function loadCourses() {
  const ts = require('typescript')
  const dataDir = path.join(ROOT, 'src', 'data')
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'eh-courses-'))
  fs.writeFileSync(path.join(tmp, 'package.json'), '{"type":"commonjs"}')

  // Walk the whole tree: src/data has subdirectories (curriculum/, analysis/)
  // and the course modules import across them by relative path, so the
  // directory shape has to be preserved in the scratch copy.
  const walk = (dir, rel = '') => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const from = path.join(dir, entry.name)
      const relPath = path.join(rel, entry.name)
      if (entry.isDirectory()) {
        fs.mkdirSync(path.join(tmp, relPath), { recursive: true })
        walk(from, relPath)
        continue
      }
      if (!entry.name.endsWith('.ts')) continue
      const source = fs.readFileSync(from, 'utf8').replace(/^﻿/, '')
      const { outputText } = ts.transpileModule(source, {
        fileName: entry.name,
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.ES2020,
          esModuleInterop: true,
        },
      })
      fs.writeFileSync(path.join(tmp, relPath.replace(/\.ts$/, '.js')), outputText, 'utf8')
    }
  }
  walk(dataDir)

  try {
    return require(path.join(tmp, 'courses.js')).allCourses
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true })
  }
}

const courses = loadCourses()
if (!Array.isArray(courses) || courses.length === 0) {
  console.error('course-names: allCourses did not resolve to a non-empty array')
  process.exit(1)
}

/** id -> title. Nothing else: this map is in every page's graph. */
const map = {}
for (const c of courses) {
  if (!c?.id || typeof c.title !== 'string') continue
  map[c.id] = c.title
}

const count = Object.keys(map).length
if (count === 0) {
  console.error('course-names: no id/title pairs found')
  process.exit(1)
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
const json = JSON.stringify(map, null, 2) + '\n'

// Only write when it changes, so the file does not churn in git on every build.
const existing = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null
if (existing !== json) {
  fs.writeFileSync(OUT, json, 'utf8')
  console.log(`course-names: wrote ${count} titles (${(json.length / 1024).toFixed(1)} KB)`)
} else {
  console.log(`course-names: ${count} titles, unchanged`)
}
