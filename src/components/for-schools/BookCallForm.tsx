'use client'

// Client island extracted from src/app/for-schools/page.tsx so the main
// page can be a server component (Cycle 4 bundle shrink). Handles form
// state, submission to /api/school-inquiry, and success/error display.

import { useState } from 'react'
import { CheckCircle, AlertCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function BookCallForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const data = {
      school_name: fd.get('school_name') as string,
      contact_name: fd.get('contact_name') as string,
      email: fd.get('email') as string,
      role: fd.get('role') as string,
      student_count: fd.get('student_count') as string,
      message: fd.get('message') as string,
    }

    try {
      const res = await fetch('/api/school-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(
          (body as { error?: string }).error || 'Something went wrong. Please try again.',
        )
      }
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 border border-primary/20 items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          We have received your request and will be in touch within one working day to arrange your
          call. Check your inbox for a confirmation email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="school_name">School Name *</Label>
          <Input
            id="school_name"
            name="school_name"
            placeholder="e.g. Riverside Academy"
            required
            minLength={2}
            maxLength={200}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact_name">Your Name *</Label>
          <Input
            id="contact_name"
            name="contact_name"
            placeholder="e.g. Mrs J. Smith"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="email">School Email *</Label>
          <Input id="email" name="email" type="email" placeholder="j.smith@school.ac.uk" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Your Role *</Label>
          <select
            id="role"
            name="role"
            required
            defaultValue=""
            className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 dark:bg-input/20"
          >
            <option value="" disabled>
              Select your role
            </option>
            <option value="head_of_english">Head of English</option>
            <option value="english_teacher">English Teacher</option>
            <option value="head_of_department">Head of Department</option>
            <option value="assistant_head">Assistant Headteacher</option>
            <option value="deputy_head">Deputy Headteacher</option>
            <option value="headteacher">Headteacher</option>
            <option value="mat_leader">MAT Leader</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="student_count">Approx. Number of Students</Label>
        <select
          id="student_count"
          name="student_count"
          defaultValue=""
          className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 dark:bg-input/20"
        >
          <option value="">Select a range (optional)</option>
          <option value="under_100">Under 100 students</option>
          <option value="100_300">100 - 300 students</option>
          <option value="300_600">300 - 600 students</option>
          <option value="600_1000">600 - 1,000 students</option>
          <option value="over_1000">Over 1,000 students</option>
          <option value="mat">Multi-Academy Trust</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Anything else we should know? (optional)</Label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your department, any specific needs, or your preferred call time..."
          rows={4}
          maxLength={1000}
          className="w-full rounded-lg border border-input bg-transparent px-3.5 py-2.5 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 resize-none dark:bg-input/20 placeholder:text-muted-foreground/60"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2 font-semibold text-base"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>Sending...</>
        ) : (
          <>
            <Phone className="w-4 h-4" />
            Book a 20-Minute Call
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We reply within one working day. No obligation, no hard sell.
      </p>
      <p className="text-center text-xs text-muted-foreground mt-1">
        Or email us at{' '}
        <a href="mailto:info@Upskillenergy.com" className="text-primary hover:underline">
          info@Upskillenergy.com
        </a>
      </p>
    </form>
  )
}
