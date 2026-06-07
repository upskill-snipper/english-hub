/**
 * KS3 curriculum data model.
 *
 * Drives /ks3 routes: landing → year → term → week → lesson breakdown.
 * Holds the typed source-of-truth for skill codes, marking rubrics,
 * yearly expectations, and weekly lesson plans.
 *
 * Bilingual by design - every human-readable string carries an
 * optional Arabic variant alongside the English. The Arabic variant
 * is produced (and round-trip QA'd) by the translation pipeline in
 * the agent server; on the page we render whichever the current
 * `eh-lang` cookie says.
 *
 * Schema alignment notes:
 *   - `Locale = 'en' | 'ar' | 'es'` matches the middleware cookie (`eh-lang`)
 *     and the LanguageToggle component. Bilingual mode ('bi') was
 *     removed in May 2026 - see use-locale.ts.
 *   - Strand keys match the existing rubric headings: `reading`,
 *     `writing`, `language` (= "Language, grammar and control"),
 *     `speaking`.
 *   - Level keys (`below | working | expected | depth`) match the
 *     wording used in school reports - never "Failing / Weak", always
 *     "Below target / Working towards" for parent-facing trust.
 */

// ─── i18n primitives ──────────────────────────────────────────────────

/** Supported locales. AR draws from `.ar`, falling back to `.en` when absent. */
export type Locale = 'en' | 'ar' | 'es'

/**
 * Every user-facing string in the curriculum has an English form and
 * an optional Arabic form. When `ar` is absent the renderer falls
 * back to `en`. This is intentional - it lets us ship Y7 T1 fully in
 * English first and translate progressively without breaking the
 * site.
 */
export type LocalizedString = {
  en: string
  ar?: string
}

/**
 * Resolve a LocalizedString to a plain string given the active locale.
 * Falls back to `.en` whenever `.ar` is missing - keeps the page from
 * rendering blank strings while the translation pipeline catches up.
 */
export function loc(s: LocalizedString | undefined, locale: Locale = 'en'): string {
  if (!s) return ''
  if (locale === 'ar' && s.ar) return s.ar
  return s.en
}

// ─── Curriculum primitives ────────────────────────────────────────────

export type Strand = 'reading' | 'writing' | 'language' | 'speaking'

export const STRAND_LABEL: Record<Strand, LocalizedString> = {
  reading: { en: 'Reading', ar: 'القراءة' },
  writing: { en: 'Writing', ar: 'الكتابة' },
  language: { en: 'Language, grammar and control', ar: 'اللغة والقواعد والإتقان' },
  speaking: { en: 'Speaking and Listening', ar: 'التحدّث والاستماع' },
}

export type YearNumber = 7 | 8 | 9

export type SkillCode = {
  id: string
  year: YearNumber
  strand: Strand
  descriptor: LocalizedString
  /** Optional cross-reference to the equivalent code one year up. */
  becomes?: string
}

export type RubricLevel = 'below' | 'working' | 'expected' | 'depth'

export const RUBRIC_LEVEL_LABEL: Record<RubricLevel, LocalizedString> = {
  below: { en: 'Below target', ar: 'دون المستوى المطلوب' },
  working: { en: 'Working towards', ar: 'في طور التقدّم' },
  expected: { en: 'Expected', ar: 'يستوفي المتوقَّع' },
  depth: { en: 'Greater depth', ar: 'يتجاوز المتوقَّع' },
}

export type RubricCell = {
  year: YearNumber
  strand: Strand
  level: RubricLevel
  descriptor: LocalizedString
  skillCodes: string[]
}

// ─── Weekly framework ─────────────────────────────────────────────────

export type LessonFocus =
  | 'explicit-reading'
  | 'reading-discussion'
  | 'explicit-writing'
  | 'application'
  | 'independent-outcome'
  | 'consolidation-reading'
  | 'consolidation-discussion'
  | 'paragraph-rehearsal'
  | 'assessment'

