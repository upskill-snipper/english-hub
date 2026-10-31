'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, ArrowUp, ArrowDown } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { newSessionSalt, shuffleOptionsDeterministic } from '@/lib/quiz/shuffle'
import { BANK, isGap, type JumbleItem } from '@/data/games/banks/paragraph-jumble'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The paragraphs are in src/data/games/banks/paragraph-jumble.ts (moved there
// on 16 October 2026), and the explanation of each order in
// src/data/games/explanations/paragraph-jumble.ts.
//
// REBUILT FOR DEPTH (24 October 2026). The genre was shown above every
// paragraph, and it told an argument's shape before a sentence was read: it is
// no longer shown. A real paragraph's `source` is shown under its topic. And a
// question may now be a "choose the connective" gap (isGap): two or three
// sentences with ___ where the linking word goes, and four options, shuffled
// with the shared shuffle and marked by value, as every other options game is.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Shuffle an array of indices, guaranteeing the result is not already in order. */
function shuffleOrder(length: number): number[] {
  const original = Array.from({ length }, (_, i) => i)
  let order = shuffle(original)
  let guard = 0
  while (order.every((v, i) => v === i) && guard < 20) {
    order = shuffle(original)
    guard++
  }
  return order
}

const ROUND_LENGTH = 8

/** A gap's text with the gap shown as a blank, or filled with `fill` once answered. */
function GapText({ text, fill }: { text: string; fill?: string }) {
  const [before, after] = text.split('___')
  return (
    <>
      {before}
      <span
        className={cn(
          'mx-0.5 inline-block border-b-2 text-center font-semibold',
          // Filled, the gap fits its word, so a comma after it sits close.
          fill ? 'border-emerald-500 text-emerald-400' : 'min-w-[4.5rem] border-primary/60',
        )}
      >
        {fill ?? '\u00a0'}
      </span>
      {after}
    </>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ParagraphJumblePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [rounds, setRounds] = useState<JumbleItem[]>([])
  const [rIdx, setRIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  // `order` holds indices into the current paragraph's sentences array.
  const [order, setOrder] = useState<number[]>([])
  const [checked, setChecked] = useState(false)
  const [wasCorrect, setWasCorrect] = useState(false)
  // A gap question's options as shown, and the one the student chose.
  const [choices, setChoices] = useState<string[]>([])
  const [chosen, setChosen] = useState<string | null>(null)
  const [salt] = useState(newSessionSalt)
  const round = useGameRound('paragraph-jumble')
  const deal = useDealer(BANK)

  const current = rounds[rIdx] ?? null

  const loadParagraph = useCallback(
    (item: JumbleItem) => {
      if (isGap(item)) {
        setOrder([])
        setChoices(shuffleOptionsDeterministic(item.options, `${BANK.key(item)}|${salt}`))
      } else {
        setOrder(shuffleOrder(item.sentences.length))
        setChoices([])
      }
      setChosen(null)
      setChecked(false)
      setWasCorrect(false)
    },
    [salt],
  )

  const handleStart = useCallback(() => {
    const picked = deal(ROUND_LENGTH)
    setRounds(picked)
    setRIdx(0)
    setScore(0)
    setAnswered(0)
    if (picked[0]) loadParagraph(picked[0])
    setGameState('playing')
  }, [deal, loadParagraph])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const move = useCallback(
    (pos: number, dir: -1 | 1) => {
      if (checked) return
      setOrder((prev) => {
        const target = pos + dir
        if (target < 0 || target >= prev.length) return prev
        const next = [...prev]
        ;[next[pos], next[target]] = [next[target], next[pos]]
        return next
      })
    },
    [checked],
  )

  /**
   * Checking marks the order and records it for the student's account. The
   * student builds an order rather than choosing an option, so only right or
   * wrong is recorded. The explanation of the order then shows until they
   * press Next (16 October 2026).
   */
  const handleCheck = useCallback(() => {
    if (!current || checked || isGap(current)) return
    const correct = order.every((v, i) => v === i)
    setChecked(true)
    setWasCorrect(correct)
    setAnswered((a) => a + 1)
    if (correct) setScore((s) => s + 1)
    round.record({ question: BANK.key(current), correct, tag: current.genre })
  }, [current, checked, order, round])

  /** A gap question is marked when an option is chosen, by its text: a point if right. */
  const handleChoose = useCallback(
    (option: string) => {
      if (!current || checked || !isGap(current)) return
      const correct = option === current.answer
      setChosen(option)
      setChecked(true)
      setWasCorrect(correct)
      setAnswered((a) => a + 1)
      if (correct) setScore((s) => s + 1)
      round.record({
        question: BANK.key(current),
        correct,
        tag: current.link,
        ...(correct ? {} : { chose: option }),
      })
    },
    [current, checked, round],
  )

  const handleNext = useCallback(() => {
    if (rIdx + 1 >= rounds.length) {
      setGameState('finished')
      return
    }
    const nextIdx = rIdx + 1
    setRIdx(nextIdx)
    loadParagraph(rounds[nextIdx])
  }, [rIdx, rounds, loadParagraph])

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
          gameId="paragraph-jumble"
          audience="ks3"
          title="Paragraph Jumble"
          description="Put each paragraph's sentences back in order, or choose the word that links two sentences. Use the topic sentence, pronouns, time and cause as your clues."
          difficulty="Crossover"
          score={score}
          maxScore={answered > 0 ? answered : rounds.length || ROUND_LENGTH}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress (the genre is no longer shown: it told an argument's shape) */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {rIdx + 1} of {rounds.length}
                </span>
                <span>{score} correct so far</span>
              </div>

              {isGap(current) ? (
                <div className="space-y-4">
                  {/* A gap: the sentences, and the linking word to choose */}
                  <div className="rounded-xl border border-border bg-card p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Choose the word or phrase that links these sentences
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      <GapText text={current.text} fill={checked ? current.answer : undefined} />
                    </p>
                    {current.source && (
                      <p className="mt-2 text-xs text-muted-foreground">{current.source}</p>
                    )}
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {choices.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleChoose(option)}
                        disabled={checked}
                        className={cn(
                          'rounded-lg border px-4 py-3 text-sm font-medium transition-colors',
                          !checked && 'border-border bg-card hover:bg-accent',
                          checked &&
                            option === current.answer &&
                            'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                          checked &&
                            option === chosen &&
                            option !== current.answer &&
                            'border-red-500 bg-red-500/10 text-red-400',
                          checked &&
                            option !== chosen &&
                            option !== current.answer &&
                            'border-border bg-card opacity-60',
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* Topic prompt */}
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Topic</p>
                    <p className="mt-1 text-base font-semibold text-foreground">{current.topic}</p>
                    {current.source && (
                      <p className="mt-1 text-xs text-muted-foreground">{current.source}</p>
                    )}
                  </div>

                  {/* Sentence list */}
                  <ol className="space-y-2">
                    {order.map((sentenceIdx, pos) => {
                      const isInRightPlace = checked && sentenceIdx === pos
                      return (
                        <li
                          key={sentenceIdx}
                          className={cn(
                            'flex items-start gap-3 rounded-lg border px-3 py-3 transition-colors',
                            !checked && 'border-border bg-card',
                            checked && isInRightPlace && 'border-emerald-500 bg-emerald-500/10',
                            checked && !isInRightPlace && 'border-red-500 bg-red-500/10',
                          )}
                        >
                          <span
                            className={cn(
                              'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                              checked && isInRightPlace
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : checked
                                  ? 'bg-red-500/20 text-red-400'
                                  : 'bg-primary/10 text-primary',
                            )}
                          >
                            {pos + 1}
                          </span>
                          <p className="flex-1 text-sm leading-relaxed text-foreground">
                            {current.sentences[sentenceIdx]}
                          </p>
                          {!checked && (
                            <div className="flex shrink-0 flex-col gap-1">
                              <button
                                onClick={() => move(pos, -1)}
                                disabled={pos === 0}
                                aria-label="Move sentence up"
                                className="rounded-md border border-border p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
                              >
                                <ArrowUp className="size-4" />
                              </button>
                              <button
                                onClick={() => move(pos, 1)}
                                disabled={pos === order.length - 1}
                                aria-label="Move sentence down"
                                className="rounded-md border border-border p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
                              >
                                <ArrowDown className="size-4" />
                              </button>
                            </div>
                          )}
                        </li>
                      )
                    })}
                  </ol>
                </>
              )}

              {/* Feedback + reveal */}
              {checked && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      wasCorrect
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {wasCorrect ? (
                      <>
                        <CheckCircle className="size-4" />{' '}
                        {isGap(current)
                          ? 'Right. That word links the two ideas.'
                          : 'Brilliant. That paragraph flows perfectly.'}
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" />{' '}
                        {isGap(current)
                          ? 'Not quite. The right word is shown in the gap.'
                          : 'Not quite. Here is the order that works best.'}
                      </>
                    )}
                  </div>

                  {!wasCorrect && !isGap(current) && (
                    <div className="rounded-lg border border-border bg-card p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Correct paragraph
                      </p>
                      <p className="text-sm leading-relaxed text-foreground">
                        {current.sentences.join(' ')}
                      </p>
                    </div>
                  )}

                  <AnswerExplanation
                    game="paragraph-jumble"
                    question={BANK.key(current)}
                    correct={wasCorrect}
                    chosen={chosen}
                  />
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-center">
                {!checked ? (
                  !isGap(current) && <Button onClick={handleCheck}>Check Order</Button>
                ) : (
                  <Button onClick={handleNext}>
                    {rIdx + 1 >= rounds.length ? 'See Results' : 'Next Question'}
                  </Button>
                )}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
