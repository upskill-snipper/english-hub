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

// ─── D13: /faqs ─────────────────────────────────────────────────────────────

describe('/faqs makes no promise the code does not keep', () => {
  // The visible answers come from faqs.* keys; faq-data.ts is the English
  // FAQPage JSON-LD that search engines read. Both are checked.
  const VISIBLE = [
    'faqs.g2.a',
    'faqs.a1.a',
    'faqs.a2.a',
    'faqs.a3.q',
    'faqs.a3.a',
    'faqs.pr1.a',
    'faqs.pr3.a',
    'faqs.pr5.a',
  ]

  const BROKEN_PROMISES: [RegExp, string][] = [
    [/20-40|٢٠-٤٠/, 'a marking time'],
    [
      /under 10 minutes|menos de 10 minutos|أقل من ١٠ دقايق|real time|tiempo real/i,
      'a class marked in minutes',
    ],
    [/confidence level|nivel de confianza|مستوى ثقة/i, 'a confidence flag on every response'],
    [/re-?marks? within|48 hours|48 horas|٤٨ ساعة|human-reviewed on request/i, 'a human re-mark'],
    [/\/compliance/, 'a DPIA at a page that is a 404'],
    [
      /lesson planning|worksheet builder|class analytics/i,
      'Teacher-plan features in the school portal',
    ],
    [
      /you only add payment when the trial ends|every plan starts with a/i,
      'one trial for every plan',
    ],
  ]

  async function answers(): Promise<string[]> {
    const { FAQ_JSON_LD_DATA } = await import('@/app/faqs/faq-data')
    return FAQ_JSON_LD_DATA.flatMap((f) => [f.question, f.answer])
  }

  it.each(BROKEN_PROMISES)('the visible FAQ makes no %s claim (%s)', (pattern) => {
    for (const key of VISIBLE) {
      const copy = inEveryLocale(key)
      for (const locale of LOCALES) expect(copy[locale], `${key}/${locale}`).not.toMatch(pattern)
    }
  })

  it.each(BROKEN_PROMISES)('the FAQ JSON-LD makes no %s claim (%s)', async (pattern) => {
    for (const text of await answers()) expect(text).not.toMatch(pattern)
  })

  it('promises parents no weekly report that is never sent', async () => {
    for (const key of ['faqs.g2.a', 'faqs.pr3.a', 'faqs.pr5.a']) {
      const en = lookup(key, 'en')
      const promises = /weekly progress reports/i.test(en) && !/not sent|finalised/i.test(en)
      expect(promises, key).toBe(false)
    }
    for (const text of await answers()) {
      expect(/for weekly progress reports/i.test(text), text.slice(0, 60)).toBe(false)
    }
  })
})

// ─── D14: /affiliates and /creators ─────────────────────────────────────────

describe('the partner pages describe the commission the code pays', () => {
  // One flat commission per converted checkout, confirmed after 60 days, never
  // again on renewal (src/lib/affiliate/tiers.ts; invoice.paid books nothing).
  // The payout cadence has three versions in the code, so none is stated.
  const RECURRING =
    /recurring|for as long as|lifetime|recurrente|mientras el cliente|متكرّرة|متكررة|طول ما/i
  const CADENCE =
    /paid monthly|monthly (payouts?|schedule)|get paid monthly|pagos? mensual|cobra mensualmente|periodicidad mensual|شهرياً|دفعات شهرية|جدول شهري/i

  async function partnerKeys(): Promise<string[]> {
    const { EN_MESSAGES } = await import('@/lib/i18n/generated/en')
    return Object.keys(EN_MESSAGES).filter(
      (k) =>
        k.startsWith('aff_comp.public.') ||
        k.startsWith('creators.') ||
        k.startsWith('affiliates.public.meta.'),
    )
  }

  it('found the partner copy to check', async () => {
    expect((await partnerKeys()).length).toBeGreaterThan(80)
  })

  it('promises no recurring commission, in any locale', async () => {
    for (const key of await partnerKeys()) {
      for (const locale of LOCALES) {
        expect(lookup(key, locale), `${key}/${locale}`).not.toMatch(RECURRING)
      }
    }
  })

  it('states no payout cadence, in any locale', async () => {
    for (const key of await partnerKeys()) {
      for (const locale of LOCALES) {
        expect(lookup(key, locale), `${key}/${locale}`).not.toMatch(CADENCE)
      }
    }
  })

  it('claims no tracking window longer than the 30-day cookie, and no audience size', () => {
    expect(lookup('affiliates.public.meta.description', 'en')).not.toMatch(/90-day/)
    expect(code('src/app/creators/layout.tsx')).not.toMatch(/thousands|publish courses/i)
  })
})

