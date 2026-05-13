'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  Star,
  Users,
  Clock,
  Gift,
  Shield,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useT } from '@/lib/i18n/use-t'

// ---------------------------------------------------------------------------
// Constants
//
// Each option keeps a stable value (used by the API contract at
// /api/school/contact) and a translation key for the display label, so the
// AR locale never changes the payload sent to the server.
// ---------------------------------------------------------------------------

const ROLES = [
  { value: 'Head of Department', key: 'for_schools_contact.role.head_of_department' },
  { value: 'Head of English', key: 'for_schools_contact.role.head_of_english' },
  { value: 'Deputy Head', key: 'for_schools_contact.role.deputy_head' },
  { value: 'Headteacher', key: 'for_schools_contact.role.headteacher' },
  { value: 'MAT Lead', key: 'for_schools_contact.role.mat_lead' },
  { value: 'Other', key: 'for_schools_contact.role.other' },
] as const

const STUDENT_COUNTS = [
  { value: 'Under 100', key: 'for_schools_contact.student_count.under_100' },
  { value: '100-300', key: 'for_schools_contact.student_count.100_300' },
  { value: '300-500', key: 'for_schools_contact.student_count.300_500' },
  { value: '500-1000', key: 'for_schools_contact.student_count.500_1000' },
  { value: '1000+', key: 'for_schools_contact.student_count.1000_plus' },
] as const

const EXAM_BOARDS = [
  { value: 'AQA', key: 'exam_board.aqa' },
  { value: 'Edexcel', key: 'exam_board.edexcel' },
  { value: 'OCR', key: 'exam_board.ocr' },
  { value: 'WJEC', key: 'exam_board.wjec' },
  { value: 'IGCSE/CAIE', key: 'exam_board.igcse_caie' },
] as const

const COUNTRY_CODES = [
  { code: '+44', key: 'country_code.uk' },
  { code: '+1', key: 'country_code.us_ca' },
  { code: '+971', key: 'country_code.uae' },
  { code: '+974', key: 'country_code.qatar' },
  { code: '+65', key: 'country_code.singapore' },
  { code: '+852', key: 'country_code.hk' },
  { code: '+61', key: 'country_code.australia' },
] as const

const PREFERRED_CONTACT_OPTIONS = [
  { value: 'Email', key: 'for_schools_contact.preferred.email' },
  { value: 'Phone', key: 'for_schools_contact.preferred.phone' },
  { value: 'Either', key: 'for_schools_contact.preferred.either' },
] as const

// ---------------------------------------------------------------------------
// NativeSelect (matches register page style)
// ---------------------------------------------------------------------------

function NativeSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  t,
}: {
  id: string
  value: string
  onChange: (v: string) => void
  options: ReadonlyArray<{ value: string; key: string }>
  placeholder?: string
  t: (key: string) => string
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/20"
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {t(opt.key)}
        </option>
      ))}
    </select>
  )
}

// ---------------------------------------------------------------------------
// FieldError
// ---------------------------------------------------------------------------

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return (
    <p className="flex items-center gap-1 text-xs text-destructive mt-1">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {msg}
    </p>
  )
}

// ---------------------------------------------------------------------------
// Form state
// ---------------------------------------------------------------------------

interface ContactForm {
  schoolName: string
  contactName: string
  email: string
  countryCode: string
  phone: string
  preferredContact: string
  role: string
  studentCount: string
  examBoard: string
  message: string
}

const INITIAL_FORM: ContactForm = {
  schoolName: '',
  contactName: '',
  email: '',
  countryCode: '+44',
  phone: '',
  preferredContact: 'Email',
  role: '',
  studentCount: '',
  examBoard: '',
  message: '',
}

// ---------------------------------------------------------------------------
// Side panel — Founding Schools info
// ---------------------------------------------------------------------------

