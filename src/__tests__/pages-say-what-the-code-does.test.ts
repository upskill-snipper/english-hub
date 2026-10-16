import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { lookup } from '@/lib/i18n/dictionary'

/**
 * Live pages that said what the code does not do.
 *
 * FOUND 16 October 2026, by three read-only fact-checks of the pages a social
 * campaign and a schools outreach were about to send people to. The worst was
 * on 78 set-text and poem pages: a "Self-Study" panel told a child "Working at
 * Grade 6-7" because their answer was over 200 words, under the label "AI
 * Feedback", after a 1.5 second pause that called nothing.
 *
 * Every block below pins one correction, in every locale where the copy is
 * translated. The assertions are about what the code does, so each one should
 * change only when the product changes: if a feature is built, update the copy
 * and the test together, in the same commit.
 */

const LOCALES = ['en', 'ar', 'es'] as const

/** Source with comments removed: the docblocks quote the old wording. */
function code(rel: string): string {
  const raw = readFileSync(join(process.cwd(), rel), 'utf8')
  return raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
}

/** A key that exists in every locale, or a failure naming which is missing. */
function inEveryLocale(key: string): Record<(typeof LOCALES)[number], string> {
  const out = {} as Record<(typeof LOCALES)[number], string>
  for (const locale of LOCALES) {
    const s = lookup(key, locale)
    expect(s, `${key}/${locale} is missing`).toBeTruthy()
    expect(s, `${key}/${locale} is missing`).not.toMatch(/^\[\[/)
    out[locale] = s
  }
  return out
}

// ─── A1: the Self-Study panel ───────────────────────────────────────────────

describe('the Self-Study panel names no grade it cannot know', () => {
  const engine = code('src/components/study/InlineStudyEngine.tsx')

  it('prints no "Working at Grade", in the quiz or the essay box', () => {
    expect(engine).not.toMatch(/working at grade/i)
    expect(engine).not.toContain('quiz.working_at_grade')
    // The word-count grade: `wordCount > 200 ? '6-7' : ...`.
    expect(engine).not.toMatch(/'\d-\d'/)
  })

  it('does not pretend to mark: no "AI Feedback" label and no staged delay', () => {
    expect(engine).not.toContain('essay.ai_feedback')
    expect(engine).not.toContain('essay.get_feedback')
    expect(engine).not.toContain('setTimeout')
  })

  it('takes the answer to the real marker rather than inventing a mark', () => {
    expect(engine).toContain('saveMarkingDraft(')
    expect(engine).toContain('markingLink(')
  })

  const PANEL_KEYS = [
    'essay.check_answer',
    'essay.self_check_heading',
    'essay.self_check_intro',
    'essay.self_check_1',
    'essay.self_check_2',
    'essay.self_check_3',
    'essay.self_check_4',
    'essay.self_check_5',
    'essay.self_check_6',
    'essay.ai_marking_heading',
    'essay.ai_marking_body',
    'essay.ai_marking_link',
    'essay.ai_marking_hint',
    'essay.back_to_answer',
    'quiz.excellent_understanding',
  ]

  it.each(PANEL_KEYS)('%s exists in every locale, with no grade and no exclamation', (key) => {
    const copy = inEveryLocale(key)
    for (const locale of LOCALES) {
      expect(copy[locale], `${key}/${locale}`).not.toMatch(/grade\s*\d|\d\s*-\s*\d/i)
      expect(copy[locale], `${key}/${locale}`).not.toMatch(/[!¡]/)
    }
  })

  it('says what AI marking is before sending anyone to it', () => {
    // The hand-off must not oversell the thing it hands off to: AI marking is
    // written by AI, its grade is a practice estimate, A level is not covered,
    // and it is not free.
    const en = lookup('essay.ai_marking_body', 'en')
    expect(en).toMatch(/labelled as AI/)
    expect(en).toMatch(/practice estimate/)
    expect(en).toMatch(/not A level/)
    expect(en).toMatch(/plan/)
  })
})

// ─── A2: the /revision sidebar's target grade ───────────────────────────────

describe('the /revision sidebar shows a target grade only when the student set one', () => {
  const shell = code('src/app/revision/_components/revision-shell.tsx')

  function withStorage(entries: Record<string, string>, read: () => unknown): unknown {
    const g = globalThis as { localStorage?: unknown }
    const before = g.localStorage
    g.localStorage = { getItem: (k: string) => entries[k] ?? null }
    try {
      return read()
    } finally {
      g.localStorage = before
    }
  }

  it('reads the target through the one shared reader, which has no default', async () => {
    const { readExplicitTargetGrade } = await import('@/lib/revision/target-grade')
    expect(shell).toContain('readExplicitTargetGrade()')
    expect(withStorage({}, readExplicitTargetGrade)).toBeNull()
    expect(
      withStorage(
        { 'english-hub-study-plan': JSON.stringify({ answers: { grade: '6-7' } }) },
        readExplicitTargetGrade,
      ),
    ).toBe(7)
    expect(withStorage({ 'english-hub-target-grade': '5' }, readExplicitTargetGrade)).toBe(5)
    // Out of range is "not set", never clamped into a grade.
    expect(withStorage({ 'english-hub-target-grade': '12' }, readExplicitTargetGrade)).toBeNull()
  })

  it('draws no bar that maps clicks or quiz averages onto grades', () => {
    // The old card filled a "Grade 5 to Grade 7" bar with sections visited,
    // or with a quiz and essay average divided by invented boundaries.
    expect(shell).not.toContain('GRADE_PERCENT_THRESHOLDS')
    expect(shell).not.toContain('/api/profile/grade-progress')
    expect(shell).not.toContain('<Progress')
    expect(shell).not.toMatch(/return 7\b/)
  })

  it('offers a way to set a target instead of inventing one', () => {
    expect(shell).toContain("t('revision_page.pill.set_target')")
    expect(shell).toContain('/revision/study-plan')
    inEveryLocale('revision_page.pill.set_target')
  })
})
