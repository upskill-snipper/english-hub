'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, BookA } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Subtype = 'alpha' | 'guide' | 'define' | 'pos'

interface AlphaItem {
  type: 'alpha'
  words: [string, string, string, string]
  /** The word that comes first alphabetically */
  answer: string
}

interface GuideItem {
  type: 'guide'
  left: string
  right: string
  word: string
  /** True if `word` falls between `left` and `right` on the page */
  answer: boolean
}

interface DefineItem {
  type: 'define'
  word: string
  /** Correct definition */
  answer: string
  /** Three plausible but wrong definitions */
  distractors: [string, string, string]
}

interface PosItem {
  type: 'pos'
  word: string
  example: string
  /** 'n.' | 'v.' | 'adj.' */
  answer: string
}

type BankItem = AlphaItem | GuideItem | DefineItem | PosItem

// Original content bank - UK English, 50+ items typed by subtype.
const ALPHA_BANK: AlphaItem[] = [
  { type: 'alpha', words: ['orchard', 'ocean', 'olive', 'oyster'], answer: 'ocean' },
  { type: 'alpha', words: ['breeze', 'brick', 'branch', 'bridge'], answer: 'branch' },
  { type: 'alpha', words: ['carpet', 'cabin', 'cellar', 'clutch'], answer: 'cabin' },
  { type: 'alpha', words: ['stream', 'storm', 'stone', 'stove'], answer: 'stone' },
  { type: 'alpha', words: ['planet', 'plaster', 'plank', 'platform'], answer: 'plank' },
  { type: 'alpha', words: ['frost', 'fragment', 'frame', 'freckle'], answer: 'fragment' },
  { type: 'alpha', words: ['thunder', 'thimble', 'thorn', 'throne'], answer: 'thimble' },
  { type: 'alpha', words: ['velvet', 'vacant', 'vessel', 'vivid'], answer: 'vacant' },
  { type: 'alpha', words: ['gravel', 'glance', 'glory', 'grain'], answer: 'glance' },
  { type: 'alpha', words: ['mirror', 'meadow', 'mingle', 'mosaic'], answer: 'meadow' },
  { type: 'alpha', words: ['ribbon', 'rhythm', 'rescue', 'ripple'], answer: 'rescue' },
  { type: 'alpha', words: ['shadow', 'shallow', 'shatter', 'shelter'], answer: 'shadow' },
  { type: 'alpha', words: ['drizzle', 'drama', 'driftwood', 'drowsy'], answer: 'drama' },
  { type: 'alpha', words: ['anchor', 'amber', 'apron', 'awning'], answer: 'amber' },
]

const GUIDE_BANK: GuideItem[] = [
  { type: 'guide', left: 'castle', right: 'cattle', word: 'casual', answer: true },
  { type: 'guide', left: 'garden', right: 'gather', word: 'garlic', answer: true },
  { type: 'guide', left: 'pebble', right: 'pepper', word: 'pencil', answer: true },
  { type: 'guide', left: 'lemon', right: 'lever', word: 'mango', answer: false },
  { type: 'guide', left: 'frost', right: 'fungus', word: 'fragment', answer: false },
  { type: 'guide', left: 'marble', right: 'meadow', word: 'mayhem', answer: true },
  { type: 'guide', left: 'noble', right: 'novel', word: 'nostril', answer: true },
  { type: 'guide', left: 'sail', right: 'salt', word: 'scarf', answer: false },
  { type: 'guide', left: 'tablet', right: 'talent', word: 'tackle', answer: true },
  { type: 'guide', left: 'velvet', right: 'vessel', word: 'venom', answer: true },
  { type: 'guide', left: 'brave', right: 'breeze', word: 'broom', answer: false },
  { type: 'guide', left: 'orchard', right: 'ostrich', word: 'oregano', answer: true },
  { type: 'guide', left: 'hammer', right: 'harvest', word: 'happen', answer: true },
  { type: 'guide', left: 'dusk', right: 'dwell', word: 'cradle', answer: false },
]

