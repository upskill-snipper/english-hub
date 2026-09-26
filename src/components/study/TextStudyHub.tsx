'use client'

/**
 * TextStudyHub - The one-stop interactive study experience for any text.
 *
 * This replaces the old passive StudyTools link panel with an embedded,
 * actionable study hub that students can use WITHOUT leaving the page:
 *
 * - Quick Quiz: instant 5-question quiz on this text
 * - AI Revision Notes: generate + display notes inline
 * - Essay Practice: get an essay question, write an answer, get AI feedback
 * - Flashcard Drill: key quotes + definitions
 * - All sub-page navigation (characters, themes, quotes, context, essays)
 */

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Brain,
  FileText,
  PenLine,
  Quote,
  Users,
  Lightbulb,
  Clock,
  Sparkles,
  ChevronRight,
  Play,
  RotateCcw,
  Check,
  X,
  Zap,
  GraduationCap,
  ClipboardList,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { TEXT_SUBPAGE_ROUTES } from '@/lib/revision/text-subpages.generated'
import { withoutOuterQuotes } from '@/lib/study-guides/quote-marks'

// ─── Marking destinations ──────────────────────────────────────────────────

// Sample marking walkthroughs exist only for these four texts
// (src/app/marking/sample/<slug>/page.tsx), and their route slugs differ
// from the slug derived from textName. Every other text goes straight to
// the marking tool at /marking/submit instead of a 404ing sample page.
const MARKING_SAMPLE_SLUGS: Record<string, string> = {
  macbeth: 'macbeth',
  'dr-jekyll-and-mr-hyde': 'jekyll-hyde',
  'an-inspector-calls': 'inspector-calls',
  'a-christmas-carol': 'christmas-carol',
}

function markingHrefFor(textName: string): string {
  const sampleSlug = MARKING_SAMPLE_SLUGS[textName.toLowerCase().replace(/\s+/g, '-')]
  return sampleSlug ? `/marking/sample/${sampleSlug}` : '/marking/submit'
}

// ─── Types ─────────────────────────────────────────────────────────────────

export type TextType = 'play' | 'novel' | 'novella' | 'poem' | 'anthology'

interface SubPage {
  id: string
  href: string
  icon: 'read' | 'acts' | 'characters' | 'themes' | 'quotes' | 'context' | 'essays'
  title: string
  description: string
}

export interface TextStudyHubProps {
  /** Name of the text */
  textName: string
  /** Type of text */
  textType: TextType
  /** Exam board */
  examBoard?: string
  /** Base path for this text (e.g. "/revision/texts/macbeth") */
  basePath: string
  /** Available sub-pages for this text */
  subPages: SubPage[]
  /** Key quotes for the quick quiz (min 5) */
  quizQuotes?: { quote: string; character: string; context: string }[]
  /** Essay questions for practice */
  essayQuestions?: string[]
  /** Flashcard pairs */
  flashcards?: { front: string; back: string }[]
  /** Custom className */
  className?: string
}

// ─── Icon Maps ─────────────────────────────────────────────────────────────

const iconMap = {
  read: BookOpen,
  acts: Layers,
  characters: Users,
  themes: Lightbulb,
  quotes: Quote,
  context: Clock,
  essays: PenLine,
} as const

const colorMap = {
  read: { icon: 'text-teal-700', bg: 'bg-teal-800/10' },
  acts: { icon: 'text-teal-700', bg: 'bg-teal-800/10' },
  characters: { icon: 'text-teal-700', bg: 'bg-teal-800/10' },
  themes: { icon: 'text-clay-600', bg: 'bg-clay-500/10' },
  quotes: { icon: 'text-clay-600', bg: 'bg-clay-500/10' },
  context: { icon: 'text-teal-700', bg: 'bg-teal-800/10' },
  essays: { icon: 'text-clay-600', bg: 'bg-clay-500/10' },
} as const

// ─── Quick Quiz Component ──────────────────────────────────────────────────

