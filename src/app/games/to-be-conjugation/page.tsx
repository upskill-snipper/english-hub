'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Tense = 'present' | 'past' | 'future' | 'short form'

interface VerbItem {
  sentence: string // contains ___
  answer: string
  tense: Tense
  why: string
}

const ROUND_SIZE = 15

// Original bank of 50+ sentences. Each gap is filled with a form of 'to be'.
const VERB_BANK: VerbItem[] = [
  // ── Present ───────────────────────────────────────────────────────
  {
    sentence: 'I ___ a student at the language school.',
    answer: 'am',
    tense: 'present',
    why: 'Use "am" with the pronoun "I" in the present.',
  },
  {
    sentence: 'She ___ my best friend from class.',
    answer: 'is',
    tense: 'present',
    why: 'Use "is" with "he", "she" or "it" in the present.',
  },
  {
    sentence: 'They ___ from Spain and Portugal.',
    answer: 'are',
    tense: 'present',
    why: 'Use "are" with "they", "we" or "you" in the present.',
  },
  {
    sentence: 'We ___ ready to begin the lesson.',
    answer: 'are',
    tense: 'present',
    why: 'Use "are" with "we" in the present.',
  },
  {
    sentence: 'He ___ a very kind teacher.',
    answer: 'is',
    tense: 'present',
    why: 'Use "is" with "he" in the present.',
  },
  {
    sentence: 'You ___ very good at grammar.',
    answer: 'are',
    tense: 'present',
    why: 'Use "are" with "you", whether one person or many.',
  },
  {
    sentence: 'The coffee ___ too hot to drink.',
    answer: 'is',
    tense: 'present',
    why: 'A single thing ("the coffee") takes "is".',
  },
  {
    sentence: 'My parents ___ at work right now.',
    answer: 'are',
    tense: 'present',
    why: '"My parents" is plural, so use "are".',
  },
  {
    sentence: 'It ___ a beautiful sunny day today.',
    answer: 'is',
    tense: 'present',
    why: 'Use "is" with "it" in the present.',
  },
  {
    sentence: 'The children ___ playing in the garden.',
    answer: 'are',
    tense: 'present',
    why: '"The children" is plural, so use "are".',
  },
  {
    sentence: 'I ___ happy to help you with English.',
    answer: 'am',
    tense: 'present',
    why: 'Use "am" with "I".',
  },
  {
    sentence: 'This book ___ very interesting.',
    answer: 'is',
    tense: 'present',
    why: 'A single thing ("this book") takes "is".',
  },
  {
    sentence: 'We ___ in the same class this term.',
    answer: 'are',
    tense: 'present',
    why: 'Use "are" with "we".',
  },
  {
    sentence: 'Tom and Lucy ___ brother and sister.',
    answer: 'are',
    tense: 'present',
    why: 'Two people joined by "and" are plural, so use "are".',
  },
  {
    sentence: 'The weather ___ cold in winter.',
    answer: 'is',
    tense: 'present',
    why: '"The weather" is singular, so use "is".',
  },

  // ── Past ──────────────────────────────────────────────────────────
  {
    sentence: 'Yesterday I ___ very tired after work.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "I" in the past.',
  },
  {
    sentence: 'She ___ at the cinema last night.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "she" in the past.',
  },
  {
    sentence: 'They ___ on holiday in Italy last summer.',
    answer: 'were',
    tense: 'past',
    why: 'Use "were" with "they" in the past.',
  },
  {
    sentence: 'We ___ late for the bus this morning.',
    answer: 'were',
    tense: 'past',
    why: 'Use "were" with "we" in the past.',
  },
  {
    sentence: 'He ___ a footballer when he was young.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "he" in the past.',
  },
  {
    sentence: 'You ___ very helpful yesterday, thank you.',
    answer: 'were',
    tense: 'past',
    why: 'Use "were" with "you" in the past.',
  },
  {
    sentence: 'The film ___ really exciting.',
    answer: 'was',
    tense: 'past',
    why: 'A single thing ("the film") takes "was" in the past.',
  },
  {
    sentence: 'My grandparents ___ born in Wales.',
    answer: 'were',
    tense: 'past',
    why: '"My grandparents" is plural, so use "were".',
  },
  {
    sentence: 'It ___ raining when we left the house.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "it" in the past.',
  },
  {
    sentence: 'The shops ___ closed on Sunday.',
    answer: 'were',
    tense: 'past',
    why: '"The shops" is plural, so use "were".',
  },
  {
    sentence: 'I ___ born in nineteen ninety.',
    answer: 'was',
    tense: 'past',
    why: 'Use "was" with "I" in the past.',
  },
  {
    sentence: 'The students ___ quiet during the test.',
    answer: 'were',
    tense: 'past',
    why: '"The students" is plural, so use "were".',
  },
  {
    sentence: 'Last week ___ very busy at the office.',
    answer: 'was',
    tense: 'past',
    why: '"Last week" is singular, so use "was".',
  },

  // ── Future ────────────────────────────────────────────────────────
  {
    sentence: 'I ___ at home this evening.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" to talk about the future.',
  },
  {
    sentence: 'She ___ ready in five minutes.',
    answer: 'will be',
    tense: 'future',
    why: '"Will be" works for every subject in the future.',
  },
  {
    sentence: 'They ___ here tomorrow morning.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for a future plan.',
  },
  {
    sentence: 'We ___ on holiday next week.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" to describe the future.',
  },
  {
    sentence: 'It ___ sunny at the weekend, I hope.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for a future prediction.',
  },
  {
    sentence: 'You ___ fine after a good rest.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for the future with "you".',
  },
  {
    sentence: 'The exam ___ next Friday.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for a future event.',
  },
  {
    sentence: 'He ___ twelve years old next month.',
    answer: 'will be',
    tense: 'future',
    why: 'Use "will be" for the future with "he".',
  },

  // ── Perfect / continuous forms ────────────────────────────────────
  {
    sentence: 'I have ___ to London many times.',
    answer: 'been',
    tense: 'present',
    why: 'After "have" or "has", use the past participle "been".',
  },
  {
    sentence: 'She has ___ a teacher for ten years.',
    answer: 'been',
    tense: 'present',
    why: 'After "has", use "been".',
  },
  {
    sentence: 'They have ___ very busy this week.',
    answer: 'been',
    tense: 'present',
    why: 'After "have", use "been".',
  },
  {
    sentence: 'Have you ever ___ to Scotland?',
    answer: 'been',
    tense: 'present',
    why: 'After "have", use the participle "been".',
  },
  {
    sentence: 'The dog is ___ very noisy today.',
    answer: 'being',
    tense: 'present',
    why: 'After "is", "are" or "am", use "being" for actions happening now.',
  },
  {
    sentence: 'Why are you ___ so unkind to him?',
    answer: 'being',
    tense: 'present',
    why: 'After "are", use "being" for behaviour happening now.',
  },
  {
    sentence: 'You are ___ very patient with the class.',
    answer: 'being',
    tense: 'present',
    why: 'After "are", use "being".',
  },
  {
    sentence: 'He had ___ ill for a week before the trip.',
    answer: 'been',
    tense: 'past',
    why: 'After "had", use the participle "been".',
  },

  // ── Short / contracted & negative forms ───────────────────────────
  {
    sentence: '___ a teacher, not a student. (I am)',
    answer: "I'm",
    tense: 'short form',
    why: '"I am" is shortened to "I’m".',
  },
  {
    sentence: 'She ___ very tall. (she is not)',
    answer: "isn't",
    tense: 'short form',
    why: '"is not" is shortened to "isn’t".',
  },
  {
    sentence: 'We ___ ready yet. (we are not)',
    answer: "aren't",
    tense: 'short form',
    why: '"are not" is shortened to "aren’t".',
  },
  {
    sentence: 'He ___ at school yesterday. (he was not)',
    answer: "wasn't",
    tense: 'short form',
    why: '"was not" is shortened to "wasn’t".',
  },
  {
    sentence: 'They ___ at home last night. (they were not)',
    answer: "weren't",
    tense: 'short form',
    why: '"were not" is shortened to "weren’t".',
  },
  {
    sentence: "You ___ late, don't worry. (you are not)",
    answer: "aren't",
    tense: 'short form',
    why: '"are not" is shortened to "aren’t".',
  },
  {
    sentence: 'It ___ very cold today. (it is not)',
    answer: "isn't",
    tense: 'short form',
    why: '"is not" is shortened to "isn’t".',
  },
  {
    sentence: '___ going to the party tonight. (We are)',
    answer: "We're",
    tense: 'short form',
    why: '"We are" is shortened to "We’re".',
  },
  {
    sentence: '___ a good friend of mine. (He is)',
    answer: "He's",
    tense: 'short form',
    why: '"He is" is shortened to "He’s".',
  },
  {
    sentence: '___ from a small village. (They are)',
    answer: "They're",
    tense: 'short form',
    why: '"They are" is shortened to "They’re".',
  },
]

