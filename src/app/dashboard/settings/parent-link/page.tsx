"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ToastProvider, useToast } from "@/components/ui/Toast";

// ─── Types ──────────────────────────────────────────────────────────────

interface LinkedParent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedAt: string;
}

interface LinkedStudent {
  id: string;
  firstName: string;
  lastName: string;
  school: string | null;
  linkedAt: string;
  hasActiveSubscription: boolean;
}

interface ActiveInvite {
  code: string;
  inviteUrl: string;
  expiresAt: string;
  createdAt: string;
}

interface UserInfo {
  role: "STUDENT" | "PARENT" | "TEACHER" | "ADMIN" | "REVIEWER";
}

// ═══════════════════════════════════════════════════════════════════════
// Student View: "Invite a Parent"
// ═══════════════════════════════════════════════════════════════════════

function StudentView() {
  const { toast } = useToast();
  const [activeInvite, setActiveInvite] = useState<ActiveInvite | null>(null);
  const [linkedParents, setLinkedParents] = useState<LinkedParent[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [unlinking, setUnlinking] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const [inviteRes, linkRes] = await Promise.all([
        fetch("/api/parent/invite"),
        fetch("/api/parent/link"),
      ]);

      if (inviteRes.ok) {
        const inviteData = await inviteRes.json();
        setActiveInvite(inviteData.invite);
      }

      if (linkRes.ok) {
        const linkData = await linkRes.json();
        setLinkedParents(linkData.parents || []);
      }
    } catch {
      toast("error", "Failed to load parent linking data.");
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function handleGenerateInvite() {
    setGenerating(true);
    try {
      const res = await fetch("/api/parent/invite", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        toast("error", data.error || "Failed to generate invite.");
        return;
      }

      setActiveInvite({
        code: data.code,
        inviteUrl: data.inviteUrl,
        expiresAt: data.expiresAt,
        createdAt: new Date().toISOString(),
      });
      toast("success", "Invite code generated! Share it with your parent.");
    } catch {
      toast("error", "Something went wrong. Please try again.");
    } finally {
      setGenerating(false);
    }
  }

  async function handleCopyLink() {
    if (!activeInvite) return;
    try {
      await navigator.clipboard.writeText(activeInvite.inviteUrl);
      setCopied(true);
      toast("success", "Invite link copied to clipboard.");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast("error", "Failed to copy. Please copy the link manually.");
    }
  }

  async function handleCopyCode() {
    if (!activeInvite) return;
    try {
      await navigator.clipboard.writeText(activeInvite.code);
      setCopied(true);
      toast("success", "Invite code copied to clipboard.");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast("error", "Failed to copy. Please copy the code manually.");
    }
  }

  async function handleUnlinkParent(parentId: string) {
    setUnlinking(parentId);
    try {
      const res = await fetch("/api/parent/link", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: "self" }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast("error", data.error || "Failed to remove parent link.");
        return;
      }

      setLinkedParents((prev) => prev.filter((p) => p.id !== parentId));
      toast("success", "Parent link removed.");
    } catch {
      toast("error", "Something went wrong. Please try again.");
    } finally {
      setUnlinking(null);
    }
  }

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-48 rounded bg-gray-200" />
        <div className="h-32 w-full rounded bg-gray-100" />
        <div className="h-32 w-full rounded bg-gray-100" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Invite a Parent section */}
      <Card>
        <CardHeader>
          <CardTitle>Invite a Parent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Generate an invite link and share it with your parent or guardian.
              They will be able to view your progress reports and scores for free.
            </p>

            <Alert>
              <AlertDescription>
                Your parent will <strong>not</strong> be able to read your essays.
                They can only see scores, progress, and weekly summaries.
              </AlertDescription>
            </Alert>

            {activeInvite ? (
              <div className="space-y-4">
                <div className="rounded-lg border-2 border-dashed border-accent-200 bg-accent-50 p-4">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Your invite code
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <p className="text-2xl font-bold tracking-widest text-primary-600">
                      {activeInvite.code}
                    </p>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      {copied ? "Copied" : "Copy code"}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Expires:{" "}
                    {new Date(activeInvite.expiresAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm" onClick={handleCopyLink}>
                    Copy invite link
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateInvite}
                    disabled={generating}
                  >
                    {generating ? "Generating..." : "Generate new code"}
                  </Button>
                </div>

                <p className="text-xs text-gray-500">
                  Generating a new code will invalidate the current one.
                </p>
              </div>
            ) : (
              <Button onClick={handleGenerateInvite} disabled={generating}>
                {generating ? "Generating..." : "Generate invite link"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Linked Parents section */}
      <Card>
        <CardHeader>
          <CardTitle>Linked Parents</CardTitle>
        </CardHeader>
        <CardContent>
          {linkedParents.length === 0 ? (
            <p className="text-sm text-gray-500">
              No parent is currently linked to your account. Generate an invite
              above to get started.
            </p>
          ) : (
            <div className="space-y-3">
              {linkedParents.map((parent) => (
                <div
                  key={parent.id}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {parent.firstName} {parent.lastName}
                    </p>
                    <p className="text-xs text-gray-500">{parent.email}</p>
                    <p className="text-xs text-gray-500">
                      Linked{" "}
                      {new Date(parent.linkedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleUnlinkParent(parent.id)}
                    disabled={unlinking === parent.id}
                  >
                    {unlinking === parent.id ? "Removing..." : "Remove"}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Parent View: "Link to Student"
// ═══════════════════════════════════════════════════════════════════════

function ParentView() {
  const { toast } = useToast();
  const [inviteCode, setInviteCode] = useState("");
  const [linkedStudents, setLinkedStudents] = useState<LinkedStudent[]>([]);
  const [loading, setLoading] = useState(true);
  const [linking, setLinking] = useState(false);
  const [unlinking, setUnlinking] = useState<string | null>(null);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/parent/link");
      if (res.ok) {
        const data = await res.json();
        setLinkedStudents(data.students || []);
      }
    } catch {
      toast("error", "Failed to load linked students.");
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function handleLinkStudent(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!inviteCode.trim()) {
      setError("Please enter an invite code.");
      return;
    }

    setLinking(true);
    try {
      const res = await fetch("/api/parent/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteCode: inviteCode.trim().toUpperCase() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to link to student.");
        return;
      }

      toast(
        "success",
        `Successfully linked to ${data.student.firstName}'s account!`
      );
      setInviteCode("");
      fetchData(); // Refresh the list
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLinking(false);
    }
  }

  async function handleUnlinkStudent(studentId: string) {
    setUnlinking(studentId);
    try {
      const res = await fetch("/api/parent/link", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast("error", data.error || "Failed to remove link.");
        return;
      }

      setLinkedStudents((prev) => prev.filter((s) => s.id !== studentId));
      toast("success", "Student link removed.");
    } catch {
      toast("error", "Something went wrong. Please try again.");
    } finally {
      setUnlinking(null);
    }
  }

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-48 rounded bg-gray-200" />
        <div className="h-32 w-full rounded bg-gray-100" />
        <div className="h-32 w-full rounded bg-gray-100" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Link to Student section */}
      <Card>
        <CardHeader>
          <CardTitle>Link to Student</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Enter the invite code your child shared with you to link your
              accounts. This gives you free access to their progress reports.
            </p>

            <form onSubmit={handleLinkStudent} className="space-y-4">
              <div>
                <label
                  htmlFor="invite-code"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Invite code
                </label>
                <Input
                  id="invite-code"
                  placeholder="e.g. ABCD1234"
                  value={inviteCode}
                  onChange={(e) => {
                    setInviteCode(e.target.value.toUpperCase());
                    setError("");
                  }}
                  maxLength={20}
                  className="font-mono tracking-widest text-lg"
                  aria-invalid={!!error}
                />
                {error && (
                  <p className="mt-1 text-sm text-destructive">{error}</p>
                )}
              </div>
              <Button type="submit" disabled={linking || !inviteCode.trim()}>
                {linking ? "Linking..." : "Link to student"}
              </Button>
            </form>

            <p className="text-xs text-gray-500">
              Don&apos;t have a code? Ask your child to generate one from their account
              settings.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Linked Students section */}
      <Card>
        <CardHeader>
          <CardTitle>Linked Students</CardTitle>
        </CardHeader>
        <CardContent>
          {linkedStudents.length === 0 ? (
            <p className="text-sm text-gray-500">
              You are not linked to any students yet. Use an invite code above to
              get started.
            </p>
          ) : (
            <div className="space-y-3">
              {linkedStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-900">
                        {student.firstName} {student.lastName}
                      </p>
                      {student.hasActiveSubscription ? (
                        <span className="inline-flex items-center rounded-full bg-success-50 px-2 py-0.5 text-xs font-medium text-success-700">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700">
                          No subscription
                        </span>
                      )}
                    </div>
                    {student.school && (
                      <p className="text-xs text-gray-500">{student.school}</p>
                    )}
                    <p className="text-xs text-gray-500">
                      Linked{" "}
                      {new Date(student.linkedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleUnlinkStudent(student.id)}
                    disabled={unlinking === student.id}
                  >
                    {unlinking === student.id ? "Removing..." : "Remove"}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Unsupported Role View
// ═══════════════════════════════════════════════════════════════════════

function UnsupportedRoleView() {
  return (
    <Alert>
      <AlertDescription>
        Parent linking is only available for student and parent accounts.
      </AlertDescription>
    </Alert>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Main Content (inside ToastProvider)
// ═══════════════════════════════════════════════════════════════════════

function ParentLinkContent() {
  const { toast } = useToast();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user/profile");
        if (!res.ok) throw new Error("Failed to load profile");
        const data = await res.json();
        setUserInfo({ role: data.role || "STUDENT" });
      } catch {
        toast("error", "Failed to load your profile. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [toast]);

  if (loading) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded bg-gray-200" />
          <div className="h-4 w-64 rounded bg-gray-100" />
          <div className="mt-6 h-40 w-full rounded bg-gray-100" />
        </div>
      </div>
    );
  }

  const isStudent = userInfo?.role === "STUDENT";
  const isParent = userInfo?.role === "PARENT";

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
          <a
            href="/dashboard/settings"
            className="hover:text-accent-600 transition-colors"
          >
            Settings
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Parent Linking</span>
        </nav>
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">
          {isStudent ? "Invite a Parent" : isParent ? "Link to Student" : "Parent Linking"}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {isStudent
            ? "Connect your parent or guardian so they can track your progress."
            : isParent
              ? "Link to your child's account to monitor their study progress."
              : "Manage parent-student connections."}
        </p>
      </div>

      {isStudent ? (
        <StudentView />
      ) : isParent ? (
        <ParentView />
      ) : (
        <UnsupportedRoleView />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Page export
// ═══════════════════════════════════════════════════════════════════════

export default function ParentLinkPage() {
  return (
    <ToastProvider>
      <ParentLinkContent />
    </ToastProvider>
  );
}
