'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
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

const items = [
  {
    icon: BookOpen,
    color: 'text-primary bg-primary/10',
    title: 'Structured Courses',
    desc: 'From KS3 foundations to GCSE and IGCSE mastery — 470+ expert-written courses covering Reading, Writing, Grammar, Language, and Literature.',
    preview: 'Sample topics: Inference & Deduction, Narrative Writing, Poetry Analysis, Transactional Writing, Shakespeare...',
  },
  {
    icon: Feather,
    color: 'text-rose-400 bg-rose-500/10',
    title: '30 Interactive Poem Study Pages',
    desc: 'Line-by-line analysis of every poem in the AQA, Edexcel & Eduqas anthologies — Power & Conflict, Love & Relationships and more.',
    preview: 'Includes: Annotated text, context, structure, themes, key quotes and exam-ready interpretations...',
  },
  {
    icon: Gamepad2,
    color: 'text-fuchsia-400 bg-fuchsia-500/10',
    title: '7 GCSE-Grade Games',
    desc: 'Fun, fast-paced games that convert your scores directly into GCSE grades 1–9 so you can see your level instantly.',
    preview: 'Games: Comprehension Challenge, Grade Climber, Quote Detective, Speed Analysis, Spelling Bee, Theme Matcher, Vocabulary Builder...',
  },
  {
    icon: TrendingUp,
    color: 'text-lime-400 bg-lime-500/10',
    title: 'Comprehensive Revision Hub',
    desc: 'Grade-specific revision guides for Grade 5, Grade 7 and Grade 9 — plus poetry, language, set texts, exam technique and a quick quiz.',
    preview: 'Sections: Poetry, Language, Texts, Exam Technique, Grade Targets (5/7/9), Quiz...',
  },
  {
    icon: ClipboardCheck,
    color: 'text-sky-400 bg-sky-500/10',
    title: 'Reading Assessment & Fluency Test',
    desc: 'Diagnose reading age, fluency and comprehension in minutes — then get a personalised diagnostic report telling you exactly what to work on next.',
    preview: 'Includes: Timed fluency test, comprehension questions, reading-age estimate, parent-friendly report...',
  },
  {
    icon: FileQuestion,
    color: 'text-blue-400 bg-blue-500/10',
    title: 'Exam-Style Practice Questions',
    desc: '40+ questions modelled on real exam papers, complete with mark schemes and model answers.',
    preview: 'Question types: Extract analysis, comparison, creative writing, essay response, unseen poetry...',
  },
  {
    icon: Layers,
    color: 'text-purple-400 bg-purple-500/10',
    title: '2,000+ Flashcards',
    desc: 'Revise key quotes, terminology, and techniques with spaced-repetition flashcards.',
    preview: 'Topics: Literary devices, key quotations, grammar rules, essay vocabulary, exam command words...',
  },
  {
    icon: GraduationCap,
    color: 'text-amber-400 bg-amber-500/10',
    title: 'Comprehensive Exam Guides',
    desc: 'Detailed breakdowns for AQA, Edexcel, OCR & WJEC — paper structure, mark schemes, and examiner tips.',
    preview: 'Covers: Paper timings, assessment objectives, grade boundaries, common pitfalls to avoid...',
  },
  {
    icon: Target,
    color: 'text-emerald-400 bg-emerald-500/10',
    title: '52 Terminology Entries',
    desc: 'A searchable glossary of every literary and linguistic term you need for GCSE English.',
    preview: 'Includes: Metaphor, Sibilance, Pathetic Fallacy, Semantic Field, Volta, Enjambment...',
  },
  {
    icon: Award,
    color: 'text-red-400 bg-red-500/10',
    title: 'Certificates & Progress',
    desc: 'Track your progress through every course and earn verifiable digital certificates on completion.',
    preview: 'Features: Progress bars, completion badges, shareable certificates, revision streaks...',
  },
  {
    icon: Timer,
    color: 'text-orange-400 bg-orange-500/10',
    title: '130+ Mock Exam Papers',
    desc: 'Full-length timed mock exams for AQA, Edexcel, OCR, WJEC, IGCSE & KS3. Real exam format with model answers at every grade band.',
    preview: 'Includes: Timed exam mode, section navigation, Grade 4-5 / 6-7 / 8-9 model answers, mark schemes...',
  },
  {
    icon: Sparkles,
    color: 'text-cyan-400 bg-cyan-500/10',
    title: 'AI Essay Feedback',
    desc: 'Submit your essay and get instant, detailed feedback from our AI examiner. Grade band estimates, strengths, improvements, and paragraph-by-paragraph annotation.',
    preview: 'Powered by AI trained on GCSE mark schemes. Supports AQA, Edexcel, OCR & WJEC papers...',
  },
  {
    icon: Brain,
    color: 'text-pink-400 bg-pink-500/10',
    title: 'Board-Specific Content',
    desc: 'Every course, question, and resource is mapped to your exam board specification. No wasted time on irrelevant content.',
    preview: 'Supported boards: AQA, Edexcel, Edexcel IGCSE, OCR, WJEC/Eduqas...',
  },
  {
    icon: Layout,
    color: 'text-indigo-400 bg-indigo-500/10',
    title: 'Teacher Lesson Builder',
    desc: 'Teachers get access to 300+ lesson templates, class management tools, and AI marking for whole classes.',
    preview: 'Features: Drag-and-drop builder, homework setting, printable resources, analytics dashboard...',
  },
  {
    icon: MessageSquare,
    color: 'text-teal-400 bg-teal-500/10',
    title: 'Model Answers at Every Grade',
    desc: 'See what a Grade 4-5, 6-7, and 8-9 answer looks like for every question. Learn what examiners reward.',
    preview: 'Annotated model answers with examiner commentary showing exactly where marks are gained...',
  },
  {
    icon: FolderOpen,
    color: 'text-violet-400 bg-violet-500/10',
    title: 'Revision Toolkit',
    desc: 'Flashcards, terminology glossaries, quote banks, and exam command word guides — all in one revision hub.',
    preview: 'Includes: Spaced repetition, bookmarking, search, and filter by topic or exam board...',
  },
]

export default function WhatsInsideSection() {
  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            What&rsquo;s Inside
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            A comprehensive look at the tools and content waiting for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <Card key={item.title} className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300">
              <div
                className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', item.color)}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {item.desc}
              </p>
              <p className="text-xs text-primary/60 italic leading-relaxed mt-auto">
                {item.preview}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
