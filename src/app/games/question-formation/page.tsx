'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import GameShell, { type GameState } from '@/components/games/GameShell'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, XCircle, Sparkles, RotateCcw, Lightbulb } from 'lucide-react'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'

// ─── Data ──────────────────────────────────────────────────────────────────────

interface QuestionItem {
  /** The full, correct question (UK English). */
  correct: string
  /** A short grammar note shown after answering. */
  note: string
}

// Words are derived by splitting `correct`, then shuffled at runtime.
const QUESTION_BANK: QuestionItem[] = [
  // ── Wh- questions with do/does/did support ──
  { correct: 'Where do you live?', note: 'Wh- word + auxiliary "do" + subject + base verb.' },
  {
    correct: 'What time does the train leave?',
    note: '"Does" is used for third-person singular subjects.',
  },
  {
    correct: 'When did you arrive in London?',
    note: '"Did" carries the past tense, so the main verb stays in its base form.',
  },
  {
    correct: 'Why does she always arrive late?',
    note: 'Adverbs of frequency sit between the subject and the main verb.',
  },
  {
    correct: 'How often do you go to the gym?',
    note: '"How often" asks about frequency; it takes "do" + base verb.',
  },
  {
    correct: 'What did they say about the plan?',
    note: '"Did" + base verb "say" forms the past simple question.',
  },
  {
    correct: 'Which book do you recommend?',
    note: '"Which" + noun begins a question about a limited choice.',
  },
  {
    correct: 'How much does this jacket cost?',
    note: '"How much" is used with uncountable ideas like price.',
  },
  {
    correct: 'Who did you meet at the conference?',
    note: 'When "who" is the object, we still need "did" + base verb.',
  },
  {
    correct: 'How long did the meeting last?',
    note: '"How long" asks about duration; "did" forms the past question.',
  },
  {
    correct: 'Where does your sister work?',
    note: 'Third-person singular "sister" requires "does".',
  },
  {
    correct: 'What do these words mean?',
    note: 'Plural subject "words" takes "do" + base verb "mean".',
  },

  // ── Be / present & past continuous & states ──
  {
    correct: 'Are you ready to go?',
    note: 'With "be", the verb itself moves in front of the subject.',
  },
  {
    correct: 'Is she coming to the party?',
    note: 'Present continuous question: "is" + subject + verb-ing.',
  },
  {
    correct: 'Were they at home yesterday?',
    note: '"Were" is the past form of "be" for plural subjects.',
  },
  {
    correct: 'Why are you so tired today?',
    note: 'Wh- word + "be" + subject for an adjective complement.',
  },
  {
    correct: 'What are you doing this weekend?',
    note: 'Present continuous can describe a future arrangement.',
  },
  {
    correct: 'Where was the meeting held?',
    note: 'Passive past question: "was" + subject + past participle.',
  },
  { correct: 'Is this seat free?', note: 'Yes/no question with "be" + subject + adjective.' },
  { correct: 'How are your parents?', note: '"How" + "be" asks about wellbeing or condition.' },

  // ── Modal verbs ──
  {
    correct: 'Can you help me with this?',
    note: 'Modals like "can" go before the subject; no "do" is needed.',
  },
  {
    correct: 'Could you repeat that, please?',
    note: '"Could" makes a polite request more formal.',
  },
  {
    correct: 'Should I bring anything to the party?',
    note: '"Should" asks for advice; the main verb stays in base form.',
  },
  { correct: 'Would you like some tea?', note: '"Would you like" is a polite offer.' },
  { correct: 'May I open the window?', note: '"May" asks for formal permission.' },
  {
    correct: 'Will you be at the office tomorrow?',
    note: '"Will" forms questions about the future.',
  },
  {
    correct: 'Must we finish this today?',
    note: '"Must" expresses strong obligation in questions.',
  },
  {
    correct: 'Can she speak three languages?',
    note: 'Modals never take an "-s" for third-person singular.',
  },

  // ── Present perfect ──
  {
    correct: 'Have you ever been to Spain?',
    note: 'Present perfect: "have" + subject + past participle.',
  },
  {
    correct: 'Has he finished his homework?',
    note: 'Third-person singular uses "has" in the present perfect.',
  },
  {
    correct: 'How long have you known her?',
    note: '"How long" + present perfect asks about duration up to now.',
  },
  { correct: 'What have you done today?', note: '"Done" is the past participle of "do" here.' },
  { correct: 'Have they arrived yet?', note: '"Yet" often ends present perfect questions.' },

  // ── Subject vs object questions ──
  { correct: 'Who broke the window?', note: 'When "who" is the subject, no auxiliary is needed.' },
  {
    correct: 'What happened at the end?',
    note: 'Subject question with "what" — no "did" required.',
  },
  { correct: 'Who is knocking at the door?', note: 'Subject "who" with continuous "is knocking".' },
  {
    correct: 'Which team won the match?',
    note: 'Subject question: "which team" acts as the subject.',
  },

  // ── Question tags ──
  { correct: 'You are coming, are not you?', note: 'A positive statement takes a negative tag.' },
  {
    correct: 'She does not eat meat, does she?',
    note: 'A negative statement takes a positive tag.',
  },
  {
    correct: 'It is a lovely day, is not it?',
    note: 'The tag mirrors the auxiliary of the main clause.',
  },
  {
    correct: 'They have left already, have not they?',
    note: 'Present perfect statements use a "have" tag.',
  },
  {
    correct: 'You can swim, can not you?',
    note: 'Modal statements take the same modal in the tag.',
  },
  {
    correct: 'He did not call you, did he?',
    note: 'A negative "did not" clause takes a positive "did" tag.',
  },

  // ── Indirect / longer questions ──
  {
    correct: 'Do you know where the station is?',
    note: 'In indirect questions the word order stays statement-like.',
  },
  {
    correct: 'Could you tell me how this works?',
    note: 'After "tell me how", use statement word order.',
  },
  {
    correct: 'I wonder why she left so early?',
    note: 'Embedded questions keep subject before verb.',
  },
  {
    correct: 'Do you have any idea what time it is?',
    note: 'No inversion after "what time" in an indirect question.',
  },

  // ── More everyday questions ──
  { correct: 'How do you spell your surname?', note: '"How" + "do" asks about manner or method.' },
  {
    correct: 'What does this word mean?',
    note: 'Singular "word" takes "does" + base verb "mean".',
  },
  {
    correct: 'Where did you buy that bag?',
    note: '"Did" forms the past simple; "buy" stays in base form.',
  },
  {
    correct: 'Are there any tickets left?',
    note: '"Are there" questions existence with plural nouns.',
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

/** Split a question into orderable tokens (words + final punctuation kept). */
function tokenise(question: string): string[] {
  // Separate trailing punctuation so the "?" stays attached to its word.
  return question.trim().split(/\s+/)
}

interface Token {
  id: number
  text: string
}

function buildTokens(question: string): Token[] {
  return tokenise(question).map((text, id) => ({ id, text }))
}

// ─── Component ─────────────────────────────────────────────────────────────────

const ROUND_SIZE = 12

export default function QuestionFormationPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  const [gameState, setGameState] = useState<GameState>('idle')
  const [items, setItems] = useState<QuestionItem[]>([])
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)

  // Token pools for the current question
  const [pool, setPool] = useState<Token[]>([])
  const [answer, setAnswer] = useState<Token[]>([])
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const currentItem = items[qIdx] ?? null

  const correctTokens = useMemo(
    () => (currentItem ? tokenise(currentItem.correct) : []),
    [currentItem],
  )

  const loadQuestion = useCallback((item: QuestionItem) => {
    const tokens = buildTokens(item.correct)
    // Re-shuffle until the order differs (best effort for short questions).
    let scrambled = shuffle(tokens)
    let guard = 0
    while (
      guard < 8 &&
      scrambled.map((t) => t.text).join(' ') === tokens.map((t) => t.text).join(' ')
    ) {
      scrambled = shuffle(tokens)
      guard++
    }
    setPool(scrambled)
    setAnswer([])
    setFeedback(null)
  }, [])

  const handleStart = useCallback(() => {
    const round = shuffle(QUESTION_BANK).slice(0, ROUND_SIZE)
    setItems(round)
    setQIdx(0)
    setScore(0)
    setTotalAnswered(0)
    if (round[0]) loadQuestion(round[0])
    setGameState('playing')
  }, [loadQuestion])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  const pickFromPool = useCallback(
    (token: Token) => {
      if (feedback) return
      setPool((p) => p.filter((t) => t.id !== token.id))
      setAnswer((a) => [...a, token])
    },
    [feedback],
  )

  const returnToPool = useCallback(
    (token: Token) => {
      if (feedback) return
      setAnswer((a) => a.filter((t) => t.id !== token.id))
      setPool((p) => [...p, token])
    },
    [feedback],
  )

  const resetCurrent = useCallback(() => {
    if (feedback || !currentItem) return
    loadQuestion(currentItem)
  }, [feedback, currentItem, loadQuestion])

  const advance = useCallback(() => {
    if (qIdx + 1 >= items.length) {
      setGameState('finished')
    } else {
      const next = qIdx + 1
      setQIdx(next)
      loadQuestion(items[next])
    }
  }, [qIdx, items, loadQuestion])

  const handleCheck = useCallback(() => {
    if (!currentItem || feedback || answer.length === 0) return
    const attempt = answer.map((t) => t.text).join(' ')
    const target = correctTokens.join(' ')
    setTotalAnswered((n) => n + 1)

    if (attempt === target) {
      setScore((s) => s + 1)
      setFeedback('correct')
    } else {
      setFeedback('wrong')
    }

    setTimeout(advance, 2400)
  }, [currentItem, feedback, answer, correctTokens, advance])

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
          gameId="question-formation"
          title="Build the Question"
          description="Tap the scrambled words in the correct order to form a grammatical English question. Watch your word order, auxiliaries and tags!"
          difficulty="Crossover"
          score={score}
          maxScore={totalAnswered || items.length || ROUND_SIZE}
          onStart={handleStart}
          onFinish={handleFinish}
          gameState={gameState}
        >
          {currentItem && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {qIdx + 1} of {items.length}
                </span>
                <span>{accuracyPct}% accuracy</span>
              </div>

              {/* Answer area */}
              <div
                className={cn(
                  'min-h-[72px] rounded-xl border-2 border-dashed bg-card p-4 transition-colors',
                  feedback === 'correct' && 'border-emerald-500 bg-emerald-500/10',
                  feedback === 'wrong' && 'border-red-500 bg-red-500/10',
                  !feedback && 'border-border',
                )}
              >
                {answer.length === 0 ? (
                  <p className="py-3 text-center text-sm text-muted-foreground">
                    Tap the words below to build your question here.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {answer.map((token) => (
                      <button
                        key={token.id}
                        onClick={() => returnToPool(token)}
                        disabled={!!feedback}
                        className={cn(
                          'rounded-lg border px-3 py-2 text-sm font-medium transition-all',
                          'border-primary/40 bg-primary/10 text-foreground',
                          !feedback && 'hover:bg-primary/20 active:translate-y-px',
                          feedback && 'cursor-default',
                        )}
                      >
                        {token.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Word pool */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Available words
                </p>
                <div className="flex flex-wrap gap-2">
                  {pool.length === 0 && !feedback ? (
                    <p className="py-2 text-sm text-muted-foreground">
                      All words used — check your answer!
                    </p>
                  ) : (
                    pool.map((token) => (
                      <button
                        key={token.id}
                        onClick={() => pickFromPool(token)}
                        disabled={!!feedback}
                        className={cn(
                          'rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-all',
                          !feedback && 'hover:bg-accent active:translate-y-px',
                          feedback && 'cursor-default opacity-60',
                        )}
                      >
                        {token.text}
                      </button>
                    ))
                  )}
                </div>
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
                  <div className="flex items-center gap-2 font-medium">
                    {feedback === 'correct' ? (
                      <>
                        <CheckCircle className="size-4" /> Brilliant — that&apos;s spot on!
                      </>
                    ) : (
                      <>
                        <XCircle className="size-4" /> Not quite. The correct question is:
                      </>
                    )}
                  </div>
                  {feedback === 'wrong' && (
                    <p className="font-bold text-foreground">{currentItem.correct}</p>
                  )}
                  <p className="flex items-start gap-2 text-muted-foreground">
                    <Lightbulb className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    {currentItem.note}
                  </p>
                </div>
              )}

              {/* Controls */}
              {!feedback && (
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button variant="ghost" onClick={resetCurrent} disabled={answer.length === 0}>
                    <RotateCcw className="size-4 mr-1" />
                    Reset
                  </Button>
                  <Button onClick={handleCheck} disabled={pool.length > 0 || answer.length === 0}>
                    Check Question
                  </Button>
                </div>
              )}
            </div>
          )}
        </GameShell>
      </div>
    </div>
  )
}
