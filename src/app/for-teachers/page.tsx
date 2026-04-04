'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  GraduationCap,
  BookOpen,
  Users,
  BarChart3,
  ChevronDown,
  CheckCircle,
  Sparkles,
  Layers,
  PenTool,
  ClipboardList,
  Clock,
  Star,
  AlertTriangle,
  TrendingUp,
  Zap,
  FileText,
  Library,
  Building2,
  ChevronRight,
  Award,
  Download,
  Play,
  Monitor,
  Eye,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: Layers,
    color: 'text-primary bg-primary/10',
    title: 'Lesson Builder',
    desc: 'Build structured, specification-aligned lessons in minutes. Add starter activities, main tasks, and plenaries with drag-and-drop ease, then share instantly with any class.',
  },
  {
    icon: PenTool,
    color: 'text-emerald-400 bg-emerald-500/10',
    title: 'AI Essay Marking',
    desc: 'Students submit essays and get instant, detailed feedback aligned to AQA, Edexcel, OCR or WJEC mark schemes. Review and adjust before it reaches them.',
  },
  {
    icon: BarChart3,
    color: 'text-blue-400 bg-blue-500/10',
    title: 'Student Progress Analytics',
    desc: 'Track every student in real time. Spot who is falling behind, who is excelling, and where the whole class needs extra support -- all in one dashboard.',
  },
  {
    icon: ClipboardList,
    color: 'text-purple-400 bg-purple-500/10',
    title: 'Homework & Assignment Manager',
    desc: 'Set assignments, track submissions, chase overdue work, and monitor completion rates across all your classes without juggling spreadsheets.',
  },
  {
    icon: Library,
    color: 'text-amber-400 bg-amber-500/10',
    title: '300+ Ready Resources',
    desc: 'A growing library of worksheets, revision materials, model answers, and starter activities -- all ready to print or share digitally.',
  },
  {
    icon: Award,
    color: 'text-red-400 bg-red-500/10',
    title: 'Exam Board Coverage',
    desc: 'Full coverage of AQA, Edexcel IGCSE, Edexcel IAL, OCR and WJEC. Every resource and lesson is mapped to the correct specification so nothing is wasted.',
  },
]

const timeSavers = [
  'Save 5+ hours per week on lesson planning',
  'Auto-mark homework essays in seconds',
  'Generate worksheets and starter activities instantly',
  'Get at-a-glance class progress without manual tracking',
  'Predict student grades before exam season',
  'Share resources across all your classes in one click',
  'Eliminate paper-based marking admin',
  'Access 300+ ready-made resources any time',
]

