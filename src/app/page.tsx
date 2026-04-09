'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  BookOpen,
  Sparkles,
  FileText,
  Layers,
  Award,
  Lightbulb,
  School,
  Users,
  BarChart3,
  Settings2,
  GraduationCap,
  BrainCircuit,
  LibraryBig,
  CheckCircle,
  Target,
  TrendingUp,
} from 'lucide-react'
import SectionSkeleton from '@/components/home/SectionSkeleton'

/* ───────────────────── Dynamic imports for below-the-fold sections ───────────────────── */

const AudienceSection = dynamic(() => import('@/components/home/AudienceSection'), {
  loading: () => <SectionSkeleton />,
})

const WhatsInsideSection = dynamic(() => import('@/components/home/WhatsInsideSection'), {
  loading: () => <SectionSkeleton />,
})

const MockExamsSection = dynamic(() => import('@/components/home/MockExamsSection'), {
  loading: () => <SectionSkeleton />,
})

const HowItWorksSection = dynamic(() => import('@/components/home/HowItWorksSection'), {
  loading: () => <SectionSkeleton />,
})

const PathwayCardsSection = dynamic(() => import('@/components/home/PathwayCardsSection'), {
  loading: () => <SectionSkeleton />,
})

const FeatureHighlightsSection = dynamic(() => import('@/components/home/FeatureHighlightsSection'), {
  loading: () => <SectionSkeleton />,
})

const CourseGridSection = dynamic(() => import('@/components/home/CourseGridSection'), {
  loading: () => <SectionSkeleton />,
})

const PricingSection = dynamic(() => import('@/components/home/PricingSection'), {
  loading: () => <SectionSkeleton />,
})

const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), {
  loading: () => <SectionSkeleton />,
})

const FAQSection = dynamic(() => import('@/components/home/FAQSection'), {
  loading: () => <SectionSkeleton />,
})

const CTABannerSection = dynamic(() => import('@/components/home/CTABannerSection'), {
  loading: () => <SectionSkeleton />,
})

/* ───────────────────── Quick Tips Banner (above the fold) ───────────────────── */

const examTips = [
  'Always plan before you write — even 3 minutes of planning can boost your grade by a full band.',
  'Examiners reward precise vocabulary — swap "good" for "compelling", "bad" for "detrimental".',
  'Re-read the question after every paragraph to make sure you\'re still answering it.',
  'Embed context naturally — don\'t bolt it on as a separate paragraph. Weave it into your analysis.',
  'Use short, punchy quotes and analyse individual word choices for top marks in any exam board.',
  'For creative writing, a cyclical structure (ending where you began) impresses examiners.',
]

