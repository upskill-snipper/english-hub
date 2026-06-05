'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

// value paired with its translation key; label resolved at render via t().
const REASON_OPTIONS = [
  { value: '', key: 'dash.review_req.reason.default' },
  { value: 'inaccurate', key: 'dash.review_req.reason.inaccurate' },
  { value: 'unclear', key: 'dash.review_req.reason.unclear' },
  { value: 'unfair-score', key: 'dash.review_req.reason.unfair_score' },
  { value: 'missed-points', key: 'dash.review_req.reason.missed_points' },
  { value: 'other', key: 'dash.review_req.reason.other' },
] as const

const DETAIL_MAX = 2000
const SELF_ASSESSMENT_MAX = 1500

interface Essay {
  id: string
  title: string
}

interface SubmissionResult {
  referenceNumber: string
  estimatedResponse: string
}

export default function ReviewRequestPage() {
  const t = useT()
  const searchParams = useSearchParams()
  const preselectedEssayId = searchParams.get('essayId') ?? ''

  const [essays, setEssays] = useState<Essay[]>([])
  const [essayId, setEssayId] = useState(preselectedEssayId)
  const [reason, setReason] = useState('')
  const [detail, setDetail] = useState('')
  const [selfAssessment, setSelfAssessment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<SubmissionResult | null>(null)

  // Fetch user's essays for the dropdown
  useEffect(() => {
    async function fetchEssays() {
      try {
        const res = await fetch('/api/essays')
        if (res.ok) {
          const data = await res.json()
          setEssays(data.essays ?? [])
        }
      } catch {
        // Silently fail - user can still type an ID manually
      }
    }
    fetchEssays()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!essayId) {
      setError(t('dash.review_req.err.essay'))
      return
    }
    if (!reason) {
      setError(t('dash.review_req.err.reason'))
      return
    }
    if (!detail.trim()) {
      setError(t('dash.review_req.err.detail'))
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          essayId,
          reason,
          detail: detail.trim(),
          selfAssessment: selfAssessment.trim() || undefined,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? t('dash.review_req.err.try_again'))
      }

      const data = await res.json()
      setResult({
        referenceNumber: data.referenceNumber,
        estimatedResponse: data.estimatedResponse,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : t('dash.review_req.err.generic'))
    } finally {
      setSubmitting(false)
    }
  }

  // ---------- Confirmation screen ----------
  if (result) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="card text-center">
          {/* Checkmark */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-semibold text-primary">{t('dash.review_req.done_title')}</h1>
          <p className="mt-2 text-muted-foreground">{t('dash.review_req.done_body')}</p>

          <div className="mt-6 rounded-lg bg-background p-4 text-sm">
            <p className="text-muted-foreground">{t('dash.review_req.ref_label')}</p>
            <p className="mt-1 text-lg font-mono font-semibold text-primary">
              {result.referenceNumber}
            </p>
          </div>

          <div className="mt-4 rounded-lg bg-accent/5 border border-accent/20 p-4 text-sm text-foreground">
            <p>
              <strong>{t('dash.review_req.est_response')}</strong> {result.estimatedResponse}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t('dash.review_req.email_notify')}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard" className="btn-primary text-sm">
              {t('dash.review_req.back_dash')}
            </Link>
            <Link
              href={`/dashboard/review/${result.referenceNumber}`}
              className="btn-outline text-sm"
            >
              {t('dash.review_req.track')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ---------- Form ----------
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-2">
        <Link
          href="/dashboard"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {t('dash.review_req.back')}
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-primary">{t('dash.review_req.title')}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{t('dash.review_req.intro')}</p>

      {/* Rights notice */}
      <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
        <p className="font-medium text-primary">{t('dash.review_req.rights_title')}</p>
        <p className="mt-1">{t('dash.review_req.rights_body')}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Essay selector */}
        <div>
          <label htmlFor="essayId" className="block text-sm font-medium text-foreground">
            {t('dash.review_req.which_essay')} <span className="text-red-500">*</span>
          </label>
          <select
            id="essayId"
            value={essayId}
            onChange={(e) => setEssayId(e.target.value)}
            className="input-field mt-1"
            required
          >
            <option value="">{t('dash.review_req.select_essay')}</option>
            {essays.map((essay) => (
              <option key={essay.id} value={essay.id}>
                {essay.title}
              </option>
            ))}
            {/* If preselected ID isn't in the list, still show it */}
            {preselectedEssayId && !essays.find((e) => e.id === preselectedEssayId) && (
              <option value={preselectedEssayId}>
                {t('dash.review_req.essay_fallback').replace('{id}', preselectedEssayId)}
              </option>
            )}
          </select>
        </div>

        {/* Reason */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-foreground">
            {t('dash.review_req.why')} <span className="text-red-500">*</span>
          </label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="input-field mt-1"
            required
          >
            {REASON_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t(opt.key)}
              </option>
            ))}
          </select>
        </div>

        {/* Detail */}
        <div>
          <label htmlFor="detail" className="block text-sm font-medium text-foreground">
            {t('dash.review_req.tell_more')} <span className="text-red-500">*</span>
          </label>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {t('dash.review_req.tell_more_hint')}
          </p>
          <textarea
            id="detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value.slice(0, DETAIL_MAX))}
            rows={5}
            className="input-field mt-1 resize-y"
            placeholder={t('dash.review_req.detail_ph')}
            required
          />
          <p
            className={`mt-1 text-right text-xs ${
              detail.length >= DETAIL_MAX ? 'text-red-500 font-medium' : 'text-muted-foreground'
            }`}
          >
            {detail.length}/{DETAIL_MAX}
          </p>
        </div>

        {/* Self-assessment (optional) */}
        <div>
          <label htmlFor="selfAssessment" className="block text-sm font-medium text-foreground">
            {t('dash.review_req.self_label')}{' '}
            <span className="text-muted-foreground font-normal">
              {t('dash.review_req.optional')}
            </span>
          </label>
          <p className="mt-0.5 text-xs text-muted-foreground">{t('dash.review_req.self_hint')}</p>
          <textarea
            id="selfAssessment"
            value={selfAssessment}
            onChange={(e) => setSelfAssessment(e.target.value.slice(0, SELF_ASSESSMENT_MAX))}
            rows={4}
            className="input-field mt-1 resize-y"
            placeholder={t('dash.review_req.self_ph')}
          />
          <p
            className={`mt-1 text-right text-xs ${
              selfAssessment.length >= SELF_ASSESSMENT_MAX
                ? 'text-red-500 font-medium'
                : 'text-muted-foreground'
            }`}
          >
            {selfAssessment.length}/{SELF_ASSESSMENT_MAX}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300"
          >
            {error}
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={submitting} className="btn-primary w-full">
          {submitting ? t('dash.review_req.submitting') : t('dash.review_req.submit')}
        </button>
      </form>
    </div>
  )
}
