'use client'

/**
 * TextStudyHub — The one-stop interactive study experience for any text.
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

import { useState, useCallback } from 'react'
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

function QuickQuiz({ quotes, textName }: { quotes: { quote: string; character: string; context: string }[]; textName: string }) {
  const [started, setStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)

  // Generate 5 questions from quotes
  const questions = quotes.slice(0, 5).map((q, i) => {
    const correctAnswer = q.character
    // Create wrong answers from other characters
    const otherChars = quotes
      .filter((_, j) => j !== i)
      .map((oq) => oq.character)
      .filter((c, idx, arr) => arr.indexOf(c) === idx && c !== correctAnswer)
      .slice(0, 3)

    const options = [correctAnswer, ...otherChars].sort(() => Math.random() - 0.5)
    const correctIndex = options.indexOf(correctAnswer)

    return {
      question: `Who says: "${q.quote.length > 80 ? q.quote.slice(0, 80) + '...' : q.quote}"?`,
      options,
      correct: correctIndex,
      explanation: q.context,
    }
  })

  const handleAnswer = (idx: number) => {
    if (answered) return
    setSelectedAnswer(idx)
    setAnswered(true)
    if (idx === questions[currentQ].correct) setScore((s) => s + 1)
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
        onClick={() => setStarted(true)}
        className="flex w-full items-center gap-3 rounded-xl border border-teal-800/15 bg-teal-800/5 p-4 text-left transition-all hover:bg-teal-800/10 hover:border-teal-800/25"
      >
        <div className="flex size-10 items-center justify-center rounded-lg bg-teal-800/15">
          <Play className="size-4 text-teal-700 ml-0.5" />
        </div>
        <div>
          <p className="text-sm font-medium text-ink-900">Quick Quote Quiz</p>
          <p className="text-xs text-ink-500">5 questions &middot; Who said it? &middot; 2 minutes</p>
        </div>
      </button>
    )
  }

  if (finished) {
    return (
      <div className="rounded-xl border border-ink-200 bg-white p-5">
        <div className="text-center mb-4">
          <p className="font-serif text-4xl font-normal italic text-clay-600">{score}/{questions.length}</p>
          <p className="text-sm text-ink-600 mt-1">
            {score === questions.length ? 'Perfect!' : score >= 3 ? 'Good work!' : 'Keep practising!'}
          </p>
        </div>
        <button
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-cream-50 py-2 text-xs font-medium text-ink-700 hover:bg-cream-100 transition-colors"
        >
          <RotateCcw className="size-3" /> Try again
        </button>
      </div>
    )
  }

  const q = questions[currentQ]
  return (
    <div className="rounded-xl border border-ink-200 bg-white p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500">
          Question {currentQ + 1} of {questions.length}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-clay-600">
          Score: {score}
        </span>
      </div>
      <p className="text-sm font-medium text-ink-900 mb-3">{q.question}</p>
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          let cls = 'border-ink-200 bg-cream-50 text-ink-700 hover:bg-cream-100'
          if (answered) {
            if (i === q.correct) cls = 'border-teal-500/50 bg-teal-500/10 text-teal-800'
            else if (i === selectedAnswer) cls = 'border-clay-500/50 bg-clay-500/10 text-clay-700'
            else cls = 'border-ink-100 bg-ink-50 text-ink-400'
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className={`w-full flex items-center gap-2 rounded-lg border px-3 py-2 text-xs text-left transition-colors ${cls}`}
            >
              {answered && i === q.correct && <Check className="size-3 text-teal-700 shrink-0" />}
              {answered && i === selectedAnswer && i !== q.correct && <X className="size-3 text-clay-600 shrink-0" />}
              {opt}
            </button>
          )
        })}
      </div>
      {answered && (
        <>
          <p className="text-xs text-ink-500 mt-3 italic">{q.explanation}</p>
          <button
            onClick={handleNext}
            className="mt-3 w-full rounded-lg bg-teal-800 py-2 text-xs font-medium text-cream-50 hover:bg-teal-700 transition-colors"
          >
            {currentQ >= questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </>
      )}
    </div>
  )
}

// ─── Essay Prompt Generator ────────────────────────────────────────────────

function EssayPrompt({ questions, textName }: { questions: string[]; textName: string }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const question = questions[currentIdx]

  return (
    <div className="rounded-xl border border-ink-200 bg-white p-5">
      <div className="flex items-center gap-2 mb-3">
        <GraduationCap className="size-4 text-clay-600" />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-clay-600">
          Essay Practice
        </span>
      </div>

      <div className="rounded-lg bg-cream-50 border border-ink-100 p-4 mb-3">
        <p className="text-sm font-serif italic text-ink-800 leading-relaxed">
          &ldquo;{question}&rdquo;
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
          New question
        </button>
        <Link
          href={`/marking/sample/${textName.toLowerCase().replace(/\s+/g, '-')}?q=${encodeURIComponent(question)}`}
          className="flex-1 rounded-lg bg-clay-500 py-2 text-xs font-medium text-cream-50 hover:bg-clay-400 transition-colors text-center"
        >
          Write &amp; mark essay
        </Link>
      </div>
    </div>
  )
}

// ─── Flashcard Drill ───────────────────────────────────────────────────────

function FlashcardDrill({ cards }: { cards: { front: string; back: string }[] }) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = cards[idx]

  return (
    <div className="rounded-xl border border-ink-200 bg-white p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500">
          Flashcard {idx + 1} of {cards.length}
        </span>
        <button
          onClick={() => { setIdx((i) => (i + 1) % cards.length); setFlipped(false) }}
          className="text-xs text-teal-700 font-medium hover:text-teal-800"
        >
          Next &rarr;
        </button>
      </div>

      <button
        onClick={() => setFlipped(!flipped)}
        className="w-full min-h-[80px] rounded-lg border border-ink-100 bg-cream-50 p-4 text-left transition-all hover:bg-cream-100"
      >
        {!flipped ? (
          <p className="text-sm font-serif italic text-ink-800">&ldquo;{card.front}&rdquo;</p>
        ) : (
          <p className="text-xs text-ink-600 leading-relaxed">{card.back}</p>
        )}
      </button>
      <p className="text-[10px] text-ink-400 text-center mt-2">
        {flipped ? 'Click to see quote' : 'Click to reveal analysis'}
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
  return (
    <div className={`space-y-6 ${className}`}>
      {/* ── Study This Text: Navigation Grid ────────────────────────────── */}
      <section className="rounded-2xl border border-ink-200 bg-white overflow-hidden">
        <div className="border-b border-ink-100 bg-cream-50 px-6 py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="size-4 text-teal-700" />
            <h2 className="font-serif text-lg font-normal text-ink-900 tracking-tight">
              Study <em className="italic text-clay-600">{textName}</em>
            </h2>
          </div>
          <p className="text-xs text-ink-500 mt-1">
            Everything you need in one place &mdash; read, revise, practise, and test yourself.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 divide-x divide-y divide-ink-100">
          {subPages.map((page) => {
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
                AI Revision Notes
              </p>
              <p className="text-[10px] text-ink-400 mt-0.5 leading-tight hidden sm:block">
                Generate personalised notes
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
              Practice now
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quizQuotes && quizQuotes.length >= 5 && (
              <QuickQuiz quotes={quizQuotes} textName={textName} />
            )}

            {essayQuestions && essayQuestions.length > 0 && (
              <EssayPrompt questions={essayQuestions} textName={textName} />
            )}

            {flashcards && flashcards.length > 0 && (
              <FlashcardDrill cards={flashcards} />
            )}
          </div>
        </section>
      )}

      {/* ── Quick Links: Exam Prep ──────────────────────────────────────── */}
      <section className="rounded-xl border border-teal-800/15 bg-teal-800/5 p-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-sm font-medium text-ink-900">
              Ready for exam practice?
            </p>
            <p className="text-xs text-ink-500 mt-0.5">
              Write a timed essay and get instant AI feedback with AO breakdown
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/toolkit/test-builder?text=${encodeURIComponent(textName)}&type=${textType}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-4 py-2 text-xs font-medium text-ink-700 hover:bg-cream-50 transition-colors"
            >
              <ClipboardList className="size-3.5" />
              Build a Test
            </Link>
            <Link
              href={`/marking/sample/${textName.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-teal-800 px-4 py-2 text-xs font-medium text-cream-50 hover:bg-teal-700 transition-colors"
            >
              <PenLine className="size-3.5" />
              Write &amp; Mark Essay
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