function QuickTipsBanner() {
  const [tipIndex, setTipIndex] = useState(0)
  const tips = examTips

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length)
    }, 8000)

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) clearInterval(interval)
    }
    motionQuery.addEventListener('change', handleChange)

    return () => {
      clearInterval(interval)
      motionQuery.removeEventListener('change', handleChange)
    }
  }, [tips.length])

  return (
    <section className="py-5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-primary/20 bg-primary/[0.04]">
          <Lightbulb className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed transition-opacity duration-500">
            <span className="font-semibold text-primary">Top Tip:</span>{' '}
            {tips[tipIndex]}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── For Schools Section ───────────────────── */

function ForSchoolsSection() {
  const schoolBenefits = [
    {
      icon: Users,
      color: 'text-cyan-400 bg-cyan-500/10',
      title: 'All Students & Teachers Covered',
      description: 'One subscription gives every student and teacher at your school unlimited access to all courses, AI tools, and resources.',
    },
    {
      icon: BarChart3,
      color: 'text-purple-400 bg-purple-500/10',
      title: 'Department Analytics',
      description: 'Track progress across classes, identify at-risk students early, and measure the impact of your teaching with real-time dashboards.',
    },
    {
      icon: Settings2,
      color: 'text-amber-400 bg-amber-500/10',
      title: 'Bulk User Management',
      description: 'Onboard hundreds of students in minutes via CSV upload or single sign-on. Manage classes, set assignments, and control access centrally.',
    },
  ]

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400 text-sm font-semibold mb-6 gap-2 px-4 py-1.5">
            <School className="w-4 h-4" />
            For Schools
          </Badge>
          <h2 className="text-foreground mb-5">A Whole-School English Platform</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Give every student and teacher at your school full access.{' '}
            <span className="text-foreground font-semibold">Book a call</span>{' '}
            for custom pricing — or register FREE with code{' '}
            <span className="text-cyan-400 font-bold tracking-wide">FOUNDER</span>
          </p>
        </div>

        {/* Benefit columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {schoolBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-border/50 bg-card/40 p-6 flex flex-col gap-4"
            >
              <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center shrink-0', benefit.color)}>
                <benefit.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{benefit.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Founding Schools Programme box */}
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/[0.06] px-7 py-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
            <Award className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-base mb-0.5">
              Founding Schools Programme &mdash; 2026. Limited to 10 schools.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Heavily discounted pricing, early features, direct product input, and locked
              preferential rates for 2-3 years. Book a call to discuss.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="default" size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20" render={<Link href="/contact" />}>
            Book a Call
          </Button>
          <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/for-schools" />}>
            Learn More
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 h-12 gap-2" render={<Link href="/demo/school" />}>
            <Sparkles className="w-4 h-4" />
            Try Interactive Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── For Teachers Section ───────────────────── */

function ForTeachersSection() {
  const teacherBenefits = [
    {
      icon: BrainCircuit,
      color: 'text-primary bg-primary/10',
      title: 'AI Lesson Builder',
      description: 'Generate board-aligned lesson plans, differentiated activities, and exam-ready tasks in seconds. Adapted to AQA, Edexcel, OCR, WJEC, and KS3.',
    },
    {
      icon: BarChart3,
      color: 'text-purple-400 bg-purple-500/10',
      title: 'Student Analytics',
      description: 'See exactly where each student is struggling. Track essay scores over time, monitor completion rates, and export reports for parents\' evenings.',
    },
    {
      icon: LibraryBig,
      color: 'text-amber-400 bg-amber-500/10',
      title: '300+ Resources',
      description: 'Ready-to-use worksheets, model essays, mark schemes, and revision guides — all mapped to the latest specifications. No prep time required.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-card/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 gap-2 px-4 py-1.5">
            <GraduationCap className="w-4 h-4" />
            For Teachers
          </Badge>
          <h2 className="text-foreground mb-5">Built for English Teachers</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Save <span className="text-foreground font-semibold">5+ hours per week</span> with AI lesson planning, analytics, and 300+ ready resources
          </p>
        </div>

        {/* Benefit columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {teacherBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-border/50 bg-card/40 p-6 flex flex-col gap-4"
            >
              <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center shrink-0', benefit.color)}>
                <benefit.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{benefit.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="default" size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
            Start Free Trial
          </Button>
          <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/for-teachers" />}>
            Teacher Plans
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 h-12 gap-2" render={<Link href="/demo/teacher" />}>
            <Sparkles className="w-4 h-4" />
            Try Teacher Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Main Page ───────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* ━━━ HERO (static — critical for LCP) ━━━ */}
      <section className="relative overflow-x-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge variant="outline" className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5">
            <Sparkles className="w-4 h-4" />
            First Month Free — No Card Required
          </Badge>

          <h1 className="text-foreground">
            Master English.
            <br />
            <span className="text-primary">Ace Your Exams.</span>
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The all-in-one GCSE English platform. Structured courses, AI essay feedback, mock exams, and revision tools — all mapped to your exam board. AQA, Edexcel, OCR, WJEC, IGCSE & KS3.
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Written by examiners</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> GCSE 1–9 grading</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Cancel anytime</span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
              Start Free — No Card Needed
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/courses" />}>
              Browse Courses
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 h-12 gap-2" render={<Link href="/demo/school" />}>
              <Sparkles className="w-4 h-4" />
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR (static — above the fold) ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-center text-muted-foreground text-sm font-medium mb-7">
            Trusted by students, teachers, and schools across the UK
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {[
              { icon: BookOpen, color: 'text-primary bg-primary/10', value: '470+', label: 'Structured Lessons' },
              { icon: FileText, color: 'text-orange-400 bg-orange-500/10', value: '130+', label: 'Mock Papers' },
              { icon: Sparkles, color: 'text-cyan-400 bg-cyan-500/10', value: 'AI', label: 'Essay Feedback' },
              { icon: Layers, color: 'text-purple-400 bg-purple-500/10', value: '2,000+', label: 'Flashcards' },
              { icon: Target, color: 'text-emerald-400 bg-emerald-500/10', value: '1–9', label: 'Grade Tracking' },
              { icon: Award, color: 'text-amber-400 bg-amber-500/10', value: '5', label: 'Exam Boards' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0', stat.color)}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ QUICK TIPS BANNER (static — near fold) ━━━ */}
      <QuickTipsBanner />

      {/* ━━━ Below-the-fold sections (dynamically imported) ━━━ */}

      <AudienceSection />

      <Separator className="opacity-40" />

      <ForSchoolsSection />

      <Separator className="opacity-40" />

      <ForTeachersSection />

      <Separator className="opacity-40" />

      <WhatsInsideSection />

      <Separator className="opacity-40" />

      <MockExamsSection />

      <Separator className="opacity-40" />

      <HowItWorksSection />

      <Separator className="opacity-40" />

      <PathwayCardsSection />

      <Separator className="opacity-40" />

      <FeatureHighlightsSection />

      <Separator className="opacity-40" />

      <CourseGridSection />

      <Separator className="opacity-40" />

      <PricingSection />

      <Separator className="opacity-40" />

      <TestimonialsSection />

      <Separator className="opacity-40" />

      <FAQSection />

      <Separator className="opacity-40" />

      <CTABannerSection />
    </main>
  )
}
