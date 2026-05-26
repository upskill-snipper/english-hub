'use client'

import { useState, useCallback, useMemo, useRef } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface VocabWord {
  word: string
  definition: string
  distractors: string[]
}

const VOCAB_BANK: VocabWord[] = [
  {
    word: 'Ambiguity',
    definition: 'Having more than one possible meaning or interpretation',
    distractors: [
      'Expressing a single firmly held viewpoint',
      'A figure of speech comparing two unlike things',
      'An error in the rules of grammar or syntax',
    ],
  },
  {
    word: 'Juxtaposition',
    definition: 'Placing two things side by side for striking contrast',
    distractors: [
      'A pause or break used for dramatic emphasis',
      'The deliberate repetition of consonant sounds',
      'A concluding paragraph that summarises ideas',
    ],
  },
  {
    word: 'Ominous',
    definition: 'Giving the impression something bad is about to happen',
    distractors: [
      'Producing an extremely loud and forceful sound',
      'Filled with overwhelming joy and excitement',
      'Relating to events from a much earlier era',
    ],
  },
  {
    word: 'Didactic',
    definition: 'Intended to teach or instruct, especially morally',
    distractors: [
      'Closely related to the conventions of drama',
      'Extremely detailed and rich in description',
      'Lacking any obvious display of emotion',
    ],
  },
  {
    word: 'Pathos',
    definition: 'A quality in writing that evokes pity or sadness',
    distractors: [
      'A feeling of anger or simmering frustration',
      'A carefully reasoned and logical argument',
      'A humorous moment used to ease tension',
    ],
  },
  {
    word: 'Connotation',
    definition: 'An idea or feeling that a word invokes beyond its literal meaning',
    distractors: [
      'The dictionary definition of a word in its plainest sense',
      'A particular type of sentence structure used for emphasis',
      'A figure of speech that compares two unlike things directly',
    ],
  },
  {
    word: 'Denotation',
    definition: 'The literal or dictionary definition of a word',
    distractors: [
      'The emotional associations a word carries with it',
      'A dramatic device used to heighten audience tension',
      'A specific paragraph structure used in formal writing',
    ],
  },
  {
    word: 'Allegory',
    definition: 'A story with a hidden moral or political meaning',
    distractors: [
      'A pattern of rhyme used at the ends of lines',
      'A detailed description of a character’s appearance',
      'A short poem written about everyday life',
    ],
  },
  {
    word: 'Soliloquy',
    definition: 'A speech where a character speaks their thoughts aloud, alone on stage',
    distractors: [
      'A back-and-forth conversation between two stage characters',
      'Written instructions describing the action and setting',
      'A group of performers speaking the same lines together',
    ],
  },
  {
    word: 'Anachronism',
    definition: 'Something placed in the wrong historical period',
    distractors: [
      'A phrase repeated for emphasis throughout a text',
      'An old-fashioned word that has fallen out of use',
      'A particular type of stanza used in lyric poetry',
    ],
  },
  {
    word: 'Catharsis',
    definition: 'The release of strong emotions through art or drama',
    distractors: [
      'The highest point of tension in a narrative arc',
      'A type of irony where outcomes contradict expectations',
      'A persuasive technique that appeals to logic',
    ],
  },
  {
    word: 'Duality',
    definition: 'The state of having two contrasting aspects or qualities',
    distractors: [
      'A particular pattern of rhyme between paired lines',
      'A peaceful agreement reached between two characters',
      'A traditional poetic form following a strict structure',
    ],
  },
  {
    word: 'Hubris',
    definition: 'Excessive pride or self-confidence, often leading to downfall',
    distractors: [
      'A deep and lasting sadness affecting one’s outlook',
      'A character flaw of cowardice in the face of danger',
      'A type of comedy relying on absurd situations',
    ],
  },
  {
    word: 'Motif',
    definition: 'A recurring element that has symbolic significance',
    distractors: [
      'The most important character in a given narrative',
      'A single isolated scene within a larger story',
      'A particular type of narrator used in fiction',
    ],
  },
  {
    word: 'Polemical',
    definition: 'Strongly critical or controversial in tone',
    distractors: [
      'Quietly reflective and gently introspective',
      'Humorous and light-hearted in approach',
      'Closely related to traditional poetic form',
    ],
  },
  {
    word: 'Semantic',
    definition: 'Relating to meaning in language',
    distractors: [
      'Relating to sound in language',
      'Relating to the rules of grammar',
      'Relating to the spelling of words',
    ],
  },
  {
    word: 'Pejorative',
    definition: 'Expressing contempt or disapproval',
    distractors: [
      'Expressing admiration or respect',
      'Completely neutral in tone',
      'Extremely formal in register',
    ],
  },
  {
    word: 'Hyperbolic',
    definition: 'Deliberately exaggerated for emphasis',
    distractors: [
      'Understated and deliberately subtle',
      'Completely accurate and factual',
      'Closely related to poetic rhythm',
    ],
  },
  {
    word: 'Evocative',
    definition: 'Bringing strong images, memories, or feelings to mind',
    distractors: [
      'Extremely difficult to understand on first reading',
      'Short, factual, and lacking in detail',
      'Relating to spoken dialogue between characters',
    ],
  },
  {
    word: 'Colloquial',
    definition: 'Informal language used in everyday conversation',
    distractors: [
      'Extremely formal language used in legal writing',
      'Old English vocabulary used in early literature',
      'Technical terminology used in scientific writing',
    ],
  },
  {
    word: 'Syntax',
    definition: 'The arrangement of words and phrases in a sentence',
    distractors: [
      'The meaning of individual words in a sentence',
      'The sound and rhythm of words in a sentence',
      'The spelling and lettering of words in a sentence',
    ],
  },
  {
    word: 'Rhetoric',
    definition: 'The art of persuasive speaking or writing',
    distractors: [
      'The systematic study of grammatical rules',
      'A type of poem with a regular rhyme scheme',
      'A dramatic monologue performed on stage',
    ],
  },
  {
    word: 'Visceral',
    definition: 'Relating to deep inward feelings or instinctive gut reactions',
    distractors: [
      'Relating to vision and the way things appear',
      'Intellectual and reasoned rather than emotional',
      'Abstract and vague rather than concrete',
    ],
  },
  {
    word: 'Exposition',
    definition: 'The part of a narrative that introduces background information',
    distractors: [
      'The highest point of tension in a story',
      'The final resolution at the end of a story',
      'A type of conflict between two opposing forces',
    ],
  },
  {
    word: 'Denouement',
    definition: 'The final resolution or outcome of a story',
    distractors: [
      'The opening scene that introduces the setting',
      'A point of rising tension before the climax',
      'A secondary plot running alongside the main one',
    ],
  },
  {
    word: 'Euphemism',
    definition: 'A mild expression used to replace something harsh or blunt',
    distractors: [
      'An extreme exaggeration used for emphasis',
      'A direct, plain statement of an opinion',
      'A type of irony where meaning is reversed',
    ],
  },
  {
    word: 'Analepsis',
    definition: 'A flashback to an earlier point in the narrative',
    distractors: [
      'A sudden jump forward to a future event',
      'A deliberate pause in the flow of the narrative',
      'A change in the perspective of the narrator',
    ],
  },
  {
    word: 'Prolepsis',
    definition: 'A flash-forward to a future point in the narrative',
    distractors: [
      'A flashback to an event from earlier times',
      'A dream sequence revealing a character’s mind',
      'A secondary plot running beside the main story',
    ],
  },
  {
    word: 'Verisimilitude',
    definition: 'The appearance of being true or real',
    distractors: [
      'Something that is obviously fantasy',
      'A type of metaphor used in poetry',
      'A rhyme scheme used in sonnets',
    ],
  },
  {
    word: 'Hamartia',
    definition: 'A tragic flaw leading to the downfall of a hero',
    distractors: [
      'A happy ending in which good triumphs',
      'A comic device used to amuse an audience',
      'A type of setting found in pastoral writing',
    ],
  },
  {
    word: 'Polysyllabic',
    definition: 'Having many syllables',
    distractors: [
      'Having only a single syllable',
      'Containing no vowel sounds',
      'Relating to the rules of punctuation',
    ],
  },
  {
    word: 'Imperious',
    definition: 'Arrogant and domineering in manner',
    distractors: [
      'Humble and quiet by nature',
      'Extremely fearful and anxious',
      'Warm, welcoming, and friendly',
    ],
  },
  {
    word: 'Avarice',
    definition: 'Extreme greed for wealth or material gain',
    distractors: [
      'Extreme generosity towards others',
      'Deep and lingering sadness',
      'Great physical strength and power',
    ],
  },
  {
    word: 'Austere',
    definition: 'Severe or strict in appearance or manner',
    distractors: [
      'Warm and friendly in disposition',
      'Overly decorated and ornamented',
      'Humorous and playful in tone',
    ],
  },
  {
    word: 'Benevolent',
    definition: 'Well-meaning and kindly towards others',
    distractors: [
      'Cruel and harsh in dealings',
      'Indifferent and emotionally cold',
      'Secretive and cunning by nature',
    ],
  },
  {
    word: 'Insidious',
    definition: 'Proceeding in a gradual, subtle way but with harmful effects',
    distractors: [
      'Acting in a loud and openly obvious manner',
      'Happening quickly with no lasting consequences',
      'Being generous and kind in every action',
    ],
  },
  {
    word: 'Denounce',
    definition: 'To publicly declare something as wrong or evil',
    distractors: [
      'To quietly agree without raising any objection',
      'To offer praise publicly to draw attention',
      'To ignore something completely without comment',
    ],
  },
  {
    word: 'Foreboding',
    definition: 'A feeling that something bad is about to happen',
    distractors: [
      'A feeling of great joy and rising excitement',
      'A peaceful sense of calm and quiet contentment',
      'A vivid memory of an event from the past',
    ],
  },
  {
    word: 'Microcosm',
    definition: 'A small-scale representation of something much larger',
    distractors: [
      'An extremely large version of something else',
      'An instrument used to view tiny objects',
      'A figure of speech used in descriptive writing',
    ],
  },
  {
    word: 'Subversive',
    definition: 'Seeking to undermine an established system or institution',
    distractors: [
      'Strongly supporting the existing status quo',
      'Extremely conservative in views and politics',
      'Lacking any clear opinion on the matter',
    ],
  },
  {
    word: 'Didacticism',
    definition: 'The practice of conveying moral instruction through literature',
    distractors: [
      'The practice of writing entirely without any message',
      'A type of rhyme scheme used in lyric poems',
      'The deliberate use of regional dialect in writing',
    ],
  },
  {
    word: 'Sycophantic',
    definition: 'Behaving in a servile way to gain advantage',
    distractors: [
      'Rebellious and defiant in attitude',
      'Honest and direct in communication',
      'Shy and withdrawn in social settings',
    ],
  },
  {
    word: 'Ephemeral',
    definition: 'Lasting for only a very short time',
    distractors: [
      'Lasting forever and never fading',
      'Extremely heavy and difficult to lift',
      'Difficult to understand or interpret',
    ],
  },
  {
    word: 'Magnanimous',
    definition: 'Generous or forgiving, especially towards a rival',
    distractors: [
      'Petty and spiteful in personal dealings',
      'Extremely wealthy and openly showy',
      'Physically strong and powerfully built',
    ],
  },
  {
    word: 'Sardonic',
    definition: 'Grimly mocking or cynical in tone',
    distractors: [
      'Genuinely cheerful and warm-hearted',
      'Deeply romantic and tender',
      'Fearful and outwardly anxious',
    ],
  },
  {
    word: 'Melancholic',
    definition: 'Feeling or expressing pensive sadness',
    distractors: [
      'Extremely excited and enthusiastic',
      'Angry, volatile, and short-tempered',
      'Calm, content, and at ease',
    ],
  },
  {
    word: 'Pragmatic',
    definition: 'Dealing with things sensibly and realistically',
    distractors: [
      'Extremely idealistic and dreamy',
      'Overly emotional and irrational',
      'Abstract, theoretical, and detached',
    ],
  },
  {
    word: 'Utilitarian',
    definition: 'Designed to be useful rather than attractive',
    distractors: [
      'Created purely for decorative effect',
      'Extremely expensive and luxurious',
      'Closely related to traditional poetry',
    ],
  },
  {
    word: 'Sanguine',
    definition: 'Optimistic or positive, especially in a difficult situation',
    distractors: [
      'Extremely pessimistic, expecting the worst',
      'Relating to blood or the circulatory system',
      'Angry and bitter towards other people',
    ],
  },
  {
    word: 'Pedantic',
    definition: 'Excessively concerned with minor details or rules',
    distractors: [
      'Carefree, relaxed, and easy-going',
      'Extremely creative and imaginative',
      'Physically active and energetic',
    ],
  },
  {
    word: 'Antithesis',
    definition: 'A contrast or opposition between two things',
    distractors: [
      'A close similarity between two related things',
      'A type of rhyme used in lyric poems',
      'A dramatic pause used for emphasis',
    ],
  },
  {
    word: 'Reticent',
    definition: 'Not revealing thoughts or feelings readily',
    distractors: [
      'Extremely talkative and openly expressive',
      'Loud, forceful, and aggressive in speech',
      'Quick to anger and prone to outbursts',
    ],
  },
]

