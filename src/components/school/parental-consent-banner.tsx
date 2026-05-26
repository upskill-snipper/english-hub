'use client'

import { useState, useEffect, useCallback } from 'react'
import { Mail, ShieldCheck, Loader2, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { useT } from '@/lib/i18n/use-t'

interface ConsentRecord {
  id: string
  school_id: string
  parent_email: string
  status: 'pending' | 'approved' | 'denied'
  consented_at: string | null
  created_at: string
}

interface ParentalConsentBannerProps {
  schoolId: string
}

export function ParentalConsentBanner({ schoolId }: ParentalConsentBannerProps) {
  const [consentRequired, setConsentRequired] = useState(false)
  const [consents, setConsents] = useState<ConsentRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [parentEmail, setParentEmail] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const t = useT()

  const fetchConsentStatus = useCallback(async () => {
    try {
      const res = await fetch('/api/school/consent')
      if (!res.ok) return
      const data = await res.json()
      setConsentRequired(data.consent_required)
      setConsents(data.consents ?? [])
    } catch {
      // Silently fail - banner just won't show
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchConsentStatus()
  }, [fetchConsentStatus])

  async function handleSendConsent(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (!parentEmail.trim()) {
      setError(t('consent.guardian.email_required'))
      return
    }

    setSending(true)

    try {
      const res = await fetch('/api/school/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ parent_email: parentEmail.trim(), school_id: schoolId }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? t('consent.guardian.send_failed'))
        return
      }

      setMessage(data.message)
      setShowForm(false)
      setParentEmail('')
      // Re-fetch to update status
      fetchConsentStatus()
    } catch {
      setError(t('action.error_generic'))
    } finally {
      setSending(false)
    }
  }

  // Don't render anything while loading or if consent is not required
  if (loading || !consentRequired) return null

  // Find consent record for this specific school
  const schoolConsent = consents.find((c) => c.school_id === schoolId)

  // If consent is approved, don't show banner
  if (schoolConsent?.status === 'approved') return null

  return (
    <div className="mb-6 animate-fade-in">
      <Alert
        variant={schoolConsent?.status === 'denied' ? 'destructive' : 'default'}
        className="border-amber-500/30 bg-amber-500/[0.03]"
      >
        <ShieldCheck className="h-5 w-5 text-clay-600" />
        <AlertTitle className="text-foreground font-semibold">
          {t('consent.guardian.required_title')}
        </AlertTitle>
        <AlertDescription className="mt-2 space-y-3">
          {schoolConsent?.status === 'pending' ? (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {t('consent.guardian.pending_sent_prefix')}{' '}
                <span className="font-medium text-foreground">{schoolConsent.parent_email}</span>
                {t('consent.guardian.pending_sent_suffix')}
              </p>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-amber-500/30 bg-amber-500/10 text-clay-600 text-xs"
                >
                  <Loader2 className="h-3 w-3 animate-spin mr-1" />
                  {t('consent.guardian.awaiting_response')}
                </Badge>
                <Button variant="outline" size="sm" onClick={() => setShowForm(true)}>
                  {t('consent.guardian.resend_or_change')}
                </Button>
              </div>
            </div>
          ) : schoolConsent?.status === 'denied' ? (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{t('consent.guardian.denied_body')}</p>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-red-500/30 bg-red-500/10 text-red-400 text-xs"
                >
                  <XCircle className="h-3 w-3 mr-1" />
                  {t('consent.guardian.denied_badge')}
                </Badge>
                <Button variant="outline" size="sm" onClick={() => setShowForm(true)}>
                  {t('consent.guardian.send_new')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{t('consent.guardian.intro_body')}</p>
              <Button
                variant="default"
                size="sm"
                className="gap-2"
                onClick={() => setShowForm(true)}
              >
                <Mail className="h-4 w-4" />
                {t('consent.guardian.send_request')}
              </Button>
            </div>
          )}

          {/* Consent form */}
          {showForm && (
            <form
              onSubmit={handleSendConsent}
              className="mt-3 flex flex-col gap-3 rounded-lg border border-border p-4 bg-background"
            >
              <div className="space-y-1.5">
                <Label htmlFor="parentEmail" className="text-sm font-medium">
                  {t('form.guardian_email')}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70" />
                  <Input
                    id="parentEmail"
                    type="email"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    placeholder="parent@example.com"
                    className="pl-10"
                    required
                    autoComplete="off"
                  />
                </div>
                <p className="text-xs text-muted-foreground">{t('consent.guardian.form_hint')}</p>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-destructive">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  {error}
                </div>
              )}

              {message && (
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  {message}
                </div>
              )}

              <div className="flex items-center gap-2">
                <Button type="submit" size="sm" disabled={sending}>
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-1" />
                      {t('consent.guardian.sending')}
                    </>
                  ) : (
                    t('consent.guardian.send_request_short')
                  )}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowForm(false)
                    setError(null)
                    setMessage(null)
                  }}
                >
                  {t('action.cancel')}
                </Button>
              </div>
            </form>
          )}
        </AlertDescription>
      </Alert>
    </div>
  )
}
