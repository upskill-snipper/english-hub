'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { ArrowLeft, Loader2, CheckCircle, School, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'

interface JoinResult {
  school_name: string
  class_name: string | null
}

export default function JoinSchoolPage() {
  const { user } = useAuthStore()
  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<JoinResult | null>(null)

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const trimmed = code.trim().toUpperCase()
    if (!trimmed) {
      setError('Please enter a join code.')
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
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setResult(data)
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <School className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Join a School</h1>
              <p className="text-muted-foreground mb-6">
                You need to be logged in to join a school. Please sign in or create an account first.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Button variant="outline" render={<Link href="/auth/login?redirect=/school/join" />}>
                  Log in
                </Button>
                <Button render={<Link href="/auth/register" />}>
                  Register
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="border-green-500/30 bg-green-500/5 text-center">
            <CardContent className="pt-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle className="w-7 h-7 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                You&apos;re in!
              </h1>
              <p className="text-muted-foreground mb-2">
                You have successfully joined{' '}
                <span className="text-foreground font-semibold">{result.school_name}</span>.
              </p>
              {result.class_name && (
                <Badge variant="secondary" className="mb-2 text-sm">
                  Class: {result.class_name}
                </Badge>
              )}
              <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-6">
                You now have full access!
              </p>
              <div className="flex items-center justify-center gap-3">
                <Button render={<Link href="/school" />}>
                  School Dashboard
                </Button>
                <Button variant="outline" render={<Link href="/dashboard" />}>
                  Go to Dashboard
                </Button>
              </div>
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
          render={<Link href="/dashboard" />}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Button>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <School className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Join Your School</CardTitle>
            <CardDescription>
              Enter the code provided by your teacher
            </CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleJoin} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="joinCode">Join code</Label>
                <Input
                  id="joinCode"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="e.g. ABC123"
                  className="text-center text-lg font-mono tracking-widest uppercase"
                  maxLength={20}
                  autoFocus
                  autoComplete="off"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !code.trim()}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Joining...
                  </>
                ) : (
                  'Join School'
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-muted-foreground text-sm text-center">
              Your teacher should have given you a code. If you don&apos;t have one, ask your teacher for the join code.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
