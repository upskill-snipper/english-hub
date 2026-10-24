'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, Lightbulb, Zap } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, WORD_BANK, type TrickyWord } from '@/data/games/banks/tricky-word-spelling'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The words are in src/data/games/banks/tricky-word-spelling.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/tricky-word-spelling.ts.

// ─── Config ────────────────────────────────────────────────────────────────────

const ROUND_SIZE = 18
const TIME_LIMIT = 90
const PROMPT = 'Which spelling is correct?'

// ─── Helpers ───────────────────────────────────────────────────────────────────

// ─── Component ─────────────────────────────────────────────────────────────────

/**
 * ANSWER POSITION WAS THE ANSWER (fixed 20 September 2026).
 *
 * The sprint shuffled the WORD pool and left each word's four spellings in
 * authored order, then scored with `idx === current.answerIndex`. 38 of the 69
 * items in WORD_BANK carry answerIndex 1 and 27 carry 2, while none carries 3,
 * so tapping the second tile every time scored 55% and tapping second-or-third
 * covered 94% of the bank. Under a 90-second timer that is the fastest way to
 * play, which is the worst thing a spelling game can teach.
 *
 * The four spellings are now shuffled per attempt from a salt created when the
 * attempt starts, and the tapped tile is judged on its TEXT, never its slot.
 */
export default function TrickyWordSpellingPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [words, setWords] = useState<TrickyWord[]>([])
  const round = useGameRound('tricky-word-spelling')
  const deal = useDealer(BANK)
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  /** Display position of the tapped tile, never used to judge it. */
  const [picked, setPicked] = useState<number | null>(null)
  /** Minted in the start handler, not in render: newSessionSalt calls Math.random. */
  const [salt, setSalt] = useState('')

  const current = words[qIdx] ?? null

  const view = useMemo(
    () =>
      current
        ? shuffledOptionsFor(
            current.options,
            current.answerIndex,
            current.options.join('|'),
            salt,
            PROMPT,
          )
        : null,
    [current, salt],
  )

  const handleStart = useCallback(() => {
    setWords(deal(ROUND_SIZE))
    setSalt(newSessionSalt())
    setQIdx(0)
    setScore(0)
    setAnswered(0)
    setPicked(null)
    setGameState('playing')
  }, [deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A tap. The word is marked, recorded for the student's account (the wrong
   * spelling they tapped comes from the four on offer, never from typing), and
   * then left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The sprint used to move to the next word
   * 1.5 seconds after a tap. Each answer now comes with why the right spelling
   * is right and why the one tapped is not
   * (src/data/games/explanations/tricky-word-spelling.ts), which cannot be read
   * in 1.5 seconds. The 90-second round clock is held while it shows (GameShell
   * holdClock), so reading time is never taken from the words still to come.
   */
  const handlePick = useCallback(
    (idx: number, value: string) => {
      if (!view || !current || picked !== null) return
      const correct = value === view.correctValue
      setPicked(idx)
      setAnswered((a) => a + 1)
      if (correct) setScore((s) => s + 1)
      round.record({
        question: BANK.key(current),
        correct,
        chose: correct ? undefined : value,
      })
    },
    [view, current, picked, round],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= words.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setPicked(null)
  }, [qIdx, words.length])

  // Reset feedback if a round restarts mid-play
  useEffect(() => {
    if (gameState === 'idle') setPicked(null)
  }, [gameState])

  const accuracyPct = answered > 0 ? Math.round((score / answered) * 100) : 0
  const pickedValue = view && picked !== null ? view.options[picked] : null
  const isCorrect = pickedValue !== null && pickedValue === view?.correctValue

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
          gameId="tricky-word-spelling"
          audience="eal"
          title="Tricky Word Sprint"
          description="Spot the correct spelling of everyday words that trip people up. Tap fast: you have 90 seconds."
          difficulty="Foundation"
          score={score}
          maxScore={answered || words.length || ROUND_SIZE}
          timeLimitSeconds={TIME_LIMIT}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
          holdClock={picked !== null}
        >
          {current && view && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="size-4 text-primary" />
                  Word {qIdx + 1} of {words.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">{PROMPT}</p>
              </div>

              {/* Options - shuffled per attempt, so a tile's slot carries no information */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {view.options.map((opt, idx) => {
                  const isAnswer = opt === view.correctValue
                  const isPicked = picked === idx
                  const showState = picked !== null
                  return (
                    <button
                      key={idx}
                      onClick={() => handlePick(idx, opt)}
                      disabled={showState}
                      className={cn(
                        'rounded-lg border px-4 py-4 text-center text-lg font-semibold transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !showState &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent active:translate-y-px',
                        showState &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showState &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        showState &&
                          !isAnswer &&
                          !isPicked &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + memory tip + explanation, until the student goes on */}
              {picked !== null && (
                <div>
                  <div className="space-y-3">
                    <div
                      className={cn(
                        'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                        isCorrect
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : 'text-red-400 bg-red-500/10',
                      )}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle className="size-4" /> Spot on, nice work
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" /> The correct spelling is{' '}
                          <span className="font-bold">{view.correctValue}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-start gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                      <Lightbulb className="size-4 shrink-0 text-clay-600 mt-0.5" />
                      <span>
                        <span className="font-semibold text-foreground">Memory tip: </span>
                        {current.tip}
                      </span>
                    </div>
                  </div>
                  <AnswerExplanation
                    game="tricky-word-spelling"
                    question={BANK.key(current)}
                    correct={isCorrect}
                    chosen={pickedValue}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {qIdx + 1 >= words.length ? 'See your results' : 'Next question'}
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
