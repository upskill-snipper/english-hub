'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, MessageCircle } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, type Exchange } from '@/data/games/banks/greetings-dialogue'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The exchanges are in src/data/games/banks/greetings-dialogue.ts (moved there
// on 16 October 2026), and the explanation for each in
// src/data/games/explanations/greetings-dialogue.ts.

const ROUND_SIZE = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

// ─── Component ─────────────────────────────────────────────────────────────────

export default function GreetingsDialoguePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [dealt, setDealt] = useState<Exchange[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [salt, setSalt] = useState('')
  const round = useGameRound('greetings-dialogue')
  const deal = useDealer(BANK)

  const current = dealt[idx] ?? null
  const revealed = selected !== null

  const encouragement = useMemo(
    () => ['Great job.', 'Well done.', 'Spot on.', 'Perfect.', 'Lovely.'],
    [],
  )

  /**
   * SHUFFLE THE OPTIONS, SCORE BY VALUE (20 September 2026).
   *
   * This round shuffled the QUESTION pool, left `options` in authored order and
   * scored with `choice === current.answerIndex`. 36 of the 46 exchanges in the
   * bank have their answer at index 0, so a student who clicked the first reply
   * every time scored 78% without reading anything.
   *
   * Every comparison against the answer now goes through `view.correctValue`,
   * because after a shuffle `answerIndex` points at whatever landed in that
   * slot. The salt is minted in `handleStart`, never during render:
   * `newSessionSalt` calls Math.random, and a render-time call in a client
   * component gives the server and the client different orders.
   */
  const view = useMemo(() => {
    if (!current) return { options: [] as string[], correctValue: '' }
    return shuffledOptionsFor(
      current.options,
      current.answerIndex,
      `${current.situation}|${current.prompt}`,
      salt,
      `${current.situation} ${current.prompt}`,
    )
  }, [current, salt])

  const handleStart = useCallback(() => {
    setDealt(deal(ROUND_SIZE))
    setSalt(newSessionSalt())
    setIdx(0)
    setScore(0)
    setAnswered(0)
    setSelected(null)
    setGameState('playing')
  }, [deal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A click. The reply is marked, recorded for the student's account, and left
   * on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next exchange
   * 2.2 seconds after an answer, showing one line of note. Each answer now
   * comes with an explanation (src/data/games/explanations/greetings-dialogue.ts),
   * and a student cannot read that in 2.2 seconds, so the exchange stays on
   * screen until they choose to go on.
   */
  const handleSelect = useCallback(
    (choice: number) => {
      if (!current || revealed) return
      const isCorrect = view.options[choice] === view.correctValue
      setSelected(choice)
      setAnswered((a) => a + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
      }
      round.record({
        question: BANK.key(current),
        correct: isCorrect,
        tag: BANK.tag?.(current),
        chose: isCorrect ? undefined : view.options[choice],
      })
    },
    [current, revealed, round, view],
  )

  const handleNext = useCallback(() => {
    if (idx + 1 >= dealt.length) {
      setGameState('finished')
      return
    }
    setIdx((i) => i + 1)
    setSelected(null)
  }, [idx, dealt.length])

  const accuracyPct = answered > 0 ? Math.round((score / answered) * 100) : 0
  const isCorrectChoice = selected !== null && view.options[selected] === view.correctValue

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
          gameId="greetings-dialogue"
          audience="eal"
          title="What Do You Say?"
          description="Read each everyday situation and choose the most polite, natural reply. Perfect for practising greetings, thanks, apologies and requests."
          difficulty="Foundation"
          score={score}
          maxScore={answered || dealt.length || ROUND_SIZE}
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
                  Question {idx + 1} of {dealt.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Situation card */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="size-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {current.situation}
                  </p>
                </div>
                <p className="text-center text-lg font-semibold text-foreground">
                  {current.prompt}
                </p>
                <p className="text-center text-xs uppercase tracking-wider text-muted-foreground">
                  Choose the best reply
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {view.options.map((opt, i) => {
                  const isAnswer = opt === view.correctValue
                  const isPicked = i === selected
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={revealed}
                      className={cn(
                        'flex items-center justify-between gap-2 rounded-lg border px-4 py-3 text-start text-sm font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !revealed &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        revealed &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        revealed &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        revealed && !isAnswer && !isPicked && 'border-border opacity-60',
                      )}
                    >
                      <span>{opt}</span>
                      {revealed && isAnswer && <CheckCircle className="size-4 shrink-0" />}
                      {revealed && isPicked && !isAnswer && <XCircle className="size-4 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation */}
              {revealed && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm',
                      isCorrectChoice
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      {isCorrectChoice ? (
                        <>
                          <CheckCircle className="size-4" />
                          {encouragement[idx % encouragement.length]}
                        </>
                      ) : (
                        <>
                          <XCircle className="size-4" />
                          Not quite. Keep going, you&apos;re learning.
                        </>
                      )}
                    </div>
                  </div>

                  <AnswerExplanation
                    game="greetings-dialogue"
                    question={BANK.key(current)}
                    correct={isCorrectChoice}
                    chosen={selected !== null ? view.options[selected] : null}
                  />

                  <div className="flex justify-center">
                    <Button onClick={handleNext} autoFocus>
                      {idx + 1 >= dealt.length ? 'See your results' : 'Next question'}
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
