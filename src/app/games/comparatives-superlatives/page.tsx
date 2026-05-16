'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Form = 'comparative' | 'superlative'

interface CompItem {
  sentence: string // contains ___ for the gap
  adjective: string
  answer: string
  form: Form
  rule: string
}

const BANK: CompItem[] = [
  // ── One-syllable: add -er / -est ──
  {
    sentence: 'My new phone is ___ than my old one.',
    adjective: 'small',
    answer: 'smaller',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'This is the ___ box in the whole shop.',
    adjective: 'small',
    answer: 'smallest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'An elephant is ___ than a dog.',
    adjective: 'tall',
    answer: 'taller',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'Ben is the ___ player in the team.',
    adjective: 'tall',
    answer: 'tallest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'A lorry is ___ than a bicycle.',
    adjective: 'slow',
    answer: 'slower',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'This is the ___ lift in the building.',
    adjective: 'slow',
    answer: 'slowest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'My bag is ___ than yours today.',
    adjective: 'light',
    answer: 'lighter',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'A feather is the ___ thing in the bag.',
    adjective: 'light',
    answer: 'lightest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'Winter is ___ than summer here.',
    adjective: 'cold',
    answer: 'colder',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'January is the ___ month of the year.',
    adjective: 'cold',
    answer: 'coldest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'This road is ___ than that one.',
    adjective: 'long',
    answer: 'longer',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'The Nile is one of the ___ rivers on Earth.',
    adjective: 'long',
    answer: 'longest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'A jumper is ___ than a T-shirt in winter.',
    adjective: 'warm',
    answer: 'warmer',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'This is the ___ coat in the shop.',
    adjective: 'warm',
    answer: 'warmest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'Maths feels ___ than English to me.',
    adjective: 'hard',
    answer: 'harder',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'That was the ___ test of the term.',
    adjective: 'hard',
    answer: 'hardest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'Trains are usually ___ than buses.',
    adjective: 'fast',
    answer: 'faster',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },
  {
    sentence: 'A cheetah is the ___ land animal.',
    adjective: 'fast',
    answer: 'fastest',
    form: 'superlative',
    rule: 'Short adjective: add -est.',
  },
  {
    sentence: 'Today is ___ than yesterday.',
    adjective: 'cool',
    answer: 'cooler',
    form: 'comparative',
    rule: 'Short adjective: add -er.',
  },

  // ── One-syllable ending consonant-vowel-consonant: double the consonant ──
  {
    sentence: 'An elephant is ___ than a mouse.',
    adjective: 'big',
    answer: 'bigger',
    form: 'comparative',
    rule: 'One short vowel + consonant: double the last letter, add -er.',
  },
  {
    sentence: 'A whale is the ___ animal in the ocean.',
    adjective: 'big',
    answer: 'biggest',
    form: 'superlative',
    rule: 'One short vowel + consonant: double the last letter, add -est.',
  },
  {
    sentence: 'A summer day is ___ than a winter day.',
    adjective: 'hot',
    answer: 'hotter',
    form: 'comparative',
    rule: 'One short vowel + consonant: double the last letter, add -er.',
  },
  {
    sentence: 'July is the ___ month here.',
    adjective: 'hot',
    answer: 'hottest',
    form: 'superlative',
    rule: 'One short vowel + consonant: double the last letter, add -est.',
  },
  {
    sentence: 'This pillow is ___ than that one.',
    adjective: 'thin',
    answer: 'thinner',
    form: 'comparative',
    rule: 'One short vowel + consonant: double the last letter, add -er.',
  },
  {
    sentence: 'My grandfather is the ___ runner I know.',
    adjective: 'fit',
    answer: 'fittest',
    form: 'superlative',
    rule: 'One short vowel + consonant: double the last letter, add -est.',
  },
  {
    sentence: 'My garden is ___ than the park.',
    adjective: 'wet',
    answer: 'wetter',
    form: 'comparative',
    rule: 'One short vowel + consonant: double the last letter, add -er.',
  },
  {
    sentence: 'That was the ___ joke of the night.',
    adjective: 'sad',
    answer: 'saddest',
    form: 'superlative',
    rule: 'One short vowel + consonant: double the last letter, add -est.',
  },

  // ── Ending in -e: add -r / -st ──
  {
    sentence: 'A lion is ___ than a kitten.',
    adjective: 'large',
    answer: 'larger',
    form: 'comparative',
    rule: 'Adjective ending in -e: just add -r.',
  },
  {
    sentence: 'This is the ___ room in the house.',
    adjective: 'large',
    answer: 'largest',
    form: 'superlative',
    rule: 'Adjective ending in -e: just add -st.',
  },
  {
    sentence: 'My route to school is ___ than yours.',
    adjective: 'safe',
    answer: 'safer',
    form: 'comparative',
    rule: 'Adjective ending in -e: just add -r.',
  },
  {
    sentence: 'This is the ___ seat on the bus.',
    adjective: 'safe',
    answer: 'safest',
    form: 'superlative',
    rule: 'Adjective ending in -e: just add -st.',
  },
  {
    sentence: 'Spring days are ___ than winter days.',
    adjective: 'nice',
    answer: 'nicer',
    form: 'comparative',
    rule: 'Adjective ending in -e: just add -r.',
  },
  {
    sentence: 'That was the ___ meal of the holiday.',
    adjective: 'nice',
    answer: 'nicest',
    form: 'superlative',
    rule: 'Adjective ending in -e: just add -st.',
  },
  {
    sentence: 'Her bedroom is ___ than mine.',
    adjective: 'wide',
    answer: 'wider',
    form: 'comparative',
    rule: 'Adjective ending in -e: just add -r.',
  },

  // ── Two-syllable ending in -y: change y to i, add -er / -est ──
  {
    sentence: 'I feel ___ today than yesterday.',
    adjective: 'happy',
    answer: 'happier',
    form: 'comparative',
    rule: 'Adjective ending in -y: change y to i, add -er.',
  },
  {
    sentence: 'This is the ___ day of my life!',
    adjective: 'happy',
    answer: 'happiest',
    form: 'superlative',
    rule: 'Adjective ending in -y: change y to i, add -est.',
  },
  {
    sentence: 'My bedroom is ___ than the kitchen.',
    adjective: 'tidy',
    answer: 'tidier',
    form: 'comparative',
    rule: 'Adjective ending in -y: change y to i, add -er.',
  },
  {
    sentence: 'She is the ___ student in our class.',
    adjective: 'busy',
    answer: 'busiest',
    form: 'superlative',
    rule: 'Adjective ending in -y: change y to i, add -est.',
  },
  {
    sentence: 'This puzzle is ___ than the last one.',
    adjective: 'easy',
    answer: 'easier',
    form: 'comparative',
    rule: 'Adjective ending in -y: change y to i, add -er.',
  },
  {
    sentence: 'That is the ___ question on the paper.',
    adjective: 'easy',
    answer: 'easiest',
    form: 'superlative',
    rule: 'Adjective ending in -y: change y to i, add -est.',
  },
  {
    sentence: 'My dog is ___ than the cat.',
    adjective: 'noisy',
    answer: 'noisier',
    form: 'comparative',
    rule: 'Adjective ending in -y: change y to i, add -er.',
  },
  {
    sentence: 'It was the ___ road in the whole town.',
    adjective: 'dirty',
    answer: 'dirtiest',
    form: 'superlative',
    rule: 'Adjective ending in -y: change y to i, add -est.',
  },
  {
    sentence: 'The film was ___ than the book.',
    adjective: 'funny',
    answer: 'funnier',
    form: 'comparative',
    rule: 'Adjective ending in -y: change y to i, add -er.',
  },
  {
    sentence: 'He told the ___ story at the party.',
    adjective: 'funny',
    answer: 'funniest',
    form: 'superlative',
    rule: 'Adjective ending in -y: change y to i, add -est.',
  },
  {
    sentence: 'Today is ___ than yesterday.',
    adjective: 'sunny',
    answer: 'sunnier',
    form: 'comparative',
    rule: 'Adjective ending in -y: change y to i, add -er.',
  },

  // ── Long adjectives: more / most ──
  {
    sentence: 'A diamond ring is ___ than a silver one.',
    adjective: 'expensive',
    answer: 'more expensive',
    form: 'comparative',
    rule: 'Long adjective: use "more" before it.',
  },
  {
    sentence: 'This is the ___ phone in the shop.',
    adjective: 'expensive',
    answer: 'most expensive',
    form: 'superlative',
    rule: 'Long adjective: use "most" before it.',
  },
  {
    sentence: 'A plane journey is ___ than a car journey.',
    adjective: 'comfortable',
    answer: 'more comfortable',
    form: 'comparative',
    rule: 'Long adjective: use "more" before it.',
  },
  {
    sentence: 'This is the ___ chair in the room.',
    adjective: 'comfortable',
    answer: 'most comfortable',
    form: 'superlative',
    rule: 'Long adjective: use "most" before it.',
  },
  {
    sentence: 'Science is ___ than history for me.',
    adjective: 'interesting',
    answer: 'more interesting',
    form: 'comparative',
    rule: 'Long adjective: use "more" before it.',
  },
  {
    sentence: 'That was the ___ lesson all week.',
    adjective: 'interesting',
    answer: 'most interesting',
    form: 'superlative',
    rule: 'Long adjective: use "most" before it.',
  },
  {
    sentence: 'Walking at night is ___ than in the day.',
    adjective: 'dangerous',
    answer: 'more dangerous',
    form: 'comparative',
    rule: 'Long adjective: use "more" before it.',
  },
  {
    sentence: 'That is the ___ road in the city.',
    adjective: 'dangerous',
    answer: 'most dangerous',
    form: 'superlative',
    rule: 'Long adjective: use "most" before it.',
  },
  {
    sentence: 'This task is ___ than the first one.',
    adjective: 'difficult',
    answer: 'more difficult',
    form: 'comparative',
    rule: 'Long adjective: use "more" before it.',
  },
  {
    sentence: 'It was the ___ exam of the year.',
    adjective: 'difficult',
    answer: 'most difficult',
    form: 'superlative',
    rule: 'Long adjective: use "most" before it.',
  },
  {
    sentence: 'Her new car is ___ than her old one.',
    adjective: 'beautiful',
    answer: 'more beautiful',
    form: 'comparative',
    rule: 'Long adjective: use "more" before it.',
  },
  {
    sentence: 'It was the ___ sunset I had ever seen.',
    adjective: 'beautiful',
    answer: 'most beautiful',
    form: 'superlative',
    rule: 'Long adjective: use "most" before it.',
  },
  {
    sentence: 'A library is ___ than a playground.',
    adjective: 'peaceful',
    answer: 'more peaceful',
    form: 'comparative',
    rule: 'Long adjective: use "more" before it.',
  },

  // ── Irregular adjectives ──
  {
    sentence: 'This restaurant is ___ than that one.',
    adjective: 'good',
    answer: 'better',
    form: 'comparative',
    rule: 'Irregular: good → better → best.',
  },
  {
    sentence: 'She is the ___ singer in the school.',
    adjective: 'good',
    answer: 'best',
    form: 'superlative',
    rule: 'Irregular: good → better → best.',
  },
  {
    sentence: 'My result was ___ than I expected.',
    adjective: 'bad',
    answer: 'worse',
    form: 'comparative',
    rule: 'Irregular: bad → worse → worst.',
  },
  {
    sentence: 'That was the ___ film of the year.',
    adjective: 'bad',
    answer: 'worst',
    form: 'superlative',
    rule: 'Irregular: bad → worse → worst.',
  },
  {
    sentence: 'Please could you give me a ___ piece of cake?',
    adjective: 'far',
    answer: 'further',
    form: 'comparative',
    rule: 'Irregular: far → further → furthest.',
  },
  {
    sentence: 'That shop is the ___ one from here.',
    adjective: 'far',
    answer: 'furthest',
    form: 'superlative',
    rule: 'Irregular: far → further → furthest.',
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

// Build a 4-option MCQ for an item using plausible distractors.
function buildOptions(item: CompItem): string[] {
  const { adjective, answer, form } = item
  const distractors = new Set<string>()
  const base = adjective

  // The "other" form of the same adjective is a strong distractor.
  const otherForms: Record<string, string> = {
    smaller: 'smallest',
    smallest: 'smaller',
    taller: 'tallest',
    tallest: 'taller',
    slower: 'slowest',
    slowest: 'slower',
    lighter: 'lightest',
    lightest: 'lighter',
    colder: 'coldest',
    coldest: 'colder',
    longer: 'longest',
    longest: 'longer',
    warmer: 'warmest',
    warmest: 'warmer',
    harder: 'hardest',
    hardest: 'harder',
    faster: 'fastest',
    fastest: 'faster',
    cooler: 'coolest',
    bigger: 'biggest',
    biggest: 'bigger',
    hotter: 'hottest',
    hottest: 'hotter',
    thinner: 'thinnest',
    fittest: 'fitter',
    wetter: 'wettest',
    saddest: 'sadder',
    larger: 'largest',
    largest: 'larger',
    safer: 'safest',
    safest: 'safer',
    nicer: 'nicest',
    nicest: 'nicer',
    wider: 'widest',
    happier: 'happiest',
    happiest: 'happier',
    tidier: 'tidiest',
    busiest: 'busier',
    easier: 'easiest',
    easiest: 'easier',
    noisier: 'noisiest',
    dirtiest: 'dirtier',
    funnier: 'funniest',
    funniest: 'funnier',
    sunnier: 'sunniest',
    'more expensive': 'most expensive',
    'most expensive': 'more expensive',
    'more comfortable': 'most comfortable',
    'most comfortable': 'more comfortable',
    'more interesting': 'most interesting',
    'most interesting': 'more interesting',
    'more dangerous': 'most dangerous',
    'most dangerous': 'more dangerous',
    'more difficult': 'most difficult',
    'most difficult': 'more difficult',
    'more beautiful': 'most beautiful',
    'most beautiful': 'more beautiful',
    'more peaceful': 'most peaceful',
    better: 'best',
    best: 'better',
    worse: 'worst',
    worst: 'worse',
    further: 'furthest',
    furthest: 'further',
  }
  if (otherForms[answer]) distractors.add(otherForms[answer])

  if (answer.includes(' ')) {
    // Long adjective — common learner errors.
    distractors.add(form === 'comparative' ? `${base}er` : `${base}est`)
    distractors.add(form === 'comparative' ? `more ${base}er` : `most ${base}est`)
  } else if (answer === 'better' || answer === 'best') {
    distractors.add('gooder').add('goodest').add('more good')
  } else if (answer === 'worse' || answer === 'worst') {
    distractors.add('badder').add('baddest').add('more bad')
  } else if (answer === 'further' || answer === 'furthest') {
    distractors.add('farer').add('farest').add('more far')
  } else {
    // Regular short adjective — over-applied "more/most" and raw form.
    distractors.add(form === 'comparative' ? `more ${base}` : `most ${base}`)
    distractors.add(base)
    distractors.add(form === 'comparative' ? `${base}est` : `${base}er`)
  }

  distractors.delete(answer)
  const picked = shuffle([...distractors]).slice(0, 3)
  return shuffle([answer, ...picked])
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ComparativesSuperlativesPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<CompItem[]>([])
  const [options, setOptions] = useState<string[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const current = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const round = shuffle(BANK).slice(0, ROUND_SIZE)
    setQuestions(round)
    setOptions(round.length > 0 ? buildOptions(round[0]) : [])
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
    (choice: string) => {
      if (!current || feedback) return
      const isCorrect = choice === current.answer
      setSelected(choice)
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
          const next = qIdx + 1
          setQIdx(next)
          setOptions(buildOptions(questions[next]))
          setSelected(null)
          setFeedback(null)
        }
      }, 2200)
    },
    [current, feedback, qIdx, questions],
  )

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  const renderSentence = (item: CompItem) => {
    const parts = item.sentence.split('___')
    return (
      <p className="text-lg leading-relaxed text-foreground">
        {parts[0]}
        <span className="mx-1 inline-block min-w-[3rem] border-b-2 border-dashed border-primary/50 text-center font-bold text-primary">
          {feedback ? current?.answer : '?'}
        </span>
        {parts[1]}
      </p>
    )
  }

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
          gameId="comparatives-superlatives"
          title="Bigger, Biggest!"
          description="Read the sentence and choose the correct comparative or superlative form of the adjective."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                {renderSentence(current)}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-semibold text-primary">
                    {current.adjective}
                  </span>
                  <span className="rounded-full border border-border bg-accent px-3 py-1 text-muted-foreground">
                    Make the {current.form}
                  </span>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {options.map((opt) => {
                  const isAnswer = opt === current.answer
                  const isPicked = opt === selected
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
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
                        feedback && !isAnswer && !isPicked && 'border-border bg-card opacity-50',
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
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
                        <CheckCircle className="size-4" /> Brilliant! That&apos;s right.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite — the answer is{' '}
                        <span className="font-bold">{current.answer}</span>.
                      </>
                    )}
                  </div>
                  <div className="flex items-start justify-center gap-2 rounded-lg border border-border bg-accent px-4 py-3 text-sm text-muted-foreground">
                    <Lightbulb className="size-4 mt-0.5 shrink-0 text-primary" />
                    <span>{current.rule}</span>
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
