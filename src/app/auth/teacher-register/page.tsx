'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useT } from '@/lib/i18n/use-t'
import {
  User,
  Mail,
  Lock,
  School,
  CheckCircle,
  Loader2,
  Eye,
  EyeOff,
  ArrowLeft,
  BookOpen,
  BarChart2,
  ClipboardList,
  FileText,
  Star,
  CheckSquare,
  Calendar,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import GoogleSignInButton from '@/components/auth/GoogleSignInButton'

const BENEFIT_KEYS = [
  { icon: BookOpen, key: 'auth.teacher.benefit.lesson_plans' as const },
  { icon: CheckSquare, key: 'auth.teacher.benefit.ai_marking' as const },
  { icon: BarChart2, key: 'auth.teacher.benefit.analytics' as const },
  { icon: ClipboardList, key: 'auth.teacher.benefit.homework' as const },
  { icon: FileText, key: 'auth.teacher.benefit.mock_papers' as const },
  { icon: Star, key: 'auth.teacher.benefit.free_ai_uses' as const },
]

export default function TeacherRegisterPage() {
  const router = useRouter()
  const t = useT()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [selectedExamBoard, setSelectedExamBoard] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [dobDay, setDobDay] = useState('')
  const [dobMonth, setDobMonth] = useState('')
  const [dobYear, setDobYear] = useState('')
  const [isTeacher, setIsTeacher] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)

  // Teacher age guard: client-side check for >= 18. The server
  // (/api/auth/teacher-signup) only enforces >= 13, so this is purely a
  // UX nudge; we treat it as informational rather than a hard block on
  // the backend. Mirrors the DOB component pattern from /auth/register.
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
  const teacherAge = calculateAge(dobDay, dobMonth, dobYear)
  const isUnder18 = teacherAge !== null && teacherAge < 18

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setFieldErrors({})

    const errors: Record<string, string> = {}

    if (!firstName.trim()) errors.firstName = t('form.first_name_required')
    if (!lastName.trim()) errors.lastName = t('form.last_name_required')
    if (!email.trim()) errors.email = t('form.email_required')
    if (!password) errors.password = t('form.password_required')
    else if (password.length < 8) errors.password = t('form.password_min_8')
    if (!confirmPassword) errors.confirmPassword = t('form.confirm_password_required')
    else if (password !== confirmPassword) errors.confirmPassword = t('form.password_mismatch')
    if (!dobDay || !dobMonth || !dobYear) errors.dob = t('form.dob_required')
    else if (isUnder18) {
      errors.dob = t('auth.teacher.adults_only')
    }
    if (!isTeacher) errors.isTeacher = t('auth.teacher.confirm_teacher_required')
    if (!agreeTerms) errors.agreeTerms = t('form.accept_terms_required')
    if (!agreePrivacy) errors.agreePrivacy = t('form.accept_privacy_required')

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setError(t('form.fix_errors_below'))
      return
    }

    setLoading(true)

    try {
      const supabase = createClient()
      const fullName = `${firstName.trim()} ${lastName.trim()}`
      const siteUrl = window.location.origin

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${siteUrl}/auth/callback`,
        },
      })

      if (signUpError) {
        setError(signUpError.message)
        setLoading(false)
        return
      }

      // Upsert teacher profile
      if (data.user) {
        const { error: profileError } = await supabase.from('profiles').upsert({
          id: data.user.id,
          email: email.trim(),
          full_name: fullName,
          role: 'teacher',
          school_name: schoolName.trim() || null,
        })

        if (profileError) {
          console.error('Profile upsert error:', profileError)
          // Don't block signup — profile can be updated later
        }

        // Fire-and-forget: create the Prisma User projection row. Lagging
        // mirror of Supabase Auth; feeds dormancy/DSAR/retention features
        // (see /api/auth/teacher-signup route.ts header). Must not block
        // the signup/verification UX.
        const dateOfBirth = `${dobYear}-${dobMonth.padStart(2, '0')}-${dobDay.padStart(2, '0')}`
        fetch('/api/auth/teacher-signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            dateOfBirth,
            country: 'GB',
            ...(schoolName.trim() ? { school: schoolName.trim() } : {}),
            ...(selectedExamBoard ? { selectedExamBoard } : {}),
          }),
        }).catch(() => {})
      }

      // Auto-login path: when Supabase email-confirmation is disabled,
      // signUp() returns a session and the user is already logged in.
      // Skip the "Check your email" card and route straight to the
      // teacher dashboard with the welcome flag set so onboarding fires.
      if (data.session) {
        window.location.assign('/dashboard/teacher?welcome=true')
        return
      }

      setSuccess(true)
    } catch {
      setError(t('action.error_generic'))
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="text-center">
            <CardContent className="pt-10 pb-8">
              <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-3">
                {t('auth.teacher.welcome_title')}
              </h1>
              <p className="text-muted-foreground mb-4">
                {t('auth.teacher.welcome_prefix')}{' '}
                <span className="text-foreground font-medium">{email}</span>{' '}
                {t('auth.teacher.welcome_suffix')}
              </p>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 mb-6 text-left">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {t('auth.teacher.demo_ready_lead')}
                  </span>{' '}
                  {t('auth.teacher.demo_ready_body')}
                </p>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <Button render={<Link href="/demo/teacher" />} className="w-full" size="lg">
                  {t('auth.teacher.open_preview')}
                </Button>
                <Button variant="outline" render={<Link href="/" />} className="w-full" size="lg">
                  {t('auth.back_to_home')}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('form.didnt_get_email')}{' '}
                <Link
                  href="/auth/resend-verification"
                  className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
                >
                  {t('auth.resend_verification_email')}
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 text-muted-foreground hover:text-foreground"
          render={<Link href="/" />}
        >
          <ArrowLeft className="w-4 h-4" />
          {t('auth.back_to_home')}
        </Button>

        {/* Header */}
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">
            {t('auth.teacher.badge')}
          </Badge>
          <h1 className="text-3xl font-bold text-foreground mb-3">{t('auth.teacher.title')}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            {t('auth.teacher.subtitle')}
          </p>
          <p className="text-sm text-primary font-medium mt-2">{t('auth.teacher.pricing_line')}</p>
          <p className="text-sm text-muted-foreground mt-2">{t('auth.teacher.signup_takes')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t('auth.teacher.your_details')}</CardTitle>
                <CardDescription>{t('auth.teacher.required_note')}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Google OAuth — Google sign-up users skip the school name
                    field; we collect that later in /dashboard/teacher/profile.
                    Gated by NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED so we don't
                    surface the button (or its divider) until Google is
                    actually enabled in Supabase. */}
                {process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED === 'true' && (
                  <>
                    <GoogleSignInButton redirectTo="/dashboard/teacher" className="w-full" />
                    <div className="my-6 flex items-center gap-3">
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {t('auth.or_sign_up_with_email')}
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                  </>
                )}

                {error && (
                  <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName">
                        {t('form.first_name')} <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                        <Input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder={t('form.first_name_placeholder')}
                          className="pl-10"
                          autoComplete="given-name"
                          aria-invalid={!!fieldErrors.firstName}
                        />
                      </div>
                      {fieldErrors.firstName && (
                        <p className="text-xs text-destructive">{fieldErrors.firstName}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="lastName">
                        {t('form.last_name')} <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                        <Input
                          id="lastName"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder={t('form.last_name_placeholder')}
                          className="pl-10"
                          autoComplete="family-name"
                          aria-invalid={!!fieldErrors.lastName}
                        />
                      </div>
                      {fieldErrors.lastName && (
                        <p className="text-xs text-destructive">{fieldErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email">
                      {t('form.email')} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('form.teacher_email_placeholder')}
                        className="pl-10"
                        autoComplete="email"
                        aria-invalid={!!fieldErrors.email}
                      />
                    </div>
                    {fieldErrors.email && (
                      <p className="text-xs text-destructive">{fieldErrors.email}</p>
                    )}
                  </div>

                  {/* School name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="schoolName">
                      {t('form.school_name')}{' '}
                      <span className="text-muted-foreground font-normal">
                        {t('form.optional')}
                      </span>
                    </Label>
                    <div className="relative">
                      <School className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <Input
                        id="schoolName"
                        type="text"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        placeholder={t('form.school_placeholder')}
                        className="pl-10"
                        autoComplete="organization"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t('auth.teacher.school_wide_before')}{' '}
                      <Link
                        href="/for-schools/register"
                        className="underline underline-offset-2 hover:text-foreground transition-colors"
                      >
                        {t('auth.teacher.register_school_link')}
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Exam board (optional) — whitelist matches Prisma ExamBoard enum
                      in /api/auth/teacher-signup. Empty string is intentionally
                      excluded from the fetch body below (handler treats absence
                      as "not specified"). */}
                  <div className="space-y-1.5">
                    <Label htmlFor="selectedExamBoard">
                      {t('auth.teacher.primary_board')}{' '}
                      <span className="text-muted-foreground font-normal">
                        {t('form.optional')}
                      </span>
                    </Label>
                    <div className="relative">
                      <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <select
                        id="selectedExamBoard"
                        value={selectedExamBoard}
                        onChange={(e) => setSelectedExamBoard(e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-10 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                      >
                        <option value="">{t('form.select_exam_board')}</option>
                        <option value="AQA">AQA</option>
                        <option value="EDEXCEL">Pearson Edexcel</option>
                        <option value="OCR">OCR</option>
                        <option value="EDUQAS">WJEC Eduqas</option>
                        <option value="EDEXCEL_IGCSE">Pearson Edexcel IGCSE</option>
                        <option value="CAMBRIDGE_0500">Cambridge IGCSE (0500)</option>
                        <option value="CAMBRIDGE_0990">Cambridge IGCSE Global (0990)</option>
                      </select>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-1.5">
                    <Label htmlFor="password">
                      {t('form.password')} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={t('form.at_least_8_chars')}
                        className="pl-10 pr-10"
                        autoComplete="new-password"
                        aria-invalid={!!fieldErrors.password}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                        aria-label={
                          showPassword ? t('form.hide_password') : t('form.show_password')
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {fieldErrors.password && (
                      <p className="text-xs text-destructive">{fieldErrors.password}</p>
                    )}
                  </div>

                  {/* Confirm password */}
                  <div className="space-y-1.5">
                    <Label htmlFor="confirmPassword">
                      {t('form.confirm_password')} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <Input
                        id="confirmPassword"
                        type={showConfirm ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder={t('form.repeat_password')}
                        className="pl-10 pr-10"
                        autoComplete="new-password"
                        aria-invalid={!!fieldErrors.confirmPassword}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                        aria-label={showConfirm ? t('form.hide_password') : t('form.show_password')}
                      >
                        {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {fieldErrors.confirmPassword && (
                      <p className="text-xs text-destructive">{fieldErrors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Date of birth — required for Prisma User projection (schema NOT NULL) */}
                  <fieldset
                    className="space-y-1.5"
                    aria-describedby={fieldErrors.dob ? 'dob-error' : undefined}
                  >
                    <legend className="text-sm font-medium leading-none">
                      {t('form.dob')} <span className="text-destructive">*</span>
                    </legend>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <div className="flex gap-2 pl-10">
                        <select
                          id="dobDay"
                          value={dobDay}
                          onChange={(e) => setDobDay(e.target.value)}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
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
                      <p id="dob-error" className="text-xs text-destructive">
                        {fieldErrors.dob}
                      </p>
                    )}
                  </fieldset>

                  {/* Teacher confirmation checkbox */}
                  <div className="space-y-1.5">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={isTeacher}
                        onChange={(e) => setIsTeacher(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary cursor-pointer"
                        aria-invalid={!!fieldErrors.isTeacher}
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {t('auth.teacher.i_am_teacher')}
                      </span>
                    </label>
                    {fieldErrors.isTeacher && (
                      <p className="text-xs text-destructive">{fieldErrors.isTeacher}</p>
                    )}
                  </div>

                  {/* Terms checkbox */}
                  <div className="space-y-1.5">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary cursor-pointer"
                        aria-invalid={!!fieldErrors.agreeTerms}
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {t('form.agree_to_the')}{' '}
                        <Link
                          href="/terms"
                          className="underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                          {t('legal.terms_of_service')}
                        </Link>
                      </span>
                    </label>
                    {fieldErrors.agreeTerms && (
                      <p className="text-xs text-destructive">{fieldErrors.agreeTerms}</p>
                    )}
                  </div>

                  {/* Privacy checkbox */}
                  <div className="space-y-1.5">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary cursor-pointer"
                        aria-invalid={!!fieldErrors.agreePrivacy}
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {t('form.read_and_accept_the')}{' '}
                        <Link
                          href="/privacy-policy"
                          className="underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                          {t('legal.privacy_policy')}
                        </Link>
                      </span>
                    </label>
                    {fieldErrors.agreePrivacy && (
                      <p className="text-xs text-destructive">{fieldErrors.agreePrivacy}</p>
                    )}
                  </div>

                  <Button type="submit" disabled={loading} className="w-full" size="lg">
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        {t('auth.register.creating')}
                      </>
                    ) : (
                      t('auth.register.create_teacher_account')
                    )}
                  </Button>
                </form>
              </CardContent>

              <CardFooter className="flex-col gap-4 pt-0">
                {/* School CTA */}
                <p className="text-xs text-muted-foreground text-center border-t border-border pt-4 w-full">
                  {t('auth.teacher.school_interested_before')}{' '}
                  <Link
                    href="/for-schools"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    {t('auth.teacher.founding_schools_link')}
                  </Link>{' '}
                  {t('auth.teacher.school_interested_after')}
                </p>

                {/* Login link */}
                <p className="text-sm text-muted-foreground text-center">
                  {t('auth.register.already_have_account')}{' '}
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 font-medium"
                    render={<Link href="/auth/login" />}
                  >
                    {t('header.cta.login')}
                  </Button>
                </p>
              </CardFooter>
            </Card>
          </div>

          {/* Right — benefits */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-primary">
                    {t('auth.register.whats_included')}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {t('auth.teacher.no_card_required')}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {BENEFIT_KEYS.map(({ icon: Icon, key }) => (
                    <div key={key} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{t(key)}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardContent className="pt-5 pb-4">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="block text-foreground font-semibold mb-1">
                      {t('auth.teacher.need_school_wide')}
                    </span>
                    {t('auth.teacher.school_wide_body')}{' '}
                    <Link
                      href="/for-schools/register"
                      className="underline underline-offset-2 hover:text-foreground transition-colors"
                    >
                      {t('auth.teacher.learn_more')}
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
