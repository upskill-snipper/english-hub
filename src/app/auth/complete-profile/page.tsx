'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useT } from '@/lib/i18n/use-t'
import { validateRedirect } from '@/lib/utils'
import { CalendarDays, Loader2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

/**
 * One step after a first sign-in that left us without a date of birth.
 *
 * WHY THIS EXISTS (12 October 2026). Google and Apple sign-ups, which are
 * about three in four new accounts, arrive with no date of birth: those
 * providers carry no sign-up form. The AI gate refuses every request from an
 * account whose age it does not know, and the only places to give one were a
 * dismissable banner on /dashboard and an inline prompt on /marking/submit.
 * Of 223 Google and Apple accounts, 128 never came back after their first ten
 * minutes. /auth/callback now sends a first session with no date of birth
 * here, once, before wherever it was going.
 *
 * It saves through POST /api/profile/dob, the same endpoint the banner and
 * the inline prompt use, so the rules (both stores written, child defaults
 * applied for under-18s) live in one place. "Not now" is always available:
 * skipping leaves AI switched off, which is where the account already was.
 */
function CompleteProfileForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const t = useT()
  const next = validateRedirect(searchParams.get('next'))

  const [dob, setDob] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!dob) {
      setError(t('form.dob_required'))
      return
    }
    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/profile/dob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dateOfBirth: dob }),
      })
      if (res.status === 401) {
        router.replace(`/auth/login?redirect=${encodeURIComponent(next)}`)
        return
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(
          res.status === 400
            ? t('auth.complete_profile.invalid_date')
            : (body?.error ?? t('profile.dob.error_generic')),
        )
        setSaving(false)
        return
      }
      router.replace(next)
    } catch {
      setError(t('profile.dob.error_generic'))
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CalendarDays className="w-10 h-10 text-primary mx-auto mb-2" aria-hidden />
            <h1 className="text-2xl font-semibold leading-none tracking-tight">
              {t('auth.complete_profile.title')}
            </h1>
            <CardDescription>{t('auth.complete_profile.body')}</CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-5">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="dob">{t('profile.dob.input_label')}</Label>
                <Input
                  id="dob"
                  type="date"
                  value={dob}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin me-2" />
                    {t('auth.complete_profile.saving')}
                  </>
                ) : (
                  t('auth.complete_profile.continue')
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-3 justify-center">
            <Button variant="ghost" size="sm" render={<Link href={next} />}>
              {t('auth.complete_profile.not_now')}
            </Button>
            <p className="text-muted-foreground text-xs text-center">
              {t('auth.complete_profile.terms_before')}{' '}
              <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">
                {t('legal.terms_of_service')}
              </Link>{' '}
              {t('auth.register.terms_and')}{' '}
              <Link
                href="/legal/privacy"
                className="underline underline-offset-2 hover:text-foreground"
              >
                {t('legal.privacy_policy')}
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default function CompleteProfilePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <CompleteProfileForm />
    </Suspense>
  )
}
