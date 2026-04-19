'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { validateRedirect } from '@/lib/utils'
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

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = validateRedirect(searchParams.get('redirect'))

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(() => {
    const errorParam = searchParams.get('error')
    if (errorParam === 'auth_callback_error') {
      return 'Something went wrong verifying your account. Please try again or request a new link.'
    }
    return null
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  // P1-SEC-5 (Cycle 1 Wave B) closed the email-not-confirmed enumeration
  // branch. The previous "Resend verification" CTA would have confirmed
  // the existence of an unverified account for the submitted email —
  // an enumeration + email-bombing primitive. Users needing to re-verify
  // should re-register (which returns a generic response regardless of
  // whether the email exists) or use /auth/forgot-password.

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError('Please fill in all fields.')
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
      // surface a verification CTA, but only in-form text — we do not
      // auto-enable a resend-verification UI from here, since that branch
      // would itself confirm account existence.
      //
      // If a user does have an unverified account they can use the
      // /auth/forgot-password or a dedicated "resend verification" flow,
      // both of which respond identically whether or not the email exists.
      setError(
        'Invalid email or password, or your email has not yet been verified. ' +
          'Please check your credentials and verification link.',
      )
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
          Back to home
        </Button>

        <Card>
          <CardHeader className="text-center">
            <h1 className="text-2xl font-semibold leading-none tracking-tight">Welcome back</h1>
            <CardDescription>Sign in to your English Hub account.</CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="pl-11"
                    required
                    autoComplete="email"
                    aria-invalid={!!error}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-sm"
                    render={<Link href="/auth/forgot-password" />}
                  >
                    Forgot password?
                  </Button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    className="pl-11 pr-11"
                    required
                    autoComplete="current-password"
                    aria-invalid={!!error}
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

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-muted-foreground text-sm">
              Don&apos;t have an account?{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/auth/register" />}
              >
                Start Free Trial
              </Button>
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
