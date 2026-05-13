'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useBoard } from '@/hooks/useBoard'
import { useT } from '@/lib/i18n/use-t'
import {
  Mail,
  Lock,
  User,
  GraduationCap,
  BookOpen,
  Loader2,
  ArrowLeft,
  CheckCircle,
  Eye,
  EyeOff,
  Calendar,
  School,
  Sparkles,
  Gift,
  Zap,
} from 'lucide-react'

import { getUtmParams } from '@/lib/utm'
import { getChildDefaults, getChildProfileDefaults } from '@/lib/privacy/child-defaults'
import { trackEvent } from '@/lib/gtag'
import { capture as phCapture, EVENTS as PH_EVENTS } from '@/lib/posthog'
import { YEAR_GROUPS, EXAM_BOARDS } from '@/lib/utils'

// Year-group whitelist values stay stable (used by Supabase upsert at the
// `year_group` column). Only display labels route through t().
const YEAR_GROUP_LABEL_KEYS: Record<(typeof YEAR_GROUPS)[number], string> = {
  'Year 7': 'year_group.year_7',
  'Year 8': 'year_group.year_8',
  'Year 9': 'year_group.year_9',
  'Year 10': 'year_group.year_10',
  'Year 11': 'year_group.year_11',
  'Year 12': 'year_group.year_12',
  'Year 13': 'year_group.year_13',
  Adult: 'year_group.adult',
  Other: 'year_group.other',
}
const EXAM_BOARD_LABEL_KEYS: Record<(typeof EXAM_BOARDS)[number], string> = {
  AQA: 'exam_board.aqa',
  Edexcel: 'exam_board.edexcel',
  OCR: 'exam_board.ocr',
  WJEC: 'exam_board.wjec',
  Other: 'exam_board.other',
}
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import GoogleSignInButton from '@/components/auth/GoogleSignInButton'

