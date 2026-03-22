import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import type { School, Class, SchoolMember } from '@/lib/types'

interface SchoolState {
  school: School | null
  currentClass: Class | null
  classes: Class[]
  members: SchoolMember[]
  role: 'admin' | 'head_of_department' | 'teacher' | null
  isSchoolMember: boolean

  setSchool: (school: School | null) => void
  setCurrentClass: (cls: Class | null) => void
  setClasses: (classes: Class[]) => void
  setMembers: (members: SchoolMember[]) => void
  setRole: (role: 'admin' | 'head_of_department' | 'teacher' | null) => void
  setIsSchoolMember: (v: boolean) => void
  clear: () => void
}

export const useSchoolStore = create<SchoolState>((set) => ({
  school: null,
  currentClass: null,
  classes: [],
  members: [],
  role: null,
  isSchoolMember: false,

  setSchool: (school) => set({ school }),
  setCurrentClass: (cls) => set({ currentClass: cls }),
  setClasses: (classes) => set({ classes }),
  setMembers: (members) => set({ members }),
  setRole: (role) => set({ role }),
  setIsSchoolMember: (v) => set({ isSchoolMember: v }),
  clear: () =>
    set({
      school: null,
      currentClass: null,
      classes: [],
      members: [],
      role: null,
      isSchoolMember: false,
    }),
}))

// ── Optimized selectors ─────────────────────────────────────────────────────

/** Select school data + role (shallow-compared) */
export const useSchoolData = () =>
  useSchoolStore(
    useShallow((s) => ({
      school: s.school,
      classes: s.classes,
      members: s.members,
      role: s.role,
      isSchoolMember: s.isSchoolMember,
    }))
  )

/** Select only the role */
export const useSchoolRole = () => useSchoolStore((s) => s.role)

/** Select only school membership flag */
export const useIsSchoolMember = () => useSchoolStore((s) => s.isSchoolMember)

/** Select school actions (stable references) */
export const useSchoolActions = () =>
  useSchoolStore(
    useShallow((s) => ({
      setSchool: s.setSchool,
      setCurrentClass: s.setCurrentClass,
      setClasses: s.setClasses,
      setMembers: s.setMembers,
      setRole: s.setRole,
      setIsSchoolMember: s.setIsSchoolMember,
      clear: s.clear,
    }))
  )
