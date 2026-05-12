'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ShieldCheck, CheckCircle, XCircle, Loader2, AlertTriangle, BookOpen } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { useT } from '@/lib/i18n/use-t'

interface ConsentDetails {
  student_name: string
  school_name: string
  parent_email: string
  status: string
}

export default function ConsentPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const t = useT()

  const [details, setDetails] = useState<ConsentDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ status: string; message: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!token) {
      setError(t('consent.form.no_token'))
      setLoading(false)
      return
    }

    async function fetchDetails() {
      try {
        // Fetch consent details via a query-param GET request
        const res = await fetch(`/api/school/consent/details?token=${encodeURIComponent(token!)}`)
        if (!res.ok) {
          const data = await res.json()
          setError(data.error ?? t('consent.form.invalid_or_expired'))
          return
        }
        const data = await res.json()
        setDetails(data)
      } catch {
        setError(t('consent.form.load_failed'))
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [token, t])

  async function handleAction(action: 'approve' | 'deny') {
    if (!token) return
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/school/consent', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, action }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? t('consent.form.process_failed'))
        return
      }

      setResult({ status: data.status, message: data.message })
    } catch {
      setError(t('action.error_generic'))
    } finally {
      setSubmitting(false)
    }
  }

  // Result screen
  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
        <div className="w-full max-w-lg">
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              {result.status === 'approved' ? (
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              )}
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {result.status === 'approved'
                  ? t('consent.form.result_granted')
                  : t('consent.form.result_denied')}
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">{result.message}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">{t('consent.form.loading')}</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error && !details) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
        <div className="w-full max-w-lg">
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h1 className="text-xl font-bold text-foreground mb-2">
                {t('consent.form.unable_to_load')}
              </h1>
              <p className="text-muted-foreground">{error}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (!details) return null

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-2xl">
        <Card>
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">{t('consent.form.page_title')}</CardTitle>
            <CardDescription>
              {t('brand.name')} &mdash; {t('consent.form.subtitle')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Student & School Info */}
            <div className="rounded-lg border border-border p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('consent.form.student_label')}</span>
                <span className="font-medium text-foreground">{details.student_name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('consent.form.school_label')}</span>
                <span className="font-medium text-foreground">{details.school_name}</span>
              </div>
            </div>

            <Separator />

            {/* Data Collection Notice */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                {t('consent.form.what_collected_title')}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 pl-6 list-disc">
                <li>{t('consent.form.collected_item_identity')}</li>
                <li>{t('consent.form.collected_item_academic')}</li>
                <li>{t('consent.form.collected_item_progress')}</li>
                <li>{t('consent.form.collected_item_activity')}</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                {t('consent.form.how_used_title')}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 pl-6 list-disc">
                <li>{t('consent.form.use_item_personalise')}</li>
                <li>{t('consent.form.use_item_teacher_monitor')}</li>
                <li>{t('consent.form.use_item_anon_analytics')}</li>
                <li>{t('legal.no_sell_data')}</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                {t('consent.form.rights_title')}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 pl-6 list-disc">
                <li>
                  <strong>{t('legal.right_access')}</strong> &mdash;{' '}
                  {t('consent.form.right_access_desc')}
                </li>
                <li>
                  <strong>{t('legal.right_correct')}</strong> &mdash;{' '}
                  {t('consent.form.right_correct_desc')}
                </li>
                <li>
                  <strong>{t('legal.right_delete')}</strong> &mdash;{' '}
                  {t('consent.form.right_delete_desc')}
                </li>
                <li>
                  <strong>{t('legal.right_withdraw')}</strong> &mdash;{' '}
                  {t('consent.form.right_withdraw_desc')}
                </li>
                <li>
                  <strong>{t('consent.form.right_portability')}</strong> &mdash;{' '}
                  {t('consent.form.right_portability_desc')}
                </li>
                <li>
                  <strong>{t('legal.right_complain')}</strong> &mdash;{' '}
                  {t('consent.form.right_complain_desc')}
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                {t('consent.form.retention_note')}{' '}
                <span className="text-foreground font-medium">info@Upskillenergy.com</span>.
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pt-2">
            <div className="flex w-full gap-3">
              <Button
                className="flex-1"
                size="lg"
                disabled={submitting}
                onClick={() => handleAction('approve')}
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <CheckCircle className="h-4 w-4 mr-2" />
                )}
                {t('consent.form.consent_cta')}
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                size="lg"
                disabled={submitting}
                onClick={() => handleAction('deny')}
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <XCircle className="h-4 w-4 mr-2" />
                )}
                {t('consent.form.deny_cta')}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              {t('consent.form.footer_disclaimer')}
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
