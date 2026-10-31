'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, Volume2, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer, type RoundOptions } from '@/lib/games/start-round'
import { BANK, type ItemType, type NumberItem } from '@/data/games/banks/numbers-and-time'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The questions are in src/data/games/banks/numbers-and-time.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/numbers-and-time.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-GB'
  utterance.rate = 0.85
  window.speechSynthesis.speak(utterance)
}

const ROUND_SIZE = 15

/**
 * Whether reading the prompt aloud gives its answer away. Speech says figures as
 * words: "7" as "seven", "1st" as "first", "1999" as "nineteen ninety-nine",
 * "1 May" as "the first of May", and a voice may read 14:00 as "two pm". Many
 * questions with figures in the prompt ask for just those words, so every
 * prompt with a figure in it waits until the question is answered, whatever it
 * asks for (since 24 October 2026 also a price to add up, a timetable or a
 * 24-hour time). A prompt already in words ("sixteen", "quarter past seven",
 * "a fiver") sounds just as it reads, so hearing it gives nothing away. Only
 * the prompt is read aloud, never a question's `context`.
 */
function speechGivesAnswer(item: NumberItem): boolean {
  return /\d/.test(item.prompt)
}

const TYPE_LABELS: Record<ItemType, string> = {
  cardinal: 'Number',
  ordinal: 'Ordinal',
  clock: 'Time',
  date: 'Date',
}

interface Question {
  item: NumberItem
  options: string[]
}

/**
 * A round mixed as the page has always mixed it: four numbers, four ordinals,
 * five clock times and two dates, now dealt by useDealer
 * (src/lib/games/start-round.ts), so a round brings what this browser has not
 * met and keeps apart questions that give each other away (24 October 2026).
 * Options in a new order each time.
 */
function buildQuestions(
  deal: (size: number, o?: RoundOptions<NumberItem>) => NumberItem[],
): Question[] {
  return deal(ROUND_SIZE, {
    quota: { of: (i) => i.type, counts: { cardinal: 4, ordinal: 4, clock: 5, date: 2 } },
  }).map((item) => ({
    item,
    options: shuffle([item.answer, ...item.distractors]),
  }))
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function NumbersAndTimePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('numbers-and-time')
  const deal = useDealer(BANK)

  const currentQ = questions[qIdx] ?? null

  /**
   * When the page reads the prompt aloud. A prompt in words is read when the
   * question appears, as before. A prompt in figures is read only once the
   * question has been answered, as part of the feedback (speechGivesAnswer).
   *
   * WHAT CHANGED (16 October 2026). The page used to read every prompt 0.3
   * seconds after it appeared, and again on "Hear it", so "Read the number.
   * Choose the words." under "7" was answered aloud with "seven" before the
   * student chose. Scoring is unchanged.
   */
  useEffect(() => {
    if (gameState !== 'playing' || !currentQ) return
    const answered = feedback !== null
    if (speechGivesAnswer(currentQ.item) ? !answered : answered) return
    const timer = setTimeout(() => speak(currentQ.item.prompt), 300)
    return () => clearTimeout(timer)
  }, [qIdx, gameState, feedback, currentQ])

  const handleStart = useCallback(() => {
    setQuestions(buildQuestions(deal))
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setGameState('playing')
  }, [deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A tap on an option. The question is marked, recorded for the student's
   * account, and then left on screen with its explanation until they choose to
   * go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next question
   * 1.8 seconds after an answer, showing only the right answer. Each answer now
   * comes with why it is right and why the option chosen is not
   * (src/data/games/explanations/numbers-and-time.ts), and a learner cannot
   * read that in 1.8 seconds.
   */
  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQ || feedback) return
      const isCorrect = option === currentQ.item.answer
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQ.item),
        correct: isCorrect,
        tag: currentQ.item.type,
        chose: isCorrect ? undefined : option,
      })
    },
    [currentQ, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setSelected(null)
    setFeedback(null)
  }, [qIdx, questions.length])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Button variant="ghost" size="sm" render={<Link href="/games" />}>
            <ArrowLeft className="size-4 me-1" />
            Back to Games
          </Button>
          {boardConfig && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <Sparkles className="size-3" /> For {boardConfig.shortName}
            </span>
          )}
        </div>

        <GameShell
          gameId="numbers-and-time"
          audience="eal"
          title="Numbers & Time"
          description="Read numbers, ordinals, clock times and dates, then choose the correct English. Great practice for everyday English."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentQ && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {questions.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    {TYPE_LABELS[currentQ.item.type]}
                  </span>
                </div>
              </div>

              {/* Prompt card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
                <p className="text-sm text-muted-foreground">{currentQ.item.task}</p>
                {/* A price list, a timetable or a real line to read (24 October 2026). */}
                {currentQ.item.context && (
                  <p className="whitespace-pre-line text-base text-foreground">
                    {currentQ.item.context}
                  </p>
                )}
                <p className="text-4xl font-bold tracking-tight text-foreground break-words">
                  {currentQ.item.prompt}
                </p>
                {/* Where hearing the prompt is the answer, "Hear it" waits for the answer. */}
                <button
                  onClick={() => speak(currentQ.item.prompt)}
                  disabled={speechGivesAnswer(currentQ.item) && !feedback}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent',
                    speechGivesAnswer(currentQ.item) && !feedback && 'invisible',
                  )}
                >
                  <Volume2 className="size-4 text-primary" />
                  Hear it
                </button>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((option) => {
                  const isAnswer = option === currentQ.item.answer
                  const isPicked = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-center text-base font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !isAnswer && !isPicked && 'border-border opacity-50',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      feedback === 'correct'
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Well done. That&apos;s right.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer is:{' '}
                        <span className="font-bold">{currentQ.item.answer}</span>
                      </>
                    )}
                  </div>
                  <AnswerExplanation
                    game="numbers-and-time"
                    question={BANK.key(currentQ.item)}
                    correct={feedback === 'correct'}
                    chosen={selected}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {qIdx + 1 >= questions.length ? 'See your results' : 'Next question'}
                      <ArrowRight className="size-4 ms-1" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
