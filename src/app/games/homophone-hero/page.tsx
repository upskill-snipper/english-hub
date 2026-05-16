'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface HomophoneItem {
  sentence: string // contains "___" where the answer goes
  options: string[]
  answer: string
  tip: string
}

const ROUND_SIZE = 15

const HOMOPHONE_BANK: HomophoneItem[] = [
  // their / there / they're
  {
    sentence: 'The students left ___ bags by the classroom door.',
    options: ['their', 'there', "they're"],
    answer: 'their',
    tip: '"Their" shows belonging — the bags belong to them.',
  },
  {
    sentence: 'Put the new books over ___ on the shelf.',
    options: ['their', 'there', "they're"],
    answer: 'there',
    tip: '"There" points to a place — it contains the word "here".',
  },
  {
    sentence: '___ going to be late for the school trip.',
    options: ['Their', 'There', "They're"],
    answer: "They're",
    tip: '"They\'re" is short for "they are".',
  },
  {
    sentence: 'My cousins say ___ favourite subject is science.',
    options: ['their', 'there', "they're"],
    answer: 'their',
    tip: '"Their" = belonging to them (their subject).',
  },
  {
    sentence: 'Is ___ enough time to finish the test?',
    options: ['their', 'there', "they're"],
    answer: 'there',
    tip: '"There is / there are" talks about existence.',
  },
  {
    sentence: 'I think ___ waiting for us outside.',
    options: ['their', 'there', "they're"],
    answer: "they're",
    tip: 'Test: can you say "they are"? Then use "they\'re".',
  },
  // your / you're
  {
    sentence: 'Have you finished ___ homework yet?',
    options: ['your', "you're"],
    answer: 'your',
    tip: '"Your" shows it belongs to you.',
  },
  {
    sentence: '___ doing really well in this lesson.',
    options: ['Your', "You're"],
    answer: "You're",
    tip: '"You\'re" is short for "you are".',
  },
  {
    sentence: 'Please bring ___ pencil case tomorrow.',
    options: ['your', "you're"],
    answer: 'your',
    tip: '"Your" = belonging to you (your pencil case).',
  },
  {
    sentence: 'I think ___ going to enjoy this story.',
    options: ['your', "you're"],
    answer: "you're",
    tip: 'Test: can you say "you are"? Then use "you\'re".',
  },
  {
    sentence: 'Is this ___ jacket on the chair?',
    options: ['your', "you're"],
    answer: 'your',
    tip: '"Your" shows ownership of the jacket.',
  },
  // to / too / two
  {
    sentence: 'We are going ___ the library after lunch.',
    options: ['to', 'too', 'two'],
    answer: 'to',
    tip: '"To" shows direction or is part of a verb (to go).',
  },
  {
    sentence: 'The soup was far ___ hot to eat.',
    options: ['to', 'too', 'two'],
    answer: 'too',
    tip: '"Too" means "also" or "more than enough".',
  },
  {
    sentence: 'I need ___ pens for the exam.',
    options: ['to', 'too', 'two'],
    answer: 'two',
    tip: '"Two" is the number 2.',
  },
  {
    sentence: 'Can I come ___, please?',
    options: ['to', 'too', 'two'],
    answer: 'too',
    tip: '"Too" here means "as well / also".',
  },
  {
    sentence: 'She walked ___ the front of the room.',
    options: ['to', 'too', 'two'],
    answer: 'to',
    tip: '"To" shows movement towards a place.',
  },
  {
    sentence: 'There are ___ weeks left until the holidays.',
    options: ['to', 'too', 'two'],
    answer: 'two',
    tip: '"Two" is a number — count the weeks.',
  },
  // its / it's
  {
    sentence: 'The dog wagged ___ tail happily.',
    options: ['its', "it's"],
    answer: 'its',
    tip: '"Its" shows belonging (the tail belongs to the dog).',
  },
  {
    sentence: '___ raining heavily this morning.',
    options: ['Its', "It's"],
    answer: "It's",
    tip: '"It\'s" is short for "it is".',
  },
  {
    sentence: 'The school is proud of ___ exam results.',
    options: ['its', "it's"],
    answer: 'its',
    tip: '"Its" = belonging to it (the school\'s results).',
  },
  {
    sentence: 'I think ___ time to start the test.',
    options: ['its', "it's"],
    answer: "it's",
    tip: 'Test: can you say "it is"? Then use "it\'s".',
  },
  {
    sentence: 'The phone lost ___ signal in the tunnel.',
    options: ['its', "it's"],
    answer: 'its',
    tip: '"Its" shows the signal belonged to the phone.',
  },
  // where / wear
  {
    sentence: '___ did you put my calculator?',
    options: ['Where', 'Wear'],
    answer: 'Where',
    tip: '"Where" asks about a place.',
  },
  {
    sentence: 'You must ___ a tie with the school uniform.',
    options: ['where', 'wear'],
    answer: 'wear',
    tip: '"Wear" means to have clothes on your body.',
  },
  {
    sentence: 'This is the room ___ we sit our exams.',
    options: ['where', 'wear'],
    answer: 'where',
    tip: '"Where" points to a place or location.',
  },
  {
    sentence: 'What will you ___ to the school disco?',
    options: ['where', 'wear'],
    answer: 'wear',
    tip: '"Wear" links to clothing — think "wardrobe".',
  },
  // here / hear
  {
    sentence: 'Please come and sit ___ next to me.',
    options: ['here', 'hear'],
    answer: 'here',
    tip: '"Here" means in this place.',
  },
  {
    sentence: 'Can you ___ the bell from the playground?',
    options: ['here', 'hear'],
    answer: 'hear',
    tip: '"Hear" is about sound — it contains "ear".',
  },
  {
    sentence: 'I cannot ___ the teacher from the back row.',
    options: ['here', 'hear'],
    answer: 'hear',
    tip: 'Use your "ear" to "hear".',
  },
  {
    sentence: 'Leave your homework ___ on my desk.',
    options: ['here', 'hear'],
    answer: 'here',
    tip: '"Here" shows a place — like "there" without the t.',
  },
  // weather / whether
  {
    sentence: 'The ___ was cold and rainy all weekend.',
    options: ['weather', 'whether'],
    answer: 'weather',
    tip: '"Weather" is the rain, sun and wind outside.',
  },
  {
    sentence: 'I am not sure ___ to bring an umbrella.',
    options: ['weather', 'whether'],
    answer: 'whether',
    tip: '"Whether" introduces a choice (like "if").',
  },
  {
    sentence: 'Ask the teacher ___ the trip is still on.',
    options: ['weather', 'whether'],
    answer: 'whether',
    tip: '"Whether" is used for a yes/no choice.',
  },
  {
    sentence: 'Bad ___ delayed the start of the match.',
    options: ['weather', 'whether'],
    answer: 'weather',
    tip: '"Weather" describes outdoor conditions.',
  },
  // accept / except
  {
    sentence: 'Did the school ___ your late application?',
    options: ['accept', 'except'],
    answer: 'accept',
    tip: '"Accept" means to receive or say yes to something.',
  },
  {
    sentence: 'Everyone passed the test ___ one student.',
    options: ['accept', 'except'],
    answer: 'except',
    tip: '"Except" means "not including".',
  },
  {
    sentence: 'I will gladly ___ your kind offer of help.',
    options: ['accept', 'except'],
    answer: 'accept',
    tip: '"Accept" = to take or agree to something.',
  },
  {
    sentence: 'The shop is open every day ___ Sunday.',
    options: ['accept', 'except'],
    answer: 'except',
    tip: '"Except" leaves something out.',
  },
  // affect / effect
  {
    sentence: 'Loud noise can ___ your concentration.',
    options: ['affect', 'effect'],
    answer: 'affect',
    tip: '"Affect" is the verb — the Action.',
  },
  {
    sentence: 'The new rules had a positive ___ on behaviour.',
    options: ['affect', 'effect'],
    answer: 'effect',
    tip: '"Effect" is the noun — the End result.',
  },
  {
    sentence: 'How did the news ___ the rest of the class?',
    options: ['affect', 'effect'],
    answer: 'affect',
    tip: '"Affect" = to influence (a verb / an action).',
  },
  {
    sentence: 'Revising every night had a great ___ on her grades.',
    options: ['affect', 'effect'],
    answer: 'effect',
    tip: '"An effect" — you can put "an" before it (a thing).',
  },
  // practice / practise
  {
    sentence: 'Football ___ is on Thursday after school.',
    options: ['practice', 'practise'],
    answer: 'practice',
    tip: 'In UK English the noun is "practice" (with a c).',
  },
  {
    sentence: 'You should ___ the piano every day.',
    options: ['practice', 'practise'],
    answer: 'practise',
    tip: 'In UK English the verb is "practise" (with an s).',
  },
  {
    sentence: 'It takes a lot of ___ to learn a new language.',
    options: ['practice', 'practise'],
    answer: 'practice',
    tip: 'Here it is a noun (a thing), so use "practice".',
  },
  {
    sentence: 'We need to ___ our lines before the school play.',
    options: ['practice', 'practise'],
    answer: 'practise',
    tip: 'Here it is a verb (an action), so use "practise".',
  },
  // then / than
  {
    sentence: 'Finish your work, ___ you may go to break.',
    options: ['then', 'than'],
    answer: 'then',
    tip: '"Then" is about time or order (next).',
  },
  {
    sentence: 'Maths is harder ___ I expected.',
    options: ['then', 'than'],
    answer: 'than',
    tip: '"Than" is used to compare two things.',
  },
  {
    sentence: 'She is taller ___ her older brother.',
    options: ['then', 'than'],
    answer: 'than',
    tip: '"Than" appears in comparisons (taller than).',
  },
  {
    sentence: 'We had lunch and ___ went back to class.',
    options: ['then', 'than'],
    answer: 'then',
    tip: '"Then" tells you what happened next.',
  },
  // of / off
  {
    sentence: 'Please switch ___ the lights when you leave.',
    options: ['of', 'off'],
    answer: 'off',
    tip: '"Off" is the opposite of "on".',
  },
  {
    sentence: 'She read the first chapter ___ the novel.',
    options: ['of', 'off'],
    answer: 'of',
    tip: '"Of" links two things (a part of something).',
  },
  {
    sentence: 'Take your muddy boots ___ before you come in.',
    options: ['of', 'off'],
    answer: 'off',
    tip: '"Off" means to remove or move away from.',
  },
  {
    sentence: 'A glass ___ water is on the table.',
    options: ['of', 'off'],
    answer: 'of',
    tip: '"Of" shows what something contains.',
  },
  // lose / loose
  {
    sentence: 'Be careful not to ___ your bus pass.',
    options: ['lose', 'loose'],
    answer: 'lose',
    tip: '"Lose" (one o) means to no longer have something.',
  },
  {
    sentence: 'This screw is too ___ and needs tightening.',
    options: ['lose', 'loose'],
    answer: 'loose',
    tip: '"Loose" (two o\'s) means not tight or not fixed.',
  },
  {
    sentence: 'If we ___ this match, we are out of the cup.',
    options: ['lose', 'loose'],
    answer: 'lose',
    tip: '"Lose" is the opposite of "win".',
  },
  {
    sentence: 'The dog got out through a ___ fence panel.',
    options: ['lose', 'loose'],
    answer: 'loose',
    tip: '"Loose" describes something not held firmly.',
  },
  // brake / break
  {
    sentence: 'The cyclist hit the ___ to stop quickly.',
    options: ['brake', 'break'],
    answer: 'brake',
    tip: '"Brake" is the part that stops a vehicle.',
  },
  {
    sentence: 'We get a short ___ between lessons.',
    options: ['brake', 'break'],
    answer: 'break',
    tip: '"Break" means a rest or pause (or to snap).',
  },
  {
    sentence: 'Try not to ___ the ruler when you bend it.',
    options: ['brake', 'break'],
    answer: 'break',
    tip: '"Break" means to snap or damage something.',
  },
  {
    sentence: 'The car would not slow down because the ___ failed.',
    options: ['brake', 'break'],
    answer: 'brake',
    tip: '"Brake" is connected to stopping a vehicle.',
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

function renderSentence(sentence: string, filled: string | null): React.ReactNode {
  const parts = sentence.split('___')
  return (
    <>
      {parts[0]}
      <span
        className={cn(
          'mx-1 inline-block min-w-[3.5rem] rounded-md border-b-2 px-2 text-center font-bold',
          filled
            ? 'border-primary text-primary'
            : 'border-dashed border-muted-foreground text-muted-foreground',
        )}
      >
        {filled ?? '?'}
      </span>
      {parts[1]}
    </>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function HomophoneHeroPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<HomophoneItem[]>([])
  const [optionOrder, setOptionOrder] = useState<string[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const current = items[idx] ?? null

  // Reshuffle option order each time the item changes
  useEffect(() => {
    if (current) setOptionOrder(shuffle(current.options))
  }, [idx, items])

  const handleStart = useCallback(() => {
    const round = shuffle(HOMOPHONE_BANK).slice(0, ROUND_SIZE)
    setItems(round)
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
      const isCorrect = option === current.answer
      setSelected(option)
      setFeedback(isCorrect ? 'correct' : 'wrong')
      setTotalAnswered((t) => t + 1)
      if (isCorrect) setScore((s) => s + 1)

      setTimeout(() => {
        if (idx + 1 >= items.length) {
          setGameState('finished')
        } else {
          setIdx((i) => i + 1)
          setSelected(null)
          setFeedback(null)
        }
      }, 2200)
    },
    [current, feedback, idx, items.length],
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
          gameId="homophone-hero"
          title="Homophone Hero"
          description="Read each sentence and choose the homophone that fits the gap. Watch the tips to become a homophone hero!"
          difficulty="Crossover"
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
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-lg leading-relaxed text-foreground">
                  {renderSentence(current.sentence, feedback ? selected : null)}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {optionOrder.map((option) => {
                  const isAnswer = option === current.answer
                  const isPicked = option === selected
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-base font-semibold transition-all outline-none',
                        'focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
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
                          'border-border bg-card text-muted-foreground opacity-60',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + tip */}
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
                        <CheckCircle className="size-4" /> Brilliant — that&apos;s the one!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer was{' '}
                        <span className="font-bold">{current.answer}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                    <Lightbulb className="size-4 shrink-0 text-primary mt-0.5" />
                    <span>{current.tip}</span>
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
