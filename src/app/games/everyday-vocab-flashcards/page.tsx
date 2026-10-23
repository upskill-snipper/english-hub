'use client'

import { useState, useCallback, useMemo, useRef } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, Volume2, CheckCircle, XCircle, RotateCw, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import {
  BANK,
  VOCAB_BANK,
  type Topic,
  type VocabCard,
} from '@/data/games/banks/everyday-vocab-flashcards'

// ─── Data ──────────────────────────────────────────────────────────────────────

// The cards are in src/data/games/banks/everyday-vocab-flashcards.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/everyday-vocab-flashcards.ts.

const ROUND_SIZE = 14

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

const TOPIC_STYLES: Record<Topic, string> = {
  People: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  Places: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  Time: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
  Actions: 'text-clay-600 border-amber-500/30 bg-amber-500/10',
  Feelings: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
  Objects: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function EverydayVocabFlashcardsPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [queue, setQueue] = useState<VocabCard[]>([])
  const [flipped, setFlipped] = useState(false)
  const [knownWords, setKnownWords] = useState<Set<string>>(new Set())
  const [seenWords, setSeenWords] = useState<Set<string>>(new Set())
  const [feedback, setFeedback] = useState<'known' | 'unknown' | null>(null)
  const round = useGameRound('everyday-vocab-flashcards')
  // The words already recorded this round. A card the student did not know comes
  // round again, and only its first mark is recorded, because a stored result
  // means right the first time (src/lib/game-results/types.ts).
  const recorded = useRef<Set<string>>(new Set())

  const roundTotal = useMemo(() => Math.min(ROUND_SIZE, VOCAB_BANK.length), [])
  const currentCard = queue[0] ?? null
  // SCORING (changed 23 October 2026, the founder's decision). The score is the
  // number of cards the student knew the FIRST time they saw them, out of the
  // round's cards. Until then a card was counted whenever it was marked known,
  // and a card not known came back until it was, so every round ended 14 of 14
  // whatever the student knew. The score now says what is recorded for their
  // account: right first time.
  const score = knownWords.size

  const handleStart = useCallback(() => {
    const selected = shuffle(VOCAB_BANK).slice(0, roundTotal)
    setQueue(selected)
    setFlipped(false)
    setKnownWords(new Set())
    setSeenWords(new Set())
    setFeedback(null)
    recorded.current = new Set()
    setGameState('playing')
  }, [roundTotal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleMark = useCallback(
    (knew: boolean) => {
      if (!currentCard || feedback) return
      setFeedback(knew ? 'known' : 'unknown')

      const key = BANK.key(currentCard)
      if (!recorded.current.has(key)) {
        recorded.current.add(key)
        round.record({ question: key, correct: knew, tag: currentCard.topic })
        // First sight of this card: known now is known first time.
        if (knew) {
          setKnownWords((prev) => {
            const next = new Set(prev)
            next.add(currentCard.word)
            return next
          })
        }
      }

      setSeenWords((prev) => {
        const next = new Set(prev)
        next.add(currentCard.word)
        return next
      })

      setTimeout(() => {
        setQueue((prev) => {
          const [, ...rest] = prev
          // Spaced repetition: re-queue unknown cards further back in the round
          const requeued = knew ? rest : [...rest, currentCard]
          if (requeued.length === 0) {
            setGameState('finished')
            return []
          }
          return requeued
        })
        setFlipped(false)
        setFeedback(null)
      }, 850)
    },
    [currentCard, feedback, round],
  )

  const progressTotal = seenWords.size + queue.length
  const progressDone = seenWords.size

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
          gameId="everyday-vocab-flashcards"
          audience="eal"
          title="Everyday Vocabulary Flashcards"
          description="See an everyday English word and an example sentence. Think of the meaning, tap the card to check, then tell us whether you knew it. Words you miss come back again."
          difficulty="Foundation"
          score={score}
          maxScore={roundTotal}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
          round={round}
        >
          {currentCard && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Card {Math.min(progressDone + 1, progressTotal)} of {progressTotal}
                </span>
                <div className="flex items-center gap-3">
                  <span>{score} known first time</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      TOPIC_STYLES[currentCard.topic],
                    )}
                  >
                    {currentCard.topic}
                  </span>
                </div>
              </div>

              {/* Flashcard */}
              <button
                type="button"
                onClick={() => !feedback && setFlipped((f) => !f)}
                disabled={!!feedback}
                className={cn(
                  'group w-full rounded-2xl border p-8 text-center transition-all duration-200 min-h-[260px] flex flex-col items-center justify-center gap-4',
                  feedback === 'known' && 'border-emerald-500 bg-emerald-500/10',
                  feedback === 'unknown' && 'border-rose-500 bg-rose-500/10',
                  !feedback && 'border-border bg-card hover:border-primary/50 hover:bg-accent',
                )}
              >
                {!flipped ? (
                  <>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      What does this word mean?
                    </span>
                    <span className="text-4xl font-bold text-foreground">{currentCard.word}</span>
                    <span className="text-sm italic text-muted-foreground">
                      &ldquo;{currentCard.exampleSentence}&rdquo;
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                      <RotateCw className="size-3.5" /> Tap to reveal the meaning
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {currentCard.partOfSpeech}
                    </span>
                    <span className="text-2xl font-bold text-foreground">{currentCard.word}</span>
                    <span className="text-base text-foreground">
                      {currentCard.simpleDefinition}
                    </span>
                    <span className="text-sm italic text-muted-foreground">
                      &ldquo;{currentCard.exampleSentence}&rdquo;
                    </span>
                  </>
                )}
              </button>

              {/* The explanation, with the back of the card */}
              {flipped && (
                <AnswerExplanation
                  game="everyday-vocab-flashcards"
                  question={BANK.key(currentCard)}
                  correct={feedback === 'known'}
                />
              )}

              {/* Listen */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => speak(`${currentCard.word}. ${currentCard.exampleSentence}`)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <Volume2 className="size-4 text-primary" />
                  Hear the word
                </button>
              </div>

              {/* Self-mark */}
              {feedback ? (
                <div
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium',
                    feedback === 'known'
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-rose-400 bg-rose-500/10',
                  )}
                >
                  {feedback === 'known' ? (
                    <>
                      <CheckCircle className="size-4" /> Brilliant. That one is yours.
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> No worries. We&rsquo;ll show it again soon.
                    </>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleMark(false)}
                    className="border-rose-500/40 text-rose-400 hover:bg-rose-500/10"
                  >
                    <XCircle className="size-4 me-1.5" />
                    Didn&rsquo;t know
                  </Button>
                  <Button
                    onClick={() => handleMark(true)}
                    className="bg-emerald-600 text-white hover:bg-emerald-600/85"
                  >
                    <CheckCircle className="size-4 me-1.5" />I knew it
                  </Button>
                </div>
              )}

              {!flipped && !feedback && (
                <p className="text-center text-xs text-muted-foreground">
                  Tip: flip the card first to check the meaning before you mark it.
                </p>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
