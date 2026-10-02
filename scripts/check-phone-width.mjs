#!/usr/bin/env node
/**
 * Is any page wider than a phone? A read-only sweep of the sitemap at a phone's
 * width, one JSON line per page. Exits 1 if any page is too wide.
 *
 * MEASURE AGAINST THE PHONE'S WIDTH, NEVER window.innerWidth. Until 2 October
 * 2026 the sweep this replaces compared document scrollWidth with innerWidth.
 * Under mobile emulation (isMobile, as here) Chrome zooms out to fit a page
 * wider than the device and grows innerWidth to match the content, so the two
 * were always equal: /ks3/rubrics measured innerWidth 399 and scrollWidth 399
 * on a 360px phone. Two sweeps (390px on 26 September, 360px on 2 October)
 * reported "no sideways scroll" for every page while 70 of 1,333 were too
 * wide, the iLowerSecondary practice papers by 288px. Reverse-test any change
 * to the measurement on a page known to be too wide before trusting a clean run.
 *
 * Per page:
 *   overflowX  pixels wider than the phone (0 = fits)
 *   wide       up to three elements past the right edge that are not inside a
 *              container that fits (a scroller the reader can swipe, or a
 *              deliberate clip); fixed elements and SVG shapes are skipped
 *   narrowest  the narrowest box holding 60+ characters of its own text, if
 *              under 170px (how the readers' 68px text column was found on
 *              26 September); screen-reader-only text is skipped
 *   h1         the page's first heading, so a run that measured an error page
 *              instead of the page shows it (it happened once on 2 October)
 *
 * Clicks nothing and submits nothing. Sets the board cookie and a
 * necessary-only cookie choice so the banner does not cover the page.
 *
 *   node scripts/check-phone-width.mjs [--width 360] [--out phone-width.jsonl]
 *        [--concurrency 4] [--base http://localhost:3000] [--urls /a,/b]
 *
 * --base re-points every sitemap URL at another origin (a local server running
 * a change), --urls checks only the paths given, and an existing --out file is
 * resumed rather than restarted. Exit 0: every page fits. 1: a page is too
 * wide. 2: a page could not be measured.
 *
 * In Git Bash, run --urls with MSYS_NO_PATHCONV=1: otherwise "/ks3/rubrics"
 * reaches the script as "C:/Program Files/Git/ks3/rubrics".
 */

import { appendFileSync, existsSync, readFileSync } from 'node:fs'
import { chromium } from '@playwright/test'

