'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import GameShell, { type GameState } from '@/components/games/GameShell'
import type { GCSEGrade } from '@/lib/grades'
import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig } from '@/lib/board/board-store'
import { getSetTextsForBoard } from '@/lib/board/set-texts'
import { shuffledOptionsFor, newSessionSalt } from '@/lib/quiz/shuffle'
import { AnswerExplanation } from '@/components/games/AnswerExplanation'
import { useGameRound } from '@/components/games/game-round'
import { beginRound, pickNextNow, preloadExplanations } from '@/lib/games/start-round'
import { BANK, QUESTION_BANK, type GradeQuestion } from '@/data/games/banks/grade-climber'

// ─── Question Bank ─────────────────────────────────────────────────────────────
// The questions are in src/data/games/banks/grade-climber.ts (moved there on
// 16 October 2026), and the explanation for each in
// src/data/games/explanations/grade-climber.ts.

// Map title substrings to set-text slugs so we can filter board-specific questions.
// A question is text-specific if its prompt contains one of these substrings.
const TEXT_REFERENCES: { needle: string; slug: string }[] = [
  { needle: 'Macbeth', slug: 'macbeth' },
  { needle: 'Inspector Calls', slug: 'an-inspector-calls' },
  { needle: 'Christmas Carol', slug: 'a-christmas-carol' },
  { needle: 'Jekyll and Hyde', slug: 'jekyll-and-hyde' },
  { needle: 'Lord of the Flies', slug: 'lord-of-the-flies' },
  { needle: 'Animal Farm', slug: 'animal-farm' },
  { needle: 'Of Mice and Men', slug: 'of-mice-and-men' },
  { needle: 'Romeo and Juliet', slug: 'romeo-and-juliet' },
  { needle: 'Frankenstein', slug: 'frankenstein' },
  { needle: 'Jane Eyre', slug: 'jane-eyre' },
  { needle: 'Great Expectations', slug: 'great-expectations' },
  // Poetry
  { needle: 'Ozymandias', slug: 'ozymandias' },
  { needle: 'London" by Blake', slug: 'london' },
  { needle: 'Exposure', slug: 'exposure' },
  { needle: 'Bayonet Charge', slug: 'bayonet-charge' },
  { needle: 'Remains', slug: 'remains' },
  { needle: 'Charge of the Light Brigade', slug: 'the-charge-of-the-light-brigade' },
  { needle: 'My Last Duchess', slug: 'my-last-duchess' },
  { needle: 'War Photographer', slug: 'war-photographer' },
  { needle: 'Tissue', slug: 'tissue' },
  { needle: 'Checking Out Me History', slug: 'checking-out-me-history' },
  { needle: 'Émigrée', slug: 'the-emigree' },
  { needle: 'Poppies', slug: 'poppies' },
  { needle: 'Dulce et Decorum Est', slug: 'dulce-et-decorum-est' },
  // Added 24 October 2026, when the bank gained questions on every board's set
  // texts. A title that could turn up in another prompt is matched in quotation
  // marks ('"Night"', '"DNA"') or by its author ('Kipling', 'Rossetti').
  // Dylan Thomas's villanelle has none: by decision no question is on it, and
  // the needle added for it on 24 October was taken out on 31 October.
  { needle: 'Much Ado About Nothing', slug: 'much-ado-about-nothing' },
  { needle: 'Merchant of Venice', slug: 'the-merchant-of-venice' },
  { needle: 'The Tempest', slug: 'the-tempest' },
  { needle: 'Julius Caesar', slug: 'julius-caesar' },
  { needle: 'Twelfth Night', slug: 'twelfth-night' },
  { needle: 'Othello', slug: 'othello' },
  { needle: "A Midsummer Night's Dream", slug: 'a-midsummer-nights-dream' },
  { needle: 'Antony and Cleopatra', slug: 'antony-and-cleopatra' },
  { needle: 'Pride and Prejudice', slug: 'pride-and-prejudice' },
  { needle: 'Sign of Four', slug: 'the-sign-of-four' },
  { needle: 'Silas Marner', slug: 'silas-marner' },
  { needle: 'War of the Worlds', slug: 'the-war-of-the-worlds' },
  { needle: 'Scarlet Letter', slug: 'the-scarlet-letter' },
  { needle: 'Blood Brothers', slug: 'blood-brothers' },
  { needle: 'Anita and Me', slug: 'anita-and-me' },
  { needle: 'Pigeon English', slug: 'pigeon-english' },
  { needle: '"DNA"', slug: 'dna' },
  { needle: 'A Taste of Honey', slug: 'a-taste-of-honey' },
  { needle: 'Telling Tales', slug: 'telling-tales' },
  { needle: 'Princess & The Hustler', slug: 'princess-and-the-hustler' },
  { needle: 'Leave Taking', slug: 'leave-taking' },
  { needle: 'My Name is Leon', slug: 'my-name-is-leon' },
  { needle: 'Never Let Me Go', slug: 'never-let-me-go' },
  { needle: 'Curious Incident', slug: 'curious-incident' },
  { needle: 'The Woman in Black', slug: 'the-woman-in-black' },
  { needle: "Boys Don't Cry", slug: 'boys-dont-cry' },
  { needle: 'Oranges are not the Only Fruit', slug: 'oranges-are-not-the-only-fruit' },
  { needle: 'The History Boys', slug: 'the-history-boys' },
  { needle: "Hobson's Choice", slug: 'hobsons-choice' },
  { needle: "Journey's End", slug: 'journeys-end' },
  { needle: 'The Empress', slug: 'the-empress' },
  { needle: 'Refugee Boy', slug: 'refugee-boy' },
  { needle: 'Coram Boy', slug: 'coram-boy' },
  { needle: 'To Kill a Mockingbird', slug: 'to-kill-a-mockingbird' },
  { needle: 'Things Fall Apart', slug: 'things-fall-apart' },
  { needle: 'A View from the Bridge', slug: 'a-view-from-the-bridge' },
  { needle: 'The Whale Rider', slug: 'the-whale-rider' },
  { needle: 'The Joy Luck Club', slug: 'the-joy-luck-club' },
  { needle: 'Klara and the Sun', slug: 'klara-and-the-sun' },
  { needle: 'Western Lane', slug: 'western-lane' },
  { needle: 'Kindertransport', slug: 'kindertransport' },
  { needle: "Death and the King's Horseman", slug: 'death-and-the-kings-horseman' },
  { needle: 'Blues for an Alabama Sky', slug: 'blues-for-an-alabama-sky' },
  {
    needle: 'What it Means When a Man Falls',
    slug: 'what-it-means-when-a-man-falls-from-the-sky',
  },
  { needle: 'Fire on the Mountain', slug: 'fire-on-the-mountain' },
  { needle: 'Hullaballoo in the Guava Orchard', slug: 'hullaballoo-in-the-guava-orchard' },
  { needle: "I'm the King of the Castle", slug: 'im-the-king-of-the-castle' },
  { needle: 'Kipling', slug: 'if' },
  { needle: 'Prayer Before Birth', slug: 'prayer-before-birth' },
  { needle: '"Piano"', slug: 'piano' },
  { needle: 'Hide and Seek', slug: 'hide-and-seek' },
  { needle: 'Half-past Two', slug: 'half-past-two' },
  { needle: 'Sonnet 116', slug: 'sonnet-116' },
  { needle: '"Blessing"', slug: 'blessing' },
  { needle: 'Search For My Tongue', slug: 'search-for-my-tongue' },
  { needle: 'La Belle Dame sans Merci', slug: 'la-belle-dame-sans-merci' },
  { needle: 'Poem at Thirty-Nine', slug: 'poem-at-thirty-nine' },
  { needle: 'The Tyger', slug: 'the-tyger' },
  { needle: 'Half-caste', slug: 'half-caste' },
  { needle: 'Rossetti', slug: 'remember' },
  { needle: 'The Danger of a Single Story', slug: 'the-danger-of-a-single-story' },
  { needle: 'A Passage to Africa', slug: 'a-passage-to-africa' },
  { needle: "The Explorer's Daughter", slug: 'the-explorers-daughter' },
  { needle: 'Explorers, or boys messing about', slug: 'explorers-or-boys-messing-about' },
  { needle: 'Between a Rock and a Hard Place', slug: 'between-a-rock-and-a-hard-place' },
  { needle: 'Young and dyslexic', slug: 'young-and-dyslexic' },
  { needle: 'A Game of Polo with a Headless Goat', slug: 'a-game-of-polo-with-a-headless-goat' },
  { needle: 'Beyond the Sky and the Earth', slug: 'beyond-the-sky-and-the-earth' },
  { needle: 'H is for Hawk', slug: 'h-is-for-hawk' },
  { needle: 'Chinese Cinderella', slug: 'chinese-cinderella' },
  { needle: '"Disabled"', slug: 'disabled' },
  { needle: 'Out, Out', slug: 'out-out' },
  { needle: 'An Unknown Girl', slug: 'an-unknown-girl' },
  { needle: 'The Bright Lights of Sarajevo', slug: 'the-bright-lights-of-sarajevo' },
  { needle: 'Still I Rise', slug: 'still-i-rise' },
  { needle: 'The Necklace', slug: 'the-necklace' },
  { needle: 'Significant Cigarettes', slug: 'significant-cigarettes' },
  { needle: "Whistle and I'll Come to You", slug: 'whistle-and-ill-come-to-you' },
  { needle: '"Night"', slug: 'night' },
  { needle: 'The Story of an Hour', slug: 'the-story-of-an-hour' },
]