/**
 * QuickQuiz - five "who said this" questions built from the text's quotations.
 *
 * WHAT WAS WRONG (fixed 20 September 2026). Two defects, one cause: the whole
 * question bank was rebuilt in the component body on every render, and the
 * options were ordered by `.sort(() => Math.random() - 0.5)`.
 *
 * 1. A random comparator is not a shuffle. The correct answer was written at
 *    index 0 and V8's insertion sort leaves it near where it started. Measured
 *    over 400,000 trials on the 140 questions these 28 text pages generate
 *    (every one of them has four options): the answer landed at A 36.0% of the
 *    time and at C 15.6%, against 25% for chance. A student clicking the first
 *    option and reading nothing scored 36%.
 *
 * 2. Worse, the rebuild reshuffled the options the instant the student
 *    answered, because answering sets state and state sets off a render. The
 *    tick followed the correct answer to its new slot, but `selectedAnswer` was
 *    an index into the order that had just been thrown away, so the cross
 *    landed on an arbitrary option. Roughly a quarter of answered questions
 *    showed the student feedback that contradicted their own score: a wrong
 *    answer highlighted green, or a right one crossed out.
 *
 * The bank is now deterministic and memoised, the order comes from
 * `shuffledOptionsFor` keyed on a per-attempt salt, and everything that decides
 * right from wrong compares the option VALUE against `view.correctValue`.
 * Nothing here may compare an index against a stored answer position again.
 */
function QuickQuiz({
  quotes,
  textName,
}: {
  quotes: { quote: string; character: string; context: string }[]
  textName: string
}) {
  const t = useT()
  const [started, setStarted] = useState(false)
  const [sessionSalt, setSessionSalt] = useState('')
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)

  // Generate 5 questions from quotes. Deterministic, and memoised so that
  // answering a question cannot rebuild the list underneath the student.
  const questions = useMemo(
    () =>
      quotes.slice(0, 5).map((q, i) => {
        const correctAnswer = q.character
        // Create wrong answers from other characters
        const otherChars = quotes
          .filter((_, j) => j !== i)
          .map((oq) => oq.character)
          .filter((c, idx, arr) => arr.indexOf(c) === idx && c !== correctAnswer)
          .slice(0, 3)

        return {
          // Seeds the shuffle, so it is the raw quote and the text name rather
          // than the rendered stem: the stem is translated, and a seed that
          // moved with the locale would reorder the options under an Arabic
          // reader the moment the locale chunk landed.
          id: `${textName}|${q.quote}`,
          question: `${t('text_hub.who_says')}: "${q.quote.length > 80 ? q.quote.slice(0, 80) + '...' : q.quote}"?`,
          options: [correctAnswer, ...otherChars],
          correctIndex: 0,
          explanation: q.context,
        }
      }),
    [quotes, textName, t],
  )

  const q = questions[currentQ]

  // The order the student sees, plus the correct option's value. Hooks run
  // before the early returns below, so this is declared here rather than beside
  // the question screen it feeds.
  const view = useMemo(
    () =>
      shuffledOptionsFor(q.options, q.correctIndex, q.id, sessionSalt, q.question, q.explanation),
    [q, sessionSalt],
  )

  const handleStart = () => {
    // Minted in the click handler, never in a useState initialiser or during
    // render: newSessionSalt() calls Math.random(), and this is a client
    // component the server also renders, so a salt chosen at render time would
    // differ between the two passes and mismatch on hydration.
    setSessionSalt(newSessionSalt())
    setStarted(true)
  }

  const handleAnswer = (option: string, idx: number) => {
    if (answered) return
    setSelectedAnswer(idx)
    setAnswered(true)
    if (option === view.correctValue) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (currentQ >= questions.length - 1) {
      setFinished(true)
    } else {
      setCurrentQ((q) => q + 1)
      setAnswered(false)
      setSelectedAnswer(null)
    }
  }

  const handleReset = () => {
    setStarted(false)
    setCurrentQ(0)
    setScore(0)
    setAnswered(false)
    setSelectedAnswer(null)
    setFinished(false)
  }

  if (!started) {
    return (
      <button
        onClick={handleStart}
        className="flex w-full items-center gap-3 rounded-xl border border-teal-800/15 bg-teal-800/5 p-4 text-start transition-all hover:bg-teal-800/10 hover:border-teal-800/25"
      >
        <div className="flex size-10 items-center justify-center rounded-lg bg-teal-800/15">
          <Play className="size-4 text-teal-700 ms-0.5" />
        </div>
        <div>
          <p className="text-sm font-medium text-ink-900">{t('text_hub.quick_quote_quiz')}</p>
          <p className="text-xs text-ink-500">{t('text_hub.quiz_meta')}</p>
        </div>
      </button>
    )
  }

  if (finished) {
    return (
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-center mb-4">
          <p className="font-serif text-4xl font-normal italic text-clay-600">
            {score}/{questions.length}
          </p>
          <p className="text-sm text-ink-600 mt-1">
            {score === questions.length
              ? t('text_hub.perfect')
              : score >= 3
                ? t('text_hub.good_work')
                : t('text_hub.keep_practising')}
          </p>
        </div>
        <button
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-cream-50 py-2 text-xs font-medium text-ink-700 hover:bg-cream-100 transition-colors"
        >
          <RotateCcw className="size-3" /> {t('text_hub.try_again')}
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500">
          {t('text_hub.question_label')} {currentQ + 1} {t('text_hub.of')} {questions.length}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-clay-600">
          {t('text_hub.score')}: {score}
        </span>
      </div>
      <p className="text-sm font-medium text-ink-900 mb-3">{q.question}</p>
      <div className="space-y-2">
        {view.options.map((opt, i) => {
          // By value, not by index. `i` is a display position after the
          // shuffle and says nothing about which answer is right.
          const isCorrect = opt === view.correctValue
          let cls = 'border-ink-200 bg-cream-50 text-ink-700 hover:bg-cream-100'
          if (answered) {
            if (isCorrect) cls = 'border-teal-500/50 bg-teal-500/10 text-teal-800'
            else if (i === selectedAnswer) cls = 'border-clay-500/50 bg-clay-500/10 text-clay-700'
            else cls = 'border-ink-100 bg-ink-50 text-ink-400'
          }
          return (
            <button
              key={opt}
              onClick={() => handleAnswer(opt, i)}
              disabled={answered}
              className={`w-full flex items-center gap-2 rounded-lg border px-3 py-2 text-xs text-start transition-colors ${cls}`}
            >
              {answered && isCorrect && <Check className="size-3 text-teal-700 shrink-0" />}
              {answered && i === selectedAnswer && !isCorrect && (
                <X className="size-3 text-clay-600 shrink-0" />
              )}
              {opt}
            </button>
          )
        })}
      </div>
      {answered && (
        <>
          <p className="text-xs text-ink-500 mt-3 italic">{view.explanation}</p>
          <button
            onClick={handleNext}
            className="mt-3 w-full rounded-lg bg-teal-800 py-2 text-xs font-medium text-cream-50 hover:bg-teal-700 transition-colors"
          >
            {currentQ >= questions.length - 1
              ? t('text_hub.see_results')
              : t('text_hub.next_question')}
          </button>
        </>
      )}
    </div>
  )
}

