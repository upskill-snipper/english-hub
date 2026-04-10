'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import GameShell, { type GameState } from '@/components/games/GameShell'
import type { GCSEGrade } from '@/lib/grades'

// ─── Question Bank (40+ across grade levels) ──────────────────────────────────

interface GradeQuestion {
  grade: GCSEGrade
  type: 'technique' | 'meaning' | 'analysis'
  prompt: string
  options: string[]
  correctIndex: number
}

const QUESTION_BANK: GradeQuestion[] = [
  // Grade 3 — Identify the technique (basic)
  { grade: 3, type: 'technique', prompt: '"She runs like the wind." What technique is used?', options: ['Simile', 'Metaphor', 'Alliteration', 'Personification'], correctIndex: 0 },
  { grade: 3, type: 'technique', prompt: '"The stars danced in the sky." What technique is used?', options: ['Simile', 'Hyperbole', 'Personification', 'Onomatopoeia'], correctIndex: 2 },
  { grade: 3, type: 'meaning', prompt: 'What does "cold-hearted" suggest about a character?', options: ['They are ill', 'They are unkind and uncaring', 'They live somewhere cold', 'They are shy'], correctIndex: 1 },
  { grade: 3, type: 'technique', prompt: '"Crash! Bang! Wallop!" What technique is this?', options: ['Alliteration', 'Onomatopoeia', 'Repetition', 'Simile'], correctIndex: 1 },
  { grade: 3, type: 'meaning', prompt: 'If a writer uses short sentences, what effect might this create?', options: ['A relaxed mood', 'Tension or urgency', 'Humour', 'Confusion'], correctIndex: 1 },
  { grade: 3, type: 'technique', prompt: '"Peter Piper picked a peck." What technique is used?', options: ['Sibilance', 'Assonance', 'Alliteration', 'Rhyme'], correctIndex: 2 },

  // Grade 4 — Identify technique + basic meaning
  { grade: 4, type: 'technique', prompt: '"He was a lion in battle." What technique is this?', options: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'], correctIndex: 1 },
  { grade: 4, type: 'meaning', prompt: '"The room fell silent." What does "fell" suggest?', options: ['The room collapsed', 'Silence came suddenly', 'Someone tripped', 'It was evening'], correctIndex: 1 },
  { grade: 4, type: 'analysis', prompt: 'Why might a writer use a rhetorical question?', options: ['To confuse the reader', 'To engage the reader and make them think', 'To provide an answer', 'To end a paragraph'], correctIndex: 1 },
  { grade: 4, type: 'technique', prompt: '"I\'ve told you a million times!" What technique?', options: ['Metaphor', 'Irony', 'Hyperbole', 'Understatement'], correctIndex: 2 },
  { grade: 4, type: 'meaning', prompt: '"The weather wept." What does this suggest?', options: ['It was raining and the mood is sad', 'The weather was happy', 'Someone was crying outside', 'It was very hot'], correctIndex: 0 },
  { grade: 4, type: 'technique', prompt: '"She sells sea shells on the sea shore." This contains which two techniques?', options: ['Metaphor and simile', 'Alliteration and sibilance', 'Personification and hyperbole', 'Rhyme and rhythm'], correctIndex: 1 },

  // Grade 5 — Meaning and basic analysis
  { grade: 5, type: 'analysis', prompt: 'In Macbeth, what does blood symbolise?', options: ['Power and ambition', 'Guilt and violence', 'Love and passion', 'Loyalty and honour'], correctIndex: 1 },
  { grade: 5, type: 'meaning', prompt: '"The fog crept in on little cat feet." What effect does this create?', options: ['Fear and horror', 'A sense of stealth and quiet movement', 'Excitement and energy', 'Anger and frustration'], correctIndex: 1 },
  { grade: 5, type: 'analysis', prompt: 'What is the purpose of pathetic fallacy?', options: ['To describe animals', 'To reflect characters\' emotions through weather/nature', 'To create humour', 'To introduce new characters'], correctIndex: 1 },
  { grade: 5, type: 'technique', prompt: '"It was the best of times, it was the worst of times." This is an example of:', options: ['Oxymoron', 'Juxtaposition', 'Irony', 'Euphemism'], correctIndex: 1 },
  { grade: 5, type: 'meaning', prompt: 'In "A Christmas Carol", why does Dickens present Scrooge as "solitary as an oyster"?', options: ['To show he likes seafood', 'To show he is completely isolated and closed off', 'To show he lives by the sea', 'To show he is wealthy'], correctIndex: 1 },
  { grade: 5, type: 'analysis', prompt: 'Why might a poet use enjambment?', options: ['To create a pause', 'To create a sense of flow or urgency', 'To rhyme more easily', 'To confuse the reader'], correctIndex: 1 },

  // Grade 6 — More sophisticated analysis
  { grade: 6, type: 'analysis', prompt: 'How does Priestley use the Inspector as a dramatic device in "An Inspector Calls"?', options: ['As comic relief', 'As a mouthpiece for socialist ideas', 'As a romantic interest', 'As a symbol of capitalism'], correctIndex: 1 },
  { grade: 6, type: 'meaning', prompt: '"Fair is foul, and foul is fair." How does this relate to themes in Macbeth?', options: ['It describes the weather', 'It introduces the theme of moral corruption and deception', 'It is about physical appearance', 'It describes a battle'], correctIndex: 1 },
  { grade: 6, type: 'analysis', prompt: 'Complete the analysis: "Stevenson uses the fog in Jekyll and Hyde to symbolise..."', options: ['The beauty of London', 'The concealment of truth and moral ambiguity', 'The industrial revolution', 'Victorian fashion'], correctIndex: 1 },
  { grade: 6, type: 'technique', prompt: 'What structural technique does Dickens use by dividing "A Christmas Carol" into staves?', options: ['Flashback', 'An allegory structured like a song/carol', 'Stream of consciousness', 'Epistolary form'], correctIndex: 1 },
  { grade: 6, type: 'analysis', prompt: 'In "Lord of the Flies", what does the conch symbolise?', options: ['Nature and the wild', 'Democracy, order and civilisation', 'Violence and savagery', 'Isolation and loneliness'], correctIndex: 1 },
  { grade: 6, type: 'meaning', prompt: '"The creatures outside looked from pig to man, and from man to pig." What does Orwell suggest?', options: ['Pigs are intelligent', 'The leaders have become indistinguishable from the oppressors', 'Animals should not be on farms', 'The revolution succeeded'], correctIndex: 1 },

  // Grade 7 — Sophisticated analysis with context
  { grade: 7, type: 'analysis', prompt: 'How does Shakespeare use the motif of darkness in Macbeth to convey moral corruption?', options: ['Darkness shows it is nighttime', 'Darkness conceals evil deeds and mirrors the moral decay of Macbeth\'s character', 'Darkness represents sadness', 'Darkness is used for dramatic lighting effects'], correctIndex: 1 },
  { grade: 7, type: 'analysis', prompt: 'In "An Inspector Calls", how does the generational divide serve Priestley\'s message?', options: ['Older characters are wiser', 'Younger characters represent hope for social change while older ones represent entrenched attitudes', 'There is no real divide', 'The young are punished more'], correctIndex: 1 },
  { grade: 7, type: 'analysis', prompt: 'Complete: "Golding uses Simon as a Christ-like figure to..."', options: ['Provide comic relief', 'Symbolise innate human goodness and the sacrifice of innocence', 'Show the power of democracy', 'Represent the military'], correctIndex: 1 },
  { grade: 7, type: 'meaning', prompt: 'In "Of Mice and Men", why does Steinbeck set the novella near Soledad?', options: ['It was his hometown', 'Soledad means "solitude" in Spanish, reinforcing themes of loneliness', 'It was a famous ranch', 'It had the best weather'], correctIndex: 1 },
  { grade: 7, type: 'analysis', prompt: 'How does Dickens use Scrooge\'s transformation to critique Victorian society?', options: ['He shows wealth is bad', 'He suggests individual moral change can address social inequality and neglect of the poor', 'He promotes Christianity', 'He shows that ghosts are real'], correctIndex: 1 },

  // Grade 8 — Perceptive, evaluative analysis
  { grade: 8, type: 'analysis', prompt: 'How might a feminist critic interpret Lady Macbeth\'s "unsex me here" speech?', options: ['She wants to be a man', 'She recognises that femininity is equated with weakness in her patriarchal society and must reject it to gain power', 'She is confused about her identity', 'She is praying'], correctIndex: 1 },
  { grade: 8, type: 'analysis', prompt: 'To what extent does Orwell present revolution as inevitably corrupted in "Animal Farm"?', options: ['Revolution always works perfectly', 'The cyclical structure suggests revolutionary ideals are corrupted by those who gain power, reflecting the Soviet experience', 'Only animal revolutions fail', 'Orwell supports the revolution throughout'], correctIndex: 1 },
  { grade: 8, type: 'analysis', prompt: 'How does Stevenson use the novella form in "Jekyll and Hyde" to explore duality?', options: ['Short books are easier', 'The fragmented narrative structure with multiple perspectives mirrors the fractured identity of Jekyll/Hyde', 'He ran out of ideas', 'Novellas were popular at the time'], correctIndex: 1 },
  { grade: 8, type: 'analysis', prompt: 'Evaluate how Priestley uses dramatic irony when the characters dismiss the Inspector.', options: ['It creates humour', 'The audience knows WWI and WWII are coming, making the Birlings\' complacency a powerful critique of capitalist arrogance', 'It makes the play confusing', 'It shows the Inspector was wrong'], correctIndex: 1 },

  // Grade 9 — Conceptualised, critical, original
  { grade: 9, type: 'analysis', prompt: 'How does Shakespeare present the supernatural in Macbeth as both a dramatic and thematic device?', options: ['The witches are entertaining', 'The supernatural externalises Macbeth\'s ambition while creating dramatic tension; it also reflects Jacobean anxieties about fate versus free will', 'Ghosts were popular in plays', 'Shakespeare believed in witches'], correctIndex: 1 },
  { grade: 9, type: 'analysis', prompt: 'Critically evaluate whether Golding presents civilisation as merely a veneer in "Lord of the Flies".', options: ['Civilisation is always stable', 'The rapid descent into savagery suggests civilisation is fragile, but characters like Simon and Ralph complicate a purely pessimistic reading', 'All the boys are savage from the start', 'The island causes madness'], correctIndex: 1 },
  { grade: 9, type: 'analysis', prompt: 'How does Steinbeck use the American Dream as both a motivating force and a destructive illusion?', options: ['The dream always comes true', 'The dream provides hope and purpose but its impossibility under systemic inequality leads to tragedy, reflecting 1930s socioeconomic realities', 'Only George believes in it', 'The dream is about buying a farm'], correctIndex: 1 },
  { grade: 9, type: 'analysis', prompt: 'To what extent is "A Christmas Carol" a radical text in its Victorian context?', options: ['It is just a ghost story', 'While conservative in proposing individual moral reform, its unflinching depiction of poverty and direct address to the reader made it a provocative social critique', 'Dickens was not political', 'It only entertains children'], correctIndex: 1 },
  { grade: 9, type: 'analysis', prompt: 'Evaluate how Shakespeare uses the structure of the tragedy to present Macbeth as both perpetrator and victim.', options: ['Macbeth is purely evil', 'The five-act structure traces Macbeth\'s hamartia; his soliloquies create sympathy while his actions provoke condemnation, creating a complex moral response', 'Shakespeare did not plan the structure', 'Macbeth is entirely a victim'], correctIndex: 1 },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Grade Ladder ─────────────────────────────────────────────────────────────

const GRADE_LEVELS: GCSEGrade[] = [3, 4, 5, 6, 7, 8, 9]
const CORRECT_TO_ADVANCE = 3
const WRONG_TO_DROP = 2

function GradeLadder({ currentGrade, maxGradeReached }: { currentGrade: GCSEGrade; maxGradeReached: GCSEGrade }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Grade Ladder
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
                : 'border-white/[0.06] bg-white/[0.02] text-muted-foreground'
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GradeClimberPage() {
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

  const pickQuestion = useCallback(
    (grade: GCSEGrade, used: Set<number>) => {
      const candidates = QUESTION_BANK
        .map((q, i) => ({ q, i }))
        .filter(({ q, i }) => q.grade === grade && !used.has(i))
      if (candidates.length === 0) {
        // Fallback: allow nearby grades
        const nearby = QUESTION_BANK
          .map((q, i) => ({ q, i }))
          .filter(({ q, i }) => Math.abs(q.grade - grade) <= 1 && !used.has(i))
        if (nearby.length === 0) return null
        const pick = nearby[Math.floor(Math.random() * nearby.length)]
        return pick
      }
      return candidates[Math.floor(Math.random() * candidates.length)]
    },
    []
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
    [pickQuestion]
  )

  const handleStart = useCallback(() => {
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

  const handleSelect = useCallback(
    (index: number) => {
      if (showFeedback || !currentQuestion) return
      setSelected(index)
      setShowFeedback(true)
      setTotalAnswered((t) => t + 1)

      const correct = index === currentQuestion.correctIndex
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

      setTimeout(() => {
        setUsedQuestions((prev) => {
          const next = new Set(prev)
          startNextQuestion(nextGrade, next)
          return next
        })
      }, 1400)
    },
    [showFeedback, currentQuestion, currentGrade, correctStreak, wrongStreak, maxGradeReached, startNextQuestion]
  )

  // Score: maxGradeReached maps to a percentage for GameShell grading
  const scoreValue = totalCorrect
  const maxScoreValue = Math.max(totalAnswered, 1)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" size="sm" render={<Link href="/games" />}>
          <ArrowLeft className="size-4" />
          Back to Games
        </Button>
      </div>

      <GameShell
        gameId="grade-climber"
        title="Grade Climber"
        description="Answer questions at increasing difficulty. Get 3 right to climb, 2 wrong to drop back."
        difficulty="Higher"
        score={scoreValue}
        maxScore={maxScoreValue}
        onStart={handleStart}
        onFinish={handleFinish}
        gameState={gameState}
      >
        {currentQuestion && (
          <div className="flex gap-8">
            {/* Grade Ladder */}
            <div className="hidden shrink-0 sm:block">
              <GradeLadder currentGrade={currentGrade} maxGradeReached={maxGradeReached} />
            </div>

            {/* Question area */}
            <div className="flex flex-1 flex-col gap-6">
              {/* Status row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={cn(
                  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                  currentGrade >= 7 ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                    : currentGrade >= 5 ? 'border-amber-500/20 bg-amber-500/10 text-amber-400'
                    : 'border-blue-500/20 bg-blue-500/10 text-blue-400'
                )}>
                  Grade {currentGrade}
                </span>
                <span className="text-xs text-muted-foreground">
                  {TYPE_LABELS[currentQuestion.type]}
                </span>
                <span className="ml-auto text-xs text-muted-foreground">
                  Streak: {correctStreak}/{CORRECT_TO_ADVANCE} to advance
                </span>
              </div>

              {/* Prompt */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
                <p className="text-base leading-relaxed text-foreground">
                  {currentQuestion.prompt}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, i) => {
                  const isCorrect = i === currentQuestion.correctIndex
                  const isSelected = i === selected
                  let style = 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                  if (showFeedback) {
                    if (isCorrect)
                      style = 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                    else if (isSelected)
                      style = 'border-red-500/40 bg-red-500/10 text-red-400'
                    else style = 'border-white/[0.04] bg-white/[0.01] opacity-50'
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={showFeedback}
                      className={cn(
                        'rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200',
                        style,
                        !showFeedback && 'cursor-pointer active:translate-y-px'
                      )}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </GameShell>
    </div>
  )
}
