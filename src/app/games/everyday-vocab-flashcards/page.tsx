'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, Volume2, CheckCircle, XCircle, RotateCw, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Topic = 'People' | 'Places' | 'Time' | 'Actions' | 'Feelings' | 'Objects'

interface VocabCard {
  word: string
  partOfSpeech: string
  simpleDefinition: string
  exampleSentence: string
  topic: Topic
}

const VOCAB_BANK: VocabCard[] = [
  // People
  {
    word: 'family',
    partOfSpeech: 'noun',
    simpleDefinition: 'The group of people you are related to, such as parents and children.',
    exampleSentence: 'My family eats dinner together every evening.',
    topic: 'People',
  },
  {
    word: 'friend',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person you like and enjoy spending time with.',
    exampleSentence: 'My best friend lives next door.',
    topic: 'People',
  },
  {
    word: 'neighbour',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person who lives near you.',
    exampleSentence: 'Our neighbour helps us look after the garden.',
    topic: 'People',
  },
  {
    word: 'teacher',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person whose job is to help others learn.',
    exampleSentence: 'The teacher explained the lesson slowly.',
    topic: 'People',
  },
  {
    word: 'doctor',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person whose job is to help sick people get better.',
    exampleSentence: 'The doctor gave me some medicine.',
    topic: 'People',
  },
  {
    word: 'child',
    partOfSpeech: 'noun',
    simpleDefinition: 'A young person who is not yet an adult.',
    exampleSentence: 'The child played happily in the park.',
    topic: 'People',
  },
  {
    word: 'parent',
    partOfSpeech: 'noun',
    simpleDefinition: 'A mother or a father.',
    exampleSentence: 'Each parent signed the school form.',
    topic: 'People',
  },
  {
    word: 'colleague',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person you work with.',
    exampleSentence: 'My colleague helped me finish the report.',
    topic: 'People',
  },
  {
    word: 'stranger',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person you do not know.',
    exampleSentence: 'A stranger asked me for directions.',
    topic: 'People',
  },
  {
    word: 'customer',
    partOfSpeech: 'noun',
    simpleDefinition: 'A person who buys something from a shop.',
    exampleSentence: 'The shop was full of customers today.',
    topic: 'People',
  },

  // Places
  {
    word: 'home',
    partOfSpeech: 'noun',
    simpleDefinition: 'The place where you live.',
    exampleSentence: 'I go home after work.',
    topic: 'Places',
  },
  {
    word: 'school',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where children go to learn.',
    exampleSentence: 'The school is near the bus stop.',
    topic: 'Places',
  },
  {
    word: 'shop',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where you buy things.',
    exampleSentence: 'I bought bread at the shop.',
    topic: 'Places',
  },
  {
    word: 'street',
    partOfSpeech: 'noun',
    simpleDefinition: 'A road in a town with houses and buildings.',
    exampleSentence: 'They live on a quiet street.',
    topic: 'Places',
  },
  {
    word: 'hospital',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where sick people are looked after.',
    exampleSentence: 'She works at the hospital in town.',
    topic: 'Places',
  },
  {
    word: 'station',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where trains or buses stop.',
    exampleSentence: 'We waited at the station for the train.',
    topic: 'Places',
  },
  {
    word: 'office',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place where people work at desks.',
    exampleSentence: 'My office is on the second floor.',
    topic: 'Places',
  },
  {
    word: 'kitchen',
    partOfSpeech: 'noun',
    simpleDefinition: 'The room where you cook food.',
    exampleSentence: 'The kitchen smells of fresh bread.',
    topic: 'Places',
  },
  {
    word: 'garden',
    partOfSpeech: 'noun',
    simpleDefinition: 'An area of ground near a house for plants.',
    exampleSentence: 'We grow vegetables in the garden.',
    topic: 'Places',
  },
  {
    word: 'market',
    partOfSpeech: 'noun',
    simpleDefinition: 'A place, often outdoors, where people sell food and goods.',
    exampleSentence: 'The market is busy on Saturday mornings.',
    topic: 'Places',
  },

  // Time
  {
    word: 'today',
    partOfSpeech: 'adverb',
    simpleDefinition: 'On this day.',
    exampleSentence: 'I have an exam today.',
    topic: 'Time',
  },
  {
    word: 'tomorrow',
    partOfSpeech: 'adverb',
    simpleDefinition: 'On the day after today.',
    exampleSentence: 'We will meet tomorrow.',
    topic: 'Time',
  },
  {
    word: 'yesterday',
    partOfSpeech: 'adverb',
    simpleDefinition: 'On the day before today.',
    exampleSentence: 'It rained a lot yesterday.',
    topic: 'Time',
  },
  {
    word: 'morning',
    partOfSpeech: 'noun',
    simpleDefinition: 'The early part of the day, before noon.',
    exampleSentence: 'I drink tea every morning.',
    topic: 'Time',
  },
  {
    word: 'evening',
    partOfSpeech: 'noun',
    simpleDefinition: 'The end of the day, before night.',
    exampleSentence: 'We watch television in the evening.',
    topic: 'Time',
  },
  {
    word: 'week',
    partOfSpeech: 'noun',
    simpleDefinition: 'A period of seven days.',
    exampleSentence: 'I work five days a week.',
    topic: 'Time',
  },
  {
    word: 'month',
    partOfSpeech: 'noun',
    simpleDefinition: 'One of the twelve parts of a year.',
    exampleSentence: 'My birthday is next month.',
    topic: 'Time',
  },
  {
    word: 'year',
    partOfSpeech: 'noun',
    simpleDefinition: 'A period of twelve months.',
    exampleSentence: 'She has lived here for one year.',
    topic: 'Time',
  },
  {
    word: 'hour',
    partOfSpeech: 'noun',
    simpleDefinition: 'A period of sixty minutes.',
    exampleSentence: 'The film lasts about two hours.',
    topic: 'Time',
  },
  {
    word: 'early',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Before the usual or expected time.',
    exampleSentence: 'I woke up early to catch the bus.',
    topic: 'Time',
  },

  // Actions
  {
    word: 'eat',
    partOfSpeech: 'verb',
    simpleDefinition: 'To put food in your mouth and swallow it.',
    exampleSentence: 'We eat lunch at one o’clock.',
    topic: 'Actions',
  },
  {
    word: 'drink',
    partOfSpeech: 'verb',
    simpleDefinition: 'To take liquid into your mouth and swallow it.',
    exampleSentence: 'Please drink some water.',
    topic: 'Actions',
  },
  {
    word: 'walk',
    partOfSpeech: 'verb',
    simpleDefinition: 'To move forward on your feet.',
    exampleSentence: 'I walk to school every day.',
    topic: 'Actions',
  },
  {
    word: 'speak',
    partOfSpeech: 'verb',
    simpleDefinition: 'To say words and use your voice.',
    exampleSentence: 'Can you speak more slowly, please?',
    topic: 'Actions',
  },
  {
    word: 'listen',
    partOfSpeech: 'verb',
    simpleDefinition: 'To pay attention to a sound.',
    exampleSentence: 'I listen to music on the train.',
    topic: 'Actions',
  },
  {
    word: 'read',
    partOfSpeech: 'verb',
    simpleDefinition: 'To look at words and understand them.',
    exampleSentence: 'She likes to read before bed.',
    topic: 'Actions',
  },
  {
    word: 'write',
    partOfSpeech: 'verb',
    simpleDefinition: 'To make words on paper or a screen.',
    exampleSentence: 'Please write your name here.',
    topic: 'Actions',
  },
  {
    word: 'buy',
    partOfSpeech: 'verb',
    simpleDefinition: 'To get something by paying money for it.',
    exampleSentence: 'I want to buy a new coat.',
    topic: 'Actions',
  },
  {
    word: 'help',
    partOfSpeech: 'verb',
    simpleDefinition: 'To do something useful for someone.',
    exampleSentence: 'Can you help me carry this bag?',
    topic: 'Actions',
  },
  {
    word: 'learn',
    partOfSpeech: 'verb',
    simpleDefinition: 'To get new knowledge or a new skill.',
    exampleSentence: 'I want to learn English well.',
    topic: 'Actions',
  },
  {
    word: 'work',
    partOfSpeech: 'verb',
    simpleDefinition: 'To do a job to earn money.',
    exampleSentence: 'My parents work in a hospital.',
    topic: 'Actions',
  },
  {
    word: 'sleep',
    partOfSpeech: 'verb',
    simpleDefinition: 'To rest with your eyes closed at night.',
    exampleSentence: 'Babies sleep a lot during the day.',
    topic: 'Actions',
  },

  // Feelings
  {
    word: 'happy',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling good and pleased.',
    exampleSentence: 'She was happy to see her friends.',
    topic: 'Feelings',
  },
  {
    word: 'sad',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling unhappy.',
    exampleSentence: 'He felt sad when the holiday ended.',
    topic: 'Feelings',
  },
  {
    word: 'tired',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling that you need to rest or sleep.',
    exampleSentence: 'I am tired after the long walk.',
    topic: 'Feelings',
  },
  {
    word: 'angry',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling strong displeasure.',
    exampleSentence: 'He was angry about the late train.',
    topic: 'Feelings',
  },
  {
    word: 'afraid',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling fear or worry.',
    exampleSentence: 'She is afraid of large dogs.',
    topic: 'Feelings',
  },
  {
    word: 'excited',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling very happy about something that will happen.',
    exampleSentence: 'The children were excited about the trip.',
    topic: 'Feelings',
  },
  {
    word: 'worried',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling unhappy because you think something bad might happen.',
    exampleSentence: 'I am worried about the test tomorrow.',
    topic: 'Feelings',
  },
  {
    word: 'bored',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling tired because something is not interesting.',
    exampleSentence: 'He felt bored during the long meeting.',
    topic: 'Feelings',
  },
  {
    word: 'proud',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling pleased about something good you did.',
    exampleSentence: 'She was proud of her exam result.',
    topic: 'Feelings',
  },
  {
    word: 'calm',
    partOfSpeech: 'adjective',
    simpleDefinition: 'Feeling relaxed and not worried.',
    exampleSentence: 'Take a deep breath and stay calm.',
    topic: 'Feelings',
  },

  // Objects
  {
    word: 'book',
    partOfSpeech: 'noun',
    simpleDefinition: 'A set of printed pages that you read.',
    exampleSentence: 'I am reading an interesting book.',
    topic: 'Objects',
  },
  {
    word: 'phone',
    partOfSpeech: 'noun',
    simpleDefinition: 'A device used to call and message people.',
    exampleSentence: 'My phone is on the table.',
    topic: 'Objects',
  },
  {
    word: 'key',
    partOfSpeech: 'noun',
    simpleDefinition: 'A small metal object used to open a lock.',
    exampleSentence: 'I cannot find my house key.',
    topic: 'Objects',
  },
  {
    word: 'bag',
    partOfSpeech: 'noun',
    simpleDefinition: 'A container you carry things in.',
    exampleSentence: 'She put the shopping in her bag.',
    topic: 'Objects',
  },
  {
    word: 'chair',
    partOfSpeech: 'noun',
    simpleDefinition: 'A seat for one person.',
    exampleSentence: 'Please sit on this chair.',
    topic: 'Objects',
  },
  {
    word: 'table',
    partOfSpeech: 'noun',
    simpleDefinition: 'A piece of furniture with a flat top and legs.',
    exampleSentence: 'Dinner is on the table.',
    topic: 'Objects',
  },
  {
    word: 'water',
    partOfSpeech: 'noun',
    simpleDefinition: 'The clear liquid that we drink.',
    exampleSentence: 'Please give me a glass of water.',
    topic: 'Objects',
  },
  {
    word: 'money',
    partOfSpeech: 'noun',
    simpleDefinition: 'Coins and notes used to buy things.',
    exampleSentence: 'I keep my money in a safe place.',
    topic: 'Objects',
  },
  {
    word: 'clock',
    partOfSpeech: 'noun',
    simpleDefinition: 'A device that shows the time.',
    exampleSentence: 'The clock on the wall is slow.',
    topic: 'Objects',
  },
  {
    word: 'door',
    partOfSpeech: 'noun',
    simpleDefinition: 'The part of a building you open to go in or out.',
    exampleSentence: 'Please close the door quietly.',
    topic: 'Objects',
  },
  {
    word: 'window',
    partOfSpeech: 'noun',
    simpleDefinition: 'A glass opening in a wall that lets in light.',
    exampleSentence: 'Open the window for some fresh air.',
    topic: 'Objects',
  },
  {
    word: 'letter',
    partOfSpeech: 'noun',
    simpleDefinition: 'A written message you send to someone.',
    exampleSentence: 'I posted a letter to my friend.',
    topic: 'Objects',
  },
]

