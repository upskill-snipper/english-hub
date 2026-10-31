'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { useDealer } from '@/lib/games/start-round'
import { BANK, type ApostropheQuestion } from '@/data/games/banks/apostrophe-ace'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/apostrophe-ace.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/apostrophe-ace.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

const ROUND_SIZE = 15

/** The stem every question shares. Also handed to the shuffle as the question text. */
const PROMPT = 'Which sentence is punctuated correctly?'

/**
 * No question carries an id and they all share one stem, so the option set is
 * the only stable identity this bank offers for a shuffle seed.
 */
function questionSeedId(question: ApostropheQuestion): string {
  return question.options.join('|')
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ApostropheAcePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<ApostropheQuestion[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [sessionSalt, setSessionSalt] = useState('')
  const round = useGameRound('apostrophe-ace')
  const deal = useDealer(BANK)

  const currentQuestion = questions[qIdx] ?? null
  const answered = selected !== null

  /**
   * The options as the student sees them, plus the correct option's VALUE.
   *
   * WHAT WAS WRONG (fixed 20 September 2026). The QUESTION pool was shuffled,
   * the OPTIONS were not, and every comparison was `idx === answerIndex`. 54 of
   * the 55 questions in this bank answer at index 1, so a student who clicked
   * the second option every time scored 98.2% while reading nothing - the worst
   * single bank on the site. The options are now shuffled per attempt and
   * scored by value. Never compare a display index with `answerIndex` again.
   */
  const view = useMemo(
    () =>
      currentQuestion
        ? shuffledOptionsFor(
            currentQuestion.options,
            currentQuestion.answerIndex,
            questionSeedId(currentQuestion),
            sessionSalt,
            PROMPT,
          )
        : { options: [] as string[], correctValue: '' },
    [currentQuestion, sessionSalt],
  )

  const handleStart = useCallback(() => {
    // Minted here rather than during render: newSessionSalt calls Math.random,
    // which would not agree between the server and client paint.
    setSessionSalt(newSessionSalt())
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
   * A click. The question is marked and recorded for the student's account, and
   * the explanation (src/data/games/explanations/apostrophe-ace.ts) replaces the
   * one-line explanation the bank used to carry. The student goes on with the
   * button, as before. No `chose` is recorded: the options are whole sentences,
   * not short labels.
   */
  const handleSelect = useCallback(
    (idx: number) => {
      if (!currentQuestion || answered) return
      const correct = view.options[idx] === view.correctValue
      setSelected(idx)
      setTotalAnswered((t) => t + 1)
      if (correct) {
        setScore((s) => s + 1)
      }
      round.record({
        question: BANK.key(currentQuestion),
        correct,
        tag: currentQuestion.ruleTested,
      })
    },
    [currentQuestion, answered, round, view],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
    } else {
      setQIdx((i) => i + 1)
      setSelected(null)
    }
  }, [qIdx, questions.length])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const isCorrect = selected !== null && view.options[selected] === view.correctValue

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
          gameId="apostrophe-ace"
          audience="ks3"
          title="Apostrophe Ace"
          description="Pick the sentence where every apostrophe is used correctly. Contractions, possession and the no-apostrophe-for-plurals trap all feature."
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
                {/* The rule badge (ruleTested) that sat here gave answers away
                    ("No apostrophe for plurals"), so it went on 24 October 2026;
                    a question that needs the number of owners says it in its
                    prompt (src/data/games/banks/apostrophe-ace.ts). */}
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-sm text-muted-foreground">{PROMPT}</p>
                {currentQuestion.prompt && (
                  <p className="text-sm font-medium text-foreground">{currentQuestion.prompt}</p>
                )}
                {currentQuestion.source && (
                  <p className="text-xs italic text-muted-foreground">{currentQuestion.source}</p>
                )}
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {view.options.map((option, idx) => {
                  const isAnswer = option === view.correctValue
                  const isPicked = idx === selected
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={answered}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-start text-base font-medium text-foreground transition-all',
                        !answered &&
                          'border-border hover:border-primary hover:bg-accent cursor-pointer',
                        answered &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        answered &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        answered && !isAnswer && !isPicked && 'border-border opacity-60',
                      )}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>{option}</span>
                        {answered && isAnswer && (
                          <CheckCircle className="size-5 shrink-0 text-emerald-400" />
                        )}
                        {answered && isPicked && !isAnswer && (
                          <XCircle className="size-5 shrink-0 text-red-400" />
                        )}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {answered && (
                <div className="space-y-4">
                  <div
                    className={cn(
                      'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      isCorrect
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle className="size-4" /> Nicely done. That&apos;s spot on.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. Let&apos;s look at why.
                      </>
                    )}
                  </div>

                  <AnswerExplanation
                    game="apostrophe-ace"
                    question={BANK.key(currentQuestion)}
                    correct={isCorrect}
                    chosen={selected !== null ? view.options[selected] : null}
                  />

                  <div className="flex justify-center">
                    <Button onClick={handleNext}>
                      {qIdx + 1 >= questions.length ? 'See Results' : 'Next Question'}
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
