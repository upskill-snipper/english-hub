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
      {!applicationStatus && (
        <ApplicationSection isLoggedIn={isLoggedIn} />
      )}
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
          Partner with{' '}
          <span className="text-primary">The English Hub</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Help students achieve their potential. Earn while making a real
          difference in education.
        </p>

        {!applicationStatus && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base px-10 h-13 shadow-lg shadow-primary/20"
              render={<a href="#apply" />}
            >
              Apply to Partner
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
      title: 'Application Under Review',
      message:
        "We've received your application and will review it within 48 hours. You'll receive an email when we have an update.",
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
            <Card key={r.title} className="text-center p-0 border-border/40 hover:border-border/80 transition-colors">
              <CardContent className="pt-8 pb-8 px-6">
                <div className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center mx-auto mb-5`}>
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
      title: 'Apply',
      description: 'Fill out a short application telling us about you and your audience.',
    },
    {
      icon: UserCheck,
      title: 'Get Approved',
      description: 'We review every application within 48 hours and send your partnership agreement.',
    },
    {
      icon: Share2,
      title: 'Share Your Link',
      description: 'Get your unique affiliate link and start sharing with your audience.',
    },
    {
      icon: TrendingUp,
      title: 'Earn Commission',
      description: 'Track your referrals in real-time and earn for every subscription.',
    },
  ]

  return (
    <section id="how-it-works" className="px-4 py-20 sm:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
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
          Commissions confirmed after 30 days of active subscription. Paid monthly via bank transfer.
        </p>
      </div>
    </section>
  )
}

/* ─── Your Impact ────────────────────────────────────────────── */

function ImpactSection() {
  const stats = [
    { value: '2,400+', label: 'Students using the platform', icon: Users },
    { value: '15,000+', label: 'Essays marked by AI', icon: GraduationCap },
    { value: '4.8/5', label: 'Average student rating', icon: Award },
  ]

  const testimonials = [
    {
      quote:
        'I started sharing The English Hub because I genuinely use it. The fact I earn from it is a bonus — my followers trust my recommendations because they are real.',
      name: 'Sophie T.',
      role: 'Student Creator, 12K followers',
    },
    {
      quote:
        'As a tutor, recommending The English Hub was a no-brainer. My students improve faster and I earn commission. Everyone wins.',
      name: 'Mr. James R.',
      role: 'Private Tutor & Affiliate',
    },
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
    { icon: Award, text: 'Complimentary Pro subscription while you are an active partner' },
  ]

  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What You Get
          </h2>
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
      a: 'We review every application within 48 hours. Once approved, you will receive a partnership agreement to sign, and your dashboard will be set up within 24 hours of signing.',
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
      a: 'Active partners receive a complimentary Pro subscription for as long as they remain in the programme.',
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
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
      )}
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
            Ready to Partner?
          </h2>
          <p className="text-muted-foreground text-lg">
            {isLoggedIn
              ? 'Complete the form below to apply for our partnership programme.'
              : 'Create an account or sign in to submit your application.'}
          </p>
        </div>

        {isLoggedIn ? (
          <ApplicationForm />
        ) : (
          <Card className="p-0 border-border/40">
            <CardContent className="py-12 px-6 text-center">
              <UserCheck className="w-12 h-12 text-primary mx-auto mb-5" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Sign In to Apply
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                You need an account to submit a partnership application. After
                signing up, you will be redirected back here.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="text-base px-8 h-12"
                  render={<Link href="/auth/register?redirect=/affiliates" />}
                >
                  Create Account to Apply
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 h-12"
                  render={<Link href="/auth/login?redirect=/affiliates" />}
                >
                  Sign In
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
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
              Help students succeed while building a meaningful income stream.
              Applications are reviewed within 48 hours.
            </p>
            <Button
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<a href="#apply" />}
            >
              Apply to Partner
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

/* ─── Application Form ───────────────────────────────────────── */

function ApplicationForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isMinor, setIsMinor] = useState(false)

  const checkAge = (dob: string) => {
    if (!dob) return
    const birthDate = new Date(dob)
    const age = Math.floor(
      (Date.now() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
    )
    setIsMinor(age < 18)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data: Record<string, unknown> = {}
    formData.forEach((value, key) => {
      if (key.startsWith('understands_') || key === 'guardian_confirmed') {
        data[key] = value === 'on'
      } else {
        data[key] = value
      }
    })

    ;['understands_disclosure', 'understands_commission', 'understands_no_guarantee'].forEach(
      (k) => {
        if (!(k in data)) data[k] = false
      }
    )

    try {
      const res = await fetch('/api/affiliates/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || 'Something went wrong. Please try again.')
      } else {
        setSuccess(true)
      }
    } catch {
      setError('Network error. Please try again.')
    }

    setSubmitting(false)
  }

  if (success) {
    return (
      <Card className="p-0 border-border/40">
        <CardContent className="py-12 px-6 text-center">
          <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Application Submitted!
          </h3>
          <p className="text-muted-foreground">
            We will review your application within 48 hours and email you with
            next steps.
          </p>
        </CardContent>
      </Card>
    )
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

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="full_name" className="label">Full Name *</label>
              <input type="text" id="full_name" name="full_name" required minLength={2} maxLength={100} className="input-field" />
            </div>
            <div>
              <label htmlFor="email" className="label">Email Address *</label>
              <input type="email" id="email" name="email" required className="input-field" />
            </div>
          </div>

          <div>
            <label htmlFor="date_of_birth" className="label">Date of Birth *</label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              required
              className="input-field"
              onChange={(e) => checkAge(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tiktok_handle" className="label">TikTok Handle</label>
              <input type="text" id="tiktok_handle" name="tiktok_handle" placeholder="@yourhandle" className="input-field" />
            </div>
            <div>
              <label htmlFor="instagram_handle" className="label">Instagram Handle</label>
              <input type="text" id="instagram_handle" name="instagram_handle" placeholder="@yourhandle" className="input-field" />
            </div>
          </div>

          <div>
            <label htmlFor="approx_follower_count" className="label">Approximate Follower Count *</label>
            <select id="approx_follower_count" name="approx_follower_count" required className="input-field">
              <option value="">Select...</option>
              <option value="<1K">&lt;1K</option>
              <option value="1K-5K">1K - 5K</option>
              <option value="5K-25K">5K - 25K</option>
              <option value="25K-100K">25K - 100K</option>
              <option value="100K+">100K+</option>
            </select>
          </div>

          <div>
            <label htmlFor="audience_description" className="label">
              Describe your audience (who follows you?) *
            </label>
            <textarea
              id="audience_description"
              name="audience_description"
              required
              minLength={20}
              maxLength={500}
              rows={3}
              className="input-field"
              placeholder="e.g. Mostly Year 10-11 students in the UK doing GCSE English..."
            />
          </div>

          <div>
            <label htmlFor="best_post_url" className="label">
              Link to your best post (optional)
            </label>
            <input type="url" id="best_post_url" name="best_post_url" placeholder="https://..." className="input-field" />
          </div>

          <div>
            <label htmlFor="content_plan" className="label">
              What kind of content would you create to promote The English Hub? *
            </label>
            <textarea
              id="content_plan"
              name="content_plan"
              required
              minLength={20}
              maxLength={500}
              rows={3}
              className="input-field"
              placeholder="e.g. I'd create TikTok videos showing how I use the app for revision..."
            />
          </div>

          {/* Under-18 Guardian Fields */}
          {isMinor && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-4">
              <p className="text-sm text-amber-200 font-medium">
                Since you are under 18, we need your parent or guardian&apos;s details:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guardian_name" className="label">Guardian Name *</label>
                  <input type="text" id="guardian_name" name="guardian_name" required className="input-field" />
                </div>
                <div>
                  <label htmlFor="guardian_email" className="label">Guardian Email *</label>
                  <input type="email" id="guardian_email" name="guardian_email" required className="input-field" />
                </div>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="guardian_confirmed" required className="mt-1" />
                <span className="text-sm text-muted-foreground">
                  My parent/guardian is aware of this application and consents to my participation
                </span>
              </label>
            </div>
          )}

          {/* Legal Acknowledgements */}
          <div className="space-y-3 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="understands_disclosure" required className="mt-1" />
              <span className="text-sm text-muted-foreground">
                I understand every promotional post must include <strong className="text-foreground">#ad</strong> disclosure *
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="understands_commission" required className="mt-1" />
              <span className="text-sm text-muted-foreground">
                I understand I earn commission per qualifying paid signup only *
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="understands_no_guarantee" required className="mt-1" />
              <span className="text-sm text-muted-foreground">
                I understand there is no guaranteed income from this programme *
              </span>
            </label>
          </div>

          <Button type="submit" disabled={submitting} size="lg" className="w-full h-12 text-base">
            {submitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
