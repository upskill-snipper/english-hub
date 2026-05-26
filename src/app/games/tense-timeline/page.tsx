'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Clock } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Tense =
  | 'Present Simple'
  | 'Present Continuous'
  | 'Past Simple'
  | 'Past Continuous'
  | 'Present Perfect'
  | 'Past Perfect'
  | "Future 'will'"
  | "'going to' Future"

const ALL_TENSES: Tense[] = [
  'Present Simple',
  'Present Continuous',
  'Past Simple',
  'Past Continuous',
  'Present Perfect',
  'Past Perfect',
  "Future 'will'",
  "'going to' Future",
]

interface TenseItem {
  sentence: string
  tense: Tense
  why: string
}

const SENTENCE_BANK: TenseItem[] = [
  // Present Simple
  {
    sentence: 'The train leaves at half past seven every morning.',
    tense: 'Present Simple',
    why: '"leaves" describes a regular timetable or routine - a hallmark of the present simple.',
  },
  {
    sentence: 'My sister works in a small bakery on the high street.',
    tense: 'Present Simple',
    why: '"works" states a permanent fact about the present.',
  },
  {
    sentence: 'Water boils at one hundred degrees Celsius.',
    tense: 'Present Simple',
    why: 'The present simple is used for general truths and scientific facts.',
  },
  {
    sentence: 'We usually have dinner at about seven o’clock.',
    tense: 'Present Simple',
    why: '"have" with the adverb "usually" signals a habit.',
  },
  {
    sentence: 'She speaks three languages fluently.',
    tense: 'Present Simple',
    why: '"speaks" describes a permanent ability or state.',
  },
  {
    sentence: 'The shop opens at nine and closes at six.',
    tense: 'Present Simple',
    why: 'Fixed opening hours are expressed in the present simple.',
  },
  {
    sentence: 'He never drinks coffee after lunch.',
    tense: 'Present Simple',
    why: '"never drinks" is a habit with a frequency adverb.',
  },

  // Present Continuous
  {
    sentence: 'Look! The children are playing in the garden right now.',
    tense: 'Present Continuous',
    why: '"are playing" with "right now" shows an action happening at the moment of speaking.',
  },
  {
    sentence: 'I am reading a fascinating novel this week.',
    tense: 'Present Continuous',
    why: '"am reading" describes a temporary action around the present time.',
  },
  {
    sentence: 'They are building a new library near the station.',
    tense: 'Present Continuous',
    why: '"are building" is an ongoing action in progress.',
  },
  {
    sentence: 'Why are you wearing your coat indoors?',
    tense: 'Present Continuous',
    why: '"are wearing" refers to something happening now.',
  },
  {
    sentence: 'My parents are travelling around Italy at the moment.',
    tense: 'Present Continuous',
    why: '"are travelling" with "at the moment" shows a current temporary activity.',
  },
  {
    sentence: 'She is studying for her exams this month.',
    tense: 'Present Continuous',
    why: '"is studying" is a temporary situation around now.',
  },
  {
    sentence: 'The weather is getting colder these days.',
    tense: 'Present Continuous',
    why: '"is getting" describes a changing situation in progress.',
  },

  // Past Simple
  {
    sentence: 'We visited my grandmother in Wales last summer.',
    tense: 'Past Simple',
    why: '"visited" with "last summer" is a finished action at a definite past time.',
  },
  {
    sentence: 'He bought a second-hand bicycle yesterday.',
    tense: 'Past Simple',
    why: '"bought" with "yesterday" is a completed past action.',
  },
  {
    sentence: 'The film started at eight and finished at ten.',
    tense: 'Past Simple',
    why: 'Two completed past actions with clear past times.',
  },
  {
    sentence: 'They moved to Manchester three years ago.',
    tense: 'Past Simple',
    why: '"moved" with "three years ago" marks a finished past event.',
  },
  {
    sentence: 'I broke my arm when I was nine.',
    tense: 'Past Simple',
    why: '"broke" is a single completed action in the past.',
  },
  {
    sentence: 'She wrote a letter to the council last week.',
    tense: 'Past Simple',
    why: '"wrote" with "last week" is a completed past action.',
  },
  {
    sentence: 'We did not see anyone at the party.',
    tense: 'Past Simple',
    why: '"did not see" is the negative past simple form.',
  },

  // Past Continuous
  {
    sentence: 'I was cooking dinner when the phone rang.',
    tense: 'Past Continuous',
    why: '"was cooking" describes a longer action interrupted by a shorter past action.',
  },
  {
    sentence: 'They were watching television all evening.',
    tense: 'Past Continuous',
    why: '"were watching" shows an action in progress over a past period.',
  },
  {
    sentence: 'While she was walking home, it began to rain.',
    tense: 'Past Continuous',
    why: '"was walking" sets the background scene for another past event.',
  },
  {
    sentence: 'At nine o’clock last night we were still revising.',
    tense: 'Past Continuous',
    why: '"were revising" describes an action in progress at a specific past moment.',
  },
  {
    sentence: 'He was waiting for the bus when he saw the accident.',
    tense: 'Past Continuous',
    why: '"was waiting" is the ongoing past action interrupted by "saw".',
  },
  {
    sentence: 'The sun was shining and the birds were singing.',
    tense: 'Past Continuous',
    why: 'Two simultaneous ongoing actions describing a past scene.',
  },
  {
    sentence: 'What were you doing at midnight?',
    tense: 'Past Continuous',
    why: '"were doing" asks about an action in progress at a past time.',
  },

  // Present Perfect
  {
    sentence: 'I have never been to Japan.',
    tense: 'Present Perfect',
    why: '"have never been" describes life experience up to now with no fixed time.',
  },
  {
    sentence: 'She has just finished her homework.',
    tense: 'Present Perfect',
    why: '"has just finished" links a recent past action to the present with "just".',
  },
  {
    sentence: 'We have lived in this village since 2015.',
    tense: 'Present Perfect',
    why: '"have lived" with "since" shows an action continuing from the past until now.',
  },
  {
    sentence: 'They have already eaten their lunch.',
    tense: 'Present Perfect',
    why: '"have already eaten" connects a completed action to the present with "already".',
  },
  {
    sentence: 'Have you ever ridden a horse?',
    tense: 'Present Perfect',
    why: '"Have you ever ridden" asks about experience at an unspecified time.',
  },
  {
    sentence: 'He has worked here for ten years.',
    tense: 'Present Perfect',
    why: '"has worked" with "for" shows duration up to the present.',
  },
  {
    sentence: 'I have lost my keys and I cannot find them.',
    tense: 'Present Perfect',
    why: 'A past action with a present result is expressed with the present perfect.',
  },

  // Past Perfect
  {
    sentence: 'By the time we arrived, the train had already left.',
    tense: 'Past Perfect',
    why: '"had left" happened before another past action ("arrived").',
  },
  {
    sentence: 'She had finished the report before the meeting began.',
    tense: 'Past Perfect',
    why: '"had finished" is the earlier of two past events.',
  },
  {
    sentence: 'They were tired because they had walked all day.',
    tense: 'Past Perfect',
    why: '"had walked" explains a cause that happened before the past state.',
  },
  {
    sentence: 'When I got home, my brother had cooked dinner.',
    tense: 'Past Perfect',
    why: '"had cooked" was completed before "got home".',
  },
  {
    sentence: 'He realised he had forgotten his passport.',
    tense: 'Past Perfect',
    why: '"had forgotten" happened before the moment he realised it.',
  },
  {
    sentence: 'The film had started by the time we sat down.',
    tense: 'Past Perfect',
    why: '"had started" precedes the later past action "sat down".',
  },
  {
    sentence: 'I had never seen snow until I moved to Scotland.',
    tense: 'Past Perfect',
    why: '"had never seen" describes experience up to a point in the past.',
  },

  // Future 'will'
  {
    sentence: 'I think it will rain later this afternoon.',
    tense: "Future 'will'",
    why: '"will rain" with "I think" is a prediction about the future.',
  },
  {
    sentence: 'Don’t worry, I will help you with your bags.',
    tense: "Future 'will'",
    why: '"will help" is a spontaneous offer or decision made now.',
  },
  {
    sentence: 'She will be twenty years old next month.',
    tense: "Future 'will'",
    why: '"will be" states a future fact.',
  },
  {
    sentence: 'The shop will close early on Christmas Eve.',
    tense: "Future 'will'",
    why: '"will close" predicts or states a future event.',
  },
  {
    sentence: 'I promise I will phone you when I land.',
    tense: "Future 'will'",
    why: '"will phone" expresses a promise about the future.',
  },
  {
    sentence: 'Perhaps they will arrive before dark.',
    tense: "Future 'will'",
    why: '"will arrive" with "perhaps" is an uncertain prediction.',
  },
  {
    sentence: 'I am sure you will pass the test.',
    tense: "Future 'will'",
    why: '"will pass" expresses a prediction based on opinion.',
  },

  // 'going to' Future
  {
    sentence: 'We are going to visit the museum tomorrow.',
    tense: "'going to' Future",
    why: '"are going to visit" describes a planned future intention.',
  },
  {
    sentence: 'Look at those dark clouds - it is going to rain.',
    tense: "'going to' Future",
    why: '"is going to rain" is a prediction based on present evidence.',
  },
  {
    sentence: 'She is going to study medicine at university.',
    tense: "'going to' Future",
    why: '"is going to study" expresses a future plan or intention.',
  },
  {
    sentence: 'They are going to sell their old car next week.',
    tense: "'going to' Future",
    why: '"are going to sell" shows a decided plan for the future.',
  },
  {
    sentence: 'I am going to start a new job in September.',
    tense: "'going to' Future",
    why: '"am going to start" describes a prior intention.',
  },
  {
    sentence: 'Be careful - you are going to drop those plates!',
    tense: "'going to' Future",
    why: '"are going to drop" predicts the near future from present evidence.',
  },
  {
    sentence: 'We are going to have a barbecue if the weather stays fine.',
    tense: "'going to' Future",
    why: '"are going to have" expresses a planned intention.',
  },
]

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

