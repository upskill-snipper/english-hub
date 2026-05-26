'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Link2 } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type CollocationGroup = 'make' | 'do' | 'have' | 'take' | 'noun'

interface Collocation {
  /** Sentence containing a "___" gap */
  sentence: string
  /** Four answer choices */
  options: string[]
  /** The correct choice */
  answer: string
  /** Which collocation family this item belongs to */
  collocationGroup: CollocationGroup
}

const VERBS = ['make', 'do', 'have', 'take']

/** Helper to build a standard make/do/have/take verb question. */
function v(sentence: string, answer: string, group: CollocationGroup): Collocation {
  return { sentence, options: [...VERBS], answer, collocationGroup: group }
}

const COLLOCATION_BANK: Collocation[] = [
  // ── MAKE ──────────────────────────────────────────────────────────────────
  v('I need to ___ a decision about the job offer by Friday.', 'make', 'make'),
  v('Please try not to ___ a mistake on the application form.', 'make', 'make'),
  v('Could you ___ an effort to arrive on time tomorrow?', 'make', 'make'),
  v('She wants to ___ a good impression at the interview.', 'make', 'make'),
  v('They are going to ___ a complaint about the noisy neighbours.', 'make', 'make'),
  v('Let me ___ a suggestion before we finish the meeting.', 'make', 'make'),
  v('We should ___ a plan for the weekend trip.', 'make', 'make'),
  v("Don't ___ a noise - the baby is sleeping.", 'make', 'make'),
  v('He had to ___ an appointment to see the dentist.', 'make', 'make'),
  v('I always ___ a list before I go food shopping.', 'make', 'make'),
  v('They want to ___ progress on the project this month.', 'make', 'make'),
  v('Can you ___ a phone call to the office for me?', 'make', 'make'),
  v('She tried to ___ friends on her first day at school.', 'make', 'make'),
  v('We need to ___ a reservation at the restaurant tonight.', 'make', 'make'),
  v('He promised to ___ an exception just this once.', 'make', 'make'),

  // ── DO ────────────────────────────────────────────────────────────────────
  v('I have to ___ my homework before I can watch television.', 'do', 'do'),
  v('Could you ___ me a favour and post this letter?', 'do', 'do'),
  v('She needs to ___ the washing-up after dinner.', 'do', 'do'),
  v('They ___ business with several companies in Europe.', 'do', 'do'),
  v('He tries to ___ exercise every morning before work.', 'do', 'do'),
  v('We must ___ some research before writing the report.', 'do', 'do'),
  v("It's my turn to ___ the housework this week.", 'do', 'do'),
  v('Please ___ your best in the exam tomorrow.', 'do', 'do'),
  v('I need to ___ the shopping on my way home.', 'do', 'do'),
  v("She's going to ___ a course in graphic design.", 'do', 'do'),
  v('Can you ___ the cooking while I clean the kitchen?', 'do', 'do'),
  v('They had to ___ the laundry at the weekend.', 'do', 'do'),
  v('He wants to ___ something useful with his free time.', 'do', 'do'),
  v("Let's ___ the dishes together so it's quicker.", 'do', 'do'),

  // ── HAVE ──────────────────────────────────────────────────────────────────
  v("I'd like to ___ a shower before we go out.", 'have', 'have'),
  v('We usually ___ breakfast at about eight o’clock.', 'have', 'have'),
  v('She wants to ___ a rest after the long journey.', 'have', 'have'),
  v("Let's ___ a chat about the holiday plans later.", 'have', 'have'),
  v('They are going to ___ a party for his birthday.', 'have', 'have'),
  v('Can I ___ a look at your photographs from the trip?', 'have', 'have'),
  v('He needs to ___ a word with his manager about the rota.', 'have', 'have'),
  v("I think I'll ___ a cup of tea before bed.", 'have', 'have'),
  v('We should ___ a meeting to discuss the budget.', 'have', 'have'),
  v('Did you ___ a good time at the concert last night?', 'have', 'have'),
  v('She is going to ___ a baby in the spring.', 'have', 'have'),
  v("Let's ___ a break - we've been working for hours.", 'have', 'have'),
  v('I need to ___ a holiday; I feel exhausted.', 'have', 'have'),
  v('Could we ___ a conversation about this in private?', 'have', 'have'),

  // ── TAKE ──────────────────────────────────────────────────────────────────
  v("Don't forget to ___ a photo of the sunset.", 'take', 'take'),
  v('She had to ___ a taxi because she missed the bus.', 'take', 'take'),
  v('I always ___ notes during important lectures.', 'take', 'take'),
  v('We should ___ a break and have some coffee.', 'take', 'take'),
  v('He needs to ___ his medicine twice a day.', 'take', 'take'),
  v('Please ___ care when you cross the busy road.', 'take', 'take'),
  v('They decided to ___ a risk and start a business.', 'take', 'take'),
  v('Can you ___ a message if she rings while I’m out?', 'take', 'take'),
  v("I'll ___ responsibility for organising the event.", 'take', 'take'),
  v('She wants to ___ a course in photography next term.', 'take', 'take'),
  v('We need to ___ action before the problem gets worse.', 'take', 'take'),
  v('He likes to ___ a walk in the park after lunch.', 'take', 'take'),
  v('Let me ___ a seat and I’ll explain everything.', 'take', 'take'),
  v('You should ___ advantage of the free training offer.', 'take', 'take'),

  // ── NOUN PARTNER (choose the noun that collocates) ─────────────────────────
  {
    sentence: 'After the accident he had to make a difficult ___ about his career.',
    options: ['decision', 'homework', 'shower', 'photo'],
    answer: 'decision',
    collocationGroup: 'noun',
  },
  {
    sentence: 'Every evening the children do their ___ at the kitchen table.',
    options: ['homework', 'decision', 'mistake', 'walk'],
    answer: 'homework',
    collocationGroup: 'noun',
  },
  {
    sentence: 'I always take a ___ of the whiteboard before the lesson ends.',
    options: ['photo', 'decision', 'favour', 'breakfast'],
    answer: 'photo',
    collocationGroup: 'noun',
  },
  {
    sentence: 'She likes to have a hot ___ as soon as she gets home from the gym.',
    options: ['shower', 'mistake', 'photo', 'research'],
    answer: 'shower',
    collocationGroup: 'noun',
  },
  {
    sentence: 'Could you do me a ___ and lock the door on your way out?',
    options: ['favour', 'decision', 'photo', 'rest'],
    answer: 'favour',
    collocationGroup: 'noun',
  },
  {
    sentence: 'He made a silly ___ in his essay and lost several marks.',
    options: ['mistake', 'shower', 'walk', 'favour'],
    answer: 'mistake',
    collocationGroup: 'noun',
  },
  {
    sentence: 'They take a long ___ along the beach every Sunday morning.',
    options: ['walk', 'decision', 'homework', 'mistake'],
    answer: 'walk',
    collocationGroup: 'noun',
  },
  {
    sentence: 'We need to do some ___ before we choose a new supplier.',
    options: ['research', 'shower', 'photo', 'party'],
    answer: 'research',
    collocationGroup: 'noun',
  },
  {
    sentence: 'After such a tiring week she just wants to have a quiet ___.',
    options: ['rest', 'mistake', 'favour', 'research'],
    answer: 'rest',
    collocationGroup: 'noun',
  },
  {
    sentence: 'The manager will make an important ___ at the meeting tomorrow.',
    options: ['announcement', 'homework', 'taxi', 'shower'],
    answer: 'announcement',
    collocationGroup: 'noun',
  },
  {
    sentence: 'They are going to have a big ___ to celebrate their anniversary.',
    options: ['party', 'mistake', 'research', 'photo'],
    answer: 'party',
    collocationGroup: 'noun',
  },
  {
    sentence: 'You should take more ___ when you handle the fragile glasses.',
    options: ['care', 'homework', 'favour', 'party'],
    answer: 'care',
    collocationGroup: 'noun',
  },
  {
    sentence: 'I always make a shopping ___ so I don’t forget anything.',
    options: ['list', 'shower', 'walk', 'rest'],
    answer: 'list',
    collocationGroup: 'noun',
  },
  {
    sentence: 'He had to take a ___ to the airport because the train was cancelled.',
    options: ['taxi', 'decision', 'homework', 'favour'],
    answer: 'taxi',
    collocationGroup: 'noun',
  },
  {
    sentence: "Let's have a short ___ about the report before lunch.",
    options: ['chat', 'mistake', 'photo', 'taxi'],
    answer: 'chat',
    collocationGroup: 'noun',
  },
]

