'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import {
  BANK,
  PASSAGE_BANK,
  type Passage,
  type QuestionType,
} from '@/data/games/banks/comprehension-challenge'

// ─── Passages ─────────────────────────────────────────────────────────────────
// The passages and their questions are in
// src/data/games/banks/comprehension-challenge.ts (moved there on 16 October
// 2026), and the explanation for each answer in
// src/data/games/explanations/comprehension-challenge.ts.

const TYPE_BADGE: Record<QuestionType, { label: string; color: string }> = {
  inference: { label: 'Inference', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  language: { label: 'Language', color: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
  structure: { label: 'Structure', color: 'bg-amber-500/10 text-clay-600 border-amber-500/20' },
  comparison: { label: 'Comparison', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  evaluation: { label: 'Evaluation', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
}

const PASSAGES_PER_ROUND = 6

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ComprehensionChallengePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [passages, setPassages] = useState<Passage[]>([])
  const [passageIndex, setPassageIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const round = useGameRound('comprehension-challenge')

  const totalQuestions = PASSAGES_PER_ROUND * 5
  const currentPassage = passages[passageIndex] ?? null
  const currentQuestion = currentPassage?.questions[questionIndex] ?? null
  const overallQuestionNum = passageIndex * 5 + questionIndex + 1

  /**
   * ANSWER-POSITION BIAS (fixed 20 September 2026).
   *
   * PASSAGE_BANK (now in src/data/games/banks/comprehension-challenge.ts) was
   * authored with the correct answer at index 1 in 29 of its 30 questions
   * (96.7%), the odd one out being at index 2. Nothing sat at index 0 or 3. The
   * page shuffled the PASSAGE pool and left each question's OPTIONS in array
   * order, so a student who clicked the second button every time and read
   * nothing scored 29/30.
   *
   * The options are therefore shuffled at render, and every comparison against
   * the correct answer goes through `view.correctValue` - never an index. After
   * a shuffle the authored `correctIndex` points at whatever landed in that
   * slot, so scoring by index would mark the wrong answer right, which is worse
   * than the bias it replaced.
   *
   * Two earlier mistakes this shape is written to avoid:
   *
   * 1. The salt lived in a `useRef` initialiser, so it was created once per
   *    MOUNT. GameShell calls `onStart` again for a replay without remounting,
   *    so every replay in a sitting reproduced the identical option order and a
   *    student could simply memorise positions. It is now minted inside
   *    `handleStart`, which is the moment an attempt actually begins.
   * 2. `shuffleOptionsDeterministic` was called directly, which skips
   *    `optionsMustKeepOrder`. `shuffledOptionsFor` is given the prompt as its
   *    fifth argument so a future "all of the above" or letter-naming stem is
   *    returned in its authored order rather than shuffled into nonsense.
   *
   * Rebalancing the data instead would have fixed today and not tomorrow: the
   * next person to author a passage writes the answer at B again.
   */
  const [sessionSalt, setSessionSalt] = useState('')

  // Seeded on the passage title plus the prompt, because a CompQuestion carries
  // no id and prompts such as "How does the writer present the robin?" are only
  // unique within their own passage.
  const view = useMemo(() => {
    if (!currentPassage || !currentQuestion) return { options: [] as string[], correctValue: '' }
    return shuffledOptionsFor(
      currentQuestion.options,
      currentQuestion.correctIndex,
      `comp|${currentPassage.title}|${currentQuestion.prompt}`,
      sessionSalt,
      currentQuestion.prompt,
    )
  }, [currentPassage, currentQuestion, sessionSalt])

  const handleStart = useCallback(() => {
    const shuffled = shuffle(PASSAGE_BANK).slice(0, PASSAGES_PER_ROUND)
    // Minted here, not during render: `newSessionSalt` calls Math.random(), and
    // a render-time call in a server-rendered client component is a hydration
    // mismatch waiting to happen. Options only paint once this has run.
    setSessionSalt(newSessionSalt())
    setPassages(shuffled)
    setPassageIndex(0)
    setQuestionIndex(0)
    setScore(0)
    setSelected(null)
    setShowFeedback(false)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A click on an option. The question is marked, recorded for the student's
   * account, and then left on screen with its explanation until they go on.
   *
   * WHAT CHANGED (16 October 2026). The page used to move to the next question
   * 1.2 seconds after a click, showing only green or red. Each answer now has
   * an explanation (src/data/games/explanations/comprehension-challenge.ts),
   * which nobody can read in 1.2 seconds, so the student moves on with a
   * button. The option chosen is not recorded: these options are sentences,
   * not the short labels a stored answer may carry
   * (src/lib/game-results/types.ts).
   */
  const handleSelect = useCallback(
    (index: number) => {
      if (showFeedback || !currentPassage || !currentQuestion) return
      setSelected(index)
      setShowFeedback(true)
      // Score by VALUE, not index - options are shuffled at render time, so the
      // authored correctIndex no longer points at the correct option.
      const correct = view.options[index] === view.correctValue
      if (correct) {
        setScore((s) => s + 1)
      }
      round.record({
        question: BANK.key({ passage: currentPassage, question: currentQuestion }),
        correct,
        tag: currentQuestion.type,
      })
    },
    [showFeedback, currentPassage, currentQuestion, view, round],
  )

  const handleNext = useCallback(() => {
    const nextQ = questionIndex + 1
    if (nextQ >= 5) {
      // Move to next passage
      const nextP = passageIndex + 1
      if (nextP >= passages.length) {
        setGameState('finished')
      } else {
        setPassageIndex(nextP)
        setQuestionIndex(0)
      }
    } else {
      setQuestionIndex(nextQ)
    }
    setSelected(null)
    setShowFeedback(false)
  }, [questionIndex, passageIndex, passages.length])

  const isLastQuestion = passageIndex + 1 >= passages.length && questionIndex + 1 >= 5

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Button variant="ghost" size="sm" render={<Link href="/games" />}>
          <ArrowLeft className="size-4" />
          Back to Games
        </Button>
        {boardConfig && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3" /> For {boardConfig.shortName}
          </span>
        )}
      </div>

      <GameShell
        gameId="comprehension-challenge"
        audience="gcse"
        title="Comprehension Challenge"
        description={
          boardConfig
            ? `Read passages and answer ${boardConfig.shortName}-style comprehension questions on inference, language, structure and evaluation.`
            : 'Read passages and answer GCSE-style comprehension questions on inference, language, structure and evaluation.'
        }
        difficulty="Higher"
        score={score}
        maxScore={totalQuestions}
        onStart={handleStart}
        onFinish={handleFinish}
        gameState={gameState}
        round={round}
      >
        {currentPassage && currentQuestion && (
          <div className="flex flex-col gap-6">
            {/* Progress bar */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>
                Passage {passageIndex + 1}/{passages.length} &middot; Q{questionIndex + 1}/5
              </span>
              <div className="h-1.5 flex-1 rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${(overallQuestionNum / totalQuestions) * 100}%` }}
                />
              </div>
              <span>
                {overallQuestionNum}/{totalQuestions}
              </span>
            </div>

            {/* Passage card */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="mb-3 flex items-center gap-2">
                <h3 className="text-sm font-bold text-foreground">{currentPassage.title}</h3>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-xs text-muted-foreground">
                  {currentPassage.genre}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{currentPassage.text}</p>
            </div>

            {/* Question */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                    TYPE_BADGE[currentQuestion.type].color,
                  )}
                >
                  {TYPE_BADGE[currentQuestion.type].label}
                </span>
              </div>

              <p className="text-base font-medium text-foreground">{currentQuestion.prompt}</p>

              <div className="grid grid-cols-1 gap-3">
                {view.options.map((option, i) => {
                  const isCorrect = option === view.correctValue
                  const isSelected = i === selected
                  let style = 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                  if (showFeedback) {
                    if (isCorrect)
                      style = 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                    else if (isSelected) style = 'border-red-500/40 bg-red-500/10 text-red-400'
                    else style = 'border-white/[0.04] bg-white/[0.01] opacity-50'
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={showFeedback}
                      className={cn(
                        'rounded-xl border px-4 py-3 text-start text-sm font-medium transition-all duration-200',
                        style,
                        !showFeedback && 'cursor-pointer active:translate-y-px',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {showFeedback && selected !== null && (
                <div>
                  <AnswerExplanation
                    game="comprehension-challenge"
                    question={BANK.key({ passage: currentPassage, question: currentQuestion })}
                    correct={view.options[selected] === view.correctValue}
                    chosen={view.options[selected]}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {isLastQuestion ? 'See your results' : 'Next question'}
                      <ArrowRight className="size-4 ms-1" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </GameShell>
    </div>
  )
}
