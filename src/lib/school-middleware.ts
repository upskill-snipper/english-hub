// Helper for checking school access in server components and route handlers.
// Returns whether a school's access is currently active.

import { createServerSupabaseClient, createServiceRoleClient } from "./supabase/server"
import { isSiteAdmin } from "./site-admin"

// ---------------------------------------------------------------------------
// Error type
// ---------------------------------------------------------------------------

export class SchoolAccessError extends Error {
  constructor(
    message: string,
    public readonly code: "UNAUTHENTICATED" | "NOT_SCHOOL_ADMIN" | "SCHOOL_NOT_FOUND" | "ACCESS_EXPIRED"
  ) {
    super(message)
    this.name = "SchoolAccessError"
  }
}

// ---------------------------------------------------------------------------
// requireSchoolAdmin
// Gets the current authenticated user, verifies they are a school admin,
// and returns user + school context. Throws SchoolAccessError on failure.
// ---------------------------------------------------------------------------

export async function requireSchoolAdmin(): Promise<{
  user: { id: string; email: string | undefined }
  schoolId: string
  schoolName: string
  accessInfo: {
    isActive: boolean
    accessType: "founder" | "paid" | "trial" | "expired"
    accessUntil: string | null
    daysRemaining: number | null
  }
}> {
  // 1. Get the authenticated user via the anon client (respects the session cookie)
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    throw new SchoolAccessError("You must be logged in to access this area.", "UNAUTHENTICATED")
  }

  // 2. Look up their school_members row — must be accepted and an admin role
  const admin = createServiceRoleClient()
  const { data: member, error: memberError } = await admin
    .from("school_members")
    .select("school_id, role, schools(id, name, access_type, access_until, subscription_status)")
    .eq("user_id", user.id)
    .eq("invite_status", "accepted")
    .in("role", ["admin", "head_of_department"])
    .single()

  // Site admins bypass school membership requirements
  if ((memberError || !member) && isSiteAdmin(user.email)) {
    return {
      user: { id: user.id, email: user.email },
      schoolId: "__site_admin__",
      schoolName: "Site Admin (All Schools)",
      accessInfo: {
        isActive: true,
        accessType: "founder",
        accessUntil: null,
        daysRemaining: null,
      },
    }
  }

  if (memberError || !member) {
    throw new SchoolAccessError(
      "You do not have school admin access. Please contact your school administrator.",
      "NOT_SCHOOL_ADMIN"
    )
  }

  // 3. Extract the nested school record
  const school = (
    member as unknown as {
      schools: {
        id: string
        name: string
        access_type: string | null
        access_until: string | null
        subscription_status: string | null
      }
    }
  ).schools

  if (!school) {
    throw new SchoolAccessError(
      "Your school record could not be found. Please contact support.",
      "SCHOOL_NOT_FOUND"
    )
  }

  // 4. Derive canonical access info
  const accessInfo = await checkSchoolAccess(school.id)

  return {
    user: { id: user.id, email: user.email },
    schoolId: school.id,
    schoolName: school.name,
    accessInfo,
  }
}

// ---------------------------------------------------------------------------
// checkSchoolAccess
// Queries the schools table directly by ID and returns the current access
// status. Safe to call from both server components and route handlers.
// ---------------------------------------------------------------------------

export async function checkSchoolAccess(schoolId: string): Promise<{
  isActive: boolean
  accessType: "founder" | "paid" | "trial" | "expired"
  accessUntil: string | null
  daysRemaining: number | null
}> {
  const admin = createServiceRoleClient()

  const { data: school, error } = await admin
    .from("schools")
    .select("access_type, access_until, subscription_status")
    .eq("id", schoolId)
    .single()

  if (error || !school) {
    return {
      isActive: false,
      accessType: "expired",
      accessUntil: null,
      daysRemaining: null,
    }
  }

  const rawAccessType: string = school.access_type ?? school.subscription_status ?? "standard"
  const accessUntil: string | null = school.access_until ?? null

  // Derive a canonical accessType
  let accessType: "founder" | "paid" | "trial" | "expired"

  if (rawAccessType === "founder") {
    // Founder access expires at the canonical date (2026-08-31) unless
    // overridden by an explicit access_until that is already past.
    const expiryDate = accessUntil ? new Date(accessUntil) : new Date("2026-08-31")
    accessType = expiryDate >= new Date() ? "founder" : "expired"
  } else if (rawAccessType === "trialing") {
    const expired = accessUntil ? new Date(accessUntil) < new Date() : false
    accessType = expired ? "expired" : "trial"
  } else if (rawAccessType === "active" || rawAccessType === "standard") {
    const expired = accessUntil ? new Date(accessUntil) < new Date() : false
    accessType = expired ? "expired" : "paid"
  } else {
    // cancelled, expired, or any unknown value
    accessType = "expired"
  }

  const isActive = accessType !== "expired"

  // Days remaining — only meaningful when there is an explicit expiry date
  let daysRemaining: number | null = null
  if (accessUntil) {
    const msRemaining = new Date(accessUntil).getTime() - Date.now()
    daysRemaining = Math.max(0, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)))
  } else if (accessType === "founder") {
    // Fall back to the canonical founder expiry
    daysRemaining = getFounderDaysRemaining()
  }

  return { isActive, accessType, accessUntil, daysRemaining }
}

// ---------------------------------------------------------------------------
// getFounderDaysRemaining
// Pure utility — returns calendar days until the founder access expiry date.
// ---------------------------------------------------------------------------

export function getFounderDaysRemaining(): number {
  const expiry = new Date("2026-08-31")
  const today = new Date()
  const diff = expiry.getTime() - today.getTime()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}
