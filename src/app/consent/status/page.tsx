'use client'

/**
 * /consent/status - the signed-in student's view of their guardian consent.
 *
 * Why this page exists: a 13-15 year-old who signs up directly is blocked
 * from AI marking until a guardian approves, but before this page there was
 * nowhere for them to see whether a request had been sent, correct a
 * mistyped guardian address, or ask for the email again. The 403 from the
 * AI routes now points here.
 *
 * Everything rendered comes from GET /api/auth/parent-notify, which reads
 * the database. There is no placeholder state: if we hold no request, the
 * page says so rather than implying one is in flight.
 */

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ShieldCheck, CheckCircle, XCircle, Loader2, Clock, Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useT } from '@/lib/i18n/use-t'

interface GuardianConsentState {
  consentRequired: boolean
  consentMandatory: boolean
  status: 'none' | 'pending' | 'approved' | 'denied'
  guardianEmailMasked: string | null
  hasGuardianEmail: boolean
  lastSentAt: string | null
  expiresAt: string | null
  approvedViaSchool: boolean
  studentName: string | null
}

export default function ConsentStatusPage() {
  const t = useT()

  const [state, setState] = useState<GuardianConsentState | null>(null)
  const [loading, setLoading] = useState(true)
  const [signedOut, setSignedOut] = useState(false)
  const [guardianEmail, setGuardianEmail] = useState('')
  const [showEmailField, setShowEmailField] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState<string | null>(null)

  const loadState = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/parent-notify')
      if (res.status === 401) {
        setSignedOut(true)
        return
      }
      if (!res.ok) {
        setError(t('action.error_generic'))
        return
      }
      setState((await res.json()) as GuardianConsentState)
    } catch {
      setError(t('action.error_generic'))
    } finally {
      setLoading(false)
    }
  }, [t])

  useEffect(() => {
    loadState()
  }, [loadState])

  async function handleSend() {
    setError(null)
    setSent(null)

    // Only require the field when we have nothing on file, or the student
    // has deliberately opened it to change the address.
    const needsEmail = showEmailField || !state?.hasGuardianEmail
    if (needsEmail && !guardianEmail.trim()) {
      setError(t('consent.guardian.email_required'))
      return
    }

    setSending(true)
    try {
      const res = await fetch('/api/auth/parent-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(guardianEmail.trim() ? { parentEmail: guardianEmail.trim() } : {}),
      })
      const data = await res.json()

      if (!res.ok) {
        // The route returns a specific, true explanation for every refusal
        // (throttled, already approved, no address on file). Show it rather
        // than a generic failure the student cannot act on.
        setError(data.error ?? t('consent.guardian.send_failed'))
        return
      }

      setSent(data.message ?? null)
      setShowEmailField(false)
      setGuardianEmail('')
      await loadState()
    } catch {
      setError(t('consent.guardian.send_failed'))
    } finally {
      setSending(false)
    }
  }

  // ── Loading ───────────────────────────────────────────────────────────
  if (loading && !signedOut) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">{t('consent.form.loading')}</p>
        </div>
      </div>
    )
  }

  // ── Signed out ────────────────────────────────────────────────────────
  if (signedOut) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8 pb-8 space-y-4">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
              <h1 className="text-xl font-bold text-foreground">
                {t('consent.guardian.required_title')}
              </h1>
              <p className="text-muted-foreground">{t('consent.guardian.form_hint')}</p>
              <Button className="w-full" render={<Link href="/auth/login?next=/consent/status" />}>
                {t('auth.sign_in')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const status = state?.status ?? 'none'

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-lg">
        <Card>
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">{t('consent.guardian.required_title')}</CardTitle>
            <CardDescription>{t('brand.name')}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {sent && (
              <Alert>
                <AlertDescription>{sent}</AlertDescription>
              </Alert>
            )}

            {/* Nothing is required of this account. */}
            {state && !state.consentRequired && status !== 'approved' && (
              <p className="text-sm text-muted-foreground text-center">
                {t('legal_long.consent_self_serve.not_required')}
              </p>
            )}

            {status === 'approved' && (
              <div className="rounded-lg border border-border bg-muted/30 p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{t('legal.guardian_approved')}</p>
              </div>
            )}

            {status === 'pending' && (
              <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {t('consent.guardian.awaiting_response')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('consent.guardian.pending_sent_prefix')}{' '}
                      <span className="text-foreground font-medium">
                        {state?.guardianEmailMasked}
                      </span>
                      {t('consent.guardian.pending_sent_suffix')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {status === 'denied' && (
              <div className="rounded-lg border border-border bg-muted/30 p-4 flex items-start gap-3">
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    {t('consent.guardian.denied_badge')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('consent.guardian.denied_body')}
                  </p>
                </div>
              </div>
            )}

            {/* Send / resend control. Hidden once consent is granted - there
                is nothing left to ask for. */}
            {status !== 'approved' && state?.consentRequired && (
              <div className="space-y-3">
                {(showEmailField || !state.hasGuardianEmail) && (
                  <div className="space-y-2">
                    <Label htmlFor="guardian-email">{t('form.guardian_email')}</Label>
                    <Input
                      id="guardian-email"
                      type="email"
                      autoComplete="email"
                      value={guardianEmail}
                      onChange={(e) => setGuardianEmail(e.target.value)}
                      placeholder={t('form.guardian_email_placeholder')}
                    />
                  </div>
                )}

                <p className="text-xs text-muted-foreground">{t('consent.guardian.form_hint')}</p>

                <div className="flex flex-col gap-2">
                  <Button className="w-full" disabled={sending} onClick={handleSend}>
                    {sending ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Mail className="h-4 w-4 mr-2" />
                    )}
                    {sending
                      ? t('consent.guardian.sending')
                      : status === 'none'
                        ? t('consent.guardian.send_request_short')
                        : status === 'denied'
                          ? t('consent.guardian.send_new')
                          : t('consent.guardian.resend_or_change')}
                  </Button>

                  {!showEmailField && state.hasGuardianEmail && (
                    <Button
                      variant="outline"
                      className="w-full"
                      disabled={sending}
                      onClick={() => setShowEmailField(true)}
                    >
                      {t('consent.guardian.resend_or_change')}
                    </Button>
                  )}
                </div>
              </div>
            )}

            <div className="pt-2 text-center">
              <Button variant="outline" render={<Link href="/dashboard" />}>
                {t('account.back_to_dashboard')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