function buildOptions(correct: Tense): Tense[] {
  const distractors = shuffle(ALL_TENSES.filter((t) => t !== correct)).slice(0, 3)
  return shuffle([correct, ...distractors])
}

// ─── Component ─────────────────────────────────────────────────────────────────

interface Question extends TenseItem {
  options: Tense[]
}

export default function TenseTimelinePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<Tense | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const currentQ = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = shuffle(SENTENCE_BANK).slice(0, ROUND_SIZE)
    const built: Question[] = picked.map((item) => ({
      ...item,
      options: buildOptions(item.tense),
    }))
    setQuestions(built)
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
    (option: Tense) => {
      if (!currentQ || feedback) return
      const isCorrect = option === currentQ.tense
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
      }, 2600)
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
          gameId="tense-timeline"
          title="Tense Timeline"
          description="Read each sentence and choose the verb tense it uses. Build your grammar instinct one sentence at a time."
          difficulty="Crossover"
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
                  Sentence {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Clock className="size-3.5" /> Which tense is this?
                </div>
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  &ldquo;{currentQ.sentence}&rdquo;
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((option) => {
                  const isCorrectOption = option === currentQ.tense
                  const isChosen = option === selected
                  const showState = feedback != null
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={showState}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-medium text-left transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !showState &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        showState &&
                          isCorrectOption &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showState &&
                          isChosen &&
                          !isCorrectOption &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        showState &&
                          !isCorrectOption &&
                          !isChosen &&
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        {showState && isCorrectOption && <CheckCircle className="size-4" />}
                        {showState && isChosen && !isCorrectOption && (
                          <XCircle className="size-4" />
                        )}
                        {option}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div
                  className={cn(
                    'rounded-lg px-4 py-3 text-sm space-y-1',
                    feedback === 'correct'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400',
                  )}
                >
                  <div className="flex items-center gap-2 font-semibold">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Well done - that&rsquo;s right!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite - it&rsquo;s{' '}
                        <span className="font-bold">{currentQ.tense}</span>.
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{currentQ.why}</p>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
