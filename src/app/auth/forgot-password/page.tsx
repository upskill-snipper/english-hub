'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
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

export default function ForgotPasswordPage() {
  const searchParams = useSearchParams()
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
      setError('Please enter your email address.')
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
              <h1 className="text-2xl font-bold text-foreground mb-2">Check your email</h1>
              <p className="text-muted-foreground mb-4">
                If an account exists for{' '}
                <span className="text-foreground font-medium">{email}</span>, we&apos;ve sent a
                password reset link. Please check your inbox.
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                Didn&apos;t receive an email? Check your spam folder or contact{' '}
                <a
                  href="mailto:info@Upskillenergy.com"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  info@Upskillenergy.com
                </a>
              </p>
              <Button variant="outline" render={<Link href="/auth/login" />}>
                Back to login
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
          Back to login
        </Button>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Reset your password</CardTitle>
            <CardDescription>
              Enter your email and we&apos;ll send you a reset link.
            </CardDescription>
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
                  />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending reset link...
                  </>
                ) : (
                  'Send reset link'
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-3">
            <p className="text-muted-foreground text-sm">
              Remember your password?{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/auth/login" />}
              >
                Sign in
              </Button>
            </p>
            <p className="text-xs text-muted-foreground text-center">
              Still need help? Contact us at{' '}
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
