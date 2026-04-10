'use client'

import { useState, useCallback, useMemo, useRef } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface VocabWord {
  word: string
  definition: string
  distractors: string[]
}

const VOCAB_BANK: VocabWord[] = [
  { word: 'Ambiguity', definition: 'Having more than one possible meaning', distractors: ['A strong opinion', 'A type of metaphor', 'A grammatical error'] },
  { word: 'Juxtaposition', definition: 'Placing two things side by side for contrast', distractors: ['A type of punctuation', 'Repetition of sounds', 'A concluding paragraph'] },
  { word: 'Ominous', definition: 'Giving the impression something bad is about to happen', distractors: ['Extremely loud', 'Full of joy', 'Relating to the past'] },
  { word: 'Didactic', definition: 'Intended to teach or instruct, especially morally', distractors: ['Related to drama', 'Extremely detailed', 'Lacking emotion'] },
  { word: 'Pathos', definition: 'A quality that evokes pity or sadness', distractors: ['Anger or frustration', 'A logical argument', 'Comic relief'] },
  { word: 'Connotation', definition: 'An idea or feeling that a word invokes beyond its literal meaning', distractors: ['The dictionary definition of a word', 'A type of sentence structure', 'A figure of speech'] },
  { word: 'Denotation', definition: 'The literal or dictionary definition of a word', distractors: ['The emotional associations of a word', 'A dramatic device', 'A paragraph structure'] },
  { word: 'Allegory', definition: 'A story with a hidden moral or political meaning', distractors: ['A type of rhyme scheme', 'A character description', 'A short poem'] },
  { word: 'Soliloquy', definition: 'A speech where a character speaks their thoughts aloud, alone on stage', distractors: ['A conversation between two characters', 'Stage directions', 'A chorus speaking together'] },
  { word: 'Anachronism', definition: 'Something placed in the wrong historical period', distractors: ['A repeated phrase', 'An old-fashioned word', 'A type of stanza'] },
  { word: 'Catharsis', definition: 'The release of strong emotions through art or drama', distractors: ['The climax of a story', 'A type of irony', 'A persuasive technique'] },
  { word: 'Duality', definition: 'The state of having two contrasting aspects or qualities', distractors: ['A type of rhyme', 'Agreement between characters', 'A poetic form'] },
  { word: 'Hubris', definition: 'Excessive pride or self-confidence, often leading to downfall', distractors: ['Deep sadness', 'A character flaw of cowardice', 'A type of comedy'] },
  { word: 'Motif', definition: 'A recurring element that has symbolic significance', distractors: ['The main character', 'A single scene', 'A type of narrator'] },
  { word: 'Polemical', definition: 'Strongly critical or controversial in tone', distractors: ['Quietly reflective', 'Humorous and light', 'Related to poetry'] },
  { word: 'Semantic', definition: 'Relating to meaning in language', distractors: ['Relating to sound in language', 'Relating to grammar', 'Relating to spelling'] },
  { word: 'Pejorative', definition: 'Expressing contempt or disapproval', distractors: ['Expressing admiration', 'Neutral in tone', 'Extremely formal'] },
  { word: 'Hyperbolic', definition: 'Deliberately exaggerated for emphasis', distractors: ['Understated and subtle', 'Completely accurate', 'Related to rhythm'] },
  { word: 'Evocative', definition: 'Bringing strong images, memories, or feelings to mind', distractors: ['Difficult to understand', 'Short and factual', 'Relating to dialogue'] },
  { word: 'Colloquial', definition: 'Informal language used in everyday conversation', distractors: ['Extremely formal language', 'Old English vocabulary', 'Technical terminology'] },
  { word: 'Syntax', definition: 'The arrangement of words and phrases in a sentence', distractors: ['The meaning of words', 'The sound of words', 'The spelling of words'] },
  { word: 'Rhetoric', definition: 'The art of persuasive speaking or writing', distractors: ['The study of grammar', 'A type of poem', 'A dramatic monologue'] },
  { word: 'Visceral', definition: 'Relating to deep inward feelings; gut reactions', distractors: ['Relating to vision', 'Intellectual and reasoned', 'Abstract and vague'] },
  { word: 'Exposition', definition: 'The part of a narrative that introduces background information', distractors: ['The climax of a story', 'The final resolution', 'A type of conflict'] },
  { word: 'Denouement', definition: 'The final resolution or outcome of a story', distractors: ['The opening scene', 'A rising tension', 'A subplot'] },
  { word: 'Euphemism', definition: 'A mild expression used to replace something harsh or blunt', distractors: ['An extreme exaggeration', 'A direct statement', 'A type of irony'] },
  { word: 'Analepsis', definition: 'A flashback to an earlier point in the narrative', distractors: ['A jump forward in time', 'A pause in the narrative', 'A change of narrator'] },
  { word: 'Prolepsis', definition: 'A flash-forward to a future point in the narrative', distractors: ['A flashback to the past', 'A dream sequence', 'A subplot'] },
  { word: 'Verisimilitude', definition: 'The appearance of being true or real', distractors: ['Obvious fantasy', 'A type of metaphor', 'A rhyme scheme'] },
  { word: 'Hamartia', definition: 'A tragic flaw leading to the downfall of a hero', distractors: ['A happy ending', 'A comic device', 'A type of setting'] },
  { word: 'Polysyllabic', definition: 'Having many syllables', distractors: ['Having one syllable', 'Having no vowels', 'Relating to punctuation'] },
  { word: 'Imperious', definition: 'Arrogant and domineering', distractors: ['Humble and quiet', 'Extremely fearful', 'Warm and welcoming'] },
  { word: 'Avarice', definition: 'Extreme greed for wealth or material gain', distractors: ['Extreme generosity', 'Deep sadness', 'Physical strength'] },
  { word: 'Austere', definition: 'Severe or strict in appearance or manner', distractors: ['Warm and friendly', 'Overly decorated', 'Humorous and playful'] },
  { word: 'Benevolent', definition: 'Well-meaning and kindly', distractors: ['Cruel and harsh', 'Indifferent and cold', 'Secretive and cunning'] },
  { word: 'Insidious', definition: 'Proceeding in a gradual, subtle way but with harmful effects', distractors: ['Loud and obvious', 'Quick and harmless', 'Generous and kind'] },
  { word: 'Denounce', definition: 'To publicly declare something as wrong or evil', distractors: ['To quietly agree', 'To praise publicly', 'To ignore completely'] },
  { word: 'Foreboding', definition: 'A feeling that something bad will happen', distractors: ['A feeling of great joy', 'A sense of calm', 'A memory of the past'] },
  { word: 'Microcosm', definition: 'A small-scale representation of something much larger', distractors: ['An extremely large thing', 'A microscope', 'A type of metaphor'] },
  { word: 'Subversive', definition: 'Seeking to undermine an established system or institution', distractors: ['Supporting the status quo', 'Extremely conservative', 'Lacking any opinion'] },
  { word: 'Didacticism', definition: 'The practice of conveying moral instruction through literature', distractors: ['Writing without any message', 'A type of rhyme scheme', 'The use of dialect'] },
  { word: 'Sycophantic', definition: 'Behaving in a servile way to gain advantage', distractors: ['Rebellious and defiant', 'Honest and direct', 'Shy and withdrawn'] },
  { word: 'Ephemeral', definition: 'Lasting for only a short time', distractors: ['Lasting forever', 'Extremely heavy', 'Difficult to understand'] },
  { word: 'Magnanimous', definition: 'Generous or forgiving, especially towards a rival', distractors: ['Petty and spiteful', 'Extremely wealthy', 'Physically strong'] },
  { word: 'Sardonic', definition: 'Grimly mocking or cynical', distractors: ['Genuinely cheerful', 'Deeply romantic', 'Fearful and anxious'] },
  { word: 'Melancholic', definition: 'Feeling or expressing pensive sadness', distractors: ['Extremely excited', 'Angry and volatile', 'Calm and content'] },
  { word: 'Pragmatic', definition: 'Dealing with things sensibly and realistically', distractors: ['Extremely idealistic', 'Overly emotional', 'Abstract and theoretical'] },
  { word: 'Utilitarian', definition: 'Designed to be useful rather than attractive', distractors: ['Purely decorative', 'Extremely expensive', 'Related to poetry'] },
  { word: 'Sanguine', definition: 'Optimistic or positive, especially in a difficult situation', distractors: ['Extremely pessimistic', 'Relating to blood', 'Angry and bitter'] },
  { word: 'Pedantic', definition: 'Excessively concerned with minor details or rules', distractors: ['Carefree and relaxed', 'Extremely creative', 'Physically active'] },
  { word: 'Antithesis', definition: 'A contrast or opposition between two things', distractors: ['A similarity between two things', 'A type of rhyme', 'A dramatic pause'] },
  { word: 'Reticent', definition: 'Not revealing thoughts or feelings readily', distractors: ['Extremely talkative', 'Loud and forceful', 'Quick to anger'] },
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

// ─── Component ─────────────────────────────────────────────────────────────────

export default function VocabularyBuilderPage() {
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
    [answered, currentWord, qIdx, queue]
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          render={<Link href="/games" />}
        >
          <ArrowLeft className="size-4 mr-1" />
          Back to Games
        </Button>

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
                  <span className="flex items-center gap-1 text-amber-400">
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
                    else if (isChosen)
                      optClass = 'border-red-500 bg-red-500/10 text-red-400'
                    else optClass = 'opacity-40 border-border'
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!answered}
                      className={cn(
                        'rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-150 text-left',
                        optClass
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
