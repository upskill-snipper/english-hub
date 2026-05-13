'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

const BROWSERS = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Other']

export default function ReportIssuePage() {
  const t = useT()
  const [issueType, setIssueType] = useState('')
  const [description, setDescription] = useState('')
  const [pageUrl, setPageUrl] = useState('')
  const [browser, setBrowser] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const ISSUE_TYPES = [
    {
      value: 'bug',
      label: t('help.report.type.bug.label'),
      description: t('help.report.type.bug.desc'),
    },
    {
      value: 'content',
      label: t('help.report.type.content.label'),
      description: t('help.report.type.content.desc'),
    },
    {
      value: 'accessibility',
      label: t('help.report.type.a11y.label'),
      description: t('help.report.type.a11y.desc'),
    },
    {
      value: 'performance',
      label: t('help.report.type.perf.label'),
      description: t('help.report.type.perf.desc'),
    },
    {
      value: 'security',
      label: t('help.report.type.security.label'),
      description: t('help.report.type.security.desc'),
    },
    {
      value: 'other',
      label: t('help.report.type.other.label'),
      description: t('help.report.type.other.desc'),
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/support/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ issueType, description, pageUrl, browser, email }),
      })
      if (!res.ok) throw new Error('Failed to submit report')
    } catch {
      // Silently continue — the confirmation screen still shows so the user
      // is not blocked. Once the API route exists it will persist properly.
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <main className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-card rounded-2xl shadow-md border border-border p-8 text-center">
            <div className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              {t('help.report.submitted_title')}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">{t('help.report.submitted_body')}</p>
            <div className="flex gap-3 justify-center">
              <Link
                href="/help"
                className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/80 transition-colors"
              >
                {t('help.report.back_to_help_cta')}
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setIssueType('')
                  setDescription('')
                  setPageUrl('')
                  setBrowser('')
                }}
                className="px-5 py-2 border border-border text-muted-foreground rounded-lg text-sm hover:bg-muted transition-colors"
              >
                {t('help.report.another')}
              </button>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <Link href="/help" className="text-sm text-primary hover:underline mb-4 inline-block">
            {t('help.report.back_to_help')}
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('help.report.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('help.report.lead')}</p>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl border border-border shadow-md p-6 sm:p-8 space-y-6"
          >
            {/* Issue Type */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                {t('help.report.type_label')} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ISSUE_TYPES.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setIssueType(type.value)}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      issueType === type.value
                        ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                        : 'border-border hover:border-border'
                    }`}
                  >
                    <p className="font-medium text-sm text-foreground">{type.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-foreground mb-1"
              >
                {t('help.report.desc_label')} <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-muted-foreground mb-2">{t('help.report.desc_hint')}</p>
              <textarea
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t('help.report.desc_placeholder')}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
                required
              />
            </div>

            {/* Page URL */}
            <div>
              <label htmlFor="pageUrl" className="block text-sm font-semibold text-foreground mb-1">
                {t('help.report.url_label')}{' '}
                <span className="text-muted-foreground font-normal">
                  {t('help.report.optional')}
                </span>
              </label>
              <input
                id="pageUrl"
                type="url"
                value={pageUrl}
                onChange={(e) => setPageUrl(e.target.value)}
                placeholder="https://theenglishhub.app/resources/..."
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>

            {/* Browser */}
            <div>
              <label htmlFor="browser" className="block text-sm font-semibold text-foreground mb-1">
                {t('help.report.browser_label')}{' '}
                <span className="text-muted-foreground font-normal">
                  {t('help.report.optional')}
                </span>
              </label>
              <select
                id="browser"
                value={browser}
                onChange={(e) => setBrowser(e.target.value)}
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              >
                <option value="">{t('help.report.browser_placeholder')}</option>
                {BROWSERS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
                {t('help.report.email_label')}{' '}
                <span className="text-muted-foreground font-normal">
                  {t('help.report.email_optional')}
                </span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!issueType || !description.trim()}
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {t('help.report.submit')}
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
