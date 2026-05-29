#!/usr/bin/env node
/**
 * Render the marker-drive markdown docs to branded A4 PDFs via the system
 * Chrome's headless print-to-PDF (same approach as the sales-collateral pack).
 * Usage: node build-pdfs.mjs
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, unlinkSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, 'dist')

const CHROME = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium',
].filter(Boolean)

const MAP = [
  { md: 'calibration-executive-overview.md', pdf: 'The English Hub - Marking Calibration (Executive Overview).pdf', title: 'Marking Calibration — Executive Overview & Rollout Plan' },
  { md: 'marker-brief.md', pdf: 'The English Hub - Marker & Examiner Brief.pdf', title: 'Marker & Examiner Brief — Marking Opportunity' },
]

function findChrome() { for (const p of CHROME) { try { if (existsSync(p)) return p } catch {} } throw new Error('Chrome not found') }

// Minimal, dependency-free markdown -> HTML (headings, tables, lists, code, bold, hr, pipes).
function mdToHtml(md) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const lines = md.split(/\r?\n/)
  let html = '', i = 0, inCode = false, codeBuf = []
  const inline = (t) => esc(t)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  const flushList = (() => {})
  let listOpen = null // 'ul' | 'ol'
  const closeList = () => { if (listOpen) { html += `</${listOpen}>`; listOpen = null } }
  while (i < lines.length) {
    let line = lines[i]
    if (line.trim().startsWith('```')) {
      if (!inCode) { inCode = true; codeBuf = [] }
      else { inCode = false; html += `<pre><code>${esc(codeBuf.join('\n'))}</code></pre>` }
      i++; continue
    }
    if (inCode) { codeBuf.push(line); i++; continue }
    // tables
    if (line.includes('|') && lines[i + 1] && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
      closeList()
      const header = line.split('|').map((c) => c.trim()).filter((c, idx, a) => !(idx === 0 && c === '') && !(idx === a.length - 1 && c === ''))
      i += 2
      let rows = ''
      while (i < lines.length && lines[i].includes('|')) {
        const cells = lines[i].split('|').map((c) => c.trim()).filter((c, idx, a) => !(idx === 0 && c === '') && !(idx === a.length - 1 && c === ''))
        rows += '<tr>' + cells.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>'
        i++
      }
      html += '<table><thead><tr>' + header.map((h) => `<th>${inline(h)}</th>`).join('') + '</tr></thead><tbody>' + rows + '</tbody></table>'
      continue
    }
    if (/^#{1,4}\s/.test(line)) { closeList(); const lvl = line.match(/^#+/)[0].length; html += `<h${lvl}>${inline(line.replace(/^#+\s/, ''))}</h${lvl}>`; i++; continue }
    if (/^---+\s*$/.test(line)) { closeList(); html += '<hr>'; i++; continue }
    if (/^\s*[-*]\s/.test(line)) { if (listOpen !== 'ul') { closeList(); html += '<ul>'; listOpen = 'ul' } html += `<li>${inline(line.replace(/^\s*[-*]\s/, ''))}</li>`; i++; continue }
    if (/^\s*\d+\.\s/.test(line)) { if (listOpen !== 'ol') { closeList(); html += '<ol>'; listOpen = 'ol' } html += `<li>${inline(line.replace(/^\s*\d+\.\s/, ''))}</li>`; i++; continue }
    if (line.trim() === '') { closeList(); i++; continue }
    closeList(); html += `<p>${inline(line)}</p>`; i++
  }
  closeList()
  return html
}

function wrap(body, title) {
  const css = readFileSync(join(__dirname, '..', 'sales-collateral', 'html-shareables', 'styles.css'), 'utf8')
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body><div class="shell">${body}</div></body></html>`
}

function main() {
  const chrome = findChrome()
  if (!existsSync(DIST)) mkdirSync(DIST, { recursive: true })
  for (const { md, pdf, title } of MAP) {
    const html = wrap(mdToHtml(readFileSync(join(__dirname, md), 'utf8')), title)
    const tmpHtml = join(__dirname, `__build_${Date.now()}_${Math.random().toString(36).slice(2, 7)}.html`)
    require('node:fs').writeFileSync(tmpHtml, html, 'utf8')
    const tmpPdf = tmpHtml.replace('.html', '.pdf')
    const r = spawnSync(chrome, ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer', '--run-all-compositor-stages-before-draw', '--virtual-time-budget=8000', `--print-to-pdf=${tmpPdf}`, 'file:///' + resolve(tmpHtml).replace(/\\/g, '/')], { timeout: 60000, encoding: 'utf8' })
    unlinkSync(tmpHtml)
    if (r.status !== 0 || !existsSync(tmpPdf)) { console.log(`[FAIL] ${pdf}: ${r.stderr || r.status}`); continue }
    const final = join(DIST, pdf)
    if (existsSync(final)) unlinkSync(final)
    renameSync(tmpPdf, final)
    console.log(`[OK] ${pdf} — ${Math.round(statSync(final).size / 1024)} KB`)
  }
}
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
main()