const args = process.argv.slice(2)
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback
}
const WIDTH = Number(opt('width', 360))
const OUT = opt('out', 'phone-width.jsonl')
const CONCURRENCY = Number(opt('concurrency', 4))
const SITE = 'https://theenglishhub.app'
const BASE = opt('base', SITE).replace(/\/$/, '')

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`, {
    headers: { 'User-Agent': 'TheEnglishHub-factcheck/1.0' },
  })
  const xml = await res.text()
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  // Arabic pages share their English page's layout; one in ten is enough.
  const ar = all.filter((u) => /\/ar(\/|$)/.test(u))
  return all.filter((u) => !/\/ar(\/|$)/.test(u)).concat(ar.filter((_, i) => i % 10 === 0))
}

/** Runs in the page. `vw` is the phone's width, passed in, not read from it. */
function measure(vw) {
  const cs = (el) => getComputedStyle(el)
  const visible = (el) => {
    const s = cs(el)
    const r = el.getBoundingClientRect()
    return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0
  }
  const srOnly = (el) => {
    for (let p = el; p && p !== document.body; p = p.parentElement) {
      const s = cs(p)
      if ((s.clip && s.clip !== 'auto') || /inset\(50%\)/.test(s.clipPath)) return true
    }
    return false
  }
  const fixed = (el) => {
    for (let p = el; p && p !== document.body; p = p.parentElement)
      if (cs(p).position === 'fixed') return true
    return false
  }
  const describe = (el) =>
    `${el.tagName.toLowerCase()}.${String(el.className?.baseVal ?? el.className ?? '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 4)
      .join('.')}`

  const wide = []
  for (const el of document.body.querySelectorAll('*')) {
    if (el instanceof SVGElement && el.tagName.toLowerCase() !== 'svg') continue
    const r = el.getBoundingClientRect()
    if (r.right <= vw + 2 || r.width === 0 || !visible(el) || srOnly(el) || fixed(el)) continue
    let contained = false
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const o = cs(p).overflowX
      if (o === 'auto' || o === 'scroll' || o === 'hidden' || o === 'clip') {
        contained = p.getBoundingClientRect().right <= vw + 2
        break
      }
    }
    if (!contained) wide.push(`${describe(el)} right=${Math.round(r.right)}`)
    if (wide.length >= 3) break
  }

  let narrowest = null
  for (const el of document.body.querySelectorAll('*')) {
    let own = ''
    for (const n of el.childNodes) if (n.nodeType === 3) own += n.textContent
    const t = own.replace(/\s+/g, ' ').trim()
    if (t.length < 60 || !visible(el) || srOnly(el)) continue
    const w = el.getBoundingClientRect().width
    if (!narrowest || w < narrowest.w)
      narrowest = { w: Math.round(w), el: describe(el), text: t.slice(0, 40) }
  }

  const docW = document.documentElement.scrollWidth
  return {
    overflowX: docW > vw + 1 ? docW - vw : 0,
    innerWidth: window.innerWidth,
    wide,
    narrowest: narrowest && narrowest.w < 170 ? narrowest : null,
    h1: (document.querySelector('h1')?.textContent ?? '').trim().slice(0, 60) || null,
  }
}

const listed = opt('urls', null)
let urls = listed
  ? listed.split(',').map((p) => (p.startsWith('http') ? p : SITE + p))
  : await sitemapUrls()
urls = urls.map((u) => u.replace(SITE, BASE))
const done = new Set(
  existsSync(OUT)
    ? readFileSync(OUT, 'utf8')
        .split('\n')
        .filter(Boolean)
        .map((l) => JSON.parse(l).url)
    : [],
)
const todo = urls.filter((u) => !done.has(u))
console.log(
  `width ${WIDTH}px; ${urls.length} pages, ${done.size} already in ${OUT}, ${todo.length} to check`,
)

const browser = await chromium
  .launch({ channel: 'chrome', headless: true })
  .catch(() => chromium.launch({ headless: true }))
const ctx = await browser.newContext({
  viewport: { width: WIDTH, height: 800 },
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
})
await ctx.addCookies([{ name: 'english-hub-board', value: 'aqa', url: BASE }])
await ctx.addInitScript(() => {
  try {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: false }))
  } catch {}
})

let next = 0
async function worker() {
  const page = await ctx.newPage()
  while (next < todo.length) {
    const url = todo[next++]
    const row = { url }
    try {
      const r = await page.goto(url, { waitUntil: 'load', timeout: 90000 })
      await page.waitForTimeout(1200)
      row.status = r ? r.status() : null
      Object.assign(row, await page.evaluate(measure, WIDTH))
    } catch (e) {
      row.error = String(e?.message ?? e).slice(0, 120)
    }
    appendFileSync(OUT, JSON.stringify(row) + '\n')
  }
  await page.close()
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker))
await browser.close()

const rows = readFileSync(OUT, 'utf8')
  .split('\n')
  .filter(Boolean)
  .map((l) => JSON.parse(l))
const tooWide = rows.filter((r) => r.overflowX)
for (const r of tooWide.sort((a, b) => b.overflowX - a.overflowX))
  console.log(`${String(r.overflowX).padStart(4)}px too wide  ${r.url}  ${r.wide?.[0] ?? ''}`)
console.log(
  `checked ${rows.length}; too wide ${tooWide.length}; narrow text ${rows.filter((r) => r.narrowest).length}; errors ${rows.filter((r) => r.error).length}; no h1 ${rows.filter((r) => !r.error && !r.h1).length}`,
)
// A page that could not be measured is not a page that fits: exit 2 rather than
// letting a run full of navigation errors report success.
process.exit(tooWide.length ? 1 : rows.some((r) => r.error) ? 2 : 0)
