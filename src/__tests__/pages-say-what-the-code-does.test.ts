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

// ─── D11: the teacher sign-up and the /pricing Teacher card ─────────────────

describe('a teacher is sold only what a Teacher plan gives', () => {
  // A sign-up promising lesson plans, analytics and homework that live in the
  // school portal, hours saved with no source, and "unlimited" use of capped
  // tools. On the web a Teacher plan unlocks what a Student plan does.
  const OVERCLAIM = /300\+|\b5\+|save hours|hours every week|unlimited|ilimitad|بلا حدود|ساعات/i

  it.each([
    'auth.teacher.subtitle',
    'auth.register.teacher_subtitle',
    'auth.teacher.demo_ready_body',
    'auth.teacher.benefit.ai_marking',
    'auth.teacher.benefit.examiner',
    'auth.teacher.benefit.mock_papers',
    'auth.teacher.benefit.free_resources',
    'auth.teacher.benefit.free_ai_uses',
    'auth.register.teacher_banner_body',
    'auth.register.teacher_after_verify',
    'pricing.teacher.tagline_hours',
  ])('%s promises no hours, lesson-plan bank or unlimited use', (key) => {
    const copy = inEveryLocale(key)
    for (const locale of LOCALES) expect(copy[locale], `${key}/${locale}`).not.toMatch(OVERCLAIM)
    expect(copy.en).not.toMatch(/lesson plan/i)
  })

  it('lists on the sign-up only what a teacher signing up gets', () => {
    const page = code('src/app/auth/teacher-register/page.tsx')
    expect(page).not.toMatch(/auth\.teacher\.benefit\.(lesson_plans|analytics|homework)/)
    expect(page).toContain("'auth.teacher.benefit.examiner'")
  })

  it('lists on the Teacher card only features that exist and come with the plan', () => {
    const page = code('src/app/pricing/page.tsx')
    for (const gone of [
      'view_student_list',
      'lesson_plans',
      'worksheet_builder',
      'mark_scheme_gen',
      'ppt_word_export',
      'class_analytics',
      'student_reports',
      'dept_benchmarking',
    ]) {
      expect(page, gone).not.toContain(gone)
    }
    expect(lookup('pricing.faq.a4', 'en')).toMatch(/same access as the Student plan/)
  })

  it('does not tell a student the examiner tool is Teacher-plan only', () => {
    // The gate checks for any paid plan or the trial, and nothing else.
    const gate = code('src/lib/marking/examiner/gate.ts')
    expect(gate).not.toMatch(/part of the Teacher plan/)
    expect(gate).toContain('hasActiveSubscription(')
  })
})

// ─── D12: /pricing ──────────────────────────────────────────────────────────

describe('/pricing says what is free, what a price was and when there is a trial', () => {
  const page = code('src/app/pricing/page.tsx')

  it('calls only the first module of each course free', () => {
    // "Exam-board aligned courses" sat under "Always free"; modules 2 onwards
    // need a plan.
    const copy = inEveryLocale('pricing.feat.student_free.exam_aligned')
    expect(copy.en).toMatch(/first module/i)
    for (const key of ['pricing.faq.a1']) {
      const en = lookup(key, 'en')
      expect(en).toMatch(/first module of every course/)
      expect(en).not.toMatch(/lesson plans/i)
    }
  })

  it('lists exam technique and mock papers by board as free, not Premium', () => {
    expect(page).not.toContain('student_premium.mock_exams')
    expect(page).not.toContain('student_premium.exam_technique')
    expect(page).toContain("'pricing.feat.student_free.exam_technique'")
    expect(page).toContain("'pricing.feat.student_free.mock_papers'")
    inEveryLocale('pricing.feat.student_free.exam_technique')
    inEveryLocale('pricing.feat.student_free.mock_papers')
  })

  it('never strikes through a planned price or calls it what a plan "was"', () => {
    // £7.99, £11.99 and "(was £99/year)" had never been charged.
    expect(page).not.toContain('was_strikethrough_prefix')
    expect(page).not.toMatch(/line-through/)
    expect(code('src/app/account/billing/page.tsx')).not.toMatch(/line-through/)
    expect(lookup('pricing.planned_standard_prefix', 'en')).toBe('planned standard')
    expect(lookup('account.billing.standard', 'en')).toMatch(/planned/i)
  })

  it('does not promise a free trial on every paid plan', () => {
    // A discounted annual plan is charged at once (/api/promo/redeem).
    const layout = code('src/app/pricing/layout.tsx')
    expect(layout).not.toMatch(/every paid plan|every\+paid\+plan/i)
    expect(layout).toMatch(/new account starts with a 7-day free trial/)
    const press = inEveryLocale('press.product.pricing.pupil_body')
    expect(press.en).not.toMatch(/all paid plans/i)
    expect(press.es).not.toMatch(/todos los planes de pago/i)
    expect(press.ar).not.toMatch(/كل الباقات المدفوعة/)
    for (const key of ['pricing.trial_line_card_on_file', 'pricing.faq.a2']) {
      expect(lookup(key, 'en'), key).toMatch(/discount code.*charged at once/)
    }
  })

  it('does not label a code purchase "Start 7-day free trial"', () => {
    // Both annual buttons switch label once a code is applied.
    const switches =
      page.match(/codeField\.appliedCode\s*\?\s*t\('pricing\.pay_with_code'\)/g) ?? []
    expect(switches).toHaveLength(2)
    inEveryLocale('pricing.pay_with_code')
  })
})
