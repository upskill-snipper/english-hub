'use client'

import { useEffect, useState, useCallback } from 'react'
import {
  School,
  UserPlus,
  KeyRound,
  CreditCard,
  Save,
  Loader2,
  Trash2,
  Copy,
  CheckCircle,
  AlertCircle,
  Crown,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { cn, formatDate } from '@/lib/utils'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import type {
  School as SchoolType,
  SchoolMember,
  SchoolJoinCode,
  Class,
} from '@/lib/types'

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------

export default function SchoolSettingsPage() {
  const { user } = useAuthStore()
  const [school, setSchool] = useState<SchoolType | null>(null)
  const [members, setMembers] = useState<SchoolMember[]>([])
  const [joinCodes, setJoinCodes] = useState<SchoolJoinCode[]>([])
  const [classes, setClasses] = useState<Class[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (!user) return
    const supabase = createClient()

    // Get membership
    const { data: membership } = await supabase
      .from('school_members')
      .select('school_id')
      .eq('user_id', user.id)
      .limit(1)
      .single()

    if (!membership?.school_id) {
      setLoading(false)
      return
    }

    const schoolId = membership.school_id

    const [schoolRes, membersRes, codesRes, classesRes] = await Promise.all([
      supabase.from('schools').select('*').eq('id', schoolId).single(),
      supabase
        .from('school_members')
        .select('*')
        .eq('school_id', schoolId)
        .order('created_at', { ascending: true }),
      supabase
        .from('school_join_codes')
        .select('*')
        .eq('school_id', schoolId)
        .eq('is_active', true)
        .order('created_at', { ascending: false }),
      supabase
        .from('classes')
        .select('*')
        .eq('school_id', schoolId)
        .eq('is_active', true)
        .order('name', { ascending: true }),
    ])

    if (schoolRes.data) setSchool(schoolRes.data)
    if (membersRes.data) setMembers(membersRes.data)
    if (codesRes.data) setJoinCodes(codesRes.data)
    if (classesRes.data) setClasses(classesRes.data)

    setLoading(false)
  }, [user])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72" />
        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-48 w-full rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          School Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your school details, teachers, join codes, and subscription.
        </p>
      </div>

      <div className="space-y-6">
        <SchoolDetailsForm school={school} onUpdate={fetchData} />
        <Separator />
        <TeacherManagement members={members} onUpdate={fetchData} schoolId={school?.id} />
        <Separator />
        <JoinCodesSection
          joinCodes={joinCodes}
          classes={classes}
          onUpdate={fetchData}
          schoolId={school?.id}
        />
        <Separator />
        <SubscriptionCard school={school} />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// School Details Form
// ---------------------------------------------------------------------------

function SchoolDetailsForm({
  school,
  onUpdate,
}: {
  school: SchoolType | null
  onUpdate: () => void
}) {
  const [name, setName] = useState(school?.name ?? '')
  const [address, setAddress] = useState(school?.address ?? '')
  const [contactEmail, setContactEmail] = useState(school?.contact_email ?? '')
  const [contactPhone, setContactPhone] = useState(school?.contact_phone ?? '')
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (school) {
      setName(school.name)
      setAddress(school.address ?? '')
      setContactEmail(school.contact_email)
      setContactPhone(school.contact_phone ?? '')
    }
  }, [school])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!school) return

    setSaving(true)
    setError(null)
    setSuccess(false)

    const supabase = createClient()
    const { error: updateError } = await supabase
      .from('schools')
      .update({
        name,
        address: address || null,
        contact_email: contactEmail,
        contact_phone: contactPhone || null,
      })
      .eq('id', school.id)

    setSaving(false)

    if (updateError) {
      setError('Failed to update school details. Please try again.')
    } else {
      setSuccess(true)
      onUpdate()
      setTimeout(() => setSuccess(false), 3000)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <School className="h-4.5 w-4.5 text-primary" />
          </div>
          <div>
            <CardTitle>School Details</CardTitle>
            <CardDescription>Update your school information</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="school-name">School Name</Label>
              <Input
                id="school-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Oakwood Academy"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="school-address">Address</Label>
              <Input
                id="school-address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. 123 School Lane, London"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Contact Email</Label>
              <Input
                id="contact-email"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="admin@school.ac.uk"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone Number</Label>
              <Input
                id="contact-phone"
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="020 1234 5678"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={saving}>
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
            {success && (
              <span className="flex items-center gap-1.5 text-sm text-green-500">
                <CheckCircle className="h-4 w-4" />
                Saved
              </span>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Teacher Management
// ---------------------------------------------------------------------------

function TeacherManagement({
  members,
  onUpdate,
  schoolId,
}: {
  members: SchoolMember[]
  onUpdate: () => void
  schoolId: string | undefined
}) {
  const [inviteName, setInviteName] = useState('')
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState<string>('teacher')
  const [inviting, setInviting] = useState(false)
  const [inviteError, setInviteError] = useState<string | null>(null)
  const [inviteSuccess, setInviteSuccess] = useState(false)

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault()
    if (!schoolId) return

    setInviting(true)
    setInviteError(null)
    setInviteSuccess(false)

    try {
      const res = await fetch('/api/school/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          school_id: schoolId,
          full_name: inviteName,
          email: inviteEmail,
          role: inviteRole,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Failed to send invite')
      }

      setInviteSuccess(true)
      setInviteName('')
      setInviteEmail('')
      setInviteRole('teacher')
      onUpdate()
      setTimeout(() => setInviteSuccess(false), 3000)
    } catch (err) {
      setInviteError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setInviting(false)
    }
  }

  const roleBadgeVariant: Record<string, 'default' | 'secondary' | 'outline'> = {
    admin: 'default',
    head_of_department: 'secondary',
    teacher: 'outline',
  }

  const roleLabel: Record<string, string> = {
    admin: 'Admin',
    head_of_department: 'HoD',
    teacher: 'Teacher',
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
            <UserPlus className="h-4.5 w-4.5 text-blue-400" />
          </div>
          <div>
            <CardTitle>Teacher Management</CardTitle>
            <CardDescription>
              {members.length} member{members.length !== 1 ? 's' : ''} in your school
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current teachers list */}
        {members.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Current Members</h4>
            <div className="divide-y divide-border rounded-lg border border-border">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      {member.full_name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {member.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <Badge variant={roleBadgeVariant[member.role] ?? 'outline'}>
                      {roleLabel[member.role] ?? member.role}
                    </Badge>
                    {member.invite_status === 'pending' && (
                      <Badge
                        variant="outline"
                        className="border-amber-500/30 bg-amber-500/10 text-amber-400"
                      >
                        Pending
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Separator />

        {/* Invite teacher form */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Invite Teacher</h4>
          <form onSubmit={handleInvite} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="invite-name">Full Name</Label>
                <Input
                  id="invite-name"
                  value={inviteName}
                  onChange={(e) => setInviteName(e.target.value)}
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invite-email">Email</Label>
                <Input
                  id="invite-email"
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="jane@school.ac.uk"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select value={inviteRole} onValueChange={(v) => setInviteRole(v ?? '')}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="head_of_department">Head of Department</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {inviteError && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {inviteError}
              </div>
            )}

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={inviting}>
                {inviting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <UserPlus className="h-4 w-4" />
                )}
                {inviting ? 'Sending...' : 'Send Invite'}
              </Button>
              {inviteSuccess && (
                <span className="flex items-center gap-1.5 text-sm text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  Invite sent
                </span>
              )}
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Join Codes Section
// ---------------------------------------------------------------------------

function JoinCodesSection({
  joinCodes,
  classes,
  onUpdate,
  schoolId,
}: {
  joinCodes: SchoolJoinCode[]
  classes: Class[]
  onUpdate: () => void
  schoolId: string | undefined
}) {
  const [selectedClassId, setSelectedClassId] = useState<string>('')
  const [maxUses, setMaxUses] = useState('30')
  const [generating, setGenerating] = useState(false)
  const [genError, setGenError] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    if (!schoolId) return

    setGenerating(true)
    setGenError(null)

    try {
      const res = await fetch('/api/school/join-codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          school_id: schoolId,
          class_id: selectedClassId || null,
          max_uses: parseInt(maxUses, 10) || 30,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Failed to generate code')
      }

      setSelectedClassId('')
      setMaxUses('30')
      onUpdate()
    } catch (err) {
      setGenError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setGenerating(false)
    }
  }

  async function handleDeactivate(codeId: string) {
    const supabase = createClient()
    await supabase
      .from('school_join_codes')
      .update({ is_active: false })
      .eq('id', codeId)
    onUpdate()
  }

  function copyCode(code: string, id: string) {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10">
            <KeyRound className="h-4.5 w-4.5 text-purple-400" />
          </div>
          <div>
            <CardTitle>Join Codes</CardTitle>
            <CardDescription>
              Generate codes for students to join your school or classes
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Active codes list */}
        {joinCodes.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Active Codes</h4>
            <div className="divide-y divide-border rounded-lg border border-border">
              {joinCodes.map((jc) => {
                const cls = classes.find((c) => c.id === jc.class_id)
                const isExpired =
                  jc.expires_at && new Date(jc.expires_at) < new Date()
                return (
                  <div
                    key={jc.id}
                    className="flex items-center justify-between px-4 py-3 gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-muted px-2 py-0.5 font-mono text-sm font-semibold text-foreground">
                          {jc.code}
                        </code>
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          onClick={() => copyCode(jc.code, jc.id)}
                          aria-label="Copy code"
                        >
                          {copiedId === jc.id ? (
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {cls ? cls.name : 'All classes'}
                        {' \u00b7 '}
                        {jc.uses}/{jc.max_uses} uses
                        {jc.expires_at && (
                          <>
                            {' \u00b7 '}
                            {isExpired ? (
                              <span className="text-destructive">Expired</span>
                            ) : (
                              <>Expires {formatDate(jc.expires_at)}</>
                            )}
                          </>
                        )}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="text-muted-foreground hover:text-destructive shrink-0"
                      onClick={() => handleDeactivate(jc.id)}
                      aria-label="Deactivate code"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {joinCodes.length === 0 && (
          <div className="rounded-lg border border-dashed border-border py-8 text-center">
            <KeyRound className="mx-auto mb-2 h-8 w-8 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              No active join codes. Generate one below.
            </p>
          </div>
        )}

        <Separator />

        {/* Generate new code */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Generate New Code</h4>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Class (optional)</Label>
                <Select
                  value={selectedClassId}
                  onValueChange={(v) => setSelectedClassId(v ?? '')}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All classes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All classes</SelectItem>
                    {classes.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-uses">Max Uses</Label>
                <Input
                  id="max-uses"
                  type="number"
                  min="1"
                  max="500"
                  value={maxUses}
                  onChange={(e) => setMaxUses(e.target.value)}
                  placeholder="30"
                />
              </div>
            </div>

            {genError && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {genError}
              </div>
            )}

            <Button type="submit" disabled={generating}>
              {generating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <KeyRound className="h-4 w-4" />
              )}
              {generating ? 'Generating...' : 'Generate Code'}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Subscription Info Card
// ---------------------------------------------------------------------------

function SubscriptionCard({ school }: { school: SchoolType | null }) {
  if (!school) return null

  const statusColors: Record<string, string> = {
    active: 'border-green-500/30 bg-green-500/10 text-green-400',
    trialing: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    past_due: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    cancelled: 'border-destructive/30 bg-destructive/10 text-destructive',
  }

  const statusLabel: Record<string, string> = {
    active: 'Active',
    trialing: 'Trial',
    past_due: 'Past Due',
    cancelled: 'Cancelled',
  }

  const planLabel: Record<string, string> = {
    department: 'Department',
    school: 'School',
    mat: 'Multi-Academy Trust',
    custom: 'Custom',
  }

  const seatPercent = Math.min(
    (school.seats_used / school.seat_limit) * 100,
    100
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-500/10">
            <CreditCard className="h-4.5 w-4.5 text-yellow-400" />
          </div>
          <div>
            <CardTitle>Subscription</CardTitle>
            <CardDescription>Your current plan and usage</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Plan */}
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Plan
            </p>
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-yellow-400" />
              <span className="text-lg font-bold text-foreground">
                {planLabel[school.subscription_plan] ?? school.subscription_plan}
              </span>
            </div>
          </div>

          {/* Seats */}
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Seats
            </p>
            <p className="text-lg font-bold text-foreground">
              {school.seats_used}{' '}
              <span className="text-sm font-normal text-muted-foreground">
                / {school.seat_limit}
              </span>
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div
                className={cn(
                  'h-full rounded-full transition-all',
                  seatPercent > 90 ? 'bg-destructive' : 'bg-primary'
                )}
                style={{ width: `${seatPercent}%` }}
              />
            </div>
          </div>

          {/* Status */}
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Status
            </p>
            <Badge
              variant="outline"
              className={cn(
                'text-sm',
                statusColors[school.subscription_status] ?? ''
              )}
            >
              {statusLabel[school.subscription_status] ??
                school.subscription_status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
