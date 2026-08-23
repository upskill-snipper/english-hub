'use client'

/**
 * Organisation cohort enquiry form for /business-english.
 *
 * ─── API CONTRACT (verified against the route, not assumed) ────────────
 * Posts to POST /api/school-inquiry, whose validator
 * (src/app/api/school-inquiry/route.ts) accepts EXACTLY:
 *
 *   school_name   required, 2-200 chars
 *   teacher_name  required, 2-100 chars
 *   email         required, must match its email regex
 *   role          required, must be one of VALID_ROLES
 *   num_students  required, must be one of VALID_STUDENT_RANGES
 *   message       optional, max 1000 chars
 *
 * Anything else is ignored, and a field name the validator does not
 * recognise fails the request with a 400. A sibling form shipped broken
 * for exactly that reason, so this component posts those six keys and
 * nothing else, and the values below are copied from the route's own
 * enum arrays rather than re-typed from memory.
 *
 * Two deliberate mappings, because the endpoint was written for schools:
 *
 *   role         An organisation buyer is not a "Head of English". Rather
 *                than mislabel them as a school role (the notification
 *                email renders ROLE_LABELS[role], so 'mat_leader' would
 *                arrive as "MAT Leader" and mislead whoever triages it),
 *                we always send the valid enum value 'other' and put the
 *                real job title in the message body.
 *
 *   num_students The enum ranges are counts, so they carry over to
 *                learners unchanged; only the labels are re-worded.
 *
 * The message body leads with an explicit ORGANISATION ENQUIRY marker so
 * a lead from this page is distinguishable in an inbox that otherwise
 * receives school-pilot enquiries. See the report: giving the API a
 * first-class `source` field would be the cleaner fix, but the route is
 * outside this change's ownership.
 */

import { useState } from 'react'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MKT_EAL_DICTIONARY } from '@/lib/i18n/dictionary-mkt-eal'
import { useLocale } from '@/lib/i18n/use-locale'

/** Values must match VALID_STUDENT_RANGES in /api/school-inquiry. */
const LEARNER_RANGES = ['1-30', '31-50', '51-100', '101-200', '201-500', '500+'] as const

/**
 * The role enum value we send. 'other' is in the route's VALID_ROLES and
 * is the only honest option for a non-school buyer - the free-text job
 * title travels in `message`.
 */
const ROLE_VALUE = 'other'

const selectClass =
  'h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 dark:bg-input/20'

export function CohortEnquiryForm() {
  const locale = useLocale()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Page-local trilingual lookup over the shard this page owns. Mirrors
  // the pattern on /eal, but resolves `es` as well as `ar` - the /eal
  // version silently drops Spanish (flagged in the report).
  const tx = (key: string): string => {
    const entry = MKT_EAL_DICTIONARY[key]
    if (!entry) return key
    if (locale === 'ar' && entry.ar) return entry.ar
    if (locale === 'es' && entry.es) return entry.es
    return entry.en
  }

  const rangeLabel = (value: string): string =>
    value === '1-30' ? tx('mkt.biz.form.range_30') : value

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const jobTitle = ((fd.get('job_title') as string) || '').trim()
    const country = ((fd.get('country') as string) || '').trim()
    const phone = ((fd.get('phone') as string) || '').trim()
    const needs = ((fd.get('needs') as string) || '').trim()

    // Everything the endpoint has no column for is packed into `message`
    // so no answer the enquirer typed is silently discarded.
    const message = [
      'ORGANISATION ENQUIRY (submitted via /business-english)',
      jobTitle && `Job title: ${jobTitle}`,
      country && `Country: ${country}`,
      phone && `Phone / WhatsApp: ${phone}`,
      needs && `What the cohort needs English for: ${needs}`,
    ]
      .filter(Boolean)
      .join('\n')
      .slice(0, 1000) // the route rejects a message over 1000 chars

    try {
      const res = await fetch('/api/school-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          school_name: ((fd.get('organisation') as string) || '').trim(),
          teacher_name: ((fd.get('contact_name') as string) || '').trim(),
          email: ((fd.get('email') as string) || '').trim(),
          role: ROLE_VALUE,
          num_students: fd.get('num_learners') as string,
          message,
        }),
      })
      if (!res.ok) {
        // Surface the API's own validation message where there is one -
        // never invent a reason the request failed.
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || tx('mkt.biz.form.error_generic'))
      }
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : tx('mkt.biz.form.error_generic'))
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 text-center">
        <div className="mx-auto mb-5 inline-flex size-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
          <CheckCircle className="size-8 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-heading-md font-heading text-foreground" dir="auto">
          {tx('mkt.biz.form.success_title')}
        </h3>
        <p
          className="mx-auto mt-2 max-w-md text-body-sm leading-relaxed text-muted-foreground"
          dir="auto"
        >
          {tx('mkt.biz.form.success_body')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="biz-organisation" dir="auto">
            {tx('mkt.biz.form.org')} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="biz-organisation"
            name="organisation"
            required
            minLength={2}
            maxLength={200}
            autoComplete="organization"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="biz-contact-name" dir="auto">
            {tx('mkt.biz.form.name')} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="biz-contact-name"
            name="contact_name"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="biz-job-title" dir="auto">
            {tx('mkt.biz.form.jobtitle')}{' '}
            <span className="text-muted-foreground">({tx('mkt.biz.form.optional')})</span>
          </Label>
          <Input
            id="biz-job-title"
            name="job_title"
            maxLength={100}
            placeholder={tx('mkt.biz.form.jobtitle_ph')}
            autoComplete="organization-title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="biz-email" dir="auto">
            {tx('mkt.biz.form.email')} <span className="text-destructive">*</span>
          </Label>
          <Input id="biz-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="biz-num-learners" dir="auto">
            {tx('mkt.biz.form.learners')} <span className="text-destructive">*</span>
          </Label>
          <select
            id="biz-num-learners"
            name="num_learners"
            required
            defaultValue=""
            className={selectClass}
          >
            <option value="" disabled>
              {tx('mkt.biz.form.learners_ph')}
            </option>
            {LEARNER_RANGES.map((value) => (
              <option key={value} value={value}>
                {rangeLabel(value)}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="biz-country" dir="auto">
            {tx('mkt.biz.form.country')}{' '}
            <span className="text-muted-foreground">({tx('mkt.biz.form.optional')})</span>
          </Label>
          <Input
            id="biz-country"
            name="country"
            maxLength={80}
            placeholder={tx('mkt.biz.form.country_ph')}
            autoComplete="country-name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="biz-needs" dir="auto">
          {tx('mkt.biz.form.needs')}
        </Label>
        <textarea
          id="biz-needs"
          name="needs"
          rows={3}
          maxLength={600}
          placeholder={tx('mkt.biz.form.needs_ph')}
          className="w-full resize-none rounded-lg border border-input bg-transparent px-3.5 py-2.5 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 dark:bg-input/20"
          dir="auto"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="biz-phone" dir="auto">
          {tx('mkt.biz.form.phone')}{' '}
          <span className="text-muted-foreground">({tx('mkt.biz.form.optional')})</span>
        </Label>
        <Input id="biz-phone" name="phone" maxLength={40} autoComplete="tel" />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span dir="auto">{errorMsg}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full gap-2 text-base font-semibold"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <span dir="auto">{tx('mkt.biz.form.sending')}</span>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            <span dir="auto">{tx('mkt.biz.form.submit')}</span>
          </>
        )}
      </Button>

      <p className="text-center text-caption text-muted-foreground" dir="auto">
        {tx('mkt.biz.form.reassure')}
      </p>
    </form>
  )
}
