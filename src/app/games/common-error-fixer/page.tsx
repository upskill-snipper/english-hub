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

type ErrorType =
  | 'Articles'
  | 'Verb "to be"'
  | 'Subject-verb agreement'
  | 'Prepositions'
  | 'Double negative'
  | 'Word order'
  | 'He / she'
  | 'Plural "s"'

interface ErrorItem {
  wrong: string
  options: [string, string, string, string]
  answerIndex: number
  errorType: ErrorType
  explanation: string
}

// Original bank - 50+ typical EAL errors (A2-B2), with extra care for
// patterns common among Arabic-L1 learners (articles, the verb "to be",
// he/she gender agreement, plural "s", word order).
const ERROR_BANK: ErrorItem[] = [
  // ── Articles ──────────────────────────────────────────────────────────────
  {
    wrong: 'I am student at this college.',
    options: [
      'I am a student at this college.',
      'I am an student at this college.',
      'I am the student at this college.',
      'I am student at this college.',
    ],
    answerIndex: 0,
    errorType: 'Articles',
    explanation: 'Use "a" before a singular job or role: "a student".',
  },
  {
    wrong: 'She is best teacher in the school.',
    options: [
      'She is a best teacher in the school.',
      'She is best teacher in the school.',
      'She is the best teacher in the school.',
      'She is an best teacher in the school.',
    ],
    answerIndex: 2,
    errorType: 'Articles',
    explanation: 'Superlatives ("best") take "the": "the best teacher".',
  },
  {
    wrong: 'He bought a umbrella yesterday.',
    options: [
      'He bought an umbrella yesterday.',
      'He bought a umbrella yesterday.',
      'He bought the umbrella yesterday.',
      'He bought umbrella yesterday.',
    ],
    answerIndex: 0,
    errorType: 'Articles',
    explanation: 'Use "an" before a vowel sound: "an umbrella".',
  },
  {
    wrong: 'I go to the work by bus every day.',
    options: [
      'I go to a work by bus every day.',
      'I go to work by bus every day.',
      'I go to the work by bus every day.',
      'I go to an work by bus every day.',
    ],
    answerIndex: 1,
    errorType: 'Articles',
    explanation: 'We say "go to work" with no article.',
  },
  {
    wrong: 'The honesty is very important.',
    options: [
      'A honesty is very important.',
      'An honesty is very important.',
      'The honesty is very important.',
      'Honesty is very important.',
    ],
    answerIndex: 3,
    errorType: 'Articles',
    explanation: 'Uncountable ideas like "honesty" usually take no article.',
  },
  {
    wrong: 'I have a information for you.',
    options: [
      'I have an information for you.',
      'I have some information for you.',
      'I have the informations for you.',
      'I have a information for you.',
    ],
    answerIndex: 1,
    errorType: 'Articles',
    explanation: '"Information" is uncountable: use "some information".',
  },
  {
    wrong: 'She plays the football on Sundays.',
    options: [
      'She plays a football on Sundays.',
      'She plays football on Sundays.',
      'She plays the football on Sundays.',
      'She plays an football on Sundays.',
    ],
    answerIndex: 1,
    errorType: 'Articles',
    explanation: 'No article before sports: "play football".',
  },
  {
    wrong: 'He is engineer from Egypt.',
    options: [
      'He is an engineer from Egypt.',
      'He is a engineer from Egypt.',
      'He is the engineer from Egypt.',
      'He is engineer from Egypt.',
    ],
    answerIndex: 0,
    errorType: 'Articles',
    explanation: '"Engineer" starts with a vowel sound, so use "an".',
  },

  // ── Verb "to be" ─────────────────────────────────────────────────────────
  {
    wrong: 'She very tired today.',
    options: [
      'She very tired today.',
      'She is very tired today.',
      'She are very tired today.',
      'She be very tired today.',
    ],
    answerIndex: 1,
    errorType: 'Verb "to be"',
    explanation: 'A sentence needs the verb "to be": "She is very tired".',
  },
  {
    wrong: 'They happy with the result.',
    options: [
      'They is happy with the result.',
      'They happy with the result.',
      'They are happy with the result.',
      'They be happy with the result.',
    ],
    answerIndex: 2,
    errorType: 'Verb "to be"',
    explanation: 'With "they" the verb "to be" is "are".',
  },
  {
    wrong: 'I a teacher at this school.',
    options: [
      'I a teacher at this school.',
      'I are a teacher at this school.',
      'I be a teacher at this school.',
      'I am a teacher at this school.',
    ],
    answerIndex: 3,
    errorType: 'Verb "to be"',
    explanation: 'With "I" the verb "to be" is "am".',
  },
  {
    wrong: 'The weather very hot in summer.',
    options: [
      'The weather is very hot in summer.',
      'The weather very hot in summer.',
      'The weather are very hot in summer.',
      'The weather be very hot in summer.',
    ],
    answerIndex: 0,
    errorType: 'Verb "to be"',
    explanation: '"Weather" is singular, so use "is".',
  },
  {
    wrong: 'He not ready for the exam.',
    options: [
      'He not ready for the exam.',
      'He is not ready for the exam.',
      'He are not ready for the exam.',
      'He no ready for the exam.',
    ],
    answerIndex: 1,
    errorType: 'Verb "to be"',
    explanation: 'Negatives still need "to be": "He is not ready".',
  },
  {
    wrong: 'My parents at home now.',
    options: [
      'My parents is at home now.',
      'My parents at home now.',
      'My parents are at home now.',
      'My parents be at home now.',
    ],
    answerIndex: 2,
    errorType: 'Verb "to be"',
    explanation: '"Parents" is plural, so use "are".',
  },

  // ── Subject-verb agreement ───────────────────────────────────────────────
  {
    wrong: 'He go to the gym every morning.',
    options: [
      'He go to the gym every morning.',
      'He goes to the gym every morning.',
      'He going to the gym every morning.',
      'He gone to the gym every morning.',
    ],
    answerIndex: 1,
    errorType: 'Subject-verb agreement',
    explanation: 'With "he/she/it" add -s: "He goes".',
  },
  {
    wrong: 'My sister live in London.',
    options: [
      'My sister live in London.',
      'My sister living in London.',
      'My sister lives in London.',
      'My sister lived in London now.',
    ],
    answerIndex: 2,
    errorType: 'Subject-verb agreement',
    explanation: 'A singular subject takes the -s form: "lives".',
  },
  {
    wrong: 'The students works very hard.',
    options: [
      'The students work very hard.',
      'The students works very hard.',
      'The students working very hard.',
      'The student work very hard.',
    ],
    answerIndex: 0,
    errorType: 'Subject-verb agreement',
    explanation: 'A plural subject ("students") takes "work", not "works".',
  },
  {
    wrong: 'She have two brothers.',
    options: [
      'She have two brothers.',
      'She has two brothers.',
      'She having two brothers.',
      'She haves two brothers.',
    ],
    answerIndex: 1,
    errorType: 'Subject-verb agreement',
    explanation: 'With "she" the verb "have" becomes "has".',
  },
  {
    wrong: 'It cost ten pounds.',
    options: [
      'It cost ten pounds.',
      'It costing ten pounds.',
      'It costs ten pounds.',
      'It are cost ten pounds.',
    ],
    answerIndex: 2,
    errorType: 'Subject-verb agreement',
    explanation: 'With "it" in the present, add -s: "It costs".',
  },
  {
    wrong: 'My friend do not like coffee.',
    options: [
      'My friend do not like coffee.',
      'My friend does not like coffee.',
      'My friend not like coffee.',
      'My friend doing not like coffee.',
    ],
    answerIndex: 1,
    errorType: 'Subject-verb agreement',
    explanation: 'With a singular subject use "does not".',
  },
  {
    wrong: 'Everyone in the class want to pass.',
    options: [
      'Everyone in the class want to pass.',
      'Everyone in the class wanting to pass.',
      'Everyone in the class wants to pass.',
      'Everyone in the class are want to pass.',
    ],
    answerIndex: 2,
    errorType: 'Subject-verb agreement',
    explanation: '"Everyone" is singular, so use "wants".',
  },

  // ── Prepositions ─────────────────────────────────────────────────────────
  {
    wrong: 'I will see you in Monday.',
    options: [
      'I will see you at Monday.',
      'I will see you in Monday.',
      'I will see you on Monday.',
      'I will see you to Monday.',
    ],
    answerIndex: 2,
    errorType: 'Prepositions',
    explanation: 'Use "on" with days: "on Monday".',
  },
  {
    wrong: 'She is good in mathematics.',
    options: [
      'She is good at mathematics.',
      'She is good in mathematics.',
      'She is good on mathematics.',
      'She is good to mathematics.',
    ],
    answerIndex: 0,
    errorType: 'Prepositions',
    explanation: 'We are "good at" a subject or skill.',
  },
  {
    wrong: 'He arrived to the airport late.',
    options: [
      'He arrived to the airport late.',
      'He arrived at the airport late.',
      'He arrived on the airport late.',
      'He arrived in the airport late.',
    ],
    answerIndex: 1,
    errorType: 'Prepositions',
    explanation: 'We "arrive at" a place (a point), not "arrive to".',
  },
  {
    wrong: 'I am interested on this job.',
    options: [
      'I am interested on this job.',
      'I am interested at this job.',
      'I am interested to this job.',
      'I am interested in this job.',
    ],
    answerIndex: 3,
    errorType: 'Prepositions',
    explanation: 'The fixed phrase is "interested in".',
  },
  {
    wrong: 'We arrived in 9 o’clock.',
    options: [
      'We arrived at 9 o’clock.',
      'We arrived in 9 o’clock.',
      'We arrived on 9 o’clock.',
      'We arrived by 9 o’clock late.',
    ],
    answerIndex: 0,
    errorType: 'Prepositions',
    explanation: 'Use "at" with clock times: "at 9 o’clock".',
  },
  {
    wrong: 'She depends of her parents.',
    options: [
      'She depends of her parents.',
      'She depends on her parents.',
      'She depends at her parents.',
      'She depends to her parents.',
    ],
    answerIndex: 1,
    errorType: 'Prepositions',
    explanation: 'The verb pattern is "depend on".',
  },
  {
    wrong: 'I was born in 15 May.',
    options: [
      'I was born in 15 May.',
      'I was born at 15 May.',
      'I was born on 15 May.',
      'I was born to 15 May.',
    ],
    answerIndex: 2,
    errorType: 'Prepositions',
    explanation: 'Use "on" with a specific date: "on 15 May".',
  },
  {
    wrong: 'He listened the music all night.',
    options: [
      'He listened the music all night.',
      'He listened at the music all night.',
      'He listened on the music all night.',
      'He listened to the music all night.',
    ],
    answerIndex: 3,
    errorType: 'Prepositions',
    explanation: 'We "listen to" something.',
  },

  // ── Double negative ──────────────────────────────────────────────────────
  {
    wrong: 'I don’t know nothing about it.',
    options: [
      'I don’t know nothing about it.',
      'I don’t know anything about it.',
      'I do know nothing not about it.',
      'I not know nothing about it.',
    ],
    answerIndex: 1,
    errorType: 'Double negative',
    explanation: 'Use one negative: "don’t know anything".',
  },
  {
    wrong: 'She didn’t see nobody at the party.',
    options: [
      'She didn’t see nobody at the party.',
      'She didn’t saw anybody at the party.',
      'She didn’t see anybody at the party.',
      'She not see nobody at the party.',
    ],
    answerIndex: 2,
    errorType: 'Double negative',
    explanation: 'After "didn’t" use "anybody", not "nobody".',
  },
  {
    wrong: 'We don’t have no homework today.',
    options: [
      'We don’t have any homework today.',
      'We don’t have no homework today.',
      'We not have no homework today.',
      'We don’t have none homework today.',
    ],
    answerIndex: 0,
    errorType: 'Double negative',
    explanation: 'Use "don’t have any", not "don’t have no".',
  },
  {
    wrong: 'He can’t find his keys nowhere.',
    options: [
      'He can’t find his keys nowhere.',
      'He can’t find his keys anywhere.',
      'He can find his keys nowhere not.',
      'He not can find his keys nowhere.',
    ],
    answerIndex: 1,
    errorType: 'Double negative',
    explanation: 'After "can’t" use "anywhere", not "nowhere".',
  },
  {
    wrong: 'They never go nowhere on holiday.',
    options: [
      'They never go nowhere on holiday.',
      'They not never go anywhere on holiday.',
      'They never go anywhere on holiday.',
      'They never don’t go nowhere on holiday.',
    ],
    answerIndex: 2,
    errorType: 'Double negative',
    explanation: '"Never" is already negative, so use "anywhere".',
  },

  // ── Word order ───────────────────────────────────────────────────────────
  {
    wrong: 'I have a car red.',
    options: ['I have a car red.', 'I have a red car.', 'I have red a car.', 'I have car a red.'],
    answerIndex: 1,
    errorType: 'Word order',
    explanation: 'In English, adjectives go before the noun: "a red car".',
  },
  {
    wrong: 'She speaks very well English.',
    options: [
      'She speaks very well English.',
      'She speaks English very well.',
      'She very well speaks English.',
      'She speaks well very English.',
    ],
    answerIndex: 1,
    errorType: 'Word order',
    explanation: 'Manner adverbs follow the object: "speaks English very well".',
  },
  {
    wrong: 'Where you are going now?',
    options: [
      'Where you are going now?',
      'Where going you are now?',
      'Where are you going now?',
      'You are going where now?',
    ],
    answerIndex: 2,
    errorType: 'Word order',
    explanation: 'In questions the verb comes before the subject: "are you".',
  },
  {
    wrong: 'I like very much this book.',
    options: [
      'I like very much this book.',
      'I very much like this book.',
      'I like this book very much.',
      'This book I like very much.',
    ],
    answerIndex: 2,
    errorType: 'Word order',
    explanation: '"Very much" goes at the end: "I like this book very much".',
  },
  {
    wrong: 'Always she is late for class.',
    options: [
      'Always she is late for class.',
      'She is always late for class.',
      'She always is late for class.',
      'She is late always for class.',
    ],
    answerIndex: 1,
    errorType: 'Word order',
    explanation: 'Adverbs of frequency go after "to be": "She is always late".',
  },
  {
    wrong: 'Do you know where is the station?',
    options: [
      'Do you know where is the station?',
      'Do you know where the station is?',
      'Do you know where the station?',
      'Do you know is where the station?',
    ],
    answerIndex: 1,
    errorType: 'Word order',
    explanation: 'In an indirect question, use normal order: "where the station is".',
  },

  // ── He / she ─────────────────────────────────────────────────────────────
  {
    wrong: 'My mother is a doctor. He works in a hospital.',
    options: [
      'My mother is a doctor. He works in a hospital.',
      'My mother is a doctor. She works in a hospital.',
      'My mother is a doctor. It works in a hospital.',
      'My mother is a doctor. They works in a hospital.',
    ],
    answerIndex: 1,
    errorType: 'He / she',
    explanation: '"Mother" is female, so use "she".',
  },
  {
    wrong: 'My brother is kind. She helps everyone.',
    options: [
      'My brother is kind. She helps everyone.',
      'My brother is kind. It helps everyone.',
      'My brother is kind. He helps everyone.',
      'My brother is kind. They helps everyone.',
    ],
    answerIndex: 2,
    errorType: 'He / she',
    explanation: '"Brother" is male, so use "he".',
  },
  {
    wrong: 'This is my friend Sara. He is from Jordan.',
    options: [
      'This is my friend Sara. He is from Jordan.',
      'This is my friend Sara. It is from Jordan.',
      'This is my friend Sara. They is from Jordan.',
      'This is my friend Sara. She is from Jordan.',
    ],
    answerIndex: 3,
    errorType: 'He / she',
    explanation: 'Sara is female, so use "she".',
  },
  {
    wrong: 'I have a son. She is six years old.',
    options: [
      'I have a son. She is six years old.',
      'I have a son. He is six years old.',
      'I have a son. It is six years old.',
      'I have a son. They is six years old.',
    ],
    answerIndex: 1,
    errorType: 'He / she',
    explanation: 'A "son" is male, so use "he".',
  },
  {
    wrong: 'The teacher gave us homework. She told us his name.',
    options: [
      'The teacher gave us homework. She told us his name.',
      'The teacher gave us homework. She told us her name.',
      'The teacher gave us homework. He told us her name.',
      'The teacher gave us homework. It told us her name.',
    ],
    answerIndex: 1,
    errorType: 'He / she',
    explanation: 'If the teacher is "she", the possessive must be "her name".',
  },

  // ── Plural "s" ───────────────────────────────────────────────────────────
  {
    wrong: 'I have three brother.',
    options: [
      'I have three brother.',
      'I have three brothers.',
      'I have three brotheres.',
      'I have three brothers’.',
    ],
    answerIndex: 1,
    errorType: 'Plural "s"',
    explanation: 'After a number greater than one, use the plural: "brothers".',
  },
  {
    wrong: 'There are many car in the street.',
    options: [
      'There are many car in the street.',
      'There are many cares in the street.',
      'There are many cars in the street.',
      'There is many car in the street.',
    ],
    answerIndex: 2,
    errorType: 'Plural "s"',
    explanation: '"Many" needs a plural noun: "many cars".',
  },
  {
    wrong: 'She bought two box of apples.',
    options: [
      'She bought two box of apples.',
      'She bought two boxs of apples.',
      'She bought two boxes of apples.',
      'She bought two box of apple.',
    ],
    answerIndex: 2,
    errorType: 'Plural "s"',
    explanation: 'Nouns ending in -x add -es: "boxes".',
  },
  {
    wrong: 'There are five child in the room.',
    options: [
      'There are five childs in the room.',
      'There are five children in the room.',
      'There are five child in the room.',
      'There are five childrens in the room.',
    ],
    answerIndex: 1,
    errorType: 'Plural "s"',
    explanation: '"Child" has an irregular plural: "children".',
  },
  {
    wrong: 'I need to buy some potato.',
    options: [
      'I need to buy some potato.',
      'I need to buy some potatos.',
      'I need to buy some potatoes.',
      'I need to buy some potatoe.',
    ],
    answerIndex: 2,
    errorType: 'Plural "s"',
    explanation: '"Potato" becomes "potatoes" in the plural.',
  },
  {
    wrong: 'He has many friend at school.',
    options: [
      'He has many friend at school.',
      'He has many friends at school.',
      'He has many friendes at school.',
      'He have many friend at school.',
    ],
    answerIndex: 1,
    errorType: 'Plural "s"',
    explanation: '"Many" is followed by a plural noun: "many friends".',
  },
  {
    wrong: 'We saw three woman at the door.',
    options: [
      'We saw three womans at the door.',
      'We saw three woman at the door.',
      'We saw three women at the door.',
      'We saw three womens at the door.',
    ],
    answerIndex: 2,
    errorType: 'Plural "s"',
    explanation: '"Woman" has an irregular plural: "women".',
  },
  {
    wrong: 'There are a lot of book on the shelf.',
    options: [
      'There are a lot of book on the shelf.',
      'There are a lot of books on the shelf.',
      'There is a lot of book on the shelf.',
      'There are a lot of bookes on the shelf.',
    ],
    answerIndex: 1,
    errorType: 'Plural "s"',
    explanation: '"A lot of" with countable nouns takes the plural: "books".',
  },
]

