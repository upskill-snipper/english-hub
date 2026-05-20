'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  BookOpen,
  Brain,
  Sparkles,
  Target,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  MessageSquare,
  GraduationCap,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Flame,
  Award,
  Zap,
  BarChart3,
  Eye,
  PenLine,
  Library,
  Hourglass,
  ClipboardList,
  Languages,
  Quote,
  ScrollText,
  Trophy,
  Info,
  Play,
  Compass,
  Map,
  Star,
  MapPin,
  Bell,
  RotateCcw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz'

// ---------------------------------------------------------------------------
// Synthetic demo data — Aisha Khan, Year 11, Riverside Academy
// Today: Wednesday 20 May 2026.  Mocks in 4 weeks · GCSEs in 8 weeks.
// ---------------------------------------------------------------------------

const STUDENT = {
  firstName: 'Aisha',
  fullName: 'Aisha Khan',
  yearGroup: 'Year 11',
  school: 'Riverside Academy',
  board: 'AQA',
  subjects: 'English Literature + Language',
  baselineGrade: 4,
  workingAtGrade: 6,
  predictedGrade: 6,
  targetGrade: 7,
  streakDays: 9,
  weeklyMinutes: 265, // 4h 25 min
  weeklyGoalMinutes: 360, // 6h goal
  termHours: 47,
  attendancePct: 96,
  todayDateLong: 'Wednesday 20 May 2026',
  mocksWeeksAway: 4,
  examsWeeksAway: 8,
}

const TODAYS_CLASSES = [
  {
    id: 'cls-lit-am',
    time: '09:00',
    duration: '60 min',
    subject: 'English Literature',
    topic: 'AIC — Final revision of Sheila Birling',
    room: 'E12',
    teacher: { name: 'Ms Patel', initials: 'PA', tint: 'bg-primary/10 text-primary' },
    homework: 'Eva Gerald paragraph due before lesson',
  },
  {
    id: 'cls-lang-am',
    time: '11:30',
    duration: '60 min',
    subject: 'English Language',
    topic: 'Paper 1 Q3 — Structure walkthrough',
    room: 'E08',
    teacher: { name: 'Mr Lawson', initials: 'LA', tint: 'bg-teal-500/10 text-teal-500' },
    homework: null,
  },
  {
    id: 'cls-library',
    time: '14:00',
    duration: '50 min',
    subject: 'Independent revision',
    topic: 'Library — Unseen Poetry pack 3',
    room: 'LIB-3',
    teacher: { name: 'Ms Beale (drop-in)', initials: 'BE', tint: 'bg-amber-500/10 text-amber-600' },
    homework: 'Quizlet AIC quotes set due Friday',
  },
]

const WEEK_DAYS = [
  {
    key: 'mon',
    label: 'Mon',
    date: '18 May',
    subject: 'Literature',
    topic: 'AIC — Inspector character',
    icon: BookOpen,
    tint: 'border-primary/15 bg-primary/[0.04]',
  },
  {
    key: 'tue',
    label: 'Tue',
    date: '19 May',
    subject: 'Language',
    topic: 'Paper 1 Q4 — Evaluation',
    icon: PenLine,
    tint: 'border-teal-500/15 bg-teal-500/[0.04]',
  },
  {
    key: 'wed',
    label: 'Wed',
    date: '20 May',
    subject: 'Lit + Lang',
    topic: 'AIC · Q3 · Unseen poetry',
    icon: Sparkles,
    tint: 'border-primary/40 bg-gradient-to-br from-primary/15 via-primary/5 to-background ring-2 ring-primary/20',
  },
  {
    key: 'thu',
    label: 'Thu',
    date: '21 May',
    subject: 'Literature',
    topic: 'Macbeth Act 3 close read',
    icon: ScrollText,
    tint: 'border-clay-500/15 bg-clay-500/[0.04]',
  },
  {
    key: 'fri',
    label: 'Fri',
    date: '22 May',
    subject: 'Language',
    topic: 'Paper 2 Q5 — Speech writing',
    icon: Languages,
    tint: 'border-ochre-500/15 bg-ochre-500/[0.04]',
  },
]

const LIT_ACCENT = 'bg-primary/10 text-primary border-primary/20'
const LANG_ACCENT = 'bg-teal-500/10 text-teal-500 border-teal-500/20'

const ASSIGNMENTS = [
  {
    id: 'a1',
    title: 'AIC essay — How does Priestley present responsibility?',
    subject: 'Literature',
    subjectAccent: LIT_ACCENT,
    dueLabel: 'Fri 22 May',
    dueRelative: 'Due in 2 days',
    type: 'essay' as const,
    icon: PenLine,
    priority: 'high' as const,
    estimatedMinutes: 80,
    notes: '900 words · Ms Patel · printed copy + Turnitin',
  },
  {
    id: 'a2',
    title: 'Paper 1 mock — full hour under timed conditions',
    subject: 'Language',
    subjectAccent: LANG_ACCENT,
    dueLabel: 'Tue 26 May',
    dueRelative: 'Due in 6 days',
    type: 'mock' as const,
    icon: Hourglass,
    priority: 'high' as const,
    estimatedMinutes: 60,
    notes: 'Q1 → Q5 · in-class sit · no notes',
  },
  {
    id: 'a3',
    title: 'Macbeth Act 3 retrieval quiz (20 questions)',
    subject: 'Literature',
    subjectAccent: LIT_ACCENT,
    dueLabel: 'Wed 27 May',
    dueRelative: 'Due in 7 days',
    type: 'quiz' as const,
    icon: ClipboardList,
    priority: 'medium' as const,
    estimatedMinutes: 25,
    notes: 'Set by Ms Patel · auto-marked',
  },
  {
    id: 'a4',
    title: 'Unseen poetry — annotate "Storm on the Island"',
    subject: 'Literature',
    subjectAccent: LIT_ACCENT,
    dueLabel: 'Fri 29 May',
    dueRelative: 'Due in 9 days',
    type: 'practice' as const,
    icon: Quote,
    priority: 'medium' as const,
    estimatedMinutes: 40,
    notes: 'Use the AO2 annotation frame from Ms Beale',
  },
  {
    id: 'a5',
    title: 'Paper 2 Q5 — Write a speech on social media',
    subject: 'Language',
    subjectAccent: LANG_ACCENT,
    dueLabel: 'Mon 1 Jun',
    dueRelative: 'Due in 12 days',
    type: 'essay' as const,
    icon: ScrollText,
    priority: 'low' as const,
    estimatedMinutes: 50,
    notes: 'Draft for Mr Lawson · focus on rhetorical structure',
  },
]

