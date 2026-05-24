#!/usr/bin/env node
/**
 * build-pdfs.mjs — render every deployment-pack HTML doc to PDF using the
 * system Chrome's headless print-to-PDF. Same proven approach as the
 * html-shareables builder. Outputs to ./dist/ with friendly filenames.
 *
 * Usage:  node build-pdfs.mjs
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, renameSync, statSync, unlinkSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = join(__dirname, 'dist')

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA ? join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe') : null,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
].filter(Boolean)

const MAPPING = [
  { html: '00-index.html',                        pdf: 'The English Hub - 00 Deployment Pack (Contents).pdf' },
  { html: '01-pilot-agreement.html',              pdf: 'The English Hub - 01 Pilot Agreement.pdf' },
  { html: '02-data-processing-agreement.html',    pdf: 'The English Hub - 02 Data Processing Agreement.pdf' },
  { html: '03-subprocessor-register.html',        pdf: 'The English Hub - 03 Sub-processor Register.pdf' },
  { html: '04-information-security-statement.html',pdf: 'The English Hub - 04 Information Security Statement.pdf' },
  { html: '05-data-retention-deletion.html',      pdf: 'The English Hub - 05 Data Retention and Deletion.pdf' },
  { html: '06-compliance-summary.html',           pdf: 'The English Hub - 06 Compliance Summary.pdf' },
  { html: '07-due-diligence-questionnaire.html',  pdf: 'The English Hub - 07 Due-Diligence Questionnaire.pdf' },
  { html: '08-safeguarding-statement.html',       pdf: 'The English Hub - 08 Safeguarding Statement.pdf' },
  { html: '09-project-owner-checklist.html',      pdf: 'The English Hub - 09 Project Owner Checklist.pdf' },
  { html: '10-kickoff-and-success-criteria.html', pdf: 'The English Hub - 10 Kickoff and Success Criteria.pdf' },
  { html: '11-parent-communication-templates.html',pdf:'The English Hub - 11 Parent Communication Templates.pdf' },
  { html: '12-roster-upload-guide.html',          pdf: 'The English Hub - 12 Roster Upload Guide.pdf' },
]

function findChrome() {
  for (const p of CHROME_CANDIDATES) { try { if (existsSync(p)) return p } catch {} }
  throw new Error('Could not find Google Chrome. Set CHROME_PATH env var.')
}

function chromePrintToPdf(chromeExe, htmlPath, pdfPath) {
  const fileUrl = 'file:///' + resolve(htmlPath).replace(/\\/g, '/')
  const r = spawnSync(chromeExe, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--disable-extensions',
    '--no-pdf-header-footer', '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=10000', `--print-to-pdf=${pdfPath}`, fileUrl,
  ], { timeout: 60_000, encoding: 'utf8' })
  if (r.error) throw r.error
  if (r.status !== 0) throw new Error(`Chrome exit ${r.status}: ${r.stderr || r.stdout || '(no output)'}`)
}

async function main() {
  console.log('\n=== The English Hub -- Deployment pack PDF build ===')
  const chromeExe = findChrome()
  console.log(`[OK] Chrome: ${chromeExe}\n`)

  if (!existsSync(DIST_DIR)) mkdirSync(DIST_DIR, { recursive: true })
  for (const f of readdirSync(DIST_DIR)) if (f.endsWith('.pdf')) unlinkSync(join(DIST_DIR, f))
  for (const f of readdirSync(__dirname)) if (f.startsWith('__build_')) { try { unlinkSync(join(__dirname, f)) } catch {} }

  const results = []
  for (const { html, pdf } of MAPPING) {
    const htmlPath = join(__dirname, html)
    if (!existsSync(htmlPath)) { console.log(`  [SKIP] ${html}`); continue }
    process.stdout.write(`Building: ${html} ... `)
    const tmp = join(__dirname, `__build_${Date.now()}_${Math.random().toString(36).slice(2,8)}.pdf`)
    try {
      chromePrintToPdf(chromeExe, htmlPath, tmp)
      const final = join(DIST_DIR, pdf)
      renameSync(tmp, final)
      const kb = Math.round(statSync(final).size / 1024)
      console.log(`[OK] ${kb} KB`)
      results.push({ name: pdf, kb })
    } catch (e) {
      console.log(`[FAIL] ${e.message}`); try { unlinkSync(tmp) } catch {}
    }
  }

  console.log(`\n=== Built ${results.length} PDFs in ${DIST_DIR} ===`)
  results.forEach(r => console.log(`  ${r.name.padEnd(58)} ${String(r.kb).padStart(5)} KB`))
  console.log('')
}

main().catch(e => { console.error(`\n[FATAL] ${e.stack || e.message}`); process.exit(1) })
