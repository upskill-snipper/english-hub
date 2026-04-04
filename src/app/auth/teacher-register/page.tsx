'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const BENEFITS = [
  { icon: BookOpen,      text: '300+ ready-made lesson plans' },
  { icon: CheckSquare,   text: 'AI essay marking and feedback' },
  { icon: BarChart2,     text: 'Real-time student analytics' },
  { icon: ClipboardList, text: 'Homework management' },
  { icon: FileText,      text: 'Mock exam papers for all boards' },
  { icon: Star,          text: 'First month FREE' },
]

export default function TeacherRegisterPage() {
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isTeacher, setIsTeacher] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)

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

    if (!firstName.trim()) errors.firstName = 'First name is required.'
    if (!lastName.trim()) errors.lastName = 'Last name is required.'
    if (!email.trim()) errors.email = 'Email address is required.'
    if (!password) errors.password = 'Password is required.'
    else if (password.length < 8) errors.password = 'Password must be at least 8 characters.'
    if (!confirmPassword) errors.confirmPassword = 'Please confirm your password.'
    else if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match.'
    if (!isTeacher) errors.isTeacher = 'Please confirm you are a teacher.'
    if (!agreeTerms) errors.agreeTerms = 'You must accept the Terms of Service.'
    if (!agreePrivacy) errors.agreePrivacy = 'You must accept the Privacy Policy.'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setError('Please fix the errors below.')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          fullName: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          password,
          schoolName: schoolName.trim() || null,
          role: 'teacher',
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Registration failed. Please try again.')
        setLoading(false)
        return
      }

      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
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
              <h1 className="text-2xl font-bold text-foreground mb-3">Account created!</h1>
              <p className="text-muted-foreground mb-6">
                Check your email to verify your address, then log in to access your teacher dashboard.
              </p>
              <Button render={<Link href="/auth/login" />} className="w-full" size="lg">
                Go to login
              </Button>
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
          Back to home
        </Button>

        {/* Header */}
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">Teachers</Badge>
          <h1 className="text-3xl font-bold text-foreground mb-3">Create Your Teacher Account</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Join thousands of English teachers saving hours every week with AI-powered lesson planning,
            analytics, and ready-made resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Your details</CardTitle>
                <CardDescription>All fields marked * are required.</CardDescription>
              </CardHeader>

              <CardContent>
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
                        First name <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                        <Input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Jane"
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
                        Last name <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                        <Input
                          id="lastName"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Smith"
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
                      Email address <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane.smith@school.ac.uk"
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
                      School name{' '}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <div className="relative">
                      <School className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <Input
                        id="schoolName"
                        type="text"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        placeholder="e.g. Oakwood Academy"
                        className="pl-10"
                        autoComplete="organization"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      For school-wide access, ask your school admin or{' '}
                      <Link href="/for-schools/register" className="underline underline-offset-2 hover:text-foreground transition-colors">
                        register your school at /for-schools/register
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Password */}
                  <div className="space-y-1.5">
                    <Label htmlFor="password">
                      Password <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="At least 8 characters"
                        className="pl-10 pr-10"
                        autoComplete="new-password"
                        aria-invalid={!!fieldErrors.password}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {fieldErrors.password && (
                      <p className="text-xs text-destructive">{fieldErrors.password}</p>
                    )}
                  </div>

                  {/* Confirm password */}
                  <div className="space-y-1.5">
                    <Label htmlFor="confirmPassword">
                      Confirm password <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                      <Input
                        id="confirmPassword"
                        type={showConfirm ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Repeat your password"
                        className="pl-10 pr-10"
                        autoComplete="new-password"
                        aria-invalid={!!fieldErrors.confirmPassword}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                        aria-label={showConfirm ? 'Hide password' : 'Show password'}
                      >
                        {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {fieldErrors.confirmPassword && (
                      <p className="text-xs text-destructive">{fieldErrors.confirmPassword}</p>
                    )}
                  </div>

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
                        I am a teacher (not a student)
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
                        I agree to the{' '}
                        <Link href="/terms" className="underline underline-offset-2 hover:text-foreground transition-colors">
                          Terms of Service
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
                        I have read and accept the{' '}
                        <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                          Privacy Policy
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
                        Creating account...
                      </>
                    ) : (
                      'Create Teacher Account'
                    )}
                  </Button>
                </form>
              </CardContent>

              <CardFooter className="flex-col gap-4 pt-0">
                {/* School CTA */}
                <p className="text-xs text-muted-foreground text-center border-t border-border pt-4 w-full">
                  Is your school subscribing? Ask your IT admin or Head of Department to{' '}
                  <Link href="/for-schools/register" className="underline underline-offset-2 hover:text-foreground transition-colors">
                    register the school at /for-schools/register
                  </Link>{' '}
                  for all-staff access at &pound;1,500/year.
                </p>

                {/* Login link */}
                <p className="text-sm text-muted-foreground text-center">
                  Already have an account?{' '}
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 font-medium"
                    render={<Link href="/auth/login" />}
                  >
                    Log in
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
                  <CardTitle className="text-base text-primary">What you get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {BENEFITS.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardContent className="pt-5 pb-4">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="block text-foreground font-semibold mb-1">Need school-wide access?</span>
                    Register your school for a single subscription that covers all staff.{' '}
                    <Link href="/for-schools/register" className="underline underline-offset-2 hover:text-foreground transition-colors">
                      Learn more
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
