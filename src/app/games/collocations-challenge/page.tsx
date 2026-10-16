'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, Link2 } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import {
  BANK,
  COLLOCATION_BANK,
  type Collocation,
  type CollocationGroup,
} from '@/data/games/banks/collocations-challenge'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The questions are in src/data/games/banks/collocations-challenge.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/collocations-challenge.ts.

const ROUND_SIZE = 15

/**
 * The collocation family, shown only once the question has been answered.
 *
 * WHAT WAS WRONG (found 13 October 2026). This label sat in a badge beside the
 * accuracy figure for as long as each question was open. For the 57 make, do,
 * have and take items the family IS the answer, so "MAKE" appeared above "I
 * need to ? a decision" and the student only had to press the button with the
 * same word on it. It now appears with the feedback.
 * a-collocation-hides-its-answer-until-it-is-given.test.tsx plays a round and
 * fails if anything outside the options names the answer before it is given.
 */
const GROUP_LABEL: Record<CollocationGroup, string> = {
  make: 'MAKE',
  do: 'DO',
  have: 'HAVE',
  take: 'TAKE',
  noun: 'Noun partner',
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ENCOURAGE = [
  'Brilliant.',
  'Well done.',
  'Spot on.',
  'Great choice.',
  'Excellent.',
  'Perfect.',
]

// ─── Component ─────────────────────────────────────────────────────────────────

export default function CollocationsChallengePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Collocation[]>([])
  const [optionOrders, setOptionOrders] = useState<string[][]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [praise, setPraise] = useState('')
  const round = useGameRound('collocations-challenge')

  const currentQuestion = questions[qIdx] ?? null
  const currentOptions = optionOrders[qIdx] ?? []

  const sentenceParts = useMemo(() => {
    if (!currentQuestion) return ['', '']
    const idx = currentQuestion.sentence.indexOf('___')
    if (idx === -1) return [currentQuestion.sentence, '']
    return [currentQuestion.sentence.slice(0, idx), currentQuestion.sentence.slice(idx + 3)]
  }, [currentQuestion])

  const handleStart = useCallback(() => {
    const picked = shuffle(COLLOCATION_BANK).slice(0, ROUND_SIZE)
    setQuestions(picked)
    setOptionOrders(picked.map((q) => shuffle(q.options)))
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setPraise('')
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A click. The question is marked, recorded for the student's account, and
   * then left on screen with its explanation until they choose to go on
   * (handleNext).
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next sentence
   * 1.9 seconds after an answer. The founder found the answers too shallow; each
   * now comes with why the word partner is right and why each other word is not
   * (src/data/games/explanations/collocations-challenge.ts), and a student
   * cannot read that in 1.9 seconds. Nothing that names the answer is shown
   * before the answer is given: the explanation and the family badge both wait
   * for the feedback.
   */
  const handleSelect = useCallback(
    (option: string) => {
      if (!currentQuestion || feedback) return
      const isCorrect = option === currentQuestion.answer
      setSelected(option)
      setTotalAnswered((t) => t + 1)

      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
        setPraise(ENCOURAGE[Math.floor(Math.random() * ENCOURAGE.length)])
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQuestion),
        correct: isCorrect,
        tag: BANK.tag?.(currentQuestion),
        chose: isCorrect ? undefined : option,
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
    setPraise('')
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
          gameId="collocations-challenge"
          audience="eal"
          title="Collocations Challenge"
          description="Choose the verb or noun that fits the sentence. Master make, do, have and take: the trickiest English word partners."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
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
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  {/* After the answer only: see GROUP_LABEL. */}
                  {feedback && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      <Link2 className="size-3" />
                      {GROUP_LABEL[currentQuestion.collocationGroup]}
                    </span>
                  )}
                </div>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-lg leading-relaxed text-foreground">
                  {sentenceParts[0]}
                  <span
                    className={cn(
                      'mx-1 inline-block min-w-[5rem] rounded-md border-b-2 px-2 pb-0.5 font-bold transition-colors',
                      feedback === 'correct'
                        ? 'border-emerald-500 text-emerald-400'
                        : feedback === 'wrong'
                          ? 'border-red-500 text-red-400'
                          : 'border-primary/50 text-primary',
                    )}
                  >
                    {feedback ? currentQuestion.answer : '?'}
                  </span>
                  {sentenceParts[1]}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
                {currentOptions.map((option) => {
                  const isAnswer = option === currentQuestion.answer
                  const isPicked = option === selected
                  const showCorrect = !!feedback && isAnswer
                  const showWrong = feedback === 'wrong' && isPicked && !isAnswer
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3.5 text-base font-semibold text-foreground transition-all duration-150',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        !feedback &&
                          'border-border hover:border-primary hover:bg-accent active:translate-y-px',
                        showCorrect && 'border-emerald-500 bg-emerald-500/15 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/15 text-red-400',
                        feedback && !showCorrect && !showWrong && 'border-border opacity-50',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback, then why, then the way on */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium',
                      feedback === 'correct'
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> {praise} &ldquo;{currentQuestion.answer}
                        &rdquo; is the right partner.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The correct answer is{' '}
                        <span className="font-bold">&ldquo;{currentQuestion.answer}&rdquo;</span>.
                        Keep going.
                      </>
                    )}
                  </div>
                  <AnswerExplanation
                    game="collocations-challenge"
                    question={BANK.key(currentQuestion)}
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
