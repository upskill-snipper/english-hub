'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Sparkles,
  Lightbulb,
  ArrowUp,
  ArrowDown,
} from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Genre = 'Recount' | 'Explanation' | 'Argument' | 'Story'

interface Paragraph {
  /** Sentences in their correct, coherent order. */
  sentences: string[]
  topic: string
  genre: Genre
  cohesionHint: string
}

// 25+ original paragraphs. UK English throughout.
const PARAGRAPH_BANK: Paragraph[] = [
  {
    topic: 'A school trip to the coast',
    genre: 'Recount',
    sentences: [
      'Last Friday, our class travelled to the seaside for a geography field trip.',
      'As soon as we arrived, our teacher divided us into small groups.',
      'My group spent the morning measuring the height of the cliffs.',
      'After lunch, we collected samples of rock from the beach.',
      'By the time the coach left, everyone was tired but happy.',
    ],
    cohesionHint:
      'Look for the time connectives: "Last Friday", "As soon as", "After lunch" and "By the time" tell you the chronological order.',
  },
  {
    topic: 'How rainbows form',
    genre: 'Explanation',
    sentences: [
      'A rainbow appears when sunlight passes through droplets of water in the air.',
      'First, the light bends as it enters each tiny droplet.',
      'Next, the colours separate because each one bends by a slightly different amount.',
      'Finally, the light reflects off the back of the droplet and returns to your eyes.',
      'This is why we usually see rainbows after rain, when the sun is behind us.',
    ],
    cohesionHint:
      'The topic sentence introduces rainbows generally. "First", "Next" and "Finally" sequence the process; "This is why" gives the conclusion.',
  },
  {
    topic: 'Why schools should keep libraries',
    genre: 'Argument',
    sentences: [
      'Some people argue that libraries are no longer necessary in the age of the internet.',
      'However, a library offers a calm space where pupils can concentrate.',
      'In addition, it gives every student free access to books they could not afford to buy.',
      'For these reasons, schools should protect their libraries rather than close them.',
    ],
    cohesionHint:
      'The opening states the opposing view. "However" signals the counter-argument, "In addition" adds support, and "For these reasons" concludes.',
  },
  {
    topic: 'A surprising discovery in the attic',
    genre: 'Story',
    sentences: [
      'Maya had never been allowed into the dusty attic before.',
      'That afternoon, while her parents were out, she crept up the narrow stairs.',
      'In the corner, she noticed an old wooden chest covered in cobwebs.',
      'When she lifted the lid, a bundle of yellowed letters slid onto the floor.',
      'Each one was addressed to a girl who shared her exact name.',
    ],
    cohesionHint:
      'The first sentence introduces Maya and the attic. The pronoun "she" refers back to Maya; the discovery builds step by step to the twist.',
  },
  {
    topic: 'The morning of the football final',
    genre: 'Recount',
    sentences: [
      'The morning of the final, I woke up before my alarm even rang.',
      'My stomach was full of nerves, so I could barely eat my breakfast.',
      'On the way to the pitch, my coach reminded us to stay calm and trust our training.',
      'During the match, we fell behind early but never gave up.',
      'In the end, a last-minute goal won us the trophy.',
    ],
    cohesionHint:
      '"The morning", "On the way", "During the match" and "In the end" trace the events from waking up to the final whistle.',
  },
  {
    topic: 'How bees make honey',
    genre: 'Explanation',
    sentences: [
      'Honey begins as nectar, a sugary liquid found inside flowers.',
      'Worker bees collect this nectar and carry it back to the hive.',
      'Inside the hive, the bees pass the nectar between them, slowly thickening it.',
      'They then fan it with their wings until most of the water evaporates.',
      'As a result, the nectar turns into the thick honey we eat.',
    ],
    cohesionHint:
      'The first sentence defines the starting material. "Inside the hive", "They then" and "As a result" follow the process to its end.',
  },
  {
    topic: 'Should pupils wear school uniform?',
    genre: 'Argument',
    sentences: [
      'Many students complain that school uniform is uncomfortable and unfair.',
      'On the other hand, a uniform removes pressure to wear expensive fashionable clothes.',
      'Furthermore, it helps everyone feel part of the same community.',
      'Therefore, the benefits of a uniform clearly outweigh the drawbacks.',
    ],
    cohesionHint:
      '"On the other hand" introduces the rebuttal, "Furthermore" adds a second point, and "Therefore" delivers the final judgement.',
  },
  {
    topic: 'The night the power went out',
    genre: 'Story',
    sentences: [
      'It was an ordinary evening until the lights flickered and died.',
      'Suddenly, the whole house was wrapped in complete darkness.',
      'Dad fumbled in the kitchen drawer and finally found a box of candles.',
      'We gathered around the small flames and began telling ghost stories.',
      'Strangely, it became one of the most memorable nights of the summer.',
    ],
    cohesionHint:
      '"It was an ordinary evening" sets the scene; "Suddenly", "finally" and "Strangely" carry the story from the blackout to the unexpected ending.',
  },
  {
    topic: 'Visiting my grandparents in the countryside',
    genre: 'Recount',
    sentences: [
      'Every summer, my family drives out to visit my grandparents on their farm.',
      'When we arrive, my grandmother always has a fresh cake waiting on the table.',
      'In the afternoons, my grandfather lets me help feed the chickens.',
      'Before we leave, we pick a basket of vegetables from the garden.',
      'Saying goodbye is always the hardest part of the trip.',
    ],
    cohesionHint:
      '"Every summer" opens the recount; "When we arrive", "In the afternoons" and "Before we leave" order the visit.',
  },
  {
    topic: 'Why leaves change colour in autumn',
    genre: 'Explanation',
    sentences: [
      'During summer, leaves are green because they are full of a chemical called chlorophyll.',
      'As the days grow shorter, the tree stops producing this chemical.',
      'Without the green chlorophyll, other colours hidden in the leaf become visible.',
      'This is why leaves turn yellow, orange and red before they fall.',
    ],
    cohesionHint:
      '"During summer" gives the starting state; "As the days grow shorter", "Without" and "This is why" explain the change.',
  },
  {
    topic: 'Should homework be banned?',
    genre: 'Argument',
    sentences: [
      'It is often claimed that homework simply adds stress to young people.',
      'Nevertheless, regular practice at home helps ideas stick in the memory.',
      'Moreover, it teaches pupils to manage their own time independently.',
      'In conclusion, homework should be set carefully rather than banned altogether.',
    ],
    cohesionHint:
      '"Nevertheless" turns the argument around, "Moreover" strengthens it, and "In conclusion" signals the final position.',
  },
  {
    topic: 'A letter that changed everything',
    genre: 'Story',
    sentences: [
      'For weeks, Daniel had checked the post every morning without success.',
      'Then, one rainy Tuesday, a thick envelope landed on the mat.',
      'His hands trembled as he tore it open in the hallway.',
      'Inside was the acceptance letter he had almost stopped hoping for.',
      'From that moment, his whole future felt completely different.',
    ],
    cohesionHint:
      'The first sentence shows Daniel waiting; "Then", "Inside" and "From that moment" move from the arrival to its life-changing effect.',
  },
  {
    topic: 'My first day at secondary school',
    genre: 'Recount',
    sentences: [
      'On my first day at secondary school, I felt both excited and terrified.',
      'At the gate, an older pupil kindly showed me where to find my form room.',
      'Throughout the morning, I struggled to remember which corridor led where.',
      'By lunchtime, however, I had already made two new friends.',
      'Looking back, my fears had been far worse than the reality.',
    ],
    cohesionHint:
      '"On my first day" begins the recount; "At the gate", "Throughout the morning", "By lunchtime" and "Looking back" sequence it.',
  },
  {
    topic: 'How a volcano erupts',
    genre: 'Explanation',
    sentences: [
      'Deep beneath the ground, intense heat melts rock into a liquid called magma.',
      'Because magma is lighter than the solid rock around it, it slowly rises.',
      'Pressure then builds up until the magma forces its way to the surface.',
      'When it finally bursts out, the magma is known as lava.',
      'Eventually the lava cools and hardens, forming new layers of rock.',
    ],
    cohesionHint:
      'The first sentence introduces magma; "Because", "then", "When it finally" and "Eventually" follow the eruption from start to finish.',
  },
  {
    topic: 'Should mobile phones be allowed in lessons?',
    genre: 'Argument',
    sentences: [
      'Plenty of teachers believe that phones are nothing but a distraction in class.',
      'In contrast, a phone can be a powerful research tool when used responsibly.',
      'In addition, it allows pupils to record important instructions they might forget.',
      'For these reasons, phones should be permitted under clear classroom rules.',
    ],
    cohesionHint:
      '"In contrast" challenges the opening claim, "In addition" adds support, and "For these reasons" concludes the argument.',
  },
  {
    topic: 'The race I almost did not finish',
    genre: 'Story',
    sentences: [
      'Halfway through the cross-country race, my legs felt like heavy stone.',
      'A sharp pain shot through my side, and I wanted to stop completely.',
      'Just then, I heard my best friend shouting my name from the crowd.',
      'Somehow, her voice gave me the strength to keep going.',
      'I crossed the line last, yet I had never felt prouder.',
    ],
    cohesionHint:
      '"Halfway through" sets the moment; "Just then", "Somehow" and the final sentence carry the runner to a proud finish.',
  },
  {
    topic: 'A weekend camping in the forest',
    genre: 'Recount',
    sentences: [
      'Last weekend, my dad and I went camping in the forest for the first time.',
      'As soon as we set up the tent, it began to rain heavily.',
      'We sheltered inside and played cards by the light of a torch.',
      'Later that night, the sky cleared and we counted the stars.',
      'Despite the rain, it turned out to be an unforgettable adventure.',
    ],
    cohesionHint:
      '"Last weekend", "As soon as", "Later that night" and "Despite the rain" order the trip and reflect on it.',
  },
  {
    topic: 'How recycling reduces waste',
    genre: 'Explanation',
    sentences: [
      'Recycling is the process of turning used materials into something new.',
      'First, items such as glass and plastic are collected and sorted by type.',
      'These materials are then cleaned and broken down at a special factory.',
      'After that, they are made into fresh products instead of being thrown away.',
      'As a result, far less rubbish ends up buried in landfill sites.',
    ],
    cohesionHint:
      'The first sentence defines recycling; "First", "then", "After that" and "As a result" describe each stage.',
  },
  {
    topic: 'Should zoos still exist?',
    genre: 'Argument',
    sentences: [
      'Critics argue that keeping wild animals in zoos is cruel and unnatural.',
      'However, many modern zoos run vital programmes to protect endangered species.',
      'Furthermore, they teach millions of visitors why wildlife must be conserved.',
      'On balance, well-run zoos do more good than harm.',
    ],
    cohesionHint:
      '"However" answers the criticism, "Furthermore" adds a second benefit, and "On balance" weighs both sides to conclude.',
  },
  {
    topic: 'The stray dog that followed me home',
    genre: 'Story',
    sentences: [
      'On my walk back from school, a thin brown dog began trotting beside me.',
      'I tried to shoo it away, but it simply wagged its tail and stayed.',
      'By the time I reached my street, it clearly had no intention of leaving.',
      'My mum sighed at the door, yet she could not resist its hopeful eyes.',
      'That evening, the dog curled up by the fire as if it had always lived there.',
    ],
    cohesionHint:
      'The pronoun "it" tracks the dog through the story; "By the time", "yet" and "That evening" carry it to a cosy ending.',
  },
  {
    topic: 'Sports day at primary school',
    genre: 'Recount',
    sentences: [
      'I still remember the excitement of sports day when I was nine years old.',
      'In the morning, the whole school marched onto the field behind colourful banners.',
      'During the relay, I dropped the baton and nearly cost my team the race.',
      'Fortunately, my teammates cheered me on instead of blaming me.',
      'We did not win, but I learned that effort matters more than medals.',
    ],
    cohesionHint:
      '"I still remember" opens the memory; "In the morning", "During the relay" and "Fortunately" sequence the day.',
  },
  {
    topic: 'How the water cycle works',
    genre: 'Explanation',
    sentences: [
      'The water cycle describes how water moves between the sky and the ground.',
      'To begin with, heat from the sun causes water in oceans and lakes to evaporate.',
      'This water vapour then rises and cools, forming clouds high in the air.',
      'When the clouds become heavy, the water falls back down as rain or snow.',
      'Finally, the water flows into rivers and returns to the sea to start again.',
    ],
    cohesionHint:
      'The first sentence introduces the cycle; "To begin with", "then", "When" and "Finally" complete the loop.',
  },
  {
    topic: 'Should children have less screen time?',
    genre: 'Argument',
    sentences: [
      'Some teenagers insist that screens are an essential part of modern life.',
      'Even so, spending hours online can harm both sleep and concentration.',
      'In addition, less screen time leaves more room for exercise and friendships.',
      'Ultimately, a sensible daily limit would benefit young people greatly.',
    ],
    cohesionHint:
      '"Even so" counters the opening claim, "In addition" adds support, and "Ultimately" states the conclusion.',
  },
  {
    topic: 'The mysterious key in the garden',
    genre: 'Story',
    sentences: [
      'While digging a flower bed, Leo struck something hard with his trowel.',
      'Brushing away the soil, he uncovered a small, rusted iron key.',
      'He searched the whole house, but no lock seemed to match it.',
      'Then he remembered the old shed nobody had opened for years.',
      'With a stiff turn, the key clicked, and the door swung slowly open.',
    ],
    cohesionHint:
      'The discovery starts with the key; "Brushing away", "Then he remembered" and the final sentence build to the shed being opened.',
  },
  {
    topic: 'My grandmother teaching me to bake',
    genre: 'Recount',
    sentences: [
      'When I was small, my grandmother decided it was time I learned to bake.',
      'First, she showed me how to weigh the flour and sugar carefully.',
      'Next, she let me crack the eggs, even when I made a mess.',
      'While the cake rose in the oven, she told me stories about her own childhood.',
      'To this day, that smell of warm sponge reminds me of her kitchen.',
    ],
    cohesionHint:
      '"When I was small" opens the memory; "First", "Next", "While" and "To this day" order and reflect on it.',
  },
  {
    topic: 'How a seed becomes a plant',
    genre: 'Explanation',
    sentences: [
      'Every plant starts its life as a tiny seed buried in the soil.',
      'Given warmth and water, the seed begins to swell and split open.',
      'A small root then grows downwards to anchor the plant and drink water.',
      'Soon afterwards, a green shoot pushes upwards towards the sunlight.',
      'In time, this shoot develops leaves and grows into a mature plant.',
    ],
    cohesionHint:
      'The first sentence names the starting point; "Given", "then", "Soon afterwards" and "In time" follow the growth.',
  },
  {
    topic: 'Should plastic bags be banned in shops?',
    genre: 'Argument',
    sentences: [
      'Shoppers often say that plastic bags are simply too convenient to give up.',
      'However, these bags can take hundreds of years to break down in nature.',
      'Moreover, reusable bags are cheap and easy to carry once they become a habit.',
      'For these reasons, banning single-use plastic bags is a sensible step.',
    ],
    cohesionHint:
      '"However" challenges the convenience argument, "Moreover" adds a point, and "For these reasons" concludes.',
  },
  {
    topic: 'Lost on the way to the museum',
    genre: 'Story',
    sentences: [
      'Our class was supposed to follow the teacher straight to the museum entrance.',
      'Distracted by a street performer, Sam and I drifted away from the group.',
      'When we looked up, the others had completely vanished into the crowd.',
      'Trying not to panic, we asked a friendly shopkeeper for directions.',
      'We reached the museum at last, just as the teacher was counting heads.',
    ],
    cohesionHint:
      'The opening sets the plan; "Distracted by", "When we looked up" and "at last" trace getting lost and finding the way back.',
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

/** Shuffle an array of indices, guaranteeing the result is not already in order. */
function shuffleOrder(length: number): number[] {
  const original = Array.from({ length }, (_, i) => i)
  let order = shuffle(original)
  let guard = 0
  while (order.every((v, i) => v === i) && guard < 20) {
    order = shuffle(original)
    guard++
  }
  return order
}

const ROUND_LENGTH = 8

const GENRE_STYLES: Record<Genre, string> = {
  Recount: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  Explanation: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  Argument: 'text-clay-600 border-amber-500/30 bg-amber-500/10',
  Story: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ParagraphJumblePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [rounds, setRounds] = useState<Paragraph[]>([])
  const [rIdx, setRIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  // `order` holds indices into the current paragraph's sentences array.
  const [order, setOrder] = useState<number[]>([])
  const [checked, setChecked] = useState(false)
  const [wasCorrect, setWasCorrect] = useState(false)

  const current = rounds[rIdx] ?? null

  const loadParagraph = useCallback((para: Paragraph) => {
    setOrder(shuffleOrder(para.sentences.length))
    setChecked(false)
    setWasCorrect(false)
  }, [])

  const handleStart = useCallback(() => {
    const picked = shuffle(PARAGRAPH_BANK).slice(0, ROUND_LENGTH)
    setRounds(picked)
    setRIdx(0)
    setScore(0)
    setAnswered(0)
    if (picked[0]) {
      setOrder(shuffleOrder(picked[0].sentences.length))
    }
    setChecked(false)
    setWasCorrect(false)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const move = useCallback(
    (pos: number, dir: -1 | 1) => {
      if (checked) return
      setOrder((prev) => {
        const target = pos + dir
        if (target < 0 || target >= prev.length) return prev
        const next = [...prev]
        ;[next[pos], next[target]] = [next[target], next[pos]]
        return next
      })
    },
    [checked],
  )

  const handleCheck = useCallback(() => {
    if (!current || checked) return
    const correct = order.every((v, i) => v === i)
    setChecked(true)
    setWasCorrect(correct)
    setAnswered((a) => a + 1)
    if (correct) setScore((s) => s + 1)
  }, [current, checked, order])

  const handleNext = useCallback(() => {
    if (rIdx + 1 >= rounds.length) {
      setGameState('finished')
      return
    }
    const nextIdx = rIdx + 1
    setRIdx(nextIdx)
    loadParagraph(rounds[nextIdx])
  }, [rIdx, rounds, loadParagraph])

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
          gameId="paragraph-jumble"
          title="Paragraph Jumble"
          description="The sentences are mixed up! Reorder them into a paragraph that makes sense. Use the topic sentence, connectives and pronouns as your clues."
          difficulty="Crossover"
          score={score}
          maxScore={answered > 0 ? answered : rounds.length || ROUND_LENGTH}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {current && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Paragraph {rIdx + 1} of {rounds.length}
                </span>
                <div className="flex items-center gap-3">
                  <span>{score} correct so far</span>
                  <span
                    className={cn(
                      'text-xs px-2 py-0.5 rounded-full border',
                      GENRE_STYLES[current.genre],
                    )}
                  >
                    {current.genre}
                  </span>
                </div>
              </div>

              {/* Topic prompt */}
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Topic</p>
                <p className="mt-1 text-base font-semibold text-foreground">{current.topic}</p>
              </div>

              {/* Sentence list */}
              <ol className="space-y-2">
                {order.map((sentenceIdx, pos) => {
                  const isInRightPlace = checked && sentenceIdx === pos
                  return (
                    <li
                      key={sentenceIdx}
                      className={cn(
                        'flex items-start gap-3 rounded-lg border px-3 py-3 transition-colors',
                        !checked && 'border-border bg-card',
                        checked && isInRightPlace && 'border-emerald-500 bg-emerald-500/10',
                        checked && !isInRightPlace && 'border-red-500 bg-red-500/10',
                      )}
                    >
                      <span
                        className={cn(
                          'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                          checked && isInRightPlace
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : checked
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-primary/10 text-primary',
                        )}
                      >
                        {pos + 1}
                      </span>
                      <p className="flex-1 text-sm leading-relaxed text-foreground">
                        {current.sentences[sentenceIdx]}
                      </p>
                      {!checked && (
                        <div className="flex shrink-0 flex-col gap-1">
                          <button
                            onClick={() => move(pos, -1)}
                            disabled={pos === 0}
                            aria-label="Move sentence up"
                            className="rounded-md border border-border p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
                          >
                            <ArrowUp className="size-4" />
                          </button>
                          <button
                            onClick={() => move(pos, 1)}
                            disabled={pos === order.length - 1}
                            aria-label="Move sentence down"
                            className="rounded-md border border-border p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
                          >
                            <ArrowDown className="size-4" />
                          </button>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ol>

              {/* Feedback + reveal */}
              {checked && (
                <div className="space-y-3">
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      wasCorrect
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {wasCorrect ? (
                      <>
                        <CheckCircle className="size-4" /> Brilliant! That paragraph flows
                        perfectly.
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite - here is the order that works
                        best.
                      </>
                    )}
                  </div>

                  {!wasCorrect && (
                    <div className="rounded-lg border border-border bg-card p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Correct paragraph
                      </p>
                      <p className="text-sm leading-relaxed text-foreground">
                        {current.sentences.join(' ')}
                      </p>
                    </div>
                  )}

                  <div className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                    <Lightbulb className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-clay-600">
                        Cohesion clue
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground">
                        {current.cohesionHint}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-center">
                {!checked ? (
                  <Button onClick={handleCheck}>Check Order</Button>
                ) : (
                  <Button onClick={handleNext}>
                    {rIdx + 1 >= rounds.length ? 'See Results' : 'Next Paragraph'}
                  </Button>
                )}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
