'use client'

/**
 * EAL (English as Additional Language) landing page.
 *
 * Designed for Arabic L1 learners. Lists all topics grouped by category
 * (grammar, sentence structure, vocabulary, pronunciation, common errors).
 *
 * Bilingual via the existing `useLocale` hook — every `LocalizedString`
 * resolves to EN, AR, or stacked depending on the eh-lang cookie.
 */

import Link from 'next/link'
import { EAL } from '@/lib/eal/curriculum'
import {
  EAL_CATEGORY_LABEL,
  EAL_CATEGORY_DESCRIPTION,
  type EALCategory,
  loc,
} from '@/lib/eal/types'
import { useLocale } from '@/lib/i18n/use-locale'

const CATEGORY_ORDER: EALCategory[] = [
  'sentence',
  'grammar',
  'vocabulary',
  'pronunciation',
  'common_errors',
]

const CATEGORY_COLOUR: Record<EALCategory, string> = {
  sentence: 'border-amber-400/40 bg-amber-500/[0.04]',
  grammar: 'border-primary/40 bg-primary/[0.04]',
  vocabulary: 'border-teal-700/40 bg-teal-700/[0.04]',
  pronunciation: 'border-violet-500/40 bg-violet-500/[0.04]',
  common_errors: 'border-red-500/40 bg-red-500/[0.04]',
}

export default function EALLandingPage() {
  const locale = useLocale()

  const groups: Record<EALCategory, typeof EAL.topics> = {
    sentence: [],
    grammar: [],
    vocabulary: [],
    pronunciation: [],
    common_errors: [],
  }
  EAL.topics.forEach((t) => groups[t.category].push(t))

  const t = (s: { en: string; ar?: string }) => loc(s, locale)

  return (
    <main className="prose prose-stone mx-auto max-w-4xl px-6 py-12 dark:prose-invert">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        {locale === 'ar' ? 'EAL · للناطقين بالعربية' : 'EAL · For Arabic speakers'}
      </p>
      <h1>
        {locale === 'ar'
          ? 'تعلّم الإنجليزية: المهارات الأساسية'
          : 'English Skills for Arabic Speakers'}
      </h1>
      <p className="lead">
        {locale === 'ar'
          ? 'دروس مركّزة على النقاط اللي يتعثر فيها متحدّث العربي عادةً وقت دراسة الإنجليزي للامتحانات البريطانية: ترتيب الكلمات، الأزمنة، أدوات التعريف، حروف الجر، الأخطاء الشائعة. كل درس بيظهر بالعربي والإنجليزي معاً.'
          : 'Focused lessons on the points Arabic L1 students most often stumble on when studying English for UK exams: word order, tenses, articles, prepositions, common errors. Every lesson is bilingual.'}
      </p>

      <Link
        href="/games"
        className="not-prose my-6 block rounded-xl border border-primary/30 bg-primary/[0.04] p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.07]"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
          {locale === 'ar' ? 'تعلّم باللعب' : 'Learn through play'}
        </p>
        <h2 className="mt-1 text-lg font-bold tracking-tight text-foreground">
          {locale === 'ar' ? 'العاب الإنجليزية للمبتدئين ←' : 'English games for beginners →'}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {locale === 'ar'
            ? 'أكثر من ١٥ لعبة سهلة وممتعة: مطابقة الصور بالكلمات، أدوات التعريف، الأزمنة، حروف الجر، الأرقام والوقت، والمزيد — مع تصحيح فوري ونقاط.'
            : '18+ friendly games: picture–word match, articles, the verb “to be”, tenses, prepositions, numbers & time, phrasal verbs and more — with instant feedback and scores.'}
        </p>
      </Link>

      {CATEGORY_ORDER.map((cat) => {
        const topics = groups[cat]
        if (topics.length === 0) return null
        return (
          <section key={cat} className="not-prose my-10">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
              {t(EAL_CATEGORY_LABEL[cat])}
            </h2>
            <p className="mb-5 text-sm text-muted-foreground">{t(EAL_CATEGORY_DESCRIPTION[cat])}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {topics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/eal/${topic.id}`}
                  className={`block rounded-xl border ${CATEGORY_COLOUR[cat]} p-4 transition-shadow hover:shadow-md`}
                >
                  <h3 className="mb-1 text-base font-semibold text-foreground">{t(topic.title)}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(topic.description)}
                  </p>
                  <p className="mt-2 text-[10px] font-mono uppercase tracking-wider text-primary">
                    {topic.examples.length} {locale === 'ar' ? 'مثال' : 'examples'}
                    {' · '}
                    {topic.exercises.length} {locale === 'ar' ? 'تمرين' : 'exercises'}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      <section className="not-prose mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-2 text-lg font-bold text-foreground">
          {locale === 'ar' ? 'كيف تستخدم هذي الصفحة' : 'How to use this section'}
        </h2>
        <ol className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong>
              {locale === 'ar' ? 'ابدأ بـ "بناء الجملة"' : 'Start with "Sentence Structure"'}
            </strong>
            {' — '}
            {locale === 'ar'
              ? 'أكبر فرق بين العربي والإنجليزي. أصلح ترتيب الكلمات أولاً.'
              : 'the biggest gap between Arabic and English. Fix word order first.'}
          </li>
          <li>
            <strong>
              {locale === 'ar' ? 'بعدها انتقل إلى "القواعد"' : 'Then move to "Grammar"'}
            </strong>
            {' — '}
            {locale === 'ar'
              ? 'أدوات التعريف، الأزمنة، مطابقة الفاعل للفعل. هذي تحدد نسبة كبيرة من درجة SPaG.'
              : 'articles, tenses, subject-verb agreement. These determine a big chunk of the SPaG grade.'}
          </li>
          <li>
            <strong>
              {locale === 'ar'
                ? 'استخدم "الأخطاء الشائعة" كقائمة فحص'
                : 'Use "Common Errors" as a checklist'}
            </strong>
            {' — '}
            {locale === 'ar'
              ? 'راجعها قبل تسليم أي مقالة.'
              : 'run through it before submitting any essay.'}
          </li>
          <li>
            <strong>{locale === 'ar' ? 'سوّي التمارين' : 'Do the exercises'}</strong>
            {' — '}
            {locale === 'ar'
              ? 'كل درس فيه أسئلة اختيار من متعدد مع شرح بالعربي.'
              : 'every topic has multiple-choice questions with Arabic explanations.'}
          </li>
        </ol>
      </section>
    </main>
  )
}
