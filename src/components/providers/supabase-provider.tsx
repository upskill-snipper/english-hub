'use client'

import { useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuthActions } from '@/store/auth-store'
import { setAgeAssurance, clearAgeAssurance } from '@/lib/posthog'
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

      // Children's Code analytics gate. This drives canCaptureAnalytics() in
      // lib/posthog, and it is the one place every authenticated session
      // hydrates, so it is the correct single call site.
      //
      // WHY THIS IS THREE STATES AND NOT A BOOLEAN (19 September 2026). It
      // used to pass `profile.is_minor === true`. That column is NOT NULL
      // DEFAULT false, and production held 209 profiles of which 209 had a
      // NULL date_of_birth and is_minor false - so on a product whose users
      // are children, every signed-in account was reported to the gate as an
      // adult, and any of them who accepted analytics cookies was captured
      // and identified.
      //
      // An account with no date of birth on record is 'unknown', not 'adult'.
      // An unverified age is not an adult age.
      setAgeAssurance(
        profile.is_minor === true ? 'minor' : profile.date_of_birth ? 'adult' : 'unknown',
      )
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
        // Sign-out: drop the flag entirely, so a shared device does not carry
        // one account's age status into the next person's session. Cleared
        // rather than set to 'adult' - nobody is signed in, so there is no
        // age to assert.
        clearAgeAssurance()
        clear()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [setUser, setProfile, setLoading, clear])

  return <>{children}</>
}
