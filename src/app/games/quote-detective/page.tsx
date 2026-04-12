'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

// ─── Quote Bank (30+ quotes from GCSE set texts) ──────────────────────────────

interface QuoteEntry {
  quote: string
  text: string
}

const QUOTE_BANK: QuoteEntry[] = [
  // Macbeth
  { quote: 'Is this a dagger which I see before me, the handle toward my hand?', text: 'Macbeth' },
  { quote: 'Out, out, brief candle! Life\'s but a walking shadow.', text: 'Macbeth' },
  { quote: 'Look like the innocent flower, but be the serpent under\'t.', text: 'Macbeth' },
  { quote: 'Will all great Neptune\'s ocean wash this blood clean from my hand?', text: 'Macbeth' },
  { quote: 'Fair is foul, and foul is fair.', text: 'Macbeth' },
  // An Inspector Calls
  { quote: 'We are members of one body. We are responsible for each other.', text: 'An Inspector Calls' },
  { quote: 'They will be taught it in fire and blood and anguish.', text: 'An Inspector Calls' },
  { quote: 'The young ones. They\'re more impressionable.', text: 'An Inspector Calls' },
  { quote: 'We are all responsible for each other.', text: 'An Inspector Calls' },
  // A Christmas Carol
  { quote: 'Are there no prisons? Are there no workhouses?', text: 'A Christmas Carol' },
  { quote: 'I wear the chain I forged in life. I made it link by link, and yard by yard.', text: 'A Christmas Carol' },
  { quote: 'Mankind was my business. The common welfare was my business.', text: 'A Christmas Carol' },
  { quote: 'He was as solitary as an oyster.', text: 'A Christmas Carol' },
  { quote: 'I will honour Christmas in my heart, and try to keep it all the year.', text: 'A Christmas Carol' },
  // Jekyll & Hyde
  { quote: 'Man is not truly one, but truly two.', text: 'Jekyll and Hyde' },
  { quote: 'If he be Mr Hyde, I shall be Mr Seek.', text: 'Jekyll and Hyde' },
  { quote: 'Satan\'s signature upon a face.', text: 'Jekyll and Hyde' },
  { quote: 'I felt younger, lighter, happier in body.', text: 'Jekyll and Hyde' },
  // Romeo & Juliet
  { quote: 'But soft, what light through yonder window breaks?', text: 'Romeo and Juliet' },
  { quote: 'A plague o\' both your houses!', text: 'Romeo and Juliet' },
  { quote: 'These violent delights have violent ends.', text: 'Romeo and Juliet' },
  { quote: 'My only love sprung from my only hate!', text: 'Romeo and Juliet' },
  { quote: 'Parting is such sweet sorrow.', text: 'Romeo and Juliet' },
  // Animal Farm
  { quote: 'All animals are equal, but some animals are more equal than others.', text: 'Animal Farm' },
  { quote: 'Four legs good, two legs bad.', text: 'Animal Farm' },
  { quote: 'The creatures outside looked from pig to man, and from man to pig.', text: 'Animal Farm' },
  { quote: 'Napoleon is always right.', text: 'Animal Farm' },
  // Lord of the Flies
  { quote: 'Maybe there is a beast... maybe it\'s only us.', text: 'Lord of the Flies' },
  { quote: 'The thing is -- fear can\'t hurt you any more than a dream.', text: 'Lord of the Flies' },
  { quote: 'Ralph wept for the end of innocence, the darkness of man\'s heart.', text: 'Lord of the Flies' },
  { quote: 'Kill the beast! Cut his throat! Spill his blood!', text: 'Lord of the Flies' },
  // Of Mice and Men
  { quote: 'A guy needs somebody -- to be near him. A guy goes nuts if he ain\'t got nobody.', text: 'Of Mice and Men' },
  { quote: 'I got you to look after me, and you got me to look after you.', text: 'Of Mice and Men' },
  { quote: 'Guys like us, that work on ranches, are the loneliest guys in the world.', text: 'Of Mice and Men' },
  { quote: 'Tell me about the rabbits, George.', text: 'Of Mice and Men' },
]

const ALL_TEXTS = [
  'Macbeth',
  'An Inspector Calls',
  'A Christmas Carol',
  'Jekyll and Hyde',
  'Romeo and Juliet',
  'Animal Farm',
  'Lord of the Flies',
  'Of Mice and Men',
]

