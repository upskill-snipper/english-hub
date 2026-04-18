// ─── Slide Templates ────────────────────────────────────────────────────────
// Reusable, professionally-designed slide layouts for PptxGenJS.
// Each function takes a PptxGenJS `Slide` (already added) and populates it.

import PptxGenJS from 'pptxgenjs'
import { PPTX_DESIGN, PHASE_STYLES, ICONS, type LessonPhase } from './design-tokens'

const D = PPTX_DESIGN

// ─── Shared helpers ─────────────────────────────────────────────────────────

/* eslint-disable @typescript-eslint/no-explicit-any */
type Slide = any
type Pres = PptxGenJS
/* eslint-enable @typescript-eslint/no-explicit-any */

/** Add the thin phase-colour strip on the left edge */
function addPhaseStrip(slide: Slide, phase: LessonPhase) {
  const style = PHASE_STYLES[phase]
  slide.addShape('rect', {
    x: 0, y: 0, w: D.borderStripWidth, h: D.slideHeight,
    fill: { color: style.colour },
  })
}

/** Slide number in bottom-right */
function addSlideNumber(slide: Slide) {
  slide.addText(
    [{ text: 'Slide ', options: { fontSize: D.tinySize, color: D.textLight } },
     { text: '${slideNumber}', options: { fontSize: D.tinySize, color: D.textLight, bold: true } }],
    {
      x: D.slideWidth - 1.5, y: D.slideHeight - 0.4, w: 1.2, h: 0.3,
      fontFace: D.fontMain, align: 'right', valign: 'bottom',
    },
  )
}

/** Branding line at very top */
function addBranding(slide: Slide) {
  slide.addText('The English Hub', {
    x: D.marginX + D.borderStripWidth + 0.1, y: 0.12, w: 3, h: 0.25,
    fontSize: 9, color: D.textLight, fontFace: D.fontMain, bold: true,
  })
  slide.addText('theenglishhub.app', {
    x: D.slideWidth - 3.5, y: 0.12, w: 3, h: 0.25,
    fontSize: 8, color: D.textLight, fontFace: D.fontMain, align: 'right',
  })
}

/** Standard slide heading with icon + underline */
function addHeading(slide: Slide, title: string, icon?: string) {
  const display = icon ? `${icon}  ${title}` : title
  slide.addText(display, {
    x: D.marginX + D.borderStripWidth + 0.2, y: 0.5, w: D.contentWidth - 0.3, h: 0.55,
    fontSize: D.headingSize, color: D.brandPrimary, fontFace: D.fontMain, bold: true,
  })
  // accent underline
  slide.addShape('rect', {
    x: D.marginX + D.borderStripWidth + 0.2, y: 1.08, w: D.contentWidth - 0.3, h: D.dividerHeight,
    fill: { color: D.brandAccent },
  })
}

/** Progress dots showing which phase we're in */
function addProgressDots(slide: Slide, activePhase: LessonPhase) {
  const phases: LessonPhase[] = ['starter', 'main', 'plenary', 'homework']
  const totalWidth = phases.length * D.progressDotSize + (phases.length - 1) * 0.18
  const startX = (D.slideWidth - totalWidth) / 2

  phases.forEach((phase, i) => {
    const isActive = phase === activePhase
    const x = startX + i * (D.progressDotSize + 0.18)
    slide.addShape('ellipse', {
      x, y: D.slideHeight - 0.35, w: D.progressDotSize, h: D.progressDotSize,
      fill: { color: isActive ? PHASE_STYLES[phase].colour : D.bgAlt },
    })
  })
}

/** Standard body-slide scaffold: branding, strip, heading, number, progress */
function scaffoldSlide(slide: Slide, phase: LessonPhase, title: string, icon?: string) {
  slide.background = { fill: D.white }
  addPhaseStrip(slide, phase)
  addBranding(slide)
  addHeading(slide, title, icon)
  addSlideNumber(slide)
  addProgressDots(slide, phase)
}

/** Duration badge (rounded rect with timer icon) */
function addDurationBadge(slide: Slide, duration: string, x: number, y: number, w = 1.8) {
  slide.addShape('roundRect', {
    x, y, w, h: D.badgeHeight,
    fill: { color: D.phaseStarterBg },
    rectRadius: 0.05,
  })
  slide.addText(`${ICONS.timer} ${duration}`, {
    x, y, w, h: D.badgeHeight,
    fontSize: D.smallSize, color: D.phaseStarter, fontFace: D.fontMain,
    bold: true, align: 'center', valign: 'middle',
  })
}

