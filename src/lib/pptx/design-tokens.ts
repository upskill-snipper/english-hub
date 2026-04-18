// ─── PowerPoint Design Tokens ───────────────────────────────────────────────
// Single source of truth for all visual constants used across slide templates.

export const PPTX_DESIGN = {
  // Brand
  brandPrimary: '1e3a8a',
  brandAccent: '2563eb',
  brandLight: 'dbeafe',
  brandDark: '0f1d45',

  // Phase colours
  phaseStarter: 'f59e0b',    // amber
  phaseMain: '3b82f6',       // blue
  phasePlenary: '10b981',    // green
  phaseHomework: '8b5cf6',   // purple

  // Phase backgrounds (lighter tints)
  phaseStarterBg: 'fef3c7',
  phaseMainBg: 'dbeafe',
  phasePlenaryBg: 'd1fae5',
  phaseHomeworkBg: 'ede9fe',

  // Differentiation
  diffSupport: { bg: 'dbeafe', text: '1e40af', header: '2563eb', headerBg: 'bfdbfe' },
  diffCore: { bg: 'dcfce7', text: '166534', header: '16a34a', headerBg: 'bbf7d0' },
  diffStretch: { bg: 'f3e8ff', text: '6b21a8', header: '7c3aed', headerBg: 'ddd6fe' },

  // Text
  textDark: '1a1a1a',
  textMid: '374151',
  textLight: '9ca3af',
  white: 'ffffff',

  // Backgrounds
  bgLight: 'f8fafc',
  bgCard: 'f1f5f9',
  bgAlt: 'e2e8f0',

  // Decorative
  accentGold: 'fbbf24',
  accentRed: 'ef4444',
  accentAmber: 'f59e0b',
  accentGreen: '22c55e',
  successGreen: '16a34a',
  warningAmber: 'f59e0b',
  dangerRed: 'dc2626',

  // Traffic light colours
  trafficRed: 'fecaca',
  trafficRedText: 'b91c1c',
  trafficAmber: 'fef3c7',
  trafficAmberText: '92400e',
  trafficGreen: 'd1fae5',
  trafficGreenText: '065f46',

  // Typography
  fontMain: 'Calibri',
  fontMono: 'Consolas',

  // Sizes (points)
  titleSize: 28,
  subtitleSize: 18,
  headingSize: 22,
  bodySize: 14,
  smallSize: 10,
  tinySize: 8,

  // Layout (inches, 16:9 widescreen)
  slideWidth: 13.33,
  slideHeight: 7.5,
  marginX: 0.5,
  marginY: 0.5,
  contentWidth: 12.33,  // slideWidth - 2*marginX
  contentHeight: 6.5,   // slideHeight - 2*marginY

  // Reusable element sizes
  borderStripWidth: 0.08,
  badgeHeight: 0.35,
  iconSize: 0.4,
  progressDotSize: 0.12,
  dividerHeight: 0.03,
} as const

// ─── Phase metadata ─────────────────────────────────────────────────────────

export type LessonPhase = 'starter' | 'main' | 'plenary' | 'homework' | 'general'

export interface PhaseStyle {
  colour: string
  bgColour: string
  emoji: string
  label: string
}

export const PHASE_STYLES: Record<LessonPhase, PhaseStyle> = {
  starter: {
    colour: PPTX_DESIGN.phaseStarter,
    bgColour: PPTX_DESIGN.phaseStarterBg,
    emoji: '\uD83D\uDFE1', // yellow circle
    label: 'STARTER',
  },
  main: {
    colour: PPTX_DESIGN.phaseMain,
    bgColour: PPTX_DESIGN.phaseMainBg,
    emoji: '\uD83D\uDD35', // blue circle
    label: 'MAIN ACTIVITY',
  },
  plenary: {
    colour: PPTX_DESIGN.phasePlenary,
    bgColour: PPTX_DESIGN.phasePlenaryBg,
    emoji: '\uD83D\uDFE2', // green circle
    label: 'PLENARY',
  },
  homework: {
    colour: PPTX_DESIGN.phaseHomework,
    bgColour: PPTX_DESIGN.phaseHomeworkBg,
    emoji: '\uD83C\uDFE0', // house
    label: 'HOMEWORK',
  },
  general: {
    colour: PPTX_DESIGN.brandAccent,
    bgColour: PPTX_DESIGN.brandLight,
    emoji: '\uD83D\uDCD6', // book
    label: 'LESSON',
  },
}

// ─── Unicode icons ──────────────────────────────────────────────────────────

export const ICONS = {
  timer: '\u23F1\uFE0F',       // stopwatch
  pencil: '\uD83D\uDCDD',     // memo
  target: '\uD83C\uDFAF',     // bullseye
  speech: '\uD83D\uDCAC',     // speech bubble
  books: '\uD83D\uDCDA',      // books
  house: '\uD83C\uDFE0',      // house
  star: '\u2B50',              // star
  checkmark: '\u2705',         // white checkmark
  lightbulb: '\uD83D\uDCA1',  // lightbulb
  magnifier: '\uD83D\uDD0D',  // magnifying glass
  rocket: '\uD83D\uDE80',     // rocket
  trophy: '\uD83C\uDFC6',     // trophy
  quoteLeft: '\u201C',        // left double quotation
  quoteRight: '\u201D',       // right double quotation
  arrowRight: '\u25B6',       // right-pointing triangle
  diamond: '\u25C6',          // black diamond
  circle: '\u25CF',           // black circle
  dash: '\u2014',             // em dash
  dotFilled: '\u25CF',        // filled dot
  dotEmpty: '\u25CB',         // empty dot
} as const
