'use client'

/**
 * InlineAIConsentPrompt - the way out of an AI consent block, shown exactly
 * where the block happened.
 *
 * WHY THIS EXISTS
 *
 * A learner who pressed "get feedback" was answered with a 403 and a
 * sentence telling them to go and change a setting on another page. That is
 * a dead end in the middle of a task: they lose their place, and a paying
 * customer wrote in confused by it. This panel renders in place, states
 * plainly what AI is used for and what gets sent, and offers ONE control
 * that records the consent and immediately retries the thing they were
 * doing. Nothing is lost and nothing is navigated away from.
 *
 * WHAT IT MUST NEVER DO
 *
 *  - Consent is an ACTIVE act. There is no pre-ticked box, no default-on
 *    state, and dismissing the panel records nothing at all. The only thing
 *    that writes to the ledger is a deliberate click on the labelled button,
 *    recorded as method EXPLICIT against the version the SERVER reports.
 *  - A child without guardian approval is NEVER offered a self-grant. On
 *    `parental_consent_required` this panel shows the guardian route and no
 *    grant control whatsoever.
 *  - An account with no date of birth is not guessed at. Unknown age blocks,
 *    so the panel asks for the date and then retries the original action:
 *    whatever gate answers next is the honest one.
 *  - The policy version is never hard-coded in the browser. If the server
 *    does not tell us which version this grant is against, the panel refuses
 *    to record anything and points at the full consent page instead.
 *
 * Withdrawal is offered on every variant, linking to Manage your consents
 * (UK GDPR Art.7(3)). The note deliberately does NOT claim withdrawal is "one
 * click, the same as giving it": granting happens in place, here, whereas
 * withdrawing means opening that page, finding the row, clicking, and
 * clearing a confirm() dialog. Art.7(3) parity is the intent and closing that
 * gap is real work; until it is closed the copy states what is true - no
 * reason needed, effective immediately - rather than a parity we have not
 * built.
 *
 * LANGUAGES (12 October 2026). Every visible string comes from the
 * dictionary (consent.inline.*) in English, Arabic and Spanish. It was
 * English-only, and that day it began appearing on IELTS and EAL pages read
 * by Arabic-speaking learners in the Gulf: a consent decision has to be one
 * the reader can read. The English is the wording this panel always had,
 * unchanged. The Arabic and Spanish have not been checked by a native
 * speaker. The server's own sentence (refusal.message) is shown as sent.
 */

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertCircle, Loader2, ShieldCheck } from 'lucide-react'
import { CONSENT_REFUSAL_CODES } from '@/lib/consent-codes'
import { useT } from '@/lib/i18n/use-t'
import type { AIConsentRefusal } from './ai-consent-refusal'

// ─── Props ──────────────────────────────────────────────────────────────

export interface InlineAIConsentPromptProps {
  /** The refusal read off the 403. Render nothing when this is null. */
  refusal: AIConsentRefusal
  /**
   * Re-runs the action the learner was blocked on, with their work intact.
   * Called after a consent is recorded, and after a date of birth is saved.
   */
  onResolved: () => void
  /** Optional "not now". Dismissing must change nothing on the ledger. */
  onDismiss?: () => void
  className?: string
}

// ─── Constants ──────────────────────────────────────────────────────────

const AI_PROCESSING = 'AI_PROCESSING'
const CONSENT_PAGE = '/dashboard/consent'
const GUARDIAN_PAGE = '/consent/status'
const AI_TRANSPARENCY_PAGE = '/legal/ai-transparency'
const PRIVACY_PAGE = '/legal/privacy'

// ─── Shell ──────────────────────────────────────────────────────────────

function Panel({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      role="region"
      aria-label={title}
      className={
        'not-prose my-4 rounded-xl border border-primary/30 bg-primary/[0.04] p-4 text-sm ' +
        (className ?? '')
      }
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          {children}
        </div>
      </div>
    </section>
  )
}

function ErrorLine({ message }: { message: string }) {
  return (
    <p role="alert" className="mt-3 flex items-start gap-2 text-xs text-red-500">
      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </p>
  )
}