/** Teacher tip callout box */
function addTeacherTip(slide: Slide, tip: string, x: number, y: number, w: number, h: number) {
  // Background
  slide.addShape('roundRect', {
    x, y, w, h,
    fill: { color: 'fffbeb' }, // warm yellow
    line: { color: D.accentGold, width: 1.2 },
    rectRadius: 0.08,
  })
  // Header
  slide.addText(`${ICONS.lightbulb}  Teacher Tip`, {
    x: x + 0.15, y: y + 0.06, w: w - 0.3, h: 0.3,
    fontSize: 10, color: D.accentAmber, fontFace: D.fontMain, bold: true,
  })
  // Body
  slide.addText(tip, {
    x: x + 0.15, y: y + 0.35, w: w - 0.3, h: h - 0.45,
    fontSize: 10, color: D.textMid, fontFace: D.fontMain, valign: 'top', wrap: true,
  })
}

// ─── 1. TITLE SLIDE ─────────────────────────────────────────────────────────

export function titleSlide(
  pptx: Pres,
  data: {
    title: string
    subtitle?: string
    yearGroup?: string
    examBoard?: string
    duration?: string
    text?: string
  },
) {
  const slide = pptx.addSlide()

  // Dark gradient background — layered rectangles (PptxGenJS workaround)
  slide.background = { fill: D.brandDark }

  // Top gradient overlay shape (slightly lighter)
  slide.addShape('rect', {
    x: 0, y: 0, w: D.slideWidth, h: 3.2,
    fill: { color: D.brandPrimary, transparency: 25 },
  })

  // Decorative accent shapes
  slide.addShape('ellipse', {
    x: D.slideWidth - 3.5, y: -1.5, w: 5, h: 5,
    fill: { color: D.brandAccent, transparency: 85 },
  })
  slide.addShape('ellipse', {
    x: -2, y: D.slideHeight - 3, w: 6, h: 6,
    fill: { color: D.brandAccent, transparency: 90 },
  })

  // Thin gold accent bar
  slide.addShape('rect', {
    x: 0.8, y: 2.1, w: 2, h: 0.05,
    fill: { color: D.accentGold },
  })

  // Branding
  slide.addText('The English Hub', {
    x: 0.8, y: 0.6, w: 6, h: 0.5,
    fontSize: 14, color: 'bfdbfe', fontFace: D.fontMain, bold: true,
  })

  // Title
  slide.addText(data.title, {
    x: 0.8, y: 2.4, w: 10, h: 1.6,
    fontSize: 36, color: D.white, fontFace: D.fontMain, bold: true,
    lineSpacingMultiple: 1.1,
  })

  // Subtitle
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: 0.8, y: 4.1, w: 10, h: 0.5,
      fontSize: D.subtitleSize, color: 'bfdbfe', fontFace: D.fontMain,
    })
  }

  // Meta pills
  const metaParts: string[] = []
  if (data.yearGroup) metaParts.push(`Year ${data.yearGroup}`)
  if (data.examBoard) metaParts.push(data.examBoard)
  if (data.duration) metaParts.push(data.duration)
  if (data.text) metaParts.push(data.text)

  if (metaParts.length) {
    const pillY = 5.2
    let pillX = 0.8
    metaParts.forEach((label) => {
      const pillW = Math.max(label.length * 0.11 + 0.4, 1.2)
      slide.addShape('roundRect', {
        x: pillX, y: pillY, w: pillW, h: 0.38,
        fill: { color: D.brandAccent, transparency: 50 },
        rectRadius: 0.06,
      })
      slide.addText(label, {
        x: pillX, y: pillY, w: pillW, h: 0.38,
        fontSize: 11, color: 'e0e7ff', fontFace: D.fontMain,
        align: 'center', valign: 'middle',
      })
      pillX += pillW + 0.15
    })
  }

  // Website
  slide.addText('theenglishhub.app', {
    x: 0.8, y: D.slideHeight - 0.65, w: 4, h: 0.3,
    fontSize: D.smallSize, color: '93c5fd', fontFace: D.fontMain,
  })

  return slide
}

// ─── 2. OBJECTIVES SLIDE ────────────────────────────────────────────────────

