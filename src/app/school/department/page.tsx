'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth-store'
import { useSchool } from '@/hooks/useSchool'
import { Loader2, ShieldAlert } from 'lucide-react'
import { DepartmentOverview } from '@/components/school/DepartmentOverview'

export default function DepartmentPage() {
  const router = useRouter()
  const { user, isLoading: authLoading } = useAuthStore()
  const { school, classes, members, role, isLoading: schoolLoading } = useSchool()

  // ── Auth guard ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!authLoading && !user) {
      window.location.href =
        '/auth/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
  }, [authLoading, user])

  // ── Role guard ──────────────────────────────────────────────────────
  const allowed = role === 'admin' || role === 'head_of_department'

  if (authLoading || schoolLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!allowed) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <ShieldAlert className="h-12 w-12 text-muted-foreground" />
        <div>
          <h2 className="text-lg font-semibold text-foreground">Access Denied</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            This page is only available to department heads and school administrators.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-4 lg:p-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Department Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of department performance, teacher comparisons, and areas for support.
        </p>
      </div>

      <DepartmentOverview
        school={school}
        classes={classes}
        members={members}
      />
    </div>
  )
}
