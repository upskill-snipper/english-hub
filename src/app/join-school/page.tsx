'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { School, CheckCircle, AlertCircle, ArrowRight, Loader2, ArrowLeft } from 'lucide-react'
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
import { useT } from '@/lib/i18n/use-t'

interface JoinResult {
  schoolName: string
  schoolId: string
  role: string
  class_name: string | null
}

/**
 * /join-school
 *
 * Standalone code-entry page that any logged-in user can reach.
 * Lives OUTSIDE /school/* so the /school admin-layout redirect
 * cannot bounce non-admin students away before they enter their code.
 *
 * Posts to POST /api/school/join with { code }, then refreshes the
 * router so the dashboard greets the student with their new school.
 */
export default function JoinSchoolPage() {
  const router = useRouter()
  const t = useT()
  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<JoinResult | null>(null)

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const trimmed = code.trim().toUpperCase()
    if (!trimmed) {
      setError(t('join_school.err.enter_code'))
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/school/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: trimmed }),
      })

      const data = await res.json()

      if (!res.ok) {
        const msg: string = data.error ?? t('join_school.err.generic')
        setError(msg)
        return
      }

      setResult(data)
      // Refresh server-rendered data so the dashboard reflects the
      // new school membership when the user clicks through.
      router.refresh()
    } catch {
      setError(t('join_school.err.network'))
    } finally {
      setLoading(false)
    }
  }

  // ── Success state ────────────────────────────────────────────────
  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-green-500/30 bg-green-500/5 text-center">
            <CardContent className="pt-8 pb-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {t('join_school.success.joined_pre')}{' '}
                <span className="text-green-600">{result.schoolName}</span>
              </h1>
              {result.class_name && (
                <p className="text-sm text-muted-foreground mb-1">
                  {t('join_school.success.class_label')}{' '}
                  <span className="text-foreground font-medium">{result.class_name}</span>
                </p>
              )}
              <p className="text-sm text-muted-foreground mb-8">
                {t('join_school.success.linked_pre')}{' '}
                <span className="text-foreground font-medium">{result.role}</span>
                {t('join_school.success.linked_post')}
              </p>
              <Button size="lg" className="gap-2" onClick={() => router.push('/dashboard')}>
                {t('join_school.success.go_dashboard')}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // ── Form state ───────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-4">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('join_school.back_dashboard')}
        </Link>

        <Card>
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <School className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl text-foreground">{t('join_school.h1')}</CardTitle>
            <CardDescription>{t('join_school.description')}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Info box */}
            <div className="rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
              {t('join_school.info_box')}
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleJoin} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="joinCode">{t('join_school.label.code')}</Label>
                <Input
                  id="joinCode"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                  placeholder="ABC123"
                  className="text-center text-xl font-mono tracking-[0.35em] uppercase"
                  maxLength={6}
                  autoFocus
                  autoComplete="off"
                  spellCheck={false}
                />
                <p className="text-xs text-muted-foreground text-center">
                  {t('join_school.code_hint')}
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading || code.trim().length === 0}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    {t('join_school.joining')}
                  </>
                ) : (
                  t('join_school.cta.join')
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-0 pt-0 pb-5">
            <div className="w-full border-t border-border mb-4" />
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              {t('join_school.footer.pre')}{' '}
              <Link
                href="/dashboard"
                className="underline underline-offset-2 hover:text-foreground"
              >
                {t('join_school.footer.link')}
              </Link>
              {t('join_school.footer.post')}
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
