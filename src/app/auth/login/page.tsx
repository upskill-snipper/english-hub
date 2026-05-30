'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { validateRedirect } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { Mail, Lock, Loader2, ArrowLeft, Eye, EyeOff } from 'lucide-react'
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
import GoogleSignInButton from '@/components/auth/GoogleSignInButton'
import AppleSignInButton from '@/components/auth/AppleSignInButton'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = validateRedirect(searchParams.get('redirect'))
  const t = useT()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(() => {
    const errorParam = searchParams.get('error')
    if (errorParam === 'auth_callback_error') {
      return t('auth.error.callback_failed')
    }
    return null
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  // P1-SEC-5 (Cycle 1 Wave B) closed the email-not-confirmed enumeration
  // branch. The previous "Resend verification" CTA would have confirmed
  // the existence of an unverified account for the submitted email -
  // an enumeration + email-bombing primitive. Users needing to re-verify
  // should re-register (which returns a generic response regardless of
  // whether the email exists) or use /auth/forgot-password.

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError(t('form.fill_all_fields'))
      return
    }

    setLoading(true)

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    // P1 (Cycle 3): record successful login so the dormancy cron uses a
    // real `lastLoginAt` signal rather than the previous `updatedAt`
    // proxy. Fire-and-forget; failures are logged server-side only and
    // do not block the login flow.
    if (!authError) {
      fetch('/api/auth/record-login', { method: 'POST' }).catch(() => {})
    }

    if (authError) {
      // Generic error for every failure mode to prevent account enumeration.
      // Previously we branched on 'email not confirmed' which leaked the fact
      // that an account exists for the submitted email (P1-SEC-5). We still
      // surface a verification CTA, but only in-form text - we do not
      // auto-enable a resend-verification UI from here, since that branch
      // would itself confirm account existence.
      //
      // If a user does have an unverified account they can use the
      // /auth/forgot-password or a dedicated "resend verification" flow,
      // both of which respond identically whether or not the email exists.
      setError(t('auth.error.signin_failed'))
      setLoading(false)
      return
    }

    // If no explicit redirect, check if user is a teacher and redirect accordingly
    if (redirectTo === '/dashboard') {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single()

        if (profile?.role === 'teacher' || profile?.role === 'admin') {
          router.push('/dashboard/teacher')
          router.refresh()
          return
        }
      }
    }

    router.push(redirectTo)
    router.refresh()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 text-muted-foreground hover:text-foreground"
          render={<Link href="/" />}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('auth.back_to_home')}
        </Button>

        <Card>
          <CardHeader className="text-center">
            <h1 className="text-2xl font-semibold leading-none tracking-tight">
              {t('form.welcome_back')}
            </h1>
            <CardDescription>{t('auth.login.subtitle')}</CardDescription>
          </CardHeader>

          <CardContent>
            {(process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED === 'true' ||
              process.env.NEXT_PUBLIC_APPLE_OAUTH_ENABLED === 'true') && (
              <>
                <div className="mb-4 space-y-3">
                  <GoogleSignInButton redirectTo={redirectTo} className="w-full" />
                  <AppleSignInButton redirectTo={redirectTo} className="w-full" />
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      {t('auth.or_sign_in_with_email')}
                    </span>
                  </div>
                </div>
              </>
            )}

            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>
                  {error}
                  <span className="mt-2 block">
                    {t('auth.login.email_not_confirmed_prompt')}{' '}
                    <Link
                      href="/auth/resend-verification"
                      className="font-medium underline underline-offset-2 hover:no-underline"
                    >
                      {t('auth.resend_verification_email')}
                    </Link>
                    .
                  </span>
                </AlertDescription>
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
                    aria-invalid={!!error}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t('form.password')}</Label>
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-sm"
                    render={<Link href="/auth/forgot-password" />}
                  >
                    {t('form.forgot_password_q')}
                  </Button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('form.password_placeholder')}
                    className="pl-11 pr-11"
                    required
                    autoComplete="current-password"
                    aria-invalid={!!error}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                    aria-label={showPassword ? t('form.hide_password') : t('form.show_password')}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    {t('auth.signing_in')}
                  </>
                ) : (
                  t('auth.sign_in')
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-3 justify-center">
            <div className="w-full rounded-md border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
              <p className="text-foreground">
                {t('auth.didnt_get_verification')}{' '}
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0 font-medium"
                  render={<Link href="/auth/resend-verification" />}
                >
                  {t('auth.resend_verification_email')}
                </Button>
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('auth.no_account_q')}{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/auth/register" />}
              >
                {t('auth.start_free_trial')}
              </Button>
            </p>
            <p className="text-muted-foreground text-xs text-center">
              {t('auth.legacy_account_help_before')}{' '}
              <a
                href="mailto:founder@theenglishhub.app"
                className="font-medium underline underline-offset-2 hover:no-underline"
              >
                founder@theenglishhub.app
              </a>{' '}
              {t('auth.legacy_account_help_after')}
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <LoginForm />
    </Suspense>
  )
}
