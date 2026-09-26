#!/usr/bin/env node
/**
 * Preview linocut comic art as PNGs, with no dev server and no public route.
 *
 *   node scripts/preview-comics.mjs <slug> [--only <text>] [--at <ms,ms>] [--out <folder>]
 *
 *   <slug>    a key of COMIC_LOADERS in src/data/comics/index.ts
 *   --only    keep the pieces whose moment title or character name contains
 *             this text, case-insensitively ("scrooge", "counting")
 *   --at      also capture frames this many milliseconds after the motion
 *             starts, to check the motion (default: none)
 *   --out     where to write (default: <system temp>/teh-comics-preview)
 *
 * WHAT IT DOES. It loads the registry through Vite's SSR module loader, which
 * compiles the TSX and resolves "@/" exactly as vitest does, and renders every
 * piece with react-dom/server through the same RegisteredPanel and
 * RegisteredPortrait components the site uses, into one standalone HTML page
 * carrying the same LINOCUT_CSS. Then Playwright, in the installed Chrome,
 * screenshots each piece: the finished print at desktop and phone widths, the
 * reduced-motion render, and any --at frames.
 *
 * WHAT IT REFUSES. The page must log no error and request nothing over the
 * network: a piece that did would break the "nothing external" rule on the
 * site. Either fails the run with exit code 1, after writing what it could.
 *
 * Why not a route: a preview route would be public on theenglishhub.app, and
 * a dev-only one would still need a running server and a signed-in browser.
 * Why Vite: the repo has no tsx or esbuild runner, and vitest already
 * compiles these files this way.
 */

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(import.meta.url)

function parseArgs(argv) {
  const out = { slug: null, only: null, at: [], dir: path.join(os.tmpdir(), 'teh-comics-preview') }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--only') out.only = argv[++i]
    else if (a === '--at')
      out.at = argv[++i]
        .split(',')
        .map((s) => Number(s.trim()))
        .filter((v) => Number.isFinite(v) && v >= 0)
    else if (a === '--out') out.dir = path.resolve(argv[++i])
    else if (!a.startsWith('--') && !out.slug) out.slug = a
  }
  return out
}

const args = parseArgs(process.argv.slice(2))
if (!args.slug) {
  console.error(
    'Usage: node scripts/preview-comics.mjs <slug> [--only <text>] [--at <ms,ms>] [--out <folder>]',
  )
  process.exit(2)
}

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

