'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Device =
  | 'simile'
  | 'metaphor'
  | 'personification'
  | 'alliteration'
  | 'onomatopoeia'
  | 'hyperbole'
  | 'oxymoron'
  | 'pun'

interface Question {
  sentence: string
  device: Device
  why: string
}

const DEVICE_LABELS: Record<Device, string> = {
  simile: 'Simile',
  metaphor: 'Metaphor',
  personification: 'Personification',
  alliteration: 'Alliteration',
  onomatopoeia: 'Onomatopoeia',
  hyperbole: 'Hyperbole',
  oxymoron: 'Oxymoron',
  pun: 'Pun',
}

const DEVICE_DEFINITIONS: Record<Device, string> = {
  simile: 'A comparison of two unlike things using "like" or "as".',
  metaphor: 'A direct comparison stating one thing is another, without "like" or "as".',
  personification: 'Giving human qualities or actions to something non-human.',
  alliteration: 'Repetition of the same initial consonant sound in nearby words.',
  onomatopoeia: 'A word that imitates the natural sound it describes.',
  hyperbole: 'Deliberate, obvious exaggeration for emphasis or effect.',
  oxymoron: 'Two contradictory terms placed together for effect.',
  pun: 'A play on words exploiting double meanings or similar sounds for humour.',
}

