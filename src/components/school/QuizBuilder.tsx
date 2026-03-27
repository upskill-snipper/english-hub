'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import {
  Plus,
  Trash2,
  Copy,
  Eye,
  Save,
  Share2,
  Printer,
  FileDown,
  Shuffle,
  Clock,
  ChevronDown,
  ChevronUp,
  GripVertical,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Upload,
  Library,
  RotateCcw,
  Settings2,
  Zap,
  Quote,
  Type,
  List,
  BarChart3,
  Users,
  Loader2,
  Check,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ─── Types ──────────────────────────────────────────────────────────────────

type QuestionType =
  | 'multiple-choice'
  | 'short-answer'
  | 'true-false'
  | 'match-pairs'
  | 'fill-in-blank'

type Difficulty = 'easy' | 'medium' | 'hard'

type SkillTag =
  | 'reading'
  | 'writing'
  | 'analysis'
  | 'vocabulary'
  | 'grammar'
  | 'comprehension'
  | 'critical-thinking'
  | 'literary-devices'

type FeedbackMode = 'after-each' | 'at-end'

interface MatchPair {
  left: string
  right: string
}

interface Question {
  id: string
  type: QuestionType
  text: string
  options: string[] // MC options
  correctAnswer: string // for MC, short-answer, true-false, fill-in-blank
  matchPairs: MatchPair[] // for match-pairs
  explanation: string
  difficulty: Difficulty
  skillTag: SkillTag
  points: number
}

interface QuizSettings {
  title: string
  description: string
  className: string
  timeLimit: number | null // minutes, null = no limit
  shuffleQuestions: boolean
  feedbackMode: FeedbackMode
  passingScore: number // percentage
}

interface Quiz {
  id: string
  settings: QuizSettings
  questions: Question[]
  createdAt: string
  updatedAt: string
  shareCode: string | null
}

interface StudentResult {
  studentName: string
  score: number
  totalPoints: number
  answers: Record<string, string>
  completedAt: string
}

interface QuizResult {
  quizId: string
  results: StudentResult[]
}

// ─── Constants ──────────────────────────────────────────────────────────────

const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  'multiple-choice': 'Multiple Choice',
  'short-answer': 'Short Answer',
  'true-false': 'True / False',
  'match-pairs': 'Match Pairs',
  'fill-in-blank': 'Fill in the Blank',
}

const QUESTION_TYPE_ICONS: Record<QuestionType, typeof List> = {
  'multiple-choice': List,
  'short-answer': Type,
  'true-false': CheckCircle,
  'match-pairs': Shuffle,
  'fill-in-blank': BookOpen,
}

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  easy: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  medium: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  hard: 'bg-red-500/10 text-red-600 dark:text-red-400',
}

const SKILL_TAGS: SkillTag[] = [
  'reading',
  'writing',
  'analysis',
  'vocabulary',
  'grammar',
  'comprehension',
  'critical-thinking',
  'literary-devices',
]

const STORAGE_KEY = 'english-hub-quiz-library'
const RESULTS_STORAGE_KEY = 'english-hub-quiz-results'

// ─── Template definitions ───────────────────────────────────────────────────

