'use client'

/**
 * /auth/set-password - forced first-login password rotation.
 *
 * SECURITY (Aug 2026): school-issued temporary passwords were never forced to
 * rotate. Bulk-provisioned pupils and teachers are created with an
 * auto-generated password (src/app/api/school/import/route.ts,
 * src/app/api/school/bulk-upload/commit/route.ts) that is emailed in plaintext
 * and downloadable by school admins as a CSV. Nothing ever stopped that
 * credential working, indefinitely, on a child's account.
 *
 * Those accounts now carry `user_metadata.needs_password_change: true`, and
 * src/lib/supabase/middleware.ts holds every signed-in navigation here until
 * the flag is cleared.
 *
 * This is deliberately NOT /auth/reset-password. That page exists to consume a
 * Supabase recovery token (PKCE `?code=`, or a `type=recovery` hash) and shows
 * "this link is invalid" when there is no such token. A first-login rotation
 * has no recovery token at all - it runs on an ordinary signed-in session, so
 * reusing that page would have shown every pupil an invalid-link error.
 *
 * Lock-out safety: a user who carries the flag but has no live session must
 * land on the login page, not on a dead end. Two guards cover this - the
 * middleware lists /auth/set-password as a protected route (so an anonymous
 * request is bounced to /auth/login), and the no-session branch below renders
 * a sign-in link rather than an endless spinner if the session expires while
 * the form is open.
 */

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useT } from '@/lib/i18n/use-t'
import { Lock, Loader2, ShieldCheck, AlertTriangle, Eye, EyeOff } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

type SessionState = 'checking' | 'signed-in' | 'signed-out'

export default function SetPasswordPage() {
  const router = useRouter()
  const t = useT()

  const [sessionState, setSessionState] = useState<SessionState>('checking')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  // Require a real, server-verified session. `getUser()` (not `getSession()`)
  // because the latter trusts whatever is in local storage - we want the auth
  // server's answer before we offer to change a password.
  useEffect(() => {
    let cancelled = false
    const supabase = createClient()

    supabase.auth
      .getUser()
      .then(({ data, error: userError }) => {
        if (cancelled) return
        setSessionState(userError || !data.user ? 'signed-out' : 'signed-in')
      })
      .catch(() => {
        if (!cancelled) setSessionState('signed-out')
      })

    return () => {
      cancelled = true
    }
  }, [])

  // Teachers and school admins have their own dashboard; mirror the routing
  // the login page already does so a forced rotation does not dump a teacher
  // on the pupil dashboard.
  const destinationForUser = useCallback(async (): Promise<string> => {
    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return '/dashboard'
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()
      if (profile?.role === 'teacher' || profile?.role === 'admin') return '/dashboard/teacher'
    } catch {
      // Profile lookup is a convenience, never a blocker - fall through.
    }
    return '/dashboard'
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    // Same rules as registration (src/app/auth/register/page.tsx): required,
    // at least 8 characters, and the confirmation must match.
    if (!password) {
      setError(t('form.new_password_required'))
      return
    }
    if (password.length < 8) {
      setError(t('form.password_min_8'))
      return
    }
    if (password !== confirmPassword) {
      setError(t('form.password_mismatch'))
      return
    }

    setSaving(true)
    const supabase = createClient()

    // One call sets the password AND clears the rotation flag, so a successful
    // rotation can never leave the account gated.
    const { error: updateError } = await supabase.auth.updateUser({
      password,
      data: { needs_password_change: false },
    })

    if (updateError) {
      setError(updateError.message)
      setSaving(false)
      return
    }

    // Defensive re-check: if the metadata write did not stick, the middleware
    // would bounce the user straight back here and they would appear locked
    // out of their own account. Retry the flag clear once on its own.
    try {
      const { data: refreshed } = await supabase.auth.getUser()
      if (refreshed.user?.user_metadata?.needs_password_change === true) {
        await supabase.auth.updateUser({ data: { needs_password_change: false } })
      }
    } catch {
      // Non-fatal: the password itself was changed successfully.
    }

    const destination = await destinationForUser()
    router.replace(destination)
    router.refresh()
  }

  if (sessionState === 'checking') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Checking your account&hellip;</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (sessionState === 'signed-out') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Please sign in first</h1>
              <p className="text-muted-foreground mb-6">
                You need to be signed in to set a new password. Sign in with the temporary password
                your school sent you, and we will bring you straight back here.
              </p>
              <Button render={<Link href="/auth/login?redirect=/auth/set-password" />}>
                {t('auth.sign_in')}
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
        <Card>
          <CardHeader className="text-center">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-2" />
            <CardTitle className="text-2xl">Choose your own password</CardTitle>
            <CardDescription>
              Your school set up your account with a temporary password. Pick a new one now so only
              you can get into your account.
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
                <Label htmlFor="password">{t('form.new_password')}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('form.min_8_chars')}
                    className="pl-11 pr-11"
                    required
                    minLength={8}
                    autoComplete="new-password"
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

              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword">{t('form.confirm_new_password')}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t('form.repeat_password')}
                    className="pl-11 pr-11"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    aria-invalid={!!error}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                    aria-label={showConfirm ? t('form.hide_password') : t('form.show_password')}
                  >
                    {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" disabled={saving} className="w-full" size="lg">
                {saving ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    {t('auth.reset.updating')}
                  </>
                ) : (
                  t('auth.reset.update_password')
                )}
              </Button>
            </form>

            <p className="text-muted-foreground text-xs text-center mt-6">
              Never share your password, not even with a friend. If you are stuck, ask your teacher.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
