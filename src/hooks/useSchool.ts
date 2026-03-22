'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAuthUser } from '@/store/auth-store'
import { useSchoolData, useSchoolActions } from '@/store/school-store'
import type { School, Class, SchoolMember } from '@/lib/types'

interface UseSchoolReturn {
  school: School | null
  classes: Class[]
  members: SchoolMember[]
  role: 'admin' | 'head_of_department' | 'teacher' | null
  isLoading: boolean
  isSchoolMember: boolean
  error: string | null
  refetch: () => void
}

export function useSchool(): UseSchoolReturn {
  const user = useAuthUser()
  const { school, classes, members, role, isSchoolMember } = useSchoolData()
  const { setSchool, setClasses, setMembers, setRole, setIsSchoolMember } = useSchoolActions()

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSchoolData = useCallback(async () => {
    if (!user) {
      setIsLoading(false)
      return
    }

    try {
      setError(null)
      setIsLoading(true)

      const res = await fetch('/api/school/overview')

      if (res.status === 404) {
        // User is not a school member
        setSchool(null)
        setClasses([])
        setMembers([])
        setRole(null)
        setIsSchoolMember(false)
        return
      }

      if (!res.ok) {
        throw new Error('Failed to fetch school data')
      }

      const data = await res.json()

      setSchool(data.school ?? null)
      setClasses(data.classes ?? [])
      setMembers(data.members ?? [])
      setRole(data.role ?? null)
      setIsSchoolMember(true)
    } catch (err) {
      console.error('School fetch error:', err)
      setError('Failed to load school data. Please try again.')
      setIsSchoolMember(false)
    } finally {
      setIsLoading(false)
    }
  }, [user, setSchool, setClasses, setMembers, setRole, setIsSchoolMember])

  useEffect(() => {
    fetchSchoolData()
  }, [fetchSchoolData])

  return {
    school,
    classes,
    members,
    role,
    isLoading,
    isSchoolMember,
    error,
    refetch: fetchSchoolData,
  }
}