const OPTIONS = ['am', 'is', 'are', 'was', 'were', 'will be', 'been', 'being'] as const

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const TENSE_STYLES: Record<Tense, string> = {
  present: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  past: 'text-clay-600 border-amber-500/30 bg-amber-500/10',
  future: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  'short form': 'text-purple-400 border-purple-500/30 bg-purple-500/10',
}

// Build the on-screen options for an item: standard list, plus the answer
// if it is a short form (so contractions are always selectable).
function optionsFor(item: VerbItem): string[] {
  if (item.tense === 'short form') {
    return shuffle(['am', 'is', 'are', 'was', 'were', 'will be', item.answer])
  }
  return [...OPTIONS]
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ToBeConjugationPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<VerbItem[]>([])
  const [options, setOptions] = useState<string[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const current = items[idx] ?? null

  const handleStart = useCallback(() => {
    const round = shuffle(VERB_BANK).slice(0, ROUND_SIZE)
    setItems(round)
    setOptions(round.length > 0 ? optionsFor(round[0]) : [])
    setIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (option: string) => {
      if (!current || feedback) return
      const isCorrect = option.toLowerCase() === current.answer.toLowerCase()
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }

      setTimeout(() => {
        if (idx + 1 >= items.length) {
          setGameState('finished')
        } else {
          const next = idx + 1
          setIdx(next)
          setOptions(optionsFor(items[next]))
          setSelected(null)
          setFeedback(null)
        }
      }, 2200)
    },
    [current, feedback, idx, items],
  )

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  const sentenceParts = current ? current.sentence.split('___') : []

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Button variant="ghost" size="sm" render={<Link href="/games" />}>
            <ArrowLeft className="size-4 mr-1" />
            Back to Games
          </Button>
          {boardConfig && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <Sparkles className="size-3" /> For {boardConfig.shortName}
            </span>
          )}
        </div>

        <GameShell
          gameId="to-be-conjugation"
          title="The Verb To Be"
          description="Read each sentence and choose the correct form of the verb 'to be' — am, is, are, was, were, will be, been or being."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || items.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {idx + 1} of {items.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border capitalize',
                      TENSE_STYLES[current.tense],
                    )}
                  >
                    {current.tense}
                  </span>
                </div>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-xl font-medium leading-relaxed text-foreground">
                  {sentenceParts[0]}
                  <span
                    className={cn(
                      'mx-1 inline-block min-w-[3.5rem] rounded-md border-b-2 px-2 py-0.5 font-bold',
                      feedback === 'correct'
                        ? 'border-emerald-500 text-emerald-400'
                        : feedback === 'wrong'
                          ? 'border-red-500 text-red-400'
                          : 'border-primary/60 text-primary',
                    )}
                  >
                    {feedback ? current.answer : '?'}
                  </span>
                  {sentenceParts[1]}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {options.map((option) => {
                  const isAnswer = option.toLowerCase() === current.answer.toLowerCase()
                  const isPicked = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-base font-semibold transition-all',
                        'hover:bg-accent active:translate-y-px disabled:cursor-not-allowed',
                        !feedback && 'border-border text-foreground',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback &&
                          !isAnswer &&
                          !isPicked &&
                          'border-border text-muted-foreground opacity-50',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div
                  className={cn(
                    'space-y-1 rounded-lg px-4 py-3 text-sm',
                    feedback === 'correct'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400',
                  )}
                >
                  <div className="flex items-center justify-center gap-2 font-medium">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Well done — that&apos;s correct!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer is{' '}
                        <span className="font-bold">{current.answer}</span>.
                      </>
                    )}
                  </div>
                  <p className="text-center text-muted-foreground">{current.why}</p>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
