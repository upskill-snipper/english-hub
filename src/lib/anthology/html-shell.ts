/**
 * html-shell.ts — The Anthology page wrapper
 *
 * Every Anthology document uses this shell: registration marks, header, body, footer.
 * The shell is rendered as a complete HTML string for PDF/Word export.
 */

import { ANTHOLOGY_CSS, ANTHOLOGY_FONTS_LINK } from './anthology-css'
import type { AnthologyBrand, AnthologyCover, AnthologyFooter } from './types'

// ─── CSS Variable Resolver (for Word compatibility) ────────────────────────

/**
 * Word does not support CSS variables (var(--name)).
 * This function resolves all custom property references to their hex values
 * so the document renders correctly when opened in Word/Google Docs.
 */
const CSS_VAR_VALUES: Record<string, string> = {
  '--cream-50': '#FBF7F0',
  '--cream-100': '#F5EFE4',
  '--cream-200': '#ECE2CF',
  '--cream-300': '#DECEB0',
  '--ink-950': '#0F1411',
  '--ink-900': '#141A17',
  '--ink-800': '#1E2621',
  '--ink-700': '#303832',
  '--ink-600': '#4A524C',
  '--ink-500': '#6C736D',
  '--ink-400': '#8F948F',
  '--ink-300': '#B5B8B3',
  '--ink-200': '#D6D7D3',
  '--ink-100': '#E8E8E4',
  '--clay-700': '#8C3B1F',
  '--clay-600': '#AD4A28',
  '--clay-500': '#C65A33',
  '--clay-400': '#D97A4E',
  '--clay-300': '#E8A382',
  '--ochre-400': '#E4BA4E',
  '--sage-400': '#92AB8F',
  '--font-serif': '"Newsreader", Georgia, serif',
  '--font-mono': '"JetBrains Mono", "Courier New", monospace',
}

/** Resolve all `var(--name)` references in CSS and inline styles to actual values */
function resolveCssVars(input: string): string {
  return input.replace(/var\((--[a-z0-9-]+)(?:,\s*[^)]+)?\)/g, (match, varName) => {
    return CSS_VAR_VALUES[varName] || match
  })
}

// ─── Helpers ───────────────────────────────────────────────────────────────

export function escHtml(s: string | null | undefined): string {
  if (s == null) return ''
  return String(s)
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
 * Word doesn't support CSS variables, so all `var(--name)` references are
 * resolved to their hex values inline.
 */
export function anthologyWordHtml(opts: {
  title: string
  brand: AnthologyBrand
  cover: AnthologyCover
  bodyHtml: string
  footer: AnthologyFooter
}): string {
  const { title, brand, cover, bodyHtml, footer } = opts

  // Resolve all CSS variables in the main stylesheet AND in the body HTML
  // (the body HTML contains inline styles like `style="color:var(--clay-600)"`)
  const wordCss = resolveCssVars(ANTHOLOGY_CSS)
  const wordBody = resolveCssVars(bodyHtml)
  const wordHeader = resolveCssVars(renderHeader(brand))
  const wordCover = resolveCssVars(renderCover(cover))
  const wordFooter = resolveCssVars(renderFooter(footer))

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
@page WordSection1 { size: 21cm 29.7cm; margin: 2cm; mso-page-orientation: portrait; }
div.WordSection1 { page: WordSection1; }
${wordCss}
/* Word-specific overrides */
.anth-page { width: auto; min-height: auto; padding: 0; }
.reg-mark { display: none; }
.print-bar { display: none; }
body { font-family: "Newsreader", Georgia, serif; font-size: 11pt; color: #141A17; background: #FBF7F0; }
</style>
</head>
<body>
<div class="WordSection1">
<div class="anth-page">
  ${wordHeader}
  ${wordCover}
  <div class="anth-body">
    ${wordBody}
  </div>
  ${wordFooter}
</div>
</div>
</body>
</html>`
}
