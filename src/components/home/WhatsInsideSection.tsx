'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  BookOpen,
  GraduationCap,
  Award,
  Sparkles,
  FileQuestion,
  Layers,
  Target,
  Timer,
  Brain,
  Layout,
  MessageSquare,
  FolderOpen,
  Feather,
  Gamepad2,
  ClipboardCheck,
  TrendingUp,
} from 'lucide-react'

type FeatureTag = 'gcse' | 'igcse' | 'teacher' | 'both'

type FeatureItem = {
  icon: typeof BookOpen
  color: string
  title: string
  desc: string
  preview: string
  tags: FeatureTag[]
}

const items: FeatureItem[] = [
  {
    icon: BookOpen,
    color: 'text-primary bg-primary/10',
    title: 'Structured Courses',
    desc: 'From KS3 foundations to GCSE and IGCSE mastery — 470+ expert-written courses covering Reading, Writing, Grammar, Language, and Literature.',
    preview:
      'Sample topics: Inference & Deduction, Narrative Writing, Poetry Analysis, Writing for Real Purposes, Shakespeare...',
    tags: ['both'],
  },
  {
    icon: Feather,
    color: 'text-rose-400 bg-rose-500/10',
    title: '30 Interactive Poem Study Pages',
    desc: 'Line-by-line analysis of every poem in the AQA, Edexcel & Eduqas anthologies — Power & Conflict, Love & Relationships and more.',
    preview:
      'Includes: Annotated text, context, structure, themes, key quotes and exam-ready interpretations...',
    tags: ['gcse'],
  },
  {
    icon: Gamepad2,
    color: 'text-fuchsia-400 bg-fuchsia-500/10',
    title: '7 GCSE-Grade Games',
    desc: 'Fun, fast-paced games that convert your scores directly into GCSE grades 1–9 so you can see your level instantly.',
    preview:
      'Games: Comprehension Challenge, Grade Climber, Quote Detective, Speed Analysis, Spelling Bee, Theme Matcher, Vocabulary Builder...',
    tags: ['both'],
  },
  {
    icon: TrendingUp,
    color: 'text-lime-400 bg-lime-500/10',
    title: 'Comprehensive Revision Hub',
    desc: 'Grade-specific revision guides for Grade 5, Grade 7 and Grade 9 — plus poetry, language, set texts, exam technique and a quick quiz.',
    preview: 'Sections: Poetry, Language, Texts, Exam Technique, Grade Targets (5/7/9), Quiz...',
    tags: ['both'],
  },
  {
    icon: ClipboardCheck,
    color: 'text-sky-400 bg-sky-500/10',
    title: 'Reading Assessment & Fluency Test',
    desc:
      'Diagnose reading age, fluency and comprehension in minutes — then get a personalised diagnostic report telling you exactly what to work on next.',
    preview:
      'Includes: Timed fluency test, comprehension questions, reading-age estimate, parent-friendly report...',
    tags: ['both'],
  },
  {
    icon: FileQuestion,
    color: 'text-blue-400 bg-blue-500/10',
    title: 'Exam-Style Practice Questions',
    desc: '40+ questions modelled on real exam papers, complete with mark schemes and model answers.',
    preview: 'Question types: Extract analysis, comparison, creative writing, essay response, unseen poetry...',
    tags: ['both'],
  },
  {
    icon: Layers,
    color: 'text-purple-400 bg-purple-500/10',
    title: '2,000+ Flashcards',
    desc: 'Revise key quotes, terminology, and techniques with smart-review flashcards.',
    preview: 'Topics: Literary devices, key quotations, grammar rules, essay vocabulary, exam command words...',
    tags: ['both'],
  },
  {
    icon: GraduationCap,
    color: 'text-amber-400 bg-amber-500/10',
    title: 'Comprehensive Exam Guides',
    desc: 'Detailed breakdowns for AQA, Edexcel, OCR & WJEC — paper structure, mark schemes, and expert tips.',
    preview: 'Covers: Paper timings, assessment objectives, grade boundaries, common pitfalls to avoid...',
    tags: ['gcse'],
  },
  {
    icon: GraduationCap,
    color: 'text-emerald-400 bg-emerald-500/10',
    title: 'IGCSE Exam Guides',
    desc: 'Paper structure, expert tips and band descriptors for Edexcel IGCSE and Cambridge First Language English.',
    preview: 'Covers: Paper timings, assessment objectives, command words, unseen passages, writing for real purposes...',
    tags: ['igcse'],
  },
  {
    icon: Target,
    color: 'text-emerald-400 bg-emerald-500/10',
    title: '52 Terminology Entries',
    desc: 'A searchable glossary of every literary and linguistic term you need for GCSE English.',
    preview: 'Includes: Metaphor, Sibilance, Pathetic Fallacy, Semantic Field, Volta, Enjambment...',
    tags: ['both'],
  },
  {
    icon: Award,
    color: 'text-red-400 bg-red-500/10',
    title: 'Certificates & Progress',
    desc: 'Track your progress through every course and earn verifiable digital certificates on completion.',
    preview: 'Features: Progress bars, completion badges, shareable certificates, revision streaks...',
    tags: ['both'],
  },
  {
    icon: Timer,
    color: 'text-orange-400 bg-orange-500/10',
    title: '130+ Mock Exam Papers',
    desc:
      'Full-length timed mock exams for AQA, Edexcel, OCR, WJEC, IGCSE & KS3. Real exam format with model answers at every grade band.',
    preview:
      'Includes: Timed exam mode, section navigation, Grade 4-5 / 6-7 / 8-9 model answers, mark schemes...',
    tags: ['both'],
  },
  {
    icon: Sparkles,
    color: 'text-cyan-400 bg-cyan-500/10',
    title: 'AI Essay Feedback',
    desc:
      'Submit your essay and get instant, detailed feedback from our AI marker. Grade band estimates, strengths, improvements, and paragraph-by-paragraph annotation.',
    preview: 'Powered by AI trained on GCSE mark schemes. Supports AQA, Edexcel, OCR & WJEC papers...',
    tags: ['both'],
  },
  {
    icon: Brain,
    color: 'text-pink-400 bg-pink-500/10',
    title: 'Board-Specific Content',
    desc:
      'Every course, question, and resource is matched to your exam board. No wasted time on irrelevant content.',
    preview: 'Supported boards: AQA, Edexcel, Edexcel IGCSE, OCR, WJEC/Eduqas, Cambridge IGCSE...',
    tags: ['both'],
  },
  {
    icon: Layout,
    color: 'text-indigo-400 bg-indigo-500/10',
    title: 'Teacher Lesson Builder',
    desc: 'Teachers get access to 300+ lesson templates, class management tools, and AI marking for whole classes.',
    preview: 'Features: Drag-and-drop builder, homework setting, printable resources, analytics dashboard...',
    tags: ['teacher'],
  },
  {
    icon: MessageSquare,
    color: 'text-teal-400 bg-teal-500/10',
    title: 'Model Answers at Every Grade',
    desc: 'See what a Grade 4-5, 6-7, and 8-9 answer looks like for every question. Learn what gets top marks.',
    preview: 'Annotated model answers with expert commentary showing exactly where marks are gained...',
    tags: ['both'],
  },
  {
    icon: FolderOpen,
    color: 'text-violet-400 bg-violet-500/10',
    title: 'Revision Toolkit',
    desc: 'Flashcards, terminology glossaries, quote banks, and exam command word guides — all in one revision hub.',
    preview: 'Includes: Smart review, bookmarking, search, and filter by topic or exam board...',
    tags: ['both'],
  },
]

