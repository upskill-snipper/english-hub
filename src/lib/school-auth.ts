import { createServiceRoleClient } from '@/lib/supabase/server'

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
    if (error.code === 'PGRST116') return null
    // Any other error (network, multiple rows, etc.) should propagate
    throw new SchoolAuthError(
      `Failed to verify school membership: ${error.message}`,
      error.code
    )
  }

  if (!member) return null
  if (requiredRoles && !requiredRoles.includes(member.role)) return null

  return member
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