// All sentences below are original, written for this exercise.
const QUESTION_BANK: Question[] = [
  // ── Simile ──
  {
    sentence: 'The new pupil was as quiet as a switched-off radio on her first morning.',
    device: 'simile',
    why: 'It compares her quietness to a radio using the word "as".',
  },
  {
    sentence: 'My rucksack felt like a sack of bricks by the end of the school trip.',
    device: 'simile',
    why: 'It uses "like" to compare the heavy rucksack to a sack of bricks.',
  },
  {
    sentence: 'The frightened kitten trembled like a leaf caught in an autumn gale.',
    device: 'simile',
    why: 'The kitten\'s trembling is compared to a leaf using "like".',
  },
  {
    sentence: 'Her explanation was as clear as a freshly cleaned window.',
    device: 'simile',
    why: 'Clarity is compared to a clean window using "as".',
  },
  {
    sentence: 'The athlete shot off the starting line like an arrow loosed from a bow.',
    device: 'simile',
    why: 'His speed is compared to an arrow using "like".',
  },
  {
    sentence: 'The old floorboards were as cold as a frozen pond beneath our bare feet.',
    device: 'simile',
    why: 'The coldness is compared to a frozen pond using "as".',
  },
  {
    sentence: 'The classroom buzzed like a beehive whenever the teacher stepped out.',
    device: 'simile',
    why: 'The noisy room is compared to a beehive using "like".',
  },

  // ── Metaphor ──
  {
    sentence: 'The library was a treasure chest waiting to be unlocked by curious minds.',
    device: 'metaphor',
    why: 'It directly calls the library a treasure chest, with no "like" or "as".',
  },
  {
    sentence: 'My grandfather is a walking encyclopaedia of village history.',
    device: 'metaphor',
    why: 'He is stated to be an encyclopaedia, a direct comparison.',
  },
  {
    sentence: 'The exam hall was a desert of silent, sweating students.',
    device: 'metaphor',
    why: 'The hall is directly described as a desert.',
  },
  {
    sentence: 'Fear is a thief that steals your best ideas during a presentation.',
    device: 'metaphor',
    why: 'Fear is directly called a thief without using "like" or "as".',
  },
  {
    sentence: 'The internet is an ocean, and most of us only paddle in the shallows.',
    device: 'metaphor',
    why: 'The internet is directly equated with an ocean.',
  },
  {
    sentence: 'Her words were daggers that found every weak point in his argument.',
    device: 'metaphor',
    why: 'Her words are directly called daggers.',
  },
  {
    sentence: 'The motorway was a ribbon of red brake lights winding into the night.',
    device: 'metaphor',
    why: 'The motorway is directly described as a ribbon.',
  },

  // ── Personification ──
  {
    sentence: 'The wind hammered angrily at the windows, demanding to be let inside.',
    device: 'personification',
    why: 'The wind is given the human emotions of anger and demanding.',
  },
  {
    sentence: 'The ancient clock groaned before it reluctantly chimed the hour.',
    device: 'personification',
    why: 'The clock is given human actions: groaning and being reluctant.',
  },
  {
    sentence: 'Opportunity knocked softly, but nobody in the office bothered to answer.',
    device: 'personification',
    why: 'Opportunity is given the human action of knocking.',
  },
  {
    sentence: 'The hungry waves snatched at the sandcastle until nothing remained.',
    device: 'personification',
    why: 'The waves are described as hungry and snatching, like a person.',
  },
  {
    sentence: 'Dawn tiptoed over the hills, careful not to wake the sleeping town.',
    device: 'personification',
    why: 'Dawn is given the human action of tiptoeing carefully.',
  },
  {
    sentence: 'The stubborn jar refused to open no matter how hard she twisted the lid.',
    device: 'personification',
    why: 'The jar is given the human quality of being stubborn and refusing.',
  },
  {
    sentence: 'My alarm clock screamed at me, furious that I had ignored it twice.',
    device: 'personification',
    why: 'The clock is described as screaming and furious, human traits.',
  },

  // ── Alliteration ──
  {
    sentence: 'The brave builders battled bitter blizzards to finish the bridge.',
    device: 'alliteration',
    why: 'The repeated "b" sound at the start of several words is alliteration.',
  },
  {
    sentence: 'Silly Sam sold seven slippery snails on Saturday.',
    device: 'alliteration',
    why: 'The repeated "s" sound at the start of the words is alliteration.',
  },
  {
    sentence: 'The mighty mountain mist muffled every morning sound.',
    device: 'alliteration',
    why: 'The repeated "m" sound at the start of the words is alliteration.',
  },
  {
    sentence: 'Tiny Tom tiptoed towards the towering tower of toast.',
    device: 'alliteration',
    why: 'The repeated "t" sound beginning each word is alliteration.',
  },
  {
    sentence: 'Frantic foxes fled the fierce February flood.',
    device: 'alliteration',
    why: 'The repeated "f" sound at the start of the words is alliteration.',
  },
  {
    sentence: 'Wild winter winds whistled through the worn wooden window.',
    device: 'alliteration',
    why: 'The repeated "w" sound beginning each word is alliteration.',
  },
  {
    sentence: 'Greedy gulls gathered greedily on the glistening grey groyne.',
    device: 'alliteration',
    why: 'The repeated "g" sound at the start of the words is alliteration.',
  },

  // ── Onomatopoeia ──
  {
    sentence: 'The fireworks crackled and boomed above the cheering crowd.',
    device: 'onomatopoeia',
    why: '"Crackled" and "boomed" imitate the actual sounds of fireworks.',
  },
  {
    sentence: 'Rain pattered on the tin roof while the kettle began to hiss.',
    device: 'onomatopoeia',
    why: '"Pattered" and "hiss" imitate the sounds they describe.',
  },
  {
    sentence: 'The old gate creaked, then slammed with a tremendous bang.',
    device: 'onomatopoeia',
    why: '"Creaked" and "bang" imitate the sounds of the gate.',
  },
  {
    sentence: 'Bees buzzed lazily while the brook gurgled over smooth stones.',
    device: 'onomatopoeia',
    why: '"Buzzed" and "gurgled" imitate the natural sounds described.',
  },
  {
    sentence: 'The cereal went snap and crackle the moment the milk hit the bowl.',
    device: 'onomatopoeia',
    why: '"Snap" and "crackle" imitate the sounds the cereal makes.',
  },
  {
    sentence: 'My trainers squelched through the mud as thunder rumbled overhead.',
    device: 'onomatopoeia',
    why: '"Squelched" and "rumbled" imitate the sounds they describe.',
  },
  {
    sentence: 'The vending machine whirred, clunked, and finally thudded out a can.',
    device: 'onomatopoeia',
    why: '"Whirred", "clunked" and "thudded" imitate the machine\'s sounds.',
  },

  // ── Hyperbole ──
  {
    sentence: 'I have told you a million times to tidy your room before dinner.',
    device: 'hyperbole',
    why: '"A million times" is a deliberate, obvious exaggeration for emphasis.',
  },
  {
    sentence: 'This homework is going to take me a thousand years to finish.',
    device: 'hyperbole',
    why: '"A thousand years" is an extreme exaggeration, not meant literally.',
  },
  {
    sentence: 'My schoolbag weighs more than a fully grown elephant today.',
    device: 'hyperbole',
    why: 'The weight is wildly exaggerated for effect.',
  },
  {
    sentence: 'She was so embarrassed she could have died right there on the spot.',
    device: 'hyperbole',
    why: '"Could have died" is an obvious exaggeration of embarrassment.',
  },
  {
    sentence: 'I am so hungry I could eat everything in the entire canteen twice.',
    device: 'hyperbole',
    why: 'Eating the whole canteen twice is an extreme exaggeration.',
  },
  {
    sentence: 'It was so cold on the field that we nearly turned into icebergs.',
    device: 'hyperbole',
    why: 'Turning into icebergs is a deliberate overstatement of the cold.',
  },
  {
    sentence: 'He laughed so hard at the joke that the whole street could hear him.',
    device: 'hyperbole',
    why: 'The reach of his laughter is exaggerated for emphasis.',
  },

  // ── Oxymoron ──
  {
    sentence: 'The award ceremony was an open secret that everyone pretended not to know.',
    device: 'oxymoron',
    why: '"Open secret" combines two contradictory ideas in one phrase.',
  },
  {
    sentence: 'There was a deafening silence in the room after the headteacher spoke.',
    device: 'oxymoron',
    why: '"Deafening silence" pairs two contradictory terms together.',
  },
  {
    sentence: 'The film was seriously funny from the opening scene to the credits.',
    device: 'oxymoron',
    why: '"Seriously funny" places two opposing ideas side by side.',
  },
  {
    sentence: 'It was a bittersweet farewell at the end of our final term.',
    device: 'oxymoron',
    why: '"Bittersweet" joins two contradictory feelings in one word.',
  },
  {
    sentence: 'The crowd waited in a kind of organised chaos before the gates opened.',
    device: 'oxymoron',
    why: '"Organised chaos" combines two contradictory terms.',
  },
  {
    sentence: 'He gave a clearly confusing answer that left the whole class baffled.',
    device: 'oxymoron',
    why: '"Clearly confusing" places two opposing terms together.',
  },
  {
    sentence: 'The actor was a minor celebrity famous for being a living legend locally.',
    device: 'oxymoron',
    why: '"Living legend" pairs contradictory ideas together.',
  },

  // ── Pun ──
  {
    sentence: 'The baker quit his job because he simply could not make enough dough.',
    device: 'pun',
    why: '"Dough" plays on both bread mixture and slang for money.',
  },
  {
    sentence: 'I used to be a banker, but I lost interest in the work.',
    device: 'pun',
    why: '"Interest" puns on bank interest and personal enthusiasm.',
  },
  {
    sentence: 'The electrician was shocked when he was suddenly let go from the firm.',
    device: 'pun',
    why: '"Shocked" puns on electricity and surprise.',
  },
  {
    sentence: 'My maths teacher called the broken ruler a pointless instrument.',
    device: 'pun',
    why: '"Pointless" puns on lacking a point and being useless.',
  },
  {
    sentence: 'The gardener was thrilled because business was really growing this spring.',
    device: 'pun',
    why: '"Growing" puns on plant growth and business expansion.',
  },
  {
    sentence: 'A clock factory worker said the job was a great way to pass the time.',
    device: 'pun',
    why: '"Pass the time" puns on clocks and spending time.',
  },
  {
    sentence: 'The author of a book about anti-gravity said it was impossible to put down.',
    device: 'pun',
    why: '"Put down" puns on setting a book aside and gravity pulling down.',
  },
]

