/**
 * html-shell.ts — The Anthology page wrapper
 *
 * Every Anthology document uses this shell: registration marks, header, body, footer.
 * The shell is rendered as a complete HTML string for PDF/Word export.
 */

import { ANTHOLOGY_CSS, ANTHOLOGY_FONTS_LINK } from './anthology-css'
import type { AnthologyBrand, AnthologyCover, AnthologyFooter } from './types'

// ─── Helpers ───────────────────────────────────────────────────────────────

export function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Wraps the accent word in an <em> tag within the title */
function renderTitle(lines: string[], accentWord: string): string {
  return lines
    .map((line) => {
      if (accentWord && line.includes(accentWord)) {
        return line.replace(accentWord, `<em>${accentWord}</em>`)
      }
      return line
    })
    .join('<br>')
}

// ─── Registration marks ────────────────────────────────────────────────────

function regMarks(): string {
  return `<div class="reg-mark tl"></div><div class="reg-mark tr"></div><div class="reg-mark bl"></div><div class="reg-mark br"></div>`
}

// ─── Header ────────────────────────────────────────────────────────────────

export function renderHeader(brand: AnthologyBrand): string {
  return `
    <header class="anth-hdr">
      <div class="brand">The <em>English</em> Hub</div>
      <div class="edition">${escHtml(brand.edition)}</div>
      <div class="code">${escHtml(brand.code)}</div>
    </header>
    <hr class="hairline-heavy"/>`
}

// ─── Cover ─────────────────────────────────────────────────────────────────

export function renderCover(cover: AnthologyCover): string {
  const titleStyle = cover.titleSize ? ` style="font-size:${cover.titleSize}px;"` : ''
  const byline = cover.byline
    ? `<div class="by">${escHtml(cover.byline.prefix)}<em>${escHtml(cover.byline.name)}</em></div>`
    : ''

  return `
    <div class="anth-cover">
      <div class="super">${escHtml(cover.super)}</div>
      <h1${titleStyle}>${renderTitle(cover.titleLines, cover.accentWord)}</h1>
      <div class="sub">${escHtml(cover.sub)}</div>
      ${byline}
    </div>
    <hr class="hairline"/>`
}

// ─── Footer ────────────────────────────────────────────────────────────────

export function renderFooter(footer: AnthologyFooter): string {
  return `
    <hr class="hairline"/>
    <div class="anth-foot">
      <span>${footer.left}</span>
      <span>${footer.centre}</span>
      <span>${footer.right}</span>
    </div>`
}

// ─── Full page wrapper ─────────────────────────────────────────────────────

/**
 * Wraps body HTML in the complete Anthology page shell.
 * Returns a standalone HTML document string ready for PDF/Word export.
 */
export function anthologyPageHtml(opts: {
  title: string
  brand: AnthologyBrand
  cover: AnthologyCover
  bodyHtml: string
  footer: AnthologyFooter
  /** If true, adds preview chrome (print bar, cream background) */
  preview?: boolean
}): string {
  const { title, brand, cover, bodyHtml, footer, preview = true } = opts

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${escHtml(title)} — The English Hub</title>
${ANTHOLOGY_FONTS_LINK}
<style>${ANTHOLOGY_CSS}</style>
</head>
<body${preview ? ' class="anth-preview"' : ''}>
${preview ? `<div class="print-bar" onclick="window.print()">&#9113; PRINT / SAVE AS PDF — Use Ctrl+P / Cmd+P</div>` : ''}
<div class="anth-page">
  ${regMarks()}
  ${renderHeader(brand)}
  ${renderCover(cover)}
  <div class="anth-body">
    ${bodyHtml}
  </div>
  ${renderFooter(footer)}
</div>
</body>
</html>`
}

/**
 * Wraps body HTML in the Anthology page shell for Word (.doc) download.
 * Uses Office XML namespaces for Word compatibility.
 */
export function anthologyWordHtml(opts: {
  title: string
  brand: AnthologyBrand
  cover: AnthologyCover
  bodyHtml: string
  footer: AnthologyFooter
}): string {
  const { title, brand, cover, bodyHtml, footer } = opts

  return `<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>${escHtml(title)} — The English Hub</title>
<!--[if gte mso 9]>
<xml><o:OfficeDocumentSettings><o:AllowPNG/></o:OfficeDocumentSettings></xml>
<![endif]-->
${ANTHOLOGY_FONTS_LINK}
<style>
@page { size: A4; margin: 15mm; }
${ANTHOLOGY_CSS}
/* Word-specific overrides */
.anth-page { width: auto; min-height: auto; }
.reg-mark { display: none; }
.print-bar { display: none; }
</style>
</head>
<body>
<div class="anth-page">
  ${renderHeader(brand)}
  ${renderCover(cover)}
  <div class="anth-body">
    ${bodyHtml}
  </div>
  ${renderFooter(footer)}
</div>
</body>
</html>`
}
