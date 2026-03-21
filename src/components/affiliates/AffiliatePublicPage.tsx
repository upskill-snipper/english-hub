'use client'

import { useState } from 'react'
import {
  Sparkles,
  Link2,
  PoundSterling,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
} from 'lucide-react'

interface AffiliatePublicPageProps {
  applicationStatus?: string
}

export default function AffiliatePublicPage({
  applicationStatus,
}: AffiliatePublicPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Affiliate Programme
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-text mb-4">
            Earn money sharing the app you actually use for revision
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-8">
            Join our affiliate programme and earn commission for every student who signs up
            through your link. Perfect for student creators on TikTok and Instagram.
          </p>
          {!applicationStatus && (
            <a href="#apply" className="btn-primary text-lg px-8 py-4">
              Apply Now
            </a>
          )}
        </div>
      </section>

      {/* Application Status Banner */}
      {applicationStatus && (
        <section className="px-4 pb-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h2 className="text-xl font-semibold text-brand-text mb-2">
                Application Under Review
              </h2>
              <p className="text-brand-muted">
                {applicationStatus === 'pending' &&
                  "We've received your application and will review it within 48 hours. You'll receive an email when we have an update."}
                {applicationStatus === 'agreement_sent' &&
                  "Your application has been approved! Please check your email for the affiliate agreement to sign."}
                {applicationStatus === 'agreement_signed' &&
                  "Your agreement is signed. We're setting up your affiliate account — your dashboard will be ready shortly."}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="px-4 py-16 bg-brand-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-text text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number={1}
              icon={<CheckCircle2 className="w-6 h-6" />}
              title="Apply"
              description="Fill out the application form below. We review every application within 48 hours."
            />
            <Step
              number={2}
              icon={<Link2 className="w-6 h-6" />}
              title="Get Your Link"
              description="Once approved, you'll get a unique affiliate link and access to your dashboard."
            />
            <Step
              number={3}
              icon={<PoundSterling className="w-6 h-6" />}
              title="Earn Per Signup"
              description="Share your link in your content. Earn commission for every student who subscribes."
            />
          </div>
        </div>
      </section>

      {/* Commission Table */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-text text-center mb-8">
            Commission Rates
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-border text-left text-brand-muted">
                  <th className="pb-3 pr-6 font-medium">Tier</th>
                  <th className="pb-3 pr-6 font-medium">Monthly Signup</th>
                  <th className="pb-3 pr-6 font-medium">Annual Signup</th>
                  <th className="pb-3 font-medium">Exam Crammer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border text-brand-text">
                <tr>
                  <td className="py-4 pr-6">
                    <span className="font-semibold">Tier 1</span>
                    <span className="text-brand-muted text-xs ml-2">Starting</span>
                  </td>
                  <td className="py-4 pr-6 font-semibold">£5.99</td>
                  <td className="py-4 pr-6 font-semibold">£10.00</td>
                  <td className="py-4 font-semibold">£5.00</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6">
                    <span className="font-semibold">Tier 2</span>
                    <span className="text-brand-muted text-xs ml-2">10+ referrals</span>
                  </td>
                  <td className="py-4 pr-6 font-semibold">£8.00</td>
                  <td className="py-4 pr-6 font-semibold">£15.00</td>
                  <td className="py-4 font-semibold">£7.00</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6">
                    <span className="font-semibold">Tier 3</span>
                    <span className="text-brand-muted text-xs ml-2">50+ referrals</span>
                  </td>
                  <td className="py-4 pr-6 font-semibold">£12.00</td>
                  <td className="py-4 pr-6 font-semibold">£20.00</td>
                  <td className="py-4 font-semibold">£10.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-brand-muted text-sm mt-4">
            Commissions are paid monthly via bank transfer. A 30-day confirmation window applies
            (commission confirmed once the subscriber stays active for 30 days).
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 py-16 bg-brand-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-text text-center mb-8">
            Requirements
          </h2>
          <div className="space-y-4">
            <Requirement text="Be a student, ex-student, tutor, or student-adjacent creator" />
            <Requirement text="Have an audience interested in GCSE/IGCSE English revision (UK or international)" />
            <Requirement text="Active on TikTok, Instagram, or YouTube with at least a small following" />
            <Requirement text="Willing to include #ad disclosure on every promotional post (ASA requirement)" />
            <Requirement text="Under 18? No problem — we just need parental consent" />
          </div>
        </div>
      </section>

      {/* Application Form */}
      {!applicationStatus && (
        <section id="apply" className="px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-text text-center mb-8">
              Apply to Join
            </h2>
            <ApplicationForm />
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-4 py-16 bg-brand-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-text text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <FAQ
              q="Can I apply if I'm under 18?"
              a="Yes! We welcome student creators. If you're under 18, we'll need your parent or guardian to confirm they're aware and provide consent."
            />
            <FAQ
              q="How does disclosure work?"
              a="UK advertising rules (ASA/CAP) require you to include #ad in every post that promotes The English Hub. This must be in the first 3 words of your caption. Posts without proper disclosure will not earn commission."
            />
            <FAQ
              q="When do I get paid?"
              a="Commissions are confirmed 30 days after each signup (to allow for refunds). Confirmed commissions are paid on the 1st of each month via bank transfer."
            />
            <FAQ
              q="Do I get a free subscription?"
              a="Active affiliates receive a complimentary Pro subscription for as long as they remain in the programme."
            />
            <FAQ
              q="What if someone clicks my link but doesn't subscribe immediately?"
              a="Rewardful tracks visitors with a cookie that lasts 30 days. If they subscribe within 30 days of clicking your link, you earn the commission."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

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
      <div className="w-14 h-14 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-xs text-brand-muted mb-1">Step {number}</div>
      <h3 className="text-lg font-semibold text-brand-text mb-2">{title}</h3>
      <p className="text-sm text-brand-muted">{description}</p>
    </div>
  )
}

function Requirement({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
      <p className="text-brand-muted">{text}</p>
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
        <span className="font-medium text-brand-text pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-muted shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-muted shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-brand-muted">{a}</div>
      )}
    </div>
  )
}

// ── Application Form ────────────────────────────────────────

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

    // Ensure checkboxes are included even if unchecked
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
      <div className="card p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-brand-accent mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-brand-text mb-2">Application Submitted!</h3>
        <p className="text-brand-muted">
          We'll review your application within 48 hours and email you with next steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-5">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm flex items-start gap-2">
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
          <option value="1K-5K">1K–5K</option>
          <option value="5K-25K">5K–25K</option>
          <option value="25K-100K">25K–100K</option>
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
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 space-y-4">
          <p className="text-sm text-yellow-200 font-medium">
            Since you're under 18, we need your parent/guardian's details:
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
            <span className="text-sm text-brand-muted">
              My parent/guardian is aware of this application and consents to my participation
            </span>
          </label>
        </div>
      )}

      {/* Legal Acknowledgements */}
      <div className="space-y-3 pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="understands_disclosure" required className="mt-1" />
          <span className="text-sm text-brand-muted">
            I understand every promotional post must include <strong className="text-brand-text">#ad</strong> disclosure *
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="understands_commission" required className="mt-1" />
          <span className="text-sm text-brand-muted">
            I understand I earn commission per qualifying paid signup only *
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="understands_no_guarantee" required className="mt-1" />
          <span className="text-sm text-brand-muted">
            I understand there is no guaranteed income from this programme *
          </span>
        </label>
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full py-4">
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