const ROUND_SIZE = 15

const GROUP_LABEL: Record<CollocationGroup, string> = {
  make: 'MAKE',
  do: 'DO',
  have: 'HAVE',
  take: 'TAKE',
  noun: 'Noun partner',
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ENCOURAGE = [
  'Brilliant!',
  'Well done!',
  'Spot on!',
  'Great choice!',
  'Excellent!',
  'Perfect!',
]

// ─── Component ─────────────────────────────────────────────────────────────────

export default function CollocationsChallengePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Collocation[]>([])
  const [optionOrders, setOptionOrders] = useState<string[][]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [praise, setPraise] = useState('')

  const currentQuestion = questions[qIdx] ?? null
  const currentOptions = optionOrders[qIdx] ?? []

  const sentenceParts = useMemo(() => {
    if (!currentQuestion) return ['', '']
    const idx = currentQuestion.sentence.indexOf('___')
    if (idx === -1) return [currentQuestion.sentence, '']
    return [currentQuestion.sentence.slice(0, idx), currentQuestion.sentence.slice(idx + 3)]
  }, [currentQuestion])

  const handleStart = useCallback(() => {
    const picked = shuffle(COLLOCATION_BANK).slice(0, ROUND_SIZE)
    setQuestions(picked)
    setOptionOrders(picked.map((q) => shuffle(q.options)))
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

  const handleSelect = useCallback(
    (option: string) => {
      if (!currentQuestion || feedback) return
      const isCorrect = option === currentQuestion.answer
      setSelected(option)
      setTotalAnswered((t) => t + 1)

      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
        setPraise(ENCOURAGE[Math.floor(Math.random() * ENCOURAGE.length)])
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
      }, 1900)
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
          gameId="collocations-challenge"
          title="Collocations Challenge"
          description="Choose the verb or noun that fits the sentence. Master make, do, have and take - the trickiest English word partners."
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
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    <Link2 className="size-3" />
                    {GROUP_LABEL[currentQuestion.collocationGroup]}
                  </span>
                </div>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-lg leading-relaxed text-foreground">
                  {sentenceParts[0]}
                  <span
                    className={cn(
                      'mx-1 inline-block min-w-[5rem] rounded-md border-b-2 px-2 pb-0.5 font-bold transition-colors',
                      feedback === 'correct'
                        ? 'border-emerald-500 text-emerald-400'
                        : feedback === 'wrong'
                          ? 'border-red-500 text-red-400'
                          : 'border-primary/50 text-primary',
                    )}
                  >
                    {feedback ? currentQuestion.answer : '?'}
                  </span>
                  {sentenceParts[1]}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
                {currentOptions.map((option) => {
                  const isAnswer = option === currentQuestion.answer
                  const isPicked = option === selected
                  const showCorrect = !!feedback && isAnswer
                  const showWrong = feedback === 'wrong' && isPicked && !isAnswer
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3.5 text-base font-semibold text-foreground transition-all duration-150',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        !feedback &&
                          'border-border hover:border-primary hover:bg-accent active:translate-y-px',
                        showCorrect && 'border-emerald-500 bg-emerald-500/15 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/15 text-red-400',
                        feedback && !showCorrect && !showWrong && 'border-border opacity-50',
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
                    'flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium',
                    feedback === 'correct'
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-red-400 bg-red-500/10',
                  )}
                >
                  {feedback === 'correct' ? (
                    <>
                      <CheckCircle className="size-4" /> {praise} &ldquo;{currentQuestion.answer}
                      &rdquo; is the right partner.
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> Not quite. The correct answer is{' '}
                      <span className="font-bold">&ldquo;{currentQuestion.answer}&rdquo;</span>.
                      Keep going!
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
