'use client'

/**
 * Site-admin school provisioning.
 *
 * DEFECT this page fixes (2026-08-23): the product sold school registration in
 * several places, but no code path could actually provision a school. The only
 * handler that creates a `schools` row plus the admin `school_members` row is
 * POST /api/school/register, and nothing called it - /for-schools/register is a
 * bare redirect. Signed schools therefore had no route into the product at all.
 *
 * This page is the operator-triggered flow: after a deal is signed, a site admin
 * creates the school and invites its first admin. It deliberately reuses the
 * existing /api/school/register handler rather than duplicating the insert and
 * rollback logic, so there is exactly one place that provisions a tenant.
 *
 * The operator never chooses the school admin's password. A random temporary
 * password is generated in the browser, and on success we immediately send a
 * set-password email so the school admin picks their own credential. The
 * temporary password is shown once only as a fallback for when email delivery
 * fails.
 */

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { createClient } from '@/lib/supabase/client'
import {
  School,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Mail,
  ShieldAlert,
} from 'lucide-react'

// ── Option lists ──────────────────────────────────────────────────────────
//
// `school_type` values must match the CHECK constraint on public.schools
// (supabase/migrations/003_school_analytics.sql). Sending a friendly label
// instead of the stored value would fail the constraint at insert time, so the
// value and the label are kept separate.
const SCHOOL_TYPES = [
  { value: 'secondary', label: 'Secondary' },
  { value: 'sixth_form', label: 'Sixth form' },
  { value: 'independent', label: 'Independent' },
  { value: 'academy', label: 'Academy' },
  { value: 'mat', label: 'Multi-academy trust' },
  { value: 'other', label: 'Other' },
] as const

// Values mirror the school enquiry form at /for-schools/contact so the same
// board strings flow through enquiry and provisioning.
const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'IGCSE/CAIE'] as const

const CURRICULA = ['KS3', 'GCSE', 'IGCSE', 'A-Level', 'IELTS'] as const

interface RegisterSuccess {
  success: true
  schoolId: string
  adminUserId: string
  accessType: string
  accessUntil: string | null
  slug: string
}

type InviteState = 'idle' | 'sending' | 'sent' | 'failed'

// ── Temporary password ────────────────────────────────────────────────────

/**
 * 64-character alphabet with the ambiguous glyphs removed (0/O, 1/l/I): the
 * operator may have to read this out or retype it during handover. 2^32 is
 * divisible by 64, so the modulo below introduces no bias.
 */
const PASSWORD_ALPHABET =
  'ABCDEFGHJKLMNPQRSTUVWXYZ' + 'abcdefghijkmnpqrstuvwxyz' + '23456789' + '!@#$%^&*'