function WithdrawNote() {
  const t = useT()
  return (
    <p className="mt-3 text-xs text-muted-foreground">
      {t('consent.inline.withdraw_before')}{' '}
      <Link href={CONSENT_PAGE} className="text-primary underline underline-offset-2">
        {t('consent.inline.manage_link')}
      </Link>
      {t('consent.inline.withdraw_after')}
    </p>
  )
}

// ─── Variant: AI-processing consent (self-grant) ────────────────────────

function AIProcessingVariant({
  onResolved,
  onDismiss,
  className,
}: Omit<InlineAIConsentPromptProps, 'refusal'>) {
  const t = useT()
  const [version, setVersion] = useState<string | null>(null)
  const [versionLoaded, setVersionLoaded] = useState(false)
  const [granting, setGranting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // The version this grant is recorded against comes from the server
  // (POLICY_VERSIONS, served by GET /api/consent as `grantable`). A consent
  // record cites the wording the person was shown, so a browser-invented
  // version would make the ledger entry meaningless.
  useEffect(() => {
    let cancelled = false
    fetch('/api/consent')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { grantable?: { consentType: string; version: string }[] } | null) => {
        if (cancelled) return
        const entry = data?.grantable?.find((g) => g.consentType === AI_PROCESSING)
        setVersion(entry?.version ?? null)
        setVersionLoaded(true)
      })
      .catch(() => {
        if (cancelled) return
        setVersion(null)
        setVersionLoaded(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const grant = useCallback(async () => {
    if (!version) return
    setGranting(true)
    setError(null)
    try {
      const res = await fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          consentType: AI_PROCESSING,
          version,
          granted: true,
          // A deliberate click on a labelled button. Not a pre-ticked box,
          // and not implied by anything else the learner did.
          method: 'EXPLICIT',
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(
          (data as { error?: string } | null)?.error ?? t('consent.inline.error_record'),
        )
      }
      // Recorded. Retry the exact action they were blocked on.
      onResolved()
    } catch (err) {
      setError(err instanceof Error ? err.message : t('consent.inline.error_record'))
    } finally {
      setGranting(false)
    }
  }, [version, onResolved, t])

  return (
    <Panel title={t('consent.inline.ai.title')} className={className}>
      <p className="mt-1 text-muted-foreground">{t('consent.inline.ai.intro')}</p>

      <ul className="mt-3 list-disc space-y-1.5 ps-5 text-muted-foreground">
        <li>
          <span className="font-medium text-foreground">{t('consent.inline.ai.use_label')}</span>{' '}
          {t('consent.inline.ai.use_body')}
        </li>
        <li>
          <span className="font-medium text-foreground">{t('consent.inline.ai.sent_label')}</span>{' '}
          {t('consent.inline.ai.sent_body')}
        </li>
        <li>
          <span className="font-medium text-foreground">{t('consent.inline.ai.grade_label')}</span>{' '}
          {t('consent.inline.ai.grade_body')}
        </li>
      </ul>

      <p className="mt-3 text-xs text-muted-foreground">
        {t('consent.inline.ai.read_more_before')}{' '}
        <Link href={AI_TRANSPARENCY_PAGE} className="text-primary underline underline-offset-2">
          {t('consent.inline.ai.transparency_link')}
        </Link>{' '}
        {t('consent.inline.ai.read_more_and')}{' '}
        <Link href={PRIVACY_PAGE} className="text-primary underline underline-offset-2">
          {t('consent.inline.ai.privacy_link')}
        </Link>
        .
      </p>

      {versionLoaded && !version ? (
        <p className="mt-3 text-muted-foreground">
          {t('consent.inline.ai.no_version_before')}{' '}
          <Link href={CONSENT_PAGE} className="text-primary underline underline-offset-2">
            {t('consent.inline.manage_link')}
          </Link>{' '}
          {t('consent.inline.ai.no_version_after')}
        </p>
      ) : (
        <>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={grant}
              disabled={!version || granting}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {granting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {granting ? t('consent.inline.ai.recording') : t('consent.inline.ai.agree')}
            </button>

            {onDismiss && (
              <button
                type="button"
                onClick={onDismiss}
                disabled={granting}
                className="rounded-md border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-60"
              >
                {t('consent.inline.ai.not_now')}
              </button>
            )}
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            {t('consent.inline.ai.nothing_unless')}
            {version ? (
              <> {t('consent.inline.ai.version_note').replace('{version}', version)}</>
            ) : null}
            {t('consent.inline.ai.closing_records_nothing')}
          </p>
        </>
      )}

      {error && <ErrorLine message={error} />}
      <WithdrawNote />
    </Panel>
  )
}

// ─── Variant: guardian approval required ────────────────────────────────

function GuardianVariant({ message, className }: { message: string; className?: string }) {
  const t = useT()
  return (
    <Panel title={t('consent.inline.guardian.title')} className={className}>
      {message && <p className="mt-1 text-muted-foreground">{message}</p>}
      <p className="mt-3 text-muted-foreground">{t('consent.inline.guardian.body')}</p>
      <p className="mt-3">
        <Link
          href={GUARDIAN_PAGE}
          className="inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          {t('consent.inline.guardian.link')}
        </Link>
      </p>
      <p className="mt-3 text-xs text-muted-foreground">{t('consent.inline.guardian.work_kept')}</p>
    </Panel>
  )
}

// ─── Variant: date of birth needed ──────────────────────────────────────

function DateOfBirthVariant({
  message,
  onResolved,
  className,
}: {
  message: string
  onResolved: () => void
  className?: string
}) {
  const t = useT()
  const [dob, setDob] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const save = useCallback(async () => {
    if (!dob) return
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/profile/dob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dateOfBirth: dob }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(
          (data as { error?: string } | null)?.error ?? t('consent.inline.dob.error_save'),
        )
      }
      // Saved. Retry the original action: the gate will now answer with what
      // is actually needed, which may still be a parent or guardian.
      onResolved()
    } catch (err) {
      setError(err instanceof Error ? err.message : t('consent.inline.dob.error_save'))
    } finally {
      setSaving(false)
    }
  }, [dob, onResolved, t])

  return (
    <Panel title={t('consent.inline.dob.title')} className={className}>
      {message && <p className="mt-1 text-muted-foreground">{message}</p>}
      <p className="mt-3 text-muted-foreground">{t('consent.inline.dob.body')}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label htmlFor="inline-consent-dob" className="sr-only">
          {t('consent.inline.dob.label')}
        </label>
        <input
          id="inline-consent-dob"
          type="date"
          value={dob}
          max={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setDob(e.target.value)}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        />
        <button
          type="button"
          onClick={save}
          disabled={!dob || saving}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {saving && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {saving ? t('consent.inline.dob.saving') : t('consent.inline.dob.save')}
        </button>
      </div>

      {error && <ErrorLine message={error} />}
    </Panel>
  )
}

// ─── Component ──────────────────────────────────────────────────────────

export function InlineAIConsentPrompt({
  refusal,
  onResolved,
  onDismiss,
  className,
}: InlineAIConsentPromptProps) {
  if (refusal.code === CONSENT_REFUSAL_CODES.PARENTAL_CONSENT_REQUIRED) {
    return <GuardianVariant message={refusal.message} className={className} />
  }

  if (refusal.code === CONSENT_REFUSAL_CODES.DATE_OF_BIRTH_REQUIRED) {
    return (
      <DateOfBirthVariant message={refusal.message} onResolved={onResolved} className={className} />
    )
  }

  if (refusal.code === CONSENT_REFUSAL_CODES.AI_PROCESSING_REQUIRED) {
    return (
      <AIProcessingVariant onResolved={onResolved} onDismiss={onDismiss} className={className} />
    )
  }

  // Fail closed. A code this build does not recognise must never fall
  // through to the self-grant control: the caller keeps showing the
  // server's own sentence instead.
  return null
}

export default InlineAIConsentPrompt