// Map the quote bank's simplified display titles to canonical set-text slugs.
const TEXT_TO_SLUG: Record<string, string> = {
  'Macbeth': 'macbeth',
  'An Inspector Calls': 'an-inspector-calls',
  'A Christmas Carol': 'a-christmas-carol',
  'Jekyll and Hyde': 'jekyll-and-hyde',
  'Romeo and Juliet': 'romeo-and-juliet',
  'Animal Farm': 'animal-farm',
  'Lord of the Flies': 'lord-of-the-flies',
  'Of Mice and Men': 'of-mice-and-men',
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateOptions(correctText: string, pool: string[]): string[] {
  const wrong = shuffle(pool.filter((t) => t !== correctText)).slice(0, 3)
  return shuffle([correctText, ...wrong])
}

const QUESTIONS_PER_ROUND = 20

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function QuoteDetectivePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  // Filter quote bank by board: keep only quotes from texts the user studies.
  // Fall back to the full bank if the board has fewer than ~3 texts represented.
  const { filteredQuotes, filteredTexts, usingFallback } = useMemo(() => {
    if (!board) {
      return { filteredQuotes: QUOTE_BANK, filteredTexts: ALL_TEXTS, usingFallback: false }
    }
    const boardSlugs = new Set(getSetTextsForBoard(board).map((t) => t.slug))
    const allowedTextLabels = ALL_TEXTS.filter((label) => {
      const slug = TEXT_TO_SLUG[label]
      return slug ? boardSlugs.has(slug) : false
    })
    const filtered = QUOTE_BANK.filter((q) => allowedTextLabels.includes(q.text))
    // Need at least 3 distinct texts (for multiple-choice variety) and at least 10 quotes
    const distinctTexts = new Set(filtered.map((q) => q.text))
    if (filtered.length < 10 || distinctTexts.size < 3) {
      return { filteredQuotes: QUOTE_BANK, filteredTexts: ALL_TEXTS, usingFallback: true }
    }
    return { filteredQuotes: filtered, filteredTexts: allowedTextLabels, usingFallback: false }
  }, [board])

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<
    { quote: string; correctText: string; options: string[] }[]
  >([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const currentQ = questions[currentIndex] ?? null

  const handleStart = useCallback(() => {
    // Sample size — if filtered pool has fewer than 20 quotes, repeat the pool to reach
    // QUESTIONS_PER_ROUND so the user still gets a full game.
    const pool = [...filteredQuotes]
    while (pool.length < QUESTIONS_PER_ROUND) {
      pool.push(...filteredQuotes)
    }
    const shuffled = shuffle(pool).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(
      shuffled.map((q) => ({
        quote: q.quote,
        correctText: q.text,
        options: generateOptions(q.text, filteredTexts),
      }))
    )
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setShowFeedback(false)
    setGameState('playing')
  }, [filteredQuotes, filteredTexts])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (option: string) => {
      if (showFeedback || !currentQ) return
      setSelected(option)
      setShowFeedback(true)
      const correct = option === currentQ.correctText
      if (correct) setScore((s) => s + 1)

      setTimeout(() => {
        if (currentIndex + 1 >= questions.length) {
          setGameState('finished')
        } else {
          setCurrentIndex((i) => i + 1)
          setSelected(null)
          setShowFeedback(false)
        }
      }, 1200)
    },
    [showFeedback, currentQ, currentIndex, questions.length]
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Back nav + board badge */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <Button variant="ghost" size="sm" render={<Link href="/games" />}>
          <ArrowLeft className="size-4" />
          Back to Games
        </Button>
        {boardConfig && !usingFallback && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3" /> For {boardConfig.shortName}
          </span>
        )}
      </div>

      <GameShell
        gameId="quote-detective"
        title="Quote Detective"
        description="Identify which GCSE set text each quote is from. 20 questions, 60 seconds each."
        difficulty="Crossover"
        score={score}
        maxScore={QUESTIONS_PER_ROUND}
        timeLimitSeconds={60 * QUESTIONS_PER_ROUND}
        onStart={handleStart}
        onFinish={handleFinish}
        gameState={gameState}
      >
        {currentQ && (
          <div className="flex flex-col items-center gap-8">
            {/* Progress */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>
                Question {currentIndex + 1} of {questions.length}
              </span>
              <div className="h-1.5 w-48 rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="max-w-2xl rounded-xl border border-white/[0.06] bg-white/[0.02] px-8 py-6 text-center">
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                &ldquo;{currentQ.quote}&rdquo;
              </p>
            </blockquote>

            {/* Options */}
            <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {currentQ.options.map((option) => {
                const isCorrect = option === currentQ.correctText
                const isSelected = option === selected
                let style = 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                if (showFeedback) {
                  if (isCorrect)
                    style =
                      'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                  else if (isSelected)
                    style = 'border-red-500/40 bg-red-500/10 text-red-400'
                  else style = 'border-white/[0.04] bg-white/[0.01] opacity-50'
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    disabled={showFeedback}
                    className={cn(
                      'rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200',
                      style,
                      !showFeedback && 'cursor-pointer active:translate-y-px'
                    )}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </GameShell>
    </div>
  )
}
