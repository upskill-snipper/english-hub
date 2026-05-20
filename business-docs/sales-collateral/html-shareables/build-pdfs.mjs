#!/usr/bin/env node
/**
 * build-pdfs.mjs — convert the 6 HTML shareables to PDF.
 *
 * Uses the system Chrome's headless print-to-PDF directly (no Puppeteer,
 * no Chromium bundle, no md-to-pdf). Reliable on Windows where Puppeteer
 * can hang against concurrent user-Chrome instances.
 *
 * Pipeline:
 *   1. Find system Chrome.
 *   2. For each .html file:
 *      a. Invoke Chrome --headless --print-to-pdf=...
 *      b. Chrome reads the file via file:// so ./styles.css resolves.
 *      c. The print stylesheet inside styles.css tunes layout for A4
 *         (Ctrl/Cmd+P from a browser produces the same output).
 *   3. Rename each PDF to a WhatsApp-friendly filename in ./dist/.
 *   4. Report sizes.
 *
 * Usage:  node build-pdfs.mjs
 */

import { spawnSync } from 'node:child_process'
import {
  existsSync, mkdirSync, readdirSync, renameSync, statSync, unlinkSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = join(__dirname, 'dist')

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA
    ? join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe')
    : null,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)

const MAPPING = [
  { html: 'index.html',                pdf: 'The English Hub - 00 School Pack (Contents).pdf' },
  { html: '01-solutions-value.html',   pdf: 'The English Hub - 01 Solutions and Value.pdf' },
  { html: '02-pricing-pilot.html',     pdf: 'The English Hub - 02 Pricing and Pilot.pdf' },
  { html: '03-getting-started.html',   pdf: 'The English Hub - 03 Getting Started.pdf' },
  { html: '04-feature-showcase.html',  pdf: 'The English Hub - 04 Feature Showcase.pdf' },
  { html: '05-roi-illustrative.html',  pdf: 'The English Hub - 05 Illustrative ROI.pdf' },
]

function findChrome() {
  for (const p of CHROME_CANDIDATES) {
    try { if (existsSync(p)) return p } catch {}
  }
  throw new Error(
    'Could not find Google Chrome. Set the CHROME_PATH env var to point at chrome.exe.',
  )
}

function chromePrintToPdf(chromeExe, htmlPath, pdfPath) {
  // file:// URL with forward slashes (Chrome on Windows requires this)
  const fileUrl = 'file:///' + resolve(htmlPath).replace(/\\/g, '/')
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-extensions',
    '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw',
    // 10s budget so webfonts (Newsreader + Geist via Google Fonts CDN)
    // load before the print snapshot is taken.
    '--virtual-time-budget=10000',
    `--print-to-pdf=${pdfPath}`,
    fileUrl,
  ]
  const result = spawnSync(chromeExe, args, {
    timeout: 60_000,
    encoding: 'utf8',
  })
  if (result.error) throw result.error
  if (result.status !== 0) {
    throw new Error(
      `Chrome exited with status ${result.status}: ${result.stderr || result.stdout || '(no output)'}`,
    )
  }
}

function fmt(n) { return n.toLocaleString('en-GB') }

async function main() {
  console.log('')
  console.log('=== The English Hub -- HTML pack PDF build ===')
  console.log(`Working dir: ${__dirname}`)
  console.log('')

  const chromeExe = findChrome()
  console.log(`[OK] Chrome detected: ${chromeExe}`)
  console.log('')

  if (!existsSync(DIST_DIR)) mkdirSync(DIST_DIR, { recursive: true })
  for (const f of readdirSync(DIST_DIR)) {
    if (f.endsWith('.pdf')) unlinkSync(join(DIST_DIR, f))
  }

  // Clean any stale __build files from a killed previous run.
  for (const f of readdirSync(__dirname)) {
    if (f.startsWith('__build_')) {
      try { unlinkSync(join(__dirname, f)) } catch {}
    }
  }

  const results = []

  for (const { html, pdf } of MAPPING) {
    const htmlPath = join(__dirname, html)
    if (!existsSync(htmlPath)) {
      console.log(`  [SKIP] ${html} -- file not found`)
      continue
    }

    process.stdout.write(`Building: ${html} ... `)
    const tempPdf = join(__dirname, `__build_${Date.now()}_${Math.random().toString(36).slice(2, 8)}.pdf`)
    try {
      chromePrintToPdf(chromeExe, htmlPath, tempPdf)
      const finalPdf = join(DIST_DIR, pdf)
      renameSync(tempPdf, finalPdf)
      const sizeBytes = statSync(finalPdf).size
      const sizeKB = Math.round(sizeBytes / 1024)
      console.log(`[OK] ${sizeKB} KB`)
      results.push({ name: pdf, sizeKB, sizeMB: (sizeBytes / 1024 / 1024).toFixed(2) })
    } catch (err) {
      console.log(`[FAIL] ${err.message}`)
      try { unlinkSync(tempPdf) } catch {}
    }
  }

  console.log('')
  console.log('=== Build complete ===')
  console.log(`Output: ${DIST_DIR}`)
  console.log('')

  if (results.length === 0) {
    console.error('No PDFs produced.')
    process.exit(1)
  }

  for (const r of results) {
    console.log(`  ${r.name.padEnd(56)} ${String(r.sizeKB).padStart(6)} KB`)
  }
  console.log('')

  const oversize = results.filter((r) => Number(r.sizeMB) > 5)
  if (oversize.length > 0) {
    console.log(`[WARN] ${oversize.length} PDF(s) over the 5 MB WhatsApp-fast-share target:`)
    for (const r of oversize) console.log(`    ${r.name} -- ${r.sizeMB} MB`)
  } else {
    console.log('[OK] All PDFs under the 5 MB WhatsApp-fast-share target.')
  }
  console.log('')
}

main().catch((err) => {
  console.error(`\n[FATAL] ${err.stack || err.message}`)
  process.exit(1)
})
