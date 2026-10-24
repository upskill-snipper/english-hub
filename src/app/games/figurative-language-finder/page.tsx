'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import {
  ALL_DEVICES,
  BANK,
  DEVICE_LABELS,
  type Device,
  type Question,
} from '@/data/games/banks/figurative-language-finder'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/figurative-language-finder.ts
// (moved there on 16 October 2026), and the explanation for each in
// src/data/games/explanations/figurative-language-finder.ts.

const QUESTIONS_PER_ROUND = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * The sentence's device and three others drawn at random, never one the
 * sentence also uses (`alsoFits` in the bank), so only one option is right.
 */
function buildOptions(q: Question): Device[] {
  const correct = q.device
  const distractors = shuffle(
    ALL_DEVICES.filter((d) => d !== correct && !q.alsoFits?.includes(d)),
  ).slice(0, 3)
  return shuffle([correct, ...distractors])
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function FigurativeLanguageFinderPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<Device | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('figurative-language-finder')
  const deal = useDealer(BANK)

  const currentQuestion = questions[qIdx] ?? null

  const options = useMemo(
    () => (currentQuestion ? buildOptions(currentQuestion) : []),
    [currentQuestion],
  )

  const handleStart = useCallback(() => {
    setQuestions(deal(QUESTIONS_PER_ROUND))
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
   * A click marks the question, records it for the student's account, and
   * leaves it on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next
   * sentence 2.6 seconds after an answer, showing a one-line reason and the
   * device's definition. Each answer now has a fuller explanation
   * (src/data/games/explanations/figurative-language-finder.ts), which takes
   * longer than that to read, so the student moves on with the button.
   *
   * The wrong options are drawn at random, so the bank has no fixed options
   * and only right or wrong is recorded, not the device picked.
   */
  const handleSelect = useCallback(
    (device: Device) => {
      if (!currentQuestion || feedback) return
      const isCorrect = device === currentQuestion.device
      setSelected(device)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQuestion),
        correct: isCorrect,
        tag: currentQuestion.device,
      })
    },
    [currentQuestion, feedback, round],
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
          gameId="figurative-language-finder"
          audience="ks3"
          title="Figurative Language Finder"
          description="Read each original sentence and identify the figurative language device it uses. Spot similes, metaphors, personification and more!"
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || QUESTIONS_PER_ROUND}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentQuestion && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Which device is used?
                </p>
                <p className="text-lg font-medium text-foreground sm:text-xl">
                  &ldquo;{currentQuestion.sentence}&rdquo;
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {options.map((device) => {
                  const isChosen = selected === device
                  const isAnswer = device === currentQuestion.device
                  const showCorrect = !!feedback && isAnswer
                  const showWrong = feedback === 'wrong' && isChosen && !isAnswer
                  return (
                    <button
                      key={device}
                      onClick={() => handleSelect(device)}
                      disabled={!!feedback}
                      className={cn(
                        'flex items-center justify-between rounded-lg border px-4 py-3 text-start text-base font-medium text-foreground transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        !feedback && 'border-border hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        !!feedback && !showCorrect && !showWrong && 'border-border opacity-60',
                      )}
                    >
                      <span>{DEVICE_LABELS[device]}</span>
                      {showCorrect && <CheckCircle className="size-5 shrink-0" />}
                      {showWrong && <XCircle className="size-5 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'space-y-2 rounded-lg px-4 py-3 text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      {feedback === 'correct' ? (
                        <>
                          <CheckCircle className="size-4" /> Brilliant - that&apos;s right!
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> Not quite. It&apos;s{' '}
                          {DEVICE_LABELS[currentQuestion.device]}.
                        </>
                      )}
                    </div>
                  </div>
                  <AnswerExplanation
                    game="figurative-language-finder"
                    question={BANK.key(currentQuestion)}
                    correct={feedback === 'correct'}
                    chosen={selected ? DEVICE_LABELS[selected] : null}
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