export function objectivesSlide(pptx: Pres, objectives: string[]) {
  const slide = pptx.addSlide()
  scaffoldSlide(slide, 'general', 'Learning Objectives', ICONS.target)

  objectives.forEach((obj, i) => {
    const y = 1.3 + i * 0.7
    const num = String(i + 1)

    // Number circle
    slide.addShape('ellipse', {
      x: D.marginX + D.borderStripWidth + 0.3, y: y + 0.05, w: 0.38, h: 0.38,
      fill: { color: D.brandAccent },
    })
    slide.addText(num, {
      x: D.marginX + D.borderStripWidth + 0.3, y: y + 0.05, w: 0.38, h: 0.38,
      fontSize: 13, color: D.white, fontFace: D.fontMain, bold: true,
      align: 'center', valign: 'middle',
    })

    // Objective text
    slide.addText(obj, {
      x: D.marginX + D.borderStripWidth + 0.85, y, w: D.contentWidth - 1.2, h: 0.5,
      fontSize: D.bodySize, color: D.textMid, fontFace: D.fontMain, valign: 'middle',
    })
  })

  return slide
}

// ─── 3. PHASE DIVIDER SLIDE ────────────────────────────────────────────────

export function phaseDividerSlide(pptx: Pres, phase: LessonPhase, subtitle?: string) {
  const style = PHASE_STYLES[phase]
  const slide = pptx.addSlide()

  slide.background = { fill: style.bgColour }

  // Large coloured circle accent
  slide.addShape('ellipse', {
    x: D.slideWidth / 2 - 2.5, y: D.slideHeight / 2 - 2.8, w: 5, h: 5,
    fill: { color: style.colour, transparency: 85 },
  })

  // Phase emoji
  slide.addText(style.emoji, {
    x: 0, y: 1.8, w: D.slideWidth, h: 1.2,
    fontSize: 48, fontFace: D.fontMain, align: 'center', valign: 'middle',
  })

  // Phase label
  slide.addText(style.label, {
    x: 0, y: 3.2, w: D.slideWidth, h: 0.8,
    fontSize: 32, color: style.colour, fontFace: D.fontMain,
    bold: true, align: 'center', valign: 'middle',
    charSpacing: 4,
  })

  if (subtitle) {
    slide.addText(subtitle, {
      x: 1, y: 4.1, w: D.slideWidth - 2, h: 0.5,
      fontSize: D.subtitleSize, color: D.textMid, fontFace: D.fontMain,
      align: 'center', valign: 'middle',
    })
  }

  // Bottom colour bar
  slide.addShape('rect', {
    x: 0, y: D.slideHeight - 0.1, w: D.slideWidth, h: 0.1,
    fill: { color: style.colour },
  })

  return slide
}

