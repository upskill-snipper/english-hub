'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Search, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type QType = 'retrieval' | 'inference'

interface Question {
  prompt: string
  options: string[]
  /** index into options of the correct answer */
  answer: number
  type: QType
  /** one-line "how we know" explanation */
  evidence: string
}

interface Passage {
  kind: string
  title: string
  text: string
  questions: Question[]
}

// All passages and questions below are 100% original. Any facts referenced are
// well-known and true, or the passage is clearly fictional.
const PASSAGES: Passage[] = [
  {
    kind: 'Story snippet',
    title: 'The Last Bus',
    text: 'Mara checked her watch for the third time. The 17:40 should have arrived eight minutes ago, and the sky was turning the colour of cold tea. She had spent her last coins on a sandwich at lunch, so a taxi was out of the question. When a pair of headlights finally swung round the corner, she stood up so quickly that her bag slid off the bench.',
    questions: [
      {
        prompt: 'How many times had Mara checked her watch?',
        options: ['Once', 'Twice', 'Three times', 'Eight times'],
        answer: 2,
        type: 'retrieval',
        evidence: 'The text says she "checked her watch for the third time".',
      },
      {
        prompt: 'Why could Mara not take a taxi?',
        options: [
          'She had no money left',
          'There were no taxis nearby',
          'She disliked taxis',
          'The taxi was full',
        ],
        answer: 0,
        type: 'inference',
        evidence: 'She spent her last coins on a sandwich, so a taxi was "out of the question".',
      },
      {
        prompt: 'How does Mara most likely feel when the headlights appear?',
        options: ['Bored', 'Relieved and eager', 'Angry', 'Sleepy'],
        answer: 1,
        type: 'inference',
        evidence: 'She "stood up so quickly" after a long, anxious wait — showing eager relief.',
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'The Honey Bee',
    text: 'A single honey bee will produce only about a twelfth of a teaspoon of honey in its entire life. To make one jar, thousands of bees must visit millions of flowers. Bees communicate the direction of food by performing a movement scientists call the "waggle dance". Without bees and other pollinators, many of the fruits and vegetables we eat would become far harder to grow.',
    questions: [
      {
        prompt: 'How much honey does one bee make in its whole life?',
        options: [
          'About a twelfth of a teaspoon',
          'A full teaspoon',
          'One jar',
          'A million teaspoons',
        ],
        answer: 0,
        type: 'retrieval',
        evidence: 'The text states a single bee produces "about a twelfth of a teaspoon".',
      },
      {
        prompt: 'What is the "waggle dance" used for?',
        options: [
          'To rest the bees',
          'To show the direction of food',
          'To clean the hive',
          'To scare predators',
        ],
        answer: 1,
        type: 'retrieval',
        evidence: 'Bees use it "to communicate the direction of food".',
      },
      {
        prompt: 'What does the passage suggest would happen if bees disappeared?',
        options: [
          'Honey would taste sweeter',
          'Growing many foods would be much harder',
          'Flowers would grow faster',
          'Nothing would change',
        ],
        answer: 1,
        type: 'inference',
        evidence:
          'It says without pollinators many fruits and vegetables "would become far harder to grow".',
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Repotting a Plant',
    text: 'Before you begin, water the plant lightly an hour ahead so the soil holds together. Choose a new pot only one size larger than the old one; a pot that is too big can lead to soggy roots. Gently tip the plant out, loosen the tangled roots with your fingers, and place it in fresh compost. Finally, press the soil down softly and water it once more.',
    questions: [
      {
        prompt: 'When should you water the plant before starting?',
        options: ['An hour before', 'A day before', 'A week before', 'Never'],
        answer: 0,
        type: 'retrieval',
        evidence: 'The instructions say to water it "an hour ahead".',
      },
      {
        prompt: 'Why should the new pot be only one size larger?',
        options: [
          'It looks neater',
          'A pot too big can cause soggy roots',
          'It is cheaper',
          'It is easier to carry',
        ],
        answer: 1,
        type: 'retrieval',
        evidence: 'The text warns a pot "too big can lead to soggy roots".',
      },
      {
        prompt: 'What can you infer about the plant’s roots before repotting?',
        options: [
          'They are tangled and crowded',
          'They are completely dry',
          'They have been removed',
          'They are painted',
        ],
        answer: 0,
        type: 'inference',
        evidence: 'You are told to "loosen the tangled roots", implying they were crowded.',
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'My First Coding Club',
    text: 'I almost did not go. I imagined a room full of experts who would laugh at my questions. Instead, the leader handed me a sticky note and said everyone there had once been a beginner. By the end, my little program made a cat picture move across the screen. I walked home grinning, already planning what to build next week.',
    questions: [
      {
        prompt: 'What did the leader hand the writer?',
        options: ['A laptop', 'A sticky note', 'A book', 'A cat'],
        answer: 1,
        type: 'retrieval',
        evidence: 'The text says the leader "handed me a sticky note".',
      },
      {
        prompt: 'Why did the writer almost not go?',
        options: [
          'They were too tired',
          'They feared being laughed at',
          'They had no transport',
          'They were ill',
        ],
        answer: 1,
        type: 'inference',
        evidence: 'They "imagined a room full of experts who would laugh at my questions".',
      },
      {
        prompt: 'How does the writer feel by the end?',
        options: ['Disappointed', 'Excited and confident', 'Frightened', 'Confused'],
        answer: 1,
        type: 'inference',
        evidence: 'They "walked home grinning, already planning" their next project.',
      },
    ],
  },
  {
    kind: 'Story snippet',
    title: 'The Locked Drawer',
    text: 'Dad had told us never to touch the bottom drawer of his desk, so of course it was all I could think about. One rainy afternoon I found the small brass key hidden under a pot of pencils. My hands were shaking as I turned it. Inside there were no jewels or secrets, only a faded photograph of a boy who looked exactly like me.',
    questions: [
      {
        prompt: 'Where was the brass key hidden?',
        options: ['Under a pot of pencils', 'In Dad’s coat', 'Behind a book', 'In the drawer'],
        answer: 0,
        type: 'retrieval',
        evidence: 'The narrator found it "hidden under a pot of pencils".',
      },
      {
        prompt: 'What was actually inside the drawer?',
        options: ['Jewels', 'Money', 'A faded photograph', 'A letter'],
        answer: 2,
        type: 'retrieval',
        evidence: 'Inside there was "only a faded photograph of a boy".',
      },
      {
        prompt: 'Why was the narrator so curious about the drawer?',
        options: [
          'It was being forbidden made it tempting',
          'It was always open',
          'A friend dared them',
          'It made a strange noise',
        ],
        answer: 0,
        type: 'inference',
        evidence: '"Never touch" it meant "of course it was all I could think about".',
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'Volcanoes',
    text: 'A volcano is an opening in the Earth’s surface through which melted rock, ash and gases can escape. Melted rock below the ground is called magma; once it reaches the surface it is called lava. Not all volcanoes erupt violently — some release lava slowly and steadily for years. Scientists who study volcanoes are known as volcanologists, and they monitor warning signs to help keep nearby towns safe.',
    questions: [
      {
        prompt: 'What is melted rock called once it reaches the surface?',
        options: ['Magma', 'Lava', 'Ash', 'Gas'],
        answer: 1,
        type: 'retrieval',
        evidence: 'The text says once it reaches the surface "it is called lava".',
      },
      {
        prompt: 'What name is given to scientists who study volcanoes?',
        options: ['Geologists', 'Biologists', 'Volcanologists', 'Astronomers'],
        answer: 2,
        type: 'retrieval',
        evidence: 'They are "known as volcanologists".',
      },
      {
        prompt: 'Why do volcanologists monitor warning signs?',
        options: [
          'To help keep nearby towns safe',
          'To collect lava samples for fun',
          'To stop volcanoes erupting',
          'To name new volcanoes',
        ],
        answer: 0,
        type: 'inference',
        evidence: 'They monitor signs "to help keep nearby towns safe".',
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Making a Paper Aeroplane',
    text: 'Take a clean sheet of A4 paper and fold it exactly in half lengthways, then open it out again so a crease remains. Fold the top two corners in to meet the centre line, forming a sharp point. Fold each side down to make the wings, keeping both sides even so the plane flies straight. Hold it under the wings and launch it with a gentle, level throw.',
    questions: [
      {
        prompt: 'What should you do after folding the paper in half lengthways?',
        options: ['Open it out again', 'Tear it in two', 'Fold the wings', 'Throw it at once'],
        answer: 0,
        type: 'retrieval',
        evidence: 'You "open it out again so a crease remains".',
      },
      {
        prompt: 'Why must both sides be kept even?',
        options: [
          'So the plane flies straight',
          'So it looks colourful',
          'So it is heavier',
          'So it folds faster',
        ],
        answer: 0,
        type: 'retrieval',
        evidence: 'Keeping sides even is "so the plane flies straight".',
      },
      {
        prompt: 'What kind of throw does the text recommend?',
        options: [
          'A hard upward throw',
          'A gentle, level throw',
          'A spinning throw',
          'A downward throw',
        ],
        answer: 1,
        type: 'inference',
        evidence: 'It says to launch it "with a gentle, level throw".',
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'Why I Switched Off Notifications',
    text: 'For months my phone buzzed every few minutes, and I felt I had to reply at once. Last weekend I turned every notification off and left the phone in another room while I read. At first I kept reaching for a phone that was not there. By Sunday evening I had finished an entire book and felt strangely calm — something I had not felt in a long time.',
    questions: [
      {
        prompt: 'Where did the writer leave their phone while reading?',
        options: ['In their pocket', 'In another room', 'On the table', 'In a bag'],
        answer: 1,
        type: 'retrieval',
        evidence: 'They "left the phone in another room while I read".',
      },
      {
        prompt: 'What does "kept reaching for a phone that was not there" suggest?',
        options: [
          'The writer had a habit hard to break',
          'The writer lost their phone',
          'The phone was broken',
          'The writer had two phones',
        ],
        answer: 0,
        type: 'inference',
        evidence: 'The automatic reaching shows a strong, ingrained habit.',
      },
      {
        prompt: 'How did the writer feel by Sunday evening?',
        options: ['Anxious', 'Strangely calm', 'Bored', 'Annoyed'],
        answer: 1,
        type: 'retrieval',
        evidence: 'They "felt strangely calm" after finishing the book.',
      },
    ],
  },
  {
    kind: 'Story snippet',
    title: 'The Marble Race',
    text: 'Tomas had built the track himself out of cardboard tubes taped along the staircase. His little sister Ana doubted it would work and folded her arms. He let the blue marble go; it rattled, dropped, looped, and shot off the final ramp straight into the waiting cup. Ana’s arms slowly unfolded, and a grin spread across her face.',
    questions: [
      {
        prompt: 'What did Tomas build the track from?',
        options: ['Wood', 'Cardboard tubes', 'Metal pipes', 'Plastic bricks'],
        answer: 1,
        type: 'retrieval',
        evidence: 'He built it "out of cardboard tubes taped along the staircase".',
      },
      {
        prompt: 'How did Ana feel about the track at first?',
        options: ['Excited', 'Doubtful', 'Frightened', 'Proud'],
        answer: 1,
        type: 'inference',
        evidence: 'She "doubted it would work and folded her arms".',
      },
      {
        prompt: 'What does Ana’s grin at the end show?',
        options: [
          'She was now impressed',
          'She was still doubtful',
          'She was tired',
          'She was upset',
        ],
        answer: 0,
        type: 'inference',
        evidence: 'Her arms unfolded and she grinned once the marble succeeded.',
      },
    ],
  },
  {
    kind: 'Fact box',
    title: 'The River Nile',
    text: 'The Nile is one of the longest rivers in the world and flows northwards through north-eastern Africa. For thousands of years its yearly floods left rich, dark soil along its banks, allowing farmers to grow crops in an otherwise dry land. Many ancient towns and cities grew up close to the water. Today the river is still vital, providing water and transport for millions of people.',
    questions: [
      {
        prompt: 'In which direction does the Nile flow?',
        options: ['Southwards', 'Northwards', 'Eastwards', 'Westwards'],
        answer: 1,
        type: 'retrieval',
        evidence: 'The text states the Nile "flows northwards".',
      },
      {
        prompt: 'Why did the yearly floods help farmers?',
        options: [
          'They left rich, dark soil',
          'They washed crops away',
          'They cooled the air',
          'They created roads',
        ],
        answer: 0,
        type: 'retrieval',
        evidence: 'The floods "left rich, dark soil along its banks".',
      },
      {
        prompt: 'Why did many ancient towns grow up near the Nile?',
        options: [
          'The water made the land good for living and farming',
          'It was the only flat land',
          'It was always cold there',
          'There were no animals',
        ],
        answer: 0,
        type: 'inference',
        evidence: 'Fertile soil and water near the river made it ideal for settlements.',
      },
    ],
  },
  {
    kind: 'Instructions',
    title: 'Staying Safe in a Storm',
    text: 'If you are outdoors when a thunderstorm begins, do not shelter under a tall, lone tree, as it can attract lightning. Move quickly to a building or a car with a solid roof. Once inside, stay away from windows and avoid using taps, since pipes can carry an electrical charge. Wait until at least thirty minutes after the last thunder before going back outside.',
    questions: [
      {
        prompt: 'How long should you wait after the last thunder?',
        options: ['Five minutes', 'At least thirty minutes', 'Two hours', 'No need to wait'],
        answer: 1,
        type: 'retrieval',
        evidence: 'Wait "at least thirty minutes after the last thunder".',
      },
      {
        prompt: 'Why should you avoid sheltering under a lone tree?',
        options: [
          'It can attract lightning',
          'It is uncomfortable',
          'It blocks the view',
          'It is too far away',
        ],
        answer: 0,
        type: 'retrieval',
        evidence: 'A tall, lone tree "can attract lightning".',
      },
      {
        prompt: 'Why does the text say to avoid using taps?',
        options: [
          'Pipes can carry an electrical charge',
          'The water may be dirty',
          'It wastes water',
          'It makes noise',
        ],
        answer: 0,
        type: 'inference',
        evidence: 'It warns that "pipes can carry an electrical charge".',
      },
    ],
  },
  {
    kind: 'Blog post',
    title: 'Learning to Cook',
    text: 'When I moved into my own flat, I could barely boil an egg. My first attempt at pasta ended with a smoke alarm and a very hard lump in the pan. Rather than giving up, I watched my grandmother carefully the next time I visited and wrote down every step. A month later, I cooked a meal for friends and nobody guessed it was only my fifth attempt.',
    questions: [
      {
        prompt: 'What happened during the first pasta attempt?',
        options: ['It was delicious', 'A smoke alarm went off', 'Guests arrived', 'The pan broke'],
        answer: 1,
        type: 'retrieval',
        evidence: 'The attempt "ended with a smoke alarm and a very hard lump".',
      },
      {
        prompt: 'What did the writer do to improve?',
        options: [
          'Watched their grandmother and wrote down steps',
          'Bought ready meals',
          'Gave up cooking',
          'Ate out every day',
        ],
        answer: 0,
        type: 'retrieval',
        evidence: 'They "watched my grandmother carefully... and wrote down every step".',
      },
      {
        prompt: 'What can you infer from "nobody guessed it was only my fifth attempt"?',
        options: [
          'The writer had improved a lot',
          'The meal was a failure',
          'The friends did not eat',
          'The writer cooked daily',
        ],
        answer: 0,
        type: 'inference',
        evidence: 'A convincing meal after few attempts shows clear improvement.',
      },
    ],
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

const ENCOURAGE = [
  'Great detective work!',
  'Sharp eyes — well spotted!',
  'Excellent reading!',
  'You cracked it!',
]

const TRY_AGAIN = [
  'Not quite — look closely at the clue.',
  'Good effort — the text holds the answer.',
  'Almost! Re-read and you’ll see it.',
]

const ROUND_LENGTH = 5

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ReadingDetectivePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [passages, setPassages] = useState<Passage[]>([])
  const [pIdx, setPIdx] = useState(0)
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [feedbackMsg, setFeedbackMsg] = useState('')

  const currentPassage = passages[pIdx] ?? null
  const currentQuestion = currentPassage?.questions[qIdx] ?? null
  const totalQuestions = passages.length * 3
  const questionNumber = pIdx * 3 + qIdx + 1

  const handleStart = useCallback(() => {
    setPassages(shuffle(PASSAGES).slice(0, ROUND_LENGTH))
    setPIdx(0)
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setRevealed(false)
    setFeedbackMsg('')
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (idx: number) => {
      if (revealed || !currentQuestion) return
      setSelected(idx)
      setRevealed(true)
      setTotalAnswered((t) => t + 1)
      const isCorrect = idx === currentQuestion.answer
      if (isCorrect) {
        setScore((s) => s + 1)
        setFeedbackMsg(ENCOURAGE[Math.floor(Math.random() * ENCOURAGE.length)])
      } else {
        setFeedbackMsg(TRY_AGAIN[Math.floor(Math.random() * TRY_AGAIN.length)])
      }
    },
    [revealed, currentQuestion],
  )

  const handleNext = useCallback(() => {
    if (!currentPassage) return
    const lastQuestion = qIdx + 1 >= currentPassage.questions.length
    const lastPassage = pIdx + 1 >= passages.length
    if (lastQuestion && lastPassage) {
      setGameState('finished')
      return
    }
    if (lastQuestion) {
      setPIdx((i) => i + 1)
      setQIdx(0)
    } else {
      setQIdx((i) => i + 1)
    }
    setSelected(null)
    setRevealed(false)
    setFeedbackMsg('')
  }, [currentPassage, qIdx, pIdx, passages.length])

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
          gameId="reading-detective"
          title="Reading Detective"
          description="Read each short passage carefully, then crack the clues. Mix of fact-finding and reading-between-the-lines questions."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || totalQuestions || 15}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {currentPassage && currentQuestion && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {questionNumber} of {passages.length * 3}
                </span>
                <div className="flex items-center gap-3">
                  <span>{accuracyPct}% accuracy</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border inline-flex items-center gap-1',
                      currentQuestion.type === 'retrieval'
                        ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                        : 'text-clay-600 border-amber-500/30 bg-amber-500/10',
                    )}
                  >
                    {currentQuestion.type === 'retrieval' ? (
                      <>
                        <Search className="size-3" /> Find it
                      </>
                    ) : (
                      <>
                        <Lightbulb className="size-3" /> Work it out
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Passage card */}
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {currentPassage.kind}
                  </span>
                  <span className="text-muted-foreground">&middot;</span>
                  <span className="text-sm font-semibold text-foreground">
                    {currentPassage.title}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-foreground">{currentPassage.text}</p>
              </div>

              {/* Question */}
              <div className="space-y-3">
                <p className="text-base font-semibold text-foreground">{currentQuestion.prompt}</p>

                <div className="grid gap-2">
                  {currentQuestion.options.map((opt, idx) => {
                    const isCorrect = idx === currentQuestion.answer
                    const isChosen = idx === selected
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={revealed}
                        className={cn(
                          'w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all',
                          !revealed &&
                            'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                          revealed &&
                            isCorrect &&
                            'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                          revealed &&
                            isChosen &&
                            !isCorrect &&
                            'border-red-500 bg-red-500/10 text-red-400',
                          revealed &&
                            !isCorrect &&
                            !isChosen &&
                            'border-border bg-card text-muted-foreground opacity-60',
                        )}
                      >
                        <span className="inline-flex items-center gap-2">
                          {revealed && isCorrect && <CheckCircle className="size-4" />}
                          {revealed && isChosen && !isCorrect && <XCircle className="size-4" />}
                          {opt}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Feedback + evidence reveal */}
                {revealed && (
                  <div className="space-y-3">
                    <div
                      className={cn(
                        'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                        selected === currentQuestion.answer
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : 'text-red-400 bg-red-500/10',
                      )}
                    >
                      {selected === currentQuestion.answer ? (
                        <CheckCircle className="size-4" />
                      ) : (
                        <XCircle className="size-4" />
                      )}
                      {feedbackMsg}
                    </div>

                    <div className="flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground">
                      <Lightbulb className="size-4 mt-0.5 shrink-0 text-primary" />
                      <span>
                        <span className="font-semibold">How we know: </span>
                        {currentQuestion.evidence}
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <Button onClick={handleNext}>
                        {questionNumber >= passages.length * 3 ? 'See Results' : 'Next Question'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
