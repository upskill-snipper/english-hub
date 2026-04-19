'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useBoard } from '@/hooks/useBoard'
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
import { YEAR_GROUPS, EXAM_BOARDS } from '@/lib/utils'
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

function RegisterForm() {
  const searchParams = useSearchParams()
  const { board: selectedBoard } = useBoard()
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

    if (!fullName) errors.fullName = 'Full name is required.'
    if (!email) errors.email = 'Email address is required.'
    if (!password) errors.password = 'Password is required.'
    else if (password.length < 8) errors.password = 'Password must be at least 8 characters.'
    if (!confirmPassword) errors.confirmPassword = 'Please confirm your password.'
    else if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match.'

    if (accountType === 'student') {
      if (!dobDay || !dobMonth || !dobYear) errors.dob = 'Date of birth is required.'
      if (isUnder13) {
        errors.dob = 'You must be at least 13 years old to create an account.'
      }
      if (isUnder16 && !parentGuardianEmail) {
        errors.parentGuardianEmail = 'Parent/Guardian email is required for users under 16.'
      }
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setError('Please fix the errors below.')
      return
    }

    setLoading(true)

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
          setError(ageData.error || 'Age validation failed.')
          setLoading(false)
          return
        }
      } catch {
        setError('Unable to verify age. Please try again.')
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
      setError(
        'If this email address is valid and not already registered, we have ' +
          'sent a verification link to it. Please check your inbox ' +
          '(including spam) and follow the link to activate your account.',
      )
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
        console.error('Profile upsert error:', profileError)
        // Don't block signup for profile error — it can be updated later
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
              <h1 className="text-2xl font-bold text-foreground mb-2">Check your email</h1>
              <p className="text-muted-foreground mb-4">
                We&apos;ve sent a confirmation link to{' '}
                <span className="text-foreground font-medium">{email}</span>. Please click the link
                to verify your {accountType === 'teacher' ? 'teacher' : ''} account before signing
                in.
              </p>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 mb-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Your free trial is ready.</span> You
                  have 3 free uses of every premium feature — AI marking, lesson plans, and more.
                </p>
              </div>
              {accountType === 'teacher' && (
                <p className="text-sm text-muted-foreground mb-4">
                  Once verified, you&apos;ll have access to the Teacher Dashboard with lesson
                  planning, student analytics, and assessment tools.
                </p>
              )}
              <Button render={<Link href="/auth/login" />}>Back to login</Button>
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
          Back to home
        </Button>

        {/* Teacher banner */}
        <div className="mb-4 flex items-center justify-between gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Are you a teacher?</span> Get lesson
            plans, AI marking, and analytics built for educators.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="shrink-0 border-primary/40 text-primary hover:bg-primary/10"
            render={<Link href="/auth/teacher-register" />}
          >
            Teacher sign-up
          </Button>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {accountType === 'teacher'
                ? 'Start your free teacher account'
                : 'Create your free account'}
            </CardTitle>
            <CardDescription>
              {accountType === 'teacher'
                ? 'Save 5+ hours per week with AI lesson planning and marking.'
                : 'No credit card required. Try every premium feature 3 times, free.'}
            </CardDescription>
          </CardHeader>

          {/* Free trial benefits */}
          <div className="px-6 pb-2">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 space-y-2.5">
              <p className="text-sm font-medium text-foreground flex items-center gap-2">
                <Gift className="h-4 w-4 text-primary" />
                What&apos;s included free
              </p>
              <div className="grid grid-cols-1 gap-1.5 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                  Courses, revision notes, flashcards (unlimited)
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />3 free uses of every AI
                  tool (marking, lesson plans, and more)
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-primary shrink-0" />
                  Upgrade when you&apos;re ready — first month free
                </span>
              </div>
            </div>
          </div>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Account type toggle */}
              <div className="space-y-1.5">
                <Label>I am a</Label>
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
                    Student
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
                    Teacher
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="fullName">
                  Full name <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
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
                    Date of Birth <span className="text-destructive">*</span>
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
                        aria-label="Day"
                        aria-invalid={!!fieldErrors.dob}
                      >
                        <option value="">Day</option>
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
                        aria-label="Month"
                        aria-invalid={!!fieldErrors.dob}
                      >
                        <option value="">Month</option>
                        {[
                          'January',
                          'February',
                          'March',
                          'April',
                          'May',
                          'June',
                          'July',
                          'August',
                          'September',
                          'October',
                          'November',
                          'December',
                        ].map((m, i) => (
                          <option key={i + 1} value={String(i + 1)}>
                            {m}
                          </option>
                        ))}
                      </select>
                      <select
                        id="dobYear"
                        value={dobYear}
                        onChange={(e) => setDobYear(e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                        required
                        aria-label="Year"
                        aria-invalid={!!fieldErrors.dob}
                      >
                        <option value="">Year</option>
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
                  <Label htmlFor="schoolName">School name</Label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                    <Input
                      id="schoolName"
                      type="text"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      placeholder="e.g. Oakwood Academy"
                      className="pl-11"
                      autoComplete="organization"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="email">
                  Email address <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
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
                  Password <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
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
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
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
                  Confirm password <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat your password"
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
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
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
                    Parent/Guardian email <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                    <Input
                      id="parentGuardianEmail"
                      type="email"
                      value={parentGuardianEmail}
                      onChange={(e) => setParentGuardianEmail(e.target.value)}
                      placeholder="parent@example.com"
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
                    As you are under 16, a parent or guardian must provide consent. We will email
                    them a consent form.
                  </p>
                </div>
              )}

              {accountType === 'student' && (
                <div className="space-y-1.5">
                  <Label htmlFor="yearGroup">Year group</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                    <select
                      id="yearGroup"
                      value={yearGroup}
                      onChange={(e) => setYearGroup(e.target.value)}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-11 text-base shadow-xs transition-[color,box-shadow] outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                    >
                      <option value="">Select year group</option>
                      {YEAR_GROUPS.map((yg) => (
                        <option key={yg} value={yg}>
                          {yg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="examBoard">Exam board</Label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <select
                    id="examBoard"
                    value={examBoard}
                    onChange={(e) => setExamBoard(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-11 text-base shadow-xs transition-[color,box-shadow] outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                  >
                    <option value="">Select exam board</option>
                    {EXAM_BOARDS.map((board) => (
                      <option key={board} value={board}>
                        {board}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                By creating an account, you agree to our{' '}
                <Link
                  href="/terms"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Privacy Policy
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
                    Creating account...
                  </>
                ) : accountType === 'teacher' ? (
                  'Create free teacher account'
                ) : (
                  'Create free account'
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="justify-center">
            <p className="text-muted-foreground text-sm">
              Already have an account?{' '}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 font-medium"
                render={<Link href="/auth/login" />}
              >
                Sign in
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
