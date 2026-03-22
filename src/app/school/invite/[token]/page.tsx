'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { Loader2, CheckCircle, School, AlertCircle, LogIn, UserPlus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

interface InviteInfo {
  school_name: string
  role: string
  email: string
  full_name: string
}

const ROLE_LABELS: Record<string, string> = {
  admin: 'School Admin',
  head_of_department: 'Head of Department',
  teacher: 'Teacher',
}

export default function AcceptInvitePage() {
  const params = useParams()
  const token = params.token as string
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuthStore()

  const [inviteInfo, setInviteInfo] = useState<InviteInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [accepting, setAccepting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [accepted, setAccepted] = useState(false)

  // Fetch invite details on mount
  useEffect(() => {
    async function fetchInvite() {
      try {
        const res = await fetch(`/api/school/invite/accept?token=${encodeURIComponent(token)}`)
        const data = await res.json()

        if (!res.ok) {
          setError(data.error ?? 'Invalid or expired invite.')
          return
        }

        setInviteInfo(data)
      } catch {
        setError('Failed to load invite details. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      fetchInvite()
    }
  }, [token])

  async function handleAccept() {
    setError(null)
    setAccepting(true)

    try {
      const res = await fetch('/api/school/invite/accept', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Failed to accept invite. Please try again.')
        return
      }

      setAccepted(true)
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setAccepting(false)
    }
  }

  const redirectPath = `/school/invite/${token}`

  // Auto-redirect after acceptance
  useEffect(() => {
    if (!accepted) return
    const timer = setTimeout(() => router.push('/school'), 3000)
    return () => clearTimeout(timer)
  }, [accepted, router])

  // Loading state
  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <Skeleton className="h-12 w-12 rounded-full mx-auto mb-2" />
              <Skeleton className="h-6 w-48 mx-auto mb-2" />
              <Skeleton className="h-4 w-64 mx-auto" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Error with no invite info (bad token)
  if (error && !inviteInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Invalid Invite</h1>
              <p className="text-muted-foreground mb-6">{error}</p>
              <Button render={<Link href="/dashboard" />}>
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Successfully accepted
  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-green-500/30 bg-green-500/5 text-center">
            <CardContent className="pt-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle className="h-7 w-7 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Welcome to {inviteInfo?.school_name}!
              </h1>
              <p className="text-muted-foreground mb-2">
                You have joined as{' '}
                <span className="text-foreground font-medium">
                  {ROLE_LABELS[inviteInfo?.role ?? ''] ?? inviteInfo?.role}
                </span>.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Redirecting to School Dashboard...
              </p>
              <div className="flex items-center justify-center mb-4">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
              <Button variant="outline" render={<Link href="/school" />}>
                Go now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Invite loaded, show details
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <School className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">School Invitation</CardTitle>
            <CardDescription>
              You&apos;ve been invited to join a school on The English Hub.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="rounded-lg border border-border p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">School</span>
                <span className="text-sm font-medium text-foreground">{inviteInfo?.school_name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Role</span>
                <Badge variant="secondary">
                  {ROLE_LABELS[inviteInfo?.role ?? ''] ?? inviteInfo?.role}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Invited as</span>
                <span className="text-sm text-foreground">{inviteInfo?.email}</span>
              </div>
            </div>

            {user ? (
              <Button
                onClick={handleAccept}
                disabled={accepting}
                className="w-full"
                size="lg"
              >
                {accepting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Accepting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Accept Invite
                  </>
                )}
              </Button>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground text-center">
                  Please log in or create an account to accept this invitation.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    render={<Link href={`/auth/login?redirect=${encodeURIComponent(redirectPath)}`} />}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Log in
                  </Button>
                  <Button
                    className="flex-1"
                    render={<Link href={`/auth/register?redirect=${encodeURIComponent(redirectPath)}`} />}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Register
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
