import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import type { Profile } from '@/lib/types'
import type { User } from '@supabase/supabase-js'

interface AuthState {
  user: User | null
  profile: Profile | null
  isLoading: boolean
  setUser: (user: User | null) => void
  setProfile: (profile: Profile | null) => void
  setLoading: (loading: boolean) => void
  clear: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  profile: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  setLoading: (isLoading) => set({ isLoading }),
  clear: () => set({ user: null, profile: null, isLoading: false }),
}))

// ── Optimized selectors ─────────────────────────────────────────────────────
// Use these instead of `useAuthStore()` to avoid unnecessary re-renders.

/** Select only the user object */
export const useAuthUser = () => useAuthStore((s) => s.user)

/** Select only the profile object */
export const useAuthProfile = () => useAuthStore((s) => s.profile)

/** Select only the loading flag */
export const useAuthLoading = () => useAuthStore((s) => s.isLoading)

/** Select user + profile (shallow-compared) */
export const useAuthUserProfile = () =>
  useAuthStore(useShallow((s) => ({ user: s.user, profile: s.profile })))

/** Select user + loading (shallow-compared) */
export const useAuthUserLoading = () =>
  useAuthStore(useShallow((s) => ({ user: s.user, isLoading: s.isLoading })))

/** Select user + profile + loading (shallow-compared) */
export const useAuthAll = () =>
  useAuthStore(
    useShallow((s) => ({ user: s.user, profile: s.profile, isLoading: s.isLoading }))
  )

/** Select only the user's role */
export const useAuthRole = () => useAuthStore((s) => s.profile?.role ?? 'student')

/** Check if user is a teacher */
export const useIsTeacher = () => useAuthStore((s) => s.profile?.role === 'teacher' || s.profile?.role === 'admin')

/** Select only the action functions (stable references, never cause re-renders) */
export const useAuthActions = () =>
  useAuthStore(
    useShallow((s) => ({
      setUser: s.setUser,
      setProfile: s.setProfile,
      setLoading: s.setLoading,
      clear: s.clear,
    }))
  )
