'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Mail, Lock, User, GraduationCap, BookOpen, Loader2, ArrowLeft, CheckCircle } from 'lucide-react'

const YEAR_GROUPS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Adult']
const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Other']

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [yearGroup, setYearGroup] = useState('')
  const [examBoard, setExamBoard] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    const supabase = createClient()

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    // Upsert profile data
    if (data.user) {
      const { error: profileError } = await supabase.from('profiles').upsert({
        id: data.user.id,
        email,
        full_name: fullName,
        year_group: yearGroup || null,
        exam_board: examBoard || null,
      })

      if (profileError) {
        console.error('Profile upsert error:', profileError)
        // Don't block signup for profile error — it can be updated later
      }
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="card p-8 text-center">
            <CheckCircle className="w-12 h-12 text-brand-accent mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-brand-text mb-2">
              Check your email
            </h1>
            <p className="text-brand-muted mb-6">
              We&apos;ve sent a confirmation link to{' '}
              <span className="text-brand-text font-medium">{email}</span>.
              Please click the link to verify your account before signing in.
            </p>
            <Link href="/auth/login" className="btn-primary inline-flex">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="card p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-brand-text">
              Create your account
            </h1>
            <p className="text-brand-muted mt-2">
              Join The English Hub and start improving your grades
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="label">
                Full name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted/50" />
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="input-field pl-11"
                  required
                  autoComplete="name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="label">
                Email address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted/50" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-field pl-11"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted/50" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="input-field pl-11"
                  required
                  minLength={6}
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="label">
                Confirm password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted/50" />
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your password"
                  className="input-field pl-11"
                  required
                  minLength={6}
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="yearGroup" className="label">
                Year group
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted/50" />
                <select
                  id="yearGroup"
                  value={yearGroup}
                  onChange={(e) => setYearGroup(e.target.value)}
                  className="input-field pl-11 appearance-none"
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

            <div>
              <label htmlFor="examBoard" className="label">
                Exam board
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted/50" />
                <select
                  id="examBoard"
                  value={examBoard}
                  onChange={(e) => setExamBoard(e.target.value)}
                  className="input-field pl-11 appearance-none"
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

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </button>
          </form>

          <p className="text-center text-brand-muted text-sm mt-6">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="text-brand-accent hover:text-brand-accent-hover transition-colors font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
