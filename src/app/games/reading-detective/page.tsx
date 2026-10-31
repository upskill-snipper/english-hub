'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Search, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { dealSetsNow } from '@/lib/games/start-round'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { BANK, PASSAGES, type Passage, type QType } from '@/data/games/banks/reading-detective'

// ─── Data ──────────────────────────────────────────────────────────────────────
// The passages and their questions are in src/data/games/banks/reading-detective.ts
// (moved there on 16 October 2026), and the explanation for each question in
// src/data/games/explanations/reading-detective.ts.

// ─── Helpers ───────────────────────────────────────────────────────────────────

/**
 * What the page says after an answer. Until 24 October 2026 the praise ended
 * in exclamation marks and the spaced hyphens stood in for dashes, neither of
 * which the site's house style allows.
 */
const ENCOURAGE = [
  'Great detective work.',
  'Sharp eyes: well spotted.',
  'Excellent reading.',
  'You cracked it.',
]

const TRY_AGAIN = [
  'Not quite. Look closely at the clue.',
  'Good effort. The text holds the answer.',
  'Almost. Re-read and you’ll see it.',
]

/**
 * Passages in a round. Three passages of five questions, fifteen questions a
 * round, as five passages of three questions were before the rebuild for
 * depth (24 October 2026).
 */
const ROUND_LENGTH = 3

/** The badge over each question: what kind of reading it asks for. */
const KIND_LABEL: Record<QType, string> = {
  retrieval: 'Find it',
  inference: 'Work it out',
  language: 'Word choice',
  structure: 'Structure',
  viewpoint: 'Viewpoint',
  evidence: 'Best evidence',
}

/** A paragraph as printed: the author's italics, marked _thus_ in the bank, in italics. */
function withItalics(paragraph: string) {
  return paragraph
    .split(/(_[^_\n]+_)/)
    .map((part, i) =>
      part.length > 2 && part.startsWith('_') && part.endsWith('_') ? (
        <em key={i}>{part.slice(1, -1)}</em>
      ) : (
        part
      ),
    )
}