// ─── 4. ACTIVITY SLIDE (split layout) ───────────────────────────────────────

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
) {
  const slide = pptx.addSlide()
  scaffoldSlide(slide, phase, data.slideTitle, ICONS.pencil)

  const leftW = D.contentWidth * 0.68
  const rightW = D.contentWidth * 0.28
  const leftX = D.marginX + D.borderStripWidth + 0.2
  const rightX = leftX + leftW + D.contentWidth * 0.04
  const topY = 1.25

  // ── Left column: instructions ──
  slide.addText(data.activityTitle, {
    x: leftX, y: topY, w: leftW, h: 0.45,
    fontSize: 17, color: D.textDark, fontFace: D.fontMain, bold: true,
  })

  // Parse instructions into numbered steps if there are line breaks
  const lines = data.instructions.split(/\n+/).filter(Boolean)
  const formattedText = lines.map((line, idx) => ({
    text: line.replace(/^\d+[\.\)]\s*/, ''),
    options: {
      fontSize: D.bodySize as number,
      color: D.textMid,
      bullet: lines.length > 1 ? { type: 'number' as const, startAt: idx + 1 } : undefined,
      paraSpaceAfter: 6,
    },
  }))

  slide.addText(formattedText, {
    x: leftX, y: topY + 0.55, w: leftW, h: 2.8,
    fontFace: D.fontMain, valign: 'top',
  })

  // Key question callout
  if (data.keyQuestion) {
    const kqY = topY + 3.5
    slide.addShape('roundRect', {
      x: leftX, y: kqY, w: leftW, h: 0.8,
      fill: { color: D.brandLight },
      rectRadius: 0.08,
    })
    slide.addText(`${ICONS.magnifier}  Key Question`, {
      x: leftX + 0.15, y: kqY + 0.04, w: leftW - 0.3, h: 0.25,
      fontSize: 10, color: D.brandAccent, fontFace: D.fontMain, bold: true,
    })
    slide.addText(data.keyQuestion, {
      x: leftX + 0.15, y: kqY + 0.3, w: leftW - 0.3, h: 0.45,
      fontSize: 12, color: D.brandPrimary, fontFace: D.fontMain,
      italic: true, valign: 'top', wrap: true,
    })
  }

  // ── Right column: duration + outcomes ──
  addDurationBadge(slide, data.duration, rightX, topY, rightW)

  if (data.expectedOutcomes && data.expectedOutcomes.length) {
    slide.addText(`${ICONS.checkmark}  Expected Outcomes`, {
      x: rightX, y: topY + 0.6, w: rightW, h: 0.3,
      fontSize: 10, color: D.successGreen, fontFace: D.fontMain, bold: true,
    })
    const outcomeBullets = data.expectedOutcomes.map((o) => ({
      text: o,
      options: { fontSize: 10 as number, color: D.textMid, bullet: true, paraSpaceAfter: 4 },
    }))
    slide.addText(outcomeBullets, {
      x: rightX, y: topY + 0.95, w: rightW, h: 2.5,
      fontFace: D.fontMain, valign: 'top',
    })
  }

  // Teacher tip
  if (data.teacherTip) {
    addTeacherTip(slide, data.teacherTip, rightX, topY + 3.7, rightW, 1.2)
  }

  return slide
}

// ─── 5. DIFFERENTIATION SLIDE ───────────────────────────────────────────────

export function differentiationSlide(
  pptx: Pres,
  phase: LessonPhase,
  title: string,
  diff: { support: string; core: string; stretch: string },
) {
  const slide = pptx.addSlide()
  scaffoldSlide(slide, phase, title, ICONS.target)

  const colW = (D.contentWidth - 0.9) / 3
  const startX = D.marginX + D.borderStripWidth + 0.25
  const topY = 1.3

  const columns = [
    { label: `${ICONS.arrowRight}  Support`, ...D.diffSupport },
    { label: `${ICONS.diamond}  Core`, ...D.diffCore },
    { label: `${ICONS.rocket}  Stretch`, ...D.diffStretch },
  ]
  const texts = [diff.support, diff.core, diff.stretch]

  columns.forEach((col, i) => {
    const x = startX + i * (colW + 0.2)

    // Header bar
    slide.addShape('roundRect', {
      x, y: topY, w: colW, h: 0.45,
      fill: { color: col.headerBg },
      rectRadius: 0.06,
    })
    slide.addText(col.label, {
      x: x + 0.1, y: topY, w: colW - 0.2, h: 0.45,
      fontSize: 13, color: col.header, fontFace: D.fontMain,
      bold: true, valign: 'middle',
    })

    // Body card
    slide.addShape('roundRect', {
      x, y: topY + 0.5, w: colW, h: 4.2,
      fill: { color: col.bg },
      rectRadius: 0.06,
    })
    slide.addText(texts[i], {
      x: x + 0.15, y: topY + 0.65, w: colW - 0.3, h: 3.9,
      fontSize: D.bodySize, color: col.text, fontFace: D.fontMain,
      valign: 'top', wrap: true, lineSpacingMultiple: 1.2,
    })
  })

  return slide
}

// ─── 6. VOCABULARY SLIDE ────────────────────────────────────────────────────

