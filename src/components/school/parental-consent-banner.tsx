'use client'

import { useState, useEffect, useCallback } from 'react'
import { Mail, ShieldCheck, Loader2, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

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

  const fetchConsentStatus = useCallback(async () => {
    try {
      const res = await fetch('/api/school/consent')
      if (!res.ok) return
      const data = await res.json()
      setConsentRequired(data.consent_required)
      setConsents(data.consents ?? [])
    } catch {
      // Silently fail — banner just won't show
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
      setError('Please enter your parent/guardian\'s email address.')
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
        setError(data.error ?? 'Failed to send consent request.')
        return
      }

      setMessage(data.message)
      setShowForm(false)
      setParentEmail('')
      // Re-fetch to update status
      fetchConsentStatus()
    } catch {
      setError('Something went wrong. Please try again.')
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
          Parental Consent Required
        </AlertTitle>
        <AlertDescription className="mt-2 space-y-3">
          {schoolConsent?.status === 'pending' ? (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                A consent request has been sent to{' '}
                <span className="font-medium text-foreground">{schoolConsent.parent_email}</span>.
                Please ask your parent/guardian to check their email and complete the consent form.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-clay-600 text-xs">
                  <Loader2 className="h-3 w-3 animate-spin mr-1" />
                  Awaiting parent response
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowForm(true)}
                >
                  Resend / Change email
                </Button>
              </div>
            </div>
          ) : schoolConsent?.status === 'denied' ? (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Your parent/guardian has denied consent. Some school features may be restricted.
                If this was a mistake, you can send a new consent request.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-red-500/30 bg-red-500/10 text-red-400 text-xs">
                  <XCircle className="h-3 w-3 mr-1" />
                  Consent denied
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowForm(true)}
                >
                  Send new request
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Your school requires parental consent for students under 16 to use The English Hub.
                Please ask your parent or guardian to complete the consent form. This is required
                under UK GDPR data protection regulations.
              </p>
              <Button
                variant="default"
                size="sm"
                className="gap-2"
                onClick={() => setShowForm(true)}
              >
                <Mail className="h-4 w-4" />
                Send consent request to parent
              </Button>
            </div>
          )}

          {/* Consent form */}
          {showForm && (
            <form onSubmit={handleSendConsent} className="mt-3 flex flex-col gap-3 rounded-lg border border-border p-4 bg-background">
              <div className="space-y-1.5">
                <Label htmlFor="parentEmail" className="text-sm font-medium">
                  Parent/Guardian email address
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
                <p className="text-xs text-muted-foreground">
                  Your parent/guardian will receive an email with a link to review and approve the consent form.
                </p>
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
                      Sending...
                    </>
                  ) : (
                    'Send consent request'
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
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </AlertDescription>
      </Alert>
    </div>
  )
}