// ─── E15: no time is promised for AI marking ────────────────────────────────

describe('no page promises how fast AI marking is', () => {
  // By /api/marking/run's own measurements the AI's writing alone takes about
  // 17 to 46 seconds, with up to 23 seconds of work around it. The pages said
  // "5-15 seconds", "a few seconds", "20-40 seconds", "in seconds", "in
  // minutes", "under a minute", "in 60 seconds" and "instant". TEHC-079
  // section 9: state no time at all.
  const SPEED =
    /\d+\s*-\s*\d+\s*(seconds|segundos|ثانية)|\d+ a \d+ segundos|seconds|segundos|ثواني|in minutes|en minutos|دقايق|دقائق|under a minute|in a minute|instant|al instante|instantáne|فوري/i

  const KEYS = [
    'marking.submit.wait_note',
    'marking.marking_takes_seconds',
    'marking.lead',
    'about.approach.ai.desc',
    'about.glance.ai_label',
    'help.te.q4.a',
    'dash.marking_cta.blurb',
    'analysis.revision.footer.body',
    'analysis.slug.cta_block_prompt',
    'text_hub.exam_blurb',
    'mkt.schools.meta.description',
    'mkt.schools.hero.lede',
    'resources.eng_lit.ai.sub',
    'resources.eng_lang.ai.h2',
    'study.skills.ws.ai.body',
    'study.skills.ws.practice.subtitle',
    'ielts.writing.hero.subtitle',
    'ielts.writing.submit.loading_note',
    'ielts.hubx.loop.feedback.detail',
    'ielts.hubx.why.heading',
    'ielts.hubx.why.instant.title',
    'ielts.hubx.why.instant.body',
    'ielts.hubx.more.admissions.body',
    'ielts.hub.subtitle',
    'ielts.guide.cta.body',
    'ielts.partners.overview.hero.lede',
    'ielts.partners.overview.offer.feedback.title',
    'ielts.partners.overview.offer.feedback.body',
    'ielts.partners.schools.features.feedback.title',
    'ielts.partners.schools.features.feedback.body',
    'ielts.partners.agencies.features.feedback.title',
    'ielts.partners.agencies.features.feedback.body',
  ]

  it.each(KEYS)('%s states no time for AI feedback, in any locale', (key) => {
    const copy = inEveryLocale(key)
    for (const locale of LOCALES) expect(copy[locale], `${key}/${locale}`).not.toMatch(SPEED)
  })

  it('gives the real length limit, not "No upper limit"', () => {
    // /api/submissions refuses answers over 30,000 characters.
    expect(lookup('marking.submit.no_upper_limit', 'en')).toMatch(/30,000/)
    expect(lookup('marking.submit.no_upper_limit', 'es')).toMatch(/30\.000/)
  })

  // Hardcoded copy: metadata, page text, the school welcome email and the
  // posts partners copy and publish.
  const AI_SPEED =
    /instant(ly)?,?[^.\n`]{0,40}(feedback|marking|band)|(feedback|marking|marks|grades?|band)[^.\n`]{0,80}(in seconds|within (a few )?seconds|in a minute|under a minute|60 seconds|~60s|in minutes)/i

  it.each([
    'src/app/marking/layout.tsx',
    'src/app/page.tsx',
    'src/app/pricing/page.tsx',
    'src/app/practice/layout.tsx',
    'src/app/for-teachers/free-resources/page.tsx',
    'src/app/toolkit/critic/layout.tsx',
    'src/app/for-parents/page.tsx',
    'src/app/resources/revision-notes/[slug]/page.tsx',
    'src/app/ielts/writing/layout.tsx',
    'src/app/ielts/partners/page.tsx',
    'src/app/ielts/partners/for-schools/layout.tsx',
    'src/lib/email-templates.ts',
    'src/components/affiliates/AffiliatePublicPage.tsx',
    'src/components/affiliates/AffiliateResources.tsx',
    'src/lib/email/affiliate-welcome.ts',
  ])('%s promises no speed for AI feedback', (rel) => {
    expect(code(rel)).not.toMatch(AI_SPEED)
  })

  it('gives partners no post that claims examiners built the site or a code gives a trial', () => {
    for (const rel of [
      'src/components/affiliates/AffiliatePublicPage.tsx',
      'src/lib/email/affiliate-welcome.ts',
    ]) {
      const src = code(rel)
      expect(src, rel).not.toMatch(/Built by real examiners|real examiner mark schemes/)
      expect(src, rel).not.toMatch(/code \$\{code\}[^`]{0,40}(7 days free|7-day free trial)/)
      expect(src, rel).not.toMatch(/as many essays as you want/)
    }
    expect(code('src/app/page.tsx')).not.toMatch(/trusted by schools/i)
  })
})

// ─── E16: /mock-exams ───────────────────────────────────────────────────────

describe('/mock-exams says what a mock paper does', () => {
  // The paper page marks multiple choice only and hands a written answer to
  // /marking/submit; no grade-boundary table is verified; the paper page has
  // one model answer; answers live in the page until submitted. TEHC-079
  // states no mock-paper count.
  const CLAIMS =
    /\d{2,}|٣|٧|٦٠|seconds|segundos|ثانية|instant|instantáne|فوري|real exam board grade boundaries|accurate grade boundaries|notas de corte (reales|precisas)|saved automatically|se guardan automáticamente|تنحفظ تلقائياً|Grade 4-5, Grade 6-7|single most effective/i

  const KEYS = [
    'mock.hero_headline',
    'mock.hero_subhead',
    'mock.stat_papers',
    'mock.how_mocks_help_desc',
    'mock.step_track_title',
    'mock.step_track_desc',
    'mock.step_model_desc',
    'mock.step_weak_desc',
    'mock.step_ai_desc',
    'mock.choose_paper_prefix',
    'mock.choose_paper_suffix',
    'mock.more_papers_note',
    'mock.cond_autosave',
  ]

  it.each(KEYS)('%s claims no count, speed, grade boundary or autosave', (key) => {
    const copy = inEveryLocale(key)
    for (const locale of LOCALES) expect(copy[locale], `${key}/${locale}`).not.toMatch(CLAIMS)
  })

  it('prints no count of extra papers on the page', () => {
    const page = code('src/app/mock-exams/page.tsx')
    expect(page).not.toMatch(/more_papers_(prefix|middle|suffix)/)
    expect(page).toContain("t('mock.more_papers_note')")
  })

  it('does not say a submitted mock is marked by AI trained on mark schemes, on /faqs either', async () => {
    const AI_TRAINED =
      /trained on (official|real) mark schemes|entrenada con esquemas|مدرّب على مخططات/i
    for (const key of ['faqs.c2.a', 'faqs.g7.a']) {
      const copy = inEveryLocale(key)
      for (const locale of LOCALES) {
        expect(copy[locale], `${key}/${locale}`).not.toMatch(AI_TRAINED)
        expect(copy[locale], `${key}/${locale}`).not.toMatch(/unmatched|inigualable|ما لها مثيل/i)
      }
    }
    const { FAQ_JSON_LD_DATA } = await import('@/app/faqs/faq-data')
    for (const f of FAQ_JSON_LD_DATA) expect(f.answer).not.toMatch(AI_TRAINED)
  })
})

// ─── E17: who can see a pupil's game results ────────────────────────────────

describe('/games/texts says who can see a pupil’s game results', () => {
  it('no longer tells a pupil nobody else can see them, and names the teacher', () => {
    // Since 747b7b7e a class teacher (and the school's heads of department
    // and administrators) can see a pupil's game results from the day the
    // pupil joined the class.
    const copy = inEveryLocale('text_games.privacy')
    expect(copy.en).not.toMatch(/nobody else/i)
    expect(copy.es).not.toMatch(/nadie más/i)
    expect(copy.ar).not.toMatch(/محد غيرك/)
    expect(copy.en).toMatch(/your teacher/)
    expect(copy.en).toMatch(/nothing is sent to us/)
  })
})

// ─── E18: the study tools save in the browser ───────────────────────────────

describe('/resources/study-tools says where its tools save', () => {
  // The planner, checklists, flashcards and testers use localStorage only;
  // progress sync carries none of their keys. The planner counts down and
  // gives stage tips; it builds no schedule.
  const ACCOUNT = /to your account|en tu cuenta|في حسابك/i
  const SCHEDULE =
    /builds you a study schedule|auto-balanced|personalised, phase-based revision plan|te construye|te crea un horario|يبني لك جدول/i

  it.each([
    'resources.study_tools.subtitle',
    'resources.study_tools.rp.desc',
    'resources.study_tools.rp.feat.plan',
    'resources.study_tools.rp.feat.checklist',
    'resources.study_tools.cl.desc',
    'resources.study_tools.cl.feat.autosave',
    'resources.study_tools.planner.subtitle',
  ])('%s claims no account saving and no built schedule', (key) => {
    const copy = inEveryLocale(key)
    for (const locale of LOCALES) {
      expect(copy[locale], `${key}/${locale}`).not.toMatch(ACCOUNT)
      expect(copy[locale], `${key}/${locale}`).not.toMatch(SCHEDULE)
    }
  })

  it('defines the checklist card keys the page asks for once a board is chosen', () => {
    // Without them the card printed "[[resources.study_tools.cl.lang_suffix]]".
    for (const key of [
      'resources.study_tools.cl.lang_suffix',
      'resources.study_tools.cl.lit_suffix',
      'resources.study_tools.cl.topic_tracker',
      'resources.study_tools.cl.autosave_label',
    ]) {
      const copy = inEveryLocale(key)
      for (const locale of LOCALES) expect(copy[locale], `${key}/${locale}`).not.toMatch(ACCOUNT)
    }
  })
})

// ─── E19: /for-parents ──────────────────────────────────────────────────────

describe('/for-parents describes the parent dashboard that exists', () => {
  // The parent dashboard shows the children a parent is linked to (by each
  // child's invite code) and weekly summaries that are not produced yet. Its
  // own header lists working-at grades and exam-readiness scores as
  // deliberately absent (src/app/dashboard/parent/page.tsx).
  const page = code('src/app/for-parents/page.tsx')

  it('promises no grade, estimate, alert, chart or feed the dashboard lacks', () => {
    for (const gone of [
      /Working At Grade/i,
      /a progress estimate -/i,
      /Exam readiness score/i,
      /Weak Area Alerts/i,
      /Progress Charts/i,
      /Real-Time Activity Feed/i,
      /Recommended Next Steps/i,
      /modules completed, quiz scores/i,
      /their email or a unique invite code/i,
    ]) {
      expect(page, String(gone)).not.toMatch(gone)
    }
  })

  it('quotes no unsourced tutor price', () => {
    expect(page).not.toMatch(/£\d+ to £\d+ per hour/)
  })

  it('says the same in the translated hero and closing lines', () => {
    const hero = inEveryLocale('audience.parents.hero.sub')
    expect(hero.en).not.toMatch(/real-time|exam readiness/i)
    expect(hero.es).not.toMatch(/tiempo real|preparación para el examen/i)
    expect(hero.ar).not.toMatch(/لحظية|جاهزيته للامتحان/)
    const close = inEveryLocale('audience.parents.final.sub')
    expect(close.en).not.toMatch(/progress tracking/i)
    expect(close.es).not.toMatch(/seguimiento del progreso/i)
    expect(close.ar).not.toMatch(/تتبّع التقدّم/)
  })
})

// ─── E20: the human review request ──────────────────────────────────────────

describe('a human review request promises no reviewer, reply or deadline', () => {
  // The request is saved to human_review_requests, which no staff screen,
  // cron job or email reads.
  const PROMISE =
    /a human will|will review your work|qualified reviewer|school days|notify you by email|revisará tu trabajo|te responderá|بيراجع|بيشيكه|مراجع مؤهّل/i

  it.each([
    'ai_oversight.dialog_description',
    'ai_oversight.success',
    'ai_oversight.success_with_ref',
    'dash.review_req.done_body',
  ])('%s promises no human reply', (key) => {
    const copy = inEveryLocale(key)
    for (const locale of LOCALES) expect(copy[locale], `${key}/${locale}`).not.toMatch(PROMISE)
  })

  it('the API gives no response time, and the button falls back to the same copy', () => {
    expect(code('src/app/api/review/route.ts')).not.toMatch(/school days/)
    const button = code('src/components/ai/RequestHumanReviewButton.tsx')
    expect(button).not.toMatch(PROMISE)
    expect(code('src/app/dashboard/review/request/page.tsx')).not.toContain(
      'dash.review_req.email_notify',
    )
  })
})

// ─── E21: links to pages that do not exist ──────────────────────────────────

describe('no privacy or compliance link leads to a 404', () => {
  it('sends /privacy to the policy, which lives at /legal/privacy', async () => {
    // The mobile app opens https://theenglishhub.app/privacy as its privacy
    // link; until 16 October 2026 that was a 404.
    const { default: table } = await import('@/lib/seo/route-redirects.json')
    const rule = (table.redirects as { source: string; destination: string }[]).find(
      (r) => r.source === '/privacy',
    )
    expect(rule?.destination).toBe('/legal/privacy')
  })

  it('points no FAQ or page at /compliance, /dpa or /sub-processors', () => {
    for (const locale of LOCALES) {
      expect(lookup('faqs.pr1.a', locale)).not.toMatch(/\/compliance|\/dpa\b|\/sub-processors/)
    }
    expect(code('src/app/faqs/faq-data.ts')).not.toMatch(/\/compliance|\/dpa\b|\/sub-processors/)
  })
})

// ─── F22: every comic text's guide page shows its annotated extracts ────────

describe('every text drawn as a comic shows its extracts on its guide page', () => {
  // Antony and Cleopatra's guide page is the catch-all stub, which mounted no
  // guide, so it was the one comic text of 22 with no annotated extracts.
  it('mounts the guide supplement wherever a comic text is served', async () => {
    const { COMIC_LOADERS } = await import('@/data/comics')
    const slugs = Object.keys(COMIC_LOADERS)
    expect(slugs.length).toBeGreaterThanOrEqual(22)
    const catchAll = code('src/app/revision/texts/[slug]/page.tsx')
    for (const slug of slugs) {
      const rel = `src/app/revision/texts/${slug}/page.tsx`
      let own: string | null = null
      try {
        own = code(rel)
      } catch {
        own = null
      }
      if (own !== null) {
        expect(own, rel).toMatch(/<GuideSupplement|<FullStudyGuide/)
      } else {
        expect(catchAll, `${slug} is served by the catch-all`).toMatch(
          /hasOwnProperty\.call\(COMIC_LOADERS, text\.slug\)[\s\S]*<GuideSupplement guide=\{comicGuide\}/,
        )
      }
    }
  })
})

// ─── F23: Animal Farm is in the UK public domain ────────────────────────────

describe('no page calls Animal Farm restricted', () => {
  // Calum ruled on 26 September 2026 that the site works to UK law only.
  // Orwell died in 1950; UK copyright ended on 31 December 2020.
  const RESTRICTED =
    /estate-enforced|estate-licensed|UK rights still active|Estate of George Orwell|actively manages educational use|Animal Farm[^.]{0,60}restricted|restricted \(Orwell estate\)/i

  it.each([
    'src/app/revision/common-errors/page.tsx',
    'src/app/resources/authors/page.tsx',
    'src/app/resources/revision-notes/animal-farm/page.tsx',
    'src/app/resources/english-literature/edexcel/animal-farm/page.tsx',
  ])('%s', (rel) => {
    expect(code(rel)).not.toMatch(RESTRICTED)
  })

  it.each([
    'rev.texts.af.extract.rights_notice',
    'rev.texts.af.rights_notice',
    'rev.texts.af.rights_notice_short',
  ])('%s says public domain and nothing of the estate or the US', (key) => {
    const copy = inEveryLocale(key)
    expect(copy.en).toMatch(/public domain in the UK since 1 January 2021/)
    for (const locale of LOCALES) {
      expect(copy[locale], `${key}/${locale}`).not.toMatch(
        /AM Heath|2041|United States|Estados Unidos/,
      )
    }
  })
})

// ─── F24 and F25: two exam-technique examples that taught an error ──────────

describe('the exam-technique examples are true to the texts and the terms', () => {
  it('does not say Hyde is first described in the third chapter (F24)', () => {
    // Utterson sees him, "pale and dwarfish", in Chapter 2.
    const page = code('src/app/revision/exam-technique/grade-9-secrets/page.tsx')
    expect(page).not.toMatch(/until the third chapter/)
    expect(page).toMatch(/Full Statement of the Case/)
  })

  it('does not call a parallel sentence chiasmus (F25)', () => {
    // "I am malicious because I am miserable" repeats its order; chiasmus
    // reverses it.
    const page = code('src/app/revision/exam-technique/common-mistakes/page.tsx')
    expect(page).not.toMatch(/chiasm/i)
    expect(page).toMatch(/parallel structure/)
  })
})

// ─── F27: Ozymandias as AQA's anthology prints it ───────────────────────────

describe('the AQA Ozymandias quotations follow the anthology', () => {
  // AQA prints "king of kings:" and "Look on my works" in lower case
  // (src/data/aqa-poetry-power-conflict.ts, note of 2 October 2026).
  it.each(['src/data/comparison-essay-guide.ts', 'src/data/analysis/category-context.ts'])(
    '%s',
    (rel) => {
      const src = code(rel)
      expect(src).not.toMatch(/Look on my Works/)
      expect(src).not.toMatch(/king of kings;/)
    },
  )
})