function questionAvailableForBoard(prompt: string, allowedSlugs: Set<string>): boolean {
  for (const ref of TEXT_REFERENCES) {
    if (prompt.includes(ref.needle) && !allowedSlugs.has(ref.slug)) {
      return false
    }
  }
  return true
}

// ─── The ladder ───────────────────────────────────────────────────────────────
//
// RUNGS, NOT GRADES (31 October 2026). The ladder was headed "Grade Ladder" and
// the badge above each question read "Grade 5", so a student read a GCSE grade
// all through play, which the founder ruled out on 23 October 2026
// (src/__tests__/no-game-gives-a-gcse-grade.test.tsx). Both now name the rung.
// The rungs, how they are scored and how the ladder moves are as they were.

const GRADE_LEVELS: GCSEGrade[] = [3, 4, 5, 6, 7, 8, 9]
const CORRECT_TO_ADVANCE = 3
const WRONG_TO_DROP = 2

function GradeLadder({
  currentGrade,
  maxGradeReached,
}: {
  currentGrade: GCSEGrade
  maxGradeReached: GCSEGrade
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        The ladder
      </span>
      {[...GRADE_LEVELS].reverse().map((g) => (
        <div
          key={g}
          className={cn(
            'flex h-8 w-20 items-center justify-center rounded-lg border text-sm font-bold transition-all duration-300',
            g === currentGrade
              ? 'border-primary bg-primary/20 text-primary scale-110 shadow-md shadow-primary/20'
              : g <= maxGradeReached
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                : 'border-white/[0.06] bg-white/[0.02] text-muted-foreground',
          )}
        >
          {g}
        </div>
      ))}
    </div>
  )
}