export function vocabularySlide(pptx: Pres, vocabulary: string[]) {
  const slide = pptx.addSlide()
  scaffoldSlide(slide, 'general', 'Key Vocabulary', ICONS.books)

  const startX = D.marginX + D.borderStripWidth + 0.25
  const startY = 1.3
  const rowH = 0.55
  const wordW = 3.2
  const defW = D.contentWidth - wordW - 0.5

  // Column headers
  slide.addShape('roundRect', {
    x: startX, y: startY, w: wordW, h: rowH,
    fill: { color: D.brandPrimary },
    rectRadius: 0.04,
  })
  slide.addText('Word / Term', {
    x: startX, y: startY, w: wordW, h: rowH,
    fontSize: 12, color: D.white, fontFace: D.fontMain,
    bold: true, align: 'center', valign: 'middle',
  })
  slide.addShape('roundRect', {
    x: startX + wordW + 0.1, y: startY, w: defW, h: rowH,
    fill: { color: D.brandPrimary },
    rectRadius: 0.04,
  })
  slide.addText('Definition / Usage', {
    x: startX + wordW + 0.1, y: startY, w: defW, h: rowH,
    fontSize: 12, color: D.white, fontFace: D.fontMain,
    bold: true, align: 'center', valign: 'middle',
  })

  vocabulary.forEach((entry, i) => {
    const y = startY + rowH + 0.05 + i * (rowH + 0.04)
    const isAlt = i % 2 === 0
    const bgCol = isAlt ? D.bgLight : D.bgCard

    // Try to split "word - definition" or "word: definition"
    const sepMatch = entry.match(/^([^:\-\u2013\u2014]+?)\s*[:\-\u2013\u2014]\s*(.+)$/)
    const word = sepMatch ? sepMatch[1].trim() : entry
    const definition = sepMatch ? sepMatch[2].trim() : ''

    slide.addShape('rect', {
      x: startX, y, w: wordW, h: rowH,
      fill: { color: bgCol },
    })
    slide.addText(word, {
      x: startX + 0.15, y, w: wordW - 0.3, h: rowH,
      fontSize: 13, color: D.brandPrimary, fontFace: D.fontMain,
      bold: true, valign: 'middle',
    })

    slide.addShape('rect', {
      x: startX + wordW + 0.1, y, w: defW, h: rowH,
      fill: { color: bgCol },
    })
    slide.addText(definition || entry, {
      x: startX + wordW + 0.25, y, w: defW - 0.3, h: rowH,
      fontSize: 12, color: D.textMid, fontFace: D.fontMain,
      valign: 'middle', wrap: true,
    })
  })

  return slide
}

// ─── 7. DISCUSSION SLIDE ────────────────────────────────────────────────────

export function discussionSlide(pptx: Pres, question: string, phase: LessonPhase = 'main') {
  const slide = pptx.addSlide()
  slide.background = { fill: D.bgLight }
  addPhaseStrip(slide, phase)
  addSlideNumber(slide)
  addProgressDots(slide, phase)

  // Large speech icon
  slide.addText(ICONS.speech, {
    x: 0, y: 1.0, w: D.slideWidth, h: 1,
    fontSize: 56, fontFace: D.fontMain, align: 'center', valign: 'middle',
  })

  // Question text
  slide.addText(`${ICONS.quoteLeft}${question}${ICONS.quoteRight}`, {
    x: 1.5, y: 2.3, w: D.slideWidth - 3, h: 2.2,
    fontSize: 24, color: D.brandPrimary, fontFace: D.fontMain,
    bold: true, align: 'center', valign: 'middle',
    lineSpacingMultiple: 1.3,
  })

  // Subtitle
  slide.addText('Discuss with your partner', {
    x: 0, y: 4.7, w: D.slideWidth, h: 0.5,
    fontSize: D.subtitleSize, color: D.textLight, fontFace: D.fontMain,
    align: 'center', valign: 'middle', italic: true,
  })

  return slide
}

// ─── 8. PLENARY / EXIT TICKET SLIDE ────────────────────────────────────────

