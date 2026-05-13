'use client'

// Client island extracted from src/app/for-schools/page.tsx so the main
// page can be a server component (Cycle 4 bundle shrink). Handles form
// state, submission to /api/school-inquiry, and success/error display.

import { useState } from 'react'
import { CheckCircle, AlertCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useT } from '@/lib/i18n/use-t'

// Whitelist values stay stable for the API contract (/api/school-inquiry).
// Only display labels route through t() so AR translation does not change
// the backend payload.
const ROLE_OPTIONS = [
  { value: 'head_of_english', key: 'book_call.role.head_of_english' },
  { value: 'english_teacher', key: 'book_call.role.english_teacher' },
  { value: 'head_of_department', key: 'book_call.role.head_of_department' },
  { value: 'assistant_head', key: 'book_call.role.assistant_head' },
  { value: 'deputy_head', key: 'book_call.role.deputy_head' },
  { value: 'headteacher', key: 'book_call.role.headteacher' },
  { value: 'mat_leader', key: 'book_call.role.mat_leader' },
  { value: 'other', key: 'book_call.role.other' },
] as const

const STUDENT_COUNT_OPTIONS = [
  { value: 'under_100', key: 'book_call.student_count.under_100' },
  { value: '100_300', key: 'book_call.student_count.100_300' },
  { value: '300_600', key: 'book_call.student_count.300_600' },
  { value: '600_1000', key: 'book_call.student_count.600_1000' },
  { value: 'over_1000', key: 'book_call.student_count.over_1000' },
  { value: 'mat', key: 'book_call.student_count.mat' },
] as const

export function BookCallForm() {
  const t = useT()
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
        throw new Error((body as { error?: string }).error || t('book_call.error.generic'))
      }
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : t('book_call.error.generic'))
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 border border-primary/20 items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{t('book_call.success.title')}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          {t('book_call.success.body')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="school_name">
            {t('book_call.field.school_name')} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="school_name"
            name="school_name"
            placeholder={t('book_call.placeholder.school_name')}
            required
            minLength={2}
            maxLength={200}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact_name">
            {t('book_call.field.contact_name')} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="contact_name"
            name="contact_name"
            placeholder={t('book_call.placeholder.contact_name')}
            required
            minLength={2}
            maxLength={100}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="email">
            {t('book_call.field.email')} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t('book_call.placeholder.email')}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">
            {t('book_call.field.role')} <span className="text-destructive">*</span>
          </Label>
          <select
            id="role"
            name="role"
            required
            defaultValue=""
            className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 dark:bg-input/20"
          >
            <option value="" disabled>
              {t('book_call.placeholder.role')}
            </option>
            {ROLE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t(opt.key)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="student_count">{t('book_call.field.student_count')}</Label>
        <select
          id="student_count"
          name="student_count"
          defaultValue=""
          className="h-10 w-full rounded-lg border border-input bg-transparent px-3.5 py-2 text-sm transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 dark:bg-input/20"
        >
          <option value="">{t('book_call.placeholder.student_count')}</option>
          {STUDENT_COUNT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {t(opt.key)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t('book_call.field.message')}</Label>
        <textarea
          id="message"
          name="message"
          placeholder={t('book_call.placeholder.message')}
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
          <>{t('book_call.sending')}</>
        ) : (
          <>
            <Phone className="w-4 h-4" />
            {t('book_call.submit')}
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">{t('book_call.reply_note')}</p>
      <p className="text-center text-xs text-muted-foreground mt-1">
        {t('book_call.or_email_us_at')}{' '}
        <a href="mailto:info@Upskillenergy.com" className="text-primary hover:underline">
          info@Upskillenergy.com
        </a>
      </p>
    </form>
  )
}
