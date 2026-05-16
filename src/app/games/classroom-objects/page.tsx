'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, Volume2, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface ClassroomItem {
  emoji: string
  word: string
  distractors: [string, string, string]
  /** Optional "Where is the ___?" preposition mini-round */
  prepositionPrompt?: string
}

// Original bank of UK-English classroom & school vocabulary (A1–A2).
const ITEM_BANK: ClassroomItem[] = [
  {
    emoji: '✏️',
    word: 'pencil',
    distractors: ['pen', 'crayon', 'marker'],
    prepositionPrompt: 'The pencil is on the desk.',
  },
  { emoji: '🖊️', word: 'pen', distractors: ['pencil', 'brush', 'ruler'] },
  {
    emoji: '📏',
    word: 'ruler',
    distractors: ['pencil', 'rubber', 'stapler'],
    prepositionPrompt: 'The ruler is in the pencil case.',
  },
  { emoji: '🧽', word: 'rubber', distractors: ['sponge', 'cloth', 'glue'] },
  { emoji: '✂️', word: 'scissors', distractors: ['knife', 'stapler', 'clip'] },
  {
    emoji: '📚',
    word: 'books',
    distractors: ['boxes', 'bricks', 'bags'],
    prepositionPrompt: 'The books are on the shelf.',
  },
  { emoji: '📖', word: 'textbook', distractors: ['notebook', 'diary', 'magazine'] },
  { emoji: '📓', word: 'notebook', distractors: ['textbook', 'folder', 'envelope'] },
  { emoji: '📒', word: 'exercise book', distractors: ['diary', 'wallet', 'poster'] },
  {
    emoji: '🎒',
    word: 'school bag',
    distractors: ['suitcase', 'basket', 'pocket'],
    prepositionPrompt: 'The school bag is under the chair.',
  },
  { emoji: '🖍️', word: 'crayon', distractors: ['chalk', 'pen', 'pin'] },
  { emoji: '🖌️', word: 'paintbrush', distractors: ['pencil', 'feather', 'broom'] },
  { emoji: '🎨', word: 'paints', distractors: ['inks', 'dyes', 'crayons'] },
  { emoji: '📐', word: 'set square', distractors: ['ruler', 'compass', 'protractor'] },
  { emoji: '🧮', word: 'abacus', distractors: ['calculator', 'clock', 'till'] },
  { emoji: '🗒️', word: 'notepad', distractors: ['letter', 'card', 'leaflet'] },
  { emoji: '📝', word: 'worksheet', distractors: ['poster', 'ticket', 'receipt'] },
  { emoji: '📎', word: 'paper clip', distractors: ['drawing pin', 'staple', 'peg'] },
  { emoji: '📌', word: 'drawing pin', distractors: ['needle', 'nail', 'paper clip'] },
  { emoji: '🗂️', word: 'folder', distractors: ['drawer', 'box', 'tray'] },
  { emoji: '📁', word: 'file', distractors: ['folder', 'shelf', 'cupboard'] },
  { emoji: '📋', word: 'clipboard', distractors: ['whiteboard', 'noticeboard', 'tray'] },
  { emoji: '🖇️', word: 'stapler', distractors: ['hole punch', 'clip', 'tape'] },
  { emoji: '📐', word: 'protractor', distractors: ['ruler', 'compass', 'set square'] },
  { emoji: '🧴', word: 'glue', distractors: ['paint', 'ink', 'water'] },
  { emoji: '🪣', word: 'bucket', distractors: ['bin', 'bowl', 'jug'] },
  {
    emoji: '🗑️',
    word: 'bin',
    distractors: ['bucket', 'box', 'basket'],
    prepositionPrompt: 'The bin is next to the door.',
  },
  {
    emoji: '🪑',
    word: 'chair',
    distractors: ['stool', 'bench', 'sofa'],
    prepositionPrompt: 'The bag is under the chair.',
  },
  { emoji: '🛗', word: 'lift', distractors: ['stairs', 'door', 'ramp'] },
  {
    emoji: '🚪',
    word: 'door',
    distractors: ['window', 'wall', 'gate'],
    prepositionPrompt: 'The teacher is next to the door.',
  },
  {
    emoji: '🪟',
    word: 'window',
    distractors: ['door', 'mirror', 'screen'],
    prepositionPrompt: 'The plant is on the window.',
  },
  {
    emoji: '🕰️',
    word: 'clock',
    distractors: ['watch', 'timer', 'bell'],
    prepositionPrompt: 'The clock is on the wall.',
  },
  { emoji: '🔔', word: 'bell', distractors: ['clock', 'horn', 'alarm'] },
  { emoji: '💡', word: 'light', distractors: ['lamp', 'torch', 'candle'] },
  {
    emoji: '🖥️',
    word: 'computer',
    distractors: ['television', 'radio', 'phone'],
    prepositionPrompt: 'The computer is on the desk.',
  },
  { emoji: '⌨️', word: 'keyboard', distractors: ['screen', 'mouse', 'printer'] },
  { emoji: '🖱️', word: 'mouse', distractors: ['keyboard', 'remote', 'plug'] },
  { emoji: '🖨️', word: 'printer', distractors: ['scanner', 'computer', 'speaker'] },
  { emoji: '📽️', word: 'projector', distractors: ['camera', 'screen', 'torch'] },
  {
    emoji: '🗺️',
    word: 'map',
    distractors: ['poster', 'painting', 'chart'],
    prepositionPrompt: 'The map is on the wall.',
  },
  {
    emoji: '🌍',
    word: 'globe',
    distractors: ['ball', 'map', 'lamp'],
    prepositionPrompt: 'The globe is on the shelf.',
  },
  { emoji: '🔬', word: 'microscope', distractors: ['telescope', 'camera', 'magnet'] },
  { emoji: '🧲', word: 'magnet', distractors: ['battery', 'bell', 'clip'] },
  { emoji: '🔭', word: 'telescope', distractors: ['microscope', 'binoculars', 'lamp'] },
  { emoji: '🧪', word: 'test tube', distractors: ['bottle', 'jar', 'cup'] },
  {
    emoji: '📊',
    word: 'chart',
    distractors: ['map', 'list', 'photo'],
    prepositionPrompt: 'The chart is on the noticeboard.',
  },
  { emoji: '🏫', word: 'school', distractors: ['library', 'office', 'shop'] },
  { emoji: '🎓', word: 'graduation cap', distractors: ['hat', 'helmet', 'crown'] },
  {
    emoji: '🪧',
    word: 'noticeboard',
    distractors: ['whiteboard', 'clipboard', 'mirror'],
    prepositionPrompt: 'The noticeboard is on the wall.',
  },
  { emoji: '📞', word: 'telephone', distractors: ['radio', 'speaker', 'remote'] },
  { emoji: '🧹', word: 'broom', distractors: ['mop', 'brush', 'rake'] },
  { emoji: '🪞', word: 'mirror', distractors: ['window', 'screen', 'frame'] },
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

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-GB'
  utterance.rate = 0.85
  window.speechSynthesis.speak(utterance)
}

