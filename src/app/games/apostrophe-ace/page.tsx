'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface ApostropheQuestion {
  options: [string, string, string, string]
  answerIndex: number
  ruleTested: string
  explanation: string
}

const QUESTION_BANK: ApostropheQuestion[] = [
  // ── Omission (contractions) ──
  {
    options: [
      'I dont know where she went.',
      "I don't know where she went.",
      "I do'nt know where she went.",
      "I don't' know where she went.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation: '"don\'t" is short for "do not". The apostrophe replaces the missing "o".',
  },
  {
    options: [
      'Its raining, so we cant go out.',
      "It's raining, so we can't go out.",
      "Its raining, so we can't go out.",
      "It's raining, so we cant go out.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"It\'s" = "it is" and "can\'t" = "cannot". Both need an apostrophe for the missing letters.',
  },
  {
    options: [
      'They wont be here until were ready.',
      "They won't be here until we're ready.",
      "They wo'nt be here until we're ready.",
      "They won't be here until were ready.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"won\'t" = "will not" and "we\'re" = "we are". Apostrophes mark the dropped letters.',
  },
  {
    options: [
      'Shes already finished, hasnt she?',
      "She's already finished, hasn't she?",
      "Shes' already finished, hasn't she?",
      "She's already finished, hasnt she?",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"She\'s" = "she has" and "hasn\'t" = "has not". Each contraction needs its apostrophe.',
  },
  {
    options: [
      'Were going to the park if its sunny.',
      "We're going to the park if it's sunny.",
      "Were going to the park if it's sunny.",
      "We're going to the park if its sunny.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"We\'re" = "we are" and "it\'s" = "it is". Plain "were" and "its" are different words.',
  },
  {
    options: [
      'Id rather wait until theyre back.',
      "I'd rather wait until they're back.",
      "I'd rather wait until theyre back.",
      "Id rather wait until they're back.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"I\'d" = "I would" and "they\'re" = "they are". The apostrophes show missing letters.',
  },
  {
    options: [
      'Lets see whos coming to the party.',
      "Let's see who's coming to the party.",
      "Lets see who's coming to the party.",
      "Let's see whos coming to the party.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"Let\'s" = "let us" and "who\'s" = "who is". Both are contractions needing apostrophes.',
  },
  {
    options: [
      'Youll be fine once youve practised.',
      "You'll be fine once you've practised.",
      "You'll be fine once youve practised.",
      "Youll be fine once you've practised.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"You\'ll" = "you will" and "you\'ve" = "you have". Apostrophes replace the dropped letters.',
  },
  {
    options: [
      'Theres no way hell agree to that.',
      "There's no way he'll agree to that.",
      "Theres no way he'll agree to that.",
      "There's no way hell agree to that.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation: '"There\'s" = "there is" and "he\'ll" = "he will". Each needs an apostrophe.',
  },
  {
    options: [
      'Im sure that wasnt my fault.',
      "I'm sure that wasn't my fault.",
      "Im sure that wasn't my fault.",
      "I'm sure that wasnt my fault.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation: '"I\'m" = "I am" and "wasn\'t" = "was not". Apostrophes mark the missing letters.',
  },
  {
    options: [
      'Shouldnt weve told them sooner?',
      "Shouldn't we've told them sooner?",
      "Should'nt we've told them sooner?",
      "Shouldn't weve told them sooner?",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"Shouldn\'t" = "should not" and "we\'ve" = "we have". The apostrophe sits where letters are removed.',
  },

  // ── its vs it's ──
  {
    options: [
      "The dog wagged it's tail happily.",
      'The dog wagged its tail happily.',
      "The dog wagged its' tail happily.",
      'The dog wagged it,s tail happily.',
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation:
      '"its" (no apostrophe) shows possession. "It\'s" only ever means "it is" or "it has".',
  },
  {
    options: [
      "Its been a long day, hasn't it?",
      "It's been a long day, hasn't it?",
      "Its' been a long day, hasn't it?",
      "Its been a long day, has'nt it?",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation:
      'Here "It\'s" means "It has", so it needs an apostrophe. "Its" without one shows possession.',
  },
  {
    options: [
      "The team lost it's best player.",
      'The team lost its best player.',
      "The team lost its' best player.",
      "The team lost it's' best player.",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation: 'The player belongs to the team, so use possessive "its" with no apostrophe.',
  },
  {
    options: [
      'I think its going to snow tonight.',
      "I think it's going to snow tonight.",
      "I think its' going to snow tonight.",
      'I think it,s going to snow tonight.',
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation: '"It\'s going" means "It is going", so the apostrophe is needed.',
  },
  {
    options: [
      "Every car has it's own number plate.",
      'Every car has its own number plate.',
      "Every car has its' own number plate.",
      "Every car has its own number plate'.",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation: 'The number plate belongs to the car, so use possessive "its" — no apostrophe.',
  },

  // ── your vs you're ──
  {
    options: [
      'Your going to love this film.',
      "You're going to love this film.",
      'Youre going to love this film.',
      "Your' going to love this film.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation: '"You\'re" = "you are". "Your" shows possession (your book, your idea).',
  },
  {
    options: [
      "Is this you're coat on the chair?",
      'Is this your coat on the chair?',
      'Is this youre coat on the chair?',
      "Is this your' coat on the chair?",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation: 'The coat belongs to you, so use possessive "your" with no apostrophe.',
  },
  {
    options: [
      'Your right — were almost there.',
      "You're right — we're almost there.",
      "Youre right — we're almost there.",
      "You're right — were almost there.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation:
      '"You\'re right" = "You are right", and "we\'re" = "we are". Both need apostrophes.',
  },
  {
    options: [
      "Remember to bring you're homework.",
      'Remember to bring your homework.',
      'Remember to bring youre homework.',
      "Remember to bring your' homework.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation: 'The homework belongs to you: possessive "your", no apostrophe.',
  },
  {
    options: [
      'Your the best person for the job.',
      "You're the best person for the job.",
      'Youre the best person for the job.',
      "Your' the best person for the job.",
    ],
    answerIndex: 1,
    ruleTested: 'your vs you’re',
    explanation: '"You\'re the best" = "You are the best", so the apostrophe is required.',
  },

  // ── Singular possession ──
  {
    options: [
      'The dogs bone was buried in the garden.',
      "The dog's bone was buried in the garden.",
      "The dogs' bone was buried in the garden.",
      'The dog,s bone was buried in the garden.',
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One dog owns the bone: add apostrophe + s to the singular noun ("dog\'s").',
  },
  {
    options: [
      'My sisters phone is broken again.',
      "My sister's phone is broken again.",
      "My sisters' phone is broken again.",
      'My sister,s phone is broken again.',
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One sister owns the phone, so use "sister\'s" (apostrophe before the s).',
  },
  {
    options: [
      'The teacher marked Toms essay first.',
      "The teacher marked Tom's essay first.",
      "The teacher marked Toms' essay first.",
      'The teacher marked Tom,s essay first.',
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'The essay belongs to Tom: add apostrophe + s to a singular name ("Tom\'s").',
  },
  {
    options: [
      'We met at the citys main library.',
      "We met at the city's main library.",
      "We met at the citys' main library.",
      "We met at the citie's main library.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One city owns the library: "city\'s". The apostrophe goes before the s.',
  },
  {
    options: [
      'The companys profits rose this year.',
      "The company's profits rose this year.",
      "The companys' profits rose this year.",
      "The companies' profits rose this year.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One company owns the profits, so use "company\'s" with apostrophe + s.',
  },
  {
    options: [
      'She borrowed the doctors pen.',
      "She borrowed the doctor's pen.",
      "She borrowed the doctors' pen.",
      'She borrowed the doctor,s pen.',
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One doctor owns the pen: add apostrophe + s ("doctor\'s").',
  },
  {
    options: [
      'The babys toy fell on the floor.',
      "The baby's toy fell on the floor.",
      "The babys' toy fell on the floor.",
      "The babies' toy fell on the floor.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One baby owns the toy: "baby\'s" (the y stays; just add ’s).',
  },
  {
    options: [
      "James car wouldn't start this morning.",
      "James's car wouldn't start this morning.",
      "James' car wouldnt start this morning.",
      "Jame's car wouldn't start this morning.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'For a singular name ending in s, modern UK style adds ’s: "James\'s car".',
  },

  // ── Plural possession ──
  {
    options: [
      'The dogs bones were scattered everywhere.',
      "The dogs' bones were scattered everywhere.",
      "The dog's bones were scattered everywhere.",
      "The dogs's bones were scattered everywhere.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation: 'Several dogs own the bones: add the apostrophe after the plural s ("dogs\'").',
  },
  {
    options: [
      'The students lockers are by the gym.',
      "The students' lockers are by the gym.",
      "The student's lockers are by the gym.",
      "The students's lockers are by the gym.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation:
      'Many students own the lockers, so the apostrophe goes after the s ("students\'").',
  },
  {
    options: [
      'The girls changing room was repainted.',
      "The girls' changing room was repainted.",
      "The girl's changing room was repainted.",
      "The girls's changing room was repainted.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation: 'The room belongs to the girls (plural): apostrophe after the s ("girls\'").',
  },
  {
    options: [
      'The teachers meeting starts at four.',
      "The teachers' meeting starts at four.",
      "The teacher's meeting starts at four.",
      "The teachers's meeting starts at four.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation: 'The meeting is for many teachers, so use "teachers\'" — apostrophe after the s.',
  },
  {
    options: [
      'Both countries leaders signed the treaty.',
      "Both countries' leaders signed the treaty.",
      "Both country's leaders signed the treaty.",
      "Both countries's leaders signed the treaty.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation:
      'The plural "countries" already ends in s, so just add an apostrophe ("countries\'").',
  },
  {
    options: [
      'The players kit was left in the bus.',
      "The players' kit was left in the bus.",
      "The player's kit was left in the bus.",
      "The players's kit was left in the bus.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation: 'The kit belongs to several players: apostrophe after the plural s ("players\'").',
  },

  // ── Irregular plural possession ──
  {
    options: [
      'The childrens playground was rebuilt.',
      "The children's playground was rebuilt.",
      "The childrens' playground was rebuilt.",
      "The childs' playground was rebuilt.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Children" is an irregular plural (no s), so add apostrophe + s: "children\'s".',
  },
  {
    options: [
      'The mens department is upstairs.',
      "The men's department is upstairs.",
      "The mens' department is upstairs.",
      "The mens's department is upstairs.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Men" is an irregular plural, so use apostrophe + s: "men\'s".',
  },
  {
    options: [
      'These are the womens trainers.',
      "These are the women's trainers.",
      "These are the womens' trainers.",
      "These are the womans' trainers.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Women" is already plural without an s, so add ’s: "women\'s".',
  },
  {
    options: [
      'The peoples voices were finally heard.',
      "The people's voices were finally heard.",
      "The peoples' voices were finally heard.",
      "The peoples's voices were finally heard.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"People" is an irregular plural, so it takes apostrophe + s: "people\'s".',
  },
  {
    options: [
      'The mice nest was hidden in the wall.',
      "The mice's nest was hidden in the wall.",
      "The mices' nest was hidden in the wall.",
      "The mice' nest was hidden in the wall.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Mice" is an irregular plural (no s), so add apostrophe + s: "mice\'s".',
  },

  // ── No apostrophe for plurals (the trap) ──
  {
    options: [
      "I bought three apple's at the shop.",
      'I bought three apples at the shop.',
      "I bought three apples' at the shop.",
      'I bought three apple,s at the shop.',
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation:
      'A simple plural never takes an apostrophe. "apples" just means more than one apple.',
  },
  {
    options: [
      "The 1990's were a memorable decade.",
      'The 1990s were a memorable decade.',
      "The 1990s' were a memorable decade.",
      "The 199'0s were a memorable decade.",
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation: 'Plurals of dates need no apostrophe: write "1990s", not "1990\'s".',
  },
  {
    options: [
      "We saw lots of bird's in the park.",
      'We saw lots of birds in the park.',
      "We saw lots of birds' in the park.",
      'We saw lots of bird,s in the park.',
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation: 'Plain plurals take no apostrophe. "birds" is simply more than one bird.',
  },
  {
    options: [
      "The shop sells fresh vegetable's daily.",
      'The shop sells fresh vegetables daily.',
      "The shop sells fresh vegetables' daily.",
      'The shop sells fresh vegetable,s daily.',
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation: 'No apostrophe is used to make a plural. "vegetables" is correct as it is.',
  },
  {
    options: [
      "There are five DVD's on the shelf.",
      'There are five DVDs on the shelf.',
      "There are five DVDs' on the shelf.",
      "There are five DV'Ds on the shelf.",
    ],
    answerIndex: 1,
    ruleTested: 'No apostrophe for plurals',
    explanation: 'Plurals of initialisms take no apostrophe: write "DVDs", not "DVD\'s".',
  },
  {
    options: [
      'The students worked hard all term.',
      "The student's worked hard all term.",
      "The students' worked hard all term.",
      'The students,s worked hard all term.',
    ],
    answerIndex: 0,
    ruleTested: 'No apostrophe for plurals',
    explanation:
      'Here "students" is just a plural subject (nothing is owned), so no apostrophe is needed.',
  },

  // ── Mixed / discrimination ──
  {
    options: [
      'The cats whiskers twitched as it slept.',
      "The cat's whiskers twitched as it slept.",
      "The cats' whiskers twitched as it slept.",
      "The cats whisker's twitched as it slept.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'One cat owns the whiskers, so use "cat\'s" (apostrophe before the s).',
  },
  {
    options: [
      'My parents house is near the river.',
      "My parents' house is near the river.",
      "My parent's house is near the river.",
      "My parents's house is near the river.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation:
      'Two parents share the house, so the apostrophe goes after the plural s ("parents\'").',
  },
  {
    options: [
      "Wheres the report you're writing?",
      "Where's the report you're writing?",
      'Wheres the report your writing?',
      "Where's the report your writing?",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"Where\'s" = "Where is" and "you\'re" = "you are". Both contractions need apostrophes.',
  },
  {
    options: [
      'Its time the school updated its website.',
      "It's time the school updated its website.",
      "Its time the school updated it's website.",
      "It's time the school updated it's website.",
    ],
    answerIndex: 1,
    ruleTested: 'its vs it’s',
    explanation:
      'First "It\'s" = "It is" (apostrophe). The second "its" is possessive (no apostrophe).',
  },
  {
    options: [
      'The boys football landed in next doors garden.',
      "The boy's football landed in next door's garden.",
      "The boys' football landed in next doors garden.",
      "The boys football landed in next door's garden.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation:
      'One boy owns the football and one neighbour owns the garden: "boy\'s" and "door\'s".',
  },
  {
    options: [
      'Charles bike has a flat tyre.',
      "Charles's bike has a flat tyre.",
      "Charles' bike has a flat tyre'.",
      "Charle's bike has a flat tyre.",
    ],
    answerIndex: 1,
    ruleTested: 'Singular possession',
    explanation: 'For a singular name ending in s, UK style usually adds ’s: "Charles\'s bike".',
  },
  {
    options: [
      'The witnesses statements matched exactly.',
      "The witnesses' statements matched exactly.",
      "The witness's statements matched exactly.",
      "The witnesses's statements matched exactly.",
    ],
    answerIndex: 1,
    ruleTested: 'Plural possession',
    explanation:
      'Several witnesses own the statements; the plural ends in s, so add only an apostrophe ("witnesses\'").',
  },
  {
    options: [
      'Theyre certain that its their turn now.',
      "They're certain that it's their turn now.",
      "They're certain that its their turn now.",
      "Theyre certain that it's their turn now.",
    ],
    answerIndex: 1,
    ruleTested: 'Omission',
    explanation:
      '"They\'re" = "they are" and "it\'s" = "it is". "Their" stays the same (possessive pronoun).',
  },
  {
    options: [
      'The geese pond freezes over in winter.',
      "The geese's pond freezes over in winter.",
      "The gooses' pond freezes over in winter.",
      "The geeses' pond freezes over in winter.",
    ],
    answerIndex: 1,
    ruleTested: 'Irregular plural possession',
    explanation: '"Geese" is an irregular plural with no s, so add apostrophe + s: "geese\'s".',
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

const ROUND_SIZE = 15

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ApostropheAcePage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<ApostropheQuestion[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)

  const currentQuestion = questions[qIdx] ?? null
  const answered = selected !== null

  const handleStart = useCallback(() => {
    setQuestions(shuffle(QUESTION_BANK).slice(0, ROUND_SIZE))
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    setSelected(null)
    setGameState('playing')
  }, [])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const handleSelect = useCallback(
    (idx: number) => {
      if (!currentQuestion || answered) return
      setSelected(idx)
      setTotalAnswered((t) => t + 1)
      if (idx === currentQuestion.answerIndex) {
        setScore((s) => s + 1)
      }
    },
    [currentQuestion, answered],
  )

  const handleNext = useCallback(() => {
    if (qIdx + 1 >= questions.length) {
      setGameState('finished')
    } else {
      setQIdx((i) => i + 1)
      setSelected(null)
    }
  }, [qIdx, questions.length])

  const accuracyPct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0
  const isCorrect = answered && selected === currentQuestion?.answerIndex

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
          gameId="apostrophe-ace"
          title="Apostrophe Ace"
          description="Pick the sentence where every apostrophe is used correctly. Contractions, possession and the no-apostrophe-for-plurals trap all feature."
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || questions.length || ROUND_SIZE}
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
                  <span>{accuracyPct}% accuracy</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border text-clay-600 border-amber-500/30 bg-amber-500/10">
                    {currentQuestion.ruleTested}
                  </span>
                </div>
              </div>

              {/* Prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Which sentence is punctuated correctly?
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isAnswer = idx === currentQuestion.answerIndex
                  const isPicked = idx === selected
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={answered}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-left text-base font-medium text-foreground transition-all',
                        !answered &&
                          'border-border hover:border-primary hover:bg-accent cursor-pointer',
                        answered &&
                          isAnswer &&
                          'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        answered &&
                          isPicked &&
                          !isAnswer &&
                          'border-red-500 bg-red-500/10 text-red-400',
                        answered && !isAnswer && !isPicked && 'border-border opacity-60',
                      )}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>{option}</span>
                        {answered && isAnswer && (
                          <CheckCircle className="size-5 shrink-0 text-emerald-400" />
                        )}
                        {answered && isPicked && !isAnswer && (
                          <XCircle className="size-5 shrink-0 text-red-400" />
                        )}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {answered && (
                <div className="space-y-4">
                  <div
                    className={cn(
                      'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                      isCorrect
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-red-400 bg-red-500/10',
                    )}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle className="size-4" /> Nicely done — that&apos;s spot on!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite — let&apos;s look at why.
                      </>
                    )}
                  </div>

                  <div className="flex items-start gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                    <Lightbulb className="size-4 shrink-0 text-clay-600 mt-0.5" />
                    <span>{currentQuestion.explanation}</span>
                  </div>

                  <div className="flex justify-center">
                    <Button onClick={handleNext}>
                      {qIdx + 1 >= questions.length ? 'See Results' : 'Next Question'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
