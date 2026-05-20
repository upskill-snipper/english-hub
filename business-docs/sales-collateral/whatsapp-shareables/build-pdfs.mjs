#!/usr/bin/env node
/**
 * build-pdfs.mjs — convert the 5 WhatsApp shareables to PDF.
 *
 * Pipeline:
 *   1. Read each .md
 *   2. Substitute [SCREENSHOT: name.png] placeholders where the actual
 *      file exists in ./screenshots/ (missing screenshots stay as bold
 *      placeholder text so it's obvious the PDF is incomplete).
 *   3. Convert to HTML with `marked`, wrap in our CSS shell.
 *   4. Write HTML to a temp file in the same folder so relative
 *      ./screenshots/ paths resolve.
 *   5. Invoke the locally-installed Chrome in headless mode to print
 *      to PDF (--headless --disable-gpu --print-to-pdf=...).
 *   6. Rename to the WhatsApp-friendly filename in ./dist/.
 *   7. Report file sizes; warn on any >5MB.
 *
 * Why this not md-to-pdf / Puppeteer? The user's machine has many
 * concurrent chrome.exe instances, which causes Puppeteer's bundled
 * Chromium to hang on launch. Using the system Chrome directly is much
 * more reliable on Windows.
 *
 * Dependencies: `marked` only (zero-config; npx fetches it on first run).
 *
 * Usage:  node build-pdfs.mjs
 *   or:   npm run build:pdfs   (if the script is added to package.json)
 */

import { execSync, spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// ── Config ──────────────────────────────────────────────────────────────
const SCREENSHOT_DIR = join(__dirname, 'screenshots')
const DIST_DIR = join(__dirname, 'dist')
const CSS_PATH = join(__dirname, 'pdf-style.css')

// Common Chrome install paths on Windows; first one that exists wins.
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA ? join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe') : null,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)

const MAPPING = [
  { md: '01-solutions-benefits-value.md',    pdf: 'The English Hub - Solutions and Value.pdf' },
  { md: '02-pricing-pilot.md',               pdf: 'The English Hub - Pricing and Pilot.pdf' },
  { md: '03-getting-started.md',             pdf: 'The English Hub - Getting Started.pdf' },
  { md: '04-feature-showcase.md',            pdf: 'The English Hub - Feature Showcase.pdf' },
  { md: '05-roi-calculator-illustrative.md', pdf: 'The English Hub - Illustrative ROI.pdf' },
]

// ── ANSI colour helpers (work on modern Windows terminals + Unix) ───────
const c = (code, s) => `\x1b[${code}m${s}\x1b[0m`
const cyan = (s) => c('36', s)
const green = (s) => c('32', s)
const yellow = (s) => c('33', s)
const red = (s) => c('31', s)

// ── Find Chrome ─────────────────────────────────────────────────────────
function findChrome() {
  for (const p of CHROME_CANDIDATES) {
    try {
      if (existsSync(p)) return p
    } catch {}
  }
  throw new Error(
    'Could not find Google Chrome. Set CHROME_PATH env var to point at chrome.exe.',
  )
}

// ── Lazy-load marked via dynamic import so the script runs from anywhere ──
async function loadMarked() {
  try {
    return (await import('marked')).marked
  } catch {
    console.log('marked not found — installing via npm...')
    execSync('npm install marked --no-save --silent', { cwd: __dirname, stdio: 'inherit' })
    return (await import('marked')).marked
  }
}

// ── Substitute [SCREENSHOT: name.png] ───────────────────────────────────
function substituteScreenshots(md) {
  let substituted = 0
  let missing = 0
  const out = md.replace(/\[SCREENSHOT:\s*([^\]]+?)\]/g, (_full, name) => {
    const filename = name.trim()
    const imgPath = join(SCREENSHOT_DIR, filename)
    if (existsSync(imgPath)) {
      substituted++
      return `![](./screenshots/${filename})`
    } else {
      missing++
      return `**[SCREENSHOT MISSING: ${filename}]**`
    }
  })
  return { md: out, substituted, missing }
}

