'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { SchoolSidebar } from './SchoolSidebar'
import type { School, SchoolMember, Class } from '@/lib/types'

export function SchoolLayoutClient({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore()
  const [school, setSchool] = useState<School | null>(null)
  const [member, setMember] = useState<SchoolMember | null>(null)
  const [classes, setClasses] = useState<Class[]>([])

  useEffect(() => {
    if (!user) return

    async function fetchSchoolData() {
      const supabase = createClient()

      // Get the school membership for the current user
      const { data: membership } = await supabase
        .from('school_members')
        .select('*')
        .eq('user_id', user!.id)
        .limit(1)
        .single()

      if (!membership?.school_id) return
      setMember(membership)

      // Fetch school and classes in parallel
      const [schoolRes, classesRes] = await Promise.all([
        supabase
          .from('schools')
          .select('*')
          .eq('id', membership.school_id)
          .single(),
        supabase
          .from('classes')
          .select('*')
          .eq('school_id', membership.school_id)
          .eq('is_active', true)
          .order('name'),
      ])

      if (schoolRes.data) setSchool(schoolRes.data)
      if (classesRes.data) setClasses(classesRes.data)
    }

    fetchSchoolData()
  }, [user])

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
      <SchoolSidebar school={school} member={member} classes={classes} />
      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  )
}
