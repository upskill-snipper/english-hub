import { createServerSupabaseClient, createServiceRoleClient } from "./supabase/server"

export type SchoolAccessStatus = "active" | "expired" | "not_found" | "trial"

export interface SchoolAccess {
  schoolId: string
  schoolName: string
  accessType: "founder" | "paid" | "trial" | "expired"
  accessUntil: string | null
  isActive: boolean
  daysRemaining: number | null
  userRole: "admin" | "head_of_department" | "teacher" | "student"
}

// ---------------------------------------------------------------------------
// getSchoolAccess
// Returns full access info for the given user, or null if they have no school.
// Checks school_members (staff + students via role column).
// ---------------------------------------------------------------------------

export async function getSchoolAccess(userId: string): Promise<SchoolAccess | null> {
  const admin = createServiceRoleClient()

  // Find the user's school_members row (covers admins, teachers, and students)
  const { data: member, error: memberError } = await admin
    .from("school_members")
    .select("school_id, role, schools(id, name, access_type, access_until, subscription_status)")
    .eq("user_id", userId)
    .eq("invite_status", "accepted")
    .single()

  if (memberError || !member) return null

  const school = (member as unknown as {
    schools: {
      id: string
      name: string
      access_type: string | null
      access_until: string | null
      subscription_status: string | null
    }
  }).schools

  if (!school) return null

  const rawAccessType = school.access_type ?? school.subscription_status ?? "standard"
  const accessUntil: string | null = school.access_until ?? null
  const role = member.role as "admin" | "head_of_department" | "teacher" | "student"

  // Derive a canonical accessType
  let accessType: "founder" | "paid" | "trial" | "expired"
  if (rawAccessType === "founder") {
    accessType = isFounderAccessExpired(accessUntil) ? "expired" : "founder"
  } else if (rawAccessType === "trialing") {
    accessType = "trial"
  } else if (rawAccessType === "active" || rawAccessType === "standard") {
    accessType = "paid"
  } else {
    // expired, cancelled, etc.
    accessType = "expired"
  }

  const isActive = accessType !== "expired"

  // Calculate days remaining
  let daysRemaining: number | null = null
  if (accessUntil) {
    const msRemaining = new Date(accessUntil).getTime() - Date.now()
    daysRemaining = Math.max(0, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)))
  }

  return {
    schoolId: school.id,
    schoolName: school.name,
    accessType,
    accessUntil,
    isActive,
    daysRemaining,
    userRole: role,
  }
}

// ---------------------------------------------------------------------------
// checkSchoolAccessActive
// Returns true if the school currently has valid access.
// FOUNDER access expires 2026-08-31.
// ---------------------------------------------------------------------------

export async function checkSchoolAccessActive(schoolId: string): Promise<boolean> {
  const admin = createServiceRoleClient()

  const { data: school, error } = await admin
    .from("schools")
    .select("access_type, access_until, subscription_status")
    .eq("id", schoolId)
    .single()

  if (error || !school) return false

  const rawAccessType = school.access_type ?? school.subscription_status ?? "standard"
  const accessUntil: string | null = school.access_until ?? null

  if (rawAccessType === "founder") {
    return !isFounderAccessExpired(accessUntil)
  }

  if (rawAccessType === "active" || rawAccessType === "standard") {
    // Paid plan — active if no expiry set, or expiry is in the future
    if (!accessUntil) return true
    return new Date(accessUntil) >= new Date()
  }

  if (rawAccessType === "trialing") {
    if (!accessUntil) return true
    return new Date(accessUntil) >= new Date()
  }

  // expired, cancelled, or unknown
  return false
}

// ---------------------------------------------------------------------------
// getSchoolForUser
// Lightweight lookup: returns school ID and role for a user.
// Checks school_members which covers admins, teachers, and students.
// ---------------------------------------------------------------------------

export async function getSchoolForUser(userId: string): Promise<{ schoolId: string; role: string } | null> {
  const admin = createServiceRoleClient()

  const { data: member, error } = await admin
    .from("school_members")
    .select("school_id, role")
    .eq("user_id", userId)
    .eq("invite_status", "accepted")
    .single()

  if (error || !member) return null

  return {
    schoolId: member.school_id as string,
    role: member.role as string,
  }
}

// ---------------------------------------------------------------------------
// isFounderAccessExpired
// Pure utility: returns true if the given accessUntil date is in the past.
// ---------------------------------------------------------------------------

export function isFounderAccessExpired(accessUntil: string | null): boolean {
  if (!accessUntil) return false
  return new Date(accessUntil) < new Date()
}
