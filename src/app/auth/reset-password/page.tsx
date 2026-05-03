'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Session } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'
import { Lock, Loader2, CheckCircle, Eye, EyeOff, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

const VERIFY_TIMEOUT_MS = 10_000

function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [verifying, setVerifying] = useState(true)
  const [session, setSession] = useState<Session | null>(null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    let cancelled = false

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('verify-timeout')), VERIFY_TIMEOUT_MS)
    })

    const verify = async (): Promise<Session | null> => {
      // 1. PKCE flow: ?code=xxx in the URL.
      const code = searchParams.get('code')
      if (code) {
        const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
        if (exchangeError) throw exchangeError
        return data.session
      }

      // 2. Implicit/recovery flow: tokens are placed in the URL hash by Supabase
      //    and the SDK turns them into a session + emits PASSWORD_RECOVERY.
      const { data: existing } = await supabase.auth.getSession()
      if (existing.session) return existing.session

      // 3. Fail fast when there is genuinely nothing to wait for. Without
      //    this check, a direct visit to /auth/reset-password (no `?code=`,
      //    no recovery hash, no existing session) hung in the
      //    onAuthStateChange listener for the full VERIFY_TIMEOUT_MS — the
      //    PASSWORD_RECOVERY event will never fire because there is no
      //    recovery token to process. Live E2E saw the spinner sit for ~15
      //    seconds, which read as "reset password is broken".
      const hasRecoveryHash =
        typeof window !== 'undefined' && window.location.hash.includes('type=recovery')
      if (!hasRecoveryHash) {
        return null
      }

      return await new Promise<Session | null>((resolve, reject) => {
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((event, nextSession) => {
          if (event === 'PASSWORD_RECOVERY' || (event === 'SIGNED_IN' && nextSession)) {
            subscription.unsubscribe()
            resolve(nextSession)
          }
          if (event === 'SIGNED_OUT') {
            subscription.unsubscribe()
            reject(new Error('signed-out'))
          }
        })
      })
    }

    const run = async () => {
      try {
        const result = (await Promise.race([verify(), timeoutPromise])) as Session | null
        if (cancelled) return
        if (!result) {
          setError('Link expired or invalid. Please request a new reset link.')
        } else {
          setSession(result)
        }
      } catch (err) {
        if (cancelled) return
        const message = err instanceof Error ? err.message : 'unknown'
        if (message === 'verify-timeout') {
          setError('Link expired or invalid. Please request a new reset link.')
        } else {
          setError('Link expired or invalid. Please request a new reset link.')
        }
      } finally {
        if (!cancelled) setVerifying(false)
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [searchParams])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!password) {
      setError('Please enter a new password.')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    const supabase = createClient()
    const { error: updateError } = await supabase.auth.updateUser({ password })

    if (updateError) {
      setError(updateError.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)

    setTimeout(() => {
      router.push('/auth/login')
    }, 3000)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Password updated</h1>
              <p className="text-muted-foreground mb-6">
                Your password has been changed successfully. Redirecting you to login&hellip;
              </p>
              <Button variant="outline" render={<Link href="/auth/login" />}>
                Go to login
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (verifying) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Verifying reset link&hellip;</p>
              <p className="text-muted-foreground text-sm mt-3">
                If nothing happens,{' '}
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0"
                  render={<Link href="/auth/forgot-password" />}
                >
                  request a new link
                </Button>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (error !== null && session === null) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Reset link unavailable</h1>
              <p className="text-muted-foreground mb-6">{error}</p>
              <Button render={<Link href="/auth/forgot-password" />}>
                Request a new reset link
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (session === null) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Set new password</CardTitle>
            <CardDescription>Choose a strong password for your account.</CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="password">New password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="pl-11 pr-11"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm new password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat your password"
                    className="pl-11 pr-11"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Updating password&hellip;
                  </>
                ) : (
                  'Update password'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  // useSearchParams() requires a Suspense boundary in Next 15 — without it
  // the whole route opts out of static rendering and can render blank on
  // first paint (or fail the production build with the
  // "missing-suspense-with-csr-bailout" error). Wrapping the form in a
  // Suspense boundary with a matching loader keeps the verifying-state UX
  // consistent with the in-form spinner the form itself shows.
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Verifying reset link&hellip;</p>
              </CardContent>
            </Card>
          </div>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  )
}
