'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, type SynonymItem } from '@/data/games/banks/synonym-shuffle'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/synonym-shuffle.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/synonym-shuffle.ts.

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

/** Render the sentence, highlighting the weak word marked by ⟨…⟩ */
function renderSentence(sentence: string) {
  const match = sentence.match(/⟨(.+?)⟩/)
  if (!match) return <span>{sentence}</span>
  const [full, word] = match
  const idx = sentence.indexOf(full)
  return (
    <span>
      {sentence.slice(0, idx)}
      <span className="rounded-md bg-amber-500/15 px-1.5 py-0.5 font-bold text-clay-600 line-through decoration-2">
        {word}
      </span>
      {sentence.slice(idx + full.length)}
    </span>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SynonymShufflePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<SynonymItem[]>([])
  const [idx, setIdx] = useState(0)
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('synonym-shuffle')
  const deal = useDealer(BANK)

  const current = items[idx] ?? null

  // Re-shuffle options whenever the question changes
  useEffect(() => {
    if (current) setShuffledOptions(shuffle(current.options))
  }, [idx, items])

  const handleStart = useCallback(() => {
    const picked = deal(ROUND_SIZE)
    setItems(picked)
    setIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setGameState('playing')
  }, [deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (option: string) => {
      if (!current || feedback) return
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      const correct = option === current.answer
      if (correct) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      // Recorded for the student's account. The wrong pick is one of the four
      // fixed words, so it may be sent as `chose`.
      round.record({
        question: BANK.key(current),
        correct,
        tag: BANK.tag?.(current),
        chose: correct ? undefined : option,
      })
    },
    [current, feedback, round],
  )

  const handleNext = useCallback(() => {
    if (idx + 1 >= items.length) {
      setGameState('finished')
    } else {
      setIdx((i) => i + 1)
      setSelected(null)
      setFeedback(null)
    }
  }, [idx, items.length])

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
          gameId="synonym-shuffle"
          audience="ks3"
          title="Synonym Shuffle"
          description="A tired word is hiding in each sentence. Pick the most precise, ambitious synonym for that context, because synonyms aren't always swappable."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || items.length || ROUND_SIZE}
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
                  Sentence {idx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Upgrade the crossed-out word
                </p>
                <p className="text-lg sm:text-xl font-medium leading-relaxed text-foreground">
                  {renderSentence(current.sentence)}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shuffledOptions.map((option) => {
                  const isAnswer = option === current.answer
                  const isPicked = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      disabled={!!feedback}
                      className={cn(
                        'flex items-center justify-center gap-2 rounded-lg border px-4 py-3.5 text-base font-medium transition-all',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent active:translate-y-px',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback &&
                          !isAnswer &&
                          !isPicked &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      {feedback && isAnswer && <CheckCircle className="size-4 shrink-0" />}
                      {feedback && isPicked && !isAnswer && <XCircle className="size-4 shrink-0" />}
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation */}
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
                        <CheckCircle className="size-4" /> Brilliant, that&apos;s the sharpest
                        choice.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The best fit was{' '}
                        <span className="font-bold">{current.answer}</span>.
                      </>
                    )}
                  </div>

                  {/* Replaces the one-line nuance note each sentence used to carry. */}
                  <AnswerExplanation
                    game="synonym-shuffle"
                    question={BANK.key(current)}
                    correct={feedback === 'correct'}
                    chosen={selected}
                  />

                  <div className="flex justify-center">
                    <Button onClick={handleNext}>
                      {idx + 1 >= items.length ? 'See Results' : 'Next Sentence'}
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
