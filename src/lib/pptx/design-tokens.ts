// ─── Anthology Deck Theme – PowerPoint Design Tokens ────────────────────────
// Single source of truth for all visual constants used across slide templates.
// Three skins share the same layout & typography; only the colour palette changes.

// ─── Skin types & palette ───────────────────────────────────────────────────

export type SlideSkin = 'cream' | 'dark' | 'whiteboard'

export interface SkinPalette {
  /** Slide background */
  slideBg: string
  /** Primary foreground / body text */
  slideFg: string
  /** Secondary text (subtitles, standfirsts) */
  slideSub: string
  /** Muted text (captions, metadata) */
  slideMuted: string
  /** Default rule / divider */
  slideRule: string
  /** Strong rule (used for emphasis dividers) */
  slideRuleStrong: string
  /** Panel / card background */
  slidePanel: string
  /** Panel / card border */
  slidePanelBorder: string
  /** Primary accent colour */
  slideAccent: string
  /** Softer accent (hover / secondary) */
  slideAccentSoft: string
}

// ─── Skin palettes ──────────────────────────────────────────────────────────

export const SKIN_PALETTES: Record<SlideSkin, SkinPalette> = {
  cream: {
    slideBg:          'FBF7F0', // cream-50
    slideFg:          '141A17', // ink-900
    slideSub:         '303832', // ink-700
    slideMuted:       '4A524C', // ink-600
    slideRule:        'B5B8B3', // ink-300
    slideRuleStrong:  '141A17', // ink-900
    slidePanel:       'F5EFE4', // cream-100
    slidePanelBorder: 'D6D7D3', // ink-200
    slideAccent:      'AD4A28', // clay-600
    slideAccentSoft:  'C65A33', // clay-500
  },

  dark: {
    slideBg:          '0E1513',
    slideFg:          'FBF7F0', // cream-50
    slideSub:         'C8C5BC',
    slideMuted:       '8A8D82',
    slideRule:        '2B332E',
    slideRuleStrong:  'FBF7F0', // cream-50
    slidePanel:       '15201C',
    slidePanelBorder: '2B332E',
    slideAccent:      'E89764',
    slideAccentSoft:  'D97A4E',
  },

  whiteboard: {
    slideBg:          'FFFFFF',
    slideFg:          '111111',
    slideSub:         '333333',
    slideMuted:       '555555',
    slideRule:        'DDDDDD',
    slideRuleStrong:  '111111',
    slidePanel:       'F7F7F5',
    slidePanelBorder: 'E5E5E2',
    slideAccent:      'AD4A28', // clay-600
    slideAccentSoft:  'C65A33', // clay-500
  },
} as const

// ─── Helper ─────────────────────────────────────────────────────────────────

/** Return the palette for a given skin (defaults to cream). */
export function getSkinPalette(skin: SlideSkin = 'cream'): SkinPalette {
  return SKIN_PALETTES[skin]
}

// ─── Design constants ───────────────────────────────────────────────────────

export const PPTX_DESIGN = {
  // Typography – Anthology stack
  fontSerif: 'Newsreader',      // headlines, body, pull-quotes
  fontMono:  'JetBrains Mono',  // kickers, codes, metadata
  fontMain:  'Newsreader',      // backward-compat alias for fontSerif

  // ── Named sizes (POINTS — for actual PowerPoint reading distance) ────────
  // Standard PowerPoint typography: titles 36-60pt, body 18-24pt, captions 10-12pt
  // These are sized to be readable when projected and not overflow 13.33×7.5in slides

  /** Masthead brand name */
  sizeMastheadBrand: 14,
  /** Masthead edition line */
  sizeMastheadEdition: 12,
  /** Masthead code */
  sizeMastheadCode: 9,
  /** Standard body text */
  sizeBody: 16,
  /** Section heading */
  sizeSectionHeading: 28,
  /** Display h1 — large title slide heading */
  sizeDisplayH1: 54,
  /** XL h1 — content slide major heading */
  sizeXlH1: 40,
  /** LG h1 — secondary heading */
  sizeLgH1: 30,
  /** Standfirst / lead paragraph */
  sizeStandfirst: 18,
  /** Kicker / superscript label */
  sizeKicker: 10,
  /** Dashed list item */
  sizeDashedList: 16,
  /** Data-card number */
  sizeDataCardNum: 60,
  /** Pull-quote text */
  sizePullQuote: 32,
  /** Footer text */
  sizeFooter: 9,

  // ── Legacy size aliases (backward compat) ─────────────────────────────────

  titleSize:    28,  // maps to sizeSectionHeading
  subtitleSize: 18,  // maps to sizeStandfirst
  headingSize:  18,  // maps to sizeStandfirst
  bodySize:     16,  // maps to sizeBody
  smallSize:    10,  // maps to sizeKicker
  tinySize:     9,   // maps to sizeFooter

  // ── Layout (inches, 16:9 widescreen) ──────────────────────────────────────

  slideWidth:    13.33,
  slideHeight:   7.5,
  marginX:       0.83,  // 120 px / 1920 * 13.33
  marginY:       0.61,  // 88 px / 1080 * 7.5
  contentWidth:  11.67, // slideWidth - 2 * marginX
  contentHeight: 6.28,  // slideHeight - 2 * marginY

  // ── Element sizes ─────────────────────────────────────────────────────────

  borderStripWidth: 0, // no phase strip in Anthology
  badgeHeight:      0.35,
  iconSize:         0.4,
  progressDotSize:  0.12,
  dividerHeight:    0.03,
} as const

// ─── Phase metadata ─────────────────────────────────────────────────────────

export type LessonPhase = 'starter' | 'main' | 'plenary' | 'homework' | 'general'

export interface PhaseStyle {
  colour: string
  bgColour: string
  label: string
}

export const PHASE_STYLES: Record<LessonPhase, PhaseStyle> = {
  starter: {
    colour:   'AD4A28', // clay-600
    bgColour: 'F5EFE4', // cream-100 (panel tone)
    label:    'STARTER',
  },
  main: {
    colour:   'AD4A28',
    bgColour: 'F5EFE4',
    label:    'MAIN ACTIVITY',
  },
  plenary: {
    colour:   'AD4A28',
    bgColour: 'F5EFE4',
    label:    'PLENARY',
  },
  homework: {
    colour:   'AD4A28',
    bgColour: 'F5EFE4',
    label:    'HOMEWORK',
  },
  general: {
    colour:   'AD4A28',
    bgColour: 'F5EFE4',
    label:    'LESSON',
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
