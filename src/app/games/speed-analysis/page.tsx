'use client'

import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, Clock, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, QUESTIONS, type AnalysisQuestion } from '@/data/games/banks/speed-analysis'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/speed-analysis.ts (moved there on
// 13 October 2026), and the explanation for each in
// src/data/games/explanations/speed-analysis.ts.

const SECONDS_PER_QUESTION = 30
const QUESTIONS_PER_ROUND = 20
const PROMPT = 'What literary device is being used?'

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

export default function SpeedAnalysisPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<AnalysisQuestion[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<string | null>(null)
  // True once the question is over: answered, or out of time with no answer.
  const [revealed, setRevealed] = useState(false)
  const [timer, setTimer] = useState(SECONDS_PER_QUESTION)
  const round = useGameRound('speed-analysis')
  const [sessionSalt, setSessionSalt] = useState('')
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentQ = questions[qIdx] ?? null

  /**
   * The options as the student sees them, plus the right device's VALUE.
   *
   * WHAT WAS WRONG (found 13 October 2026). The QUESTION pool was shuffled and
   * each question's OPTIONS were rendered as written, with the right device
   * first in 29 of the 30 questions and second in the other. A student who
   * clicked the first button every time, reading nothing, scored about 97 per
   * cent and was shown a GCSE grade 9. Marking was already by value; the order
   * alone gave the answer away. The options are now shuffled per attempt, and
   * a click is marked by the option itself against `view.correctValue`, never
   * by where it sits.
   */
  const view = useMemo(
    () =>
      currentQ
        ? shuffledOptionsFor(
            currentQ.options,
            currentQ.options.indexOf(currentQ.correctDevice),
            // A question has no id, and no two extracts are the same.
            `speed|${currentQ.extract}`,
            sessionSalt,
            PROMPT,
          )
        : { options: [] as string[], correctValue: '' },
    [currentQ, sessionSalt],
  )

  // Timer countdown per question. The clock only counts; running out is
  // handled below, outside the state updater, which React may call twice.
  useEffect(() => {
    if (gameState !== 'playing' || revealed) return
    timerRef.current = setInterval(() => {
      setTimer((t) => Math.max(0, t - 1))
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [gameState, qIdx, revealed])

  const handleStart = useCallback(() => {
    // Minted here rather than during render: newSessionSalt calls Math.random,
    // which would not agree between the server and client paint.
    setSessionSalt(newSessionSalt())
    const shuffled = shuffle(QUESTIONS).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(shuffled)
    setQIdx(0)
    setScore(0)
    setAnswered(null)
    setRevealed(false)
    setTimer(SECONDS_PER_QUESTION)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    setGameState('finished')
  }, [])

  /**
   * A click, or the timer running out (null). The question is marked, recorded
   * for the student's account, and then left on screen with its explanation
   * until they choose to go on.
   *
   * WHAT CHANGED (13 October 2026). The game used to move to the next extract
   * 1.2 seconds after an answer, showing only red or green. The founder found
   * the answers too shallow; each now comes with why it is right and why the
   * option chosen is not (src/data/games/explanations/speed-analysis.ts), and a
   * student cannot read that in 1.2 seconds. The 30-second clock stops when the
   * question is answered, so reading time is never taken from the next one.
   */
  const handleAnswer = useCallback(
    (choice: string | null) => {
      if (revealed || !currentQ) return
      if (timerRef.current) clearInterval(timerRef.current)
      const correct = choice !== null && choice === view.correctValue
      setAnswered(choice)
      setRevealed(true)
      if (correct) setScore((s) => s + 1)
      round.record({
        question: BANK.key(currentQ),
        correct,
        tag: currentQ.correctDevice,
        chose: choice ?? undefined,
      })
    },
    [revealed, currentQ, view.correctValue, round],
  )

  // Out of time: the question is over, unanswered, and counts as missed.
  useEffect(() => {
    if (gameState === 'playing' && !revealed && timer === 0) handleAnswer(null)
  }, [timer, gameState, revealed, handleAnswer])

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
      return
    }
    setQIdx((i) => i + 1)
    setAnswered(null)
    setRevealed(false)
    setTimer(SECONDS_PER_QUESTION)
  }, [qIdx, questions.length])

  const timerColor =
    timer <= 5 ? 'text-red-400' : timer <= 15 ? 'text-clay-600' : 'text-muted-foreground'

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
          gameId="speed-analysis"
          audience="gcse"
          title="Speed Analysis"
          description="Identify the literary device in each extract. 30 seconds per question, 20 questions per round."
          difficulty="Higher"
          score={score}
          maxScore={questions.length || QUESTIONS_PER_ROUND}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentQ && (
            <div className="space-y-6">
              {/* Progress + Timer */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Question {qIdx + 1} of {questions.length}
                </span>
                <span className={cn('flex items-center gap-1 font-mono font-bold', timerColor)}>
                  <Clock className="size-3.5" />
                  {timer}s
                </span>
              </div>

              {/* Timer bar */}
              <div className="h-1 rounded-full bg-border overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-1000 ease-linear',
                    timer <= 5 ? 'bg-red-500' : timer <= 15 ? 'bg-amber-500' : 'bg-primary',
                  )}
                  style={{ width: `${(timer / SECONDS_PER_QUESTION) * 100}%` }}
                />
              </div>

              {/* Extract */}
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-base italic text-foreground leading-relaxed whitespace-pre-line">
                  {currentQ.extract}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{currentQ.source}</p>
              </div>

              <p className="text-center text-sm font-semibold text-muted-foreground">{PROMPT}</p>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {view.options.map((opt) => {
                  const isCorrect = opt === view.correctValue
                  const isChosen = opt === answered
                  let optClass = 'border-border hover:border-primary/50 hover:bg-primary/5'
                  if (revealed) {
                    if (isCorrect)
                      optClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                    else if (isChosen) optClass = 'border-red-500 bg-red-500/10 text-red-400'
                    else optClass = 'opacity-40 border-border'
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={revealed}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-150 text-start',
                        optClass,
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {revealed && (
                <div>
                  {answered === null && (
                    <p className="text-sm font-medium text-clay-600">
                      Out of time. The answer was {view.correctValue}.
                    </p>
                  )}
                  <AnswerExplanation
                    game="speed-analysis"
                    question={BANK.key(currentQ)}
                    correct={answered === view.correctValue}
                    chosen={answered}
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
