'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { SchoolSidebar } from './SchoolSidebar'
import type { School } from '@/lib/types'

export function SchoolLayoutClient({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore()
  const [school, setSchool] = useState<School | null>(null)

  useEffect(() => {
    if (!user) return

    async function fetchSchool() {
      const supabase = createClient()
      // Get the school the current user belongs to via school_members
      const { data: membership } = await supabase
        .from('school_members')
        .select('school_id')
        .eq('user_id', user!.id)
        .limit(1)
        .single()

      if (!membership?.school_id) return

      const { data } = await supabase
        .from('schools')
        .select('*')
        .eq('id', membership.school_id)
        .single()

      if (data) setSchool(data)
    }

    fetchSchool()
  }, [user])

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
      <SchoolSidebar school={school} />
      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  )
}
