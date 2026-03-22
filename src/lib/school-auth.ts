import { createServiceRoleClient } from '@/lib/supabase/server'

export async function verifySchoolMember(userId: string, requiredRoles?: string[]) {
  const supabase = createServiceRoleClient()

  const { data: member } = await supabase
    .from('school_members')
    .select('*, schools(*)')
    .eq('user_id', userId)
    .eq('invite_status', 'accepted')
    .single()

  if (!member) return null
  if (requiredRoles && !requiredRoles.includes(member.role)) return null

  return member
}

export async function getSchoolForMember(userId: string) {
  const supabase = createServiceRoleClient()

  const { data: member } = await supabase
    .from('school_members')
    .select('*, schools(*)')
    .eq('user_id', userId)
    .eq('invite_status', 'accepted')
    .single()

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
