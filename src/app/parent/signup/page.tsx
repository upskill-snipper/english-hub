'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  User,
  Mail,
  Lock,
  KeyRound,
  Loader2,
  Eye,
  EyeOff,
  ArrowLeft,
  GraduationCap,
  ShieldCheck,
  BarChart3,
  FileText,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useT } from '@/lib/i18n/use-t'

const PARENT_ACCOUNT_KEY = 'english-hub-parent-account'

export default function ParentSignupPage() {
  const t = useT()
  const router = useRouter()

  const BENEFITS = [
    { icon: BarChart3, text: t('parent.benefit_weekly_reports') },
    { icon: FileText, text: t('parent.benefit_detailed_breakdown') },
    { icon: ShieldCheck, text: t('parent.benefit_read_only') },
  ]

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [linkCode, setLinkCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setFieldErrors({})

    const errors: Record<string, string> = {}
    if (!name.trim()) errors.name = t('parent.full_name_required')
    if (!email.trim()) errors.email = t('parent.email_required')
    if (!password) errors.password = t('parent.password_required')
    else if (password.length < 8) errors.password = t('parent.password_min_length')
    if (!linkCode.trim()) errors.linkCode = t('parent.link_code_required')

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setError(t('parent.fix_errors_below'))
      return
    }

    setLoading(true)

    try {
      // [P2:auth] Supabase — create auth user, insert parent_profile, verify link code server-side
      await new Promise((resolve) => setTimeout(resolve, 500))

      const account = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        linkCode: linkCode.trim().toUpperCase(),
        // Mock until Supabase: pretend we resolved the linked child
        childName: 'Olivia Thompson',
        createdAt: new Date().toISOString(),
      }
      localStorage.setItem(PARENT_ACCOUNT_KEY, JSON.stringify(account))

      router.push('/parent/dashboard')
    } catch {
      setError(t('parent.something_went_wrong'))
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 text-muted-foreground hover:text-foreground"
          render={<Link href="/" />}
        >
          <ArrowLeft className="h-4 w-4" />
          {t('parent.back_home')}
        </Button>

        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">{t('parent.create_account_title')}</h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            {t('parent.create_account_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left — form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t('parent.your_details')}</CardTitle>
                <CardDescription>{t('parent.find_link_code_hint')}</CardDescription>
              </CardHeader>

              <CardContent>
                {error && (
                  <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1.5">
                    <Label htmlFor="name">
                      {t('parent.full_name')} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Thompson"
                        className="pl-10"
                        autoComplete="name"
                        aria-invalid={!!fieldErrors.name}
                      />
                    </div>
                    {fieldErrors.name && (
                      <p className="text-xs text-destructive">{fieldErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">
                      {t('parent.email_address')} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="pl-10"
                        autoComplete="email"
                        aria-invalid={!!fieldErrors.email}
                      />
                    </div>
                    {fieldErrors.email && (
                      <p className="text-xs text-destructive">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="password">
                      {t('parent.password_label')} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={t('parent.password_placeholder')}
                        className="pl-10 pr-10"
                        autoComplete="new-password"
                        aria-invalid={!!fieldErrors.password}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={
                          showPassword ? t('parent.hide_password') : t('parent.show_password')
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {fieldErrors.password && (
                      <p className="text-xs text-destructive">{fieldErrors.password}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="linkCode">
                      {t('parent.child_link_code')} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="linkCode"
                        type="text"
                        value={linkCode}
                        onChange={(e) => setLinkCode(e.target.value.toUpperCase())}
                        placeholder="e.g. EH-7H2K-9XJ4"
                        className="pl-10 uppercase tracking-wider"
                        autoComplete="off"
                        aria-invalid={!!fieldErrors.linkCode}
                      />
                    </div>
                    {fieldErrors.linkCode && (
                      <p className="text-xs text-destructive">{fieldErrors.linkCode}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{t('parent.link_code_help')}</p>
                  </div>

                  <Button type="submit" disabled={loading} className="w-full" size="lg">
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t('parent.creating_account')}
                      </>
                    ) : (
                      t('parent.create_parent_account')
                    )}
                  </Button>
                </form>
              </CardContent>

              <CardFooter className="flex-col gap-2 pt-0">
                <p className="text-center text-sm text-muted-foreground">
                  {t('parent.already_have_account')}{' '}
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 font-medium"
                    render={<Link href="/parent/login" />}
                  >
                    {t('parent.log_in')}
                  </Button>
                </p>
              </CardFooter>
            </Card>
          </div>

          {/* Right — benefits */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{t('parent.what_you_get')}</CardTitle>
                  <CardDescription>{t('parent.included_with_premium')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {BENEFITS.map((benefit) => {
                    const Icon = benefit.icon
                    return (
                      <div key={benefit.text} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{benefit.text}</p>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
                {t('parent.read_only_note')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
