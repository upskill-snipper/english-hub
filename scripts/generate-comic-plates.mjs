#!/usr/bin/env node
/**
 * Render every registered linocut plate to a file of its own, and write the
 * manifest the pages read to name those files.
 *
 *   node scripts/generate-comic-plates.mjs
 *
 * Writes:
 *   public/comics/<slug>/<key>.<hash>.svg   one per registered piece (gitignored)
 *   src/lib/comics/plates.generated.ts      piece id -> served path (committed)
 *
 * Runs in `prebuild` (so on every Vercel build, on Linux, before next build),
 * in `predev` and in `pretest`. Run it by hand after drawing, redrawing or
 * registering a piece while the dev server is already running; the comics
 * delivery test fails, and says to run this, when the files or the manifest
 * are out of date.
 *
 * WHY (26 September 2026). The drawings used to be rendered into every page
 * that showed them, and the key-moments player was handed every panel of its
 * text as React elements, so each drawing was in the page twice over (HTML and
 * the RSC payload) whether or not the student ever opened that moment: A
 * Christmas Carol's page was 3.3 MB of HTML, 672 KB on the wire. Now a page
 * carries only descriptors (src/lib/comics/descriptors.ts) and the browser
 * fetches each plate when it is about to be seen
 * (src/components/comics/linocut/lazy-plate.tsx).
 *
 * WHY A BUILD STEP AND NOT A ROUTE HANDLER. Next 15.5 compiles route handlers
 * in its React Server Components layer, where `import 'react-dom/server'` is a
 * build error ("You're importing a component that imports react-dom/server";
 * checked on the dev server on 26 September 2026). And a content-hashed name
 * has to be known to the page that links to it, which only something that can
 * render the plate before the page is built can compute. So the plates are
 * rendered here, with the same Vite SSR loader scripts/preview-comics.mjs uses
 * (it compiles the TSX and resolves "@/" exactly as vitest does), through the
 * one renderer in src/lib/comics/plate-file.tsx that the preview and the tests
 * also use. The files are then plain static files: Vercel serves them from its
 * CDN with no function run, under the year-long immutable cache header set for
 * /comics/ in next.config.js.
 *
 * DETERMINISTIC. The carving tools and the texture filters are seeded, and the
 * renderer normalises line endings, so the same drawings give the same bytes
 * and the same names on any machine. Unchanged files are left alone; files no
 * longer named are removed; the manifest is rewritten only when it changes.
 *
 * LOUD. Any piece that fails to render, two pieces with the same id, or a
 * registry that does not name itself stops the run with exit code 1 before
 * anything is written, and so fails the build.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const PUBLIC = path.join(ROOT, 'public')
const MANIFEST = path.join(ROOT, 'src', 'lib', 'comics', 'plates.generated.ts')

const started = Date.now()
const { createServer } = await import('vite')
const react = (await import('@vitejs/plugin-react')).default

const vite = await createServer({
  root: ROOT,
  configFile: false,
  logLevel: 'error',
  appType: 'custom',
  plugins: [react()],
  resolve: { alias: { '@': path.join(ROOT, 'src') } },
  server: { middlewareMode: true, hmr: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
})

let files
let platesDir
try {
  const { COMIC_LOADERS } = await vite.ssrLoadModule('/src/data/comics/index.ts')
  const { plateFiles, PLATES_DIR } = await vite.ssrLoadModule('/src/lib/comics/plate-file.tsx')
  platesDir = PLATES_DIR
  files = []
  const problems = []
  for (const slug of Object.keys(COMIC_LOADERS).sort()) {
    let set
    try {
      set = await COMIC_LOADERS[slug]()
    } catch (e) {
      problems.push(`${slug}: the registry did not load: ${e?.stack ?? e}`)
      continue
    }
    if (set.slug !== slug) {
      problems.push(`${slug}: the registry names itself "${set.slug}"`)
      continue
    }
    try {
      files.push(...plateFiles(set))
    } catch (e) {
      problems.push(`${slug}: a piece did not render: ${e?.stack ?? e}`)
    }
  }
  const seen = new Map()
  for (const f of files) {
    if (seen.has(f.uid))
      problems.push(
        `${f.uid}: two pieces share this id ("${seen.get(f.uid)}" and "${f.key}"), so they would share a file and their filter ids`,
      )
    seen.set(f.uid, f.key)
  }
  if (files.length === 0) problems.push('no pieces are registered, so there is nothing to serve')
  if (problems.length) {
    console.error(`generate-comic-plates: FAILED, nothing written.\n  ${problems.join('\n  ')}`)
    process.exitCode = 1
  }
} catch (e) {
  console.error(`generate-comic-plates: FAILED, nothing written.\n  ${e?.stack ?? e}`)
  process.exitCode = 1
} finally {
  await vite.close()
}
if (process.exitCode) process.exit(process.exitCode)

// ── Write the files: add what is new, leave what is unchanged, remove the rest.
const root = path.join(PUBLIC, platesDir)
const wanted = new Map(
  files.map((f) => [path.join(PUBLIC, ...f.src.split('/').filter(Boolean)), f]),
)
let written = 0
let kept = 0
for (const [file, f] of wanted) {
  if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') === f.svg) {
    kept++
    continue
  }
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, f.svg)
  written++
}
let removed = 0
if (fs.existsSync(root))
  for (const dir of fs.readdirSync(root, { withFileTypes: true })) {
    const d = path.join(root, dir.name)
    if (!dir.isDirectory()) {
      fs.rmSync(d)
      removed++
      continue
    }
    for (const name of fs.readdirSync(d)) {
      const file = path.join(d, name)
      if (!wanted.has(file)) {
        fs.rmSync(file, { recursive: true })
        removed++
      }
    }
    if (fs.readdirSync(d).length === 0) fs.rmdirSync(d)
  }

// ── The manifest, in the form prettier leaves alone (printWidth 100).
const entries = [...files]
  .sort((a, b) => (a.uid < b.uid ? -1 : a.uid > b.uid ? 1 : 0))
  .map((f) => {
    const one = `  '${f.uid}': '${f.src}',`
    return one.length <= 100 ? one : `  '${f.uid}':\n    '${f.src}',`
  })
const manifest = `// AUTO-GENERATED by scripts/generate-comic-plates.mjs - do not edit by hand.
// prebuild, predev and pretest regenerate it; run that script after drawing,
// redrawing or registering a linocut piece.

/**
 * Where each registered linocut plate is served, by piece id (pieceUid). The
 * name carries a hash of the file's contents, so a redrawn plate gets a new
 * URL and is never served stale. Read through src/lib/comics/served.ts.
 */
export const PLATE_SRC: Readonly<Record<string, string>> = {
${entries.join('\n')}
}
`
const before = fs.existsSync(MANIFEST) ? fs.readFileSync(MANIFEST, 'utf8') : null
if (before !== manifest) fs.writeFileSync(MANIFEST, manifest)

const bytes = files.reduce((n, f) => n + Buffer.byteLength(f.svg), 0)
const slugs = new Set(files.map((f) => f.slug)).size
console.log(
  `generate-comic-plates: ${files.length} plates for ${slugs} texts, ${(bytes / 1024).toFixed(0)} KB` +
    ` (${written} written, ${kept} unchanged, ${removed} removed); manifest ${before === manifest ? 'unchanged' : 'written'}` +
    `; ${((Date.now() - started) / 1000).toFixed(1)} s`,
)
