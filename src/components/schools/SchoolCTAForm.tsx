'use client'

// School conversion form - the primary institutional CTA. Collects the
// full institutional context (role, school, country, student numbers,
// year groups, main challenge, contact details) and posts to the
// existing /api/school-inquiry endpoint.
//
// API contract note: /api/school-inquiry accepts
//   school_name, teacher_name, email, role, num_students, message
// The extra institutional fields (country, year groups, challenge,
// phone/WhatsApp, preferred contact) are packed into `message` as a
// structured block so no information is lost and the API contract is
// preserved without a backend change.

import { useState } from 'react'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ROLE_OPTIONS = [
  { value: 'head_of_english', label: 'Head of English' },
  { value: 'head_of_department', label: 'Head of Department' },
  { value: 'english_teacher', label: 'English Teacher' },
  { value: 'assistant_head', label: 'Assistant Head' },
  { value: 'deputy_head', label: 'Deputy Head' },
  { value: 'headteacher', label: 'Headteacher / Principal' },
  { value: 'mat_leader', label: 'MAT / Group Lead' },
  { value: 'other', label: 'Other' },
] as const

// Values must match VALID_STUDENT_RANGES in /api/school-inquiry.
const STUDENT_RANGE_OPTIONS = [
  { value: '1-30', label: 'Up to 30 (one class / pilot group)' },
  { value: '31-50', label: '31-50' },
  { value: '51-100', label: '51-100' },
  { value: '101-200', label: '101-200' },
  { value: '201-500', label: '201-500' },
  { value: '500+', label: '500+' },
] as const

const selectClass =
  'h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 dark:bg-input/20'

export function SchoolCTAForm({ heading }: { heading?: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const country = (fd.get('country') as string) || ''
    const yearGroups = (fd.get('year_groups') as string) || ''
    const challenge = (fd.get('challenge') as string) || ''
    const phone = (fd.get('phone') as string) || ''

    const messageBlock = [
      challenge && `Main challenge: ${challenge}`,
      country && `Country: ${country}`,
      yearGroups && `Year groups of interest: ${yearGroups}`,
      phone && `Phone / WhatsApp: ${phone}`,
    ]
      .filter(Boolean)
      .join('\n')

    const data = {
      school_name: fd.get('school_name') as string,
      teacher_name: fd.get('contact_name') as string,
      email: fd.get('email') as string,
      role: fd.get('role') as string,
      num_students: fd.get('num_students') as string,
      message: messageBlock.slice(0, 1000),
    }

    try {
      const res = await fetch('/api/school-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 text-center">
        <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">Thank you - we&rsquo;ve got it</h3>
        <p className="mx-auto mt-2 max-w-md leading-relaxed text-muted-foreground">
          A member of the team will reply within one UK working day to discuss a pilot for your
          school. You can also email{' '}
          <a href="mailto:info@upskillenergy.com" className="text-primary hover:underline">
            info@upskillenergy.com
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {heading && <h3 className="font-serif text-xl font-semibold text-foreground">{heading}</h3>}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact_name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input id="contact_name" name="contact_name" required minLength={2} maxLength={100} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">
            Role <span className="text-destructive">*</span>
          </Label>
          <select id="role" name="role" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Select your role
            </option>
            {ROLE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="school_name">
            School <span className="text-destructive">*</span>
          </Label>
          <Input id="school_name" name="school_name" required minLength={2} maxLength={200} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            name="country"
            maxLength={80}
            placeholder="e.g. United Kingdom, Qatar"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="num_students">
            Number of students <span className="text-destructive">*</span>
          </Label>
          <select
            id="num_students"
            name="num_students"
            required
            defaultValue=""
            className={selectClass}
          >
            <option value="" disabled>
              Select a range
            </option>
            {STUDENT_RANGE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="year_groups">Year groups of interest</Label>
          <Input
            id="year_groups"
            name="year_groups"
            maxLength={120}
            placeholder="e.g. Year 10-11, KS3"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="challenge">Main challenge</Label>
        <textarea
          id="challenge"
          name="challenge"
          rows={3}
          maxLength={600}
          placeholder="e.g. marking workload, intervention visibility, EAL support, exam readiness"
          className="w-full resize-none rounded-lg border border-input bg-transparent px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 dark:bg-input/20 placeholder:text-muted-foreground/60"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone / WhatsApp <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input id="phone" name="phone" maxLength={40} placeholder="+44 …" />
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full gap-2 text-base font-semibold"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          'Sending…'
        ) : (
          <>
            <Send className="h-4 w-4" />
            Book a School Pilot
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We reply within one UK working day. No card required to enquire.
      </p>
    </form>
  )
}
