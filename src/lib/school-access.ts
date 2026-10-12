import { createServerSupabaseClient, createServiceRoleClient } from './supabase/server'
import { isSiteAdmin } from './site-admin'

export type SchoolAccessStatus = 'active' | 'expired' | 'not_found' | 'trial'

export interface SchoolAccess {
  schoolId: string
  schoolName: string
  accessType: 'founder' | 'paid' | 'trial' | 'expired'
  accessUntil: string | null
  isActive: boolean
  daysRemaining: number | null
  userRole: 'admin' | 'head_of_department' | 'teacher' | 'student'
}

// ---------------------------------------------------------------------------
// getSchoolAccess
// Returns full access info for the given user, or null if they have no school.
// Checks school_members (staff + students via role column).
// ---------------------------------------------------------------------------

export async function getSchoolAccess(
  userId: string,
  userEmail?: string,
): Promise<SchoolAccess | null> {
  const admin = createServiceRoleClient()

  // Find the user's school_members row (covers admins, teachers, and students)
  const { data: member, error: memberError } = await admin
    .from('school_members')
    .select('school_id, role, schools(id, name, access_type, access_until, subscription_status)')
    .eq('user_id', userId)
    .eq('invite_status', 'accepted')
    .single()

  // Site admins get synthetic full access even without a school_members row
  if ((memberError || !member) && isSiteAdmin(userEmail)) {
    return {
      schoolId: '__site_admin__',
      schoolName: 'Site Admin (All Schools)',
      accessType: 'founder',
      accessUntil: null,
      isActive: true,
      daysRemaining: null,
      userRole: 'admin',
    }
  }

  if (memberError || !member) return null

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

  if (!school) return null

  const accessUntil: string | null = school.access_until ?? null
  const role = member.role as 'admin' | 'head_of_department' | 'teacher' | 'student'

  const accessType = resolveSchoolAccessType(school)
  const isActive = accessType !== 'expired'

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
// resolveSchoolAccessType / isSchoolAccessActive
// THE rule for whether a school's access is live. Pure, so that the portal
// gate, a pupil's entitlement check and anything else asking "is this school
// active?" share one answer. Do not write a second copy of it.
//
// A DEFECT, FIXED 12 OCTOBER 2026. The schools.access_type CHECK allows
// trial, founder, paid and expired, and the column defaults to 'trial', which
// is also what /api/school/register writes for every school provisioned
// without the FOUNDER code. The old mapping recognised only founder,
// trialing, active and standard, so 'trial' and 'paid' fell through to
// 'expired' and every provisioned school was locked out of its own portal
// ("You do not have access to the school portal"). Production held no
// schools, so nobody had seen it. checkSchoolAccessActive carried a second,
// different copy of the rule (it honoured access_until on paid plans, the
// gate did not); both now call this one.
//
// access_until ends access for every type, not only founder. A value that
// does not parse as a date counts as lapsed: fail closed.
// ---------------------------------------------------------------------------

export interface SchoolAccessRow {
  access_type: string | null
  access_until: string | null
  subscription_status: string | null
}

export function resolveSchoolAccessType(
  school: SchoolAccessRow,
  now: Date = new Date(),
): SchoolAccess['accessType'] {
  const raw = school.access_type ?? school.subscription_status ?? 'standard'
  const until = school.access_until ? new Date(school.access_until) : null
  const lapsed = until !== null && (Number.isNaN(until.getTime()) || until < now)

  switch (raw) {
    case 'founder':
      return lapsed ? 'expired' : 'founder'
    case 'paid':
    case 'active':
    case 'standard':
      return lapsed ? 'expired' : 'paid'
    case 'trial':
    case 'trialing':
      return lapsed ? 'expired' : 'trial'
    default:
      // expired, cancelled, past_due, or anything unrecognised.
      return 'expired'
  }
}

export function isSchoolAccessActive(school: SchoolAccessRow, now: Date = new Date()): boolean {
  return resolveSchoolAccessType(school, now) !== 'expired'
}

// ---------------------------------------------------------------------------
// checkSchoolAccessActive
// Returns true if the school currently has valid access.
// ---------------------------------------------------------------------------

export async function checkSchoolAccessActive(schoolId: string): Promise<boolean> {
  const admin = createServiceRoleClient()

  const { data: school, error } = await admin
    .from('schools')
    .select('access_type, access_until, subscription_status')
    .eq('id', schoolId)
    .single()

  if (error || !school) return false

  return isSchoolAccessActive(school as SchoolAccessRow)
}

// ---------------------------------------------------------------------------
// getSchoolForUser
// Lightweight lookup: returns school ID and role for a user.
// Checks school_members which covers admins, teachers, and students.
// ---------------------------------------------------------------------------

export async function getSchoolForUser(
  userId: string,
): Promise<{ schoolId: string; role: string } | null> {
  const admin = createServiceRoleClient()

  const { data: member, error } = await admin
    .from('school_members')
    .select('school_id, role')
    .eq('user_id', userId)
    .eq('invite_status', 'accepted')
    .single()

  if (error || !member) return null

  return {
    schoolId: member.school_id as string,
    role: member.role as string,
  }
}

// ---------------------------------------------------------------------------
// requireSchoolAdmin
// Server-side guard for ADMIN-ONLY school surfaces (billing, users,
// permissions, import, settings, join-codes). The /school layout now admits
// teachers as well, so any page or route that must stay admin/HoD-only
// calls this and treats null as "render the 403 state / return 403".
//
// Pass adminOnly: true to restrict to the 'admin' role alone; the default
// also admits head_of_department, matching the pre-existing per-page gates.
// ---------------------------------------------------------------------------

export async function requireSchoolAdmin(options?: {
  adminOnly?: boolean
}): Promise<SchoolAccess | null> {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const access = await getSchoolAccess(user.id, user.email ?? undefined)
  if (!access || !access.isActive) return null

  const allowed: SchoolAccess['userRole'][] = options?.adminOnly
    ? ['admin']
    : ['admin', 'head_of_department']

  return allowed.includes(access.userRole) ? access : null
}

// ---------------------------------------------------------------------------
// isFounderAccessExpired
// Pure utility: returns true if the given accessUntil date is in the past.
// ---------------------------------------------------------------------------

export function isFounderAccessExpired(accessUntil: string | null): boolean {
  if (!accessUntil) return false
  return new Date(accessUntil) < new Date()
}
