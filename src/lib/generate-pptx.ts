'use client'

import type { LessonPlanData } from './generate-teaching-pdf'


// ─── Brand constants ──────────────────────────────────────────────────────────

const BRAND_BLUE = '1e3a8a'     // dark blue for headers
const ACCENT_BLUE = '2563eb'    // accent / links
const TEXT_DARK = '1a1a1a'
const TEXT_MID = '374151'
const TEXT_LIGHT = '6b7280'
const BG_LIGHT_BLUE = 'eff6ff'
const WHITE = 'ffffff'

const TITLE_FONT_SIZE = 24
const HEADING_FONT_SIZE = 18
const BODY_FONT_SIZE = 14
const SMALL_FONT_SIZE = 11

// ─── Helpers ──────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addBranding(slide: any) {
  slide.addText('The English Hub', {
    x: 0.4,
    y: 0.2,
    w: 3,
    h: 0.3,
    fontSize: 9,
    color: TEXT_LIGHT,
    fontFace: 'Calibri',
  })
  slide.addText('theenglishhub.app', {
    x: 6.5,
    y: 0.2,
    w: 3,
    h: 0.3,
    fontSize: 8,
    color: TEXT_LIGHT,
    fontFace: 'Calibri',
    align: 'right',
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addSlideTitle(slide: any, title: string) {
  slide.addText(title, {
    x: 0.4,
    y: 0.5,
    w: 9.2,
    h: 0.6,
    fontSize: HEADING_FONT_SIZE,
    color: BRAND_BLUE,
    fontFace: 'Calibri',
    bold: true,
  })
  // Divider line
  slide.addShape('rect' as any, {
    x: 0.4,
    y: 1.1,
    w: 9.2,
    h: 0.03,
    fill: { color: ACCENT_BLUE },
  })
}

// ─── Lesson Plan PowerPoint Generator ─────────────────────────────────────────

export async function generateLessonPlanPptx(topic: string, data: LessonPlanData): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const PptxGenJS = (await import(/* webpackIgnore: true */ 'pptxgenjs')).default
  const pptx = new PptxGenJS()
  pptx.author = 'The English Hub'
  pptx.company = 'The English Hub'
  pptx.title = `Lesson Plan: ${data.title}`
  pptx.subject = topic
  pptx.layout = 'LAYOUT_WIDE'

  // ── Slide 1: Title ───────────────────────────────────────────────────────
  const slide1 = pptx.addSlide()
  slide1.background = { fill: BRAND_BLUE }

  slide1.addText('The English Hub', {
    x: 0.5,
    y: 0.6,
    w: 9,
    h: 0.5,
    fontSize: 14,
    color: 'bfdbfe',
    fontFace: 'Calibri',
    bold: true,
  })

  slide1.addText(data.title, {
    x: 0.5,
    y: 1.6,
    w: 9,
    h: 1.2,
    fontSize: TITLE_FONT_SIZE,
    color: WHITE,
    fontFace: 'Calibri',
    bold: true,
  })

  slide1.addText(`${topic} -- Lesson Plan`, {
    x: 0.5,
    y: 2.9,
    w: 9,
    h: 0.5,
    fontSize: 16,
    color: 'bfdbfe',
    fontFace: 'Calibri',
  })

  // Meta info row
  const metaItems = [
    `Year Group: ${data.yearGroup}`,
    `Exam Board: ${data.examBoard}`,
    `Duration: ${data.duration}`,
    `Text: ${data.text}`,
  ]
  slide1.addText(metaItems.join('   |   '), {
    x: 0.5,
    y: 4.2,
    w: 9,
    h: 0.4,
    fontSize: SMALL_FONT_SIZE,
    color: 'bfdbfe',
    fontFace: 'Calibri',
  })

  slide1.addText('theenglishhub.app', {
    x: 0.5,
    y: 4.9,
    w: 9,
    h: 0.3,
    fontSize: 10,
    color: '93c5fd',
    fontFace: 'Calibri',
  })

  // ── Slide 2: Learning Objectives ─────────────────────────────────────────
  const slide2 = pptx.addSlide()
  addBranding(slide2)
  addSlideTitle(slide2, 'Learning Objectives')

  const objBullets = data.objectives.map((o) => ({
    text: o,
    options: {
      fontSize: BODY_FONT_SIZE,
      color: TEXT_MID,
      bullet: { type: 'number' as const },
      paraSpaceAfter: 8,
    },
  }))
  slide2.addText(objBullets, {
    x: 0.6,
    y: 1.3,
    w: 8.8,
    h: 3.5,
    fontFace: 'Calibri',
    valign: 'top',
  })

  // ── Slide 3: Starter Activity ────────────────────────────────────────────
  const slide3 = pptx.addSlide()
  addBranding(slide3)
  addSlideTitle(slide3, 'Starter Activity')

  slide3.addText(data.starterActivity.title, {
    x: 0.6,
    y: 1.3,
    w: 8.8,
    h: 0.4,
    fontSize: 16,
    color: TEXT_DARK,
    fontFace: 'Calibri',
    bold: true,
  })
  slide3.addText(data.starterActivity.duration, {
    x: 0.6,
    y: 1.7,
    w: 8.8,
    h: 0.3,
    fontSize: SMALL_FONT_SIZE,
    color: TEXT_LIGHT,
    fontFace: 'Calibri',
    italic: true,
  })
  slide3.addText(data.starterActivity.instructions, {
    x: 0.6,
    y: 2.2,
    w: 8.8,
    h: 2,
    fontSize: BODY_FONT_SIZE,
    color: TEXT_MID,
    fontFace: 'Calibri',
    valign: 'top',
    wrap: true,
  })

  if (data.starterActivity.differentiation) {
    addDiffGrid(slide3, data.starterActivity.differentiation, 4.4)
  }

  // ── Slides 4+: Main Activities ──────────────────────────────────────────
  data.mainActivities.forEach((act, i) => {
    const slide = pptx.addSlide()
    addBranding(slide)
    addSlideTitle(slide, `Main Activity ${i + 1}`)

    slide.addText(act.title, {
      x: 0.6,
      y: 1.3,
      w: 8.8,
      h: 0.4,
      fontSize: 16,
      color: TEXT_DARK,
      fontFace: 'Calibri',
      bold: true,
    })
    slide.addText(act.duration, {
      x: 0.6,
      y: 1.7,
      w: 8.8,
      h: 0.3,
      fontSize: SMALL_FONT_SIZE,
      color: TEXT_LIGHT,
      fontFace: 'Calibri',
      italic: true,
    })
    slide.addText(act.instructions, {
      x: 0.6,
      y: 2.2,
      w: 8.8,
      h: 1.8,
      fontSize: BODY_FONT_SIZE,
      color: TEXT_MID,
      fontFace: 'Calibri',
      valign: 'top',
      wrap: true,
    })

    if (act.differentiation) {
      addDiffGrid(slide, act.differentiation, 4.2)
    }
  })

  // ── Plenary Slide ───────────────────────────────────────────────────────
  const slidePlenary = pptx.addSlide()
  addBranding(slidePlenary)
  addSlideTitle(slidePlenary, 'Plenary')

  slidePlenary.addText(data.plenary.title, {
    x: 0.6,
    y: 1.3,
    w: 8.8,
    h: 0.4,
    fontSize: 16,
    color: TEXT_DARK,
    fontFace: 'Calibri',
    bold: true,
  })
  slidePlenary.addText(data.plenary.instructions, {
    x: 0.6,
    y: 1.9,
    w: 8.8,
    h: 2,
    fontSize: BODY_FONT_SIZE,
    color: TEXT_MID,
    fontFace: 'Calibri',
    valign: 'top',
    wrap: true,
  })

  if (data.plenary.differentiation) {
    addDiffGrid(slidePlenary, data.plenary.differentiation, 4.2)
  }

  // ── Slide: Key Vocabulary ───────────────────────────────────────────────
  const slideVocab = pptx.addSlide()
  addBranding(slideVocab)
  addSlideTitle(slideVocab, 'Key Vocabulary')

  const vocabBullets = data.keyVocabulary.map((kw) => ({
    text: kw,
    options: {
      fontSize: BODY_FONT_SIZE,
      color: TEXT_MID,
      bullet: true,
      paraSpaceAfter: 6,
    },
  }))
  slideVocab.addText(vocabBullets, {
    x: 0.6,
    y: 1.3,
    w: 8.8,
    h: 3.5,
    fontFace: 'Calibri',
    valign: 'top',
  })

  // ── Slide: Homework & Resources ─────────────────────────────────────────
  const slideHw = pptx.addSlide()
  addBranding(slideHw)
  addSlideTitle(slideHw, 'Homework & Resources')

  let yPos = 1.3

  if (data.homework) {
    slideHw.addText('Homework', {
      x: 0.6,
      y: yPos,
      w: 8.8,
      h: 0.35,
      fontSize: 15,
      color: BRAND_BLUE,
      fontFace: 'Calibri',
      bold: true,
    })
    yPos += 0.4
    slideHw.addText(data.homework, {
      x: 0.6,
      y: yPos,
      w: 8.8,
      h: 1,
      fontSize: BODY_FONT_SIZE,
      color: TEXT_MID,
      fontFace: 'Calibri',
      valign: 'top',
      wrap: true,
    })
    yPos += 1.2
  }

  if (data.resourcesNeeded.length > 0) {
    slideHw.addText('Resources Needed', {
      x: 0.6,
      y: yPos,
      w: 8.8,
      h: 0.35,
      fontSize: 15,
      color: BRAND_BLUE,
      fontFace: 'Calibri',
      bold: true,
    })
    yPos += 0.4
    const resBullets = data.resourcesNeeded.map((r) => ({
      text: r,
      options: {
        fontSize: 13,
        color: TEXT_MID,
        bullet: true,
        paraSpaceAfter: 4,
      },
    }))
    slideHw.addText(resBullets, {
      x: 0.6,
      y: yPos,
      w: 8.8,
      h: 2,
      fontFace: 'Calibri',
      valign: 'top',
    })
  }

  // ── Write file ──────────────────────────────────────────────────────────
  const fileName = `${topic.replace(/\s+/g, '-')}-lesson-plan.pptx`
  pptx.writeFile({ fileName })
}

// ─── Differentiation grid helper ──────────────────────────────────────────────

function addDiffGrid(
  slide: any,
  diff: { support: string; core: string; stretch: string },
  yStart: number,
) {
  const colW = 2.93
  const headers = [
    { label: 'Support', color: '2563eb', bg: 'dbeafe' },
    { label: 'Core', color: '16a34a', bg: 'dcfce7' },
    { label: 'Stretch', color: '7c3aed', bg: 'ede9fe' },
  ]
  const texts = [diff.support, diff.core, diff.stretch]

  headers.forEach((h, i) => {
    const x = 0.5 + i * (colW + 0.1)

    // Header
    slide.addText(h.label, {
      x,
      y: yStart,
      w: colW,
      h: 0.3,
      fontSize: 10,
      color: h.color,
      fontFace: 'Calibri',
      bold: true,
      fill: { color: h.bg },
      align: 'center',
      valign: 'middle',
    })

    // Body
    slide.addText(texts[i], {
      x,
      y: yStart + 0.32,
      w: colW,
      h: 0.8,
      fontSize: 10,
      color: TEXT_MID,
      fontFace: 'Calibri',
      valign: 'top',
      wrap: true,
      fill: { color: 'fafafa' },
    })
  })
}

// ═══════════════════════════════════════════════════════════════════════════════
//  GENERIC RESOURCE PPTX -- for resources page items
// ═══════════════════════════════════════════════════════════════════════════════

export interface ResourcePptxData {
  title: string
  type: string
  yearGroup: string
  examBoard: string
  duration?: string
  objectives: string[]
  firstActivity: string
}

export async function generateResourcePptx(data: ResourcePptxData): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const PptxGenJS = (await import(/* webpackIgnore: true */ 'pptxgenjs')).default
  const pptx = new PptxGenJS()
  pptx.author = 'The English Hub'
  pptx.company = 'The English Hub'
  pptx.title = data.title
  pptx.layout = 'LAYOUT_WIDE'

  // Title slide
  const slide1 = pptx.addSlide()
  slide1.background = { fill: BRAND_BLUE }

  slide1.addText('The English Hub', {
    x: 0.5, y: 0.6, w: 9, h: 0.5,
    fontSize: 14, color: 'bfdbfe', fontFace: 'Calibri', bold: true,
  })
  slide1.addText(data.title, {
    x: 0.5, y: 1.6, w: 9, h: 1.2,
    fontSize: TITLE_FONT_SIZE, color: WHITE, fontFace: 'Calibri', bold: true,
  })
  slide1.addText(`${data.type} | ${data.yearGroup} | ${data.examBoard}${data.duration ? ` | ${data.duration}` : ''}`, {
    x: 0.5, y: 3.2, w: 9, h: 0.4,
    fontSize: 13, color: 'bfdbfe', fontFace: 'Calibri',
  })

  // Objectives slide
  const slide2 = pptx.addSlide()
  addBranding(slide2)
  addSlideTitle(slide2, 'Objectives')

  const objBullets = data.objectives.map((o) => ({
    text: o,
    options: {
      fontSize: BODY_FONT_SIZE,
      color: TEXT_MID,
      bullet: { type: 'number' as const },
      paraSpaceAfter: 8,
    },
  }))
  slide2.addText(objBullets, {
    x: 0.6, y: 1.3, w: 8.8, h: 3.5,
    fontFace: 'Calibri', valign: 'top',
  })

  // Activity slide
  const slide3 = pptx.addSlide()
  addBranding(slide3)
  addSlideTitle(slide3, 'First Activity')

  slide3.addText(data.firstActivity, {
    x: 0.6, y: 1.3, w: 8.8, h: 3.5,
    fontSize: BODY_FONT_SIZE, color: TEXT_MID,
    fontFace: 'Calibri', valign: 'top', wrap: true,
  })

  const fileName = `${data.title.replace(/[^a-zA-Z0-9]+/g, '-').replace(/-+$/, '')}.pptx`
  pptx.writeFile({ fileName })
}