const ROUND_SIZE = 14

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

const TOPIC_STYLES: Record<Topic, string> = {
  People: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  Places: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  Time: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
  Actions: 'text-clay-600 border-amber-500/30 bg-amber-500/10',
  Feelings: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
  Objects: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function EverydayVocabFlashcardsPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [queue, setQueue] = useState<VocabCard[]>([])
  const [flipped, setFlipped] = useState(false)
  const [knownWords, setKnownWords] = useState<Set<string>>(new Set())
  const [seenWords, setSeenWords] = useState<Set<string>>(new Set())
  const [feedback, setFeedback] = useState<'known' | 'unknown' | null>(null)

  const roundTotal = useMemo(() => Math.min(ROUND_SIZE, VOCAB_BANK.length), [])
  const currentCard = queue[0] ?? null
  const score = knownWords.size

  const handleStart = useCallback(() => {
    const selected = shuffle(VOCAB_BANK).slice(0, roundTotal)
    setQueue(selected)
    setFlipped(false)
    setKnownWords(new Set())
    setSeenWords(new Set())
    setFeedback(null)
    setGameState('playing')
  }, [roundTotal])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleMark = useCallback(
    (knew: boolean) => {
      if (!currentCard || feedback) return
      setFeedback(knew ? 'known' : 'unknown')

      setSeenWords((prev) => {
        const next = new Set(prev)
        next.add(currentCard.word)
        return next
      })

      if (knew) {
        setKnownWords((prev) => {
          const next = new Set(prev)
          next.add(currentCard.word)
          return next
        })
      }

      setTimeout(() => {
        setQueue((prev) => {
          const [, ...rest] = prev
          // Spaced repetition: re-queue unknown cards further back in the round
          const requeued = knew ? rest : [...rest, currentCard]
          if (requeued.length === 0) {
            setGameState('finished')
            return []
          }
          return requeued
        })
        setFlipped(false)
        setFeedback(null)
      }, 850)
    },
    [currentCard, feedback],
  )

  const progressTotal = seenWords.size + queue.length
  const progressDone = seenWords.size

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
          gameId="everyday-vocab-flashcards"
          title="Everyday Vocabulary Flashcards"
          description="See an everyday English word and an example sentence. Think of the meaning, tap the card to check, then tell us whether you knew it. Words you miss come back again."
          difficulty="Foundation"
          score={score}
          maxScore={roundTotal}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {currentCard && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Card {Math.min(progressDone + 1, progressTotal)} of {progressTotal}
                </span>
                <div className="flex items-center gap-3">
                  <span>{score} known</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      TOPIC_STYLES[currentCard.topic],
                    )}
                  >
                    {currentCard.topic}
                  </span>
                </div>
              </div>

              {/* Flashcard */}
              <button
                type="button"
                onClick={() => !feedback && setFlipped((f) => !f)}
                disabled={!!feedback}
                className={cn(
                  'group w-full rounded-2xl border p-8 text-center transition-all duration-200 min-h-[260px] flex flex-col items-center justify-center gap-4',
                  feedback === 'known' && 'border-emerald-500 bg-emerald-500/10',
                  feedback === 'unknown' && 'border-rose-500 bg-rose-500/10',
                  !feedback && 'border-border bg-card hover:border-primary/50 hover:bg-accent',
                )}
              >
                {!flipped ? (
                  <>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      What does this word mean?
                    </span>
                    <span className="text-4xl font-bold text-foreground">{currentCard.word}</span>
                    <span className="text-sm italic text-muted-foreground">
                      &ldquo;{currentCard.exampleSentence}&rdquo;
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                      <RotateCw className="size-3.5" /> Tap to reveal the meaning
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {currentCard.partOfSpeech}
                    </span>
                    <span className="text-2xl font-bold text-foreground">{currentCard.word}</span>
                    <span className="text-base text-foreground">
                      {currentCard.simpleDefinition}
                    </span>
                    <span className="text-sm italic text-muted-foreground">
                      &ldquo;{currentCard.exampleSentence}&rdquo;
                    </span>
                  </>
                )}
              </button>

              {/* Listen */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => speak(`${currentCard.word}. ${currentCard.exampleSentence}`)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <Volume2 className="size-4 text-primary" />
                  Hear the word
                </button>
              </div>

              {/* Self-mark */}
              {feedback ? (
                <div
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium',
                    feedback === 'known'
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-rose-400 bg-rose-500/10',
                  )}
                >
                  {feedback === 'known' ? (
                    <>
                      <CheckCircle className="size-4" /> Brilliant — that one is yours!
                    </>
                  ) : (
                    <>
                      <XCircle className="size-4" /> No worries — we&rsquo;ll show it again soon.
                    </>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleMark(false)}
                    className="border-rose-500/40 text-rose-400 hover:bg-rose-500/10"
                  >
                    <XCircle className="size-4 mr-1.5" />
                    Didn&rsquo;t know
                  </Button>
                  <Button
                    onClick={() => handleMark(true)}
                    className="bg-emerald-600 text-white hover:bg-emerald-600/85"
                  >
                    <CheckCircle className="size-4 mr-1.5" />I knew it
                  </Button>
                </div>
              )}

              {!flipped && !feedback && (
                <p className="text-center text-xs text-muted-foreground">
                  Tip: flip the card first to check the meaning before you mark it.
                </p>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
