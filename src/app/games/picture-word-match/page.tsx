'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface PictureItem {
  emoji: string
  word: string
  topic: string
  distractors: [string, string, string]
}

const PICTURE_BANK: PictureItem[] = [
  // Food & drink
  { emoji: '🍎', word: 'apple', topic: 'Food & drink', distractors: ['orange', 'banana', 'pear'] },
  { emoji: '🍞', word: 'bread', topic: 'Food & drink', distractors: ['cheese', 'butter', 'rice'] },
  { emoji: '🥛', word: 'milk', topic: 'Food & drink', distractors: ['water', 'juice', 'tea'] },
  { emoji: '🧀', word: 'cheese', topic: 'Food & drink', distractors: ['egg', 'bread', 'ham'] },
  {
    emoji: '🍓',
    word: 'strawberry',
    topic: 'Food & drink',
    distractors: ['cherry', 'grape', 'plum'],
  },
  {
    emoji: '🥕',
    word: 'carrot',
    topic: 'Food & drink',
    distractors: ['potato', 'onion', 'tomato'],
  },
  { emoji: '🍵', word: 'tea', topic: 'Food & drink', distractors: ['coffee', 'soup', 'milk'] },
  { emoji: '🥚', word: 'egg', topic: 'Food & drink', distractors: ['cheese', 'bean', 'nut'] },

  // Animals
  { emoji: '🐶', word: 'dog', topic: 'Animals', distractors: ['cat', 'fox', 'wolf'] },
  { emoji: '🐱', word: 'cat', topic: 'Animals', distractors: ['dog', 'rabbit', 'mouse'] },
  { emoji: '🐮', word: 'cow', topic: 'Animals', distractors: ['sheep', 'horse', 'pig'] },
  { emoji: '🐴', word: 'horse', topic: 'Animals', distractors: ['cow', 'donkey', 'goat'] },
  { emoji: '🐑', word: 'sheep', topic: 'Animals', distractors: ['goat', 'cow', 'pig'] },
  { emoji: '🐦', word: 'bird', topic: 'Animals', distractors: ['fish', 'bee', 'bat'] },
  { emoji: '🐟', word: 'fish', topic: 'Animals', distractors: ['frog', 'crab', 'bird'] },
  { emoji: '🐝', word: 'bee', topic: 'Animals', distractors: ['ant', 'fly', 'wasp'] },

  // Family
  { emoji: '👩', word: 'mother', topic: 'Family', distractors: ['sister', 'aunt', 'daughter'] },
  { emoji: '👨', word: 'father', topic: 'Family', distractors: ['brother', 'uncle', 'son'] },
  { emoji: '👶', word: 'baby', topic: 'Family', distractors: ['child', 'cousin', 'twin'] },
  {
    emoji: '👵',
    word: 'grandmother',
    topic: 'Family',
    distractors: ['grandfather', 'aunt', 'mother'],
  },
  {
    emoji: '👴',
    word: 'grandfather',
    topic: 'Family',
    distractors: ['grandmother', 'uncle', 'father'],
  },
  { emoji: '👧', word: 'daughter', topic: 'Family', distractors: ['son', 'sister', 'niece'] },

  // The home
  { emoji: '🏠', word: 'house', topic: 'The home', distractors: ['garden', 'room', 'door'] },
  { emoji: '🚪', word: 'door', topic: 'The home', distractors: ['window', 'wall', 'roof'] },
  { emoji: '🛏️', word: 'bed', topic: 'The home', distractors: ['chair', 'sofa', 'table'] },
  { emoji: '🪑', word: 'chair', topic: 'The home', distractors: ['bed', 'shelf', 'desk'] },
  { emoji: '🛁', word: 'bath', topic: 'The home', distractors: ['sink', 'shower', 'mirror'] },
  { emoji: '🕰️', word: 'clock', topic: 'The home', distractors: ['lamp', 'shelf', 'mirror'] },
  { emoji: '🔑', word: 'key', topic: 'The home', distractors: ['lock', 'handle', 'bell'] },

  // The body
  { emoji: '✋', word: 'hand', topic: 'The body', distractors: ['foot', 'arm', 'leg'] },
  { emoji: '👁️', word: 'eye', topic: 'The body', distractors: ['ear', 'nose', 'mouth'] },
  { emoji: '👂', word: 'ear', topic: 'The body', distractors: ['eye', 'nose', 'chin'] },
  { emoji: '👃', word: 'nose', topic: 'The body', distractors: ['mouth', 'eye', 'ear'] },
  { emoji: '🦶', word: 'foot', topic: 'The body', distractors: ['hand', 'leg', 'knee'] },
  { emoji: '🦷', word: 'tooth', topic: 'The body', distractors: ['tongue', 'lip', 'jaw'] },
  { emoji: '💇', word: 'hair', topic: 'The body', distractors: ['head', 'face', 'neck'] },

  // Clothes
  { emoji: '👕', word: 'shirt', topic: 'Clothes', distractors: ['coat', 'jumper', 'dress'] },
  { emoji: '👖', word: 'trousers', topic: 'Clothes', distractors: ['shorts', 'skirt', 'socks'] },
  { emoji: '👗', word: 'dress', topic: 'Clothes', distractors: ['skirt', 'shirt', 'coat'] },
  { emoji: '👟', word: 'shoes', topic: 'Clothes', distractors: ['socks', 'boots', 'gloves'] },
  { emoji: '🧥', word: 'coat', topic: 'Clothes', distractors: ['jumper', 'shirt', 'scarf'] },
  { emoji: '🧦', word: 'socks', topic: 'Clothes', distractors: ['shoes', 'gloves', 'shorts'] },
  { emoji: '🧢', word: 'cap', topic: 'Clothes', distractors: ['hat', 'scarf', 'belt'] },

  // Weather
  { emoji: '☀️', word: 'sun', topic: 'Weather', distractors: ['rain', 'cloud', 'snow'] },
  { emoji: '🌧️', word: 'rain', topic: 'Weather', distractors: ['snow', 'sun', 'wind'] },
  { emoji: '❄️', word: 'snow', topic: 'Weather', distractors: ['rain', 'ice', 'fog'] },
  { emoji: '⛅', word: 'cloud', topic: 'Weather', distractors: ['sun', 'rain', 'sky'] },
  { emoji: '🌈', word: 'rainbow', topic: 'Weather', distractors: ['cloud', 'storm', 'sky'] },
  { emoji: '⚡', word: 'lightning', topic: 'Weather', distractors: ['thunder', 'wind', 'rain'] },

  // Transport
  { emoji: '🚗', word: 'car', topic: 'Transport', distractors: ['bus', 'van', 'lorry'] },
  { emoji: '🚌', word: 'bus', topic: 'Transport', distractors: ['car', 'train', 'taxi'] },
  {
    emoji: '🚲',
    word: 'bicycle',
    topic: 'Transport',
    distractors: ['motorbike', 'scooter', 'car'],
  },
  {
    emoji: '✈️',
    word: 'aeroplane',
    topic: 'Transport',
    distractors: ['helicopter', 'rocket', 'boat'],
  },
  { emoji: '🚂', word: 'train', topic: 'Transport', distractors: ['tram', 'bus', 'lorry'] },
  { emoji: '🚢', word: 'ship', topic: 'Transport', distractors: ['boat', 'plane', 'train'] },
  { emoji: '🚕', word: 'taxi', topic: 'Transport', distractors: ['bus', 'car', 'van'] },

  // School
  { emoji: '📚', word: 'books', topic: 'School', distractors: ['pens', 'bags', 'rulers'] },
  { emoji: '✏️', word: 'pencil', topic: 'School', distractors: ['pen', 'ruler', 'rubber'] },
  { emoji: '🎒', word: 'bag', topic: 'School', distractors: ['book', 'desk', 'pencil case'] },
  { emoji: '✂️', word: 'scissors', topic: 'School', distractors: ['glue', 'ruler', 'tape'] },
  { emoji: '📏', word: 'ruler', topic: 'School', distractors: ['pencil', 'rubber', 'pen'] },
  { emoji: '🖍️', word: 'crayon', topic: 'School', distractors: ['pencil', 'paint', 'chalk'] },
  { emoji: '🧮', word: 'abacus', topic: 'School', distractors: ['calculator', 'clock', 'ruler'] },
]

