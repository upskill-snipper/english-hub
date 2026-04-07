"use client"

import { useState } from "react"
import {
  Settings,
  Building2,
  CreditCard,
  Bell,
  Shield,
  Trash2,
  Copy,
  RefreshCw,
} from "lucide-react"
import { toast } from "sonner"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

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
  role: "admin" | "teacher"
}

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const EXAM_BOARDS = [
  "AQA",
  "Edexcel (Pearson)",
  "OCR",
  "WJEC/Eduqas",
  "IGCSE (Cambridge/CAIE)",
]

const CURRICULUM_OPTIONS = [
  "GCSE English Language",
  "GCSE English Literature",
  "A-Level English Language",
  "A-Level English Literature",
  "KS3 English (Years 7-9)",
]

const MOCK_JOIN_CODE = "EH-XK92-DELTA"

const MOCK_ADMINS: AdminUser[] = [
  { id: "1", name: "Sarah Johnson", email: "s.johnson@school.ac.uk", role: "admin" },
  { id: "2", name: "David Clarke", email: "d.clarke@school.ac.uk", role: "admin" },
  { id: "3", name: "Emma Wilson", email: "e.wilson@school.ac.uk", role: "teacher" },
]

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

async function putSettings(section: string, data: unknown): Promise<void> {
  const res = await fetch("/api/school/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ section, data }),
  })
  if (!res.ok) {
    throw new Error("Failed to save settings")
  }
}

// ---------------------------------------------------------------------------
// Section: School Profile
// ---------------------------------------------------------------------------