function generateTemporaryPassword(length = 20): string {
  const values = new Uint32Array(length)
  crypto.getRandomValues(values)
  let out = ''
  for (let i = 0; i < length; i++) {
    out += PASSWORD_ALPHABET[values[i] % PASSWORD_ALPHABET.length]
  }
  return out
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function AdminSchoolProvisioningPage() {
  const router = useRouter()
  const { user } = useAuthStore()

  const [authorized, setAuthorized] = useState(false)
  const [authChecking, setAuthChecking] = useState(true)

  // School
  const [schoolName, setSchoolName] = useState('')
  const [schoolType, setSchoolType] = useState<string>('secondary')
  const [examBoard, setExamBoard] = useState<string>('AQA')
  const [curriculum, setCurriculum] = useState<string[]>(['GCSE'])
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postcode, setPostcode] = useState('')

  // First school admin
  const [adminFirstName, setAdminFirstName] = useState('')
  const [adminLastName, setAdminLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Commercial
  const [promoCode, setPromoCode] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errorDetail, setErrorDetail] = useState<string | null>(null)
  const [missingFields, setMissingFields] = useState<string[]>([])
  const [result, setResult] = useState<RegisterSuccess | null>(null)
  const [tempPassword, setTempPassword] = useState<string | null>(null)
  const [inviteState, setInviteState] = useState<InviteState>('idle')
  const [inviteError, setInviteError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // Reuse the admin gating pattern from /admin/verify-user: ping a known
  // admin-only endpoint on mount; 401 sends to login, 403 sends to dashboard.
  // POST /api/school/register re-checks server side, so this is UX only.
  useEffect(() => {
    if (!user && !useAuthStore.getState().isLoading) {
      router.push('/auth/login?redirect=/admin/school-provisioning')
      return
    }
    if (!user) return

    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/admin/stats')
        if (cancelled) return
        if (res.status === 401) {
          router.push('/auth/login?redirect=/admin/school-provisioning')
          return
        }
        if (res.status === 403) {
          router.push('/dashboard')
          return
        }
        setAuthorized(true)
      } catch {
        // Network error: show the form rather than locking the operator out.
        // The POST is the real gate.
        setAuthorized(true)
      } finally {
        if (!cancelled) setAuthChecking(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [user, router])

  function toggleCurriculum(value: string) {
    setCurriculum((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value],
    )
  }

  async function sendSetPasswordEmail(target: string) {
    setInviteState('sending')
    setInviteError(null)
    const supabase = createClient()
    // Same reset flow as /auth/forgot-password. This is the invitation: the
    // school admin sets their own password and the temporary one below never
    // has to be used.
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(target, {
      redirectTo: `${window.location.origin}/auth/callback?next=/auth/reset-password`,
    })
    if (resetError) {
      setInviteState('failed')
      setInviteError(resetError.message)
      return
    }
    setInviteState('sent')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setErrorDetail(null)
    setMissingFields([])
    setResult(null)
    setTempPassword(null)
    setInviteState('idle')
    setInviteError(null)

    const trimmedEmail = email.trim().toLowerCase()
    if (!trimmedEmail.includes('@')) {
      setError('Enter a valid email address for the school admin.')
      return
    }
    if (curriculum.length === 0) {
      setError('Select at least one curriculum.')
      return
    }

    const password = generateTemporaryPassword()

    setSubmitting(true)
    try {
      const res = await fetch('/api/school/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          schoolName: schoolName.trim(),
          schoolType,
          examBoard,
          curriculum,
          address: address.trim() || undefined,
          city: city.trim() || undefined,
          postcode: postcode.trim() || undefined,
          adminFirstName: adminFirstName.trim(),
          adminLastName: adminLastName.trim(),
          jobTitle: jobTitle.trim() || undefined,
          email: trimmedEmail,
          phone: phone.trim() || undefined,
          password,
          promoCode: promoCode.trim() || undefined,
        }),
      })

      const data = (await res.json().catch(() => ({}))) as Partial<RegisterSuccess> & {
        error?: string
        detail?: string | null
        fields?: string[]
      }

      if (!res.ok || !data.success) {
        // Surface the server's own message verbatim. Nothing is invented here:
        // if provisioning failed, the operator must see why, because the
        // handler has already rolled back whatever it created.
        setError(data.error || `Provisioning failed (HTTP ${res.status}).`)
        setErrorDetail(typeof data.detail === 'string' ? data.detail : null)
        setMissingFields(Array.isArray(data.fields) ? data.fields : [])
        return
      }

      setResult(data as RegisterSuccess)
      setTempPassword(password)
      await sendSetPasswordEmail(trimmedEmail)
    } catch {
      setError(
        'Network error. The school may or may not have been created - check before retrying.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  function resetForm() {
    setSchoolName('')
    setSchoolType('secondary')
    setExamBoard('AQA')
    setCurriculum(['GCSE'])
    setAddress('')
    setCity('')
    setPostcode('')
    setAdminFirstName('')
    setAdminLastName('')
    setJobTitle('')
    setEmail('')
    setPhone('')
    setPromoCode('')
    setResult(null)
    setTempPassword(null)
    setError(null)
    setErrorDetail(null)
    setMissingFields([])
    setInviteState('idle')
    setInviteError(null)
    setCopied(false)
  }

  if (authChecking || !authorized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  const inputClass =
    'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50'

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/admin"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to admin
        </Link>

        <div className="mb-2 flex items-center gap-3">
          <School className="h-7 w-7 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">School provisioning</h1>
        </div>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Create a school and invite its first admin after a deal is signed. Schools cannot register
          themselves; prospective schools come through the enquiry form at{' '}
          <Link href="/school-pilot" className="underline">
            /school-pilot
          </Link>
          . This calls the same server handler the school portal depends on, so the school, its
          admin membership and the admin login are all created together or not at all.
        </p>

        {/* ── Result ─────────────────────────────────────────────────────── */}
        {result && (
          <div
            role="status"
            className="mb-8 space-y-4 rounded-xl border border-primary/30 bg-primary/10 p-6"
          >
            <div className="flex items-center gap-2 font-medium text-primary">
              <CheckCircle2 className="h-5 w-5" />
              School provisioned
            </div>

            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-xs">
              <dt className="font-medium text-muted-foreground">School ID</dt>
              <dd className="break-all font-mono text-foreground">{result.schoolId}</dd>
              <dt className="font-medium text-muted-foreground">Slug</dt>
              <dd className="break-all font-mono text-foreground">{result.slug}</dd>
              <dt className="font-medium text-muted-foreground">Admin user ID</dt>
              <dd className="break-all font-mono text-foreground">{result.adminUserId}</dd>
              <dt className="font-medium text-muted-foreground">Access type</dt>
              <dd className="font-mono text-foreground">{result.accessType}</dd>
              <dt className="font-medium text-muted-foreground">Access until</dt>
              <dd className="font-mono text-foreground">
                {result.accessUntil ?? 'No expiry recorded'}
              </dd>
            </dl>

            {/* Invitation status. Never claim an email was sent unless Supabase
                accepted it - a silent failure here would leave the school admin
                with no way in. */}
            <div className="rounded-lg border border-border bg-background/60 p-4 text-sm">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Mail className="h-4 w-4" />
                Set-password invitation
              </div>
              {inviteState === 'sending' && (
                <p className="mt-1 flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Sending to {email.trim().toLowerCase()}
                </p>
              )}
              {inviteState === 'sent' && (
                <p className="mt-1 text-muted-foreground">
                  Sent. The school admin can set their own password from the link in that email.
                </p>
              )}
              {inviteState === 'failed' && (
                <div className="mt-1 space-y-2">
                  <p className="text-red-400">
                    Not sent{inviteError ? `: ${inviteError}` : '.'} Use the temporary password
                    below or retry.
                  </p>
                  <button
                    type="button"
                    onClick={() => sendSetPasswordEmail(email.trim().toLowerCase())}
                    className="inline-flex h-8 items-center rounded-md border border-border px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Retry invitation email
                  </button>
                </div>
              )}
            </div>

            {tempPassword && (
              <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-clay-600">
                  <ShieldAlert className="h-4 w-4" />
                  Temporary password - shown once
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Only needed if the invitation email does not arrive. Share it over a secure
                  channel and ask the school admin to change it on first sign-in. It is not stored
                  anywhere you can read it back.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <code className="flex-1 break-all rounded bg-background/80 px-2 py-1.5 font-mono text-sm text-foreground">
                    {tempPassword}
                  </code>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(tempPassword).then(
                        () => {
                          setCopied(true)
                          setTimeout(() => setCopied(false), 2000)
                        },
                        () => setCopied(false),
                      )
                    }}
                    className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={resetForm}
              className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Provision another school
            </button>
          </div>
        )}

        {/* ── Form ───────────────────────────────────────────────────────── */}
        {!result && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <fieldset className="space-y-4 rounded-xl border border-border bg-card p-6">
              <legend className="px-1 text-sm font-semibold text-foreground">School</legend>

              <div className="space-y-1.5">
                <label htmlFor="schoolName" className="text-sm font-medium text-foreground">
                  School name <span className="text-red-400">*</span>
                </label>
                <input
                  id="schoolName"
                  value={schoolName}
                  onChange={(ev) => setSchoolName(ev.target.value)}
                  className={inputClass}
                  maxLength={200}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="schoolType" className="text-sm font-medium text-foreground">
                    School type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="schoolType"
                    value={schoolType}
                    onChange={(ev) => setSchoolType(ev.target.value)}
                    className={inputClass}
                  >
                    {SCHOOL_TYPES.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="examBoard" className="text-sm font-medium text-foreground">
                    Primary exam board <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="examBoard"
                    value={examBoard}
                    onChange={(ev) => setExamBoard(ev.target.value)}
                    className={inputClass}
                  >
                    {EXAM_BOARDS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-sm font-medium text-foreground">
                  Curriculum <span className="text-red-400">*</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {CURRICULA.map((c) => {
                    const active = curriculum.includes(c)
                    return (
                      <button
                        key={c}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggleCurriculum(c)}
                        className={`h-9 rounded-md border px-3 text-sm font-medium transition-colors ${
                          active
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        {c}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1.5 sm:col-span-3">
                  <label htmlFor="address" className="text-sm font-medium text-foreground">
                    Address
                  </label>
                  <input
                    id="address"
                    value={address}
                    onChange={(ev) => setAddress(ev.target.value)}
                    className={inputClass}
                    maxLength={200}
                    autoComplete="off"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="city" className="text-sm font-medium text-foreground">
                    City
                  </label>
                  <input
                    id="city"
                    value={city}
                    onChange={(ev) => setCity(ev.target.value)}
                    className={inputClass}
                    maxLength={200}
                    autoComplete="off"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="postcode" className="text-sm font-medium text-foreground">
                    Postcode
                  </label>
                  <input
                    id="postcode"
                    value={postcode}
                    onChange={(ev) => setPostcode(ev.target.value)}
                    className={inputClass}
                    maxLength={20}
                    autoComplete="off"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-4 rounded-xl border border-border bg-card p-6">
              <legend className="px-1 text-sm font-semibold text-foreground">
                First school admin
              </legend>
              <p className="text-xs text-muted-foreground">
                This person gets the admin role for the school. They receive an email to set their
                own password; you never choose it for them.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="adminFirstName" className="text-sm font-medium text-foreground">
                    First name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="adminFirstName"
                    value={adminFirstName}
                    onChange={(ev) => setAdminFirstName(ev.target.value)}
                    className={inputClass}
                    maxLength={50}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="adminLastName" className="text-sm font-medium text-foreground">
                    Last name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="adminLastName"
                    value={adminLastName}
                    onChange={(ev) => setAdminLastName(ev.target.value)}
                    className={inputClass}
                    maxLength={50}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Work email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={inputClass}
                    maxLength={254}
                    required
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="jobTitle" className="text-sm font-medium text-foreground">
                    Job title
                  </label>
                  <input
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(ev) => setJobTitle(ev.target.value)}
                    className={inputClass}
                    maxLength={100}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input
                  id="phone"
                  value={phone}
                  onChange={(ev) => setPhone(ev.target.value)}
                  className={inputClass}
                  maxLength={30}
                  autoComplete="off"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-4 rounded-xl border border-border bg-card p-6">
              <legend className="px-1 text-sm font-semibold text-foreground">Access</legend>
              <div className="space-y-1.5">
                <label htmlFor="promoCode" className="text-sm font-medium text-foreground">
                  Promo code
                </label>
                <input
                  id="promoCode"
                  value={promoCode}
                  onChange={(ev) => setPromoCode(ev.target.value)}
                  className={inputClass}
                  autoComplete="off"
                  spellCheck={false}
                />
                <p className="text-xs text-muted-foreground">
                  Optional. The code is validated server side against the promo_codes table and sets
                  the school&rsquo;s access type and expiry. Leave blank for a standard trial.
                </p>
              </div>
            </fieldset>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <div className="min-w-0">
                  <p>{error}</p>
                  {missingFields.length > 0 && (
                    <p className="mt-1 text-xs">Missing or invalid: {missingFields.join(', ')}</p>
                  )}
                  {errorDetail && (
                    <p className="mt-1 break-words font-mono text-xs opacity-80">{errorDetail}</p>
                  )}
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || !schoolName.trim() || !email.trim()}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Provisioning
                </>
              ) : (
                'Create school and invite admin'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
