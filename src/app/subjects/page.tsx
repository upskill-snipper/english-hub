'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Calculator, FlaskConical, ArrowRight, Mail, CheckCircle, Loader2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { SUBJECTS, type SubjectConfig } from '@/data/subjects'

const ICON_MAP = {
  BookOpen,
  Calculator,
  FlaskConical,
} as const

const COLOR_MAP = {
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/30 hover:border-blue-500/50',
    badge: 'bg-blue-500/20 text-blue-400',
    ring: 'ring-blue-500/30',
    glow: 'bg-blue-500/[0.06]',
  },
  green: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30 hover:border-emerald-500/50',
    badge: 'bg-emerald-500/20 text-emerald-400',
    ring: 'ring-emerald-500/30',
    glow: 'bg-emerald-500/[0.06]',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/30 hover:border-purple-500/50',
    badge: 'bg-purple-500/20 text-purple-400',
    ring: 'ring-purple-500/30',
    glow: 'bg-purple-500/[0.06]',
  },
} as const

function WaitlistForm({ subject }: { subject: SubjectConfig }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), subject: subject.id }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message || "You're on the list!")
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium mt-4">
        <CheckCircle className="w-4 h-4 shrink-0" />
        {message}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-4 flex gap-2">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          className="pl-9 h-10"
          required
        />
      </div>
      <Button
        type="submit"
        variant="secondary"
        size="sm"
        className="h-10 px-4 shrink-0"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          'Notify Me'
        )}
      </Button>
      {status === 'error' && (
        <p className="absolute -bottom-6 left-0 text-xs text-destructive">{message}</p>
      )}
    </form>
  )
}

function SubjectCard({ subject }: { subject: SubjectConfig }) {
  const Icon = ICON_MAP[subject.icon]
  const colors = COLOR_MAP[subject.color]

  return (
    <Card
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        colors.border,
        subject.available && 'hover:-translate-y-0.5 hover:shadow-card-hover'
      )}
    >
      {/* Glow effect */}
      <div
        className={cn(
          'absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-50',
          colors.glow
        )}
      />

      <CardContent className="relative p-8">
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-6">
          <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center', colors.bg)}>
            <Icon className={cn('w-7 h-7', colors.text)} />
          </div>
          {subject.available ? (
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              Available Now
            </Badge>
          ) : (
            <Badge variant="outline" className={cn(colors.badge, 'border-current/25')}>
              Coming Soon
            </Badge>
          )}
        </div>

        {/* Subject info */}
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
          {subject.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {subject.description}
        </p>

        {/* Boards */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {subject.boards.map((board) => (
            <Badge
              key={board}
              variant="outline"
              className="text-xs uppercase tracking-wider text-muted-foreground border-border/60"
            >
              {board}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        {subject.available ? (
          <Button
            variant="default"
            className="w-full shadow-lg shadow-primary/20"
            render={<Link href="/courses" />}
          >
            Browse Courses
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <div>
            <p className="text-sm text-muted-foreground">
              Be the first to know when {subject.name} launches. Join the waitlist:
            </p>
            <WaitlistForm subject={subject} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function SubjectsPage() {
  const subjects = Object.values(SUBJECTS)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-8 gap-2 px-4 py-1.5"
          >
            <BookOpen className="w-4 h-4" />
            Subjects
          </Badge>

          <h1 className="text-foreground">
            One Platform.{' '}
            <span className="text-primary">Every Subject.</span>
          </h1>

          <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We started with English — and we are expanding. Expert-written courses for every
            major GCSE subject, all in one place.
          </p>
        </div>
      </section>

      {/* Subject Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Card className="p-10 sm:p-14 border-border/40 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">
              <h2 className="text-foreground mb-4">
                Start with English Today
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-body-lg">
                13 structured courses, 40+ practice questions, 295 flashcards, and full exam
                guides — all included with your subscription.
              </p>
              <Button
                variant="default"
                size="lg"
                className="text-base px-10 h-12 shadow-lg shadow-primary/20"
                render={<Link href="/auth/register" />}
              >
                Start Free Trial
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