const QUESTIONS_PER_ROUND = 20

// ─── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Dev-only guard: ensure the four answer options for a word are within
 * ±25% of the correct definition's character count, so players can't
 * "cheat" by picking the longest answer.
 */
function assertBalancedOptions(word: VocabWord): void {
  if (process.env.NODE_ENV === 'production') return
  const correctLen = word.definition.length
  const min = correctLen * 0.75
  const max = correctLen * 1.25
  for (const d of word.distractors) {
    if (d.length < min || d.length > max) {
      // eslint-disable-next-line no-console
      console.warn(
        `[vocab-builder] Distractor for "${word.word}" is ${d.length} chars; ` +
          `correct definition is ${correctLen} chars (allowed ${Math.round(min)}-${Math.round(max)}). ` +
          `Distractor: "${d}"`,
      )
    }
  }
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function VocabularyBuilderPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [queue, setQueue] = useState<VocabWord[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [answered, setAnswered] = useState<string | null>(null)

  // Spaced repetition: track wrong words to re-queue
  const wrongWordsRef = useRef<VocabWord[]>([])
  const masteredCountRef = useRef(0)
  const learningCountRef = useRef(0)

  const currentWord = queue[qIdx] ?? null

  // Build options for current word
  const options = useMemo(() => {
    if (!currentWord) return []
    const opts = [currentWord.definition, ...currentWord.distractors]
    return shuffle(opts)
  }, [currentWord])

  const handleStart = useCallback(() => {
    if (process.env.NODE_ENV !== 'production') {
      VOCAB_BANK.forEach(assertBalancedOptions)
    }
    const shuffled = shuffle(VOCAB_BANK).slice(0, QUESTIONS_PER_ROUND)
    setQueue(shuffled)
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setAnswered(null)
    wrongWordsRef.current = []
    masteredCountRef.current = 0
    learningCountRef.current = 0
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleAnswer = useCallback(
    (choice: string) => {
      if (answered || !currentWord) return
      setAnswered(choice)
      setTotalAnswered((t) => t + 1)

      const isCorrect = choice === currentWord.definition
      if (isCorrect) {
        setScore((s) => s + 1)
        masteredCountRef.current++
      } else {
        learningCountRef.current++
        // Spaced repetition: add wrong word back into the queue later
        wrongWordsRef.current.push(currentWord)
      }

      setTimeout(() => {
        // Check if we need to re-inject wrong words
        let nextQueue = [...queue]
        if (qIdx + 1 >= nextQueue.length && wrongWordsRef.current.length > 0) {
          // Append wrong words for another pass
          nextQueue = [...nextQueue, ...shuffle(wrongWordsRef.current)]
          wrongWordsRef.current = []
          setQueue(nextQueue)
        }

        if (qIdx + 1 >= nextQueue.length) {
          setGameState('finished')
        } else {
          setQIdx((i) => i + 1)
          setAnswered(null)
        }
      }, 1200)
    },
    [answered, currentWord, qIdx, queue],
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
          gameId="vocabulary-builder"
          title="Vocabulary Builder"
          description="Select the correct definition for each word. Wrong answers reappear for spaced repetition."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || QUESTIONS_PER_ROUND}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {currentWord && (
            <div className="space-y-6">
              {/* Progress + Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {queue.length}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="size-3.5" /> {masteredCountRef.current} mastered
                  </span>
                  <span className="flex items-center gap-1 text-clay-600">
                    <XCircle className="size-3.5" /> {learningCountRef.current} learning
                  </span>
                </div>
              </div>

              {/* Word prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  What does this word mean?
                </p>
                <h3 className="text-2xl font-bold text-foreground">{currentWord.word}</h3>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {options.map((opt, i) => {
                  const isCorrect = opt === currentWord.definition
                  const isChosen = opt === answered
                  let optClass = 'border-border hover:border-primary/50 hover:bg-primary/5'
                  if (answered) {
                    if (isCorrect)
                      optClass = 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                    else if (isChosen) optClass = 'border-red-500 bg-red-500/10 text-red-400'
                    else optClass = 'opacity-40 border-border'
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!answered}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-150 text-left',
                        optClass,
                      )}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