export function plenarySlide(
  pptx: Pres,
  data: {
    title: string
    instructions: string
    reflectionQuestions?: string[]
  },
) {
  const slide = pptx.addSlide()
  scaffoldSlide(slide, 'plenary', data.title, ICONS.trophy)

  const leftX = D.marginX + D.borderStripWidth + 0.25

  slide.addText(data.instructions, {
    x: leftX, y: 1.3, w: D.contentWidth - 0.4, h: 1.5,
    fontSize: D.bodySize, color: D.textMid, fontFace: D.fontMain,
    valign: 'top', wrap: true, lineSpacingMultiple: 1.2,
  })

  // Traffic light reflection
  if (data.reflectionQuestions && data.reflectionQuestions.length >= 3) {
    const tlY = 3.1
    const trafficLights = [
      { emoji: '\uD83D\uDD34', label: 'I need more help with...', bg: D.trafficRed, color: D.trafficRedText },
      { emoji: '\uD83D\uDFE1', label: 'I\'m unsure about...', bg: D.trafficAmber, color: D.trafficAmberText },
      { emoji: '\uD83D\uDFE2', label: 'I\'m confident about...', bg: D.trafficGreen, color: D.trafficGreenText },
    ]

    trafficLights.forEach((tl, i) => {
      const y = tlY + i * 1.15
      slide.addShape('roundRect', {
        x: leftX, y, w: D.contentWidth - 0.4, h: 1.0,
        fill: { color: tl.bg },
        rectRadius: 0.08,
      })
      slide.addText(`${tl.emoji}  ${tl.label}`, {
        x: leftX + 0.2, y: y + 0.05, w: D.contentWidth - 0.8, h: 0.3,
        fontSize: 12, color: tl.color, fontFace: D.fontMain, bold: true,
      })
      slide.addText(data.reflectionQuestions![i] || '', {
        x: leftX + 0.2, y: y + 0.38, w: D.contentWidth - 0.8, h: 0.55,
        fontSize: 12, color: D.textMid, fontFace: D.fontMain,
        valign: 'top', wrap: true, italic: true,
      })
    })
  } else {
    // Fallback: numbered reflection areas
    const areas = data.reflectionQuestions || [
      'What was the most important thing you learned today?',
      'What would you like to explore further?',
      'Rate your confidence 1-5 and explain why.',
    ]
    areas.forEach((q, i) => {
      const y = 3.0 + i * 1.2
      slide.addShape('roundRect', {
        x: leftX, y, w: D.contentWidth - 0.4, h: 1.0,
        fill: { color: D.bgCard },
        rectRadius: 0.06,
      })
      slide.addShape('ellipse', {
        x: leftX + 0.15, y: y + 0.25, w: 0.35, h: 0.35,
        fill: { color: D.brandAccent },
      })
      slide.addText(String(i + 1), {
        x: leftX + 0.15, y: y + 0.25, w: 0.35, h: 0.35,
        fontSize: 12, color: D.white, fontFace: D.fontMain,
        bold: true, align: 'center', valign: 'middle',
      })
      slide.addText(q, {
        x: leftX + 0.65, y: y + 0.1, w: D.contentWidth - 1.3, h: 0.7,
        fontSize: 13, color: D.textMid, fontFace: D.fontMain,
        valign: 'middle', wrap: true,
      })
    })
  }

  return slide
}

// ─── 9. HOMEWORK SLIDE ──────────────────────────────────────────────────────

export function homeworkSlide(
  pptx: Pres,
  data: {
    task: string
    resources?: string[]
    dueDate?: string
  },
) {
  const slide = pptx.addSlide()
  scaffoldSlide(slide, 'homework', 'Homework', ICONS.house)

  const leftX = D.marginX + D.borderStripWidth + 0.25

  // Due date badge (if provided)
  if (data.dueDate) {
    slide.addShape('roundRect', {
      x: D.slideWidth - 3, y: 0.55, w: 2.2, h: D.badgeHeight,
      fill: { color: D.phaseHomeworkBg },
      rectRadius: 0.05,
    })
    slide.addText(`Due: ${data.dueDate}`, {
      x: D.slideWidth - 3, y: 0.55, w: 2.2, h: D.badgeHeight,
      fontSize: D.smallSize, color: D.phaseHomework, fontFace: D.fontMain,
      bold: true, align: 'center', valign: 'middle',
    })
  }

  // Task description card
  slide.addShape('roundRect', {
    x: leftX, y: 1.3, w: D.contentWidth - 0.4, h: 2.8,
    fill: { color: D.bgLight },
    line: { color: D.bgAlt, width: 0.8 },
    rectRadius: 0.1,
  })
  slide.addText(`${ICONS.pencil}  Task`, {
    x: leftX + 0.2, y: 1.4, w: 3, h: 0.35,
    fontSize: 13, color: D.brandPrimary, fontFace: D.fontMain, bold: true,
  })
  slide.addText(data.task, {
    x: leftX + 0.2, y: 1.85, w: D.contentWidth - 0.8, h: 2.1,
    fontSize: D.bodySize, color: D.textMid, fontFace: D.fontMain,
    valign: 'top', wrap: true, lineSpacingMultiple: 1.25,
  })

  // Resources list
  if (data.resources && data.resources.length) {
    const resY = 4.4
    slide.addText(`${ICONS.books}  Resources`, {
      x: leftX, y: resY, w: 4, h: 0.4,
      fontSize: 13, color: D.brandPrimary, fontFace: D.fontMain, bold: true,
    })
    const resBullets = data.resources.map((r) => ({
      text: r,
      options: { fontSize: 12 as number, color: D.textMid, bullet: true, paraSpaceAfter: 4 },
    }))
    slide.addText(resBullets, {
      x: leftX + 0.15, y: resY + 0.4, w: D.contentWidth - 0.7, h: 2,
      fontFace: D.fontMain, valign: 'top',
    })
  }

  return slide
}

