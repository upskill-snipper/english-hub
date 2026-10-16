'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, Type } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { BANK, QUESTION_BANK, type CapitalQuestion } from '@/data/games/banks/capital-letter-quest'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/capital-letter-quest.ts (moved there
// on 16 October 2026), and the explanation for each in
// src/data/games/explanations/capital-letter-quest.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const QUESTIONS_PER_ROUND = 15
const OPTION_LABELS = ['A', 'B', 'C', 'D']

/** The stem every question shares. Also handed to the shuffle as the question text. */
const PROMPT = 'Which sentence is written correctly?'

/**
 * No question carries an id and they all share one stem, so the option set is
 * the only stable identity this bank offers for a shuffle seed.
 */
function questionSeedId(question: CapitalQuestion): string {
  return question.options.join('|')
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function CapitalLetterQuestPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<CapitalQuestion[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [sessionSalt, setSessionSalt] = useState('')
  const round = useGameRound('capital-letter-quest')

  const currentQuestion = questions[qIdx] ?? null

  /**
   * The options as the student sees them, plus the correct option's VALUE.
   *
   * WHAT WAS WRONG (fixed 20 September 2026). The QUESTION pool was shuffled,
   * the OPTIONS were not, and every comparison was `index === answerIndex`. 53
   * of the 60 questions in this bank answer at index 2, so a student who
   * clicked C every time scored 88.3% while reading nothing. The options are
   * now shuffled per attempt and scored by value. The A/B/C/D badge labels the
   * shuffled position, which is what the student is actually choosing.
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
    const dealt = shuffle(QUESTION_BANK).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(dealt)
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
   * left on screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next question
   * 2.2 seconds after an answer, showing one line of rule. Each answer now
   * comes with an explanation
   * (src/data/games/explanations/capital-letter-quest.ts), and a student cannot
   * read that in 2.2 seconds, so the question stays on screen until they choose
   * to go on.
   */
  const handleSelect = useCallback(
    (index: number) => {
      if (!currentQuestion || feedback) return
      const isCorrect = view.options[index] === view.correctValue
      setSelected(index)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQuestion),
        correct: isCorrect,
        tag: BANK.tag?.(currentQuestion),
        chose: isCorrect ? undefined : view.options[index],
      })
    },
    [currentQuestion, feedback, round, view],
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
          gameId="capital-letter-quest"
          audience="eal"
          title="Capital Letter Quest"
          description="Read the sentence, then choose the version with the correct capital letters. Watch for names, places, days, months, languages, titles and brands."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || QUESTIONS_PER_ROUND}
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

              {/* Prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Type className="size-4" />
                  {PROMPT}
                </div>
                <p className="text-sm text-muted-foreground">
                  Pick the option with capital letters in all the right places.
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {view.options.map((option, index) => {
                  const isAnswer = option === view.correctValue
                  const isPicked = selected === index
                  const showCorrect = feedback && isAnswer
                  const showWrong = feedback && isPicked && !isAnswer

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelect(index)}
                      disabled={!!feedback}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border px-4 py-3 text-start text-base font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !showCorrect && !showWrong && 'border-border opacity-50',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold',
                          showCorrect
                            ? 'border-emerald-500 text-emerald-400'
                            : showWrong
                              ? 'border-red-500 text-red-400'
                              : 'border-border text-muted-foreground',
                        )}
                      >
                        {OPTION_LABELS[index]}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showCorrect && <CheckCircle className="size-5 shrink-0" />}
                      {showWrong && <XCircle className="size-5 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation */}
              {feedback && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'rounded-lg px-4 py-3 text-sm',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    <p className="font-semibold">
                      {feedback === 'correct'
                        ? 'Brilliant. That is exactly right.'
                        : 'Not quite. Keep going, you are learning.'}
                    </p>
                  </div>

                  <AnswerExplanation
                    game="capital-letter-quest"
                    question={BANK.key(currentQuestion)}
                    correct={feedback === 'correct'}
                    chosen={selected !== null ? view.options[selected] : null}
                  />

                  <div className="flex justify-center">
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