const QUESTIONS_PER_ROUND = 15

type Mode = 'name' | 'preposition'

interface Question {
  mode: Mode
  item: ClassroomItem
  prompt: string
  options: string[]
  answer: string
}

const PREP_OPTIONS = ['on', 'in', 'under', 'next to']

function buildQuestions(): Question[] {
  const pool = shuffle(ITEM_BANK).slice(0, QUESTIONS_PER_ROUND)
  return pool.map((item, idx) => {
    const usePrep = !!item.prepositionPrompt && idx % 3 === 1
    if (usePrep && item.prepositionPrompt) {
      // Extract the correct preposition from the example sentence.
      const lower = item.prepositionPrompt.toLowerCase()
      const correct = PREP_OPTIONS.find((p) => lower.includes(` ${p} `)) ?? 'on'
      // "The clock is on the wall." → "Where is the clock? It is ___ the wall."
      const place = item.prepositionPrompt
        .replace(/^The .+? (is|are) (on|in|under|next to) (the .+)\.$/i, '$3')
        .replace(/\.$/, '')
      return {
        mode: 'preposition' as const,
        item,
        prompt: `Where is the ${item.word}? It is ___ ${place}.`,
        options: shuffle(PREP_OPTIONS),
        answer: correct,
      }
    }
    return {
      mode: 'name' as const,
      item,
      prompt: 'Which word matches the picture?',
      options: shuffle([item.word, ...item.distractors]),
      answer: item.word,
    }
  })
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ClassroomObjectsPage() {
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

  // Auto-speak the prompt / word when a new question appears.
  useEffect(() => {
    if (gameState === 'playing' && currentQ && !feedback) {
      const phrase = currentQ.mode === 'name' ? currentQ.item.word : currentQ.prompt
      const timer = setTimeout(() => speak(phrase), 300)
      return () => clearTimeout(timer)
    }
  }, [qIdx, gameState, feedback]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleStart = useCallback(() => {
    setQuestions(buildQuestions())
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
      if (!currentQ || feedback) return
      const correct = choice === currentQ.answer
      setSelected(choice)
      setTotalAnswered((t) => t + 1)
      if (correct) {
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
      }, 1600)
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
          gameId="classroom-objects"
          title="In the Classroom"
          description="Look at the picture and choose the correct English word. Some rounds ask where things are — on, in, under or next to!"
          difficulty="Foundation"
          score={score}
          maxScore={totalAnswered || questions.length || QUESTIONS_PER_ROUND}
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
                  <span>{accuracyPct}% correct</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      currentQ.mode === 'name'
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : 'text-clay-600 border-amber-500/30 bg-amber-500/10',
                    )}
                  >
                    {currentQ.mode === 'name' ? 'Vocabulary' : 'Where is it?'}
                  </span>
                </div>
              </div>

              {/* Picture / prompt card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
                <div className="text-7xl leading-none select-none" aria-hidden>
                  {currentQ.item.emoji}
                </div>
                <p className="text-base font-medium text-foreground">{currentQ.prompt}</p>
                <button
                  onClick={() =>
                    speak(currentQ.mode === 'name' ? currentQ.item.word : currentQ.prompt)
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <Volume2 className="size-4 text-primary" />
                  Listen
                </button>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => {
                  const isAnswer = opt === currentQ.answer
                  const isPicked = opt === selected
                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!feedback}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-center text-base font-medium text-foreground transition-all',
                        'hover:bg-accent disabled:cursor-not-allowed',
                        !feedback && 'border-border',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !isAnswer && !isPicked && 'opacity-50',
                      )}
                    >
                      {opt}
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
                      <CheckCircle className="size-4" /> Well done! That&apos;s right.
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> Not quite — the answer is{' '}
                      <span className="font-bold">{currentQ.answer}</span>. Keep going!
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
