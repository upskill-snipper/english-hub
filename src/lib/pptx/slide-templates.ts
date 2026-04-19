// ─── Anthology Deck – Slide Templates ───────────────────────────────────────
// PptxGenJS slide builders for the Anthology editorial theme.
// Every builder takes an optional `skin` parameter (defaults to 'cream').
// No emoji. No gradients. No shadows. Clean, literary journal aesthetic.

import PptxGenJS from 'pptxgenjs'
import {
  PPTX_DESIGN,
  getSkinPalette,
  type SlideSkin,
  type SkinPalette,
  type LessonPhase,
} from './design-tokens'

const D = PPTX_DESIGN

// ─── Type aliases ──────────────────────────────────────────────────────────

/* eslint-disable @typescript-eslint/no-explicit-any */
type Slide = any
type Pres = PptxGenJS
/* eslint-enable @typescript-eslint/no-explicit-any */

// ─── Shared element helpers ────────────────────────────────────────────────

/** Registration marks: four corner L-shapes */
function addRegistrationMarks(slide: Slide, p: SkinPalette) {
  const markLen = 0.125 // ~18px at slide scale
  const thick = 0.008
  const inset = 0.28
  const w = D.slideWidth
  const h = D.slideHeight

  const corners = [
    // top-left
    { hx: inset, hy: inset, hw: markLen, hh: thick, vx: inset, vy: inset, vw: thick, vh: markLen },
    // top-right
    { hx: w - inset - markLen, hy: inset, hw: markLen, hh: thick, vx: w - inset - thick, vy: inset, vw: thick, vh: markLen },
    // bottom-left
    { hx: inset, hy: h - inset - thick, hw: markLen, hh: thick, vx: inset, vy: h - inset - markLen, vw: thick, vh: markLen },
    // bottom-right
    { hx: w - inset - markLen, hy: h - inset - thick, hw: markLen, hh: thick, vx: w - inset - thick, vy: h - inset - markLen, vw: thick, vh: markLen },
  ]

  corners.forEach((c) => {
    slide.addShape('rect', {
      x: c.hx, y: c.hy, w: c.hw, h: c.hh,
      fill: { color: p.slideMuted, transparency: 40 },
    })
    slide.addShape('rect', {
      x: c.vx, y: c.vy, w: c.vw, h: c.vh,
      fill: { color: p.slideMuted, transparency: 40 },
    })
  })
}

/** Masthead: three-column layout at top with brand, edition, code */
function addMasthead(
  slide: Slide,
  p: SkinPalette,
  opts: { edition?: string; code?: string },
) {
  const y = 0.35
  const lineH = 0.35
  const mx = D.marginX

  // Left: "The English Hub" — accent on "English"
  slide.addText(
    [
      { text: 'The ', options: { fontSize: D.sizeMastheadBrand, fontFace: D.fontSerif, color: p.slideFg } },
      { text: 'English', options: { fontSize: D.sizeMastheadBrand, fontFace: D.fontSerif, color: p.slideAccent } },
      { text: ' Hub', options: { fontSize: D.sizeMastheadBrand, fontFace: D.fontSerif, color: p.slideFg } },
    ],
    { x: mx, y, w: 4, h: lineH, valign: 'middle' },
  )

  // Centre: edition (italic serif)
  if (opts.edition) {
    slide.addText(opts.edition, {
      x: 4, y, w: D.slideWidth - 8, h: lineH,
      fontSize: D.sizeMastheadEdition, fontFace: D.fontSerif, italic: true,
      color: p.slideSub, align: 'center', valign: 'middle',
    })
  }

  // Right: code (mono uppercase)
  if (opts.code) {
    slide.addText(opts.code.toUpperCase(), {
      x: D.slideWidth - mx - 3, y, w: 3, h: lineH,
      fontSize: D.sizeMastheadCode, fontFace: D.fontMono,
      color: p.slideMuted, align: 'right', valign: 'middle',
    })
  }

  // 3px rule below masthead
  const ruleY = y + lineH + 0.12
  slide.addShape('rect', {
    x: mx, y: ruleY, w: D.contentWidth, h: 0.03,
    fill: { color: p.slideRuleStrong },
  })

  return ruleY + 0.03
}

/** Footer: three-column at bottom with 1px rule above */
function addFooter(
  slide: Slide,
  p: SkinPalette,
  opts: { left?: string; center?: string; right?: string },
) {
  const mx = D.marginX
  const ruleY = D.slideHeight - 0.65
  const textY = ruleY + 0.08
  const textH = 0.4

  // 1px rule above footer
  slide.addShape('rect', {
    x: mx, y: ruleY, w: D.contentWidth, h: 0.01,
    fill: { color: p.slideRule },
  })

  // Left text (mono)
  if (opts.left) {
    slide.addText(opts.left, {
      x: mx, y: textY, w: 4, h: textH,
      fontSize: D.sizeFooter, fontFace: D.fontMono,
      color: p.slideMuted, valign: 'middle',
    })
  }

  // Centre — italic accent
  if (opts.center) {
    slide.addText(opts.center, {
      x: 4, y: textY, w: D.slideWidth - 8, h: textH,
      fontSize: D.sizeFooter, fontFace: D.fontSerif, italic: true,
      color: p.slideAccent, align: 'center', valign: 'middle',
    })
  }

  // Right text (mono)
  if (opts.right) {
    slide.addText(opts.right, {
      x: D.slideWidth - mx - 4, y: textY, w: 4, h: textH,
      fontSize: D.sizeFooter, fontFace: D.fontMono,
      color: p.slideMuted, align: 'right', valign: 'middle',
    })
  }
}

