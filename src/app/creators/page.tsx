'use client'

import { useState } from 'react'
import {
  Sparkles,
  Users,
  Link2,
  Share2,
  PoundSterling,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Calculator,
  Video,
  Lightbulb,
  Clock,
  BarChart3,
  Tag,
  Wallet,
  Loader2,
} from 'lucide-react'
import { PRICING } from '@/constants/pricing'

export default function CreatorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Creator Partners
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Earn Money Sharing Education
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join The English Hub&apos;s affiliate program. Earn 20% recurring commission
            on every student you refer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apply" className="btn-primary text-lg px-8 py-4">
              Apply to Become a Partner
            </a>
            <a
              href="mailto:info@Upskillenergy.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm underline underline-offset-2"
            >
              Already an affiliate? Contact us
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Step
              number={1}
              icon={<CheckCircle2 className="w-6 h-6" />}
              title="Apply to become a partner"
              description="Fill out the form below. We review applications within 48 hours."
            />
            <Step
              number={2}
              icon={<Link2 className="w-6 h-6" />}
              title="Get your unique referral link"
              description="Once approved, you get a personal link and tracking dashboard."
            />
            <Step
              number={3}
              icon={<Share2 className="w-6 h-6" />}
              title="Share with your audience"
              description="Post on TikTok, YouTube, Instagram, or any platform you use."
            />
            <Step
              number={4}
              icon={<PoundSterling className="w-6 h-6" />}
              title="Earn 20% recurring monthly"
              description="Earn 20% of every subscription — paid every month they stay subscribed."
            />
          </div>
        </div>
      </section>

      {/* Earning Calculator */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calculator className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground text-center">
              Earning Calculator
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-8">
            See how much you could earn with our 20% recurring commission on the{' '}
            {PRICING.CURRENCY}{PRICING.MONTHLY}/mo plan.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <EarningCard
              students={100}
              monthly={Number((100 * PRICING.MONTHLY * 0.2).toFixed(2))}
            />
            <EarningCard
              students={500}
              monthly={Number((500 * PRICING.MONTHLY * 0.2).toFixed(2))}
              highlighted
            />
            <EarningCard
              students={1000}
              monthly={Number((1000 * PRICING.MONTHLY * 0.2).toFixed(2))}
            />
          </div>
          <p className="text-muted-foreground text-xs text-center mt-4">
            Based on {PRICING.CURRENCY}{PRICING.MONTHLY}/mo subscription price.
            Commission is recurring for as long as the student remains subscribed.
          </p>
        </div>
      </section>

      {/* Content Ideas */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground text-center">
              Content Ideas That Convert
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <ContentIdea
              icon={<Video className="w-5 h-5" />}
              title='"English exam hacks"'
              description="15-30 second TikToks or YouTube Shorts showing quick tips from the platform."
              platform="TikTok / Shorts"
            />
            <ContentIdea
              icon={<Video className="w-5 h-5" />}
              title='"How I got a Grade 9"'
              description="Study vlogs showing your revision routine using The English Hub."
              platform="YouTube / TikTok"
            />
            <ContentIdea
              icon={<Video className="w-5 h-5" />}
              title='"Best GCSE revision resources"'
              description='Review and comparison videos — include The English Hub in your "top 5" list.'
              platform="YouTube / Instagram"
            />
            <ContentIdea
              icon={<Clock className="w-5 h-5" />}
              title='"Study with me" sessions'
              description="Film yourself revising with The English Hub open on screen. Great for long-form content."
              platform="YouTube / TikTok LIVE"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Partner Benefits
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Benefit
              icon={<PoundSterling className="w-5 h-5" />}
              title="20% recurring commission"
              description="Earn on every payment, not just the first. As long as they subscribe, you earn."
            />
            <Benefit
              icon={<Clock className="w-5 h-5" />}
              title="30-day cookie window"
              description="If someone clicks your link, you get credit for 30 days — even if they don't sign up immediately."
            />
            <Benefit
              icon={<BarChart3 className="w-5 h-5" />}
              title="Real-time dashboard"
              description="Track clicks, signups, and earnings in real time from your affiliate dashboard."
            />
            <Benefit
              icon={<Tag className="w-5 h-5" />}
              title="Custom discount codes"
              description="Give your audience exclusive discount codes to boost conversions."
            />
            <Benefit
              icon={<Wallet className="w-5 h-5" />}
              title="Monthly payouts"
              description="Confirmed commissions are paid on the 1st of each month via PayPal or bank transfer."
            />
            <Benefit
              icon={<Users className="w-5 h-5" />}
              title="Dedicated support"
              description="Get direct access to our team for content ideas, assets, and promotional support."
            />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="px-4 py-16 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-2">
            Apply to Become a Creator Partner
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            We review all applications within 48 hours.
          </p>
          <CreatorApplicationForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <FAQ
              q="What platforms can I promote on?"
              a="TikTok, YouTube, Instagram, Twitter/X, blogs, WhatsApp groups — anywhere you have an audience interested in English revision."
            />
            <FAQ
              q="How does tracking work?"
              a="You get a unique referral link (e.g. theenglishhub.app?via=yourcode). When someone clicks it, a 30-day cookie tracks them. If they subscribe within 30 days, you earn the commission."
            />
            <FAQ
              q="When do I get paid?"
              a="Commissions are confirmed 30 days after each signup (to allow for refunds). Confirmed commissions are paid on the 1st of each month via PayPal or bank transfer."
            />
            <FAQ
              q="Can I apply if I'm under 18?"
              a="Yes! We welcome student creators. If you're under 18, we'll just need parental consent."
            />
            <FAQ
              q="Do I need a minimum number of followers?"
              a="No strict minimum, but we look for engaged audiences interested in GCSE/IGCSE English. Quality matters more than quantity."
            />
            <FAQ
              q="Do I need to disclose that it's an ad?"
              a="Yes. UK advertising rules (ASA/CAP) require you to include #ad in every promotional post. This must be clearly visible."
            />
            <FAQ
              q="Is there a limit to how much I can earn?"
              a="No cap. The more students you refer, the more you earn. Commission is recurring for as long as each student stays subscribed."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Sub-components ──────────────────────────────────────── */

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: number
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-xs text-muted-foreground mb-1">Step {number}</div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function EarningCard({
  students,
  monthly,
  highlighted,
}: {
  students: number
  monthly: number
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-xl p-6 text-center ${
        highlighted
          ? 'border-2 border-primary bg-primary/5'
          : 'card'
      }`}
    >
      <p className="text-muted-foreground text-sm mb-2">
        {students.toLocaleString()} students referred
      </p>
      <p className="text-3xl font-bold text-foreground mb-1">
        {PRICING.CURRENCY}{monthly.toFixed(2)}
      </p>
      <p className="text-muted-foreground text-xs">per month, recurring</p>
    </div>
  )
}

function ContentIdea({
  icon,
  title,
  description,
  platform,
}: {
  icon: React.ReactNode
  title: string
  description: string
  platform: string
}) {
  return (
    <div className="card p-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <span className="text-xs text-primary font-medium">{platform}</span>
        </div>
      </div>
    </div>
  )
}

function Benefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <span className="font-medium text-foreground pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-muted-foreground">{a}</div>
      )}
    </div>
  )
}

/* ── Application Form ───────────────────────────────────── */

function CreatorApplicationForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      data[key] = value as string
    })

    try {
      const res = await fetch('/api/creator-apply', {
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
      <div className="card p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Application Submitted!
        </h3>
        <p className="text-muted-foreground">
          We&apos;ll review your application within 48 hours and email you with next
          steps. If you have any questions, contact us at{' '}
          <a href="mailto:info@Upskillenergy.com" className="text-primary underline">
            info@Upskillenergy.com
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-5">
      {error && (
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-destructive text-sm flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="platform" className="label">
          Primary Platform *
        </label>
        <select
          id="platform"
          name="platform"
          required
          className="input-field"
        >
          <option value="">Select your main platform...</option>
          <option value="tiktok">TikTok</option>
          <option value="youtube">YouTube</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter / X</option>
          <option value="blog">Blog / Website</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="handle" className="label">
          Social Handle / URL
        </label>
        <input
          type="text"
          id="handle"
          name="handle"
          placeholder="@yourhandle or https://..."
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="follower_count" className="label">
          Approximate Follower Count *
        </label>
        <select
          id="follower_count"
          name="follower_count"
          required
          className="input-field"
        >
          <option value="">Select...</option>
          <option value="<1K">&lt;1K</option>
          <option value="1K-5K">1K - 5K</option>
          <option value="5K-25K">5K - 25K</option>
          <option value="25K-100K">25K - 100K</option>
          <option value="100K+">100K+</option>
        </select>
      </div>

      <div>
        <label htmlFor="content_description" className="label">
          Describe the content you&apos;d create to promote The English Hub *
        </label>
        <textarea
          id="content_description"
          name="content_description"
          required
          minLength={20}
          maxLength={500}
          rows={3}
          className="input-field"
          placeholder="e.g. I'd make TikTok videos showing English exam hacks and revision tips..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full py-4"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2 inline" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  )
}
