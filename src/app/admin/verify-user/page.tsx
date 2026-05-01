'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { Shield, ArrowLeft, Loader2, CheckCircle2, AlertTriangle, Mail } from 'lucide-react'

interface VerifyResponse {
  success: true
  userId: string
  email: string
  prismaUserId?: string
  wasAlreadyConfirmed: boolean
}

export default function AdminVerifyUserPage() {
  const router = useRouter()
  const { user } = useAuthStore()

  const [authorized, setAuthorized] = useState(false)
  const [authChecking, setAuthChecking] = useState(true)
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<VerifyResponse | null>(null)

  // Reuse the admin gating pattern: ping a known-admin-only endpoint
  // (/api/admin/stats) on mount; 401 sends to login, 403 sends to dashboard,
  // 200 marks the page authorised. This is the same pattern as the existing
  // /admin and /admin/affiliates pages.
  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/verify-user')
      return
    }
    if (!user) return

    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/admin/stats')
        if (cancelled) return
        if (res.status === 401) {
          router.push('/auth/login?redirect=/admin/verify-user')
          return
        }
        if (res.status === 403) {
          router.push('/dashboard')
          return
        }
        setAuthorized(true)
      } catch {
        // Network error — don't lock the user out, just show the form;
        // the POST will re-check.
        setAuthorized(true)
      } finally {
        if (!cancelled) setAuthChecking(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [user, router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setResult(null)

    const trimmed = email.trim()
    if (!trimmed || !trimmed.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/admin/verify-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })

      const data = (await res.json().catch(() => ({}))) as Partial<VerifyResponse> & {
        error?: string
      }

      if (!res.ok) {
        setError(data.error || `Request failed (${res.status})`)
      } else if (data.success) {
        setResult(data as VerifyResponse)
      } else {
        setError('Unexpected response from server.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (authChecking || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to admin
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Manual email verification</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Emergency tool. Use when the verification-email pipeline is broken (e.g. Resend domain not
          yet verified, SMTP outage, reviewer email forwarding swallowing the link). Marks the
          user&apos;s email as confirmed in Supabase and ensures the matching Prisma{' '}
          <code className="px-1 rounded bg-muted text-xs">User</code> row exists.
        </p>

        <div className="bg-card border border-border rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                User email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  placeholder="user@example.com"
                  className="flex h-10 w-full rounded-md border border-input bg-transparent pl-10 pr-3 py-1 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || !email.trim()}
              className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify user manually'
              )}
            </button>
          </form>

          {error && (
            <div
              role="alert"
              className="mt-4 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
            >
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {result && (
            <div
              role="status"
              className="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm space-y-2"
            >
              <div className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle2 className="w-4 h-4" />
                {result.wasAlreadyConfirmed
                  ? 'Already verified — no change needed.'
                  : 'User verified successfully.'}
              </div>
              <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <dt className="font-medium">Email</dt>
                <dd className="font-mono break-all text-foreground">{result.email}</dd>
                <dt className="font-medium">Supabase user ID</dt>
                <dd className="font-mono break-all text-foreground">{result.userId}</dd>
                {result.prismaUserId && (
                  <>
                    <dt className="font-medium">Prisma user ID</dt>
                    <dd className="font-mono break-all text-foreground">{result.prismaUserId}</dd>
                  </>
                )}
              </dl>
              <p className="text-xs text-muted-foreground">
                The user can now sign in at{' '}
                <Link href="/auth/login" className="underline">
                  /auth/login
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