/** Apply shared chrome: background, registration marks, masthead, footer */
function applyChrome(
  slide: Slide,
  p: SkinPalette,
  opts: {
    edition?: string
    code?: string
    footerLeft?: string
    footerCenter?: string
    footerRight?: string
  } = {},
): number {
  slide.background = { fill: p.slideBg }
  addRegistrationMarks(slide, p)
  const contentTop = addMasthead(slide, p, {
    edition: opts.edition,
    code: opts.code,
  })
  addFooter(slide, p, {
    left: opts.footerLeft,
    center: opts.footerCenter,
    right: opts.footerRight,
  })
  return contentTop
}

/** Section heading with numeral prefix (serif 37pt) */
function addSectionHeading(
  slide: Slide,
  p: SkinPalette,
  text: string,
  x: number,
  y: number,
  w: number,
  opts?: { numeral?: string },
): number {
  const parts: any[] = []
  if (opts?.numeral) {
    parts.push({
      text: `${opts.numeral}  `,
      options: {
        fontSize: D.sizeSectionHeading, fontFace: D.fontSerif,
        italic: true, color: p.slideAccent,
      },
    })
  }
  parts.push({
    text,
    options: {
      fontSize: D.sizeSectionHeading, fontFace: D.fontSerif,
      color: p.slideFg,
    },
  })

  const h = 0.6
  slide.addText(parts, { x, y, w, h, valign: 'bottom' })
  return y + h + 0.15
}

/** Dashed list: em-dash prefix items */
function addDashedList(
  slide: Slide,
  p: SkinPalette,
  items: string[],
  x: number,
  y: number,
  w: number,
  maxH: number,
) {
  const parts = items.map((item) => ([
    {
      text: '\u2014  ',
      options: {
        fontSize: D.sizeDashedList, fontFace: D.fontSerif,
        color: p.slideAccent, breakType: 'none' as const,
      },
    },
    {
      text: item,
      options: {
        fontSize: D.sizeDashedList, fontFace: D.fontSerif,
        color: p.slideFg, paraSpaceAfter: 8,
      },
    },
  ])).flat()

  slide.addText(parts, {
    x, y, w, h: maxH,
    valign: 'top', lineSpacingMultiple: 1.25,
  })
}

// ─── 1. TITLE SLIDE ────────────────────────────────────────────────────────

export function titleSlide(
  pptx: Pres,
  data: {
    title: string
    subtitle?: string
    kicker?: string
    accentWord?: string
    byline?: string
    yearGroup?: string
    examBoard?: string
    duration?: string
    text?: string
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  // Centre the title block vertically in the available space
  // Available height: contentTop (~1.0) to footer (6.85) = ~5.85"
  // Title block is ~3" tall — start it ~1.5" below contentTop
  let cy = contentTop + 1.2

  // Kicker (mono, accent, uppercase) — exam metadata
  const kickerText = data.kicker || [data.yearGroup, data.examBoard, data.duration, data.text]
    .filter(Boolean).join('  ·  ')
  if (kickerText) {
    slide.addText(kickerText.toUpperCase(), {
      x: mx, y: cy, w: cw, h: 0.3,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 3, valign: 'middle',
    })
    cy += 0.5
  }

  // Display title — auto-shrinks if too long
  const accentWord = data.accentWord
  const titleH = 2.0  // Generous height, shrinkText keeps it within bounds
  if (accentWord && data.title.includes(accentWord)) {
    const before = data.title.substring(0, data.title.indexOf(accentWord))
    const after = data.title.substring(data.title.indexOf(accentWord) + accentWord.length)
    slide.addText(
      [
        ...(before ? [{ text: before, options: { fontSize: D.sizeDisplayH1, fontFace: D.fontSerif, color: p.slideFg } }] : []),
        { text: accentWord, options: { fontSize: D.sizeDisplayH1, fontFace: D.fontSerif, color: p.slideAccent, italic: true } },
        ...(after ? [{ text: after, options: { fontSize: D.sizeDisplayH1, fontFace: D.fontSerif, color: p.slideFg } }] : []),
      ],
      { x: mx, y: cy, w: cw, h: titleH, valign: 'middle', fit: 'shrink' as const, wrap: true },
    )
  } else {
    slide.addText(data.title, {
      x: mx, y: cy, w: cw, h: titleH,
      fontSize: D.sizeDisplayH1, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'middle', fit: 'shrink' as const, wrap: true,
    })
  }
  cy += titleH + 0.2

  // Standfirst (italic serif, sub colour)
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: mx, y: cy, w: cw, h: 0.55,
      fontSize: D.sizeStandfirst, fontFace: D.fontSerif, italic: true,
      color: p.slideSub, valign: 'top', wrap: true,
    })
    cy += 0.65
  }

  // Byline (mono, muted)
  const byline = data.byline || 'theenglishhub.app'
  slide.addText(byline, {
    x: mx, y: cy, w: cw, h: 0.3,
    fontSize: D.sizeFooter, fontFace: D.fontMono,
    color: p.slideMuted, valign: 'top',
  })
}

// ─── 2. AGENDA SLIDE ───────────────────────────────────────────────────────

