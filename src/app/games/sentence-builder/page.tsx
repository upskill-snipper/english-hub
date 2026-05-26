'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Eye, RotateCcw } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type SentenceType = 'simple' | 'compound' | 'complex'

interface SentenceItem {
  tiles: string[]
  correct: string
  type: SentenceType
  note: string
}

// Original sentence bank. `correct` is the target word order;
// tiles are presented scrambled at runtime.
const SENTENCE_BANK: SentenceItem[] = [
  // ── Simple sentences (A2) ──────────────────────────────────────────────────
  {
    tiles: ['She', 'walks', 'to', 'school', 'every', 'morning'],
    correct: 'She walks to school every morning',
    type: 'simple',
    note: 'A simple sentence has one subject and one verb.',
  },
  {
    tiles: ['The', 'cat', 'is', 'sleeping', 'on', 'the', 'sofa'],
    correct: 'The cat is sleeping on the sofa',
    type: 'simple',
    note: 'Use "is + verb-ing" for an action happening now.',
  },
  {
    tiles: ['My', 'brother', 'plays', 'football', 'at', 'the', 'weekend'],
    correct: 'My brother plays football at the weekend',
    type: 'simple',
    note: 'In UK English we say "at the weekend".',
  },
  {
    tiles: ['We', 'had', 'lunch', 'in', 'the', 'park'],
    correct: 'We had lunch in the park',
    type: 'simple',
    note: '"Had" is the past tense of "have".',
  },
  {
    tiles: ['They', 'are', 'watching', 'a', 'film', 'tonight'],
    correct: 'They are watching a film tonight',
    type: 'simple',
    note: 'UK English prefers "film" over "movie".',
  },
  {
    tiles: ['I', 'bought', 'a', 'new', 'jumper', 'yesterday'],
    correct: 'I bought a new jumper yesterday',
    type: 'simple',
    note: 'A "jumper" is a knitted top in UK English.',
  },
  {
    tiles: ['The', 'train', 'leaves', 'at', 'nine', "o'clock"],
    correct: "The train leaves at nine o'clock",
    type: 'simple',
    note: 'Use the present simple for timetables.',
  },
  {
    tiles: ['Our', 'teacher', 'gave', 'us', 'some', 'homework'],
    correct: 'Our teacher gave us some homework',
    type: 'simple',
    note: '"Homework" is uncountable, so use "some".',
  },
  {
    tiles: ['She', 'has', 'a', 'small', 'garden', 'behind', 'the', 'house'],
    correct: 'She has a small garden behind the house',
    type: 'simple',
    note: 'Adjectives like "small" go before the noun.',
  },
  {
    tiles: ['He', 'speaks', 'three', 'languages', 'very', 'well'],
    correct: 'He speaks three languages very well',
    type: 'simple',
    note: '"Very well" describes how he speaks.',
  },
  {
    tiles: ['The', 'children', 'are', 'playing', 'in', 'the', 'garden'],
    correct: 'The children are playing in the garden',
    type: 'simple',
    note: '"Children" is the irregular plural of "child".',
  },
  {
    tiles: ['I', 'usually', 'have', 'tea', 'in', 'the', 'afternoon'],
    correct: 'I usually have tea in the afternoon',
    type: 'simple',
    note: 'Adverbs of frequency like "usually" go before the main verb.',
  },
  {
    tiles: ['My', 'phone', 'is', 'on', 'the', 'kitchen', 'table'],
    correct: 'My phone is on the kitchen table',
    type: 'simple',
    note: '"On" shows position on a surface.',
  },
  {
    tiles: ['We', 'visited', 'our', 'grandparents', 'last', 'summer'],
    correct: 'We visited our grandparents last summer',
    type: 'simple',
    note: '"Last summer" places the action in the past.',
  },
  {
    tiles: ['The', 'shop', 'opens', 'at', 'eight', 'every', 'day'],
    correct: 'The shop opens at eight every day',
    type: 'simple',
    note: 'Add "s" to the verb after "the shop" (he/she/it).',
  },
  {
    tiles: ['She', 'is', 'reading', 'an', 'interesting', 'book'],
    correct: 'She is reading an interesting book',
    type: 'simple',
    note: 'Use "an" before a vowel sound: "an interesting".',
  },

  // ── Compound sentences (A2-B1) ─────────────────────────────────────────────
  {
    tiles: ['I', 'wanted', 'to', 'go', 'out', 'but', 'it', 'was', 'raining'],
    correct: 'I wanted to go out but it was raining',
    type: 'compound',
    note: '"But" joins two ideas that contrast.',
  },
  {
    tiles: ['She', 'studied', 'hard', 'so', 'she', 'passed', 'the', 'exam'],
    correct: 'She studied hard so she passed the exam',
    type: 'compound',
    note: '"So" shows a result.',
  },
  {
    tiles: ['We', 'can', 'walk', 'or', 'we', 'can', 'take', 'the', 'bus'],
    correct: 'We can walk or we can take the bus',
    type: 'compound',
    note: '"Or" offers a choice between two options.',
  },
  {
    tiles: ['He', 'made', 'dinner', 'and', 'she', 'washed', 'the', 'dishes'],
    correct: 'He made dinner and she washed the dishes',
    type: 'compound',
    note: '"And" joins two equal ideas.',
  },
  {
    tiles: ['The', 'film', 'was', 'long', 'but', 'it', 'was', 'exciting'],
    correct: 'The film was long but it was exciting',
    type: 'compound',
    note: 'Use a comma before "but" in longer sentences.',
  },
  {
    tiles: ['I', 'was', 'tired', 'so', 'I', 'went', 'to', 'bed', 'early'],
    correct: 'I was tired so I went to bed early',
    type: 'compound',
    note: '"So" connects a cause to its result.',
  },
  {
    tiles: ['You', 'can', 'have', 'tea', 'or', 'you', 'can', 'have', 'coffee'],
    correct: 'You can have tea or you can have coffee',
    type: 'compound',
    note: '"Or" presents alternatives.',
  },
  {
    tiles: ['She', 'plays', 'the', 'piano', 'and', 'he', 'sings'],
    correct: 'She plays the piano and he sings',
    type: 'compound',
    note: 'Both clauses can stand alone as sentences.',
  },
  {
    tiles: ['It', 'was', 'cold', 'so', 'we', 'lit', 'the', 'fire'],
    correct: 'It was cold so we lit the fire',
    type: 'compound',
    note: '"Lit" is the past tense of "light".',
  },
  {
    tiles: ['He', 'tried', 'his', 'best', 'but', 'he', 'did', 'not', 'win'],
    correct: 'He tried his best but he did not win',
    type: 'compound',
    note: '"But" introduces an unexpected outcome.',
  },
  {
    tiles: ['We', 'finished', 'early', 'so', 'we', 'went', 'for', 'a', 'walk'],
    correct: 'We finished early so we went for a walk',
    type: 'compound',
    note: 'UK English: "went for a walk".',
  },
  {
    tiles: ['I', 'like', 'cricket', 'and', 'my', 'sister', 'likes', 'rugby'],
    correct: 'I like cricket and my sister likes rugby',
    type: 'compound',
    note: '"And" links two related facts.',
  },
  {
    tiles: ['The', 'sun', 'came', 'out', 'so', 'we', 'went', 'to', 'the', 'beach'],
    correct: 'The sun came out so we went to the beach',
    type: 'compound',
    note: '"So" signals consequence.',
  },
  {
    tiles: ['She', 'spoke', 'quietly', 'but', 'everyone', 'could', 'hear', 'her'],
    correct: 'She spoke quietly but everyone could hear her',
    type: 'compound',
    note: '"But" contrasts the two clauses.',
  },
  {
    tiles: ['You', 'should', 'revise', 'now', 'or', 'you', 'will', 'forget'],
    correct: 'You should revise now or you will forget',
    type: 'compound',
    note: '"Or" can warn of a result.',
  },

  // ── Complex sentences (B1) ─────────────────────────────────────────────────
  {
    tiles: ['Because', 'it', 'was', 'late', 'we', 'went', 'home'],
    correct: 'Because it was late we went home',
    type: 'complex',
    note: '"Because" introduces a subordinate clause giving a reason.',
  },
  {
    tiles: ['When', 'the', 'bell', 'rang', 'the', 'pupils', 'left'],
    correct: 'When the bell rang the pupils left',
    type: 'complex',
    note: '"When" introduces a clause about time.',
  },
  {
    tiles: ['Although', 'she', 'was', 'tired', 'she', 'kept', 'working'],
    correct: 'Although she was tired she kept working',
    type: 'complex',
    note: '"Although" shows contrast within one sentence.',
  },
  {
    tiles: ['If', 'it', 'rains', 'tomorrow', 'we', 'will', 'stay', 'inside'],
    correct: 'If it rains tomorrow we will stay inside',
    type: 'complex',
    note: 'First conditional: "If + present, will + verb".',
  },
  {
    tiles: ['The', 'book', 'that', 'I', 'read', 'was', 'fascinating'],
    correct: 'The book that I read was fascinating',
    type: 'complex',
    note: '"That I read" is a relative clause describing the book.',
  },
  {
    tiles: ['While', 'he', 'was', 'cooking', 'she', 'set', 'the', 'table'],
    correct: 'While he was cooking she set the table',
    type: 'complex',
    note: '"While" links two actions at the same time.',
  },
  {
    tiles: ['She', 'smiled', 'because', 'she', 'had', 'won', 'the', 'prize'],
    correct: 'She smiled because she had won the prize',
    type: 'complex',
    note: 'The subordinate clause can follow the main clause.',
  },
  {
    tiles: ['After', 'we', 'had', 'eaten', 'we', 'watched', 'television'],
    correct: 'After we had eaten we watched television',
    type: 'complex',
    note: '"After" shows which action happened first.',
  },
  {
    tiles: ['The', 'man', 'who', 'lives', 'next', 'door', 'is', 'a', 'doctor'],
    correct: 'The man who lives next door is a doctor',
    type: 'complex',
    note: '"Who lives next door" tells us which man.',
  },
  {
    tiles: ['Before', 'you', 'leave', 'please', 'close', 'the', 'window'],
    correct: 'Before you leave please close the window',
    type: 'complex',
    note: '"Before" introduces a time clause.',
  },
  {
    tiles: ['Even', 'though', 'it', 'was', 'expensive', 'they', 'bought', 'it'],
    correct: 'Even though it was expensive they bought it',
    type: 'complex',
    note: '"Even though" emphasises a strong contrast.',
  },
  {
    tiles: ['Since', 'we', 'moved', 'here', 'we', 'have', 'made', 'new', 'friends'],
    correct: 'Since we moved here we have made new friends',
    type: 'complex',
    note: '"Since" can mean "from that time" with the present perfect.',
  },
  {
    tiles: ['Unless', 'you', 'hurry', 'you', 'will', 'miss', 'the', 'train'],
    correct: 'Unless you hurry you will miss the train',
    type: 'complex',
    note: '"Unless" means "if not".',
  },
  {
    tiles: ['The', 'café', 'where', 'we', 'met', 'has', 'now', 'closed'],
    correct: 'The café where we met has now closed',
    type: 'complex',
    note: '"Where we met" is a relative clause about a place.',
  },
  {
    tiles: ['As', 'soon', 'as', 'the', 'film', 'ended', 'we', 'left'],
    correct: 'As soon as the film ended we left',
    type: 'complex',
    note: '"As soon as" means immediately after.',
  },
  {
    tiles: ['Whenever', 'I', 'visit', 'London', 'I', 'see', 'the', 'museums'],
    correct: 'Whenever I visit London I see the museums',
    type: 'complex',
    note: '"Whenever" means "every time that".',
  },
]

