'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PRICING } from '@/constants/pricing'
import {
  CheckCircle,
  X,
  Sparkles,
  GraduationCap,
  BookOpen,
  Users,
  School,
  BarChart3,
  FileText,
  Brain,
  ClipboardList,
  PenTool,
  Presentation,
  Download,
  Zap,
  ChevronDown,
  ArrowRight,
  Gift,
  Target,
  Layers,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const STUDENT_FREE_FEATURES = [
  { feature: 'Exam-board aligned courses', included: true },
  { feature: 'Revision notes', included: true },
  { feature: 'Flashcards', included: true },
]

const STUDENT_PREMIUM_FEATURES = [
  { feature: 'AI Essay Marking', icon: PenTool },
  { feature: 'Mock Exams', icon: ClipboardList },
  { feature: 'Feedback Reports', icon: FileText },
  { feature: 'AI Study Recommendations', icon: Brain },
  { feature: 'Full Progress Analytics', icon: BarChart3 },
  { feature: 'Exam Technique Guides', icon: Target },
]

const TEACHER_FREE_FEATURES = [
  { feature: 'Browse resources', included: true },
  { feature: 'View student list', included: true },
]

const TEACHER_PREMIUM_FEATURES = [
  { feature: 'AI Lesson Plans', icon: Layers },
  { feature: 'AI Essay Marking', icon: PenTool },
  { feature: 'Worksheet Builder', icon: FileText },
  { feature: 'Mark Scheme Generator', icon: ClipboardList },
  { feature: 'PowerPoint/Word Export', icon: Download },
  { feature: 'Class Analytics', icon: BarChart3 },
  { feature: 'Student Reports', icon: Users },
  { feature: 'Department Benchmarking', icon: Presentation },
]

const SCHOOL_RECEIVES = [
  'Full platform access for every teacher and student',
  'Early access to new features before public release',
  'Direct product input — your feedback shapes the roadmap',
  'Priority onboarding with dedicated support',
  'Locked preferential pricing for 2\u20133 years',
  'Founding partner recognition on the platform',
]

const FAQ_ITEMS = [
  {
    q: 'What do I get for free?',
    a: 'Every account includes full access to exam-board aligned courses, revision notes, and flashcards at no cost. You also get 3 free uses of every premium feature so you can see the value before committing.',
  },
  {
    q: 'Do I need a credit card to sign up?',
    a: 'No. You can create a free account and start using the platform immediately. No card is required until you choose to upgrade.',
  },
  {
    q: 'How does the first month free work?',
    a: 'When you subscribe to a monthly plan, your first month is completely free. You can cancel at any time during that first month and pay nothing.',
  },
  {
    q: 'Can I switch between monthly and annual billing?',
    a: 'Yes. You can change your billing cycle at any time from your account settings. If you switch to annual, the remaining balance on your monthly plan is pro-rated.',
  },
  {
    q: 'What exam boards do you support?',
    a: 'We support AQA, Edexcel, OCR, WJEC Eduqas, and Cambridge IGCSE/CAIE. All content is specifically aligned to your chosen board.',
  },
  {
    q: 'Is the Founding Schools Programme a free trial?',
    a: 'No. It is a strategic partnership limited to 10 schools. Pricing ranges from £3,000 to £7,000 per year depending on department size. Schools receive locked preferential pricing, early feature access, and direct product input.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Both monthly and annual plans can be cancelled from your account settings. There are no contracts or cancellation fees.',
  },
]

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
}: {
  badge?: string
  badgeIcon?: React.ElementType
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center mb-14">
      {badge && (
        <Badge
          variant="outline"
          className="bg-primary/10 border-primary/25 text-primary text-sm font-bold mb-6 gap-2 px-4 py-1.5"
        >
          {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function FeatureRow({
  feature,
  included,
  free,
}: {
  feature: string
  included: boolean
  free: boolean
}) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
      {included ? (
        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
      ) : (
        <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
      )}
      <span className={included ? 'text-foreground/90' : 'text-muted-foreground/60'}>
        {feature}
      </span>
      {free && included && (
        <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-emerald-500/30 text-emerald-400 ml-auto">
          Free
        </Badge>
      )}
    </li>
  )
}

function PremiumFeatureRow({
  feature,
  icon: Icon,
}: {
  feature: string
  icon: React.ElementType
}) {
  return (
    <li className="flex items-center gap-2.5 text-sm">
      <div className="w-4 h-4 flex items-center justify-center shrink-0">
        <Icon className="w-3.5 h-3.5 text-primary" />
      </div>
      <span className="text-foreground/90">{feature}</span>
      <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-primary/30 text-primary/80 ml-auto whitespace-nowrap">
        3 free
      </Badge>
    </li>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="font-semibold text-foreground text-sm sm:text-base pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed -mt-1">{a}</p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  const studentSavings = Math.round(
    (1 - PRICING.STUDENT_ANNUAL / (PRICING.STUDENT_MONTHLY * 12)) * 100
  )
  const teacherSavings = Math.round(
    (1 - PRICING.TEACHER_ANNUAL / (PRICING.TEACHER_MONTHLY * 12)) * 100
  )

  return (
    <main className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-[60%] right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* ───────── Hero ───────── */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            badge="Pricing"
            badgeIcon={Sparkles}
            title="The AI English platform trusted by schools, teachers, and students."
            subtitle="Exam-board aligned revision, AI marking, lesson planning, and analytics — built for results."
          />
        </div>
      </section>

      {/* ───────── Free Access Banner ───────── */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-emerald-400 text-sm uppercase tracking-wider">
                Start free
              </span>
            </div>
            <p className="text-foreground font-semibold text-lg sm:text-xl mb-2">
              Start free. See results before you pay.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6">
              Every account includes {PRICING.FREE_USES_PER_FEATURE} free uses of every premium
              feature. No card required.
            </p>
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Create Free Account
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── Student + Teacher Cards ───────── */}
      <section className="relative pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Student Card */}
            <Card className="relative flex flex-col p-0 border-primary/30 overflow-visible">
              {/* Gradient top edge */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 shadow-lg shadow-primary/25 whitespace-nowrap">
                <GraduationCap className="w-3.5 h-3.5 mr-1" />
                Student Plan
              </Badge>

              <div className="p-8 pb-0">
                <h3 className="text-lg font-bold tracking-tight text-foreground mt-2">
                  For Students
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-5">
                  Everything you need to ace your exams.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-4 flex-wrap mb-1">
                  <div>
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {PRICING.CURRENCY}{PRICING.STUDENT_MONTHLY}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">/month</span>
                  </div>
                  <span className="text-muted-foreground text-sm">or</span>
                  <div>
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {PRICING.CURRENCY}{PRICING.STUDENT_ANNUAL}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">/year</span>
                    <Badge
                      variant="outline"
                      className="ml-2 bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-xs font-semibold"
                    >
                      Save {studentSavings}%
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-emerald-400 font-semibold mb-6">
                  First month FREE on the monthly plan
                </p>

                {/* Free features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Always free
                  </p>
                  <ul className="space-y-2.5">
                    {STUDENT_FREE_FEATURES.map((f) => (
                      <FeatureRow
                        key={f.feature}
                        feature={f.feature}
                        included={f.included}
                        free
                      />
                    ))}
                  </ul>
                </div>

                {/* Premium features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Premium
                    <span className="text-primary/70 normal-case ml-1">
                      — {PRICING.FREE_USES_PER_FEATURE} free, then unlimited
                    </span>
                  </p>
                  <ul className="space-y-2.5">
                    {STUDENT_PREMIUM_FEATURES.map((f) => (
                      <PremiumFeatureRow
                        key={f.feature}
                        feature={f.feature}
                        icon={f.icon}
                      />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto p-8 pt-0">
                <Button
                  variant="default"
                  className="w-full shadow-lg shadow-primary/20"
                  size="lg"
                  render={<Link href="/auth/register" />}
                >
                  Start Free
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            {/* Teacher Card */}
            <Card className="relative flex flex-col p-0 border-purple-500/30 overflow-visible">
              {/* Gradient top edge */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

              <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 shadow-lg shadow-purple-500/25 whitespace-nowrap">
                <BookOpen className="w-3.5 h-3.5 mr-1" />
                Teacher Plan
              </Badge>

              <div className="p-8 pb-0">
                <h3 className="text-lg font-bold tracking-tight text-foreground mt-2">
                  For Teachers
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-5">
                  AI-powered tools to save hours every week.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-4 flex-wrap mb-1">
                  <div>
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {PRICING.CURRENCY}{PRICING.TEACHER_MONTHLY}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">/month</span>
                  </div>
                  <span className="text-muted-foreground text-sm">or</span>
                  <div>
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {PRICING.CURRENCY}{PRICING.TEACHER_ANNUAL}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">/year</span>
                    <Badge
                      variant="outline"
                      className="ml-2 bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-xs font-semibold"
                    >
                      Save {teacherSavings}%
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-emerald-400 font-semibold mb-6">
                  First month FREE on the monthly plan
                </p>

                {/* Free features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Always free
                  </p>
                  <ul className="space-y-2.5">
                    {TEACHER_FREE_FEATURES.map((f) => (
                      <FeatureRow
                        key={f.feature}
                        feature={f.feature}
                        included={f.included}
                        free
                      />
                    ))}
                  </ul>
                </div>

                {/* Premium features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Premium
                    <span className="text-purple-400/70 normal-case ml-1">
                      — {PRICING.FREE_USES_PER_FEATURE} free, then unlimited
                    </span>
                  </p>
                  <ul className="space-y-2.5">
                    {TEACHER_PREMIUM_FEATURES.map((f) => (
                      <PremiumFeatureRow
                        key={f.feature}
                        feature={f.feature}
                        icon={f.icon}
                      />
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto p-8 pt-0">
                <Button
                  variant="default"
                  className="w-full bg-purple-500 hover:bg-purple-500/85 shadow-lg shadow-purple-500/20 text-white"
                  size="lg"
                  render={<Link href="/auth/register" />}
                >
                  Start Free
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ───────── Schools Section ───────── */}
      <section className="relative py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="bg-amber-500/10 border-amber-500/25 text-amber-400 text-sm font-bold mb-6 gap-2 px-4 py-1.5"
            >
              <School className="w-4 h-4" />
              Limited to 10 Schools
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
              Founding Schools Programme — 2026
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              This is not a free trial. It is a strategic partnership with a limited number of
              schools who will shape the future of the platform.
            </p>
          </div>

          <Card className="relative border-amber-500/30 bg-amber-500/[0.03] p-0 overflow-visible">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

            <div className="p-8 sm:p-10">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                    {PRICING.CURRENCY}
                    {PRICING.FOUNDER_SCHOOL_MIN.toLocaleString()}
                    &ndash;{PRICING.CURRENCY}
                    {PRICING.FOUNDER_SCHOOL_MAX.toLocaleString()}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  One-time partnership fee depending on department size
                </p>
              </div>

              {/* What schools receive */}
              <div className="max-w-lg mx-auto mb-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4 text-center">
                  What your school receives
                </p>
                <ul className="space-y-3">
                  {SCHOOL_RECEIVES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing note */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-center mb-8">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-amber-400">
                    This programme closes when 10 schools are onboarded.
                  </span>{' '}
                  Once all places are filled, entry will not reopen at this pricing.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-500/85 text-white shadow-lg shadow-amber-500/20 text-base px-10 h-12"
                  render={<Link href="/contact" />}
                >
                  Book a 20-Minute Call
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ───────── How Free Access Works ───────── */}
      <section className="relative py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            title="How free access works"
            subtitle="Get started in three simple steps. No commitment, no card."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                icon: Users,
                color: 'text-primary bg-primary/10 border-primary/20',
                title: 'Register',
                desc: 'Create your free account in under a minute. Choose your exam board and role.',
              },
              {
                step: '2',
                icon: Sparkles,
                color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
                title: 'Explore',
                desc: `Every premium feature includes ${PRICING.FREE_USES_PER_FEATURE} free uses. Try AI marking, mock exams, lesson plans, and more.`,
              },
              {
                step: '3',
                icon: Zap,
                color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
                title: 'Upgrade',
                desc: 'When you\'re ready, subscribe and get your first month free on any monthly plan.',
              },
            ].map((item) => (
              <Card key={item.step} className="p-6 text-center border-border/40">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.color}`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Connecting arrows (desktop only) */}
          <div className="hidden md:flex justify-center mt-8">
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Create Free Account
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="md:hidden flex justify-center mt-8">
            <Button
              variant="default"
              size="lg"
              className="w-full max-w-sm text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Create Free Account
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="relative py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading title="Frequently asked questions" />

          <div className="rounded-2xl border border-border/60 bg-card px-6 sm:px-8">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 max-w-md mx-auto">
            Still have questions?{' '}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Get in touch
            </Link>{' '}
            and we will get back to you within 24 hours.
          </p>
        </div>
      </section>
    </main>
  )
}