// ─── 10. QUOTE SLIDE ────────────────────────────────────────────────────────

export function quoteSlide(pptx: Pres, quote: string, attribution?: string) {
  const slide = pptx.addSlide()
  slide.background = { fill: D.bgLight }
  addSlideNumber(slide)

  // Decorative large quote marks
  slide.addText(ICONS.quoteLeft, {
    x: 1.5, y: 1.2, w: 1.5, h: 1.5,
    fontSize: 72, color: D.brandLight, fontFace: 'Georgia',
  })
  slide.addText(ICONS.quoteRight, {
    x: D.slideWidth - 3, y: 4.0, w: 1.5, h: 1.5,
    fontSize: 72, color: D.brandLight, fontFace: 'Georgia',
  })

  // Quote text
  slide.addText(quote, {
    x: 2, y: 2.2, w: D.slideWidth - 4, h: 2.5,
    fontSize: 22, color: D.brandPrimary, fontFace: 'Georgia',
    italic: true, align: 'center', valign: 'middle',
    lineSpacingMultiple: 1.4,
  })

  // Attribution
  if (attribution) {
    slide.addShape('rect', {
      x: D.slideWidth / 2 - 1, y: 5.0, w: 2, h: D.dividerHeight,
      fill: { color: D.accentGold },
    })
    slide.addText(`${ICONS.dash} ${attribution}`, {
      x: 2, y: 5.2, w: D.slideWidth - 4, h: 0.5,
      fontSize: D.bodySize, color: D.textLight, fontFace: D.fontMain,
      align: 'center', valign: 'middle',
    })
  }

  return slide
}

// ─── 11. COMPARISON SLIDE ───────────────────────────────────────────────────

export function comparisonSlide(
  pptx: Pres,
  data: {
    title: string
    leftLabel: string
    leftContent: string
    rightLabel: string
    rightContent: string
    phase?: LessonPhase
  },
) {
  const slide = pptx.addSlide()
  scaffoldSlide(slide, data.phase || 'main', data.title, ICONS.magnifier)

  const leftX = D.marginX + D.borderStripWidth + 0.25
  const colW = (D.contentWidth - 0.8) / 2
  const rightX = leftX + colW + 0.3
  const topY = 1.3

  // Left column
  slide.addShape('roundRect', {
    x: leftX, y: topY, w: colW, h: 0.45,
    fill: { color: D.diffSupport.headerBg },
    rectRadius: 0.06,
  })
  slide.addText(data.leftLabel, {
    x: leftX + 0.15, y: topY, w: colW - 0.3, h: 0.45,
    fontSize: 13, color: D.diffSupport.header, fontFace: D.fontMain,
    bold: true, valign: 'middle',
  })
  slide.addShape('roundRect', {
    x: leftX, y: topY + 0.5, w: colW, h: 4.5,
    fill: { color: D.diffSupport.bg },
    rectRadius: 0.06,
  })
  slide.addText(data.leftContent, {
    x: leftX + 0.15, y: topY + 0.65, w: colW - 0.3, h: 4.2,
    fontSize: D.bodySize, color: D.textMid, fontFace: D.fontMain,
    valign: 'top', wrap: true, lineSpacingMultiple: 1.2,
  })

  // Right column
  slide.addShape('roundRect', {
    x: rightX, y: topY, w: colW, h: 0.45,
    fill: { color: D.diffStretch.headerBg },
    rectRadius: 0.06,
  })
  slide.addText(data.rightLabel, {
    x: rightX + 0.15, y: topY, w: colW - 0.3, h: 0.45,
    fontSize: 13, color: D.diffStretch.header, fontFace: D.fontMain,
    bold: true, valign: 'middle',
  })
  slide.addShape('roundRect', {
    x: rightX, y: topY + 0.5, w: colW, h: 4.5,
    fill: { color: D.diffStretch.bg },
    rectRadius: 0.06,
  })
  slide.addText(data.rightContent, {
    x: rightX + 0.15, y: topY + 0.65, w: colW - 0.3, h: 4.2,
    fontSize: D.bodySize, color: D.textMid, fontFace: D.fontMain,
    valign: 'top', wrap: true, lineSpacingMultiple: 1.2,
  })

  // VS divider
  slide.addShape('ellipse', {
    x: leftX + colW + 0.04, y: topY + 2.2, w: 0.5, h: 0.5,
    fill: { color: D.brandPrimary },
  })
  slide.addText('VS', {
    x: leftX + colW + 0.04, y: topY + 2.2, w: 0.5, h: 0.5,
    fontSize: 10, color: D.white, fontFace: D.fontMain,
    bold: true, align: 'center', valign: 'middle',
  })

  return slide
}

