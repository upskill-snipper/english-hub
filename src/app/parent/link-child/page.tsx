'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Link2, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LINK_CODE_LENGTH } from '@/lib/parent/link-codes'

// ── /parent/link-child ─────────────────────────────────────────────────────
//
// Parent enters the 6-character code their child generated in the
// student dashboard and submits it to POST /api/parent/link-child.
// On success, we redirect to the parent dashboard.

type LinkStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function LinkChildPage() {
  const router = useRouter()
  const [digits, setDigits] = useState<string[]>(() =>
    Array.from({ length: LINK_CODE_LENGTH }, () => '')
  )
  const [status, setStatus] = useState<LinkStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [linkedChildName, setLinkedChildName] = useState<string | null>(null)
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    inputsRef.current[0]?.focus()
  }, [])

  const code = digits.join('')
  const isComplete = code.length === LINK_CODE_LENGTH

  // ── Input handlers ──────────────────────────────────────────────────────
  const handleDigitChange = (index: number, raw: string) => {
    // Only accept a single uppercase alphanumeric char
    const char = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(-1)
    setDigits((prev) => {
      const next = [...prev]
      next[index] = char
      return next
    })
    if (char && index < LINK_CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < LINK_CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData
      .getData('text')
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, LINK_CODE_LENGTH)
    if (!pasted) return
    const next = Array.from({ length: LINK_CODE_LENGTH }, (_, i) => pasted[i] ?? '')
    setDigits(next)
    const nextFocus = Math.min(pasted.length, LINK_CODE_LENGTH - 1)
    inputsRef.current[nextFocus]?.focus()
  }

  // ── Submit ──────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isComplete || status === 'submitting') return

    setStatus('submitting')
    setErrorMessage(null)

    try {
      const res = await fetch('/api/parent/link-child', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(
          data?.error ?? 'Could not link account. Please try again.'
        )
        return
      }

      setStatus('success')
      setLinkedChildName(data?.child?.name ?? null)

      // Redirect after a short pause so the user sees the confirmation
      setTimeout(() => {
        router.push('/parent/dashboard')
      }, 1600)
    } catch (err) {
      console.error('[link-child] submit error:', err)
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  const reset = () => {
    setDigits(Array.from({ length: LINK_CODE_LENGTH }, () => ''))
    setStatus('idle')
    setErrorMessage(null)
    setLinkedChildName(null)
    inputsRef.current[0]?.focus()
  }

  return (
    <div className="mx-auto flex min-h-[80vh] w-full max-w-xl flex-col justify-center px-4 py-12">
      <div className="mb-6">
        <Link
          href="/parent/dashboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>
      </div>

      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Link2 className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl">Link your child</CardTitle>
          <CardDescription>
            Ask your child to open their student dashboard and generate a 6-character
            link code. Enter it below to connect their account to yours.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
              <div>
                <p className="text-lg font-semibold text-foreground">
                  {linkedChildName
                    ? `Linked to ${linkedChildName}`
                    : 'Account linked'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Redirecting you to the dashboard...
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center gap-2 sm:gap-3">
                {digits.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el
                    }}
                    value={value}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    inputMode="text"
                    autoComplete="one-time-code"
                    maxLength={1}
                    aria-label={`Link code character ${index + 1}`}
                    disabled={status === 'submitting'}
                    className={cn(
                      'h-14 w-11 rounded-lg border-2 bg-background text-center font-mono text-2xl font-bold uppercase transition-colors sm:h-16 sm:w-14 sm:text-3xl',
                      'border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30',
                      status === 'error' &&
                        'border-destructive focus:border-destructive focus:ring-destructive/30'
                    )}
                  />
                ))}
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <Button
                  type="submit"
                  disabled={!isComplete || status === 'submitting'}
                  className="min-w-[10rem]"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Linking...
                    </>
                  ) : (
                    'Link account'
                  )}
                </Button>
                {status === 'error' && (
                  <Button type="button" variant="outline" onClick={reset}>
                    Clear code
                  </Button>
                )}
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Codes are valid for 15 minutes and can only be used once.
              </p>
            </form>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p className="mb-2 font-semibold text-foreground">
          Where does my child get their code?
        </p>
        <ol className="ml-5 list-decimal space-y-1">
          <li>Ask your child to sign in to their student dashboard.</li>
          <li>
            They open <span className="font-medium">Settings → Parent access</span>{' '}
            and tap <span className="font-medium">Generate link code</span>.
          </li>
          <li>They read you the 6-character code (it expires in 15 minutes).</li>
        </ol>
      </div>
    </div>
  )
}
