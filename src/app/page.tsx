import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { getServerBoard } from '@/lib/board/get-server-board'
import {
  Sparkles,
  Award,
  School,
  Users,
  BarChart3,
  Settings2,
  GraduationCap,
  BrainCircuit,
  LibraryBig,
} from 'lucide-react'
import SectionSkeleton from '@/components/home/SectionSkeleton'
import MarketingHero from '@/components/home/MarketingHero'
import BoardDashboardHero from '@/components/home/BoardDashboardHero'

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

/* ───────────────────── For Schools Section (RSC) ───────────────────── */

function ForSchoolsSection() {
  const schoolBenefits = [
    {
      icon: Users,
      color: 'text-cyan-400 bg-cyan-500/10',
      title: 'All Students & Teachers Covered',
      description:
        'One subscription gives every student and teacher at your school unlimited access to all courses, AI tools, and resources.',
    },
    {
      icon: BarChart3,
      color: 'text-purple-400 bg-purple-500/10',
      title: 'Department Analytics',
      description:
        'Track progress across classes, identify at-risk students early, and measure the impact of your teaching with real-time dashboards.',
    },
    {
      icon: Settings2,
      color: 'text-amber-400 bg-amber-500/10',
      title: 'Bulk User Management',
      description:
        'Onboard hundreds of students in minutes via CSV upload or single sign-on. Manage classes, set assignments, and control access centrally.',
    },
  ]

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-400 text-sm font-semibold mb-6 gap-2 px-4 py-1.5"
          >
            <School className="w-4 h-4" />
            For Schools
          </Badge>
          <h2 className="text-foreground mb-5">A Whole-School English Platform</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Give every student and teacher at your school full access.{' '}
            <span className="text-foreground font-semibold">Book a call</span> for custom pricing — or register FREE
            with code <span className="text-cyan-400 font-bold tracking-wide">FOUNDER</span>
          </p>
        </div>

        {/* Benefit columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {schoolBenefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-border/50 bg-card/40 p-6 flex flex-col gap-4">
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
              Heavily discounted pricing, early features, direct product input, and locked preferential rates for 2-3
              years. Book a call to discuss.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="text-base px-8 h-12 shadow-lg shadow-primary/20"
            render={<Link href="/contact" />}
          >
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

/* ───────────────────── For Teachers Section (RSC) ───────────────────── */

function ForTeachersSection() {
  const teacherBenefits = [
    {
      icon: BrainCircuit,
      color: 'text-primary bg-primary/10',
      title: 'AI Lesson Builder',
      description:
        'Generate board-aligned lesson plans, differentiated activities, and exam-ready tasks in seconds. Adapted to AQA, Edexcel, OCR, WJEC, and KS3.',
    },
    {
      icon: BarChart3,
      color: 'text-purple-400 bg-purple-500/10',
      title: 'Student Analytics',
      description:
        "See exactly where each student is struggling. Track essay scores over time, monitor completion rates, and export reports for parents' evenings.",
    },
    {
      icon: LibraryBig,
      color: 'text-amber-400 bg-amber-500/10',
      title: '300+ Resources',
      description:
        'Ready-to-use worksheets, model essays, mark schemes, and revision guides — all mapped to the latest specifications. No prep time required.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-card/20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 gap-2 px-4 py-1.5"
          >
            <GraduationCap className="w-4 h-4" />
            For Teachers
          </Badge>
          <h2 className="text-foreground mb-5">Built for English Teachers</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Save <span className="text-foreground font-semibold">5+ hours per week</span> with AI lesson planning,
            analytics, and 300+ ready resources
          </p>
        </div>

        {/* Benefit columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {teacherBenefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-border/50 bg-card/40 p-6 flex flex-col gap-4">
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
          <Button
            variant="default"
            size="lg"
            className="text-base px-8 h-12 shadow-lg shadow-primary/20"
            render={<Link href="/auth/register" />}
          >
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

export default async function Home() {
  const board = await getServerBoard()

  return (
    <main className="min-h-screen bg-background">
      {/* ━━━ HERO — board-aware dashboard when set, marketing variant otherwise ━━━ */}
      {board ? <BoardDashboardHero board={board} /> : <MarketingHero />}

      {/* ━━━ Below-the-fold sections (dynamically imported) ━━━ */}

      <AudienceSection />

      <Separator className="opacity-40" />

      <ForSchoolsSection />

      <Separator className="opacity-40" />

      <ForTeachersSection />

      <Separator className="opacity-40" />

      <WhatsInsideSection board={board} />

      <Separator className="opacity-40" />

      <MockExamsSection board={board} />

      <Separator className="opacity-40" />

      <HowItWorksSection />

      <Separator className="opacity-40" />

      <PathwayCardsSection />

      <Separator className="opacity-40" />

      <FeatureHighlightsSection />

      <Separator className="opacity-40" />

      <CourseGridSection board={board} />

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
