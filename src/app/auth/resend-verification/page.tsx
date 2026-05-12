'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useT } from '@/lib/i18n/use-t'
import { Mail, Loader2, ArrowLeft, CheckCircle } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function ResendVerificationPage() {
  const router = useRouter()
  const t = useT()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!email) {
      setError(t('form.email_required'))
      return
    }

    setLoading(true)

    try {
      // The endpoint always returns 200. The body usually contains a
      // generic OK message, but if the account is already verified the
      // body includes `status: 'already_verified'` so we can redirect
      // the user to the password-reset flow (which is what they actually
      // need — they don't need a verification link, they need to sign in
      // or reset their password).
      const res = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      let payload: { ok?: boolean; status?: string } = {}
      try {
        payload = await res.json()
      } catch {
        // Tolerate unexpected non-JSON bodies — fall through to generic
        // success state.
      }

      if (payload.status === 'already_verified') {
        const flash = encodeURIComponent(t('auth.resend.already_verified'))
        router.push(`/auth/forgot-password?flash=${flash}`)
        return
      }

      setSuccess(true)
    } catch {
      setError(t('form.network_error'))
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {t('auth.resend.sent_title')}
              </h1>
              <p className="text-muted-foreground mb-6">{t('auth.resend.sent_body')}</p>
              <Button render={<Link href="/auth/login" />} className="w-full" size="lg">
                {t('auth.back_to_sign_in')}
              </Button>
              <p className="text-xs text-muted-foreground mt-6">
                {t('auth.resend.still_no_email')}{' '}
                <a
                  href="mailto:founder@theenglishhub.app"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  founder@theenglishhub.app
                </a>{' '}
                {t('auth.resend.manual_confirm')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 text-muted-foreground hover:text-foreground"
          render={<Link href="/auth/login" />}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('auth.back_to_sign_in')}
        </Button>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t('auth.resend.title')}</CardTitle>
            <CardDescription>{t('auth.resend.subtitle')}</CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="email">{t('form.email')}</Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70"
                    aria-hidden="true"
                  />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('form.email_placeholder')}
                    className="pl-11"
                    required
                    autoComplete="email"
                    aria-invalid={!!error}
                  />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                    {t('auth.resend.sending')}
                  </>
                ) : (
                  t('auth.resend.cta')
                )}
              </Button>
            </form>

            <div className="mt-6 rounded-md border border-primary/20 bg-primary/5 px-4 py-4">
              <h2 className="text-sm font-medium text-foreground mb-3">
                {t('auth.resend.troubleshoot_title')}
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/auth/login"
                    className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
                  >
                    {t('auth.resend.use_google')}
                  </Link>{' '}
                  {t('auth.resend.use_google_help')}
                </li>
                <li>
                  {t('auth.resend.verified_other_tab')}{' '}
                  <Link
                    href="/auth/login"
                    className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
                  >
                    {t('auth.resend.just_sign_in')}
                  </Link>
                  .
                </li>
                <li>
                  {t('auth.resend.contact_before')}{' '}
                  <a
                    href="mailto:founder@theenglishhub.app"
                    className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
                  >
                    founder@theenglishhub.app
                  </a>{' '}
                  {t('auth.resend.contact_after')}
                </li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-3">
            <p className="text-muted-foreground text-sm">
              {t('auth.resend.already_verified_q')}{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/auth/login" />}
              >
                {t('auth.sign_in')}
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
