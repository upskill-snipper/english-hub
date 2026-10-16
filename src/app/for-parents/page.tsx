import type { Metadata } from 'next'
import Link from 'next/link'
import { PRICING } from '@/constants/pricing'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { FAQPageJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'
import {
  BarChart3,
  Bell,
  BookOpen,
  ChevronDown,
  CheckCircle,
  Eye,
  GraduationCap,
  LineChart,
  Link2,
  Mail,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  UserPlus,
  Users,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'GCSE and IGCSE English help for parents',
  description:
    'How to help your child with GCSE or IGCSE English revision - from picking the right exam board to AI essay feedback they can trust.',
  alternates: { canonical: 'https://theenglishhub.app/for-parents' },
  openGraph: {
    title: 'GCSE and IGCSE English help for parents - The English Hub',
    description:
      'How to help your child with GCSE or IGCSE English revision - from picking the right exam board to AI essay feedback they can trust.',
    images: [
      {
        url: '/api/og?title=GCSE+and+IGCSE+English+help+for+parents+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Help your child succeed in GCSE English - without being an English teacher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCSE and IGCSE English help for parents - The English Hub',
    description:
      'How to help your child with GCSE or IGCSE English revision - from picking the right exam board to AI essay feedback they can trust.',
    images: [
      '/api/og?title=Help+your+child+succeed+in+GCSE+English&subtitle=Without+being+an+English+teacher',
    ],
  },
}

/* ───────────────────── FAQ Data ─────────────────────
 * 2026-05-01: FAQ accordion converted to native <details>/<summary>
 * so this page can stay a server component and export `metadata`.
 * FAQ list extended with parent-targeted entries (safety, tutor
 * comparison, data, progress visibility) per SEO/integrity pass.
 *
 * 16 October 2026: this page described a parent dashboard that does not
 * exist. It promised a child's "Working At Grade" and a "progress estimate",
 * modules completed, quiz scores, study time, weak areas, weak-area alerts,
 * progress charts, recommended next steps, a real-time activity feed and an
 * exam readiness score. The parent dashboard (src/app/dashboard/parent) shows
 * the children a parent is linked to, by an invite code each child gives,
 * and weekly summaries that are not produced yet; its own header lists
 * working-at grades and exam-readiness scores as deliberately absent. The
 * copy below says that, and the FAQs also lose an unsourced tutor price.
 */

const faqs = [
  {
    question: 'Is The English Hub safe for my child?',
    answer:
      "The English Hub is designed for users in the United Kingdom and Qatar and complies with the UK Children's Code (Age Appropriate Design Code) and applicable UK and Qatari data-protection law. Accounts use a date-of-birth age gate: children under 13 cannot register, and learners aged 13 to 15 must provide a parent or guardian email so consent can be confirmed before their account becomes active.",
  },
  {
    question: 'How is this different from a private tutor?',
    answer:
      'A private tutor works in scheduled sessions. The English Hub is there whenever your child wants to revise, for the price of a subscription, and our AI marks practice essays against AQA, Edexcel, OCR, WJEC Eduqas, and Cambridge IGCSE assessment objectives. It is best used alongside school teaching, not as a replacement for it.',
  },
  {
    question: "Will my child's data be sold?",
    answer:
      'No. We do not sell student data to third parties. Full detail on what we collect, why, and how long we keep it is in our privacy policy at /legal/privacy.',
  },
  {
    question: "Can I see my child's progress?",
    answer:
      "Once you link to your child, your parent dashboard shows the account you are linked to. Weekly summaries of their practice are being finalised and are not sent yet, so it does not yet show scores, time spent or weak areas. You will not see the text of your child's written answers.",
  },
  {
    question: 'What data can I see as a parent?',
    answer:
      "Today, the children you are linked to: each one's name, school and plan. Weekly summaries of their practice are being finalised and are not produced yet. You cannot see the content of any written answers your child submits.",
  },
  {
    question: 'Can my child see that I am monitoring their progress?',
    answer:
      'Yes. When you link, your child is told that a parent has been linked to their account. We believe this builds trust.',
  },
  {
    question: 'Can I link more than one child?',
    answer:
      'Yes. Each child gives you their own invite code, and every child you link appears in your parent dashboard. A child can be linked to one parent account at a time.',
  },
  {
    question: 'What if my child already has an account?',
    answer:
      'No problem. Your child can find their invite code in their account and give it to you; enter it in your parent dashboard to link. Nothing is linked without that code.',
  },
  {
    question: 'Will I see a grade for my child?',
    answer:
      'No. The parent dashboard shows no working-at grade, predicted grade or progress estimate. When your child gets AI feedback on an essay, it shows them a practice grade, labelled as AI, in their own account.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. Cancel anytime from your account settings. There are no contracts or hidden fees. You will keep access until the end of your billing period.',
  },
  {
    question: "Is my child's data safe?",
    answer:
      "The English Hub is designed for users in the United Kingdom and Qatar and complies with the UK Children's Code (Age Appropriate Design Code) and applicable UK and Qatari data-protection law. Data is encrypted in transit and at rest. We do not sell data to third parties. Parent access is strictly limited to learning progress data.",
  },
]

/* ───────────────────── Main Page ───────────────────── */

export default async function ForParentsPage() {
  const [
    heroBadge,
    heroTitle,
    heroTitleEmphasis,
    heroSub,
    ctaStartTrial,
    ctaReadingCheck,
    ctaSeeHow,
    pricingTitle,
    pricingSub,
    pricingPlanName,
    pricingPlanDesc,
    pricingPopular,
    finalCtaTitle,
    finalCtaSub,
    finalCtaDashboard,
    contactTitle,
    contactBody,
  ] = await tMany([
    'audience.parents.hero.badge',
    'audience.parents.hero.title',
    'audience.parents.hero.title_emphasis',
    'audience.parents.hero.sub',
    'audience.parents.cta.start_trial',
    'audience.parents.cta.reading_check',
    'audience.parents.cta.see_how',
    'audience.parents.pricing.title',
    'audience.parents.pricing.sub',
    'audience.parents.pricing.plan_name',
    'audience.parents.pricing.plan_desc',
    'pricing.badge.popular',
    'audience.parents.final.title',
    'audience.parents.final.sub',
    'audience.parents.final.dashboard',
    'audience.parents.contact.title',
    'audience.parents.contact.body',
  ])
  return (
    <div className="min-h-screen bg-background">
      <FAQPageJsonLd faqs={faqs} />
      {/* ━━━ HERO ━━━ */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 start-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5"
          >
            <Users className="w-4 h-4" />
            {heroBadge}
          </Badge>

          <h1 className="text-foreground">
            {heroTitle} <span className="text-primary">{heroTitleEmphasis}</span>
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {heroSub}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register?role=parent" />}
            >
              {ctaStartTrial}
            </Button>
            {/* May wrap: "Run a 20-minute reading-age check (free, no card)" is
                about 430px on one line, and on a 360px phone the hero cut it off. */}
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-auto min-h-12 max-w-full py-2.5 whitespace-normal"
              render={<Link href="/assessment/reading" />}
            >
              {ctaReadingCheck}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="#how-it-works" />}
            >
              {ctaSeeHow}
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            {PRICING.TRIAL_DAYS}-day free trial &middot; No credit card required &middot; Cancel
            anytime
          </p>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              // 2026-04-25: previous stats ("2,400+ Students Learning",
              // "94% See Grade Improvement", "13 Structured Courses")
              // were not verifiable at launch and have been withdrawn
              // per brand-voice §11.5. Replaced with launch-honest items.
              {
                icon: Users,
                color: 'text-primary bg-primary/10',
                value: 'Launch',
                label: 'Be among the first',
              },
              {
                icon: TrendingUp,
                color: 'text-emerald-400 bg-emerald-500/10',
                value: 'AO',
                label: 'Marked against the real rubric',
              },
              {
                icon: BookOpen,
                color: 'text-blue-400 bg-blue-500/10',
                value: '5',
                label: 'Exam boards covered',
              },
              {
                icon: Shield,
                color: 'text-clay-600 bg-amber-500/10',
                value: 'GDPR',
                label: 'Compliant & Secure',
              },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-border/50" />}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center',
                      stat.color,
                    )}
                  >
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

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Three simple steps to start tracking your child&rsquo;s progress.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: 1,
                icon: UserPlus,
                title: 'Your child signs up (or you sign them up)',
                desc: 'Create a student account for your child. They get full access to all courses, practice questions, flashcards, and revision tools.',
              },
              {
                step: 2,
                icon: Link2,
                title: 'Link your parent account to theirs',
                desc: "Create your own parent account and enter the invite code your child gives you from their account. Once it is entered, you're connected.",
              },
              {
                step: 3,
                icon: BarChart3,
                title: 'See who you are linked to',
                desc: 'Your parent dashboard shows the children you are linked to. Weekly summaries of their practice are being finalised and are not sent yet.',
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="p-6 flex items-start gap-5 border-border/40 hover:border-border/70 transition-colors duration-300"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ KEY FEATURES ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">What a Parent Account Does</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Honest about what you see, and careful with your child&rsquo;s data.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Eye,
                color: 'text-primary bg-primary/10',
                title: 'Link with an invite code',
                desc: 'Your child gives you the invite code from their account. Your parent dashboard then shows the children you are linked to, and you can unlink at any time.',
              },
              {
                icon: Target,
                color: 'text-emerald-400 bg-emerald-500/10',
                title: 'No invented grades',
                desc: 'The parent dashboard shows no working-at grade, predicted grade or exam-readiness score. AI feedback on your child’s essays carries a practice grade, labelled as AI.',
              },
              {
                icon: Zap,
                color: 'text-clay-600 bg-amber-500/10',
                title: 'Your say on AI feedback',
                desc: 'If your child is 13 to 15, AI feedback on their essays is switched on only with a parent’s approval, or their school’s.',
              },
              {
                icon: LineChart,
                color: 'text-blue-400 bg-blue-500/10',
                title: 'Private by default',
                desc: 'Under-18s start with streaks, personalised suggestions, reminder nudges and marketing switched off, and product analytics never record a signed-in child.',
              },
              {
                icon: BarChart3,
                color: 'text-purple-400 bg-purple-500/10',
                title: 'Their writing stays theirs',
                desc: 'You never see the text of what your child writes. Parent access is limited to the account you are linked to.',
              },
              {
                icon: Bell,
                color: 'text-red-400 bg-red-500/10',
                title: 'Weekly summaries, being finalised',
                desc: 'Weekly summaries of your child’s practice are being finalised. None are sent yet.',
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300"
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                    item.color,
                  )}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/*
        2026-05-01: Testimonial section removed during SEO/integrity pass.
        Previous quotes (Sarah T., James M., Priya K.) and the
        "Join hundreds of parents" line were not verifiable per
        brand-voice §11.5 (no fabricated social proof). Reinstate only
        when real, attributable testimonials with parent consent exist.
      */}

      {/* ━━━ PRICING ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-foreground">{pricingTitle}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">{pricingSub}</p>
          </div>

          <Card className="max-w-md mx-auto border-primary/30 bg-card/50 overflow-hidden">
            <div className="bg-primary/[0.04] px-6 py-4 border-b border-border/40">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{pricingPlanName}</h3>
                  <p className="text-sm text-muted-foreground">{pricingPlanDesc}</p>
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  <Sparkles className="w-3.5 h-3.5 me-1" />
                  {pricingPopular}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {PRICING.CURRENCY}
                    {PRICING.STUDENT_MONTHLY}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-emerald-400 font-semibold mt-1">
                  {PRICING.TRIAL_TEXT} &middot; no card required &middot; sign up in seconds
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Full access to every course, KS3 to IGCSE',
                  'Exam-style practice questions and mock papers',
                  '2,000+ revision flashcards',
                  'Parent dashboard for the children you link',
                  'Verifiable completion certificates',
                  `${PRICING.TRIAL_DAYS}-day free trial`,
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="default"
                size="lg"
                className="w-full text-base shadow-lg shadow-primary/20"
                render={<Link href="/auth/register?role=parent" />}
              >
                {ctaStartTrial}
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                No card required to start &middot; 7-day free trial when you sign up
              </p>
              <p className="text-center text-xs text-muted-foreground mt-2">
                Or save with the annual plan: {PRICING.CURRENCY}
                {PRICING.STUDENT_ANNUAL}/year ({PRICING.CURRENCY}
                {PRICING.STUDENT_ANNUAL_WITH_CODE} with code {PRICING.AFFILIATE_PROMO_CODE})
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ FAQ ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Everything you need to know about the parent dashboard.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <Card key={faq.question} className="overflow-hidden border-border/40">
                <details className="group">
                  <summary className="w-full flex items-center justify-between px-6 py-5 text-start hover:bg-accent/30 transition-colors duration-200 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-semibold text-foreground pe-4">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 group-open:rotate-180',
                      )}
                    />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ CONTACT ━━━ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-foreground mb-3">{contactTitle}</h2>
          <p className="text-muted-foreground text-body-lg mb-6">{contactBody}</p>
          <a
            href="mailto:info@Upskillenergy.com"
            className="text-primary font-semibold hover:underline text-lg"
          >
            info@Upskillenergy.com
          </a>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ FINAL CTA ━━━ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-foreground mb-4">{finalCtaTitle}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-body-lg mb-10">{finalCtaSub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register?role=parent" />}
            >
              {ctaStartTrial}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/dashboard/parent" />}
            >
              {finalCtaDashboard}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
