'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { Mail, Clock, MessageCircleQuestion, Send } from 'lucide-react'

const SUBJECTS = [
  'General Enquiry',
  'Technical Support',
  'Billing',
  'School/Institutional',
  'Partnership',
  'Feedback',
] as const

type Subject = (typeof SUBJECTS)[number]

interface FormData {
  name: string
  email: string
  subject: Subject | ''
  message: string
}

export default function ContactPage() {
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
      toast.error('Please fill in all fields.')
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
        toast.error(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setSubmitted(true)
      toast.success('Message sent! We\'ll get back to you within 2 business days.')
    } catch {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 text-muted-foreground">
          Have a question, suggestion, or need help? We&apos;d love to hear from you.
        </p>
      </div>

      {/* ── Info cards ─────────────────────────────────────── */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <Mail className="mx-auto mb-2 h-5 w-5 text-primary" />
          <p className="text-sm font-medium text-foreground">Email Us</p>
          <a
            href="mailto:support@theenglishhub.app"
            className="mt-1 block text-sm text-primary hover:underline"
          >
            support@theenglishhub.app
          </a>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <Clock className="mx-auto mb-2 h-5 w-5 text-primary" />
          <p className="text-sm font-medium text-foreground">Response Time</p>
          <p className="mt-1 text-sm text-muted-foreground">Within 2 business days</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 text-center">
          <MessageCircleQuestion className="mx-auto mb-2 h-5 w-5 text-primary" />
          <p className="text-sm font-medium text-foreground">Quick Answers</p>
          <Link href="/help/faq" className="mt-1 block text-sm text-primary hover:underline">
            Browse our FAQ
          </Link>
        </div>
      </div>

      {/* ── Form / Success ─────────────────────────────────── */}
      {submitted ? (
        <div className="rounded-lg border border-border bg-card p-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Send className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Message Sent</h2>
          <p className="mt-2 text-muted-foreground">
            Thank you for reaching out. We&apos;ll respond within 2 business days.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-lg border border-border bg-card p-6 sm:p-8"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              maxLength={100}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={200}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
              Subject
            </label>
            <select
              id="subject"
              required
              value={form.subject}
              onChange={(e) => update('subject', e.target.value as Subject)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="" disabled>
                Select a subject
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              maxLength={2000}
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </main>
  )
}