function RegisterForm() {
  const searchParams = useSearchParams()
  const { board: selectedBoard } = useBoard()
  const t = useT()
  const [accountType, setAccountType] = useState<'student' | 'teacher'>(
    searchParams.get('type') === 'teacher' ? 'teacher' : 'student',
  )
  const [fullName, setFullName] = useState('')
  const [dobDay, setDobDay] = useState('')
  const [dobMonth, setDobMonth] = useState('')
  const [dobYear, setDobYear] = useState('')
  const [parentGuardianEmail, setParentGuardianEmail] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [yearGroup, setYearGroup] = useState('')
  const [examBoard, setExamBoard] = useState('')
  const [schoolName, setSchoolName] = useState('')

  const calculateAge = (day: string, month: string, year: string): number | null => {
    if (!day || !month || !year) return null
    const dob = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    const today = new Date()
    let age = today.getFullYear() - dob.getFullYear()
    const monthDiff = today.getMonth() - dob.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--
    }
    return age
  }

  const userAge = calculateAge(dobDay, dobMonth, dobYear)
  const isUnder13 = userAge !== null && userAge < 13
  const isUnder16 = userAge !== null && userAge >= 13 && userAge < 16

  useEffect(() => {
    if (selectedBoard && !examBoard) {
      setExamBoard(selectedBoard)
    }
  }, [selectedBoard, examBoard])
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setFieldErrors({})

    const errors: Record<string, string> = {}

    if (!fullName) errors.fullName = t('form.full_name_required')
    if (!email) errors.email = t('form.email_required')
    if (!password) errors.password = t('form.password_required')
    else if (password.length < 8) errors.password = t('form.password_min_8')
    if (!confirmPassword) errors.confirmPassword = t('form.confirm_password_required')
    else if (password !== confirmPassword) errors.confirmPassword = t('form.password_mismatch')

    if (accountType === 'student') {
      if (!dobDay || !dobMonth || !dobYear) errors.dob = t('form.dob_required')
      if (isUnder13) {
        // ICO Children's Code: under-13s cannot self-sign-up. They must be
        // routed to the parent-linked flow at /parent.
        errors.dob = t('form.under_13_blocked')
      }
      if (isUnder16 && !parentGuardianEmail) {
        errors.parentGuardianEmail = t('form.guardian_email_required')
      }
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setError(t('form.fix_errors_below'))
      return
    }

    setLoading(true)

    // Funnel: signup_started — email has been entered and submit clicked.
    // phCapture is consent-gated + minor-gated inside src/lib/posthog.ts.
    phCapture(PH_EVENTS.SIGNUP_STARTED, { accountType })

    // Server-side age validation for students
    if (accountType === 'student' && dobDay && dobMonth && dobYear) {
      try {
        const ageRes = await fetch('/api/auth/validate-age', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            dobDay: parseInt(dobDay),
            dobMonth: parseInt(dobMonth),
            dobYear: parseInt(dobYear),
            ...(parentGuardianEmail ? { parentGuardianEmail } : {}),
          }),
        })

        if (!ageRes.ok) {
          const ageData = await ageRes.json()
          setError(ageData.error || t('form.age_validation_failed'))
          setLoading(false)
          return
        }
      } catch {
        setError(t('form.age_verify_error'))
        setLoading(false)
        return
      }
    }

    const supabase = createClient()

    const siteUrl = window.location.origin
    const utmParams = getUtmParams()
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          ...(utmParams && {
            utm_source: utmParams.utm_source,
            utm_medium: utmParams.utm_medium,
            utm_campaign: utmParams.utm_campaign,
            utm_term: utmParams.utm_term,
            utm_content: utmParams.utm_content,
          }),
        },
        emailRedirectTo: `${siteUrl}/auth/callback`,
      },
    })

    if (signUpError) {
      // Account-enumeration defence (P1-SEC-6): do NOT surface Supabase's
      // raw "User already registered" message. That branch lets an attacker
      // probe which emails have existing accounts on a platform used by
      // minors. We show the same neutral response regardless of whether
      // the email was new, existed, or any other failure reason — the
      // user's expected next action is the same in every case (check the
      // inbox for a verification email; Supabase sends one automatically
      // on duplicate signup to the existing account).
      setError(t('auth.register.neutral_signup_response'))
      setLoading(false)
      return
    }

    // Upsert profile data
    if (data.user) {
      const dateOfBirth = `${dobYear}-${dobMonth.padStart(2, '0')}-${dobDay.padStart(2, '0')}`

      // ICO Children's Code: apply high-privacy defaults for under-16 users
      const isMinorUser = accountType === 'student' && userAge !== null && userAge < 18
      const isChildUser = accountType === 'student' && userAge !== null && userAge < 16
      // ICO Children's Code: use getChildProfileDefaults() for complete
      // column mapping (includes social_share_nudge)
      const childProfileDefaults = isChildUser ? getChildProfileDefaults() : null

      const { error: profileError } = await supabase.from('profiles').upsert({
        id: data.user.id,
        email,
        full_name: fullName,
        role: accountType,
        year_group: accountType === 'student' ? yearGroup || null : null,
        exam_board: examBoard || null,
        school_name: accountType === 'teacher' ? schoolName || null : null,
        date_of_birth: accountType === 'student' ? dateOfBirth : null,
        parent_guardian_email: accountType === 'student' ? parentGuardianEmail || null : null,
        is_minor: isMinorUser,
        // Children's Code (GAP-5A / GAP-7A): high-privacy defaults for under-16s
        ...(childProfileDefaults ?? {
          streaks_enabled: true,
          personalised_recommendations: true,
          streak_notifications: true,
          nudge_notifications: true,
          analytics_opt_in: false,
          marketing_opt_in: false,
        }),
        utm_source: utmParams?.utm_source ?? null,
        utm_medium: utmParams?.utm_medium ?? null,
        utm_campaign: utmParams?.utm_campaign ?? null,
      })

      if (profileError) {
        // Log every field Supabase returns so the error is actually
        // diagnosable. Previously this rendered as "Profile upsert error:
        // Object" in DevTools, hiding the message/code/details/hint that
        // tells you whether it's an RLS denial, a schema mismatch, or a
        // unique-constraint race with a server-side trigger.
        console.error('Profile upsert error:', {
          message: profileError.message,
          code: profileError.code,
          details: profileError.details,
          hint: profileError.hint,
        })
        // Non-blocking: the server-side /api/auth/register also writes a
        // Prisma User row, and the dashboard reads from there as a
        // fallback. The profile row can be reconciled later.
      }

      // Send parental consent email if under-16 student provided a parent email
      if (parentGuardianEmail) {
        try {
          await fetch('/api/auth/parent-notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              parentEmail: parentGuardianEmail,
              studentName: fullName,
              studentId: data.user.id,
            }),
          })
        } catch (err) {
          // Non-blocking — don't fail signup for parent notification error
          console.error('Parent notification error:', err)
        }
      }

      // Fire-and-forget: create the Prisma User projection row. The Supabase
      // signup above is the source of truth for credentials; this mirror row
      // is a lagging index used by dormancy-check, data-retention, DSAR, and
      // weekly-report features that query Prisma (see /api/auth/register
      // route.ts header). Must not block the user's signup/verification flow.
      if (dobYear && dobMonth && dobDay) {
        const [firstName, ...rest] = fullName.trim().split(/\s+/)
        const lastName = rest.join(' ') || firstName
        fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            lastName,
            dateOfBirth,
            country: 'GB',
            role: accountType === 'teacher' ? 'TEACHER' : 'STUDENT',
          }),
        }).catch(() => {})
      }
    }

    trackEvent('sign_up', { method: 'email' })
    // Funnel: signup_completed — Supabase returned a verified/created user.
    phCapture(PH_EVENTS.SIGNUP_COMPLETED, { accountType })

    // Auto-login path: when Supabase email-confirmation is disabled (or the
    // user already had a confirmed identity), signUp() returns a session
    // alongside the user. We don't want to render "Check your email" in
    // that case — the user is already logged in. Send them straight to the
    // dashboard with the welcome flag so onboarding fires. When there's no
    // session, fall back to the verification-pending success card.
    // When Supabase email-confirmation is OFF, signUp() returns a session and we go straight to /dashboard. When confirmation is ON, no session → fall through to the verification-pending success card below.
    if (data.session) {
      window.location.assign('/dashboard?welcome=true')
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">{t('form.check_inbox')}</h1>
              <p className="text-muted-foreground mb-4">
                {t('auth.register.welcome_prefix')}{' '}
                <span className="text-foreground font-medium">{email}</span>{' '}
                {t('auth.register.welcome_suffix')}
              </p>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 mb-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {t('auth.register.trial_ready_lead')}
                  </span>{' '}
                  {t('auth.register.trial_ready_body')}
                </p>
              </div>
              {accountType === 'teacher' && (
                <p className="text-sm text-muted-foreground mb-4">
                  {t('auth.register.teacher_after_verify')}
                </p>
              )}
              <p className="text-sm text-muted-foreground mb-4">
                {t('form.didnt_get_email')}{' '}
                <Link
                  href="/auth/resend-verification"
                  className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
                >
                  {t('auth.resend_verification_email')}
                </Link>
                .
              </p>
              <div className="flex flex-col gap-2">
                <Button className="w-full" render={<Link href="/revision" />}>
                  {t('auth.register.start_exploring')}
                </Button>
                <Button variant="outline" className="w-full" render={<Link href="/" />}>
                  {t('auth.back_to_home')}
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
          render={<Link href="/" />}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('auth.back_to_home')}
        </Button>

        {/* Teacher banner */}
        <div className="mb-4 flex items-center justify-between gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {t('auth.register.teacher_banner_q')}
            </span>{' '}
            {t('auth.register.teacher_banner_body')}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="shrink-0 border-primary/40 text-primary hover:bg-primary/10"
            render={<Link href="/auth/teacher-register" />}
          >
            {t('auth.register.teacher_signup_cta')}
          </Button>
        </div>

        <p className="mb-4 text-center text-xs text-muted-foreground">
          {t('auth.register.signup_takes_30s')}
        </p>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {accountType === 'teacher'
                ? t('auth.register.teacher_title')
                : t('auth.register.student_title')}
            </CardTitle>
            <CardDescription>
              {accountType === 'teacher'
                ? t('auth.register.teacher_subtitle')
                : t('auth.register.student_subtitle')}
            </CardDescription>
          </CardHeader>

          {/* Free trial benefits */}
          <div className="px-6 pb-2">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 space-y-2.5">
              <p className="text-sm font-medium text-foreground flex items-center gap-2">
                <Gift className="h-4 w-4 text-primary" />
                {t('auth.register.whats_included')}
              </p>
              <div className="grid grid-cols-1 gap-1.5 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                  {t('auth.register.included_courses')}
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
                  {t('auth.register.included_ai')}
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-primary shrink-0" />
                  {t('auth.register.included_upgrade')}
                </span>
              </div>
            </div>
          </div>

          <CardContent>
            {process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED === 'true' && (
              <div className="mb-5 space-y-4">
                <GoogleSignInButton redirectTo="/dashboard" className="w-full" />
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      {t('auth.or_sign_up_with_email')}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Account type toggle */}
              <div className="space-y-1.5">
                <Label>{t('auth.register.i_am_a')}</Label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAccountType('student')}
                    className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                      accountType === 'student'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40'
                    }`}
                  >
                    <GraduationCap className="w-5 h-5" />
                    {t('auth.register.student')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType('teacher')}
                    className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                      accountType === 'teacher'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40'
                    }`}
                  >
                    <School className="w-5 h-5" />
                    {t('auth.register.teacher')}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="fullName">
                  {t('form.full_name')} <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t('form.your_full_name')}
                    className="pl-11"
                    required
                    autoComplete="name"
                    aria-invalid={!!fieldErrors.fullName}
                    aria-describedby={fieldErrors.fullName ? 'fullName-error' : undefined}
                  />
                </div>
                {fieldErrors.fullName && (
                  <p id="fullName-error" className="text-sm text-destructive mt-1">
                    {fieldErrors.fullName}
                  </p>
                )}
              </div>

              {accountType === 'student' && (
                <fieldset
                  className="space-y-1.5"
                  aria-describedby={fieldErrors.dob ? 'dob-error' : undefined}
                >
                  <legend className="text-sm font-medium leading-none">
                    {t('form.dob')} <span className="text-destructive">*</span>
                  </legend>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                    <div className="flex gap-2 pl-11">
                      <select
                        id="dobDay"
                        value={dobDay}
                        onChange={(e) => setDobDay(e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                        required
                        aria-label={t('form.day')}
                        aria-invalid={!!fieldErrors.dob}
                      >
                        <option value="">{t('form.day')}</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                          <option key={d} value={String(d)}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <select
                        id="dobMonth"
                        value={dobMonth}
                        onChange={(e) => setDobMonth(e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                        required
                        aria-label={t('form.month')}
                        aria-invalid={!!fieldErrors.dob}
                      >
                        <option value="">{t('form.month')}</option>
                        {(
                          [
                            ['form.month.january', 'January'],
                            ['form.month.february', 'February'],
                            ['form.month.march', 'March'],
                            ['form.month.april', 'April'],
                            ['form.month.may', 'May'],
                            ['form.month.june', 'June'],
                            ['form.month.july', 'July'],
                            ['form.month.august', 'August'],
                            ['form.month.september', 'September'],
                            ['form.month.october', 'October'],
                            ['form.month.november', 'November'],
                            ['form.month.december', 'December'],
                          ] as const
                        ).map(([key, fallback], i) => (
                          <option key={i + 1} value={String(i + 1)}>
                            {t(key) === `[[${key}]]` ? fallback : t(key)}
                          </option>
                        ))}
                      </select>
                      <select
                        id="dobYear"
                        value={dobYear}
                        onChange={(e) => setDobYear(e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                        required
                        aria-label={t('form.year')}
                        aria-invalid={!!fieldErrors.dob}
                      >
                        <option value="">{t('form.year')}</option>
                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(
                          (y) => (
                            <option key={y} value={String(y)}>
                              {y}
                            </option>
                          ),
                        )}
                      </select>
                    </div>
                  </div>
                  {fieldErrors.dob && (
                    <p id="dob-error" className="text-sm text-destructive mt-1">
                      {fieldErrors.dob}
                    </p>
                  )}
                </fieldset>
              )}

              {accountType === 'teacher' && (
                <div className="space-y-1.5">
                  <Label htmlFor="schoolName">{t('form.school_name')}</Label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                    <Input
                      id="schoolName"
                      type="text"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      placeholder={t('form.school_placeholder')}
                      className="pl-11"
                      autoComplete="organization"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="email">
                  {t('form.email')} <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('form.email_placeholder')}
                    className="pl-11"
                    required
                    autoComplete="email"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  />
                </div>
                {fieldErrors.email && (
                  <p id="email-error" className="text-sm text-destructive mt-1">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password">
                  {t('form.password')} <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('form.at_least_8_chars')}
                    className="pl-11 pr-11"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    aria-invalid={!!fieldErrors.password}
                    aria-describedby={fieldErrors.password ? 'password-error' : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                    aria-label={showPassword ? t('form.hide_password') : t('form.show_password')}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {fieldErrors.password && (
                  <p id="password-error" className="text-sm text-destructive mt-1">
                    {fieldErrors.password}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword">
                  {t('form.confirm_password')} <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t('form.repeat_password')}
                    className="pl-11 pr-11"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    aria-invalid={!!fieldErrors.confirmPassword}
                    aria-describedby={
                      fieldErrors.confirmPassword ? 'confirmPassword-error' : undefined
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                    aria-label={showConfirm ? t('form.hide_password') : t('form.show_password')}
                  >
                    {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {fieldErrors.confirmPassword && (
                  <p id="confirmPassword-error" className="text-sm text-destructive mt-1">
                    {fieldErrors.confirmPassword}
                  </p>
                )}
              </div>

              {accountType === 'student' && isUnder16 && (
                <div className="space-y-1.5">
                  <Label htmlFor="parentGuardianEmail">
                    {t('form.guardian_email')} <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                    <Input
                      id="parentGuardianEmail"
                      type="email"
                      value={parentGuardianEmail}
                      onChange={(e) => setParentGuardianEmail(e.target.value)}
                      placeholder={t('form.guardian_email_placeholder')}
                      className="pl-11"
                      required
                      autoComplete="email"
                      aria-invalid={!!fieldErrors.parentGuardianEmail}
                      aria-describedby={
                        fieldErrors.parentGuardianEmail ? 'parentGuardianEmail-error' : undefined
                      }
                    />
                  </div>
                  {fieldErrors.parentGuardianEmail && (
                    <p id="parentGuardianEmail-error" className="text-sm text-destructive mt-1">
                      {fieldErrors.parentGuardianEmail}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {t('form.under_16_guardian_consent_help')}
                  </p>
                </div>
              )}

              {accountType === 'student' && (
                <div className="space-y-1.5">
                  <Label htmlFor="yearGroup">{t('form.year_group')}</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                    <select
                      id="yearGroup"
                      value={yearGroup}
                      onChange={(e) => setYearGroup(e.target.value)}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-11 text-base shadow-xs transition-[color,box-shadow] outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                    >
                      <option value="">{t('form.select_year_group')}</option>
                      {YEAR_GROUPS.map((yg) => (
                        <option key={yg} value={yg}>
                          {t(YEAR_GROUP_LABEL_KEYS[yg])}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="examBoard">{t('form.exam_board')}</Label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <select
                    id="examBoard"
                    value={examBoard}
                    onChange={(e) => setExamBoard(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-11 text-base shadow-xs transition-[color,box-shadow] outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                  >
                    <option value="">{t('form.select_exam_board')}</option>
                    {EXAM_BOARDS.map((board) => (
                      <option key={board} value={board}>
                        {t(EXAM_BOARD_LABEL_KEYS[board])}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                {t('auth.register.terms_agreement_before')}{' '}
                <Link
                  href="/terms"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  {t('legal.terms_of_service')}
                </Link>{' '}
                {t('auth.register.terms_and')}{' '}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  {t('legal.privacy_policy')}
                </Link>
                .
              </p>

              <Button
                type="submit"
                disabled={loading || (accountType === 'student' && isUnder13)}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    {t('auth.register.creating')}
                  </>
                ) : accountType === 'teacher' ? (
                  t('auth.register.create_teacher_account')
                ) : (
                  t('auth.register.create_free_account')
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-muted-foreground text-sm">
              {t('auth.register.already_have_account')}{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/auth/login" />}
              >
                {t('auth.sign_in')}
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <RegisterForm />
    </Suspense>
  )
}