// ─── Helpers ───────────────────────────────────────────────────────────────────

const ROUND_SIZE = 15

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function CommonErrorFixerPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<ErrorItem[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const currentItem = items[qIdx] ?? null

  const handleStart = useCallback(() => {
    setItems(shuffle(ERROR_BANK).slice(0, ROUND_SIZE))
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

  const handleSelect = useCallback(
    (idx: number) => {
      if (!currentItem || feedback) return
      const isCorrect = idx === currentItem.answerIndex
      setSelected(idx)
      setTotalAnswered((t) => t + 1)
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedback('correct')
      } else {
        setFeedback('wrong')
      }

      setTimeout(() => {
        if (qIdx + 1 >= items.length) {
          setGameState('finished')
        } else {
          setQIdx((i) => i + 1)
          setSelected(null)
          setFeedback(null)
        }
      }, 2600)
    },
    [currentItem, feedback, qIdx, items.length],
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
          gameId="common-error-fixer"
          title="Fix the Common Mistake"
          description="Each sentence has one typical English mistake. Choose the corrected version. Everyone makes these - spotting them is how we improve."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || items.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {currentItem && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Sentence {qIdx + 1} of {items.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border text-clay-600 border-amber-500/30 bg-amber-500/10">
                    {currentItem.errorType}
                  </span>
                </div>
              </div>

              {/* Sentence with the mistake */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  This sentence has one mistake
                </p>
                <p className="text-lg font-medium text-foreground">
                  &ldquo;{currentItem.wrong}&rdquo;
                </p>
                <p className="text-sm text-muted-foreground">Which version is correct?</p>
              </div>

              {/* Options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {currentItem.options.map((option, idx) => {
                  const isAnswer = idx === currentItem.answerIndex
                  const isPicked = idx === selected
                  const showCorrect = !!feedback && isAnswer
                  const showWrong = feedback === 'wrong' && isPicked && !isAnswer
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-left text-sm font-medium text-foreground transition-all outline-none',
                        'hover:bg-accent focus:ring-2 focus:ring-primary/20',
                        !feedback && 'border-border',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        !!feedback && !showCorrect && !showWrong && 'opacity-50',
                      )}
                    >
                      <span className="inline-flex items-start gap-2">
                        {showCorrect && <CheckCircle className="size-4 mt-0.5 shrink-0" />}
                        {showWrong && <XCircle className="size-4 mt-0.5 shrink-0" />}
                        <span>{option}</span>
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Feedback + explanation */}
              {feedback && (
                <div
                  className={cn(
                    'rounded-lg px-4 py-3 text-sm',
                    feedback === 'correct'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-amber-500/10 text-clay-600',
                  )}
                >
                  <p className="font-semibold flex items-center gap-2">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Well done!
                      </>
                    ) : (
                      <>
                        <Lightbulb className="size-4" /> Good try - here&rsquo;s the rule:
                      </>
                    )}
                  </p>
                  <p className="mt-1 text-muted-foreground">{currentItem.explanation}</p>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
