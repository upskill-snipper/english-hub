'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

// ─── Report type options ────────────────────────────────────────────────

const REPORT_TYPES = [
  {
    value: 'WORRIED_ABOUT_MYSELF',
    labelKey: 'safeguard.report.field.type.worried_self',
    severity: 'HIGH' as const,
  },
  {
    value: 'WORRIED_ABOUT_SOMEONE',
    labelKey: 'safeguard.report.field.type.worried_other',
    severity: 'HIGH' as const,
  },
  {
    value: 'PLATFORM_CONCERN',
    labelKey: 'safeguard.report.field.type.platform',
    severity: 'MEDIUM' as const,
  },
  {
    value: 'OTHER',
    labelKey: 'safeguard.report.field.type.other',
    severity: 'LOW' as const,
  },
] as const

type ReportTypeValue = (typeof REPORT_TYPES)[number]['value']

const DESCRIPTION_MAX = 5000

interface SubmissionResult {
  referenceNumber: string
}

// ─── External support resources ─────────────────────────────────────────

function SupportResources() {
  const t = useT()
  return (
    <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
      <h2 className="text-sm font-semibold text-primary">{t('safeguard.report.support_title')}</h2>
      <p className="mt-1 text-xs text-muted-foreground">{t('safeguard.report.support_subtitle')}</p>
      <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
        <li className="flex items-start gap-2">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </span>
          <div>
            <strong>{t('safeguard.report.childline_label')}</strong> &mdash;{' '}
            <a
              href="tel:08001111"
              className="font-semibold text-accent hover:text-primary underline"
            >
              0800 1111
            </a>
            <span className="block text-xs text-muted-foreground">
              {t('safeguard.report.childline_note')}
            </span>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </span>
          <div>
            <strong>{t('safeguard.report.nspcc_label')}</strong> &mdash;{' '}
            <a
              href="tel:08088005000"
              className="font-semibold text-accent hover:text-primary underline"
            >
              0808 800 5000
            </a>
            <span className="block text-xs text-muted-foreground">
              {t('safeguard.report.nspcc_note')}
            </span>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div>
            <strong>{t('safeguard.report.ceop_label')}</strong> &mdash;{' '}
            <a
              href="https://www.ceop.police.uk/ceop-reporting/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:text-primary underline"
            >
              {t('safeguard.report.ceop_link')}
            </a>
            <span className="block text-xs text-muted-foreground">
              {t('safeguard.report.ceop_note')}
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}

// ─── Main page component ────────────────────────────────────────────────

export default function SafeguardingReportPage() {
  const t = useT()
  const [reportType, setReportType] = useState<ReportTypeValue | ''>('')
  const [description, setDescription] = useState('')
  const [reporterName, setReporterName] = useState('')
  const [reporterContact, setReporterContact] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<SubmissionResult | null>(null)

  function getAutoSeverity(): string {
    const match = REPORT_TYPES.find((rt) => rt.value === reportType)
    return match?.severity ?? 'LOW'
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!reportType) {
      setError(t('safeguard.report.err.select_type'))
      return
    }
    if (!description.trim()) {
      setError(t('safeguard.report.err.description_required'))
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/safeguarding/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reportType,
          description: description.trim(),
          severity: getAutoSeverity(),
          reporterName: reporterName.trim() || undefined,
          reporterContact: reporterContact.trim() || undefined,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? t('safeguard.report.err.generic'))
      }

      const data = await res.json()
      setResult({ referenceNumber: data.referenceNumber })
    } catch (err) {
      setError(err instanceof Error ? err.message : t('safeguard.report.err.generic'))
    } finally {
      setSubmitting(false)
    }
  }

  // ────── Confirmation screen ──────

  if (result) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="card text-center">
          {/* Heart icon */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-semibold text-primary">
            {t('safeguard.report.confirm_heading')}
          </h1>
          <p className="mt-2 text-muted-foreground">{t('safeguard.report.confirm_body')}</p>

          <div className="mt-6 rounded-lg bg-muted p-4 text-sm">
            <p className="text-muted-foreground">{t('safeguard.report.ref_label')}</p>
            <p className="mt-1 text-lg font-mono font-semibold text-primary">
              {result.referenceNumber}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{t('safeguard.report.ref_note')}</p>
          </div>

          <div className="mt-6 rounded-lg bg-primary/5 border border-primary/20 p-4 text-sm text-muted-foreground">
            <p>
              <strong>{t('safeguard.report.next.title')}</strong>
            </p>
            <p className="mt-1">{t('safeguard.report.next.body')}</p>
          </div>

          {/* Support resources */}
          <div className="mt-6">
            <SupportResources />
          </div>

          <div className="mt-8">
            <Link href="/" className="btn-primary text-sm">
              {t('safeguard.report.return_home')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ────── Report form ──────

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-2">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; {t('safeguard.back_home')}
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-primary">{t('safeguard.report.page_heading')}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{t('safeguard.report.page_subhead')}</p>

      {/* Reassurance banner */}
      <div className="mt-4 rounded-lg border border-success/20 bg-success/5 p-4 text-sm text-muted-foreground">
        <p className="font-medium text-success-700">{t('safeguard.report.reassure_title')}</p>
        <p className="mt-1">{t('safeguard.report.reassure_body')}</p>
      </div>

      {/* External support - always visible */}
      <div className="mt-6">
        <SupportResources />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Report type */}
        <fieldset>
          <legend className="block text-sm font-medium text-muted-foreground">
            {t('safeguard.report.field.type_legend')} <span className="text-red-500">*</span>
          </legend>
          <div className="mt-2 space-y-2">
            {REPORT_TYPES.map((rt) => (
              <label
                key={rt.value}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition-colors ${
                  reportType === rt.value
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border bg-card text-muted-foreground hover:border-border'
                }`}
              >
                <input
                  type="radio"
                  name="reportType"
                  value={rt.value}
                  checked={reportType === rt.value}
                  onChange={() => setReportType(rt.value)}
                  className="sr-only"
                />
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    reportType === rt.value ? 'border-primary' : 'border-border'
                  }`}
                  aria-hidden="true"
                >
                  {reportType === rt.value && (
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  )}
                </span>
                {t(rt.labelKey)}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-muted-foreground">
            {t('safeguard.report.field.description_label')} <span className="text-red-500">*</span>
          </label>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {t('safeguard.report.field.description_help')}
          </p>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value.slice(0, DESCRIPTION_MAX))}
            rows={6}
            className="input-field mt-1 resize-y"
            placeholder={t('safeguard.report.field.description_placeholder')}
            required
          />
          <p
            className={`mt-1 text-right text-xs ${
              description.length >= DESCRIPTION_MAX
                ? 'text-red-500 font-medium'
                : 'text-muted-foreground'
            }`}
          >
            {description.length}/{DESCRIPTION_MAX}
          </p>
        </div>

        {/* Optional contact details */}
        <div className="rounded-lg border border-border bg-muted p-4">
          <p className="text-sm font-medium text-muted-foreground">
            {t('safeguard.report.your_details')}{' '}
            <span className="font-normal text-muted-foreground">
              {t('safeguard.report.optional')}
            </span>
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {t('safeguard.report.your_details_help')}
          </p>

          <div className="mt-3 space-y-3">
            <div>
              <label
                htmlFor="reporterName"
                className="block text-xs font-medium text-muted-foreground"
              >
                {t('safeguard.report.field.name_label')}
              </label>
              <input
                id="reporterName"
                type="text"
                value={reporterName}
                onChange={(e) => setReporterName(e.target.value)}
                className="input-field mt-1"
                placeholder={t('safeguard.report.field.name_placeholder')}
                maxLength={100}
              />
            </div>
            <div>
              <label
                htmlFor="reporterContact"
                className="block text-xs font-medium text-muted-foreground"
              >
                {t('safeguard.report.field.contact_label')}
              </label>
              <input
                id="reporterContact"
                type="text"
                value={reporterContact}
                onChange={(e) => setReporterContact(e.target.value)}
                className="input-field mt-1"
                placeholder={t('safeguard.report.field.contact_placeholder')}
                maxLength={200}
              />
            </div>
          </div>
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

        {/* Emergency & SLA notice — shown directly at the point of reporting */}
        <div
          role="note"
          className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-muted-foreground"
        >
          <p className="text-red-700 dark:text-red-300">
            <strong>
              If you or someone else is in immediate danger, do not wait for this form.
            </strong>{' '}
            Call 999 (UK) or your local emergency number now. You can also contact Childline free on{' '}
            <a href="tel:08001111" className="font-semibold underline">
              0800 1111
            </a>{' '}
            (UK), the NSPCC on{' '}
            <a href="tel:08088005000" className="font-semibold underline">
              0808 800 5000
            </a>
            , or, in Qatar, the child and woman protection line on{' '}
            <a href="tel:919" className="font-semibold underline">
              919
            </a>
            .
          </p>
          <p className="mt-2">
            Your report is confidential and goes to our Designated Safeguarding Lead. We aim to
            acknowledge it within 24 hours. This form is monitored during stated hours and is not a
            live emergency channel.
          </p>
        </div>

        {/* Submit */}
        <button type="submit" disabled={submitting} className="btn-primary w-full">
          {submitting ? t('safeguard.sending_report') : t('safeguard.send_report_cta')}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          {t('safeguard.report.confidential_footer')}
        </p>
      </form>
    </div>
  )
}
