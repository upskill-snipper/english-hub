'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Article = 'a' | 'an' | 'the' | '—'

interface ArticleItem {
  sentence: string // contains ___ for the gap
  answer: Article
  why: string // one-line rule explanation shown after answering
}

// Original sentence bank — UK English grammar, CEFR A1–B1.
// '—' means no article (zero article).
const ARTICLE_BANK: ArticleItem[] = [
  // ── a vs an: consonant vs vowel SOUND ──
  {
    sentence: 'She works as ___ nurse at the local clinic.',
    answer: 'a',
    why: '"a" before a consonant sound: "nurse" starts with /n/.',
  },
  {
    sentence: 'My brother wants to be ___ engineer one day.',
    answer: 'an',
    why: '"an" before a vowel sound: "engineer" starts with /e/.',
  },
  {
    sentence: 'We waited for ___ hour before the train arrived.',
    answer: 'an',
    why: '"an" before a vowel sound: the "h" in "hour" is silent.',
  },
  {
    sentence: 'He is studying at ___ university in Manchester.',
    answer: 'a',
    why: '"a" because "university" starts with a /y/ sound, not a vowel sound.',
  },
  {
    sentence: 'There is ___ apple on the kitchen table.',
    answer: 'an',
    why: '"an" before a vowel sound: "apple" starts with /æ/.',
  },
  {
    sentence: 'Could I have ___ glass of water, please?',
    answer: 'a',
    why: '"a" before a consonant sound: "glass" starts with /g/.',
  },
  {
    sentence: 'It took ___ honest answer to solve the problem.',
    answer: 'an',
    why: '"an" because the "h" in "honest" is silent.',
  },
  {
    sentence: 'My cousin owns ___ umbrella shop in the city.',
    answer: 'an',
    why: '"an" before a vowel sound: "umbrella" starts with /ʌ/.',
  },
  {
    sentence: 'That was ___ useful tip for my homework.',
    answer: 'a',
    why: '"a" because "useful" starts with a /y/ sound.',
  },
  {
    sentence: 'She gave me ___ orange from her bag.',
    answer: 'an',
    why: '"an" before a vowel sound: "orange" starts with /ɒ/.',
  },
  {
    sentence: 'He drew ___ X on the map to mark the spot.',
    answer: 'an',
    why: '"an" because the letter "X" is said "ex", a vowel sound.',
  },
  {
    sentence: 'We need ___ one-way ticket to London.',
    answer: 'a',
    why: '"a" because "one" starts with a /w/ sound.',
  },
  {
    sentence: 'The teacher asked ___ easy question.',
    answer: 'an',
    why: '"an" before a vowel sound: "easy" starts with /iː/.',
  },
  {
    sentence: 'I bought ___ new phone yesterday.',
    answer: 'a',
    why: '"a" before a consonant sound: "new" starts with /n/.',
  },
  {
    sentence: 'She is ___ MP for our town.',
    answer: 'an',
    why: '"an" because "MP" is said "em-pee", starting with a vowel sound.',
  },
  {
    sentence: 'It is ___ honour to meet you.',
    answer: 'an',
    why: '"an" because the "h" in "honour" is silent.',
  },
  {
    sentence: 'He told ___ funny story at dinner.',
    answer: 'a',
    why: '"a" before a consonant sound: "funny" starts with /f/.',
  },
  {
    sentence: 'There was ___ ice cube in my drink.',
    answer: 'an',
    why: '"an" before a vowel sound: "ice" starts with /aɪ/.',
  },
  {
    sentence: 'My father is ___ European citizen.',
    answer: 'a',
    why: '"a" because "European" starts with a /y/ sound.',
  },
  {
    sentence: 'We saw ___ elephant at the zoo.',
    answer: 'an',
    why: '"an" before a vowel sound: "elephant" starts with /e/.',
  },
  {
    sentence: 'She needs ___ uniform for her new job.',
    answer: 'a',
    why: '"a" because "uniform" starts with a /y/ sound.',
  },
  {
    sentence: 'I had ___ egg for breakfast this morning.',
    answer: 'an',
    why: '"an" before a vowel sound: "egg" starts with /e/.',
  },

  // ── definite article "the": unique / already known / specific ──
  {
    sentence: 'Please close ___ door when you leave.',
    answer: 'the',
    why: '"the" for a specific thing both speakers know about.',
  },
  {
    sentence: '___ sun rises in the east every morning.',
    answer: 'the',
    why: '"the" for something unique — there is only one sun.',
  },
  {
    sentence: 'I read ___ book you lent me last week.',
    answer: 'the',
    why: '"the" because the book is already known to the listener.',
  },
  {
    sentence: 'She is ___ tallest student in the class.',
    answer: 'the',
    why: '"the" is used before superlatives like "tallest".',
  },
  {
    sentence: 'We watched ___ moon from the garden last night.',
    answer: 'the',
    why: '"the" for something unique — there is only one moon.',
  },
  {
    sentence: 'Can you pass me ___ salt, please?',
    answer: 'the',
    why: '"the" for a specific item present and known to both people.',
  },
  {
    sentence: 'He plays ___ guitar very well.',
    answer: 'the',
    why: '"the" before musical instruments when talking about the skill.',
  },
  {
    sentence: 'They live near ___ River Thames.',
    answer: 'the',
    why: '"the" is used with the names of rivers.',
  },
  {
    sentence: 'I want to visit ___ United Kingdom next year.',
    answer: 'the',
    why: '"the" with country names that include "Kingdom", "States" or "Republic".',
  },
  {
    sentence: 'She is ___ first person to finish the race.',
    answer: 'the',
    why: '"the" before ordinal numbers like "first".',
  },
  {
    sentence: 'Look at ___ sky — it is full of stars tonight.',
    answer: 'the',
    why: '"the" for something unique and shared by both speakers.',
  },
  {
    sentence: 'We went to ___ cinema on Saturday evening.',
    answer: 'the',
    why: '"the" with familiar public places like "cinema".',
  },

  // ── zero article "—": plurals (general), uncountables, names, meals, languages ──
  {
    sentence: '___ children love playing in the park.',
    answer: '—',
    why: 'No article with plural nouns when speaking generally.',
  },
  {
    sentence: 'I really enjoy ___ music.',
    answer: '—',
    why: 'No article with uncountable nouns used in a general sense.',
  },
  {
    sentence: '___ Sara is coming to the party tonight.',
    answer: '—',
    why: 'No article before people’s names.',
  },
  {
    sentence: 'We had ___ breakfast at seven o’clock.',
    answer: '—',
    why: 'No article before meals like breakfast, lunch and dinner.',
  },
  {
    sentence: 'She speaks ___ Arabic and English fluently.',
    answer: '—',
    why: 'No article before the names of languages.',
  },
  {
    sentence: '___ water is essential for life.',
    answer: '—',
    why: 'No article with uncountable nouns used generally.',
  },
  {
    sentence: 'I live in ___ London with my family.',
    answer: '—',
    why: 'No article before most city and town names.',
  },
  {
    sentence: '___ dogs are very loyal animals.',
    answer: '—',
    why: 'No article with plural nouns when speaking in general.',
  },
  {
    sentence: 'He travels to ___ France every summer.',
    answer: '—',
    why: 'No article before most country names.',
  },
  {
    sentence: 'They study ___ mathematics at school.',
    answer: '—',
    why: 'No article before school subjects.',
  },
  {
    sentence: 'We play ___ football after class.',
    answer: '—',
    why: 'No article before the names of sports and games.',
  },
  {
    sentence: '___ honey is sweeter than sugar.',
    answer: '—',
    why: 'No article with uncountable nouns used generally.',
  },
  {
    sentence: 'My sister teaches ___ history at the college.',
    answer: '—',
    why: 'No article before academic subjects.',
  },
  {
    sentence: 'I usually go to ___ bed before midnight.',
    answer: '—',
    why: 'No article in fixed phrases like "go to bed".',
  },
  {
    sentence: '___ Mr Khan is our new teacher.',
    answer: '—',
    why: 'No article before a title with a person’s name.',
  },
  {
    sentence: '___ rice is grown in many warm countries.',
    answer: '—',
    why: 'No article with uncountable nouns used generally.',
  },
  {
    sentence: 'She loves ___ flowers in the spring.',
    answer: '—',
    why: 'No article with plural nouns when speaking generally.',
  },
  {
    sentence: 'We learn ___ English on Mondays.',
    answer: '—',
    why: 'No article before the names of languages.',
  },

  // ── mixed: a/an introducing something new, the for second mention ──
  {
    sentence: 'I saw ___ cat in the street earlier.',
    answer: 'a',
    why: '"a" when a singular countable noun is mentioned for the first time.',
  },
  {
    sentence: 'There is ___ school at the end of our road.',
    answer: 'a',
    why: '"a" for one of many — introducing a new singular noun.',
  },
  {
    sentence: 'He bought ___ car. ___ car is bright red.',
    answer: 'a',
    why: 'Use "a" to introduce the car; "the" would be used for the second mention.',
  },
  {
    sentence: 'Would you like ___ cup of tea?',
    answer: 'a',
    why: '"a" before a single, countable, non-specific noun.',
  },
  {
    sentence: 'She is ___ doctor at the hospital.',
    answer: 'a',
    why: '"a" before jobs and professions with a consonant sound.',
  },
]