export function agendaSlide(
  pptx: Pres,
  data: {
    heading?: string
    items: { label: string; time?: string }[]
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  let cy = contentTop + 0.3

  // h2.sec section heading
  cy = addSectionHeading(slide, p, data.heading || 'Agenda', mx, cy, cw)
  cy += 0.1

  // Numbered items with rules
  const itemH = 0.55
  data.items.forEach((item, i) => {
    // 1px rule above each item (except first, which uses section heading rule)
    if (i > 0) {
      slide.addShape('rect', {
        x: mx, y: cy, w: cw, h: 0.008,
        fill: { color: p.slideRule },
      })
      cy += 0.02
    }

    const numStr = String(i + 1).padStart(2, '0')
    const numW = 0.6
    const labelW = cw - numW - (item.time ? 2.5 : 0)

    // Italic accent numeral
    slide.addText(numStr, {
      x: mx, y: cy, w: numW, h: itemH,
      fontSize: D.sizeSectionHeading, fontFace: D.fontSerif,
      italic: true, color: p.slideAccent, valign: 'middle',
    })

    // Serif label
    slide.addText(item.label, {
      x: mx + numW, y: cy, w: labelW, h: itemH,
      fontSize: D.sizeBody, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'middle',
    })

    // Mono time ref (right-aligned)
    if (item.time) {
      slide.addText(item.time, {
        x: mx + cw - 2.5, y: cy, w: 2.5, h: itemH,
        fontSize: D.sizeMastheadCode, fontFace: D.fontMono,
        color: p.slideMuted, align: 'right', valign: 'middle',
      })
    }

    cy += itemH
  })
}

// ─── 3. DIVIDER SLIDE ──────────────────────────────────────────────────────

export function dividerSlide(
  pptx: Pres,
  data: {
    chapterNumber?: string
    title: string
    accentWord?: string
    lede?: string
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  let cy = contentTop + 0.6

  // .chap-n (italic serif 30pt, accent)
  if (data.chapterNumber) {
    slide.addText(data.chapterNumber, {
      x: mx, y: cy, w: cw, h: 0.55,
      fontSize: 30, fontFace: D.fontSerif, italic: true,
      color: p.slideAccent, valign: 'bottom',
    })
    cy += 0.7
  }

  // .chap-title (serif 66pt, accent on key word)
  const titleSize = 66
  if (data.accentWord && data.title.includes(data.accentWord)) {
    const before = data.title.substring(0, data.title.indexOf(data.accentWord))
    const after = data.title.substring(data.title.indexOf(data.accentWord) + data.accentWord.length)
    slide.addText(
      [
        ...(before ? [{ text: before, options: { fontSize: titleSize, fontFace: D.fontSerif, color: p.slideFg } }] : []),
        { text: data.accentWord, options: { fontSize: titleSize, fontFace: D.fontSerif, color: p.slideAccent, italic: true } },
        ...(after ? [{ text: after, options: { fontSize: titleSize, fontFace: D.fontSerif, color: p.slideFg } }] : []),
      ],
      { x: mx, y: cy, w: cw, h: 2.6, valign: 'bottom', shrinkText: true },
    )
  } else {
    slide.addText(data.title, {
      x: mx, y: cy, w: cw, h: 2.6,
      fontSize: titleSize, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'bottom', shrinkText: true,
    })
  }
  cy += 2.8

  // .chap-lede (italic serif 24pt, sub colour)
  if (data.lede) {
    slide.addText(data.lede, {
      x: mx, y: cy, w: cw, h: 0.6,
      fontSize: 24, fontFace: D.fontSerif, italic: true,
      color: p.slideSub, valign: 'top',
    })
  }
}

// ─── 4. OBJECTIVES SLIDE ──────────────────────────────────────────────────

export function objectivesSlide(
  pptx: Pres,
  data: {
    objectivesKicker?: string
    objectivesHeading?: string
    objectives: string[]
    criteriaKicker?: string
    criteriaHeading?: string
    criteria?: string[]
    edition?: string
    code?: string
  } | string[],
  skin: SlideSkin = 'cream',
): void {
  // Backward compat: accept bare string array
  const d = Array.isArray(data)
    ? { objectives: data, criteria: undefined }
    : data

  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: 'edition' in d ? d.edition : undefined,
    code: 'code' in d ? d.code : undefined,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  const colGap = 0.6
  const colW = (cw - colGap) / 2
  const hasCriteria = !Array.isArray(data) && d.criteria && d.criteria.length > 0

  // ── Left column: Objectives ──
  let ly = contentTop + 0.3

  // Mono kicker
  const objKicker = (!Array.isArray(data) && d.objectivesKicker) || 'LEARNING OBJECTIVES'
  slide.addText(objKicker.toUpperCase(), {
    x: mx, y: ly, w: hasCriteria ? colW : cw, h: 0.3,
    fontSize: D.sizeKicker, fontFace: D.fontMono,
    color: p.slideAccent, charSpacing: 2,
  })
  ly += 0.4

  // Serif heading
  const objHead = (!Array.isArray(data) && d.objectivesHeading) || 'Objectives'
  slide.addText(objHead, {
    x: mx, y: ly, w: hasCriteria ? colW : cw, h: 0.5,
    fontSize: D.sizeSectionHeading, fontFace: D.fontSerif,
    color: p.slideFg, valign: 'bottom',
  })
  ly += 0.65

  // Dashed list
  addDashedList(slide, p, d.objectives, mx, ly, hasCriteria ? colW : cw, 3.5)

  // ── Right column: Success Criteria ──
  if (hasCriteria && d.criteria) {
    const rx = mx + colW + colGap
    let ry = contentTop + 0.3

    const critKicker = (!Array.isArray(data) && d.criteriaKicker) || 'SUCCESS CRITERIA'
    slide.addText(critKicker.toUpperCase(), {
      x: rx, y: ry, w: colW, h: 0.3,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 2,
    })
    ry += 0.4

    const critHead = (!Array.isArray(data) && d.criteriaHeading) || 'Criteria'
    slide.addText(critHead, {
      x: rx, y: ry, w: colW, h: 0.5,
      fontSize: D.sizeSectionHeading, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'bottom',
    })
    ry += 0.65

    addDashedList(slide, p, d.criteria, rx, ry, colW, 3.5)
  }
}

// ─── 5. CONTENT SLIDE ──────────────────────────────────────────────────────

export function contentSlide(
  pptx: Pres,
  data: {
    kicker?: string
    heading: string
    accentWord?: string
    standfirst?: string
    items?: string[]
    body?: string
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  let cy = contentTop + 0.3

  // .super kicker
  if (data.kicker) {
    slide.addText(data.kicker.toUpperCase(), {
      x: mx, y: cy, w: cw, h: 0.3,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 2,
    })
    cy += 0.4
  }

  // h1.xl heading
  if (data.accentWord && data.heading.includes(data.accentWord)) {
    const before = data.heading.substring(0, data.heading.indexOf(data.accentWord))
    const after = data.heading.substring(data.heading.indexOf(data.accentWord) + data.accentWord.length)
    slide.addText(
      [
        ...(before ? [{ text: before, options: { fontSize: D.sizeXlH1, fontFace: D.fontSerif, color: p.slideFg } }] : []),
        { text: data.accentWord, options: { fontSize: D.sizeXlH1, fontFace: D.fontSerif, color: p.slideAccent, italic: true } },
        ...(after ? [{ text: after, options: { fontSize: D.sizeXlH1, fontFace: D.fontSerif, color: p.slideFg } }] : []),
      ],
      { x: mx, y: cy, w: cw, h: 1.5, valign: 'bottom', shrinkText: true },
    )
  } else {
    slide.addText(data.heading, {
      x: mx, y: cy, w: cw, h: 1.5,
      fontSize: D.sizeXlH1, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'bottom', shrinkText: true,
    })
  }
  cy += 1.65

  // Standfirst
  if (data.standfirst) {
    slide.addText(data.standfirst, {
      x: mx, y: cy, w: cw, h: 0.55,
      fontSize: D.sizeStandfirst, fontFace: D.fontSerif, italic: true,
      color: p.slideSub, valign: 'top',
    })
    cy += 0.7
  }

  // Body text
  if (data.body) {
    slide.addText(data.body, {
      x: mx, y: cy, w: cw, h: 2.5,
      fontSize: D.sizeBody, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'top', wrap: true,
      lineSpacingMultiple: 1.3,
    })
    cy += 2.6
  }

  // Dashed list
  if (data.items && data.items.length > 0) {
    addDashedList(slide, p, data.items, mx, cy, cw, 2.8)
  }
}

// ─── 6. TWO COLUMN SLIDE ──────────────────────────────────────────────────

export function twoColumnSlide(
  pptx: Pres,
  data: {
    sectionHeading?: string
    sectionNumeral?: string
    leftKicker?: string
    leftHeading?: string
    leftBody?: string
    leftItems?: string[]
    rightKicker?: string
    rightHeading?: string
    rightBody?: string
    rightItems?: string[]
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  let cy = contentTop + 0.3

  // Section heading
  if (data.sectionHeading) {
    cy = addSectionHeading(slide, p, data.sectionHeading, mx, cy, cw, {
      numeral: data.sectionNumeral,
    })
    cy += 0.15
  }

  // Asymmetric 1.1:1 grid
  const gap = 0.6
  const leftW = (cw - gap) * (1.1 / 2.1)
  const rightW = (cw - gap) * (1 / 2.1)
  const rx = mx + leftW + gap
  const colTop = cy

  // ── Left column ──
  let ly = colTop
  if (data.leftKicker) {
    slide.addText(data.leftKicker.toUpperCase(), {
      x: mx, y: ly, w: leftW, h: 0.25,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 2,
    })
    ly += 0.35
  }
  if (data.leftHeading) {
    slide.addText(data.leftHeading, {
      x: mx, y: ly, w: leftW, h: 0.55,
      fontSize: D.sizeLgH1, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'bottom', shrinkText: true,
    })
    ly += 0.7
  }
  if (data.leftBody) {
    slide.addText(data.leftBody, {
      x: mx, y: ly, w: leftW, h: 2.5,
      fontSize: D.sizeBody, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'top', wrap: true,
      lineSpacingMultiple: 1.3,
    })
    ly += 2.6
  }
  if (data.leftItems && data.leftItems.length > 0) {
    addDashedList(slide, p, data.leftItems, mx, ly, leftW, 2.0)
  }

  // ── Right column (callout / data card) ──
  let ry = colTop
  if (data.rightKicker) {
    slide.addText(data.rightKicker.toUpperCase(), {
      x: rx, y: ry, w: rightW, h: 0.25,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 2,
    })
    ry += 0.35
  }
  if (data.rightHeading) {
    slide.addText(data.rightHeading, {
      x: rx, y: ry, w: rightW, h: 0.55,
      fontSize: D.sizeLgH1, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'bottom', shrinkText: true,
    })
    ry += 0.7
  }
  if (data.rightBody) {
    slide.addText(data.rightBody, {
      x: rx, y: ry, w: rightW, h: 2.5,
      fontSize: D.sizeBody, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'top', wrap: true,
      lineSpacingMultiple: 1.3,
    })
    ry += 2.6
  }
  if (data.rightItems && data.rightItems.length > 0) {
    addDashedList(slide, p, data.rightItems, rx, ry, rightW, 2.0)
  }
}

// ─── 7. PULL QUOTE SLIDE ──────────────────────────────────────────────────

export function pullQuoteSlide(
  pptx: Pres,
  data: {
    quote: string
    citation?: string
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  const centreX = mx + 0.8
  const centreW = cw - 1.6
  const ruleW = 1.1 // ~160px mapped to inches

  // Rule above
  const ruleAboveY = 2.0
  slide.addShape('rect', {
    x: (D.slideWidth - ruleW) / 2, y: ruleAboveY, w: ruleW, h: 0.02,
    fill: { color: p.slideRuleStrong },
  })

  // Quote text (italic serif 61pt, centred)
  slide.addText(data.quote, {
    x: centreX, y: ruleAboveY + 0.25, w: centreW, h: 2.8,
    fontSize: D.sizePullQuote, fontFace: D.fontSerif,
    italic: true, color: p.slideFg,
    align: 'center', valign: 'middle',
    lineSpacingMultiple: 1.15, shrinkText: true,
  })

  // Rule below
  const ruleBelowY = ruleAboveY + 3.15
  slide.addShape('rect', {
    x: (D.slideWidth - ruleW) / 2, y: ruleBelowY, w: ruleW, h: 0.02,
    fill: { color: p.slideRuleStrong },
  })

  // Citation (mono 11pt uppercase, muted)
  if (data.citation) {
    slide.addText(data.citation.toUpperCase(), {
      x: centreX, y: ruleBelowY + 0.2, w: centreW, h: 0.35,
      fontSize: D.sizeMastheadCode, fontFace: D.fontMono,
      color: p.slideMuted, align: 'center', valign: 'top',
    })
  }
}

// ─── 8. COMPARISON SLIDE ──────────────────────────────────────────────────

export function comparisonSlide(
  pptx: Pres,
  data: {
    title?: string
    leftKicker?: string
    leftHeading?: string
    leftContent: string
    rightKicker?: string
    rightHeading?: string
    rightContent: string
    leftLabel?: string
    rightLabel?: string
    phase?: LessonPhase
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  const gap = 0.5
  const ruleW = 0.015
  const colW = (cw - gap) / 2
  const rightX = mx + colW + gap

  let cy = contentTop + 0.3

  // Section heading (optional)
  if (data.title) {
    cy = addSectionHeading(slide, p, data.title, mx, cy, cw)
    cy += 0.15
  }

  const colTop = cy

  // Vertical rule between columns
  slide.addShape('rect', {
    x: mx + colW + (gap - ruleW) / 2, y: colTop, w: ruleW, h: 4.0,
    fill: { color: p.slideRule },
  })

  // ── Left column ──
  let ly = colTop
  const leftKicker = data.leftKicker || data.leftLabel || ''
  if (leftKicker) {
    slide.addText(leftKicker.toUpperCase(), {
      x: mx, y: ly, w: colW, h: 0.25,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 2,
    })
    ly += 0.35
  }
  const leftHead = data.leftHeading || ''
  if (leftHead) {
    slide.addText(leftHead, {
      x: mx, y: ly, w: colW, h: 0.5,
      fontSize: D.sizeSectionHeading, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'bottom',
    })
    ly += 0.65
  }
  slide.addText(data.leftContent, {
    x: mx, y: ly, w: colW, h: 3.2,
    fontSize: D.sizeBody, fontFace: D.fontSerif,
    color: p.slideFg, valign: 'top', wrap: true,
    lineSpacingMultiple: 1.3,
  })

  // ── Right column ──
  let ry = colTop
  const rightKicker = data.rightKicker || data.rightLabel || ''
  if (rightKicker) {
    slide.addText(rightKicker.toUpperCase(), {
      x: rightX, y: ry, w: colW, h: 0.25,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 2,
    })
    ry += 0.35
  }
  const rightHead = data.rightHeading || ''
  if (rightHead) {
    slide.addText(rightHead, {
      x: rightX, y: ry, w: colW, h: 0.5,
      fontSize: D.sizeSectionHeading, fontFace: D.fontSerif,
      color: p.slideFg, valign: 'bottom',
    })
    ry += 0.65
  }
  slide.addText(data.rightContent, {
    x: rightX, y: ry, w: colW, h: 3.2,
    fontSize: D.sizeBody, fontFace: D.fontSerif,
    color: p.slideFg, valign: 'top', wrap: true,
    lineSpacingMultiple: 1.3,
  })
}

// ─── 9. TIMELINE SLIDE ────────────────────────────────────────────────────

export function timelineSlide(
  pptx: Pres,
  data: {
    sectionHeading?: string
    sectionNumeral?: string
    steps: { label: string; detail?: string }[]
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  let cy = contentTop + 0.3

  // Section heading
  if (data.sectionHeading) {
    cy = addSectionHeading(slide, p, data.sectionHeading, mx, cy, cw, {
      numeral: data.sectionNumeral,
    })
    cy += 0.3
  }

  // 4-step horizontal process
  const steps = data.steps.slice(0, 4)
  const stepCount = steps.length || 4
  const stepW = cw / stepCount
  const dotSize = 0.14
  const lineY = cy + 0.8
  const dotY = lineY - dotSize / 2

  // Connecting horizontal line
  slide.addShape('rect', {
    x: mx + stepW * 0.15, y: lineY - 0.008,
    w: cw - stepW * 0.3, h: 0.016,
    fill: { color: p.slideRule },
  })

  steps.forEach((step, i) => {
    const cx = mx + i * stepW + stepW / 2

    // Dot
    slide.addShape('ellipse', {
      x: cx - dotSize / 2, y: dotY, w: dotSize, h: dotSize,
      fill: { color: p.slideAccent },
    })

    // Step number
    slide.addText(String(i + 1), {
      x: cx - dotSize / 2, y: dotY, w: dotSize, h: dotSize,
      fontSize: 8, fontFace: D.fontMono, color: p.slideBg,
      align: 'center', valign: 'middle',
    })

    // Label (serif, below line)
    slide.addText(step.label, {
      x: mx + i * stepW + 0.15, y: lineY + 0.3,
      w: stepW - 0.3, h: 0.55,
      fontSize: D.sizeBody, fontFace: D.fontSerif,
      color: p.slideFg, align: 'center', valign: 'top',
      wrap: true,
    })

    // Detail (mono small, below label)
    if (step.detail) {
      slide.addText(step.detail, {
        x: mx + i * stepW + 0.15, y: lineY + 0.9,
        w: stepW - 0.3, h: 1.2,
        fontSize: D.sizeMastheadCode, fontFace: D.fontMono,
        color: p.slideMuted, align: 'center', valign: 'top',
        wrap: true,
      })
    }
  })
}

// ─── 10. DATA SLIDE ────────────────────────────────────────────────────────

export function dataSlide(
  pptx: Pres,
  data: {
    sectionHeading?: string
    sectionNumeral?: string
    cards: { kicker: string; value: string; sub: string }[]
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  let cy = contentTop + 0.3

  // Section heading
  if (data.sectionHeading) {
    cy = addSectionHeading(slide, p, data.sectionHeading, mx, cy, cw, {
      numeral: data.sectionNumeral,
    })
    cy += 0.3
  }

  // 3 data cards in a row
  const cards = data.cards.slice(0, 3)
  const gap = 0.4
  const cardCount = cards.length || 3
  const cardW = (cw - gap * (cardCount - 1)) / cardCount
  const cardH = 3.2

  cards.forEach((card, i) => {
    const cx = mx + i * (cardW + gap)

    // Card panel bg
    slide.addShape('roundRect', {
      x: cx, y: cy, w: cardW, h: cardH,
      fill: { color: p.slidePanel },
      line: { color: p.slidePanelBorder, width: 0.75 },
      rectRadius: 0.03,
    })

    // Mono kicker
    slide.addText(card.kicker.toUpperCase(), {
      x: cx + 0.3, y: cy + 0.3, w: cardW - 0.6, h: 0.3,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 1.5,
    })

    // Huge italic accent numeral (97pt)
    slide.addText(card.value, {
      x: cx + 0.3, y: cy + 0.65, w: cardW - 0.6, h: 1.7,
      fontSize: D.sizeDataCardNum, fontFace: D.fontSerif,
      italic: true, color: p.slideAccent,
      valign: 'middle', shrinkText: true,
    })

    // Serif sub text
    slide.addText(card.sub, {
      x: cx + 0.3, y: cy + cardH - 0.8, w: cardW - 0.6, h: 0.5,
      fontSize: D.sizeBody, fontFace: D.fontSerif,
      color: p.slideSub, valign: 'top', wrap: true,
    })
  })
}

// ─── 11. TABLE SLIDE ───────────────────────────────────────────────────────

export function tableSlide(
  pptx: Pres,
  data: {
    sectionHeading?: string
    sectionNumeral?: string
    headers: string[]
    rows: string[][]
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  let cy = contentTop + 0.3

  // Section heading
  if (data.sectionHeading) {
    cy = addSectionHeading(slide, p, data.sectionHeading, mx, cy, cw, {
      numeral: data.sectionNumeral,
    })
    cy += 0.2
  }

  // Build table rows
  const colCount = data.headers.length
  const colW = cw / colCount

  // Header row
  const headerRow = data.headers.map((h) => ({
    text: h.toUpperCase(),
    options: {
      fontSize: D.sizeMastheadCode,
      fontFace: D.fontMono,
      color: p.slideFg,
      bold: true,
      fill: { color: p.slidePanel },
      border: [
        { type: 'none' as const },
        { type: 'none' as const },
        { color: p.slideRuleStrong, pt: 1.5 },
        { type: 'none' as const },
      ] as any,
      valign: 'middle' as const,
    },
  }))

  // Data rows
  const dataRows = data.rows.map((row, rowIdx) => {
    return row.map((cell, colIdx) => {
      // Detect numeric values for mono font
      const isNumeric = /^[\d,.%+\-$]+$/.test(cell.trim())
      return {
        text: cell,
        options: {
          fontSize: D.sizeBody - 4,
          fontFace: isNumeric ? D.fontMono : D.fontSerif,
          color: p.slideFg,
          fill: { color: rowIdx % 2 === 0 ? p.slideBg : p.slidePanel },
          border: [
            { type: 'none' as const },
            { type: 'none' as const },
            { color: p.slideRule, pt: 0.5 },
            { type: 'none' as const },
          ] as any,
          valign: 'middle' as const,
          align: (colIdx === 0 ? 'left' : 'center') as any,
        },
      }
    })
  })

  const allRows = [headerRow, ...dataRows]
  const rowH = Math.min(0.45, (D.slideHeight - cy - 1.0) / allRows.length)

  slide.addTable(allRows, {
    x: mx, y: cy, w: cw,
    rowH,
    colW: Array(colCount).fill(colW),
  })
}

// ─── 12. CALLOUT SLIDE ─────────────────────────────────────────────────────

export function calloutSlide(
  pptx: Pres,
  data: {
    kicker?: string
    heading: string
    body: string
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  const contentTop = applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX
  const cw = D.contentWidth
  let cy = contentTop + 0.3

  // Super kicker
  if (data.kicker) {
    slide.addText(data.kicker.toUpperCase(), {
      x: mx, y: cy, w: cw, h: 0.3,
      fontSize: D.sizeKicker, fontFace: D.fontMono,
      color: p.slideAccent, charSpacing: 2,
    })
    cy += 0.4
  }

  // Large heading
  slide.addText(data.heading, {
    x: mx, y: cy, w: cw, h: 1.0,
    fontSize: D.sizeLgH1, fontFace: D.fontSerif,
    color: p.slideFg, valign: 'bottom', shrinkText: true,
  })
  cy += 1.2

  // Callout box: panel bg + accent left border
  const boxX = mx
  const boxW = cw
  const boxH = 2.6
  const borderW = 0.04

  // Panel background
  slide.addShape('rect', {
    x: boxX, y: cy, w: boxW, h: boxH,
    fill: { color: p.slidePanel },
  })

  // Accent left border
  slide.addShape('rect', {
    x: boxX, y: cy, w: borderW, h: boxH,
    fill: { color: p.slideAccent },
  })

  // Body text inside callout
  slide.addText(data.body, {
    x: boxX + borderW + 0.3, y: cy + 0.25, w: boxW - borderW - 0.6, h: boxH - 0.5,
    fontSize: D.sizeBody, fontFace: D.fontSerif,
    color: p.slideFg, valign: 'top', wrap: true,
    lineSpacingMultiple: 1.35,
  })
}

// ─── 13. QUESTION SLIDE ────────────────────────────────────────────────────

export function questionSlide(
  pptx: Pres,
  data: {
    kicker?: string
    question: string
    accentWord?: string
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX + 1.0
  const cw = D.contentWidth - 2.0

  // Mono kicker (centred)
  const kickerText = data.kicker || 'DISCUSSION'
  slide.addText(kickerText.toUpperCase(), {
    x: mx, y: 1.8, w: cw, h: 0.3,
    fontSize: D.sizeKicker, fontFace: D.fontMono,
    color: p.slideAccent, charSpacing: 2,
    align: 'center',
  })

  // Question text (serif 76pt) with optional accent emphasis
  const qSize = 76
  if (data.accentWord && data.question.includes(data.accentWord)) {
    const before = data.question.substring(0, data.question.indexOf(data.accentWord))
    const after = data.question.substring(data.question.indexOf(data.accentWord) + data.accentWord.length)
    slide.addText(
      [
        ...(before ? [{ text: before, options: { fontSize: qSize, fontFace: D.fontSerif, color: p.slideFg } }] : []),
        { text: data.accentWord, options: { fontSize: qSize, fontFace: D.fontSerif, color: p.slideAccent, italic: true } },
        ...(after ? [{ text: after, options: { fontSize: qSize, fontFace: D.fontSerif, color: p.slideFg } }] : []),
      ],
      {
        x: mx, y: 2.3, w: cw, h: 3.0,
        align: 'center', valign: 'middle',
        lineSpacingMultiple: 1.1, shrinkText: true,
      },
    )
  } else {
    slide.addText(data.question, {
      x: mx, y: 2.3, w: cw, h: 3.0,
      fontSize: qSize, fontFace: D.fontSerif,
      color: p.slideFg, align: 'center', valign: 'middle',
      lineSpacingMultiple: 1.1, shrinkText: true,
    })
  }
}

// ─── 14. CLOSING SLIDE ────────────────────────────────────────────────────

export function closingSlide(
  pptx: Pres,
  data: {
    kicker?: string
    heading?: string
    accentWord?: string
    signature?: string
    nextLessonTeaser?: string
    edition?: string
    code?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const p = getSkinPalette(skin)
  const slide = pptx.addSlide()
  applyChrome(slide, p, {
    edition: data.edition,
    code: data.code,
  })

  const mx = D.marginX + 0.5
  const cw = D.contentWidth - 1.0

  // Mono kicker (centred)
  const kickerText = data.kicker || 'END'
  slide.addText(kickerText.toUpperCase(), {
    x: mx, y: 1.6, w: cw, h: 0.3,
    fontSize: D.sizeKicker, fontFace: D.fontMono,
    color: p.slideAccent, charSpacing: 2,
    align: 'center',
  })

  // Huge closing text (serif ~150pt, centred)
  const closingText = data.heading || 'Thank You'
  const closingSize = 150
  if (data.accentWord && closingText.includes(data.accentWord)) {
    const before = closingText.substring(0, closingText.indexOf(data.accentWord))
    const after = closingText.substring(closingText.indexOf(data.accentWord) + data.accentWord.length)
    slide.addText(
      [
        ...(before ? [{ text: before, options: { fontSize: closingSize, fontFace: D.fontSerif, color: p.slideFg } }] : []),
        { text: data.accentWord, options: { fontSize: closingSize, fontFace: D.fontSerif, color: p.slideAccent, italic: true } },
        ...(after ? [{ text: after, options: { fontSize: closingSize, fontFace: D.fontSerif, color: p.slideFg } }] : []),
      ],
      {
        x: mx, y: 2.1, w: cw, h: 2.8,
        align: 'center', valign: 'middle', shrinkText: true,
      },
    )
  } else {
    slide.addText(closingText, {
      x: mx, y: 2.1, w: cw, h: 2.8,
      fontSize: closingSize, fontFace: D.fontSerif,
      color: p.slideFg, align: 'center', valign: 'middle',
      shrinkText: true,
    })
  }

  // Italic sub signature
  const sig = data.signature || data.nextLessonTeaser || 'theenglishhub.app'
  slide.addText(sig, {
    x: mx, y: 5.0, w: cw, h: 0.45,
    fontSize: D.sizeStandfirst, fontFace: D.fontSerif,
    italic: true, color: p.slideSub,
    align: 'center', valign: 'middle',
  })
}

// ─── Legacy compatibility aliases ──────────────────────────────────────────
// The route handler currently imports these names. Re-export under old names
// that map to the closest Anthology equivalent.

/** @deprecated Use `dividerSlide` instead */
export function phaseDividerSlide(
  pptx: Pres,
  phase: LessonPhase,
  subtitle?: string,
  skin: SlideSkin = 'cream',
): void {
  const phaseLabels: Record<LessonPhase, string> = {
    starter: 'Starter',
    main: 'Main Activity',
    plenary: 'Plenary',
    homework: 'Homework',
    general: 'Lesson',
  }
  dividerSlide(pptx, {
    chapterNumber: phase !== 'general' ? phase.toUpperCase() : undefined,
    title: subtitle || phaseLabels[phase],
  }, skin)
}

/** @deprecated Use `contentSlide` instead */
export function activitySlide(
  pptx: Pres,
  phase: LessonPhase,
  data: {
    slideTitle: string
    activityTitle: string
    duration: string
    instructions: string
    keyQuestion?: string
    expectedOutcomes?: string[]
    teacherTip?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const items: string[] = []
  const lines = data.instructions.split(/\n+/).filter(Boolean)
  lines.forEach((l) => items.push(l.replace(/^\d+[\.\)]\s*/, '')))
  if (data.keyQuestion) items.push(data.keyQuestion)
  if (data.expectedOutcomes) data.expectedOutcomes.forEach((o) => items.push(o))

  contentSlide(pptx, {
    kicker: `${data.slideTitle}  /  ${data.duration}`,
    heading: data.activityTitle,
    standfirst: data.teacherTip,
    items,
  }, skin)
}

/** @deprecated Use `comparisonSlide` instead */
export function differentiationSlide(
  pptx: Pres,
  _phase: LessonPhase,
  title: string,
  diff: { support: string; core: string; stretch: string },
  skin: SlideSkin = 'cream',
): void {
  comparisonSlide(pptx, {
    title,
    leftKicker: 'SUPPORT',
    leftHeading: 'Support',
    leftContent: diff.support,
    rightKicker: 'STRETCH',
    rightHeading: 'Stretch',
    rightContent: diff.stretch,
  }, skin)
  // Core goes into a second content slide
  contentSlide(pptx, {
    kicker: 'CORE',
    heading: 'Core',
    body: diff.core,
  }, skin)
}

/** @deprecated Use `tableSlide` instead */
export function vocabularySlide(
  pptx: Pres,
  vocabulary: string[],
  skin: SlideSkin = 'cream',
): void {
  const headers = ['Term', 'Definition']
  const rows = vocabulary.map((entry) => {
    const sep = entry.match(/^([^:\-\u2013\u2014]+?)\s*[:\-\u2013\u2014]\s*(.+)$/)
    return sep ? [sep[1].trim(), sep[2].trim()] : [entry, '']
  })
  tableSlide(pptx, {
    sectionHeading: 'Key Vocabulary',
    headers,
    rows,
  }, skin)
}

/** @deprecated Use `contentSlide` instead */
export function plenarySlide(
  pptx: Pres,
  data: {
    title: string
    instructions: string
    reflectionQuestions?: string[]
  },
  skin: SlideSkin = 'cream',
): void {
  const items = data.reflectionQuestions || []
  contentSlide(pptx, {
    kicker: 'PLENARY',
    heading: data.title,
    standfirst: data.instructions,
    items,
  }, skin)
}

/** @deprecated Use `contentSlide` instead */
export function homeworkSlide(
  pptx: Pres,
  data: {
    task: string
    resources?: string[]
    dueDate?: string
  },
  skin: SlideSkin = 'cream',
): void {
  const items = data.resources ? [...data.resources] : []
  contentSlide(pptx, {
    kicker: data.dueDate ? `HOMEWORK  /  Due ${data.dueDate}` : 'HOMEWORK',
    heading: 'Homework',
    body: data.task,
    items,
  }, skin)
}

/** @deprecated Use `closingSlide` instead */
export function endSlide(
  pptx: Pres,
  nextLessonTeaser?: string,
  skin: SlideSkin = 'cream',
): void {
  closingSlide(pptx, { nextLessonTeaser }, skin)
}

/** @deprecated Use `pullQuoteSlide` instead */
export function quoteSlide(
  pptx: Pres,
  quote: string,
  attribution?: string,
  skin: SlideSkin = 'cream',
): void {
  pullQuoteSlide(pptx, { quote, citation: attribution }, skin)
}

/** @deprecated Use `questionSlide` instead */
export function discussionSlide(
  pptx: Pres,
  question: string,
  _phase: LessonPhase = 'main',
  skin: SlideSkin = 'cream',
): void {
  questionSlide(pptx, { question }, skin)
}