interface QuickTemplate {
  id: string
  name: string
  description: string
  icon: typeof Zap
  generate: () => Question[]
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

function generateShareCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

function createEmptyQuestion(type: QuestionType = 'multiple-choice'): Question {
  return {
    id: generateId(),
    type,
    text: '',
    options: type === 'multiple-choice' ? ['', '', '', ''] : [],
    correctAnswer: type === 'true-false' ? 'true' : '',
    matchPairs: type === 'match-pairs' ? [{ left: '', right: '' }, { left: '', right: '' }] : [],
    explanation: '',
    difficulty: 'medium',
    skillTag: 'comprehension',
    points: 1,
  }
}

const SAMPLE_VOCAB_WORDS = [
  { term: 'Metaphor', definition: 'A figure of speech comparing two unlike things without using "like" or "as"' },
  { term: 'Alliteration', definition: 'The repetition of initial consonant sounds in successive words' },
  { term: 'Protagonist', definition: 'The leading character in a story or drama' },
  { term: 'Foreshadowing', definition: 'A literary device used to hint at events that will occur later in the story' },
  { term: 'Irony', definition: 'The expression of meaning using language that normally signifies the opposite' },
  { term: 'Hyperbole', definition: 'Exaggerated statements not meant to be taken literally' },
  { term: 'Onomatopoeia', definition: 'A word that imitates the natural sound of a thing' },
  { term: 'Simile', definition: 'A figure of speech comparing two things using "like" or "as"' },
  { term: 'Personification', definition: 'Giving human characteristics to non-human things' },
  { term: 'Symbolism', definition: 'The use of symbols to represent ideas or qualities' },
]

const SAMPLE_QUOTES = [
  { quote: '"To be, or not to be, that is the question."', author: 'William Shakespeare, Hamlet' },
  { quote: '"It is a truth universally acknowledged..."', author: 'Jane Austen, Pride and Prejudice' },
  { quote: '"All animals are equal, but some animals are more equal than others."', author: 'George Orwell, Animal Farm' },
  { quote: '"It was the best of times, it was the worst of times."', author: 'Charles Dickens, A Tale of Two Cities' },
  { quote: '"The only thing we have to fear is fear itself."', author: 'Franklin D. Roosevelt' },
  { quote: '"Two roads diverged in a wood, and I — I took the one less traveled by."', author: 'Robert Frost' },
  { quote: '"Not all those who wander are lost."', author: 'J.R.R. Tolkien' },
  { quote: '"I think, therefore I am."', author: 'Rene Descartes' },
  { quote: '"The unexamined life is not worth living."', author: 'Socrates' },
  { quote: '"In the middle of difficulty lies opportunity."', author: 'Albert Einstein' },
]

const QUICK_TEMPLATES: QuickTemplate[] = [
  {
    id: 'random-10',
    name: '10 Random Questions',
    description: 'A mix of 10 questions across different types and difficulties',
    icon: Zap,
    generate: () => {
      const types: QuestionType[] = ['multiple-choice', 'short-answer', 'true-false', 'fill-in-blank']
      const questions: Question[] = []
      for (let i = 0; i < 10; i++) {
        const type = types[i % types.length]
        questions.push({
          ...createEmptyQuestion(type),
          text: `Question ${i + 1}`,
          difficulty: (['easy', 'medium', 'hard'] as Difficulty[])[i % 3],
        })
      }
      return questions
    },
  },
  {
    id: 'vocab-definitions',
    name: 'Vocabulary Definitions',
    description: 'Quiz students on literary term definitions with multiple choice and matching',
    icon: BookOpen,
    generate: () => {
      const shuffled = [...SAMPLE_VOCAB_WORDS].sort(() => Math.random() - 0.5)
      const questions: Question[] = []

      // 5 multiple choice
      for (let i = 0; i < 5; i++) {
        const word = shuffled[i]
        const wrongAnswers = shuffled
          .filter((_, idx) => idx !== i)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((w) => w.definition)
        const options = [word.definition, ...wrongAnswers].sort(() => Math.random() - 0.5)
        questions.push({
          ...createEmptyQuestion('multiple-choice'),
          text: `What is the definition of "${word.term}"?`,
          options,
          correctAnswer: word.definition,
          difficulty: 'medium',
          skillTag: 'vocabulary',
        })
      }

      // 1 match-pairs question
      const matchWords = shuffled.slice(5, 10)
      questions.push({
        ...createEmptyQuestion('match-pairs'),
        text: 'Match each literary term with its correct definition.',
        matchPairs: matchWords.map((w) => ({ left: w.term, right: w.definition })),
        difficulty: 'medium',
        skillTag: 'vocabulary',
      })

      return questions
    },
  },
  {
    id: 'quote-identification',
    name: 'Quote Identification',
    description: 'Identify the source of famous literary quotes',
    icon: Quote,
    generate: () => {
      const shuffled = [...SAMPLE_QUOTES].sort(() => Math.random() - 0.5).slice(0, 10)
      return shuffled.map((q) => {
        const wrongAuthors = SAMPLE_QUOTES.filter((x) => x.author !== q.author)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((x) => x.author)
        const options = [q.author, ...wrongAuthors].sort(() => Math.random() - 0.5)
        return {
          ...createEmptyQuestion('multiple-choice'),
          text: `Who said or wrote: ${q.quote}`,
          options,
          correctAnswer: q.author,
          difficulty: 'hard',
          skillTag: 'literary-devices',
        }
      })
    },
  },
]

// ─── Module import data (simulated) ────────────────────────────────────────

interface CourseModule {
  id: string
  name: string
  questions: Question[]
}

const SAMPLE_COURSE_MODULES: CourseModule[] = [
  {
    id: 'mod-1',
    name: 'Module 1: Introduction to Literary Analysis',
    questions: [
      {
        ...createEmptyQuestion('multiple-choice'),
        text: 'What is the primary purpose of literary analysis?',
        options: [
          'To summarise the plot of a text',
          'To examine how an author uses literary techniques to convey meaning',
          'To write a biography of the author',
          'To memorise quotes from the text',
        ],
        correctAnswer: 'To examine how an author uses literary techniques to convey meaning',
        explanation: 'Literary analysis goes beyond summarising; it examines technique and meaning.',
        difficulty: 'easy',
        skillTag: 'analysis',
      },
      {
        ...createEmptyQuestion('true-false'),
        text: 'A thesis statement in a literary essay should be arguable, not merely factual.',
        correctAnswer: 'true',
        explanation: 'A strong thesis makes a claim that could be debated.',
        difficulty: 'easy',
        skillTag: 'writing',
      },
    ],
  },
  {
    id: 'mod-2',
    name: 'Module 2: Poetry and Poetic Devices',
    questions: [
      {
        ...createEmptyQuestion('multiple-choice'),
        text: 'Which of the following is an example of enjambment?',
        options: [
          'A line that ends with a period',
          'A line that continues into the next without punctuation',
          'A line that rhymes with the previous line',
          'A line written in iambic pentameter',
        ],
        correctAnswer: 'A line that continues into the next without punctuation',
        explanation: 'Enjambment occurs when a sentence or phrase runs over from one line to the next.',
        difficulty: 'medium',
        skillTag: 'literary-devices',
      },
      {
        ...createEmptyQuestion('fill-in-blank'),
        text: 'The repetition of vowel sounds within nearby words is called ___.',
        correctAnswer: 'assonance',
        explanation: 'Assonance is the repetition of vowel sounds to create internal rhyming.',
        difficulty: 'hard',
        skillTag: 'literary-devices',
      },
    ],
  },
  {
    id: 'mod-3',
    name: 'Module 3: Shakespeare and Drama',
    questions: [
      {
        ...createEmptyQuestion('short-answer'),
        text: 'Briefly explain the concept of a "tragic flaw" (hamartia) with an example from Shakespeare.',
        correctAnswer: 'A tragic flaw is a character defect that leads to the downfall of the hero, e.g. Hamlet\'s indecisiveness or Macbeth\'s ambition.',
        explanation: 'Hamartia is a key concept in Aristotelian tragedy, adopted by Shakespeare.',
        difficulty: 'hard',
        skillTag: 'analysis',
      },
      {
        ...createEmptyQuestion('match-pairs'),
        text: 'Match each Shakespeare play to its genre.',
        matchPairs: [
          { left: 'Hamlet', right: 'Tragedy' },
          { left: 'A Midsummer Night\'s Dream', right: 'Comedy' },
          { left: 'The Tempest', right: 'Romance' },
          { left: 'Henry V', right: 'History' },
        ],
        difficulty: 'medium',
        skillTag: 'comprehension',
      },
    ],
  },
]

// ─── Sub-components ─────────────────────────────────────────────────────────

function QuestionTypeSelector({
  value,
  onChange,
}: {
  value: QuestionType
  onChange: (type: QuestionType) => void
}) {
  const types = Object.entries(QUESTION_TYPE_LABELS) as [QuestionType, string][]

  return (
    <div className="flex flex-wrap gap-1.5">
      {types.map(([type, label]) => {
        const Icon = QUESTION_TYPE_ICONS[type]
        return (
          <button
            key={type}
            type="button"
            onClick={() => onChange(type)}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all duration-200',
              value === type
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground'
            )}
          >
            <Icon className="size-3.5" />
            {label}
          </button>
        )
      })}
    </div>
  )
}

