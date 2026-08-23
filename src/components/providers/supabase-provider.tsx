'use client'

import { useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuthActions } from '@/store/auth-store'
import { setMinorFlag } from '@/lib/posthog'
import type { Profile } from '@/lib/types'

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setProfile, setLoading, clear } = useAuthActions()
  const initialised = useRef(false)

  useEffect(() => {
    if (initialised.current) return
    initialised.current = true

    const supabase = createClient()

    async function fetchProfile(userId: string) {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()

      if (error) {
        console.error('Failed to fetch profile:', error.message)
        setProfile(null)
        return
      }

      const profile = data as Profile
      setProfile(profile)

      // Children's Code analytics gate. setMinorFlag() drives
      // canCaptureAnalytics() in lib/posthog, but nothing ever called it, so
      // 'eh-is-minor' was never set and every signed-in minor was tracked in
      // full - the profile-level analytics_opt_in=false written at
      // registration only governs server-side reads, not the client SDK.
      // This is the one place every authenticated session hydrates, so it is
      // the correct single call site. Explicitly clears the flag for
      // confirmed non-minors so a shared device cannot leave it stuck on.
      setMinorFlag(profile.is_minor === true)
    }

    // Get the initial user via getUser() which validates with the server,
    // unlike getSession() which reads from localStorage and can be stale/tampered.
    supabase.auth.getUser().then(({ data: { user }, error: userError }) => {
      if (userError) {
        // "Auth session missing" is expected for unauthenticated visitors on public pages
        if (!userError.message.includes('Auth session missing')) {
          console.error('Failed to get user:', userError.message)
        }
        setUser(null)
        setLoading(false)
        return
      }

      setUser(user ?? null)

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
        // Sign-out: drop the minor flag too, so a shared device does not carry
        // one account's child status into the next person's session.
        setMinorFlag(false)
        clear()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [setUser, setProfile, setLoading, clear])

  return <>{children}</>
}
