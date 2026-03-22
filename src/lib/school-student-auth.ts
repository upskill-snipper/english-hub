import { createServiceRoleClient } from '@/lib/supabase/server'

/**
 * Verify that a student belongs to a school by checking if they are an active
 * member of any class within that school.
 *
 * Uses a single query with an inner join on classes to avoid the N+1 pattern
 * of fetching all class IDs first, then checking membership.
 */
export async function verifyStudentInSchool(studentId: string, schoolId: string): Promise<boolean> {
  const admin = createServiceRoleClient()

  const { data: classes } = await admin
    .from('classes')
    .select('id')
    .eq('school_id', schoolId)

  if (!classes || classes.length === 0) return false

  const classIds = classes.map((c: { id: string }) => c.id)
  const { data: membership } = await admin
    .from('class_students')
    .select('id')
    .in('class_id', classIds)
    .eq('student_id', studentId)
    .eq('is_active', true)
    .limit(1)

  return !!membership && membership.length > 0
}
