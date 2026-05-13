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
import { useT } from '@/lib/i18n/use-t'

export default function CreatorsPage() {
  const t = useT()
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t('creators.badge')}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('creators.h1')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('creators.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apply" className="btn-primary text-lg px-8 py-4">
              {t('creators.cta.apply')}
            </a>
            <a
              href="mailto:info@Upskillenergy.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm underline underline-offset-2"
            >
              {t('creators.cta.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            {t('creators.how.h2')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Step
              number={1}
              stepLabel={t('creators.how.step_label')}
              icon={<CheckCircle2 className="w-6 h-6" />}
              title={t('creators.how.step1.title')}
              description={t('creators.how.step1.desc')}
            />
            <Step
              number={2}
              stepLabel={t('creators.how.step_label')}
              icon={<Link2 className="w-6 h-6" />}
              title={t('creators.how.step2.title')}
              description={t('creators.how.step2.desc')}
            />
            <Step
              number={3}
              stepLabel={t('creators.how.step_label')}
              icon={<Share2 className="w-6 h-6" />}
              title={t('creators.how.step3.title')}
              description={t('creators.how.step3.desc')}
            />
            <Step
              number={4}
              stepLabel={t('creators.how.step_label')}
              icon={<PoundSterling className="w-6 h-6" />}
              title={t('creators.how.step4.title')}
              description={t('creators.how.step4.desc')}
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
              {t('creators.calc.h2')}
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-8">
            {t('creators.calc.intro')} {PRICING.CURRENCY}
            {PRICING.MONTHLY}
            {t('creators.calc.plan_suffix')}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <EarningCard
              students={100}
              monthly={Number((100 * PRICING.MONTHLY * 0.2).toFixed(2))}
              studentsReferred={t('creators.calc.students_referred')}
              perMonth={t('creators.calc.per_month')}
            />
            <EarningCard
              students={500}
              monthly={Number((500 * PRICING.MONTHLY * 0.2).toFixed(2))}
              highlighted
              studentsReferred={t('creators.calc.students_referred')}
              perMonth={t('creators.calc.per_month')}
            />
            <EarningCard
              students={1000}
              monthly={Number((1000 * PRICING.MONTHLY * 0.2).toFixed(2))}
              studentsReferred={t('creators.calc.students_referred')}
              perMonth={t('creators.calc.per_month')}
            />
          </div>
          <p className="text-muted-foreground text-xs text-center mt-4">
            {t('creators.calc.footnote_prefix')} {PRICING.CURRENCY}
            {PRICING.MONTHLY}
            {t('creators.calc.footnote_suffix')}
          </p>
        </div>
      </section>

      {/* Content Ideas */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground text-center">
              {t('creators.ideas.h2')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <ContentIdea
              icon={<Video className="w-5 h-5" />}
              title={t('creators.ideas.hacks.title')}
              description={t('creators.ideas.hacks.desc')}
              platform={t('creators.ideas.hacks.platform')}
            />
            <ContentIdea
              icon={<Video className="w-5 h-5" />}
              title={t('creators.ideas.grade9.title')}
              description={t('creators.ideas.grade9.desc')}
              platform={t('creators.ideas.grade9.platform')}
            />
            <ContentIdea
              icon={<Video className="w-5 h-5" />}
              title={t('creators.ideas.best.title')}
              description={t('creators.ideas.best.desc')}
              platform={t('creators.ideas.best.platform')}
            />
            <ContentIdea
              icon={<Clock className="w-5 h-5" />}
              title={t('creators.ideas.swm.title')}
              description={t('creators.ideas.swm.desc')}
              platform={t('creators.ideas.swm.platform')}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            {t('creators.benefits.h2')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Benefit
              icon={<PoundSterling className="w-5 h-5" />}
              title={t('creators.benefits.recurring.title')}
              description={t('creators.benefits.recurring.desc')}
            />
            <Benefit
              icon={<Clock className="w-5 h-5" />}
              title={t('creators.benefits.cookie.title')}
              description={t('creators.benefits.cookie.desc')}
            />
            <Benefit
              icon={<BarChart3 className="w-5 h-5" />}
              title={t('creators.benefits.dashboard.title')}
              description={t('creators.benefits.dashboard.desc')}
            />
            <Benefit
              icon={<Tag className="w-5 h-5" />}
              title={t('creators.benefits.codes.title')}
              description={t('creators.benefits.codes.desc')}
            />
            <Benefit
              icon={<Wallet className="w-5 h-5" />}
              title={t('creators.benefits.payout.title')}
              description={t('creators.benefits.payout.desc')}
            />
            <Benefit
              icon={<Users className="w-5 h-5" />}
              title={t('creators.benefits.support.title')}
              description={t('creators.benefits.support.desc')}
            />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="px-4 py-16 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-2">
            {t('creators.apply.h2')}
          </h2>
          <p className="text-muted-foreground text-center mb-8">{t('creators.apply.intro')}</p>
          <CreatorApplicationForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            {t('creators.faq.h2')}
          </h2>
          <div className="space-y-3">
            <FAQ q={t('creators.faq.q1')} a={t('creators.faq.a1')} />
            <FAQ q={t('creators.faq.q2')} a={t('creators.faq.a2')} />
            <FAQ q={t('creators.faq.q3')} a={t('creators.faq.a3')} />
            <FAQ q={t('creators.faq.q4')} a={t('creators.faq.a4')} />
            <FAQ q={t('creators.faq.q5')} a={t('creators.faq.a5')} />
            <FAQ q={t('creators.faq.q6')} a={t('creators.faq.a6')} />
            <FAQ q={t('creators.faq.q7')} a={t('creators.faq.a7')} />
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Sub-components ──────────────────────────────────────── */

function Step({
  number,
  stepLabel,
  icon,
  title,
  description,
}: {
  number: number
  stepLabel: string
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-xs text-muted-foreground mb-1">
        {stepLabel} {number}
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function EarningCard({
  students,
  monthly,
  highlighted,
  studentsReferred,
  perMonth,
}: {
  students: number
  monthly: number
  highlighted?: boolean
  studentsReferred: string
  perMonth: string
}) {
  return (
    <div
      className={`rounded-xl p-6 text-center ${
        highlighted ? 'border-2 border-primary bg-primary/5' : 'card'
      }`}
    >
      <p className="text-muted-foreground text-sm mb-2">
        {students.toLocaleString()} {studentsReferred}
      </p>
      <p className="text-3xl font-bold text-foreground mb-1">
        {PRICING.CURRENCY}
        {monthly.toFixed(2)}
      </p>
      <p className="text-muted-foreground text-xs">{perMonth}</p>
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
      {open && <div className="px-4 pb-4 text-sm text-muted-foreground">{a}</div>}
    </div>
  )
}

/* ── Application Form ───────────────────────────────────── */

function CreatorApplicationForm() {
  const t = useT()
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
        setError(result.error || t('creators.form.error_generic'))
      } else {
        setSuccess(true)
      }
    } catch {
      setError(t('creators.form.error_network'))
    }

    setSubmitting(false)
  }

  if (success) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t('creators.success.title')}
        </h3>
        <p className="text-muted-foreground">
          {t('creators.success.body_pre')}{' '}
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
            {t('creators.form.name')}
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
            {t('creators.form.email')}
          </label>
          <input type="email" id="email" name="email" required className="input-field" />
        </div>
      </div>

      <div>
        <label htmlFor="platform" className="label">
          {t('creators.form.platform')}
        </label>
        <select id="platform" name="platform" required className="input-field">
          <option value="">{t('creators.form.platform_placeholder')}</option>
          <option value="tiktok">{t('creators.form.platform.tiktok')}</option>
          <option value="youtube">{t('creators.form.platform.youtube')}</option>
          <option value="instagram">{t('creators.form.platform.instagram')}</option>
          <option value="twitter">{t('creators.form.platform.twitter')}</option>
          <option value="blog">{t('creators.form.platform.blog')}</option>
          <option value="other">{t('creators.form.platform.other')}</option>
        </select>
      </div>

      <div>
        <label htmlFor="handle" className="label">
          {t('creators.form.handle')}
        </label>
        <input
          type="text"
          id="handle"
          name="handle"
          placeholder={t('creators.form.handle_placeholder')}
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="follower_count" className="label">
          {t('creators.form.followers')}
        </label>
        <select id="follower_count" name="follower_count" required className="input-field">
          <option value="">{t('creators.form.followers_placeholder')}</option>
          <option value="<1K">&lt;1K</option>
          <option value="1K-5K">1K - 5K</option>
          <option value="5K-25K">5K - 25K</option>
          <option value="25K-100K">25K - 100K</option>
          <option value="100K+">100K+</option>
        </select>
      </div>

      <div>
        <label htmlFor="content_description" className="label">
          {t('creators.form.content')}
        </label>
        <textarea
          id="content_description"
          name="content_description"
          required
          minLength={20}
          maxLength={500}
          rows={3}
          className="input-field"
          placeholder={t('creators.form.content_placeholder')}
        />
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full py-4">
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2 inline" />
            {t('creators.form.submitting')}
          </>
        ) : (
          t('creators.form.submit')
        )}
      </button>
    </form>
  )
}