// ─── Essay Prompt Generator ────────────────────────────────────────────────

function EssayPrompt({ questions, markingHref }: { questions: string[]; markingHref: string }) {
  const t = useT()
  const [currentIdx, setCurrentIdx] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const question = questions[currentIdx]

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-3">
        <GraduationCap className="size-4 text-clay-600" />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-clay-600">
          {t('text_hub.essay_practice')}
        </span>
      </div>

      <div className="rounded-lg bg-cream-50 border border-ink-100 p-4 mb-3">
        <p className="text-sm font-serif italic text-ink-800 leading-relaxed">
          &ldquo;{withoutOuterQuotes(question)}&rdquo;
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => {
            setCurrentIdx((i) => (i + 1) % questions.length)
            setRevealed(false)
          }}
          className="flex-1 rounded-lg border border-ink-200 bg-cream-50 py-2 text-xs font-medium text-ink-700 hover:bg-cream-100 transition-colors"
        >
          {t('text_hub.new_question')}
        </button>
        <Link
          href={`${markingHref}?q=${encodeURIComponent(question)}`}
          className="flex-1 rounded-lg bg-clay-500 py-2 text-xs font-medium text-cream-50 hover:bg-clay-400 transition-colors text-center"
        >
          {t('text_hub.write_and_mark')}
        </Link>
      </div>
    </div>
  )
}

// ─── Flashcard Drill ───────────────────────────────────────────────────────

function FlashcardDrill({ cards }: { cards: { front: string; back: string }[] }) {
  const t = useT()
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = cards[idx]

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500">
          {t('text_hub.flashcard_label')} {idx + 1} {t('text_hub.of')} {cards.length}
        </span>
        <button
          onClick={() => {
            setIdx((i) => (i + 1) % cards.length)
            setFlipped(false)
          }}
          className="text-xs text-teal-700 font-medium hover:text-teal-800"
        >
          {t('text_hub.next')} &rarr;
        </button>
      </div>

      <button
        onClick={() => setFlipped(!flipped)}
        className="w-full min-h-[80px] rounded-lg border border-ink-100 bg-cream-50 p-4 text-start transition-all hover:bg-cream-100"
      >
        {!flipped ? (
          <p className="text-sm font-serif italic text-ink-800">
            &ldquo;{withoutOuterQuotes(card.front)}&rdquo;
          </p>
        ) : (
          <p className="text-xs text-ink-600 leading-relaxed">{card.back}</p>
        )}
      </button>
      <p className="text-[10px] text-ink-400 text-center mt-2">
        {flipped ? t('text_hub.click_see_quote') : t('text_hub.click_reveal_analysis')}
      </p>
    </div>
  )
}