const ALL_DEVICES: Device[] = [
  'simile',
  'metaphor',
  'personification',
  'alliteration',
  'onomatopoeia',
  'hyperbole',
  'oxymoron',
  'pun',
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

function buildOptions(correct: Device): Device[] {
  const distractors = shuffle(ALL_DEVICES.filter((d) => d !== correct)).slice(0, 3)
  return shuffle([correct, ...distractors])
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function FigurativeLanguageFinderPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<Question[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<Device | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const currentQuestion = questions[qIdx] ?? null

  const options = useMemo(
    () => (currentQuestion ? buildOptions(currentQuestion.device) : []),
    [currentQuestion],
  )

  const handleStart = useCallback(() => {
    setQuestions(shuffle(QUESTION_BANK).slice(0, QUESTIONS_PER_ROUND))
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
    (device: Device) => {
      if (!currentQuestion || feedback) return
      const isCorrect = device === currentQuestion.device
      setSelected(device)
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
      }, 2600)
    },
    [currentQuestion, feedback, qIdx, questions.length],
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
          gameId="figurative-language-finder"
          title="Figurative Language Finder"
          description="Read each original sentence and identify the figurative language device it uses. Spot similes, metaphors, personification and more!"
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || QUESTIONS_PER_ROUND}
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
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Which device is used?
                </p>
                <p className="text-lg font-medium text-foreground sm:text-xl">
                  &ldquo;{currentQuestion.sentence}&rdquo;
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {options.map((device) => {
                  const isChosen = selected === device
                  const isAnswer = device === currentQuestion.device
                  const showCorrect = !!feedback && isAnswer
                  const showWrong = feedback === 'wrong' && isChosen && !isAnswer
                  return (
                    <button
                      key={device}
                      onClick={() => handleSelect(device)}
                      disabled={!!feedback}
                      className={cn(
                        'flex items-center justify-between rounded-lg border px-4 py-3 text-left text-base font-medium text-foreground transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        !feedback && 'border-border hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        !!feedback && !showCorrect && !showWrong && 'border-border opacity-60',
                      )}
                    >
                      <span>{DEVICE_LABELS[device]}</span>
                      {showCorrect && <CheckCircle className="size-5 shrink-0" />}
                      {showWrong && <XCircle className="size-5 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div
                  className={cn(
                    'space-y-2 rounded-lg px-4 py-3 text-sm',
                    feedback === 'correct'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400',
                  )}
                >
                  <div className="flex items-center gap-2 font-semibold">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Brilliant — that&apos;s right!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. It&apos;s{' '}
                        {DEVICE_LABELS[currentQuestion.device]}.
                      </>
                    )}
                  </div>
                  <p className="text-foreground/80">
                    <span className="font-semibold">Why:</span> {currentQuestion.why}
                  </p>
                  <p className="text-muted-foreground">
                    {DEVICE_DEFINITIONS[currentQuestion.device]}
                  </p>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
