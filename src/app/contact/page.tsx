'use client'

import { useState, type FormEvent } from 'react'
import { toast } from 'sonner'
import { Mail, Clock, MessageCircleQuestion, Send } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

const SUBJECTS = [
  'General Enquiry',
  'Technical Support',
  'Billing',
  'School/Institutional',
  'Partnership',
  'Feedback',
] as const

const SUBJECT_KEYS: Record<(typeof SUBJECTS)[number], string> = {
  'General Enquiry': 'contact.subject.general',
  'Technical Support': 'contact.subject.tech',
  Billing: 'contact.subject.billing',
  'School/Institutional': 'contact.subject.school',
  Partnership: 'contact.subject.partnership',
  Feedback: 'contact.subject.feedback',
}

type Subject = (typeof SUBJECTS)[number]

interface FormData {
  name: string
  email: string
  subject: Subject | ''
  message: string
}

export default function ContactPage() {
  const t = useT()
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (submitting) return

    if (!form.name.trim() || !form.email.trim() || !form.subject || !form.message.trim()) {
      toast.error(t('contact.toast.fill_fields'))
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject,
          message: form.message.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.error ?? t('contact.toast.error_generic'))
        return
      }

      setSubmitted(true)
      toast.success(t('contact.toast.sent'))
    } catch {
      toast.error(t('contact.toast.network'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('contact.title')}
        </h1>
        <p className="mt-3 text-muted-foreground">{t('contact.lead')}</p>
      </div>

      {/* ── Info cards ─────────────────────────────────────── */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <Mail className="mx-auto mb-2 h-5 w-5 text-primary" />
          <p className="text-sm font-medium text-foreground">{t('contact.email_us')}</p>
          <a
            href="mailto:info@Upskillenergy.com"
            className="mt-1 block text-sm text-primary hover:underline"
          >
            info@Upskillenergy.com
          </a>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <Clock className="mx-auto mb-2 h-5 w-5 text-primary" />
          <p className="text-sm font-medium text-foreground">{t('contact.response_time')}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t('contact.response_time_value')}</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <MessageCircleQuestion className="mx-auto mb-2 h-5 w-5 text-primary" />
          <p className="text-sm font-medium text-foreground">{t('contact.quick_answers')}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t('contact.quick_answers_value')}</p>
        </div>
      </div>

      {/* ── Form / Success ─────────────────────────────────── */}
      {submitted ? (
        <div className="rounded-lg border border-border bg-card p-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Send className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">{t('contact.sent_title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('contact.sent_body')}</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-lg border border-border bg-card p-6 sm:p-8"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
              {t('contact.field.name')}
            </label>
            <input
              id="name"
              type="text"
              required
              maxLength={100}
              placeholder={t('contact.placeholder.name')}
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              {t('contact.field.email')}
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={200}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
              {t('contact.field.subject')}
            </label>
            <select
              id="subject"
              required
              value={form.subject}
              onChange={(e) => update('subject', e.target.value as Subject)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <option value="" disabled>
                {t('contact.subject.placeholder')}
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {t(SUBJECT_KEYS[s])}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
              {t('contact.field.message')}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              maxLength={2000}
              placeholder={t('contact.placeholder.message')}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background resize-y"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {submitting ? t('contact.sending') : t('contact.send_message')}
            </button>
          </div>
        </form>
      )}
    </main>
  )
}