const DEFINE_BANK: DefineItem[] = [
  {
    type: 'define',
    word: 'meander',
    answer: 'To follow a winding course; to wander without a fixed direction',
    distractors: [
      'To complain loudly about a small problem',
      'To repair something using simple tools',
      'To gather a crowd of people together',
    ],
  },
  {
    type: 'define',
    word: 'brittle',
    answer: 'Hard but easily broken or snapped',
    distractors: [
      'Soft and able to bend without breaking',
      'Warm and pleasant to the touch',
      'Heavy and difficult to lift',
    ],
  },
  {
    type: 'define',
    word: 'vacant',
    answer: 'Empty; not occupied or in use',
    distractors: [
      'Crowded with many people',
      'Decorated for a celebration',
      'Locked and impossible to enter',
    ],
  },
  {
    type: 'define',
    word: 'summit',
    answer: 'The highest point of a hill or mountain',
    distractors: [
      'A deep valley between two slopes',
      'A path leading around a lake',
      'The base where a journey begins',
    ],
  },
  {
    type: 'define',
    word: 'fragile',
    answer: 'Easily damaged or broken; delicate',
    distractors: [
      'Strong enough to carry heavy loads',
      'Bright and colourful in appearance',
      'Slow-moving but very steady',
    ],
  },
  {
    type: 'define',
    word: 'drowsy',
    answer: 'Sleepy and lacking energy or alertness',
    distractors: [
      'Excited and full of fresh energy',
      'Angry and quick to argue',
      'Curious about new surroundings',
    ],
  },
  {
    type: 'define',
    word: 'gleam',
    answer: 'To shine with a soft, steady light',
    distractors: [
      'To make a sudden loud noise',
      'To move quickly out of sight',
      'To fade slowly into darkness',
    ],
  },
  {
    type: 'define',
    word: 'pursue',
    answer: 'To follow or chase in order to catch or achieve something',
    distractors: [
      'To turn away and give up',
      'To rest after a long effort',
      'To explain an idea clearly',
    ],
  },
  {
    type: 'define',
    word: 'scarce',
    answer: 'Available only in small amounts; hard to find',
    distractors: [
      'Found everywhere in large numbers',
      'Cheap and easy to buy',
      'New and recently invented',
    ],
  },
  {
    type: 'define',
    word: 'mimic',
    answer: 'To copy the speech or actions of someone, often for amusement',
    distractors: [
      'To create something entirely new',
      'To hide an object carefully',
      'To measure the size of something',
    ],
  },
  {
    type: 'define',
    word: 'feeble',
    answer: 'Lacking strength; weak',
    distractors: [
      'Full of power and force',
      'Tall and clearly visible',
      'Calm and free from worry',
    ],
  },
  {
    type: 'define',
    word: 'linger',
    answer: 'To stay in a place longer than necessary; to be slow to leave',
    distractors: [
      'To rush ahead of others',
      'To shout in order to be heard',
      'To divide something into parts',
    ],
  },
  {
    type: 'define',
    word: 'vivid',
    answer: 'Producing strong, clear images; bright and intense',
    distractors: [
      'Dull and difficult to notice',
      'Quiet and rarely spoken',
      'Cold and unpleasant to touch',
    ],
  },
  {
    type: 'define',
    word: 'sturdy',
    answer: 'Strongly built and unlikely to break or fall',
    distractors: [
      'Thin and likely to bend',
      'Light enough to float on water',
      'Smooth and slippery to hold',
    ],
  },
]

const POS_BANK: PosItem[] = [
  {
    type: 'pos',
    word: 'harbour',
    example: 'The boats stayed safe inside the harbour.',
    answer: 'n.',
  },
  { type: 'pos', word: 'whisper', example: 'She began to whisper the secret.', answer: 'v.' },
  { type: 'pos', word: 'ancient', example: 'They explored the ancient ruins.', answer: 'adj.' },
  { type: 'pos', word: 'lantern', example: 'A lantern glowed in the window.', answer: 'n.' },
  { type: 'pos', word: 'scatter', example: 'The wind began to scatter the leaves.', answer: 'v.' },
  { type: 'pos', word: 'fierce', example: 'A fierce storm crossed the coast.', answer: 'adj.' },
  { type: 'pos', word: 'meadow', example: 'Cattle grazed in the open meadow.', answer: 'n.' },
  { type: 'pos', word: 'tremble', example: 'His hands began to tremble.', answer: 'v.' },
  { type: 'pos', word: 'gentle', example: 'A gentle breeze cooled the room.', answer: 'adj.' },
  { type: 'pos', word: 'bridge', example: 'They crossed the old stone bridge.', answer: 'n.' },
  { type: 'pos', word: 'gather', example: 'The class will gather in the hall.', answer: 'v.' },
  {
    type: 'pos',
    word: 'curious',
    example: 'The curious child asked many questions.',
    answer: 'adj.',
  },
  {
    type: 'pos',
    word: 'cottage',
    example: 'They rented a small cottage by the sea.',
    answer: 'n.',
  },
  { type: 'pos', word: 'vanish', example: 'The fog will vanish by morning.', answer: 'v.' },
  { type: 'pos', word: 'brilliant', example: 'The plan was a brilliant idea.', answer: 'adj.' },
]

