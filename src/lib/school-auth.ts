import { createServiceRoleClient, createServerSupabaseClient } from '@/lib/supabase/server'
import { isSiteAdmin } from '@/lib/site-admin'

export class SchoolAuthError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message)
    this.name = 'SchoolAuthError'
  }
}

export async function verifySchoolMember(userId: string, requiredRoles?: string[]) {
  const supabase = createServiceRoleClient()

  const { data: member, error } = await supabase
    .from('school_members')
    .select('*, schools(*)')
    .eq('user_id', userId)
    .eq('invite_status', 'accepted')
    .single()

  if (error) {
    // PGRST116 = "no rows returned" from .single() -- not a member
    if (error.code === 'PGRST116') {
      // Site admins bypass school membership requirements
      const siteAdminMember = await _getSiteAdminSyntheticMember(userId)
      if (siteAdminMember) return siteAdminMember
      return null
    }
    // Any other error (network, multiple rows, etc.) should propagate
    throw new SchoolAuthError(
      `Failed to verify school membership: ${error.message}`,
      error.code
    )
  }

  if (!member) {
    const siteAdminMember = await _getSiteAdminSyntheticMember(userId)
    if (siteAdminMember) return siteAdminMember
    return null
  }
  if (requiredRoles && !requiredRoles.includes(member.role)) {
    // Site admins bypass role restrictions
    const siteAdminMember = await _getSiteAdminSyntheticMember(userId)
    if (siteAdminMember) return siteAdminMember
    return null
  }

  return member
}

/**
 * If the user is a site admin, returns a synthetic school member object
 * so they can access all school API endpoints.
 */
async function _getSiteAdminSyntheticMember(userId: string) {
  const anonClient = createServerSupabaseClient()
  const { data: { user } } = await anonClient.auth.getUser()
  if (!user || user.id !== userId) return null
  if (!isSiteAdmin(user.email)) return null

  return {
    id: `site-admin-${userId}`,
    user_id: userId,
    school_id: '__site_admin__',
    role: 'admin',
    invite_status: 'accepted',
    schools: {
      id: '__site_admin__',
      name: 'Site Admin (All Schools)',
      access_type: 'founder',
      access_until: null,
      subscription_status: 'active',
    },
  }
}

export async function getSchoolForMember(userId: string) {
  const member = await verifySchoolMember(userId)
  if (!member) return null
  return { member, school: member.schools }
}

export async function getClassesForTeacher(schoolId: string, teacherId: string) {
  const supabase = createServiceRoleClient()

  const { data: classes } = await supabase
    .from('classes')
    .select('*')
    .eq('school_id', schoolId)
    .eq('teacher_id', teacherId)
    .eq('is_active', true)
    .order('name')

  return classes || []
}
