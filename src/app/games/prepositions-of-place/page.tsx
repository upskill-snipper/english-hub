'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, MapPin } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface Question {
  scene: string
  options: [string, string, string, string]
  answer: string
  why: string
}

const QUESTION_BANK: Question[] = [
  // Place: in / on / under
  {
    scene: 'The milk is _____ the fridge.',
    options: ['in', 'on', 'under', 'above'],
    answer: 'in',
    why: 'We use "in" for something inside a closed space like a fridge.',
  },
  {
    scene: 'The book is _____ the table.',
    options: ['on', 'in', 'under', 'between'],
    answer: 'on',
    why: 'We use "on" for a surface that something rests upon, like a table.',
  },
  {
    scene: 'The cat is _____ the box, hiding completely.',
    options: ['under', 'on', 'above', 'opposite'],
    answer: 'under',
    why: '"Under" means lower than and covered by something.',
  },
  {
    scene: 'There is a lovely picture _____ the wall.',
    options: ['on', 'in', 'at', 'under'],
    answer: 'on',
    why: 'Pictures hang flat against a surface, so we say "on the wall".',
  },
  {
    scene: 'The keys are _____ my pocket.',
    options: ['in', 'on', 'above', 'between'],
    answer: 'in',
    why: 'A pocket is an enclosed space, so we use "in".',
  },
  {
    scene: 'The dog is sleeping _____ the bed.',
    options: ['under', 'in', 'opposite', 'above'],
    answer: 'under',
    why: '"Under" shows the dog is in the space below the bed.',
  },
  {
    scene: 'Write your name _____ the top of the page.',
    options: ['at', 'in', 'under', 'behind'],
    answer: 'at',
    why: 'We use "at" for a specific point, such as the top of a page.',
  },
  {
    scene: 'The spider is _____ the ceiling.',
    options: ['on', 'in', 'under', 'next to'],
    answer: 'on',
    why: 'The spider is touching the ceiling surface, so "on" is correct.',
  },
  {
    scene: 'My shoes are _____ the stairs.',
    options: ['under', 'in', 'above', 'between'],
    answer: 'under',
    why: '"Under" places the shoes in the space beneath the stairs.',
  },
  {
    scene: 'There is some money _____ my wallet.',
    options: ['in', 'on', 'at', 'above'],
    answer: 'in',
    why: 'A wallet holds things inside it, so we use "in".',
  },

  // behind / in front of / next to
  {
    scene: 'The car is parked _____ the house, out of sight.',
    options: ['behind', 'in front of', 'on', 'above'],
    answer: 'behind',
    why: '"Behind" means at the back of something, hidden from the front.',
  },
  {
    scene: 'The bus stop is right _____ the school, by the gate.',
    options: ['in front of', 'behind', 'under', 'in'],
    answer: 'in front of',
    why: '"In front of" means directly before or facing something.',
  },
  {
    scene: 'Sara sits _____ me; our desks are side by side.',
    options: ['next to', 'behind', 'under', 'above'],
    answer: 'next to',
    why: '"Next to" means immediately beside something.',
  },
  {
    scene: 'The bin is _____ the door, just beside it.',
    options: ['next to', 'in', 'above', 'opposite'],
    answer: 'next to',
    why: '"Next to" describes two things close together, side by side.',
  },
  {
    scene: 'The garden is _____ the house, at the back.',
    options: ['behind', 'in front of', 'on', 'at'],
    answer: 'behind',
    why: '"Behind" shows the garden is at the rear of the house.',
  },
  {
    scene: 'A tall tree stands _____ the window, blocking the view outwards.',
    options: ['in front of', 'behind', 'under', 'in'],
    answer: 'in front of',
    why: '"In front of" means positioned before and facing the window.',
  },
  {
    scene: 'The chemist is _____ the bakery, right beside it.',
    options: ['next to', 'above', 'under', 'opposite'],
    answer: 'next to',
    why: '"Next to" means directly adjacent to something.',
  },
  {
    scene: 'He is hiding _____ the curtain so nobody can see him.',
    options: ['behind', 'in front of', 'on', 'next to'],
    answer: 'behind',
    why: '"Behind" means at the back of the curtain, out of view.',
  },

  // between / above / below / opposite
  {
    scene: 'The letter B comes _____ A and C.',
    options: ['between', 'next to', 'behind', 'above'],
    answer: 'between',
    why: '"Between" is used for a position with something on each side.',
  },
  {
    scene: 'The lamp hangs _____ the table, higher up.',
    options: ['above', 'under', 'in', 'between'],
    answer: 'above',
    why: '"Above" means at a higher level, not necessarily touching.',
  },
  {
    scene: 'Sign your name _____ the dotted line, lower on the form.',
    options: ['below', 'above', 'in', 'behind'],
    answer: 'below',
    why: '"Below" means at a lower level than something else.',
  },
  {
    scene: 'The café is _____ the library, just across the street.',
    options: ['opposite', 'next to', 'under', 'in'],
    answer: 'opposite',
    why: '"Opposite" means facing something from across a space.',
  },
  {
    scene: 'The village lies _____ the two hills.',
    options: ['between', 'above', 'on', 'behind'],
    answer: 'between',
    why: '"Between" describes a position with one thing on either side.',
  },
  {
    scene: 'Birds are flying _____ the clouds.',
    options: ['above', 'below', 'in', 'next to'],
    answer: 'above',
    why: '"Above" means higher than the clouds in the sky.',
  },
  {
    scene: 'The car park is _____ ground level, underneath the shop.',
    options: ['below', 'above', 'on', 'opposite'],
    answer: 'below',
    why: '"Below" means at a lower level, beneath the ground floor.',
  },
  {
    scene: 'My house is _____ the park; I can see it from my front door.',
    options: ['opposite', 'between', 'in', 'under'],
    answer: 'opposite',
    why: '"Opposite" means directly facing across the road.',
  },
  {
    scene: 'The cat is sitting _____ the two cushions.',
    options: ['between', 'above', 'on', 'behind'],
    answer: 'between',
    why: 'There is a cushion on each side, so we use "between".',
  },
  {
    scene: 'The shelf is _____ the desk, fixed higher on the wall.',
    options: ['above', 'under', 'in', 'next to'],
    answer: 'above',
    why: '"Above" shows the shelf is at a higher position than the desk.',
  },

  // Place: at / in / on (location contrast)
  {
    scene: 'I will meet you _____ the bus stop.',
    options: ['at', 'in', 'on', 'under'],
    answer: 'at',
    why: 'We use "at" for a specific meeting point like a bus stop.',
  },
  {
    scene: 'She lives _____ Manchester.',
    options: ['in', 'at', 'on', 'above'],
    answer: 'in',
    why: 'We use "in" for towns, cities and countries.',
  },
  {
    scene: 'My flat is _____ the third floor.',
    options: ['on', 'in', 'at', 'under'],
    answer: 'on',
    why: 'We use "on" with floors of a building.',
  },
  {
    scene: 'The children are _____ home this evening.',
    options: ['at', 'in', 'on', 'behind'],
    answer: 'at',
    why: '"At home" is a fixed expression for being at one\'s house.',
  },
  {
    scene: 'We stayed _____ a small hotel near the sea.',
    options: ['in', 'on', 'at', 'above'],
    answer: 'in',
    why: 'We use "in" for being inside a building such as a hotel.',
  },
  {
    scene: 'There is a famous painting _____ the museum.',
    options: ['in', 'at', 'on', 'under'],
    answer: 'in',
    why: 'We use "in" for something inside a place like a museum.',
  },
  {
    scene: 'He is waiting _____ the corner of the street.',
    options: ['at', 'in', 'on', 'between'],
    answer: 'at',
    why: 'We use "at" for a precise point, such as a corner.',
  },
  {
    scene: 'The shop is _____ the high street.',
    options: ['on', 'in', 'at', 'under'],
    answer: 'on',
    why: 'In British English we say a shop is "on" a street.',
  },
  {
    scene: 'The students are _____ the classroom now.',
    options: ['in', 'at', 'on', 'above'],
    answer: 'in',
    why: 'We use "in" for being inside a room.',
  },
  {
    scene: 'I saw her _____ the party last night.',
    options: ['at', 'in', 'on', 'behind'],
    answer: 'at',
    why: 'We use "at" for events like a party or a concert.',
  },

  // Time: at / in / on
  {
    scene: "The lesson starts _____ nine o'clock.",
    options: ['at', 'in', 'on', 'by'],
    answer: 'at',
    why: 'We use "at" with clock times, e.g. "at nine o\'clock".',
  },
  {
    scene: 'My birthday is _____ July.',
    options: ['in', 'at', 'on', 'under'],
    answer: 'in',
    why: 'We use "in" with months of the year.',
  },
  {
    scene: 'We have a meeting _____ Monday.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    why: 'We use "on" with days of the week.',
  },
  {
    scene: 'It often snows _____ winter.',
    options: ['in', 'at', 'on', 'above'],
    answer: 'in',
    why: 'We use "in" with seasons of the year.',
  },
  {
    scene: 'I usually read _____ night before sleeping.',
    options: ['at', 'in', 'on', 'by'],
    answer: 'at',
    why: '"At night" is a fixed expression for that part of the day.',
  },
  {
    scene: 'The shop opens _____ the morning.',
    options: ['in', 'at', 'on', 'under'],
    answer: 'in',
    why: 'We say "in the morning", "in the afternoon", "in the evening".',
  },
  {
    scene: "We always celebrate _____ New Year's Day.",
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    why: 'We use "on" with specific dates and named days.',
  },
  {
    scene: 'She was born _____ 2009.',
    options: ['in', 'at', 'on', 'by'],
    answer: 'in',
    why: 'We use "in" with years.',
  },
  {
    scene: 'The train leaves _____ half past six.',
    options: ['at', 'in', 'on', 'under'],
    answer: 'at',
    why: 'We use "at" with exact times of the clock.',
  },
  {
    scene: 'Many people relax _____ the weekend.',
    options: ['at', 'in', 'on', 'by'],
    answer: 'at',
    why: 'In British English we say "at the weekend".',
  },
  {
    scene: 'The film begins _____ midnight.',
    options: ['at', 'in', 'on', 'by'],
    answer: 'at',
    why: '"At midnight" uses "at" for a precise point in time.',
  },
  {
    scene: 'We are going on holiday _____ August.',
    options: ['in', 'at', 'on', 'under'],
    answer: 'in',
    why: 'We use "in" with months such as August.',
  },
  {
    scene: 'My appointment is _____ Friday afternoon.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    why: 'We use "on" with a particular day, even with a part of it.',
  },
  {
    scene: 'The library closes early _____ Christmas Eve.',
    options: ['on', 'at', 'in', 'by'],
    answer: 'on',
    why: 'We use "on" with named days and dates.',
  },

  // Mixed place review
  {
    scene: 'The umbrella is _____ the bag, tucked inside.',
    options: ['in', 'on', 'above', 'opposite'],
    answer: 'in',
    why: 'A bag is an enclosed container, so we use "in".',
  },
  {
    scene: 'The clock is _____ the door, fixed higher up.',
    options: ['above', 'under', 'in', 'next to'],
    answer: 'above',
    why: '"Above" shows it is at a higher position than the door.',
  },
  {
    scene: 'The post office is _____ the bank and the chemist.',
    options: ['between', 'on', 'under', 'opposite'],
    answer: 'between',
    why: 'There is a building on each side, so we use "between".',
  },
  {
    scene: 'A small mat lies _____ the front door.',
    options: ['in front of', 'behind', 'in', 'above'],
    answer: 'in front of',
    why: '"In front of" means directly before and facing the door.',
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

const ROUND_SIZE = 15

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PrepositionsOfPlacePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const currentQuestion = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = shuffle(QUESTION_BANK)
      .slice(0, ROUND_SIZE)
      .map((q) => ({ ...q, options: shuffle(q.options) as [string, string, string, string] }))
    setQuestions(picked)
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
      if (!currentQuestion || feedback) return
      const isCorrect = option === currentQuestion.answer
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
      }, 2200)
    },
    [currentQuestion, feedback, qIdx, questions.length],
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
          gameId="prepositions-of-place"
          title="Where Is It?"
          description="Read each short scene and choose the correct preposition of place or time. There are 15 questions per round."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
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

              {/* Scene card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <MapPin className="size-3.5" /> Choose the best word
                </div>
                <p className="text-xl font-medium leading-relaxed text-foreground">
                  {currentQuestion.scene}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {currentQuestion.options.map((option) => {
                  const isAnswer = option === currentQuestion.answer
                  const isSelected = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!feedback}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-center text-base font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isSelected &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !isAnswer && !isSelected && 'border-border opacity-50',
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
                  <div className="flex items-center gap-2 font-semibold">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Well done - that&apos;s right!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer is &ldquo;
                        {currentQuestion.answer}&rdquo;.
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground">{currentQuestion.why}</p>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