const ROUND_SIZE = 15
const OPTIONS: Article[] = ['a', 'an', 'the', '—']
const OPTION_LABELS: Record<Article, string> = {
  a: 'a',
  an: 'an',
  the: 'the',
  '—': '— (no article)',
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

function renderSentence(sentence: string, filled: string | null) {
  const parts = sentence.split('___')
  return (
    <>
      {parts[0]}
      <span
        className={cn(
          'inline-flex min-w-[3.5rem] items-center justify-center rounded-md border-2 border-dashed px-2 py-0.5 align-middle font-bold',
          filled
            ? 'border-primary/40 bg-primary/10 text-primary'
            : 'border-border text-muted-foreground',
        )}
      >
        {filled ?? '?'}
      </span>
      {parts[1]}
    </>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ArticleAAnThePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<ArticleItem[]>([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<Article | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const current = items[idx] ?? null

  const handleStart = useCallback(() => {
    setItems(shuffle(ARTICLE_BANK).slice(0, ROUND_SIZE))
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

  const handlePick = useCallback(
    (choice: Article) => {
      if (!current || feedback) return
      const isCorrect = choice === current.answer
      setSelected(choice)
      setFeedback(isCorrect ? 'correct' : 'wrong')
      setTotalAnswered((t) => t + 1)
      if (isCorrect) setScore((s) => s + 1)
    },
    [current, feedback],
  )

  const handleNext = useCallback(() => {
    if (idx + 1 >= items.length) {
      setGameState('finished')
    } else {
      setIdx((i) => i + 1)
      setSelected(null)
      setFeedback(null)
    }
  }, [idx, items.length])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const isLast = useMemo(() => idx + 1 >= items.length, [idx, items.length])

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
          gameId="article-a-an-the"
          title="A, An, The or Nothing?"
          description="Read each sentence and tap the article that fits the gap: a, an, the, or no article. Learn the rule after every answer."
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
                  Sentence {idx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                  {renderSentence(current.sentence, selected)}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {OPTIONS.map((opt) => {
                  const isAnswer = opt === current.answer
                  const isPicked = opt === selected
                  return (
                    <button
                      key={opt}
                      onClick={() => handlePick(opt)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-xl border-2 px-4 py-4 text-base font-bold transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary/50 hover:bg-accent active:translate-y-px',
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
                      {OPTION_LABELS[opt]}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + rule */}
              {feedback && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      feedback === 'correct'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-red-500/10 text-red-400',
                    )}
                  >
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Well done — that&apos;s right!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The answer is{' '}
                        <span className="font-bold">{OPTION_LABELS[current.answer]}</span>.
                      </>
                    )}
                  </div>

                  <div className="flex items-start gap-2 rounded-lg border border-border bg-accent/40 px-4 py-3 text-sm text-muted-foreground">
                    <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{current.why}</span>
                  </div>

                  <div className="flex justify-center">
                    <Button onClick={handleNext}>{isLast ? 'See Results' : 'Next Sentence'}</Button>
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