/** A passage as the dealer sees it: its title, and its questions as the bank keys them. */
const PASSAGE_SET = {
  key: (p: Passage) => p.title,
  items: (p: Passage) => p.questions.map((question) => ({ passage: p, question })),
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ReadingDetectivePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [passages, setPassages] = useState<Passage[]>([])
  const [pIdx, setPIdx] = useState(0)
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  // The option the student clicked, by its text, not by where it was shown.
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [feedbackMsg, setFeedbackMsg] = useState('')
  const round = useGameRound('reading-detective')
  const [sessionSalt, setSessionSalt] = useState('')

  const currentPassage = passages[pIdx] ?? null
  const currentQuestion = currentPassage?.questions[qIdx] ?? null
  // Counted, not multiplied: a passage held three questions before 24 October
  // 2026 and holds five now.
  const totalQuestions = passages.reduce((n, p) => n + p.questions.length, 0)
  const questionNumber =
    passages.slice(0, pIdx).reduce((n, p) => n + p.questions.length, 0) + qIdx + 1
  // How the bank, the explanations and the student's account name this question.
  const questionKey =
    currentPassage && currentQuestion
      ? BANK.key({ passage: currentPassage, question: currentQuestion })
      : ''

  /**
   * The options as the student sees them, plus the right answer's VALUE.
   *
   * WHAT WAS WRONG (found 16 October 2026). The passages were shuffled, but
   * each question's options were shown as written, and the right answer is
   * written first 17 times, second 16, third 3 and fourth never. A student who
   * always clicked the first or second option did well without reading the
   * passage. Speed Analysis had the same fault, fixed on 13 October 2026. The
   * options now go through the same shared shuffle, per attempt, and a click
   * is marked by the option itself against `view.correctValue`, never by where
   * it sits. The same option is right as before.
   */
  const view = useMemo(
    () =>
      currentQuestion
        ? shuffledOptionsFor(
            currentQuestion.options,
            currentQuestion.answer,
            // The bank's key: no two questions share it.
            `reading|${questionKey}`,
            sessionSalt,
            currentQuestion.prompt,
          )
        : { options: [] as string[], correctValue: '' },
    [currentQuestion, questionKey, sessionSalt],
  )

  const handleStart = useCallback(() => {
    // Minted here rather than during render: newSessionSalt calls Math.random,
    // which would not agree between the server and client paint.
    setSessionSalt(newSessionSalt())
    // Passages this browser has not read come first (src/lib/games/start-round.ts).
    setPassages(dealSetsNow(BANK, PASSAGES, ROUND_LENGTH, PASSAGE_SET))
    setPIdx(0)
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setRevealed(false)
    setFeedbackMsg('')
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A click marks the question and records it for the student's account,
   * with the option chosen when it was wrong. The explanation then shows
   * until they press Next (16 October 2026).
   */
  const handleSelect = useCallback(
    (opt: string) => {
      if (revealed || !currentQuestion) return
      setSelected(opt)
      setRevealed(true)
      setTotalAnswered((t) => t + 1)
      const isCorrect = opt === view.correctValue
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedbackMsg(ENCOURAGE[Math.floor(Math.random() * ENCOURAGE.length)])
      } else {
        setFeedbackMsg(TRY_AGAIN[Math.floor(Math.random() * TRY_AGAIN.length)])
      }
      round.record({
        question: questionKey,
        correct: isCorrect,
        tag: currentQuestion.type,
        chose: isCorrect ? undefined : opt,
      })
    },
    [revealed, currentQuestion, view.correctValue, questionKey, round],
  )

  const handleNext = useCallback(() => {
    if (!currentPassage) return
    const lastQuestion = qIdx + 1 >= currentPassage.questions.length
    const lastPassage = pIdx + 1 >= passages.length
    if (lastQuestion && lastPassage) {
      setGameState('finished')
      return
    }
    if (lastQuestion) {
      setPIdx((i) => i + 1)
      setQIdx(0)
    } else {
      setQIdx((i) => i + 1)
    }
    setSelected(null)
    setRevealed(false)
    setFeedbackMsg('')
  }, [currentPassage, qIdx, pIdx, passages.length])

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
          gameId="reading-detective"
          audience="ks3"
          title="Reading Detective"
          description="Read each passage carefully, then crack the clues: find the facts, read between the lines, and weigh the writer's words, structure and viewpoint."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || totalQuestions || 15}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentPassage && currentQuestion && (
            <div className="space-y-6">
              {/* Progress. Each part stays whole and the row wraps between
                  them: at 360px "Question 5 of 15", "100% accuracy" and the
                  "Best evidence" badge had each broken over two lines
                  (24 October 2026). */}
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-sm text-muted-foreground">
                <span className="whitespace-nowrap">
                  Question {questionNumber} of {totalQuestions}
                </span>
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border inline-flex items-center gap-1',
                      currentQuestion.type === 'retrieval'
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : 'text-clay-600 border-amber-500/30 bg-amber-500/10',
                    )}
                  >
                    {currentQuestion.type === 'retrieval' ? (
                      <Search className="size-3" />
                    ) : (
                      <Lightbulb className="size-3" />
                    )}{' '}
                    {KIND_LABEL[currentQuestion.type]}
                  </span>
                </div>
              </div>

              {/* Passage card. A passage runs to 200-350 words in paragraphs, and a
                  poem keeps its lines; a real extract says where it comes from
                  (24 October 2026). */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {currentPassage.kind}
                  </span>
                  <span className="text-muted-foreground">&middot;</span>
                  <span className="text-sm font-semibold text-foreground">
                    {currentPassage.title}
                  </span>
                </div>
                <div className="space-y-3 text-base leading-relaxed text-foreground">
                  {currentPassage.text.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="whitespace-pre-line">
                      {withItalics(paragraph)}
                    </p>
                  ))}
                </div>
                {currentPassage.source && (
                  <p className="text-xs text-muted-foreground">
                    From <em>{currentPassage.source.work}</em> by {currentPassage.source.author},{' '}
                    {currentPassage.source.where}
                  </p>
                )}
              </div>

              {/* Question */}
              <div className="space-y-3">
                <p className="text-base font-semibold text-foreground">{currentQuestion.prompt}</p>

                <div className="grid gap-2">
                  {view.options.map((opt) => {
                    const isCorrect = opt === view.correctValue
                    const isChosen = opt === selected
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        disabled={revealed}
                        className={cn(
                          'w-full rounded-lg border px-4 py-3 text-start text-sm font-medium transition-all',
                          !revealed &&
                            'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                          revealed &&
                            isCorrect &&
                            'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                          revealed &&
                            isChosen &&
                            !isCorrect &&
                            'border-red-500 bg-red-500/10 text-red-400',
                          revealed &&
                            !isCorrect &&
                            !isChosen &&
                            'border-border bg-card text-muted-foreground opacity-60',
                        )}
                      >
                        <span className="inline-flex items-center gap-2">
                          {revealed && isCorrect && <CheckCircle className="size-4" />}
                          {revealed && isChosen && !isCorrect && <XCircle className="size-4" />}
                          {opt}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Feedback + evidence reveal */}
                {revealed && (
                  <div className="space-y-3">
                    <div
                      className={cn(
                        'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                        selected === view.correctValue
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : 'text-red-400 bg-red-500/10',
                      )}
                    >
                      {selected === view.correctValue ? (
                        <CheckCircle className="size-4" />
                      ) : (
                        <XCircle className="size-4" />
                      )}
                      {feedbackMsg}
                    </div>

                    <AnswerExplanation
                      game="reading-detective"
                      question={questionKey}
                      correct={selected === view.correctValue}
                      chosen={selected}
                    />

                    <div className="flex justify-center">
                      <Button onClick={handleNext}>
                        {questionNumber >= totalQuestions ? 'See Results' : 'Next Question'}
                      </Button>
                    </div>
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