const testimonials = [
  {
    quote: 'I used to spend my Sundays planning and marking. Now I use The English Hub and I actually have my weekends back. The AI marking alone saves me three hours a week.',
    name: 'Sarah M.',
    role: 'Head of English, secondary school, Manchester',
  },
  {
    quote: 'The analytics dashboard has completely changed how I identify students at risk. I catch problems weeks earlier than I used to and the interventions are much more targeted.',
    name: 'James T.',
    role: 'English Teacher, grammar school, Birmingham',
  },
  {
    quote: 'The lesson builder is brilliant. I can put together a full, AQA-aligned lesson in ten minutes. I have shared it with my whole department and they love it too.',
    name: 'Priya K.',
    role: 'Second in English, academy, London',
  },
]

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'Individual teacher plans are £9.99 per month or £79.99 per year. The annual plan saves you 33% and your first month is completely free -- no credit card required to start. School site licences start at £1,500 per year for unlimited teachers.',
  },
  {
    q: 'What features are included?',
    a: 'Every feature is included in the individual plan: Lesson Builder, AI Essay Marking, Student Progress Analytics, Homework and Assignment Manager, 300+ ready resources, predicted grades, and full exam board coverage. There are no add-on charges.',
  },
  {
    q: 'Which exam boards do you cover?',
    a: 'We cover AQA, Edexcel IGCSE, Edexcel IAL, OCR, and WJEC Eduqas. All lessons and resources are mapped to the relevant specification so you and your students only work with what is needed for their exams.',
  },
  {
    q: 'How does AI Essay Marking work?',
    a: 'Students submit essays through the platform. Our AI analyses the response against the mark scheme criteria for their exam board, provides detailed written feedback, and generates a predicted grade. You review and adjust everything before the student sees it.',
  },
  {
    q: 'Can I upgrade to a school plan later?',
    a: 'Absolutely. If you want to roll The English Hub out to your department or whole school, visit our School Plans page or email us at schools@theenglishhub.app. We can migrate your existing data and give your colleagues instant access.',
  },
  {
    q: 'What happens at the end of my free trial?',
    a: 'After your free month you are automatically moved to the paid plan you selected at signup. You can cancel any time before the trial ends from your account settings and you will not be charged. No hidden fees, no awkward cancellation calls.',
  },
]

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENTS                                                      */
/* ------------------------------------------------------------------ */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = q.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  return (
    <Card className="overflow-hidden border-border/40">
      <button
        id={`faq-trigger-${id}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-accent/30 transition-colors duration-200"
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        className={cn(
          'grid transition-all duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </Card>
  )
}

function ProgressBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-foreground font-medium">{value}%</span>
      </div>
      <div className="h-2 bg-border/40 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all', color)}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function ForTeachersPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* ================================================================
          HERO
      ================================================================ */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5"
          >
            <GraduationCap className="w-4 h-4" />
            For English Teachers
          </Badge>

          <h1 className="text-foreground">
            The English Hub for Teachers
          </h1>

          <p className="mt-7 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Save hours of planning every week and supercharge your student outcomes.
            AI-powered lesson building, instant essay marking, and real-time progress
            analytics -- all built specifically for English teachers.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Start Free Trial
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/for-schools" />}
            >
              See School Plans
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/demo/teacher" />}
            >
              <Play className="w-4 h-4 mr-2" />
              Try Teacher Demo
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            First month free. No credit card required. Cancel any time.
          </p>
        </div>
      </section>

      {/* ================================================================
          STATS BAR
      ================================================================ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { icon: Clock, color: 'text-primary bg-primary/10', value: '5hrs+', label: 'Saved Per Week' },
              { icon: PenTool, color: 'text-emerald-400 bg-emerald-500/10', value: 'AI', label: 'Essay Marking' },
              { icon: BookOpen, color: 'text-purple-400 bg-purple-500/10', value: '300+', label: 'Ready Resources' },
              { icon: Award, color: 'text-amber-400 bg-amber-500/10', value: '5', label: 'Exam Boards' },
              { icon: Users, color: 'text-blue-400 bg-blue-500/10', value: '1,000+', label: 'Teachers' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-14">
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-border/50" />}
                <div className="flex items-center gap-3">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', stat.color)}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TRY THE PLATFORM -- INTERACTIVE DEMO
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
            >
              <Play className="w-3.5 h-3.5" />
              Interactive Demo
            </Badge>
            <h2 className="text-foreground">Try the Platform -- No Signup Required</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              Explore a fully working demo with sample data. See exactly how The English Hub will save you time before you create an account.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Monitor,
                color: "text-primary bg-primary/10",
                title: "My Dashboard",
                desc: "See your classes, upcoming lessons, and student alerts at a glance.",
                href: "/demo/teacher",
              },
              {
                icon: Layers,
                color: "text-emerald-400 bg-emerald-500/10",
                title: "Lesson Builder",
                desc: "Build a full lesson plan aligned to your exam board in minutes.",
                href: "/demo/teacher/lessons",
              },
              {
                icon: BarChart3,
                color: "text-blue-400 bg-blue-500/10",
                title: "Student Analytics",
                desc: "Track progress, spot at-risk students, and view predicted grades.",
                href: "/demo/teacher/students/s1",
              },
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <Card className="p-6 border-border/40 hover:border-primary/40 transition-colors duration-300 h-full">
                  <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-5", card.color)}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/demo/teacher" />}
            >
              <Play className="w-4 h-4 mr-2" />
              Launch Teacher Demo
            </Button>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          FEATURES (6 CARDS)
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Everything You Need to Teach Smarter</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              Powerful tools built specifically for English teachers. Less admin, more impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item) => (
              <Card
                key={item.title}
                className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300"
              >
                <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', item.color)}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          CONTENT CREATION PREVIEW
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
              >
                <Zap className="w-3.5 h-3.5" />
                Content Creation
              </Badge>
              <h2 className="text-foreground mb-5">
                Full Lesson Plans in Seconds, Not Hours
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Tell the Lesson Builder what you are teaching and it generates a complete,
                structured lesson aligned to your exam board specification -- including
                starter activities, main tasks, differentiation suggestions, and a plenary.
                You review, adjust if needed, and share.
              </p>
              <ul className="space-y-3">
                {[
                  'Full lesson plans with learning objectives',
                  'Differentiated worksheets at multiple levels',
                  'Starter and plenary activities',
                  'Exam-style practice questions with mark schemes',
                  'Ready to share or print in one click',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-6 h-11"
                  render={<Link href="/demo/teacher/lessons" />}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try Lesson Builder Demo
                </Button>
              </div>
            </div>

            {/* Mock generated lesson card */}
            <div className="space-y-3">
              <Card className="p-5 border-border/40 bg-card/60">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Lesson Generated</span>
                  <Badge className="ml-auto text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/20">AQA</Badge>
                </div>
                <h4 className="font-bold text-foreground mb-1">
                  An Inspector Calls -- Act 1: Birling's Monologue
                </h4>
                <p className="text-xs text-muted-foreground mb-4">Year 11 -- 60 min lesson -- AQA English Literature</p>

                <div className="space-y-2.5">
                  {[
                    { label: 'Starter', desc: 'Class display: five quotes from Birling. Students rank from most to least capitalist. 5 min.' },
                    { label: 'Main Task 1', desc: 'Close reading of Birling\'s monologue. Annotate for dramatic irony, context, and Priestley\'s message. 20 min.' },
                    { label: 'Main Task 2', desc: 'Structured paragraph practice: how does Priestley present Birling as a symbol of capitalism? 20 min.' },
                    { label: 'Plenary', desc: 'Exit ticket: one A01 point, one A02 quotation, one A03 context link. 5 min.' },
                  ].map((step) => (
                    <div key={step.label} className="flex gap-3 text-sm">
                      <span className="font-semibold text-primary shrink-0 w-24">{step.label}</span>
                      <span className="text-muted-foreground leading-snug">{step.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <Badge variant="outline" className="text-xs border-border/40">Worksheet included</Badge>
                  <Badge variant="outline" className="text-xs border-border/40">Mark scheme included</Badge>
                </div>
              </Card>

              <Card className="p-4 border-border/40 bg-card/40">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-foreground">Differentiated worksheet</span>
                  <span className="ml-auto text-xs text-muted-foreground">3 levels</span>
                </div>
              </Card>
              <Card className="p-4 border-border/40 bg-card/40">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-foreground">Model answer + mark scheme</span>
                  <span className="ml-auto text-xs text-muted-foreground">AQA aligned</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          ANALYTICS PREVIEW
      ================================================================ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mock analytics dashboard */}
            <div className="space-y-4 order-2 lg:order-1">
              <Card className="p-6 border-border/40 bg-card/60">
                <div className="flex items-center gap-2 mb-5">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <h4 className="font-semibold text-foreground">Class Progress -- Year 11 Set 1</h4>
                </div>
                <div className="space-y-4">
                  <ProgressBar label="Reading & Comprehension" value={78} color="bg-blue-400" />
                  <ProgressBar label="Essay Writing (A01)" value={62} color="bg-primary" />
                  <ProgressBar label="Language Analysis (A02)" value={54} color="bg-purple-400" />
                  <ProgressBar label="Context & Evaluation (A03)" value={41} color="bg-amber-400" />
                  <ProgressBar label="Homework Completion" value={88} color="bg-emerald-400" />
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-red-500/20 bg-red-500/[0.04]">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-semibold text-red-400">At Risk</span>
                  </div>
                  <div className="space-y-1.5">
                    {['Liam B.', 'Amara J.', 'Tyler R.'].map((name) => (
                      <div key={name} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                        <span className="text-xs text-muted-foreground">{name}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4 border-emerald-500/20 bg-emerald-500/[0.04]">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">Most Improved</span>
                  </div>
                  <div className="space-y-1.5">
                    {['Priya M.', 'Daniel H.', 'Sofia C.'].map((name) => (
                      <div key={name} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-xs text-muted-foreground">{name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-4 border-border/40 bg-card/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-foreground">Assignment Completion</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-400">87%</span>
                </div>
                <div className="mt-3 h-2 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-emerald-400 rounded-full" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">26 of 30 students submitted on time</p>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge
                variant="outline"
                className="border-blue-500/20 bg-blue-500/[0.06] text-blue-400 text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                Analytics Dashboard
              </Badge>
              <h2 className="text-foreground mb-5">
                Know Every Student's Progress at a Glance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Stop waiting for the end-of-term report. The analytics dashboard gives
                you a live view of class and individual student performance -- so you
                can intervene early, celebrate progress, and direct your energy where
                it will make the biggest difference.
              </p>
              <ul className="space-y-3">
                {[
                  'Real-time progress tracking across all classes',
                  'At-risk students flagged automatically',
                  'Assignment completion rates per student',
                  'Skill-by-skill breakdown (A01, A02, A03)',
                  'Predicted grade trajectories',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          HOW IT SAVES TIME
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-foreground">How The English Hub Saves You Time</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              Built around the real pain points English teachers face every week.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {timeSavers.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          TESTIMONIALS
      ================================================================ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">What Teachers Are Saying</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              Joining over 1,000 English teachers who have already made the switch.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-6 border-border/40 bg-card/60 flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          FREE TEACHING RESOURCES
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-amber-500/20 bg-amber-500/[0.06] text-amber-400 text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
            >
              <Download className="w-3.5 h-3.5" />
              Free Resources
            </Badge>
            <h2 className="text-foreground">Download Free Teaching Materials</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Get a complete lesson pack for An Inspector Calls -- free, no signup required.
              See the quality of our resources.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 border-border/40 bg-card/60 mb-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">An Inspector Calls -- Free Lesson Pack</h3>
                <p className="text-xs text-muted-foreground">Everything you need for a 60-minute lesson</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Complete 60-minute lesson plan",
                "8-question worksheet with model answers",
                "Teaching guide with context, themes, key quotes",
                "Differentiated activities (support/core/stretch)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                size="lg"
                className="text-base h-12 flex-1 shadow-lg shadow-primary/20"
                render={<Link href="/for-teachers/free-resources" />}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Free Pack
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-base h-12 flex-1"
                render={<Link href="/auth/teacher-register" />}
              >
                <Eye className="w-4 h-4 mr-2" />
                See All 300+ Lessons
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          PRICING
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-foreground">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              One plan. Every feature. No hidden costs. Try it free for a month.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Individual plan */}
            <Card className="p-8 border-primary/30 bg-primary/[0.03] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
                First Month FREE
              </div>

              <div className="mb-2">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Individual Teacher</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground tracking-tight">£9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-emerald-400 font-semibold mt-1.5">or £79.99/year -- save 33%</p>
              </div>

              <Separator className="my-6 opacity-40" />

              <div className="space-y-3 mb-8">
                {[
                  'Lesson Builder',
                  'AI Essay Marking',
                  'Student Progress Analytics',
                  'Homework & Assignment Manager',
                  '300+ ready resources',
                  'AQA, Edexcel IGCSE, IAL, OCR & WJEC',
                  'Cancel any time',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full text-base h-12 shadow-lg shadow-primary/20"
                render={<Link href="/auth/register" />}
              >
                Start Free Trial
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                No credit card required for trial.
              </p>
            </Card>

            {/* School plan */}
            <Card className="p-8 border-border/40 bg-card/60 flex flex-col">
              <div className="mb-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">School / Department</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground tracking-tight">£1,500</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1.5">Site licence -- unlimited teachers</p>
              </div>

              <Separator className="my-6 opacity-40" />

              <div className="space-y-3 mb-8 flex-1">
                {[
                  'All individual plan features',
                  'Unlimited teacher accounts',
                  'Department-level analytics',
                  'Centralised resource library',
                  'Priority support',
                  'Onboarding & training session',
                  'Single invoice for finance',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="w-full text-base h-12"
                render={<Link href="/for-schools" />}
              >
                <Building2 className="w-4 h-4 mr-2" />
                See School Plans
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Custom pricing available for large schools.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          QUICK SIGNUP FORM
      ================================================================ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Free Trial
            </Badge>
            <h2 className="text-foreground">Get Started in 30 Seconds</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Create your account and start your free month today.
            </p>
          </div>

          <Card className="p-8 border-border/40">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Your name"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@school.ac.uk"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-school" className="text-sm font-medium">
                  School{' '}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Input
                  id="signup-school"
                  type="text"
                  placeholder="Your school name"
                  className="h-11"
                />
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full text-base h-12 shadow-lg shadow-primary/20 mt-2"
                render={<Link href="/auth/register" />}
              >
                Start Free Trial
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By signing up you agree to our Terms of Service and Privacy Policy.
                First month free, then £9.99/month or £79.99/year.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          FAQ
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              Everything you need to know about The English Hub for teachers.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
      ================================================================ */}
      <section className="py-24 sm:py-32 border-t border-border/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-8 gap-1.5 px-3 py-1"
          >
            <Users className="w-3.5 h-3.5" />
            Join 1,000+ Teachers
          </Badge>

          <h2 className="text-foreground mb-6">
            Ready to Reclaim Your Evenings?
          </h2>
          <p className="text-muted-foreground text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Join over 1,000 English teachers saving hours every week with The English Hub.
            Start your free month today -- no card needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Start Free Trial
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/for-schools" />}
            >
              See School Plans
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Individual plan from £9.99/month or £79.99/year. School site licence from £1,500/year.
          </p>
        </div>
      </section>

    </main>
  )
}