const FLIGHT_PATH = [
  {
    key: 'start',
    label: 'Baseline',
    sub: 'End of Year 9',
    grade: 4,
    note: 'Where you started before GCSE',
    x: 8,
  },
  {
    key: 'current',
    label: 'Working at',
    sub: '20 May 2026',
    grade: 6,
    note: 'Today — based on the last 6 assessments',
    x: 44,
  },
  {
    key: 'predicted',
    label: 'Predicted',
    sub: 'Summer 2026',
    grade: 6,
    note: 'If you keep doing what you are doing',
    x: 70,
  },
  {
    key: 'target',
    label: 'Target',
    sub: 'Summer 2026',
    grade: 7,
    note: 'Your school target — reachable with focus',
    x: 95,
  },
]

const FLIGHT_CONTEXT = [
  {
    title: 'What got you here',
    icon: TrendingUp,
    accent: 'sage' as const,
    bullets: [
      'Climbed from grade 4 baseline to a consistent grade 6 across 6 assessments.',
      'Strongest at Q1/Q2 retrieval — 26/30 average across the last three mocks.',
      'Six weeks of targeted intervention with Ms Patel on AIC and Macbeth.',
    ],
  },
  {
    title: 'What closes the gap',
    icon: Target,
    accent: 'clay' as const,
    bullets: [
      'Finish Paper 1 Q5 in 40 minutes (you currently average 47).',
      'Push AO2 — name techniques, then explain the deliberate effect on the reader.',
      'Two more full comparison essays before the mock window opens.',
    ],
  },
  {
    title: 'What raises the ceiling',
    icon: Sparkles,
    accent: 'ochre' as const,
    bullets: [
      'Unseen Poetry mastery — current weak spot but worth a full grade swing.',
      'Evaluative writing — "to what extent" responses, not just description.',
      'Wider critical reading on Priestley + Shakespeare for the perceptive grade.',
    ],
  },
]

const AI_INSIGHTS = [
  {
    id: 'in1',
    priority: 'HIGH' as const,
    title: 'Unseen Poetry is your fastest grade gain',
    body: 'Your last unseen poetry attempt landed at 14/24 (grade 5), but your AIC essays average 22/30 (grade 6+). Two focused sessions on the AO2 annotation frame typically lifts students by a whole sub-grade.',
    minutes: 45,
    href: '/revision/exam-technique',
    icon: Quote,
  },
  {
    id: 'in2',
    priority: 'HIGH' as const,
    title: 'Paper 1 Q5 — timing is costing you marks',
    body: 'You scored 27/40 on the last full Q5 but you wrote for 47 minutes (target: 40). Practising 5-minute planning + 35-minute writing cycles will protect those final paragraph marks.',
    minutes: 60,
    href: '/revision/exam-technique',
    icon: Hourglass,
  },
  {
    id: 'in3',
    priority: 'MEDIUM' as const,
    title: 'Comparison essays — wire in the connectives',
    body: 'Your poetry comparison essay last week was strong on ideas but flat on structure. Five comparative connectives ("whereas", "in contrast", "conversely") would reframe four paragraphs and earn the AO3 link marks.',
    minutes: 30,
    href: '/revision/exam-technique',
    icon: BarChart3,
  },
]

const REVISION_OPTIONS: Record<
  number,
  {
    id: string
    title: string
    subject: string
    why: string
    minutes: number
    icon: typeof BookOpen
  }[]
> = {
  15: [
    {
      id: 'r15-1',
      title: 'AIC quote sprint — 20 flashcards',
      subject: 'Literature',
      why: 'Lock in 5 fresh Sheila / Eric quotes before tomorrow morning.',
      minutes: 12,
      icon: Brain,
    },
    {
      id: 'r15-2',
      title: 'SPaG drill — semicolons + apostrophes',
      subject: 'Language',
      why: 'You dropped 3 marks on SPaG last mock. Quick fix.',
      minutes: 10,
      icon: PenLine,
    },
  ],
  30: [
    {
      id: 'r30-1',
      title: 'Unseen poem walk-through — "Storm on the Island"',
      subject: 'Literature',
      why: 'AO2 annotation frame, exactly the format on Friday’s lesson.',
      minutes: 25,
      icon: Quote,
    },
    {
      id: 'r30-2',
      title: 'Paper 1 Q3 — structure under 8 minutes',
      subject: 'Language',
      why: 'Your timing is fine on Q1/Q2; Q3 is where the clock slips.',
      minutes: 20,
      icon: Hourglass,
    },
    {
      id: 'r30-3',
      title: 'Macbeth Act 3 retrieval — 30 questions',
      subject: 'Literature',
      why: 'Quiz due next Wednesday — get the marks while it is fresh.',
      minutes: 25,
      icon: ClipboardList,
    },
  ],
  60: [
    {
      id: 'r60-1',
      title: 'Full AIC paragraph — Sheila as a mouthpiece for Priestley',
      subject: 'Literature',
      why: 'Plan + write + mark with the rubric — a sub-grade lift in one hour.',
      minutes: 55,
      icon: PenLine,
    },
    {
      id: 'r60-2',
      title: 'Paper 1 Q4 — evaluation with two viewpoints',
      subject: 'Language',
      why: 'You scored 12/20 here last time. The frame fixes most of it.',
      minutes: 45,
      icon: ScrollText,
    },
    {
      id: 'r60-3',
      title: 'Mark a Q5 with the AO5/AO6 rubric',
      subject: 'Language',
      why: 'Marking your own work is the fastest way into the grade 7 band.',
      minutes: 40,
      icon: ClipboardList,
    },
  ],
  90: [
    {
      id: 'r90-1',
      title: 'Full Paper 1 — Q1 to Q5, timed, no notes',
      subject: 'Language',
      why: 'Mocks open in 4 weeks. One full sit-down trumps four half-hour drills.',
      minutes: 75,
      icon: Hourglass,
    },
    {
      id: 'r90-2',
      title: 'Comparison essay — "Storm" vs "Exposure"',
      subject: 'Literature',
      why: 'Targets AO2 + AO3 — the two AOs holding you under grade 7.',
      minutes: 80,
      icon: Quote,
    },
  ],
}

