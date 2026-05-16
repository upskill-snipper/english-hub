'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, Volume2, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type ItemType = 'cardinal' | 'ordinal' | 'clock' | 'date'

interface NumberItem {
  /** What the learner reads / sees as the prompt */
  prompt: string
  /** Short instruction shown above the prompt */
  task: string
  /** The correct answer (must also appear in options) */
  answer: string
  /** Distractor answers — must be plausible and the same shape as the answer */
  distractors: string[]
  type: ItemType
}

// Original bank — 56 items. UK English throughout.
const ITEM_BANK: NumberItem[] = [
  // ── Cardinal numbers: digits → words ──────────────────────────────────────
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '7',
    answer: 'seven',
    distractors: ['seventy', 'seventeen', 'eleven'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '13',
    answer: 'thirteen',
    distractors: ['thirty', 'thirteenth', 'three'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '30',
    answer: 'thirty',
    distractors: ['thirteen', 'three', 'thirtieth'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '15',
    answer: 'fifteen',
    distractors: ['fifty', 'five', 'fortyfive'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '50',
    answer: 'fifty',
    distractors: ['fifteen', 'five hundred', 'five'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '47',
    answer: 'forty-seven',
    distractors: ['fourty-seven', 'seventy-four', 'forty-eleven'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '82',
    answer: 'eighty-two',
    distractors: ['eighteen-two', 'twenty-eight', 'eighty-twelve'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '100',
    answer: 'one hundred',
    distractors: ['one thousand', 'a hundredth', 'ten hundred'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '1,000',
    answer: 'one thousand',
    distractors: ['one hundred', 'ten thousand', 'one million'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '21',
    answer: 'twenty-one',
    distractors: ['twelve', 'two-one', 'twenty-first'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '40',
    answer: 'forty',
    distractors: ['fourty', 'fourteen', 'four'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '66',
    answer: 'sixty-six',
    distractors: ['sixteen-six', 'sixty-sixth', 'six-six'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '90',
    answer: 'ninety',
    distractors: ['nineteen', 'ninty', 'nine'],
  },
  {
    type: 'cardinal',
    task: 'Read the number. Choose the words.',
    prompt: '305',
    answer: 'three hundred and five',
    distractors: ['three hundred and fifty', 'three thousand and five', 'thirty-five'],
  },
  {
    type: 'cardinal',
    task: 'Read the words. Choose the number.',
    prompt: 'sixteen',
    answer: '16',
    distractors: ['60', '6', '60,000'],
  },
  {
    type: 'cardinal',
    task: 'Read the words. Choose the number.',
    prompt: 'ninety-nine',
    answer: '99',
    distractors: ['909', '19', '90'],
  },
  {
    type: 'cardinal',
    task: 'Read the words. Choose the number.',
    prompt: 'two hundred and twelve',
    answer: '212',
    distractors: ['2,012', '220', '2,120'],
  },

  // ── Ordinal numbers ───────────────────────────────────────────────────────
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '1st',
    answer: 'first',
    distractors: ['oneth', 'fourth', 'once'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '2nd',
    answer: 'second',
    distractors: ['twoth', 'twelfth', 'twentieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '3rd',
    answer: 'third',
    distractors: ['threeth', 'thirteenth', 'thirtieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '5th',
    answer: 'fifth',
    distractors: ['fiveth', 'fifteenth', 'fiftieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '8th',
    answer: 'eighth',
    distractors: ['eightth', 'eighteenth', 'eightieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '9th',
    answer: 'ninth',
    distractors: ['nineth', 'nineteenth', 'ninetieth'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '12th',
    answer: 'twelfth',
    distractors: ['twelveth', 'twentieth', 'twelve'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '20th',
    answer: 'twentieth',
    distractors: ['twentyth', 'twelfth', 'second'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '21st',
    answer: 'twenty-first',
    distractors: ['twenty-oneth', 'twelfth', 'twenty-one'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '30th',
    answer: 'thirtieth',
    distractors: ['thirteenth', 'thirtyth', 'third'],
  },
  {
    type: 'ordinal',
    task: 'Read the number. Choose the ordinal.',
    prompt: '100th',
    answer: 'hundredth',
    distractors: ['one hundred', 'hundreth', 'thousandth'],
  },
  {
    type: 'ordinal',
    task: 'Read the ordinal. Choose the number.',
    prompt: 'fortieth',
    answer: '40th',
    distractors: ['14th', '4th', '40'],
  },
  {
    type: 'ordinal',
    task: 'Read the ordinal. Choose the number.',
    prompt: 'seventh',
    answer: '7th',
    distractors: ['7', '17th', '70th'],
  },

  // ── Clock times: time → words ─────────────────────────────────────────────
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '3:00',
    answer: "three o'clock",
    distractors: ['three thirty', 'half past three', 'quarter past three'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '3:15',
    answer: 'quarter past three',
    distractors: ['quarter to three', 'half past three', 'three fifteen to'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '3:30',
    answer: 'half past three',
    distractors: ['half to three', 'half past four', 'quarter past three'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '3:45',
    answer: 'quarter to four',
    distractors: ['quarter past four', 'quarter to three', 'three forty-five past'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '9:05',
    answer: 'five past nine',
    distractors: ['five to nine', 'nine past five', 'five past ten'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '10:50',
    answer: 'ten to eleven',
    distractors: ['ten past eleven', 'ten to ten', 'fifty past ten'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '6:20',
    answer: 'twenty past six',
    distractors: ['twenty to six', 'six past twenty', 'twenty past seven'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '7:40',
    answer: 'twenty to eight',
    distractors: ['twenty past eight', 'twenty to seven', 'forty past seven'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '12:00',
    answer: 'twelve midday',
    distractors: ['twelve midnight', 'twelve past', 'half past twelve'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '2:25',
    answer: 'twenty-five past two',
    distractors: ['twenty-five to two', 'twenty-five past three', 'half past two'],
  },
  {
    type: 'clock',
    task: 'Read the time. Choose how to say it.',
    prompt: '8:35',
    answer: 'twenty-five to nine',
    distractors: ['twenty-five past nine', 'twenty-five to eight', 'thirty-five past eight'],
  },
  {
    type: 'clock',
    task: 'Read the 24-hour time. Choose the 12-hour time.',
    prompt: '14:00',
    answer: '2:00 pm',
    distractors: ['4:00 pm', '2:00 am', '12:00 pm'],
  },
  {
    type: 'clock',
    task: 'Read the 24-hour time. Choose the 12-hour time.',
    prompt: '18:30',
    answer: '6:30 pm',
    distractors: ['8:30 pm', '6:30 am', '6:13 pm'],
  },
  {
    type: 'clock',
    task: 'Read the 24-hour time. Choose the 12-hour time.',
    prompt: '23:15',
    answer: '11:15 pm',
    distractors: ['1:15 pm', '11:15 am', '11:50 pm'],
  },
  {
    type: 'clock',
    task: 'Read the time in words. Choose the clock.',
    prompt: 'quarter past seven',
    answer: '7:15',
    distractors: ['7:45', '6:15', '7:50'],
  },
  {
    type: 'clock',
    task: 'Read the time in words. Choose the clock.',
    prompt: 'half past ten',
    answer: '10:30',
    distractors: ['10:15', '11:30', '9:30'],
  },
  {
    type: 'clock',
    task: 'Read the time in words. Choose the clock.',
    prompt: 'quarter to five',
    answer: '4:45',
    distractors: ['5:45', '4:15', '5:15'],
  },

  // ── Dates ─────────────────────────────────────────────────────────────────
  {
    type: 'date',
    task: 'Read the date. Choose how to say it.',
    prompt: '1 May',
    answer: 'the first of May',
    distractors: ['the first of March', 'May the one', 'the one of May'],
  },
  {
    type: 'date',
    task: 'Read the date. Choose how to say it.',
    prompt: '3 June',
    answer: 'the third of June',
    distractors: ['the thirtieth of June', 'June the three', 'the third of July'],
  },
  {
    type: 'date',
    task: 'Read the date. Choose how to say it.',
    prompt: '22 March',
    answer: 'the twenty-second of March',
    distractors: ['the twenty-two of March', 'the second of March', 'the twenty-second of May'],
  },
  {
    type: 'date',
    task: 'Read the date. Choose how to say it.',
    prompt: '31 December',
    answer: 'the thirty-first of December',
    distractors: [
      'the thirteenth of December',
      'the thirty-one of December',
      'the thirty-first of November',
    ],
  },
  {
    type: 'date',
    task: 'Read the date. Choose the order of months.',
    prompt: 'The month after April',
    answer: 'May',
    distractors: ['March', 'June', 'August'],
  },
  {
    type: 'date',
    task: 'Read the date. Choose the order of months.',
    prompt: 'The month before September',
    answer: 'August',
    distractors: ['October', 'July', 'November'],
  },
  {
    type: 'date',
    task: 'Read the day. Choose the day after it.',
    prompt: 'The day after Tuesday',
    answer: 'Wednesday',
    distractors: ['Monday', 'Thursday', 'Friday'],
  },
  {
    type: 'date',
    task: 'Read the day. Choose the day before it.',
    prompt: 'The day before Sunday',
    answer: 'Saturday',
    distractors: ['Monday', 'Friday', 'Sunday'],
  },
  {
    type: 'date',
    task: 'Read the year. Choose how to say it.',
    prompt: '1999',
    answer: 'nineteen ninety-nine',
    distractors: ['one thousand nine hundred', 'nineteen nine nine', 'one nine ninety-nine'],
  },
  {
    type: 'date',
    task: 'Read the year. Choose how to say it.',
    prompt: '2008',
    answer: 'two thousand and eight',
    distractors: ['twenty eight', 'two thousand eighty', 'twenty oh eighty'],
  },
]

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

const ROUND_SIZE = 15

const TYPE_LABELS: Record<ItemType, string> = {
  cardinal: 'Number',
  ordinal: 'Ordinal',
  clock: 'Time',
  date: 'Date',
}

interface Question {
  item: NumberItem
  options: string[]
}

function buildQuestions(): Question[] {
  // Mix the round across the four subtypes for variety.
  const byType: Record<ItemType, NumberItem[]> = {
    cardinal: shuffle(ITEM_BANK.filter((i) => i.type === 'cardinal')),
    ordinal: shuffle(ITEM_BANK.filter((i) => i.type === 'ordinal')),
    clock: shuffle(ITEM_BANK.filter((i) => i.type === 'clock')),
    date: shuffle(ITEM_BANK.filter((i) => i.type === 'date')),
  }
  // Take a balanced-ish slice, then top up and shuffle.
  const picked: NumberItem[] = [
    ...byType.cardinal.slice(0, 4),
    ...byType.ordinal.slice(0, 4),
    ...byType.clock.slice(0, 5),
    ...byType.date.slice(0, 2),
  ]
  const round = shuffle(picked).slice(0, ROUND_SIZE)
  return round.map((item) => ({
    item,
    options: shuffle([item.answer, ...item.distractors]),
  }))
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function NumbersAndTimePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const currentQ = questions[qIdx] ?? null

  // Auto-speak the prompt when a new question appears.
  useEffect(() => {
    if (gameState === 'playing' && currentQ && !feedback) {
      const timer = setTimeout(() => speak(currentQ.item.prompt), 300)
      return () => clearTimeout(timer)
    }
  }, [qIdx, gameState, feedback, currentQ])

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

  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQ || feedback) return
      const isCorrect = option === currentQ.item.answer
      setSelected(option)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }

      setTimeout(() => {
        if (qIdx + 1 >= questions.length) {
          setGameState('finished')
        } else {
          setQIdx((i) => i + 1)
          setSelected(null)
          setFeedback(null)
        }
      }, 1800)
    },
    [currentQ, feedback, qIdx, questions.length],
  )

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

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
          gameId="numbers-and-time"
          title="Numbers & Time"
          description="Read numbers, ordinals, clock times and dates, then choose the correct English. Great practice for everyday English."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
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
                    {TYPE_LABELS[currentQ.item.type]}
                  </span>
                </div>
              </div>

              {/* Prompt card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
                <p className="text-sm text-muted-foreground">{currentQ.item.task}</p>
                <p className="text-4xl font-bold tracking-tight text-foreground break-words">
                  {currentQ.item.prompt}
                </p>
                <button
                  onClick={() => speak(currentQ.item.prompt)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <Volume2 className="size-4 text-primary" />
                  Hear it
                </button>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((option) => {
                  const isAnswer = option === currentQ.item.answer
                  const isPicked = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-center text-base font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !isAnswer && !isPicked && 'border-border opacity-50',
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
                    'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    feedback === 'correct'
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-red-400 bg-red-500/10',
                  )}
                >
                  {feedback === 'correct' ? (
                    <>
                      <CheckCircle className="size-4" /> Well done — that&apos;s right!
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> Not quite. The answer is:{' '}
                      <span className="font-bold">{currentQ.item.answer}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