// ─── 12. IMAGE PLACEHOLDER SLIDE ────────────────────────────────────────────

export function imageSlide(pptx: Pres, caption?: string, phase: LessonPhase = 'main') {
  const slide = pptx.addSlide()
  scaffoldSlide(slide, phase, caption || 'Image', '')

  const leftX = D.marginX + D.borderStripWidth + 0.25
  const imgW = D.contentWidth - 0.5
  const imgH = 4.5

  // Placeholder rectangle with dashed border
  slide.addShape('roundRect', {
    x: leftX, y: 1.3, w: imgW, h: imgH,
    fill: { color: D.bgCard },
    line: { color: D.bgAlt, width: 1.5, dashType: 'dash' },
    rectRadius: 0.1,
  })
  slide.addText('Click to add your own image', {
    x: leftX, y: 1.3 + imgH / 2 - 0.5, w: imgW, h: 1,
    fontSize: D.subtitleSize, color: D.textLight, fontFace: D.fontMain,
    align: 'center', valign: 'middle',
  })

  if (caption) {
    slide.addText(caption, {
      x: leftX, y: 1.3 + imgH + 0.15, w: imgW, h: 0.4,
      fontSize: 12, color: D.textLight, fontFace: D.fontMain,
      align: 'center', italic: true,
    })
  }

  return slide
}

// ─── 13. END SLIDE ──────────────────────────────────────────────────────────

export function endSlide(pptx: Pres, nextLessonTeaser?: string) {
  const slide = pptx.addSlide()

  // Dark background
  slide.background = { fill: D.brandDark }

  // Decorative shapes
  slide.addShape('ellipse', {
    x: D.slideWidth - 4, y: -2, w: 6, h: 6,
    fill: { color: D.brandAccent, transparency: 88 },
  })
  slide.addShape('ellipse', {
    x: -1.5, y: D.slideHeight - 3.5, w: 5, h: 5,
    fill: { color: D.brandAccent, transparency: 92 },
  })

  // Gold accent
  slide.addShape('rect', {
    x: D.slideWidth / 2 - 1.5, y: 2.0, w: 3, h: 0.05,
    fill: { color: D.accentGold },
  })

  // Thank you
  slide.addText('Thank You', {
    x: 0, y: 2.3, w: D.slideWidth, h: 1.2,
    fontSize: 40, color: D.white, fontFace: D.fontMain,
    bold: true, align: 'center', valign: 'middle',
  })

  // Next lesson teaser
  if (nextLessonTeaser) {
    slide.addText(`Next lesson: ${nextLessonTeaser}`, {
      x: 2, y: 3.8, w: D.slideWidth - 4, h: 0.6,
      fontSize: 16, color: 'bfdbfe', fontFace: D.fontMain,
      align: 'center', valign: 'middle',
    })
  }

  // Branding
  slide.addText('The English Hub', {
    x: 0, y: 5.0, w: D.slideWidth, h: 0.5,
    fontSize: 16, color: '93c5fd', fontFace: D.fontMain,
    bold: true, align: 'center',
  })
  slide.addText('theenglishhub.app', {
    x: 0, y: 5.5, w: D.slideWidth, h: 0.4,
    fontSize: 12, color: '60a5fa', fontFace: D.fontMain,
    align: 'center',
  })

  // Bottom gold bar
  slide.addShape('rect', {
    x: 0, y: D.slideHeight - 0.08, w: D.slideWidth, h: 0.08,
    fill: { color: D.accentGold },
  })

  return slide
}
