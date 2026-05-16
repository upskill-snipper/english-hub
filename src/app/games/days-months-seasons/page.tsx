'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, CalendarDays } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Subtype = 'order' | 'next-before' | 'month-season' | 'spelling-choice'

interface Question {
  subtype: Subtype
  prompt: string
  options: string[]
  answer: string
  note?: string
}

// Northern-hemisphere seasons assumed (UK English). Months grouped:
// Winter: Dec, Jan, Feb · Spring: Mar, Apr, May · Summer: Jun, Jul, Aug · Autumn: Sep, Oct, Nov

const QUESTION_BANK: Question[] = [
  // ── Subtype: order — put days/months in the right place ──────────────────────
  {
    subtype: 'order',
    prompt: 'Which day comes FIRST in the week (UK calendars often start here)?',
    options: ['Monday', 'Friday', 'Sunday', 'Wednesday'],
    answer: 'Monday',
  },
  {
    subtype: 'order',
    prompt: 'Which is the THIRD day of the week, counting from Monday?',
    options: ['Tuesday', 'Wednesday', 'Thursday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'order',
    prompt: 'Which is the LAST day of the week (the weekend day after Saturday)?',
    options: ['Friday', 'Saturday', 'Sunday', 'Monday'],
    answer: 'Sunday',
  },
  {
    subtype: 'order',
    prompt: 'Put these in order. Which day is in the MIDDLE: Monday, ?, Friday?',
    options: ['Wednesday', 'Sunday', 'Saturday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'order',
    prompt: 'Which is the FIRST month of the year?',
    options: ['January', 'March', 'December', 'June'],
    answer: 'January',
  },
  {
    subtype: 'order',
    prompt: 'Which is the LAST month of the year?',
    options: ['November', 'December', 'October', 'January'],
    answer: 'December',
  },
  {
    subtype: 'order',
    prompt: 'Which is the SIXTH month of the year?',
    options: ['May', 'June', 'July', 'August'],
    answer: 'June',
  },
  {
    subtype: 'order',
    prompt: 'Which month is number 9 (the ninth month)?',
    options: ['August', 'September', 'October', 'November'],
    answer: 'September',
  },
  {
    subtype: 'order',
    prompt: 'Which is the SECOND day of the week, counting from Monday?',
    options: ['Tuesday', 'Sunday', 'Thursday', 'Monday'],
    answer: 'Tuesday',
  },
  {
    subtype: 'order',
    prompt: 'How many days are there in a week?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    subtype: 'order',
    prompt: 'How many months are there in a year?',
    options: ['10', '11', '12', '13'],
    answer: '12',
  },
  {
    subtype: 'order',
    prompt: 'Which is the FOURTH month of the year?',
    options: ['March', 'April', 'May', 'February'],
    answer: 'April',
  },

  // ── Subtype: next-before — what comes after/before ───────────────────────────
  {
    subtype: 'next-before',
    prompt: 'What day comes AFTER Wednesday?',
    options: ['Thursday', 'Tuesday', 'Friday', 'Monday'],
    answer: 'Thursday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes BEFORE Monday?',
    options: ['Sunday', 'Tuesday', 'Saturday', 'Friday'],
    answer: 'Sunday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes AFTER Friday?',
    options: ['Saturday', 'Thursday', 'Sunday', 'Monday'],
    answer: 'Saturday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes BEFORE Thursday?',
    options: ['Wednesday', 'Friday', 'Tuesday', 'Monday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes AFTER Sunday?',
    options: ['Monday', 'Saturday', 'Tuesday', 'Friday'],
    answer: 'Monday',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes BEFORE Saturday?',
    options: ['Friday', 'Sunday', 'Thursday', 'Monday'],
    answer: 'Friday',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes AFTER March?',
    options: ['April', 'February', 'May', 'June'],
    answer: 'April',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes BEFORE January?',
    options: ['December', 'November', 'February', 'October'],
    answer: 'December',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes AFTER July?',
    options: ['August', 'June', 'September', 'May'],
    answer: 'August',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes BEFORE October?',
    options: ['September', 'November', 'August', 'December'],
    answer: 'September',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes AFTER November?',
    options: ['December', 'October', 'January', 'September'],
    answer: 'December',
  },
  {
    subtype: 'next-before',
    prompt: 'What day comes AFTER Tuesday?',
    options: ['Wednesday', 'Monday', 'Thursday', 'Friday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'next-before',
    prompt: 'What month comes BEFORE June?',
    options: ['May', 'July', 'April', 'August'],
    answer: 'May',
  },

  // ── Subtype: month-season — match a month to its season or number ─────────────
  {
    subtype: 'month-season',
    prompt: 'Which season is December in?',
    options: ['Winter', 'Summer', 'Spring', 'Autumn'],
    answer: 'Winter',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is July in?',
    options: ['Summer', 'Winter', 'Autumn', 'Spring'],
    answer: 'Summer',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is April in?',
    options: ['Spring', 'Autumn', 'Winter', 'Summer'],
    answer: 'Spring',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is October in?',
    options: ['Autumn', 'Spring', 'Summer', 'Winter'],
    answer: 'Autumn',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is February in?',
    options: ['Winter', 'Spring', 'Summer', 'Autumn'],
    answer: 'Winter',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is May in?',
    options: ['Spring', 'Summer', 'Autumn', 'Winter'],
    answer: 'Spring',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is August in?',
    options: ['Summer', 'Autumn', 'Winter', 'Spring'],
    answer: 'Summer',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is November in?',
    options: ['Autumn', 'Winter', 'Spring', 'Summer'],
    answer: 'Autumn',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which month is in Summer?',
    options: ['June', 'January', 'March', 'October'],
    answer: 'June',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which month is in Winter?',
    options: ['January', 'May', 'July', 'September'],
    answer: 'January',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which month is in Spring?',
    options: ['March', 'December', 'August', 'November'],
    answer: 'March',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which month is in Autumn?',
    options: ['September', 'June', 'February', 'April'],
    answer: 'September',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is January in?',
    options: ['Winter', 'Spring', 'Summer', 'Autumn'],
    answer: 'Winter',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },
  {
    subtype: 'month-season',
    prompt: 'Which season is September in?',
    options: ['Autumn', 'Summer', 'Spring', 'Winter'],
    answer: 'Autumn',
    note: 'Northern-hemisphere seasons (UK) are assumed.',
  },

  // ── Subtype: spelling-choice — choose the correctly spelt word ───────────────
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Wednesday', 'Wensday', 'Wendsday', 'Wednsday'],
    answer: 'Wednesday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['February', 'Febuary', 'Februery', 'Feburary'],
    answer: 'February',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Tuesday', 'Tusday', 'Teusday', 'Tuseday'],
    answer: 'Tuesday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Thursday', 'Thirsday', 'Thusday', 'Thrusday'],
    answer: 'Thursday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Saturday', 'Saterday', 'Satuday', 'Saturaday'],
    answer: 'Saturday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['January', 'Janurary', 'Januery', 'Janaury'],
    answer: 'January',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['August', 'Agust', 'Augost', 'Augest'],
    answer: 'August',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['September', 'Septmber', 'Setember', 'Septembre'],
    answer: 'September',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Friday', 'Friaday', 'Fryday', 'Firday'],
    answer: 'Friday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['October', 'Octuber', 'Octobre', 'Octobor'],
    answer: 'October',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['December', 'Desember', 'Decembre', 'Decmber'],
    answer: 'December',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Monday', 'Munday', 'Monady', 'Mondey'],
    answer: 'Monday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['Sunday', 'Sonday', 'Sunaday', 'Sundey'],
    answer: 'Sunday',
  },
  {
    subtype: 'spelling-choice',
    prompt: 'Which is the correct spelling?',
    options: ['November', 'Novmber', 'Novembre', 'Noveber'],
    answer: 'November',
  },
]

const SUBTYPE_LABEL: Record<Subtype, string> = {
  order: 'Order',
  'next-before': 'Next / Before',
  'month-season': 'Months & Seasons',
  'spelling-choice': 'Spelling',
}

const ROUND_SIZE = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Build a balanced round drawing from every subtype.
function buildRound(): Question[] {
  const subtypes: Subtype[] = ['order', 'next-before', 'month-season', 'spelling-choice']
  const pools = subtypes.map((s) => shuffle(QUESTION_BANK.filter((q) => q.subtype === s)))
  const picked: Question[] = []
  let pi = 0
  while (picked.length < ROUND_SIZE) {
    const pool = pools[pi % pools.length]
    const next = pool.shift()
    if (next) picked.push(next)
    pi++
    if (pools.every((p) => p.length === 0)) break
  }
  return shuffle(picked).map((q) => ({ ...q, options: shuffle(q.options) }))
}

const PRAISE = ['Brilliant!', 'Well done!', 'Great work!', 'Spot on!', 'Excellent!']

// ─── Component ─────────────────────────────────────────────────────────────────

export default function DaysMonthsSeasonsPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [praise, setPraise] = useState('')

  const currentQ = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    setQuestions(buildRound())
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setFeedback(null)
    setPraise('')
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleAnswer = useCallback(
    (choice: string) => {
      if (!currentQ || feedback) return
      const isCorrect = choice === currentQ.answer
      setSelected(choice)
      setTotalAnswered((t) => t + 1)

      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
        setPraise(PRAISE[Math.floor(Math.random() * PRAISE.length)])
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
          setPraise('')
        }
      }, 1600)
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
          gameId="days-months-seasons"
          title="Days, Months & Seasons"
          description="Learn the days of the week, the months of the year and the four seasons. Choose the correct answer for each question."
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
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    <CalendarDays className="size-3" />
                    {SUBTYPE_LABEL[currentQ.subtype]}
                  </span>
                </div>
              </div>

              {/* Question card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-lg font-semibold text-foreground">{currentQ.prompt}</p>
                {currentQ.note && <p className="text-xs text-muted-foreground">{currentQ.note}</p>}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {currentQ.options.map((opt) => {
                  const isAnswer = opt === currentQ.answer
                  const isPicked = opt === selected
                  const showState = feedback != null
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={showState}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-base font-medium text-foreground outline-none transition-all',
                        'hover:bg-accent focus:ring-2 focus:ring-primary/20 disabled:cursor-default',
                        !showState && 'border-border',
                        showState &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showState &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        showState && !isAnswer && !isPicked && 'border-border opacity-60',
                      )}
                    >
                      {opt}
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
                      <CheckCircle className="size-4" /> {praise}
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> Not quite. The answer is:{' '}
                      <span className="font-bold">{currentQ.answer}</span>
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