const RECENT_RESULTS = [
  {
    id: 'res1',
    title: 'AIC — Sheila Birling essay',
    subject: 'Literature',
    subjectAccent: LIT_ACCENT,
    date: 'Wed 14 May 2026',
    score: 24,
    max: 30,
    delta: 'NEW best',
    deltaTone: 'good' as const,
    teacher: 'Ms Patel',
    comment:
      'Genuinely strong on Sheila’s arc — you handled "These girls are not cheap labour" with confidence and the conclusion landed on a sharp point about Priestley’s socialism. Push the AO2 in para three: name the technique, then explain the deliberate effect. You are within touching distance of a grade 7.',
  },
  {
    id: 'res2',
    title: 'Paper 1 mock — full hour',
    subject: 'Language',
    subjectAccent: LANG_ACCENT,
    date: 'Tue 6 May 2026',
    score: 56,
    max: 80,
    delta: '+3 pts vs Feb mock',
    deltaTone: 'good' as const,
    teacher: 'Mr Lawson',
    comment:
      'Solid Q1 and Q2 (almost full marks) — the time you spend reading the source is paying off. Q4 evaluation slipped to 11/20 because you only used one viewpoint. Q5 is where the timing went: 47 minutes is 7 over budget and you lost the last paragraph.',
  },
  {
    id: 'res3',
    title: 'Macbeth Act 2 retrieval',
    subject: 'Literature',
    subjectAccent: LIT_ACCENT,
    date: 'Fri 2 May 2026',
    score: 17,
    max: 20,
    delta: 'On track',
    deltaTone: 'neutral' as const,
    teacher: 'Ms Patel',
    comment:
      'You know the plot. What is missing now is the deeper layer — the symbolism in the dagger soliloquy, the dramatic irony of Lady Macbeth’s fainting. Aim for 18/20 next time by adding "what does it mean" to every answer.',
  },
  {
    id: 'res4',
    title: 'Unseen poetry practice',
    subject: 'Literature',
    subjectAccent: LIT_ACCENT,
    date: 'Tue 22 Apr 2026',
    score: 14,
    max: 24,
    delta: 'Below target',
    deltaTone: 'warn' as const,
    teacher: 'Ms Beale',
    comment:
      'I can see you understood the poem — the second annotation is excellent. But the response stayed at AO1 (what it says) and never moved to AO2 (how the writer made you feel it). Use the annotation frame I gave you in Friday’s drop-in.',
  },
  {
    id: 'res5',
    title: 'Paper 2 Q3 — language analysis',
    subject: 'Language',
    subjectAccent: LANG_ACCENT,
    date: 'Thu 17 Apr 2026',
    score: 9,
    max: 12,
    delta: '+2 pts vs Feb',
    deltaTone: 'good' as const,
    teacher: 'Mr Lawson',
    comment:
      'The structural overview at the start is the best you have written. Your three points were all valid; what stopped you reaching the top band was the depth on the second point — one short sentence about "diction" rather than a developed reading.',
  },
]

const TEACHER_COMMENTS = [
  {
    id: 't1',
    teacher: 'Ms Patel',
    role: 'Head of English · your Lit teacher',
    initials: 'PA',
    tint: 'bg-primary/10 text-primary',
    date: 'Today, 12:40',
    context: 'on the AIC Sheila essay (24/30)',
    body: 'This is the most confident piece of analytical writing you have produced this year. The Sheila arc paragraph is exam-ready. Spend Wednesday tightening AO2 in the middle section and you are at grade 7.',
  },
  {
    id: 't2',
    teacher: 'Mr Lawson',
    role: 'Year 11 Language teacher',
    initials: 'LA',
    tint: 'bg-teal-500/10 text-teal-500',
    date: 'Mon 18 May, 16:10',
    context: 'on the Paper 1 mock (56/80)',
    body: 'The Q1–Q3 work is strong, well done. We have to fix the Q5 timing before mock week — when you go over by seven minutes you give away the conclusion every single time. Bring the practice plans you wrote on Friday.',
  },
  {
    id: 't3',
    teacher: 'Ms Beale',
    role: 'Library drop-in · unseen poetry',
    initials: 'BE',
    tint: 'bg-amber-500/10 text-amber-600',
    date: 'Fri 15 May, 14:30',
    context: 'on the "Storm on the Island" annotation',
    body: 'Your annotations are getting noticeably sharper. Promise me one thing — for every technique you spot, write the effect on the reader underneath it. That is the AO2 stretch that gets you from grade 5 into grade 6 on unseen.',
  },
  {
    id: 't4',
    teacher: 'Ms Patel',
    role: 'Head of English · your Lit teacher',
    initials: 'PA',
    tint: 'bg-primary/10 text-primary',
    date: 'Wed 13 May, 09:15',
    context: 'on Macbeth Act 2 retrieval',
    body: 'You know this play. We just need to convert "what happens" into "why it matters". I want one sentence on dramatic irony in every Macbeth paragraph from this week onwards. Try it on the dagger soliloquy first.',
  },
]

const AO_SKILLS = [
  {
    id: 'ao1',
    label: 'AO1 — Understanding & ideas',
    score: 73,
    target: 78,
    status: 'on-track' as const,
    tip: 'You read texts confidently. Push into "and another reading would be" to lift this AO into the strong band.',
  },
  {
    id: 'ao2',
    label: 'AO2 — Language, form & structure',
    score: 65,
    target: 78,
    status: 'gap' as const,
    tip: 'Always name the technique, then explain the deliberate effect on the reader. This is the single biggest grade lever for you.',
  },
  {
    id: 'ao3',
    label: 'AO3 — Context',
    score: 71,
    target: 78,
    status: 'on-track' as const,
    tip: 'Integrate context throughout, not just in the introduction. Two sentences in every body paragraph is the rhythm.',
  },
  {
    id: 'ao4',
    label: 'AO4 — Evaluation',
    score: 58,
    target: 78,
    status: 'gap' as const,
    tip: 'Use two viewpoints in Paper 1 Q4. Agree with the statement, then disagree, then judge — that is the top-band move.',
  },
  {
    id: 'ao5',
    label: 'AO5 — Writing for purpose',
    score: 79,
    target: 78,
    status: 'strong' as const,
    tip: 'Your speech writing in Paper 2 is already at the top band. Hold this — do not over-engineer it.',
  },
  {
    id: 'ao6',
    label: 'AO6 — SPaG',
    score: 82,
    target: 78,
    status: 'strong' as const,
    tip: 'Solid technical accuracy. Keep an eye on semicolons in your essays — that is the only consistent slip.',
  },
]

const STRENGTHS = [
  {
    topic: 'An Inspector Calls',
    score: 80,
    detail: 'Confident character arcs · sharp paragraph endings',
    icon: Trophy,
  },
  {
    topic: 'Creative writing — narrative',
    score: 82,
    detail: 'Strong voice and a real sense of perspective',
    icon: PenLine,
  },
  {
    topic: 'Reading comprehension (Q1/Q2)',
    score: 86,
    detail: '6/8 last mock — almost no time wasted on the source',
    icon: Eye,
  },
  {
    topic: 'SPaG accuracy',
    score: 82,
    detail: 'Top band of AO6 across three pieces in a row',
    icon: CheckCircle,
  },
]

const IMPROVE_AREAS = [
  {
    topic: 'Unseen Poetry',
    score: 58,
    suggestion: 'Two timed annotation sessions a week with the AO2 frame from Ms Beale',
    icon: Quote,
  },
  {
    topic: 'Paper 1 Q5 timing',
    score: 60,
    suggestion: 'Practise 5-minute planning + 35-minute writing every Tuesday this term',
    icon: Hourglass,
  },
  {
    topic: 'Comparison essays',
    score: 62,
    suggestion: 'Build a comparative connectives bank: whereas, conversely, in contrast, similarly',
    icon: BarChart3,
  },
]

