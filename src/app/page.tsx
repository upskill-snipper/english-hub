'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useBoardStore } from '@/store/board-store'
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

const ExamGuideSection = dynamic(() => import('@/components/home/ExamGuideSection'), {
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

const examTips: Record<string, string[]> = {
  AQA: [
    'AQA examiners reward "conceptualised" responses — thread one argument through your entire answer.',
    'AQA Paper 1 Q5: spend 5 minutes planning your narrative arc before writing a single word.',
    'For AQA Literature, always embed context — don\'t bolt it on as a separate paragraph.',
  ],
  Edexcel: [
    'Edexcel Paper 1: use short, punchy quotes and analyse individual word choices for top marks.',
    'For Edexcel Language, synthesis questions reward comparison — don\'t just summarise each text separately.',
    'Edexcel Literature: structure your essay around the writer\'s methods, not the plot.',
  ],
  OCR: [
    'OCR Component 01: practise summarising two texts in under 15 minutes — timing is everything.',
    'OCR examiners love to see evaluation — don\'t just identify techniques, judge their effectiveness.',
    'For OCR creative writing, a cyclical structure (ending where you began) impresses examiners.',
  ],
  WJEC: [
    'WJEC Component 1: spend equal time on reading and writing — both carry 40 marks.',
    'For WJEC Eduqas, always use the bullet points in the question as a structure for your answer.',
    'WJEC examiners value "apt and sustained" responses — stay focused on the question throughout.',
  ],
  KS3: [
    'Start building your quotation bank now — it will give you a head start at GCSE.',
    'Practise writing in paragraphs using PEEL (Point, Evidence, Explain, Link) from Year 7.',
    'Read widely beyond your set texts — examiners at GCSE reward students who show broader reading.',
  ],
}

const defaultTips = [
  'Top Tip: Always plan before you write — even 3 minutes of planning can boost your grade.',
  'Examiners reward precise vocabulary — swap "good" for "compelling", "bad" for "detrimental".',
  'Re-read the question after every paragraph to make sure you\'re still answering it.',
]

function QuickTipsBanner({ selectedBoard }: { selectedBoard: string | null }) {
  const [tipIndex, setTipIndex] = useState(0)
  const tips = (selectedBoard && examTips[selectedBoard]) || defaultTips

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

/* ───────────────────── Main Page ───────────────────── */

export default function Home() {
  const selectedBoard = useBoardStore((s) => s.selectedBoard)

  return (
    <main className="min-h-screen bg-background">
      {/* ━━━ HERO (static — critical for LCP) ━━━ */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge variant="outline" className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5">
            <Sparkles className="w-4 h-4" />
            {selectedBoard === 'KS3'
              ? 'New: KS3 Reading, Writing & Grammar Courses'
              : selectedBoard === 'AQA'
              ? 'New: AQA GCSE Course Content Updated'
              : selectedBoard === 'OCR'
              ? 'New: OCR GCSE Practice Questions & Revision'
              : selectedBoard === 'WJEC'
              ? 'New: WJEC Eduqas GCSE Practice Questions & Revision'
              : 'New: Edexcel IGCSE English Language A & B — Now Live'}
          </Badge>

          <h1 className="text-foreground">
            Master English.
            <br />
            <span className="text-primary">Ace Your Exams.</span>
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Board-specific courses, AI-powered essay feedback, and exam preparation tools built for students and teachers. Covering AQA, Edexcel, OCR, WJEC, and KS3 — everything you need in one place.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
              Start Free Trial
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/courses" />}>
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR (static — above the fold) ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-center text-muted-foreground text-sm font-medium mb-7">
            Trusted by{' '}
            <span className="text-foreground font-bold">2,400+</span>{' '}
            students across the UK
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              { icon: FileText, color: 'text-orange-400 bg-orange-500/10', value: '130+', label: 'Mock Exam Papers' },
              { icon: Sparkles, color: 'text-cyan-400 bg-cyan-500/10', value: 'AI', label: 'Essay Feedback' },
              { icon: BookOpen, color: 'text-primary bg-primary/10', value: '470+', label: 'Structured Courses' },
              { icon: Layers, color: 'text-purple-400 bg-purple-500/10', value: '2,000+', label: 'Flashcards' },
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
      <QuickTipsBanner selectedBoard={selectedBoard} />

      {/* ━━━ Below-the-fold sections (dynamically imported) ━━━ */}

      <AudienceSection />

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

      <ExamGuideSection />

      <Separator className="opacity-40" />

      <PricingSection />

      <Separator className="opacity-40" />

      <TestimonialsSection />

      <Separator className="opacity-40" />

      <FAQSection />

      <Separator className="opacity-40" />

      <CTABannerSection />

      {/* ━━━ FOOTER (static — always needed) ━━━ */}
      <footer className="border-t border-border/40 bg-card/20">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo */}
            <div>
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <BookOpen className="w-5 h-5 text-primary" />
                The English Hub
              </Link>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                Expert English courses for KS3, GCSE, IGCSE, and all major exam boards.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {[
                { label: 'Courses', href: '/courses' },
                { label: 'Practice', href: '/practice' },
                { label: 'Revision', href: '/revision' },
                { label: 'Exam Guide', href: '/exam-guide' },
                { label: 'For Teachers', href: '/for-teachers' },
                { label: 'For Schools', href: '/for-schools' },
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Log in', href: '/auth/login' },
                { label: 'Register', href: '/auth/register' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Separator className="mt-10 mb-6 opacity-40" />

          <div className="text-center text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} The English Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