const POS_OPTIONS = ['n.', 'v.', 'adj.']
const ROUND_LENGTH = 15

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface Question {
  subtype: Subtype
  prompt: string
  hint: string
  options: string[]
  /** The correct option string */
  correct: string
}

function buildQuestion(item: BankItem): Question {
  switch (item.type) {
    case 'alpha':
      return {
        subtype: 'alpha',
        prompt: 'Which word comes first in alphabetical order?',
        hint: 'Compare the letters from the start of each word.',
        options: shuffle(item.words),
        correct: item.answer,
      }
    case 'guide': {
      const yes = `Yes - "${item.word}" is on this page`
      const no = `No - "${item.word}" is not on this page`
      return {
        subtype: 'guide',
        prompt: `Guide words at the top of a page are "${item.left}" and "${item.right}". Would you find "${item.word}" on this page?`,
        hint: 'The word must come after the left guide word and before the right one.',
        options: [yes, no],
        correct: item.answer ? yes : no,
      }
    }
    case 'define':
      return {
        subtype: 'define',
        prompt: `Which definition correctly matches the word "${item.word}"?`,
        hint: 'Choose the meaning that fits how the word is normally used.',
        options: shuffle([item.answer, ...item.distractors]),
        correct: item.answer,
      }
    case 'pos':
      return {
        subtype: 'pos',
        prompt: `What part of speech is "${item.word}" in this sentence?`,
        hint: `"${item.example}"  ·  n. = noun, v. = verb, adj. = adjective`,
        options: POS_OPTIONS,
        correct: item.answer,
      }
  }
}

function buildRound(): Question[] {
  // ~15 mixed questions, roughly balanced across the four subtypes.
  const picks: BankItem[] = [
    ...shuffle(ALPHA_BANK).slice(0, 4),
    ...shuffle(GUIDE_BANK).slice(0, 4),
    ...shuffle(DEFINE_BANK).slice(0, 4),
    ...shuffle(POS_BANK).slice(0, 3),
  ]
  return shuffle(picks).slice(0, ROUND_LENGTH).map(buildQuestion)
}

const SUBTYPE_LABEL: Record<Subtype, string> = {
  alpha: 'Alphabetical order',
  guide: 'Guide words',
  define: 'Definitions',
  pos: 'Word classes',
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function DictionarySkillsPage() {
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

  const handleStart = useCallback(() => {
    setQuestions(buildRound())
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
      const isCorrect = option === currentQ.correct
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
          gameId="dictionary-skills"
          title="Dictionary Skills"
          description="Practise the key skills for using a dictionary: alphabetical order, guide words, matching definitions and spotting word classes."
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_LENGTH}
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
                    {SUBTYPE_LABEL[currentQ.subtype]}
                  </span>
                </div>
              </div>

              {/* Question card */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-3 text-center">
                <div className="inline-flex items-center gap-2 text-primary">
                  <BookA className="size-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {SUBTYPE_LABEL[currentQ.subtype]}
                  </span>
                </div>
                <p className="text-lg font-semibold text-foreground">{currentQ.prompt}</p>
                <p className="text-sm text-muted-foreground">{currentQ.hint}</p>
              </div>

              {/* Options */}
              <div
                className={cn(
                  'grid gap-3',
                  currentQ.options.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2',
                )}
              >
                {currentQ.options.map((option) => {
                  const isCorrectOption = option === currentQ.correct
                  const isSelected = option === selected
                  const showCorrect = !!feedback && isCorrectOption
                  const showWrong = !!feedback && isSelected && !isCorrectOption
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!feedback}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all outline-none',
                        'focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border text-foreground hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        !!feedback && !showCorrect && !showWrong && 'border-border opacity-60',
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
                      <CheckCircle className="size-4" /> Well done - that&apos;s right!
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> Not quite. The answer was:{' '}
                      <span className="font-bold">{currentQ.correct}</span>
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