function SchoolProfileSection() {
  const [saving, setSaving] = useState(false)
  const [profile, setProfile] = useState<SchoolProfile>({
    name: "Westfield Academy",
    type: "Secondary",
    examBoard: "AQA",
    curriculum: ["GCSE English Language", "GCSE English Literature"],
    address: "12 School Lane",
    city: "Manchester",
    postcode: "M14 5TP",
    contactEmail: "admin@westfieldacademy.ac.uk",
    phone: "0161 555 0192",
  })

  function handleChange(field: keyof SchoolProfile, value: string | string[]) {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSave() {
    setSaving(true)
    try {
      await putSettings("profile", profile)
      toast.success("School profile saved successfully.")
    } catch {
      toast.error("Failed to save school profile. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-muted-foreground" />
          <CardTitle>School Profile</CardTitle>
        </div>
        <CardDescription>
          Update your school&apos;s public information and contact details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="school-name">School Name</Label>
            <Input
              id="school-name"
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="e.g. Westfield Academy"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="school-type">School Type</Label>
            <Input
              id="school-type"
              value={profile.type}
              onChange={(e) => handleChange("type", e.target.value)}
              placeholder="e.g. Secondary, Sixth Form, FE College"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="exam-board">Exam Board</Label>
            <select
              id="exam-board"
              value={profile.examBoard}
              onChange={(e) => handleChange("examBoard", e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
            >
              <option value="" disabled>Select exam board...</option>
              {EXAM_BOARDS.map((board) => (
                <option key={board} value={board}>{board}</option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground">
              Content and assessments are tailored to your exam board.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Curriculum</Label>
          <p className="text-xs text-muted-foreground">
            Select all qualifications your school teaches.
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
                    handleChange("curriculum", next)
                  }}
                  className="h-4 w-4 accent-primary rounded"
                />
                <span className="text-sm text-foreground">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={profile.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Street address"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={profile.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="City"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="postcode">Postcode</Label>
            <Input
              id="postcode"
              value={profile.postcode}
              onChange={(e) => handleChange("postcode", e.target.value)}
              placeholder="e.g. M14 5TP"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="contact-email">Contact Email</Label>
            <Input
              id="contact-email"
              type="email"
              value={profile.contactEmail}
              onChange={(e) => handleChange("contactEmail", e.target.value)}
              placeholder="admin@school.ac.uk"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="e.g. 0161 555 0192"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>School Logo</Label>
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 text-xs text-muted-foreground">
              Logo
            </div>
            <div>
              <Button variant="outline" size="sm" disabled className="mb-1 block">
                Upload Logo
              </Button>
              <p className="text-xs text-muted-foreground">PNG or SVG, max 1 MB. Coming soon.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-1">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Profile"}
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
  const isFounder = true // Replace with actual plan check

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Subscription &amp; Access</CardTitle>
        </div>
        <CardDescription>
          Your current plan and billing information.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Current Plan</p>
              <p className="text-base font-semibold text-foreground mt-0.5">
                {isFounder ? "Founding School Partner" : "School Partnership"}
              </p>
            </div>
            {isFounder && (
              <Badge className="bg-primary/15 text-primary border border-primary/30 text-xs font-semibold">
                FOUNDING PARTNER
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Badge className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs">
              Active
            </Badge>
            <span className="text-sm text-muted-foreground">
              {isFounder
                ? "Founding Schools Programme -- preferential rate locked"
                : "Active subscription"}
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            Contact us to discuss renewal terms. Founding schools have locked preferential rates.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Billing enquiries:{" "}
            <a
              href="mailto:schools@theenglishhub.app"
              className="text-primary underline-offset-4 hover:underline"
            >
              schools@theenglishhub.app
            </a>
          </p>
          <Button variant="outline" size="sm">
            {isFounder ? "Upgrade to Paid Plan" : "Renew Subscription"}
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
  const [admins, setAdmins] = useState<AdminUser[]>(MOCK_ADMINS)
  const [saving, setSaving] = useState<string | null>(null)

  async function toggleRole(id: string) {
    const target = admins.find((a) => a.id === id)
    if (!target) return

    const newRole = target.role === "admin" ? "teacher" : "admin"
    setSaving(id)
    try {
      await putSettings("admins", { userId: id, role: newRole })
      setAdmins((prev) =>
        prev.map((a) => (a.id === id ? { ...a, role: newRole } : a))
      )
      toast.success(
        newRole === "admin"
          ? `${target.name} promoted to admin.`
          : `${target.name} demoted to teacher.`
      )
    } catch {
      toast.error("Failed to update role. Please try again.")
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
            <CardTitle>Admin Accounts</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            Add Admin
          </Button>
        </div>
        <CardDescription>
          Manage which teachers have admin access to school settings.
        </CardDescription>
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
                  variant={admin.role === "admin" ? "default" : "outline"}
                  className="capitalize text-xs"
                >
                  {admin.role}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                  disabled={saving === admin.id}
                  onClick={() => toggleRole(admin.id)}
                >
                  {saving === admin.id
                    ? "Saving..."
                    : admin.role === "admin"
                    ? "Demote"
                    : "Promote"}
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
      await putSettings("notifications", settings)
      toast.success("Notification preferences saved.")
    } catch {
      toast.error("Failed to save notification settings.")
    } finally {
      setSaving(false)
    }
  }

  const rows: { key: keyof NotificationSettings; label: string; description: string }[] = [
    {
      key: "newStudentJoin",
      label: "New student joins",
      description: "Receive an email when a student joins your school.",
    },
    {
      key: "weeklyDigest",
      label: "Weekly analytics digest",
      description: "A weekly summary of class performance and engagement.",
    },
    {
      key: "atRiskAlerts",
      label: "At-risk student alerts",
      description: "Get notified when a student shows signs of disengagement.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Notifications</CardTitle>
        </div>
        <CardDescription>
          Choose which email notifications you receive.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <ul className="divide-y divide-border">
          {rows.map(({ key, label, description }) => (
            <li key={key} className="flex items-start justify-between gap-4 py-3">
              <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
              </div>
              <Switch
                checked={settings[key]}
                onCheckedChange={() => handleToggle(key)}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Notifications"}
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
  const [saving, setSaving] = useState(false)
  const [settings, setSettings] = useState<SecuritySettings>({
    passwordPolicy: "strong",
    sessionTimeout: "60",
  })

  function handleChange(field: keyof SecuritySettings, value: string) {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSave() {
    setSaving(true)
    try {
      await putSettings("security", settings)
      toast.success("Security settings saved.")
    } catch {
      toast.error("Failed to save security settings.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Security</CardTitle>
        </div>
        <CardDescription>
          Configure password and session policies for school accounts.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="password-policy">Password Policy</Label>
          <select
            id="password-policy"
            value={settings.passwordPolicy}
            onChange={(e) => handleChange("passwordPolicy", e.target.value)}
            className="flex h-9 w-full max-w-xs rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
          >
            <option value="basic">Basic (8+ characters)</option>
            <option value="strong">Strong (12+ chars, mixed case, number)</option>
            <option value="very-strong">Very Strong (16+ chars, symbol required)</option>
          </select>
          <p className="text-xs text-muted-foreground">
            Applied to all teacher and student accounts within this school.
          </p>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
          <Input
            id="session-timeout"
            type="number"
            min="15"
            max="480"
            value={settings.sessionTimeout}
            onChange={(e) => handleChange("sessionTimeout", e.target.value)}
            className="max-w-xs"
          />
          <p className="text-xs text-muted-foreground">
            Users will be logged out after this period of inactivity.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Require 2FA for all admin accounts.
              </p>
            </div>
            <Badge variant="outline" className="text-xs text-muted-foreground border-border">
              Coming Soon
            </Badge>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Security"}
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
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [confirmText, setConfirmText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [exporting, setExporting] = useState(false)

  async function handleExport() {
    setExporting(true)
    try {
      await putSettings("gdpr", { action: "export" })
      toast.success("Export initiated. You will receive an email when your data is ready.")
    } catch {
      toast.error("Failed to initiate export. Please try again.")
    } finally {
      setExporting(false)
    }
  }

  async function handleDelete() {
    if (confirmText !== "DELETE") return
    setDeleting(true)
    try {
      await putSettings("gdpr", { action: "delete" })
      toast.success("Deletion request submitted. Your account will be removed within 30 days.")
      setShowDeleteConfirm(false)
    } catch {
      toast.error("Failed to submit deletion request.")
    } finally {
      setDeleting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-muted-foreground" />
          <CardTitle>GDPR &amp; Data</CardTitle>
        </div>
        <CardDescription>
          Manage your school&apos;s data in compliance with UK GDPR requirements.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 space-y-1">
          <p className="text-sm font-medium text-foreground">Data Retention Policy</p>
          <p className="text-sm text-muted-foreground">
            Student performance data is retained for the duration of your active subscription.
            Upon account deletion, all personal data is permanently removed within 30 days in
            accordance with UK GDPR Article 17 (Right to Erasure).
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={handleExport} disabled={exporting}>
            {exporting ? "Requesting..." : "Export All School Data"}
          </Button>
        </div>

        <div className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-4 space-y-3">
          <div className="flex items-center gap-2">
            <Trash2 className="h-4 w-4 text-destructive" />
            <p className="text-sm font-semibold text-destructive">Danger Zone</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Permanently delete your school account and all associated data. This action cannot
            be undone.
          </p>
          {!showDeleteConfirm ? (
            <Button
              variant="outline"
              size="sm"
              className="border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete School Account
            </Button>
          ) : (
            <div className="space-y-3 pt-1">
              <p className="text-sm text-muted-foreground">
                Type <span className="font-mono font-semibold text-destructive">DELETE</span> to
                confirm.
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
                  disabled={confirmText !== "DELETE" || deleting}
                >
                  {deleting ? "Deleting..." : "Confirm Delete"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowDeleteConfirm(false)
                    setConfirmText("")
                  }}
                >
                  Cancel
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
  const [joinCode, setJoinCode] = useState(MOCK_JOIN_CODE)
  const [regenerating, setRegenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  async function handleRegenerate() {
    setRegenerating(true)
    try {
      const res = await fetch("/api/school/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section: "join-code", data: { action: "regenerate" } }),
      })
      if (!res.ok) throw new Error("Failed")
      const json = await res.json().catch(() => ({}))
      setJoinCode(json.joinCode ?? `EH-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`)
      toast.success("Join code regenerated. Share the new code with your school.")
    } catch {
      toast.error("Failed to regenerate join code.")
    } finally {
      setRegenerating(false)
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(joinCode)
      setCopied(true)
      toast.success("Join code copied to clipboard.")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Failed to copy join code.")
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Join Code</CardTitle>
        </div>
        <CardDescription>
          Share this code with students and teachers so they can join your school.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex-1 max-w-xs rounded-lg border border-border bg-muted/30 px-4 py-3">
            <p className="font-mono text-lg font-semibold tracking-widest text-foreground">
              {joinCode}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="shrink-0"
          >
            <Copy className="mr-1.5 h-3.5 w-3.5" />
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Share this code with students or teachers to let them join your school on The English
          Hub. Regenerating the code will invalidate the old one.
        </p>

        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRegenerate}
            disabled={regenerating}
          >
            <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${regenerating ? "animate-spin" : ""}`} />
            {regenerating ? "Regenerating..." : "Regenerate Code"}
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
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <Settings className="h-6 w-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">School Settings</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Manage your school profile, billing, security, and more.
          </p>
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
