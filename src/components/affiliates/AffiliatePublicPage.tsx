'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  Heart,
  PoundSterling,
  Rocket,
  ClipboardCheck,
  UserCheck,
  Share2,
  TrendingUp,
  BarChart3,
  Link2,
  Headphones,
  FileText,
  GraduationCap,
  Clock,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Users,
  Award,
} from 'lucide-react'

interface AffiliatePublicPageProps {
  applicationStatus?: string
  isLoggedIn?: boolean
}

export default function AffiliatePublicPage({
  applicationStatus,
  isLoggedIn,
}: AffiliatePublicPageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection applicationStatus={applicationStatus} isLoggedIn={isLoggedIn} />
      {applicationStatus && <StatusBanner status={applicationStatus} />}
      <WhyPartnerSection />
      <HowItWorksSection />
      <CommissionSection />
      <ImpactSection />
      <WhatYouGetSection />
      <FAQSection />
      <ApplicationSection isLoggedIn={isLoggedIn} />
      <ProgramBasicsSection />
      <BottomCTA isLoggedIn={isLoggedIn} applicationStatus={applicationStatus} />
    </div>
  )
}

/* ─── Hero ──────────────────────────────────────────────────── */

function HeroSection({
  applicationStatus,
  isLoggedIn,
}: {
  applicationStatus?: string
  isLoggedIn?: boolean
}) {
  return (
    <section className="relative px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          Partnership Programme
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          Partner with <span className="text-primary">The English Hub</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Help students achieve their potential. Earn while making a real difference in education.
        </p>

        {!applicationStatus && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base px-10 h-13 shadow-lg shadow-primary/20"
              render={<a href="#apply" />}
            >
              Get your code — instant
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-13"
              render={<a href="#how-it-works" />}
            >
              Learn More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Status Banner ─────────────────────────────────────────── */

function StatusBanner({ status }: { status: string }) {
  const config = {
    pending: {
      icon: Clock,
      title: 'Legacy application on file',
      message:
        'You have an older application on the legacy review queue. The programme is now self-serve — pick a code below and your account will activate instantly, overriding the old application.',
      color: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    },
    agreement_sent: {
      icon: FileText,
      title: 'Agreement Ready to Sign',
      message:
        'Your application has been approved! Please check your email for the partnership agreement to sign.',
      color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    },
    agreement_signed: {
      icon: CheckCircle2,
      title: 'Setting Up Your Account',
      message:
        "Your agreement is signed. We're setting up your affiliate account — your dashboard will be ready shortly.",
      color: 'bg-primary/10 border-primary/30 text-primary',
    },
  }

  const c = config[status as keyof typeof config]
  if (!c) return null
  const Icon = c.icon

  return (
    <section className="px-4 pb-8">
      <div className="max-w-3xl mx-auto">
        <div className={`rounded-2xl border p-6 sm:p-8 text-center ${c.color}`}>
          <Icon className="w-8 h-8 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-foreground mb-2">{c.title}</h2>
          <p className="text-muted-foreground">{c.message}</p>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Partner ────────────────────────────────────────────── */

function WhyPartnerSection() {
  const reasons = [
    {
      icon: Heart,
      color: 'text-rose-400 bg-rose-500/10',
      title: 'Make a Real Difference',
      description:
        'Students improve their grades and build genuine confidence. Teachers save hours every week. Your recommendations change outcomes.',
    },
    {
      icon: PoundSterling,
      color: 'text-emerald-400 bg-emerald-500/10',
      title: 'Earn Competitive Commission',
      description:
        'Receive commission on every subscription you refer. Recurring value for a recommendation you believe in.',
    },
    {
      icon: Rocket,
      color: 'text-primary bg-primary/10',
      title: 'Premium Product, Easy Sell',
      description:
        'An AI-powered English revision platform that students genuinely love. The product speaks for itself — you just open the door.',
    },
  ]

  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This is more than an affiliate programme — it is a partnership built on shared impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <Card
              key={r.title}
              className="text-center p-0 border-border/40 hover:border-border/80 transition-colors"
            >
              <CardContent className="pt-8 pb-8 px-6">
                <div
                  className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center mx-auto mb-5`}
                >
                  <r.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ───────────────────────────────────────────── */

function HowItWorksSection() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Sign in',
      description: 'Quick sign-in so your earnings tie to your account. 30 seconds.',
    },
    {
      icon: UserCheck,
      title: 'Get your code',
      description: 'Pick a code (or we generate one). Instant activation — no review, no wait.',
    },
    {
      icon: Share2,
      title: 'Share your link',
      description: 'Copy the ready-made post templates, swap in your code, include #ad, post away.',
    },
    {
      icon: TrendingUp,
      title: 'Earn Commission',
      description:
        'You earn commission on every Student Annual subscription bought via your code or link. Tracked in real-time on your dashboard.',
    },
  ]

  return (
    <section id="how-it-works" className="px-4 py-20 sm:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From application to earning — a simple, transparent process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              {/* Step number circle */}
              <div className="relative mx-auto mb-5">
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mx-auto relative z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-20">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Annual-only commission rule — most important fact for new affiliates. */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-center">
          <p className="text-sm font-semibold text-foreground">
            You earn commission on Student Annual subscriptions only.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Your code unlocks the £20/year Student Annual rate (normally £29.99) for your followers.
            Student Monthly, Teacher Monthly and Teacher Annual plans are not discounted by your
            code and don&apos;t earn commission.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Commission Structure ───────────────────────────────────── */

function CommissionSection() {
  const tiers = [
    { plan: 'Student Monthly', commission: '£5.00' },
    { plan: 'Student Annual', commission: '£15.00' },
    { plan: 'Teacher Monthly', commission: '£7.00' },
    { plan: 'Teacher Annual', commission: '£20.00' },
  ]

  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Commission Structure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent, competitive rates for every referral.
          </p>
        </div>

        <Card className="overflow-hidden p-0 border-border/40">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/40">
                  <th className="text-left py-4 px-6 font-semibold text-foreground">
                    Subscription Plan
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-foreground">
                    Your Commission
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {tiers.map((t) => (
                  <tr key={t.plan} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">{t.plan}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-primary font-bold text-base">{t.commission}</span>
                      <span className="text-muted-foreground text-xs ml-1">per signup</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <p className="text-muted-foreground text-sm mt-5 text-center">
          Commissions confirmed after 30 days of active subscription. Paid monthly via bank
          transfer.
        </p>
      </div>
    </section>
  )
}

/* ─── Your Impact ────────────────────────────────────────────── */

function ImpactSection() {
  // 2026-04-25: previous stats ("2,400+ Students using the platform",
  // "15,000+ Essays marked by AI", "4.8/5 Average student rating") were
  // not verifiable at launch and have been withdrawn per brand-voice §11.5.
  // Same for the previous fabricated "Sophie T." testimonial. Real Founding
  // Creator testimonials will be added once consenting partners join.
  const stats = [
    { value: '20%', label: 'Recurring commission', icon: GraduationCap },
    { value: '30-day', label: 'Cookie window', icon: Users },
    { value: '£20/yr', label: 'Your code drops the price for followers', icon: Award },
  ]

  const testimonials: Array<{ quote: string; name: string; role: string }> = [
    // 2026-04-25: previous "Sophie T." and "Mr. James R." testimonials were
    // fabricated and have been removed. This array stays empty until real
    // Founding Creator quotes are captured with explicit reuse consent.
  ]

  return (
    <section className="px-4 py-20 sm:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Impact Matters
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our partners do not just earn — they help students unlock their potential.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {stats.map((s) => (
            <Card key={s.label} className="text-center p-0 border-border/40">
              <CardContent className="py-8 px-6">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        {testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-0 border-border/40">
                <CardContent className="py-8 px-6">
                  <p className="text-foreground leading-relaxed mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 border-dashed border-border/60 bg-card/40">
              <p className="text-muted-foreground italic">
                We are at launch. Founding Creator words will appear here as the first partners join
                — verified, consented, real.
              </p>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── What You Get ───────────────────────────────────────────── */

function WhatYouGetSection() {
  const perks = [
    { icon: Link2, text: 'Personal affiliate link and promo code' },
    { icon: BarChart3, text: 'Real-time dashboard with earnings tracking' },
    { icon: GraduationCap, text: 'Impact metrics — students helped, grades improved' },
    { icon: FileText, text: 'Ready-made social media content and captions' },
    { icon: Headphones, text: 'Priority support from our partnerships team' },
    { icon: Award, text: 'Complimentary Premium subscription while you are an active partner' },
  ]

  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What You Get</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to succeed as a partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {perks.map((p) => (
            <div
              key={p.text}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/40 hover:border-border/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground text-sm leading-relaxed pt-2">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─────────────────────────────────────────────────────── */

function FAQSection() {
  const faqs = [
    {
      q: 'Who can apply?',
      a: 'Students, ex-students, tutors, teachers, and anyone with an audience interested in GCSE/IGCSE English revision. We welcome creators of all sizes — there is no minimum follower count.',
    },
    {
      q: 'How do I get paid?',
      a: 'Commissions are confirmed 30 days after each signup (to allow for refunds). Confirmed commissions are paid on the 1st of each month via bank transfer.',
    },
    {
      q: 'What are the commission rates?',
      a: 'You earn between £5 and £20 per signup depending on the subscription plan. See the commission table above for the full breakdown.',
    },
    {
      q: 'How long does approval take?',
      a: 'Zero. Enrolment is self-serve and instant — your code is live the moment you submit the form. We do not review applications.',
    },
    {
      q: 'Do I need a certain follower count?',
      a: 'No minimum follower count is required. We value authentic engagement and genuine passion for education over raw numbers. Micro-influencers are very welcome.',
    },
    {
      q: 'What content should I create?',
      a: 'Whatever feels natural to you — TikToks, Instagram Reels, YouTube videos, blog posts, or Stories. We provide ready-made content ideas and captions to help you get started. All promotional posts must include #ad disclosure (ASA requirement).',
    },
    {
      q: 'Can I apply if I am under 18?',
      a: 'Yes! We welcome student creators. If you are under 18, we will need your parent or guardian to confirm they are aware and provide consent.',
    },
    {
      q: 'Do I get a free subscription?',
      a: 'Active partners receive a complimentary Premium subscription for as long as they remain in the programme.',
    },
  ]

  return (
    <section className="px-4 py-20 sm:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f) => (
            <FAQ key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl bg-card border border-border/40 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  )
}

/* ─── Application Section ────────────────────────────────────── */

function ApplicationSection({ isLoggedIn }: { isLoggedIn?: boolean }) {
  return (
    <section id="apply" className="px-4 py-20 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get your affiliate code
          </h2>
          <p className="text-muted-foreground text-lg">
            {isLoggedIn
              ? 'Pick a code (or let us generate one) and start sharing immediately. No review, no wait.'
              : 'Sign in or create an account first — takes 30 seconds.'}
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            <span className="font-semibold text-foreground">
              You earn commission on Student Annual subscriptions only.
            </span>{' '}
            Your code unlocks the £20/year Student Annual rate for your followers.
          </p>
        </div>

        {isLoggedIn ? (
          <EnrolForm />
        ) : (
          <Card className="p-0 border-border/40">
            <CardContent className="py-12 px-6 text-center">
              <UserCheck className="w-12 h-12 text-primary mx-auto mb-5" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Sign in first</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                We need an account so your earnings are tied to you. Once signed in, you will get
                your code on this page in one click.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="text-base px-8 h-12"
                  render={<Link href="/auth/register?redirect=/affiliates%23apply" />}
                >
                  Create account
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 h-12"
                  render={<Link href="/auth/login?redirect=/affiliates%23apply" />}
                >
                  Sign in
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}

/* ─── Program Basics ─────────────────────────────────────────── */

function ProgramBasicsSection() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
          Program basics
        </h2>
        <dl className="grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg border border-border/40 bg-card">
            <dt className="font-semibold text-foreground mb-2">Attribution window</dt>
            <dd className="text-muted-foreground">30-day cookie. Last-touch model.</dd>
          </div>
          <div className="p-6 rounded-lg border border-border/40 bg-card">
            <dt className="font-semibold text-foreground mb-2">Minimum payout</dt>
            <dd className="text-muted-foreground">
              £20 — payments made bi-monthly via BACS or PayPal.
            </dd>
          </div>
          <div className="p-6 rounded-lg border border-border/40 bg-card">
            <dt className="font-semibold text-foreground mb-2">Lifetime value tier</dt>
            <dd className="text-muted-foreground">
              Top 20 partners earn a continued percentage on subscription renewals for the lifetime
              of the referred account.
            </dd>
          </div>
          <div className="p-6 rounded-lg border border-border/40 bg-card">
            <dt className="font-semibold text-foreground mb-2">Commission</dt>
            <dd className="text-muted-foreground">
              30% of first-year revenue for every paying student you refer; 15% of first-year
              revenue for school seat-licences.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

/* ─── Bottom CTA ─────────────────────────────────────────────── */

function BottomCTA({
  isLoggedIn,
  applicationStatus,
}: {
  isLoggedIn?: boolean
  applicationStatus?: string
}) {
  if (applicationStatus) return null

  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <Card className="relative p-12 sm:p-16 overflow-hidden border-border/40 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Join our growing community of partners
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-base">
              Help students succeed while building a meaningful income stream. Self-serve enrolment
              — your code is ready in one click.
            </p>
            <Button
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<a href="#apply" />}
            >
              Get your code
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

/* ─── Enrolment Form ─────────────────────────────────────────── */
// Self-serve instant-approve. No review. User picks (or generates) a code,
// accepts the #ad disclosure + age gate, and gets their referral link +
// starter post templates on the same page. No email wait.

interface EnrolSuccess {
  code: string
  referral_url: string
  dashboard_url: string
  already_enrolled?: boolean
}

function EnrolForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<EnrolSuccess | null>(null)
  const [chosenCode, setChosenCode] = useState('')
  const [is18Plus, setIs18Plus] = useState(true)
  const [understands, setUnderstands] = useState(false)
  const [codePreview, setCodePreview] = useState('')

  // Live-normalise + preview the chosen code as the user types.
  const handleCodeChange = (raw: string) => {
    setChosenCode(raw)
    setCodePreview(
      raw
        .trim()
        .toUpperCase()
        .replace(/[^A-Z0-9-]/g, ''),
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const body = {
      chosen_code: chosenCode.trim() || undefined,
      display_name: (formData.get('display_name') as string) || undefined,
      understands_disclosure: understands,
      is_18_or_over: is18Plus,
      guardian_name: (formData.get('guardian_name') as string) || undefined,
      guardian_email: (formData.get('guardian_email') as string) || undefined,
    }

    try {
      const res = await fetch('/api/affiliates/enrol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
      } else {
        setResult({
          code: data.code,
          referral_url: data.referral_url,
          dashboard_url: data.dashboard_url,
          already_enrolled: data.already_enrolled,
        })
      }
    } catch {
      setError('Network error. Please try again.')
    }
    setSubmitting(false)
  }

  if (result) {
    return <EnrolSuccessCard result={result} />
  }

  return (
    <Card className="p-0 border-border/40">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-destructive text-sm flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              {error}
            </div>
          )}

          <div>
            <label htmlFor="chosen_code" className="label">
              Your affiliate code{' '}
              <span className="text-muted-foreground font-normal">
                (optional — we will generate one if you leave this blank)
              </span>
            </label>
            <input
              type="text"
              id="chosen_code"
              name="chosen_code"
              value={chosenCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              placeholder="e.g. SARAH25 or ENGLISH-WITH-MAYA"
              maxLength={20}
              className="input-field font-mono tracking-wide uppercase"
              autoComplete="off"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              4-20 characters. Letters, numbers, hyphens. We will uppercase it automatically.
              {codePreview && codePreview !== chosenCode.trim() && (
                <>
                  {' '}
                  Preview: <span className="font-mono text-foreground">{codePreview}</span>
                </>
              )}
            </p>
          </div>

          <div>
            <label htmlFor="display_name" className="label">
              Display name{' '}
              <span className="text-muted-foreground font-normal">
                (optional — shown on your dashboard)
              </span>
            </label>
            <input
              type="text"
              id="display_name"
              name="display_name"
              placeholder="Sarah"
              maxLength={60}
              className="input-field"
            />
          </div>

          {/* Age + guardian fields */}
          <div className="space-y-3 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={is18Plus}
                onChange={(e) => setIs18Plus(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-muted-foreground">I am 18 or over</span>
            </label>

            {!is18Plus && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-4">
                <p className="text-sm text-amber-800 font-medium">
                  Since you are under 18, we need a parent or guardian contact on file:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guardian_name" className="label">
                      Guardian name *
                    </label>
                    <input
                      type="text"
                      id="guardian_name"
                      name="guardian_name"
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="guardian_email" className="label">
                      Guardian email *
                    </label>
                    <input
                      type="email"
                      id="guardian_email"
                      name="guardian_email"
                      required
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            )}

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={understands}
                onChange={(e) => setUnderstands(e.target.checked)}
                required
                className="mt-1"
              />
              <span className="text-sm text-muted-foreground">
                I understand every promotional post must include a clear{' '}
                <strong className="text-foreground">#ad</strong> disclosure (ASA + CAP Code). I have
                read the{' '}
                <a href="/affiliates/resources" className="underline">
                  posting guidelines
                </a>
                . *
              </span>
            </label>
          </div>

          <Button
            type="submit"
            disabled={submitting || !understands}
            size="lg"
            className="w-full h-12 text-base"
          >
            {submitting ? 'Creating your code…' : 'Get my affiliate code'}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Instant activation. No review queue. Share links the moment you click.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

/* ─── Success card — shown after enrolment ───────────────────── */

function EnrolSuccessCard({ result }: { result: EnrolSuccess }) {
  return (
    <div className="space-y-6">
      <Card className="p-0 border-border/40">
        <CardContent className="py-10 px-6 sm:px-8">
          <div className="flex items-center justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-2">
            {result.already_enrolled ? 'You are already enrolled' : 'You are in.'}
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Start sharing — every signup through your link or code is tracked automatically.
          </p>

          <div className="space-y-4">
            <CopyRow label="Your affiliate code" value={result.code} monospace />
            <CopyRow label="Your referral link" value={result.referral_url} />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="text-base px-6 h-12 flex-1"
              render={<Link href={result.dashboard_url} />}
            >
              Go to your dashboard
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 h-12"
              render={<Link href="/affiliates/resources" />}
            >
              Full resources
            </Button>
          </div>
        </CardContent>
      </Card>

      <PostTemplates code={result.code} referralUrl={result.referral_url} />
    </div>
  )
}

function CopyRow({
  label,
  value,
  monospace,
}: {
  label: string
  value: string
  monospace?: boolean
}) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div>
      <label className="label">{label}</label>
      <div className="flex items-stretch gap-2">
        <div
          className={`flex-1 px-4 py-3 rounded-lg border border-border bg-muted/40 ${
            monospace ? 'font-mono tracking-wide text-base' : 'text-sm'
          } text-foreground break-all`}
        >
          {value}
        </div>
        <Button type="button" variant="outline" onClick={handleCopy} className="px-4 shrink-0">
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
    </div>
  )
}

/* ─── Post templates (starter kit) ───────────────────────────── */

function PostTemplates({ code, referralUrl }: { code: string; referralUrl: string }) {
  const templates = [
    {
      platform: 'TikTok (15-30s)',
      body: `POV: you found the GCSE English revision tool that actually marks your essays 🔥\n\nThe English Hub gives you AO-aligned feedback in 60 seconds. Built by real examiners (AQA, Pearson, Cambridge, OCR, WJEC).\n\nGrab a trial — code ${code} at checkout for 7 days free.\n\n👉 ${referralUrl}\n\n#GCSE #GCSE2026 #GCSEenglish #revision #studytok #ad`,
    },
    {
      platform: 'Instagram (caption)',
      body: `If you're revising for GCSE English, stop scrolling 🧵\n\nThe English Hub lets you write an essay, submit it, and get a predicted grade + AO-level feedback in a minute. No teacher, no tutor — instant feedback, as many essays as you want.\n\nUse code ${code} for a 7-day free trial. Link: ${referralUrl}\n\n#GCSE #GCSEenglish #revision #TeamEnglish #ad`,
    },
    {
      platform: 'X / Twitter',
      body: `Revising for GCSE English? @theenglishhub marks your essays against real AQA / Edexcel / OCR / Eduqas / Cambridge mark schemes in ~60s.\n\nCode ${code} gets you a 7-day free trial.\n\n${referralUrl}\n\n#GCSE #ad`,
    },
    {
      platform: 'WhatsApp / text message',
      body: `Came across this — The English Hub marks GCSE English essays using real examiner mark schemes. Might be useful. Code ${code} for 7 days free: ${referralUrl} (#ad)`,
    },
  ]

  return (
    <Card className="p-0 border-border/40">
      <CardContent className="p-6 sm:p-8">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">Starter post templates</h3>
          <p className="text-sm text-muted-foreground">
            Copy, paste, personalise. Every template already includes the mandatory{' '}
            <strong className="text-foreground">#ad</strong> disclosure required by ASA + CAP Code.
          </p>
        </div>
        <div className="space-y-5">
          {templates.map((t) => (
            <PostTemplateCard key={t.platform} platform={t.platform} body={t.body} />
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-900">
          <p className="font-semibold mb-1">Disclosure must be prominent</p>
          <p>
            <strong>#ad</strong> must appear at the start of a caption, not buried at the end, and
            must be visible without &quot;more&quot;/&quot;read more&quot; truncation. On video: say
            &quot;this is a paid partnership&quot; or show the word <strong>ad</strong> on-screen
            for at least 3 seconds. Failing to disclose is an ASA breach and we will suspend your
            account.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function PostTemplateCard({ platform, body }: { platform: string; body: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(body)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {platform}
        </span>
        <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <pre className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed">
        {body}
      </pre>
    </div>
  )
}
