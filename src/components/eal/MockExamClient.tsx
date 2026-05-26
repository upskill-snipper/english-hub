'use client'

/**
 * Banded EAL practice runner - replaces the "coming soon" mock-exam
 * stubs with real, scored, bilingual practice drawn from the calibrated
 * diagnostic bank (src/lib/eal/diagnostic-bank.ts) filtered to one CEFR
 * band. Immediate per-question feedback (this is practice, not the
 * placement test) plus a running score and an end summary that routes
 * the learner to the full diagnostic and the banded topic content.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useLocale } from '@/lib/i18n/use-locale'
import { loc } from '@/lib/eal/types'
import { CEFR_LABEL, CEFR_DESCRIPTORS, type CEFRBand } from '@/lib/eal/cefr'
import { getQuestionsForLevel } from '@/lib/eal/diagnostic-bank'

export function MockExamClient({ level }: { level: CEFRBand }) {
  const locale = useLocale()
  const isAr = locale === 'ar'
  const t = (s: { en: string; ar?: string }) => loc(s, locale)

  const questions = useMemo(() => getQuestionsForLevel(level), [level])
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const answeredCount = Object.keys(answers).length
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctIndex ? 1 : 0), 0)
  const allDone = answeredCount === questions.length && questions.length > 0

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-teal-600 mb-3">
        <Link href="/eal">EAL · {isAr ? 'تدريب' : 'Practice'}</Link>
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        {level} {isAr ? 'تدريب' : 'Practice'} - {t(CEFR_LABEL[level])}
      </h1>
      <p className="text-base text-muted-foreground leading-relaxed mb-4">
        {t(CEFR_DESCRIPTORS[level])}
      </p>

      <div className="rounded-xl border border-teal-300/30 bg-teal-500/[0.04] px-4 py-3 mb-8 text-sm flex items-center justify-between">
        <span>
          {isAr ? 'النتيجة' : 'Score'}:{' '}
          <span className="font-semibold text-foreground">
            {score}/{questions.length}
          </span>
        </span>
        <Link
          href="/eal/diagnostic"
          className="font-mono text-[11px] uppercase tracking-wider text-teal-700 underline underline-offset-4"
        >
          {isAr ? 'مو متأكد من مستواك؟ سوّ الاختبار' : 'Not sure of your level? Take the test'}
        </Link>
      </div>

      <div className="space-y-4">
        {questions.map((q, idx) => {
          const selected = answers[q.id]
          const answered = selected !== undefined
          const correct = answered && selected === q.correctIndex
          return (
            <div key={q.id} className="rounded-xl border border-border bg-card p-5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                {isAr ? 'سؤال' : 'Question'} {idx + 1} · {q.skill.replace('_', ' ')}
              </p>
              <p className="font-medium text-foreground">{t(q.question)}</p>
              <p className="mt-2 text-sm" dir="auto">
                {t(q.prompt)}
              </p>
              <div className="mt-4 grid gap-2">
                {q.options.map((opt, i) => {
                  const isSelected = selected === i
                  const isCorrect = i === q.correctIndex
                  let cls = 'border-border bg-background hover:bg-muted'
                  if (answered) {
                    if (isSelected && isCorrect) cls = 'border-teal-600 bg-teal-600/10'
                    else if (isSelected && !isCorrect) cls = 'border-red-500 bg-red-500/10'
                    else if (isCorrect) cls = 'border-teal-600/40 bg-teal-600/[0.04]'
                  }
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={answered}
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
                      className={`text-left text-sm rounded-lg border ${cls} px-3 py-2 transition-colors`}
                    >
                      {t(opt)}
                    </button>
                  )
                })}
              </div>
              {answered && (
                <div
                  className={`mt-3 rounded-lg p-3 text-sm ${
                    correct
                      ? 'bg-teal-600/10 text-teal-800 dark:text-teal-300'
                      : 'bg-amber-500/10 text-amber-800 dark:text-amber-300'
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider mb-1">
                    {correct ? (isAr ? 'صح' : 'Correct') : isAr ? 'غلط' : 'Not quite'}
                  </p>
                  <p>{t(q.explanation)}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {allDone && (
        <div className="mt-8 rounded-xl border border-teal-400/40 bg-teal-500/[0.06] p-5 text-center">
          <p className="text-lg font-semibold text-foreground">
            {isAr ? 'النتيجة النهائية' : 'Final score'}: {score}/{questions.length}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {score / questions.length >= 0.7
              ? isAr
                ? `أداء قوي عند ${level} - جرّب المستوى الأعلى.`
                : `Strong at ${level} - try the next band up.`
              : isAr
                ? `راجع مواضيع ${level} ثم أعد المحاولة.`
                : `Review the ${level} topics, then try again.`}
          </p>
          <Link
            href="/eal/diagnostic"
            className="mt-4 inline-block rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            {isAr ? 'اختبار تحديد المستوى الكامل' : 'Take the full placement test'}
          </Link>
        </div>
      )}

      <p className="mt-10 text-sm text-muted-foreground">
        <Link href="/eal" className="underline">
          ← {isAr ? 'كل مواضيع EAL' : 'All EAL topics'}
        </Link>
      </p>
    </main>
  )
}
