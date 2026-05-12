'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useT } from '@/lib/i18n/use-t'

/* ─── Types ──────────────────────────────────────────────────── */

type FeedbackTab = 'suggestion' | 'issue'

interface SuggestionData {
  subject: string
  message: string
  category: string
  email: string
}

interface IssueData {
  issueType: string
  description: string
  severity: string
  email: string
  screenshot: File | null
}

const SUGGESTION_CATEGORIES = ['Feature Request', 'Content Improvement', 'UI/UX', 'Other']

const ISSUE_TYPES = ['Bug', 'Broken Link', 'Error', 'Incorrect Content', 'Other']

const SEVERITY_LEVELS = ['Minor', 'Major', 'Critical']

/* ─── FeedbackWidget ─────────────────────────────────────────── */

export function FeedbackWidget() {
  const t = useT()
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<FeedbackTab>('suggestion')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Suggestion form state
  const [suggestion, setSuggestion] = useState<SuggestionData>({
    subject: '',
    message: '',
    category: SUGGESTION_CATEGORIES[0],
    email: '',
  })

  // Issue form state
  const [issue, setIssue] = useState<IssueData>({
    issueType: ISSUE_TYPES[0],
    description: '',
    severity: SEVERITY_LEVELS[0],
    email: '',
    screenshot: null,
  })

  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  /* ── Reset form ──────────────────────────────────────────── */

  const resetForms = useCallback(() => {
    setSuggestion({
      subject: '',
      message: '',
      category: SUGGESTION_CATEGORIES[0],
      email: '',
    })
    setIssue({
      issueType: ISSUE_TYPES[0],
      description: '',
      severity: SEVERITY_LEVELS[0],
      email: '',
      screenshot: null,
    })
    if (fileInputRef.current) fileInputRef.current.value = ''
  }, [])

  /* ── Close handler ───────────────────────────────────────── */

  const close = useCallback(() => {
    setIsOpen(false)
    setSubmitted(false)
    triggerRef.current?.focus()
  }, [])

  /* ── Focus trap + Escape ─────────────────────────────────── */

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        return
      }

      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return

      const focusable = panel.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    // Focus the first focusable element inside the panel
    const timer = setTimeout(() => {
      const first = panelRef.current?.querySelector<HTMLElement>(
        'button, [tabindex]:not([tabindex="-1"])',
      )
      first?.focus()
    }, 0)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, close])

  /* ── Click outside to close ──────────────────────────────── */

  useEffect(() => {
    if (!isOpen) return

    const handleClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        close()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen, close])

  /* ── Submit ──────────────────────────────────────────────── */

  const handleSubmit = async () => {
    setSubmitting(true)

    const pageUrl = window.location.href
    const payload =
      activeTab === 'suggestion'
        ? {
            type: 'suggestion' as const,
            subject: suggestion.subject,
            message: suggestion.message,
            category: suggestion.category,
            email: suggestion.email || undefined,
            pageUrl,
          }
        : {
            type: 'issue' as const,
            issueType: issue.issueType,
            description: issue.description,
            severity: issue.severity,
            email: issue.email || undefined,
            pageUrl,
          }

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setSubmitted(true)
        resetForms()
      }
    } catch {
      // Silently fail — could add error toast here
    } finally {
      setSubmitting(false)
    }
  }

  const canSubmitSuggestion = suggestion.subject.trim() !== '' && suggestion.message.trim() !== ''
  const canSubmitIssue = issue.description.trim() !== ''

  /* ── Shared form styles ──────────────────────────────────── */

  const labelClass = 'block text-sm font-medium text-foreground mb-1'
  const inputClass =
    'w-full rounded-lg border border-border px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
  const selectClass =
    'w-full rounded-lg border border-border px-3 py-2 text-sm text-foreground bg-card focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

  return (
    <>
      {/* ── Floating trigger button ──────────────────────────── */}
      <button
        ref={triggerRef}
        onClick={() => {
          setIsOpen((prev) => !prev)
          if (submitted) setSubmitted(false)
        }}
        aria-label={isOpen ? t('marking.feedback_close_aria') : t('marking.feedback_open_aria')}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:scale-110"
      >
        {isOpen ? (
          /* X icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Lightbulb / speech bubble hybrid icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* ── Feedback panel / popover ─────────────────────────── */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('marking.feedback_form_aria')}
          className="fixed bottom-20 right-4 z-40 w-[calc(100vw-2rem)] max-w-md rounded-xl bg-card shadow-2xl border border-border overflow-hidden sm:w-96"
        >
          {/* ── Success state ──────────────────────────────── */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t('marking.feedback_thanks_title')}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t('marking.feedback_thanks_body')}
                </p>
              </div>
              <button
                onClick={close}
                className="mt-2 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {t('marking.close')}
              </button>
            </div>
          ) : (
            <>
              {/* ── Header ─────────────────────────────────── */}
              <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
                <h2 className="text-sm font-semibold text-foreground">
                  {t('marking.share_your_feedback')}
                </h2>
                <button
                  onClick={close}
                  aria-label={t('marking.feedback_close_aria')}
                  className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ── Tab toggle ─────────────────────────────── */}
              <div
                className="flex border-b border-border"
                role="tablist"
                aria-label={t('marking.feedback_type_aria')}
              >
                <button
                  role="tab"
                  aria-selected={activeTab === 'suggestion'}
                  aria-controls="panel-suggestion"
                  id="tab-suggestion"
                  onClick={() => setActiveTab('suggestion')}
                  className={`flex-1 py-2.5 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                    activeTab === 'suggestion'
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t('marking.tab_suggestion')}
                  {activeTab === 'suggestion' && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
                  )}
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === 'issue'}
                  aria-controls="panel-issue"
                  id="tab-issue"
                  onClick={() => setActiveTab('issue')}
                  className={`flex-1 py-2.5 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                    activeTab === 'issue'
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t('marking.tab_report_issue')}
                  {activeTab === 'issue' && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
                  )}
                </button>
              </div>

              {/* ── Form body ──────────────────────────────── */}
              <div className="max-h-[60vh] overflow-y-auto p-4">
                {/* ── Suggestion tab ───────────────────────── */}
                {activeTab === 'suggestion' && (
                  <div
                    id="panel-suggestion"
                    role="tabpanel"
                    aria-labelledby="tab-suggestion"
                    className="space-y-3"
                  >
                    <div>
                      <label htmlFor="fb-subject" className={labelClass}>
                        {t('marking.feedback_subject')} <span className="text-warn">*</span>
                      </label>
                      <input
                        id="fb-subject"
                        type="text"
                        maxLength={120}
                        placeholder={t('marking.feedback_subject_placeholder')}
                        value={suggestion.subject}
                        onChange={(e) => setSuggestion((s) => ({ ...s, subject: e.target.value }))}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="fb-message" className={labelClass}>
                        {t('marking.feedback_message')} <span className="text-warn">*</span>
                      </label>
                      <textarea
                        id="fb-message"
                        rows={4}
                        maxLength={2000}
                        placeholder={t('marking.feedback_message_placeholder')}
                        value={suggestion.message}
                        onChange={(e) => setSuggestion((s) => ({ ...s, message: e.target.value }))}
                        className={inputClass + ' resize-none'}
                      />
                    </div>

                    <div>
                      <label htmlFor="fb-category" className={labelClass}>
                        {t('marking.feedback_category')}
                      </label>
                      <select
                        id="fb-category"
                        value={suggestion.category}
                        onChange={(e) => setSuggestion((s) => ({ ...s, category: e.target.value }))}
                        className={selectClass}
                      >
                        {SUGGESTION_CATEGORIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="fb-email-suggestion" className={labelClass}>
                        {t('marking.feedback_email')}{' '}
                        <span className="text-muted-foreground font-normal">
                          {t('marking.optional_label')}
                        </span>
                      </label>
                      <input
                        id="fb-email-suggestion"
                        type="email"
                        placeholder="your@email.com"
                        value={suggestion.email}
                        onChange={(e) => setSuggestion((s) => ({ ...s, email: e.target.value }))}
                        className={inputClass}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={!canSubmitSuggestion || submitting}
                      className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    >
                      {submitting ? t('marking.submitting') : t('marking.submit_suggestion')}
                    </button>
                  </div>
                )}

                {/* ── Report Issue tab ─────────────────────── */}
                {activeTab === 'issue' && (
                  <div
                    id="panel-issue"
                    role="tabpanel"
                    aria-labelledby="tab-issue"
                    className="space-y-3"
                  >
                    <div>
                      <label htmlFor="fb-issue-type" className={labelClass}>
                        {t('marking.issue_type')}
                      </label>
                      <select
                        id="fb-issue-type"
                        value={issue.issueType}
                        onChange={(e) => setIssue((s) => ({ ...s, issueType: e.target.value }))}
                        className={selectClass}
                      >
                        {ISSUE_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="fb-description" className={labelClass}>
                        {t('marking.feedback_description')} <span className="text-warn">*</span>
                      </label>
                      <textarea
                        id="fb-description"
                        rows={4}
                        maxLength={2000}
                        placeholder={t('marking.issue_description_placeholder')}
                        value={issue.description}
                        onChange={(e) => setIssue((s) => ({ ...s, description: e.target.value }))}
                        className={inputClass + ' resize-none'}
                      />
                    </div>

                    <div>
                      <label htmlFor="fb-severity" className={labelClass}>
                        {t('marking.feedback_severity')}
                      </label>
                      <select
                        id="fb-severity"
                        value={issue.severity}
                        onChange={(e) => setIssue((s) => ({ ...s, severity: e.target.value }))}
                        className={selectClass}
                      >
                        {SEVERITY_LEVELS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="fb-screenshot" className={labelClass}>
                        {t('marking.feedback_screenshot')}{' '}
                        <span className="text-muted-foreground font-normal">
                          {t('marking.optional_label')}
                        </span>
                      </label>
                      <input
                        id="fb-screenshot"
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setIssue((s) => ({
                            ...s,
                            screenshot: e.target.files?.[0] ?? null,
                          }))
                        }
                        className="w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20 focus-visible:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="fb-email-issue" className={labelClass}>
                        {t('marking.feedback_email')}{' '}
                        <span className="text-muted-foreground font-normal">
                          {t('marking.optional_label')}
                        </span>
                      </label>
                      <input
                        id="fb-email-issue"
                        type="email"
                        placeholder="your@email.com"
                        value={issue.email}
                        onChange={(e) => setIssue((s) => ({ ...s, email: e.target.value }))}
                        className={inputClass}
                      />
                    </div>

                    <div className="rounded-lg bg-background px-3 py-2 text-xs text-muted-foreground">
                      {t('marking.page_url_auto')}
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={!canSubmitIssue || submitting}
                      className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    >
                      {submitting ? t('marking.submitting') : t('marking.report_issue')}
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