function FoundingSchoolsPanel() {
  return (
    <div className="space-y-6">
      {/* Founding Schools card */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-clay-600" />
            <h3 className="text-lg font-semibold text-foreground">
              Why join the Founding Schools Programme?
            </h3>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Gift className="h-4 w-4 mt-0.5 shrink-0 text-clay-600" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Free access until August 2026</span> —
                no payment required to get started
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="h-4 w-4 mt-0.5 shrink-0 text-clay-600" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Unlimited teachers and students</span>{' '}
                — whole-department access on a single site license
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-4 w-4 mt-0.5 shrink-0 text-clay-600" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Locked-in founding pricing</span> —
                guaranteed best rate when the programme ends
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-clay-600" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Direct line to the product team</span>{' '}
                — your feedback shapes the platform
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-clay-600" />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Live within 48 hours</span> — we
                handle onboarding and teacher training
              </span>
            </li>
          </ul>

          <div className="rounded-md border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 space-y-1.5">
            <p className="text-sm font-semibold text-amber-700">
              Founding Schools: <span className="text-foreground">£4,000/year</span>{' '}
              <span className="text-muted-foreground/80">
                (Standard <span className="line-through">£8,000</span> from August 2026)
              </span>
            </p>
            <p className="text-xs text-amber-700/90 font-medium">
              First 10 schools only — additional schools welcome at Standard rates.
            </p>
            <p className="text-[11px] text-amber-700">⚡ Prices increasing August 2026.</p>
          </div>
        </CardContent>
      </Card>

      {/* What to expect */}
      <Card className="border-muted/40 bg-card/50">
        <CardContent className="pt-6 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">What we&apos;ll cover</h3>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-sm text-muted-foreground">
                Your department size and exam board
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-sm text-muted-foreground">
                A live walkthrough of the platform
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-sm text-muted-foreground">
                Founding pricing for your school
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-sm text-muted-foreground">
                Onboarding timeline (most schools are live within 48 hours)
              </span>
            </li>
          </ul>
          <p className="text-sm italic text-muted-foreground pt-1">
            No obligation. No sales deck. Just a conversation.
          </p>

          <div className="rounded-md border border-primary/20 bg-primary/5 px-4 py-3 mt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Missed exams?</span> Our analytics data
              can also support schools in cases where students miss exams, providing predicted
              grades based on continuous assessment data, mock exam performance, and coursework to
              ensure fair outcomes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Success screen
// ---------------------------------------------------------------------------

function SuccessScreen({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col items-center gap-6 py-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-500/10">
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
      </div>
      <div className="space-y-2 max-w-md">
        <h2 className="text-2xl font-bold text-foreground">
          {t('for_schools_contact.success.title')}
        </h2>
        <p className="text-muted-foreground">{t('for_schools_contact.success.body')}</p>
      </div>
      <Button render={<Link href="/for-schools" />} variant="outline">
        <ChevronLeft className="h-4 w-4" />
        {t('for_schools_contact.back_to_schools')}
      </Button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function BookACallPage() {
  const t = useT()
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState(false)

  function patch(update: Partial<ContactForm>) {
    setForm((prev) => ({ ...prev, ...update }))
  }

  // -------------------------------------------------------------------------
  // Validation
  // -------------------------------------------------------------------------

  function validate(): boolean {
    const errs: Partial<Record<keyof ContactForm, string>> = {}
    if (!form.schoolName.trim())
      errs.schoolName = t('for_schools_contact.error.school_name_required')
    if (!form.contactName.trim())
      errs.contactName = t('for_schools_contact.error.contact_name_required')
    if (!form.email.trim()) {
      errs.email = t('for_schools_contact.error.email_required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t('for_schools_contact.error.email_invalid')
    }
    if (!form.role) errs.role = t('for_schools_contact.error.role_required')
    if (!form.studentCount)
      errs.studentCount = t('for_schools_contact.error.student_count_required')
    if (!form.examBoard) errs.examBoard = t('for_schools_contact.error.exam_board_required')
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  // -------------------------------------------------------------------------
  // Submit
  // -------------------------------------------------------------------------

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/school/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()
      if (res.ok) {
        setSuccess(true)
      } else {
        setSubmitError(json.error ?? t('for_schools_contact.error.generic'))
      }
    } catch {
      setSubmitError(t('for_schools_contact.error.network'))
    } finally {
      setSubmitting(false)
    }
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  if (success) {
    return (
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="mx-auto max-w-2xl">
          <SuccessScreen t={t} />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <Link
            href="/for-schools"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            {t('for_schools_contact.back_to_schools')}
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('for_schools_contact.h1')}
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {t('for_schools_contact.intro')}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Contact form */}
          <Card className="border-muted/40 bg-card/50 backdrop-blur">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* School name */}
                <div className="space-y-1.5">
                  <Label htmlFor="schoolName">
                    {t('for_schools_contact.field.school_name')}{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="schoolName"
                    placeholder={t('for_schools_contact.placeholder.school_name')}
                    value={form.schoolName}
                    onChange={(e) => patch({ schoolName: e.target.value })}
                  />
                  <FieldError msg={errors.schoolName} />
                </div>

                {/* Contact name */}
                <div className="space-y-1.5">
                  <Label htmlFor="contactName">
                    {t('for_schools_contact.field.contact_name')}{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactName"
                    placeholder={t('for_schools_contact.placeholder.contact_name')}
                    value={form.contactName}
                    onChange={(e) => patch({ contactName: e.target.value })}
                  />
                  <FieldError msg={errors.contactName} />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email">
                    {t('for_schools_contact.field.email')}{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('for_schools_contact.placeholder.email')}
                    value={form.email}
                    onChange={(e) => patch({ email: e.target.value })}
                  />
                  <FieldError msg={errors.email} />
                </div>

                {/* Phone with country code */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone">{t('for_schools_contact.field.phone')}</Label>
                  <div className="flex gap-2">
                    <select
                      id="countryCode"
                      value={form.countryCode}
                      onChange={(e) => patch({ countryCode: e.target.value })}
                      className="flex h-10 w-[140px] shrink-0 rounded-lg border border-input bg-transparent px-2 py-2 text-sm text-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25"
                    >
                      {COUNTRY_CODES.map((cc) => (
                        <option key={cc.code} value={cc.code}>
                          {t(cc.key)}
                        </option>
                      ))}
                    </select>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t('for_schools_contact.placeholder.phone')}
                      value={form.phone}
                      onChange={(e) => patch({ phone: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                {/* Preferred contact method */}
                <div className="space-y-1.5">
                  <Label>{t('for_schools_contact.field.preferred_contact')}</Label>
                  <div className="flex gap-4">
                    {PREFERRED_CONTACT_OPTIONS.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer text-sm text-foreground"
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={option.value}
                          checked={form.preferredContact === option.value}
                          onChange={(e) => patch({ preferredContact: e.target.value })}
                          className="accent-primary h-4 w-4"
                        />
                        {t(option.key)}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Role */}
                <div className="space-y-1.5">
                  <Label htmlFor="role">
                    {t('for_schools_contact.field.role')}{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                  <NativeSelect
                    id="role"
                    value={form.role}
                    onChange={(v) => patch({ role: v })}
                    options={ROLES}
                    placeholder={t('for_schools_contact.placeholder.role')}
                    t={t}
                  />
                  <FieldError msg={errors.role} />
                </div>

                {/* Student count */}
                <div className="space-y-1.5">
                  <Label htmlFor="studentCount">
                    {t('for_schools_contact.field.student_count')}{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                  <NativeSelect
                    id="studentCount"
                    value={form.studentCount}
                    onChange={(v) => patch({ studentCount: v })}
                    options={STUDENT_COUNTS}
                    placeholder={t('for_schools_contact.placeholder.student_count')}
                    t={t}
                  />
                  <FieldError msg={errors.studentCount} />
                </div>

                {/* Exam board */}
                <div className="space-y-1.5">
                  <Label htmlFor="examBoard">
                    {t('for_schools_contact.field.exam_board')}{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                  <NativeSelect
                    id="examBoard"
                    value={form.examBoard}
                    onChange={(v) => patch({ examBoard: v })}
                    options={EXAM_BOARDS}
                    placeholder={t('for_schools_contact.placeholder.exam_board')}
                    t={t}
                  />
                  <FieldError msg={errors.examBoard} />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message">{t('for_schools_contact.field.message')}</Label>
                  <Textarea
                    id="message"
                    placeholder={t('for_schools_contact.placeholder.message')}
                    value={form.message}
                    onChange={(e) => patch({ message: e.target.value })}
                    rows={4}
                  />
                </div>

                {/* Submit error */}
                {submitError && (
                  <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                    <p className="text-sm text-destructive">{submitError}</p>
                  </div>
                )}

                {/* Submit */}
                <Button type="submit" disabled={submitting} className="w-full gap-1.5" size="lg">
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t('for_schools_contact.sending')}
                    </>
                  ) : (
                    <>
                      <Phone className="h-4 w-4" />
                      {t('for_schools_contact.submit')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Side panel */}
          <div className="hidden lg:block">
            <FoundingSchoolsPanel />
          </div>
        </div>

        {/* Mobile side panel (shown below form on small screens) */}
        <div className="mt-8 lg:hidden">
          <FoundingSchoolsPanel />
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {t('for_schools_contact.prefer_register_prefix')}{' '}
          <Link
            href="/for-schools/register"
            className="text-primary underline-offset-2 hover:underline"
          >
            {t('for_schools_contact.prefer_register_link')}
          </Link>
        </p>
      </div>
    </main>
  )
}
