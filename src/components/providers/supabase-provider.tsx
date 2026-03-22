'use client'

import { useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import type { Profile } from '@/lib/types'

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setProfile, setLoading, clear } = useAuthStore()
  const initialised = useRef(false)

  useEffect(() => {
    if (initialised.current) return
    initialised.current = true

    const supabase = createClient()

    async function fetchProfile(userId: string) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Failed to fetch profile:', error.message)
        setProfile(null)
        return
      }

      setProfile(data as Profile)
    }

    // Get the initial session
    supabase.auth.getSession().then(({ data: { session }, error: sessionError }) => {
      if (sessionError) {
        console.error('Failed to get session:', sessionError.message)
        setLoading(false)
        return
      }

      const user = session?.user ?? null
      setUser(user)

      if (user) {
        fetchProfile(user.id).finally(() => setLoading(false))
      } else {
        setLoading(false)
      }
    })

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user ?? null
      setUser(user)

      if (user) {
        fetchProfile(user.id).finally(() => setLoading(false))
      } else {
        clear()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [setUser, setProfile, setLoading, clear])

  return <>{children}</>
}
