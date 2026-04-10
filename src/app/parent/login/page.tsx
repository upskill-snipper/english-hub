'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Mail,
  Lock,
  Loader2,
  Eye,
  EyeOff,
  ArrowLeft,
  GraduationCap,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const PARENT_ACCOUNT_KEY = 'english-hub-parent-account'

export default function ParentLoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setFieldErrors({})

    const errors: Record<string, string> = {}
    if (!email.trim()) errors.email = 'Email address is required.'
    if (!password) errors.password = 'Password is required.'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setLoading(true)

    try {
      // TODO: replace with Supabase — supabase.auth.signInWithPassword({email, password})
      await new Promise((resolve) => setTimeout(resolve, 400))

      // For mock flow: if no existing account, seed a minimal one so the dashboard loads.
      const existing = localStorage.getItem(PARENT_ACCOUNT_KEY)
      if (!existing) {
        const account = {
          name: email.trim().split('@')[0] || 'Parent',
          email: email.trim().toLowerCase(),
          childName: 'Olivia Thompson',
          createdAt: new Date().toISOString(),
        }
        localStorage.setItem(PARENT_ACCOUNT_KEY, JSON.stringify(account))
      }

      router.push('/parent/dashboard')
    } catch {
      setError('Invalid email or password. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-md">
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 text-muted-foreground hover:text-foreground"
          render={<Link href="/" />}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Button>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Parent login</h1>
          <p className="mt-2 text-base text-muted-foreground">
            Sign in to view your child&apos;s progress.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>
              Use the email address you signed up with.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="pl-10"
                    autoComplete="email"
                    aria-invalid={!!fieldErrors.email}
                  />
                </div>
                {fieldErrors.email && (
                  <p className="text-xs text-destructive">{fieldErrors.email}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/parent/login"
                    className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    className="pl-10 pr-10"
                    autoComplete="current-password"
                    aria-invalid={!!fieldErrors.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {fieldErrors.password && (
                  <p className="text-xs text-destructive">{fieldErrors.password}</p>
                )}
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="pt-0">
            <p className="w-full text-center text-sm text-muted-foreground">
              Don&apos;t have a parent account yet?{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/parent/signup" />}
              >
                Sign up
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
