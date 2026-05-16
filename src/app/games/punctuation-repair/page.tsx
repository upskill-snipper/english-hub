'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Wrench } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface PunctuationItem {
  broken: string
  options: [string, string, string, string]
  answerIndex: number
  ruleTested: string
}

const QUESTIONS_PER_ROUND = 15

const PUNCTUATION_BANK: PunctuationItem[] = [
  // ── Capital letters & full stops ──────────────────────────────────────────
  {
    broken: 'the dog ran across the field',
    options: [
      'The dog ran across the field.',
      'the dog ran across the field.',
      'The dog ran across the field',
      'The Dog ran across the Field.',
    ],
    answerIndex: 0,
    ruleTested: 'Capital letter to open and full stop to close a sentence',
  },
  {
    broken: 'we visited london in july',
    options: [
      'We visited London in July.',
      'We visited london in july.',
      'we visited London in July',
      'We Visited London In July.',
    ],
    answerIndex: 0,
    ruleTested: 'Capital letters for proper nouns',
  },
  {
    broken: 'my friend sarah lives in manchester',
    options: [
      'My friend sarah lives in manchester.',
      'My friend Sarah lives in Manchester.',
      'my friend Sarah lives in Manchester.',
      'My Friend Sarah Lives In Manchester.',
    ],
    answerIndex: 1,
    ruleTested: 'Capital letters for names and places',
  },
  {
    broken: 'the film starts at eight oclock',
    options: [
      'The film starts at eight oclock.',
      "the film starts at eight o'clock.",
      "The film starts at eight o'clock.",
      "The film starts at eight o'clock",
    ],
    answerIndex: 2,
    ruleTested: "Apostrophe in o'clock and sentence punctuation",
  },
  {
    broken: 'i think we should leave now',
    options: [
      'i think we should leave now.',
      'I think we should leave now',
      'I think we should leave now.',
      'I Think We Should Leave Now.',
    ],
    answerIndex: 2,
    ruleTested: 'Capital "I" as a pronoun',
  },
  // ── Question & exclamation marks ──────────────────────────────────────────
  {
    broken: 'where are you going',
    options: [
      'Where are you going.',
      'Where are you going?',
      'where are you going?',
      'Where are you going!',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark to end a direct question',
  },
  {
    broken: 'what a wonderful surprise',
    options: [
      'What a wonderful surprise.',
      'what a wonderful surprise!',
      'What a wonderful surprise?',
      'What a wonderful surprise!',
    ],
    answerIndex: 3,
    ruleTested: 'Exclamation mark for an exclamatory sentence',
  },
  {
    broken: 'can you help me carry these books',
    options: [
      'Can you help me carry these books?',
      'Can you help me carry these books.',
      'can you help me carry these books?',
      'Can you help me carry these books!',
    ],
    answerIndex: 0,
    ruleTested: 'Question mark after a request phrased as a question',
  },
  {
    broken: 'look out for that car',
    options: [
      'Look out for that car.',
      'Look out for that car?',
      'Look out for that car!',
      'look out for that car!',
    ],
    answerIndex: 2,
    ruleTested: 'Exclamation mark for urgency or strong feeling',
  },
  {
    broken: 'did she really say that',
    options: [
      'Did she really say that!',
      'Did she really say that?',
      'did she really say that?',
      'Did she really say that.',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark for a direct question',
  },
  {
    broken: 'how did you manage to fix it so quickly',
    options: [
      'How did you manage to fix it so quickly.',
      'how did you manage to fix it so quickly?',
      'How did you manage to fix it so quickly?',
      'How did you manage to fix it so quickly',
    ],
    answerIndex: 2,
    ruleTested: 'Question mark with "how" question word',
  },
  // ── Commas in lists ───────────────────────────────────────────────────────
  {
    broken: 'i bought apples bananas grapes and oranges',
    options: [
      'I bought apples, bananas, grapes and oranges.',
      'I bought apples bananas grapes and oranges.',
      'I bought, apples, bananas, grapes and oranges.',
      'I bought apples, bananas, grapes, and, oranges.',
    ],
    answerIndex: 0,
    ruleTested: 'Commas to separate items in a list',
  },
  {
    broken: 'she packed a towel sun cream a hat and a book',
    options: [
      'She packed a towel sun cream, a hat and a book.',
      'She packed a towel, sun cream, a hat and a book.',
      'She packed a towel, sun cream, a hat, and a book,',
      'she packed a towel, sun cream, a hat and a book.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas in a list of nouns',
  },
  {
    broken: 'the recipe needs flour butter sugar and eggs',
    options: [
      'The recipe needs flour, butter, sugar and eggs.',
      'The recipe needs flour butter, sugar and eggs.',
      'The recipe, needs, flour, butter, sugar and eggs.',
      'The recipe needs flour, butter, sugar and eggs',
    ],
    answerIndex: 0,
    ruleTested: 'Commas separating list items before "and"',
  },
  {
    broken: 'we hiked swam cycled and camped during the trip',
    options: [
      'We hiked swam cycled and camped during the trip.',
      'We hiked, swam, cycled and camped during the trip.',
      'We hiked, swam, cycled, and camped, during the trip.',
      'we hiked, swam, cycled and camped during the trip.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas in a list of verbs',
  },
  {
    broken: 'the flag was red white and blue',
    options: [
      'The flag was red white and blue.',
      'The flag was red, white, and, blue.',
      'The flag was red, white and blue.',
      'The flag was, red, white and blue.',
    ],
    answerIndex: 2,
    ruleTested: 'Commas in a short list of adjectives',
  },
  // ── Commas after subordinate clauses / fronted adverbials ─────────────────
  {
    broken: 'because it was raining we stayed indoors',
    options: [
      'Because it was raining we stayed indoors.',
      'Because it was raining, we stayed indoors.',
      'because it was raining, we stayed indoors.',
      'Because it was raining, we stayed indoors',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a subordinate clause at the start',
  },
  {
    broken: 'after the match had finished the players shook hands',
    options: [
      'After the match had finished the players shook hands.',
      'After the match had finished, the players shook hands.',
      'After the match had finished, the players shook hands',
      'after the match had finished, the players shook hands.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a fronted subordinate clause',
  },
  {
    broken: 'although she was tired she finished her homework',
    options: [
      'Although she was tired she finished her homework.',
      'although she was tired, she finished her homework.',
      'Although she was tired, she finished her homework.',
      'Although she was tired, she finished her homework',
    ],
    answerIndex: 2,
    ruleTested: 'Comma separating a fronted "although" clause',
  },
  {
    broken: 'when the bell rang the students left the room',
    options: [
      'When the bell rang the students left the room.',
      'When the bell rang, the students left the room.',
      'when the bell rang, the students left the room.',
      'When the bell rang the students, left the room.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a "when" subordinate clause',
  },
  {
    broken: 'suddenly the lights went out',
    options: [
      'Suddenly the lights went out.',
      'Suddenly, the lights went out.',
      'suddenly, the lights went out.',
      'Suddenly the lights went out',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a fronted adverbial',
  },
  {
    broken: 'if you finish early you may go outside',
    options: [
      'If you finish early you may go outside.',
      'If you finish early, you may go outside.',
      'if you finish early, you may go outside.',
      'If you finish early, you may go outside',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after a fronted conditional clause',
  },
  {
    broken: 'meanwhile the rest of the team kept practising',
    options: [
      'Meanwhile the rest of the team kept practising.',
      'meanwhile, the rest of the team kept practising.',
      'Meanwhile, the rest of the team kept practising.',
      'Meanwhile the rest of the team, kept practising.',
    ],
    answerIndex: 2,
    ruleTested: 'Comma after a fronted adverbial of time',
  },
  // ── Comma-splice fixes ────────────────────────────────────────────────────
  {
    broken: 'it was late, we went home',
    options: [
      'It was late, we went home.',
      'It was late, so we went home.',
      'It was late we went home.',
      'It was late, so we went home',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice with a conjunction',
  },
  {
    broken: 'the test was hard, everyone passed it',
    options: [
      'The test was hard, everyone passed it.',
      'The test was hard everyone passed it.',
      'The test was hard, but everyone passed it.',
      'The test was hard, but everyone passed it',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with "but"',
  },
  {
    broken: 'she loves reading, her brother prefers sport',
    options: [
      'She loves reading, her brother prefers sport.',
      'She loves reading; her brother prefers sport.',
      'She loves reading her brother prefers sport.',
      'She loves reading, her brother, prefers sport.',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice with a semicolon',
  },
  {
    broken: 'the rain stopped, the sun came out',
    options: [
      'The rain stopped, the sun came out.',
      'The rain stopped the sun came out.',
      'The rain stopped, and the sun came out.',
      'The rain stopped and, the sun came out.',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with "and"',
  },
  {
    broken: 'he trained every day, he wanted to win',
    options: [
      'He trained every day, he wanted to win.',
      'He trained every day because he wanted to win.',
      'He trained every day he wanted to win.',
      'He trained every day, because, he wanted to win.',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice with a subordinating conjunction',
  },
  {
    broken: 'we waited for an hour, the bus never arrived',
    options: [
      'We waited for an hour, the bus never arrived.',
      'We waited for an hour. The bus never arrived.',
      'We waited for an hour the bus never arrived.',
      'We waited for an hour, the bus never arrived',
    ],
    answerIndex: 1,
    ruleTested: 'Fixing a comma splice by using two sentences',
  },
  {
    broken: 'the museum was closed, we visited the park instead',
    options: [
      'The museum was closed, we visited the park instead.',
      'The museum was closed we visited the park instead.',
      'The museum was closed, so we visited the park instead.',
      'The museum was closed so, we visited the park instead.',
    ],
    answerIndex: 2,
    ruleTested: 'Fixing a comma splice with "so"',
  },
  // ── Speech marks ──────────────────────────────────────────────────────────
  {
    broken: 'come here at once said the teacher',
    options: [
      '"Come here at once," said the teacher.',
      '"Come here at once" said the teacher.',
      'Come here at once, said the teacher.',
      '"Come here at once", said the teacher.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma inside speech marks before the reporting clause',
  },
  {
    broken: 'tom asked are we nearly there yet',
    options: [
      'Tom asked, "Are we nearly there yet".',
      'Tom asked, "Are we nearly there yet?"',
      'Tom asked "are we nearly there yet?"',
      'Tom asked, Are we nearly there yet?',
    ],
    answerIndex: 1,
    ruleTested: 'Question mark inside speech marks',
  },
  {
    broken: 'i am so excited shouted maya',
    options: [
      '"I am so excited" shouted Maya.',
      '"I am so excited," shouted maya.',
      '"I am so excited!" shouted Maya.',
      'I am so excited! shouted Maya.',
    ],
    answerIndex: 2,
    ruleTested: 'Exclamation mark inside speech marks',
  },
  {
    broken: 'the guide explained this castle is over 800 years old',
    options: [
      'The guide explained, "This castle is over 800 years old."',
      'The guide explained "This castle is over 800 years old".',
      'The guide explained, this castle is over 800 years old.',
      'The guide explained, "this castle is over 800 years old."',
    ],
    answerIndex: 0,
    ruleTested: 'Comma before speech and capital letter to open the speech',
  },
  {
    broken: 'please be quiet whispered the librarian',
    options: [
      '"Please be quiet," whispered the librarian.',
      '"Please be quiet" whispered the librarian.',
      '"Please be quiet," whispered the Librarian.',
      'Please be quiet, whispered the librarian.',
    ],
    answerIndex: 0,
    ruleTested: 'Comma inside speech marks with a reporting verb',
  },
  {
    broken: 'she said i will meet you after school',
    options: [
      'She said "I will meet you after school."',
      'She said, "I will meet you after school."',
      'She said, "i will meet you after school."',
      'She said, I will meet you after school.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma before direct speech and capital to begin it',
  },
  {
    broken: 'wait for me called jack',
    options: [
      '"Wait for me!" called Jack.',
      '"Wait for me" called Jack.',
      '"Wait for me!" called jack.',
      'Wait for me! called Jack.',
    ],
    answerIndex: 0,
    ruleTested: 'Exclamation mark and speech marks for a shout',
  },
  // ── Apostrophes (possession & contraction) ────────────────────────────────
  {
    broken: 'thats my sisters bicycle',
    options: [
      'Thats my sisters bicycle.',
      "That's my sister's bicycle.",
      "Thats my sister's bicycle.",
      "That's my sisters bicycle.",
    ],
    answerIndex: 1,
    ruleTested: 'Apostrophes for contraction and singular possession',
  },
  {
    broken: 'the dogs tail wagged happily',
    options: [
      'The dogs tail wagged happily.',
      "The dog's tail wagged happily.",
      "The dogs' tail wagged happily.",
      "The dog's tail wagged happily",
    ],
    answerIndex: 1,
    ruleTested: 'Apostrophe for singular possession',
  },
  {
    broken: 'we couldnt find the keys anywhere',
    options: [
      'We couldnt find the keys anywhere.',
      "We could'nt find the keys anywhere.",
      "We couldn't find the keys anywhere.",
      "We couldn't find the keys anywhere",
    ],
    answerIndex: 2,
    ruleTested: 'Apostrophe in a contraction (could not)',
  },
  {
    broken: 'the players changing room was locked',
    options: [
      'The players changing room was locked.',
      "The players' changing room was locked.",
      "The player's changing room was locked.",
      'The players changing-room was locked.',
    ],
    answerIndex: 1,
    ruleTested: 'Apostrophe for plural possession',
  },
  {
    broken: 'its going to be a long day isnt it',
    options: [
      'Its going to be a long day isnt it?',
      "It's going to be a long day, isn't it?",
      "It's going to be a long day isn't it.",
      "Its going to be a long day, isn't it?",
    ],
    answerIndex: 1,
    ruleTested: 'Contractions with a comma before a question tag',
  },
  // ── Colons & semicolons ───────────────────────────────────────────────────
  {
    broken: 'you will need the following a pen a ruler and paper',
    options: [
      'You will need the following, a pen, a ruler and paper.',
      'You will need the following: a pen, a ruler and paper.',
      'You will need the following; a pen, a ruler and paper.',
      'You will need the following: a pen a ruler and paper.',
    ],
    answerIndex: 1,
    ruleTested: 'Colon to introduce a list',
  },
  {
    broken: 'the journey was long the views were stunning',
    options: [
      'The journey was long, the views were stunning.',
      'The journey was long the views were stunning.',
      'The journey was long; the views were stunning.',
      'The journey was long: the views were stunning;',
    ],
    answerIndex: 2,
    ruleTested: 'Semicolon to join two related independent clauses',
  },
  {
    broken: 'there is one thing i value above all else honesty',
    options: [
      'There is one thing I value above all else, honesty.',
      'There is one thing I value above all else: honesty.',
      'There is one thing I value above all else; honesty.',
      'There is one thing I value above all else honesty.',
    ],
    answerIndex: 1,
    ruleTested: 'Colon before an explanation or single example',
  },
  // ── Mixed sentence-level punctuation ──────────────────────────────────────
  {
    broken: 'my favourite subjects are english history and art',
    options: [
      'My favourite subjects are english, history and art.',
      'My favourite subjects are English, History and Art.',
      'My favourite subjects are English, history and art.',
      'My favourite subjects are English history and art.',
    ],
    answerIndex: 2,
    ruleTested: 'Capital for the language "English"; lower case for other subjects',
  },
  {
    broken: 'on monday we have a science test',
    options: [
      'On monday we have a science test.',
      'On Monday, we have a science test.',
      'on Monday we have a science test.',
      'On Monday we have a science test',
    ],
    answerIndex: 1,
    ruleTested: 'Capital for days of the week and comma after fronted adverbial',
  },
  {
    broken: 'help i cant swim he yelled',
    options: [
      '"Help, I can\'t swim!" he yelled.',
      '"Help I cant swim" he yelled.',
      '"Help, I can\'t swim!" He yelled.',
      "Help, I can't swim! he yelled.",
    ],
    answerIndex: 0,
    ruleTested: 'Speech marks, contraction and exclamation in dialogue',
  },
  {
    broken: 'london paris and rome are european capitals',
    options: [
      'London, Paris and Rome are european capitals.',
      'london, paris and rome are European capitals.',
      'London, Paris and Rome are European capitals.',
      'London Paris and Rome are European capitals.',
    ],
    answerIndex: 2,
    ruleTested: 'Capitals for proper nouns and the adjective "European"',
  },
  {
    broken: 'have you read the novel the giver',
    options: [
      'Have you read the novel the giver?',
      'Have you read the novel The Giver?',
      'Have you read the novel "The Giver".',
      'have you read the novel The Giver?',
    ],
    answerIndex: 1,
    ruleTested: 'Capitalising a title and using a question mark',
  },
  {
    broken: 'first we mixed the ingredients then we baked the cake',
    options: [
      'First we mixed the ingredients then we baked the cake.',
      'First, we mixed the ingredients, then we baked the cake.',
      'First we mixed the ingredients, then we baked the cake.',
      'first, we mixed the ingredients then we baked the cake.',
    ],
    answerIndex: 1,
    ruleTested: 'Commas after a fronted adverbial and between linked clauses',
  },
  {
    broken: 'dr patel will see you now said the receptionist',
    options: [
      '"Dr Patel will see you now," said the receptionist.',
      '"dr patel will see you now," said the receptionist.',
      'Dr Patel will see you now, said the receptionist.',
      '"Dr Patel will see you now" said the receptionist.',
    ],
    answerIndex: 0,
    ruleTested: 'Capital for a title/name within direct speech',
  },
  {
    broken: 'although it was difficult i never gave up and i succeeded',
    options: [
      'Although it was difficult I never gave up and I succeeded.',
      'Although it was difficult, I never gave up, and I succeeded.',
      'although it was difficult, I never gave up and I succeeded.',
      'Although it was difficult I never gave up, and I succeeded.',
    ],
    answerIndex: 1,
    ruleTested: 'Comma after subordinate clause and before a coordinating "and"',
  },
  {
    broken: 'wow that was the best concert ive ever been to',
    options: [
      'Wow that was the best concert ive ever been to.',
      "Wow, that was the best concert I've ever been to!",
      "wow, that was the best concert I've ever been to!",
      "Wow, that was the best concert I've ever been to.",
    ],
    answerIndex: 1,
    ruleTested: 'Comma after an interjection plus contraction and exclamation',
  },
  {
    broken: 'the children who were tired fell asleep quickly',
    options: [
      'The children, who were tired, fell asleep quickly.',
      'The children who were tired fell asleep quickly.',
      'The children, who were tired fell asleep quickly.',
      'The children who were tired, fell asleep quickly.',
    ],
    answerIndex: 0,
    ruleTested: 'Pair of commas around a non-defining relative clause',
  },
  {
    broken: 'mr jones our neighbour is a firefighter',
    options: [
      'Mr Jones our neighbour is a firefighter.',
      'Mr Jones, our neighbour, is a firefighter.',
      'mr jones, our neighbour, is a firefighter.',
      'Mr Jones, our neighbour is a firefighter.',
    ],
    answerIndex: 1,
    ruleTested: 'Pair of commas around an appositive (extra information)',
  },
  {
    broken: 'turn off the lights before you leave the room',
    options: [
      'turn off the lights before you leave the room.',
      'Turn off the lights, before you leave the room.',
      'Turn off the lights before you leave the room.',
      'Turn off the lights before you leave the room?',
    ],
    answerIndex: 2,
    ruleTested: 'No comma needed before a subordinate clause that follows',
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

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PunctuationRepairPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<PunctuationItem[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const currentQ = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    setQuestions(shuffle(PUNCTUATION_BANK).slice(0, QUESTIONS_PER_ROUND))
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
    (idx: number) => {
      if (!currentQ || feedback) return
      const isCorrect = idx === currentQ.answerIndex
      setSelected(idx)
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
      }, 2200)
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
          gameId="punctuation-repair"
          title="Punctuation Repair"
          description="A sentence has been broken. Pick the version that uses punctuation correctly — capital letters, full stops, commas, speech marks and more."
          difficulty="Crossover"
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
                  Sentence {qIdx + 1} of {questions.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Broken sentence card */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Wrench className="size-3.5 text-primary" />
                  Repair this sentence
                </div>
                <p className="text-lg font-medium text-foreground italic">
                  &ldquo;{currentQ.broken}&rdquo;
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {currentQ.options.map((opt, idx) => {
                  const isAnswer = idx === currentQ.answerIndex
                  const isPicked = selected === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={!!feedback}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-left text-base font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/20',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        feedback &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        feedback &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !isAnswer && !isPicked && 'border-border opacity-50',
                      )}
                    >
                      <span className="mr-2 font-bold text-muted-foreground">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {feedback && (
                <div
                  className={cn(
                    'rounded-lg px-4 py-3 text-sm',
                    feedback === 'correct'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400',
                  )}
                >
                  <div className="flex items-center gap-2 font-medium">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Spot on — nicely repaired!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The correct version is option{' '}
                        {String.fromCharCode(65 + currentQ.answerIndex)}.
                      </>
                    )}
                  </div>
                  <p className="mt-1.5 pl-6 text-xs text-muted-foreground">
                    Rule: {currentQ.ruleTested}
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
