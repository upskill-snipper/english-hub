'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, QUOTE_BANK, ALL_TEXTS } from '@/data/games/banks/quote-detective'

// ─── Quote Bank ───────────────────────────────────────────────────────────────
// The quotations and the titles they are drawn from are in
// src/data/games/banks/quote-detective.ts (moved there on 16 October 2026), and
// the explanation for each in src/data/games/explanations/quote-detective.ts.

// Map the quote bank's simplified display titles to canonical set-text slugs.
const TEXT_TO_SLUG: Record<string, string> = {
  Macbeth: 'macbeth',
  'An Inspector Calls': 'an-inspector-calls',
  'A Christmas Carol': 'a-christmas-carol',
  'Jekyll and Hyde': 'jekyll-and-hyde',
  'Romeo and Juliet': 'romeo-and-juliet',
  'Animal Farm': 'animal-farm',
  'Lord of the Flies': 'lord-of-the-flies',
  'Of Mice and Men': 'of-mice-and-men',
  'To Kill a Mockingbird': 'to-kill-a-mockingbird',
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateOptions(correctText: string, pool: string[]): string[] {
  const wrong = shuffle(pool.filter((t) => t !== correctText)).slice(0, 3)
  return shuffle([correctText, ...wrong])
}

const QUESTIONS_PER_ROUND = 20

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function QuoteDetectivePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  // Filter quote bank by board: keep only quotes from texts the user studies.
  // Fall back to the full bank if the board has fewer than ~3 texts represented.
  const { filteredQuotes, filteredTexts, usingFallback } = useMemo(() => {
    if (!board) {
      return { filteredQuotes: QUOTE_BANK, filteredTexts: ALL_TEXTS, usingFallback: false }
    }
    const boardSlugs = new Set(getSetTextsForBoard(board).map((t) => t.slug))
    const allowedTextLabels = ALL_TEXTS.filter((label) => {
      const slug = TEXT_TO_SLUG[label]
      return slug ? boardSlugs.has(slug) : false
    })
    const filtered = QUOTE_BANK.filter((q) => allowedTextLabels.includes(q.text))
    // Need at least 3 distinct texts (for multiple-choice variety) and at least 10 quotes
    const distinctTexts = new Set(filtered.map((q) => q.text))
    if (filtered.length < 10 || distinctTexts.size < 3) {
      return { filteredQuotes: QUOTE_BANK, filteredTexts: ALL_TEXTS, usingFallback: true }
    }
    return { filteredQuotes: filtered, filteredTexts: allowedTextLabels, usingFallback: false }
  }, [board])

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<
    { quote: string; correctText: string; options: string[] }[]
  >([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const round = useGameRound('quote-detective')

  const currentQ = questions[currentIndex] ?? null
  // The question as the bank names it (BANK.key), for the record and the explanation.
  const questionKey = currentQ
    ? BANK.key({ quote: currentQ.quote, text: currentQ.correctText })
    : ''

  const handleStart = useCallback(() => {
    // Sample size - if filtered pool has fewer than 20 quotes, repeat the pool to reach
    // QUESTIONS_PER_ROUND so the user still gets a full game.
    const pool = [...filteredQuotes]
    while (pool.length < QUESTIONS_PER_ROUND) {
      pool.push(...filteredQuotes)
    }
    const shuffled = shuffle(pool).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(
      shuffled.map((q) => ({
        quote: q.quote,
        correctText: q.text,
        options: generateOptions(q.text, filteredTexts),
      })),
    )
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setShowFeedback(false)
    setGameState('playing')
  }, [filteredQuotes, filteredTexts])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A click on a title. The question is marked, recorded for the student's
   * account, and left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next quotation
   * 1.2 seconds after an answer, showing only red or green. Each answer now
   * comes with who says the line, where, and what it shows
   * (src/data/games/explanations/quote-detective.ts), which cannot be read in
   * 1.2 seconds, so the student goes on when ready and the round's clock is
   * held while the explanation is open (GameShell's holdClock). The titles
   * offered are drawn at random, so no wrong choice is recorded.
   */
  const handleSelect = useCallback(
    (option: string) => {
      if (showFeedback || !currentQ) return
      setSelected(option)
      setShowFeedback(true)
      const correct = option === currentQ.correctText
      if (correct) setScore((s) => s + 1)
      round.record({ question: questionKey, correct, tag: currentQ.correctText })
    },
    [showFeedback, currentQ, questionKey, round],
  )

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    setCurrentIndex((i) => i + 1)
    setSelected(null)
    setShowFeedback(false)
  }, [currentIndex, questions.length])

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Back nav + board badge */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <Button variant="ghost" size="sm" render={<Link href="/games" />}>
          <ArrowLeft className="size-4" />
          Back to Games
        </Button>
        {boardConfig && !usingFallback && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3" /> For {boardConfig.shortName}
          </span>
        )}
      </div>

      <GameShell
        gameId="quote-detective"
        audience="gcse"
        title="Quote Detective"
        description="Identify which GCSE set text each quote is from. 20 questions, 60 seconds each."
        difficulty="Crossover"
        score={score}
        maxScore={QUESTIONS_PER_ROUND}
        timeLimitSeconds={60 * QUESTIONS_PER_ROUND}
        onStart={handleStart}
        onFinish={handleFinish}
        gameState={gameState}
        round={round}
        holdClock={showFeedback}
      >
        {currentQ && (
          <div className="flex flex-col items-center gap-8">
            {/* Progress */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>
                Question {currentIndex + 1} of {questions.length}
              </span>
              <div className="h-1.5 w-48 rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="max-w-2xl rounded-xl border border-white/[0.06] bg-white/[0.02] px-8 py-6 text-center">
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                &ldquo;{currentQ.quote}&rdquo;
              </p>
            </blockquote>

            {/* Options */}
            <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {currentQ.options.map((option) => {
                const isCorrect = option === currentQ.correctText
                const isSelected = option === selected
                let style = 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                if (showFeedback) {
                  if (isCorrect) style = 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                  else if (isSelected) style = 'border-red-500/40 bg-red-500/10 text-red-400'
                  else style = 'border-white/[0.04] bg-white/[0.01] opacity-50'
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    disabled={showFeedback}
                    className={cn(
                      'rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200',
                      style,
                      !showFeedback && 'cursor-pointer active:translate-y-px',
                    )}
                  >
                    {option}
                  </button>
                )
              })}
            </div>

            {showFeedback && (
              <div className="w-full max-w-xl">
                <AnswerExplanation
                  game="quote-detective"
                  question={questionKey}
                  correct={selected === currentQ.correctText}
                  chosen={selected}
                />
                <div className="mt-4 flex justify-end">
                  <Button onClick={handleNext} autoFocus>
                    {currentIndex + 1 >= questions.length ? 'See your results' : 'Next question'}
                    <ArrowRight className="size-4 ms-1" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </GameShell>
    </div>
  )
}