const QUESTIONS_PER_ROUND = 15

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
  item: PictureItem
  options: string[]
}

function buildQuestion(item: PictureItem): Question {
  return { item, options: shuffle([item.word, ...item.distractors]) }
}

const PRAISE = ['Brilliant!', 'Well done!', 'Great job!', 'Super!', 'Excellent!']

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PictureWordMatchPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [praise, setPraise] = useState('')

  const currentQuestion = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const picked = shuffle(PICTURE_BANK).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(picked.map(buildQuestion))
    setQIdx(0)
    setScore(0)
    setSelected(null)
    setFeedback(null)
    setPraise('')
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleAnswer = useCallback(
    (option: string) => {
      if (!currentQuestion || feedback) return
      setSelected(option)
      const isCorrect = option === currentQuestion.item.word

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
    [currentQuestion, feedback, qIdx, questions.length],
  )

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
          gameId="picture-word-match"
          title="Picture Word Match"
          description="Look at the picture and tap the English word that matches it. A friendly way to build everyday vocabulary."
          difficulty="Foundation"
          score={score}
          maxScore={questions.length || QUESTIONS_PER_ROUND}
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
                  <span>Score: {score}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                    {currentQuestion.item.topic}
                  </span>
                </div>
              </div>

              {/* Picture card */}
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div
                  className="text-7xl sm:text-8xl select-none"
                  role="img"
                  aria-label="Picture to match"
                >
                  {currentQuestion.item.emoji}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Which word matches this picture?
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((option) => {
                  const isAnswer = option === currentQuestion.item.word
                  const isPicked = option === selected
                  const showCorrect = !!feedback && isAnswer
                  const showWrong = feedback === 'wrong' && isPicked && !isAnswer
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={!!feedback}
                      className={cn(
                        'flex items-center justify-center rounded-lg border px-4 py-5 text-lg font-medium capitalize text-foreground transition-all',
                        'min-h-[64px] outline-none focus:ring-2 focus:ring-primary/20',
                        !feedback && 'border-border hover:border-primary hover:bg-accent',
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
                      <CheckCircle className="size-4" /> {praise} That&apos;s right.
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> Not quite. The word is:{' '}
                      <span className="font-bold capitalize">{currentQuestion.item.word}</span>
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