// ─── Main Hub Component ────────────────────────────────────────────────────

export default function TextStudyHub({
  textName,
  textType,
  examBoard,
  basePath,
  subPages,
  quizQuotes,
  essayQuestions,
  flashcards,
  className = '',
}: TextStudyHubProps) {
  const t = useT()
  const markingHref = markingHrefFor(textName)
  // Only render tiles whose target page actually exists - several texts list
  // sub-pages (read/acts/themes/...) that were never built.
  const availableSubPages = subPages.filter(
    (page) => !page.href.startsWith('/revision/texts/') || TEXT_SUBPAGE_ROUTES.has(page.href),
  )
  return (
    <div className={`space-y-6 ${className}`}>
      {/* ── Study This Text: Navigation Grid ────────────────────────────── */}
      <section className="rounded-2xl border border-border bg-card overflow-hidden">
        <div className="border-b border-ink-100 bg-cream-50 px-6 py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="size-4 text-teal-700" />
            <h2 className="font-serif text-lg font-normal text-ink-900 tracking-tight">
              {t('text_hub.study_heading_prefix')}{' '}
              <em className="italic text-clay-600">{textName}</em>
            </h2>
          </div>
          <p className="text-xs text-ink-500 mt-1">{t('text_hub.study_subheading')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 divide-x divide-y divide-ink-100">
          {availableSubPages.map((page) => {
            const Icon = iconMap[page.icon] || BookOpen
            const colors = colorMap[page.icon] || colorMap.read
            return (
              <Link
                key={page.id}
                href={page.href}
                className="group flex flex-col items-center gap-2 p-5 text-center transition-colors hover:bg-cream-50"
              >
                <div className={`flex size-10 items-center justify-center rounded-xl ${colors.bg}`}>
                  <Icon className={`size-5 ${colors.icon}`} />
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-900 group-hover:text-teal-800 transition-colors">
                    {page.title}
                  </p>
                  <p className="text-[10px] text-ink-400 mt-0.5 leading-tight hidden sm:block">
                    {page.description}
                  </p>
                </div>
              </Link>
            )
          })}

          {/* AI Tools link */}
          <Link
            href={`/toolkit/revision-builder?text=${encodeURIComponent(textName)}&type=${textType}${examBoard ? `&board=${examBoard}` : ''}`}
            className="group flex flex-col items-center gap-2 p-5 text-center transition-colors hover:bg-cream-50"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-clay-500/10">
              <Sparkles className="size-5 text-clay-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-ink-900 group-hover:text-clay-600 transition-colors">
                {t('study_tools.revision_notes_label')}
              </p>
              <p className="text-[10px] text-ink-400 mt-0.5 leading-tight hidden sm:block">
                {t('text_hub.generate_personalised_notes')}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Interactive Practice: Inline Tools ──────────────────────────── */}
      {(quizQuotes || essayQuestions || flashcards) && (
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="size-4 text-clay-600" />
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-clay-600">
              {t('dash.practice_now')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quizQuotes && quizQuotes.length >= 5 && (
              <QuickQuiz quotes={quizQuotes} textName={textName} />
            )}

            {essayQuestions && essayQuestions.length > 0 && (
              <EssayPrompt questions={essayQuestions} markingHref={markingHref} />
            )}

            {flashcards && flashcards.length > 0 && <FlashcardDrill cards={flashcards} />}
          </div>
        </section>
      )}

      {/* ── Quick Links: Exam Prep ──────────────────────────────────────── */}
      <section className="rounded-xl border border-teal-800/15 bg-teal-800/5 p-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-sm font-medium text-ink-900">{t('text_hub.ready_for_exam')}</p>
            <p className="text-xs text-ink-500 mt-0.5">{t('text_hub.exam_blurb')}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/toolkit/test-builder?text=${encodeURIComponent(textName)}&type=${textType}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-ink-700 hover:bg-cream-50 transition-colors"
            >
              <ClipboardList className="size-3.5" />
              {t('text_hub.build_test')}
            </Link>
            <Link
              href={markingHref}
              className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2 text-xs font-medium text-cream-50 hover:bg-teal-700 transition-colors"
            >
              <PenLine className="size-3.5" />
              {t('text_hub.write_mark_essay')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
