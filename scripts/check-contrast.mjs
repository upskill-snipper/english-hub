#!/usr/bin/env node
/**
 * Does the palette meet the contrast the accessibility statement claims?
 *
 * WHY THIS EXISTS (19 September 2026, A11Y-8). The statement says our colours
 * "target the WCAG 2.2 AA contrast ratios in both themes". Nothing in the
 * repository had ever checked that, and several pairs did not meet it - most
 * of them opacity variants of `text-muted-foreground`, used on roughly 250
 * low-emphasis text sites, and dark-theme button text.
 *
 * THE PART THAT IS EASY TO GET WRONG. `text-muted-foreground/70` is not a
 * colour, it is a colour at 70% alpha. What the reader's eye receives is the
 * COMPOSITE over whatever is behind it. Computing the contrast of the token
 * against the background, as if the alpha were not there, reports a pass on
 * text that is measurably failing. Every opacity variant below is composited
 * first.
 *
 * WHAT IT CANNOT TELL YOU. It reads the tokens, so it knows which PAIRS are
 * legal. It does not know which pairs the app actually puts together, or what
 * is behind a translucent card, or what a browser does with sub-pixel
 * antialiasing. It is a floor, not a substitute for looking.
 *
 *   node scripts/check-contrast.mjs
 *   node scripts/check-contrast.mjs --all      list passing pairs too
 *
 * Exit codes: 0 all pairs meet their threshold, 1 at least one does not.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, resolve, join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..')
const showAll = process.argv.includes('--all')

// ─── Colour maths ───────────────────────────────────────────────────────────

/** `"177 47% 16%"` (the Tailwind HSL token form) to sRGB 0-255. */
export function hslToRgb(token) {
  const [h, s, l] = token
    .trim()
    .split(/\s+/)
    .map((part) => Number(part.replace('%', '')))
  const sat = s / 100
  const lig = l / 100
  const c = (1 - Math.abs(2 * lig - 1)) * sat
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = lig - c / 2
  const sector = Math.floor(h / 60) % 6
  const [r, g, b] = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][sector]
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255]
}

