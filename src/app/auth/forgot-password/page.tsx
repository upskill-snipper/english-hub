'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
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

function ForgotPasswordForm() {
  const searchParams = useSearchParams()
  const t = useT()
  // Optional one-shot flash message from /auth/resend-verification when the
  // user submits an email that's already verified. Length-capped to avoid
  // any chance of injection / oversized banners.
  const flash = (searchParams?.get('flash') ?? '').slice(0, 200)
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

    const supabase = createClient()

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/auth/reset-password`,
    })

    if (resetError) {
      setError(resetError.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">{t('form.check_inbox')}</h1>
              <p className="text-muted-foreground mb-4">
                {t('auth.forgot.sent_prefix')}{' '}
                <span className="text-foreground font-medium">{email}</span>
                {t('auth.forgot.sent_suffix')}
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                {t('auth.forgot.spam_help_before')}{' '}
                <a
                  href="mailto:info@Upskillenergy.com"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  info@Upskillenergy.com
                </a>
              </p>
              <Button variant="outline" render={<Link href="/auth/login" />}>
                {t('auth.back_to_login')}
              </Button>
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
          {t('auth.back_to_login')}
        </Button>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t('auth.forgot.title')}</CardTitle>
            <CardDescription>{t('auth.forgot.subtitle')}</CardDescription>
          </CardHeader>

          <CardContent>
            {flash && !error && (
              <Alert className="mb-6">
                <AlertDescription>{flash}</AlertDescription>
              </Alert>
            )}
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="email">{t('form.email')}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('form.email_placeholder')}
                    className="pl-11"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    {t('auth.forgot.sending')}
                  </>
                ) : (
                  t('form.send_reset')
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-3">
            <p className="text-muted-foreground text-sm">
              {t('auth.forgot.remembered')}{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/auth/login" />}
              >
                {t('auth.sign_in')}
              </Button>
            </p>
            <p className="text-xs text-muted-foreground text-center">
              {t('auth.forgot.still_need_help')}{' '}
              <a
                href="mailto:info@Upskillenergy.com"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                info@Upskillenergy.com
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default function ForgotPasswordPage() {
  // useSearchParams() needs a Suspense boundary in Next 15 — without it
  // the production build fails with "missing-suspense-with-csr-bailout"
  // and the page renders blank on the client until hydration. Matches the
  // pattern used by /auth/login and /auth/register.
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ForgotPasswordForm />
    </Suspense>
  )
}
