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
  BookOpen,
  Shield,
  Bell,
  Calendar,
  Download,
  Upload,
  Archive,
  Pencil,
  X,
  Plus,
  ExternalLink,
  Image,
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
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
  const [currentMember, setCurrentMember] = useState<SchoolMember | null>(null)

  const isAdmin = currentMember?.role === 'admin'

  const fetchData = useCallback(async () => {
    if (!user) return
    const supabase = createClient()

    // Get membership
    const { data: membership } = await supabase
      .from('school_members')
      .select('*')
      .eq('user_id', user.id)
      .limit(1)
      .single()

    if (!membership?.school_id) {
      setLoading(false)
      return
    }

    setCurrentMember(membership)
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
        .order('created_at', { ascending: false }),
      supabase
        .from('classes')
        .select('*')
        .eq('school_id', schoolId)
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
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
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

  if (!school) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-dashed border-border py-16 text-center">
          <School className="mx-auto mb-3 h-10 w-10 text-muted-foreground/70" />
          <h2 className="text-lg font-semibold text-foreground">No School Found</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            You are not a member of any school. Ask your school admin for an invite.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          School Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your school details, members, classes, and more.
        </p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="mb-6 flex-wrap">
          <TabsTrigger value="profile" className="gap-1.5">
            <School className="h-3.5 w-3.5" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="members" className="gap-1.5">
            <UserPlus className="h-3.5 w-3.5" />
            Members
          </TabsTrigger>
          <TabsTrigger value="classes" className="gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            Classes
          </TabsTrigger>
          <TabsTrigger value="join-codes" className="gap-1.5">
            <KeyRound className="h-3.5 w-3.5" />
            Join Codes
          </TabsTrigger>
          <TabsTrigger value="billing" className="gap-1.5">
            <CreditCard className="h-3.5 w-3.5" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="privacy" className="gap-1.5">
            <Shield className="h-3.5 w-3.5" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-1.5">
            <Bell className="h-3.5 w-3.5" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="academic-year" className="gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            Academic Year
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <SchoolProfileSection school={school} onUpdate={fetchData} isAdmin={isAdmin} />
        </TabsContent>

        <TabsContent value="members">
          <MembersManagementSection
            members={members}
            onUpdate={fetchData}
            schoolId={school.id}
            isAdmin={isAdmin}
            currentUserId={user?.id}
          />
        </TabsContent>

        <TabsContent value="classes">
          <ClassesManagementSection
            classes={classes}
            members={members}
            onUpdate={fetchData}
            schoolId={school.id}
            isAdmin={isAdmin}
          />
        </TabsContent>

        <TabsContent value="join-codes">
          <JoinCodesSection
            joinCodes={joinCodes}
            classes={classes.filter((c) => c.is_active)}
            onUpdate={fetchData}
            schoolId={school.id}
            isAdmin={isAdmin}
          />
        </TabsContent>

        <TabsContent value="billing">
          <SubscriptionBillingSection school={school} isAdmin={isAdmin} />
        </TabsContent>

        <TabsContent value="privacy">
          <DataPrivacySection schoolId={school.id} isAdmin={isAdmin} />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationsSection isAdmin={isAdmin} />
        </TabsContent>

        <TabsContent value="academic-year">
          <AcademicYearSection school={school} onUpdate={fetchData} isAdmin={isAdmin} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Helper: Admin-only badge
// ---------------------------------------------------------------------------

function AdminBadge() {
  return (
    <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs ml-2">
      <Shield className="mr-1 h-3 w-3" />
      Admin Only
    </Badge>
  )
}

// ---------------------------------------------------------------------------
// 1. School Profile
// ---------------------------------------------------------------------------

function SchoolProfileSection({
  school,
  onUpdate,
  isAdmin,
}: {
  school: SchoolType
  onUpdate: () => void
  isAdmin: boolean
}) {
  const [name, setName] = useState(school.name)
  const [address, setAddress] = useState(school.address ?? '')
  const [contactEmail, setContactEmail] = useState(school.contact_email)
  const [contactPhone, setContactPhone] = useState(school.contact_phone ?? '')
  const [schoolType, setSchoolType] = useState(school.school_type)
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setName(school.name)
    setAddress(school.address ?? '')
    setContactEmail(school.contact_email)
    setContactPhone(school.contact_phone ?? '')
    setSchoolType(school.school_type)
  }, [school])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isAdmin) return

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
        school_type: schoolType,
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

  const schoolTypeOptions = [
    { value: 'secondary', label: 'Secondary School' },
    { value: 'sixth_form', label: 'Sixth Form' },
    { value: 'independent', label: 'Independent School' },
    { value: 'academy', label: 'Academy' },
    { value: 'mat', label: 'Multi-Academy Trust' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <School className="h-4.5 w-4.5 text-primary" />
            </div>
            <div>
              <CardTitle className="flex items-center">
                School Profile
                {!isAdmin && <AdminBadge />}
              </CardTitle>
              <CardDescription>Basic information about your school</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Logo upload area */}
            <div className="space-y-2">
              <Label>School Logo</Label>
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50">
                  {school.logo_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={school.logo_url}
                      alt={`${school.name} logo`}
                      className="h-full w-full rounded-lg object-contain"
                    />
                  ) : (
                    <Image className="h-8 w-8 text-muted-foreground/70" />
                  )}
                </div>
                <div className="space-y-1">
                  <Button type="button" variant="outline" size="sm" disabled={!isAdmin}>
                    <Upload className="mr-1.5 h-3.5 w-3.5" />
                    Upload Logo
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG or SVG. Max 2MB. Recommended 200x200px.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="school-name">School Name</Label>
                <Input
                  id="school-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Oakwood Academy"
                  required
                  disabled={!isAdmin}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="school-type">School Type</Label>
                <Select
                  value={schoolType}
                  onValueChange={(v) => setSchoolType(v as SchoolType['school_type'])}
                  disabled={!isAdmin}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {schoolTypeOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="school-address">Address</Label>
                <Input
                  id="school-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 123 School Lane, London"
                  disabled={!isAdmin}
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
                  disabled={!isAdmin}
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
                  disabled={!isAdmin}
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            {isAdmin && (
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
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// ---------------------------------------------------------------------------
// 2. Members Management
// ---------------------------------------------------------------------------

function MembersManagementSection({
  members,
  onUpdate,
  schoolId,
  isAdmin,
  currentUserId,
}: {
  members: SchoolMember[]
  onUpdate: () => void
  schoolId: string
  isAdmin: boolean
  currentUserId: string | undefined
}) {
  const [inviteName, setInviteName] = useState('')
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState<string>('teacher')
  const [inviting, setInviting] = useState(false)
  const [inviteError, setInviteError] = useState<string | null>(null)
  const [inviteSuccess, setInviteSuccess] = useState(false)
  const [removingId, setRemovingId] = useState<string | null>(null)
  const [confirmRemoveOpen, setConfirmRemoveOpen] = useState(false)
  const [memberToRemove, setMemberToRemove] = useState<SchoolMember | null>(null)
  const [changingRoleId, setChangingRoleId] = useState<string | null>(null)

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault()
    if (!isAdmin) return

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

  async function handleRemoveMember() {
    if (!memberToRemove || !isAdmin) return
    setRemovingId(memberToRemove.id)

    const supabase = createClient()
    await supabase
      .from('school_members')
      .delete()
      .eq('id', memberToRemove.id)
      .eq('school_id', schoolId)

    setRemovingId(null)
    setConfirmRemoveOpen(false)
    setMemberToRemove(null)
    onUpdate()
  }

  async function handleRoleChange(memberId: string, newRole: string) {
    if (!isAdmin) return
    setChangingRoleId(memberId)

    const supabase = createClient()
    await supabase
      .from('school_members')
      .update({ role: newRole })
      .eq('id', memberId)
      .eq('school_id', schoolId)

    setChangingRoleId(null)
    onUpdate()
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
    <div className="space-y-6">
      {/* Members list */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
              <UserPlus className="h-4.5 w-4.5 text-blue-400" />
            </div>
            <div>
              <CardTitle className="flex items-center">
                Members
                {!isAdmin && <AdminBadge />}
              </CardTitle>
              <CardDescription>
                {members.length} member{members.length !== 1 ? 's' : ''} in your school
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {members.length > 0 && (
            <div className="divide-y divide-border rounded-lg border border-border">
              {members.map((member) => {
                const isSelf = member.user_id === currentUserId
                return (
                  <div
                    key={member.id}
                    className="flex items-center justify-between px-4 py-3 gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-medium text-foreground">
                          {member.full_name}
                        </p>
                        {isSelf && (
                          <Badge variant="outline" className="text-xs">You</Badge>
                        )}
                      </div>
                      <p className="truncate text-xs text-muted-foreground">
                        {member.email}
                        {member.department && ` · ${member.department}`}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      {isAdmin && !isSelf ? (
                        <Select
                          value={member.role}
                          onValueChange={(v) => handleRoleChange(member.id, v)}
                          disabled={changingRoleId === member.id}
                        >
                          <SelectTrigger className="w-[130px] h-8 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="head_of_department">Head of Dept</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <Badge variant={roleBadgeVariant[member.role] ?? 'outline'}>
                          {roleLabel[member.role] ?? member.role}
                        </Badge>
                      )}
                      {member.invite_status === 'pending' && (
                        <Badge
                          variant="outline"
                          className="border-amber-500/30 bg-amber-500/10 text-amber-400"
                        >
                          Pending
                        </Badge>
                      )}
                      {isAdmin && !isSelf && (
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => {
                            setMemberToRemove(member)
                            setConfirmRemoveOpen(true)
                          }}
                          aria-label={`Remove ${member.full_name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {members.length === 0 && (
            <div className="rounded-lg border border-dashed border-border py-8 text-center">
              <UserPlus className="mx-auto mb-2 h-8 w-8 text-muted-foreground/70" />
              <p className="text-sm text-muted-foreground">No members yet.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Remove member confirmation dialog */}
      <Dialog open={confirmRemoveOpen} onOpenChange={setConfirmRemoveOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Remove Member</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove{' '}
              <span className="font-medium text-foreground">{memberToRemove?.full_name}</span>{' '}
              from this school? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setConfirmRemoveOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleRemoveMember}
              disabled={removingId !== null}
            >
              {removingId ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Invite form - admin only */}
      {isAdmin && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Invite New Member</CardTitle>
            <CardDescription>Send an invitation to join your school</CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// 3. Classes Management
// ---------------------------------------------------------------------------

function ClassesManagementSection({
  classes,
  members,
  onUpdate,
  schoolId,
  isAdmin,
}: {
  classes: Class[]
  members: SchoolMember[]
  onUpdate: () => void
  schoolId: string
  isAdmin: boolean
}) {
  const [createOpen, setCreateOpen] = useState(false)
  const [editingClass, setEditingClass] = useState<Class | null>(null)
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)
  const [classToDelete, setClassToDelete] = useState<Class | null>(null)

  // Create / edit form state
  const [formName, setFormName] = useState('')
  const [formYearGroup, setFormYearGroup] = useState('')
  const [formExamBoard, setFormExamBoard] = useState('')
  const [formTeacherId, setFormTeacherId] = useState('')
  const [formAcademicYear, setFormAcademicYear] = useState('2025/2026')
  const [formSaving, setFormSaving] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const activeClasses = classes.filter((c) => c.is_active)
  const archivedClasses = classes.filter((c) => !c.is_active)
  const teachers = members.filter((m) => m.invite_status === 'accepted' || m.user_id)

  function openCreate() {
    setFormName('')
    setFormYearGroup('')
    setFormExamBoard('')
    setFormTeacherId('')
    setFormAcademicYear('2025/2026')
    setFormError(null)
    setEditingClass(null)
    setCreateOpen(true)
  }

  function openEdit(cls: Class) {
    setFormName(cls.name)
    setFormYearGroup(cls.year_group ?? '')
    setFormExamBoard(cls.exam_board ?? '')
    setFormTeacherId(cls.teacher_id ?? '')
    setFormAcademicYear(cls.academic_year)
    setFormError(null)
    setEditingClass(cls)
    setCreateOpen(true)
  }

  async function handleSaveClass(e: React.FormEvent) {
    e.preventDefault()
    if (!isAdmin) return
    setFormSaving(true)
    setFormError(null)

    const supabase = createClient()
    const data = {
      school_id: schoolId,
      name: formName,
      year_group: formYearGroup || null,
      exam_board: formExamBoard || null,
      teacher_id: formTeacherId || null,
      academic_year: formAcademicYear,
    }

    if (editingClass) {
      const { error } = await supabase
        .from('classes')
        .update(data)
        .eq('id', editingClass.id)
        .eq('school_id', schoolId)

      if (error) {
        setFormError('Failed to update class.')
        setFormSaving(false)
        return
      }
    } else {
      const { error } = await supabase
        .from('classes')
        .insert({ ...data, is_active: true, student_count: 0 })

      if (error) {
        setFormError('Failed to create class.')
        setFormSaving(false)
        return
      }
    }

    setFormSaving(false)
    setCreateOpen(false)
    onUpdate()
  }

  async function handleArchiveClass(cls: Class) {
    if (!isAdmin) return
    const supabase = createClient()
    await supabase
      .from('classes')
      .update({ is_active: !cls.is_active })
      .eq('id', cls.id)
      .eq('school_id', schoolId)
    onUpdate()
  }

  async function handleDeleteClass() {
    if (!classToDelete || !isAdmin) return
    const supabase = createClient()
    await supabase
      .from('classes')
      .delete()
      .eq('id', classToDelete.id)
      .eq('school_id', schoolId)
    setConfirmDeleteOpen(false)
    setClassToDelete(null)
    onUpdate()
  }

  function getTeacherName(teacherId: string | null) {
    if (!teacherId) return 'Unassigned'
    return members.find((m) => m.user_id === teacherId)?.full_name ?? 'Unknown'
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
                <BookOpen className="h-4.5 w-4.5 text-green-400" />
              </div>
              <div>
                <CardTitle className="flex items-center">
                  Classes
                  {!isAdmin && <AdminBadge />}
                </CardTitle>
                <CardDescription>
                  {activeClasses.length} active class{activeClasses.length !== 1 ? 'es' : ''}
                </CardDescription>
              </div>
            </div>
            {isAdmin && (
              <Button size="sm" onClick={openCreate}>
                <Plus className="h-4 w-4" />
                New Class
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeClasses.length > 0 ? (
            <div className="divide-y divide-border rounded-lg border border-border">
              {activeClasses.map((cls) => (
                <div key={cls.id} className="flex items-center justify-between px-4 py-3 gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{cls.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {getTeacherName(cls.teacher_id)}
                      {cls.year_group && ` · ${cls.year_group}`}
                      {cls.exam_board && ` · ${cls.exam_board}`}
                      {` · ${cls.student_count} student${cls.student_count !== 1 ? 's' : ''}`}
                    </p>
                  </div>
                  {isAdmin && (
                    <div className="flex items-center gap-1 shrink-0">
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => openEdit(cls)}
                        aria-label="Edit class"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => handleArchiveClass(cls)}
                        aria-label="Archive class"
                      >
                        <Archive className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => {
                          setClassToDelete(cls)
                          setConfirmDeleteOpen(true)
                        }}
                        aria-label="Delete class"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border py-8 text-center">
              <BookOpen className="mx-auto mb-2 h-8 w-8 text-muted-foreground/70" />
              <p className="text-sm text-muted-foreground">No active classes.</p>
            </div>
          )}

          {archivedClasses.length > 0 && (
            <>
              <Separator />
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Archived ({archivedClasses.length})
                </h4>
                <div className="divide-y divide-border rounded-lg border border-border opacity-60">
                  {archivedClasses.map((cls) => (
                    <div key={cls.id} className="flex items-center justify-between px-4 py-3 gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground">{cls.name}</p>
                        <p className="truncate text-xs text-muted-foreground">
                          {cls.academic_year} · {cls.student_count} students
                        </p>
                      </div>
                      {isAdmin && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleArchiveClass(cls)}
                          className="text-xs"
                        >
                          Restore
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Create / Edit class dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingClass ? 'Edit Class' : 'Create New Class'}</DialogTitle>
            <DialogDescription>
              {editingClass
                ? 'Update the class details below.'
                : 'Fill in the details to create a new class.'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSaveClass} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="class-name">Class Name</Label>
              <Input
                id="class-name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="e.g. Year 10 English Set 1"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Year Group</Label>
                <Select value={formYearGroup} onValueChange={setFormYearGroup}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">None</SelectItem>
                    {['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'].map(
                      (y) => (
                        <SelectItem key={y} value={y}>{y}</SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Exam Board</Label>
                <Select value={formExamBoard} onValueChange={setFormExamBoard}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select board" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">None</SelectItem>
                    {['AQA', 'Edexcel', 'OCR', 'WJEC'].map((b) => (
                      <SelectItem key={b} value={b}>{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Assigned Teacher</Label>
                <Select value={formTeacherId} onValueChange={setFormTeacherId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Unassigned" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Unassigned</SelectItem>
                    {teachers.map((t) => (
                      <SelectItem key={t.id} value={t.user_id ?? t.id}>
                        {t.full_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="academic-year">Academic Year</Label>
                <Input
                  id="academic-year"
                  value={formAcademicYear}
                  onChange={(e) => setFormAcademicYear(e.target.value)}
                  placeholder="2025/2026"
                  required
                />
              </div>
            </div>

            {formError && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {formError}
              </div>
            )}

            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => setCreateOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={formSaving}>
                {formSaving && <Loader2 className="h-4 w-4 animate-spin" />}
                {editingClass ? 'Update Class' : 'Create Class'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete class confirmation dialog */}
      <Dialog open={confirmDeleteOpen} onOpenChange={setConfirmDeleteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Class</DialogTitle>
            <DialogDescription>
              Are you sure you want to permanently delete{' '}
              <span className="font-medium text-foreground">{classToDelete?.name}</span>?
              This will remove all student associations. Consider archiving instead.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDeleteOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteClass}>
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// ---------------------------------------------------------------------------
// 4. Join Codes
// ---------------------------------------------------------------------------

function JoinCodesSection({
  joinCodes,
  classes,
  onUpdate,
  schoolId,
  isAdmin,
}: {
  joinCodes: SchoolJoinCode[]
  classes: Class[]
  onUpdate: () => void
  schoolId: string
  isAdmin: boolean
}) {
  const [selectedClassId, setSelectedClassId] = useState<string>('')
  const [maxUses, setMaxUses] = useState('30')
  const [generating, setGenerating] = useState(false)
  const [genError, setGenError] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [confirmDeactivateOpen, setConfirmDeactivateOpen] = useState(false)
  const [codeToDeactivate, setCodeToDeactivate] = useState<SchoolJoinCode | null>(null)

  const activeCodes = joinCodes.filter((jc) => jc.is_active)
  const inactiveCodes = joinCodes.filter((jc) => !jc.is_active)

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    if (!isAdmin) return

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

  async function handleDeactivate() {
    if (!codeToDeactivate || !isAdmin) return
    const supabase = createClient()
    await supabase
      .from('school_join_codes')
      .update({ is_active: false })
      .eq('id', codeToDeactivate.id)
      .eq('school_id', schoolId)
    setConfirmDeactivateOpen(false)
    setCodeToDeactivate(null)
    onUpdate()
  }

  function copyCode(code: string, id: string) {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10">
              <KeyRound className="h-4.5 w-4.5 text-purple-400" />
            </div>
            <div>
              <CardTitle className="flex items-center">
                Join Codes
                {!isAdmin && <AdminBadge />}
              </CardTitle>
              <CardDescription>
                Generate codes for students to join your school or classes
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Active codes */}
          {activeCodes.length > 0 ? (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Active Codes</h4>
              <div className="divide-y divide-border rounded-lg border border-border">
                {activeCodes.map((jc) => {
                  const cls = classes.find((c) => c.id === jc.class_id)
                  const isExpired = jc.expires_at && new Date(jc.expires_at) < new Date()
                  const usagePercent = jc.max_uses > 0 ? (jc.uses / jc.max_uses) * 100 : 0
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
                        <div className="mt-1 flex items-center gap-2">
                          <p className="text-xs text-muted-foreground">
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
                        {/* Usage progress bar */}
                        <div className="mt-1.5 h-1 w-24 overflow-hidden rounded-full bg-border">
                          <div
                            className={cn(
                              'h-full rounded-full transition-all',
                              usagePercent > 90 ? 'bg-destructive' : usagePercent > 70 ? 'bg-amber-500' : 'bg-primary'
                            )}
                            style={{ width: `${Math.min(usagePercent, 100)}%` }}
                          />
                        </div>
                      </div>
                      {isAdmin && (
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          className="text-muted-foreground hover:text-destructive shrink-0"
                          onClick={() => {
                            setCodeToDeactivate(jc)
                            setConfirmDeactivateOpen(true)
                          }}
                          aria-label="Deactivate code"
                        >
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border py-8 text-center">
              <KeyRound className="mx-auto mb-2 h-8 w-8 text-muted-foreground/70" />
              <p className="text-sm text-muted-foreground">
                No active join codes. Generate one below.
              </p>
            </div>
          )}

          {/* Inactive codes summary */}
          {inactiveCodes.length > 0 && (
            <p className="text-xs text-muted-foreground">
              {inactiveCodes.length} deactivated code{inactiveCodes.length !== 1 ? 's' : ''}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Deactivate confirmation dialog */}
      <Dialog open={confirmDeactivateOpen} onOpenChange={setConfirmDeactivateOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Deactivate Join Code</DialogTitle>
            <DialogDescription>
              Are you sure you want to deactivate the code{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm font-semibold">
                {codeToDeactivate?.code}
              </code>
              ? Students will no longer be able to join using this code.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDeactivateOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeactivate}>
              Deactivate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Generate new code - admin only */}
      {isAdmin && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Generate New Code</CardTitle>
            <CardDescription>Create a join code for students</CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// 5. Subscription & Billing
// ---------------------------------------------------------------------------

function SubscriptionBillingSection({
  school,
  isAdmin,
}: {
  school: SchoolType
  isAdmin: boolean
}) {
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-500/10">
              <CreditCard className="h-4.5 w-4.5 text-yellow-400" />
            </div>
            <div>
              <CardTitle className="flex items-center">
                Subscription & Billing
                {!isAdmin && <AdminBadge />}
              </CardTitle>
              <CardDescription>Your current plan and usage</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
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
              {seatPercent > 90 && (
                <p className="text-xs text-destructive">
                  Almost at capacity. Consider upgrading your plan.
                </p>
              )}
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

          {isAdmin && (
            <>
              <Separator />
              <div className="flex flex-wrap items-center gap-3">
                <Button>
                  <Crown className="h-4 w-4" />
                  Upgrade Plan
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4" />
                  Manage Billing
                </Button>
                <Button variant="outline">
                  <CreditCard className="h-4 w-4" />
                  Billing History
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {school.subscription_status === 'past_due' && isAdmin && (
        <Card className="border-amber-500/30">
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Payment overdue</p>
                <p className="text-xs text-muted-foreground">
                  Your last payment failed. Please update your payment method to avoid service interruption.
                </p>
              </div>
              <Button size="sm" className="ml-auto shrink-0">
                Update Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// 6. Data & Privacy
// ---------------------------------------------------------------------------

function DataPrivacySection({
  schoolId,
  isAdmin,
}: {
  schoolId: string
  isAdmin: boolean
}) {
  const [exporting, setExporting] = useState(false)
  const [retentionPeriod, setRetentionPeriod] = useState('3_years')

  async function handleExportData() {
    if (!isAdmin) return
    setExporting(true)
    try {
      const res = await fetch(`/api/school/export?school_id=${schoolId}`)
      if (res.ok) {
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `school-data-export-${new Date().toISOString().slice(0, 10)}.json`
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch {
      // Silent fail - in production, show toast
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10">
              <Shield className="h-4.5 w-4.5 text-red-400" />
            </div>
            <div>
              <CardTitle className="flex items-center">
                Data & Privacy
                <AdminBadge />
              </CardTitle>
              <CardDescription>Manage your school data and privacy settings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Export data */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Export Data</h4>
            <p className="text-xs text-muted-foreground">
              Download a complete export of all your school data including members, classes, student progress, and analytics.
            </p>
            <Button
              variant="outline"
              disabled={!isAdmin || exporting}
              onClick={handleExportData}
            >
              {exporting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {exporting ? 'Exporting...' : 'Export All Data'}
            </Button>
          </div>

          <Separator />

          {/* Data retention */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Data Retention</h4>
            <p className="text-xs text-muted-foreground">
              Choose how long student data is retained after a student leaves your school.
            </p>
            <Select value={retentionPeriod} onValueChange={setRetentionPeriod} disabled={!isAdmin}>
              <SelectTrigger className="w-[220px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1_year">1 Year</SelectItem>
                <SelectItem value="2_years">2 Years</SelectItem>
                <SelectItem value="3_years">3 Years</SelectItem>
                <SelectItem value="5_years">5 Years</SelectItem>
                <SelectItem value="indefinite">Indefinite</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* GDPR compliance info */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">GDPR Compliance</h4>
            <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground">
                  All student data is stored securely and encrypted at rest in UK/EU data centres.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Data processing agreements (DPA) are available upon request.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Students can request deletion of their personal data at any time (right to erasure).
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Regular data protection impact assessments are conducted.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ---------------------------------------------------------------------------
// 7. Notifications
// ---------------------------------------------------------------------------

interface NotificationSetting {
  key: string
  label: string
  description: string
  enabled: boolean
}

function NotificationsSection({ isAdmin }: { isAdmin: boolean }) {
  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    {
      key: 'student_joins',
      label: 'Student Joins',
      description: 'Notify when a new student joins your school',
      enabled: true,
    },
    {
      key: 'low_engagement',
      label: 'Low Engagement Alerts',
      description: 'Notify when students show declining activity',
      enabled: true,
    },
    {
      key: 'assessment_results',
      label: 'Assessment Results',
      description: 'Notify when students complete assessments',
      enabled: false,
    },
    {
      key: 'weekly_report',
      label: 'Weekly Summary Report',
      description: 'Receive a weekly summary of school activity',
      enabled: true,
    },
    {
      key: 'billing_alerts',
      label: 'Billing Alerts',
      description: 'Notify about upcoming payments and billing issues',
      enabled: true,
    },
    {
      key: 'seat_limit',
      label: 'Seat Limit Warnings',
      description: 'Notify when approaching or exceeding seat limits',
      enabled: true,
    },
  ])

  const [emailFrequency, setEmailFrequency] = useState('daily')
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)

  function toggleNotification(key: string) {
    setNotifications((prev) =>
      prev.map((n) => (n.key === key ? { ...n, enabled: !n.enabled } : n))
    )
  }

  async function handleSave() {
    setSaving(true)
    // In production, this would save to the API
    await new Promise((r) => setTimeout(r, 500))
    setSaving(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
              <Bell className="h-4.5 w-4.5 text-indigo-400" />
            </div>
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure which notifications you receive</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.key}
                className="flex items-center justify-between gap-4"
              >
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">{notification.label}</Label>
                  <p className="text-xs text-muted-foreground">{notification.description}</p>
                </div>
                <Switch
                  checked={notification.enabled}
                  onCheckedChange={() => toggleNotification(notification.key)}
                />
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Email Digest Frequency</Label>
            <Select value={emailFrequency} onValueChange={setEmailFrequency}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Real-time</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
                <SelectItem value="weekly">Weekly Digest</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              How often notification emails are bundled and sent.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {saving ? 'Saving...' : 'Save Preferences'}
            </Button>
            {success && (
              <span className="flex items-center gap-1.5 text-sm text-green-500">
                <CheckCircle className="h-4 w-4" />
                Saved
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ---------------------------------------------------------------------------
// 8. Academic Year
// ---------------------------------------------------------------------------

function AcademicYearSection({
  school,
  onUpdate,
  isAdmin,
}: {
  school: SchoolType
  onUpdate: () => void
  isAdmin: boolean
}) {
  const [currentYear, setCurrentYear] = useState('2025/2026')
  const [archiving, setArchiving] = useState(false)
  const [confirmArchiveOpen, setConfirmArchiveOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)

  const academicYears = [
    '2023/2024',
    '2024/2025',
    '2025/2026',
    '2026/2027',
  ]

  async function handleSaveYear() {
    if (!isAdmin) return
    setSaving(true)
    // In production, save to API/database
    await new Promise((r) => setTimeout(r, 500))
    setSaving(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  async function handleArchivePreviousYear() {
    if (!isAdmin) return
    setArchiving(true)

    const supabase = createClient()
    // Archive all classes from the previous academic year
    const previousYear = academicYears[academicYears.indexOf(currentYear) - 1]
    if (previousYear) {
      await supabase
        .from('classes')
        .update({ is_active: false })
        .eq('school_id', school.id)
        .eq('academic_year', previousYear)
    }

    setArchiving(false)
    setConfirmArchiveOpen(false)
    onUpdate()
  }

  const previousYear = academicYears[academicYears.indexOf(currentYear) - 1]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10">
              <Calendar className="h-4.5 w-4.5 text-teal-400" />
            </div>
            <div>
              <CardTitle className="flex items-center">
                Academic Year
                <AdminBadge />
              </CardTitle>
              <CardDescription>Manage the current academic year and archive past data</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Current Academic Year</Label>
            <div className="flex items-center gap-3">
              <Select value={currentYear} onValueChange={setCurrentYear} disabled={!isAdmin}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {academicYears.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {isAdmin && (
                <Button onClick={handleSaveYear} disabled={saving} size="sm">
                  {saving ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  Set Year
                </Button>
              )}
              {success && (
                <span className="flex items-center gap-1.5 text-sm text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  Saved
                </span>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Archive Previous Year</h4>
            <p className="text-xs text-muted-foreground">
              Archive all classes and student data from a previous academic year.
              Archived data remains accessible but classes will be marked as inactive.
            </p>
            {previousYear ? (
              <Button
                variant="outline"
                disabled={!isAdmin}
                onClick={() => setConfirmArchiveOpen(true)}
              >
                <Archive className="h-4 w-4" />
                Archive {previousYear} Data
              </Button>
            ) : (
              <p className="text-xs text-muted-foreground italic">
                No previous year available to archive.
              </p>
            )}
          </div>

          <Separator />

          <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-2">
            <h4 className="text-sm font-medium text-foreground">About Year Transitions</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
              <li>Archiving marks all classes from that year as inactive</li>
              <li>Student progress data is preserved and remains accessible</li>
              <li>Archived classes can be restored individually from the Classes tab</li>
              <li>New classes can be created for the current academic year</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Archive confirmation dialog */}
      <Dialog open={confirmArchiveOpen} onOpenChange={setConfirmArchiveOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Archive {previousYear} Data</DialogTitle>
            <DialogDescription>
              This will mark all classes from {previousYear} as archived.
              Student data will be preserved but classes will be deactivated.
              You can restore individual classes later if needed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmArchiveOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleArchivePreviousYear}
              disabled={archiving}
            >
              {archiving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Archive className="h-4 w-4" />
              )}
              {archiving ? 'Archiving...' : 'Archive Year'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
