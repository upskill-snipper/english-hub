"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Mail,
  UserPlus,
  Check,
  X,
  Clock,
  Send,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react"
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type InviteRole = "teacher" | "head_of_department"
type InviteStatus = "pending" | "accepted" | "expired"

interface PendingInvite {
  id: string
  email: string
  role: InviteRole
  invite_status: InviteStatus
  invite_token: string | null
  invited_at: string
  expires: string | null
}

interface SendResult {
  sent: number
  alreadyMembers: number
  errors: { email: string; reason: string }[]
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ROLE_OPTIONS: { value: InviteRole; label: string }[] = [
  { value: "teacher", label: "Teacher" },
  { value: "head_of_department", label: "Head of Department" },
]

const ROLE_LABELS: Record<string, string> = {
  teacher: "Teacher",
  head_of_department: "Head of Department",
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(iso: string | null): string {
  if (!iso) return "—"
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function isExpired(expires: string | null): boolean {
  if (!expires) return false
  return new Date(expires) < new Date()
}

function resolveStatus(invite: PendingInvite): InviteStatus {
  if (invite.invite_status === "accepted") return "accepted"
  if (invite.invite_status === "expired") return "expired"
  if (isExpired(invite.expires)) return "expired"
  return "pending"
}

// ---------------------------------------------------------------------------
// StatusBadge
// ---------------------------------------------------------------------------

function StatusBadge({ status }: { status: InviteStatus }) {
  if (status === "accepted") {
    return (
      <Badge className="gap-1 bg-green-600/20 text-green-400 border-green-600/30">
        <Check className="h-3 w-3" />
        Accepted
      </Badge>
    )
  }
  if (status === "expired") {
    return (
      <Badge className="gap-1 bg-zinc-600/20 text-zinc-400 border-zinc-600/30">
        <Clock className="h-3 w-3" />
        Expired
      </Badge>
    )
  }
  return (
    <Badge className="gap-1 bg-amber-600/20 text-amber-400 border-amber-600/30">
      <Clock className="h-3 w-3" />
      Pending
    </Badge>
  )
}

// ---------------------------------------------------------------------------
// InviteForm
// ---------------------------------------------------------------------------

interface InviteFormProps {
  onInvitesSent: () => void
}

function InviteForm({ onInvitesSent }: InviteFormProps) {
  const [emailInput, setEmailInput] = useState("")
  const [role, setRole] = useState<InviteRole>("teacher")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const rawEmails = emailInput
      .split(/[\s,]+/)
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)

    if (rawEmails.length === 0) {
      toast.error("Please enter at least one email address.")
      return
    }

    setSending(true)
    try {
      const res = await fetch("/api/school/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emails: rawEmails,
          role,
          message: message.trim() || undefined,
        }),
      })

      const data: SendResult | { error: string } = await res.json()

      if (!res.ok) {
        toast.error("error" in data ? data.error : "Failed to send invites.")
        return
      }

      const result = data as SendResult

      const parts: string[] = []
      if (result.sent > 0) {
        parts.push(`${result.sent} invite${result.sent !== 1 ? "s" : ""} sent`)
      }
      if (result.alreadyMembers > 0) {
        parts.push(
          `${result.alreadyMembers} already member${result.alreadyMembers !== 1 ? "s" : ""}`
        )
      }
      if (result.errors.length > 0) {
        parts.push(`${result.errors.length} failed`)
        result.errors.forEach(({ email, reason }) => {
          toast.error(`${email}: ${reason}`)
        })
      }

      if (parts.length > 0) {
        toast.success(parts.join(", ") + ".")
      }

