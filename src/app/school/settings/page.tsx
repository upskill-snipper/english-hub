'use client'

import { useState } from 'react'
import {
  Settings,
  Building2,
  CreditCard,
  Bell,
  Shield,
  Trash2,
  Copy,
  RefreshCw,
} from 'lucide-react'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useT } from '@/lib/i18n/use-t'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SchoolProfile {
  name: string
  type: string
  examBoard: string
  curriculum: string[]
  address: string
  city: string
  postcode: string
  contactEmail: string
  phone: string
}

interface NotificationSettings {
  newStudentJoin: boolean
  weeklyDigest: boolean
  atRiskAlerts: boolean
}

interface SecuritySettings {
  passwordPolicy: string
  sessionTimeout: string
}

interface AdminUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'teacher'
}

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const EXAM_BOARDS = ['AQA', 'Edexcel (Pearson)', 'OCR', 'WJEC/Eduqas', 'IGCSE (Cambridge/CAIE)']

const CURRICULUM_OPTIONS = [
  'GCSE English Language',
  'GCSE English Literature',
  'A-Level English Language',
  'A-Level English Literature',
  'KS3 English (Years 7-9)',
]

const MOCK_JOIN_CODE = 'EH-XK92-DELTA'

const MOCK_ADMINS: AdminUser[] = [
  { id: '1', name: 'Sarah Johnson', email: 's.johnson@school.ac.uk', role: 'admin' },
  { id: '2', name: 'David Clarke', email: 'd.clarke@school.ac.uk', role: 'admin' },
  { id: '3', name: 'Emma Wilson', email: 'e.wilson@school.ac.uk', role: 'teacher' },
]

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

async function putSettings(section: string, data: unknown): Promise<void> {
  const res = await fetch('/api/school/settings', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ section, data }),
  })
  if (!res.ok) {
    throw new Error('Failed to save settings')
  }
}

// ---------------------------------------------------------------------------
// Section: School Profile
// ---------------------------------------------------------------------------