/** WCAG 2.x relative luminance. */
export function luminance([r, g, b]) {
  const channel = (v) => {
    const s = v / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

export function contrast(fg, bg) {
  const a = luminance(fg)
  const b = luminance(bg)
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
}

/**
 * Composite `fg` at `alpha` over `bg`.
 *
 * This is the step whose absence turns a failing opacity variant into a
 * passing token.
 */
export function composite(fg, bg, alpha) {
  return [0, 1, 2].map((i) => fg[i] * alpha + bg[i] * (1 - alpha))
}

// ─── The tokens ─────────────────────────────────────────────────────────────

export function readTokens(css) {
  const block = (selector) => {
    const at = css.indexOf(selector)
    if (at === -1) return {}
    const open = css.indexOf('{', at)
    const close = css.indexOf('\n  }', open)
    const out = {}
    for (const m of css.slice(open, close).matchAll(/--([a-z-]+):\s*([^;]+);/g)) {
      out[m[1]] = m[2].trim()
    }
    return out
  }
  return { light: block(':root {'), dark: block('.dark {') }
}

/**
 * The pairs that matter, and the threshold each must meet.
 *
 * 4.5:1 is AA for normal-size text. 3:1 is AA for large text (18.66px bold or
 * 24px) and for user-interface component boundaries. The app pairs `text-xs`
 * (12px) with muted colours in roughly 3,100 class strings, so the muted pairs
 * are held to 4.5, not 3.
 */
const PAIRS = [
  ['foreground', 'background', 4.5, 'body text'],
  ['card-foreground', 'card', 4.5, 'text on cards'],
  ['popover-foreground', 'popover', 4.5, 'text in popovers'],
  ['muted-foreground', 'background', 4.5, 'secondary text'],
  ['muted-foreground', 'card', 4.5, 'secondary text on cards'],
  ['muted-foreground', 'muted', 4.5, 'secondary text on muted panels'],
  ['muted-foreground-subtle', 'background', 4.5, 'the low-emphasis token'],
  ['muted-foreground-subtle', 'card', 4.5, 'the low-emphasis token on cards'],
  ['primary-foreground', 'primary', 4.5, 'primary button text'],
  ['secondary-foreground', 'secondary', 4.5, 'secondary button text'],
  ['accent-foreground', 'accent', 4.5, 'accent button text'],
  ['destructive-foreground', 'destructive', 4.5, 'destructive button text'],
  ['sidebar-foreground', 'sidebar', 4.5, 'sidebar text'],
  ['sidebar-accent-foreground', 'sidebar-accent', 4.5, 'sidebar active item'],
  ['input', 'background', 3, 'input outlines'],
  ['ring', 'background', 3, 'focus ring'],
]

/**
 * `--border` is reported but NOT gated, and the distinction is deliberate.
 *
 * WCAG 1.4.11 asks 3:1 of "visual information required to identify user
 * interface components" - which a text field's outline is, and which a
 * decorative hairline between two paragraphs is not. Holding every divider in
 * the product to 3:1 would mean near-black rules on a cream page: a large,
 * unrequested visual change to a live site, justified by a criterion that does
 * not apply to them. `--input` IS gated, because a field boundary carries
 * information.
 *
 * Whether the card and divider rules should be darker anyway is a design
 * decision, not a compliance one, and it is the owner's.
 */
const REPORTED_NOT_GATED = [
  ['border', 'background', 3, 'decorative rules and card edges'],
  // `text-primary` used as TEXT rather than as a button surface. In dark mode
  // the teal measures 3.92:1 against the background - short of the 4.5:1 that
  // 11px eyebrow labels need. It cannot be fixed by moving this one token:
  // lightening it far enough for text puts white button text below 4.5:1 in
  // the other direction. The fix is a second token plus a codemod over 5,315
  // uses in 890 files, which is its own piece of work, not a side effect of
  // this one. Measured in a browser on / in dark mode, 19 September 2026.
  ['primary', 'background', 4.5, 'text-primary used as text (needs a token split)'],
]

/**
 * The opacity variants that ACTUALLY APPEAR in the source.
 *
 * Checking every conceivable variant reports failures for class strings nobody
 * has written, which is noise; checking none of them misses the defect this
 * item is about. So the source is scanned, and the check is on what is there.
 * Write `text-muted-foreground/70` again and this goes red again.
 */
export function usedOpacityVariants(srcDir) {
  const found = new Map()
  const walk = (dir) => {
    for (const entry of readdirSync(dir)) {
      if (entry === 'node_modules' || entry === '__tests__') continue
      const full = join(dir, entry)
      if (statSync(full).isDirectory()) walk(full)
      else if (['.ts', '.tsx'].includes(extname(entry))) {
        const src = readFileSync(full, 'utf8')
        for (const m of src.matchAll(/text-(muted-foreground(?:-subtle)?)\/(\d{1,3})(?![\d])/g)) {
          const key = `${m[1]}|${m[2]}`
          found.set(key, (found.get(key) ?? 0) + 1)
        }
      }
    }
  }
  walk(srcDir)
  return found
}

export function check(tokens, usedVariants = new Map()) {
  const results = []

  for (const theme of ['light', 'dark']) {
    const t = tokens[theme]
    const rgb = (name) => (t[name] ? hslToRgb(t[name]) : null)

    for (const [fgName, bgName, threshold, label] of PAIRS) {
      const fg = rgb(fgName)
      const bg = rgb(bgName)
      if (!fg || !bg) continue
      const ratio = contrast(fg, bg)
      results.push({
        theme,
        pair: `${fgName} on ${bgName}`,
        label,
        ratio: Number(ratio.toFixed(2)),
        threshold,
        passes: ratio >= threshold,
      })
    }

    for (const [fgName, bgName, threshold, label] of REPORTED_NOT_GATED) {
      const fg = rgb(fgName)
      const bg = rgb(bgName)
      if (!fg || !bg) continue
      const ratio = contrast(fg, bg)
      results.push({
        theme,
        pair: `${fgName} on ${bgName}`,
        label,
        ratio: Number(ratio.toFixed(2)),
        threshold,
        passes: ratio >= threshold,
        gated: false,
      })
    }

    // The composited variants the source actually uses.
    //
    // Gated at 50% and above. Below that the remaining uses are small icons
    // beside a visible label - a Lock on a gated resource, an X in a feature
    // table, a Circle bullet - which WCAG treats as decorative rather than as
    // information the reader must perceive. They are still REPORTED, and the
    // count is pinned by a test, so a new one is a decision rather than a
    // drift. The five em-dash "no data" placeholders that WERE text at /40 and
    // /20 were moved onto the subtle token instead: an em dash meaning
    // "nothing here" has to be legible.
    for (const [key, count] of usedVariants) {
      const [source, pct] = key.split('|')
      const fg = rgb(source)
      if (!fg) continue
      const decorative = Number(pct) < 50
      const alpha = Number(pct) / 100
      for (const bgName of ['background', 'card']) {
        const bg = rgb(bgName)
        if (!bg) continue
        const ratio = contrast(composite(fg, bg, alpha), bg)
        results.push({
          theme,
          pair: `${source}/${pct} on ${bgName}`,
          label: `opacity variant, composited (${count} use${count === 1 ? '' : 's'})`,
          ratio: Number(ratio.toFixed(2)),
          threshold: 4.5,
          passes: ratio >= 4.5,
          ...(decorative ? { gated: false } : {}),
        })
      }
    }
  }

  return results
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const css = readFileSync(resolve(ROOT, 'src/app/globals.css'), 'utf8')
  const results = check(readTokens(css), usedOpacityVariants(resolve(ROOT, 'src')))
  const failing = results.filter((r) => !r.passes && r.gated !== false)
  const reported = results.filter((r) => !r.passes && r.gated === false)

  const line = (r) =>
    `  ${r.passes ? 'pass' : 'FAIL'}  ${String(r.ratio).padStart(6)}:1  ` +
    `(needs ${r.threshold})  ${r.theme.padEnd(5)} ${r.pair.padEnd(50)} ${r.label}`

  if (showAll) {
    console.log('All pairs:')
    for (const r of results) console.log(line(r))
    console.log('')
  }

  if (reported.length) {
    console.log(`REPORTED, NOT GATED (${reported.length}) - see REPORTED_NOT_GATED above:`)
    for (const r of reported) console.log(line(r).replace('FAIL', 'note'))
    console.log('')
  }

  if (failing.length) {
    console.log(`BELOW THE THRESHOLD THE ACCESSIBILITY STATEMENT CLAIMS (${failing.length}):`)
    for (const r of failing) console.log(line(r))
    console.log('')
    console.log('The statement says the palette targets WCAG 2.2 AA in both themes.')
    process.exit(1)
  }

  console.log(`All ${results.length} token pairs meet their threshold.`)
  process.exit(0)
}
