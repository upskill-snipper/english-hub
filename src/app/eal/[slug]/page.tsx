'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { findEALTopic } from '@/lib/eal/curriculum'
import { EAL_CATEGORY_LABEL, loc, type LocalizedString } from '@/lib/eal/types'
import { useLocale } from '@/lib/i18n/use-locale'
import { shuffledOptionsFor } from '@/lib/quiz/shuffle'

export default function EALTopicPage() {
  const locale = useLocale()
  const params = useParams<{ slug: string }>()
  const topic = findEALTopic(params.slug)
  if (!topic) notFound()
  const t = (s: { en: string; ar?: string }) => loc(s, locale)

  return (
    <div className="prose prose-stone mx-auto max-w-3xl px-6 py-12 dark:prose-invert">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/eal" className="hover:text-foreground">
          EAL
        </Link>
        <span> · </span>
        <span>{t(EAL_CATEGORY_LABEL[topic.category])}</span>
      </p>
      <h1>{t(topic.title)}</h1>
      <p className="lead">{t(topic.description)}</p>

      <h2>{locale === 'ar' ? 'الشرح' : 'Concept'}</h2>
      <p>{t(topic.concept)}</p>

      <h2>{locale === 'ar' ? 'أمثلة' : 'Examples'}</h2>
      <div className="not-prose space-y-3 my-6">
        {topic.examples.map((ex, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-4">
            <p className="font-medium text-foreground" dir="ltr" lang="en">
              {ex.en}
            </p>
            <p className="mt-1 text-sm text-muted-foreground" dir="rtl" lang="ar">
              {ex.ar}
            </p>
            {ex.note && <p className="mt-2 text-xs text-primary/80 italic">{t(ex.note)}</p>}
          </div>
        ))}
      </div>

      <h2>{locale === 'ar' ? 'الأخطاء الشائعة' : 'Common Errors'}</h2>
      <div className="not-prose space-y-3 my-6">
        {topic.commonErrors.map((err, i) => (
          <div key={i} className="rounded-lg border border-red-500/30 bg-red-500/[0.04] p-4">
            <p className="text-sm" dir="ltr" lang="en">
              <span className="font-mono text-[10px] uppercase tracking-wider text-red-500">
                {locale === 'ar' ? 'غلط' : 'Wrong'}:{' '}
              </span>
              <span className="line-through text-foreground/70">{err.wrong}</span>
            </p>
            <p className="mt-1 text-sm" dir="ltr" lang="en">
              <span className="font-mono text-[10px] uppercase tracking-wider text-teal-600">
                {locale === 'ar' ? 'صح' : 'Right'}:{' '}
              </span>
              <span className="font-semibold text-foreground">{err.right}</span>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">{t(err.explanation)}</p>
          </div>
        ))}
      </div>

      <h2>{locale === 'ar' ? 'تمارين' : 'Practice'}</h2>
      <div className="not-prose space-y-4 my-6">
        {topic.exercises.map((exercise, i) => (
          <ExerciseBlock key={i} exercise={exercise} index={i} locale={locale} />
        ))}
      </div>

      <hr />
      <p className="text-sm text-muted-foreground">
        <Link href="/eal">← {locale === 'ar' ? 'كل المواضيع' : 'All topics'}</Link>
      </p>
    </div>
  )
}

/**
 * One practice question with its answer reveal.
 *
 * ANSWER-POSITION BIAS, FIXED 20 September 2026. This block rendered
 * `exercise.options` in authored order and marked with
 * `selected === exercise.correctIndex`. Across the 17 exercises in the
 * EAL curriculum the answer was the second option 9 times (53%) and the
 * fourth option 0 times. Nothing here is aggregated into a score, so a
 * learner cannot inflate a number with it, but the marking is real: the
 * green highlight and the Correct heading both came from the stored
 * index, so a learner practising here was taught that B is usually
 * right and D never is, and carried that to the banded practice runner
 * and the placement test, where it does score.
 *
 * Options are shuffled by `shuffledOptionsFor` and both comparisons go
 * through `view.correctValue`.
 */
function ExerciseBlock({
  exercise,
  index,
  locale,
}: {
  exercise: ReturnType<typeof findEALTopic> extends undefined
    ? never
    : NonNullable<ReturnType<typeof findEALTopic>>['exercises'][number]
  index: number
  locale: 'en' | 'ar' | 'es'
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const t = (s: { en: string; ar?: string }) => loc(s, locale)

  /**
   * The helper takes plain strings, so the English form is shuffled and
   * each survivor is mapped back to its bilingual option. No exercise in
   * the curriculum repeats an English option within one list, so the
   * lookup is one to one.
   *
   * The salt is deliberately the empty string. The options paint on the
   * first server render with no start gate in front of them, and
   * `newSessionSalt()` calls Math.random, which would hand the server
   * and the client different orders and break hydration. An empty salt
   * matches on both sides and is still unbiased, because the seed
   * carries the question and its prompt. Exercises carry no id, so the
   * two together are the stable identifier.
   */
  const view = useMemo(() => {
    const shuffled = shuffledOptionsFor(
      exercise.options.map((o) => o.en),
      exercise.correctIndex,
      `${exercise.question.en}|${exercise.prompt.en}`,
      '',
      exercise.question.en,
    )
    const byEnglish = new Map(exercise.options.map((o) => [o.en, o] as const))
    return {
      options: shuffled.options.map((en): LocalizedString => byEnglish.get(en) ?? { en }),
      correctValue: shuffled.correctValue,
    }
  }, [exercise])

  const correct = selected !== null && view.options[selected].en === view.correctValue

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
        {locale === 'ar' ? 'سؤال' : 'Question'} {index + 1}
      </p>
      <p className="font-medium text-foreground">{t(exercise.question)}</p>
      <p className="mt-2 text-sm" dir="auto">
        {t(exercise.prompt)}
      </p>
      <div className="mt-4 grid gap-2">
        {view.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrect = opt.en === view.correctValue
          const showState = selected !== null
          let cls = 'border-border bg-background hover:bg-muted'
          if (showState) {
            if (isSelected && isCorrect) cls = 'border-teal-600 bg-teal-600/10'
            else if (isSelected && !isCorrect) cls = 'border-red-500 bg-red-500/10'
            else if (isCorrect) cls = 'border-teal-600/40 bg-teal-600/[0.04]'
          }
          return (
            <button
              key={i}
              type="button"
              disabled={selected !== null}
              onClick={() => setSelected(i)}
              className={`text-start text-sm rounded-lg border ${cls} px-3 py-2 transition-colors`}
            >
              {t(opt)}
            </button>
          )
        })}
      </div>
      {selected !== null && (
        <div
          className={`mt-3 rounded-lg p-3 text-sm ${correct ? 'bg-teal-600/10 text-teal-800 dark:text-teal-300' : 'bg-amber-500/10 text-amber-800 dark:text-amber-300'}`}
        >
          <p className="font-mono text-[10px] uppercase tracking-wider mb-1">
            {correct ? (locale === 'ar' ? 'صح' : 'Correct') : locale === 'ar' ? 'غلط' : 'Not quite'}
          </p>
          <p>{t(exercise.explanation)}</p>
        </div>
      )}
    </div>
  )
}
