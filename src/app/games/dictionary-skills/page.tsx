'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Sparkles, BookA } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import {
  ALPHA_BANK,
  BANK,
  DEFINE_BANK,
  GUIDE_BANK,
  POS_BANK,
  POS_OPTIONS,
  SUBTYPE_LABEL,
  guideOptions,
  promptFor,
  type BankItem,
  type Subtype,
} from '@/data/games/banks/dictionary-skills'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/dictionary-skills.ts (moved there
// on 16 October 2026), and the explanation for each in
// src/data/games/explanations/dictionary-skills.ts.

const ROUND_LENGTH = 15

/**
 * The kinds of question whose wrong picks are short fixed labels (a word, or
 * "n."), the only ones that may be sent as `chose`
 * (src/components/games/game-round.tsx). A wrong guide-words answer is just
 * the opposite of the right one, and a definition is a whole phrase.
 */
const SENDS_CHOICE: ReadonlySet<Subtype> = new Set<Subtype>(['alpha', 'pos'])

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface Question {
  /** The bank item this was built from: its key names the question for its explanation. */
  item: BankItem
  subtype: Subtype
  prompt: string
  hint: string
  options: string[]
  /** The correct option string */
  correct: string
}

function buildQuestion(item: BankItem): Question {
  switch (item.type) {
    case 'alpha':
      return {
        item,
        subtype: 'alpha',
        prompt: promptFor(item),
        hint: 'Compare the letters from the start of each word.',
        options: shuffle(item.words),
        correct: item.answer,
      }
    case 'guide': {
      // The two answers are worded in the bank, so the explanations name them
      // exactly as they are shown here.
      const { yes, no } = guideOptions(item)
      return {
        item,
        subtype: 'guide',
        prompt: promptFor(item),
        hint: 'The word must come after the left guide word and before the right one.',
        options: [yes, no],
        correct: item.answer ? yes : no,
      }
    }
    case 'define':
      return {
        item,
        subtype: 'define',
        prompt: promptFor(item),
        hint: 'Choose the meaning that fits how the word is normally used.',
        options: shuffle([item.answer, ...item.distractors]),
        correct: item.answer,
      }
    case 'pos':
      return {
        item,
        subtype: 'pos',
        prompt: promptFor(item),
        hint: `"${item.example}"  ·  n. = noun, v. = verb, adj. = adjective`,
        options: POS_OPTIONS,
        correct: item.answer,
      }
  }
}

function buildRound(): Question[] {
  // ~15 mixed questions, roughly balanced across the four subtypes.
  const picks: BankItem[] = [
    ...shuffle(ALPHA_BANK).slice(0, 4),
    ...shuffle(GUIDE_BANK).slice(0, 4),
    ...shuffle(DEFINE_BANK).slice(0, 4),
    ...shuffle(POS_BANK).slice(0, 3),
  ]
  return shuffle(picks).slice(0, ROUND_LENGTH).map(buildQuestion)
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function DictionarySkillsPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const round = useGameRound('dictionary-skills')

  const currentQ = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    setQuestions(buildRound())
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
   * An answer is marked, recorded for the student's account, and then left on
   * screen with its explanation until they choose to go on.
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next question
   * 1.8 seconds after an answer, showing only the right answer. Each answer now
   * comes with an explanation (src/data/games/explanations/dictionary-skills.ts),
   * which a student cannot read in 1.8 seconds, so they press a button to go on.
   * There is no clock to hold: the game is untimed.
   */
  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQ || feedback) return
      const isCorrect = option === currentQ.correct
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }
      round.record({
        question: BANK.key(currentQ.item),
        correct: isCorrect,
        tag: BANK.tag?.(currentQ.item),
        chose: !isCorrect && SENDS_CHOICE.has(currentQ.subtype) ? option : undefined,
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
          gameId="dictionary-skills"
          audience="ks3"
          title="Dictionary Skills"
          description="Practise the key skills for using a dictionary: alphabetical order, guide words, matching definitions and spotting word classes."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_LENGTH}
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
                  <span>{accuracyPct}% accuracy</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    {SUBTYPE_LABEL[currentQ.subtype]}
                  </span>
                </div>
              </div>

              {/* Question card */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-3 text-center">
                <div className="inline-flex items-center gap-2 text-primary">
                  <BookA className="size-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {SUBTYPE_LABEL[currentQ.subtype]}
                  </span>
                </div>
                <p className="text-lg font-semibold text-foreground">{currentQ.prompt}</p>
                <p className="text-sm text-muted-foreground">{currentQ.hint}</p>
              </div>

              {/* Options */}
              <div
                className={cn(
                  'grid gap-3',
                  currentQ.options.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2',
                )}
              >
                {currentQ.options.map((option) => {
                  const isCorrectOption = option === currentQ.correct
                  const isSelected = option === selected
                  const showCorrect = !!feedback && isCorrectOption
                  const showWrong = !!feedback && isSelected && !isCorrectOption
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-start text-sm font-medium transition-all outline-none',
                        'focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border text-foreground hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        !!feedback && !showCorrect && !showWrong && 'border-border opacity-60',
                      )}
                    >
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
                        <CheckCircle className="size-4" /> Well done, that&apos;s right.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer was:{' '}
                        <span className="font-bold">{currentQ.correct}</span>
                      </>
                    )}
                  </div>

                  <AnswerExplanation
                    game="dictionary-skills"
                    question={BANK.key(currentQ.item)}
                    correct={feedback === 'correct'}
                    chosen={selected}
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
