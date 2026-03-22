import { create } from 'zustand'
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