const TYPE_META: Record<SentenceType, { label: string; cls: string }> = {
  simple: { label: 'Simple', cls: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  compound: { label: 'Compound', cls: 'text-clay-600 border-amber-500/30 bg-amber-500/10' },
  complex: { label: 'Complex', cls: 'text-red-400 border-red-500/30 bg-red-500/10' },
}

const ROUND_SIZE = 12

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Ensure the scrambled order differs from the correct order.
function scrambleTiles(tiles: string[]): string[] {
  if (tiles.length < 2) return [...tiles]
  const target = tiles.join('')
  let scrambled = shuffle(tiles)
  let guard = 0
  while (scrambled.join('') === target && guard < 20) {
    scrambled = shuffle(tiles)
    guard++
  }
  return scrambled
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SentenceBuilderPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<SentenceItem[]>([])
  const [pool, setPool] = useState<string[]>([]) // scrambled tiles still available
  const [built, setBuilt] = useState<string[]>([]) // tiles placed by the learner
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [revealed, setRevealed] = useState(false)

  const current = items[idx] ?? null

  const loadItem = useCallback((item: SentenceItem) => {
    setPool(scrambleTiles(item.tiles))
    setBuilt([])
    setFeedback(null)
    setRevealed(false)
  }, [])

  const handleStart = useCallback(() => {
    const simple = shuffle(SENTENCE_BANK.filter((s) => s.type === 'simple'))
    const compound = shuffle(SENTENCE_BANK.filter((s) => s.type === 'compound'))
    const complex = shuffle(SENTENCE_BANK.filter((s) => s.type === 'complex'))
    // Difficulty ramp: simple → compound → complex
    const ordered = [...simple.slice(0, 4), ...compound.slice(0, 4), ...complex.slice(0, 4)].slice(
      0,
      ROUND_SIZE,
    )
    setItems(ordered)
    setIdx(0)
    setScore(0)
    setTotalAnswered(0)
    loadItem(ordered[0])
    setGameState('playing')
  }, [loadItem])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const advance = useCallback(() => {
    setItems((curItems) => {
      if (idx + 1 >= curItems.length) {
        setGameState('finished')
      } else {
        const next = curItems[idx + 1]
        setIdx((i) => i + 1)
        loadItem(next)
      }
      return curItems
    })
  }, [idx, loadItem])

  // Tap a pool tile → append to the built sentence.
  const placeTile = (poolPos: number) => {
    if (feedback || revealed) return
    setPool((p) => {
      const word = p[poolPos]
      setBuilt((b) => [...b, word])
      return p.filter((_, i) => i !== poolPos)
    })
  }

  // Tap a built tile → return it to the pool.
  const removeTile = (builtPos: number) => {
    if (feedback || revealed) return
    setBuilt((b) => {
      const word = b[builtPos]
      setPool((p) => [...p, word])
      return b.filter((_, i) => i !== builtPos)
    })
  }

  const resetCurrent = () => {
    if (feedback || revealed || !current) return
    loadItem(current)
  }

  const checkAnswer = () => {
    if (!current || feedback || revealed) return
    const attempt = built.join(' ')
    const isCorrect = attempt === current.correct
    setTotalAnswered((t) => t + 1)
    if (isCorrect) {
      setScore((s) => s + 1)
      setFeedback('correct')
    } else {
      setFeedback('wrong')
    }
    setTimeout(advance, 2200)
  }

  const reveal = () => {
    if (!current || feedback || revealed) return
    setRevealed(true)
    setTotalAnswered((t) => t + 1)
    setBuilt(current.correct.split(' '))
    setPool([])
    setTimeout(advance, 2600)
  }

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const locked = !!feedback || revealed

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
          gameId="sentence-builder"
          title="Sentence Builder"
          description="Tap the word tiles in the right order to build a correct sentence. Sentences get trickier as you go: simple, then compound, then complex."
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
                  Sentence {idx + 1} of {items.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      TYPE_META[current.type].cls,
                    )}
                  >
                    {TYPE_META[current.type].label}
                  </span>
                </div>
              </div>

              {/* Build area */}
              <div
                className={cn(
                  'min-h-[88px] rounded-xl border-2 border-dashed p-4 transition-colors',
                  feedback === 'correct' && 'border-emerald-500 bg-emerald-500/10',
                  feedback === 'wrong' && 'border-red-500 bg-red-500/10',
                  revealed && 'border-primary bg-primary/5',
                  !locked && 'border-border bg-card',
                )}
              >
                {built.length === 0 ? (
                  <p className="py-4 text-center text-sm text-muted-foreground">
                    Tap the words below to build your sentence here.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {built.map((word, i) => (
                      <button
                        key={`${word}-${i}`}
                        onClick={() => removeTile(i)}
                        disabled={locked}
                        className={cn(
                          'rounded-lg border px-3 py-2 text-sm font-medium transition-all',
                          'border-primary/40 bg-primary/10 text-foreground',
                          !locked &&
                            'hover:border-red-500/50 hover:bg-red-500/10 active:translate-y-px',
                          locked && 'cursor-default',
                        )}
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tile pool */}
              {pool.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {pool.map((word, i) => (
                    <button
                      key={`${word}-${i}`}
                      onClick={() => placeTile(i)}
                      disabled={locked}
                      className={cn(
                        'rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-all',
                        !locked && 'hover:border-primary hover:bg-accent active:translate-y-px',
                        locked && 'opacity-50 cursor-default',
                      )}
                    >
                      {word}
                    </button>
                  ))}
                </div>
              )}

              {/* Feedback */}
              {feedback && (
                <div
                  className={cn(
                    'flex flex-col items-center gap-1 rounded-lg px-4 py-3 text-sm font-medium text-center',
                    feedback === 'correct'
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-red-400 bg-red-500/10',
                  )}
                >
                  {feedback === 'correct' ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="size-4" /> Brilliant - that&apos;s exactly right!
                    </span>
                  ) : (
                    <>
                      <span className="flex items-center gap-2">
                        <XCircle className="size-4" /> Not quite. The correct sentence is:
                      </span>
                      <span className="font-bold text-foreground">{current.correct}.</span>
                    </>
                  )}
                  <span className="mt-1 text-xs text-muted-foreground">{current.note}</span>
                </div>
              )}

              {revealed && (
                <div className="flex flex-col items-center gap-1 rounded-lg bg-primary/10 px-4 py-3 text-center text-sm">
                  <span className="font-semibold text-primary">Here&apos;s the answer:</span>
                  <span className="font-bold text-foreground">{current.correct}.</span>
                  <span className="mt-1 text-xs text-muted-foreground">{current.note}</span>
                </div>
              )}

              {/* Controls */}
              {!locked && (
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button onClick={checkAnswer} disabled={built.length === 0}>
                    Check Sentence
                  </Button>
                  <Button variant="outline" onClick={resetCurrent} disabled={built.length === 0}>
                    <RotateCcw className="size-4 mr-1" />
                    Reset
                  </Button>
                  <Button variant="ghost" onClick={reveal}>
                    <Eye className="size-4 mr-1" />
                    Reveal
                  </Button>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
