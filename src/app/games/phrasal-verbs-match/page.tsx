'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
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
import { BANK, type PhrasalVerb } from '@/data/games/banks/phrasal-verbs-match'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/phrasal-verbs-match.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/phrasal-verbs-match.ts.

const ROUND_SIZE = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PhrasalVerbsMatchPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<PhrasalVerb[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const round = useGameRound('phrasal-verbs-match')
  const deal = useDealer(BANK)

  const currentQuestion = questions[qIdx] ?? null

  // Build the four shuffled options for the current question
  const options = useMemo(() => {
    if (!currentQuestion) return []
    return shuffle([currentQuestion.meaning, ...currentQuestion.distractors])
  }, [currentQuestion])

  const handleStart = useCallback(() => {
    setQuestions(deal(ROUND_SIZE))
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setGameState('playing')
  }, [deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A tap. The question is marked, recorded for the student's account, and then
   * left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next phrasal
   * verb 1.6 seconds after a tap, showing only the right meaning. Each answer
   * now comes with why that meaning fits the sentence and what each other
   * option really describes (src/data/games/explanations/phrasal-verbs-match.ts),
   * which cannot be read in 1.6 seconds. There is no clock in this game, so
   * nothing else changes.
   */
  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQuestion || selected) return
      const correct = option === currentQuestion.meaning
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (correct) {
        setScore((s) => s + 1)
      }
      round.record({
        question: BANK.key(currentQuestion),
        correct,
        chose: correct ? undefined : option,
      })
    },
    [currentQuestion, selected, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setSelected(null)
  }, [qIdx, questions.length])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const isCorrectSelection = selected !== null && selected === currentQuestion?.meaning

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
          gameId="phrasal-verbs-match"
          audience="eal"
          title="Phrasal Verb Match"
          description="Read the example sentence, then choose the correct meaning of the phrasal verb. Build the everyday English you need with confidence."
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
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Phrasal verb + example */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  What does this phrasal verb mean?
                </p>
                <p className="text-2xl font-bold text-primary">{currentQuestion.phrasal}</p>
                <p className="text-base text-foreground italic">
                  &ldquo;{currentQuestion.exampleSentence}&rdquo;
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {options.map((option) => {
                  const isThisSelected = selected === option
                  const isAnswer = option === currentQuestion.meaning
                  const showCorrect = selected !== null && isAnswer
                  const showWrong = isThisSelected && !isAnswer

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={selected !== null}
                      className={cn(
                        'flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-start text-sm font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        selected === null &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        selected !== null &&
                          !showCorrect &&
                          !showWrong &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      <span>{option}</span>
                      {showCorrect && <CheckCircle className="size-4 shrink-0" />}
                      {showWrong && <XCircle className="size-4 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation, until the student goes on */}
              {selected !== null && (
                <div>
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      isCorrectSelection
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {isCorrectSelection ? (
                      <>
                        <CheckCircle className="size-4" /> Well done, that&rsquo;s right.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. &ldquo;{currentQuestion.phrasal}
                        &rdquo; means: <span className="font-bold">{currentQuestion.meaning}</span>
                      </>
                    )}
                  </div>
                  <AnswerExplanation
                    game="phrasal-verbs-match"
                    question={BANK.key(currentQuestion)}
                    correct={isCorrectSelection}
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
