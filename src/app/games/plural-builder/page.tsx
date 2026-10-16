'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, PLURAL_BANK, type PluralWord } from '@/data/games/banks/plural-builder'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The words are in src/data/games/banks/plural-builder.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/plural-builder.ts.

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

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PluralBuilderPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [words, setWords] = useState<PluralWord[]>([])
  const [wIdx, setWIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('plural-builder')
  const inputRef = useRef<HTMLInputElement>(null)

  const currentWord = words[wIdx] ?? null

  // Focus input on new word
  useEffect(() => {
    if (gameState === 'playing' && !feedback) {
      inputRef.current?.focus()
    }
  }, [wIdx, gameState, feedback])

  const handleStart = useCallback(() => {
    setWords(shuffle(PLURAL_BANK).slice(0, ROUND_SIZE))
    setWIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setInput('')
    setFeedback(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * An answer is typed, so this records whether it was right and which rule
   * the word shows, and nothing else. The word the student typed is never
   * recorded or sent: it is their own text.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next word 1.8
   * seconds after a right answer and 2.6 after a wrong one, showing a single
   * line of rule. Each answer now comes with an explanation
   * (src/data/games/explanations/plural-builder.ts), and a student cannot read
   * that in 2.6 seconds, so the word stays on screen until they choose to go on.
   */
  const handleSubmit = useCallback(() => {
    if (!currentWord || feedback) return
    const trimmed = input.trim().toLowerCase()
    const correct = currentWord.plural.toLowerCase()
    setTotalAnswered((t) => t + 1)

    const isCorrect = trimmed === correct
    if (isCorrect) {
      setScore((s) => s + 1)
      setFeedback('correct')
    } else {
      setFeedback('wrong')
    }
    round.record({
      question: BANK.key(currentWord),
      correct: isCorrect,
      tag: BANK.tag?.(currentWord),
    })
  }, [currentWord, feedback, input, round])

  const handleNext = useCallback(() => {
    if (wIdx + 1 >= words.length) {
      setGameState('finished')
      return
    }
    setWIdx((i) => i + 1)
    setInput('')
    setFeedback(null)
  }, [wIdx, words.length])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

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
          gameId="plural-builder"
          audience="eal"
          title="Plural Builder"
          description="Read the singular noun, then type its plural. Learn the spelling rule after each one."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || words.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentWord && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Word {wIdx + 1} of {words.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Singular card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  One singular
                </p>
                <p className="text-3xl font-bold text-foreground">{currentWord.singular}</p>
                <p className="text-sm text-muted-foreground">
                  Now write the plural: more than one.
                </p>
              </div>

              {/* Input area */}
              <div className="space-y-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={!!feedback}
                  placeholder="Type the plural..."
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  className={cn(
                    'w-full rounded-lg border bg-card px-4 py-3 text-center text-lg font-medium text-foreground outline-none transition-all',
                    'focus:border-primary focus:ring-2 focus:ring-primary/20',
                    feedback === 'correct' &&
                      'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                    feedback === 'wrong' && 'border-red-500 bg-red-500/10 text-red-400',
                    !feedback && 'border-border',
                  )}
                />

                {/* Feedback */}
                {feedback && (
                  <div className="space-y-2">
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
                          <CheckCircle className="size-4" /> Brilliant. Spot on.
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> Not quite. The plural is:{' '}
                          <span className="font-bold">{currentWord.plural}</span>
                        </>
                      )}
                    </div>
                    <AnswerExplanation
                      game="plural-builder"
                      question={BANK.key(currentWord)}
                      correct={feedback === 'correct'}
                    />
                    <div className="flex justify-center pt-2">
                      <Button onClick={handleNext} autoFocus>
                        {wIdx + 1 >= words.length ? 'See your results' : 'Next question'}
                        <ArrowRight className="size-4 ms-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {!feedback && (
                  <div className="flex justify-center">
                    <Button onClick={handleSubmit} disabled={input.trim().length === 0}>
                      Check Plural
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
