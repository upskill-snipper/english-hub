'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ShieldCheck, CheckCircle, XCircle, Loader2, AlertTriangle, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'

interface ConsentDetails {
  student_name: string
  school_name: string
  parent_email: string
  status: string
}

export default function ConsentPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [details, setDetails] = useState<ConsentDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ status: string; message: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!token) {
      setError('No consent token provided. Please use the link from the email you received.')
      setLoading(false)
      return
    }

    async function fetchDetails() {
      try {
        // Fetch consent details via a query-param GET request
        const res = await fetch(`/api/school/consent/details?token=${encodeURIComponent(token!)}`)
        if (!res.ok) {
          const data = await res.json()
          setError(data.error ?? 'This consent link is invalid or has expired.')
          return
        }
        const data = await res.json()
        setDetails(data)
      } catch {
        setError('Failed to load consent details. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [token])

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
        setError(data.error ?? 'Failed to process your response.')
        return
      }

      setResult({ status: data.status, message: data.message })
    } catch {
      setError('Something went wrong. Please try again.')
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
                {result.status === 'approved' ? 'Consent Granted' : 'Consent Denied'}
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                {result.message}
              </p>
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
          <p className="text-sm text-muted-foreground">Loading consent details...</p>
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
                Unable to Load Consent Form
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
            <CardTitle className="text-2xl">Parental Consent Form</CardTitle>
            <CardDescription>
              The English Hub &mdash; Educational Data Processing Consent
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
                <span className="text-muted-foreground">Student</span>
                <span className="font-medium text-foreground">{details.student_name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">School</span>
                <span className="font-medium text-foreground">{details.school_name}</span>
              </div>
            </div>

            <Separator />

            {/* Data Collection Notice */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                What data is collected
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 pl-6 list-disc">
                <li>Full name and email address (for account identification)</li>
                <li>Year group and exam board (to personalise learning content)</li>
                <li>Quiz scores, progress, and completion data (to track learning outcomes)</li>
                <li>Activity timestamps (to monitor engagement)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">How the data is used</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 pl-6 list-disc">
                <li>To provide personalised English language learning</li>
                <li>To allow teachers and school administrators to monitor student progress</li>
                <li>To generate anonymised class-level analytics and insights</li>
                <li>Data is never sold to third parties or used for advertising</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Your rights under UK GDPR</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5 pl-6 list-disc">
                <li><strong>Right to access</strong> &mdash; request a copy of your child&apos;s data at any time</li>
                <li><strong>Right to rectification</strong> &mdash; correct any inaccurate data</li>
                <li><strong>Right to erasure</strong> &mdash; request deletion of your child&apos;s data</li>
                <li><strong>Right to withdraw consent</strong> &mdash; you can withdraw consent at any time by contacting the school or emailing us</li>
                <li><strong>Right to data portability</strong> &mdash; receive data in a machine-readable format</li>
                <li><strong>Right to complain</strong> &mdash; you may complain to the Information Commissioner&apos;s Office (ICO) if you believe your rights have been breached</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                Data is stored securely and retained only while your child is enrolled at the school.
                Upon leaving, all personal data will be deleted within 30 days unless otherwise required
                by law. For questions, contact your school administrator or email{' '}
                <span className="text-foreground font-medium">support@theenglishhub.co.uk</span>.
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
                I Consent
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
                I Do Not Consent
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              By clicking &ldquo;I Consent&rdquo;, you agree to the processing of your child&apos;s data
              as described above for educational purposes at their school.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