const COURSES = [
  {
    id: 'aqa-lit',
    title: 'AQA English Literature',
    board: 'AQA · GCSE',
    progress: 68,
    nextLesson: 'Macbeth Act 3 — close reading workshop',
    teacher: 'Ms Patel',
    icon: BookOpen,
    accent: LIT_ACCENT,
    barFill: 'bg-primary',
  },
  {
    id: 'aqa-lang',
    title: 'AQA English Language',
    board: 'AQA · GCSE',
    progress: 54,
    nextLesson: 'Paper 1 Q5 — narrative under 40 minutes',
    teacher: 'Mr Lawson',
    icon: PenLine,
    accent: LANG_ACCENT,
    barFill: 'bg-teal-500',
  },
  {
    id: 'creative',
    title: 'Creative Writing Workshop',
    board: 'Enrichment',
    progress: 82,
    nextLesson: 'Crafting authentic dialogue',
    teacher: 'Ms Beale',
    icon: Sparkles,
    accent: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
    barFill: 'bg-amber-500',
  },
]

const FLASHCARDS = [
  {
    front: 'Pathetic Fallacy',
    back: 'When the weather or environment reflects the mood or emotions of the characters.',
  },
  {
    front: 'Dramatic Irony',
    back: 'When the audience knows something that the characters do not.',
  },
  {
    front: 'Soliloquy',
    back: 'A speech in a play where a character speaks their thoughts aloud, alone on stage.',
  },
  {
    front: 'Foreshadowing',
    back: 'A literary device where the author hints at events that will occur later in the story.',
  },
  {
    front: 'Juxtaposition',
    back: 'Placing two contrasting things close together to highlight their differences.',
  },
]

// ---------------------------------------------------------------------------
// FlashcardWidget — preserved from the previous version of this file
// ---------------------------------------------------------------------------

function FlashcardWidget() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = FLASHCARDS[index]

  function handleNext() {
    setFlipped(false)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % FLASHCARDS.length)
    }, 150)
  }

  return (
    <div className="space-y-4">
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative cursor-pointer select-none"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-44 transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <div
            className="absolute inset-0 rounded-xl border border-border/60 bg-gradient-to-br from-violet-500/10 to-clay-400/10 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="text-xs text-muted-foreground mb-3">Tap to reveal</p>
            <p className="text-lg font-medium text-foreground text-center">{card.front}</p>
            <p className="text-xs text-muted-foreground mt-4">
              {index + 1} / {FLASHCARDS.length}
            </p>
          </div>
          <div
            className="absolute inset-0 rounded-xl border border-primary/20 bg-gradient-to-br from-violet-500/15 to-clay-400/15 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-xs text-primary/70 mb-3">Definition</p>
            <p className="text-sm text-foreground text-center leading-relaxed">{card.back}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-muted text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Next card
        </button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Small presentational helpers
// ---------------------------------------------------------------------------

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary mb-2">
      {children}
    </p>
  )
}

function SoftEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
      {children}
    </p>
  )
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-serif font-semibold tracking-tight text-foreground text-2xl md:text-3xl"
    >
      {children}
    </h2>
  )
}

