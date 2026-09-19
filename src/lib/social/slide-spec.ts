/**
 * The template specification, in code (AUTO-6).
 *
 * WHY. Instagram is 108 of the 408 calendar rows and most of its library is
 * carousels - twelve carousel scripts, all of them still markdown. Nothing
 * renders them, so Instagram, LinkedIn document posts and X cards cannot be
 * queued at all, and an approval screen would show text-only drafts for a
 * visual platform.
 *
 * The Brand Assets Brief sets a 1080 canvas, a named type scale, an absolute
 * 28px floor, 88px side margins and a 96px bottom margin. Those numbers are not
 * taste: doc 04 records the arithmetic, and a 28px element on a 1080 canvas
 * renders at roughly 10px on a phone, which is already at the edge of legible.
 *
 * THE FLOOR IS ENFORCED, NOT DOCUMENTED. A renderer that accepts a 24px body
 * because the caller asked for one produces an unreadable slide that looks
 * deliberate. `validateSlide` refuses instead, and names the rule.
 */

export const CANVAS = {
  /** Instagram and LinkedIn carousel. */
  carousel: { width: 1080, height: 1350 },
  /** Instagram and TikTok story. */
  story: { width: 1080, height: 1920 },
} as const

export type SlideFormat = keyof typeof CANVAS

/** Margins at a 1080 canvas, from the specification's "Shared margins". */
export const MARGINS = { top: 88, side: 88, bottom: 96 } as const

/**
 * The type scale, at a 1080 canvas width.
 *
 * `minimum: true` marks the four roles the specification allows at the 28px
 * floor: a source line, a slide number, a label and a demo label. Nothing else
 * may be that small.
 */
export const TYPE_SCALE = {
  coverDisplay: { size: 96, leading: 1.06, tracking: '-0.01em', weight: 500, serif: true },
  headline: { size: 68, leading: 1.12, tracking: '-0.005em', weight: 500, serif: true },
  subhead: { size: 52, leading: 1.25, tracking: '0', weight: 400, serif: true },
  bodyLarge: { size: 44, leading: 1.45, tracking: '0', weight: 400, serif: false },
  body: { size: 40, leading: 1.45, tracking: '0', weight: 400, serif: false },
  label: { size: 28, leading: 1.3, tracking: '0.08em', weight: 600, serif: false, minimum: true },
  slideNumber: {
    size: 28,
    leading: 1,
    tracking: '0.02em',
    weight: 500,
    serif: false,
    minimum: true,
  },
  footnote: { size: 28, leading: 1.4, tracking: '0', weight: 400, serif: false, minimum: true },
} as const

export type TypeRole = keyof typeof TYPE_SCALE

/** The absolute floor at 1080. Doc 04 section 3 has the arithmetic. */
export const MIN_SIZE_AT_1080 = 28

/**
 * A 45-character measure is what makes a frame readable at arm's length on a
 * phone held in bed, which the brief names as the actual reading condition.
 */
export const MAX_LINE_CHARS = 45

export interface SlideSpec {
  format: SlideFormat
  /** Uppercase label above the headline. */
  eyebrow?: string
  headline: string
  body?: string
  /** `3` renders as "3 / 8" when `slideCount` is given. */
  slideNumber?: number
  slideCount?: number
  /** "* Source: ..." - required whenever the slide carries a statistic. */
  footnote?: string
  /** Set when the slide shows student writing. */
  demoLabel?: boolean
}

export interface SlideProblem {
  field: string
  why: string
}

/**
 * Refuse a slide the specification would not allow.
 *
 * It returns problems rather than throwing, so a batch render can report every
 * bad slide at once instead of stopping at the first.
 */
export function validateSlide(spec: SlideSpec): SlideProblem[] {
  const problems: SlideProblem[] = []

  if (!spec.headline || !spec.headline.trim()) {
    problems.push({ field: 'headline', why: 'A slide with no headline has nothing to read.' })
  }

  const measure = (field: string, text: string | undefined) => {
    if (!text) return
    for (const line of text.split('\n')) {
      if (line.length > MAX_LINE_CHARS) {
        problems.push({
          field,
          why:
            `"${line.slice(0, 50)}..." is ${line.length} characters. The brief sets a ` +
            `${MAX_LINE_CHARS}-character measure, which is what makes a frame readable at ` +
            `arm's length on a phone.`,
        })
      }
    }
  }
  measure('headline', spec.headline)
  measure('body', spec.body)

  if (spec.slideNumber !== undefined && spec.slideCount === undefined) {
    problems.push({
      field: 'slideNumber',
      why: 'A slide number with no total reads as "3" rather than "3 of 8".',
    })
  }

  // The statistic rule from the voice document, enforced where the asset is
  // made rather than after it is posted.
  const hasStatistic = /\b\d{1,3}(?:\.\d+)?\s*(?:per cent|percent|%)\b/i.test(
    `${spec.headline} ${spec.body ?? ''}`,
  )
  if (hasStatistic && !spec.footnote) {
    problems.push({
      field: 'footnote',
      why: 'This slide states a statistic and carries no "* Source:" line. No source, no statistic.',
    })
  }

  return problems
}

/** Scale a size from the 1080 reference canvas to the target width. */
export function scaleForCanvas(sizeAt1080: number, canvasWidth: number): number {
  return Math.round(sizeAt1080 * (canvasWidth / 1080))
}

/**
 * The floor for a canvas.
 *
 * 28px at 1080, but 32px at 1200 - LinkedIn and link-preview images are viewed
 * at a smaller fraction of their native size than an Instagram frame is.
 */
export function minimumSizeFor(canvasWidth: number): number {
  return canvasWidth >= 1200 ? 32 : MIN_SIZE_AT_1080
}
