'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Settings,
  Building2,
  CreditCard,
  Shield,
  Trash2,
  Copy,
  AlertTriangle,
  KeyRound,
} from 'lucide-react'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { useT } from '@/lib/i18n/use-t'
import { SCHOOLS_CONTACT_EMAIL } from '@/config/company'

// ---------------------------------------------------------------------------
// API shapes
//
// GET /api/school/settings returns { settings, subscription? } where settings
// carries the schools row fields and subscription is admin-only.
// PUT /api/school/settings validates a FLAT object with a strict zod schema:
//   { name?, address?, contact_email?, contact_phone?, website?, timezone? }
// Only fields the API supports are rendered and saved here.
// ---------------------------------------------------------------------------

interface ApiSchoolSettings {
  id: string
  name: string | null
  address: string | null
  contact_email: string | null
  contact_phone: string | null
  website: string | null
  timezone: string | null
}

interface ApiSubscription {
  plan: string | null
  status: string | null
  expires_at: string | null
  seats_used: number
  seats_max: number | null
}

interface SettingsResponse {
  settings: ApiSchoolSettings
  subscription?: ApiSubscription
}

interface ApiMemberRow {
  id: string
  role: string
  full_name: string | null
  email: string
  invite_status: string | null
}

interface ApiJoinCode {
  code: string
  type?: string
  is_active: boolean
  is_usable: boolean
  expires_at: string | null
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

// ---------------------------------------------------------------------------
// Shared error panel
// ---------------------------------------------------------------------------

function SectionError({ message, onRetry }: { message: string; onRetry: () => void }) {
  const t = useT()
  return (
    <div className="flex flex-col items-center gap-3 py-8 text-center">
      <AlertTriangle className="h-6 w-6 text-red-400" aria-hidden />
      <p className="text-sm text-muted-foreground">{message}</p>
      <Button variant="outline" size="sm" onClick={onRetry}>
        {t('school.classes.error.retry')}
      </Button>
    </div>
  )
}

function SectionSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-9 w-full rounded-lg" />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: School Profile (hydrated from the API, saves the flat payload)
// ---------------------------------------------------------------------------

function SchoolProfileSection({
  settings,
  onSaved,
}: {
  settings: ApiSchoolSettings
  onSaved: (next: ApiSchoolSettings) => void
}) {
  const t = useT()
  const [saving, setSaving] = useState(false)
  const [name, setName] = useState(settings.name ?? '')
  const [address, setAddress] = useState(settings.address ?? '')
  const [contactEmail, setContactEmail] = useState(settings.contact_email ?? '')
  const [contactPhone, setContactPhone] = useState(settings.contact_phone ?? '')

  async function handleSave() {
    setSaving(true)
    try {
      // Flat payload matching the API's strict zod schema.
      const res = await fetch('/api/school/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          address: address.trim(),
          contact_email: contactEmail.trim(),
          contact_phone: contactPhone.trim(),
        }),
      })
      if (!res.ok) throw new Error('save failed')
      const json = (await res.json()) as { settings: ApiSchoolSettings }
      onSaved(json.settings)
      toast.success(t('school.settings.profile.save_success'))
    } catch {
      toast.error(t('school.settings.profile.save_fail'))
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-muted-foreground" />
          <CardTitle>{t('school.settings.profile.title')}</CardTitle>
        </div>
        <CardDescription>{t('school.settings.profile.desc')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="school-name">{t('school.settings.profile.school_name')}</Label>
          <Input
            id="school-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('school.settings.profile.school_name_placeholder')}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="address">{t('school.settings.profile.address')}</Label>
          <Input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={t('school.settings.profile.address_placeholder')}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="contact-email">{t('school.settings.profile.contact_email')}</Label>
            <Input
              id="contact-email"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder={t('school.settings.profile.contact_email_placeholder')}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">{t('school.settings.profile.phone')}</Label>
            <Input
              id="phone"
              type="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder={t('school.settings.profile.phone_placeholder')}
            />
          </div>
        </div>

        <div className="flex justify-end pt-1">
          <Button onClick={handleSave} disabled={saving || !name.trim()}>
            {saving ? t('school.settings.profile.saving') : t('school.settings.profile.save_btn')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: Subscription & Access (admin only - hidden when API omits it)
// ---------------------------------------------------------------------------

function SubscriptionSection({ subscription }: { subscription: ApiSubscription }) {
  const t = useT()

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <CardTitle>{t('school.settings.subscription.title')}</CardTitle>
        </div>
        <CardDescription>{t('school.settings.subscription.desc')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('school.settings.subscription.current_plan')}
              </p>
              <p className="text-base font-semibold text-foreground mt-0.5 capitalize">
                {subscription.plan ?? '—'}
              </p>
            </div>
            {subscription.status && (
              <Badge className="bg-primary/15 text-primary border border-primary/30 text-xs font-semibold capitalize">
                {subscription.status}
              </Badge>
            )}
          </div>

          {subscription.expires_at && (
            <p className="text-sm text-muted-foreground">
              Access until{' '}
              <span className="font-medium text-foreground">
                {formatDate(subscription.expires_at)}
              </span>
            </p>
          )}

          <p className="text-xs text-muted-foreground">
            {subscription.seats_used}
            {subscription.seats_max !== null ? ` / ${subscription.seats_max}` : ''} seats in use
          </p>

          <p className="text-xs text-muted-foreground">
            {t('school.settings.subscription.contact_note')}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {t('school.settings.subscription.billing_pre')}{' '}
            <a
              href={`mailto:${SCHOOLS_CONTACT_EMAIL}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {SCHOOLS_CONTACT_EMAIL}
            </a>
          </p>
          <Button
            variant="outline"
            size="sm"
            render={<a href={`mailto:${SCHOOLS_CONTACT_EMAIL}?subject=Subscription%20Enquiry`} />}
          >
            {t('school.settings.subscription.renew_btn')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: Staff Accounts (read-only list from GET /api/school/members;
// role management lives on the Users page)
// ---------------------------------------------------------------------------

function AdminAccountsSection() {
  const t = useT()
  const [members, setMembers] = useState<ApiMemberRow[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setLoadError(false)
    fetch('/api/school/members')
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then((json: { members?: ApiMemberRow[] }) => {
        if (!cancelled) setMembers(json.members ?? [])
      })
      .catch(() => {
        if (!cancelled) setLoadError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  function roleLabel(role: string): string {
    if (role === 'admin') return t('school.settings.admins.role.admin')
    if (role === 'head_of_department') return t('school.teachers.role.head_of_dept')
    return t('school.settings.admins.role.teacher')
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-muted-foreground" />
            <CardTitle>{t('school.settings.admins.title')}</CardTitle>
          </div>
          <Button variant="outline" size="sm" render={<Link href="/school/users" />}>
            {t('school.b15.users.title')}
          </Button>
        </div>
        <CardDescription>{t('school.settings.admins.desc')}</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <SectionSkeleton rows={3} />
        ) : loadError ? (
          <SectionError
            message="We could not load your school's staff."
            onRetry={() => setReloadKey((k) => k + 1)}
          />
        ) : members.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">
            {t('school.teachers.empty.title')}
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {members.map((member) => (
              <li key={member.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {member.full_name ?? member.email}
                  </p>
                  <p className="text-xs text-muted-foreground">{member.email}</p>
                </div>
                <Badge
                  variant={member.role === 'admin' ? 'default' : 'outline'}
                  className="text-xs"
                >
                  {roleLabel(member.role)}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: GDPR & Data
// Export and deletion have no self-serve endpoint yet, so both actions open a
// pre-addressed email rather than pretending to run.
// ---------------------------------------------------------------------------

function GdprSection() {
  const t = useT()
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-muted-foreground" />
          <CardTitle>{t('school.settings.gdpr.title')}</CardTitle>
        </div>
        <CardDescription>{t('school.settings.gdpr.desc')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 space-y-1">
          <p className="text-sm font-medium text-foreground">
            {t('school.settings.gdpr.retention_label')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('school.settings.gdpr.retention_body')}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            variant="outline"
            render={
              <a
                href={`mailto:${SCHOOLS_CONTACT_EMAIL}?subject=${encodeURIComponent('School data export request')}`}
              />
            }
          >
            {t('school.settings.gdpr.export_btn')}
          </Button>
        </div>

        <div className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-4 space-y-3">
          <div className="flex items-center gap-2">
            <Trash2 className="h-4 w-4 text-destructive" />
            <p className="text-sm font-semibold text-destructive">
              {t('school.settings.gdpr.danger_zone')}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{t('school.settings.gdpr.danger_body')}</p>
          <Button
            variant="outline"
            size="sm"
            className="border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
            render={
              <a
                href={`mailto:${SCHOOLS_CONTACT_EMAIL}?subject=${encodeURIComponent('School data deletion request')}`}
              />
            }
          >
            {t('school.settings.gdpr.delete_btn')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: Join Code (real codes from GET /api/school/join-codes; managed on
// the Join Codes page)
// ---------------------------------------------------------------------------

function JoinCodeSection() {
  const t = useT()
  const [codes, setCodes] = useState<ApiJoinCode[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setLoadError(false)
    fetch('/api/school/join-codes')
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then((json: { join_codes?: ApiJoinCode[] }) => {
        if (!cancelled) setCodes(json.join_codes ?? [])
      })
      .catch(() => {
        if (!cancelled) setLoadError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  const activeCode = codes.find((c) => c.is_usable) ?? null

  async function handleCopy() {
    if (!activeCode) return
    try {
      await navigator.clipboard.writeText(activeCode.code)
      setCopied(true)
      toast.success(t('school.settings.joincode.copy_success'))
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error(t('school.settings.joincode.copy_fail'))
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <KeyRound className="h-5 w-5 text-muted-foreground" />
            <CardTitle>{t('school.settings.joincode.title')}</CardTitle>
          </div>
          <Button variant="outline" size="sm" render={<Link href="/school/join-codes" />}>
            {t('school.b15.join_codes.title')}
          </Button>
        </div>
        <CardDescription>{t('school.settings.joincode.desc')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {loading ? (
          <SectionSkeleton rows={2} />
        ) : loadError ? (
          <SectionError
            message="We could not load your school's join codes."
            onRetry={() => setReloadKey((k) => k + 1)}
          />
        ) : activeCode ? (
          <>
            <div className="flex items-center gap-3">
              <div className="flex-1 max-w-xs rounded-lg border border-border bg-muted/30 px-4 py-3">
                <p className="font-mono text-lg font-semibold tracking-widest text-foreground">
                  {activeCode.code}
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={handleCopy} className="shrink-0">
                <Copy className="mr-1.5 h-3.5 w-3.5" />
                {copied ? t('school.settings.joincode.copied') : t('school.settings.joincode.copy')}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{t('school.settings.joincode.body')}</p>
          </>
        ) : (
          <p className="py-4 text-sm text-muted-foreground">
            {t('school.b15.join_codes.no_codes')}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SchoolSettingsPage() {
  const t = useT()
  const [data, setData] = useState<SettingsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setLoadError(false)
    fetch('/api/school/settings')
      .then((res) => {
        if (!res.ok) throw new Error('fetch failed')
        return res.json()
      })
      .then((json: SettingsResponse) => {
        if (!cancelled) setData(json)
      })
      .catch(() => {
        if (!cancelled) setLoadError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  const handleSaved = useCallback((next: ApiSchoolSettings) => {
    setData((prev) => (prev ? { ...prev, settings: next } : prev))
  }, [])

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <Settings className="h-6 w-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {t('school.settings.title')}
          </h1>
          <p className="mt-0.5 text-sm text-muted-foreground">{t('school.settings.subtitle')}</p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {loading ? (
          <Card>
            <CardContent className="py-6">
              <SectionSkeleton rows={6} />
            </CardContent>
          </Card>
        ) : loadError || !data ? (
          <Card>
            <CardContent>
              <SectionError
                message="We could not load your school's settings."
                onRetry={() => setReloadKey((k) => k + 1)}
              />
            </CardContent>
          </Card>
        ) : (
          <>
            <SchoolProfileSection settings={data.settings} onSaved={handleSaved} />
            {data.subscription && <SubscriptionSection subscription={data.subscription} />}
          </>
        )}
        <AdminAccountsSection />
        <GdprSection />
        <JoinCodeSection />
      </div>
    </div>
  )
}