function SchoolProfileSection() {
  const t = useT()
  const [saving, setSaving] = useState(false)
  const [profile, setProfile] = useState<SchoolProfile>({
    name: 'Westfield Academy',
    type: 'Secondary',
    examBoard: 'AQA',
    curriculum: ['GCSE English Language', 'GCSE English Literature'],
    address: '12 School Lane',
    city: 'Manchester',
    postcode: 'M14 5TP',
    contactEmail: 'admin@westfieldacademy.ac.uk',
    phone: '0161 555 0192',
  })

  function handleChange(field: keyof SchoolProfile, value: string | string[]) {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSave() {
    setSaving(true)
    try {
      await putSettings('profile', profile)
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="school-name">{t('school.settings.profile.school_name')}</Label>
            <Input
              id="school-name"
              value={profile.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder={t('school.settings.profile.school_name_placeholder')}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="school-type">{t('school.settings.profile.school_type')}</Label>
            <Input
              id="school-type"
              value={profile.type}
              onChange={(e) => handleChange('type', e.target.value)}
              placeholder={t('school.settings.profile.school_type_placeholder')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="exam-board">{t('school.settings.profile.exam_board')}</Label>
            <select
              id="exam-board"
              value={profile.examBoard}
              onChange={(e) => handleChange('examBoard', e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
            >
              <option value="" disabled>
                {t('school.settings.profile.exam_board_placeholder')}
              </option>
              {EXAM_BOARDS.map((board) => (
                <option key={board} value={board}>
                  {board}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground">
              {t('school.settings.profile.exam_board_help')}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t('school.settings.profile.curriculum_label')}</Label>
          <p className="text-xs text-muted-foreground">
            {t('school.settings.profile.curriculum_help')}
          </p>
          <div className="space-y-2">
            {CURRICULUM_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={profile.curriculum.includes(option)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...profile.curriculum, option]
                      : profile.curriculum.filter((c) => c !== option)
                    handleChange('curriculum', next)
                  }}
                  className="h-4 w-4 accent-primary rounded"
                />
                <span className="text-sm text-foreground">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="address">{t('school.settings.profile.address')}</Label>
          <Input
            id="address"
            value={profile.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder={t('school.settings.profile.address_placeholder')}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="city">{t('school.settings.profile.city')}</Label>
            <Input
              id="city"
              value={profile.city}
              onChange={(e) => handleChange('city', e.target.value)}
              placeholder={t('school.settings.profile.city_placeholder')}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="postcode">{t('school.settings.profile.postcode')}</Label>
            <Input
              id="postcode"
              value={profile.postcode}
              onChange={(e) => handleChange('postcode', e.target.value)}
              placeholder={t('school.settings.profile.postcode_placeholder')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="contact-email">{t('school.settings.profile.contact_email')}</Label>
            <Input
              id="contact-email"
              type="email"
              value={profile.contactEmail}
              onChange={(e) => handleChange('contactEmail', e.target.value)}
              placeholder={t('school.settings.profile.contact_email_placeholder')}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">{t('school.settings.profile.phone')}</Label>
            <Input
              id="phone"
              type="tel"
              value={profile.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder={t('school.settings.profile.phone_placeholder')}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>{t('school.settings.profile.logo_label')}</Label>
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 text-xs text-muted-foreground">
              {t('school.settings.profile.logo_text')}
            </div>
            <div>
              <Button variant="outline" size="sm" disabled className="mb-1 block">
                {t('school.settings.profile.upload_logo')}
              </Button>
              <p className="text-xs text-muted-foreground">
                {t('school.settings.profile.logo_help')}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-1">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? t('school.settings.profile.saving') : t('school.settings.profile.save_btn')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: Subscription & Access
// ---------------------------------------------------------------------------

function SubscriptionSection() {
  const t = useT()
  const isFounder = true // Replace with actual plan check

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
              <p className="text-base font-semibold text-foreground mt-0.5">
                {isFounder
                  ? t('school.settings.subscription.founder_plan')
                  : t('school.settings.subscription.standard_plan')}
              </p>
            </div>
            {isFounder && (
              <Badge className="bg-primary/15 text-primary border border-primary/30 text-xs font-semibold">
                {t('school.settings.subscription.founding_badge')}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Badge className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs">
              {t('school.settings.subscription.active')}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {isFounder
                ? t('school.settings.subscription.founder_note')
                : t('school.settings.subscription.standard_note')}
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            {t('school.settings.subscription.contact_note')}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {t('school.settings.subscription.billing_pre')}{' '}
            <a
              href="mailto:info@Upskillenergy.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              info@Upskillenergy.com
            </a>
          </p>
          <Button variant="outline" size="sm">
            {isFounder
              ? t('school.settings.subscription.upgrade_btn')
              : t('school.settings.subscription.renew_btn')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: Admin Accounts
// ---------------------------------------------------------------------------

function AdminAccountsSection() {
  const t = useT()
  const [admins, setAdmins] = useState<AdminUser[]>(MOCK_ADMINS)
  const [saving, setSaving] = useState<string | null>(null)

  async function toggleRole(id: string) {
    const target = admins.find((a) => a.id === id)
    if (!target) return

    const newRole = target.role === 'admin' ? 'teacher' : 'admin'
    setSaving(id)
    try {
      await putSettings('admins', { userId: id, role: newRole })
      setAdmins((prev) => prev.map((a) => (a.id === id ? { ...a, role: newRole } : a)))
      toast.success(
        newRole === 'admin'
          ? `${target.name} ${t('school.settings.admins.promoted_suffix')}`
          : `${target.name} ${t('school.settings.admins.demoted_suffix')}`,
      )
    } catch {
      toast.error(t('school.settings.admins.update_fail'))
    } finally {
      setSaving(null)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-muted-foreground" />
            <CardTitle>{t('school.settings.admins.title')}</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            {t('school.settings.admins.add')}
          </Button>
        </div>
        <CardDescription>{t('school.settings.admins.desc')}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-border">
          {admins.map((admin) => (
            <li key={admin.id} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-foreground">{admin.name}</p>
                <p className="text-xs text-muted-foreground">{admin.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant={admin.role === 'admin' ? 'default' : 'outline'}
                  className="capitalize text-xs"
                >
                  {admin.role === 'admin'
                    ? t('school.settings.admins.role.admin')
                    : t('school.settings.admins.role.teacher')}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                  disabled={saving === admin.id}
                  onClick={() => toggleRole(admin.id)}
                >
                  {saving === admin.id
                    ? t('school.settings.admins.saving')
                    : admin.role === 'admin'
                      ? t('school.settings.admins.demote')
                      : t('school.settings.admins.promote')}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: Notifications
// ---------------------------------------------------------------------------

function NotificationsSection() {
  const t = useT()
  const [saving, setSaving] = useState(false)
  const [settings, setSettings] = useState<NotificationSettings>({
    newStudentJoin: true,
    weeklyDigest: true,
    atRiskAlerts: false,
  })

  function handleToggle(field: keyof NotificationSettings) {
    setSettings((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  async function handleSave() {
    setSaving(true)
    try {
      await putSettings('notifications', settings)
      toast.success(t('school.settings.notif.save_success'))
    } catch {
      toast.error(t('school.settings.notif.save_fail'))
    } finally {
      setSaving(false)
    }
  }

  const rows: { key: keyof NotificationSettings; label: string; description: string }[] = [
    {
      key: 'newStudentJoin',
      label: t('school.settings.notif.new_student_label'),
      description: t('school.settings.notif.new_student_desc'),
    },
    {
      key: 'weeklyDigest',
      label: t('school.settings.notif.weekly_label'),
      description: t('school.settings.notif.weekly_desc'),
    },
    {
      key: 'atRiskAlerts',
      label: t('school.settings.notif.at_risk_label'),
      description: t('school.settings.notif.at_risk_desc'),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <CardTitle>{t('school.settings.notif.title')}</CardTitle>
        </div>
        <CardDescription>{t('school.settings.notif.desc')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <ul className="divide-y divide-border">
          {rows.map(({ key, label, description }) => (
            <li key={key} className="flex items-start justify-between gap-4 py-3">
              <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
              </div>
              <Switch checked={settings[key]} onCheckedChange={() => handleToggle(key)} />
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? t('school.settings.notif.saving') : t('school.settings.notif.save_btn')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: Security
// ---------------------------------------------------------------------------

function SecuritySection() {
  const t = useT()
  const [saving, setSaving] = useState(false)
  const [settings, setSettings] = useState<SecuritySettings>({
    passwordPolicy: 'strong',
    sessionTimeout: '60',
  })

  function handleChange(field: keyof SecuritySettings, value: string) {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSave() {
    setSaving(true)
    try {
      await putSettings('security', settings)
      toast.success(t('school.settings.security.save_success'))
    } catch {
      toast.error(t('school.settings.security.save_fail'))
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-muted-foreground" />
          <CardTitle>{t('school.settings.security.title')}</CardTitle>
        </div>
        <CardDescription>{t('school.settings.security.desc')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="password-policy">{t('school.settings.security.password_policy')}</Label>
          <select
            id="password-policy"
            value={settings.passwordPolicy}
            onChange={(e) => handleChange('passwordPolicy', e.target.value)}
            className="flex h-9 w-full max-w-xs rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
          >
            <option value="basic">{t('school.settings.security.policy.basic')}</option>
            <option value="strong">{t('school.settings.security.policy.strong')}</option>
            <option value="very-strong">{t('school.settings.security.policy.very_strong')}</option>
          </select>
          <p className="text-xs text-muted-foreground">
            {t('school.settings.security.policy_help')}
          </p>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="session-timeout">{t('school.settings.security.session_timeout')}</Label>
          <Input
            id="session-timeout"
            type="number"
            min="15"
            max="480"
            value={settings.sessionTimeout}
            onChange={(e) => handleChange('sessionTimeout', e.target.value)}
            className="max-w-xs"
          />
          <p className="text-xs text-muted-foreground">
            {t('school.settings.security.session_help')}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">
                {t('school.settings.security.tfa_label')}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('school.settings.security.tfa_desc')}
              </p>
            </div>
            <Badge variant="outline" className="text-xs text-muted-foreground border-border">
              {t('school.settings.security.coming_soon')}
            </Badge>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? t('school.settings.security.saving') : t('school.settings.security.save_btn')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: GDPR & Data
// ---------------------------------------------------------------------------

function GdprSection() {
  const t = useT()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [confirmText, setConfirmText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [exporting, setExporting] = useState(false)

  async function handleExport() {
    setExporting(true)
    try {
      await putSettings('gdpr', { action: 'export' })
      toast.success(t('school.settings.gdpr.export_success'))
    } catch {
      toast.error(t('school.settings.gdpr.export_fail'))
    } finally {
      setExporting(false)
    }
  }

  async function handleDelete() {
    if (confirmText !== 'DELETE') return
    setDeleting(true)
    try {
      await putSettings('gdpr', { action: 'delete' })
      toast.success(t('school.settings.gdpr.delete_success'))
      setShowDeleteConfirm(false)
    } catch {
      toast.error(t('school.settings.gdpr.delete_fail'))
    } finally {
      setDeleting(false)
    }
  }

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
          <Button variant="outline" onClick={handleExport} disabled={exporting}>
            {exporting
              ? t('school.settings.gdpr.requesting')
              : t('school.settings.gdpr.export_btn')}
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
          {!showDeleteConfirm ? (
            <Button
              variant="outline"
              size="sm"
              className="border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setShowDeleteConfirm(true)}
            >
              {t('school.settings.gdpr.delete_btn')}
            </Button>
          ) : (
            <div className="space-y-3 pt-1">
              <p className="text-sm text-muted-foreground">
                {t('school.settings.gdpr.type_delete_pre')}{' '}
                <span className="font-mono font-semibold text-destructive">DELETE</span>{' '}
                {t('school.settings.gdpr.type_delete_post')}
              </p>
              <Input
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="DELETE"
                className="max-w-xs border-destructive/40 focus-visible:ring-destructive/40"
              />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={handleDelete}
                  disabled={confirmText !== 'DELETE' || deleting}
                >
                  {deleting
                    ? t('school.settings.gdpr.deleting')
                    : t('school.settings.gdpr.confirm_delete')}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowDeleteConfirm(false)
                    setConfirmText('')
                  }}
                >
                  {t('school.settings.gdpr.cancel')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Section: Join Code
// ---------------------------------------------------------------------------

function JoinCodeSection() {
  const t = useT()
  const [joinCode, setJoinCode] = useState(MOCK_JOIN_CODE)
  const [regenerating, setRegenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  async function handleRegenerate() {
    setRegenerating(true)
    try {
      const res = await fetch('/api/school/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section: 'join-code', data: { action: 'regenerate' } }),
      })
      if (!res.ok) throw new Error('Failed')
      const json = await res.json().catch(() => ({}))
      setJoinCode(
        json.joinCode ??
          `EH-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      )
      toast.success(t('school.settings.joincode.regen_success'))
    } catch {
      toast.error(t('school.settings.joincode.regen_fail'))
    } finally {
      setRegenerating(false)
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(joinCode)
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
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-muted-foreground" />
          <CardTitle>{t('school.settings.joincode.title')}</CardTitle>
        </div>
        <CardDescription>{t('school.settings.joincode.desc')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex-1 max-w-xs rounded-lg border border-border bg-muted/30 px-4 py-3">
            <p className="font-mono text-lg font-semibold tracking-widest text-foreground">
              {joinCode}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={handleCopy} className="shrink-0">
            <Copy className="mr-1.5 h-3.5 w-3.5" />
            {copied ? t('school.settings.joincode.copied') : t('school.settings.joincode.copy')}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">{t('school.settings.joincode.body')}</p>

        <div>
          <Button variant="outline" size="sm" onClick={handleRegenerate} disabled={regenerating}>
            <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${regenerating ? 'animate-spin' : ''}`} />
            {regenerating
              ? t('school.settings.joincode.regenerating')
              : t('school.settings.joincode.regenerate')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SchoolSettingsPage() {
  const t = useT()
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
        <SchoolProfileSection />
        <SubscriptionSection />
        <AdminAccountsSection />
        <NotificationsSection />
        <SecuritySection />
        <GdprSection />
        <JoinCodeSection />
      </div>
    </div>
  )
}