      setEmailInput("")
      setMessage("")
      onInvitesSent()
    } catch {
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setSending(false)
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <UserPlus className="h-5 w-5 text-primary" />
          Invite Staff
        </CardTitle>
        <CardDescription>
          Enter one or more email addresses separated by commas or spaces.
          Existing users will be added directly; new users will receive an
          invitation email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email addresses */}
          <div className="space-y-1.5">
            <Label htmlFor="email-input" className="text-sm font-medium text-foreground">
              Email addresses
            </Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email-input"
                type="text"
                placeholder="alice@school.ac.uk, bob@school.ac.uk"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="pl-9 bg-background border-border text-foreground placeholder:text-muted-foreground"
                disabled={sending}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Comma or space-separated. Maximum 50 at a time.
            </p>
          </div>

          {/* Role selection */}
          <div className="space-y-1.5">
            <Label htmlFor="role-select" className="text-sm font-medium text-foreground">
              Role
            </Label>
            <select
              id="role-select"
              value={role}
              onChange={(e) => setRole(e.target.value as InviteRole)}
              disabled={sending}
              className="flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
              {ROLE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Optional personal message */}
          <div className="space-y-1.5">
            <Label htmlFor="invite-message" className="text-sm font-medium text-foreground">
              Personal message{" "}
              <span className="font-normal text-muted-foreground">(optional)</span>
            </Label>
            <textarea
              id="invite-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add a personal note to include in the invitation email..."
              maxLength={500}
              rows={3}
              disabled={sending}
              className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground shadow-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
            <p className="text-xs text-muted-foreground text-right">
              {message.length}/500
            </p>
          </div>

          <Button type="submit" disabled={sending} className="w-full sm:w-auto">
            {sending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Invites
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// InviteRow
// ---------------------------------------------------------------------------

interface InviteRowProps {
  invite: PendingInvite
  onRevoked: () => void
}

function InviteRow({ invite, onRevoked }: InviteRowProps) {
  const [revoking, setRevoking] = useState(false)
  const status = resolveStatus(invite)

  async function handleRevoke() {
    if (!invite.invite_token) return
    if (!confirm(`Revoke invitation for ${invite.email}?`)) return

    setRevoking(true)
    try {
      const res = await fetch(`/api/school/invite/${invite.invite_token}`, {
        method: "DELETE",
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        toast.error(data.error ?? "Failed to revoke invite.")
        return
      }
      toast.success(`Invite for ${invite.email} revoked.`)
      onRevoked()
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setRevoking(false)
    }
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="truncate text-sm font-medium text-foreground">
            {invite.email}
          </span>
          <Badge variant="outline" className="shrink-0 text-xs text-muted-foreground border-border">
            {ROLE_LABELS[invite.role] ?? invite.role}
          </Badge>
          <StatusBadge status={status} />
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span>Invited {formatDate(invite.invited_at)}</span>
          {invite.expires && (
            <span className={status === "expired" ? "text-red-400" : ""}>
              Expires {formatDate(invite.expires)}
            </span>
          )}
        </div>
      </div>

      {status === "pending" && invite.invite_token && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRevoke}
          disabled={revoking}
          className="shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          {revoking ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <X className="mr-1 h-4 w-4" />
              Revoke
            </>
          )}
        </Button>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// InviteList
// ---------------------------------------------------------------------------

interface InviteListProps {
  invites: PendingInvite[]
  loading: boolean
  error: string | null
  onRefresh: () => void
  onRevoked: () => void
}

function InviteList({ invites, loading, error, onRefresh, onRevoked }: InviteListProps) {
  const pending = invites.filter((i) => resolveStatus(i) === "pending")
  const others = invites.filter((i) => resolveStatus(i) !== "pending")

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Mail className="h-5 w-5 text-primary" />
              Pending Invitations
            </CardTitle>
            <CardDescription>
              Invitations expire 7 days after they are sent.
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onRefresh}
            disabled={loading}
            className="text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {loading && invites.length === 0 && (
          <div className="flex items-center justify-center py-10 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        )}

        {!loading && invites.length === 0 && !error && (
          <p className="py-6 text-center text-sm text-muted-foreground">
            No invitations yet. Use the form above to invite staff.
          </p>
        )}

        {pending.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Pending ({pending.length})
            </p>
            {pending.map((inv) => (
              <InviteRow key={inv.id} invite={inv} onRevoked={onRevoked} />
            ))}
          </div>
        )}

        {others.length > 0 && (
          <div className={`space-y-3 ${pending.length > 0 ? "mt-6" : ""}`}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Expired ({others.length})
            </p>
            {others.map((inv) => (
              <InviteRow key={inv.id} invite={inv} onRevoked={onRevoked} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SchoolInvitePage() {
  const [invites, setInvites] = useState<PendingInvite[]>([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState<string | null>(null)

  const fetchInvites = useCallback(async () => {
    setLoading(true)
    setFetchError(null)
    try {
      const res = await fetch("/api/school/invite")
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setFetchError(data.error ?? "Failed to load invitations.")
        return
      }
      const data = await res.json()
      setInvites(data.invites ?? [])
    } catch {
      setFetchError("Network error. Could not load invitations.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchInvites()
  }, [fetchInvites])

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Invite Staff</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Invite teachers and heads of department to your school. They will
          receive an email with a secure link to join.
        </p>
      </div>

      <InviteForm onInvitesSent={fetchInvites} />

      <InviteList
        invites={invites}
        loading={loading}
        error={fetchError}
        onRefresh={fetchInvites}
        onRevoked={fetchInvites}
      />
    </div>
  )
}
