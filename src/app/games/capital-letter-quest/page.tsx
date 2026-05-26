'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, Type } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface CapitalQuestion {
  /** The four sentence options shown to the learner */
  options: [string, string, string, string]
  /** Index (0-3) of the correctly capitalised sentence */
  answerIndex: number
  /** The capitalisation rule being tested */
  ruleTested: string
}

const QUESTION_BANK: CapitalQuestion[] = [
  // ── Sentence start ──────────────────────────────────────────────────────────
  {
    options: [
      'the dog is asleep.',
      'The dog is asleep.',
      'the Dog is asleep.',
      'The Dog Is Asleep.',
    ],
    answerIndex: 1,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: [
      'we walk to school.',
      'we Walk to school.',
      'We walk to school.',
      'We Walk To School.',
    ],
    answerIndex: 2,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: [
      'it is raining today.',
      'It is raining today.',
      'it is Raining today.',
      'It Is Raining Today.',
    ],
    answerIndex: 1,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: ['she likes tea.', 'She likes tea.', 'she Likes tea.', 'she likes Tea.'],
    answerIndex: 1,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: ['my book is new.', 'my Book is new.', 'My book is new.', 'My Book Is New.'],
    answerIndex: 2,
    ruleTested: 'A sentence begins with a capital letter.',
  },
  {
    options: [
      'where do you live?',
      'Where do you live?',
      'where do You live?',
      'Where Do You Live?',
    ],
    answerIndex: 1,
    ruleTested: 'A question still begins with a capital letter.',
  },
  // ── The pronoun "I" ─────────────────────────────────────────────────────────
  {
    options: [
      'Yesterday i was tired.',
      'yesterday I was tired.',
      'Yesterday I was tired.',
      'Yesterday I Was Tired.',
    ],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  {
    options: [
      'my friend and i play football.',
      'My friend and i play football.',
      'My friend and I play football.',
      'My Friend And I Play Football.',
    ],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  {
    options: ['can i help you?', 'Can i help you?', 'Can I help you?', 'Can I Help You?'],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  {
    options: [
      'i think i am right.',
      'I think i am right.',
      'i think I am right.',
      'I think I am right.',
    ],
    answerIndex: 3,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  {
    options: [
      'tomorrow i will visit her.',
      'Tomorrow i will visit her.',
      'Tomorrow I will visit her.',
      'Tomorrow I Will Visit Her.',
    ],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" is always a capital letter.',
  },
  // ── Names of people ─────────────────────────────────────────────────────────
  {
    options: ['my name is sara.', 'My name is sara.', 'My name is Sara.', 'My Name Is Sara.'],
    answerIndex: 2,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: [
      'ahmed is my brother.',
      'Ahmed is my brother.',
      'ahmed is my Brother.',
      'Ahmed Is My Brother.',
    ],
    answerIndex: 1,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: ['this is mr brown.', 'This is mr brown.', 'This is Mr Brown.', 'This Is Mr Brown.'],
    answerIndex: 2,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: [
      'i sat next to maria and tom.',
      'I sat next to maria and tom.',
      'I sat next to Maria and Tom.',
      'I Sat Next To Maria And Tom.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: [
      'have you met lucy?',
      'Have you met lucy?',
      'Have you met Lucy?',
      'Have You Met Lucy?',
    ],
    answerIndex: 2,
    ruleTested: 'Names of people start with a capital letter.',
  },
  {
    options: [
      'my teacher is mrs khan.',
      'My teacher is mrs khan.',
      'My teacher is Mrs Khan.',
      'My Teacher Is Mrs Khan.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles and names of people start with a capital letter.',
  },
  // ── Places (cities, countries) ──────────────────────────────────────────────
  {
    options: ['i live in london.', 'I live in london.', 'I live in London.', 'I Live In London.'],
    answerIndex: 2,
    ruleTested: 'Names of places start with a capital letter.',
  },
  {
    options: [
      'she is from spain.',
      'She is from spain.',
      'She is from Spain.',
      'She Is From Spain.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of countries start with a capital letter.',
  },
  {
    options: [
      'we visited paris in june.',
      'We visited paris in june.',
      'We visited Paris in June.',
      'We visited Paris in june.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of places and months start with a capital letter.',
  },
  {
    options: [
      'the river thames is long.',
      'The river thames is long.',
      'The River Thames is long.',
      'The river Thames is long.',
    ],
    answerIndex: 3,
    ruleTested: 'Names of rivers start with a capital letter.',
  },
  {
    options: [
      'my school is in manchester.',
      'My school is in manchester.',
      'My school is in Manchester.',
      'My School Is In Manchester.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of cities start with a capital letter.',
  },
  {
    options: [
      'they moved to scotland.',
      'They moved to scotland.',
      'They moved to Scotland.',
      'They Moved To Scotland.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of countries start with a capital letter.',
  },
  {
    options: [
      'oxford street is busy.',
      'Oxford street is busy.',
      'Oxford Street is busy.',
      'oxford Street is busy.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of streets start with a capital letter.',
  },
  // ── Days of the week ────────────────────────────────────────────────────────
  {
    options: [
      'we have a test on monday.',
      'We have a test on monday.',
      'We have a test on Monday.',
      'We Have A Test On Monday.',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  {
    options: [
      'see you on friday.',
      'See you on friday.',
      'See you on Friday.',
      'See You On Friday.',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  {
    options: [
      'the shop is closed on sunday.',
      'The shop is closed on sunday.',
      'The shop is closed on Sunday.',
      'The Shop Is Closed On Sunday.',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  {
    options: [
      'i play tennis every saturday.',
      'I play tennis every saturday.',
      'I play tennis every Saturday.',
      'I Play Tennis Every Saturday.',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  {
    options: [
      'the meeting is on wednesday.',
      'The meeting is on wednesday.',
      'The meeting is on Wednesday.',
      'The meeting is on wednesday',
    ],
    answerIndex: 2,
    ruleTested: 'Days of the week start with a capital letter.',
  },
  // ── Months of the year ──────────────────────────────────────────────────────
  {
    options: [
      'my birthday is in march.',
      'My birthday is in march.',
      'My birthday is in March.',
      'My Birthday Is In March.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  {
    options: [
      'school ends in july.',
      'School ends in july.',
      'School ends in July.',
      'School Ends In July.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  {
    options: [
      'it snows in december.',
      'It snows in december.',
      'It snows in December.',
      'It Snows In December.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  {
    options: [
      'we travel in august.',
      'We travel in august.',
      'We travel in August.',
      'We Travel In August.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  {
    options: [
      'the term starts in september.',
      'The term starts in september.',
      'The term starts in September.',
      'The Term Starts In September.',
    ],
    answerIndex: 2,
    ruleTested: 'Months of the year start with a capital letter.',
  },
  // ── Languages and nationalities ─────────────────────────────────────────────
  {
    options: [
      'i am learning english.',
      'I am learning english.',
      'I am learning English.',
      'I Am Learning English.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of languages start with a capital letter.',
  },
  {
    options: [
      'she speaks french and arabic.',
      'She speaks french and arabic.',
      'She speaks French and Arabic.',
      'She Speaks French And Arabic.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of languages start with a capital letter.',
  },
  {
    options: ['he is italian.', 'He is italian.', 'He is Italian.', 'He Is Italian.'],
    answerIndex: 2,
    ruleTested: 'Nationalities start with a capital letter.',
  },
  {
    options: [
      'we ate polish food.',
      'We ate polish food.',
      'We ate Polish food.',
      'We Ate Polish Food.',
    ],
    answerIndex: 2,
    ruleTested: 'Nationality adjectives start with a capital letter.',
  },
  {
    options: [
      'my class learns spanish.',
      'My class learns spanish.',
      'My class learns Spanish.',
      'My Class Learns Spanish.',
    ],
    answerIndex: 2,
    ruleTested: 'Names of languages start with a capital letter.',
  },
  {
    options: [
      'the chinese new year is fun.',
      'The chinese new year is fun.',
      'The Chinese new year is fun.',
      'The Chinese New Year is fun.',
    ],
    answerIndex: 2,
    ruleTested: 'Nationality adjectives start with a capital letter.',
  },
  // ── Titles (Mr, Mrs, Dr, Miss) ──────────────────────────────────────────────
  {
    options: [
      'please call dr smith.',
      'Please call dr smith.',
      'Please call Dr Smith.',
      'Please Call Dr Smith.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Dr start with a capital letter.',
  },
  {
    options: [
      'miss jones is kind.',
      'Miss jones is kind.',
      'Miss Jones is kind.',
      'miss Jones is kind.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Miss start with a capital letter.',
  },
  {
    options: [
      'we wrote to mr patel.',
      'We wrote to mr patel.',
      'We wrote to Mr Patel.',
      'We Wrote To Mr Patel.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Mr start with a capital letter.',
  },
  {
    options: [
      'thank you, mrs evans.',
      'Thank you, mrs evans.',
      'Thank you, Mrs Evans.',
      'Thank You, Mrs Evans.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Mrs start with a capital letter.',
  },
  {
    options: [
      'ask professor lee.',
      'Ask professor lee.',
      'Ask Professor Lee.',
      'ask Professor Lee.',
    ],
    answerIndex: 2,
    ruleTested: 'Titles like Professor start with a capital letter.',
  },
  // ── Brand and company names ─────────────────────────────────────────────────
  {
    options: [
      'i have a new samsung phone.',
      'I have a new samsung phone.',
      'I have a new Samsung phone.',
      'I Have A New Samsung Phone.',
    ],
    answerIndex: 2,
    ruleTested: 'Brand names start with a capital letter.',
  },
  {
    options: [
      'we drink coca-cola at parties.',
      'We drink coca-cola at parties.',
      'We drink Coca-Cola at parties.',
      'We Drink Coca-Cola At Parties.',
    ],
    answerIndex: 2,
    ruleTested: 'Brand names start with a capital letter.',
  },
  {
    options: [
      'she bought nike trainers.',
      'She bought nike trainers.',
      'She bought Nike trainers.',
      'She Bought Nike Trainers.',
    ],
    answerIndex: 2,
    ruleTested: 'Brand names start with a capital letter.',
  },
  {
    options: [
      'he watched a film on netflix.',
      'He watched a film on netflix.',
      'He watched a film on Netflix.',
      'He Watched A Film On Netflix.',
    ],
    answerIndex: 2,
    ruleTested: 'Company names start with a capital letter.',
  },
  {
    options: [
      'i searched for it on google.',
      'I searched for it on google.',
      'I searched for it on Google.',
      'I Searched For It On Google.',
    ],
    answerIndex: 2,
    ruleTested: 'Company names start with a capital letter.',
  },
  // ── Mixed: several rules in one sentence ────────────────────────────────────
  {
    options: [
      'on monday i fly to france.',
      'On monday i fly to france.',
      'On Monday I fly to France.',
      'On Monday I Fly To France.',
    ],
    answerIndex: 2,
    ruleTested: 'Sentence start, "I", day and country all need capitals.',
  },
  {
    options: [
      'in april sam visits germany.',
      'In april sam visits germany.',
      'In April Sam visits Germany.',
      'In April Sam Visits Germany.',
    ],
    answerIndex: 2,
    ruleTested: 'Month, name and country all need capital letters.',
  },
  {
    options: [
      'i think english is easier than german.',
      'I think english is easier than german.',
      'I think English is easier than German.',
      'I Think English Is Easier Than German.',
    ],
    answerIndex: 2,
    ruleTested: 'The pronoun "I" and language names need capitals.',
  },
  {
    options: [
      'next friday dr ali leaves for cairo.',
      'Next friday dr ali leaves for cairo.',
      'Next Friday Dr Ali leaves for Cairo.',
      'Next Friday Dr Ali Leaves For Cairo.',
    ],
    answerIndex: 2,
    ruleTested: 'Day, title, name and city all need capital letters.',
  },
  {
    options: [
      'my friend olga speaks russian and english.',
      'My friend olga speaks russian and english.',
      'My friend Olga speaks Russian and English.',
      'My Friend Olga Speaks Russian And English.',
    ],
    answerIndex: 2,
    ruleTested: 'Names and languages start with capital letters.',
  },
  {
    options: [
      'in january we move to canada.',
      'In january we move to canada.',
      'In January we move to Canada.',
      'In January We Move To Canada.',
    ],
    answerIndex: 2,
    ruleTested: 'Month and country names start with capital letters.',
  },
  {
    options: [
      'miss ford and i visit york on sunday.',
      'Miss ford and i visit york on sunday.',
      'Miss Ford and I visit York on Sunday.',
      'Miss Ford And I Visit York On Sunday.',
    ],
    answerIndex: 2,
    ruleTested: 'Title, "I", place and day all need capitals.',
  },
  {
    options: [
      'the toyota is parked outside.',
      'The toyota is parked outside.',
      'The Toyota is parked outside.',
      'The Toyota Is Parked Outside.',
    ],
    answerIndex: 2,
    ruleTested: 'Brand names start with a capital letter.',
  },
  {
    options: [
      'we celebrate christmas in december.',
      'We celebrate christmas in december.',
      'We celebrate Christmas in December.',
      'We Celebrate Christmas In December.',
    ],
    answerIndex: 2,
    ruleTested: 'Festival and month names start with capital letters.',
  },
  {
    options: [
      'do you like the bbc news?',
      'Do you like the bbc news?',
      'Do you like the BBC news?',
      'Do You Like The BBC News?',
    ],
    answerIndex: 2,
    ruleTested: 'Organisation names and initials are capitalised.',
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

const QUESTIONS_PER_ROUND = 15
const OPTION_LABELS = ['A', 'B', 'C', 'D']

// ─── Component ─────────────────────────────────────────────────────────────────

export default function CapitalLetterQuestPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [questions, setQuestions] = useState<CapitalQuestion[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const currentQuestion = questions[qIdx] ?? null

  const handleStart = useCallback(() => {
    const round = shuffle(QUESTION_BANK).slice(0, QUESTIONS_PER_ROUND)
    setQuestions(round)
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
    (index: number) => {
      if (!currentQuestion || feedback) return
      const isCorrect = index === currentQuestion.answerIndex
      setSelected(index)
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
          gameId="capital-letter-quest"
          title="Capital Letter Quest"
          description="Read the sentence, then choose the version with the correct capital letters. Watch for names, places, days, months, languages, titles and brands."
          difficulty="Foundation"
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

              {/* Prompt */}
              <div className="rounded-xl border border-border bg-card p-6 text-center space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Type className="size-4" />
                  Which sentence is written correctly?
                </div>
                <p className="text-sm text-muted-foreground">
                  Pick the option with capital letters in all the right places.
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {currentQuestion.options.map((option, index) => {
                  const isAnswer = index === currentQuestion.answerIndex
                  const isPicked = selected === index
                  const showCorrect = feedback && isAnswer
                  const showWrong = feedback && isPicked && !isAnswer

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelect(index)}
                      disabled={!!feedback}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-base font-medium transition-all',
                        'focus:outline-none focus:ring-2 focus:ring-primary/30',
                        !feedback &&
                          'border-border bg-card text-foreground hover:border-primary hover:bg-accent',
                        showCorrect && 'border-emerald-500 bg-emerald-500/10 text-emerald-400',
                        showWrong && 'border-red-500 bg-red-500/10 text-red-400',
                        feedback && !showCorrect && !showWrong && 'border-border opacity-50',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold',
                          showCorrect
                            ? 'border-emerald-500 text-emerald-400'
                            : showWrong
                              ? 'border-red-500 text-red-400'
                              : 'border-border text-muted-foreground',
                        )}
                      >
                        {OPTION_LABELS[index]}
                      </span>
                      <span className="flex-1">{option}</span>
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
                    'rounded-lg px-4 py-3 text-sm',
                    feedback === 'correct'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400',
                  )}
                >
                  <p className="font-semibold">
                    {feedback === 'correct'
                      ? 'Brilliant! That is exactly right.'
                      : 'Not quite - keep going, you are learning!'}
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-medium text-foreground">Rule:</span>{' '}
                    {currentQuestion.ruleTested}
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