// ─── Type labels ──────────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, string> = {
  technique: 'Identify the Technique',
  meaning: 'What Does This Mean?',
  analysis: 'Complete the Analysis',
}

// The newer kinds of question (24 October 2026) say what they ask for instead.
const KIND_LABELS: Record<string, string> = {
  effect: 'Method and Effect',
  word: 'Which Word Works?',
  evidence: 'Best Evidence',
  reading: 'Rival Readings',
  context: 'Context and Choice',
  sentence: 'Strongest Analysis',
  critic: 'Weigh the Claim',
  judgement: 'Judge the Evidence',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GradeClimberPage() {
  const { board } = useBoard()
  const boardConfig = getBoardConfig(board)

  // Filter the question bank to only include questions that reference texts the user studies.
  // Generic technique/meaning questions are always included.
  const filteredBank = useMemo(() => {
    if (!board) return QUESTION_BANK
    const allowedSlugs = new Set(getSetTextsForBoard(board).map((t) => t.slug))
    const filtered = QUESTION_BANK.filter((q) => questionAvailableForBoard(q.prompt, allowedSlugs))
    // Ensure each grade still has at least one question; fall back to full bank otherwise
    const gradesPresent = new Set(filtered.map((q) => q.grade))
    if (gradesPresent.size < 5) return QUESTION_BANK
    return filtered
  }, [board])

  const [gameState, setGameState] = useState<GameState>('idle')
  const [currentGrade, setCurrentGrade] = useState<GCSEGrade>(3)
  const [maxGradeReached, setMaxGradeReached] = useState<GCSEGrade>(3)
  const [correctStreak, setCorrectStreak] = useState(0)
  const [wrongStreak, setWrongStreak] = useState(0)
  const [totalCorrect, setTotalCorrect] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<GradeQuestion | null>(null)
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set())
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const round = useGameRound('grade-climber')
  // The dealer reads the explanations to keep give-aways apart (src/lib/games/start-round.ts).
  useEffect(() => {
    void preloadExplanations(BANK.slug)
  }, [])

  /**
   * ANSWER-POSITION BIAS (fixed 20 September 2026).
   *
   * The game randomised which QUESTION was asked and never the order of its
   * options, then scored and highlighted with `index === correctIndex`. 143 of
   * the 156 questions in this bank (91.7%) have their answer at index 1, and
   * none has it at index 3, so a student who clicked the second button every
   * time scored 91.7% having read nothing.
   *
   * `shuffledOptionsFor` reorders the options per question and hands back the
   * correct option's VALUE. Compare by value: after a shuffle `correctIndex`
   * points at whatever landed in that slot. Questions carry no id, so the
   * prompt is the seed and also the text the helper checks before deciding a
   * question must keep its authored order.
   *
   * The salt is minted in `handleStart`, never in a `useState` initialiser:
   * `newSessionSalt` calls Math.random(), and calling that while rendering a
   * client component gives the server and the client different orders. The game
   * has a start gate, so no option is painted before that first click.
   */
  const [optionSalt, setOptionSalt] = useState('')

  const questionView = useMemo(
    () =>
      currentQuestion
        ? shuffledOptionsFor(
            currentQuestion.options,
            currentQuestion.correctIndex,
            currentQuestion.prompt,
            optionSalt,
            currentQuestion.prompt,
          )
        : null,
    [currentQuestion, optionSalt],
  )

  /**
   * The next question on this rung, else one either side, as before. Since
   * 24 October 2026 it is not drawn at random: pickNextNow
   * (src/lib/games/start-round.ts) takes one this browser has not met, or met
   * longest ago, that nothing already asked this session gives away. Every
   * session used to open on the same 23 rung-three questions.
   */
  const pickQuestion = useCallback(
    (grade: GCSEGrade, used: Set<number>) => {
      const unused = (fits: (q: GradeQuestion) => boolean) =>
        filteredBank.map((q, i) => ({ q, i })).filter(({ q, i }) => fits(q) && !used.has(i))
      let candidates = unused((q) => q.grade === grade)
      // Fallback: allow nearby grades
      if (candidates.length === 0) candidates = unused((q) => Math.abs(q.grade - grade) <= 1)
      if (candidates.length === 0) return null
      const asked = [...used].map((i) => filteredBank[i])
      const next = pickNextNow(
        BANK,
        candidates.map((c) => c.q),
        asked,
      )
      return candidates.find((c) => c.q === next) ?? candidates[0]
    },
    [filteredBank],
  )

  const startNextQuestion = useCallback(
    (grade: GCSEGrade, used: Set<number>) => {
      const picked = pickQuestion(grade, used)
      if (!picked) {
        setGameState('finished')
        return
      }
      setUsedQuestions((prev) => new Set(prev).add(picked.i))
      setCurrentQuestion(picked.q)
      setSelected(null)
      setShowFeedback(false)
    },
    [pickQuestion],
  )

  const handleStart = useCallback(() => {
    // One session is one round in this browser's history (missed questions come
    // back two sessions later).
    beginRound(BANK.slug)
    setOptionSalt(newSessionSalt())
    const initialGrade: GCSEGrade = 3
    setCurrentGrade(initialGrade)
    setMaxGradeReached(initialGrade)
    setCorrectStreak(0)
    setWrongStreak(0)
    setTotalCorrect(0)
    setTotalAnswered(0)
    setUsedQuestions(new Set())
    setGameState('playing')
    const used = new Set<number>()
    const picked = pickQuestion(initialGrade, used)
    if (picked) {
      setUsedQuestions(new Set([picked.i]))
      setCurrentQuestion(picked.q)
      setSelected(null)
      setShowFeedback(false)
    }
  }, [pickQuestion])

  const handleFinish = useCallback(() => {
    setGameState('finished')
  }, [])

  /**
   * A click on an option. The question is marked, recorded for the student's
   * account, and then left on screen with its explanation until they choose to
   * go on (handleNext).
   *
   * WHAT CHANGED (16 October 2026). The game used to move to the next question
   * 1.4 seconds after an answer, showing only red or green. Each answer now
   * comes with why it is right and why the option chosen is not
   * (src/data/games/explanations/grade-climber.ts), and a student cannot read
   * that in 1.4 seconds, so a button takes them on when they are ready.
   */
  const handleSelect = useCallback(
    (index: number) => {
      if (showFeedback || !currentQuestion || !questionView) return
      setSelected(index)
      setShowFeedback(true)
      setTotalAnswered((t) => t + 1)

      // By value. `index` is a position in the shuffled list, so comparing it
      // with the authored `correctIndex` would mark the wrong button right.
      const correct = questionView.options[index] === questionView.correctValue
      // `chose` is the option clicked, never typed text. The recorder keeps it
      // only when it reads as a short label (CHOSEN_RE in
      // src/lib/game-results/types.ts), so a long analysis option is dropped.
      round.record({
        question: BANK.key(currentQuestion),
        correct,
        tag: currentQuestion.type,
        chose: correct ? undefined : questionView.options[index],
      })
      let nextGrade = currentGrade
      let newCorrectStreak = correctStreak
      let newWrongStreak = wrongStreak

      if (correct) {
        setTotalCorrect((t) => t + 1)
        newCorrectStreak = correctStreak + 1
        newWrongStreak = 0
        if (newCorrectStreak >= CORRECT_TO_ADVANCE && currentGrade < 9) {
          nextGrade = (currentGrade + 1) as GCSEGrade
          newCorrectStreak = 0
        }
      } else {
        newWrongStreak = wrongStreak + 1
        newCorrectStreak = 0
        if (newWrongStreak >= WRONG_TO_DROP && currentGrade > 3) {
          nextGrade = (currentGrade - 1) as GCSEGrade
          newWrongStreak = 0
        }
      }

      setCorrectStreak(newCorrectStreak)
      setWrongStreak(newWrongStreak)
      setCurrentGrade(nextGrade)
      if (nextGrade > maxGradeReached) {
        setMaxGradeReached(nextGrade)
      }
    },
    [
      showFeedback,
      currentQuestion,
      questionView,
      currentGrade,
      correctStreak,
      wrongStreak,
      maxGradeReached,
      round,
    ],
  )

  // The button under the explanation. It picks the next question exactly as
  // the 1.4-second timer did, from the state the answer left behind.
  const handleNext = useCallback(() => {
    startNextQuestion(currentGrade, usedQuestions)
  }, [startNextQuestion, currentGrade, usedQuestions])

  // Whether a question is left for the next pick, found as pickQuestion finds
  // one (this level, else one either side), so the last button can say so.
  const hasNextQuestion = filteredBank.some(
    (q, i) => !usedQuestions.has(i) && Math.abs(q.grade - currentGrade) <= 1,
  )

  // Score: right answers over answers, which the shell shows as score and
  // percentage. No grade: GameAudience in GameShell.tsx says why (23 October
  // 2026). The rung reached goes to the results screen as the game's own line.
  const scoreValue = totalCorrect
  const maxScoreValue = Math.max(totalAnswered, 1)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Button variant="ghost" size="sm" render={<Link href="/games" />}>
          <ArrowLeft className="size-4" />
          Back to Games
        </Button>
        {boardConfig && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3" /> For {boardConfig.shortName}
          </span>
        )}
      </div>

      <GameShell
        gameId="grade-climber"
        audience="gcse"
        title="Grade Climber"
        description={
          boardConfig
            ? `Answer ${boardConfig.shortName} questions at increasing difficulty. Get 3 right to climb, 2 wrong to drop back.`
            : 'Answer questions at increasing difficulty. Get 3 right to climb, 2 wrong to drop back.'
        }
        difficulty="Higher"
        score={scoreValue}
        maxScore={maxScoreValue}
        onStart={handleStart}
        onFinish={handleFinish}
        gameState={gameState}
        round={round}
        resultsNote={`You climbed to rung ${maxGradeReached} of the ladder (3 to 9). The rungs show how hard the questions were, not a grade for you.`}
      >
        {currentQuestion && questionView && (
          <div className="flex gap-8">
            {/* The ladder */}
            <div className="hidden shrink-0 sm:block">
              <GradeLadder currentGrade={currentGrade} maxGradeReached={maxGradeReached} />
            </div>

            {/* Question area */}
            <div className="flex flex-1 flex-col gap-6">
              {/* Status row */}
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                    currentGrade >= 7
                      ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                      : currentGrade >= 5
                        ? 'border-amber-500/20 bg-amber-500/10 text-clay-600'
                        : 'border-blue-500/20 bg-blue-500/10 text-blue-400',
                  )}
                >
                  Rung {currentGrade}
                </span>
                <span className="text-xs text-muted-foreground">
                  {(currentQuestion.kind && KIND_LABELS[currentQuestion.kind]) ??
                    TYPE_LABELS[currentQuestion.type]}
                </span>
                <span className="ms-auto text-xs text-muted-foreground">
                  Streak: {correctStreak}/{CORRECT_TO_ADVANCE} to advance
                </span>
              </div>

              {/* Prompt */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
                <p className="text-base leading-relaxed text-foreground">
                  {currentQuestion.prompt}
                </p>
                {currentQuestion.source && (
                  <p className="mt-2 text-xs text-muted-foreground">{currentQuestion.source}</p>
                )}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {questionView.options.map((option, i) => {
                  const isCorrect = option === questionView.correctValue
                  const isSelected = i === selected
                  let style = 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                  if (showFeedback) {
                    if (isCorrect)
                      style = 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                    else if (isSelected) style = 'border-red-500/40 bg-red-500/10 text-red-400'
                    else style = 'border-white/[0.04] bg-white/[0.01] opacity-50'
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={showFeedback}
                      className={cn(
                        'rounded-xl border px-4 py-3 text-start text-sm font-medium transition-all duration-200',
                        style,
                        !showFeedback && 'cursor-pointer active:translate-y-px',
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              {showFeedback && selected !== null && (
                <div>
                  <AnswerExplanation
                    game="grade-climber"
                    question={BANK.key(currentQuestion)}
                    correct={questionView.options[selected] === questionView.correctValue}
                    chosen={questionView.options[selected]}
                  />
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleNext} autoFocus>
                      {hasNextQuestion ? 'Next question' : 'See your results'}
                      <ArrowRight className="size-4 ms-1" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </GameShell>
    </div>
  )
}
