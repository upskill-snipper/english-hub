'use client'

import { useState } from 'react'
import Link from 'next/link'
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

    try {
      // The endpoint always returns 200 to prevent account enumeration —
      // we don't branch on success vs. failure beyond a network failure.
      await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSuccess(true)
    } catch {
      setError('Network error. Please try again in a moment.')
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
              <h1 className="text-2xl font-bold text-foreground mb-2">Sent</h1>
              <p className="text-muted-foreground mb-6">
                Check your inbox — including spam — for an email from The English Hub.
              </p>
              <Button render={<Link href="/auth/login" />} className="w-full" size="lg">
                Back to sign in
              </Button>
              <p className="text-xs text-muted-foreground mt-6">
                Still no email? Contact{' '}
                <a
                  href="mailto:founder@theenglishhub.app"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  founder@theenglishhub.app
                </a>{' '}
                — we&apos;ll confirm you manually.
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
          Back to sign in
        </Button>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Resend your verification email</CardTitle>
            <CardDescription>
              Pop your email in below. We&apos;ll send a fresh link to your inbox — check spam too.
            </CardDescription>
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
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70"
                    aria-hidden="true"
                  />
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

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                    Sending fresh link...
                  </>
                ) : (
                  'Send me a fresh link'
                )}
              </Button>
            </form>

            <div className="mt-6 rounded-md border border-primary/20 bg-primary/5 px-4 py-4">
              <h2 className="text-sm font-medium text-foreground mb-3">
                Tried twice and still no email?
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/auth/login"
                    className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
                  >
                    Sign in with Google instead
                  </Link>{' '}
                  — Google verifies your email for us, so you don&apos;t need our link.
                </li>
                <li>
                  Already verified your link in another tab?{' '}
                  <Link
                    href="/auth/login"
                    className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
                  >
                    Just sign in
                  </Link>
                  .
                </li>
                <li>
                  Contact us at{' '}
                  <a
                    href="mailto:founder@theenglishhub.app"
                    className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
                  >
                    founder@theenglishhub.app
                  </a>{' '}
                  — we&apos;ll confirm your email manually within a few hours.
                </li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-3">
            <p className="text-muted-foreground text-sm">
              Already verified?{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/auth/login" />}
              >
                Sign in
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