/**
 * Board-specific copy for the "30 Interactive Poem Study Pages" card.
 * When a board is selected the headline number and description adapts.
 */
function getPoemCardOverride(board: ExamBoard): Partial<FeatureItem> | null {
  switch (board) {
    case 'aqa':
      return {
        title: '15 Power & Conflict poems (+ 15 Love & Relationships)',
        desc:
          'Line-by-line analysis of every poem in the AQA Power & Conflict and Love & Relationships clusters — context, structure, themes and exam-ready interpretations.',
      }
    case 'edexcel':
      return {
        title: '15 Edexcel anthology poems',
        desc:
          'Line-by-line analysis of every poem in the Edexcel Conflict, Relationships and Time & Place clusters — context, structure and themes.',
      }
    case 'ocr':
      return {
        title: '15 OCR anthology poems',
        desc:
          'Line-by-line analysis of the OCR Towards a World Unknown / Conflict / Love & Relationships clusters — context, structure and themes.',
      }
    case 'eduqas':
      return {
        title: '18 Eduqas anthology poems',
        desc:
          'Line-by-line analysis of every poem in the WJEC Eduqas single anthology — context, structure, themes and exam-ready interpretations.',
      }
    default:
      return null
  }
}

function filterForBoard(all: FeatureItem[], board: ExamBoard | null): FeatureItem[] {
  if (!board) {
    // Marketing variant: hide the IGCSE-only card by default, otherwise show everything.
    return all.filter((item) => !item.tags.includes('igcse') || item.tags.includes('both'))
  }

  const isIgcse = isIgcseBoard(board)
  return all
    .filter((item) => {
      if (item.tags.includes('both')) return true
      if (isIgcse) return item.tags.includes('igcse')
      return item.tags.includes('gcse')
    })
    .map((item) => {
      if (item.title.startsWith('30 Interactive Poem') || item.title.includes('Poem Study Pages')) {
        const override = getPoemCardOverride(board)
        return override ? { ...item, ...override } : item
      }
      return item
    })
}

export default function WhatsInsideSection({ board }: { board?: ExamBoard | null }) {
  const config = board ? getBoardConfig(board) : null
  const filtered = filterForBoard(items, board ?? null)

  const heading = config ? `Your ${config.shortName} ${config.type.toUpperCase()} English toolkit` : "What\u2019s Inside"
  const sub = config
    ? `Every tool below is mapped to ${config.fullName} — no wasted time on irrelevant content.`
    : 'A comprehensive look at the tools and content waiting for you.'

  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">{heading}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">{sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <Card
              key={item.title}
              className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300"
            >
              <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', item.color)}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
              <p className="text-xs text-primary/60 italic leading-relaxed mt-auto">{item.preview}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
