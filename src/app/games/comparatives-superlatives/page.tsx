'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import {
  BANK,
  COMP_BANK,
  distractorCandidates,
  type CompItem,
} from '@/data/games/banks/comparatives-superlatives'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The questions are in src/data/games/banks/comparatives-superlatives.ts (moved there
// on 16 October 2026), and the explanation for each in
// src/data/games/explanations/comparatives-superlatives.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ROUND_SIZE = 15

// Build a 4-option MCQ for an item using plausible distractors: three drawn from the
// wrong forms in the bank (distractorCandidates), shuffled with the right one.
function buildOptions(item: CompItem): string[] {
  const { answer } = item
  const picked = shuffle(distractorCandidates(item)).slice(0, 3)
  return shuffle([answer, ...picked])
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ComparativesSuperlativesPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<CompItem[]>([])
  const [options, setOptions] = useState<string[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('comparatives-superlatives')

  const current = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = shuffle(COMP_BANK).slice(0, ROUND_SIZE)
    setQuestions(picked)
    setOptions(picked.length > 0 ? buildOptions(picked[0]) : [])
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
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
   * 2.2 seconds after an answer, showing a one-line rule. The founder found the
   * answers too shallow; each now comes with the rule for this adjective and why
   * the form chosen is not it
   * (src/data/games/explanations/comparatives-superlatives.ts), and a student
   * cannot read that in 2.2 seconds.
   */
  const handleAnswer = useCallback(
    (choice: string) => {
      if (!current || feedback) return
      const isCorrect = choice === current.answer
      setSelected(choice)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(current),
        correct: isCorrect,
        tag: current.family,
        chose: isCorrect ? undefined : choice,
      })
    },
    [current, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    const next = qIdx + 1
    setQIdx(next)
    setOptions(buildOptions(questions[next]))
    setSelected(null)
    setFeedback(null)
  }, [qIdx, questions])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  const renderSentence = (item: CompItem) => {
    const parts = item.sentence.split('___')
    return (
      <p className="text-lg leading-relaxed text-foreground">
        {parts[0]}
        <span className="mx-1 inline-block min-w-[3rem] border-b-2 border-dashed border-primary/50 text-center font-bold text-primary">
          {feedback ? current?.answer : '?'}
        </span>
        {parts[1]}
      </p>
    )
  }

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
          gameId="comparatives-superlatives"
          audience="eal"
          title="Bigger, Biggest!"
          description="Read the sentence and choose the correct comparative or superlative form of the adjective."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                {renderSentence(current)}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-semibold text-primary">
                    {current.adjective}
                  </span>
                  <span className="rounded-full border border-border bg-accent px-3 py-1 text-muted-foreground">
                    Make the {current.form}
                  </span>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {options.map((opt) => {
                  const isAnswer = opt === current.answer
                  const isPicked = opt === selected
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
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
                        feedback && !isAnswer && !isPicked && 'border-border bg-card opacity-50',
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div className="space-y-3">
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
                        <CheckCircle className="size-4" /> Brilliant. That&apos;s right.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite: the answer is{' '}
                        <span className="font-bold">{current.answer}</span>.
                      </>
                    )}
                  </div>
                  <AnswerExplanation
                    game="comparatives-superlatives"
                    question={BANK.key(current)}
                    correct={feedback === 'correct'}
                    chosen={selected}
                  />
                  <div className="flex justify-end">
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