function GradePip({ grade, size = 'md' }: { grade: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizing =
    size === 'lg' ? 'h-12 w-12 text-2xl' : size === 'sm' ? 'h-7 w-7 text-sm' : 'h-9 w-9 text-lg'
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg border border-border/60 bg-card font-heading font-bold tabular-nums ${sizing} ${gcseGradeColor(grade)}`}
      aria-label={`Grade ${grade}`}
    >
      {grade}
    </span>
  )
}

function PriorityPill({ level }: { level: 'HIGH' | 'MEDIUM' | 'LOW' | 'high' | 'medium' | 'low' }) {
  const norm = level.toString().toUpperCase()
  const tone =
    norm === 'HIGH'
      ? 'bg-red-500/10 text-red-500 border-red-500/20'
      : norm === 'MEDIUM'
        ? 'bg-amber-500/10 text-amber-600 border-amber-500/20'
        : 'bg-muted text-muted-foreground border-border'
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tone}`}
    >
      {norm}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function StudentDemoPage() {
  const [revisionBucket, setRevisionBucket] = useState<number>(30)
  const [openResultId, setOpenResultId] = useState<string | null>('res1')
  const [openSkillId, setOpenSkillId] = useState<string | null>(null)

  const weeklyPct = Math.min(
    100,
    Math.round((STUDENT.weeklyMinutes / STUDENT.weeklyGoalMinutes) * 100),
  )
  const weeklyHours = Math.floor(STUDENT.weeklyMinutes / 60)
  const weeklyMins = STUDENT.weeklyMinutes % 60

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── SYNTHETIC DATA CHIP + DEMO BANNER ───────────────────────────── */}
      <div className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              <Info className="h-3 w-3" /> Synthetic data — demo only
            </span>
            <span className="text-xs text-muted-foreground">
              No real student, school, or teacher.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="text-muted-foreground">Try it as…</span>
            <Link
              href="/demo/student"
              className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-medium text-primary"
              aria-current="page"
            >
              <Star className="h-3 w-3" /> Student (you are here)
            </Link>
            <Link
              href="/demo/teacher"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              Teacher view <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/demo/school"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              School view <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── HERO / WELCOME ──────────────────────────────────────────────── */}
      <section aria-labelledby="hero-h" className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-12">
          <SectionEyebrow>Personal dashboard</SectionEyebrow>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionHeading id="hero-h">Good afternoon, {STUDENT.firstName}</SectionHeading>
              <p className="mt-2 text-sm text-muted-foreground">
                {STUDENT.todayDateLong} · Three classes today, four assignments live, one focus
                priority.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                <GraduationCap className="h-3 w-3" /> {STUDENT.yearGroup}
              </Badge>
              <Badge variant="outline" className="border-teal-500/20 bg-teal-500/5 text-teal-500">
                {STUDENT.board}
              </Badge>
              <Badge variant="outline" className="border-border bg-card text-muted-foreground">
                <MapPin className="h-3 w-3" /> {STUDENT.school}
              </Badge>
              <Badge variant="outline" className="border-red-500/30 bg-red-500/10 text-red-500">
                <Bell className="h-3 w-3" /> Mocks in {STUDENT.mocksWeeksAway} weeks · GCSEs in{' '}
                {STUDENT.examsWeeksAway} weeks
              </Badge>
            </div>
          </div>

          {/* KPI row */}
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* Target grade */}
            <GlassPanel accent="primary" className="p-5">
              <div className="flex items-start justify-between gap-3">
                <PanelEyebrow>Target grade</PanelEyebrow>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                  <Target className="h-4 w-4 text-primary" aria-hidden />
                </span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <GradePip grade={STUDENT.targetGrade} size="lg" />
                <span className="mb-1 text-xs text-muted-foreground">
                  set by Ms Patel · achievable
                </span>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">
                Baseline grade {STUDENT.baselineGrade} → target {STUDENT.targetGrade}. You have
                moved up two grades in two years.
              </p>
            </GlassPanel>

            {/* Predicted grade */}
            <GlassPanel accent="ochre" className="p-5">
              <div className="flex items-start justify-between gap-3">
                <PanelEyebrow>Predicted grade</PanelEyebrow>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                  <Compass className="h-4 w-4 text-amber-600" aria-hidden />
                </span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <GradePip grade={STUDENT.predictedGrade} size="lg" />
                <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold text-amber-600">
                  <ArrowUpRight className="h-3 w-3" /> +1 to close
                </span>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">
                If you keep doing what you are doing. Push AO2 and you bridge to grade 7.
              </p>
            </GlassPanel>

            {/* Streak */}
            <GlassPanel accent="clay" className="p-5">
              <div className="flex items-start justify-between gap-3">
                <PanelEyebrow>Study streak</PanelEyebrow>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                  <Flame className="h-4 w-4 text-clay-600" aria-hidden />
                </span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-heading text-4xl font-bold tracking-tight text-foreground tabular-nums">
                  {STUDENT.streakDays}
                </span>
                <span className="mb-2 text-sm text-muted-foreground">days</span>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">
                Longest this term. Do something today to keep it alive.
              </p>
            </GlassPanel>

            {/* This week's study time */}
            <GlassPanel accent="teal" className="p-5">
              <div className="flex items-start justify-between gap-3">
                <PanelEyebrow>This week</PanelEyebrow>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                  <Clock className="h-4 w-4 text-teal-500" aria-hidden />
                </span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-heading text-4xl font-bold tracking-tight text-foreground tabular-nums">
                  {weeklyHours}h {String(weeklyMins).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full bg-teal-500 transition-all"
                  style={{ width: `${weeklyPct}%` }}
                  role="progressbar"
                  aria-valuenow={weeklyPct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Weekly study time progress"
                />
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {weeklyPct}% of your 6h weekly goal · {STUDENT.termHours}h this term ·{' '}
                {STUDENT.attendancePct}% attendance
              </p>
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* ── TODAY + THIS WEEK ───────────────────────────────────────────── */}
      <section aria-labelledby="today-h" className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <SectionEyebrow>Today and this week</SectionEyebrow>
          <SectionHeading id="today-h">Where you need to be</SectionHeading>
          <p className="mt-2 text-sm text-muted-foreground">
            Three lessons today and a week balanced across Literature and Language.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* LEFT — Today */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                      Today · Wed 20 May
                    </h3>
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    Riverside Academy · Week B
                  </span>
                </div>
                <ul className="space-y-3">
                  {TODAYS_CLASSES.map((c) => (
                    <li
                      key={c.id}
                      className="flex flex-col gap-3 rounded-xl border border-border/40 bg-background p-4 sm:flex-row sm:items-center"
                    >
                      <div className="flex w-24 flex-col gap-0.5 sm:w-28">
                        <span className="font-heading text-xl font-semibold tabular-nums text-foreground">
                          {c.time}
                        </span>
                        <span className="text-[11px] text-muted-foreground">{c.duration}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-sm text-foreground">{c.subject}</span>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Room {c.room}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{c.topic}</p>
                        {c.homework && (
                          <p className="mt-1 inline-flex items-center gap-1 rounded-md bg-red-500/10 px-2 py-0.5 text-[11px] font-medium text-red-500">
                            <AlertTriangle className="h-3 w-3" /> {c.homework}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${c.teacher.tint}`}
                          aria-hidden
                        >
                          {c.teacher.initials}
                        </span>
                        <div className="text-right">
                          <p className="text-xs font-medium text-foreground">{c.teacher.name}</p>
                          <p className="text-[10px] text-muted-foreground">teacher</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — This week */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Map className="h-4 w-4 text-primary" />
                    <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                      This week
                    </h3>
                  </div>
                  <span className="text-[11px] text-muted-foreground">18–22 May</span>
                </div>
                <ul className="space-y-2">
                  {WEEK_DAYS.map((d) => {
                    const Icon = d.icon
                    const isToday = d.key === 'wed'
                    return (
                      <li
                        key={d.key}
                        className={`flex items-center gap-3 rounded-xl border p-3 ${d.tint}`}
                      >
                        <div className="flex w-14 flex-col items-start">
                          <span
                            className={`text-xs font-semibold uppercase tracking-wider ${isToday ? 'text-primary' : 'text-muted-foreground'}`}
                          >
                            {d.label}
                          </span>
                          <span className="text-[10px] text-muted-foreground">{d.date}</span>
                        </div>
                        <Icon
                          className={`h-4 w-4 shrink-0 ${isToday ? 'text-primary' : 'text-muted-foreground'}`}
                          aria-hidden
                        />
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">
                            {d.subject}
                          </p>
                          <p className="truncate text-[11px] text-muted-foreground">{d.topic}</p>
                        </div>
                        {isToday && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                            Today
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASSIGNMENTS + UPCOMING WORK ─────────────────────────────────── */}
      <section aria-labelledby="assignments-h" className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <GlassPanel accent="clay" className="p-7 md:p-9">
            <PanelEyebrow>Upcoming work</PanelEyebrow>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
              <SectionHeading id="assignments-h">Five assignments are live</SectionHeading>
              <Badge variant="outline" className="border-clay-500/30 bg-clay-500/10 text-clay-600">
                {ASSIGNMENTS.length} active · 2 high priority
              </Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Sorted by due date — the first two will land in mock week if you do not start them
              this weekend.
            </p>

            <ul className="mt-6 space-y-3">
              {ASSIGNMENTS.map((a) => {
                const Icon = a.icon
                const typeLabel =
                  a.type === 'essay'
                    ? 'Essay'
                    : a.type === 'mock'
                      ? 'Mock'
                      : a.type === 'quiz'
                        ? 'Quiz'
                        : 'Practice'
                return (
                  <li
                    key={a.id}
                    className="flex flex-col gap-3 rounded-2xl border border-border/50 bg-card p-5 sm:flex-row sm:items-center"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${a.subjectAccent}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-base font-semibold text-foreground">
                          {a.title}
                        </h3>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className={a.subjectAccent}>
                          {a.subject}
                        </Badge>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {typeLabel}
                        </span>
                        <PriorityPill level={a.priority} />
                        <span className="text-[11px] text-muted-foreground">{a.notes}</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center">
                      <div className="text-right">
                        <p className="text-sm font-semibold tabular-nums text-foreground">
                          {a.dueLabel}
                        </p>
                        <p className="text-[11px] text-muted-foreground">{a.dueRelative}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-foreground/[0.06] px-2 py-0.5 text-[11px] tabular-nums text-muted-foreground">
                        <Clock className="h-3 w-3" /> {a.estimatedMinutes} min
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-dashed border-border/50 bg-background/40 px-5 py-3">
              <p className="text-xs text-muted-foreground">
                Need a bigger view? See every piece of work across your courses.
              </p>
              <Link
                href="/demo/student/courses"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
              >
                View all assignments <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* ── GRADE FLIGHT PATH ───────────────────────────────────────────── */}
      <section aria-labelledby="flight-h" className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <SectionEyebrow>Grade flight path</SectionEyebrow>
          <SectionHeading id="flight-h">Where you&apos;re heading</SectionHeading>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Your journey from end-of-Y9 baseline to summer 2026. The gap between
            <span className="mx-1 font-medium text-foreground">predicted</span>
            and
            <span className="mx-1 font-medium text-primary">target</span>
            is small — one grade, eight weeks, two AO levers.
          </p>

          {/* Flight path SVG */}
          <div className="mt-8 rounded-2xl border border-border/50 bg-background p-6 md:p-10">
            <div className="relative">
              <svg
                viewBox="0 0 1000 220"
                className="h-auto w-full"
                role="img"
                aria-label="Grade flight path from baseline grade 4 to target grade 7"
              >
                <defs>
                  <linearGradient id="flightLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.4" />
                    <stop offset="35%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                    <stop offset="65%" stopColor="hsl(var(--primary))" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="flightFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grade bands as soft horizontal guides */}
                {[4, 5, 6, 7].map((g, i) => {
                  const y = 180 - (g - 4) * 35
                  return (
                    <g key={g}>
                      <line
                        x1="40"
                        x2="960"
                        y1={y}
                        y2={y}
                        stroke="hsl(var(--border))"
                        strokeWidth="1"
                        strokeDasharray={i === 3 ? '0' : '4 4'}
                        opacity={i === 3 ? '0.9' : '0.45'}
                      />
                      <text
                        x="20"
                        y={y + 4}
                        fontSize="12"
                        fill="hsl(var(--muted-foreground))"
                        fontFamily="monospace"
                      >
                        G{g}
                      </text>
                    </g>
                  )
                })}

                {/* Curve through markers */}
                <path
                  d="M 80 180 Q 280 170 440 110 T 700 110 T 950 40"
                  stroke="url(#flightLine)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 80 180 Q 280 170 440 110 T 700 110 T 950 40 L 950 200 L 80 200 Z"
                  fill="url(#flightFill)"
                  opacity="0.6"
                />

                {/* Markers */}
                {FLIGHT_PATH.map((p, i) => {
                  const cx = 80 + (i / (FLIGHT_PATH.length - 1)) * 870
                  const cy = 180 - (p.grade - 4) * 35
                  const isTarget = p.key === 'target'
                  const isCurrent = p.key === 'current'
                  return (
                    <g key={p.key}>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isTarget || isCurrent ? '12' : '8'}
                        fill={isTarget ? 'hsl(var(--primary))' : 'hsl(var(--card))'}
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                      />
                      {isCurrent && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="20"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1.5"
                          opacity="0.5"
                        />
                      )}
                      <text
                        x={cx}
                        y={cy - 22}
                        fontSize="13"
                        fontWeight="600"
                        fill="hsl(var(--foreground))"
                        textAnchor="middle"
                      >
                        {p.label}
                      </text>
                      <text
                        x={cx}
                        y={cy + 32}
                        fontSize="11"
                        fill="hsl(var(--muted-foreground))"
                        textAnchor="middle"
                      >
                        {p.sub}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Flight markers below */}
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {FLIGHT_PATH.map((p) => {
                const isTarget = p.key === 'target'
                const isCurrent = p.key === 'current'
                return (
                  <div
                    key={p.key}
                    className={`rounded-xl border p-4 ${
                      isTarget
                        ? 'border-primary/40 bg-primary/5'
                        : isCurrent
                          ? 'border-primary/30 bg-primary/[0.04]'
                          : 'border-border/50 bg-card'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {p.label}
                      </p>
                      <GradePip grade={p.grade} size="sm" />
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground">{p.sub}</p>
                    <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
                      {p.note}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Three context cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {FLIGHT_CONTEXT.map((c) => {
              const Icon = c.icon
              return (
                <GlassPanel key={c.title} accent={c.accent} className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                      <Icon className="h-4 w-4 text-foreground" />
                    </span>
                    <h4 className="font-heading text-sm font-semibold text-foreground">
                      {c.title}
                    </h4>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {c.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── AI INSIGHTS ─────────────────────────────────────────────────── */}
      <section aria-labelledby="ai-h" className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <GlassPanel accent="primary" className="p-7 md:p-9">
            <PanelEyebrow>AI Insights</PanelEyebrow>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
              <SectionHeading id="ai-h">Where to focus this week</SectionHeading>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] text-primary">
                <Sparkles className="h-3 w-3" /> Updated this morning
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              These three priorities will move you the most points before mocks open. Each one draws
              on your last six assessments and the AO breakdown below.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {AI_INSIGHTS.map((i) => {
                const Icon = i.icon
                return (
                  <div
                    key={i.id}
                    className={`flex flex-col rounded-2xl border p-5 transition-shadow hover:shadow-md ${
                      i.priority === 'HIGH'
                        ? 'border-red-500/30 bg-gradient-to-b from-red-500/[0.05] to-card'
                        : 'border-border/50 bg-card'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <PriorityPill level={i.priority} />
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.06]">
                        <Icon className="h-4 w-4 text-primary" />
                      </span>
                    </div>
                    <h4 className="mt-3 font-heading text-base font-semibold leading-snug tracking-tight text-foreground">
                      {i.title}
                    </h4>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {i.body}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3">
                      <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Clock className="h-3 w-3" /> ~{i.minutes} min
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                        render={<Link href={i.href} />}
                      >
                        Start now <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="mt-6 flex items-start gap-2 rounded-lg bg-foreground/[0.04] px-4 py-3 text-[11px] text-muted-foreground">
              <Info className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground" />
              These priorities are generated from your recent work — your teacher reviews and
              adjusts them before they are final. Synthetic data — demo only.
            </p>
          </GlassPanel>
        </div>
      </section>

      {/* ── REVISION PLANNER — "I HAVE __ MINUTES" ──────────────────────── */}
      <section aria-labelledby="planner-h" className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <GlassPanel accent="teal" className="p-7 md:p-9">
            <PanelEyebrow>Revision planner</PanelEyebrow>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
              <SectionHeading id="planner-h">I have ____ minutes</SectionHeading>
              <span className="text-[11px] text-muted-foreground">
                Pick a time bucket — we will pick the work.
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Time bucket">
              {[15, 30, 60, 90].map((m) => {
                const active = revisionBucket === m
                return (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setRevisionBucket(m)}
                    className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                      active
                        ? 'border-primary bg-primary text-primary-foreground shadow'
                        : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    }`}
                  >
                    {m} min
                  </button>
                )
              })}
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {REVISION_OPTIONS[revisionBucket].map((o) => {
                const Icon = o.icon
                return (
                  <li
                    key={o.id}
                    className="flex flex-col rounded-2xl border border-border/50 bg-background p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10">
                        <Icon className="h-4 w-4 text-teal-500" />
                      </span>
                      <Badge
                        variant="outline"
                        className="border-teal-500/20 bg-teal-500/5 text-teal-500"
                      >
                        {o.subject}
                      </Badge>
                    </div>
                    <h4 className="mt-3 font-heading text-base font-semibold leading-snug tracking-tight text-foreground">
                      {o.title}
                    </h4>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {o.why}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Clock className="h-3 w-3" /> {o.minutes} min
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-teal-500 hover:bg-teal-500/10 hover:text-teal-500"
                        render={<Link href="/revision" />}
                      >
                        <Play className="mr-1 h-3 w-3" /> Start
                      </Button>
                    </div>
                  </li>
                )
              })}
            </ul>

            <p className="mt-6 flex items-start gap-2 rounded-lg bg-foreground/[0.04] px-4 py-3 text-[11px] text-muted-foreground">
              <Info className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground" />
              Suggestions adapt to your recent marks and your assignments calendar. Synthetic data —
              demo only.
            </p>
          </GlassPanel>
        </div>
      </section>

      {/* ── RECENT RESULTS — CLICKABLE TO EXPAND ────────────────────────── */}
      <section aria-labelledby="results-h" className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <SoftEyebrow>Marks</SoftEyebrow>
          <SectionHeading id="results-h">Recent results</SectionHeading>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Five assessments across the last six weeks. Tap a row to see the teacher comment.
          </p>

          <ul className="mt-6 space-y-3">
            {RECENT_RESULTS.map((r) => {
              const pct = Math.round((r.score / r.max) * 100)
              const grade = percentageToGCSEGrade(pct)
              const isOpen = openResultId === r.id
              const deltaTone =
                r.deltaTone === 'good'
                  ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                  : r.deltaTone === 'warn'
                    ? 'bg-red-500/10 text-red-500 border-red-500/20'
                    : 'bg-muted text-muted-foreground border-border'
              return (
                <li
                  key={r.id}
                  className="overflow-hidden rounded-2xl border border-border/50 bg-card"
                >
                  <button
                    type="button"
                    onClick={() => setOpenResultId(isOpen ? null : r.id)}
                    aria-expanded={isOpen}
                    aria-controls={`result-detail-${r.id}`}
                    className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-muted/30"
                  >
                    <div className="hidden sm:block">
                      <GradePip grade={grade} size="md" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-base font-semibold text-foreground">
                          {r.title}
                        </h3>
                        <Badge variant="outline" className={r.subjectAccent}>
                          {r.subject}
                        </Badge>
                      </div>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {r.date} · marked by {r.teacher}
                      </p>
                    </div>
                    <div className="hidden flex-col items-end gap-1 sm:flex">
                      <span className="font-heading text-xl font-bold tabular-nums text-foreground">
                        {r.score}
                        <span className="text-base font-medium text-muted-foreground">
                          /{r.max}
                        </span>
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${deltaTone}`}
                      >
                        {r.delta}
                      </span>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`result-detail-${r.id}`}
                      className="border-t border-border/50 bg-background px-5 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <Quote className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        <div>
                          <p className="text-sm leading-relaxed text-foreground italic">
                            &ldquo;{r.comment}&rdquo;
                          </p>
                          <p className="mt-2 text-[11px] text-muted-foreground">
                            — {r.teacher} · {r.date}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          Percentage:{' '}
                          <span className="font-medium tabular-nums text-foreground">{pct}%</span>
                        </span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          Grade:{' '}
                          <span className={`font-semibold ${gcseGradeColor(grade)}`}>{grade}</span>
                        </span>
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── TEACHER COMMENTS ────────────────────────────────────────────── */}
      <section aria-labelledby="comments-h" className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <SectionEyebrow>From your teachers</SectionEyebrow>
          <SectionHeading id="comments-h">Their words on your work</SectionHeading>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Four recent notes — Ms Patel and Mr Lawson are your daily pair, Ms Beale runs the
            library drop-in.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {TEACHER_COMMENTS.map((c) => (
              <article key={c.id} className="rounded-2xl border border-border/50 bg-background p-6">
                <header className="flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-heading text-base font-semibold ${c.tint}`}
                    aria-hidden
                  >
                    {c.initials}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-heading text-sm font-semibold text-foreground">
                      {c.teacher}
                    </h4>
                    <p className="text-[11px] text-muted-foreground">{c.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-muted-foreground">{c.date}</p>
                  </div>
                </header>
                <p className="mt-3 text-[11px] text-muted-foreground">{c.context}</p>
                <blockquote className="mt-2 border-l-2 border-primary/30 pl-4">
                  <p className="text-sm italic leading-relaxed text-foreground">
                    &ldquo;{c.body}&rdquo;
                  </p>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── AO SKILL BREAKDOWN ──────────────────────────────────────────── */}
      <section aria-labelledby="ao-h" className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <GlassPanel accent="sage" className="p-7 md:p-9">
            <PanelEyebrow>Assessment objectives</PanelEyebrow>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
              <SectionHeading id="ao-h">Your skill profile</SectionHeading>
              <span className="text-[11px] text-muted-foreground">
                Average across the last six pieces · target line at 78
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {AO_SKILLS.map((s) => {
                const isOpen = openSkillId === s.id
                const fill = Math.min(100, s.score)
                const target = Math.min(100, s.target)
                const statusTone =
                  s.status === 'strong'
                    ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                    : s.status === 'gap'
                      ? 'bg-red-500/10 text-red-500 border-red-500/20'
                      : 'bg-amber-500/10 text-amber-600 border-amber-500/20'
                const barColor =
                  s.status === 'strong'
                    ? 'bg-emerald-500'
                    : s.status === 'gap'
                      ? 'bg-red-500'
                      : 'bg-amber-500'
                return (
                  <li key={s.id} className="rounded-xl border border-border/50 bg-background p-4">
                    <button
                      type="button"
                      onClick={() => setOpenSkillId(isOpen ? null : s.id)}
                      aria-expanded={isOpen}
                      aria-controls={`ao-detail-${s.id}`}
                      className="flex w-full items-center gap-4 text-left"
                    >
                      <div className="w-56 shrink-0">
                        <p className="text-sm font-medium text-foreground">{s.label}</p>
                      </div>
                      <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-foreground/[0.06]">
                        <div
                          className={`h-full rounded-full ${barColor} transition-all`}
                          style={{ width: `${fill}%` }}
                          role="progressbar"
                          aria-valuenow={fill}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${s.label} score`}
                        />
                        <div
                          className="absolute top-0 h-full w-0.5 bg-foreground/40"
                          style={{ left: `${target}%` }}
                          aria-hidden
                        />
                      </div>
                      <div className="flex w-32 items-center justify-end gap-2">
                        <span className="font-heading text-sm font-semibold tabular-nums text-foreground">
                          {s.score}
                        </span>
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusTone}`}
                        >
                          {s.status === 'strong'
                            ? 'Strong'
                            : s.status === 'gap'
                              ? 'Gap'
                              : 'On track'}
                        </span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        id={`ao-detail-${s.id}`}
                        className="mt-3 flex items-start gap-2 rounded-lg bg-foreground/[0.04] px-4 py-3"
                      >
                        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        <p className="text-[13px] leading-relaxed text-muted-foreground">{s.tip}</p>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            <p className="mt-5 flex items-start gap-2 text-[11px] text-muted-foreground">
              <Info className="mt-0.5 h-3 w-3 shrink-0" /> AO scores normalised against the AQA GCSE
              mark schemes. Synthetic data — demo only.
            </p>
          </GlassPanel>
        </div>
      </section>

      {/* ── STRENGTHS + AREAS TO IMPROVE ────────────────────────────────── */}
      <section aria-labelledby="strengths-h" className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <SectionEyebrow>Where you land</SectionEyebrow>
          <SectionHeading id="strengths-h">Strengths and areas to improve</SectionHeading>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Strengths */}
            <GlassPanel accent="sage" className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <PanelEyebrow>Playing to your strengths</PanelEyebrow>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                    Lean into these four
                  </h3>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10">
                  <Trophy className="h-4 w-4 text-teal-500" />
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {STRENGTHS.map((s) => {
                  const Icon = s.icon
                  const grade = percentageToGCSEGrade(s.score)
                  return (
                    <li
                      key={s.topic}
                      className="flex items-center gap-3 rounded-xl border border-border/40 bg-background p-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10">
                        <Icon className="h-4 w-4 text-teal-500" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">{s.topic}</p>
                        <p className="text-[11px] text-muted-foreground">{s.detail}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-heading text-base font-bold tabular-nums text-foreground">
                          {s.score}
                        </span>
                        <span className={`text-[10px] font-semibold ${gcseGradeColor(grade)}`}>
                          Grade {grade}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </GlassPanel>

            {/* Areas to improve */}
            <GlassPanel accent="clay" className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <PanelEyebrow>Move the needle</PanelEyebrow>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                    Three to push on
                  </h3>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-clay-500/10">
                  <Target className="h-4 w-4 text-clay-600" />
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {IMPROVE_AREAS.map((a) => {
                  const Icon = a.icon
                  const grade = percentageToGCSEGrade(a.score)
                  return (
                    <li
                      key={a.topic}
                      className="rounded-xl border border-border/40 bg-background p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                          <Icon className="h-4 w-4 text-amber-600" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">{a.topic}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-heading text-base font-bold tabular-nums text-foreground">
                            {a.score}
                          </span>
                          <span className={`text-[10px] font-semibold ${gcseGradeColor(grade)}`}>
                            Grade {grade}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 flex items-start gap-2 rounded-md bg-foreground/[0.04] px-3 py-2 text-[12px] leading-relaxed text-muted-foreground">
                        <Lightbulb className="mt-0.5 h-3 w-3 shrink-0 text-amber-500" />
                        <span>{a.suggestion}</span>
                      </p>
                    </li>
                  )
                })}
              </ul>
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* ── ACTIVE COURSES ──────────────────────────────────────────────── */}
      <section aria-labelledby="courses-h" className="border-b border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <SectionEyebrow>Your courses</SectionEyebrow>
              <SectionHeading id="courses-h">Three live, one stretch</SectionHeading>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Two AQA GCSE specifications and an enrichment writing workshop.
              </p>
            </div>
            <Link
              href="/demo/student/courses"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {COURSES.map((c) => {
              const Icon = c.icon
              return (
                <Link
                  key={c.id}
                  href="/demo/student/courses"
                  className="group flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${c.accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant="outline" className={c.accent}>
                      {c.board}
                    </Badge>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold tracking-tight text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-muted-foreground">Teacher · {c.teacher}</p>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Progress
                      </span>
                      <span className="font-heading text-sm font-semibold tabular-nums text-foreground">
                        {c.progress}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-foreground/[0.06]">
                      <div
                        className={`h-full ${c.barFill} transition-all`}
                        style={{ width: `${c.progress}%` }}
                        role="progressbar"
                        aria-valuenow={c.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${c.title} progress`}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex-1 rounded-lg border border-border/40 bg-background p-3">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Next lesson
                    </p>
                    <p className="mt-1 text-sm text-foreground">{c.nextLesson}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-end text-sm font-medium text-primary group-hover:translate-x-0.5">
                    Continue <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FLASHCARDS WIDGET ───────────────────────────────────────────── */}
      <section aria-labelledby="flashcards-h" className="border-b border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <GlassPanel accent="ochre" className="p-7 md:p-9">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <PanelEyebrow>Five-minute warmup</PanelEyebrow>
                <SectionHeading id="flashcards-h">Literary terms drill</SectionHeading>
                <p className="mt-2 text-sm text-muted-foreground">
                  Five cards covering the techniques you keep losing AO2 marks on. Tap the card to
                  flip, then move to the next one.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-ochre-500/30 bg-ochre-500/10 text-ochre-500"
                  >
                    <Library className="h-3 w-3" /> {FLASHCARDS.length} cards
                  </Badge>
                  <Badge variant="outline" className="border-border bg-card text-muted-foreground">
                    AO2 · language techniques
                  </Badge>
                </div>
                <p className="mt-4 flex items-start gap-2 text-[11px] text-muted-foreground">
                  <Info className="mt-0.5 h-3 w-3 shrink-0" /> Cards auto-generated from your
                  Macbeth and AIC retrieval gaps. Synthetic data — demo only.
                </p>
              </div>
              <div className="lg:col-span-3">
                <FlashcardWidget />
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* ── CLOSING CTA STRIP ───────────────────────────────────────────── */}
      <section aria-labelledby="cta-h" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <SectionEyebrow>One more thing</SectionEyebrow>
                <SectionHeading id="cta-h">
                  This is a demo dashboard — your school&apos;s data would live here.
                </SectionHeading>
                <p className="mt-3 text-sm text-muted-foreground">
                  Pilot the platform with your Year 11 cohort. Every chart on this page works the
                  same way for every student — and the teacher view rolls it up class by class.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  render={<Link href="/demo/school" />}
                >
                  See the school view <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button size="lg" render={<Link href="/school-pilot" />}>
                  <Sparkles className="mr-1.5 h-4 w-4" /> Book a school pilot
                </Button>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-[11px] text-muted-foreground">
            Synthetic data — demo only. No real student, school, or teacher is represented.
          </p>
        </div>
      </section>
    </div>
  )
}