let failed = false
try {
  const { COMIC_LOADERS } = await vite.ssrLoadModule('/src/data/comics/index.ts')
  const load = COMIC_LOADERS[args.slug]
  if (!load) {
    console.error(
      `No comics registered for "${args.slug}". Registered: ${Object.keys(COMIC_LOADERS).join(', ')}`,
    )
    process.exit(2)
  }
  const set = await load()
  const { RegisteredPanel, RegisteredPortrait, LINOCUT_CSS } = await vite.ssrLoadModule(
    '/src/components/comics/linocut/index.ts',
  )
  const { STUDY_GUIDE_DICTIONARY } = await vite.ssrLoadModule(
    '/src/lib/i18n/dictionary-study-guide.ts',
  )
  // The same React the modules above were given: Vite leaves node_modules to Node.
  const { createElement: h } = require('react')
  const { renderToStaticMarkup } = require('react-dom/server')

  const match = (key) => !args.only || key.toLowerCase().includes(args.only.toLowerCase())
  const labels = {
    markers:
      STUDY_GUIDE_DICTIONARY['study_guide.comics.markers_label']?.en ??
      'The words the numbers point to',
  }
  const pieces = [
    ...set.panels
      .filter((p) => match(p.moment))
      .map((p, i) => ({
        id: `panel-${i + 1}`,
        name: p.moment,
        width: 960,
        mobile: 343,
        node: h(RegisteredPanel, { slug: set.slug, panel: p }),
      })),
    ...set.portraits
      .filter((p) => match(p.name))
      .map((p, i) => ({
        id: `portrait-${i + 1}`,
        name: p.name,
        width: 760,
        mobile: 343,
        node: h(RegisteredPortrait, { slug: set.slug, portrait: p, labels }),
      })),
  ]
  if (pieces.length === 0) {
    console.error(`Nothing matches --only "${args.only}".`)
    process.exit(2)
  }

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const blocks = pieces
    .map((p) => {
      // Rendered twice, at two widths; the ids inside differ only by the
      // wrapper, which is harmless in a preview.
      const html = renderToStaticMarkup(p.node)
      return `<section class="pv" id="${p.id}">
  <h2>${esc(p.name)}</h2>
  <div class="pv-wide" style="width:${p.width}px"><div class="stage">${html}</div></div>
  <div class="pv-narrow" style="width:${p.mobile}px"><div class="stage">${html}</div></div>
</section>`
    })
    .join('\n')
  const page = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>Linocut preview: ${esc(args.slug)}</title>
<style>
body{margin:0;padding:24px;background:#f6f4ef;font-family:system-ui,sans-serif;color:#222}
.pv{margin:0 0 48px}
.pv h2{font-size:14px;font-weight:600;margin:0 0 8px;color:#555}
.pv-wide,.pv-narrow{margin:0 0 24px}
${LINOCUT_CSS}
</style>
</head>
<body>
${blocks}
</body>
</html>`
  fs.mkdirSync(args.dir, { recursive: true })
  const file = path.join(args.dir, `${args.slug}.html`)
  fs.writeFileSync(file, page)
  const kb = (s) => (Buffer.byteLength(s) / 1024).toFixed(1)
  console.log(`wrote ${file} (${kb(page)} KB)`)
  for (const p of pieces)
    console.log(`  ${p.id}: ${p.name}, ${kb(renderToStaticMarkup(p.node))} KB of markup`)

  const { chromium } = require('playwright')
  const browser = await chromium.launch({ channel: 'chrome' })
  const url = pathToFileURL(file).href
  const errors = []
  const external = []
  const watch = (page) => {
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
    page.on('pageerror', (e) => errors.push(String(e)))
    page.on('request', (r) => !r.url().startsWith('file:') && external.push(r.url()))
  }
  const shots = []
  const snap = async (page, selector, name) => {
    const out = path.join(args.dir, `${args.slug}-${name}.png`)
    await page.locator(selector).first().screenshot({ path: out })
    shots.push(out)
  }

  // The finished print: reduced motion switches every animation off, which
  // is also the proof that reduced motion shows the final state.
  const still = await browser.newContext({
    viewport: { width: 1100, height: 900 },
    deviceScaleFactor: 2,
    reducedMotion: 'reduce',
  })
  const sp = await still.newPage()
  watch(sp)
  await sp.goto(url)
  await sp.evaluate(() =>
    document.querySelectorAll('.stage').forEach((s) => s.classList.add('lc-play')),
  )
  await sp.waitForTimeout(300)
  for (const p of pieces) {
    await snap(sp, `#${p.id} .pv-wide`, `${p.id}`)
    await snap(sp, `#${p.id} .pv-narrow`, `${p.id}-phone`)
  }

  // Motion: start every piece at once, then capture each --at frame, and the
  // settled frame at 4.5 s, which must match the still above.
  const moving = await browser.newContext({
    viewport: { width: 1100, height: 900 },
    deviceScaleFactor: 1,
  })
  const mp = await moving.newPage()
  watch(mp)
  await mp.goto(url)
  const t0 = await mp.evaluate(() => {
    document.querySelectorAll('.stage').forEach((s) => s.classList.add('lc-play'))
    return performance.now()
  })
  for (const ms of [...args.at, 4500].sort((a, b) => a - b)) {
    const now = await mp.evaluate(() => performance.now())
    const wait = ms - (now - t0)
    if (wait > 0) await mp.waitForTimeout(wait)
    for (const p of pieces) await snap(mp, `#${p.id} .pv-wide`, `${p.id}-t${ms}`)
  }
  await browser.close()

  for (const s of shots) console.log(`  ${s}`)
  if (errors.length) {
    failed = true
    console.error(`Page errors: ${JSON.stringify(errors)}`)
  }
  if (external.length) {
    failed = true
    console.error(`Network requests (must be none): ${JSON.stringify(external)}`)
  }
  if (!failed) console.log('No page errors and no network requests.')
} finally {
  await vite.close()
}
process.exit(failed ? 1 : 0)