// ── Wrap HTML in a self-contained document with our CSS ─────────────────
function wrapHtml(bodyHtml, title) {
  const css = readFileSync(CSS_PATH, 'utf8')
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
${css}
  </style>
</head>
<body>
${bodyHtml}
</body>
</html>
`
}

// ── Invoke headless Chrome to print HTML → PDF ──────────────────────────
function chromePrintToPdf(chromeExe, htmlPath, pdfPath) {
  // Use file:// URL so Chrome treats it as a real page (relative paths to
  // ./screenshots/ resolve correctly).
  const fileUrl = 'file:///' + resolve(htmlPath).replace(/\\/g, '/')
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-extensions',
    '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=10000',
    `--print-to-pdf=${pdfPath}`,
    fileUrl,
  ]

  // Use spawnSync rather than execSync so quoting is robust on Windows.
  const result = spawnSync(chromeExe, args, {
    timeout: 60_000,
    encoding: 'utf8',
  })
  if (result.error) throw result.error
  if (result.status !== 0) {
    throw new Error(`Chrome exited with status ${result.status}: ${result.stderr || result.stdout || '(no output)'}`)
  }
}

// ── Main ────────────────────────────────────────────────────────────────
async function main() {
  console.log('')
  console.log(cyan('=== The English Hub — WhatsApp shareables PDF build ==='))
  console.log(`Working dir: ${__dirname}`)
  console.log('')

  const chromeExe = findChrome()
  console.log(green(`[OK] Chrome detected: ${chromeExe}`))

  const marked = await loadMarked()
  console.log(green('[OK] marked loaded'))

  // Ensure dist/ exists, clean previous PDFs
  if (!existsSync(DIST_DIR)) mkdirSync(DIST_DIR, { recursive: true })
  for (const f of readdirSync(DIST_DIR)) {
    if (f.endsWith('.pdf')) unlinkSync(join(DIST_DIR, f))
  }

  // Clean any stale __build files
  for (const f of readdirSync(__dirname)) {
    if (f.startsWith('__build_')) {
      try { unlinkSync(join(__dirname, f)) } catch {}
    }
  }

  const results = []

  for (const { md, pdf } of MAPPING) {
    const mdPath = join(__dirname, md)
    if (!existsSync(mdPath)) {
      console.log(yellow(`  [SKIP] ${md} — file not found`))
      continue
    }

    console.log('')
    console.log(cyan(`Building: ${md}`))

    const raw = readFileSync(mdPath, 'utf8')
    const { md: substitutedMd, substituted, missing } = substituteScreenshots(raw)

    if (substituted > 0) console.log(green(`  [OK] Substituted ${substituted} screenshot(s)`))
    if (missing > 0) console.log(yellow(`  [WARN] ${missing} screenshot placeholder(s) still missing`))

    // Render to HTML
    const bodyHtml = marked.parse(substitutedMd)
    const fullHtml = wrapHtml(bodyHtml, pdf.replace(/\.pdf$/, ''))

    // Write to a temp HTML alongside the source so relative paths resolve
    const tempName = `__build_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    const tempHtml = join(__dirname, `${tempName}.html`)
    writeFileSync(tempHtml, fullHtml, 'utf8')

    const tempPdf = join(__dirname, `${tempName}.pdf`)
    try {
      chromePrintToPdf(chromeExe, tempHtml, tempPdf)
      const finalPdf = join(DIST_DIR, pdf)
      renameSync(tempPdf, finalPdf)
      const sizeBytes = statSync(finalPdf).size
      const sizeMB = (sizeBytes / 1024 / 1024).toFixed(2)
      const sizeKB = Math.round(sizeBytes / 1024)
      console.log(green(`  [OK] Produced: ${pdf} — ${sizeKB} KB (${sizeMB} MB)`))
      results.push({ name: pdf, sizeMB: Number(sizeMB), missing })
    } catch (err) {
      console.log(red(`  [FAIL] ${err.message}`))
    } finally {
      try { unlinkSync(tempHtml) } catch {}
    }
  }

  // Summary
  console.log('')
  console.log(cyan('=== Build complete ==='))
  console.log(`Output: ${DIST_DIR}`)
  console.log('')

  if (results.length === 0) {
    console.log(red('No PDFs produced.'))
    process.exit(1)
  }

  console.log(`${'PDF'.padEnd(52)} ${'SizeMB'.padStart(8)} ${'MissingShots'.padStart(13)}`)
  console.log('-'.repeat(52) + ' ' + '-'.repeat(8) + ' ' + '-'.repeat(13))
  for (const r of results) {
    console.log(`${r.name.padEnd(52)} ${String(r.sizeMB).padStart(8)} ${String(r.missing).padStart(13)}`)
  }
  console.log('')

  const oversize = results.filter((r) => r.sizeMB > 5)
  if (oversize.length > 0) {
    console.log(yellow('[WARN] PDFs above the 5 MB WhatsApp-fast-share target:'))
    for (const r of oversize) console.log(`    ${r.name} — ${r.sizeMB} MB`)
    console.log('  Fix: re-compress screenshots through https://tinypng.com and re-run.')
  } else {
    console.log(green('[OK] All PDFs are under the 5 MB WhatsApp-fast-share target.'))
  }

  const needShots = results.filter((r) => r.missing > 0)
  if (needShots.length > 0) {
    console.log('')
    console.log(yellow('[WARN] PDFs still missing screenshot placeholders:'))
    for (const r of needShots) console.log(`    ${r.name} — ${r.missing} missing`)
    console.log('  Take per screenshots/README.md and re-run.')
  }

  console.log('')
  console.log(cyan('To share on WhatsApp:'))
  console.log('  1. Open WhatsApp Desktop or Web')
  console.log(`  2. Drag-drop a PDF from ${DIST_DIR} into the chat`)
  console.log('  3. The recipient sees the friendly filename')
  console.log('')
}

main().catch((err) => {
  console.error(red(`\n[FATAL] ${err.stack || err.message}`))
  process.exit(1)
})
