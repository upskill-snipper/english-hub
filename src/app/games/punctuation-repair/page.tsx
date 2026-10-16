'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, Wrench } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, PUNCTUATION_BANK, type PunctuationItem } from '@/data/games/banks/punctuation-repair'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The sentences are in src/data/games/banks/punctuation-repair.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/punctuation-repair.ts.

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

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PunctuationRepairPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<PunctuationItem[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [salt, setSalt] = useState('')
  const round = useGameRound('punctuation-repair')

  const currentQ = questions[qIdx] ?? null

  /**
   * SHUFFLE THE OPTIONS, SCORE BY VALUE (20 September 2026).
   *
   * This round shuffled the QUESTION pool, left `options` in authored order and
   * scored with `idx === currentQ.answerIndex`. The bank puts the answer at
   * index 1 in 28 of its 57 sentences and at index 3 in exactly one, so a
   * student who clicked B every time scored 49% against a 25% baseline, and
   * clicking B or C covered 77% of the bank.
   *
   * Every comparison against the answer now goes through `view.correctValue`,
   * the option letter in the feedback line included: after a shuffle
   * `answerIndex` points at whatever landed in that slot. The salt is minted in
   * `handleStart`, never during render, because `newSessionSalt` calls
   * Math.random and a render-time call would hydrate to a different order than
   * the server rendered.
   */
  const view = useMemo(() => {
    if (!currentQ) return { options: [] as string[], correctValue: '' }
    return shuffledOptionsFor(
      currentQ.options,
      currentQ.answerIndex,
      currentQ.broken,
      salt,
      currentQ.broken,
    )
  }, [currentQ, salt])

  const handleStart = useCallback(() => {
    setQuestions(shuffle(PUNCTUATION_BANK).slice(0, QUESTIONS_PER_ROUND))
    setSalt(newSessionSalt())
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
   * then left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next sentence
   * 2.2 seconds after an answer, showing one line naming the rule. The founder
   * found the answers too shallow; each now comes with why the right version is
   * right and what is wrong with the one chosen
   * (src/data/games/explanations/punctuation-repair.ts), which cannot be read in
   * 2.2 seconds. No `chose` is recorded: the options are whole sentences, not
   * short labels.
   */
  const handleSelect = useCallback(
    (idx: number) => {
      if (!currentQ || feedback) return
      const isCorrect = view.options[idx] === view.correctValue
      setSelected(idx)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({ question: BANK.key(currentQ), correct: isCorrect, tag: currentQ.topic })
    },
    [currentQ, feedback, round, view],
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

  // The letter of the answer's SHUFFLED position, not its authored one.
  const correctPos = view.options.indexOf(view.correctValue)
  const correctLetter = String.fromCharCode(65 + (correctPos >= 0 ? correctPos : 0))

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
          gameId="punctuation-repair"
          audience="ks3"
          title="Punctuation Repair"
          description="A sentence has been broken. Pick the version that uses punctuation correctly: capital letters, full stops, commas, speech marks and more."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || QUESTIONS_PER_ROUND}
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
                  Sentence {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Broken sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Wrench className="size-3.5 text-primary" />
                  Repair this sentence
                </div>
                <p className="text-lg font-medium text-foreground italic">
                  &ldquo;{currentQ.broken}&rdquo;
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {view.options.map((opt, idx) => {
                  const isAnswer = opt === view.correctValue
                  const isPicked = selected === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={!!feedback}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-start text-base font-medium transition-all',
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
                      <span className="me-2 font-bold text-muted-foreground">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div>
                  <div
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <div className="flex items-center gap-2 font-medium">
                      {feedback === 'correct' ? (
                        <>
                          <CheckCircle className="size-4" /> Spot on. Nicely repaired.
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> Not quite. The correct version is option{' '}
                          {correctLetter}.
                        </>
                      )}
                    </div>
                  </div>
                  <AnswerExplanation
                    game="punctuation-repair"
                    question={BANK.key(currentQ)}
                    correct={feedback === 'correct'}
                    chosen={selected !== null ? view.options[selected] : null}
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
