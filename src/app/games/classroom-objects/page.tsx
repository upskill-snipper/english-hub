'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, Volume2, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import {
  BANK,
  ITEM_BANK,
  NAME_PROMPT,
  PREP_OPTIONS,
  whereQuestion,
  type ClassroomQuestion,
} from '@/data/games/banks/classroom-objects'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The questions are in src/data/games/banks/classroom-objects.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/classroom-objects.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-GB'
  utterance.rate = 0.85
  window.speechSynthesis.speak(utterance)
}

const QUESTIONS_PER_ROUND = 15

type Question = ClassroomQuestion

function buildQuestions(): Question[] {
  const pool = shuffle(ITEM_BANK).slice(0, QUESTIONS_PER_ROUND)
  return pool.map((item, idx) => {
    // Every third question asks "Where is it?" for an item that has a sentence for one.
    const where = idx % 3 === 1 ? whereQuestion(item) : null
    if (where) {
      return { ...where, options: shuffle(PREP_OPTIONS) }
    }
    return {
      mode: 'name' as const,
      item,
      prompt: NAME_PROMPT,
      options: shuffle([item.word, ...item.distractors]),
      answer: item.word,
    }
  })
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ClassroomObjectsPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('classroom-objects')

  const currentQ = questions[qIdx] ?? null

  /**
   * What the page says aloud. A "Where is it?" question is read out when it
   * appears, as before: the sentence has a gap where the answer goes, so hearing
   * it gives nothing away. A picture question's word is said only once the
   * question has been answered, as part of the feedback.
   *
   * WHAT CHANGED (16 October 2026). The game asks the student to look at the
   * picture and choose the word, and it used to say that word 0.3 seconds after
   * each picture appeared, and again on Listen. A student could match the sound
   * to the written option without knowing the picture, so the question did not
   * test what it asked. Scoring is unchanged.
   */
  useEffect(() => {
    if (gameState !== 'playing' || !currentQ) return
    const answered = feedback !== null
    if (currentQ.mode === 'name' ? !answered : answered) return
    const phrase = currentQ.mode === 'name' ? currentQ.item.word : currentQ.prompt
    const timer = setTimeout(() => speak(phrase), 300)
    return () => clearTimeout(timer)
  }, [qIdx, gameState, feedback]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleStart = useCallback(() => {
    setQuestions(buildQuestions())
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
   * A tap on an option. The question is marked, recorded for the student's
   * account, and then left on screen with its explanation until they choose to
   * go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next question
   * 1.6 seconds after an answer, showing only the right word. Each answer now
   * comes with why it is right and why the option chosen is not
   * (src/data/games/explanations/classroom-objects.ts), and a learner cannot
   * read that in 1.6 seconds.
   */
  const handleAnswer = useCallback(
    (choice: string) => {
      if (!currentQ || feedback) return
      const correct = choice === currentQ.answer
      setSelected(choice)
      setTotalAnswered((t) => t + 1)
      if (correct) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQ),
        correct,
        tag: BANK.tag?.(currentQ),
        chose: correct ? undefined : choice,
      })
    },
    [currentQ, feedback, round],
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
          gameId="classroom-objects"
          audience="eal"
          title="In the Classroom"
          description="Look at the picture and choose the correct English word. Some rounds ask where things are: on, in, under or next to."
          difficulty="Foundation"
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
                  Question {qIdx + 1} of {questions.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% correct</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      currentQ.mode === 'name'
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : 'text-clay-600 border-amber-500/30 bg-amber-500/10',
                    )}
                  >
                    {currentQ.mode === 'name' ? 'Vocabulary' : 'Where is it?'}
                  </span>
                </div>
              </div>

              {/* Picture / prompt card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
                <div className="text-7xl leading-none select-none" aria-hidden>
                  {currentQ.item.emoji}
                </div>
                <p className="text-base font-medium text-foreground">{currentQ.prompt}</p>
                {/* A picture question's word is its answer, so Listen waits for the answer. */}
                <button
                  onClick={() =>
                    speak(currentQ.mode === 'name' ? currentQ.item.word : currentQ.prompt)
                  }
                  disabled={currentQ.mode === 'name' && !feedback}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent',
                    currentQ.mode === 'name' && !feedback && 'invisible',
                  )}
                >
                  <Volume2 className="size-4 text-primary" />
                  Listen
                </button>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => {
                  const isAnswer = opt === currentQ.answer
                  const isPicked = opt === selected
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!feedback}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-center text-base font-medium text-foreground transition-all',
                        'hover:bg-accent disabled:cursor-not-allowed',
                        !feedback && 'border-border',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !isAnswer && !isPicked && 'opacity-50',
                      )}
                    >
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
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      feedback === 'correct'
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Well done. That&apos;s right.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer is{' '}
                        <span className="font-bold">{currentQ.answer}</span>. Keep going.
                      </>
                    )}
                  </div>
                  <AnswerExplanation
                    game="classroom-objects"
                    question={BANK.key(currentQ)}
                    correct={feedback === 'correct'}
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