function QuestionEditor({
  question,
  index,
  onUpdate,
  onDelete,
  onDuplicate,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: {
  question: Question
  index: number
  onUpdate: (q: Question) => void
  onDelete: () => void
  onDuplicate: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  isFirst: boolean
  isLast: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(true)

  const updateField = <K extends keyof Question>(field: K, value: Question[K]) => {
    onUpdate({ ...question, [field]: value })
  }

  const handleTypeChange = (type: QuestionType) => {
    const updated = { ...question, type }
    if (type === 'multiple-choice' && question.options.length === 0) {
      updated.options = ['', '', '', '']
    }
    if (type === 'true-false') {
      updated.correctAnswer = 'true'
      updated.options = []
    }
    if (type === 'match-pairs' && question.matchPairs.length === 0) {
      updated.matchPairs = [
        { left: '', right: '' },
        { left: '', right: '' },
      ]
    }
    if (type === 'short-answer' || type === 'fill-in-blank') {
      updated.options = []
      updated.matchPairs = []
    }
    onUpdate(updated)
  }

  return (
    <Card className="relative">
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex flex-col items-center gap-0.5 shrink-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onMoveUp()
                }}
                disabled={isFirst}
                className="p-0.5 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:text-muted-foreground"
              >
                <ChevronUp className="size-3.5" />
              </button>
              <GripVertical className="size-4 text-muted-foreground/70" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onMoveDown()
                }}
                disabled={isLast}
                className="p-0.5 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:text-muted-foreground"
              >
                <ChevronDown className="size-3.5" />
              </button>
            </div>
            <div className="min-w-0">
              <CardTitle>
                <span className="text-muted-foreground font-normal">Q{index + 1}.</span>{' '}
                {question.text || (
                  <span className="text-muted-foreground/60 italic">Untitled question</span>
                )}
              </CardTitle>
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                <Badge variant="secondary" className="text-[10px]">
                  {QUESTION_TYPE_LABELS[question.type]}
                </Badge>
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold',
                    DIFFICULTY_COLORS[question.difficulty]
                  )}
                >
                  {question.difficulty}
                </span>
                <Badge variant="outline" className="text-[10px]">
                  {question.skillTag}
                </Badge>
                <span className="text-[10px] text-muted-foreground">
                  {question.points} pt{question.points !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onDuplicate()
              }}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              title="Duplicate"
            >
              <Copy className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onDelete()
              }}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
              title="Delete"
            >
              <Trash2 className="size-3.5" />
            </button>
            {isExpanded ? (
              <ChevronUp className="size-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="size-4 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Question Type</Label>
            <QuestionTypeSelector value={question.type} onChange={handleTypeChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`q-text-${question.id}`}>
              Question Text
              {question.type === 'fill-in-blank' && (
                <span className="ml-2 text-xs text-muted-foreground font-normal">
                  Use ___ for blanks
                </span>
              )}
            </Label>
            <Textarea
              id={`q-text-${question.id}`}
              placeholder={
                question.type === 'fill-in-blank'
                  ? 'The author uses ___ to create tension in the scene.'
                  : 'Enter your question...'
              }
              value={question.text}
              onChange={(e) => updateField('text', e.target.value)}
            />
          </div>

          {/* Multiple Choice Options */}
          {question.type === 'multiple-choice' && (
            <div className="space-y-2">
              <Label>Answer Options</Label>
              <div className="space-y-2">
                {question.options.map((opt, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateField('correctAnswer', opt)}
                      className={cn(
                        'shrink-0 flex items-center justify-center size-6 rounded-full border-2 transition-all',
                        question.correctAnswer === opt && opt !== ''
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-transparent hover:border-primary/40'
                      )}
                    >
                      <Check className="size-3" />
                    </button>
                    <Input
                      placeholder={`Option ${String.fromCharCode(65 + i)}`}
                      value={opt}
                      onChange={(e) => {
                        const newOpts = [...question.options]
                        // If this was the correct answer, update it
                        if (question.correctAnswer === opt) {
                          updateField('correctAnswer', e.target.value)
                        }
                        newOpts[i] = e.target.value
                        updateField('options', newOpts)
                      }}
                    />
                    {question.options.length > 2 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newOpts = question.options.filter((_, idx) => idx !== i)
                          if (question.correctAnswer === opt) {
                            updateField('correctAnswer', '')
                          }
                          updateField('options', newOpts)
                        }}
                        className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-destructive"
                      >
                        <X className="size-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {question.options.length < 6 && (
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => updateField('options', [...question.options, ''])}
                >
                  <Plus className="size-3" />
                  Add Option
                </Button>
              )}
            </div>
          )}

          {/* True/False */}
          {question.type === 'true-false' && (
            <div className="space-y-2">
              <Label>Correct Answer</Label>
              <div className="flex gap-2">
                {['true', 'false'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => updateField('correctAnswer', val)}
                    className={cn(
                      'flex-1 rounded-lg border py-2 text-sm font-medium transition-all',
                      question.correctAnswer === val
                        ? val === 'true'
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600'
                          : 'border-red-500 bg-red-500/10 text-red-600'
                        : 'border-border text-muted-foreground hover:border-primary/40'
                    )}
                  >
                    {val === 'true' ? 'True' : 'False'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Short Answer / Fill in Blank */}
          {(question.type === 'short-answer' || question.type === 'fill-in-blank') && (
            <div className="space-y-2">
              <Label htmlFor={`q-answer-${question.id}`}>
                {question.type === 'fill-in-blank' ? 'Correct Answer (for the blank)' : 'Expected Answer'}
              </Label>
              <Textarea
                id={`q-answer-${question.id}`}
                placeholder={
                  question.type === 'fill-in-blank'
                    ? 'The word/phrase that fills the blank'
                    : 'Write the expected answer or key points...'
                }
                value={question.correctAnswer}
                onChange={(e) => updateField('correctAnswer', e.target.value)}
              />
            </div>
          )}

          {/* Match Pairs */}
          {question.type === 'match-pairs' && (
            <div className="space-y-2">
              <Label>Match Pairs</Label>
              <div className="space-y-2">
                {question.matchPairs.map((pair, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Input
                      placeholder="Left side"
                      value={pair.left}
                      onChange={(e) => {
                        const newPairs = [...question.matchPairs]
                        newPairs[i] = { ...pair, left: e.target.value }
                        updateField('matchPairs', newPairs)
                      }}
                      className="flex-1"
                    />
                    <span className="text-muted-foreground shrink-0">&harr;</span>
                    <Input
                      placeholder="Right side"
                      value={pair.right}
                      onChange={(e) => {
                        const newPairs = [...question.matchPairs]
                        newPairs[i] = { ...pair, right: e.target.value }
                        updateField('matchPairs', newPairs)
                      }}
                      className="flex-1"
                    />
                    {question.matchPairs.length > 2 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newPairs = question.matchPairs.filter((_, idx) => idx !== i)
                          updateField('matchPairs', newPairs)
                        }}
                        className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-destructive"
                      >
                        <X className="size-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {question.matchPairs.length < 8 && (
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() =>
                    updateField('matchPairs', [
                      ...question.matchPairs,
                      { left: '', right: '' },
                    ])
                  }
                >
                  <Plus className="size-3" />
                  Add Pair
                </Button>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor={`q-explanation-${question.id}`}>
              Explanation{' '}
              <span className="text-muted-foreground font-normal">(shown after answering)</span>
            </Label>
            <Textarea
              id={`q-explanation-${question.id}`}
              placeholder="Why this is the correct answer..."
              value={question.explanation}
              onChange={(e) => updateField('explanation', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label>Difficulty</Label>
              <div className="flex gap-1.5">
                {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => updateField('difficulty', d)}
                    className={cn(
                      'flex-1 rounded-lg border px-2 py-1.5 text-xs font-medium capitalize transition-all',
                      question.difficulty === d
                        ? cn('border-transparent', DIFFICULTY_COLORS[d])
                        : 'border-border text-muted-foreground hover:border-primary/40'
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Skill Tag</Label>
              <Select
                value={question.skillTag}
                onValueChange={(val) => updateField('skillTag', val as SkillTag)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select skill" />
                </SelectTrigger>
                <SelectContent>
                  {SKILL_TAGS.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag.replace(/-/g, ' ')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`q-points-${question.id}`}>Points</Label>
              <Input
                id={`q-points-${question.id}`}
                type="number"
                min={1}
                max={100}
                value={question.points}
                onChange={(e) => updateField('points', Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

// ─── Preview Component ──────────────────────────────────────────────────────

function QuizPreview({
  quiz,
  onClose,
}: {
  quiz: Quiz
  onClose: () => void
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<number | null>(
    quiz.settings.timeLimit ? quiz.settings.timeLimit * 60 : null
  )

  const questions = useMemo(() => {
    if (quiz.settings.shuffleQuestions) {
      return [...quiz.questions].sort(() => Math.random() - 0.5)
    }
    return quiz.questions
  }, [quiz.questions, quiz.settings.shuffleQuestions])

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0 || submitted) return
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          setSubmitted(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft, submitted])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0)
  const earnedPoints = useMemo(() => {
    if (!submitted) return 0
    return questions.reduce((sum, q) => {
      const answer = answers[q.id]
      if (!answer) return sum
      if (q.type === 'match-pairs') return sum // simplified for preview
      if (q.type === 'short-answer') {
        return answer.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()
          ? sum + q.points
          : sum
      }
      return answer === q.correctAnswer ? sum + q.points : sum
    }, 0)
  }, [submitted, questions, answers])

  const q = questions[currentQuestion]

  const handleAnswer = (questionId: string, answer: string) => {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
    if (quiz.settings.feedbackMode === 'after-each') {
      setShowFeedback((prev) => ({ ...prev, [questionId]: true }))
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
    if (quiz.settings.feedbackMode === 'at-end') {
      const allFeedback: Record<string, boolean> = {}
      questions.forEach((q) => {
        allFeedback[q.id] = true
      })
      setShowFeedback(allFeedback)
    }
  }

  if (!q) return null

  const isCorrect = (question: Question) => {
    const answer = answers[question.id]
    if (!answer) return null
    if (question.type === 'short-answer') {
      return answer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim()
    }
    return answer === question.correctAnswer
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <ArrowLeft className="size-4" />
            Exit Preview
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <div>
            <h2 className="text-sm font-semibold">{quiz.settings.title || 'Untitled Quiz'}</h2>
            <p className="text-xs text-muted-foreground">
              Preview Mode &mdash; {questions.length} questions &mdash; {totalPoints} points
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {timeLeft !== null && (
            <div
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-mono font-medium',
                timeLeft < 60
                  ? 'bg-red-500/10 text-red-600'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              <Clock className="size-3.5" />
              {formatTime(timeLeft)}
            </div>
          )}
          <Badge variant="secondary">
            {currentQuestion + 1} / {questions.length}
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
          {submitted ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quiz Complete</CardTitle>
                <CardDescription>
                  You scored {earnedPoints} out of {totalPoints} points (
                  {Math.round((earnedPoints / totalPoints) * 100)}%)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress bar */}
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all',
                      (earnedPoints / totalPoints) * 100 >= quiz.settings.passingScore
                        ? 'bg-emerald-500'
                        : 'bg-red-500'
                    )}
                    style={{ width: `${(earnedPoints / totalPoints) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {(earnedPoints / totalPoints) * 100 >= quiz.settings.passingScore
                    ? 'Passed!'
                    : 'Did not meet passing score.'}
                  {' '}Passing score: {quiz.settings.passingScore}%
                </p>

                <Separator />

                {/* Review answers */}
                <div className="space-y-4">
                  {questions.map((question, idx) => {
                    const correct = isCorrect(question)
                    return (
                      <div
                        key={question.id}
                        className={cn(
                          'rounded-lg border p-4',
                          correct === true
                            ? 'border-emerald-500/30 bg-emerald-500/5'
                            : correct === false
                            ? 'border-red-500/30 bg-red-500/5'
                            : 'border-border'
                        )}
                      >
                        <div className="flex items-start gap-2">
                          {correct === true ? (
                            <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                          ) : correct === false ? (
                            <XCircle className="mt-0.5 size-4 shrink-0 text-red-500" />
                          ) : (
                            <span className="mt-0.5 size-4 shrink-0" />
                          )}
                          <div className="space-y-1">
                            <p className="text-sm font-medium">
                              Q{idx + 1}. {question.text}
                            </p>
                            {answers[question.id] && (
                              <p className="text-xs text-muted-foreground">
                                Your answer: {answers[question.id]}
                              </p>
                            )}
                            {correct === false && (
                              <p className="text-xs text-emerald-600">
                                Correct: {question.correctAnswer}
                              </p>
                            )}
                            {showFeedback[question.id] && question.explanation && (
                              <p className="mt-1 text-xs text-muted-foreground italic">
                                {question.explanation}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{QUESTION_TYPE_LABELS[q.type]}</Badge>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold',
                      DIFFICULTY_COLORS[q.difficulty]
                    )}
                  >
                    {q.difficulty}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {q.points} pt{q.points !== 1 ? 's' : ''}
                  </span>
                </div>
                <CardTitle className="text-base mt-2">{q.text}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Multiple Choice */}
                {q.type === 'multiple-choice' && (
                  <div className="space-y-2">
                    {q.options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleAnswer(q.id, opt)}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-all',
                          answers[q.id] === opt
                            ? showFeedback[q.id]
                              ? opt === q.correctAnswer
                                ? 'border-emerald-500 bg-emerald-500/10'
                                : 'border-red-500 bg-red-500/10'
                              : 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/40'
                        )}
                      >
                        <span
                          className={cn(
                            'flex size-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold',
                            answers[q.id] === opt
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border'
                          )}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* True/False */}
                {q.type === 'true-false' && (
                  <div className="flex gap-3">
                    {['true', 'false'].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handleAnswer(q.id, val)}
                        className={cn(
                          'flex-1 rounded-lg border py-4 text-sm font-medium transition-all',
                          answers[q.id] === val
                            ? showFeedback[q.id]
                              ? val === q.correctAnswer
                                ? 'border-emerald-500 bg-emerald-500/10'
                                : 'border-red-500 bg-red-500/10'
                              : 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/40'
                        )}
                      >
                        {val === 'true' ? 'True' : 'False'}
                      </button>
                    ))}
                  </div>
                )}

                {/* Short Answer */}
                {q.type === 'short-answer' && (
                  <Textarea
                    placeholder="Type your answer..."
                    value={answers[q.id] || ''}
                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                  />
                )}

                {/* Fill in Blank */}
                {q.type === 'fill-in-blank' && (
                  <Input
                    placeholder="Fill in the blank..."
                    value={answers[q.id] || ''}
                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                  />
                )}

                {/* Match Pairs - simplified preview */}
                {q.type === 'match-pairs' && (
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      Match pairs preview (students would drag to match):
                    </p>
                    {q.matchPairs.map((pair, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-1 rounded-lg border bg-muted/30 p-2.5 text-sm">
                          {pair.left}
                        </div>
                        <span className="text-muted-foreground">&rarr;</span>
                        <div className="flex-1 rounded-lg border bg-muted/30 p-2.5 text-sm">
                          {pair.right}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Feedback */}
                {showFeedback[q.id] && q.explanation && (
                  <div className="mt-3 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3">
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      Explanation
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{q.explanation}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <div className="flex gap-2">
                  {currentQuestion === questions.length - 1 ? (
                    <Button size="sm" onClick={handleSubmit}>
                      Submit Quiz
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() =>
                        setCurrentQuestion((prev) =>
                          Math.min(questions.length - 1, prev + 1)
                        )
                      }
                    >
                      Next
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          )}

          {/* Question dots */}
          {!submitted && (
            <div className="mt-6 flex flex-wrap justify-center gap-1.5">
              {questions.map((question, idx) => (
                <button
                  key={question.id}
                  type="button"
                  onClick={() => setCurrentQuestion(idx)}
                  className={cn(
                    'size-8 rounded-lg text-xs font-medium transition-all',
                    idx === currentQuestion
                      ? 'bg-primary text-primary-foreground'
                      : answers[question.id]
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Results View ───────────────────────────────────────────────────────────

function ResultsView({ quiz }: { quiz: Quiz }) {
  const [results, setResults] = useState<QuizResult | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RESULTS_STORAGE_KEY)
      if (stored) {
        const allResults: QuizResult[] = JSON.parse(stored)
        const quizResult = allResults.find((r) => r.quizId === quiz.id) ?? null
        setResults(quizResult)
      }
    } catch {
      // ignore
    }
  }, [quiz.id])

  // Generate sample results for demonstration
  const sampleResults: StudentResult[] = useMemo(
    () => [
      {
        studentName: 'Alice Johnson',
        score: 85,
        totalPoints: 100,
        answers: {},
        completedAt: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        studentName: 'Bob Smith',
        score: 72,
        totalPoints: 100,
        answers: {},
        completedAt: new Date(Date.now() - 7200000).toISOString(),
      },
      {
        studentName: 'Charlie Brown',
        score: 93,
        totalPoints: 100,
        answers: {},
        completedAt: new Date(Date.now() - 1800000).toISOString(),
      },
      {
        studentName: 'Diana Lee',
        score: 68,
        totalPoints: 100,
        answers: {},
        completedAt: new Date(Date.now() - 5400000).toISOString(),
      },
      {
        studentName: 'Edward Kim',
        score: 91,
        totalPoints: 100,
        answers: {},
        completedAt: new Date(Date.now() - 900000).toISOString(),
      },
    ],
    []
  )

  const displayResults = results?.results ?? sampleResults
  const avgScore =
    displayResults.reduce((sum, r) => sum + (r.score / r.totalPoints) * 100, 0) /
    displayResults.length
  const highScore = Math.max(...displayResults.map((r) => (r.score / r.totalPoints) * 100))
  const lowScore = Math.min(...displayResults.map((r) => (r.score / r.totalPoints) * 100))

  return (
    <div className="space-y-6">
      {!results && (
        <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
          <p className="text-xs text-amber-600 dark:text-amber-400">
            Showing sample results for demonstration. Real results will appear when students
            complete the quiz.
          </p>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card size="sm">
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Submissions</p>
            <p className="text-2xl font-bold">{displayResults.length}</p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Average Score</p>
            <p className="text-2xl font-bold">{Math.round(avgScore)}%</p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Highest</p>
            <p className="text-2xl font-bold text-emerald-600">{Math.round(highScore)}%</p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Lowest</p>
            <p className="text-2xl font-bold text-red-600">{Math.round(lowScore)}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Individual Results */}
      <Card>
        <CardHeader>
          <CardTitle>Student Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {displayResults
              .sort((a, b) => b.score / b.totalPoints - a.score / a.totalPoints)
              .map((result, i) => {
                const pct = Math.round((result.score / result.totalPoints) * 100)
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                      {i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{result.studentName}</p>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn(
                            'h-full rounded-full',
                            pct >= 80
                              ? 'bg-emerald-500'
                              : pct >= 60
                              ? 'bg-amber-500'
                              : 'bg-red-500'
                          )}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold">{pct}%</p>
                      <p className="text-[10px] text-muted-foreground">
                        {result.score}/{result.totalPoints}
                      </p>
                    </div>
                  </div>
                )
              })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ─── Print Component ────────────────────────────────────────────────────────

function PrintQuiz({ quiz }: { quiz: Quiz }) {
  const printRef = useRef<HTMLDivElement>(null)

  const handlePrint = useCallback(() => {
    const content = printRef.current
    if (!content) return
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${quiz.settings.title || 'Quiz'}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; padding: 1in; color: #000; }
          h1 { font-size: 18pt; text-align: center; margin-bottom: 4pt; }
          .subtitle { text-align: center; font-size: 10pt; color: #666; margin-bottom: 18pt; }
          .info-line { display: flex; justify-content: space-between; margin-bottom: 6pt; font-size: 10pt; border-bottom: 1px solid #ccc; padding-bottom: 6pt; }
          .question { margin-bottom: 16pt; page-break-inside: avoid; }
          .question-header { font-weight: bold; margin-bottom: 4pt; }
          .question-meta { font-size: 9pt; color: #999; margin-bottom: 4pt; }
          .option { margin-left: 20pt; margin-bottom: 2pt; }
          .option-circle { display: inline-block; width: 14pt; height: 14pt; border: 1.5pt solid #000; border-radius: 50%; margin-right: 6pt; vertical-align: middle; }
          .tf-options { margin-left: 20pt; }
          .blank-line { display: inline-block; min-width: 200pt; border-bottom: 1pt solid #000; }
          .short-answer-lines { margin-top: 6pt; margin-left: 20pt; }
          .short-answer-line { border-bottom: 1pt solid #ccc; height: 20pt; margin-bottom: 4pt; }
          .match-table { margin-left: 20pt; border-collapse: collapse; width: calc(100% - 40pt); }
          .match-table td { border: 1pt solid #ccc; padding: 4pt 8pt; width: 50%; }
          .page-break { page-break-before: always; }
          .answer-key h2 { font-size: 14pt; margin-bottom: 8pt; }
          .answer-item { margin-bottom: 3pt; font-size: 10pt; }
          @media print { body { padding: 0.5in; } }
        </style>
      </head>
      <body>
        <h1>${quiz.settings.title || 'Quiz'}</h1>
        ${quiz.settings.description ? `<p class="subtitle">${quiz.settings.description}</p>` : ''}
        <div class="info-line">
          <span>Name: _________________________</span>
          <span>Class: ${quiz.settings.className || '___________'}</span>
          <span>Date: ___________</span>
        </div>
        ${quiz.settings.timeLimit ? `<p style="font-size:10pt;margin-bottom:12pt;text-align:right;">Time Limit: ${quiz.settings.timeLimit} minutes</p>` : ''}

        ${quiz.questions
          .map(
            (q, i) => `
          <div class="question">
            <div class="question-header">${i + 1}. ${q.text}</div>
            <div class="question-meta">(${q.points} point${q.points !== 1 ? 's' : ''} &middot; ${q.difficulty})</div>
            ${
              q.type === 'multiple-choice'
                ? q.options
                    .map(
                      (opt, j) =>
                        `<div class="option"><span class="option-circle"></span> ${String.fromCharCode(65 + j)}. ${opt}</div>`
                    )
                    .join('')
                : ''
            }
            ${
              q.type === 'true-false'
                ? '<div class="tf-options"><span class="option-circle"></span> True &nbsp;&nbsp;&nbsp; <span class="option-circle"></span> False</div>'
                : ''
            }
            ${
              q.type === 'short-answer'
                ? '<div class="short-answer-lines"><div class="short-answer-line"></div><div class="short-answer-line"></div><div class="short-answer-line"></div></div>'
                : ''
            }
            ${
              q.type === 'fill-in-blank'
                ? '' // The blanks are already in the question text
                : ''
            }
            ${
              q.type === 'match-pairs'
                ? `<table class="match-table">
                    <tr><td><strong>Column A</strong></td><td><strong>Column B</strong></td></tr>
                    ${q.matchPairs
                      .map(
                        (p, j) =>
                          `<tr><td>${j + 1}. ${p.left}</td><td>${String.fromCharCode(65 + j)}. ${
                            // Shuffle right side for print
                            q.matchPairs[
                              (j + 2) % q.matchPairs.length
                            ].right
                          }</td></tr>`
                      )
                      .join('')}
                  </table>`
                : ''
            }
          </div>
        `
          )
          .join('')}

        <div class="page-break"></div>
        <div class="answer-key">
          <h2>Answer Key</h2>
          ${quiz.questions
            .map(
              (q, i) => `
            <div class="answer-item">
              <strong>${i + 1}.</strong> ${
                q.type === 'multiple-choice'
                  ? `${String.fromCharCode(65 + q.options.indexOf(q.correctAnswer))}. ${q.correctAnswer}`
                  : q.type === 'match-pairs'
                  ? q.matchPairs.map((p) => `${p.left} → ${p.right}`).join('; ')
                  : q.correctAnswer
              }
              ${q.explanation ? `<br/><em style="color:#666;font-size:9pt;">${q.explanation}</em>` : ''}
            </div>
          `
            )
            .join('')}
        </div>
      </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  }, [quiz])

  return (
    <Button variant="outline" size="sm" onClick={handlePrint}>
      <Printer className="size-4" />
      Print Quiz
    </Button>
  )
}

// ─── Import Module Dialog ───────────────────────────────────────────────────

function ImportModuleDialog({
  onImport,
}: {
  onImport: (questions: Question[]) => void
}) {
  const [open, setOpen] = useState(false)
  const [selectedModule, setSelectedModule] = useState<string>('')
  const [selectedQuestions, setSelectedQuestions] = useState<Set<string>>(new Set())

  const moduleQuestions = useMemo(() => {
    return SAMPLE_COURSE_MODULES.find((m) => m.id === selectedModule)?.questions ?? []
  }, [selectedModule])

  const toggleQuestion = (id: string) => {
    setSelectedQuestions((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleImport = () => {
    const questions = moduleQuestions
      .filter((q) => selectedQuestions.has(q.id))
      .map((q) => ({ ...q, id: generateId() }))
    onImport(questions)
    setOpen(false)
    setSelectedModule('')
    setSelectedQuestions(new Set())
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={
        <Button variant="outline" size="sm">
          <Upload className="size-4" />
          Import from Module
        </Button>
      } />
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Import Questions from Course Module</DialogTitle>
          <DialogDescription>
            Select a module and choose which questions to import into your quiz.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Select Module</Label>
            <Select value={selectedModule} onValueChange={(val) => {
              setSelectedModule(val)
              setSelectedQuestions(new Set())
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a module..." />
              </SelectTrigger>
              <SelectContent>
                {SAMPLE_COURSE_MODULES.map((mod) => (
                  <SelectItem key={mod.id} value={mod.id}>
                    {mod.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {moduleQuestions.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Questions</Label>
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() => {
                    if (selectedQuestions.size === moduleQuestions.length) {
                      setSelectedQuestions(new Set())
                    } else {
                      setSelectedQuestions(new Set(moduleQuestions.map((q) => q.id)))
                    }
                  }}
                >
                  {selectedQuestions.size === moduleQuestions.length
                    ? 'Deselect All'
                    : 'Select All'}
                </Button>
              </div>
              <div className="max-h-60 space-y-2 overflow-y-auto rounded-lg border p-2">
                {moduleQuestions.map((q) => (
                  <label
                    key={q.id}
                    className={cn(
                      'flex cursor-pointer items-start gap-2 rounded-md p-2 transition-colors',
                      selectedQuestions.has(q.id)
                        ? 'bg-primary/5'
                        : 'hover:bg-muted/50'
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={selectedQuestions.has(q.id)}
                      onChange={() => toggleQuestion(q.id)}
                      className="mt-0.5 size-4 rounded border-border"
                    />
                    <div className="min-w-0">
                      <p className="text-sm">{q.text}</p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-[10px]">
                          {QUESTION_TYPE_LABELS[q.type]}
                        </Badge>
                        <span
                          className={cn(
                            'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold',
                            DIFFICULTY_COLORS[q.difficulty]
                          )}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            disabled={selectedQuestions.size === 0}
            onClick={handleImport}
          >
            Import {selectedQuestions.size} Question{selectedQuestions.size !== 1 ? 's' : ''}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ─── Main QuizBuilder Component ─────────────────────────────────────────────

export function QuizBuilder() {
  // State
  const [quiz, setQuiz] = useState<Quiz>(() => ({
    id: generateId(),
    settings: {
      title: '',
      description: '',
      className: '',
      timeLimit: null,
      shuffleQuestions: false,
      feedbackMode: 'at-end',
      passingScore: 60,
    },
    questions: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    shareCode: null,
  }))

  const [savedQuizzes, setSavedQuizzes] = useState<Quiz[]>([])
  const [activeTab, setActiveTab] = useState<string>('build')
  const [showPreview, setShowPreview] = useState(false)
  const [showLibrary, setShowLibrary] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle')
  const [shareDialogOpen, setShareDialogOpen] = useState(false)

  // Load saved quizzes from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setSavedQuizzes(JSON.parse(stored))
      }
    } catch {
      // ignore
    }
  }, [])

  // Save to localStorage
  const saveQuiz = useCallback(() => {
    setSaveStatus('saving')
    const updatedQuiz = { ...quiz, updatedAt: new Date().toISOString() }
    setQuiz(updatedQuiz)

    setSavedQuizzes((prev) => {
      const existing = prev.findIndex((q) => q.id === updatedQuiz.id)
      let next: Quiz[]
      if (existing >= 0) {
        next = [...prev]
        next[existing] = updatedQuiz
      } else {
        next = [...prev, updatedQuiz]
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })

    setTimeout(() => setSaveStatus('saved'), 500)
    setTimeout(() => setSaveStatus('idle'), 2000)
  }, [quiz])

  const loadQuiz = (loaded: Quiz) => {
    setQuiz(loaded)
    setShowLibrary(false)
    setActiveTab('build')
  }

  const deleteQuiz = (id: string) => {
    setSavedQuizzes((prev) => {
      const next = prev.filter((q) => q.id !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  const newQuiz = () => {
    setQuiz({
      id: generateId(),
      settings: {
        title: '',
        description: '',
        className: '',
        timeLimit: null,
        shuffleQuestions: false,
        feedbackMode: 'at-end',
        passingScore: 60,
      },
      questions: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      shareCode: null,
    })
    setActiveTab('build')
  }

  // Question operations
  const addQuestion = (type: QuestionType = 'multiple-choice') => {
    setQuiz((prev) => ({
      ...prev,
      questions: [...prev.questions, createEmptyQuestion(type)],
    }))
  }

  const updateQuestion = (id: string, updated: Question) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((q) => (q.id === id ? updated : q)),
    }))
  }

  const deleteQuestion = (id: string) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.filter((q) => q.id !== id),
    }))
  }

  const duplicateQuestion = (id: string) => {
    setQuiz((prev) => {
      const idx = prev.questions.findIndex((q) => q.id === id)
      if (idx < 0) return prev
      const copy = { ...prev.questions[idx], id: generateId() }
      const questions = [...prev.questions]
      questions.splice(idx + 1, 0, copy)
      return { ...prev, questions }
    })
  }

  const moveQuestion = (id: string, direction: 'up' | 'down') => {
    setQuiz((prev) => {
      const idx = prev.questions.findIndex((q) => q.id === id)
      if (idx < 0) return prev
      const swap = direction === 'up' ? idx - 1 : idx + 1
      if (swap < 0 || swap >= prev.questions.length) return prev
      const questions = [...prev.questions]
      ;[questions[idx], questions[swap]] = [questions[swap], questions[idx]]
      return { ...prev, questions }
    })
  }

  const importQuestions = (questions: Question[]) => {
    setQuiz((prev) => ({
      ...prev,
      questions: [...prev.questions, ...questions],
    }))
  }

  const applyTemplate = (template: QuickTemplate) => {
    const questions = template.generate()
    setQuiz((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        title: prev.settings.title || template.name,
      },
      questions: [...prev.questions, ...questions],
    }))
  }

  const handleGenerateShareCode = () => {
    const code = generateShareCode()
    setQuiz((prev) => ({ ...prev, shareCode: code }))
  }

  const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0)

  // Preview overlay
  if (showPreview) {
    return <QuizPreview quiz={quiz} onClose={() => setShowPreview(false)} />
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight">Quiz Builder</h1>
          <p className="text-sm text-muted-foreground">
            Create custom quizzes for your English classes
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowLibrary(true)}>
            <Library className="size-4" />
            My Quizzes
            {savedQuizzes.length > 0 && (
              <Badge variant="secondary" className="ml-1 text-[10px]">
                {savedQuizzes.length}
              </Badge>
            )}
          </Button>
          <Button variant="outline" size="sm" onClick={newQuiz}>
            <Plus className="size-4" />
            New Quiz
          </Button>
          <Button
            size="sm"
            onClick={saveQuiz}
            disabled={saveStatus === 'saving'}
          >
            {saveStatus === 'saving' ? (
              <Loader2 className="size-4 animate-spin" />
            ) : saveStatus === 'saved' ? (
              <CheckCircle className="size-4" />
            ) : (
              <Save className="size-4" />
            )}
            {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved' : 'Save'}
          </Button>
        </div>
      </div>

      {/* Quiz Library Dialog */}
      <Dialog open={showLibrary} onOpenChange={setShowLibrary}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>My Quiz Library</DialogTitle>
            <DialogDescription>
              {savedQuizzes.length === 0
                ? 'No saved quizzes yet. Create and save your first quiz!'
                : `${savedQuizzes.length} saved quiz${savedQuizzes.length !== 1 ? 'zes' : ''}`}
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-80 space-y-2 overflow-y-auto">
            {savedQuizzes.map((sq) => (
              <div
                key={sq.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {sq.settings.title || 'Untitled Quiz'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {sq.questions.length} questions &middot; Updated{' '}
                    {new Date(sq.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Button variant="ghost" size="xs" onClick={() => loadQuiz(sq)}>
                    Open
                  </Button>
                  <button
                    type="button"
                    onClick={() => deleteQuiz(sq.id)}
                    className="rounded-md p-1 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <DialogFooter showCloseButton />
        </DialogContent>
      </Dialog>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList variant="line">
          <TabsTrigger value="build">Build</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        {/* ─── Build Tab ─────────────────────────────────────────────── */}
        <TabsContent value="build">
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
            {/* Questions Column */}
            <div className="space-y-4">
              {/* Quiz Info Bar */}
              <Card size="sm">
                <CardContent className="pt-3.5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                    <div className="flex-1 space-y-1.5">
                      <Label htmlFor="quiz-title">Quiz Title</Label>
                      <Input
                        id="quiz-title"
                        placeholder="e.g. Romeo & Juliet Act 1 Quiz"
                        value={quiz.settings.title}
                        onChange={(e) =>
                          setQuiz((prev) => ({
                            ...prev,
                            settings: { ...prev.settings, title: e.target.value },
                          }))
                        }
                      />
                    </div>
                    <div className="w-full sm:w-48 space-y-1.5">
                      <Label htmlFor="quiz-class">Class</Label>
                      <Input
                        id="quiz-class"
                        placeholder="e.g. Year 10 English"
                        value={quiz.settings.className}
                        onChange={(e) =>
                          setQuiz((prev) => ({
                            ...prev,
                            settings: { ...prev.settings, className: e.target.value },
                          }))
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Questions List */}
              {quiz.questions.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
                      <BookOpen className="size-5 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium">No questions yet</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Add questions manually, import from a module, or use a template.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      <Button size="sm" onClick={() => addQuestion()}>
                        <Plus className="size-4" />
                        Add Question
                      </Button>
                      <ImportModuleDialog onImport={importQuestions} />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <>
                  {quiz.questions.map((question, index) => (
                    <QuestionEditor
                      key={question.id}
                      question={question}
                      index={index}
                      onUpdate={(updated) => updateQuestion(question.id, updated)}
                      onDelete={() => deleteQuestion(question.id)}
                      onDuplicate={() => duplicateQuestion(question.id)}
                      onMoveUp={() => moveQuestion(question.id, 'up')}
                      onMoveDown={() => moveQuestion(question.id, 'down')}
                      isFirst={index === 0}
                      isLast={index === quiz.questions.length - 1}
                    />
                  ))}

                  {/* Add Question Bar */}
                  <div className="flex flex-wrap items-center gap-2 rounded-xl border border-dashed p-3">
                    <span className="text-xs text-muted-foreground mr-1">Add:</span>
                    {(Object.keys(QUESTION_TYPE_LABELS) as QuestionType[]).map((type) => {
                      const Icon = QUESTION_TYPE_ICONS[type]
                      return (
                        <Button
                          key={type}
                          variant="outline"
                          size="xs"
                          onClick={() => addQuestion(type)}
                        >
                          <Icon className="size-3" />
                          {QUESTION_TYPE_LABELS[type]}
                        </Button>
                      )
                    })}
                    <Separator orientation="vertical" className="mx-1 h-5" />
                    <ImportModuleDialog onImport={importQuestions} />
                  </div>
                </>
              )}
            </div>

            {/* Settings Sidebar */}
            <div className="space-y-4">
              {/* Quiz Stats */}
              <Card size="sm">
                <CardHeader>
                  <CardTitle>Quiz Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Questions</span>
                    <span className="font-medium">{quiz.questions.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Points</span>
                    <span className="font-medium">{totalPoints}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Difficulty Mix</span>
                    <div className="flex gap-1">
                      {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => {
                        const count = quiz.questions.filter((q) => q.difficulty === d).length
                        if (count === 0) return null
                        return (
                          <span
                            key={d}
                            className={cn(
                              'inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-semibold',
                              DIFFICULTY_COLORS[d]
                            )}
                          >
                            {count}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Types</span>
                    <div className="flex flex-wrap justify-end gap-1">
                      {Array.from(new Set(quiz.questions.map((q) => q.type))).map((type) => (
                        <Badge key={type} variant="outline" className="text-[10px]">
                          {quiz.questions.filter((q) => q.type === type).length}x{' '}
                          {QUESTION_TYPE_LABELS[type].split(' ')[0]}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => setShowPreview(true)}
                      disabled={quiz.questions.length === 0}
                    >
                      <Eye className="size-4" />
                      Preview Quiz
                    </Button>
                    <PrintQuiz quiz={quiz} />
                  </div>
                </CardContent>
              </Card>

              {/* Settings */}
              <Card size="sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings2 className="size-4" />
                    Quiz Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="quiz-description">Description</Label>
                    <Textarea
                      id="quiz-description"
                      placeholder="Optional quiz description..."
                      value={quiz.settings.description}
                      onChange={(e) =>
                        setQuiz((prev) => ({
                          ...prev,
                          settings: { ...prev.settings, description: e.target.value },
                        }))
                      }
                      className="min-h-12"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="time-limit">
                      Time Limit (minutes){' '}
                      <span className="font-normal text-muted-foreground">optional</span>
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="time-limit"
                        type="number"
                        min={0}
                        placeholder="No limit"
                        value={quiz.settings.timeLimit ?? ''}
                        onChange={(e) => {
                          const val = e.target.value
                          setQuiz((prev) => ({
                            ...prev,
                            settings: {
                              ...prev.settings,
                              timeLimit: val ? parseInt(val) : null,
                            },
                          }))
                        }}
                      />
                      {quiz.settings.timeLimit && (
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() =>
                            setQuiz((prev) => ({
                              ...prev,
                              settings: { ...prev.settings, timeLimit: null },
                            }))
                          }
                        >
                          <X className="size-3.5" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="shuffle-switch" className="cursor-pointer">
                      <Shuffle className="size-3.5" />
                      Shuffle Questions
                    </Label>
                    <Switch
                      id="shuffle-switch"
                      checked={quiz.settings.shuffleQuestions}
                      onCheckedChange={(checked) =>
                        setQuiz((prev) => ({
                          ...prev,
                          settings: { ...prev.settings, shuffleQuestions: !!checked },
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Feedback Mode</Label>
                    <div className="flex gap-1.5">
                      {([
                        { value: 'after-each', label: 'After Each Q' },
                        { value: 'at-end', label: 'At End' },
                      ] as const).map(({ value, label }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setQuiz((prev) => ({
                              ...prev,
                              settings: { ...prev.settings, feedbackMode: value },
                            }))
                          }
                          className={cn(
                            'flex-1 rounded-lg border px-2 py-1.5 text-xs font-medium transition-all',
                            quiz.settings.feedbackMode === value
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border text-muted-foreground hover:border-primary/40'
                          )}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="passing-score">Passing Score (%)</Label>
                    <Input
                      id="passing-score"
                      type="number"
                      min={0}
                      max={100}
                      value={quiz.settings.passingScore}
                      onChange={(e) =>
                        setQuiz((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            passingScore: Math.min(100, Math.max(0, parseInt(e.target.value) || 0)),
                          },
                        }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Share */}
              <Card size="sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="size-4" />
                    Share Quiz
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quiz.shareCode ? (
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Share this code with your students:
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 rounded-lg bg-muted px-4 py-2.5 text-center font-mono text-lg font-bold tracking-widest">
                          {quiz.shareCode}
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            navigator.clipboard.writeText(quiz.shareCode!)
                          }}
                          title="Copy code"
                        >
                          <Copy className="size-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="xs"
                        className="w-full"
                        onClick={() => {
                          const code = generateShareCode()
                          setQuiz((prev) => ({ ...prev, shareCode: code }))
                        }}
                      >
                        <RotateCcw className="size-3" />
                        Generate New Code
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-3">
                        Generate a quiz code that students can use to access this quiz.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          const code = generateShareCode()
                          setQuiz((prev) => ({ ...prev, shareCode: code }))
                        }}
                        disabled={quiz.questions.length === 0}
                      >
                        <Share2 className="size-4" />
                        Generate Quiz Code
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* ─── Templates Tab ─────────────────────────────────────────── */}
        <TabsContent value="templates">
          <div className="mt-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Quick Quiz Templates</h2>
              <p className="text-sm text-muted-foreground">
                Start with a pre-made template and customise it to your needs.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {QUICK_TEMPLATES.map((template) => {
                const Icon = template.icon
                return (
                  <Card key={template.id} className="group hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <CardTitle>{template.name}</CardTitle>
                          <CardDescription className="mt-0.5">
                            {template.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          applyTemplate(template)
                          setActiveTab('build')
                        }}
                      >
                        <Sparkles className="size-4" />
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>

            <Separator />

            <div>
              <h2 className="text-lg font-semibold">Import from Course Modules</h2>
              <p className="text-sm text-muted-foreground">
                Pull existing questions from your course modules into a new quiz.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SAMPLE_COURSE_MODULES.map((mod) => (
                <Card key={mod.id}>
                  <CardHeader>
                    <CardTitle className="text-sm">{mod.name}</CardTitle>
                    <CardDescription>
                      {mod.questions.length} question{mod.questions.length !== 1 ? 's' : ''} available
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        importQuestions(
                          mod.questions.map((q) => ({ ...q, id: generateId() }))
                        )
                        setActiveTab('build')
                      }}
                    >
                      <Upload className="size-4" />
                      Import All
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ─── Results Tab ────────────────────────────────────────────── */}
        <TabsContent value="results">
          <div className="mt-6">
            <ResultsView quiz={quiz} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
