'use client'

// LEH11 readiness quiz - interactive client component.
//
// This is a client component so the whole quiz can run in the browser
// (category select → one question at a time → immediate feedback →
// running score → restart). A client component cannot export `metadata`,
// so SEO metadata is intentionally omitted here. The BreadcrumbList for
// this page now comes from PathBreadcrumbJsonLd in the root layout, which
// derives the trail from the URL; this file emits no JSON-LD of its own.

import { useState, useMemo, useCallback } from 'react'
import { useT } from '@/lib/i18n/use-t'
import Link from 'next/link'

import {
  QUIZ_BANK,
  QUIZ_CATEGORIES,
  type QuizCategory,
  type QuizQuestion,
} from '@/data/ilowersecondary/quiz-bank'
import { SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/quiz'

type Selection = QuizCategory | 'mixed'

/**
 * Fisher-Yates shuffle returning a new array (does not mutate input).
 *
 * This shuffles the QUESTION POOL only. It is deliberately not used on the
 * options: see the `view` memo below for why those need a deterministic,
 * seeded shuffle instead.
 */
function shuffle<T>(input: readonly T[]): T[] {
  const arr = [...input]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function Breadcrumb() {
  const t = useT()
  return (
    <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
      <Link href="/" className="hover:text-foreground">
        {t('ks3.page.bc.home')}
      </Link>
      <span> · </span>
      <Link href="/ks3" className="hover:text-foreground">
        {t('ks3.page.bc.ks3')}
      </Link>
      <span> · </span>
      <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
        {t('ks3.page.bc.ils')}
      </Link>
      <span> · </span>
      <span>{t('ks3.page.quiz.bc')}</span>
    </p>
  )
}

export default function QuizPage() {
  const [selection, setSelection] = useState<Selection | null>(null)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [finished, setFinished] = useState(false)
  const [salt, setSalt] = useState('')

  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const q of QUIZ_BANK) map[q.category] = (map[q.category] ?? 0) + 1
    return map
  }, [])

  const current = questions[index]

  /**
   * The options as the student sees them, plus the correct option's VALUE.
   *
   * WHAT WAS WRONG (fixed 20 September 2026). This page shuffled the question
   * pool and left each question's options in authored order, then scored with
   * `optionIndex === current.correctIndex`. The bank is heavily skewed to the
   * first option: of its 80 questions the answer is A in 55 (68.8%), B in 16,
   * C in 8 and D in 1, and three of the six categories are 100% A -
   * exam-format 16/16, punctuation-effect 12/12, synonym-in-context 12/12. So a
   * student clicking A without reading scored 68.8% on the mixed quiz and 100%
   * on any of those three categories. Rebalancing the data would fix today and
   * not tomorrow; shuffling at render cannot be undone by authoring.
   *
   * Every comparison against the correct answer therefore goes through
   * `view.correctValue`, never an index. The stored `correctIndex` points into
   * the AUTHORED array and is meaningless once the options have moved.
   *
   * The salt is created in `start`, inside the click handler, never during
   * render: `newSessionSalt` calls Math.random(), and this page is server
   * rendered, so seeding it in a useState initialiser would be a hydration
   * mismatch. There is a category gate before any option is painted, so the
   * handler always runs first.
   *
   * THE EXPLANATION IS PASSED TOO, and that is deliberate. The helper's
   * order-lock test scans the text it is given for a stem naming an option by
   * letter or position. No stem in this bank does, but one EXPLANATION does:
   * `gram-9` ("Which sentence is a compound sentence?") ends "The second option
   * does this", which is the feedback shown after answering. Shuffling it would
   * score correctly and then explain the wrong option. Handing the helper the
   * question and the explanation together keeps that one question in its
   * authored order. It is the only one of the 80 affected, so the bank is still
   * unbiased in practice.
   */
  const view = useMemo(
    () =>
      current
        ? shuffledOptionsFor(
            current.options,
            current.correctIndex,
            current.id,
            salt,
            `${current.question}\n${current.explanation}`,
          )
        : null,
    [current, salt],
  )

  const chosenOption = chosen !== null && view ? (view.options[chosen] ?? null) : null
  const chosenIsCorrect =
    view !== null && chosenOption !== null && chosenOption === view.correctValue

  const start = useCallback((sel: Selection) => {
    const pool = sel === 'mixed' ? QUIZ_BANK : QUIZ_BANK.filter((q) => q.category === sel)
    setSelection(sel)
    setQuestions(shuffle(pool))
    setSalt(newSessionSalt())
    setIndex(0)
    setChosen(null)
    setScore(0)
    setAnswered(0)
    setFinished(false)
  }, [])

  const restart = useCallback(() => {
    setSelection(null)
    setQuestions([])
    setSalt('')
    setIndex(0)
    setChosen(null)
    setScore(0)
    setAnswered(0)
    setFinished(false)
  }, [])

  const handleAnswer = useCallback(
    (optionIndex: number, option: string) => {
      if (chosen !== null) return
      if (!view) return
      setChosen(optionIndex)
      setAnswered((a) => a + 1)
      // By value. `optionIndex` is a display position after the shuffle.
      if (option === view.correctValue) setScore((s) => s + 1)
    },
    [chosen, view],
  )

  const next = useCallback(() => {
    if (index + 1 >= questions.length) {
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setChosen(null)
  }, [index, questions.length])

  return (
    <>
      <Breadcrumb />

      <h1>LEH11 readiness quiz</h1>
      <p className="lead">
        Practise for the Pearson Edexcel International Award in Lower Secondary English (LEH11)
        achievement test with 80 original multiple-choice questions. Pick a category or take a mixed
        quiz, answer one question at a time, and get instant feedback with an explanation.
      </p>

      {/* ── Category selection ──────────────────────────────────────── */}
      {selection === null && (
        <section className="not-prose my-10">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-4">
            Choose a category
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => start('mixed')}
              className="rounded-xl border border-primary/40 bg-primary/5 p-5 text-start transition-colors hover:bg-primary/10"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-base font-semibold text-foreground">Mixed quiz</h2>
                <span className="font-mono text-xs text-primary">{QUIZ_BANK.length} questions</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A shuffled mix drawn from every category - the closest to real exam-readiness
                practice.
              </p>
            </button>

            {QUIZ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => start(cat.id)}
                className="rounded-xl border border-border/60 bg-card p-5 text-start transition-colors hover:border-primary/40"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-base font-semibold text-foreground">{cat.label}</h2>
                  <span className="font-mono text-xs text-primary">
                    {counts[cat.id] ?? 0} questions
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Active question ─────────────────────────────────────────── */}
      {selection !== null && !finished && current && view && (
        <section className="not-prose my-10">
          <div className="flex items-center justify-between gap-3 mb-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              Question {index + 1} of {questions.length}
            </p>
            <p className="font-mono text-xs text-primary">
              Score: {score} / {answered}
            </p>
          </div>

          <div className="h-1 w-full overflow-hidden rounded-full bg-border/60">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{
                width: `${((index + (chosen !== null ? 1 : 0)) / questions.length) * 100}%`,
              }}
            />
          </div>

          <div className="mt-6 rounded-xl border border-border/60 bg-card p-6">
            <p className="text-base text-foreground leading-relaxed">{current.question}</p>

            <div className="mt-5 grid gap-2.5">
              {view.options.map((option, i) => {
                const isCorrect = option === view.correctValue
                const isChosen = i === chosen
                let cls =
                  'rounded-xl border border-border/60 bg-background px-4 py-3 text-left text-sm transition-colors'
                if (chosen === null) {
                  cls += ' hover:border-primary/50 cursor-pointer'
                } else if (isCorrect) {
                  cls += ' border-emerald-500/50 bg-emerald-500/10 text-emerald-600'
                } else if (isChosen) {
                  cls += ' border-rose-500/50 bg-rose-500/10 text-rose-600'
                } else {
                  cls += ' opacity-60'
                }
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={chosen !== null}
                    onClick={() => handleAnswer(i, option)}
                    className={cls}
                  >
                    <span className="font-mono text-xs text-muted-foreground me-2">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {option}
                  </button>
                )
              })}
            </div>

            {chosen !== null && (
              <div className="mt-5 rounded-xl border border-border/60 bg-background p-4">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1.5">
                  {chosenIsCorrect ? 'Correct' : 'Not quite'}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{view.explanation}</p>
                <button
                  type="button"
                  onClick={next}
                  className="mt-4 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {index + 1 >= questions.length ? 'See results' : 'Next question'}
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={restart}
            className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground hover:text-foreground"
          >
            ← Change category
          </button>
        </section>
      )}

      {/* ── Results ─────────────────────────────────────────────────── */}
      {finished && (
        <section className="not-prose my-10">
          <div className="rounded-xl border border-border/60 bg-card p-8 text-center">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Quiz complete
            </p>
            <p className="text-4xl font-bold text-foreground">
              {score} / {questions.length}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {questions.length > 0
                ? `${Math.round((score / questions.length) * 100)}% correct`
                : null}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => selection && start(selection)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Try again
              </button>
              <button
                type="button"
                onClick={restart}
                className="rounded-xl border border-border/60 bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
              >
                Choose another category
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