export const LESSON_FOCUS_LABEL: Record<LessonFocus, LocalizedString> = {
  'explicit-reading': { en: 'Explicit Reading', ar: 'القراءة الموجَّهة' },
  'reading-discussion': { en: 'Reading and Discussion', ar: 'القراءة والمناقشة' },
  'explicit-writing': { en: 'Explicit Writing', ar: 'الكتابة الموجَّهة' },
  application: { en: 'Application', ar: 'التطبيق' },
  'independent-outcome': { en: 'Independent Outcome', ar: 'المُنتَج المستقل' },
  'consolidation-reading': { en: 'Consolidation Reading', ar: 'مراجعة القراءة' },
  'consolidation-discussion': { en: 'Consolidation Discussion', ar: 'مراجعة النقاش' },
  'paragraph-rehearsal': { en: 'Paragraph Rehearsal', ar: 'تمرين الفقرة' },
  assessment: { en: 'Assessment', ar: 'التقييم' },
}

export type Lesson = {
  focus: LessonFocus
  skillCodes: string[]
  whatStudentsDo: LocalizedString
  task: LocalizedString
  successCriteria: LocalizedString
}

export type Week = {
  number: number
  pages?: string
  keyVocabulary: LocalizedString[]
  lessons: Lesson[]
  homework?: LocalizedString
  contextNote?: LocalizedString
}

// ─── Terms + Years ────────────────────────────────────────────────────

export type HalfTermId = '1.1' | '1.2' | '2.1' | '2.2' | '3.1' | '3.2'

export type HalfTerm = {
  id: HalfTermId
  label: LocalizedString
  weeks: Week[]
  assessment?: LocalizedString
}

export type Term = {
  number: 1 | 2 | 3
  label: LocalizedString
  overview: LocalizedString
  setText: LocalizedString
  vocabularyThemes: LocalizedString[]
  halfTerms: HalfTerm[]
  bigSkillJump: LocalizedString
}

export type Year = {
  number: YearNumber
  name: LocalizedString
  overview: LocalizedString
  yearlyExpectations: Record<Strand, LocalizedString[]>
  rubric: RubricCell[]
  terms: Term[]
}

// ─── Whole curriculum ─────────────────────────────────────────────────

export type KS3Curriculum = {
  years: Year[]
  skillCodes: SkillCode[]
  endOfKS3: {
    overview: LocalizedString
    byStrand: {
      strand: Strand | 'grammar' | 'literary'
      label: LocalizedString
      bullets: LocalizedString[]
    }[]
    expectedAtEnd: {
      strand: Strand
      bullets: LocalizedString[]
    }[]
  }
}

// ─── Helper functions ─────────────────────────────────────────────────

export function findSkill(curriculum: KS3Curriculum, id: string): SkillCode | undefined {
  return curriculum.skillCodes.find((s) => s.id === id)
}

export function getYear(curriculum: KS3Curriculum, year: YearNumber): Year | undefined {
  return curriculum.years.find((y) => y.number === year)
}

export function getTerm(
  curriculum: KS3Curriculum,
  year: YearNumber,
  term: 1 | 2 | 3,
): Term | undefined {
  return getYear(curriculum, year)?.terms.find((t) => t.number === term)
}

export function getHalfTerm(
  curriculum: KS3Curriculum,
  year: YearNumber,
  half: HalfTermId,
): HalfTerm | undefined {
  const termNumber = Number(half.split('.')[0]) as 1 | 2 | 3
  return getTerm(curriculum, year, termNumber)?.halfTerms.find((h) => h.id === half)
}

export function getWeek(
  curriculum: KS3Curriculum,
  year: YearNumber,
  half: HalfTermId,
  weekNumber: number,
): Week | undefined {
  return getHalfTerm(curriculum, year, half)?.weeks.find((w) => w.number === weekNumber)
}

export function listWeeks(
  curriculum: KS3Curriculum,
  year: YearNumber,
): { half: HalfTermId; week: Week }[] {
  const y = getYear(curriculum, year)
  if (!y) return []
  return y.terms.flatMap((t) =>
    t.halfTerms.flatMap((h) => h.weeks.map((w) => ({ half: h.id, week: w }))),
  )
}
