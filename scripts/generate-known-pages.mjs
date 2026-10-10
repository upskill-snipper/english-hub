#!/usr/bin/env node
/**
 * Generate the list of real pages the middleware checks before it answers a
 * request with a 404: src/lib/seo/known-pages.generated.json.
 *
 * WHY. Under the app's loading screens a page that calls notFound() can only
 * show the not-found screen under a 200, because the status has been sent by
 * the time it runs (src/lib/seo/known-pages.ts has the measured detail). The
 * middleware runs first, so it decides instead, and it needs to know, for each
 * covered dynamic route, every parameter that is a real page. That knowledge
 * lives in the routes themselves: their generateStaticParams, or the data their
 * pages look parameters up in (src/lib/seo/known-pages.sources.ts names which).
 * This script asks them, through the same Vite SSR loader
 * scripts/generate-comic-plates.mjs uses, which compiles the TSX and resolves
 * "@/" as vitest does, and writes the answer down for the middleware, which
 * cannot load a page module or read the filesystem.
 *
 * RUN BEFORE EVERY BUILD (package.json prebuild), so a blog post or a set text
 * added without running it still gets its page on the next deploy. Locally,
 * src/__tests__/a-missing-page-answers-404.test.ts fails while the committed
 * file is stale, and says to run this.
 *
 * LOUD. A route with no page, no list, or an empty list stops the run with
 * exit code 1 before anything is written, and so fails the build: an empty or
 * partial list would 404 real pages.
 *
 *   node scripts/generate-known-pages.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'src', 'lib', 'seo', 'known-pages.generated.json')

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

let routes = null
try {
  const { computeKnownPages } = await vite.ssrLoadModule('/src/lib/seo/known-pages.sources.ts')
  routes = await computeKnownPages(
    (route) => vite.ssrLoadModule(`/src/app${route}/page.tsx`),
    path.join(ROOT, 'src', 'app'),
  )
} catch (e) {
  console.error(`generate-known-pages: FAILED, nothing written.\n  ${e?.stack ?? e}`)
  process.exitCode = 1
} finally {
  await vite.close()
}

if (routes) {
  // Formatted as the repository's prettier would, so the commit hook leaves it
  // alone and an unchanged list leaves the file untouched.
  const prettier = await import('prettier')
  const config = (await prettier.resolveConfig(OUT)) ?? {}
  const text = await prettier.format(JSON.stringify(routes), { ...config, parser: 'json' })
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8').replace(/\r\n/g, '\n') : ''
  if (current !== text) fs.writeFileSync(OUT, text, 'utf8')
  const pages = routes.reduce((t, r) => t + r.known.length, 0)
  console.log(
    `known pages: ${pages} under ${routes.length} routes${current === text ? ', unchanged' : ''}, ${path.relative(ROOT, OUT)}`,
  )
}
