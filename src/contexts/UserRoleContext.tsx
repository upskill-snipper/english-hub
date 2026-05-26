'use client'

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'

// ─── Types ──────────────────────────────────────────────────────────────

export type UserRole = 'STUDENT' | 'TEACHER' | 'PARENT'

interface LinkedStudent {
  id: string
  firstName: string
  lastName: string
  email: string
}

interface UserRoleContextValue {
  role: UserRole
  isStudent: boolean
  isTeacher: boolean
  isParent: boolean
  linkedStudents: LinkedStudent[]
}

// ─── Context ────────────────────────────────────────────────────────────

const UserRoleContext = createContext<UserRoleContextValue | undefined>(undefined)

// ─── Provider ───────────────────────────────────────────────────────────

interface UserRoleProviderProps {
  children: React.ReactNode
}

export function UserRoleProvider({ children }: UserRoleProviderProps) {
  const [role, setRole] = useState<UserRole>('STUDENT')
  const [linkedStudents, setLinkedStudents] = useState<LinkedStudent[]>([])

  // Fetch role and linked students from the user's profile on mount
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch('/api/user/profile')
        if (!res.ok) return

        const data = await res.json()

        if (data.role && isValidRole(data.role)) {
          setRole(data.role as UserRole)
        }

        if (Array.isArray(data.linkedStudents)) {
          setLinkedStudents(data.linkedStudents)
        }
      } catch {
        // Profile fetch failed - default to STUDENT
      }
    }

    fetchProfile()
  }, [])

  const value = useMemo<UserRoleContextValue>(
    () => ({
      role,
      isStudent: role === 'STUDENT',
      isTeacher: role === 'TEACHER',
      isParent: role === 'PARENT',
      linkedStudents,
    }),
    [role, linkedStudents],
  )

  return <UserRoleContext.Provider value={value}>{children}</UserRoleContext.Provider>
}

// ─── Hook ───────────────────────────────────────────────────────────────

export function useUserRole(): UserRoleContextValue {
  const ctx = useContext(UserRoleContext)
  if (!ctx) {
    throw new Error('useUserRole must be used within a <UserRoleProvider>')
  }
  return ctx
}

// ─── Helpers ────────────────────────────────────────────────────────────

function isValidRole(value: string): value is UserRole {
  return ['STUDENT', 'TEACHER', 'PARENT'].includes(value)
}
